// Générateur d'exercices à la demande (via l'API Gemini)
const { callGemini } = require("./lib/gemini.js");

// Nettoie le texte renvoyé par l'IA : supprime toute notation LaTeX (l'appli n'a pas de moteur
// de rendu LaTeX/MathJax, donc $...$, \(...\), \frac{}{} etc. s'afficheraient tels quels, en
// caractères bruts, au lieu d'un rendu mathématique) et la convertit en notation texte simple
// cohérente avec le reste de l'appli (×, ÷, ^8, √(...), 1/2...).
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
    .replace(/\\([a-zA-Z]+)/g, "$1") // toute autre commande LaTeX oubliée -> on garde juste le mot
    .replace(/\{([^{}]*)\}/g, "$1")  // accolades LaTeX restantes -> on les retire
    .trim();
}

// Retire un préfixe de type "A)", "A.", "A -", "* " que l'IA ajoute parfois devant une option,
// en plus de la lettre déjà affichée par l'interface (ce qui produisait une double lettre).
function stripOptionPrefix(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(/^\s*[*\-•]\s*/, "")
    .replace(/^\s*[A-Da-d]\s*[\)\.\:]\s*/, "")
    .replace(/^\s*[A-Da-d](?=[0-9(\\$])\s*/, "") // ex : "A\(7..." ou "A7..." collé sans séparateur
    .trim();
}

function cleanExercise(type, exercise) {
  if (type === "qcm") {
    exercise.q = stripLatex(exercise.q);
    // on retire un éventuel préfixe de lettre avant ET après avoir nettoyé le LaTeX
    // (ex : "A\(7 \times 10^{8}\)" -> "A7 × 10^8" après nettoyage LaTeX -> "7 × 10^8")
    exercise.options = exercise.options.map(o => stripOptionPrefix(stripLatex(stripOptionPrefix(o))));
    exercise.exp = stripLatex(exercise.exp);
  } else {
    exercise.statement = stripLatex(exercise.statement);
    exercise.solution = stripLatex(exercise.solution);
  }
  return exercise;
}

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
IMPORTANT — format du texte : n'utilise JAMAIS de notation LaTeX (pas de \`$...$\`, \`\\(...\\)\`, \`\\frac{}{}\`, \`\\times\`, accolades \`{}\`, etc.) car le texte est affiché tel quel, sans moteur de rendu mathématique.
Écris les maths en texte brut simple : × pour la multiplication, ÷ pour la division, ^ pour une puissance (ex : 10^8), √(...) pour une racine, des fractions écrites "a/b".
Chaque élément de "options" doit être UNIQUEMENT le texte de la réponse, SANS lettre ni préfixe devant (pas de "A)", pas de "A.", pas de "* ") : les lettres A/B/C/D sont déjà affichées par l'application.
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
IMPORTANT — format du texte : n'utilise JAMAIS de notation LaTeX (pas de \`$...$\`, \`\\(...\\)\`, \`\\frac{}{}\`, \`\\times\`, accolades \`{}\`, etc.) car le texte est affiché tel quel, sans moteur de rendu mathématique.
Écris les maths en texte brut simple : × pour la multiplication, ÷ pour la division, ^ pour une puissance (ex : 10^8), √(...) pour une racine, des fractions écrites "a/b".
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
    const call = await callGemini({
      apiKey,
      systemInstruction,
      userText: `Génère l'exercice demandé (matière : ${subjectName}, ${subjectTopic}, difficulté : ${difficulty}). Varie le sujet à chaque fois pour ne jamais répéter un exercice précédent.`,
      maxOutputTokens: 900,
      thinkingLevel: "low",
      responseSchema
    });

    if (!call.ok) {
      return {
        statusCode: 502,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ error: call.message, retryable: true })
      };
    }

    const raw = call.text;

    let exercise;
    try {
      const cleaned = raw.trim().replace(/^```json\s*/i, "").replace(/^```\s*/, "").replace(/```\s*$/, "");
      exercise = JSON.parse(cleaned);
    } catch (e) {
      return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "L'IA a renvoyé une réponse illisible. Réessaie.", retryable: true }) };
    }

    if (type === "qcm") {
      if (!exercise.q || !Array.isArray(exercise.options) || exercise.options.length !== 4 ||
          typeof exercise.correct !== "number" || exercise.correct < 0 || exercise.correct > 3 || !exercise.exp) {
        return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "L'IA a renvoyé une question mal formée. Réessaie.", retryable: true }) };
      }
    } else {
      if (!exercise.statement || !exercise.solution) {
        return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "L'IA a renvoyé un exercice mal formé. Réessaie.", retryable: true }) };
      }
    }

    exercise = cleanExercise(type, exercise);

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type, exercise })
    };
  } catch (e) {
    return { statusCode: 502, headers: { "Content-Type": "application/json" }, body: JSON.stringify({ error: "Le générateur IA est injoignable pour le moment. Réessaie dans un instant.", retryable: true }) };
  }
};
