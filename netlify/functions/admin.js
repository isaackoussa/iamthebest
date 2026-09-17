// Console d'administration — accès protégé par un code côté serveur.
//
// Le code n'est JAMAIS dans le code de la page : il est stocké dans la variable
// d'environnement ADMIN_CODE sur Netlify, et vérifié ici. Aucune donnée d'élève
// ne quitte le serveur sans un code valide.
//
// GET  /api/admin            -> renvoie uniquement les corrections de contenu
//                               (leçons/quiz modifiés par l'admin). Public :
//                               c'est le contenu des cours, que tous les élèves
//                               doivent recevoir. Aucune donnée personnelle.
// POST /api/admin { code, action, ... } -> toutes les autres actions.

const crypto = require("crypto");
const { getStore } = require("@netlify/blobs");

// Clé réservée dans le store : ne peut pas entrer en conflit avec un email.
const CONTENT_KEY = "__content_overrides__";

function openStore() {
  const siteID = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN;
  if (siteID && token) {
    return getStore({ name: "imthebest-progress", siteID, token });
  }
  return getStore("imthebest-progress");
}

function json(statusCode, body) {
  return { statusCode, headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) };
}

// Comparaison à temps constant : évite de laisser deviner le code
// caractère par caractère en mesurant le temps de réponse.
function sameSecret(a, b) {
  const ba = Buffer.from(String(a));
  const bb = Buffer.from(String(b));
  if (ba.length !== bb.length) return false;
  try { return crypto.timingSafeEqual(ba, bb); } catch (e) { return false; }
}

const sleep = ms => new Promise(r => setTimeout(r, ms));

// Le contenu saisi par l'admin est réinjecté en HTML dans l'appli de l'élève :
// on retire donc tout ce qui pourrait exécuter du code.
function sanitizeHtml(s) {
  if (typeof s !== "string") return "";
  return s
    .replace(/<\s*script[\s\S]*?<\s*\/\s*script\s*>/gi, "")
    .replace(/<\s*\/?\s*(script|iframe|object|embed|link|meta|style|form)\b[^>]*>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "")
    .replace(/javascript\s*:/gi, "")
    .slice(0, 60000);
}
function sanitizeText(s, max) {
  if (typeof s !== "string") return "";
  return s.replace(/<[^>]*>/g, "").trim().slice(0, max || 400);
}

// Retire les conteneurs devenus vides, pour que le document de contenu ne
// garde pas de coquilles (« extraQuiz: {} ») après une suppression.
function pruneContent(content) {
  ["lessons", "extraQuiz", "extraPractice"].forEach(k => {
    if (content[k] && typeof content[k] === "object" && !Object.keys(content[k]).length) {
      delete content[k];
    }
  });
  return content;
}

// Moyenne sur 20 d'une liste de notes, pondérée par le coefficient de chaque note.
function avg20(list) {
  let sum = 0, coefSum = 0;
  (list || []).forEach(g => {
    const out = Number(g.outOf) || 0;
    const sc = Number(g.score);
    if (!out || !isFinite(sc)) return;
    const c = Number(g.coef) > 0 ? Number(g.coef) : 1;
    sum += (sc / out) * 20 * c;
    coefSum += c;
  });
  return coefSum ? sum / coefSum : null;
}

function summarize(email, data) {
  const progress = (data && data.progress) || {};
  const grades = (data && data.grades) || {};
  let lessonsDone = 0, scoreSum = 0, scoreTotal = 0, lastTs = 0;
  Object.keys(progress).forEach(k => {
    const p = progress[k];
    if (p && p.done) {
      lessonsDone++;
      scoreSum += Number(p.score) || 0;
      scoreTotal += Number(p.total) || 0;
      if (p.ts && p.ts > lastTs) lastTs = p.ts;
    }
  });
  let noteCount = 0;
  const allNotes = [];
  Object.keys(grades).forEach(sk => {
    (grades[sk] || []).forEach(g => { noteCount++; allNotes.push(g); });
  });
  return {
    email,
    lessonsDone,
    quizAvgPct: scoreTotal ? Math.round((scoreSum / scoreTotal) * 1000) / 10 : null,
    noteCount,
    gradeAvg: avg20(allNotes),
    subjectsWithNotes: Object.keys(grades).filter(k => (grades[k] || []).length).length,
    lastActivity: lastTs || null
  };
}

