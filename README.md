# I'm The Best 🏆

App de cours et d'évaluations pour la classe de 4ème : Mathématiques, Français, Anglais,
Physique-Chimie, Histoire-Géographie et SVT.

- 6 matières (84 leçons au total, dont 18 en maths, 17 en français, 19 en anglais — les 12 leçons de grammaire habituelles + 7 nouvelles leçons "Unit 1 à 7" tirées du programme officiel ivoirien —, 18 en physique-chimie, 6 en histoire-géo, 6 en SVT)
- Chaque leçon a un cours rédigé et enrichi en deux temps : un paragraphe "🔎 Pour aller plus loin" (astuce, nuance, piège à éviter) puis une section "📝 Explication détaillée et exemple corrigé" (exemple entièrement résolu ou approfondissement) pour les 77 leçons hors "Unit" — et les 7 leçons "Unit" d'anglais sont déjà rédigées comme de longs cours structurés en plusieurs sous-parties. Chaque leçon se termine par une évaluation combinant QCM et exercices de pratique ouverts (avec correction).
- Situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)
- **Générateur d'exercices IA** : sur n'importe quelle matière/leçon (ou un thème libre), génère un nouvel exercice à la demande (QCM ou exercice ouvert), jamais deux fois le même
- **Traducteur Français ⇄ Anglais** : accessible partout via le menu, et intégré directement dans chaque leçon d'anglais pour traduire un mot ou une phrase de la leçon
- Compte par email : chaque élève entre son email (pas de vérification, juste une identification), et sa progression (+ notes) est enregistrée séparément et synchronisée entre appareils
- Assistant IA sur chaque leçon (via l'API Gemini, gratuite)
- Suivi des notes de devoirs/interrogations/compositions par matière (moyenne simple + moyenne pondérée selon un coefficient libre)
- Thème "tableau noir / craie", une couleur différente par matière pour repérer facilement chaque cours

## Structure du projet

```
public/            → tout le site (HTML, CSS, JS, contenu des cours)
  index.html
  style.css
  app.js            → routage, affichage, gestion du compte, générateur, traducteur
  data.js           → contenu pédagogique (cours + quiz)
  practice.js        → exercices de pratique + situations d'évaluation
netlify/functions/
  progress.js           → sauvegarde la progression + les notes, par compte (email)
  ask-ai.js             → assistant IA sur chaque leçon (via l'API Gemini)
  generate-exercise.js  → générateur d'exercices à la demande (via l'API Gemini)
  translate.js          → traducteur français ⇄ anglais (via l'API Gemini)
netlify.toml
package.json
```

## Déploiement (même méthode que gbaka / agri / hévéa)

1. Créer un nouveau dépôt GitHub, par exemple `isaackoussa/imthebest`.
2. Pousser tout ce dossier dedans.
3. Sur Netlify : "Add new site" → "Import an existing project" → connecter ce dépôt GitHub.
4. Netlify détecte automatiquement `netlify.toml` (dossier `public` publié, fonctions dans `netlify/functions`).

## Comment fonctionne le compte par email

Au premier lancement, l'élève entre simplement son email (aucune vérification, aucun email envoyé).
Cet email sert uniquement de clé pour retrouver sa progression : s'il revient plus tard, ou se connecte
depuis un autre appareil avec le même email, il retrouve automatiquement où il en était.

## Configurer l'IA (Gemini — gratuit) : assistant, générateur, traducteur

Trois fonctionnalités partagent la même clé API **Gemini** de Google (gratuite, sans carte
bancaire, via Google AI Studio) : l'assistant IA sur chaque leçon, le générateur d'exercices et le
traducteur. Les trois fonctions Netlify utilisent le modèle **`gemini-3.8-flash`** (Gemini 3), avec
le nouveau format de sortie structurée (`generationConfig.responseFormat`).

1. Va sur **aistudio.google.com**, connecte-toi avec un compte Google.
2. Clique sur **Get API key** (ou "Obtenir une clé API") → **Create API key** → copie la clé
   générée (elle commence par `AIza...`).
3. Sur Netlify, ouvre ton site → **Site settings** → **Environment variables** → **Add a variable** :
   - Clé : `GEMINI_API_KEY` — Valeur : la clé copiée à l'étape 2.
4. Redéploie le site.

Le plan gratuit de Gemini permet plusieurs centaines de requêtes par jour, largement suffisant pour
un usage personnel/familial. Si une des trois fonctionnalités ne répond pas, vérifie que la variable
est bien enregistrée et que le site a été redéployé après son ajout.

## Si le suivi de notes/progression ne se synchronise pas (MissingBlobsEnvironmentError)

Sur certains déploiements, le contexte Netlify Blobs auto-injecté n'atteint pas la fonction
`progress.js`, même en production depuis GitHub. Si tu vois cette erreur :

1. Sur Netlify, ouvre ton site → **Site settings** → **General** → copie le **Site ID** (ou
   **API ID**).
2. Crée un **Personal access token** : Netlify → icône de profil (en haut à droite) →
   **User settings** → **Applications** → **New access token**.
3. Ajoute deux variables d'environnement (Site settings → Environment variables) :
   - `NETLIFY_SITE_ID` — le Site ID copié à l'étape 1.
   - `NETLIFY_BLOBS_TOKEN` — le token créé à l'étape 2.
4. Redéploie le site.

`progress.js` utilise ces deux variables en secours dès qu'elles sont présentes, ce qui règle le
problème dans la grande majorité des cas.

## Modifier ou ajouter du contenu

Tout le contenu (cours + questions) est dans `public/data.js`, sous forme d'un objet `COURSES`.
Les exercices de pratique et situations d'évaluation sont dans `public/practice.js`.
Pour ajouter une leçon à une matière, il suffit d'ajouter un objet dans le tableau `lessons` de cette
matière, avec un `id` unique, un `title`, un `content` (HTML) et un `quiz` (tableau de questions).

Chaque question suit ce format :
```js
{ q: "Intitulé de la question", options: ["A","B","C","D"], correct: 1, exp: "Explication de la bonne réponse" }
```
(`correct` est l'index de la bonne réponse dans `options`, en commençant à 0.)
