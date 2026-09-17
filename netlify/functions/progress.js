const { openStore } = require("./lib/store.js");

exports.handler = async (event) => {
  // Ouverture défensive : si le stockage est indisponible, on renvoie une
  // erreur lisible au lieu de laisser la fonction planter en « 502 » opaque.
  // L'appli continue de fonctionner avec le stockage local du navigateur.
  const opened = openStore();
  if (!opened.ok) {
    return {
      statusCode: 503,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Synchronisation indisponible : " + opened.error,
        storageUnavailable: true
      })
    };
  }
  const store = opened.store;
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
