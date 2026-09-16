// Nettoie le texte renvoyé par l'IA : supprime toute notation LaTeX (l'appli n'a pas de moteur
// de rendu LaTeX/MathJax, donc $...$, \(...\), \frac{}{} etc. s'afficheraient tels quels, en
// caractères bruts, au lieu d'un rendu mathématique).
function stripLatex(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/\$\$([^$]+)\$\$/g, "$1")
    .replace(/\$([^$]+)\$/g, "$1")
    .replace(/\\\(/g, "").replace(/\\\)/g, "")
    .replace(/\\\[/g, "").replace(/\\\]/g, "")
    .replace(/\\frac\{([^{}]*)\}\{([^{}]*)\}/g, "$1/$2")
    .replace(/\\sqrt\{([^{}]*)\}/g, "√($1)")
    .replace(/\\times/g, "×")
    .replace(/\\div/g, "÷")
    .replace(/\\cdot/g, "×")
    .replace(/\\pm/g, "±")
    .replace(/\\leq/g, "≤")
    .replace(/\\geq/g, "≥")
    .replace(/\\neq/g, "≠")
    .replace(/\\approx/g, "≈")
    .replace(/\^\{([^{}]*)\}/g, "^$1")
    .replace(/_\{([^{}]*)\}/g, "_$1")
    .replace(/\\text\{([^{}]*)\}/g, "$1")
    .replace(/\\mathrm\{([^{}]*)\}/g, "$1")
    .replace(/\\([a-zA-Z]+)/g, "$1")
    .replace(/\{([^{}]*)\}/g, "$1")
    .trim();
}

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
Garde ta réponse concise (maximum 120 mots), sans formules d'introduction inutiles.
IMPORTANT — format du texte : n'utilise JAMAIS de notation LaTeX (pas de \`$...$\`, \`\\(...\\)\`, \`\\frac{}{}\`, \`\\times\`, accolades \`{}\`, etc.) car le texte est affiché tel quel, sans moteur de rendu mathématique.
Écris les maths en texte brut simple : × pour la multiplication, ÷ pour la division, ^ pour une puissance (ex : 10^8), √(...) pour une racine, des fractions écrites "a/b".`;

  try {
    const resp = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.5-flash:generateContent",
      {
        method: "POST",
        headers: {
          "x-goog-api-key": apiKey,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          system_instruction: { parts: [{ text: systemInstruction }] },
          contents: [{ role: "user", parts: [{ text: question }] }],
          generationConfig: { maxOutputTokens: 400, thinkingConfig: { thinkingLevel: "low" } }
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
      body: JSON.stringify({ answer: stripLatex(answer.trim()) })
    };
  } catch (e) {
    return { statusCode: 502, body: JSON.stringify({ error: "Échec de la requête à l'assistant IA", details: String(e) }) };
  }
};
