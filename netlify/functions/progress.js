const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  const store = getStore("imthebest-progress");
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
