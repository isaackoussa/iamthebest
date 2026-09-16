# I'm The Best 🏆

App de cours et d'évaluations pour la classe de 4ème : Mathématiques, Français, Anglais,
Physique-Chimie, Histoire-Géographie et SVT.

- 6 matières (103 leçons au total, dont 17 en maths, 25 en français, 19 en anglais — les 12 leçons de grammaire habituelles + 7 leçons "Unit 1 à 7" tirées du programme officiel ivoirien —, 25 en physique-chimie, 8 en histoire-géographie, 9 en SVT). Les leçons de maths, physique-chimie, SVT et français (dont 8 leçons ajoutées : groupe nominal, pronominalisation, le verbe, subordonnées, orthographe lexicale/grammaticale, le débat, l'exposé oral) ont été alignées chapitre par chapitre sur le programme officiel ivoirien 4ème (APC), à partir des cours PDF fournis (maths "COURS DE MATHS NIVEAU 4ème APC" et "Maths 4ième École numérique", physique-chimie "L'ARME FATALE" et "Cours et exercices PC 4ième", français "GRAMMAIRE 4e" et "Fiche de leçon 4e APC français", SVT "cours-svt-4eme"). L'histoire-géographie (auparavant un contenu généraliste, sans support officiel) a été entièrement reconstruite à partir de 4 documents trouvés sur fomesoutra.com (le "Document didactiques Histoire et Géographie niveau 4ème" et 3 fiches de leçon détaillées) : 6 leçons d'Histoire (peuplement et zones culturelles de la Côte d'Ivoire, contacts CI-Europe XVe-XVIIIe s., mécanismes de prévention/résolution des conflits, traite négrière et abolition, révolution industrielle, révolution française de 1789) et 2 leçons de Géographie (organisation administrative de la Côte d'Ivoire, regroupements économiques régionaux CEDEAO/Union européenne).
- Chaque leçon a un cours rédigé et enrichi en plusieurs temps : un paragraphe "🔎 Pour aller plus loin" (astuce, nuance, piège à éviter), une section "📝 Explication détaillée et exemple corrigé" (exemple entièrement résolu ou approfondissement), et pour 15 leçons (13 en maths/physique-chimie + 2 en français) une section supplémentaire "📌 Point du programme à ne pas manquer" avec une question de quiz dédiée, ajoutée après une relecture fine des PDF officiels ayant révélé un sous-thème manquant ou un détail à préciser (maths : puissances de 10, puissance d'une fraction, ordre/puissances négatives/approximation décimale dans ℚ, multiplication d'un vecteur par un nombre, opérations dans ℝ, application dans ℝ, résolution de problèmes ; physique-chimie : densité d'un gaz, critères de pureté, conducteurs/isolants, adaptation et surtension/sous-tension, court-circuit, catégories de forces et équilibre ; français : les deux types de sujets du texte explicatif, exemples de textes-supports pour le résumé) — et les 7 leçons "Unit" d'anglais sont rédigées comme de longs cours structurés en plusieurs sous-parties. Chaque leçon se termine par une évaluation combinant QCM et exercices de pratique ouverts (avec correction).
- **Vérification de conformité (recherche directe sur fomesoutra.com)** : une revue croisée des dossiers de cours 4ème de fomesoutra.com a confirmé que les PDF déjà utilisés pour maths ("COURS DE MATHS NIVEAU 4ième APC by TEHUA", dossier "COURS Mathématiques 4ième APC") et physique-chimie ("L'ARME FATALE") sont bien les documents officiels de référence hébergés sur ce site (même fichier, même auteur). Le français a été confirmé et enrichi grâce au document "Expression écrite 4e by Tehua.pdf" (source des leçons f13 à f17). Le dossier maths de fomesoutra contient aussi d'anciens PDF isolés (Thalès, Pythagore, cosinus...) qui ne font PAS partie du dossier "APC" officiel utilisé ici — ils appartiennent à une ressource distincte, non retenue, pour ne pas mélanger deux programmes différents.
- Situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)
- **Générateur d'exercices** : deux moteurs au choix, sur n'importe quelle matière/leçon, jamais deux fois le même exercice.
  - **⚡ Générateur local** (`public/local-gen.js`, nouveau) : fonctionne instantanément, sans IA, sans connexion, sans clé API. Deux mécanismes combinés : (1) des générateurs procéduraux pour les 17 leçons de maths et 10 leçons de physique-chimie (énoncés à valeurs aléatoires, réponse recalculée à chaque fois → variété quasi infinie), et (2) pour les 103 leçons (toutes matières), un tirage dans le quiz et les exercices de pratique de la leçon, options mélangées et index de bonne réponse recalculé, en évitant de répéter deux fois de suite le même exercice.
  - **🧠 Générateur IA** (Gemini, `netlify/functions/generate-exercise.js`) : conservé tel quel, seul moteur capable de traiter un thème libre (hors leçons de l'appli), mais dépend d'une connexion et d'une clé API valide.
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
  local-gen.js       → générateur d'exercices local (sans IA, illimité)
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
traducteur. Les trois fonctions Netlify utilisent le modèle **`gemini-3.5-flash`** (Gemini 3, gratuit
sans carte bancaire — les modèles plus récents `gemini-3.8-flash`/`3.7-flash`/`3.6-flash` nécessitent
un compte payant), avec le nouveau format de sortie structurée (`generationConfig.responseFormat`).

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
