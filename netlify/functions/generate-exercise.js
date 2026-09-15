// Générateur d'exercices à la demande (via l'API Gemini)
exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }

  const subjectName = (body.subjectName || "").trim();
  const lessonTitle = (body.lessonTitle || "").trim();
  const lessonText = (body.lessonText || "").trim().slice(0, 4000);
  const topic = (body.topic || "").trim().slice(0, 200);
  const type = body.type === "open" ? "open" : "qcm";
  const difficulty = ["facile", "moyen", "difficile"].includes(body.difficulty) ? body.difficulty : "moyen";

  if (!subjectName || (!lessonTitle && !topic)) {
    return { statusCode: 400, body: JSON.stringify({ error: "Matière et leçon (ou thème) requis" }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Générateur non configuré (GEMINI_API_KEY manquante)" })
    };
  }

  const subjectTopic = lessonTitle ? `la leçon "${lessonTitle}"` : `le thème "${topic}"`;
  const contextBlock = lessonText
    ? `Voici le contenu de la leçon pour te servir de référence :\n---\n${lessonText}\n---\n`
    : "";

  const difficultyHint = {
    facile: "facile (vérifie une notion de base, sans piège)",
    moyen: "moyenne (demande de combiner deux idées de la leçon)",
    difficile: "difficile (demande un raisonnement plus poussé ou un cas particulier)"
  }[difficulty];

  let systemInstruction, responseSchema;

  if (type === "qcm") {
    systemInstruction = `Tu es un professeur de collège en Côte d'Ivoire qui prépare une question à choix multiples (QCM)
pour un(e) élève de 4ème (13-14 ans), en ${subjectName}, sur ${subjectTopic}.
${contextBlock}
Génère UNE SEULE question de difficulté ${difficultyHint}, originale (pas une question déjà classique et trop connue),
avec exactement 4 propositions de réponse dont une seule est correcte, et une explication courte et claire de la bonne réponse.
Si la matière est l'anglais, rédige la question et les options en anglais (l'explication peut être en français).
Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{"q": "...", "options": ["...","...","...","..."], "correct": 0, "exp": "..."}
où "correct" est l'index (0 à 3) de la bonne réponse dans "options".`;
    responseSchema = {
      type: "OBJECT",
      properties: {
        q: { type: "STRING" },
        options: { type: "ARRAY", items: { type: "STRING" }, minItems: 4, maxItems: 4 },
        correct: { type: "INTEGER" },
        exp: { type: "STRING" }
      },
      required: ["q", "options", "correct", "exp"]
    };
  } else {
    systemInstruction = `Tu es un professeur de collège en Côte d'Ivoire qui prépare un exercice de pratique ouvert
pour un(e) élève de 4ème (13-14 ans), en ${subjectName}, sur ${subjectTopic}.
${contextBlock}
Génère UN SEUL exercice ouvert (énoncé + corrigé détaillé étape par étape) de difficulté ${difficultyHint},
original (pas un exercice déjà classique et trop connu).
Si la matière est l'anglais, rédige l'énoncé en anglais si c'est pertinent (le corrigé peut être bilingue).
Le corrigé doit être rédigé en HTML simple (des balises <p>, <strong>, <br> autorisées, pas de <script>).
Réponds UNIQUEMENT avec un objet JSON valide, sans texte autour, au format exact :
{"statement": "...", "solution": "..."}`;
    responseSchema = {
      type: "OBJECT",
      properties: {
        statement: { type: "STRING" },
        solution: { type: "STRING" }
      },
      required: ["statement", "solution"]
    };
  }

  try {
    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: "user", parts: [{ text: `Génère l'exercice demandé (matière : ${subjectName}, ${subjectTopic}, difficulté : ${difficulty}).` }] }],
          generationConfig: {
            maxOutputTokens: 700,
            temperature: 0.9,
            responseMimeType: "application/json",
            responseSchema
          }
        })
      }
    );

    if (!resp.ok) {
      const details = await resp.text();
      return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête au générateur", details }) };
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
      return { statusCode: 502, body: JSON.stringify({ error: "Réponse vide du générateur" }) };
    }

    let exercise;
    try {
      const cleaned = raw.trim().replace(/^```json\s*/i, "").replace(/^```\s*/, "").replace(/```\s*$/, "");
      exercise = JSON.parse(cleaned);
    } catch (e) {
      return { statusCode: 502, body: JSON.stringify({ error: "Réponse du générateur illisible", details: raw }) };
    }

    if (type === "qcm") {
      if (!exercise.q || !Array.isArray(exercise.options) || exercise.options.length !== 4 ||
          typeof exercise.correct !== "number" || exercise.correct < 0 || exercise.correct > 3 || !exercise.exp) {
        return { statusCode: 502, body: JSON.stringify({ error: "Format de question invalide", details: raw }) };
      }
    } else {
      if (!exercise.statement || !exercise.solution) {
        return { statusCode: 502, body: JSON.stringify({ error: "Format d'exercice invalide", details: raw }) };
      }
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, exercise })
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête au générateur", details: String(e) }) };
  }
};
