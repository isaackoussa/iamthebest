const { getStore } = require("@netlify/blobs");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }
  const email = (body.email || "").trim().toLowerCase();

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Adresse email invalide" }) };
  }

  const code = Math.floor(100000 + Math.random() * 900000).toString();
console.log("SITE_ID =", process.env.NETLIFY_SITE_ID);
console.log("TOKEN =", !!process.env.NETLIFY_BLOBS_TOKEN);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Service d'email non configuré (RESEND_API_KEY manquante)" })
    };
  }

  try {
    const resp = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: process.env.FROM_EMAIL || "I'm The Best <onboarding@resend.dev>",
        to: [email],
        subject: "Ton code de vérification — I'm The Best",
        html: `<div style="font-family:sans-serif;padding:20px;">
          <h2>🏆 I'm The Best</h2>
          <p>Voici ton code de vérification pour accéder à ton compte :</p>
          <p style="font-size:32px; font-weight:bold; letter-spacing:6px;">${code}</p>
          <p>Ce code expire dans 10 minutes. Si tu n'as pas demandé ce code, ignore cet email.</p>
        </div>`
      })
    });

    if (!resp.ok) {
      const details = await resp.text();
      return { statusCode: 502, body: JSON.stringify({ error: "Échec de l'envoi de l'email", details }) };
    }
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "Échec de l'envoi de l'email", details: String(e) }) };
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
