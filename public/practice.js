// I'm The Best — practice.js
// PRACTICE[id] = tableau d'exercices de pratique (ouverts, avec corrigé) pour chaque leçon
// SITUATIONS = situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)

const PRACTICE = {

  // ---------- MATHS ----------
  m1: [
    { statement:"Écris 560 000 en écriture scientifique (a×10^p).", solution:"<p>5,6 × 10⁵ (on déplace la virgule de 5 rangs vers la gauche).</p>" },
    { statement:"Calcule (5×10²) × (3×10³) et donne le résultat en écriture scientifique.", solution:"<p>5×3=15 et 10²⁺³=10⁵, donc 15×10⁵ = 1,5×10⁶ (on ajuste car 15 > 10).</p>" }
  ],
  m2: [
    { statement:"Les droites (d1) et (d2) sont parallèles à (d3). Que peut-on en conclure sur (d1) et (d2) ?", solution:"<p>D'après la propriété du parallélisme, (d1) et (d2) sont parallèles entre elles.</p>" },
    { statement:"(d1) ⊥ (d2) et (d2) // (d3). Que peut-on dire de (d1) et (d3) ?", solution:"<p>Une droite perpendiculaire à l'une de deux droites parallèles est perpendiculaire à l'autre : (d1) ⊥ (d3).</p>" }
  ],
  m3: [
    { statement:"Calcule A = (3/5) − (1/4).", solution:"<p>Dénominateur commun 20 : 3/5=12/20, 1/4=5/20, donc A = 12/20 − 5/20 = 7/20.</p>" },
    { statement:"Simplifie et calcule (−2/3) ÷ (4/9).", solution:"<p>(−2/3) × (9/4) = −18/12 = −3/2 après simplification par 6.</p>" }
  ],
  m4: [
    { statement:"A a pour abscisse −6 et B a pour abscisse 2. Calcule AB et l'abscisse du milieu de [AB].", solution:"<p>AB = |2−(−6)| = 8. Milieu : (−6+2)/2 = −2.</p>" },
    { statement:"I est le milieu de [AB], A a pour abscisse 3 et I a pour abscisse 7. Trouve l'abscisse de B.", solution:"<p>x_I = (x_A+x_B)/2, donc 7 = (3+x_B)/2, d'où x_B = 14−3 = 11.</p>" }
  ],
  m5: [
    { statement:"Dans un triangle ABC, I milieu de [AB], J milieu de [AC], BC=14cm. Calcule IJ.", solution:"<p>D'après la droite des milieux, IJ = BC/2 = 7 cm.</p>" },
    { statement:"Explique la différence entre une projection parallèle et une projection orthogonale.", solution:"<p>La projection parallèle se fait selon une direction quelconque (d'), la projection orthogonale se fait selon une direction perpendiculaire à la droite d'arrivée.</p>" }
  ],
  m6: [
    { statement:"Transforme x = 0,4545... (SDIP de période 2) en quotient d'entiers.", solution:"<p>100x = 45,4545..., donc 100x − x = 45, soit 99x = 45, d'où x = 45/99 = 5/11.</p>" },
    { statement:"1/9 est-il un nombre rationnel ? Justifie et donne son écriture décimale.", solution:"<p>Oui, c'est un quotient d'entiers. 1/9 = 0,111... (SDIP de période 1).</p>" }
  ],
  m7: [
    { statement:"Quelle est la somme des angles intérieurs d'un décagone (10 côtés) ?", solution:"<p>(10−2)×180 = 1440°.</p>" },
    { statement:"Un polygone régulier a 9 côtés. Quel est le nom de ce polygone et la mesure de chaque angle ?", solution:"<p>C'est un ennéagone. Somme des angles : (9−2)×180=1260°, donc chaque angle mesure 1260/9=140°.</p>" }
  ],
  m8: [
    { statement:"MNPQ est tel que le vecteur MN = (3;1) et le vecteur QP = (3;1). MNPQ est-il un parallélogramme ?", solution:"<p>Oui, car vecteur MN = vecteur QP : c'est la caractérisation vectorielle du parallélogramme.</p>" },
    { statement:"ABCD est un parallélogramme, A(1;1), B(4;1), D(1;3). Trouve les coordonnées de C.", solution:"<p>Vecteur AB = vecteur DC, donc C = D + vecteur AB = (1+3;3+0) = (4;3).</p>" }
  ],
  m9: [
    { statement:"Simplifie vecteur AB + vecteur BC + vecteur CD.", solution:"<p>D'après Chasles : AB+BC=AC, puis AC+CD=AD. Résultat : vecteur AD.</p>" },
    { statement:"I est le milieu de [AB]. Exprime vecteur AB en fonction de vecteur AI.", solution:"<p>Vecteur AI = vecteur IB, donc vecteur AB = vecteur AI + vecteur IB = 2×vecteur AI.</p>" }
  ],
  m10: [
    { statement:"3/4 est-il un nombre réel ? Est-il rationnel ?", solution:"<p>Oui aux deux : 3/4 est un quotient d'entiers (rationnel), et ℚ ⊂ ℝ, donc c'est aussi un réel.</p>" },
    { statement:"√2 est-il rationnel ? Justifie brièvement.", solution:"<p>Non, √2 est irrationnel : son écriture décimale est illimitée et non périodique (elle ne peut pas s'écrire comme quotient exact de deux entiers).</p>" }
  ],
  m11: [
    { statement:"Une série a les valeurs 5(×3), 10(×4), 15(×3). Calcule la moyenne.", solution:"<p>(5×3+10×4+15×3)/(3+4+3) = (15+40+45)/10 = 100/10 = 10.</p>" },
    { statement:"Dans un diagramme circulaire, une catégorie a une fréquence de 40%. Quel est l'angle de son secteur ?", solution:"<p>360° × 0,40 = 144°.</p>" }
  ],
  m12: [
    { statement:"Cite trois applications étudiées en 4e.", solution:"<p>La symétrie centrale, la symétrie orthogonale, la projection (ou les fonctions monômes/polynômes).</p>" },
    { statement:"Si f(x)=x−1 et g(x)=2x, calcule (g∘f)(5).", solution:"<p>f(5)=4, puis g(4)=8. Donc (g∘f)(5)=8.</p>" }
  ],
  m13: [
    { statement:"Développe (2x+3)(x−4).", solution:"<p>2x²−8x+3x−12 = 2x²−5x−12.</p>" },
    { statement:"Factorise 5x²−20.", solution:"<p>5x²−20 = 5(x²−4) = 5(x−2)(x+2).</p>" }
  ],
  m14: [
    { statement:"A(3;−2), vecteur de translation u(−1;5). Trouve les coordonnées de l'image A' de A.", solution:"<p>A' = (3−1;−2+5) = (2;3).</p>" },
    { statement:"Cite deux propriétés conservées par une translation.", solution:"<p>Les longueurs et les angles (aussi le parallélisme).</p>" }
  ],
  m15: [
    { statement:"Quelle est la composée d'une translation de vecteur u(2;3) suivie d'une translation de vecteur v(−1;4) ?", solution:"<p>C'est une translation de vecteur u+v = (1;7).</p>" },
    { statement:"Que donne la composée de deux symétries orthogonales d'axes perpendiculaires ?", solution:"<p>Une symétrie centrale, de centre le point d'intersection des deux axes.</p>" }
  ],
  m16: [
    { statement:"Un cube d'arête 6 cm est coupé par un plan parallèle à une face. Quelle est la forme et la taille de la section ?", solution:"<p>C'est un carré de 6 cm de côté, identique à la face du cube.</p>" },
    { statement:"À quoi sert la perspective cavalière ?", solution:"<p>Elle permet de représenter un solide en 3 dimensions sur une feuille plane.</p>" }
  ],
  m17: [
    { statement:"Résous l'équation 7x − 4 = 3x + 8.", solution:"<p>7x−3x = 8+4, donc 4x=12, d'où x=3.</p>" },
    { statement:"Résous l'inéquation −4x + 8 ≤ 0.", solution:"<p>−4x ≤ −8, on divise par −4 en inversant le sens : x ≥ 2.</p>" }
  ],

  // ---------- FRANÇAIS ----------
  f1: [
    { statement:"Choisis un fait divers imaginaire et rédige en 5 phrases les 5 étapes du schéma narratif.", solution:"Exemple de structure : 1) situation initiale calme, 2) élément perturbateur, 3) péripéties, 4) résolution, 5) situation finale transformée." },
    { statement:"Identifie l'élément perturbateur : « Awa rentrait tranquillement de l'école quand soudain la pluie se mit à tomber violemment. »", solution:"L'élément perturbateur est <strong>l'arrivée soudaine de la pluie violente</strong>, qui rompt la tranquillité du début." },
    { statement:"Rédige seulement la situation initiale (2 phrases) d'un récit sur un match de football.", solution:"Exemple : « Chaque samedi, les enfants du quartier se retrouvaient sur le terrain vague pour jouer au football. Ce jour-là, l'ambiance était particulièrement joyeuse. »" }
  ],
  f2: [
    { statement:"Décris en 5-6 lignes le marché de ton quartier un jour d'affluence, avec 3 adjectifs et une comparaison.", solution:"Attendu : adjectifs bien choisis, une comparaison introduite par « comme » ou « tel », organisation claire du général au particulier." },
    { statement:"Relève les procédés de description dans : « Le vieux marché, bruyant et coloré, sentait les épices et la sueur. »", solution:"Adjectifs qualificatifs (vieux, bruyant, coloré) et appel à plusieurs sens (l'ouïe avec « bruyant », l'odorat avec « sentait »)." },
    { statement:"Décris en 2 phrases le portrait physique d'un personnage de ton choix.", solution:"Attendu : au moins 2 traits physiques précis, avec un ou deux adjectifs qualificatifs." }
  ],
  f3: [
    { statement:"Transforme en comparaison puis en personnification : « Il court vite » / « La ville est sombre et inquiétante ».", solution:"Comparaison : « Il court comme une gazelle. » Personnification : « La ville dort d'un sommeil inquiétant. »" },
    { statement:"Identifie la figure de style : « Ses yeux étaient deux étoiles brillantes. »", solution:"C'est une <strong>métaphore</strong> (pas de mot de comparaison, fusion directe des deux images)." },
    { statement:"Crée une comparaison pour décrire la vitesse d'une voiture.", solution:"Exemple : « La voiture filait comme une flèche. »" }
  ],
  f4: [
    { statement:"Transforme « Tu vas au marché. » en phrase interrogative puis négative.", solution:"Interrogative : « Vas-tu au marché ? » Négative : « Tu ne vas pas au marché. »" },
    { statement:"Donne le type de la phrase : « Ferme la porte ! »", solution:"C'est une phrase <strong>injonctive</strong> (elle donne un ordre)." },
    { statement:"Transforme à la forme négative : « Il mange toujours des fruits. »", solution:"« Il ne mange jamais de fruits. »" }
  ],
  f5: [
    { statement:"Transforme au discours indirect : Il a dit : « Je pars demain matin. »", solution:"« Il a dit qu'il partait le lendemain matin. »" },
    { statement:"Transforme au discours direct : Elle a dit qu'elle était fatiguée.", solution:"« Elle a dit : “Je suis fatiguée.” »" },
    { statement:"Identifie le verbe de parole dans : « Il demanda : Où vas-tu ? »", solution:"Le verbe de parole est <strong>« demanda »</strong>." }
  ],
  f6: [
    { statement:"Rédige 2 arguments (avec exemple) pour convaincre tes parents de t'acheter un vélo.", solution:"Exemple : argument pratique (aller à l'école plus vite) + argument santé (faire de l'exercice régulièrement)." },
    { statement:"Rédige une phrase argumentative utilisant le connecteur « cependant ».", solution:"Exemple : « Le vélo coûte cher ; cependant, il ferait économiser les frais de transport chaque mois. »" },
    { statement:"Cite 2 caractéristiques d'un bon argument.", solution:"Un bon argument est <strong>clair</strong> et <strong>appuyé par un exemple concret</strong> ou un fait vérifiable." }
  ],
  f7: [
    { statement:"Indique la classe grammaticale de « chat », « dort », « sur » dans : « Le chat noir dort paisiblement sur le canapé. »", solution:"chat = nom ; dort = verbe ; sur = préposition." },
    { statement:"Indique la classe grammaticale de « rapidement » dans « Il court rapidement. »", solution:"C'est un <strong>adverbe</strong> (invariable, modifie le verbe « court »)." },
    { statement:"Donne un exemple de pronom et un exemple de conjonction.", solution:"Pronom : « elle » (par exemple). Conjonction : « mais » (par exemple)." }
  ],
  f8: [
    { statement:"Indique la fonction de « un cadeau » dans : « Elle offre un cadeau à sa sœur. »", solution:"C'est le <strong>complément d'objet direct (COD)</strong>." },
    { statement:"Indique la fonction de « à Paris » dans : « Il habite à Paris. »", solution:"C'est un <strong>complément circonstanciel de lieu</strong>." },
    { statement:"Identifie le sujet dans : « Les enfants jouent dans la cour. »", solution:"Le sujet est <strong>« les enfants »</strong>." }
  ],
  f9: [
    { statement:"Conjugue : « Il (faire) beau ce jour-là quand soudain, un orage (éclater). »", solution:"« Il faisait beau ce jour-là quand soudain, un orage éclata. »" },
    { statement:"Choisis le bon temps : « Chaque soir, elle (regarder) la télévision quand son frère (rentrer). »", solution:"« Chaque soir, elle regardait la télévision quand son frère rentrait. » (habitude → imparfait dans les deux cas ici)" },
    { statement:"Explique en une phrase la différence d'usage entre imparfait et passé simple.", solution:"L'imparfait décrit le décor ou une habitude (arrière-plan), le passé simple exprime une action brève qui fait avancer le récit." }
  ],
  f10: [
    { statement:"Conjugue : « Il faut que tu (venir) à l'heure. » et « Si j'avais le temps, je (voyager). »", solution:"« ...que tu viennes à l'heure. » / « ...je voyagerais. »" },
    { statement:"Conjugue au subjonctif : « Je souhaite qu'il (réussir) son examen. »", solution:"« Je souhaite qu'il <strong>réussisse</strong> son examen. »" },
    { statement:"Conjugue au conditionnel : « Nous (aimer) visiter ce pays. »", solution:"« Nous <strong>aimerions</strong> visiter ce pays. »" }
  ],
  f11: [
    { statement:"Relie : « J'ai lu un livre. Ce livre est passionnant. »", solution:"« J'ai lu un livre <strong>qui</strong> est passionnant. »" },
    { statement:"Relie avec « dont » : « Voici le livre. Je t'ai parlé de ce livre. »", solution:"« Voici le livre <strong>dont</strong> je t'ai parlé. »" },
    { statement:"Identifie le pronom relatif dans : « La ville où je suis né est petite. »", solution:"Le pronom relatif est <strong>« où »</strong> (il indique un lieu)." }
  ],
  f12: [
    { statement:"Relie avec un connecteur de cause puis de conséquence : « Il a plu. Le match a été annulé. »", solution:"Cause : « ...parce qu'il a plu. » Conséquence : « Il a plu, donc... »" },
    { statement:"Relie avec « car » : « Il a réussi. Il a beaucoup travaillé. »", solution:"« Il a réussi <strong>car</strong> il a beaucoup travaillé. »" },
    { statement:"Relie avec « par conséquent » : « Il pleuvait fort. Le match a été annulé. »", solution:"« Il pleuvait fort ; <strong>par conséquent</strong>, le match a été annulé. »" }
  ],
  f13: [
    { statement:"Rédige une courte introduction (3-4 phrases) pour un texte explicatif sur : « Pourquoi certains arbres perdent-ils leurs feuilles en saison sèche ? »", solution:"Attendu : généralité, importance du sujet, annonce du plan." },
    { statement:"Cite 2 connecteurs logiques utilisés dans un texte explicatif.", solution:"Par exemple : <strong>« d'abord »</strong> et <strong>« ensuite »</strong>." },
    { statement:"Donne un exemple de mot ou expression explicatif.", solution:"Par exemple : <strong>« c'est-à-dire »</strong>." }
  ],
  f14: [
    { statement:"Résume en 20 mots environ : « Le marché du village s'anime chaque samedi matin. Les vendeurs installent leurs étals dès l'aube, exposant fruits, légumes et tissus colorés. Les clients marchandent bruyamment. Vers midi, la chaleur ralentit l'activité. »", solution:"Exemple : « Chaque samedi, le marché s'anime dès l'aube ; vendeurs et clients s'activent jusqu'à ce que la chaleur de midi calme l'agitation. »" },
    { statement:"Cite 2 règles à respecter en rédigeant un résumé de texte.", solution:"Par exemple : <strong>suivre l'ordre du texte</strong> et <strong>ne pas donner son avis personnel</strong>." },
    { statement:"Pourquoi ne doit-on pas donner son avis personnel dans un résumé ?", solution:"Parce que le résumé doit rester <strong>fidèle aux idées de l'auteur</strong>, sans les déformer par un jugement extérieur." }
  ],
  f15: [
    { statement:"Rédige l'en-tête d'un compte rendu de réunion du club de lecture (invente les informations).", solution:"Exemple : intitulé, date, lieu, heure, responsable, rapporteur, membres présents/absents, ordre du jour." },
    { statement:"Cite 3 éléments qui doivent figurer dans l'en-tête d'un compte rendu.", solution:"Par exemple : <strong>la date, le lieu et le nom du rapporteur</strong>." },
    { statement:"Rédige une formule de clôture d'un compte rendu de réunion.", solution:"Exemple : « L'ordre du jour étant épuisé, la séance a été levée à 16h. »" }
  ],
  f16: [
    { statement:"Rédige un court dialogue argumentatif (4 répliques) sur l'utilité des réseaux sociaux.", solution:"Attendu : un point de vue pour, un point de vue contre, chacun appuyé d'un exemple, avec une conclusion nuancée." },
    { statement:"Cite 2 outils de langue utiles pour rédiger un dialogue argumentatif.", solution:"Par exemple : <strong>les marques du dialogue (tirets)</strong> et <strong>les verbes introducteurs de parole</strong>." },
    { statement:"Rédige une réplique exprimant un désaccord poli.", solution:"Exemple : « Je comprends ton point de vue, mais je ne suis pas totalement d'accord, car... »" }
  ],
  f17: [
    { statement:"Rédige la formule d'appel et l'objet d'une lettre au censeur pour demander un duplicata de bulletin.", solution:"Objet : Demande de duplicata de bulletin scolaire. Formule d'appel : « Monsieur le Censeur, »" },
    { statement:"Cite 3 parties obligatoires d'une lettre officielle.", solution:"Par exemple : <strong>le lieu et la date, l'objet, la formule de politesse</strong>." },
    { statement:"Rédige une formule de politesse pour clore une lettre officielle.", solution:"Exemple : « Je vous prie d'agréer, Monsieur le Censeur, l'expression de mon profond respect. »" }
  ],
  f18: [
    { statement:"Analyse le groupe nominal : « la maison de mon oncle que nous avons visitée ».", solution:"<p>Nom noyau : maison. Déterminant : la. Complément du nom : de mon oncle. Subordonnée relative : que nous avons visitée.</p>" },
    { statement:"Donne un exemple de groupe nominal avec un adjectif épithète.", solution:"<p>Exemple : « la grande maison » — « grande » est l'adjectif épithète relié au nom « maison ».</p>" }
  ],
  f19: [
    { statement:"Pronominalise : « Le maître donne un livre à Kofi. »", solution:"<p>« Le maître le lui donne. » (le = livre, lui = à Kofi)</p>" },
    { statement:"Pourquoi n'y a-t-il pas de déterminant dans « Adjoua est venue » ?", solution:"<p>« Adjoua » est un nom propre : c'est un cas de déterminant zéro.</p>" }
  ],
  f20: [
    { statement:"Le verbe « devenir » dans « Il devient médecin » est-il un verbe d'action ou d'état ?", solution:"<p>C'est un verbe d'état : il relie le sujet « Il » à l'attribut « médecin ».</p>" },
    { statement:"Le verbe « se coiffer » dans « Elle se coiffe » est-il pronominal ?", solution:"<p>Oui, il est construit avec le pronom réfléchi « se ».</p>" }
  ],
  f21: [
    { statement:"Identifie la subordonnée dans « Je crois qu'il a raison. »", solution:"<p>« qu'il a raison » est une subordonnée conjonctive complétive, complément d'objet du verbe « crois ».</p>" },
    { statement:"Identifie la subordonnée relative dans « Le fruit que tu manges est mûr. »", solution:"<p>« que tu manges » est la subordonnée relative, elle complète le nom « fruit ».</p>" }
  ],
  f22: [
    { statement:"Le mot « impatience » est-il formé par composition ou dérivation ? Décompose-le.", solution:"<p>Par dérivation : préfixe « im » + radical « patience ».</p>" },
    { statement:"Donne un exemple de mot formé par composition.", solution:"<p>Exemple : « grand-mère » (grand + mère) ou « porte-clé » (porte + clé).</p>" }
  ],
  f23: [
    { statement:"Complète et justifie : « Beaucoup de spectateurs ___ (applaudir) à la fin du spectacle. »", solution:"<p>« ont applaudi » : le verbe s'accorde avec « spectateurs », pluriel.</p>" },
    { statement:"Complète et justifie : « Peu de temps ___ (rester) avant l'examen. »", solution:"<p>« reste » : le verbe s'accorde avec « temps », singulier.</p>" }
  ],
  f24: [
    { statement:"Rédige un court argument (2-3 phrases) pour un débat sur : « Faut-il interdire les téléphones portables à l'école ? » (position : pour l'interdiction).", solution:"<p>Exemple : « Je pense que les téléphones doivent être interdits en classe, car ils détournent l'attention des élèves pendant les cours. De plus, ils favorisent les comparaisons et le harcèlement entre élèves. »</p>" },
    { statement:"Donne un exemple de formule de concession utile dans un débat.", solution:"<p>Exemple : « Certes, les téléphones permettent de rester joignable en cas d'urgence, mais leur usage doit rester limité pendant les cours. »</p>" }
  ],
  f25: [
    { statement:"Propose un plan en 3 parties pour un exposé sur « Les activités économiques de la Côte d'Ivoire ».", solution:"<p>Introduction (présenter le sujet), I. Le secteur primaire (agriculture, cacao), II. Le secteur secondaire (transformation), III. Le secteur tertiaire (commerce, services), Conclusion.</p>" },
    { statement:"Pourquoi préparer des fiches de mots-clés pour un exposé ?", solution:"<p>Pour garder un contact visuel avec le public et parler avec un débit naturel, plutôt que de lire un texte en entier.</p>" }
  ],

  // ---------- ANGLAIS ----------
  a1: [
    { statement:"Fill in: 1) She usually ___ (read) before bed. 2) Look! The children ___ (play) outside.", solution:"1) <strong>reads</strong> 2) <strong>are playing</strong>" },
    { statement:"Choose Present Simple or Continuous: 'They ___ (not/like) coffee.'", solution:"'They <strong>don't like</strong> coffee.' (general truth → Present Simple)" },
    { statement:"Write one sentence about your daily routine using the Present Simple.", solution:"Example: 'I usually have breakfast at 7 am.'" }
  ],
  a2: [
    { statement:"Put in the Past Simple: 'Yesterday, I (go) to the market and (buy) some fruits.'", solution:"'I <strong>went</strong> to the market and <strong>bought</strong> some fruits.'" },
    { statement:"Make negative: 'She went to school yesterday.'", solution:"'She <strong>didn't go</strong> to school yesterday.'" },
    { statement:"Write the past simple form of: eat, see, have.", solution:"<strong>ate, saw, had</strong>" }
  ],
  a3: [
    { statement:"Complete: 'This book is ___ (interesting) than that one, but not ___ (interesting) book I've read.'", solution:"'<strong>more interesting</strong>' / '<strong>the most interesting</strong>'" },
    { statement:"Complete: 'My brother is ___ (young) than me.'", solution:"'<strong>younger</strong>'" },
    { statement:"Write the superlative form of 'good'.", solution:"<strong>the best</strong>" }
  ],
  a4: [
    { statement:"Choose the modal: 'You ___ wear a helmet (obligation). You ___ ask your teacher (advice).'", solution:"'<strong>must</strong>' / '<strong>should</strong>'" },
    { statement:"Complete: 'You ___ smoke here.' (prohibition)", solution:"'You <strong>mustn't</strong> smoke here.'" },
    { statement:"Write a sentence giving advice using 'should'.", solution:"Example: 'You should sleep earlier.'" }
  ],
  a5: [
    { statement:"Fill in: 'We arrived ___ Abidjan ___ 6 o'clock ___ the morning.'", solution:"'<strong>in</strong>' / '<strong>at</strong>' / '<strong>in</strong>'" },
    { statement:"Fill in: 'The book is ___ the shelf.'", solution:"'<strong>on</strong>' the shelf" },
    { statement:"Fill in: 'See you ___ Friday.'", solution:"'<strong>on</strong>' Friday" }
  ],
  a6: [
    { statement:"Translate: 'Je me réveille à 6h, je prends mon petit-déjeuner avec ma grand-mère, puis je vais à l'école.'", solution:"'I wake up at 6, I have breakfast with my grandmother, then I go to school.'" },
    { statement:"Translate: 'Mon oncle vit avec ma grand-mère.'", solution:"'My uncle lives with my grandmother.'" },
    { statement:"Name 3 family members in English.", solution:"Example: <strong>mother, brother, cousin</strong>" }
  ],
  a7: [
    { statement:"Complete with will or going to: 'Look at the sky, it ___ rain. I promise I ___ call you tonight.'", solution:"'<strong>is going to</strong> rain' / '<strong>will</strong> call'" },
    { statement:"Complete: 'I ___ (help) you tomorrow, I promise.'", solution:"'I <strong>will help</strong> you tomorrow, I promise.'" },
    { statement:"Write a sentence about a planned future action using 'going to'.", solution:"Example: 'I am going to visit my cousin next week.'" }
  ],
  a8: [
    { statement:"Complete: 'She ___ (never/visit) Paris, but she ___ (already/read) books about it.'", solution:"'<strong>has never visited</strong>' / '<strong>has already read</strong>'" },
    { statement:"Complete: 'They ___ (just/arrive).'", solution:"'They <strong>have just arrived</strong>.'" },
    { statement:"Write a question using the Present Perfect and 'ever'.", solution:"Example: 'Have you ever been to London?'" }
  ],
  a9: [
    { statement:"Complete with some/any/much/many: 'There isn't ___ milk left. How ___ eggs do we need?'", solution:"'<strong>any</strong>' / '<strong>many</strong>'" },
    { statement:"Complete: 'There are ___ students in the class.'", solution:"'<strong>many</strong> students' (countable)" },
    { statement:"Complete: 'We don't have ___ time.'", solution:"'We don't have <strong>much</strong> time.' (uncountable)" }
  ],
  a10: [
    { statement:"Write the question for: 'She is 14 years old.'", solution:"'<strong>How old is she?</strong>'" },
    { statement:"Write the question for: 'They live in Abidjan.'", solution:"'<strong>Where do they live?</strong>'" },
    { statement:"Write the question for: 'She is reading a book.'", solution:"'<strong>What is she doing?</strong>'" }
  ],
  a11: [
    { statement:"Turn into passive: 'The students clean the classroom every Friday.'", solution:"'The classroom <strong>is cleaned by the students</strong> every Friday.'" },
    { statement:"Turn into passive: 'Someone stole my bike.'", solution:"'My bike <strong>was stolen</strong>.'" },
    { statement:"Turn into active: 'The letter was written by Tom.'", solution:"'<strong>Tom wrote the letter.</strong>'" }
  ],
  a12: [
    { statement:"Write a short dialogue (3 lines) at a market using 'How much', 'cheap' and 'I would like'.", solution:"Example: 'How much are these mangoes?' — 'They're cheap, 500 francs a kilo.' — 'I would like two kilos, please.'" },
    { statement:"Translate: 'Ce magasin est trop cher.'", solution:"'This shop is too expensive.'" },
    { statement:"Write a sentence using 'I would like' to order food.", solution:"Example: 'I would like a plate of rice, please.'" }
  ],
  au1: [
    { statement:"Put the verb in brackets in the Past Simple: 'Last week, I ___ (dance) for an artist in a big ceremony.'", solution:"'Last week, I <strong>danced</strong> for an artist in a big ceremony.'" },
    { statement:"Rewrite using 'used to': 'In the past, I ate in the classroom, but I don't do that any more.'", solution:"'In the past, I <strong>used to eat</strong> in the classroom, but I don't do that any more.'" },
    { statement:"Complete with 'if' or 'unless': 'You will fail your exams ___ you don't work harder.'", solution:"'You will fail your exams <strong>unless</strong> you work harder.' (ou : if you don't work harder)" }
  ],
  au2: [
    { statement:"Turn into reported speech: Jane said: \"Rural women can cook food on firewood.\"", solution:"'Jane said that rural women <strong>could</strong> cook food on firewood.'" },
    { statement:"Complete with 'have the right to' or 'have the duty to': 'Women ___ express their opinions.'", solution:"'Women <strong>have the right to</strong> express their opinions.'" },
    { statement:"Write a comparative sentence of equality: 'Girls / skilled / boys.'", solution:"'Girls are <strong>as skilled as</strong> boys.'" }
  ],
  au3: [
    { statement:"Complete: 'When you travel by plane, you ___ (need) a passport.'", solution:"'When you travel by plane, you <strong>need to have</strong> a passport.'" },
    { statement:"Turn into reported speech: \"My new life in the UK is difficult.\" Aya said.", solution:"'Aya said that <strong>her new life in the UK was difficult</strong>.'" },
    { statement:"Complete with the right preposition: 'We go to Burkina Faso ___ train.'", solution:"'We go to Burkina Faso <strong>by</strong> train.'" }
  ],
  au4: [
    { statement:"Choose Present Simple or Continuous: 'Look! Seka ___ (wear) a nice T-shirt today.'", solution:"'Look! Seka <strong>is wearing</strong> a nice T-shirt today.'" },
    { statement:"Turn into the passive voice: 'Tailors make men's clothing from kita.'", solution:"'Men's clothing <strong>is made</strong> from kita <strong>by tailors</strong>.'" },
    { statement:"Choose Present Perfect or Past Simple: 'Aya ___ (buy) a new dress in Treichville two weeks ago.'", solution:"'Aya <strong>bought</strong> a new dress in Treichville two weeks ago.' (date précise → Past Simple)" }
  ],
  au5: [
    { statement:"Complete: 'I wish I ___ (live) in Abidjan.'", solution:"'I wish I <strong>lived</strong> in Abidjan.'" },
    { statement:"Rewrite using 'so...that': 'The towns are crowded. People live in bad conditions.'", solution:"'The towns are <strong>so crowded that</strong> people live in bad conditions.'" },
    { statement:"Write a sentence expressing a feeling using 'feel + adjective'.", solution:"Example: 'Kouao has produced 10 tons of cotton. He feels very proud.'" }
  ],
  au6: [
    { statement:"Write a polite request using 'Can': you want someone to show you their ID card.", solution:"'<strong>Can you show me your ID card?</strong>'" },
    { statement:"Complete with must / mustn't: 'Citizens ___ pay taxes, but they ___ destroy public services.'", solution:"'Citizens <strong>must</strong> pay taxes, but they <strong>mustn't</strong> destroy public services.'" },
    { statement:"Complete with 'have got to' or 'has got to': 'Sally ___ practice tolerance.'", solution:"'Sally <strong>has got to</strong> practice tolerance.'" }
  ],
  au7: [
    { statement:"Give advice using 'should': 'Konan doesn't feel well.'", solution:"'Konan doesn't feel well, he <strong>should go to hospital</strong>.'" },
    { statement:"Turn into the passive voice (present continuous): 'The doctor is taking the patient's temperature.'", solution:"'The patient's temperature <strong>is being taken</strong> by the doctor.'" },
    { statement:"Make a suggestion using 'Why don't...?': 'Our classroom is dirty.'", solution:"'Our classroom is dirty. <strong>Why don't we clean it?</strong>'" }
  ],

  // ---------- PHYSIQUE-CHIMIE ----------
  p1: [
    { statement:"Cite les trois états de la matière.", solution:"<p>Solide, liquide, gazeux.</p>" },
    { statement:"Dans quel état les molécules sont-elles les plus espacées ?", solution:"<p>À l'état gazeux.</p>" }
  ],
  p2: [
    { statement:"Convertis 4,7 kg en grammes.", solution:"<p>4,7 × 1000 = 4700 g.</p>" },
    { statement:"Avec quel instrument mesure-t-on une masse ?", solution:"<p>Une balance.</p>" }
  ],
  p3: [
    { statement:"Un objet fait monter le niveau d'eau de 80 mL à 125 mL. Quel est son volume ?", solution:"<p>125−80 = 45 mL = 45 cm³.</p>" },
    { statement:"Convertis 3,4 L en cm³.", solution:"<p>3,4 × 1000 = 3400 cm³.</p>" }
  ],
  p4: [
    { statement:"Un objet a une masse de 340 g pour un volume de 200 cm³. Calcule sa masse volumique.", solution:"<p>ρ = 340/200 = 1,7 g/cm³.</p>" },
    { statement:"Un corps de densité 0,9 flotte-t-il ou coule-t-il dans l'eau ?", solution:"<p>Il flotte, car sa densité est inférieure à 1 (celle de l'eau).</p>" }
  ],
  p5: [
    { statement:"À quelle température l'eau bout-elle sous pression normale ?", solution:"<p>100°C.</p>" },
    { statement:"Quel phénomène physique explique le fonctionnement d'un thermomètre à liquide ?", solution:"<p>La dilatation thermique du liquide quand la température augmente.</p>" }
  ],
  p6: [
    { statement:"Cite les trois modes de propagation de la chaleur.", solution:"<p>Conduction, convection, rayonnement.</p>" },
    { statement:"Par quel mode la chaleur du Soleil nous parvient-elle ?", solution:"<p>Par rayonnement (peut traverser le vide).</p>" }
  ],
  p7: [
    { statement:"Comment s'appelle le passage de l'état liquide à l'état gazeux ?", solution:"<p>La vaporisation.</p>" },
    { statement:"Que se passe-t-il pour la température pendant un changement d'état ?", solution:"<p>Elle reste constante tant que le changement d'état n'est pas terminé.</p>" }
  ],
  p8: [
    { statement:"Qu'est-ce qu'une solution saturée ?", solution:"<p>Une solution dans laquelle on ne peut plus dissoudre de soluté supplémentaire.</p>" },
    { statement:"Quelle technique sépare un solide non dissous d'un liquide ?", solution:"<p>La filtration.</p>" }
  ],
  p9: [
    { statement:"Quelle est la différence entre un circuit en série et un circuit en dérivation ?", solution:"<p>En série, retirer un composant coupe tout le circuit ; en dérivation, les autres composants continuent de fonctionner.</p>" },
    { statement:"Quel est le sens conventionnel du courant électrique ?", solution:"<p>De la borne + vers la borne − à l'extérieur du générateur.</p>" }
  ],
  p10: [
    { statement:"Comment se branche un voltmètre ?", solution:"<p>En dérivation, aux bornes du composant à mesurer.</p>" },
    { statement:"Un générateur de 9V alimente 3 lampes identiques en série. Quelle tension reçoit chaque lampe ?", solution:"<p>9/3 = 3 V (loi d'additivité des tensions).</p>" }
  ],
  p11: [
    { statement:"Deux piles de 1,5V sont associées en série dans le même sens. Quelle est la tension totale ?", solution:"<p>1,5+1,5 = 3 V.</p>" },
    { statement:"Que se passe-t-il si les deux piles sont branchées en opposition ?", solution:"<p>Les tensions s'annulent, la tension totale est 0V.</p>" }
  ],
  p12: [
    { statement:"Quel dispositif de sécurité doit être remplacé après avoir coupé un circuit ?", solution:"<p>Le fusible.</p>" },
    { statement:"Que faut-il faire en premier face à une personne électrisée ?", solution:"<p>Couper le courant avant de la toucher.</p>" }
  ],
  p13: [
    { statement:"Cite les 4 caractéristiques d'une force.", solution:"<p>Point d'application, direction, sens, intensité.</p>" },
    { statement:"Avec quel instrument mesure-t-on l'intensité d'une force ?", solution:"<p>Un dynamomètre.</p>" }
  ],
  p14: [
    { statement:"Calcule le poids d'une masse de 40 kg sur Terre (g=10N/kg).", solution:"<p>P = m×g = 40×10 = 400 N.</p>" },
    { statement:"La masse d'un objet change-t-elle sur la Lune ?", solution:"<p>Non, la masse reste la même ; seul le poids change (car g est différent).</p>" }
  ],
  p15: [
    { statement:"À quoi est égale la poussée d'Archimède ?", solution:"<p>Au poids du volume de fluide déplacé par le corps immergé.</p>" },
    { statement:"Pourquoi un bateau en acier peut-il flotter ?", solution:"<p>Sa forme creuse déplace un grand volume d'eau, générant une poussée suffisante pour équilibrer son poids.</p>" }
  ],
  p16: [
    { statement:"Quelle différence entre une source primaire et une source secondaire de lumière ?", solution:"<p>La source primaire produit sa propre lumière, la source secondaire ne fait que la réfléchir.</p>" },
    { statement:"La Lune est-elle une source primaire ou secondaire ?", solution:"<p>Secondaire : elle réfléchit la lumière du Soleil.</p>" }
  ],
  p17: [
    { statement:"À quelle vitesse la lumière se propage-t-elle dans le vide ?", solution:"<p>Environ 300 000 km/s.</p>" },
    { statement:"Combien de temps met la lumière du Soleil pour atteindre la Terre ?", solution:"<p>Environ 8 minutes.</p>" }
  ],
  p18: [
    { statement:"Quelle différence entre ombre propre et ombre portée ?", solution:"<p>L'ombre propre est la partie non éclairée de l'objet lui-même ; l'ombre portée est projetée sur un écran derrière l'objet.</p>" },
    { statement:"Une éclipse de Soleil illustre quel phénomène ?", solution:"<p>Une ombre portée à l'échelle astronomique : celle de la Lune sur la Terre.</p>" }
  ],
  p19: [
    { statement:"Quels sont les trois éléments du triangle du feu ?", solution:"<p>Combustible, comburant, source de chaleur.</p>" },
    { statement:"Que faut-il faire pour éteindre un feu ?", solution:"<p>Supprimer un seul des trois éléments du triangle du feu.</p>" }
  ],
  p20: [
    { statement:"Quelle différence entre combustion complète et incomplète ?", solution:"<p>La complète produit CO2+eau, l'incomplète produit en plus du CO (toxique) et de la suie, par manque de dioxygène.</p>" },
    { statement:"Comment détecte-t-on le CO2 produit par une combustion ?", solution:"<p>Avec l'eau de chaux, qui se trouble en sa présence.</p>" }
  ],
  p21: [
    { statement:"Pourquoi le gaz domestique est-il odorisé ?", solution:"<p>Pour permettre de détecter une fuite par l'odorat.</p>" },
    { statement:"Que faire en cas de suspicion de fuite de gaz ?", solution:"<p>Couper l'arrivée de gaz, aérer, ne pas actionner d'interrupteur électrique.</p>" }
  ],
  p22: [
    { statement:"Combien d'atomes contient une molécule de CO2 ?", solution:"<p>3 atomes : 1 de carbone et 2 d'oxygène.</p>" },
    { statement:"Un atome est-il chargé électriquement ?", solution:"<p>Non, il est neutre (autant de protons que d'électrons).</p>" }
  ],
  p23: [
    { statement:"Que contient le noyau d'un atome ?", solution:"<p>Des protons et des neutrons.</p>" },
    { statement:"L'oxygène a pour numéro atomique Z=8. Combien de protons possède-t-il ?", solution:"<p>8 protons (et 8 électrons, l'atome étant neutre).</p>" }
  ],
  p24: [
    { statement:"Écris l'équation de la combustion du carbone.", solution:"<p>C + O2 → CO2.</p>" },
    { statement:"Cette équation est-elle équilibrée ? Justifie.", solution:"<p>Oui : 1 atome de C et 2 atomes de O de chaque côté.</p>" }
  ],
  p25: [
    { statement:"Écris l'équation de la combustion du dihydrogène.", solution:"<p>2H2 + O2 → 2H2O.</p>" },
    { statement:"Comment reconnaît-on le dihydrogène par un test à la flamme ?", solution:"<p>Il produit une détonation caractéristique (« pop »).</p>" }
  ],

  // ---------- SVT ----------
  s1: [
    { statement:"Cite les trois types de transformations qui apparaissent à la puberté.", solution:"<p>Morphologiques, physiologiques et psychologiques.</p>" },
    { statement:"Quelle hormone est principalement responsable des transformations chez le garçon ?", solution:"<p>La testostérone.</p>" }
  ],
  s2: [
    { statement:"Qu'est-ce que la fécondation ?", solution:"<p>La rencontre et la fusion d'un spermatozoïde et d'un ovule.</p>" },
    { statement:"Quel organe assure les échanges entre la mère et le fœtus ?", solution:"<p>Le placenta.</p>" }
  ],
  s3: [
    { statement:"Quelle est la différence entre roche volcanique et roche plutonique ?", solution:"<p>La roche volcanique refroidit rapidement en surface (texture fine), la plutonique refroidit lentement en profondeur (gros cristaux).</p>" },
    { statement:"D'où provient une roche endogène ?", solution:"<p>Du refroidissement du magma.</p>" }
  ],
  s4: [
    { statement:"Qu'est-ce que la gélifraction ?", solution:"<p>La fragmentation d'une roche par le gel et le dégel répété de l'eau infiltrée dans ses fissures.</p>" },
    { statement:"Cite un facteur d'altération des roches.", solution:"<p>Les variations de température, l'eau (gel/dégel), ou l'action des êtres vivants (racines).</p>" }
  ],
  s5: [
    { statement:"Qu'est-ce que l'humus ?", solution:"<p>La matière organique issue de la décomposition des végétaux et animaux.</p>" },
    { statement:"De quoi se compose un sol ?", solution:"<p>De fragments minéraux, de matière organique (humus), d'eau, d'air et d'organismes vivants.</p>" }
  ],
  s6: [
    { statement:"Quelle est la texture d'un sol qui draine vite mais se dessèche rapidement ?", solution:"<p>Un sol sableux.</p>" },
    { statement:"Quel type de sol retient bien l'eau mais draine mal ?", solution:"<p>Un sol argileux.</p>" }
  ],
  s7: [
    { statement:"Comment se transmet le paludisme ?", solution:"<p>Par la piqûre de moustiques qui se reproduisent dans les eaux stagnantes.</p>" },
    { statement:"Cite deux maladies transmises par une eau souillée par des bactéries.", solution:"<p>Le choléra et la fièvre typhoïde.</p>" }
  ],
  s8: [
    { statement:"Cite deux mesures pour lutter contre le paludisme.", solution:"<p>Éliminer les eaux stagnantes et utiliser des moustiquaires imprégnées.</p>" },
    { statement:"Pourquoi éloigner les latrines des points d'eau ?", solution:"<p>Pour éviter toute infiltration de matières contaminantes dans l'eau potable.</p>" }
  ],
  s9: [
    { statement:"Cite les trois grandes étapes de traitement d'une eau souillée.", solution:"<p>Décantation, filtration, désinfection.</p>" },
    { statement:"Qu'est-ce que la méthode SODIS ?", solution:"<p>Désinfecter l'eau en l'exposant aux rayons UV du soleil plusieurs heures dans une bouteille transparente.</p>" }
  ],

  // ---------- HISTOIRE-GEO ----------
  h1: [
    { statement:"Cite deux des cinq grandes zones culturelles de la Côte d'Ivoire évoquées dans ce cours.", solution:"<p>Exemple de réponse : Akan et Krou (on pouvait aussi citer Gour/Voltaïque, Mandé du Nord ou Mandé du Sud).</p>" },
    { statement:"Explique une conséquence sociale des migrations de peuplement du XVIe au XVIIIe siècle.", solution:"<p>Exemple : la disparition de certaines structures politiques anciennes, compensée par des rapprochements linguistiques et religieux grâce aux alliances entre peuples.</p>" }
  ],
  h2: [
    { statement:"Pourquoi la France a-t-elle établi un comptoir à Assinie dès 1687 ?", solution:"<p>Pour développer le commerce (troc de produits tropicaux et de minéraux contre des marchandises européennes comme le fer, le corail ou les textiles) et asseoir sa présence sur la côte.</p>" },
    { statement:"Nomme les trois zones commerciales du littoral ivoirien à l'époque des premiers contacts avec les Européens.", solution:"<p>La Côte des Graines (ouest), la Côte des Dents (centre) et la Côte des Quaquas (est).</p>" }
  ],
  h3: [
    { statement:"Explique la différence entre la négociation et la médiation comme mécanismes de résolution des conflits.", solution:"<p>La négociation est un dialogue direct entre les deux parties en conflit, sans intermédiaire. La médiation fait intervenir un tiers neutre qui aide les parties à trouver un accord volontaire.</p>" },
    { statement:"Donne un exemple d'alliance par serment chez les peuples de Côte d'Ivoire.", solution:"<p>L'alliance entre Agni et Baoulé, scellée par un serment sacré de ne jamais verser le sang entre alliés.</p>" }
  ],
  h4: [
    { statement:"Décris les trois étapes du commerce triangulaire.", solution:"<p>1) Un navire part d'Europe avec de la pacotille vers l'Afrique. 2) Sur la côte africaine, cette pacotille est échangée contre des esclaves, transportés vers l'Amérique. 3) En Amérique, les esclaves sont vendus, et le navire revient en Europe chargé de produits tropicaux.</p>" },
    { statement:"Cite une action du mouvement abolitionniste anglais et une conséquence culturelle de la traite dans les Amériques.", solution:"<p>Action abolitionniste : la reconnaissance par Granville Sharp, dès 1787, que l'esclavage était illégal sur le sol anglais. Conséquence culturelle : l'intégration d'éléments culturels africains (samba, vaudou) dans la société brésilienne.</p>" }
  ],
  h5: [
    { statement:"Cite deux facteurs qui expliquent le démarrage de la révolution industrielle en Angleterre vers 1760.", solution:"<p>Exemple : les capitaux issus du commerce atlantique finançant la recherche et l'industrie, et les ressources naturelles anglaises (fer, cuivre, charbon).</p>" },
    { statement:"Explique une conséquence sociale de la révolution industrielle.", solution:"<p>L'apparition de deux nouvelles classes sociales aux intérêts opposés : la bourgeoisie industrielle (propriétaire des usines et des capitaux) et le prolétariat ouvrier (travailleurs des usines, souvent dans des conditions difficiles).</p>" }
  ],
  h6: [
    { statement:"Que s'est-il passé le 14 juillet 1789 et quelle est la signification symbolique de cet événement ?", solution:"<p>La prise de la Bastille, prison symbole de l'arbitraire royal, marquant symboliquement la fin de l'absolutisme monarchique.</p>" },
    { statement:"Que proclame la Déclaration des droits de l'homme et du citoyen ?", solution:"<p>Des droits naturels : la liberté (de conscience, de religion, de la presse) et l'égalité (suppression des privilèges hiérarchiques, avancement possible au mérite).</p>" }
  ],
  h7: [
    { statement:"Distingue déconcentration et décentralisation à l'aide d'un exemple pour chacune.", solution:"<p>Déconcentration : un préfet, nommé par l'État et agissant en son nom, sans budget propre indépendant. Décentralisation : une commune, dirigée par un maire élu, disposant de son propre budget et prenant des décisions locales de façon autonome.</p>" },
    { statement:"Cite deux difficultés rencontrées par l'administration ivoirienne.", solution:"<p>Exemple : ressources financières limitées et conflits de compétences entre autorités (on pouvait aussi citer le personnel qualifié insuffisant ou la corruption).</p>" }
  ],
  h8: [
    { statement:"Cite un avantage et une limite de l'intégration régionale à travers l'exemple de la CEDEAO.", solution:"<p>Avantage : la suppression des visas entre citoyens des États membres, facilitant la libre circulation. Limite : le commerce intracommunautaire reste faible, freiné par une réduction lente des tarifs douaniers et l'instabilité politique dans certains États.</p>" },
    { statement:"Cite deux institutions de l'Union européenne et leur rôle.", solution:"<p>Exemple : le Parlement européen (785 députés, fonctions législative et budgétaire) et la Commission européenne (27 commissaires qui proposent les lois et exécutent le budget).</p>" }
  ]

};

