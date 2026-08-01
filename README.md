# I'm The Best 🏆

App de cours et d'évaluations pour la classe de 4ème : Mathématiques, Français, Anglais,
Physique-Chimie, Histoire-Géographie et SVT.

- 6 matières (77 leçons au total, dont 18 en maths, 17 en français, 12 en anglais, 18 en physique-chimie, 6 en histoire-géo, 6 en SVT)
- Chaque leçon a un cours rédigé + une évaluation combinant QCM et exercices de pratique ouverts (avec correction)
- Situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)
- Compte par email : chaque élève entre son email, reçoit un code de vérification à 6 chiffres, et sa progression est enregistrée séparément et synchronisée entre appareils
- Thème "tableau noir / craie", une couleur différente par matière pour repérer facilement chaque cours

## Structure du projet

```
public/            → tout le site (HTML, CSS, JS, contenu des cours)
  index.html
  style.css
  app.js            → routage, affichage, authentification
  data.js           → contenu pédagogique (cours + quiz)
  practice.js        → exercices de pratique + situations d'évaluation
netlify/functions/
  progress.js       → sauvegarde la progression, par compte (email)
  send-code.js      → génère un code à 6 chiffres et l'envoie par email (via Resend)
  verify-code.js    → vérifie le code saisi par l'élève
netlify.toml
package.json
```

## Déploiement (même méthode que gbaka / agri / hévéa)

1. Créer un nouveau dépôt GitHub, par exemple `isaackoussa/imthebest`.
2. Pousser tout ce dossier dedans.
3. Sur Netlify : "Add new site" → "Import an existing project" → connecter ce dépôt GitHub.
4. Netlify détecte automatiquement `netlify.toml` (dossier `public` publié, fonctions dans `netlify/functions`).

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

## Configurer l'envoi d'email (Resend — gratuit)

L'app utilise [Resend](https://resend.com) pour envoyer les codes de vérification. Le plan
gratuit permet 100 emails par jour et 3000 par mois, sans carte bancaire.

1. Va sur **resend.com** et crée un compte gratuit (avec ton email).
2. Une fois connecté, va dans **API Keys** (menu de gauche) → **Create API Key** → donne-lui un nom
   (ex : "imthebest") → copie la clé générée (elle commence par `re_...`).
3. Sur Netlify, ouvre ton site → **Site settings** → **Environment variables** → **Add a variable** :
   - Clé : `RESEND_API_KEY` — Valeur : la clé copiée à l'étape 2.
4. (Optionnel) Sans domaine personnalisé, les emails partent automatiquement depuis
   `onboarding@resend.dev` — ça fonctionne très bien pour ce projet, aucune configuration
   supplémentaire n'est nécessaire. Si tu veux un jour envoyer depuis ton propre nom de domaine,
   ajoute une variable `FROM_EMAIL` (ex : `"I'm The Best <noreply@tondomaine.com>"`) après avoir
   vérifié ce domaine dans Resend.
5. Redéploie le site (ou déclenche un nouveau déploiement) pour que la variable soit prise en compte.

Une fois cela fait, chaque élève qui ouvre l'app pour la première fois entre son email, reçoit un
code par email, et accède ensuite à sa propre progression.

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
