// Appel robuste à l'API Gemini, partagé par les fonctions generate-exercise,
// ask-ai et translate.
//
// Pourquoi ce fichier : l'API Gemini renvoie régulièrement une erreur 503
// ("This model is currently experiencing high demand") quand le modèle est
// momentanément saturé côté Google. Ce n'est pas un bug de l'appli, mais sans
// traitement l'élève voit un gros JSON d'erreur et n'a plus rien.
// Ici on : (1) réessaie automatiquement, (2) bascule sur un modèle de repli,
// (3) traduit l'erreur en message lisible en français.
//
// Note Netlify : ce fichier est dans un sous-dossier "lib/" qui ne contient ni
// lib.js ni index.js, il n'est donc PAS déployé comme une fonction — il est
// seulement inclus comme dépendance des fonctions qui font require() dessus.

// Modèles essayés dans l'ordre. Tous acceptent thinkingConfig.thinkingLevel.
const MODELS = {
  primary: "gemini-3.5-flash",
  secondary: "gemini-3.5-flash-lite",
  tertiary: "gemini-2.5-flash"
};

// Plan de tentatives : on réessaie une fois le modèle principal (les pics de
// charge durent souvent quelques centaines de millisecondes), puis on bascule
// sur des modèles moins sollicités.
const ATTEMPTS = [
  { model: MODELS.primary, waitBefore: 0 },
  { model: MODELS.primary, waitBefore: 600 },
  { model: MODELS.secondary, waitBefore: 300 },
  { model: MODELS.tertiary, waitBefore: 300 }
];

// Erreurs transitoires : ça vaut le coup de réessayer / changer de modèle.
const RETRYABLE = [408, 429, 500, 502, 503, 504];

// Netlify coupe une fonction synchrone à 10 s. On arrête de lancer de nouvelles
// tentatives passé ce délai pour garder de la marge au dernier appel.
const DEADLINE_MS = 6000;

function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

// Traduit une erreur de l'API Gemini en message compréhensible par un élève.
function friendlyError(status, rawBody) {
  let code = status;
  let reason = "";
  try {
    const parsed = JSON.parse(rawBody);
    if (parsed && parsed.error) {
      code = parsed.error.code || status;
      reason = parsed.error.status || "";
    }
  } catch (e) { /* corps non JSON : on se rabat sur le code HTTP */ }

  if (code === 503 || reason === "UNAVAILABLE") {
    return "L'IA de Google est momentanément surchargée (pic de demande). Ce n'est pas un problème de l'appli : réessaie dans quelques secondes.";
  }
  if (code === 429 || reason === "RESOURCE_EXHAUSTED") {
    return "Le quota d'utilisation de l'IA est atteint pour le moment. Réessaie un peu plus tard.";
  }
  if (code === 401 || code === 403 || reason === "PERMISSION_DENIED" || reason === "UNAUTHENTICATED") {
    return "La clé API Gemini est invalide ou n'a pas les droits nécessaires (à vérifier dans les variables d'environnement Netlify).";
  }
  if (code === 404 || reason === "NOT_FOUND") {
    return "Le modèle d'IA demandé est introuvable (le nom du modèle doit être mis à jour).";
  }
  if (code === 400 || reason === "INVALID_ARGUMENT") {
    return "Requête refusée par l'API Gemini (paramètre invalide).";
  }
  if (code === 500 || reason === "INTERNAL") {
    return "Erreur interne côté Google. Réessaie dans un instant.";
  }
  if (code === 0) {
    return "Impossible de joindre l'IA (problème de réseau). Réessaie dans un instant.";
  }
  return "L'IA n'a pas pu répondre pour le moment. Réessaie dans un instant.";
}

// Appelle Gemini avec réessais + repli de modèle.
// Retourne { ok: true, text, model } ou { ok: false, status, message, details }.
async function callGemini(options) {
  const opts = options || {};
  const doFetch = opts.fetchImpl || fetch;
  const started = Date.now();
  let last = { status: 0, body: "" };
  const tried = [];

  for (const attempt of ATTEMPTS) {
    if (Date.now() - started > DEADLINE_MS) break;
    if (attempt.waitBefore) await sleep(attempt.waitBefore);

    const generationConfig = {
      maxOutputTokens: opts.maxOutputTokens || 900,
      thinkingConfig: { thinkingLevel: opts.thinkingLevel || "low" }
    };
    // Sortie JSON structurée (champs officiels de l'endpoint generateContent).
    if (opts.responseSchema) {
      generationConfig.responseMimeType = "application/json";
      generationConfig.responseSchema = opts.responseSchema;
    }

    tried.push(attempt.model);

    let resp;
    try {
      resp = await doFetch(
        "https://generativelanguage.googleapis.com/v1beta/models/" + attempt.model + ":generateContent",
        {
          method: "POST",
          headers: {
            "x-goog-api-key": opts.apiKey,
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            system_instruction: { parts: [{ text: opts.systemInstruction }] },
            contents: [{ role: "user", parts: [{ text: opts.userText }] }],
            generationConfig
          })
        }
      );
    } catch (e) {
      // Erreur réseau : on tente la suite du plan.
      last = { status: 0, body: String(e) };
      continue;
    }

    if (resp.ok) {
      let data;
      try {
        data = await resp.json();
      } catch (e) {
        last = { status: 502, body: "Réponse illisible de l'API" };
        continue;
      }
      const text = data &&
        data.candidates &&
        data.candidates[0] &&
        data.candidates[0].content &&
        data.candidates[0].content.parts &&
        data.candidates[0].content.parts[0] &&
        data.candidates[0].content.parts[0].text;

      if (text) {
        return { ok: true, text: text, model: attempt.model, tried: tried };
      }
      // Réponse vide (filtre de sécurité, coupure de tokens...) : on retente ailleurs.
      last = { status: 502, body: JSON.stringify({ error: { code: 502, status: "EMPTY" } }) };
      continue;
    }

    last = { status: resp.status, body: await resp.text() };

    // Erreur définitive (clé invalide, requête malformée...) : insister ne sert à rien.
    if (RETRYABLE.indexOf(resp.status) === -1) break;
  }

  return {
    ok: false,
    status: last.status,
    message: friendlyError(last.status, last.body),
    details: last.body,
    tried: tried
  };
}

module.exports = { callGemini, friendlyError, MODELS, ATTEMPTS, DEADLINE_MS };
