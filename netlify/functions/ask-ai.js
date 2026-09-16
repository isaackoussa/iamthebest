// ============================================================
// ASSISTANT IA
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

      const response = await fetch(GEMINI_URL, {

        method: "POST",

        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json"
        },

        body: JSON.stringify(payload)
      });


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


  const question =
    String(body.question || "")
      .trim();

  const subjectName =
    String(body.subjectName || "")
      .trim();

  const lessonTitle =
    String(body.lessonTitle || "")
      .trim();

  const lessonText =
    String(body.lessonText || "")
      .trim()
      .slice(0, 4000);


  if (!question) {

    return {
      statusCode: 400,
      body: JSON.stringify({
        error: "Question manquante"
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
          "Assistant IA non configuré (GEMINI_API_KEY manquante)"
      })
    };
  }


  const systemInstruction = `

Tu es un professeur particulier bienveillant qui aide un élève
de 4ème en Côte d'Ivoire.

Matière :
${subjectName || "non précisée"}

Leçon :
${lessonTitle || "non précisée"}

Contenu de la leçon :

---
${lessonText || "(non fourni)"}
---

Réponds simplement, clairement et de manière encourageante.

Adapte toujours la réponse au niveau 4ème.

Reste dans le cadre de la leçon autant que possible.

Réponds dans la même langue que la question.

Maximum 120 mots.

IMPORTANT POUR LES MATHÉMATIQUES :

Utilise LaTeX.

Math dans une phrase :

\\( ... \\)

Math affichée :

\\[ ... \\]

Exemple :

\\(x^2+3x=10\\)

Exemple :

\\[
\\frac{3}{4}+\\frac{1}{2}
\\]

N'utilise JAMAIS :

$...$

ou :

$$...$$

N'utilise pas de balises HTML.

N'utilise pas de Markdown.

`;


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
              text: question
            }
          ]
        }

      ],

      generationConfig: {

        maxOutputTokens: 500,

        thinkingConfig: {
          thinkingLevel: "low"
        }
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
              : "Échec de la requête à l'assistant IA",

          details
        })
      };
    }


    const data =
      await resp.json();


    const answer =
      extractText(data);


    if (!answer) {

      return {
        statusCode: 502,

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          error:
            "Réponse vide de l'assistant IA"
        })
      };
    }


    return {

      statusCode: 200,

      headers: {
        "Content-Type":
          "application/json"
      },

      body: JSON.stringify({
        answer
      })
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
          "Échec de la requête à l'assistant IA",

        details:
          String(error)
      })
    };
  }
};