exports.handler = async (event) => {
  const store = openStore();

  // ---- Lecture publique des corrections de contenu (aucune donnée d'élève) ----
  if (event.httpMethod === "GET") {
    try {
      const content = (await store.get(CONTENT_KEY, { type: "json" })) || {};
      return json(200, content);
    } catch (e) {
      return json(200, {});
    }
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Méthode non autorisée" });
  }

  const expected = process.env.ADMIN_CODE;
  if (!expected) {
    return json(500, { error: "Console admin non configurée : ajoute la variable d'environnement ADMIN_CODE dans Netlify (Site settings → Environment variables), puis redéploie." });
  }
  if (String(expected).length < 8) {
    return json(500, { error: "Le code ADMIN_CODE est trop court : utilise au moins 8 caractères." });
  }

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }

  if (!sameSecret(body.code || "", expected)) {
    // Ralentit les tentatives automatisées (les fonctions sont sans état,
    // on ne peut pas compter les essais d'une session à l'autre).
    await sleep(700);
    return json(401, { error: "Code administrateur incorrect." });
  }

  const action = body.action;

  try {
    // ---- Liste des élèves ----
    if (action === "login" || action === "students") {
      const listed = await store.list();
      const keys = (listed.blobs || []).map(b => b.key).filter(k => k !== CONTENT_KEY);
      const students = [];
      for (const k of keys) {
        const data = (await store.get(k, { type: "json" })) || {};
        students.push(summarize(k, data));
      }
      students.sort((a, b) => (b.lastActivity || 0) - (a.lastActivity || 0));
      return json(200, { ok: true, students });
    }

    // ---- Détail d'un élève ----
    if (action === "student") {
      const email = String(body.email || "").trim().toLowerCase();
      if (!email) return json(400, { error: "email manquant" });
      const data = (await store.get(email, { type: "json" })) || null;
      if (!data) return json(404, { error: "Aucune donnée pour cet élève." });
      return json(200, { ok: true, email, data });
    }

    // ---- Statistiques : où ça bloque ----
    if (action === "stats") {
      const listed = await store.list();
      const keys = (listed.blobs || []).map(b => b.key).filter(k => k !== CONTENT_KEY);
      const perLesson = {};   // lessonId -> { done, scoreSum, scoreTotal }
      let studentCount = 0, totalDone = 0;
      for (const k of keys) {
        const data = (await store.get(k, { type: "json" })) || {};
        studentCount++;
        const progress = data.progress || {};
        Object.keys(progress).forEach(id => {
          const p = progress[id];
          if (!p || !p.done) return;
          if (!perLesson[id]) perLesson[id] = { done: 0, scoreSum: 0, scoreTotal: 0 };
          perLesson[id].done++;
          perLesson[id].scoreSum += Number(p.score) || 0;
          perLesson[id].scoreTotal += Number(p.total) || 0;
          totalDone++;
        });
      }
      const lessons = Object.keys(perLesson).map(id => {
        const s = perLesson[id];
        return {
          id,
          done: s.done,
          avgPct: s.scoreTotal ? Math.round((s.scoreSum / s.scoreTotal) * 1000) / 10 : null
        };
      });
      return json(200, { ok: true, studentCount, totalDone, lessons });
    }

    // ---- Réinitialisations et suppression ----
    if (action === "resetProgress" || action === "resetGrades" || action === "resetTerm") {
      const email = String(body.email || "").trim().toLowerCase();
      if (!email) return json(400, { error: "email manquant" });
      const data = (await store.get(email, { type: "json" })) || {};
      if (action === "resetProgress") {
        data.progress = {};
      } else if (action === "resetGrades") {
        data.grades = {};
      } else {
        const term = Number(body.term);
        if (![1, 2, 3].includes(term)) return json(400, { error: "trimestre invalide" });
        const grades = data.grades || {};
        Object.keys(grades).forEach(sk => {
          grades[sk] = (grades[sk] || []).filter(g => (Number(g.term) || 1) !== term);
        });
        data.grades = grades;
      }
      await store.setJSON(email, data);
      return json(200, { ok: true });
    }

    if (action === "deleteStudent") {
      const email = String(body.email || "").trim().toLowerCase();
      if (!email) return json(400, { error: "email manquant" });
      if (email === CONTENT_KEY) return json(400, { error: "clé réservée" });
      await store.delete(email);
      return json(200, { ok: true });
    }

    // ---- Gestion du contenu ----
    if (action === "getContent") {
      const content = (await store.get(CONTENT_KEY, { type: "json" })) || {};
      return json(200, { ok: true, content });
    }

    if (action === "saveLesson") {
      // Corrige le titre et/ou le texte d'une leçon existante.
      const id = sanitizeText(body.lessonId, 20);
      if (!id) return json(400, { error: "identifiant de leçon manquant" });
      const content = (await store.get(CONTENT_KEY, { type: "json" })) || {};
      content.lessons = content.lessons || {};
      const entry = content.lessons[id] || {};
      if (typeof body.title === "string") {
        const t = sanitizeText(body.title, 200);
        if (t) entry.title = t; else delete entry.title;
      }
      if (typeof body.text === "string") {
        const c = sanitizeHtml(body.text);
        if (c) entry.content = c; else delete entry.content;
      }
      if (Object.keys(entry).length) content.lessons[id] = entry;
      else delete content.lessons[id];
      await store.setJSON(CONTENT_KEY, pruneContent(content));
      return json(200, { ok: true, content });
    }

    if (action === "addQuiz") {
      const id = sanitizeText(body.lessonId, 20);
      const q = sanitizeText(body.q, 500);
      const options = Array.isArray(body.options) ? body.options.map(o => sanitizeText(o, 200)) : [];
      const correct = Number(body.correct);
      const exp = sanitizeText(body.exp, 800);
      if (!id || !q) return json(400, { error: "leçon et question obligatoires" });
      if (options.length !== 4 || options.some(o => !o)) return json(400, { error: "il faut exactement 4 propositions, toutes remplies" });
      if (new Set(options.map(o => o.toLowerCase())).size !== 4) return json(400, { error: "les 4 propositions doivent être différentes" });
      if (!(correct >= 0 && correct <= 3)) return json(400, { error: "indique laquelle des 4 propositions est correcte" });
      if (!exp) return json(400, { error: "l'explication est obligatoire" });
      const content = (await store.get(CONTENT_KEY, { type: "json" })) || {};
      content.extraQuiz = content.extraQuiz || {};
      content.extraQuiz[id] = content.extraQuiz[id] || [];
      content.extraQuiz[id].push({ qid: "a" + Date.now().toString(36), q, options, correct, exp });
      await store.setJSON(CONTENT_KEY, pruneContent(content));
      return json(200, { ok: true, content });
    }

    if (action === "addPractice") {
      const id = sanitizeText(body.lessonId, 20);
      const statement = sanitizeText(body.statement, 1500);
      const solution = sanitizeHtml(body.solution);
      if (!id || !statement || !solution) return json(400, { error: "leçon, énoncé et corrigé obligatoires" });
      const content = (await store.get(CONTENT_KEY, { type: "json" })) || {};
      content.extraPractice = content.extraPractice || {};
      content.extraPractice[id] = content.extraPractice[id] || [];
      content.extraPractice[id].push({ qid: "p" + Date.now().toString(36), statement, solution });
      await store.setJSON(CONTENT_KEY, pruneContent(content));
      return json(200, { ok: true, content });
    }

    if (action === "deleteContentItem") {
      // kind: "lesson" | "quiz" | "practice"
      const kind = String(body.kind || "");
      const id = sanitizeText(body.lessonId, 20);
      const qid = sanitizeText(body.qid, 40);
      const content = (await store.get(CONTENT_KEY, { type: "json" })) || {};
      if (kind === "lesson" && content.lessons) delete content.lessons[id];
      else if (kind === "quiz" && content.extraQuiz && content.extraQuiz[id]) {
        content.extraQuiz[id] = content.extraQuiz[id].filter(x => x.qid !== qid);
        if (!content.extraQuiz[id].length) delete content.extraQuiz[id];
      } else if (kind === "practice" && content.extraPractice && content.extraPractice[id]) {
        content.extraPractice[id] = content.extraPractice[id].filter(x => x.qid !== qid);
        if (!content.extraPractice[id].length) delete content.extraPractice[id];
      } else {
        return json(400, { error: "élément introuvable" });
      }
      await store.setJSON(CONTENT_KEY, pruneContent(content));
      return json(200, { ok: true, content });
    }

    return json(400, { error: "Action inconnue : " + String(action) });
  } catch (e) {
    return json(500, { error: "Erreur côté serveur : " + String(e && e.message ? e.message : e) });
  }
};
