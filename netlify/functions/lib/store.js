// Ouverture DÉFENSIVE du stockage Netlify Blobs, partagée par progress.js et admin.js.
//
// Pourquoi ce fichier : jusqu'ici, `require("@netlify/blobs")` était fait au
// chargement du module et `getStore()` appelé hors de tout try/catch. Si l'un
// des deux échoue (paquet absent du déploiement, contexte Blobs non injecté
// dans la fonction), la fonction plante AVANT de répondre et Netlify renvoie
// un « 502 » opaque : impossible de savoir ce qui cloche. Ici on capture
// l'erreur et on la renvoie en clair.

let getStore = null;
let moduleError = null;
try {
  getStore = require("@netlify/blobs").getStore;
} catch (e) {
  moduleError = "Le paquet @netlify/blobs n'est pas disponible dans le déploiement : " +
    (e && e.message ? e.message : String(e));
}

// État de la configuration, sans jamais exposer la moindre valeur secrète
// (uniquement des booléens « la variable est-elle définie ? »).
function storeStatus() {
  return {
    moduleLoaded: !!getStore,
    moduleError: moduleError,
    hasSiteId: !!process.env.NETLIFY_SITE_ID,
    hasBlobsToken: !!process.env.NETLIFY_BLOBS_TOKEN,
    hasAutoContext: !!(process.env.NETLIFY_BLOBS_CONTEXT || process.env.BLOBS_CONTEXT),
    nodeVersion: process.version
  };
}

// Renvoie { ok:true, store } ou { ok:false, error:"..." } — ne lance jamais.
function openStore() {
  if (!getStore) return { ok: false, error: moduleError };

  const siteID = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN;
  try {
    const store = (siteID && token)
      ? getStore({ name: "imthebest-progress", siteID, token })
      : getStore("imthebest-progress");
    return { ok: true, store };
  } catch (e) {
    const msg = e && e.message ? e.message : String(e);
    let hint = "";
    if (/MissingBlobsEnvironment|has not been configured|environment|context/i.test(msg)) {
      hint = " → Le contexte Netlify Blobs n'atteint pas la fonction. Dans Netlify," +
        " ajoute les variables d'environnement NETLIFY_SITE_ID (l'identifiant du site," +
        " visible dans Site configuration → General) et NETLIFY_BLOBS_TOKEN (un jeton" +
        " d'accès personnel créé dans User settings → Applications), puis redéploie.";
    }
    return { ok: false, error: msg + hint };
  }
}

module.exports = { openStore, storeStatus };
