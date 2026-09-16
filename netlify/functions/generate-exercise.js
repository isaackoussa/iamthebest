// Générateur d'exercices à la demande (via l'API Gemini)

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Method not allowed" })
    };
  }

  let body = {};

  try {
    body = JSON.parse(event.body || "{}");
  } catch (e) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "JSON invalide" })
    };
  }

  const subjectName = String(body.subjectName || "").trim();
  const lessonTitle = String(body.lessonTitle || "").trim();

  const lessonText = String(body.lessonText || "")
    .trim()
    .slice(0, 4000);

  const topic = String(body.topic || "")
    .trim()
    .slice(0, 200);

  const type = body.type === "open" ? "open" : "qcm";

  const difficulty = [
    "facile",
    "moyen",
    "difficile"
  ].includes(body.difficulty)
    ? body.difficulty
    : "moyen";

  if (!subjectName || (!lessonTitle && !topic)) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Matière et leçon (ou thème) requis"
      })
    };
  }

  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return {
      statusCode: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Générateur non configuré (GEMINI_API_KEY manquante)"
      })
    };
  }

  const subjectTopic = lessonTitle
    ? `la leçon "${lessonTitle}"`
    : `le thème "${topic}"`;

  const contextBlock = lessonText
    ? `Voici le contenu de la leçon pour te servir de référence :
---
${lessonText}
---
`
    : "";

  const difficultyHint = {
    facile: "facile (vérifie une notion de base, sans piège)",
    moyen: "moyenne (demande de combiner deux idées de la leçon)",
    difficile:
      "difficile (demande un raisonnement plus poussé ou un cas particulier)"
  }[difficulty];

  let systemInstruction;
  let responseSchema;

  if (type === "qcm") {
    systemInstruction = `Tu es un professeur de collège en Côte d'Ivoire qui prépare une question à choix multiples (QCM) pour un(e) élève de 4ème (13-14 ans), en ${subjectName}, sur ${subjectTopic}.

${contextBlock}

Génère UNE SEULE question de difficulté ${difficultyHint}, originale (pas une question déjà classique et trop connue), avec exactement 4 propositions de réponse dont une seule est correcte, et une explication courte et claire de la bonne réponse.

Si la matière est l'anglais, rédige la question et les options en anglais (l'explication peut être en français).

Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{"q": "...", "options": ["...","...","...","..."], "correct": 0, "exp": "..."}

où "correct" est l'index (0 à 3) de la bonne réponse dans "options".`;

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
  } else {
    systemInstruction = `Tu es un professeur de collège en Côte d'Ivoire qui prépare un exercice de pratique ouvert pour un(e) élève de 4ème (13-14 ans), en ${subjectName}, sur ${subjectTopic}.

${contextBlock}

Génère UN SEUL exercice ouvert (énoncé + corrigé détaillé étape par étape) de difficulté ${difficultyHint}, original (pas un exercice déjà classique et trop connu).

Si la matière est l'anglais, rédige l'énoncé en anglais si c'est pertinent (le corrigé peut être bilingue).

Le corrigé doit être rédigé en HTML simple (des balises <p>, <strong>, <br> autorisées, pas de <script>).

Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{"statement": "...", "solution": "..."}`;

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
                  text: `Génère l'exercice demandé (matière : ${subjectName}, ${subjectTopic}, difficulté : ${difficulty}). Varie le sujet à chaque fois pour ne jamais répéter un exercice précédent.`
                }
              ]
            }
          ],

          generationConfig: {
            maxOutputTokens: 900,

            thinkingConfig: {
              thinkingLevel: "low"
            },

            // CORRECTION IMPORTANTE :
            // responseFormat.text.mimeType est supprimé.
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Échec de la requête au générateur",
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Réponse vide du générateur"
        })
      };
    }

    let exercise;

    try {
      const cleaned = raw
        .replace(/^```json\s*/i, "")
        .replace(/^```\s*/, "")
        .replace(/```\s*$/, "")
        .trim();

      exercise = JSON.parse(cleaned);
    } catch (e) {
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Réponse du générateur illisible",
          details: raw
        })
      };
    }

    if (type === "qcm") {
      if (
        typeof exercise.q !== "string" ||
        !exercise.q.trim() ||
        !Array.isArray(exercise.options) ||
        exercise.options.length !== 4 ||
        exercise.options.some(
          (option) =>
            typeof option !== "string" ||
            !option.trim()
        ) ||
        typeof exercise.correct !== "number" ||
        !Number.isInteger(exercise.correct) ||
        exercise.correct < 0 ||
        exercise.correct > 3 ||
        typeof exercise.exp !== "string" ||
        !exercise.exp.trim()
      ) {
        return {
          statusCode: 502,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            error: "Format de question invalide",
            details: raw
          })
        };
      }
    } else {
      if (
        typeof exercise.statement !== "string" ||
        !exercise.statement.trim() ||
        typeof exercise.solution !== "string" ||
        !exercise.solution.trim()
      ) {
        return {
          statusCode: 502,
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            error: "Format d'exercice invalide",
            details: raw
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
  } catch (e) {
    return {
      statusCode: 502,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        error: "Échec de la requête au générateur",
        details: String(e)
      })
    };
  }
};