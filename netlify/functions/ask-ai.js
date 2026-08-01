exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method not allowed" };
  }

  let body = {};
  try { body = JSON.parse(event.body || "{}"); } catch (e) { /* ignore */ }
  const question = (body.question || "").trim();
  const subjectName = (body.subjectName || "").trim();
  const lessonTitle = (body.lessonTitle || "").trim();
  const lessonText = (body.lessonText || "").trim().slice(0, 4000); // limite raisonnable

  if (!question) {
    return { statusCode: 400, body: JSON.stringify({ error: "Question manquante" }) };
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Assistant IA non configuré (GEMINI_API_KEY manquante)" })
    };
  }

  const systemInstruction = `Tu es un professeur particulier bienveillant qui aide un(e) élève de 4ème (collège, environ 13-14 ans) en Côte d'Ivoire.
Matière : ${subjectName || "non précisée"}. Leçon en cours : "${lessonTitle || "non précisée"}".
Voici le contenu de la leçon pour te donner le contexte :
---
${lessonText || "(non fourni)"}
---
Réponds à la question de l'élève de façon simple, claire et encourageante, adaptée à son niveau (4ème).
Reste dans le cadre de cette leçon autant que possible. Si la question sort du sujet de la leçon,
réponds quand même brièvement mais rappelle gentiment le lien avec la leçon en cours.
Réponds dans la même langue que la question (français ou anglais selon le cas).
Garde ta réponse concise (maximum 120 mots), sans formules d'introduction inutiles.`;

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
          contents: [{ role: "user", parts: [{ text: question }] }],
          generationConfig: { maxOutputTokens: 400, temperature: 0.4 }
        })
      }
    );

    if (!resp.ok) {
      const details = await resp.text();
      return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête à l'assistant IA", details }) };
    }

    const data = await resp.json();
    const answer = data &&
      data.candidates &&
      data.candidates[0] &&
      data.candidates[0].content &&
      data.candidates[0].content.parts &&
      data.candidates[0].content.parts[0] &&
      data.candidates[0].content.parts[0].text;

    if (!answer) {
      return { statusCode: 502, body: JSON.stringify({ error: "Réponse vide de l'assistant IA" }) };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answer: answer.trim() })
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête à l'assistant IA", details: String(e) }) };
  }
};
