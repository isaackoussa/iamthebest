// Traducteur FR <-> EN (via l'API Gemini)
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
    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.8-flash:generateContent",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: "user", parts: [{ text }] }],
          generationConfig: {
            maxOutputTokens: 350,
            thinkingConfig: { thinkingLevel: "low" },
            responseFormat: {
              text: {
                mimeType: "application/json",
                schema: {
                  type: "object",
                  properties: {
                    sourceLang: { type: "string" },
                    translation: { type: "string" },
                    note: { type: "string" }
                  },
                  required: ["sourceLang", "translation", "note"]
                }
              }
            }
          }
        })
      }
    );

    if (!resp.ok) {
      const details = await resp.text();
      return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête au traducteur", details }) };
    }

    const data = await resp.json();
    const raw = data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0] &&
      data.candidates[0].content.parts[0].text;

    if (!raw) {
      return { statusCode: 502, body: JSON.stringify({ error: "Réponse vide du traducteur" }) };
    }

    let result;
    try {
      const cleaned = raw.trim().replace(/^```json\s*/i, "").replace(/^```\s*/, "").replace(/```\s*$/, "");
      result = JSON.parse(cleaned);
    } catch (e) {
      return { statusCode: 502, body: JSON.stringify({ error: "Réponse du traducteur illisible", details: raw }) };
    }

    if (!result.translation) {
      return { statusCode: 502, body: JSON.stringify({ error: "Traduction vide", details: raw }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result)
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête au traducteur", details: String(e) }) };
  }
};
