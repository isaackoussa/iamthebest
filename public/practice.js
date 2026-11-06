// I'm The Best — practice.js
// PRACTICE[id] = tableau d'exercices de pratique (ouverts, avec corrigé) pour chaque leçon
// SITUATIONS = situations d'évaluation par matière (problèmes contextualisés combinant plusieurs leçons)

const PRACTICE = {

  // ---------- MATHS ----------
  ma1: [
    { statement:"Donne la notation scientifique de : 1 787 ; 450 000 ; 0,000 009 75 ; 789 400 000 000.", solution:"<p>1,787 × 10³ ; 4,5 × 10⁵ ; 9,75 × 10⁻⁶ ; 7,894 × 10¹¹.</p>" },
    { statement:"Calcule (1,45 × 10³) × (2,4 × 10²) et (−8 × 10⁴) × (5,3 × 10⁻⁵).", solution:"<p>(1,45 × 2,4) × 10³⁺² = <strong>3,48 × 10⁵</strong> ; (−8 × 5,3) × 10⁴⁻⁵ = −42,4 × 10⁻¹ = <strong>−4,24</strong>.</p>" },
    { statement:"Compare 0,54 × 10⁻⁴ et 2,7 × 10⁻³, puis −92 × 10⁶ et −11 × 10⁴.", solution:"<p>0,54 × 10⁻⁴ = 5,4 × 10⁻⁵ ; −5 &lt; −3, donc <strong>0,54 × 10⁻⁴ &lt; 2,7 × 10⁻³</strong>. 92 × 10⁶ = 9,2 × 10⁷ &gt; 11 × 10⁴ = 1,1 × 10⁵, donc <strong>−92 × 10⁶ &lt; −11 × 10⁴</strong>.</p>" }
  ],
  ma2: [
    { statement:"Un cercle a un rayon de 3 cm. Calcule la longueur des arcs interceptés par des angles au centre de 30° et de 135° (π ≈ 3,14).", solution:"<p>30° : π × 3 × 30/180 = π/2 ≈ <strong>1,57 cm</strong>. 135° : π × 3 × 135/180 = 2,25π ≈ <strong>7,07 cm</strong>.</p>" },
    { statement:"Les droites (D₁) et (D₂) sont parallèles et coupées par une sécante. Un angle mesure 28° ; l'angle 1 lui est supplémentaire et l'angle 2 est alterne-interne avec l'angle 1. Donne les mesures des angles 1 et 2.", solution:"<p>mes(1) = 180° − 28° = <strong>152°</strong>. Les angles 1 et 2 sont alternes-internes, formés par deux droites parallèles : <strong>mes(2) = 152°</strong>.</p>" },
    { statement:"EFG est un triangle isocèle en E inscrit dans un cercle de centre O, et mes(FÔG) = 140°. Calcule mes(EÔF).", solution:"<p>Les cordes [EF] et [EG] ont la même longueur, donc les arcs EF et EG aussi, et les angles au centre EÔF et EÔG ont la même mesure. 2 × mes(EÔF) + 140° = 360°, donc <strong>mes(EÔF) = 110°</strong>.</p>" }
  ],
  ma3: [
    { statement:"Calcule le PPCM et le PGCD de 360 et 700 en utilisant leur décomposition en facteurs premiers.", solution:"<p>360 = 2³ × 3² × 5 ; 700 = 2² × 5² × 7. PPCM = 2³ × 3² × 5² × 7 = <strong>12 600</strong>. PGCD = 2² × 5 = <strong>20</strong>.</p>" },
    { statement:"Simplifie la fraction 147/234 à l'aide du PGCD.", solution:"<p>147 = 3 × 7² et 234 = 2 × 3² × 13, donc PGCD(147 ; 234) = 3. 147/234 = <strong>49/78</strong>.</p>" },
    { statement:"Donne les arrondis d'ordre 2 et d'ordre 4, puis les troncatures à 2 et à 4 décimales de 22/7 ≈ 3,142857.", solution:"<p>Arrondis : <strong>3,14</strong> (ordre 2) et <strong>3,1429</strong> (ordre 4). Troncatures : <strong>3,14</strong> et <strong>3,1428</strong>.</p>" }
  ],
  ma4: [
    { statement:"RST est un triangle d'aire 12 cm² avec RS = 6 cm. Détermine la distance du point T à la droite (RS).", solution:"<p>Si H est le pied de la hauteur issue de T : aire = RS × TH / 2, donc TH = 2 × 12 / 6 = <strong>4 cm</strong>.</p>" },
    { statement:"Écris un programme de construction de la bissectrice d'un angle AÔB avec la règle et le compas.", solution:"<p>1) Pointe en O, trace un arc qui coupe [OA) en E et [OB) en F. 2) Pointe en E puis en F, trace deux arcs de même rayon qui se coupent en M. 3) Trace la demi-droite [OM) : c'est la bissectrice.</p>" }
  ],
  ma5: [
    { statement:"Développe et réduis : A = (x + 1)(x − 2) ; B = (2x + 7)(2x − 7) ; C = (x − 1)² − (3x − 1)².", solution:"<p>A = x² − 2x + x − 2 = <strong>x² − x − 2</strong>. B = <strong>4x² − 49</strong>. C = (x² − 2x + 1) − (9x² − 6x + 1) = <strong>−8x² + 4x</strong>.</p>" },
    { statement:"Factorise : M = a² − 16 ; N = x² + 14x + 49 ; P = 10 − 5a ; R = 2x(y − 1) + (y − 1).", solution:"<p>M = <strong>(a + 4)(a − 4)</strong> ; N = <strong>(x + 7)²</strong> ; P = <strong>5(2 − a)</strong> ; R = <strong>(y − 1)(2x + 1)</strong>.</p>" },
    { statement:"Calcule sans calculatrice, avec les produits remarquables : 11² ; 19 × 21 ; 12² − 11².", solution:"<p>11² = (10 + 1)² = <strong>121</strong> ; 19 × 21 = (20 − 1)(20 + 1) = 400 − 1 = <strong>399</strong> ; 12² − 11² = (12 + 11)(12 − 11) = <strong>23</strong>.</p>" }
  ],
  ma6: [
    { statement:"ABC est un triangle avec BC = 10 cm ; I et J sont les milieux de [AB] et [AC]. Justifie que (IJ) // (BC) puis calcule IJ.", solution:"<p>Dans le triangle ABC, la droite (IJ) passe par les milieux de deux côtés : elle est parallèle au troisième, donc <strong>(IJ) // (BC)</strong>, et <strong>IJ = BC/2 = 5 cm</strong>.</p>" },
    { statement:"Un cercle (C) a pour centre O et pour rayon 2,5 cm. Une droite (D) est perpendiculaire à (OA) en A. Donne la position de (C) et (D) si OA = 1,5 cm, 2,5 cm puis 3,5 cm.", solution:"<p>OA = 1,5 &lt; 2,5 : <strong>sécants</strong>. OA = 2,5 : <strong>tangents</strong>. OA = 3,5 &gt; 2,5 : <strong>disjoints</strong>.</p>" }
  ],
  ma7: [
    { statement:"Résous dans ℚ : x + 14 = 6 ; −x − 9 = 0 ; 2t − 5 = 10.", solution:"<p>x = 6 − 14 = <strong>−8</strong> ; −x = 9 donc x = <strong>−9</strong> ; 2t = 15 donc t = <strong>15/2</strong>.</p>" },
    { statement:"Résous dans ℚ : 2x − 3 &lt; 4x − 7 et −5y + 3 &gt; −7.", solution:"<p>2x − 4x &lt; −7 + 3, soit −2x &lt; −4, donc <strong>x &gt; 2</strong> (on divise par −2 et on change le sens). −5y &gt; −10, donc <strong>y &lt; 2</strong>.</p>" },
    { statement:"85 spectateurs ont assisté à une pièce : 500 F la place assise, 150 F la place debout, recette 30 250 F. Combien de spectateurs étaient assis ?", solution:"<p>Soit x le nombre de spectateurs assis : 500x + 150(85 − x) = 30 250, soit 350x + 12 750 = 30 250, donc 350x = 17 500 et <strong>x = 50</strong>.</p>" }
  ],
  ma8: [
    { statement:"ABCD est un parallélogramme. Cite deux égalités de vecteurs et un couple de vecteurs opposés.", solution:"<p><strong>AB→ = DC→</strong> et <strong>AD→ = BC→</strong>. AB→ et CD→ sont <strong>opposés</strong> (même direction et même longueur, sens contraires).</p>" },
    { statement:"Simplifie à l'aide de l'égalité de Chasles : AB→ + BC→ + CD→ ; MN→ + PM→ ; AB→ + BA→.", solution:"<p><strong>AD→</strong> ; PM→ + MN→ = <strong>PN→</strong> ; <strong>AA→ = 0→</strong>.</p>" }
  ],
  ma9: [
    { statement:"Définis l'image d'un point M par une symétrie orthogonale d'axe (D), par une symétrie centrale de centre O et par une translation de vecteur AB→.", solution:"<p>Symétrie orthogonale : (D) est la <strong>médiatrice</strong> de [MM']. Symétrie centrale : O est le <strong>milieu</strong> de [MM']. Translation : <strong>MM'→ = AB→</strong>.</p>" },
    { statement:"Le cercle (C) a pour centre I et pour rayon 4 cm. Décris son image par la translation de vecteur AB→.", solution:"<p>C'est le cercle de centre I' (avec II'→ = AB→) et de <strong>même rayon 4 cm</strong>, car la translation conserve les distances.</p>" }
  ],
  ma10: [
    { statement:"Les notes de 25 élèves : 7 (×4), 8 (×6), 9 (×5), 10 (×1), 11 (×1), 12 (×3), 13 (×2), 14 (×2), 15 (×1). Donne le mode et calcule la moyenne.", solution:"<p>Mode : <strong>8</strong> (effectif 6). Moyenne : (28 + 48 + 45 + 10 + 11 + 36 + 26 + 28 + 15) / 25 = 247/25 = <strong>9,88</strong>.</p>" },
    { statement:"1 000 abonnés sont répartis entre 4 compagnies représentées par des secteurs de 36°, 54°, 72° et 18°. Dresse le tableau des effectifs.", solution:"<p>Effectif = angle × 1 000 / 180 : <strong>200 ; 300 ; 400 ; 100</strong> (total 1 000). Le mode est la compagnie du secteur de 72°.</p>" }
  ],
  ma11: [
    { statement:"Cite les cinq règles de la perspective cavalière.", solution:"<p>1) Les arêtes parallèles restent parallèles. 2) La face de face est dessinée sans déformation. 3) Les arêtes cachées sont en pointillés. 4) Les fuyantes font un angle α avec l'horizontale. 5) Les fuyantes sont multipliées par un coefficient de réduction c.</p>" },
    { statement:"Un pavé droit a une face avant ABCD de 5 cm sur 3 cm et une arête [CG] de 4 cm. Avec c = 0,75, quelles sont les dimensions sur le dessin ?", solution:"<p>Face avant sans déformation : <strong>5 cm × 3 cm</strong>. Fuyante [CG] : 4 × 0,75 = <strong>3 cm</strong>.</p>" }
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
  pc1: [
    { statement:"Range dans un tableau (sources primaires / sources secondaires) : soleil, luciole, nuage, étoile, lune, arbre éclairé.", solution:"<p>Sources primaires : <strong>soleil, luciole, étoile</strong>. Sources secondaires : <strong>lune, arbre éclairé, nuage</strong>.</p>" },
    { statement:"Complète : le chlorure d'argent est ……… dans l'obscurité et devient ……… à la lumière ; c'est un récepteur ………. La LDR éclairée se comporte comme un ………, dans l'obscurité comme un ……… ; c'est un récepteur ……….", solution:"<p>Blanc ; noir ; <strong>photochimique</strong>. Conducteur électrique ; isolant électrique ; <strong>photoélectrique</strong>.</p>" },
    { statement:"On dispose d'une LDR, d'une sonnerie, de fils et d'une pile. Propose un montage qui déclenche la sonnerie dès qu'une lumière apparaît la nuit dans une salle, et explique son fonctionnement.", solution:"<p>On branche <strong>en série</strong> la pile, la sonnerie et la LDR. Dans l'obscurité, la LDR est isolante (interrupteur ouvert) : la sonnerie ne retentit pas. Si quelqu'un allume une lampe, la LDR devient conductrice (interrupteur fermé) : le courant passe et la sonnerie retentit.</p>" }
  ],
  pc2: [
    { statement:"Calcule le temps mis par la lumière du soleil pour arriver sur la Terre (distance Soleil-Terre : 150 000 000 km ; vitesse de la lumière : 300 000 km/s).", solution:"<p>t = d / v = 150 000 000 / 300 000 = <strong>500 s</strong>, soit <strong>8 min 20 s</strong>.</p>" },
    { statement:"Pendant un orage, on voit l'éclair avant d'entendre le tonnerre. Explique pourquoi (vitesse du son : 330 m/s).", solution:"<p>Les deux phénomènes sont simultanés, mais la lumière (300 000 000 m/s) va environ <strong>un million de fois plus vite</strong> que le son (330 m/s) : elle nous parvient avant le son.</p>" },
    { statement:"Dans une chambre noire, quelle est l'image de la lettre « p » ? Justifie.", solution:"<p>L'image est la lettre <strong>« d »</strong> : l'image est renversée et inversée, à cause de la <strong>propagation rectiligne</strong> de la lumière à travers le sténopé.</p>" }
  ],
  pc3: [
    { statement:"Définis l'ombre propre, l'ombre portée et le cône d'ombre.", solution:"<p><strong>Ombre propre</strong> : partie de l'objet qui ne reçoit pas la lumière. <strong>Ombre portée</strong> : ombre de l'objet sur l'écran. <strong>Cône d'ombre</strong> : zone non éclairée entre l'ombre propre et l'ombre portée.</p>" },
    { statement:"Cite dans l'ordre les phases de la Lune en partant de la nouvelle Lune.", solution:"<p>Nouvelle Lune → premier croissant → premier quartier → première gibbeuse → pleine Lune → dernière gibbeuse → dernier quartier → dernier croissant.</p>" },
    { statement:"Compare l'éclipse de Soleil et l'éclipse de Lune (phase, ordre d'alignement, quel astre est dans l'ombre de l'autre).", solution:"<p><strong>Éclipse de Soleil</strong> : à la nouvelle Lune, alignement Soleil-Lune-Terre, la Terre est dans le cône d'ombre de la Lune. <strong>Éclipse de Lune</strong> : à la pleine Lune, alignement Soleil-Terre-Lune, la Lune est dans le cône d'ombre de la Terre.</p>" }
  ],
  pc4: [
    { statement:"Cite dans l'ordre les sept couleurs de la lumière blanche.", solution:"<p>Violet, indigo, bleu, vert, jaune, orange, rouge.</p>" },
    { statement:"Donne la couleur obtenue : rouge + vert ; bleu + rouge ; bleu + vert ; jaune + bleu.", solution:"<p>Rouge + vert = <strong>jaune</strong> ; bleu + rouge = <strong>magenta</strong> ; bleu + vert = <strong>cyan</strong> ; jaune + bleu = <strong>blanc</strong>.</p>" },
    { statement:"La voiture bleue de papa paraît noire sous un lampadaire jaune. Explique.", solution:"<p>En lumière blanche, la voiture absorbe toutes les couleurs sauf le bleu. La lumière jaune est composée de rouge et de vert, que la voiture <strong>absorbe totalement</strong> : elle ne renvoie rien et paraît <strong>noire</strong>.</p>" }
  ],
  pc5: [
    { statement:"Trois aimants AB, CD et EF : A attire C, D repousse E, F est un pôle sud. Trouve la nature des pôles A, B, C, D et E.", solution:"<p>F sud donc <strong>E nord</strong>. D repousse E donc <strong>D nord</strong> et <strong>C sud</strong>. A attire C donc <strong>A nord</strong> et <strong>B sud</strong>.</p>" },
    { statement:"Décris un électroaimant et cite deux de ses applications.", solution:"<p>Un électroaimant est une <strong>bobine parcourue par un courant</strong> à l'intérieur de laquelle se trouve un <strong>noyau de fer</strong> (doux). Applications : le <strong>relais</strong> et le <strong>télérupteur</strong>.</p>" },
    { statement:"Que se passe-t-il pour les faces d'une bobine si l'on inverse les bornes de la pile ?", solution:"<p>Le sens du courant change, donc les faces <strong>s'inversent</strong> : la face nord devient face sud et inversement.</p>" }
  ],
  pc6: [
    { statement:"Explique le principe de fonctionnement d'une génératrice de bicyclette.", solution:"<p>La roue entraîne le <strong>galet</strong>, qui fait tourner l'<strong>aimant</strong> (rotor) devant la <strong>bobine</strong> (stator). Ce mouvement produit une <strong>tension alternative</strong> aux bornes de la bobine, qui allume le phare.</p>" },
    { statement:"Distingue la tension produite par un aimant et une bobine de celle d'une pile.", solution:"<p>Aimant + bobine : tension <strong>alternative</strong>, variable, qui change de signe au cours du temps. Pile : tension <strong>continue</strong>, qui ne change pas de signe (droite horizontale à l'oscilloscope).</p>" }
  ],
  pc7: [
    { statement:"Réglages de l'oscilloscope : 5 V/div et 5 ms/div. La tension monte de 3 divisions et une période occupe 4 divisions. Calcule Umax, T, N et Ueff.", solution:"<p>Umax = 3 × 5 = <strong>15 V</strong> ; T = 4 × 5 = 20 ms = <strong>0,02 s</strong> ; N = 1/0,02 = <strong>50 Hz</strong> ; Ueff = 15/1,41 ≈ <strong>10,6 V</strong>.</p>" },
    { statement:"La tension délivrée par la CIE a pour valeur efficace 220 V et pour fréquence 50 Hz. Calcule sa période et sa tension maximale.", solution:"<p>T = 1/N = 1/50 = <strong>0,02 s</strong> ; Umax = 1,41 × 220 ≈ <strong>310 V</strong>.</p>" },
    { statement:"Complète le tableau : T = 2 ms → N = ? ; T = 10 ms → N = ? ; N = 4 Hz → T = ? ; N = 2000 Hz → T = ?", solution:"<p>500 Hz ; 100 Hz ; 250 ms (0,25 s) ; 0,5 ms.</p>" }
  ],
  pc8: [
    { statement:"Une prise a trois bornes A, B, C. On mesure 230 V entre A et B, 0 V entre B et C, 230 V entre A et C. Quelle borne est reliée à la phase ?", solution:"<p>La <strong>borne A</strong> : c'est la seule qui donne une tension non nulle avec chacune des deux autres.</p>" },
    { statement:"Cite deux dispositifs de protection des personnes et deux dispositifs de protection des installations, avec leur rôle.", solution:"<p>Personnes : la <strong>prise de terre</strong> (le courant de fuite passe par la terre plutôt que par le corps) ; le <strong>disjoncteur différentiel</strong> (coupe dès 30 mA de différence entre phase et neutre). Installations : le <strong>fusible</strong> (fond en cas de surintensité) ; le <strong>disjoncteur général</strong> (coupe quand l'intensité dépasse la valeur souscrite).</p>" },
    { statement:"Donne trois règles de sécurité à respecter avec le courant du secteur.", solution:"<p>Ne jamais toucher un fil dénudé ; débrancher un appareil avant toute réparation ; éviter de brancher trop d'appareils sur une même prise ; ne jamais manipuler un appareil branché avec les mains mouillées.</p>" }
  ],
  pc9: [
    { statement:"Quelles opérations faut-il effectuer pour passer de la tension du secteur (220 V alternative) à une tension continue de 6 V ? Indique le composant utilisé à chaque étape.", solution:"<p>1) <strong>Abaisser</strong> la tension : transformateur abaisseur. 2) <strong>Redresser</strong> : pont de diodes. 3) <strong>Lisser</strong> : condensateur. L'ensemble forme un <strong>adaptateur</strong>.</p>" },
    { statement:"Vrai ou faux : (1) la diode laisse passer le courant dans un seul sens ; (2) la tension lissée comporte des alternances ; (3) la sortie d'un transformateur est continue ; (4) un transformateur a 6 bornes.", solution:"<p>(1) <strong>Vrai</strong> ; (2) <strong>Faux</strong> ; (3) <strong>Faux</strong> (elle reste alternative) ; (4) <strong>Faux</strong> (4 bornes).</p>" }
  ],
  pc10: [
    { statement:"L'or perd 3 électrons, l'argent en perd 1, le chlore en gagne 1, le cuivre en perd 2. Écris la formule de chaque ion et dis s'il s'agit d'un cation ou d'un anion.", solution:"<p>Au³⁺ (cation) ; Ag⁺ (cation) ; Cl⁻ (anion) ; Cu²⁺ (cation).</p>" },
    { statement:"Donne les ions contenus dans le sulfate de cuivre, le sulfate de fer (II) et le chlorure de fer (III), puis le réactif de chacun.", solution:"<p>Sulfate de cuivre : Cu²⁺ (soude) et SO₄²⁻ (chlorure de baryum). Sulfate de fer II : Fe²⁺ (soude) et SO₄²⁻ (chlorure de baryum). Chlorure de fer III : Fe³⁺ (soude) et Cl⁻ (nitrate d'argent).</p>" },
    { statement:"Un flacon A donne un précipité vert pâle avec la soude ; un flacon B donne un précipité rouille. Identifie les ions.", solution:"<p>A contient l'ion <strong>Fe²⁺</strong> (précipité d'hydroxyde de fer II) ; B contient l'ion <strong>Fe³⁺</strong> (précipité d'hydroxyde de fer III).</p>" }
  ],
  pc11: [
    { statement:"Une lame de fer plongée dans du sulfate de cuivre se recouvre d'un dépôt rouge et la solution devient verte. Écris les deux demi-équations puis l'équation-bilan.", solution:"<p>Cu²⁺ + 2e⁻ → Cu ; Fe → Fe²⁺ + 2e⁻. Bilan : <strong>Fe + Cu²⁺ → Cu + Fe²⁺</strong>.</p>" },
    { statement:"Électrolyse du sulfate de cuivre avec une anode en cuivre et une cathode en graphite : décris les observations et écris les équations aux électrodes.", solution:"<p>Dépôt rouge de cuivre sur la cathode, l'anode s'amincit, la solution garde sa couleur. Anode : <strong>Cu → Cu²⁺ + 2e⁻</strong>. Cathode : <strong>Cu²⁺ + 2e⁻ → Cu</strong>.</p>" }
  ],
  pc12: [
    { statement:"Range dans l'ordre les étapes du traitement de l'eau : neutralisation, décantation, filtration, désinfection, floculation.", solution:"<p>Floculation → décantation → filtration → désinfection → neutralisation.</p>" },
    { statement:"Ancien index : 1 337 m³ ; nouvel index : 1 452 m³. Calcule le cubage consommé.", solution:"<p>Cubage consommé = nouvel index − ancien index = 1 452 − 1 337 = <strong>115 m³</strong>.</p>" },
    { statement:"Propose une méthode simple pour rendre potable l'eau d'un marigot au village.", solution:"<p>Laisser reposer l'eau (<strong>décantation</strong>), la <strong>filtrer</strong> sur un tissu propre et blanc, puis la <strong>désinfecter</strong> en la faisant bouillir ou avec quelques gouttes d'eau de Javel.</p>" }
  ],
  pc13: [
    { statement:"Classe ces paramètres : saveur, odeur, pH, température, transparence, minéraux, dureté, couleur.", solution:"<p>Organoleptiques : saveur, odeur, transparence, couleur. Physico-chimiques : pH, température, minéraux, dureté.</p>" },
    { statement:"Complète le tableau d'identification : ion calcium, ion sulfate, ion chlorure (réactif et observation).", solution:"<p>Ca²⁺ : oxalate d'ammonium → précipité blanc. SO₄²⁻ : chlorure de baryum → précipité blanc de sulfate de baryum. Cl⁻ : nitrate d'argent → précipité blanc qui noircit à la lumière.</p>" },
    { statement:"Indique le rôle dans l'organisme des ions Ca²⁺, Na⁺ et Cl⁻, et Fe²⁺.", solution:"<p>Ca²⁺ (avec Mg²⁺) : construction des <strong>os</strong>. Na⁺ et Cl⁻ : <strong>contraction des muscles</strong> et rétention d'eau. Fe²⁺ : constitution de l'<strong>hémoglobine</strong> (son manque provoque l'anémie).</p>" }
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
      title:"La distance Terre-Soleil",
      context:"Pendant un cours de géographie à Béoumi, les élèves apprennent que la lumière se propage à 3 × 10⁸ m/s et qu'un rayon partant du Soleil arrive sur la Terre au bout de 8 min 20 s. Un élève affirme que ces données suffisent pour calculer la distance Terre-Soleil.",
      tasks:[
        {prompt:"1) Convertis 8 min 20 s en secondes, puis écris ce nombre en notation scientifique.", solution:"8 × 60 + 20 = 500 s = <strong>5 × 10² s</strong>."},
        {prompt:"2) Calcule la distance Terre-Soleil en mètres (distance = vitesse × temps).", solution:"(3 × 10⁸) × (5 × 10²) = 15 × 10¹⁰ = <strong>1,5 × 10¹¹ m</strong>."},
        {prompt:"3) Donne ce résultat en kilomètres et en notation scientifique.", solution:"1,5 × 10¹¹ m = 1,5 × 10⁸ km, soit <strong>150 000 000 km</strong>."}
      ]
    },
    {
      title:"Les équipes de propreté",
      context:"Le collège moderne de Daoukro compte 400 élèves dont 120 filles. Les élèves veulent former le plus grand nombre possible d'équipes de propreté, toutes identiques (même nombre de filles et même nombre de garçons).",
      tasks:[
        {prompt:"1) Combien y a-t-il de garçons ?", solution:"400 − 120 = <strong>280 garçons</strong>."},
        {prompt:"2) Décompose 120 et 280 en produits de facteurs premiers, puis calcule PGCD(120 ; 280).", solution:"120 = 2³ × 3 × 5 et 280 = 2³ × 5 × 7, donc PGCD = 2³ × 5 = <strong>40</strong>."},
        {prompt:"3) Déduis-en le nombre d'équipes et leur composition.", solution:"<strong>40 équipes</strong>, chacune de 120/40 = <strong>3 filles</strong> et 280/40 = <strong>7 garçons</strong>."}
      ]
    },
    {
      title:"Les cahiers de la rentrée",
      context:"Après l'achat des livres, il reste moins de 10 000 F à ton père pour les autres fournitures. Il te propose une calculatrice à 8 000 F et des cahiers à 300 F l'unité.",
      tasks:[
        {prompt:"1) On note x le nombre de cahiers. Écris l'inéquation qui traduit la situation.", solution:"<strong>8 000 + 300x &lt; 10 000</strong>."},
        {prompt:"2) Résous cette inéquation.", solution:"300x &lt; 2 000, donc x &lt; 2 000/300 ≈ 6,67."},
        {prompt:"3) Quel est le nombre maximum de cahiers que tu peux acheter ?", solution:"x est un nombre entier : au plus <strong>6 cahiers</strong> (8 000 + 1 800 = 9 800 F &lt; 10 000 F)."}
      ]
    },
    {
      title:"Le bal de fin d'année",
      context:"Pour choisir l'artiste du bal, on interroge 72 élèves de 4ème. Résultats : DJ Lewis 14, Matty Dollar 18, Garagistes 8, Antoinette Konan 12, Billy Billy 20.",
      tasks:[
        {prompt:"1) Quel est le mode de cette série ?", solution:"<strong>Billy Billy</strong> (effectif 20, le plus grand)."},
        {prompt:"2) Calcule l'angle de chaque secteur du diagramme semi-circulaire.", solution:"angle = 180 × effectif / 72 = 2,5 × effectif : Lewis <strong>35°</strong>, Matty <strong>45°</strong>, Garagistes <strong>20°</strong>, Antoinette <strong>30°</strong>, Billy <strong>50°</strong> (total 180°)."},
        {prompt:"3) Peut-on calculer une moyenne pour cette série ? Pourquoi ?", solution:"Non : le caractère étudié (l'artiste préféré) est <strong>qualitatif</strong>. On peut seulement donner le mode."}
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
      title:"Le compteur et le chargeur",
      context:"Un soir, les lampes de la maison de Koffi éclairent faiblement. Il mesure au voltmètre la tension d'une prise et lit 220 V ; l'étiquette du compteur indique 50 Hz. Il veut aussi recharger son téléphone, dont le chargeur porte l'inscription « Input 220 V ~ 50 Hz — Output 5 V ».",
      tasks:[
        {prompt:"1) Donne la nature de la tension du secteur et ses quatre caractéristiques.", solution:"Tension <strong>alternative sinusoïdale</strong> : Ueff = 220 V, Umax = 1,41 × 220 ≈ <strong>310 V</strong>, N = <strong>50 Hz</strong>, T = 1/50 = <strong>0,02 s</strong>."},
        {prompt:"2) Le chargeur fournit une tension continue de 5 V. Cite, dans l'ordre, les trois composants qu'il contient et le rôle de chacun.", solution:"<strong>Transformateur abaisseur</strong> (abaisse 220 V), <strong>pont de diodes</strong> (redresse, double alternance), <strong>condensateur</strong> (lisse la tension)."},
        {prompt:"3) Koffi veut ouvrir le chargeur branché pour voir l'intérieur. Que lui dis-tu ?", solution:"C'est dangereux : à partir de 25 V le courant est dangereux pour le corps. Il faut <strong>débrancher</strong> l'appareil avant toute intervention et ne jamais toucher un fil dénudé (risque d'électrisation ou d'électrocution)."},
        {prompt:"4) Quel dispositif protège les personnes si la carcasse métallique d'un appareil est mise sous tension ?", solution:"La <strong>prise de terre</strong>, associée au <strong>disjoncteur différentiel</strong> qui coupe le courant dès 30 mA de fuite."}
      ]
    },
    {
      title:"L'eau du marigot",
      context:"Pendant les vacances au village, Awa remarque que la population boit l'eau du marigot. Son grand-père a eu une forte diarrhée. Au laboratoire, on a testé un échantillon : avec le nitrate d'argent, un précipité blanc noircit à la lumière ; avec l'oxalate d'ammonium, un précipité blanc se forme.",
      tasks:[
        {prompt:"1) Définis une eau potable.", solution:"Une eau que l'on peut boire <strong>sans danger</strong> et qui respecte les <strong>normes de l'OMS</strong>."},
        {prompt:"2) Quels ions les deux tests ont-ils mis en évidence ?", solution:"Nitrate d'argent → ion <strong>chlorure Cl⁻</strong> ; oxalate d'ammonium → ion <strong>calcium Ca²⁺</strong>."},
        {prompt:"3) Cite dans l'ordre les étapes du traitement de l'eau à la SODECI.", solution:"Floculation (sulfate d'alumine) → décantation → filtration → désinfection → neutralisation (pH = 7)."},
        {prompt:"4) Propose à Awa une méthode simple pour rendre l'eau du marigot buvable.", solution:"La laisser <strong>reposer</strong> (décantation), la <strong>filtrer</strong> sur un tissu propre, puis la <strong>faire bouillir</strong> ou y ajouter quelques gouttes d'eau de Javel (désinfection)."}
      ]
    },
    {
      title:"L'éclipse de Tanguelan",
      context:"Un jour ensoleillé, à Tanguelan, le ciel s'assombrit brusquement et le Soleil prend la forme d'un anneau, puis réapparaît. Le soir même, les élèves remarquent qu'on ne voit pas la Lune dans le ciel.",
      tasks:[
        {prompt:"1) Nomme le phénomène observé.", solution:"Une <strong>éclipse de Soleil</strong>."},
        {prompt:"2) Donne l'ordre d'alignement des trois astres et la phase de la Lune à ce moment.", solution:"Soleil – <strong>Lune</strong> – Terre (la Lune au milieu) ; c'est la <strong>nouvelle Lune</strong>, ce qui explique qu'on ne la voie pas."},
        {prompt:"3) Quel principe de l'optique explique la formation de l'ombre de la Lune sur la Terre ?", solution:"La <strong>propagation rectiligne de la lumière</strong> : la Lune, opaque, arrête les rayons du Soleil et la Terre se trouve dans son cône d'ombre."},
        {prompt:"4) Combien de temps faudra-t-il attendre environ pour la prochaine nouvelle Lune ?", solution:"Une lunaison, soit environ <strong>29,5 jours</strong> (29 jours et 13 heures)."}
      ]
    }
  ]

};

if (typeof module !== "undefined") module.exports = { PRACTICE, SITUATIONS };
