// Traducteur FR <-> EN (via l'API Gemini)
const { callGemini } = require("./lib/gemini.js");
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }
  const text = (body.text || "").trim().slice(0, 1000);
  const direction = ["auto", "fr-en", "en-fr"].includes(body.direction) ? body.direction : "auto";

  if (!text) {
    return { statusCode: 400, body: JSON.stringify({ error: "Texte manquant" }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Traducteur non configuré (GEMINI_API_KEY manquante)" })
    };
  }

  const directionHint = {
    auto: "Détecte automatiquement si le texte est en français ou en anglais, et traduis-le dans l'autre langue.",
    "fr-en": "Le texte est en français : traduis-le en anglais.",
    "en-fr": "Le texte est en anglais : traduis-le en français."
  }[direction];

  const systemInstruction = `Tu es un traducteur français/anglais pour un(e) élève de 4ème (collège) en Côte d'Ivoire, qui apprend l'anglais.
${directionHint}
Donne une traduction naturelle et adaptée au niveau collège.
Si le texte est un seul mot ou une expression courte, ajoute aussi sa nature grammaticale simple (nom, verbe, adjectif...) et, si utile, un exemple d'usage dans une courte phrase.
Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{"sourceLang": "fr" ou "en", "translation": "...", "note": "..." }
où "note" contient la nature grammaticale et/ou un exemple si pertinent (chaîne vide "" sinon).`;

  try {
    const call = await callGemini({
      apiKey,
      systemInstruction,
      userText: text,
      maxOutputTokens: 350,
      thinkingLevel: "low",
      responseSchema: {
        type: "OBJECT",
        properties: {
          sourceLang: { type: "STRING" },
          translation: { type: "STRING" },
          note: { type: "STRING" }
        },
        required: ["sourceLang", "translation", "note"]
      }
    });

    if (!call.ok) {
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: call.message, retryable: true })
      };
    }

    const raw = call.text;

    let result;
    try {
      const cleaned = raw.trim().replace(/^```json\s*/i, "").replace(/^```\s*/, "").replace(/```\s*$/, "");
      result = JSON.parse(cleaned);
    } catch (e) {
      return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Le traducteur a renvoyé une réponse illisible. Réessaie.", retryable: true }) };
    }

    if (!result.translation) {
      return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Le traducteur n'a rien renvoyé. Réessaie.", retryable: true }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result)
    };
  } catch (e) {
    return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Le traducteur est injoignable pour le moment. Réessaie dans un instant.", retryable: true }) };
  }
};