const SITUATIONS = {

  maths: [
    {
      title:"Le jardin de Konan",
      context:"Konan possède un jardin rectangulaire de 12 m de longueur sur 8 m de largeur. Il veut l'entourer d'une clôture, puis calculer combien elle va lui coûter, sachant que le mètre de clôture coûte 2500 FCFA et que le vendeur lui propose une remise de 10 % s'il paie comptant.",
      tasks:[
        {prompt:"1) Calcule le périmètre du jardin.", solution:"Périmètre = 2×(12+8) = <strong>40 m</strong>"},
        {prompt:"2) Calcule l'aire du jardin.", solution:"Aire = 12 × 8 = <strong>96 m²</strong>"},
        {prompt:"3) Calcule le prix total de la clôture avant remise.", solution:"Prix = 40 × 2500 = <strong>100 000 FCFA</strong>"},
        {prompt:"4) Calcule le prix final après la remise de 10 %.", solution:"Remise = 10 000 FCFA. Prix final = <strong>90 000 FCFA</strong>"}
      ]
    },
    {
      title:"Le chantier de Monsieur Yao",
      context:"Monsieur Yao, maçon, veut vérifier qu'un angle de mur est bien droit en mesurant 3 m et 4 m sur les deux murs, puis la diagonale. Il envisage aussi un réservoir cylindrique de rayon 1 m et de hauteur 2 m.",
      tasks:[
        {prompt:"1) Quelle doit être la longueur de la diagonale si l'angle est droit ?", solution:"√(3²+4²) = √25 = <strong>5 m</strong>"},
        {prompt:"2) Il mesure exactement 5 m. Que peut-il conclure ?", solution:"L'égalité de Pythagore est vérifiée, donc <strong>l'angle est bien droit</strong> (réciproque du théorème)."},
        {prompt:"3) Calcule le volume du réservoir (π≈3,14).", solution:"V = 3,14×1²×2 = <strong>6,28 m³</strong>"}
      ]
    }
  ],

  francais: [
    {
      title:"Concours d'écriture : « Un voyage inoubliable »",
      context:"Ta classe participe à un concours d'écriture sur le thème « Un voyage inoubliable ». Le jury demande un texte narratif complet, bien construit et illustré par des figures de style.",
      tasks:[
        {prompt:"1) Rappelle les 5 étapes du schéma narratif.", solution:"Situation initiale → élément perturbateur → péripéties → résolution → situation finale."},
        {prompt:"2) Rédige 2-3 lignes de description du lieu, avec un adjectif et une comparaison.", solution:"Exemple : « La plage s'étendait, dorée et infinie, comme un tapis offert à l'horizon. »"},
        {prompt:"3) Rédige une phrase avec une personnification de la mer ou du vent.", solution:"Exemple : « Le vent chantait une mélodie ancienne à l'oreille des voyageurs. »"},
        {prompt:"4) Rédige la situation finale en 2 phrases.", solution:"Attendu : un état nouveau, différent du début, montrant ce que le voyage a changé."}
      ]
    },
    {
      title:"Le club littéraire de l'école",
      context:"Tu es membre du club littéraire. Le club vient de tenir une réunion et tu dois produire plusieurs écrits, avant d'écrire à la direction pour une demande.",
      tasks:[
        {prompt:"1) Rédige l'en-tête d'un compte rendu pour cette réunion.", solution:"Exemple : intitulé, date/lieu/heure, responsable, rapporteur, ordre du jour."},
        {prompt:"2) Rédige l'objet et la formule d'appel d'une lettre au censeur pour une sortie scolaire.", solution:"Objet : Demande d'autorisation de sortie scolaire. Formule d'appel : « Monsieur le Censeur, »"},
        {prompt:"3) Rédige 2 répliques d'un dialogue argumentatif entre 2 membres en désaccord sur le livre à choisir.", solution:"Exemple : — « Je préfère un roman d'aventure, plus captivant. » — « Je pense qu'un roman historique nous apprendrait davantage. »"}
      ]
    }
  ],

  anglais: [
    {
      title:"A trip to the market",
      context:"You are shopping at a local market with a friend. You need to buy fruits and ask about prices, and plan what to do afterwards.",
      tasks:[
        {prompt:"1) Ask the seller how much the oranges cost.", solution:"'How much are the oranges?'"},
        {prompt:"2) Say the oranges are not expensive, using 'cheap'.", solution:"'The oranges are cheap.'"},
        {prompt:"3) Say what you would like to buy.", solution:"'I would like two kilos of oranges, please.'"},
        {prompt:"4) Say what you are going to do after the market.", solution:"Example: 'We are going to visit my grandmother.'"}
      ]
    },
    {
      title:"Planning a school trip",
      context:"Your class is planning a school trip for next month. You need to discuss plans, rules, and past experiences.",
      tasks:[
        {prompt:"1) Say what the class will do if it rains.", solution:"Example: 'If it rains, we will stay inside the museum.'"},
        {prompt:"2) Write a rule using a modal verb about the trip.", solution:"Example: 'Students must stay with their group.'"},
        {prompt:"3) Ask about a past school trip using the Present Perfect.", solution:"Example: 'Have you ever been on a school trip?'"},
        {prompt:"4) Complete: 'The bus ___ (organize) by the school.' (passive)", solution:"'The bus is organized by the school.'"}
      ]
    }
  ],

  pc: [
    {
      title:"Le radeau de fortune",
      context:"Des élèves construisent un petit radeau avec un bloc de bois de volume 4000 cm³ et de masse 3,2 kg, pour vérifier s'il peut flotter sur la rivière avec du matériel dessus.",
      tasks:[
        {prompt:"1) Calcule la masse volumique du bois utilisé.", solution:"ρ = m/V = 3200/4000 = <strong>0,8 g/cm³</strong>"},
        {prompt:"2) Ce bois va-t-il flotter sur l'eau ? Justifie.", solution:"Oui, car sa masse volumique (0,8 g/cm³) est <strong>inférieure à celle de l'eau</strong> (1 g/cm³)."},
        {prompt:"3) Calcule le poids du bloc de bois sur Terre (g=10 N/kg).", solution:"P = m×g = 3,2×10 = <strong>32 N</strong>"},
        {prompt:"4) Explique avec la poussée d'Archimède pourquoi le radeau peut soutenir un poids supplémentaire avant de couler.", solution:"Tant que la poussée d'Archimède (poids du volume d'eau déplacé) reste <strong>supérieure au poids total</strong> (radeau + charge), l'ensemble continue de flotter."}
      ]
    },
    {
      title:"La cuisine à gaz de la cantine",
      context:"La cantine de l'école utilise une bouteille de gaz butane pour cuisiner. Un jour, une légère odeur de gaz est détectée près de la cuisinière.",
      tasks:[
        {prompt:"1) Pourquoi une odeur de gaz peut-elle être sentie alors que le butane est naturellement inodore ?", solution:"Le gaz domestique est <strong>volontairement odorisé</strong> par le fournisseur pour permettre de détecter une fuite."},
        {prompt:"2) Que faut-il faire immédiatement en cas de doute sur une fuite de gaz ?", solution:"<strong>Couper l'arrivée de gaz, aérer la pièce</strong>, et ne surtout pas actionner d'interrupteur électrique."},
        {prompt:"3) Écris l'équation de la combustion complète du carbone contenu dans ce type de gaz.", solution:"<strong>C + O₂ → CO₂</strong>"},
        {prompt:"4) Quel test simple permet de vérifier la présence de CO₂ dans les fumées de cuisson ?", solution:"Le test à <strong>l'eau de chaux</strong>, qui se trouble en présence de CO₂."}
      ]
    }
  ]

};

if (typeof module !== "undefined") module.exports = { PRACTICE, SITUATIONS };
