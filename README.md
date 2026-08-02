# I'm The Best 🏆

App de cours et d'évaluations pour la classe de 4ème : Mathématiques, Français, Anglais,
Physique-Chimie, Histoire-Géographie et SVT.

- 6 matières (77 leçons au total, dont 18 en maths, 17 en français, 12 en anglais, 18 en physique-chimie, 6 en histoire-géo, 6 en SVT)
- Chaque leçon a un cours rédigé + une évaluation combinant QCM et exercices de pratique ouverts (avec correction)
- Situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)
- Compte par email : chaque élève entre son email (pas de vérification, juste une identification), et sa progression est enregistrée séparément et synchronisée entre appareils
- Assistant IA sur chaque leçon (via l'API Gemini, gratuite)
- Thème "tableau noir / craie", une couleur différente par matière pour repérer facilement chaque cours

## Structure du projet

```
public/            → tout le site (HTML, CSS, JS, contenu des cours)
  index.html
  style.css
  app.js            → routage, affichage, gestion du compte
  data.js           → contenu pédagogique (cours + quiz)
  practice.js        → exercices de pratique + situations d'évaluation
netlify/functions/
  progress.js       → sauvegarde la progression, par compte (email)
  ask-ai.js         → assistant IA (via l'API Gemini)
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

## Configurer l'assistant IA (Gemini — gratuit)

Chaque page de leçon a un petit assistant IA auquel l'élève peut poser une question ; il répond en
se basant sur le contenu de la leçon. Ça utilise l'API **Gemini** de Google (gratuite, sans carte
bancaire, via Google AI Studio).

1. Va sur **aistudio.google.com**, connecte-toi avec un compte Google.
2. Clique sur **Get API key** (ou "Obtenir une clé API") → **Create API key** → copie la clé
   générée (elle commence par `AIza...`).
3. Sur Netlify, ouvre ton site → **Site settings** → **Environment variables** → **Add a variable** :
   - Clé : `GEMINI_API_KEY` — Valeur : la clé copiée à l'étape 2.
4. Redéploie le site.

Le plan gratuit de Gemini permet plusieurs centaines de requêtes par jour, largement suffisant pour
un usage personnel/familial. Si l'assistant ne répond pas, vérifie que la variable est bien
enregistrée et que le site a été redéployé après son ajout.

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
