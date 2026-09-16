// Traducteur FR <-> EN (via l'API Gemini)

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Method not allowed"
      })
    };
  }

  let body = {};

  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "JSON invalide"
      })
    };
  }

  const text = String(body.text || "")
    .trim()
    .slice(0, 1000);

  const direction = [
    "auto",
    "fr-en",
    "en-fr"
  ].includes(body.direction)
    ? body.direction
    : "auto";

  if (!text) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Texte manquant"
      })
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error:
          "Traducteur non configuré (GEMINI_API_KEY manquante)"
      })
    };
  }

  const directionHint = {
    auto:
      "Détecte automatiquement si le texte est en français ou en anglais, et traduis-le dans l'autre langue.",

    "fr-en":
      "Le texte est en français : traduis-le en anglais.",

    "en-fr":
      "Le texte est en anglais : traduis-le en français."
  }[direction];

  const systemInstruction = `Tu es un traducteur français/anglais pour un(e) élève de 4ème (collège) en Côte d'Ivoire, qui apprend l'anglais.

${directionHint}

Donne une traduction naturelle et adaptée au niveau collège.

Si le texte est un seul mot ou une expression courte, ajoute aussi sa nature grammaticale simple (nom, verbe, adjectif...) et, si utile, un exemple d'usage dans une courte phrase.

Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{"sourceLang": "fr" ou "en", "translation": "...", "note": "..."}

où "note" contient la nature grammaticale et/ou un exemple si pertinent (chaîne vide "" sinon).`;

  const responseSchema = {
    type: "OBJECT",
    properties: {
      sourceLang: {
        type: "STRING"
      },
      translation: {
        type: "STRING"
      },
      note: {
        type: "STRING"
      }
    },
    required: [
      "sourceLang",
      "translation",
      "note"
    ]
  };

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
          system_instruction: {
            parts: [
              {
                text: systemInstruction
              }
            ]
          },

          contents: [
            {
              role: "user",
              parts: [
                {
                  text
                }
              ]
            }
          ],

          generationConfig: {
            maxOutputTokens: 350,

            thinkingConfig: {
              thinkingLevel: "low"
            },

            // CORRECTION IMPORTANTE :
            // Ancien format :
            // responseFormat.text.mimeType
            //
            // Nouveau format :
            responseMimeType: "application/json",
            responseSchema: responseSchema
          }
        })
      }
    );

    if (!resp.ok) {
      const details = await resp.text();

      return {
        statusCode: 502,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "Échec de la requête au traducteur",
          details
        })
      };
    }

    const data = await resp.json();

    const parts =
      data?.candidates?.[0]?.content?.parts || [];

    const raw = parts
      .filter(
        (part) =>
          typeof part?.text === "string" &&
          !part?.thought
      )
      .map((part) => part.text)
      .join("")
      .trim();

    if (!raw) {
      return {
        statusCode: 502,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "Réponse vide du traducteur"
        })
      };
    }

    let result;

    try {
      const cleaned = raw
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/, "")
        .replace(/```\s*$/, "")
        .trim();

      result = JSON.parse(cleaned);
    } catch (e) {
      return {
        statusCode: 502,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "Réponse du traducteur illisible",
          details: raw
        })
      };
    }

    if (
      typeof result.translation !== "string" ||
      !result.translation.trim()
    ) {
      return {
        statusCode: 502,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          error: "Traduction vide",
          details: raw
        })
      };
    }

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(result)
    };
  } catch (e) {
    return {
      statusCode: 502,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Échec de la requête au traducteur",
        details: String(e)
      })
    };
  }
};