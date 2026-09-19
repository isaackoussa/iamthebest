// Rappel des rendez-vous du calendrier admin, par notification push.
//
// Planifiée deux fois par jour (voir netlify.toml, "0 10,19 * * *") :
//   - le matin à 10h : les rendez-vous du JOUR MÊME
//   - le soir à 19h  : ceux du LENDEMAIN (l'alerte « la veille »)
//
// Abidjan est à UTC+0 et Netlify exécute en UTC : les dates coïncident,
// aucune conversion de fuseau n'est nécessaire.

const webpush = require('web-push');
const { openStore, describeBlobsError } = require('./lib/store.js');

const CALENDAR_KEY = '__calendar__';
const PUSH_KEY = '__push_subscriptions__';

function fail(message) {
  console.error('[rappel] ' + message);
  return { statusCode: 500, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ error: message }) };
}

// AAAA-MM-JJ pour aujourd'hui + n jours.
function isoDay(offset) {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() + (offset || 0));
  return d.toISOString().slice(0, 10);
}

function frDate(iso) {
  const [y, m, d] = iso.split('-');
  return `${d}/${m}/${y}`;
}

// Construit le texte de la notification à partir des rendez-vous concernés.
function buildMessage(events, when) {
  const lignes = events.map(e => (e.time ? e.time + ' — ' : '') + e.title);
  const titre = when === 'today'
    ? (events.length === 1 ? 'Rendez-vous aujourd’hui' : `${events.length} rendez-vous aujourd’hui`)
    : (events.length === 1 ? 'Rendez-vous demain' : `${events.length} rendez-vous demain`);
  return { title: '📅 ' + titre, body: lignes.join('\n').slice(0, 300) };
}

exports.handler = async () => {
  const vapidPublicKey = process.env.VAPID_PUBLIC_KEY;
  const vapidPrivateKey = process.env.VAPID_PRIVATE_KEY;
  if (!vapidPublicKey || !vapidPrivateKey) {
    return fail("VAPID_PUBLIC_KEY ou VAPID_PRIVATE_KEY manquante : les rappels ne peuvent pas être envoyés.");
  }

  const opened = openStore();
  if (!opened.ok) return fail(opened.error);
  const store = opened.store;

  // Avant midi = rappel du jour ; après = alerte de la veille pour demain.
  const hour = new Date().getUTCHours();
  const when = hour < 12 ? 'today' : 'tomorrow';
  const targetDay = when === 'today' ? isoDay(0) : isoDay(1);

  let events, subs;
  try {
    events = (await store.get(CALENDAR_KEY, { type: 'json' })) || [];
    subs = (await store.get(PUSH_KEY, { type: 'json' })) || [];
  } catch (e) {
    return fail('Lecture du calendrier impossible. ' + describeBlobsError(e));
  }

  const due = events.filter(e => e && e.date === targetDay);
  if (!due.length) {
    console.log(`[rappel] ${when === 'today' ? 'Aujourd’hui' : 'Demain'} (${frDate(targetDay)}) : aucun rendez-vous.`);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ when, day: targetDay, due: 0, sent: 0 }) };
  }
  if (!subs.length) {
    console.log(`[rappel] ${due.length} rendez-vous le ${frDate(targetDay)}, mais aucun appareil abonné : rien à envoyer.`);
    return { statusCode: 200, headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ when, day: targetDay, due: due.length, sent: 0, subscribers: 0 }) };
  }

  try {
    webpush.setVapidDetails('mailto:' + (process.env.ADMIN_EMAIL || 'admin@iamthebest.app'), vapidPublicKey, vapidPrivateKey);
  } catch (e) {
    return fail('Clés VAPID invalides : ' + (e && e.message ? e.message : String(e)));
  }

  const msg = buildMessage(due, when);
  const payload = JSON.stringify({ title: msg.title, body: msg.body, url: '#/admin' });

  let sent = 0, removed = 0, failed = 0;
  const survivors = [];

  for (const sub of subs) {
    try {
      await webpush.sendNotification(sub, payload);
      sent++;
      survivors.push(sub);
    } catch (e) {
      // 404/410 : l'appareil a désinstallé l'appli ou révoqué l'autorisation.
      if (e && (e.statusCode === 404 || e.statusCode === 410)) {
        removed++;
      } else {
        failed++;
        survivors.push(sub);   // panne passagère : on garde l'abonnement
        console.error('[rappel] Envoi échoué : ' + (e && e.message ? e.message : String(e)));
      }
    }
  }

  if (removed) {
    try { await store.setJSON(PUSH_KEY, survivors); }
    catch (e) { console.error('[rappel] Nettoyage des abonnements impossible : ' + describeBlobsError(e)); }
  }

  console.log(`[rappel] ${frDate(targetDay)} — ${due.length} rendez-vous, envoyés: ${sent}, abonnements expirés retirés: ${removed}, échecs: ${failed}`);
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ when, day: targetDay, due: due.length, sent, removed, failed })
  };
};
