// I'm The Best — practice.js
// PRACTICE[id] = tableau d'exercices de pratique (ouverts, avec corrigé) pour chaque leçon
// SITUATIONS = situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)

const PRACTICE = {

  // ---------- MATHS ----------
  m1: [
    { statement:"Calcule : (−8) + 5 − (−3) − 7.", solution:"(−8) + 5 = −3. Puis −3 − (−3) = 0. Enfin 0 − 7 = <strong>−7</strong>" },
    { statement:"Calcule : 7 − 12 + (−4).", solution:"7 − 12 = −5. Puis −5 + (−4) = <strong>−9</strong>" },
    { statement:"Range dans l'ordre croissant : −5 ; 3 ; −8 ; 0.", solution:"<strong>−8 ; −5 ; 0 ; 3</strong>" }
  ],
  m2: [
    { statement:"Écris 5³ × 5⁴ ÷ 5² sous la forme d'une seule puissance, puis calcule.", solution:"5^(3+4−2) = 5⁵ = <strong>3125</strong>" },
    { statement:"Calcule 2⁵ et 10⁻².", solution:"2⁵ = <strong>32</strong> ; 10⁻² = 1/100 = <strong>0,01</strong>" },
    { statement:"Simplifie (3²)³ en une seule puissance puis calcule.", solution:"(3²)³ = 3^(2×3) = 3⁶ = <strong>729</strong>" }
  ],
  m3: [
    { statement:"Calcule et simplifie : 2/5 + 3/10 − 1/2.", solution:"4/10 + 3/10 − 5/10 = 2/10 = <strong>1/5</strong>" },
    { statement:"Calcule : 3/4 × 8/9.", solution:"(3×8)/(4×9) = 24/36 = <strong>2/3</strong>" },
    { statement:"Calcule : 5/6 ÷ 2/3.", solution:"5/6 × 3/2 = 15/12 = <strong>5/4</strong>" }
  ],
  m4: [
    { statement:"Développe et réduis : 3(x + 2) − 2(x − 5).", solution:"3x + 6 − 2x + 10 = <strong>x + 16</strong>" },
    { statement:"Factorise : 5x + 15.", solution:"5 est facteur commun : <strong>5(x + 3)</strong>" },
    { statement:"Développe : (x + 3)(x − 2).", solution:"x² − 2x + 3x − 6 = <strong>x² + x − 6</strong>" }
  ],
  m5: [
    { statement:"Dans un triangle ABC, M ∈ [AB], N ∈ [AC], (MN)//(BC). AM=4cm, AB=10cm, AC=15cm. Calcule AN.", solution:"AN = (AM×AC)/AB = (4×15)/10 = <strong>6 cm</strong>" },
    { statement:"Même configuration : si AM/AB = 2/5 et BC = 20 cm, calcule MN.", solution:"MN = (2/5) × 20 = <strong>8 cm</strong>" },
    { statement:"Énonce en une phrase à quoi sert la réciproque du théorème de Thalès.", solution:"Elle permet de <strong>démontrer que deux droites sont parallèles</strong> à partir de l'égalité de rapports de longueurs." }
  ],
  m6: [
    { statement:"Un triangle rectangle a des côtés de l'angle droit de 6 cm et 8 cm. Calcule l'hypoténuse.", solution:"√(6²+8²) = √100 = <strong>10 cm</strong>" },
    { statement:"Un triangle a des côtés 5, 12, 13. Est-il rectangle ? Justifie.", solution:"5²+12² = 25+144 = 169 = 13². L'égalité est vérifiée, donc <strong>le triangle est rectangle</strong> (réciproque de Pythagore)." },
    { statement:"Un triangle rectangle a une hypoténuse de 13 cm et un côté de 5 cm. Calcule l'autre côté.", solution:"√(13²−5²) = √(169−25) = √144 = <strong>12 cm</strong>" }
  ],
  m7: [
    { statement:"Résous : 5x − 3 = 2x + 9.", solution:"3x = 12 → x = <strong>4</strong>" },
    { statement:"Résous : 2(x + 3) = 16.", solution:"2x + 6 = 16 → 2x = 10 → x = <strong>5</strong>" },
    { statement:"Résous : x/3 + 2 = 5.", solution:"x/3 = 3 → x = <strong>9</strong>" }
  ],
  m8: [
    { statement:"Simplifie √72.", solution:"√(36×2) = <strong>6√2</strong>" },
    { statement:"Calcule √16 × √25.", solution:"4 × 5 = <strong>20</strong>" },
    { statement:"Simplifie √98.", solution:"√(49×2) = <strong>7√2</strong>" }
  ],
  m9: [
    { statement:"Dans une classe de 20 élèves : 5 ont eu 10, 8 ont eu 12, 7 ont eu 15. Calcule la moyenne.", solution:"(5×10+8×12+7×15)/20 = 251/20 = <strong>12,55</strong>" },
    { statement:"Calcule la fréquence d'une valeur ayant un effectif de 6 pour un effectif total de 24.", solution:"6/24 = 0,25 = <strong>25 %</strong>" },
    { statement:"5 amis mesurent 150, 152, 148, 155, 150 cm. Calcule la taille moyenne.", solution:"(150+152+148+155+150)/5 = 755/5 = <strong>151 cm</strong>" }
  ],
  m10: [
    { statement:"Un triangle a deux angles de 50° et 65°. Calcule le troisième.", solution:"180 − 50 − 65 = <strong>65°</strong>" },
    { statement:"Un quadrilatère a 3 angles de 80°, 100°, 90°. Calcule le 4e.", solution:"360 − 80 − 100 − 90 = <strong>90°</strong>" },
    { statement:"Deux angles sont complémentaires ; l'un mesure 35°. Calcule l'autre.", solution:"90 − 35 = <strong>55°</strong>" }
  ],
  m11: [
    { statement:"Triangle rectangle en A, angle en B = 40°, BC = 12 cm. Calcule AB (arrondi au dixième).", solution:"AB = 12 × cos(40°) ≈ <strong>9,2 cm</strong>" },
    { statement:"Un triangle rectangle a une hypoténuse de 10 cm et un angle de 60°. Calcule le côté adjacent (cos 60° = 0,5).", solution:"10 × 0,5 = <strong>5 cm</strong>" },
    { statement:"Si le côté adjacent mesure 6 cm et l'hypoténuse 10 cm, calcule le cosinus de l'angle.", solution:"cos(angle) = 6/10 = <strong>0,6</strong>" }
  ],
  m12: [
    { statement:"Calcule le volume d'un cylindre de rayon 3 cm et hauteur 10 cm (π≈3,14).", solution:"3,14×9×10 = <strong>282,6 cm³</strong>" },
    { statement:"Calcule l'aire d'un disque de rayon 4 cm (π≈3,14).", solution:"3,14×16 = <strong>50,24 cm²</strong>" },
    { statement:"Calcule le volume d'un prisme droit de base 6 cm² et de hauteur 9 cm.", solution:"6×9 = <strong>54 cm³</strong>" }
  ],
  m13: [
    { statement:"Range dans l'ordre croissant : −3/4 ; 0,6 ; −1 ; 5/2.", solution:"<strong>−1 ; −3/4 ; 0,6 ; 5/2</strong>" },
    { statement:"Écris 7/2 sous forme décimale.", solution:"<strong>3,5</strong>" },
    { statement:"Compare −2/3 et −3/4 : lequel est le plus grand ?", solution:"−2/3 ≈ −0,667 et −3/4 = −0,75. <strong>−2/3 est le plus grand</strong> (plus proche de 0)." }
  ],
  m14: [
    { statement:"Un pavé droit mesure 5×4×3 cm. Calcule son volume et l'aire de sa base (5×4).", solution:"Volume = 60 cm³ ; aire de base = <strong>20 cm²</strong>" },
    { statement:"Un cube a une arête de 4 cm. Calcule son volume et l'aire d'une face.", solution:"Volume = 64 cm³ ; aire d'une face = <strong>16 cm²</strong>" },
    { statement:"Un pavé droit a un volume de 120 cm³ et une base de 10×4 cm. Calcule sa hauteur.", solution:"h = 120/(10×4) = <strong>3 cm</strong>" }
  ],
  m15: [
    { statement:"Un article à 8000 FCFA a une remise de 15 %. Calcule le nouveau prix.", solution:"Remise = 1200 FCFA. Nouveau prix = <strong>6800 FCFA</strong>" },
    { statement:"Sur une carte à l'échelle 1/100, une distance de 5 cm représente quelle distance réelle ?", solution:"5 × 100 = 500 cm = <strong>5 m</strong>" },
    { statement:"Un prix passe de 20 000 à 24 000 FCFA. Calcule le pourcentage d'augmentation.", solution:"(4000/20000)×100 = <strong>20 %</strong>" }
  ],
  m16: [
    { statement:"A(2;3) a pour symétrique A' par rapport à O(0;0). Donne les coordonnées de A'.", solution:"A' = <strong>(−2 ; −3)</strong>" },
    { statement:"B(−1;4) a pour symétrique B' par rapport à O. Donne les coordonnées de B'.", solution:"B' = <strong>(1 ; −4)</strong>" },
    { statement:"Cite deux propriétés conservées par une symétrie centrale.", solution:"Par exemple : <strong>les longueurs et les angles</strong> (aussi les aires et le parallélisme)." }
  ],
  m17: [
    { statement:"Le vecteur AB a pour coordonnées (3;−2). M(1;4). Donne les coordonnées de M', image de M par la translation de vecteur AB.", solution:"M' = (1+3 ; 4−2) = <strong>(4 ; 2)</strong>" },
    { statement:"Le vecteur CD a pour coordonnées (−2;5). N(3;−1). Donne les coordonnées de N', image de N par cette translation.", solution:"N' = (3−2 ; −1+5) = <strong>(1 ; 4)</strong>" },
    { statement:"Un vecteur AB va de A(0;0) à B(4;3). Donne ses coordonnées.", solution:"AB = <strong>(4 ; 3)</strong>" }
  ],
  m18: [
    { statement:"Un cercle a un rayon de 5 cm. Calcule son périmètre et l'aire du disque (π≈3,14).", solution:"Périmètre = 31,4 cm ; aire = <strong>78,5 cm²</strong>" },
    { statement:"Un cercle a un diamètre de 14 cm. Calcule son rayon et son périmètre (π≈3,14).", solution:"Rayon = 7 cm ; périmètre = 2×3,14×7 = <strong>43,96 cm</strong>" },
    { statement:"Où se trouve le centre du cercle circonscrit à un triangle rectangle ?", solution:"Il se trouve <strong>au milieu de l'hypoténuse</strong>." }
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

  // ---------- PHYSIQUE-CHIMIE ----------
  p1: [
    { statement:"Une lampe éclaire un objet opaque devant un mur. Explique ce qui se forme et pourquoi.", solution:"Une <strong>ombre portée</strong> se forme, car l'objet opaque bloque la propagation rectiligne de la lumière." },
    { statement:"Explique pourquoi on ne voit aucune ombre la nuit, sans aucune source de lumière.", solution:"Sans source lumineuse, il n'y a <strong>pas de lumière à bloquer</strong>, donc pas d'ombre possible : tout est simplement dans l'obscurité." },
    { statement:"Cite une source primaire et une source secondaire de lumière.", solution:"Source primaire : <strong>le Soleil</strong> (ou une lampe). Source secondaire : <strong>la Lune</strong> (ou un objet éclairé)." }
  ],
  p2: [
    { statement:"On verse de l'huile dans de l'eau. Quel type de mélange obtient-on, et comment les séparer ?", solution:"Mélange <strong>hétérogène</strong> ; on sépare par <strong>décantation</strong>." },
    { statement:"Quelle technique utiliser pour séparer du sable d'eau ?", solution:"La <strong>filtration</strong> (le sable, solide non dissous, est retenu par le filtre)." },
    { statement:"L'air est-il un corps pur ou un mélange ? Justifie.", solution:"C'est un <strong>mélange</strong> (homogène), car il contient plusieurs gaz : azote, oxygène, dioxyde de carbone, etc." }
  ],
  p3: [
    { statement:"Un glaçon à −18°C est laissé à température ambiante jusqu'à ébullition complète. Décris les changements d'état.", solution:"<strong>Fusion</strong> (solide→liquide) puis <strong>vaporisation</strong> (liquide→gaz)." },
    { statement:"Nomme le changement d'état du gaz vers le liquide.", solution:"C'est la <strong>liquéfaction</strong>." },
    { statement:"Pourquoi la température reste-t-elle constante pendant un changement d'état ?", solution:"Parce que l'énergie apportée sert entièrement à <strong>transformer l'état de la matière</strong>, et non à augmenter sa température, tant que le changement n'est pas terminé." }
  ],
  p4: [
    { statement:"Pour allumer 2 ampoules de façon indépendante, quel montage utiliser ? Pourquoi ?", solution:"Un montage <strong>en dérivation</strong>, pour qu'une coupure sur une branche n'affecte pas l'autre." },
    { statement:"Cite les 3 éléments indispensables d'un circuit électrique simple.", solution:"Un <strong>générateur</strong>, un <strong>récepteur</strong> et des <strong>fils de connexion</strong>." },
    { statement:"Que se passe-t-il si le circuit est ouvert ?", solution:"Le courant <strong>ne circule pas</strong> ; les récepteurs restent inactifs (l'ampoule ne s'allume pas)." }
  ],
  p5: [
    { statement:"Un objet a une masse de 270 g pour un volume de 100 cm³. Calcule sa masse volumique et dis s'il flotte.", solution:"ρ = 2,7 g/cm³ ; comme c'est <strong>plus dense que l'eau, il coule</strong>." },
    { statement:"Calcule la masse volumique d'un objet de masse 500 g pour un volume de 200 cm³.", solution:"ρ = 500/200 = <strong>2,5 g/cm³</strong>" },
    { statement:"Quel appareil permet de mesurer un volume liquide ?", solution:"<strong>L'éprouvette graduée</strong>." }
  ],
  p6: [
    { statement:"Écris le bilan de la combustion complète du carbone.", solution:"<strong>Carbone + dioxygène → dioxyde de carbone</strong>" },
    { statement:"Cite un danger lié à une combustion incomplète.", solution:"La formation de <strong>monoxyde de carbone (CO)</strong>, un gaz toxique, incolore et inodore." },
    { statement:"Quel gaz est produit par la combustion du carbone ?", solution:"Le <strong>dioxyde de carbone (CO₂)</strong>." }
  ],
  p7: [
    { statement:"Un circuit série a 2 ampoules identiques alimentées par 9V. Quelle est la tension à chaque ampoule ?", solution:"9 / 2 = <strong>4,5 V</strong> par ampoule." },
    { statement:"Comment se branche un voltmètre dans un circuit ?", solution:"<strong>En dérivation</strong> (en parallèle) aux bornes du composant." },
    { statement:"Cite l'unité de la tension électrique.", solution:"Le <strong>volt (V)</strong>." }
  ],
  p8: [
    { statement:"Une résistance de 20 Ω est traversée par 0,5 A. Calcule la tension.", solution:"U = R×I = <strong>10 V</strong>" },
    { statement:"Calcule R sachant U = 6 V et I = 0,3 A.", solution:"R = U/I = <strong>20 Ω</strong>" },
    { statement:"Quel appareil mesure directement une résistance ?", solution:"<strong>L'ohmmètre</strong>." }
  ],
  p9: [
    { statement:"Une ampoule fonctionne sous 220 V, traversée par 0,3 A. Calcule sa puissance.", solution:"P = U×I = <strong>66 W</strong>" },
    { statement:"Calcule I sachant P = 100 W et U = 220 V.", solution:"I = P/U = 100/220 ≈ <strong>0,45 A</strong>" },
    { statement:"Quelle est l'unité de la puissance électrique ?", solution:"Le <strong>watt (W)</strong>." }
  ],
  p10: [
    { statement:"Une molécule de CO₂ contient combien d'atomes, de quels éléments ?", solution:"<strong>3 atomes</strong> : 1 carbone (C) et 2 oxygène (O)." },
    { statement:"Donne le symbole chimique de l'oxygène et de l'hydrogène.", solution:"<strong>O</strong> et <strong>H</strong>." },
    { statement:"Qu'est-ce qui compose le noyau d'un atome ?", solution:"Des <strong>protons et des neutrons</strong>." }
  ],
  p11: [
    { statement:"Explique pourquoi une personne myope voit flou de loin.", solution:"Chez le myope, l'image se forme <strong>avant la rétine</strong>, ce qui rend la vision de loin floue." },
    { statement:"Quel est le rôle de la rétine ?", solution:"Elle <strong>reçoit la lumière et la transforme en signal nerveux</strong> transmis au cerveau." },
    { statement:"Quel est le rôle du cristallin ?", solution:"Il fait <strong>converger la lumière</strong> comme une lentille, pour former une image nette sur la rétine." }
  ],
  p12: [
    { statement:"Cite 2 comportements dangereux à éviter avec l'électricité, et pourquoi.", solution:"Toucher un appareil avec les mains mouillées (l'eau conduit le courant) ; démonter un appareil branché (risque de contact direct avec des éléments sous tension)." },
    { statement:"Que fait un disjoncteur en cas de surintensité ?", solution:"Il <strong>coupe automatiquement le courant</strong>, évitant surchauffe et incendie." },
    { statement:"Pourquoi la prise de terre est-elle importante ?", solution:"Elle <strong>évacue le courant vers le sol</strong> en cas de défaut, protégeant les personnes contre l'électrisation." }
  ],
  p13: [
    { statement:"Dans un circuit série, l'intensité mesurée en un point est 0,4A. Que peut-on dire ailleurs dans ce circuit ?", solution:"L'intensité est <strong>la même partout</strong> dans un circuit série : 0,4 A partout." },
    { statement:"Où doit être branché un ampèremètre : en série ou en dérivation ?", solution:"<strong>En série</strong>, dans le circuit." },
    { statement:"Dans un circuit en dérivation à 2 branches de 0,3A et 0,2A, quelle est l'intensité totale ?", solution:"0,3 + 0,2 = <strong>0,5 A</strong>" }
  ],
  p14: [
    { statement:"Une pile de lampe de poche fournit-elle un courant continu ou alternatif ? Justifie.", solution:"<strong>Continu</strong> : le courant circule toujours dans le même sens, avec une intensité stable." },
    { statement:"Cite un appareil qui fonctionne en courant continu.", solution:"Par exemple : <strong>une lampe de poche</strong> (ou un téléphone portable)." },
    { statement:"Quel type de courant produit une courbe sinusoïdale à l'oscilloscope ?", solution:"Le courant <strong>alternatif</strong>." }
  ],
  p15: [
    { statement:"Le sel dissous dans l'eau donne quels ions ? La solution est-elle conductrice ?", solution:"Ions <strong>Na⁺</strong> et <strong>Cl⁻</strong> ; oui, la solution est conductrice." },
    { statement:"Qu'est-ce qu'un cation ?", solution:"Un ion <strong>chargé positivement</strong> (a perdu des électrons)." },
    { statement:"Pourquoi l'eau pure conduit-elle très peu le courant électrique ?", solution:"Parce qu'elle contient <strong>très peu d'ions dissous</strong>, contrairement à une solution ionique." }
  ],
  p16: [
    { statement:"Un jus de citron a un pH de 2, une eau savonneuse a un pH de 10. Laquelle est acide, laquelle est basique ?", solution:"Le jus de citron (pH<7) est <strong>acide</strong> ; l'eau savonneuse (pH>7) est <strong>basique</strong>." },
    { statement:"Le pH de l'eau pure est-il acide, neutre ou basique ?", solution:"<strong>Neutre</strong> (pH = 7)." },
    { statement:"Cite un exemple de solution basique de la vie courante.", solution:"Par exemple : <strong>l'eau savonneuse</strong> (ou un produit d'entretien)." }
  ],
  p17: [
    { statement:"Écris le bilan de la combustion complète du méthane (produit CO₂ et eau).", solution:"<strong>Méthane + dioxygène → dioxyde de carbone + eau</strong>" },
    { statement:"Dans une réaction chimique, qu'appelle-t-on « réactifs » ?", solution:"Les <strong>substances de départ</strong>, avant la réaction." },
    { statement:"Que signifie « la masse se conserve » dans une réaction chimique ?", solution:"La <strong>masse totale des réactifs est égale à la masse totale des produits</strong> : rien ne se crée, rien ne se perd." }
  ],
  p18: [
    { statement:"Un objet absorbe toutes les couleurs sauf le vert, qu'il diffuse. De quelle couleur apparaît-il ?", solution:"Il apparaît <strong>vert</strong> (seule couleur renvoyée vers l'œil)." },
    { statement:"Quelles sont les 3 couleurs primaires de la lumière ?", solution:"<strong>Rouge, vert, bleu</strong>." },
    { statement:"Pourquoi un objet noir ne diffuse-t-il aucune lumière ?", solution:"Parce qu'il <strong>absorbe toutes les couleurs</strong> de la lumière qu'il reçoit, sans en renvoyer vers l'œil." }
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
      title:"L'installation électrique de la classe",
      context:"La classe veut installer 3 lampes identiques en dérivation, alimentées par 12 V. Chaque lampe a une résistance de 24 Ω.",
      tasks:[
        {prompt:"1) Quelle est la tension aux bornes de chaque lampe ?", solution:"En dérivation, chaque branche reçoit <strong>12 V</strong>."},
        {prompt:"2) Calcule l'intensité qui traverse une lampe.", solution:"I = U/R = 12/24 = <strong>0,5 A</strong>"},
        {prompt:"3) Calcule la puissance consommée par une lampe.", solution:"P = U×I = <strong>6 W</strong>"},
        {prompt:"4) Quelle est l'intensité totale fournie par le générateur ?", solution:"0,5 × 3 = <strong>1,5 A</strong>"}
      ]
    },
    {
      title:"Analyse d'une boisson",
      context:"On analyse un jus de fruit non filtré (pulpe visible), de pH égal à 3.",
      tasks:[
        {prompt:"1) Mélange homogène ou hétérogène ? Justifie.", solution:"<strong>Hétérogène</strong>, la pulpe est visible à l'œil nu."},
        {prompt:"2) Quelle technique séparerait la pulpe du liquide ?", solution:"La <strong>filtration</strong>."},
        {prompt:"3) Ce jus est-il acide, neutre ou basique ?", solution:"<strong>Acide</strong> (pH < 7)."},
        {prompt:"4) Si on y dissout du sel, la solution devient-elle plus conductrice ? Pourquoi ?", solution:"Oui, car le sel libère des <strong>ions</strong> qui favorisent le passage du courant."}
      ]
    }
  ]

};

if (typeof module !== "undefined") module.exports = { PRACTICE, SITUATIONS };
