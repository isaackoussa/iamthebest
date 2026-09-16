// ============================================================
// GÉNÉRATEUR D'EXERCICES À LA DEMANDE VIA GEMINI
// ============================================================

const GEMINI_MODEL = "gemini-3.8-flash";
const GEMINI_URL =
  `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent`;


// ------------------------------------------------------------
// Pause
// ------------------------------------------------------------

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


// ------------------------------------------------------------
// Appel Gemini avec retry automatique
// ------------------------------------------------------------

async function callGeminiWithRetry(apiKey, payload) {

  const maxAttempts = 3;

  let lastResponse = null;
  let lastDetails = "";

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

      lastResponse = response;

      if (response.ok) {
        return response;
      }

      lastDetails = await response.text();

      const retryableStatuses = [
        429,
        500,
        502,
        503,
        504
      ];

      const shouldRetry =
        retryableStatuses.includes(response.status) &&
        attempt < maxAttempts;

      if (!shouldRetry) {
        return response;
      }

      const retryAfterHeader =
        response.headers.get("retry-after");

      let waitMs;

      if (retryAfterHeader) {

        const retryAfter =
          Number(retryAfterHeader);

        waitMs = Number.isFinite(retryAfter)
          ? retryAfter * 1000
          : 1000 * Math.pow(2, attempt - 1);

      } else {

        waitMs =
          1000 * Math.pow(2, attempt - 1);
      }

      await sleep(Math.min(waitMs, 5000));

    } catch (error) {

      lastDetails = String(error);

      if (attempt >= maxAttempts) {
        throw error;
      }

      await sleep(
        1000 * Math.pow(2, attempt - 1)
      );
    }
  }

  return lastResponse;
}


// ------------------------------------------------------------
// Extraction du texte Gemini
// ------------------------------------------------------------

