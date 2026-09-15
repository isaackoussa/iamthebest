const { getStore } = require("@netlify/blobs");

function openStore() {
  // Sur certains déploiements, le contexte Blobs auto-injecté n'atteint pas
  // la fonction (MissingBlobsEnvironmentError) même en production depuis GitHub.
  // On passe donc siteID/token manuellement quand ils sont disponibles en
  // variables d'environnement, en secours du contexte automatique.
  const siteID = process.env.NETLIFY_SITE_ID;
  const token = process.env.NETLIFY_BLOBS_TOKEN;
  if (siteID && token) {
    return getStore({ name: "imthebest-progress", siteID, token });
  }
  return getStore("imthebest-progress");
}

exports.handler = async (event) => {
  const store = openStore();
  const email = ((event.queryStringParameters && event.queryStringParameters.email) || "").trim().toLowerCase();

  if (!email) {
    return { statusCode: 400, body: JSON.stringify({ error: "email manquant" }) };
  }

  if (event.httpMethod === "GET") {
    const data = (await store.get(email, { type: "json" })) || {};
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    };
  }

  if (event.httpMethod === "POST") {
    let body = {};
    try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }
    await store.setJSON(email, body);
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ok: true })
    };
  }

  return { statusCode: 405, body: "Method not allowed" };
};
