//const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }
  const email = (body.email || "").trim().toLowerCase();
  const code = (body.code || "").trim();

  if (!email || !code) {
    return { statusCode: 400, body: JSON.stringify({ error: "Email et code requis" }) };
  }

  //const authStore = getStore("imthebest-auth");
  //const record = await authStore.get(email, { type: "json" });

  if (!record) {
    return { statusCode: 400, body: JSON.stringify({ error: "Aucun code demandé pour cet email. Redemande un code." }) };
  }
  if (Date.now() > record.expiresAt) {
    return { statusCode: 400, body: JSON.stringify({ error: "Ce code a expiré. Redemande un code." }) };
  }
  if (record.code !== code) {
    return { statusCode: 400, body: JSON.stringify({ error: "Code incorrect." }) };
  }

  await authStore.delete(email);
  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