function extractGeminiText(data) {

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


// ------------------------------------------------------------
// Nettoyage JSON
// ------------------------------------------------------------

function cleanJson(text) {

  return String(text || "")
    .trim()
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/```\s*$/i, "")
    .trim();
}


// ------------------------------------------------------------
// Fonction Netlify
// ------------------------------------------------------------

exports.handler = async (event) => {

  if (event.httpMethod !== "POST") {

    return {
      statusCode: 405,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Method not allowed"
      })
    };
  }


  let body = {};

  try {

    body = JSON.parse(
      event.body || "{}"
    );

  } catch (error) {

    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "JSON invalide"
      })
    };
  }


  const subjectName =
    String(body.subjectName || "").trim();

  const lessonTitle =
    String(body.lessonTitle || "").trim();

  const lessonText =
    String(body.lessonText || "")
      .trim()
      .slice(0, 4000);

  const topic =
    String(body.topic || "")
      .trim()
      .slice(0, 200);

  const type =
    body.type === "open"
      ? "open"
      : "qcm";

  const difficulty =
    ["facile", "moyen", "difficile"]
      .includes(body.difficulty)
      ? body.difficulty
      : "moyen";


  if (
    !subjectName ||
    (!lessonTitle && !topic)
  ) {

    return {
      statusCode: 400,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error: "Matière et leçon (ou thème) requis"
      })
    };
  }


  const apiKey =
    process.env.GEMINI_API_KEY;


  if (!apiKey) {

    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        error:
          "Générateur non configuré (GEMINI_API_KEY manquante)"
      })
    };
  }


  const subjectTopic =
    lessonTitle
      ? `la leçon "${lessonTitle}"`
      : `le thème "${topic}"`;


  const contextBlock = lessonText
    ? `
Voici le contenu de la leçon à utiliser comme référence :

---
${lessonText}
---

`
    : "";


  const difficultyHint = {

    facile:
      "facile : vérifie une notion de base, sans piège",

    moyen:
      "moyenne : demande de combiner deux idées de la leçon",

    difficile:
      "difficile : demande un raisonnement plus poussé"

  }[difficulty];


  let systemInstruction;
  let responseSchema;


  // ==========================================================
  // QCM
  // ==========================================================

  if (type === "qcm") {

    systemInstruction = `

Tu es un professeur de collège en Côte d'Ivoire.

Tu prépares une question à choix multiples pour un élève de 4ème
(environ 13-14 ans).

Matière : ${subjectName}
Sujet : ${subjectTopic}

${contextBlock}

Difficulté :
${difficultyHint}

Génère UNE SEULE question.

La question doit être originale.

Il doit y avoir exactement 4 propositions.

Une seule proposition doit être correcte.

Donne une explication courte et claire.

Si la matière est l'anglais, écris la question et les propositions
en anglais.

IMPORTANT — FORMAT DES MATHÉMATIQUES :

Toutes les expressions mathématiques doivent être écrites en LaTeX.

Pour les mathématiques dans une phrase, utilise :

\\( ... \\)

Exemple :

\\(x^2 + 3x - 4\\)

Pour une formule affichée sur une ligne séparée, utilise :

\\[ ... \\]

Exemple :

\\[
\\frac{3}{4} + \\frac{1}{2}
\\]

N'utilise JAMAIS :
$...$

ou :

$$...$$

N'utilise aucune balise HTML.

N'utilise pas de Markdown.

Exemples corrects :

\\(x^2\\)

\\(\\sqrt{25}\\)

\\(\\frac{3}{5}\\)

\\(2x+3=7\\)

\\[
A = \\pi r^2
\\]

Réponds UNIQUEMENT avec l'objet JSON demandé.

Format :

{
  "q": "...",
  "options": ["...", "...", "...", "..."],
  "correct": 0,
  "exp": "..."
}

"correct" doit être l'index de la bonne réponse :
0, 1, 2 ou 3.
`;


    responseSchema = {

      type: "OBJECT",

      properties: {

        q: {
          type: "STRING"
        },

        options: {
          type: "ARRAY",

          items: {
            type: "STRING"
          }
        },

        correct: {
          type: "INTEGER"
        },

        exp: {
          type: "STRING"
        }

      },

      required: [
        "q",
        "options",
        "correct",
        "exp"
      ]
    };


  // ==========================================================
  // EXERCICE OUVERT
  // ==========================================================

  } else {

    systemInstruction = `

Tu es un professeur de collège en Côte d'Ivoire.

Tu prépares un exercice ouvert pour un élève de 4ème
(environ 13-14 ans).

Matière : ${subjectName}
Sujet : ${subjectTopic}

${contextBlock}

Difficulté :
${difficultyHint}

Génère UN SEUL exercice.

L'exercice doit contenir :

1. Un énoncé clair.
2. Un corrigé détaillé étape par étape.

L'exercice doit être original.

Si la matière est l'anglais, rédige l'énoncé en anglais si nécessaire.

IMPORTANT — FORMAT DES MATHÉMATIQUES :

Toutes les expressions mathématiques doivent être écrites en LaTeX.

Math dans une phrase :

\\( ... \\)

Math affichée :

\\[ ... \\]

Exemple :

\\[
\\frac{2x+4}{3}=6
\\]

N'utilise JAMAIS :

$...$

ou :

$$...$$

N'utilise aucune balise HTML.

N'utilise pas de Markdown.

Exemples :

\\(x^2\\)

\\(\\sqrt{x}\\)

\\(\\frac{a}{b}\\)

\\[
x = \\frac{-b}{2a}
\\]

Réponds UNIQUEMENT avec un objet JSON valide.

Format :

{
  "statement": "...",
  "solution": "..."
}
`;


    responseSchema = {

      type: "OBJECT",

      properties: {

        statement: {
          type: "STRING"
        },

        solution: {
          type: "STRING"
        }

      },

      required: [
        "statement",
        "solution"
      ]
    };
  }


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
              text:
                `Génère l'exercice demandé.

Matière : ${subjectName}

${subjectTopic}

Difficulté : ${difficulty}

Varie le contenu pour éviter de répéter exactement le même exercice.`
            }
          ]
        }
      ],

      generationConfig: {

        maxOutputTokens: 1200,

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

      const status =
        resp.status === 503
          ? 503
          : 502;


      return {
        statusCode: status,

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          error:
            resp.status === 503
              ? "Le service Gemini est temporairement très sollicité. Réessaie dans quelques secondes."
              : "Échec de la requête au générateur",

          details
        })
      };
    }


    const data =
      await resp.json();


    const raw =
      extractGeminiText(data);


    if (!raw) {

      return {
        statusCode: 502,

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          error:
            "Réponse vide du générateur"
        })
      };
    }


    let exercise;


    try {

      exercise =
        JSON.parse(
          cleanJson(raw)
        );

    } catch (error) {

      return {
        statusCode: 502,

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({

          error:
            "Réponse du générateur illisible",

          details: raw
        })
      };
    }


    // --------------------------------------------------------
    // Vérification QCM
    // --------------------------------------------------------

    if (type === "qcm") {

      if (
        !exercise.q ||
        !Array.isArray(exercise.options) ||
        exercise.options.length !== 4 ||
        typeof exercise.correct !== "number" ||
        exercise.correct < 0 ||
        exercise.correct > 3 ||
        !exercise.exp
      ) {

        return {
          statusCode: 502,

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            error:
              "Format de question invalide"
          })
        };
      }
    }


    // --------------------------------------------------------
    // Vérification exercice ouvert
    // --------------------------------------------------------

    else {

      if (
        !exercise.statement ||
        !exercise.solution
      ) {

        return {
          statusCode: 502,

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            error:
              "Format d'exercice invalide"
          })
        };
      }
    }


    return {

      statusCode: 200,

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        type,

        exercise

      })
    };


  } catch (error) {

    return {

      statusCode: 502,

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({

        error:
          "Échec de la requête au générateur",

        details:
          String(error)
      })
    };
  }
};