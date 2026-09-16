// ============================================================
// TRADUCTEUR FR <-> EN
// ============================================================

const GEMINI_MODEL = "gemini-3.8-flash";

const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;


function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function callGeminiWithRetry(apiKey, payload) {

  const maxAttempts = 3;

  for (let attempt = 1; attempt <= maxAttempts; attempt++) {

    try {

      const response = await fetch(
        GEMINI_URL,
        {
          method: "POST",

          headers: {
            "x-goog-api-key": apiKey,
            "Content-Type": "application/json"
          },

          body: JSON.stringify(payload)
        }
      );


      if (response.ok) {
        return response;
      }


      if (
        ![429, 500, 502, 503, 504]
          .includes(response.status) ||
        attempt === maxAttempts
      ) {

        return response;
      }


      const retryAfter =
        Number(
          response.headers.get("retry-after")
        );


      const wait =
        Number.isFinite(retryAfter)
          ? retryAfter * 1000
          : 1000 * Math.pow(2, attempt - 1);


      await sleep(
        Math.min(wait, 5000)
      );


    } catch (error) {

      if (attempt === maxAttempts) {
        throw error;
      }

      await sleep(
        1000 * Math.pow(2, attempt - 1)
      );
    }
  }
}


function extractText(data) {

  const parts =
    data?.candidates?.[0]?.content?.parts || [];

  return parts
    .filter(part =>
      typeof part?.text === "string" &&
      !part?.thought
    )
    .map(part => part.text)
    .join("")
    .trim();
}


function cleanJson(text) {

  return String(text || "")
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
}


exports.handler = async (event) => {

  if (event.httpMethod !== "POST") {

    return {
      statusCode: 405,
      body: JSON.stringify({
        error: "Method not allowed"
      })
    };
  }


  let body = {};

  try {

    body =
      JSON.parse(
        event.body || "{}"
      );

  } catch (error) {

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "JSON invalide"
      })
    };
  }


  const text =
    String(body.text || "")
      .trim()
      .slice(0, 1000);


  const direction =
    [
      "auto",
      "fr-en",
      "en-fr"
    ].includes(body.direction)
      ? body.direction
      : "auto";


  if (!text) {

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Texte manquant"
      })
    };
  }


  const apiKey =
    process.env.GEMINI_API_KEY;


  if (!apiKey) {

    return {
      statusCode: 500,
      body: JSON.stringify({
        error:
          "Traducteur non configuré (GEMINI_API_KEY manquante)"
      })
    };
  }


  const directionHint = {

    auto:
      "Détecte automatiquement si le texte est en français ou en anglais, puis traduis-le dans l'autre langue.",

    "fr-en":
      "Le texte est en français : traduis-le en anglais.",

    "en-fr":
      "Le texte est en anglais : traduis-le en français."

  }[direction];


  const systemInstruction = `

Tu es un traducteur français/anglais pour un élève de 4ème.

${directionHint}

Donne une traduction naturelle et adaptée au niveau collège.

Si le texte est un seul mot ou une expression courte,
ajoute sa nature grammaticale simple et, si utile,
un exemple d'utilisation.

IMPORTANT :

Si le texte contient des mathématiques,
conserve les expressions mathématiques correctement.

Utilise :

\\( ... \\)

pour les mathématiques dans une phrase.

Utilise :

\\[ ... \\]

pour les formules affichées.

N'utilise JAMAIS :

$...$

ou :

$$...$$

Réponds UNIQUEMENT avec un objet JSON valide :

{
  "sourceLang": "fr",
  "translation": "...",
  "note": "..."
}

`;


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

    const payload = {

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

        maxOutputTokens: 400,

        thinkingConfig: {
          thinkingLevel: "low"
        },

        responseMimeType:
          "application/json",

        responseSchema
      }
    };


    const resp =
      await callGeminiWithRetry(
        apiKey,
        payload
      );


    if (!resp.ok) {

      const details =
        await resp.text();


      return {

        statusCode:
          resp.status === 503
            ? 503
            : 502,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          error:
            resp.status === 503
              ? "Le service Gemini est temporairement très sollicité. Réessaie dans quelques secondes."
              : "Échec de la requête au traducteur",

          details
        })
      };
    }


    const data =
      await resp.json();


    const raw =
      extractText(data);


    if (!raw) {

      return {
        statusCode: 502,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          error:
            "Réponse vide du traducteur"
        })
      };
    }


    let result;


    try {

      result =
        JSON.parse(
          cleanJson(raw)
        );

    } catch (error) {

      return {
        statusCode: 502,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          error:
            "Réponse du traducteur illisible",

          details: raw
        })
      };
    }


    if (!result.translation) {

      return {
        statusCode: 502,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          error:
            "Traduction vide"
        })
      };
    }


    return {

      statusCode: 200,

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify(result)
    };


  } catch (error) {

    return {

      statusCode: 502,

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({

        error:
          "Échec de la requête au traducteur",

        details:
          String(error)
      })
    };
  }
};