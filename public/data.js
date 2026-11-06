// I'm The Best — Contenu pédagogique 4ème
// Structure : COURSES[matiere] = { name, color, icon, lessons: [{id, title, content, quiz:[{q,options,correct,exp}]}] }

const COURSES = {

maths: {
  name: "Mathématiques",
  color: "#F2B84B",
  icon: "📐",
  // Programme éducatif officiel 4ème Côte d'Ivoire (DPFC, 2023), aligné sur le cours
  // complet "Maths 4ième — Côte d'Ivoire École numérique" (leçons 1 à 7, 10 et 11) ;
  // les leçons 8 (Vecteurs) et 9 (Symétries et translations), absentes du document,
  // sont rédigées d'après les habiletés du programme officiel.
  lessons: [
    {
      id: "ma1",
      title: "Calculs algébriques — Nombres décimaux relatifs",
      content: `<h3>Puissances de 10 d'exposant entier relatif</h3>
      <p>Pour un entier n positif non nul : <strong>10ⁿ = 1 suivi de n zéros</strong> et <strong>10⁻ⁿ = 0,0…01</strong> (avec n − 1 zéros après la virgule). Par convention, <strong>10⁰ = 1</strong>. Exemples : 10⁴ = 10 000 ; 10⁶ = 1 000 000 ; 10⁻³ = 0,001 ; 10⁻⁸ = 0,000 000 01. On a aussi 10⁻ⁿ = 1/10ⁿ.</p>
      <p><strong>Propriétés</strong> (m et n entiers relatifs) :</p>
      <ul>
        <li>10ᵐ × 10ⁿ = 10ᵐ⁺ⁿ &nbsp;(ex. : 10⁵ × 10² = 10⁷ ; 10⁻¹² × 10¹² = 10⁰ = 1)</li>
        <li>(10ᵐ)ⁿ = 10ᵐˣⁿ &nbsp;(ex. : (10³)⁵ = 10¹⁵ ; (10⁻²)⁻⁵ = 10¹⁰)</li>
        <li>10ᵐ / 10ⁿ = 10ᵐ⁻ⁿ &nbsp;(ex. : 10² / 10⁷ = 10⁻⁵)</li>
      </ul>
      <p><strong>Produit</strong> : (a × 10ᵖ) × (b × 10ᵠ) = (a × b) × 10ᵖ⁺ᵠ. Ex. : (−7,5 × 10⁻⁹) × (2 × 10¹⁰) = −15 × 10¹ = −150.</p>
      <h3>Écriture a × 10ᵖ et notation scientifique</h3>
      <p>Un nombre décimal peut s'écrire de plusieurs façons sous la forme a × 10ᵖ : −49 = −4,9 × 10 = −4 900 × 10⁻² ; 0,0078 = 7,8 × 10⁻³ = 78 × 10⁻⁴.</p>
      <p>La <strong>notation scientifique</strong> d'un nombre décimal est son écriture <strong>a × 10ᵖ</strong> où <strong>a a un seul chiffre non nul avant la virgule</strong> (1 ≤ a &lt; 10 en valeur absolue) et p est un entier relatif. Ex. : 12 000 = 1,2 × 10⁴ ; 0,5689 = 5,689 × 10⁻¹ ; −681,204 = −6,81204 × 10². Ne sont pas en notation scientifique : 83 × 10⁻³ et −0,4 × 10⁻²⁴.</p>
      <h3>Comparer des nombres écrits a × 10ᵖ</h3>
      <p>On écrit d'abord les deux nombres (positifs) en notation scientifique A = a × 10ᵐ et B = b × 10ⁿ. <strong>Si m = n</strong>, A et B sont rangés comme a et b. <strong>Si m ≠ n</strong>, ils sont rangés comme les exposants m et n. Pour deux nombres négatifs, on compare leurs opposés et on inverse l'ordre ; un négatif est toujours plus petit qu'un positif.</p>
      <h3>Nombre décimal d'ordre n</h3>
      <p>Un nombre décimal est <strong>d'ordre n</strong> s'il peut s'écrire d × 10⁻ⁿ avec d entier relatif. Ex. : 52,658 = 52 658 × 10⁻³ est d'ordre 3 ; −0,000054 = −54 × 10⁻⁶ est d'ordre 6. Un nombre écrit avec n chiffres après la virgule est d'ordre n — et aussi d'ordre supérieur à n.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> pour passer à la notation scientifique, on déplace la virgule derrière le premier chiffre non nul et on compense avec l'exposant : chaque rang vers la gauche ajoute 1 à l'exposant, chaque rang vers la droite retire 1. 0,000 17 → 1,7 × 10⁻⁴ (virgule déplacée de 4 rangs vers la droite).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Des cellules rectangulaires de 30 µm sur 2 µm (1 µm = 10⁻⁶ m) recouvrent une lamelle de 0,000032568 m².</p>
      <p>1) 0,000032568 = <strong>3,2568 × 10⁻⁵</strong> m². 2) Aire d'une cellule : (30 × 10⁻⁶) × (2 × 10⁻⁶) = 60 × 10⁻¹² = <strong>6 × 10⁻¹¹ m²</strong>. 3) Nombre de cellules : (3,2568 × 10⁻⁵) / (6 × 10⁻¹¹) = 0,5428 × 10⁶ = <strong>5,428 × 10⁵</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : comparer sans se tromper</h3><p>Il faut <strong>toujours repasser en notation scientifique</strong> avant de comparer les exposants. Exemple : 53 × 10⁵ et 7 × 10⁶ ; on croit que 53 &gt; 7, mais 53 × 10⁵ = 5,3 × 10⁶, donc 7 × 10⁶ &gt; 53 × 10⁵. Autre piège : −7,15 × 10⁻² et −3,6 × 10⁻⁴. Comme 7,15 × 10⁻² &gt; 3,6 × 10⁻⁴, on a <strong>−7,15 × 10⁻² &lt; −3,6 × 10⁻⁴</strong>.</p>`,
      quiz: [
        {q:"10⁻³ est égal à...", options:["−1 000","0,001","0,0001","−0,001"], correct:1, exp:"10⁻³ = 1/10³ = 0,001 (n − 1 = 2 zéros après la virgule)."},
        {q:"10⁵ × 10² = ...", options:["10¹⁰","10⁷","10³","100⁷"], correct:1, exp:"On additionne les exposants : 10⁵⁺² = 10⁷."},
        {q:"(10⁻²)⁻⁵ = ...", options:["10⁻⁷","10¹⁰","10⁻¹⁰","10³"], correct:1, exp:"On multiplie les exposants : (−2) × (−5) = 10, donc 10¹⁰."},
        {q:"La notation scientifique de 0,000 17 est...", options:["17 × 10⁻⁵","0,17 × 10⁻³","1,7 × 10⁻⁴","1,7 × 10⁴"], correct:2, exp:"Un seul chiffre non nul avant la virgule : 1,7 ; la virgule a été déplacée de 4 rangs vers la droite, donc 10⁻⁴."},
        {q:"Lequel de ces nombres est écrit en notation scientifique ?", options:["83 × 10⁻³","−0,4 × 10⁻²⁴","−3,5 × 10⁸","12,4 × 10⁵"], correct:2, exp:"−3,5 a un seul chiffre non nul avant la virgule ; ce n'est pas le cas de 83, 0,4 ni 12,4."},
        {q:"(3 × 10⁶) × (2 × 10⁻⁴) = ...", options:["6 × 10²","5 × 10²","6 × 10⁻²⁴","6 × 10¹⁰"], correct:0, exp:"(3 × 2) × 10⁶⁺⁽⁻⁴⁾ = 6 × 10²."},
        {q:"Quel est l'ordre du nombre décimal −0,005 ?", options:["2","3","5","−3"], correct:1, exp:"−0,005 = −5 × 10⁻³ : il est d'ordre 3 (3 chiffres après la virgule)."},
        {q:"Compare 7 × 10⁶ et 53 × 10⁵.", options:["7 × 10⁶ < 53 × 10⁵","7 × 10⁶ > 53 × 10⁵","Ils sont égaux","On ne peut pas comparer"], correct:1, exp:"53 × 10⁵ = 5,3 × 10⁶ ; même exposant, et 7 > 5,3."}
      ]
    },
    {
      id: "ma2",
      title: "Géométrie du plan — Angles",
      content: `<p>Une droite (L) coupe deux droites (D₁) et (D₂) en A et en B ; (L) est appelée la <strong>sécante</strong>.</p>
      <ul>
        <li>Deux <strong>angles alternes-internes</strong> sont situés <strong>entre</strong> (D₁) et (D₂), <strong>de part et d'autre</strong> de la sécante, avec des sommets différents (A et B).</li>
        <li>Deux <strong>angles correspondants</strong> sont situés <strong>du même côté</strong> de la sécante, l'un entre les deux droites et l'autre à l'extérieur, « à la même place » en A et en B.</li>
      </ul>
      <h3>Propriétés (directes et réciproques)</h3>
      <ul>
        <li>Si deux angles <strong>alternes-internes</strong> sont formés par <strong>deux droites parallèles</strong> et une sécante, alors ils ont <strong>la même mesure</strong>.</li>
        <li>Si deux droites forment avec une sécante deux angles alternes-internes <strong>de même mesure</strong>, alors ces droites sont <strong>parallèles</strong>.</li>
        <li>Si deux angles <strong>correspondants</strong> sont formés par deux droites parallèles et une sécante, alors ils ont la même mesure.</li>
        <li>Si deux droites forment avec une sécante deux angles correspondants de même mesure, alors elles sont parallèles.</li>
      </ul>
      <p>On utilise aussi : deux angles <strong>opposés par le sommet</strong> ont la même mesure ; deux angles qui forment un angle plat sont <strong>supplémentaires</strong> (somme 180°).</p>
      <h3>Angle au centre, arcs et cordes</h3>
      <p>Un <strong>angle au centre</strong> d'un cercle est un angle dont le <strong>sommet est le centre</strong> du cercle. Deux points A et B du cercle déterminent deux arcs ; l'angle au centre AÔB <strong>intercepte</strong> l'arc AB.</p>
      <p>La longueur d'un arc est <strong>proportionnelle</strong> à la mesure de l'angle au centre qui l'intercepte : <strong>longueur de l'arc AB = π × r × mes(AÔB) / 180°</strong>.</p>
      <p>Une <strong>corde</strong> est un segment dont les extrémités sont deux points du cercle ; la corde [AB] <strong>sous-tend</strong> les deux arcs d'extrémités A et B. Dans un même cercle :</p>
      <ul>
        <li>deux angles au centre de même mesure interceptent deux arcs de même longueur (et réciproquement) ;</li>
        <li>deux arcs de même longueur sont sous-tendus par deux cordes de même longueur (et réciproquement).</li>
      </ul>
      <p><strong>🔎 Pour aller plus loin :</strong> pour bien reconnaître les angles, repère la forme de la lettre <strong>Z</strong> pour des alternes-internes et de la lettre <strong>F</strong> pour des correspondants. Attention : sans droites parallèles, ces angles n'ont aucune raison d'être égaux.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Un cercle de centre O a un rayon de 2 cm ; mes(AÔB) = 60°. Longueur de l'arc AB = π × 2 × 60/180 = <strong>2π/3 cm ≈ 2,09 cm</strong> (avec π = 3,14).</p>
      <p>Les droites (D₁) et (D₂) sont parallèles ; un angle mesure 28° et l'angle 1 lui est supplémentaire : mes(1) = 180° − 28° = 152°. L'angle 2 est alterne-interne avec l'angle 1 (droites parallèles) : <strong>mes(2) = 152°</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : rédiger une justification</h3><p>Une justification suit toujours le même schéma : <strong>données → propriété → conclusion</strong>. Ex. : « Les angles EAB et ABF sont alternes-internes, formés par (D), (L) et la sécante (Δ). Ils ont la même mesure. <strong>Or</strong> si deux droites forment avec une sécante deux angles alternes-internes de même mesure, elles sont parallèles. <strong>Donc</strong> (D) // (L). » On utilise la propriété <em>directe</em> pour trouver des angles égaux, et la <em>réciproque</em> pour prouver un parallélisme.</p>`,
      quiz: [
        {q:"Deux angles alternes-internes sont situés...", options:["du même côté de la sécante, à l'extérieur","entre les deux droites, de part et d'autre de la sécante","au même sommet","à l'extérieur des deux droites"], correct:1, exp:"Alternes = de part et d'autre de la sécante ; internes = entre les deux droites."},
        {q:"Deux angles correspondants formés par deux droites parallèles et une sécante...", options:["sont supplémentaires","ont la même mesure","sont complémentaires","n'ont aucun lien"], correct:1, exp:"C'est la propriété directe des angles correspondants."},
        {q:"Si deux droites forment avec une sécante deux angles alternes-internes de même mesure, alors...", options:["elles sont perpendiculaires","elles sont parallèles","elles sont sécantes","la sécante est une bissectrice"], correct:1, exp:"C'est la réciproque : elle sert à démontrer un parallélisme."},
        {q:"Un angle au centre d'un cercle est un angle dont...", options:["un côté est une corde","le sommet est le centre du cercle","le sommet est sur le cercle","la mesure est 90°"], correct:1, exp:"Définition : son sommet est le centre du cercle."},
        {q:"La longueur d'un arc de cercle de rayon r intercepté par un angle au centre de mesure a° vaut...", options:["π × r × a / 180","2 × r × a","π × r² × a / 360","r × a / 360"], correct:0, exp:"La longueur est proportionnelle à l'angle : π × r × a / 180."},
        {q:"Cercle de rayon 3 cm, angle au centre de 60°. La longueur de l'arc vaut (π ≈ 3,14)...", options:["3,14 cm","9,42 cm","1,57 cm","6,28 cm"], correct:0, exp:"π × 3 × 60/180 = π ≈ 3,14 cm."},
        {q:"Dans un cercle, deux cordes de même longueur sous-tendent...", options:["deux arcs de même longueur","deux arcs de longueurs différentes","toujours des demi-cercles","deux diamètres"], correct:0, exp:"Propriété : cordes de même longueur ⇔ arcs de même longueur."}
      ]
    },
    {
      id: "ma3",
      title: "Calculs algébriques — Nombres rationnels",
      content: `<h3>PPCM et PGCD</h3>
      <p>Le <strong>PPCM</strong> de deux entiers naturels non nuls a et b est le <strong>plus petit multiple commun non nul</strong> de a et b. Ex. : multiples de 10 : 10, 20, 30, 40… ; de 15 : 15, 30, 45… ; donc PPCM(10 ; 15) = 30.</p>
      <p>Le <strong>PGCD</strong> de a et b est le <strong>plus grand diviseur commun</strong>. Ex. : diviseurs de 18 : 1, 2, 3, 6, 9, 18 ; de 12 : 1, 2, 3, 4, 6, 12 ; donc PGCD(18 ; 12) = 6.</p>
      <p><strong>Méthode par décomposition en facteurs premiers</strong> (ex. : 360 = 2³ × 3² × 5 et 700 = 2² × 5² × 7) :</p>
      <ul>
        <li><strong>PPCM</strong> : produit de <strong>tous</strong> les facteurs apparus, chacun avec son <strong>plus grand</strong> exposant : PPCM(360 ; 700) = 2³ × 3² × 5² × 7 = 12 600.</li>
        <li><strong>PGCD</strong> : produit des facteurs <strong>communs</strong>, chacun avec son <strong>plus petit</strong> exposant : PGCD(360 ; 700) = 2² × 5 = 20.</li>
      </ul>
      <p>Le PGCD sert à <strong>simplifier une fraction</strong> (on divise numérateur et dénominateur par le PGCD : la fraction devient irréductible) ; le PPCM sert à trouver le <strong>plus petit dénominateur commun</strong> de deux fractions.</p>
      <h3>Nombres rationnels</h3>
      <p>Un <strong>nombre rationnel</strong> est un nombre égal à une fraction ou à l'opposé d'une fraction. L'ensemble des nombres rationnels se note <strong>ℚ</strong>. Exemples : 0 ; 2 ; −3 ; 4,75 ; −0,023 ; 7/2 ; −9/5. <strong>Tout nombre décimal est un rationnel</strong> (on a ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ). Un rationnel s'écrit a/b avec a et b entiers relatifs, b ≠ 0, et −a/b = a/(−b) = −(a/b).</p>
      <h3>Opérations</h3>
      <ul>
        <li><strong>Produit</strong> : (a/b) × (c/d) = (a × c)/(b × d). Ex. : (−9/5) × (4/7) = −36/35.</li>
        <li><strong>Inverse</strong> : l'inverse de a/b (a et b non nuls) est b/a ; le produit d'un nombre et de son inverse vaut 1. <strong>0 n'a pas d'inverse.</strong> Ex. : l'inverse de −7/13 est −13/7.</li>
        <li><strong>Quotient</strong> : (a/b) ÷ (c/d) = (a/b) × (d/c). Diviser, c'est multiplier par l'inverse.</li>
        <li><strong>Somme</strong> : on réduit au même dénominateur (le PPCM des dénominateurs) puis on additionne les numérateurs.</li>
      </ul>
      <h3>Approximation, arrondi et troncature</h3>
      <p>Comme 1,85 &lt; 13/7 &lt; 1,86 (écart 10⁻²), 1,85 est l'<strong>approximation décimale par défaut d'ordre 2</strong> de 13/7 et 1,86 son <strong>approximation par excès d'ordre 2</strong>.</p>
      <p><strong>Arrondi d'ordre n</strong> : on calcule le quotient avec n + 1 chiffres après la virgule. Si le (n+1)-ième chiffre est 0, 1, 2, 3 ou 4, l'arrondi est l'approximation par défaut ; si c'est 5, 6, 7, 8 ou 9, c'est l'approximation par excès. <strong>Troncature à n décimales</strong> : on garde simplement les n premiers chiffres après la virgule. Ex. : 18/7 ≈ 2,5714285 ; arrondi d'ordre 5 : 2,57143 ; troncature à 5 décimales : 2,57142.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> pour deux entiers a et b, on a toujours <strong>a × b = PPCM(a ; b) × PGCD(a ; b)</strong>. Ex. : 18 × 32 = 576 = 288 × 2.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Deux voitures partent ensemble. La bleue fait un tour en 36 min, la jaune en 30 min. Se retrouvent-elles sur la ligne de départ ? 36 = 2² × 3² et 30 = 2 × 3 × 5, donc PPCM(36 ; 30) = 2² × 3² × 5 = <strong>180</strong>. Au bout de 180 minutes, la bleue a fait 5 tours et la jaune 6 : elles se retrouvent sur la ligne.</p>
      <p>Un collège de 400 élèves compte 120 filles et 280 garçons. Pour former le plus grand nombre d'équipes identiques, on calcule PGCD(120 ; 280) = <strong>40</strong> équipes, chacune de 3 filles et 7 garçons.</p>
      <h3>📌 Point du programme à ne pas manquer : arrondi ou troncature ?</h3><p>Ne pas confondre : la <strong>troncature</strong> coupe sans regarder la suite ; l'<strong>arrondi</strong> regarde le chiffre suivant. Pour 22/7 ≈ 3,142857 : troncature à 2 décimales = 3,14 ; arrondi d'ordre 2 = 3,14 (le 3ᵉ chiffre est 2) ; mais arrondi d'ordre 4 = 3,1429 (le 5ᵉ chiffre est 5), alors que la troncature à 4 décimales est 3,1428.</p>`,
      quiz: [
        {q:"PPCM(10 ; 15) = ...", options:["5","30","150","60"], correct:1, exp:"30 est le plus petit multiple commun non nul de 10 et 15."},
        {q:"PGCD(18 ; 12) = ...", options:["2","3","6","36"], correct:2, exp:"Diviseurs communs : 1, 2, 3, 6 ; le plus grand est 6."},
        {q:"Pour calculer le PGCD avec la décomposition, on prend les facteurs...", options:["tous, avec le plus grand exposant","communs, avec le plus petit exposant","communs, avec le plus grand exposant","non communs uniquement"], correct:1, exp:"PGCD : facteurs communs, plus petit exposant ; PPCM : tous les facteurs, plus grand exposant."},
        {q:"L'ensemble des nombres rationnels se note...", options:["ℕ","ℤ","𝔻","ℚ"], correct:3, exp:"ℚ désigne l'ensemble des nombres rationnels."},
        {q:"L'inverse de −7/13 est...", options:["7/13","−13/7","13/7","−7/13"], correct:1, exp:"L'inverse de a/b est b/a : l'inverse de −7/13 est −13/7 (même signe)."},
        {q:"(3/5) ÷ (7/4) = ...", options:["21/20","12/35","3/7","35/12"], correct:1, exp:"On multiplie par l'inverse : (3/5) × (4/7) = 12/35."},
        {q:"18/7 ≈ 2,5714285. Sa troncature à 3 décimales est...", options:["2,572","2,571","2,57","2,5714"], correct:1, exp:"On garde les 3 premiers chiffres après la virgule : 2,571."},
        {q:"Quel nombre n'a pas d'inverse ?", options:["1","−1","0","1/2"], correct:2, exp:"0 n'a pas d'inverse, car aucun nombre multiplié par 0 ne donne 1."}
      ]
    },
    {
      id: "ma4",
      title: "Géométrie du plan — Distances",
      content: `<h3>Distance d'un point à une droite</h3>
      <p>(D) est une droite et K un point qui n'appartient pas à (D). La perpendiculaire à (D) passant par K coupe (D) en M. La longueur <strong>KM</strong> est la <strong>distance du point K à la droite (D)</strong>. C'est la <strong>plus courte</strong> distance entre K et un point de (D) : pour tout autre point G de (D), KM &lt; KG. Si un point est sur (D), sa distance à (D) est nulle.</p>
      <p><strong>Méthode</strong> : on trace la perpendiculaire à (L) passant par A, on note H son point d'intersection avec (L), puis on mesure [AH].</p>
      <h3>Distance de deux droites parallèles</h3>
      <p>(L) et (D) sont parallèles ; A ∈ (L) et B ∈ (D) tels que (AB) ⊥ (L). La distance <strong>AB</strong> est la <strong>distance des droites parallèles</strong> (L) et (D). Elle est la même quel que soit le point A choisi. Dans un rectangle ABCD, la distance de (AD) à (BC) est AB.</p>
      <p>Les points situés à une distance donnée d d'une droite (D) sont sur <strong>deux droites parallèles à (D)</strong>, une de chaque côté, à la distance d.</p>
      <h3>Caractérisation de la bissectrice d'un angle</h3>
      <ul>
        <li>Si un point appartient à la <strong>bissectrice</strong> d'un angle, alors il est <strong>équidistant</strong> des supports des côtés de cet angle.</li>
        <li>Réciproquement, si un point est équidistant des supports des côtés d'un angle, alors il appartient à la bissectrice de cet angle.</li>
      </ul>
      <p><strong>Construction de la bissectrice au compas</strong> : du sommet O, on trace un arc qui coupe les deux côtés en A et B ; de A et de B, on trace deux arcs de même rayon qui se coupent en M ; la droite (OM) est la bissectrice.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> les trois bissectrices d'un triangle se coupent en un point I, équidistant des trois côtés : c'est le <strong>centre du cercle inscrit</strong>. C'est la bonne place pour un mât « à égale distance des côtés » d'un terrain triangulaire.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Le triangle RST a une aire de 12 cm² et RS = 6 cm. Avec H le pied de la hauteur issue de T : aire = RS × TH / 2, donc TH = 2 × 12 / 6 = <strong>4 cm</strong>. La distance de T à la droite (RS) est 4 cm.</p>
      <p>Un triangle ABC a pour côtés AB = 24 m, AC = 20 m, BC = 16 m, et O est le centre du cercle inscrit de rayon r. Aire(AOB) = 24r/2 = 12r ; aire(AOC) = 10r ; aire(BOC) = 8r ; donc <strong>aire(ABC) = 30r</strong> (en m²).</p>
      <h3>📌 Point du programme à ne pas manquer : la voie la plus courte</h3><p>Pour relier un champ C à une route rectiligne par le chemin le plus court, on trace la <strong>perpendiculaire</strong> à la route passant par C : le pied H de cette perpendiculaire donne le tracé, et CH est la distance du champ à la route. Tout autre chemin rectiligne CG vers la route est plus long.</p>`,
      quiz: [
        {q:"La distance d'un point K à une droite (D) est...", options:["KG pour n'importe quel point G de (D)","KM, où M est le pied de la perpendiculaire à (D) passant par K","toujours nulle","la longueur de (D)"], correct:1, exp:"C'est la longueur KM, M étant le pied de la perpendiculaire issue de K."},
        {q:"Si M est le pied de la perpendiculaire à (D) issue de K, et G un autre point de (D), alors...", options:["KG < KM","KM < KG","KM = KG","KM = 0"], correct:1, exp:"La distance KM est la plus courte : KM < KG."},
        {q:"Un point qui appartient à la bissectrice d'un angle est...", options:["sur un côté de l'angle","équidistant des supports des côtés de l'angle","toujours le sommet","à 1 cm du sommet"], correct:1, exp:"Propriété directe de la bissectrice."},
        {q:"Un point équidistant des supports des côtés d'un angle...", options:["appartient à la bissectrice de l'angle","est le sommet de l'angle","n'existe pas","est sur la médiatrice d'un côté"], correct:0, exp:"C'est la propriété réciproque."},
        {q:"Où se trouvent tous les points situés à 2 cm d'une droite (D) ?", options:["Sur un cercle","Sur deux droites parallèles à (D), à 2 cm de chaque côté","Sur une seule droite perpendiculaire à (D)","En un seul point"], correct:1, exp:"Ce sont deux parallèles à (D), une de chaque côté."},
        {q:"Un triangle a une aire de 12 cm² et une base de 6 cm. La distance du sommet opposé à cette base vaut...", options:["2 cm","4 cm","6 cm","72 cm"], correct:1, exp:"hauteur = 2 × aire / base = 24 / 6 = 4 cm."},
        {q:"Le point de concours des bissectrices d'un triangle est...", options:["le centre de gravité","l'orthocentre","le centre du cercle inscrit","le milieu d'un côté"], correct:2, exp:"Il est équidistant des trois côtés : centre du cercle inscrit."}
      ]
    },
    {
      id: "ma5",
      title: "Calculs algébriques — Calcul littéral",
      content: `<p>Une <strong>expression littérale</strong> contient une ou plusieurs lettres (2a ; a − 5b ; 2πr ; 3x + 4). Pour calculer sa <strong>valeur numérique</strong>, on remplace chaque lettre par le nombre donné : pour x = 5, 3x + 4 = 3 × 5 + 4 = 19.</p>
      <p><strong>Règles d'écriture</strong> : on n'écrit pas le signe × devant une lettre ou une parenthèse : 2x (et non x2), ab, 2(x − 7). On écrit 2 × (−9) et non 2 × −9.</p>
      <h3>Suppression de parenthèses et priorités</h3>
      <ul>
        <li>Parenthèses précédées de <strong>+</strong> (ou d'aucun signe) : on les supprime <strong>sans rien changer</strong> : (−7 + a) + (b − 3 + c) = −7 + a + b − 3 + c.</li>
        <li>Parenthèses précédées de <strong>−</strong> : on les supprime en <strong>changeant tous les signes</strong> à l'intérieur : a − (b − 3 + c) = a − b + 3 − c.</li>
        <li>Priorités : d'abord les parenthèses, puis les <strong>puissances</strong>, puis les <strong>multiplications et divisions</strong>, enfin les <strong>additions et soustractions</strong>.</li>
      </ul>
      <h3>Développer</h3>
      <p><strong>Développer</strong> un produit, c'est l'écrire sous la forme d'une <strong>somme</strong>.</p>
      <ul>
        <li>a(x + y) = ax + ay &nbsp;;&nbsp; a(x − y) = ax − ay. Ex. : −2,5(x − 4) = −2,5x + 10.</li>
        <li>(a + b)(x + y) = ax + ay + bx + by. Ex. : (3x + 2)(2y − 1) = 6xy − 3x + 4y − 2.</li>
      </ul>
      <p><strong>Produits remarquables</strong> :</p>
      <ul>
        <li><strong>(a + b)² = a² + 2ab + b²</strong> &nbsp;(ex. : (a + 7)² = a² + 14a + 49)</li>
        <li><strong>(a − b)² = a² − 2ab + b²</strong> &nbsp;(ex. : (a − 3)² = a² − 6a + 9)</li>
        <li><strong>(a + b)(a − b) = a² − b²</strong> &nbsp;(ex. : (a + 8)(a − 8) = a² − 64)</li>
      </ul>
      <h3>Factoriser</h3>
      <p><strong>Factoriser</strong> une somme, c'est l'écrire sous la forme d'un <strong>produit</strong>.</p>
      <ul>
        <li>Facteur commun : ax + ay = a(x + y). Ex. : 12x² − 18x = 6x(2x − 3) ; 2x(y − 1) + (y − 1) = (y − 1)(2x + 1).</li>
        <li>Avec les identités remarquables : x² + 6x + 9 = (x + 3)² ; x² − 10x + 25 = (x − 5)² ; x² − 121 = (x − 11)(x + 11).</li>
      </ul>
      <p><strong>🔎 Pour aller plus loin :</strong> les produits remarquables servent aussi au calcul mental : 11² = (10 + 1)² = 100 + 20 + 1 = 121 ; 19 × 21 = (20 − 1)(20 + 1) = 400 − 1 = 399 ; 12² − 11² = (12 + 11)(12 − 11) = 23.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Un champ rectangulaire est formé de deux parcelles de longueurs x et y et de même largeur z. Son périmètre est <strong>P = 2(x + y) + 2z</strong>. Pour x = 15 m, y = 30 m, z = 20 m : P = 2 × 45 + 40 = <strong>130 m</strong>. Avec une porte de 1 m à 10 000 F et le grillage à 1 500 F le mètre : coût = (130 − 1) × 1 500 + 10 000 = <strong>203 500 F</strong>, inférieur aux 250 000 F en caisse.</p>
      <h3>📌 Point du programme à ne pas manquer : le double produit</h3><p>Erreur classique : écrire (a + b)² = a² + b². Il ne faut <strong>jamais oublier le double produit 2ab</strong>. Vérification : pour a = 3 et b = 4, (3 + 4)² = 49, alors que 3² + 4² = 25 ; la différence 24 est bien 2 × 3 × 4. Pour factoriser x² + 14x + 49, on reconnaît a = x, b = 7 et 2ab = 14x : c'est (x + 7)².</p>`,
      quiz: [
        {q:"Pour x = 5, la valeur de 3x + 4 est...", options:["12","19","35","39"], correct:1, exp:"3 × 5 + 4 = 15 + 4 = 19."},
        {q:"a − (b − 3 + c) = ...", options:["a − b − 3 + c","a − b + 3 − c","a + b − 3 + c","a − b + 3 + c"], correct:1, exp:"Parenthèses précédées de − : on change tous les signes à l'intérieur."},
        {q:"Développer 5(x + 7) donne...", options:["5x + 7","5x + 35","x + 35","5x + 12"], correct:1, exp:"5 × x + 5 × 7 = 5x + 35."},
        {q:"(a + 7)² = ...", options:["a² + 49","a² + 7a + 49","a² + 14a + 49","a² + 14a + 14"], correct:2, exp:"(a + b)² = a² + 2ab + b² avec b = 7 : a² + 14a + 49."},
        {q:"(a + 8)(a − 8) = ...", options:["a² − 64","a² + 64","a² − 16a + 64","a² − 16"], correct:0, exp:"(a + b)(a − b) = a² − b² = a² − 64."},
        {q:"Factoriser x² − 121 donne...", options:["(x − 11)²","(x − 11)(x + 11)","x(x − 121)","(x − 121)(x + 1)"], correct:1, exp:"x² − 11² = (x − 11)(x + 11)."},
        {q:"Factoriser 12x² − 18x donne...", options:["6x(2x − 3)","6(2x² − 3)","x(12 − 18x)","3x(4x − 18)"], correct:0, exp:"Le facteur commun est 6x : 6x × 2x − 6x × 3 = 6x(2x − 3)."},
        {q:"Développer, c'est transformer un produit en...", options:["une somme","un quotient","une fraction","une puissance"], correct:0, exp:"Développer : produit → somme. Factoriser : somme → produit."}
      ]
    },
    {
      id: "ma6",
      title: "Géométrie du plan — Cercles et triangles",
      content: `<h3>Positions relatives d'un cercle et d'une droite</h3>
      <p>(𝒞) est un cercle de centre O et de rayon r, (D) une droite, et H le pied de la perpendiculaire à (D) passant par O (OH est la distance de O à (D)).</p>
      <ul>
        <li><strong>OH &lt; r</strong> : (𝒞) et (D) ont deux points communs, ils sont <strong>sécants</strong>.</li>
        <li><strong>OH = r</strong> : un seul point commun, ils sont <strong>tangents</strong>.</li>
        <li><strong>OH &gt; r</strong> : aucun point commun, ils sont <strong>disjoints</strong>.</li>
      </ul>
      <p>La <strong>tangente</strong> en un point H du cercle est la droite passant par H et <strong>perpendiculaire au rayon [OH]</strong>.</p>
      <p><strong>Tangentes issues d'un point A extérieur</strong> : on place I, milieu de [AO] ; on trace le cercle de centre I passant par A ; il coupe (𝒞) en T et T' ; les droites (AT) et (AT') sont les tangentes à (𝒞) passant par A.</p>
      <h3>Droite des milieux</h3>
      <ul>
        <li>Dans un triangle, si une droite passe par les <strong>milieux de deux côtés</strong>, alors elle est <strong>parallèle au troisième côté</strong>.</li>
        <li>La longueur du segment qui joint les milieux de deux côtés est égale à la <strong>moitié</strong> de la longueur du troisième côté : <strong>B'C' = BC / 2</strong>.</li>
        <li>Si une droite passe par le <strong>milieu d'un côté</strong> et est <strong>parallèle à un deuxième côté</strong>, alors elle passe par le <strong>milieu du troisième côté</strong>.</li>
      </ul>
      <h3>Droites particulières et points remarquables</h3>
      <ul>
        <li>Les trois <strong>hauteurs</strong> sont concourantes en l'<strong>orthocentre</strong>.</li>
        <li>Les trois <strong>médianes</strong> (sommet → milieu du côté opposé) sont concourantes au <strong>centre de gravité G</strong>, situé aux <strong>2/3 de chaque médiane à partir du sommet</strong> : AG = (2/3)AA'. Chaque médiane partage le triangle en deux triangles de même aire.</li>
        <li>Les trois <strong>bissectrices</strong> sont concourantes au <strong>centre du cercle inscrit</strong> (cercle intérieur, tangent aux trois côtés).</li>
      </ul>
      <p><strong>🔎 Pour aller plus loin :</strong> associe chaque point à sa droite : <strong>h</strong>auteurs → ort<strong>h</strong>ocentre ; <strong>m</strong>édianes → centre de gravité ; <strong>b</strong>issectrices → cercle inscrit (et, déjà vu, médiatrices → cercle circonscrit).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>ABC est un triangle avec AB = 6, AC = 7, BC = 10 ; I et J sont les milieux de [AB] et [AC]. La droite (IJ) passe par les milieux de deux côtés, donc <strong>(IJ) // (BC)</strong> et <strong>IJ = BC/2 = 5</strong>.</p>
      <p>Un géomètre code sa figure : G milieu de [AC], F milieu de [AB]. Alors (GF) // (BC) et BC = 2 × GF. Si GF = 24 m, la hauteur de l'immeuble est <strong>BC = 48 m</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : démontrer qu'un point est un milieu</h3><p>ABC est rectangle en B ; la médiatrice (D) de [BC] coupe [AC] en I. (AB) ⊥ (BC) et (D) ⊥ (BC), donc (D) // (AB). Dans le triangle ABC, (D) passe par le milieu de [BC] et est parallèle à (AB) : elle passe donc par le milieu de [AC]. Comme I est sur [AC] et sur (D), <strong>I est le milieu de [AC]</strong>.</p>`,
      quiz: [
        {q:"Un cercle de rayon 3 cm et une droite à 5 cm de son centre sont...", options:["sécants","tangents","disjoints","confondus"], correct:2, exp:"OH = 5 > r = 3 : aucun point commun, ils sont disjoints."},
        {q:"Si la distance du centre à la droite est égale au rayon, la droite et le cercle sont...", options:["sécants","tangents","disjoints","parallèles"], correct:1, exp:"OH = r : un seul point commun, ils sont tangents."},
        {q:"La tangente à un cercle en un point H est...", options:["parallèle au rayon [OH]","perpendiculaire au rayon [OH] en H","confondue avec le diamètre","une corde"], correct:1, exp:"Par définition, elle est perpendiculaire au rayon [OH] en H."},
        {q:"Dans un triangle ABC, I et J sont les milieux de [AB] et [AC], et BC = 15 cm. Alors IJ = ...", options:["15 cm","30 cm","7,5 cm","5 cm"], correct:2, exp:"IJ = BC/2 = 7,5 cm (propriété de la droite des milieux)."},
        {q:"Le point de concours des hauteurs d'un triangle s'appelle...", options:["le centre de gravité","l'orthocentre","le centre du cercle inscrit","le milieu"], correct:1, exp:"Hauteurs → orthocentre."},
        {q:"Le centre de gravité G est situé sur chaque médiane...", options:["au milieu","aux 2/3 à partir du sommet","aux 1/3 à partir du sommet","au sommet"], correct:1, exp:"AG = (2/3) AA'."},
        {q:"Une droite qui passe par le milieu d'un côté d'un triangle et qui est parallèle à un deuxième côté...", options:["est une hauteur","passe par le milieu du troisième côté","est une bissectrice","passe par le sommet opposé"], correct:1, exp:"C'est la troisième propriété de la droite des milieux."}
      ]
    },
    {
      id: "ma7",
      title: "Calculs algébriques — Équations et inéquations dans ℚ",
      content: `<h3>Équations du premier degré</h3>
      <p>a, b et c sont des rationnels avec a ≠ 0. Une égalité du type <strong>ax + b = c</strong> est une <strong>équation d'inconnue x</strong>. ax + b est le <strong>premier membre</strong> (membre de gauche) et c le <strong>second membre</strong> (membre de droite). Un nombre qui rend l'égalité vraie est une <strong>solution</strong> ; <strong>résoudre</strong> une équation, c'est trouver toutes ses solutions. Ex. : 1 est solution de 2x + 3 = 5 car 2 × 1 + 3 = 5.</p>
      <p><strong>Égalités et opérations</strong> : si a = b, alors a + c = b + c ; et si k ≠ 0, ka = kb. On peut donc ajouter un même nombre aux deux membres, ou les multiplier par un même nombre non nul.</p>
      <ul>
        <li>L'équation <strong>a + x = b</strong> a pour unique solution <strong>b − a</strong>. Ex. : x + 12 = 1 donne x = −11.</li>
        <li>L'équation <strong>ax = b</strong> (a ≠ 0) a pour unique solution <strong>b/a</strong>. Ex. : −3x = 5 donne x = −5/3.</li>
      </ul>
      <h3>Inéquations du premier degré</h3>
      <p>Une inégalité du type <strong>ax + b &lt; c</strong> ou <strong>ax + b &gt; c</strong> (a ≠ 0) est une <strong>inéquation d'inconnue x</strong>. Ex. : −2 est une solution de 3x + 4 &lt; 7 car 3 × (−2) + 4 = −2 et −2 &lt; 7. Une inéquation a en général une infinité de solutions.</p>
      <ul>
        <li>En <strong>ajoutant</strong> un même nombre aux deux membres, on obtient une inégalité <strong>de même sens</strong>.</li>
        <li>En <strong>multipliant</strong> par un nombre <strong>positif</strong> non nul : inégalité <strong>de même sens</strong>.</li>
        <li>En <strong>multipliant</strong> par un nombre <strong>négatif</strong> non nul : inégalité <strong>de sens contraire</strong>. Ex. : 5x &lt; 7, donc −3 × 5x &gt; −3 × 7, soit −15x &gt; −21.</li>
      </ul>
      <p><strong>Méthode</strong> : pour x + a &lt; b, on ajoute −a aux deux membres (x − 8 &lt; 5 donne x &lt; 13). Pour ax &lt; b, on multiplie par l'inverse de a, en changeant le sens si a est négatif (−3x &lt; −18 donne x &gt; 6). On représente les solutions sur une droite graduée.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> pour vérifier un résultat, remplace x par un nombre de ta solution. Pour −3x &lt; −18 → x &gt; 6 : avec x = 7, −21 &lt; −18 ✔ ; avec x = 5, −15 &lt; −18 est faux ✔.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Une pièce de théâtre réunit 85 spectateurs : les places assises coûtent 500 F, les places debout 150 F, et la recette est de 30 250 F. Soit x le nombre de spectateurs assis : 500x + 150(85 − x) = 30 250, soit 350x + 12 750 = 30 250, donc 350x = 17 500 et <strong>x = 50</strong> spectateurs assis (et 35 debout).</p>
      <p>René et Bilé livrent 3 tonnes de cacao à 700 F le kilo ; René en a livré plus de 2 tonnes (x &gt; 2 000). Bilé a donc moins de 1 000 kg, soit moins de 700 000 F : les 750 000 F restants suffisent.</p>
      <h3>📌 Point du programme à ne pas manquer : traduire une phrase</h3><p>« La moitié d'un nombre est égale à 11 » : x/2 = 11. « Le double d'un nombre diminué de 3 est égal à 0 » : 2x − 3 = 0. « Il lui reste moins de 10 000 F après avoir payé une calculatrice à 8 000 F et des cahiers à 300 F » : 8 000 + 300x &lt; 10 000, donc 300x &lt; 2 000 et x &lt; 6,67 : au plus <strong>6 cahiers</strong>.</p>`,
      quiz: [
        {q:"Dans l'équation 2x + 3 = 5, le second membre est...", options:["2x","2x + 3","5","x"], correct:2, exp:"Le second membre est le membre de droite : 5."},
        {q:"La solution de x + 12 = 1 est...", options:["13","−11","11","−13"], correct:1, exp:"x = 1 − 12 = −11."},
        {q:"La solution de 4x = 8 est...", options:["32","4","2","1/2"], correct:2, exp:"x = 8/4 = 2."},
        {q:"−3x = 5 a pour solution...", options:["−5/3","5/3","−3/5","15"], correct:0, exp:"x = 5/(−3) = −5/3."},
        {q:"Quand on multiplie les deux membres d'une inégalité par un nombre négatif...", options:["le sens reste le même","le sens change","l'inégalité devient une égalité","on ne peut pas le faire"], correct:1, exp:"Multiplier par un négatif inverse le sens de l'inégalité."},
        {q:"Les solutions de x − 8 < 5 sont les nombres...", options:["x < −3","x < 13","x > 13","x = 13"], correct:1, exp:"On ajoute 8 aux deux membres : x < 13."},
        {q:"Les solutions de −3x < −18 sont les nombres...", options:["x < 6","x > 6","x > −6","x < −6"], correct:1, exp:"On multiplie par −1/3 et on change le sens : x > 6."},
        {q:"Laquelle de ces écritures est une inéquation ?", options:["3x + 3","6 + a = 27","4t + 1 < 6","3 = 9 − x"], correct:2, exp:"Une inéquation contient un symbole < ou >."}
      ]
    },
    {
      id: "ma8",
      title: "Géométrie du plan — Vecteurs",
      content: `<p>Un couple de points (A ; B) définit un <strong>vecteur</strong>, noté <strong>AB→</strong> (on écrit la flèche au-dessus de AB). Il est caractérisé par :</p>
      <ul>
        <li>sa <strong>direction</strong> : celle de la droite (AB) ;</li>
        <li>son <strong>sens</strong> : de A vers B ;</li>
        <li>sa <strong>longueur</strong> : la distance AB.</li>
      </ul>
      <p>Deux droites parallèles ont la <strong>même direction</strong>. Deux couples de points (A ; B) et (C ; D) de même direction sont de <strong>même sens</strong> si les « flèches » A→B et C→D vont du même côté. Les vecteurs AB→ et BA→ ont la même direction et la même longueur, mais des sens contraires : ils sont <strong>opposés</strong>.</p>
      <h3>Vecteurs égaux</h3>
      <p>Deux vecteurs sont <strong>égaux</strong> lorsqu'ils ont <strong>la même direction, le même sens et la même longueur</strong>. On peut tracer un vecteur égal à AB→ à partir de n'importe quel point (c'est le même déplacement).</p>
      <ul>
        <li><strong>Caractérisation du parallélogramme</strong> : AB→ = DC→ si et seulement si <strong>ABCD est un parallélogramme</strong> (attention à l'ordre des lettres).</li>
        <li><strong>Caractérisation du milieu</strong> : I est le milieu de [AB] si et seulement si <strong>AI→ = IB→</strong>.</li>
      </ul>
      <h3>Somme de vecteurs : l'égalité de Chasles</h3>
      <p>Pour tous points A, B et C : <strong>AB→ + BC→ = AC→</strong>. On « enchaîne » les déplacements : aller de A à B puis de B à C revient à aller de A à C. Ex. : MN→ + NP→ + PQ→ = MQ→ ; AB→ + BA→ = AA→ = 0→ (vecteur nul).</p>
      <p>Pour construire la somme de deux vecteurs u→ et v→ : on trace u→ à partir d'un point A (on obtient B), puis v→ à partir de B (on obtient C) ; la somme est AC→.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> deux vecteurs égaux ont la même longueur et des supports parallèles : une égalité de vecteurs permet donc de démontrer à la fois une <strong>égalité de distances</strong> et un <strong>parallélisme</strong>.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Des nageurs partent des points A, B, C de la ligne de départ et arrivent en A', B', C' en suivant des trajets rectilignes de même direction et de même sens. Si de plus AA' = BB', alors <strong>AA'→ = BB'→</strong> : les deux nageurs ont effectué le même déplacement, et le quadrilatère <strong>ABB'A'</strong> est un parallélogramme.</p>
      <p>Simplifie AB→ + CA→ : on réordonne en CA→ + AB→ = <strong>CB→</strong> (Chasles).</p>
      <h3>📌 Point du programme à ne pas manquer : l'ordre des lettres</h3><p>Pour le parallélogramme ABCD (sommets dans l'ordre), on a <strong>AB→ = DC→</strong> et <strong>AD→ = BC→</strong>, mais <strong>pas</strong> AB→ = CD→ : CD→ est l'opposé de AB→. Une égalité de vecteurs est fausse si l'un des sens est inversé, même si les longueurs sont égales.</p>`,
      quiz: [
        {q:"Un vecteur est caractérisé par...", options:["sa direction seulement","sa direction, son sens et sa longueur","sa longueur seulement","ses coordonnées uniquement"], correct:1, exp:"Direction, sens et longueur."},
        {q:"Deux vecteurs égaux ont...", options:["la même longueur seulement","la même direction, le même sens et la même longueur","des sens contraires","la même origine"], correct:1, exp:"Les trois caractéristiques doivent être les mêmes."},
        {q:"Les vecteurs AB→ et BA→ sont...", options:["égaux","opposés","de directions différentes","nuls"], correct:1, exp:"Même direction, même longueur, sens contraires : ils sont opposés."},
        {q:"AB→ + BC→ = ...", options:["AC→","CA→","BA→","0→"], correct:0, exp:"C'est l'égalité de Chasles."},
        {q:"ABCD est un parallélogramme si et seulement si...", options:["AB→ = CD→","AB→ = DC→","AC→ = BD→","AB→ = BC→"], correct:1, exp:"AB→ = DC→ caractérise le parallélogramme ABCD."},
        {q:"I est le milieu de [AB] si et seulement si...", options:["AI→ = BI→","AI→ = IB→","AB→ = IB→","IA→ = IB→"], correct:1, exp:"AI→ = IB→ : même direction, même sens, même longueur."},
        {q:"MN→ + NP→ + PQ→ = ...", options:["MQ→","QM→","NQ→","MP→"], correct:0, exp:"Chasles appliqué deux fois : MN→ + NP→ = MP→, puis MP→ + PQ→ = MQ→."}
      ]
    },
    {
      id: "ma9",
      title: "Transformations du plan — Symétries et translations",
      content: `<p>Une <strong>application du plan dans le plan</strong> associe à tout point M du plan un unique point M', appelé <strong>image</strong> de M. On peut la décrire par un <strong>tableau de correspondance</strong> : une ligne des points, une ligne de leurs images.</p>
      <h3>Les trois transformations</h3>
      <ul>
        <li><strong>Symétrie orthogonale d'axe (D)</strong> : l'image de M est le point M' tel que (D) est la <strong>médiatrice</strong> de [MM'] ; si M ∈ (D), M' = M.</li>
        <li><strong>Symétrie centrale de centre O</strong> : l'image de M est le point M' tel que O est le <strong>milieu</strong> de [MM'] ; l'image de O est O.</li>
        <li><strong>Translation de vecteur AB→</strong> : l'image de M est le point M' tel que <strong>MM'→ = AB→</strong> (ABM'M est un parallélogramme). Tous les points « glissent » de la même façon ; aucun point n'est fixe (sauf si le vecteur est nul).</li>
      </ul>
      <h3>Ce que ces transformations conservent</h3>
      <p>Les symétries et les translations <strong>conservent les distances, les mesures d'angles, l'alignement et le parallélisme</strong>. Donc l'image :</p>
      <ul>
        <li>d'un <strong>segment</strong> est un segment de même longueur ;</li>
        <li>d'une <strong>droite</strong> est une droite ; par une translation ou une symétrie centrale, c'est une droite <strong>parallèle</strong> ;</li>
        <li>d'un <strong>angle</strong> est un angle de même mesure ;</li>
        <li>d'un <strong>cercle</strong> de centre C et de rayon r est le cercle de centre C' (image de C) et de <strong>même rayon</strong> ;</li>
        <li>du milieu d'un segment est le milieu du segment image.</li>
      </ul>
      <p>Ces propriétés servent à <strong>démontrer</strong> un alignement, une perpendicularité, un parallélisme, une égalité de longueurs ou d'angles, ou qu'un point est un milieu.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> pour construire une figure complexe (un motif décoratif), on rédige un <strong>programme de construction</strong> : on trace une figure de base, puis on construit ses images successives par des symétries ou des translations, en précisant à chaque étape l'axe, le centre ou le vecteur.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Soit t la translation de vecteur AB→ et le triangle MNP. Pour construire l'image M' de M, on trace le parallélogramme ABM'M (MM'→ = AB→) ; de même pour N' et P'. Le triangle M'N'P' a les mêmes longueurs et les mêmes angles que MNP, et (MN) // (M'N').</p>
      <table><tr><th>Point</th><th>A</th><th>B</th><th>C</th></tr><tr><td>Image par la symétrie de centre O</td><td>A'</td><td>B'</td><td>C'</td></tr></table>
      <p>Si A, B, C sont alignés, alors leurs images A', B', C' sont alignées (l'alignement est conservé).</p>
      <h3>📌 Point du programme à ne pas manquer : bien choisir la transformation</h3><p>Pour reconnaître une transformation : si les points se reflètent comme dans un miroir le long d'une droite, c'est une <strong>symétrie orthogonale</strong> ; si la figure fait un « demi-tour » autour d'un point (le point milieu de chaque segment [MM']), c'est une <strong>symétrie centrale</strong> ; si tous les points se déplacent dans la même direction, le même sens et de la même longueur, c'est une <strong>translation</strong>.</p>`,
      quiz: [
        {q:"Par la symétrie orthogonale d'axe (D), l'image M' de M est telle que...", options:["(D) est la médiatrice de [MM']","M est le milieu de [DM']","MM'→ est parallèle à (D)","M' est sur (D)"], correct:0, exp:"L'axe (D) est la médiatrice du segment [MM']."},
        {q:"Par la symétrie centrale de centre O, l'image M' de M est telle que...", options:["OM' = 2 OM","O est le milieu de [MM']","M est le milieu de [OM']","(OM) ⊥ (OM')"], correct:1, exp:"O est le milieu de [MM']."},
        {q:"Par la translation de vecteur AB→, l'image M' de M vérifie...", options:["MM'→ = BA→","MM'→ = AB→","AM→ = BM'→ seulement si M = A","M' = B"], correct:1, exp:"Définition : MM'→ = AB→."},
        {q:"L'image d'un segment de 5 cm par une translation est...", options:["un segment de 10 cm","un segment de 5 cm","un point","un cercle"], correct:1, exp:"Les translations conservent les distances."},
        {q:"L'image d'un cercle de rayon 3 cm par une symétrie centrale est...", options:["un cercle de rayon 6 cm","un cercle de rayon 3 cm","une droite","un cercle de même centre obligatoirement"], correct:1, exp:"Le rayon est conservé ; le centre est l'image du centre."},
        {q:"Laquelle de ces propriétés n'est PAS conservée par une symétrie ?", options:["Les distances","Les mesures d'angles","L'alignement","La position de tous les points"], correct:3, exp:"Les points changent de place, mais distances, angles et alignement sont conservés."},
        {q:"Par une translation de vecteur non nul, combien de points restent à leur place ?", options:["Aucun","Un seul","Deux","Tous"], correct:0, exp:"Tous les points se déplacent du même vecteur : aucun n'est fixe."}
      ]
    },
    {
      id: "ma10",
      title: "Organisation et traitement des données — Statistique",
      content: `<h3>Mode d'une série statistique</h3>
      <p>Le <strong>mode</strong> d'une série statistique est toute modalité qui a le <strong>plus grand effectif</strong> (ou la plus grande fréquence). Une série peut avoir <strong>un ou plusieurs modes</strong>. Ex. : si le handball et la natation ont tous deux le plus grand effectif, la série a deux modes.</p>
      <h3>Moyenne d'une série statistique</h3>
      <p>La <strong>moyenne</strong> d'une série à caractère quantitatif est le quotient de la <strong>somme de toutes les valeurs</strong> par l'<strong>effectif total</strong>. Ex. : 12 ; 6 ; 20 ; 12 ; 15 → M = 65/5 = 13.</p>
      <p><strong>Méthode avec un tableau des effectifs</strong> : on multiplie chaque valeur par son effectif, on additionne ces produits, puis on divise par l'effectif total.</p>
      <table><tr><th>Valeur</th><th>2</th><th>5</th><th>6</th><th>8</th><th>12</th><th>15</th></tr><tr><td>Effectif</td><td>8</td><td>5</td><td>9</td><td>2</td><td>9</td><td>7</td></tr></table>
      <p>M = (2×8 + 5×5 + 6×9 + 8×2 + 12×9 + 15×7) / (8+5+9+2+9+7) = 324 / 40 = <strong>8,1</strong>.</p>
      <h3>Diagramme semi-circulaire</h3>
      <p>Un <strong>diagramme semi-circulaire</strong> représente les effectifs (ou les fréquences) par des secteurs d'un <strong>demi-disque</strong>. La mesure de chaque secteur est proportionnelle à l'effectif, et la somme des angles vaut <strong>180°</strong> :</p>
      <p style="text-align:center"><strong>angle du secteur = 180° × effectif de la modalité / effectif total</strong></p>
      <p><strong>Lire un diagramme</strong> : inversement, <strong>effectif = angle × effectif total / 180°</strong> et <strong>fréquence = angle / 180°</strong>. Ex. : Koné a vendu 50 articles ; un secteur de 72° représente 72 × 50 / 180 = <strong>20 articles</strong>, soit une fréquence de 72/180 = 0,4 = 40 %.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> ne confonds pas le mode (la valeur la plus fréquente) et la moyenne. Pour des données qualitatives (artistes préférés, sports), on peut donner un mode mais <strong>pas de moyenne</strong>.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Les notes sur 10 de 20 élèves : 3 (×2), 5 (×5), 6 (×4), 7 (×1), 7,5 (×2), 8 (×3), 9 (×2), 10 (×1). Le mode est <strong>5</strong> (effectif 5). Moyenne : (6 + 25 + 24 + 7 + 15 + 24 + 18 + 10) / 20 = 129/20 = <strong>6,45</strong>.</p>
      <p>Diagramme semi-circulaire de 1 000 abonnés : un secteur de 36° représente 36 × 1 000 / 180 = <strong>200 abonnés</strong> ; un secteur de 72° représente 400 abonnés.</p>
      <h3>📌 Point du programme à ne pas manquer : 180° et non 360°</h3><p>En 4ème, le diagramme est <strong>semi-circulaire</strong> : on utilise 180°, et non 360° comme pour un diagramme circulaire. Vérifie toujours que la somme des angles fait 180°. Ex. : pour des effectifs 3, 9 et 6 (total 18), les angles valent 30°, 90° et 60°, soit 180° au total.</p>`,
      quiz: [
        {q:"Le mode d'une série statistique est...", options:["la plus grande valeur","la modalité qui a le plus grand effectif","la moyenne des valeurs","la valeur du milieu"], correct:1, exp:"Le mode est la modalité de plus grand effectif."},
        {q:"La moyenne de 12 ; 6 ; 20 ; 12 ; 15 est...", options:["12","13","14","65"], correct:1, exp:"(12 + 6 + 20 + 12 + 15) / 5 = 65/5 = 13."},
        {q:"Dans un diagramme semi-circulaire, la somme des angles vaut...", options:["90°","180°","270°","360°"], correct:1, exp:"Un demi-disque correspond à 180°."},
        {q:"L'angle d'un secteur se calcule par...", options:["effectif × 360 / total","180 × effectif / total","total / effectif","effectif / 180"], correct:1, exp:"angle = 180° × effectif / effectif total."},
        {q:"Total 50 articles, secteur de 72°. L'effectif correspondant est...", options:["20","36","72","40"], correct:0, exp:"72 × 50 / 180 = 20."},
        {q:"Une série statistique peut avoir...", options:["exactement un mode","un ou plusieurs modes","aucun mode jamais","deux moyennes"], correct:1, exp:"Si plusieurs modalités ont le plus grand effectif, la série a plusieurs modes."},
        {q:"Pour calculer la moyenne à partir d'un tableau des effectifs, on divise la somme des produits valeur × effectif par...", options:["le nombre de valeurs différentes","l'effectif total","180","le mode"], correct:1, exp:"On divise par l'effectif total."}
      ]
    },
    {
      id: "ma11",
      title: "Géométrie de l'espace — Perspective cavalière",
      content: `<p>La <strong>perspective cavalière</strong> est une technique de dessin qui permet de représenter dans le plan (sur une feuille) un solide de l'espace, en rendant visibles les parties cachées.</p>
      <h3>Vocabulaire</h3>
      <ul>
        <li><strong>Plan vertical de face</strong> : la face « devant nous » (face avant) et la face arrière.</li>
        <li><strong>Plan vertical de profil</strong> : les faces de côté (gauche et droite).</li>
        <li><strong>Plan horizontal</strong> : le dessus et le dessous.</li>
        <li>Les <strong>fuyantes</strong> sont les arêtes perpendiculaires au plan de face (elles « s'enfoncent » dans la feuille).</li>
      </ul>
      <h3>Les cinq règles</h3>
      <ol>
        <li>Des arêtes à supports <strong>parallèles</strong> sur l'objet sont représentées par des segments à supports <strong>parallèles</strong>.</li>
        <li>Toute face située dans le <strong>plan vertical de face</strong> est dessinée <strong>sans déformation</strong> (en vraie grandeur ou à l'échelle choisie).</li>
        <li>Les arêtes <strong>cachées</strong> sont représentées en <strong>pointillés</strong>.</li>
        <li>Les <strong>fuyantes</strong> sont dessinées parallèles entre elles, en faisant un angle fixé <strong>α</strong> avec l'horizontale (l'<strong>angle de fuite</strong>, souvent 30°, 40° ou 45°).</li>
        <li>Les longueurs des fuyantes sont multipliées par un <strong>coefficient de réduction c</strong> (souvent 0,5 ou 0,75), c étant compris entre 0 et 1.</li>
      </ol>
      <p>Ces règles permettent de représenter un <strong>pavé droit</strong>, un <strong>cube</strong>, un <strong>prisme droit</strong> et un <strong>cylindre droit</strong> (pour le cylindre, les deux bases vues de face sont des cercles, reliés par deux génératrices).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> sur un cube dessiné en perspective cavalière, seule la face avant (et la face arrière) apparaissent comme de vrais carrés. Les faces de profil et du dessus apparaissent comme des <strong>parallélogrammes</strong>, même si dans la réalité ce sont des carrés.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>On représente une boîte de craie (pavé droit) avec une face avant IJ = 9 cm et IF = 6 cm, et une arête [IK] = 6 cm perpendiculaire à la face avant. On prend c = 0,5 et α = 40°.</p>
      <p>La face avant est dessinée <strong>sans déformation</strong> : un rectangle de 9 cm sur 6 cm. [IK] est une fuyante : sa longueur sur le dessin est 6 × 0,5 = <strong>3 cm</strong>, tracée à 40° de l'horizontale. Les quatre fuyantes mesurent toutes 3 cm et sont parallèles ; les arêtes cachées sont en pointillés.</p>
      <h3>📌 Point du programme à ne pas manquer : on ne réduit que les fuyantes</h3><p>Le coefficient c ne s'applique <strong>qu'aux fuyantes</strong>. La face de face n'est jamais réduite (règle 2). Exemple : un pavé de face 5 cm × 3 cm avec une arête de profondeur de 4 cm et c = 0,75 → la face avant mesure 5 cm × 3 cm sur le dessin et la fuyante 4 × 0,75 = <strong>3 cm</strong>.</p>`,
      quiz: [
        {q:"En perspective cavalière, les arêtes cachées sont représentées...", options:["en traits continus","en pointillés","en couleur rouge","on ne les dessine pas"], correct:1, exp:"Règle 3 : les arêtes cachées sont en pointillés."},
        {q:"La face située dans le plan vertical de face est dessinée...", options:["réduite de moitié","sans déformation","inclinée de 45°","en pointillés"], correct:1, exp:"Règle 2 : la face de face est dessinée sans déformation."},
        {q:"Des arêtes parallèles sur l'objet sont représentées par des segments...", options:["perpendiculaires","parallèles","de même longueur toujours","concourants"], correct:1, exp:"Règle 1 : le parallélisme est conservé."},
        {q:"Le coefficient de réduction s'applique...", options:["à toutes les arêtes","seulement aux fuyantes","seulement à la face avant","aux arêtes cachées uniquement"], correct:1, exp:"On ne réduit que les fuyantes (arêtes perpendiculaires au plan de face)."},
        {q:"Une fuyante mesure 6 cm sur l'objet et c = 0,5. Sur le dessin elle mesure...", options:["12 cm","6 cm","3 cm","0,5 cm"], correct:2, exp:"6 × 0,5 = 3 cm."},
        {q:"L'angle α en perspective cavalière est...", options:["l'angle entre les fuyantes et l'horizontale","l'angle droit de la face avant","toujours 90°","l'angle entre deux arêtes cachées"], correct:0, exp:"α est l'angle de fuite, entre les fuyantes et l'horizontale."},
        {q:"Sur un cube en perspective cavalière, une face de profil apparaît comme...", options:["un carré","un parallélogramme","un cercle","un triangle"], correct:1, exp:"Seules les faces de face restent des carrés ; les autres deviennent des parallélogrammes."}
      ]
    }
  ]
},

francais: {
  name: "Français",
  color: "#E8735C",
  icon: "📖",
  lessons: [
    {
      id: "f1",
      title: "Le schéma narratif",
      content: `<p>Le <strong>schéma narratif</strong> est la structure en cinq étapes qui organise un récit :</p>
      <p>1. <strong>Situation initiale</strong> : présente le cadre, les personnages, l'équilibre de départ.<br>
      2. <strong>Élément perturbateur (ou déclencheur)</strong> : un événement vient rompre cet équilibre.<br>
      3. <strong>Péripéties</strong> : suite d'actions et d'épreuves que traverse le personnage principal.<br>
      4. <strong>Élément de résolution</strong> : l'événement qui permet de résoudre le problème.<br>
      5. <strong>Situation finale</strong> : le nouvel équilibre, souvent différent du point de départ.</p>
      <p>Ce schéma se retrouve dans les contes, romans, nouvelles et fables, même si l'ordre peut parfois être bousculé pour créer du suspense.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour bien enchaîner les étapes de ton récit, utilise des connecteurs logiques et temporels : d'abord, ensuite, soudain, tout à coup, finalement, peu après... Ils guident le lecteur et donnent du rythme à ton texte.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Le schéma narratif comporte classiquement 5 étapes : la situation initiale (le décor, les personnages, avant que tout ne commence), l'élément perturbateur (ce qui déclenche l'histoire), les péripéties (les événements, obstacles, actions), l'élément de résolution (ce qui règle le problème) et la situation finale (comment tout se termine). Exemple en une phrase par étape : « Kofi vivait paisiblement à Abidjan (initiale). Un jour, il perdit son emploi (perturbateur). Il chercha du travail, essuya plusieurs refus, puis rencontra un ancien ami (péripéties). Cet ami lui proposa un poste dans son entreprise (résolution). Kofi retrouva une vie stable et sereine (finale). »</p>
      <h3>📌 Point du programme à ne pas manquer : le schéma actanciel</h3><p>À ne pas confondre avec le schéma narratif (les <strong>étapes</strong> du récit) : le <strong>schéma actanciel</strong> analyse les <strong>rôles</strong> des personnages dans l'histoire. Le <strong>sujet</strong> est le personnage principal, celui qui agit. L'<strong>objet</strong> est ce que le sujet recherche (un objectif, une personne, une valeur). Le <strong>destinateur</strong> est ce qui pousse le sujet à agir (une personne, une idée, un besoin). Le <strong>destinataire</strong> est celui qui bénéficie de la quête. L'<strong>adjuvant</strong> aide le sujet dans sa quête, tandis que l'<strong>opposant</strong> (ou l'antagoniste) lui fait obstacle. Exemple dans un conte classique : le héros (sujet) cherche à sauver la princesse (objet) ; un ami magique (adjuvant) l'aide, un sorcier (opposant) le combat.</p>`,
      quiz: [
        {q:"Combien d'étapes comporte le schéma narratif classique ?", options:["3","4","5","6"], correct:2, exp:"Le schéma narratif comporte cinq étapes."},
        {q:"L'élément perturbateur intervient :", options:["au début du récit","après la situation initiale","à la toute fin","il n'existe pas toujours"], correct:1, exp:"Il rompt l'équilibre présenté dans la situation initiale."},
        {q:"Les péripéties sont :", options:["le tout début du récit","la conclusion du récit","la suite d'actions que traverse le héros","la présentation des personnages"], correct:2, exp:"Les péripéties forment le corps de l'action, entre le déclencheur et la résolution."},
        {q:"La situation finale correspond à :", options:["l'équilibre de départ obligatoirement","un nouvel équilibre","l'élément perturbateur","une péripétie"], correct:1, exp:"La situation finale présente un état nouveau, souvent transformé par l'histoire vécue."},
        {q:"Le schéma narratif s'applique à :", options:["uniquement la poésie","uniquement le théâtre","contes, romans, nouvelles, fables","uniquement les articles de presse"], correct:2, exp:"C'est une structure typique des récits (contes, romans, nouvelles, fables)."}
      ,
        { q: "Dans le schéma actanciel, comment appelle-t-on le personnage qui aide le héros dans sa quête ?", options: ["L'opposant", "Le destinateur", "L'adjuvant", "Le destinataire"], correct: 2, exp: "L'adjuvant est le personnage (ou l'objet, la qualité) qui aide le sujet/héros à atteindre son objectif — à l'inverse de l'opposant, qui lui fait obstacle." }
      ]
    },
    {
      id: "f2",
      title: "La description",
      content: `<p>La <strong>description</strong> permet de représenter un lieu, un objet ou un personnage avec précision, en s'appuyant sur les cinq sens.</p>
      <p>On distingue le <strong>portrait</strong> (description d'un personnage : traits physiques, vêtements, caractère) du <strong>paysage</strong> (description d'un lieu).</p>
      <p><strong>Procédés fréquents :</strong> l'utilisation d'adjectifs qualificatifs, de comparaisons, d'un vocabulaire précis, et d'une organisation spatiale claire (du général au particulier, de haut en bas, de loin à près).</p>
      <p>La description a plusieurs fonctions : informer le lecteur, créer une atmosphère, révéler la psychologie d'un personnage, ou ralentir le rythme du récit avant un moment important.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour rendre une description vivante, mobilise plusieurs sens (pas seulement la vue) : les bruits, les odeurs, les textures. Exemple : « Le marché grouillait de monde ; les cris des vendeurs se mêlaient à l'odeur épicée de l'attiéké et à la chaleur écrasante du soleil de midi. »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>La description suit souvent un ordre logique (du général au particulier, de haut en bas, de près à loin, ou selon le regard qui se déplace) pour ne pas donner une impression de désordre au lecteur. Elle dépend aussi du point de vue (focalisation) : si on décrit ce qu'un personnage voit et ressent, on parle de focalisation interne ; si le narrateur décrit sans se limiter au regard d'un personnage, on parle de focalisation externe ou omnisciente.</p>
      <h3>📌 Point du programme à ne pas manquer : le point de vue (la focalisation)</h3><p>Une description dépend aussi du <strong>point de vue</strong> adopté par le narrateur, appelé <strong>focalisation</strong>. La focalisation <strong>interne</strong> : on ne décrit que ce que perçoit un personnage précis (« je voyais », son ressenti). La focalisation <strong>externe</strong> : le narrateur décrit seulement ce qui est observable de l'extérieur, comme une caméra, sans connaître les pensées des personnages. La focalisation <strong>zéro</strong> (narrateur omniscient) : le narrateur sait tout, y compris les pensées de plusieurs personnages à la fois. Le choix du point de vue change complètement l'effet produit par une même description.</p>`,
      quiz: [
        {q:"Le portrait décrit principalement :", options:["un lieu","un personnage","une action","un sentiment"], correct:1, exp:"Le portrait est la description d'un personnage."},
        {q:"Une description s'appuie souvent sur :", options:["les cinq sens","uniquement la vue","uniquement le toucher","aucun sens en particulier"], correct:0, exp:"Une bonne description mobilise plusieurs sens (vue, ouïe, odorat, toucher, goût)."},
        {q:"Un procédé fréquent de la description est :", options:["le dialogue uniquement","l'adjectif qualificatif","la conjugaison au futur","la négation systématique"], correct:1, exp:"Les adjectifs qualificatifs précisent les caractéristiques décrites."},
        {q:"Une fonction de la description peut être :", options:["accélérer brutalement l'action","créer une atmosphère","remplacer le dialogue","conclure obligatoirement le récit"], correct:1, exp:"La description peut installer une ambiance ou un climat particulier."},
        {q:"La description d'un lieu s'appelle :", options:["un portrait","un paysage","un dialogue","une péripétie"], correct:1, exp:"On parle de paysage pour la description d'un lieu."}
      ,
        { q: "Un narrateur qui décrit une scène uniquement à travers ce que voit et ressent un seul personnage adopte une focalisation :", options: ["Externe", "Interne", "Zéro (omnisciente)", "Neutre"], correct: 1, exp: "La focalisation interne limite la description à ce que perçoit et ressent un personnage précis — contrairement à la focalisation zéro (narrateur qui sait tout) ou externe (uniquement ce qui est visible de l'extérieur)." }
      ]
    },
    {
      id: "f3",
      title: "Les figures de style",
      content: `<p>Les <strong>figures de style</strong> sont des procédés d'écriture qui donnent du relief et de l'expressivité à un texte.</p>
      <p><strong>La comparaison</strong> rapproche deux éléments à l'aide d'un mot de comparaison (comme, tel, pareil à...). Ex : « Il est fort comme un lion. »</p>
      <p><strong>La métaphore</strong> rapproche deux éléments sans mot de comparaison, en fusionnant directement les deux images. Ex : « Cet homme est un lion. »</p>
      <p><strong>La personnification</strong> attribue des caractéristiques humaines à un objet, un animal ou une idée. Ex : « Le vent hurlait de rage. »</p>
      <p>Ces figures rendent un texte plus imagé, plus expressif, et permettent au lecteur de mieux ressentir ce qui est décrit.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Deux autres figures utiles : l'hyperbole, qui exagère pour insister (« Je meurs de faim ! »), et l'antithèse, qui oppose deux idées contraires dans la même phrase (« Il pleure de joie. »). Repérer ces figures t'aide autant à mieux écrire qu'à mieux analyser un texte littéraire.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Différence essentielle entre comparaison et métaphore : la comparaison utilise un outil de comparaison visible (comme, tel que, pareil à) — « Ses yeux brillaient comme des étoiles » — alors que la métaphore fait le rapprochement directement, sans outil de comparaison — « Ses yeux étaient des étoiles ». La personnification, elle, attribue des caractéristiques humaines à une chose ou un animal : « Le vent hurlait de rage. »</p>
      <h3>📌 Point du programme à ne pas manquer : antithèse et euphémisme</h3><p>Deux autres figures de style utiles à connaître. L'<strong>antithèse</strong> rapproche deux idées ou expressions opposées dans une même phrase pour créer un contraste frappant. Ex : « Ce n'était qu'un début : le grand jour serait pour la fin. » ou « Il est riche de pauvreté. » L'<strong>euphémisme</strong> adoucit une réalité dure ou désagréable en utilisant une expression plus douce. Ex : dire « il nous a quittés » plutôt que « il est mort », ou « une personne en situation de handicap » plutôt qu'une expression plus brutale.</p>`,
      quiz: [
        {q:"« Elle court comme le vent » est une :", options:["métaphore","comparaison","personnification","antithèse"], correct:1, exp:"Le mot « comme » signale une comparaison."},
        {q:"« Le temps est un voleur » est une :", options:["comparaison","métaphore","personnification","énumération"], correct:1, exp:"Il n'y a pas de mot de comparaison : les deux éléments sont directement fusionnés, c'est une métaphore."},
        {q:"« La lune sourit dans le ciel » est une :", options:["comparaison","métaphore","personnification","hyperbole"], correct:2, exp:"On attribue une action humaine (sourire) à la lune : c'est une personnification."},
        {q:"Un mot de comparaison typique est :", options:["mais","comme","donc","or"], correct:1, exp:"« Comme » est un mot de comparaison classique."},
        {q:"Les figures de style servent à :", options:["rendre un texte plus imagé","supprimer les adjectifs","raccourcir les phrases","éviter la ponctuation"], correct:0, exp:"Elles enrichissent l'expression et l'image véhiculée par le texte."}
      ,
        { q: "Quelle figure de style adoucit une réalité difficile en utilisant une expression plus douce ?", options: ["L'antithèse", "L'euphémisme", "La comparaison", "La personnification"], correct: 1, exp: "L'euphémisme remplace une expression jugée trop brutale ou désagréable par une formulation plus douce (ex : « il nous a quittés » pour « il est mort »)." }
      ]
    },
    {
      id: "f4",
      title: "Types et formes de phrases",
      content: `<p>On distingue quatre <strong>types de phrases</strong> selon l'intention de communication :</p>
      <p>- <strong>Déclarative</strong> : énonce un fait (elle se termine par un point).<br>
      - <strong>Interrogative</strong> : pose une question (point d'interrogation).<br>
      - <strong>Exclamative</strong> : exprime une émotion forte (point d'exclamation).<br>
      - <strong>Injonctive (ou impérative)</strong> : donne un ordre ou un conseil.</p>
      <p>Chaque type de phrase peut être combiné avec une <strong>forme</strong> :</p>
      <p>- <strong>Affirmative</strong> ou <strong>négative</strong> (avec ne...pas, ne...jamais, ne...plus).<br>
      - <strong>Active</strong> (le sujet fait l'action) ou <strong>passive</strong> (le sujet subit l'action).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> N'oublie pas la forme négative, qui s'oppose à la forme affirmative : elle se construit avec « ne...pas », « ne...jamais », « ne...plus », « ne...rien ». Exemple : « Il vient. » (affirmative) → « Il ne vient pas. » (négative). On peut combiner plusieurs formes dans une même phrase : une phrase peut être interrogative ET négative : « Ne viens-tu pas ? »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Les 4 types de phrase (déclarative, interrogative, exclamative, injonctive) répondent à la question « que veut faire la phrase ? », tandis que les formes (affirmative/négative, emphatique, passive) précisent « comment elle le fait ». On peut donc combiner un type et plusieurs formes : « Ne viendras-tu pas demain ? » est une phrase de type interrogatif et de forme négative en même temps.</p>
      <h3>📌 Point du programme à ne pas manquer : forme personnelle/impersonnelle et neutre/emphatique</h3><p>Deux autres oppositions de forme, en plus de affirmative/négative et active/passive. La forme <strong>personnelle</strong> a un sujet qui désigne une personne ou une chose précise (« Il pleure. »), contre la forme <strong>impersonnelle</strong>, où le sujet « il » ne représente rien de précis (« Il pleut. », « Il faut partir. »). La forme <strong>neutre</strong> présente l'information simplement (« Paul a gagné la course. »), contre la forme <strong>emphatique</strong>, qui met en relief un élément de la phrase pour le souligner (« C'est Paul qui a gagné la course. », « Paul, lui, a gagné la course. »).</p>`,
      quiz: [
        {q:"« Range ta chambre ! » est une phrase :", options:["déclarative","interrogative","injonctive","exclamative"], correct:2, exp:"Elle donne un ordre : c'est une phrase injonctive."},
        {q:"« Quelle belle journée ! » est une phrase :", options:["déclarative","exclamative","interrogative","injonctive"], correct:1, exp:"Elle exprime une émotion forte : c'est une phrase exclamative."},
        {q:"« Il ne viendra jamais » est une phrase de forme :", options:["affirmative","négative","interrogative","injonctive"], correct:1, exp:"La présence de « ne...jamais » indique une forme négative."},
        {q:"Dans une phrase passive :", options:["le sujet fait l'action","le sujet subit l'action","il n'y a pas de sujet","le verbe est toujours au futur"], correct:1, exp:"À la forme passive, le sujet subit l'action au lieu de la faire."},
        {q:"« Viens-tu demain ? » est une phrase :", options:["déclarative","interrogative","exclamative","injonctive"], correct:1, exp:"Elle pose une question : c'est une phrase interrogative."}
      ,
        { q: "Dans la phrase « C'est Awa qui a résolu le problème. », quelle forme de phrase est utilisée ?", options: ["La forme impersonnelle", "La forme passive", "La forme emphatique", "La forme négative"], correct: 2, exp: "La construction « C'est... qui... » met en relief (souligne) le sujet Awa : c'est la forme emphatique, qui s'oppose à la forme neutre (« Awa a résolu le problème. »)." }
      ]
    },
    {
      id: "f5",
      title: "Le discours rapporté",
      content: `<p>Le <strong>discours direct</strong> rapporte les paroles exactes d'un personnage, entre guillemets, souvent introduites par un verbe de parole (dire, demander, répondre...). Ex : Il a dit : « Je viendrai demain. »</p>
      <p>Le <strong>discours indirect</strong> rapporte les paroles sans les citer mot à mot, en les intégrant dans une proposition subordonnée introduite par « que » ou un mot interrogatif. Ex : Il a dit qu'il viendrait le lendemain.</p>
      <p>Le passage du discours direct à l'indirect entraîne des changements : les <strong>pronoms</strong> (je → il), les <strong>temps</strong> (présent → imparfait, futur → conditionnel) et les <strong>indicateurs de temps/lieu</strong> (demain → le lendemain, ici → là).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Comme en anglais, le discours rapporté en français entraîne des transformations : le présent devient l'imparfait, le futur devient le conditionnel présent, et les indicateurs de temps changent (aujourd'hui → ce jour-là, demain → le lendemain, hier → la veille). Exemple : « Je viendrai demain », dit-il → Il dit qu'il viendrait le lendemain.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple complet de transformation du discours direct au discours indirect : « Je pars demain », dit Awa devient, au discours indirect, Awa dit qu'elle partait le lendemain (le présent devient imparfait, « demain » devient « le lendemain », et « je » devient « elle »). Autre point important : au discours direct, on utilise les guillemets et le tiret pour marquer les paroles rapportées telles quelles ; au discours indirect, il n'y a plus ni guillemets ni tiret, car les paroles sont intégrées dans la phrase du narrateur avec « que ».</p>
      <h3>📌 Point du programme à ne pas manquer : le discours indirect libre</h3><p>En plus du discours direct et du discours indirect, il existe une troisième forme : le <strong>discours indirect libre</strong>. Il rapporte les paroles ou pensées d'un personnage sans guillemets et sans mot subordonnant (« que »), mais en gardant les temps et les marques de l'oral du discours indirect (souvent inséré directement dans le récit). Ex : « Il regarda l'horizon. Reviendrait-elle un jour ? » (au lieu de : « Il se demanda si elle reviendrait un jour. »). Cette forme, plus littéraire, mêle la voix du narrateur et celle du personnage.</p>`,
      quiz: [
        {q:"Le discours direct utilise :", options:["des guillemets","toujours le futur","aucune ponctuation particulière","uniquement la troisième personne"], correct:0, exp:"Les paroles rapportées au discours direct sont encadrées de guillemets."},
        {q:"« Je viendrai demain » devient au discours indirect :", options:["qu'il viendrait le lendemain","qu'il vient demain","qu'il viendra ici","qu'il est venu hier"], correct:0, exp:"Le futur devient conditionnel et « demain » devient « le lendemain »."},
        {q:"Le discours indirect est introduit souvent par :", options:["un point d'exclamation","que","des guillemets","un tiret"], correct:1, exp:"La conjonction « que » introduit la proposition subordonnée au discours indirect."},
        {q:"Au discours indirect, « ici » devient généralement :", options:["là","demain","toujours ici","aujourd'hui"], correct:0, exp:"L'indicateur de lieu « ici » devient « là » lors du passage au discours indirect."},
        {q:"Le verbe de parole introduit :", options:["uniquement le discours direct","uniquement le discours indirect","les deux formes de discours rapporté","aucun des deux"], correct:2, exp:"Des verbes comme dire, demander, répondre introduisent aussi bien le discours direct que l'indirect."}
      ,
        { q: "Quelle caractéristique distingue le discours indirect libre du discours indirect classique ?", options: ["Il utilise des guillemets", "Il est rapporté sans guillemets ni mot subordonnant (« que »), inséré directement dans le récit", "Il garde exactement les paroles originales", "Il n'existe qu'à l'oral"], correct: 1, exp: "Le discours indirect libre reprend les paroles/pensées d'un personnage sans les guillemets du discours direct et sans le « que » du discours indirect classique : il s'insère directement dans la narration." }
      ]
    },
    {
      id: "f6",
      title: "La lettre argumentative",
      content: `<p>La <strong>lettre argumentative</strong> vise à convaincre un destinataire d'adopter un point de vue ou d'agir d'une certaine façon.</p>
      <p><strong>Structure</strong> : une formule d'appel, une introduction qui présente le sujet, un développement organisé en arguments (chacun illustré par un exemple), et une formule de politesse pour conclure.</p>
      <p><strong>Les arguments</strong> doivent être reliés par des connecteurs logiques (d'abord, ensuite, de plus, enfin, cependant...) pour rendre le raisonnement clair.</p>
      <p>Un bon argument s'appuie sur un <strong>exemple concret</strong> ou un fait vérifiable, ce qui le rend plus convaincant qu'une simple opinion.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour organiser tes arguments, utilise des connecteurs logiques : d'une part / d'autre part, de plus, en outre, cependant, par conséquent, en conclusion. Ils structurent ta pensée et rendent ton argumentation plus convaincante et plus facile à suivre pour le lecteur.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Structure type d'un paragraphe argumentatif : on annonce l'idée (l'argument), puis on l'illustre avec un exemple concret, et on peut terminer par une petite conclusion qui relie l'argument à la thèse défendue. Exemple : « L'école est essentielle pour l'avenir d'un pays (argument), car elle forme les futurs ingénieurs, médecins et enseignants dont la société a besoin (exemple). C'est pourquoi investir dans l'éducation est une priorité (mini-conclusion). »</p>
      <h3>📌 Point du programme à ne pas manquer : les types d'arguments</h3><p>Pour convaincre efficacement, on peut s'appuyer sur différents types d'arguments. L'argument <strong>logique/rationnel</strong> s'appuie sur un raisonnement (cause-conséquence). L'argument par l'<strong>exemple</strong> illustre une idée générale par un cas concret. L'argument d'<strong>autorité</strong> s'appuie sur l'avis d'une personne reconnue ou d'un texte de référence (un proverbe, un expert, une loi). L'argument par les <strong>chiffres/statistiques</strong> s'appuie sur des données vérifiables. Varier les types d'arguments rend une lettre argumentative plus solide et plus persuasive qu'un seul type répété.</p>`,
      quiz: [
        {q:"Le but d'une lettre argumentative est de :", options:["raconter une histoire","décrire un lieu","convaincre le destinataire","donner une recette"], correct:2, exp:"Elle cherche à persuader le lecteur d'un point de vue ou d'une action."},
        {q:"Un connecteur logique utile dans une argumentation est :", options:["soudain","de plus","il était une fois","au clair de lune"], correct:1, exp:"« De plus » relie logiquement deux arguments."},
        {q:"Un argument est plus convaincant lorsqu'il est :", options:["vague","illustré par un exemple","répété plusieurs fois sans preuve","très court"], correct:1, exp:"Un exemple concret appuie et renforce un argument."},
        {q:"La lettre se termine généralement par :", options:["un exemple","une formule de politesse","un élément perturbateur","une comparaison"], correct:1, exp:"Une formule de politesse clôture traditionnellement une lettre."},
        {q:"« Cependant » sert à exprimer :", options:["une addition","une opposition","une conséquence","une certitude absolue"], correct:1, exp:"« Cependant » introduit une nuance ou une opposition dans le raisonnement."}
      ,
        { q: "Dans une lettre argumentative, s'appuyer sur l'avis d'un expert reconnu ou d'un proverbe est un exemple d'argument :", options: ["D'autorité", "Logique", "Par l'exemple", "Par les chiffres"], correct: 0, exp: "L'argument d'autorité s'appuie sur une source reconnue (expert, texte de référence, proverbe) pour renforcer la crédibilité du propos." }
      ]
    },
    {
      id: "f7",
      title: "Les classes grammaticales",
      content: `<p>La <strong>classe grammaticale</strong> (ou nature) d'un mot indique sa catégorie : nom, verbe, adjectif, adverbe, pronom, préposition, conjonction, déterminant...</p>
      <p><strong>Le nom</strong> désigne une personne, un animal, une chose ou une idée (commun ou propre). <strong>Le verbe</strong> exprime une action ou un état, et se conjugue. <strong>L'adjectif</strong> qualifie un nom. <strong>L'adverbe</strong> modifie un verbe, un adjectif ou un autre adverbe et est invariable.</p>
      <p><strong>Le pronom</strong> remplace un nom (il, elle, celui-ci, qui...). <strong>La préposition</strong> (à, de, sur, pour...) et la <strong>conjonction</strong> (et, mais, donc...) relient des mots ou des groupes de mots.</p>
      <p>Connaître la classe d'un mot aide à comprendre sa fonction et à éviter des erreurs d'accord.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> N'oublie pas les classes grammaticales invariables : l'adverbe (modifie un verbe, un adjectif ou un autre adverbe : rapidement, très, bien), la préposition (introduit un complément : à, de, pour, dans) et la conjonction (relie deux mots ou deux propositions : et, mais, car, donc).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Les classes grammaticales variables (qui changent de forme selon le genre, le nombre ou la personne) sont : le nom, le déterminant, l'adjectif qualificatif, le pronom et le verbe. Exemple d'analyse d'une phrase : dans « Les [déterminant] petits [adjectif] enfants [nom] jouent [verbe] joyeusement [adverbe] dans [préposition] le jardin [nom] », chaque mot appartient à une classe précise qui détermine son rôle et ses accords possibles.</p>
      <h3>📌 Point du programme à ne pas manquer : mots variables et mots invariables</h3><p>Les classes grammaticales se répartissent en deux grandes familles. Les <strong>mots variables</strong> changent de forme selon le genre, le nombre ou la conjugaison : le nom, le déterminant, l'adjectif, le pronom et le verbe. Les <strong>mots invariables</strong> gardent toujours la même forme, quelle que soit la phrase : l'adverbe, la préposition, la conjonction et l'interjection. Cette distinction aide à repérer rapidement les mots qui peuvent poser un problème d'accord (les mots variables) de ceux qui n'en posent jamais (les mots invariables).</p>`,
      quiz: [
        {q:"Dans « Le chat dort », « chat » est :", options:["un verbe","un nom","un adjectif","une préposition"], correct:1, exp:"« Chat » désigne un être vivant : c'est un nom."},
        {q:"Un adverbe est un mot :", options:["qui se conjugue","variable en genre et nombre","invariable","qui remplace un nom"], correct:2, exp:"L'adverbe est par nature invariable, contrairement à l'adjectif."},
        {q:"Dans « Elle est gentille », « gentille » est :", options:["un adverbe","un adjectif","un pronom","une conjonction"], correct:1, exp:"« Gentille » qualifie le pronom « elle » : c'est un adjectif."},
        {q:"« Il » est un exemple de :", options:["nom","pronom","préposition","conjonction"], correct:1, exp:"« Il » remplace un nom : c'est un pronom."},
        {q:"« Mais » est une :", options:["préposition","conjonction","interjection","adverbe"], correct:1, exp:"« Mais » relie deux idées : c'est une conjonction de coordination."}
      ,
        { q: "Parmi les classes grammaticales suivantes, laquelle regroupe des mots INVARIABLES (qui ne changent jamais de forme) ?", options: ["Le nom", "L'adjectif", "L'adverbe", "Le pronom"], correct: 2, exp: "L'adverbe est un mot invariable : il garde toujours la même forme, contrairement au nom, à l'adjectif et au pronom, qui varient en genre et/ou en nombre." }
      ]
    },
    {
      id: "f8",
      title: "Les fonctions grammaticales",
      content: `<p>Contrairement à la classe grammaticale (nature), la <strong>fonction</strong> d'un mot dépend de son rôle dans la phrase.</p>
      <p><strong>Le sujet</strong> fait ou subit l'action exprimée par le verbe. <strong>Le complément d'objet direct (COD)</strong> répond à la question « qui ? » ou « quoi ? » posée après le verbe, sans préposition. <strong>Le complément d'objet indirect (COI)</strong> répond aux mêmes questions mais introduit par une préposition (à, de).</p>
      <p><strong>Le complément circonstanciel</strong> précise les circonstances de l'action : lieu, temps, manière, cause... Il peut souvent être déplacé ou supprimé sans rendre la phrase incorrecte.</p>
      <p>Un même mot (ex : un nom) peut occuper différentes fonctions selon la phrase.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour distinguer COD et COI, pose la question juste après le verbe : « le professeur explique QUOI ? » → « la leçon » (COD, sans préposition) ; « le professeur parle À QUI ? » → « aux élèves » (COI, avec préposition). Astuce : si tu peux remplacer le complément par « le/la/les », c'est un COD ; si tu dois utiliser « lui/leur », c'est souvent un COI.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Autres fonctions importantes à connaître : l'attribut du sujet (relié au sujet par un verbe d'état comme être, sembler, devenir : « Awa est intelligente »), et le complément circonstanciel (précise le lieu, le temps, la manière, la cause... et peut souvent être déplacé ou supprimé sans rendre la phrase incorrecte : « Hier, il a plu à Abidjan » → « Il a plu à Abidjan »). Contrairement au COD/COI, le complément circonstanciel n'est pas obligatoire pour que la phrase ait un sens.</p>
      <h3>📌 Point du programme à ne pas manquer : complément du nom et apposition</h3><p>Deux fonctions supplémentaires à connaître. Le <strong>complément du nom</strong> complète un nom, généralement introduit par une préposition (de, à, en...) : « le cahier <strong>de Awa</strong> ». L'<strong>apposition</strong> est un mot ou groupe de mots (souvent un nom ou groupe nominal), séparé par une virgule, qui désigne différemment le même être ou la même chose que le nom ou pronom auquel il se rapporte : « Victor Hugo, <strong>l'auteur des Misérables</strong>, est né en 1802. » L'apposition peut être supprimée sans rendre la phrase incorrecte, contrairement à un complément du nom souvent nécessaire au sens.</p>`,
      quiz: [
        {q:"Dans « Marie mange une pomme », « une pomme » est :", options:["sujet","COD","COI","complément circonstanciel"], correct:1, exp:"« Une pomme » répond à « mange quoi ? » sans préposition : c'est le COD."},
        {q:"Dans « Il parle à son ami », « à son ami » est :", options:["COD","COI","sujet","attribut"], correct:1, exp:"« À son ami » répond à « parle à qui ? » avec une préposition : c'est le COI."},
        {q:"Le complément circonstanciel peut généralement être :", options:["jamais déplacé","déplacé ou supprimé","transformé en sujet","seulement au début de phrase"], correct:1, exp:"Le complément circonstanciel est souvent mobile et peut être supprimé sans rendre la phrase incorrecte."},
        {q:"Le sujet d'une phrase :", options:["répond à qui/quoi après le verbe","fait ou subit l'action du verbe","précise le lieu ou le temps","est toujours un adjectif"], correct:1, exp:"Le sujet est celui qui fait ou subit l'action exprimée par le verbe."},
        {q:"La fonction d'un mot dépend :", options:["uniquement de sa nature","de son rôle dans la phrase","de sa longueur","de sa position alphabétique"], correct:1, exp:"La fonction dépend du rôle que joue le mot dans la phrase, contrairement à sa nature qui est fixe."}
      ,
        { q: "Dans la phrase « Abidjan, la capitale économique, attire beaucoup d'entreprises. », quelle est la fonction de « la capitale économique » ?", options: ["Complément d'objet direct", "Sujet", "Apposition", "Complément circonstanciel"], correct: 2, exp: "« la capitale économique » est une apposition : séparée par des virgules, elle désigne autrement « Abidjan » et pourrait être supprimée sans rendre la phrase incorrecte." }
      ]
    },
    {
      id: "f9",
      title: "Les temps du récit : imparfait et passé simple",
      content: `<p>Dans un récit au passé, on utilise généralement deux temps complémentaires : l'<strong>imparfait</strong> et le <strong>passé simple</strong>.</p>
      <p>L'<strong>imparfait</strong> décrit un décor, une situation qui dure, une habitude, ou exprime un état dans le passé (arrière-plan de l'action). Ex : Il faisait beau, les oiseaux chantaient.</p>
      <p>Le <strong>passé simple</strong> exprime une action brève, ponctuelle, qui fait avancer le récit (premier plan de l'action). Ex : Soudain, il entendit un bruit.</p>
      <p>L'alternance entre ces deux temps permet de distinguer ce qui sert de cadre (imparfait) et ce qui constitue les événements marquants (passé simple).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Astuce pour ne pas se tromper : le passé simple s'utilise pour une action brève et précise qui fait avancer l'histoire (souvent introduite par « soudain », « tout à coup »), tandis que l'imparfait décrit le décor, une action longue ou habituelle. Exemple : « Il pleuvait (imparfait, décor) quand, soudain, la porte s'ouvrit (passé simple, action brève). »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Un troisième temps complète souvent le passé simple et l'imparfait dans un récit : le plus-que-parfait, qui exprime une action antérieure à une autre action passée. Exemple : « Quand il arriva (passé simple) à la gare, le train était déjà parti (plus-que-parfait) » — le départ du train a eu lieu AVANT l'arrivée du personnage, d'où l'utilisation du plus-que-parfait pour marquer cette antériorité.</p>
      <h3>📌 Point du programme à ne pas manquer : le plus-que-parfait pour l'antériorité</h3><p>Un troisième temps complète souvent l'imparfait et le passé simple dans un récit : le <strong>plus-que-parfait</strong>, qui exprime une action <strong>antérieure</strong> à une autre action passée (« l'avant-passé »). Il se forme avec l'auxiliaire (avoir ou être) à l'imparfait + le participe passé. Ex : « Quand il arriva (passé simple), elle était déjà partie (plus-que-parfait — action antérieure à son arrivée). » Le plus-que-parfait permet donc de raconter un événement qui s'est déroulé AVANT le moment principal du récit, souvent pour expliquer une cause.</p>`,
      quiz: [
        {q:"L'imparfait sert surtout à :", options:["exprimer une action brève","décrire un décor ou une habitude","poser une question","donner un ordre"], correct:1, exp:"L'imparfait installe le cadre, la description ou une habitude, à l'arrière-plan du récit."},
        {q:"Le passé simple sert surtout à :", options:["décrire un décor","exprimer une action ponctuelle qui fait avancer le récit","exprimer une vérité générale","donner un conseil"], correct:1, exp:"Le passé simple marque les événements précis qui font progresser l'histoire."},
        {q:"« Il pleuvait depuis le matin » est à :", options:["l'imparfait","au passé simple","au futur","au présent"], correct:0, exp:"Cette phrase décrit une situation qui dure : c'est l'imparfait."},
        {q:"« Soudain, la porte s'ouvrit » est au :", options:["imparfait","passé simple","conditionnel","subjonctif"], correct:1, exp:"Une action brève et ponctuelle qui surprend : c'est le passé simple."},
        {q:"Dans un récit, l'arrière-plan (décor) est généralement exprimé :", options:["au passé simple","à l'imparfait","au futur simple","au subjonctif"], correct:1, exp:"L'imparfait sert de toile de fond descriptive au récit."}
      ,
        { q: "Dans la phrase « Quand je suis arrivé, le film avait déjà commencé. », quel est le rapport entre les deux actions ?", options: ["Elles se déroulent en même temps", "Le film a commencé APRÈS mon arrivée", "Le film a commencé AVANT mon arrivée (antériorité)", "Aucun rapport temporel"], correct: 2, exp: "« avait déjà commencé » est un plus-que-parfait, qui exprime une action antérieure à une autre action passée (ici, mon arrivée) : le film a donc commencé avant que j'arrive." }
      ]
    },
    {
      id: "f10",
      title: "Le conditionnel et le subjonctif",
      content: `<p>Le <strong>conditionnel</strong> exprime une action soumise à une condition, un souhait poli, ou un fait imaginaire. Ex : Si j'avais de l'argent, je voyagerais.</p>
      <p>Le conditionnel présent se forme avec le radical du futur + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient).</p>
      <p>Le <strong>subjonctif</strong> exprime un souhait, un doute, une nécessité, une émotion ou une volonté, souvent après « que ». Ex : Il faut que tu viennes.</p>
      <p>Le subjonctif présent se reconnaît par ses terminaisons -e, -es, -e, -ions, -iez, -ent, après des expressions comme « il faut que », « je souhaite que », « bien que ».</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le conditionnel sert aussi à exprimer la politesse (« Pourriez-vous m'aider ? ») ou une information non confirmée (« Le voleur serait un habitant du quartier »). Le subjonctif, lui, s'emploie après des expressions de doute, de souhait ou d'obligation : « Il faut que tu viennes », « Je doute qu'il réussisse ».</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Astuce de conjugaison : le conditionnel présent se forme en général avec le radical du futur simple + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Exemple : futur « il finira » → conditionnel « il finirait ». Pour le subjonctif présent, on part souvent du radical de la 3e personne du pluriel au présent de l'indicatif : « ils finissent » → « que je finisse, que tu finisses... ».</p>
      <h3>📌 Point du programme à ne pas manquer : le subjonctif passé</h3><p>Le subjonctif présent n'est pas le seul temps du subjonctif. Le <strong>subjonctif passé</strong> exprime un fait antérieur (déjà accompli) mais toujours envisagé sans certitude. Il se forme avec l'auxiliaire (avoir ou être) au <strong>subjonctif présent</strong> + le participe passé. Ex : « Je suis content que tu <strong>aies réussi</strong> ton examen. » (le fait de réussir a déjà eu lieu, mais l'émotion est exprimée au présent). On l'utilise notamment après des expressions de sentiment ou de doute portant sur un fait déjà passé.</p>`,
      quiz: [
        {q:"« Je voyagerais si j'avais de l'argent » utilise :", options:["le futur","le conditionnel","le subjonctif","l'impératif"], correct:1, exp:"Cette phrase exprime une action soumise à une condition : c'est le conditionnel."},
        {q:"Le conditionnel présent se forme avec :", options:["le radical du passé + terminaisons du présent","le radical du futur + terminaisons de l'imparfait","le radical du présent + terminaisons du futur","l'infinitif seul"], correct:1, exp:"Le conditionnel présent combine le radical du futur et les terminaisons de l'imparfait."},
        {q:"« Il faut que tu viennes » utilise :", options:["l'indicatif","le conditionnel","le subjonctif","l'imparfait"], correct:2, exp:"Après « il faut que », on emploie le subjonctif pour exprimer une nécessité."},
        {q:"Le subjonctif exprime souvent :", options:["un fait certain","un doute, un souhait ou une nécessité","une habitude passée","une action ponctuelle du passé"], correct:1, exp:"Le subjonctif s'utilise pour des faits envisagés, souhaités ou incertains, non pour des faits certains."},
        {q:"« Bien qu'il soit fatigué, il continue » utilise le mode :", options:["indicatif","subjonctif","conditionnel","impératif"], correct:1, exp:"« Bien que » est suivi du subjonctif : soit."}
      ,
        { q: "Comment se forme le subjonctif passé ?", options: ["Radical du futur + terminaisons de l'imparfait", "Auxiliaire au subjonctif présent + participe passé", "Auxiliaire à l'imparfait + participe passé", "Radical du présent + terminaisons -e, -es, -e"], correct: 1, exp: "Le subjonctif passé se forme avec l'auxiliaire avoir ou être conjugué au subjonctif présent (que j'aie, que tu sois...) suivi du participe passé du verbe." }
      ]
    },
    {
      id: "f11",
      title: "La proposition subordonnée relative",
      content: `<p>Une <strong>proposition subordonnée relative</strong> complète un nom ou un pronom (son antécédent) et est introduite par un <strong>pronom relatif</strong> : qui, que, dont, où, lequel...</p>
      <p><strong>Qui</strong> remplace le sujet du verbe qui suit. <strong>Que</strong> remplace le COD. <strong>Dont</strong> remplace un complément introduit par « de ». <strong>Où</strong> indique un lieu ou un temps.</p>
      <p>Exemple : « Le livre que je lis est passionnant. » → « que » remplace « le livre », COD du verbe « lis ».</p>
      <p>La subordonnée relative a une fonction de <strong>complément de l'antécédent</strong> (souvent appelé complément du nom).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> N'oublie pas les pronoms relatifs « dont » (remplace un complément introduit par « de » : le livre dont je parle) et « où » (remplace un complément de lieu ou de temps : la ville où je suis né, le jour où il est parti). Bien choisir son pronom relatif évite de répéter le nom inutilement.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de fusion de deux phrases grâce à une proposition subordonnée relative : « J'ai lu le livre. Tu m'as offert ce livre. » devient « J'ai lu le livre que tu m'as offert. » (« que » remplace « ce livre », complément d'objet direct du verbe offrir). Le choix du pronom relatif dépend de la fonction du mot qu'il remplace : « qui » pour un sujet, « que » pour un COD, « dont » pour un complément en « de », « où » pour un lieu ou un temps.</p>
      <h3>📌 Point du programme à ne pas manquer : relative déterminative ou explicative</h3><p>On distingue deux emplois de la subordonnée relative. La relative <strong>déterminative</strong> (sans virgule) est indispensable au sens : elle précise de quel élément on parle, et la supprimer changerait le sens de la phrase. Ex : « Les élèves <strong>qui ont révisé</strong> réussiront. » (seulement ceux qui ont révisé). La relative <strong>explicative</strong> (entre virgules) apporte une information supplémentaire, non indispensable : on pourrait la supprimer sans changer le sens général. Ex : « Les élèves, <strong>qui étaient fatigués</strong>, ont bien réussi quand même. » (tous les élèves, l'information sur la fatigue est juste ajoutée).</p>`,
      quiz: [
        {q:"Dans « L'homme qui parle est mon voisin », « qui » remplace :", options:["le COD","le sujet du verbe « parle »","un complément circonstanciel","rien, c'est un mot vide"], correct:1, exp:"« Qui » reprend « l'homme » comme sujet du verbe « parle »."},
        {q:"Dans « Le livre que je lis », « que » a pour fonction :", options:["sujet","COD","COI","complément circonstanciel"], correct:1, exp:"« Que » remplace « le livre », complément d'objet direct de « lis »."},
        {q:"« Dont » remplace généralement un complément introduit par :", options:["à","de","sur","pour"], correct:1, exp:"« Dont » reprend un complément construit avec la préposition « de »."},
        {q:"« Où » dans une relative indique souvent :", options:["une personne","un lieu ou un temps","une quantité","une couleur"], correct:1, exp:"« Où » introduit généralement un complément de lieu ou de temps."},
        {q:"La subordonnée relative complète :", options:["le verbe principal uniquement","un nom ou un pronom (son antécédent)","toujours le sujet","rien de précis"], correct:1, exp:"Elle apporte une précision sur un nom ou un pronom appelé antécédent."}
      ,
        { q: "Dans la phrase « Les fruits, qui étaient très mûrs, ont été vendus rapidement. », la subordonnée relative est :", options: ["Déterminative, car indispensable au sens", "Explicative, car elle apporte une information supplémentaire non indispensable", "Ni l'une ni l'autre", "Une subordonnée complétive"], correct: 1, exp: "Entourée de virgules, cette relative est explicative : elle ajoute une précision (les fruits étaient mûrs) sans laquelle la phrase garderait son sens principal (tous les fruits ont été vendus)." }
      ]
    },
    {
      id: "f12",
      title: "Exprimer la cause et la conséquence",
      content: `<p>Pour exprimer la <strong>cause</strong> (le pourquoi), on utilise des connecteurs comme : parce que, car, puisque, comme, à cause de, grâce à.</p>
      <p>Pour exprimer la <strong>conséquence</strong> (le résultat), on utilise des connecteurs comme : donc, alors, par conséquent, si bien que, c'est pourquoi.</p>
      <p>Exemple de cause : « Il est resté chez lui parce qu'il pleuvait. »<br>
      Exemple de conséquence : « Il pleuvait, donc il est resté chez lui. »</p>
      <p>Bien choisir ses connecteurs logiques permet de structurer un raisonnement clair, notamment dans un texte argumentatif ou explicatif.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Connecteurs de cause : parce que, car, puisque, comme, grâce à, à cause de. Connecteurs de conséquence : donc, alors, par conséquent, c'est pourquoi, si bien que. Exemple combinant les deux : « Il a beaucoup révisé, c'est pourquoi il a réussi son examen. »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Nuance utile entre les connecteurs de cause : « parce que » répond directement à la question « pourquoi ? » et introduit une raison objective, tandis que « puisque » introduit une cause déjà connue ou évidente pour l'interlocuteur. Exemple combinant cause et conséquence dans un même texte : « Puisque la route était inondée (cause connue), les élèves sont arrivés en retard, si bien que le professeur a dû reprendre le cours du début (conséquence). »</p>
      <h3>📌 Point du programme à ne pas manquer : exprimer la cause/conséquence sans connecteur classique</h3><p>On peut aussi exprimer la cause ou la conséquence sans utiliser un connecteur classique (parce que, donc...). Par un <strong>groupe nominal</strong> introduit par une préposition : « à cause de » (cause négative), « grâce à » (cause positive) : « Il a réussi <strong>grâce à</strong> son travail. » Par la <strong>juxtaposition</strong>, avec deux propositions simplement séparées par une virgule ou deux points, sans connecteur explicite, mais où le lien de cause/conséquence reste compris grâce au sens : « Il pleuvait des cordes : la sortie fut annulée. »</p>`,
      quiz: [
        {q:"« Parce que » introduit :", options:["une cause","une conséquence","une comparaison","une condition"], correct:0, exp:"« Parce que » explique la raison d'un fait : c'est un connecteur de cause."},
        {q:"« Donc » introduit :", options:["une cause","une conséquence","une opposition","un but"], correct:1, exp:"« Donc » indique le résultat qui découle de ce qui précède : c'est un connecteur de conséquence."},
        {q:"« Grâce à » exprime :", options:["une conséquence positive dont on connaît la cause","une opposition","un doute","un but"], correct:0, exp:"« Grâce à » introduit une cause perçue positivement, menant à une conséquence favorable."},
        {q:"« Si bien que » introduit :", options:["une cause","une conséquence","une comparaison","une hypothèse"], correct:1, exp:"« Si bien que » relie un fait à son résultat : c'est un connecteur de conséquence."},
        {q:"« Comme il pleuvait, nous sommes restés » : « comme » exprime ici :", options:["une comparaison","une cause","une conséquence","un but"], correct:1, exp:"En début de phrase, « comme » indique ici la cause de ce qui suit."}
      ,
        { q: "Dans la phrase « Il pleuvait des cordes : la sortie fut annulée. », comment le lien de conséquence est-il exprimé ?", options: ["Par le connecteur « donc »", "Par juxtaposition (les deux points), sans connecteur explicite", "Par le groupe nominal « à cause de »", "Il n'y a aucun lien de conséquence"], correct: 1, exp: "Les deux propositions sont juxtaposées (reliées par des deux points, sans connecteur logique explicite comme « donc »), mais le lien de cause à conséquence reste compris grâce au sens des deux phrases." }
      ]
    },
    {
      id: "f13",
      title: "Le texte explicatif",
      content: `<p>Le <strong>texte explicatif</strong> a pour but de faire comprendre un phénomène naturel, scientifique ou socioculturel à un lecteur, en répondant surtout à la question « pourquoi » ou « comment ».</p>
      <p>Il se reconnaît à certains procédés : un <strong>vocabulaire précis</strong> lié au thème, des <strong>mots ou expressions explicatifs</strong> (c'est-à-dire, en d'autres termes...), des <strong>connecteurs logiques</strong> (d'abord, ensuite, enfin...), un <strong>ton neutre et objectif</strong> (souvent au présent de vérité générale), et une ponctuation qui aide à la clarté (deux points, parenthèses).</p>
      <p>Il s'organise en trois parties : une <strong>introduction</strong> qui présente le thème et son importance, un <strong>développement</strong> qui explique le phénomène étape par étape avec des exemples, et une <strong>conclusion</strong> qui résume les points clés.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un bon texte explicatif répond généralement à une question implicite (pourquoi ? comment ?) et suit un plan clair : une introduction qui pose le sujet, un développement qui explique étape par étape (souvent avec des exemples et des connecteurs logiques), et une conclusion qui résume l'essentiel.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Le texte explicatif utilise souvent le présent de vérité générale (un présent qui exprime un fait toujours vrai, indépendant du moment où on parle) : « L'eau bout à 100°C au niveau de la mer. » Il utilise aussi des expressions de reformulation pour clarifier une idée technique : « c'est-à-dire », « autrement dit », « en d'autres termes », qui aident le lecteur à mieux comprendre une notion complexe.</p>
      <h3>📌 Point du programme à ne pas manquer : les deux types de sujets</h3>
      <p>Le programme distingue deux grandes situations d'écriture pour le texte explicatif : expliquer un <strong>phénomène naturel</strong> (par exemple, pourquoi il pleut, comment se forme un arc-en-ciel) et expliquer une <strong>pratique socioculturelle</strong> (par exemple, le déroulement d'une cérémonie traditionnelle, une coutume locale). Dans les deux cas, la méthode reste la même — vocabulaire précis, connecteurs logiques, ton neutre — seul le sujet change.</p>`,
      quiz: [
        {q:"Le texte explicatif répond surtout à la question :", options:["qui ?","pourquoi/comment ?","où ?","quand ?"], correct:1, exp:"Ce type de texte cherche à faire comprendre un phénomène, donc à expliquer son fonctionnement ou sa cause."},
        {q:"Le ton d'un texte explicatif est généralement :", options:["passionné et personnel","neutre et objectif","humoristique","poétique"], correct:1, exp:"Le texte explicatif reste neutre et objectif, pour bien transmettre une information vérifiable."},
        {q:"Un exemple de mot explicatif est :", options:["soudain","c'est-à-dire","malheureusement","autrefois"], correct:1, exp:"« C'est-à-dire » est une expression typique du texte explicatif, qui reformule une idée."},
        {q:"Le texte explicatif comporte généralement :", options:["seulement un développement","introduction, développement, conclusion","seulement une conclusion","des dialogues uniquement"], correct:1, exp:"Comme la plupart des textes structurés, il suit un plan en trois parties."},
        {q:"Le texte explicatif peut porter sur :", options:["un phénomène naturel, scientifique ou socioculturel uniquement","des sentiments personnels uniquement","une histoire imaginaire uniquement","un poème"], correct:0, exp:"Le texte explicatif traite de phénomènes réels : naturels, scientifiques ou socioculturels."},
        {q:"Le programme d'expression écrite distingue deux types de textes explicatifs. Lesquels ?", options:["L'explication d'un phénomène naturel et celle d'une pratique socioculturelle","L'explication scientifique et mathématique uniquement","Uniquement des phénomènes naturels","Uniquement des récits imaginaires"], correct:0, exp:"Les deux sessions du texte explicatif portent sur un phénomène naturel et une pratique socioculturelle."}
      ]
    },
    {
      id: "f14",
      title: "Le résumé de texte",
      content: `<p>Le <strong>résumé de texte</strong> consiste à réduire un texte à environ un tiers de sa longueur initiale, tout en respectant fidèlement l'ordre et le sens des idées développées par l'auteur.</p>
      <p><strong>Méthode</strong> : lire le texte plusieurs fois, repérer les idées essentielles (en écartant exemples, répétitions et détails secondaires), suivre l'ordre du texte sans rien ajouter ni juger, puis reformuler ces idées avec ses propres mots.</p>
      <p><strong>Règles à respecter</strong> : ne pas donner son avis personnel, ne pas changer le sens du texte, éviter les mots trop familiers, ne pas garder le titre dans le résumé, et indiquer le nombre de mots utilisés à la fin.</p>
      <p>Contrairement à d'autres rédactions, le résumé <strong>ne comporte ni introduction ni conclusion</strong> séparées : c'est une reformulation continue et condensée du texte.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Règles essentielles du résumé : garde le même temps verbal et le même point de vue (« je » reste « je », on ne dit pas « l'auteur dit que... »), n'ajoute aucune opinion personnelle, et réduis le texte à environ un quart de sa longueur initiale tout en conservant les idées essentielles dans leur ordre.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de résumé : le texte « Le marché central d'Abidjan est un lieu très animé. Dès l'aube, les vendeurs installent leurs étals de fruits, de légumes et de tissus colorés. Les clients viennent négocier les prix avec bonne humeur, dans un joyeux désordre de cris et de couleurs. » peut se résumer ainsi : « Le marché central d'Abidjan, animé dès l'aube, réunit vendeurs et clients dans une ambiance colorée et bruyante. » — on garde les idées essentielles (lieu, moment, ambiance) en réduisant fortement la longueur.</p>
      <h3>📌 Point du programme à ne pas manquer : des exemples de textes à résumer</h3>
      <p>Les textes supports classiques pour s'entraîner au résumé portent souvent sur des thèmes de société, comme « La démission familiale » (le désengagement des parents dans l'éducation de leurs enfants), ou des phénomènes naturels comme « L'Harmattan » (ce vent chaud et sec, chargé de poussière, qui souffle sur l'Afrique de l'Ouest en saison sèche). Un bon entraînement consiste à choisir un texte de ce type, à repérer son thème central en une phrase, puis à résumer chaque paragraphe en une seule idée avant de relier ces idées entre elles.</p>`,
      quiz: [
        {q:"Un résumé de texte doit généralement représenter :", options:["la moitié du texte original","environ un tiers du texte original","le double du texte original","seulement le titre"], correct:1, exp:"Le résumé réduit le texte à environ un tiers de sa longueur initiale."},
        {q:"Pour résumer, il faut d'abord :", options:["donner son opinion","repérer les idées essentielles","ajouter des exemples personnels","changer l'ordre des idées"], correct:1, exp:"La première étape consiste à identifier les idées essentielles du texte, sans les détails secondaires."},
        {q:"Dans un résumé, il ne faut pas :", options:["reformuler avec ses propres mots","respecter l'ordre du texte","donner son avis personnel","condenser les idées"], correct:2, exp:"Le résumé doit rester fidèle au texte, sans jugement ni opinion personnelle ajoutée."},
        {q:"Un résumé de texte comporte :", options:["une introduction et une conclusion séparées","uniquement une reformulation condensée, sans intro/conclusion distinctes","seulement des exemples","un dialogue"], correct:1, exp:"Contrairement à une dissertation, le résumé n'a pas d'introduction ni de conclusion séparées."},
        {q:"Il faut éviter dans un résumé :", options:["le vocabulaire précis","les répétitions et les exemples du texte original","de suivre l'ordre du texte","de reformuler les idées"], correct:1, exp:"Les exemples et répétitions sont des détails à écarter, seules les idées essentielles sont gardées."},
        {q:"Quel est le thème du texte « L'Harmattan », souvent utilisé comme support de résumé ?", options:["Un vent chaud et sec d'Afrique de l'Ouest","Une recette de cuisine","Un événement sportif","Une chanson populaire"], correct:0, exp:"L'Harmattan est un vent chaud, sec et chargé de poussière qui souffle en Afrique de l'Ouest pendant la saison sèche."}
      ]
    },
    {
      id: "f15",
      title: "Le compte rendu de réunion",
      content: `<p>Le <strong>compte rendu de réunion</strong> est un rapport qui présente fidèlement le déroulement et le contenu d'une réunion, rédigé le plus souvent par un secrétaire de séance.</p>
      <p><strong>Présentation formelle</strong> : il comporte un en-tête avec l'intitulé, la date, le lieu, l'heure, le nom du responsable et du rapporteur, la liste des membres présents et absents, l'ordre du jour, le déroulement de la réunion, et la signature du rapporteur.</p>
      <p>Le compte rendu <strong>débute par une phrase d'introduction</strong> rappelant la nature, la date, l'heure et le lieu de la réunion, puis résume brièvement chaque intervention en mentionnant son auteur.</p>
      <p>Il se termine par une formule indiquant que l'ordre du jour a été épuisé et précisant l'heure de la levée de séance.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le compte rendu doit rester neutre et objectif : on rapporte les faits et les décisions prises, sans donner son avis personnel. Il se rédige souvent à la troisième personne et au passé, avec une structure claire : présents/absents, ordre du jour, décisions, date de la prochaine réunion.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Différence à connaître : le compte rendu résume et reformule ce qui s'est dit (dans l'ordre logique des thèmes abordés), tandis que le procès-verbal rapporte les échanges de façon plus formelle et souvent chronologique, avec une valeur presque juridique pour certaines réunions officielles. Exemple de structure : Objet de la réunion — Présents/Absents — Points abordés (1, 2, 3...) — Décisions prises — Date de la prochaine réunion.</p>
      <h3>📌 Point du programme à ne pas manquer : compte rendu ou procès-verbal ?</h3><p>Il ne faut pas confondre deux écrits proches. Le <strong>compte rendu</strong> rapporte fidèlement le déroulement d'une réunion (résumé des interventions, décisions prises), mais sans valeur juridique officielle. Le <strong>procès-verbal (PV)</strong> a, lui, une valeur juridique/officielle : il doit rapporter les faits de façon rigoureuse et peut servir de preuve (utilisé par exemple pour une assemblée générale, un conseil d'administration, ou par les autorités). Autre règle essentielle du compte rendu : le rédacteur doit rester <strong>neutre et objectif</strong>, sans exprimer son opinion personnelle sur ce qui a été dit.</p>`,
      quiz: [
        {q:"Le compte rendu de réunion est généralement rédigé par :", options:["le président uniquement","le secrétaire de séance","un participant au hasard","un journaliste"], correct:1, exp:"C'est le secrétaire de séance qui est chargé de rédiger le compte rendu."},
        {q:"L'en-tête du compte rendu doit indiquer notamment :", options:["uniquement le titre","la date, le lieu, l'heure et les participants","seulement les absents","rien de particulier"], correct:1, exp:"L'en-tête regroupe les informations essentielles : intitulé, date, lieu, heure, participants."},
        {q:"Le corps du compte rendu doit :", options:["inventer de nouveaux propos","résumer chaque intervention en citant son auteur","être rédigé au discours direct uniquement","omettre les décisions prises"], correct:1, exp:"On résume fidèlement chaque intervention, en indiquant qui a pris la parole."},
        {q:"Le compte rendu se termine par :", options:["une formule de politesse amoureuse","une formule indiquant la fin de l'ordre du jour et l'heure de levée de séance","un poème","une liste de courses"], correct:1, exp:"Une formule de clôture précise que l'ordre du jour est épuisé et donne l'heure de fin."},
        {q:"L'ordre du jour dans un compte rendu désigne :", options:["la météo du jour","la liste des sujets à traiter pendant la réunion","le nom du secrétaire","l'heure de début uniquement"], correct:1, exp:"L'ordre du jour liste les points qui doivent être abordés durant la réunion."}
      ,
        { q: "Quelle règle essentielle doit respecter le rédacteur d'un compte rendu de réunion ?", options: ["Donner son opinion personnelle sur les débats", "Rester neutre et objectif, sans exprimer son avis", "Résumer uniquement ses propres interventions", "Inventer des détails pour rendre le texte plus vivant"], correct: 1, exp: "Le compte rendu doit rapporter fidèlement et objectivement ce qui s'est dit en réunion, sans que le rédacteur y mêle son opinion personnelle — contrairement à un texte argumentatif." }
      ]
    },
    {
      id: "f16",
      title: "Le dialogue argumentatif",
      content: `<p>Le <strong>dialogue argumentatif</strong> met en scène un échange entre deux ou plusieurs personnages qui ne partagent pas le même point de vue ; il a pour but de convaincre l'interlocuteur en utilisant des arguments.</p>
      <p><strong>Organisation</strong> : une introduction qui présente le sujet de discussion, les interlocuteurs et leurs points de vue respectifs ; un développement où chaque personnage intervient à tour de rôle en appuyant ses arguments d'exemples ; une conclusion qui indique sur quelle note (accord ou désaccord) se termine l'échange.</p>
      <p><strong>Outils de langue utiles</strong> : les indices de la 1ère et 2ème personne, les marques du dialogue (tirets, discours direct), des verbes introducteurs de parole, et des connecteurs logiques pour enchaîner les arguments.</p>
      <p>Le dialogue peut aussi être <strong>rapporté par un narrateur</strong>, qui présente alors les deux points de vue et fait un bilan final des échanges.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> N'oublie pas la ponctuation du dialogue : chaque changement de locuteur commence par un tiret (—), et les verbes de parole (dire, répondre, affirmer, objecter) permettent de varier la présentation des répliques sans répéter toujours « il dit ».</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Technique utile dans un dialogue argumentatif : la concession, qui consiste à reconnaître un point de l'adversaire avant de le contrer, ce qui rend l'argumentation plus convaincante. Exemple : « — Certes, les réseaux sociaux permettent de rester en contact avec ses amis, mais ils prennent aussi énormément de temps qui pourrait être consacré aux études, répondit Aya. » Cette structure « certes... mais » montre qu'on a compris l'avis opposé tout en défendant le sien.</p>
      <h3>📌 Point du programme à ne pas manquer : la concession, une technique avancée</h3><p>Une technique argumentative avancée, utile dans un dialogue argumentatif convaincant : la <strong>concession</strong>. Elle consiste à reconnaître partiellement un point valable de l'argument adverse, avant de le nuancer ou de le réfuter — ce qui rend le propos plus honnête et souvent plus persuasif qu'un simple refus catégorique. Elle s'introduit avec des connecteurs comme « certes... mais », « il est vrai que... cependant », « je reconnais que... toutefois ». Ex : « Certes, cette solution coûte cher, mais elle nous fera économiser à long terme. »</p>`,
      quiz: [
        {q:"Le but du dialogue argumentatif est de :", options:["décrire un paysage","convaincre l'interlocuteur","raconter une légende","donner une recette"], correct:1, exp:"Ce type de dialogue vise à faire changer d'avis ou à convaincre l'autre personnage."},
        {q:"Le dialogue argumentatif comporte :", options:["seulement un développement","une introduction, un développement et une conclusion","seulement une conclusion","uniquement des questions"], correct:1, exp:"Comme les autres types de textes structurés, il suit un plan en trois parties."},
        {q:"Un argument doit être :", options:["vague et sans exemple","soutenu et illustré par un exemple","toujours faux","répété sans preuve"], correct:1, exp:"Un bon argument s'appuie sur une illustration concrète pour être convaincant."},
        {q:"Les marques du dialogue incluent notamment :", options:["les tirets et le discours direct","les racines carrées","les formules chimiques","les théorèmes"], correct:0, exp:"Les tirets et le discours direct signalent les prises de parole des personnages."},
        {q:"Quand un narrateur rapporte le dialogue, il doit notamment :", options:["inventer un nouveau sujet","présenter les points de vue et faire un bilan final","ignorer les arguments","supprimer la conclusion"], correct:1, exp:"Le narrateur restitue les points de vue échangés et conclut sur l'issue du débat."}
      ,
        { q: "Que fait un locuteur qui utilise la technique de la concession (« Certes... mais... ») dans un dialogue argumentatif ?", options: ["Il ignore complètement l'avis de l'adversaire", "Il reconnaît partiellement un point de l'adversaire avant de le nuancer", "Il répète son propre argument sans varier", "Il met fin au dialogue"], correct: 1, exp: "La concession reconnaît d'abord une part de vérité dans l'argument adverse (« certes... ») avant de le nuancer ou de le contrer (« ...mais »), ce qui rend le raisonnement plus honnête et souvent plus convaincant." }
      ]
    },
    {
      id: "f17",
      title: "La lettre officielle",
      content: `<p>La <strong>lettre officielle</strong> est adressée à une autorité compétente (maire, directeur, administration) pour demander une information, un document ou un service, dans un cadre formel.</p>
      <p><strong>Caractéristiques</strong> : elle respecte une mise en page précise, un niveau de langue soutenu, et des formules de politesse codifiées.</p>
      <p><strong>Parties principales</strong> : le lieu et la date, les coordonnées de l'émetteur, la désignation du destinataire, l'objet de la lettre, la formule d'appel, le corps de la lettre (qui expose clairement la demande), la formule de politesse finale, la mention des pièces jointes éventuelles, et la signature.</p>
      <p>Le corps de la lettre commence souvent par une formule comme « J'ai l'honneur de solliciter... » pour exposer poliment et clairement l'objet de la demande.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La formule de politesse finale doit reprendre les termes de la formule d'appel. Exemple : si tu as commencé par « Monsieur le Censeur, », tu dois terminer par quelque chose comme « Je vous prie d'agréer, Monsieur le Censeur, l'expression de mes salutations respectueuses. »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Structure complète d'une lettre officielle : coordonnées de l'expéditeur (en haut à gauche), coordonnées du destinataire (en haut à droite), lieu et date, objet de la lettre (une ligne résumant la demande), formule d'appel, corps de la lettre (contexte, demande, justification), formule de politesse, et signature. Exemple d'objet : « Objet : Demande de certificat de scolarité » — une ligne claire qui permet au destinataire de comprendre immédiatement le motif de la lettre.</p>
      <h3>📌 Point du programme à ne pas manquer : exemples de formules de politesse</h3><p>La formule de politesse finale d'une lettre officielle doit être adaptée au destinataire. À un maire ou une haute autorité : « Veuillez agréer, Monsieur le Maire, l'expression de mon profond respect. » À un directeur d'établissement : « Je vous prie d'agréer, Monsieur le Directeur, l'expression de mes salutations distinguées. » Règle importante : la formule de politesse doit toujours <strong>reprendre les termes utilisés dans la formule d'appel</strong> (si on a écrit « Monsieur le Directeur », on le répète dans la formule finale).</p>`,
      quiz: [
        {q:"La lettre officielle s'adresse à :", options:["un ami proche","une autorité compétente","un personnage imaginaire","un animal"], correct:1, exp:"Elle est destinée à une autorité (administration, direction...) dans un cadre formel."},
        {q:"Le niveau de langue d'une lettre officielle doit être :", options:["familier","soutenu","argotique","enfantin"], correct:1, exp:"Une lettre officielle exige un registre de langue soutenu et respectueux."},
        {q:"Parmi les parties d'une lettre officielle, on trouve :", options:["le schéma narratif","l'objet de la lettre et la formule d'appel","les péripéties","le résumé du texte"], correct:1, exp:"L'objet et la formule d'appel font partie des éléments structurants d'une lettre officielle."},
        {q:"« J'ai l'honneur de solliciter... » est une formule utilisée pour :", options:["clore la lettre","exposer poliment une demande","donner un ordre","décrire un paysage"], correct:1, exp:"Cette formule introduit poliment l'objet précis de la demande dans le corps de la lettre."},
        {q:"Les pièces jointes dans une lettre officielle sont mentionnées :", options:["au début de la lettre uniquement","généralement en bas, après la signature ou juste avant","jamais","à la place de l'objet"], correct:1, exp:"Les pièces jointes (p.j.) sont habituellement listées en fin de lettre."}
      ,
        { q: "Quelle règle faut-il respecter entre la formule d'appel et la formule de politesse finale d'une lettre officielle ?", options: ["Elles doivent être différentes pour ne pas se répéter", "La formule finale doit reprendre les termes utilisés dans la formule d'appel", "Seule la formule d'appel est obligatoire", "Elles n'ont aucun rapport entre elles"], correct: 1, exp: "Par cohérence et par respect du destinataire, la formule de politesse finale doit reprendre exactement les mêmes termes que la formule d'appel utilisée au début de la lettre (ex : « Monsieur le Directeur » dans les deux)." }
      ]
    },
    {
      id: "f18",
      title: "Le groupe nominal",
      content: `<p>Un <strong>groupe nominal</strong> (GN) est un ensemble de mots équivalent à un nom : il peut être remplacé par un nom ou un pronom. Exemple : « la capitale de la Côte d'Ivoire » peut être remplacé par « Yamoussoukro ».</p>
      <p>Le groupe nominal est composé d'un <strong>nom noyau</strong> (l'élément central) et éventuellement d'expansions qui viennent le compléter : le <strong>déterminant</strong> (précède le nom, s'accorde en genre et en nombre : la classe), l'<strong>adjectif épithète</strong> (relié directement au nom : la voiture rouge), le <strong>complément du nom</strong> (relié par une préposition : le bureau du proviseur), et la <strong>subordonnée relative</strong> (reliée directement au nom : les enfants que tu m'as envoyés sont sages).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un groupe nominal peut cumuler plusieurs expansions autour du même nom noyau : « l'énorme voiture rouge du voisin que j'ai vue hier » contient un déterminant, un adjectif épithète, un complément du nom et une subordonnée relative, tous rattachés au nom noyau « voiture ».</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'analyse : « Le château de mon père est beau. » Le groupe nominal sujet est « Le château de mon père », avec « château » comme nom noyau, « Le » comme déterminant, et « de mon père » comme complément du nom (relié par la préposition « de »). Repérer le nom noyau en premier permet ensuite d'identifier facilement les expansions qui l'entourent.</p>
      <h3>📌 Point du programme à ne pas manquer : l'apposition, une cinquième expansion</h3><p>En plus du déterminant, de l'épithète, du complément du nom et de la subordonnée relative, une cinquième expansion du nom existe : l'<strong>apposition</strong>. C'est un nom (ou groupe nominal) séparé par une virgule, qui désigne autrement le nom auquel il se rapporte, en apportant une précision qui peut être supprimée. Ex : « Yamoussoukro, <strong>capitale politique de la Côte d'Ivoire</strong>, abrite la basilique Notre-Dame-de-la-Paix. »</p>`,
      quiz: [
        {q:"Un groupe nominal peut être remplacé par...", options:["un verbe","un nom ou un pronom","un adverbe seul","une préposition"], correct:1, exp:"Le groupe nominal est équivalent à un nom, donc remplaçable par un nom ou un pronom."},
        {q:"Dans « la voiture rouge », « rouge » est...", options:["un complément du nom","un adjectif épithète","une subordonnée relative","un déterminant"], correct:1, exp:"« rouge » est un adjectif qualificatif relié directement au nom : c'est un adjectif épithète."},
        {q:"Dans « le bureau du proviseur », « du proviseur » est...", options:["un adjectif épithète","un complément du nom","une subordonnée relative","un déterminant"], correct:1, exp:"« du proviseur » est relié au nom par la préposition « de » : c'est un complément du nom."},
        {q:"Le nom noyau d'un groupe nominal est...", options:["le déterminant","l'élément central autour duquel s'organisent les autres mots","toujours le premier mot","l'adjectif"], correct:1, exp:"Le nom noyau est l'élément principal du groupe nominal, autour duquel s'organisent ses expansions."},
        {q:"Une subordonnée relative dans un groupe nominal est reliée...", options:["par une préposition","directement au nom, sans préposition","toujours par une virgule","jamais au nom"], correct:1, exp:"La subordonnée relative est directement reliée au nom qu'elle complète (par un pronom relatif comme qui, que, dont, où)."}
      ,
        { q: "Dans « Le fleuve Niger, le plus long fleuve d'Afrique de l'Ouest, traverse plusieurs pays. », quelle expansion du nom est « le plus long fleuve d'Afrique de l'Ouest » ?", options: ["Un complément du nom", "Une épithète", "Une apposition", "Un déterminant"], correct: 2, exp: "Séparée par des virgules et pouvant être supprimée sans rendre la phrase incorrecte, cette expansion est une apposition — elle désigne autrement « le fleuve Niger »." }
      ]
    },
    {
      id: "f19",
      title: "La pronominalisation",
      content: `<p>La <strong>pronominalisation</strong> consiste à remplacer un groupe de mots (souvent un groupe nominal) par un <strong>pronom</strong>, afin d'éviter les répétitions et d'alléger la phrase. Exemple : « Awa aime les mangues. Awa en mange chaque jour. » devient « Awa aime les mangues. Elle en mange chaque jour. »</p>
      <p>On distingue le <strong>déterminant zéro</strong> : l'absence de déterminant devant un nom, qui s'emploie dans certains cas précis : devant les noms propres (Alice s'est rendue à Bouaké), dans les proverbes et maximes (« Pauvreté est mère du vice »), et dans certaines expressions figées ou vœux (« Meilleurs vœux »).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le choix du bon pronom dépend de la fonction du mot remplacé : un pronom personnel sujet (il, elle, ils, elles) remplace un groupe nominal sujet, tandis qu'un pronom complément (le, la, les, lui, leur, en, y) remplace un groupe nominal complément, selon sa fonction précise dans la phrase.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de pronominalisation complète : « Le professeur donne le livre à l'élève. » → « Le professeur le lui donne. » (« le » remplace « le livre », COD ; « lui » remplace « à l'élève », COI). Cette technique évite de répéter « le livre » et « à l'élève » si ces éléments ont déjà été mentionnés dans la phrase précédente.</p>
      <h3>📌 Point du programme à ne pas manquer : quel pronom pour quelle fonction ?</h3><p>Le choix du pronom dépend précisément de la <strong>fonction</strong> du groupe qu'il remplace. Pour un <strong>sujet</strong> : pronom personnel sujet (il, elle, ils...). Pour un <strong>COD</strong> : le, la, les (« Je vois Awa » → « Je <strong>la</strong> vois »). Pour un <strong>COI</strong> introduit par « à » : lui, leur (« Je parle à Awa » → « Je <strong>lui</strong> parle »). Pour un complément introduit par « de » : <strong>en</strong> (« Il parle de ce projet » → « Il <strong>en</strong> parle »). Pour un complément de lieu : <strong>y</strong> (« Il va à Abidjan » → « Il <strong>y</strong> va »).</p>`,
      quiz: [
        {q:"La pronominalisation sert à...", options:["allonger les phrases","remplacer un groupe de mots par un pronom pour éviter les répétitions","supprimer le sujet","ajouter des adjectifs"], correct:1, exp:"La pronominalisation permet d'éviter les répétitions en remplaçant un groupe de mots par un pronom."},
        {q:"Le déterminant zéro s'emploie devant...", options:["tous les noms communs","les noms propres, dans les proverbes, et certaines expressions figées","uniquement les adjectifs","jamais dans la langue française"], correct:1, exp:"Le déterminant zéro (absence de déterminant) s'emploie dans des cas précis : noms propres, proverbes, expressions figées."},
        {q:"Dans « Bloléquin est beau », le nom « Bloléquin » a...", options:["un déterminant défini","un déterminant zéro (absence de déterminant)","un déterminant indéfini","deux déterminants"], correct:1, exp:"Les noms propres n'ont généralement pas de déterminant : c'est le déterminant zéro."},
        {q:"Dans « Le professeur le lui donne », « le » remplace...", options:["le professeur","le livre (COD)","l'élève","aucun mot"], correct:1, exp:"« le » est un pronom COD qui remplace le groupe nominal complément d'objet direct, ici « le livre »."},
        {q:"Quel type de mot utilise-t-on pour la pronominalisation ?", options:["Un adjectif","Un pronom","Une préposition","Une conjonction"], correct:1, exp:"On utilise un pronom pour remplacer le groupe de mots (pronominalisation)."}
      ,
        { q: "Quel pronom remplace correctement « à ses amis » dans la phrase « Il écrit une lettre à ses amis » ?", options: ["Le", "En", "Y", "Leur"], correct: 3, exp: "« à ses amis » est un COI (complément d'objet indirect introduit par « à », désignant des personnes) : on le remplace par le pronom « leur » → « Il leur écrit une lettre »." }
      ]
    },
    {
      id: "f20",
      title: "Le verbe : formes et emplois",
      content: `<p>Le <strong>verbe</strong> est le mot central de la phrase, qui exprime une action ou un état, et qui se conjugue selon la personne, le temps et le mode. On distingue les <strong>verbes d'action</strong> (courir, manger, écrire) des <strong>verbes d'état</strong> (être, sembler, paraître, devenir, rester), qui relient le sujet à un attribut.</p>
      <p>Selon leur construction, on distingue aussi les verbes <strong>transitifs</strong> (qui admettent un complément d'objet : « Il mange une mangue ») des verbes <strong>intransitifs</strong> (sans complément d'objet : « Il dort »), et les verbes <strong>pronominaux</strong> (construits avec un pronom réfléchi : se laver, se lever).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un même verbe peut parfois s'employer de façon transitive ou intransitive selon le contexte : « Il mange » (intransitif, sans complément) et « Il mange une mangue » (transitif, avec un complément d'objet direct). C'est le sens de la phrase qui détermine l'emploi.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'analyse : dans la phrase « Awa se lave rapidement avant de sortir. », le verbe « se laver » est un verbe pronominal (construit avec le pronom réfléchi « se », qui renvoie au sujet Awa elle-même). Dans « Awa semble fatiguée », le verbe « sembler » est un verbe d'état qui relie le sujet « Awa » à l'attribut « fatiguée », sans exprimer d'action concrète.</p>
      <h3>📌 Point du programme à ne pas manquer : l'accord du participe passé</h3><p>Une règle essentielle et souvent source d'erreurs. Avec l'auxiliaire <strong>être</strong>, le participe passé s'accorde toujours en genre et en nombre avec le <strong>sujet</strong> : « Elles sont parti<strong>es</strong>. » Avec l'auxiliaire <strong>avoir</strong>, le participe passé s'accorde avec le complément d'objet direct (COD) <strong>seulement s'il est placé avant le verbe</strong> : « J'ai mangé <strong>les mangues</strong> » (COD après, pas d'accord) mais « Les mangues que j'ai mangé<strong>es</strong> » (COD « que », mis pour « les mangues », placé avant : accord).</p>`,
      quiz: [
        {q:"Un verbe d'état relie le sujet à...", options:["un complément d'objet direct","un attribut du sujet","un complément circonstanciel","rien du tout"], correct:1, exp:"Les verbes d'état (être, sembler, devenir...) relient le sujet à un attribut du sujet."},
        {q:"Un verbe transitif est un verbe qui...", options:["n'a jamais de complément","admet un complément d'objet","est toujours pronominal","est toujours au passé"], correct:1, exp:"Un verbe transitif admet un complément d'objet (direct ou indirect)."},
        {q:"Dans « Il se lave », le verbe « se laver » est...", options:["un verbe d'état","un verbe pronominal","un verbe intransitif simple","un verbe au passif"], correct:1, exp:"« se laver » est construit avec le pronom réfléchi « se » : c'est un verbe pronominal."},
        {q:"Dans « Il dort », le verbe « dort » est utilisé de façon...", options:["transitive","intransitive (pas de complément d'objet)","pronominale","passive"], correct:1, exp:"« dormir » n'a pas de complément d'objet ici : il est employé de façon intransitive."},
        {q:"Parmi ces verbes, lequel est un verbe d'état ?", options:["Courir","Manger","Sembler","Écrire"], correct:2, exp:"« Sembler » est un verbe d'état qui relie le sujet à un attribut, contrairement aux verbes d'action listés."}
      ,
        { q: "Pourquoi écrit-on « La lettre que j'ai écrite » avec un « e » à la fin de « écrite » ?", options: ["Parce que « lettre » est un mot féminin isolé, sans rapport avec la règle", "Parce que le COD « que » (mis pour « la lettre ») est placé avant le verbe avoir", "Parce que tous les participes passés s'accordent avec avoir", "C'est une exception sans règle"], correct: 1, exp: "Avec l'auxiliaire avoir, le participe passé s'accorde avec le COD seulement si celui-ci est placé avant le verbe : ici, « que » (mis pour « la lettre », féminin) est bien placé avant « ai écrite », d'où l'accord." }
      ]
    },
    {
      id: "f21",
      title: "Étude de quelques propositions subordonnées",
      content: `<p>Une <strong>proposition subordonnée</strong> dépend d'une proposition principale et ne peut généralement pas fonctionner seule. Le programme de 4e étudie notamment plusieurs types : la <strong>subordonnée relative</strong> (introduite par qui, que, dont, où : « le livre que je lis »), la <strong>subordonnée conjonctive complétive</strong> (introduite par « que », complément du verbe : « Je pense qu'il viendra »), et des subordonnées <strong>circonstancielles</strong> (de temps, de cause, de condition...).</p>
      <p>Pour repérer une subordonnée, on cherche le mot qui l'introduit (pronom relatif, conjonction de subordination) et on délimite son début et sa fin dans la phrase.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Une même conjonction peut parfois introduire différents types de subordonnées selon le sens : « comme » peut introduire une subordonnée de cause (« Comme il pleuvait, nous sommes restés »/ = parce qu'il pleuvait) ou une subordonnée de comparaison (« Il court comme un champion »).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'analyse : « Je sais que tu as réussi ton examen. » La proposition principale est « Je sais », et la subordonnée conjonctive complétive est « que tu as réussi ton examen », complément d'objet direct du verbe « sais ». Autre exemple avec une relative : « L'élève qui travaille bien réussira. » — la subordonnée relative « qui travaille bien » complète le nom « élève » et précise de quel élève il s'agit.</p>
      <h3>📌 Point du programme à ne pas manquer : la subordonnée circonstancielle de but</h3><p>Un type précis de subordonnée circonstancielle à connaître : la subordonnée de <strong>but</strong>, qui répond à la question « dans quel but ? / pour quoi faire ? ». Elle est le plus souvent introduite par <strong>« pour que »</strong> ou « afin que », et son verbe se met toujours au <strong>subjonctif</strong> (jamais à l'indicatif). Ex : « Il parle fort <strong>pour que</strong> tout le monde l'<strong>entende</strong> (subjonctif). » Elle se distingue de la subordonnée de cause, qui répond à « pourquoi ? » et utilise l'indicatif (parce que + indicatif).</p>`,
      quiz: [
        {q:"Une proposition subordonnée...", options:["peut toujours fonctionner seule","dépend généralement d'une proposition principale","n'a jamais de verbe conjugué","est toujours au début de la phrase"], correct:1, exp:"Une subordonnée dépend syntaxiquement de la proposition principale à laquelle elle est rattachée."},
        {q:"Dans « Je pense qu'il viendra », la subordonnée « qu'il viendra » est...", options:["une subordonnée relative","une subordonnée conjonctive complétive","une proposition indépendante","un groupe nominal"], correct:1, exp:"Introduite par « que » et complément du verbe « pense », c'est une subordonnée conjonctive complétive."},
        {q:"Une subordonnée relative est généralement introduite par...", options:["un pronom relatif (qui, que, dont, où)","une préposition seule","un adverbe","rien, elle n'a pas de mot introducteur"], correct:0, exp:"La subordonnée relative est introduite par un pronom relatif comme qui, que, dont ou où."},
        {q:"Dans « L'élève qui travaille bien réussira », la subordonnée complète...", options:["le verbe « réussira »","le nom « élève »","toute la phrase","rien en particulier"], correct:1, exp:"La subordonnée relative « qui travaille bien » vient compléter et préciser le nom « élève »."},
        {q:"« Comme » peut introduire une subordonnée de...", options:["cause ou de comparaison selon le contexte","lieu uniquement","temps uniquement","aucune subordonnée"], correct:0, exp:"Selon le contexte, « comme » peut exprimer la cause ou la comparaison."}
      ,
        { q: "Dans la phrase « Elle travaille dur pour que ses parents soient fiers. », à quel mode est le verbe de la subordonnée de but ?", options: ["À l'indicatif", "Au subjonctif", "Au conditionnel", "À l'impératif"], correct: 1, exp: "Une subordonnée circonstancielle de but, introduite par « pour que »/« afin que », a toujours son verbe au subjonctif : ici « soient » (subjonctif de « être »), jamais à l'indicatif." }
      ]
    },
    {
      id: "f22",
      title: "Orthographe lexicale : formation des mots",
      content: `<p>L'<strong>orthographe lexicale</strong> concerne l'orthographe des mots eux-mêmes (par opposition à l'orthographe grammaticale, qui concerne les accords). Deux procédés courants de <strong>formation des mots</strong> permettent d'enrichir le vocabulaire : la <strong>composition</strong> et la <strong>dérivation</strong>.</p>
      <p>La <strong>composition</strong> consiste à assembler deux mots existants pour en former un nouveau : « petit » + « enfant » → « petit-enfant » ; « porte » + « monnaie » → « porte-monnaie ».</p>
      <p>La <strong>dérivation simple</strong> consiste à ajouter un <strong>préfixe</strong> (devant le mot : « in » + « capable » → « incapable ») ou un <strong>suffixe</strong> (après le mot : « joue » + « able » → « jouable ») à un mot de base (appelé radical), pour créer un nouveau mot dérivé.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Bien reconnaître le radical d'un mot aide à en deviner le sens même si le mot dérivé est inconnu : « impossible » = préfixe « im » (négation) + radical « possible ». Cette technique est très utile pour enrichir son vocabulaire par déduction.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : le mot « démobilisation » se décompose ainsi : préfixe « dé » (indique l'inverse), radical « mobil » (qui bouge), suffixe « isation » (qui indique une action/un processus) — le mot signifie donc « l'action de rendre à nouveau immobile, de retirer d'un état de mobilisation ». Le mot composé « boîte à musique » assemble trois mots existants (boîte, à, musique) pour désigner un objet précis, différent de la simple somme de ses parties.</p>
      <h3>📌 Point du programme à ne pas manquer : familles de préfixes et suffixes</h3><p>Reconnaître certains préfixes et suffixes courants aide à deviner le sens d'un mot inconnu. Préfixes marquant la <strong>négation/l'opposé</strong> : in-/im-/il-/ir- (incapable, impossible, illisible, irrégulier), dé-/dés- (défaire, désobéir), mal- (malhonnête). Suffixes formant un <strong>métier</strong> : -eur/-euse (chanteur), -ien/-ienne (musicien), -iste (dentiste). Suffixes formant une <strong>qualité/un état</strong> : -té (beauté), -esse (tristesse), -isme (héroïsme). Repérer le radical (le mot de base) et les affixes (préfixes/suffixes) permet de comprendre — et de bien orthographier — de nombreux mots d'une même famille.</p>`,
      quiz: [
        {q:"La composition consiste à...", options:["ajouter un préfixe","ajouter un suffixe","assembler deux mots existants","supprimer une lettre"], correct:2, exp:"La composition assemble deux (ou plusieurs) mots existants pour en former un nouveau."},
        {q:"Dans « incapable », « in » est...", options:["un suffixe","un préfixe","un radical","un mot composé"], correct:1, exp:"« in » est placé devant le radical « capable » : c'est un préfixe."},
        {q:"Dans « jouable », « able » est...", options:["un préfixe","un suffixe","un mot composé","un radical"], correct:1, exp:"« able » est ajouté après le radical « jou » : c'est un suffixe."},
        {q:"« Porte-monnaie » est formé par...", options:["dérivation","composition","aucun procédé particulier","suffixation uniquement"], correct:1, exp:"« porte-monnaie » assemble deux mots existants (porte, monnaie) : c'est de la composition."},
        {q:"Le radical d'un mot est...", options:["son préfixe","son suffixe","la partie de base porteuse du sens principal","toujours la première lettre"], correct:2, exp:"Le radical est la partie centrale du mot qui porte le sens principal, à laquelle on ajoute préfixes et/ou suffixes."}
      ,
        { q: "Quel préfixe, parmi les suivants, marque la négation ou l'opposé dans un mot comme « désobéir » ?", options: ["dé-/dés-", "-eur", "-té", "-iste"], correct: 0, exp: "Le préfixe dé-/dés- marque souvent la négation ou l'action inverse (obéir → désobéir, faire → défaire), contrairement à -eur, -té ou -iste, qui sont des suffixes formant respectivement un métier/agent, une qualité, ou un métier/spécialité." }
      ]
    },
    {
      id: "f23",
      title: "Orthographe grammaticale : accord du verbe avec « beaucoup, assez, peu »",
      content: `<p>L'<strong>orthographe grammaticale</strong> concerne les règles d'accord entre les mots. Un cas particulier étudié en 4e est l'accord du verbe quand le sujet contient des expressions de quantité comme « beaucoup de », « assez de », « peu de », « la plupart de », « trop de ».</p>
      <p><strong>Règle :</strong> avec ces expressions, le verbe s'accorde généralement avec le <strong>nom complément</strong> qui suit (au pluriel si ce nom est au pluriel) : « Beaucoup d'élèves sont venus » (le verbe s'accorde avec « élèves », pluriel), et non avec « beaucoup ».</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Si le nom complément est au singulier (indénombrable), le verbe reste au singulier : « Beaucoup de courage est nécessaire pour réussir » (le verbe s'accorde avec « courage », singulier, et non avec « beaucoup »).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple complet : « Peu d'élèves ont réussi l'examen cette année. » — ici, « peu » est suivi du nom pluriel « élèves », donc le verbe « ont réussi » s'accorde au pluriel. Comparons avec : « Peu de patience suffit pour apprendre cette leçon. » — ici, « peu » est suivi du nom singulier « patience », donc le verbe « suffit » reste au singulier. La règle est donc de toujours regarder le nom qui suit l'expression de quantité pour déterminer l'accord du verbe.</p>
      <h3>📌 Point du programme à ne pas manquer : le cas particulier de « la plupart »</h3><p>Attention à une exception : avec l'expression <strong>« la plupart de »</strong>, le verbe s'accorde <strong>toujours au pluriel</strong>, même si l'on pourrait hésiter : « La plupart des élèves <strong>ont</strong> réussi » — jamais « a réussi ». Autre point à retenir : quand « peu » ou « beaucoup » est employé <strong>seul</strong>, sans nom complément après (comme sujet à lui seul), le verbe s'accorde avec lui normalement (au singulier, car « peu »/« beaucoup » sont alors considérés comme neutres) : « Peu <strong>importe</strong> le résultat. »</p>`,
      quiz: [
        {q:"Dans « Beaucoup d'élèves sont venus », le verbe s'accorde avec...", options:["« beaucoup »","« élèves » (le nom complément, pluriel)","le sujet implicite « il »","aucun accord particulier n'est nécessaire"], correct:1, exp:"Le verbe s'accorde avec le nom complément « élèves », qui est au pluriel."},
        {q:"Complète correctement : « Assez de patience ___ nécessaire. »", options:["sont","est","seront","étaient"], correct:1, exp:"« patience » est singulier, donc le verbe reste au singulier : « est nécessaire »."},
        {q:"Complète correctement : « La plupart des élèves ___ leur travail. »", options:["a fini","ont fini","a finis","ont finis"], correct:1, exp:"« élèves » est pluriel, donc le verbe s'accorde au pluriel : « ont fini »."},
        {q:"Avec les expressions de quantité comme « beaucoup de », l'accord du verbe se fait avec...", options:["toujours le singulier","le nom complément qui suit l'expression","toujours le pluriel","le sujet de la phrase précédente"], correct:1, exp:"C'est le nom complément (singulier ou pluriel) qui détermine l'accord du verbe."},
        {q:"Complète : « Trop de bruit ___ les élèves. »", options:["dérangent","dérange","dérangeaient","ont dérangé"], correct:1, exp:"« bruit » est singulier, donc le verbe s'accorde au singulier : « dérange »."}
      ,
        { q: "Comment accorde-t-on le verbe dans « La plupart des invités ... déjà arrivés » ?", options: ["est déjà arrivé", "sont déjà arrivés", "a déjà arrivé", "Les deux sont possibles"], correct: 1, exp: "Avec « la plupart de », le verbe s'accorde toujours au pluriel avec le nom complément qui suit : « La plupart des invités sont déjà arrivés »." }
      ]
    },
    {
      id: "f24",
      title: "Le débat",
      content: `<p>Le <strong>débat</strong> est un exercice d'expression orale où plusieurs personnes échangent des <strong>arguments</strong> contradictoires sur un sujet donné, dans le but de convaincre ou de confronter des points de vue différents, dans le respect mutuel.</p>
      <p>Pour bien participer à un débat, il faut : préparer ses arguments à l'avance (avec des exemples concrets pour les illustrer), écouter attentivement les arguments des autres participants (pour pouvoir y répondre précisément), et s'exprimer avec un langage courtois même en cas de désaccord.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un débat réussi utilise des formules pour nuancer son propos et respecter l'avis adverse tout en défendant le sien : « Je comprends votre point de vue, cependant… », « Certes, mais… », « Je suis d'accord sur ce point, toutefois… ». Cette technique de concession renforce la crédibilité de l'argumentation.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de structure d'intervention dans un débat sur le thème « Les réseaux sociaux sont-ils bénéfiques pour les jeunes ? » : « Je pense que les réseaux sociaux présentent un risque pour les jeunes (thèse), car ils peuvent réduire le temps consacré aux études (argument), comme le montre une étude sur la baisse des résultats scolaires liée à un usage excessif (exemple). Certes, ils permettent aussi de rester en contact avec ses amis (concession), mais cet avantage ne compense pas, selon moi, les risques évoqués (conclusion personnelle). »</p>
      <h3>📌 Point du programme à ne pas manquer : le rôle du modérateur</h3><p>Un débat bien organisé nécessite souvent un <strong>modérateur (ou animateur)</strong>, dont le rôle est essentiel : distribuer équitablement le temps de parole entre les participants, veiller au respect des règles (ne pas couper la parole, rester courtois), recentrer la discussion si elle s'éloigne du sujet, et reformuler ou synthétiser les points de vue exprimés pour que tout le monde suive clairement les échanges. Un débat sans modérateur risque de tourner à la confusion ou à l'affrontement, chacun cherchant à parler plus fort que l'autre plutôt qu'à argumenter.</p>`,
      quiz: [
        {q:"Le débat est un exercice de...", options:["expression écrite","expression orale","lecture silencieuse","dictée"], correct:1, exp:"Le débat est un exercice d'expression orale, basé sur l'échange d'arguments."},
        {q:"Que faut-il faire avant de participer à un débat ?", options:["Rien de particulier","Préparer ses arguments avec des exemples concrets","Éviter d'écouter les autres","Improviser sans réfléchir"], correct:1, exp:"Une bonne préparation, avec des arguments et exemples, est essentielle pour bien participer à un débat."},
        {q:"La formule « Certes... mais... » permet de...", options:["ignorer l'avis adverse","reconnaître un point de l'adversaire avant de le contrer (concession)","conclure le débat","poser une question"], correct:1, exp:"C'est une technique de concession, qui reconnaît un point valable de l'autre avant d'apporter une nuance ou une objection."},
        {q:"Dans un débat, il est important de...", options:["couper la parole systématiquement","écouter attentivement les arguments des autres","ne jamais changer d'avis","parler le plus fort possible"], correct:1, exp:"Écouter les arguments adverses permet d'y répondre de façon précise et pertinente."},
        {q:"Le ton à adopter dans un débat, même en cas de désaccord, doit être...", options:["agressif","courtois et respectueux","silencieux","moqueur"], correct:1, exp:"Le respect mutuel et la courtoisie sont essentiels, même face à des points de vue opposés."}
      ,
        { q: "Quel est le rôle principal du modérateur (animateur) dans un débat ?", options: ["Donner son avis personnel sur le sujet en premier", "Distribuer le temps de parole et veiller au respect des règles", "Décider seul qui a raison", "Empêcher les participants de parler"], correct: 1, exp: "Le modérateur organise les échanges : il distribue équitablement le temps de parole, veille au respect des règles (courtoisie, tours de parole) et recentre la discussion si besoin, sans donner son propre avis sur le fond du débat." }
      ]
    },
    {
      id: "f25",
      title: "L'exposé oral",
      content: `<p>L'<strong>exposé oral</strong> est une présentation structurée d'un sujet devant un public (la classe), préparée à l'avance, qui vise à informer et expliquer plutôt qu'à débattre.</p>
      <p>Un bon exposé se structure en trois parties : une <strong>introduction</strong> (qui présente le sujet et annonce le plan), un <strong>développement</strong> (organisé en plusieurs parties claires, avec des exemples), et une <strong>conclusion</strong> (qui résume l'essentiel et peut ouvrir sur une question ou une perspective).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour un exposé réussi, il est conseillé de préparer des fiches avec des mots-clés plutôt que de lire un texte rédigé en entier : cela permet de garder un contact visuel avec le public, de parler avec un débit naturel, et de mieux capter l'attention des auditeurs.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de plan d'exposé sur le thème « Les grands empires africains précoloniaux » : Introduction (présenter le sujet : l'existence de puissants empires en Afrique de l'Ouest avant la colonisation, annoncer le plan). Développement, partie 1 (l'Empire du Ghana : origines, richesse liée au commerce de l'or et du sel), partie 2 (l'Empire du Mali : apogée sous Kankou Moussa), partie 3 (l'Empire Songhaï : déclin). Conclusion (résumer l'héritage culturel et historique de ces empires, et ouvrir sur leur influence encore visible aujourd'hui).</p>
      <h3>📌 Point du programme à ne pas manquer : supports visuels et gestion du temps</h3><p>Deux éléments techniques renforcent un exposé oral réussi. Les <strong>supports visuels</strong> (images, schémas, cartes, mots-clés projetés) aident le public à suivre et à mémoriser les idées essentielles — à condition de rester simples et lisibles, sans surcharger l'écran de texte. La <strong>gestion du temps imparti</strong> est également cruciale : un bon exposé respecte la durée fixée à l'avance (ni trop court, ce qui suggère un manque de préparation, ni trop long, ce qui fatigue l'auditoire) ; s'entraîner à l'oral avant la présentation permet de vérifier et d'ajuster ce minutage.</p>`,
      quiz: [
        {q:"L'exposé oral vise principalement à...", options:["débattre et convaincre","informer et expliquer un sujet","raconter une histoire imaginaire","chanter"], correct:1, exp:"Contrairement au débat, l'exposé vise à informer et expliquer un sujet, sans chercher la confrontation d'opinions."},
        {q:"Un exposé oral bien structuré comprend...", options:["uniquement une introduction","introduction, développement, conclusion","uniquement des exemples","uniquement une conclusion"], correct:1, exp:"Un exposé suit la structure classique : introduction, développement (en plusieurs parties), conclusion."},
        {q:"Pourquoi préparer des fiches avec des mots-clés plutôt qu'un texte entier ?", options:["C'est plus rapide à écrire","Cela permet de garder un contact visuel avec le public et un débit naturel","Ce n'est pas recommandé","Cela n'a aucune importance"], correct:1, exp:"Des fiches avec mots-clés évitent la lecture monotone et permettent un meilleur contact avec le public."},
        {q:"La conclusion d'un exposé oral sert à...", options:["poser de nouvelles questions sans lien avec le sujet","résumer l'essentiel et éventuellement ouvrir une perspective","répéter l'introduction mot pour mot","annoncer le plan"], correct:1, exp:"La conclusion résume les points essentiels abordés et peut ouvrir sur une question ou perspective plus large."},
        {q:"Quelle est la différence principale entre un débat et un exposé ?", options:["Il n'y a aucune différence","Le débat confronte des opinions, l'exposé informe sur un sujet","L'exposé est toujours écrit","Le débat ne se fait jamais à l'oral"], correct:1, exp:"Le débat oppose des points de vue contradictoires, tandis que l'exposé présente et explique un sujet de façon informative."}
      ,
        { q: "Pourquoi faut-il éviter de surcharger un support visuel (diapositive) de texte pendant un exposé oral ?", options: ["Parce que cela coûte plus cher à imprimer", "Parce que cela distrait le public et nuit à la clarté du message", "Parce que c'est interdit par le règlement scolaire", "Parce que le support visuel n'a aucune utilité"], correct: 1, exp: "Un support visuel surchargé de texte détourne l'attention du public de l'orateur et rend le message moins clair : les supports visuels doivent rester simples, avec des mots-clés ou des images, pour appuyer le discours sans le remplacer." }
      ]
    },
  ]
},

anglais: {
  name: "Anglais",
  color: "#5CA9E8",
  icon: "🇬🇧",
  lessons: [
    {
      id: "a1",
      title: "Present Simple vs Present Continuous",
      content: `<p>Le <strong>Present Simple</strong> décrit des habitudes, des vérités générales ou des faits répétés. Ex : She plays football every Saturday. On ajoute -s/-es à la 3ème personne du singulier.</p>
      <p>Le <strong>Present Continuous</strong> (be + verbe-ing) décrit une action en train de se passer maintenant, ou une action temporaire. Ex : She is playing football right now.</p>
      <p><strong>Mots-clés du Present Simple :</strong> always, usually, often, every day, never.<br>
      <strong>Mots-clés du Present Continuous :</strong> now, right now, at the moment, look!, listen!</p>
      <p>Attention : certains verbes (comme like, know, want, believe) ne s'utilisent presque jamais au continuous, car ils expriment un état et non une action.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de transformation : « She usually plays tennis. » (habitude, present simple) devient « She is playing tennis right now. » (action en cours, present continuous) — seul le contexte (now / usually) change, pas le sport. Liste utile de verbes d'état à ne jamais mettre au continuous : like, love, hate, want, need, know, believe, understand, own, belong. Exercice mental : « I ___ (not/understand) this exercise right now » → « I don't understand this exercise right now » (present simple, car « understand » est un verbe d'état, même si « right now » suggère le continuous).</p>
      <h3>📌 Point du programme à ne pas manquer : formes négative et interrogative</h3><p>Au Present Simple, la forme négative se construit avec <strong>don't/doesn't</strong> + base verbale : « She <strong>doesn't play</strong> football on Sundays. » (pas de -s après « doesn't », car il porte déjà la marque de la 3e personne). La forme interrogative utilise <strong>Do/Does</strong> + sujet + base verbale : « <strong>Does</strong> she <strong>play</strong> football? ». Au Present Continuous, la négation ajoute simplement « not » après « be » : « She <strong>isn't playing</strong> right now. », et la question inverse le sujet et « be » : « <strong>Is</strong> she <strong>playing</strong> right now? ».</p>`,
      quiz: [
        {q:"Choisir la bonne forme : She ___ to school every day.", options:["is going","go","goes","going"], correct:2, exp:"À la 3ème personne du singulier au Present Simple, on ajoute -es : she goes."},
        {q:"Choisir la bonne forme : Look! They ___ football now.", options:["play","plays","are playing","played"], correct:2, exp:"« Now » indique une action en cours, donc Present Continuous : are playing."},
        {q:"Quel mot indique le Present Simple ?", options:["now","usually","at the moment","right now"], correct:1, exp:"« Usually » est un indicateur d'habitude, typique du Present Simple."},
        {q:"« I am knowing the answer » est incorrect car :", options:["know est un verbe d'état","il manque un mot","le sujet est faux","la phrase est au passé"], correct:0, exp:"Les verbes d'état comme « know » ne s'utilisent normalement pas à la forme continue."},
        {q:"La structure du Present Continuous est :", options:["sujet + verbe + s","sujet + be + verbe-ing","sujet + have + verbe","sujet + did + verbe"], correct:1, exp:"Le Present Continuous se forme avec be (am/is/are) + verbe-ing."}
      ,
        { q: "Choisir la bonne forme négative : He ___ football every day.", options: ["doesn't plays", "doesn't play", "don't play", "isn't play"], correct: 1, exp: "À la forme négative du Present Simple, on utilise « doesn't » + base verbale (sans -s) : « He doesn't play ». Le -s de la 3e personne est déjà porté par « doesn't »." }
      ]
    },
    {
      id: "a2",
      title: "Past Simple",
      content: `<p>Le <strong>Past Simple</strong> décrit une action terminée dans le passé, à un moment précis.</p>
      <p><strong>Verbes réguliers</strong> : on ajoute -ed à l'infinitif. Ex : play → played, watch → watched.</p>
      <p><strong>Verbes irréguliers</strong> : ils ont une forme spécifique à apprendre par cœur. Ex : go → went, eat → ate, see → saw, have → had.</p>
      <p><strong>Forme négative</strong> : sujet + did not (didn't) + base verbale. Ex : She didn't go to school.</p>
      <p><strong>Forme interrogative</strong> : Did + sujet + base verbale ? Ex : Did she go to school?</p>
      <p>Mots-clés fréquents : yesterday, last week, last year, ago, in 2020.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Quelques verbes irréguliers très fréquents à mémoriser en priorité : be → was/were, do → did, make → made, come → came, take → took, give → gave, write → wrote, say → said. Exemple de paragraphe complet au passé : « Yesterday, I woke up early, had breakfast, went to school and met my friends. We played football after class and then I did my homework. » Remarque importante : à la forme négative et interrogative, le verbe revient toujours à sa base (« did you go », pas « did you went »), car l'auxiliaire « did » porte déjà la marque du passé.</p>
      <h3>📌 Point du programme à ne pas manquer : used to pour les habitudes passées</h3><p>Pour parler d'une <strong>habitude</strong> ou d'un <strong>état</strong> passé qui n'existe plus aujourd'hui, on utilise <strong>used to</strong> + base verbale (et non le Past Simple seul). Ex : « I <strong>used to play</strong> football every weekend when I was a child. » (je le faisais régulièrement avant, mais plus maintenant). Forme négative : didn't use to (sans -d) : « She <strong>didn't use to</strong> like vegetables. » Forme interrogative : Did + sujet + use to : « <strong>Did</strong> you <strong>use to</strong> live in Bouaké? »</p>`,
      quiz: [
        {q:"La forme correcte de « go » au passé est :", options:["goed","gone","went","going"], correct:2, exp:"« Go » est un verbe irrégulier : sa forme au passé simple est « went »."},
        {q:"Forme négative correcte : She ___ go to the party.", options:["don't","doesn't","didn't","not"], correct:2, exp:"Au Past Simple, la négation se construit avec « didn't » + base verbale."},
        {q:"Quelle phrase est interrogative correcte ?", options:["Did you went there?","Did you go there?","You did go there?","Do you went there?"], correct:1, exp:"La structure correcte est : Did + sujet + base verbale (sans -ed ni forme conjuguée)."},
        {q:"« Play » au passé simple devient :", options:["played","plaied","playd","plays"], correct:0, exp:"« Play » est régulier : on ajoute -ed → played."},
        {q:"Quel mot indique le Past Simple ?", options:["now","every day","yesterday","always"], correct:2, exp:"« Yesterday » indique un moment précis dans le passé."}
      ,
        { q: "Quelle phrase exprime correctement une habitude passée qui n'existe plus aujourd'hui ?", options: ["I play football when I was young.", "I used to play football when I was young.", "I am playing football when I was young.", "I have played football when I was young."], correct: 1, exp: "« used to + base verbale » exprime précisément une habitude ou un état passé révolu : « I used to play football when I was young » (je jouais avant, mais plus maintenant)." }
      ]
    },
    {
      id: "a3",
      title: "Comparatives and Superlatives",
      content: `<p>Le <strong>comparatif</strong> compare deux éléments. Pour les adjectifs courts (1 syllabe), on ajoute -er : tall → taller. Pour les adjectifs longs, on utilise more + adjectif : beautiful → more beautiful. On utilise « than » après le comparatif.</p>
      <p>Le <strong>superlatif</strong> compare un élément à un groupe entier. Adjectifs courts : the + adjectif + est : the tallest. Adjectifs longs : the most + adjectif : the most beautiful.</p>
      <p><strong>Formes irrégulières</strong> à connaître : good → better → the best ; bad → worse → the worst.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Règles d'orthographe à connaître pour les adjectifs courts : si l'adjectif se termine par une voyelle + une consonne, on double la consonne avant -er/-est (big → bigger → the biggest) ; si l'adjectif se termine par -y précédé d'une consonne, le y devient i (happy → happier → the happiest). Exemple complet : « This exercise is more difficult than the last one, but it is not the most difficult exercise of the book. » Pour exprimer une égalité, on utilise « as...as » : « My sister is as tall as me. »</p>
      <h3>📌 Point du programme à ne pas manquer : less/least et le double comparatif</h3><p>À l'opposé de « more »/« most », on utilise <strong>less</strong> (moins) et <strong>the least</strong> (le moins) pour comparer dans l'autre sens : « This book is <strong>less interesting</strong> than the other one. » / « This is <strong>the least expensive</strong> option. » Autre structure utile, le <strong>double comparatif</strong>, qui exprime une évolution progressive et parallèle : « <strong>the</strong> + comparatif..., <strong>the</strong> + comparatif... ». Ex : « <strong>The more</strong> you practice, <strong>the better</strong> you get. » (plus tu t'entraînes, mieux tu deviens).</p>`,
      quiz: [
        {q:"« He is ___ than his brother » (tall) devient :", options:["more tall","taller","tallest","most tall"], correct:1, exp:"Adjectif court d'une syllabe : on ajoute -er → taller."},
        {q:"Le superlatif de « beautiful » est :", options:["beautifulest","the most beautiful","more beautiful","the beautifullest"], correct:1, exp:"Adjectif long : on utilise « the most » + adjectif."},
        {q:"La forme comparative de « good » est :", options:["gooder","more good","better","the best"], correct:2, exp:"« Good » est irrégulier : son comparatif est « better »."},
        {q:"Quel mot accompagne souvent le comparatif ?", options:["the","than","most","very"], correct:1, exp:"« Than » sert à introduire le second élément de la comparaison."},
        {q:"Le superlatif de « bad » est :", options:["the baddest","the worst","worse","more bad"], correct:1, exp:"« Bad » est irrégulier : son superlatif est « the worst »."}
      ,
        { q: "Comment traduire « Plus tu lis, plus tu apprends. » en utilisant un double comparatif ?", options: ["You read more, you learn more.", "The more you read, the more you learn.", "You are reading more than learning.", "The most you read, the most you learn."], correct: 1, exp: "Le double comparatif se construit avec « the + comparatif..., the + comparatif... » : « The more you read, the more you learn. »" }
      ]
    },
    {
      id: "a4",
      title: "Modal Verbs: can, must, should",
      content: `<p>Les <strong>modaux</strong> sont des verbes auxiliaires qui expriment une capacité, une obligation ou un conseil. Ils sont toujours suivis de la base verbale, sans « to », et ne changent pas selon la personne.</p>
      <p><strong>Can</strong> exprime la capacité ou la permission : I can swim. Can I go out?</p>
      <p><strong>Must</strong> exprime une obligation forte : You must wear a seatbelt.</p>
      <p><strong>Should</strong> exprime un conseil, une recommandation : You should study more.</p>
      <p><strong>Formes négatives</strong> : can't (cannot), mustn't, shouldn't.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>D'autres modaux utiles à connaître : « may/might » pour exprimer une possibilité (It may rain this afternoon), et « have to » qui exprime aussi une obligation, mais souvent imposée de l'extérieur (par une règle, une personne), contrairement à « must » qui exprime plutôt une obligation que l'on ressent soi-même. Exemple de nuance : « I must finish this today » (je le décide moi-même) vs « I have to wear a uniform at school » (c'est une règle de l'école). Attention : « mustn't » exprime une interdiction (You mustn't smoke here), alors que « don't have to » exprime simplement une absence d'obligation (You don't have to come if you're tired).</p>
      <h3>📌 Point du programme à ne pas manquer : could</h3><p>Un autre modal essentiel : <strong>could</strong>. Il exprime la <strong>capacité dans le passé</strong> (l'équivalent passé de « can ») : « When I was young, I <strong>could run</strong> very fast. » Il sert aussi à faire une <strong>demande polie</strong> (plus poli que « can ») : « <strong>Could</strong> you help me, please? » Et il exprime une <strong>possibilité</strong> (moins certaine que « may/might ») : « It <strong>could rain</strong> later. »</p>`,
      quiz: [
        {q:"« You ___ study for the exam » (conseil) :", options:["can","must","should","could"], correct:2, exp:"« Should » exprime un conseil, une recommandation."},
        {q:"« I ___ swim very well » (capacité) :", options:["must","can","should","shall"], correct:1, exp:"« Can » exprime la capacité à faire quelque chose."},
        {q:"« You ___ wear a seatbelt » (obligation forte) :", options:["can","should","must","could"], correct:2, exp:"« Must » exprime une obligation forte, une règle stricte."},
        {q:"Quelle est la forme négative correcte de « must » ?", options:["not must","mustn't","don't must","musn't not"], correct:1, exp:"La forme négative de « must » est « mustn't »."},
        {q:"Après un modal, le verbe est :", options:["conjugué avec -s","à la base verbale","au participe passé","précédé de « to »"], correct:1, exp:"Les modaux sont toujours suivis de la base verbale, sans « to » ni conjugaison."}
      ,
        { q: "Quelle phrase exprime une capacité PASSÉE, révolue aujourd'hui ?", options: ["I can swim very well.", "I could swim very well when I was young, but not anymore.", "I must swim every day.", "I should swim more often."], correct: 1, exp: "« could » est l'équivalent passé de « can » : il exprime une capacité que l'on avait dans le passé, ici clairement révolue (« but not anymore »)." }
      ]
    },
    {
      id: "a5",
      title: "Prepositions of Time and Place",
      content: `<p>Les <strong>prépositions de temps</strong> les plus courantes : <strong>in</strong> (mois, année, saison : in July, in 2024), <strong>on</strong> (jour, date : on Monday, on July 3rd), <strong>at</strong> (heure précise : at 6 o'clock, at night).</p>
      <p>Les <strong>prépositions de lieu</strong> : <strong>in</strong> (à l'intérieur d'un espace : in the classroom), <strong>on</strong> (sur une surface : on the table), <strong>at</strong> (à un endroit précis : at the door, at school).</p>
      <p>Astuce : penser à la taille de l'espace évoqué (grand = in, surface = on, point précis = at) aide à choisir la bonne préposition.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>D'autres prépositions utiles : « by » (avant une limite : by 6 pm), « during » (pendant toute une période : during the holidays), « for » (une durée : for two hours) et « since » (un point de départ : since Monday). Pour le mouvement, on utilise « to » (aller vers : go to school), « from » (venir de : come from Abidjan) et « into » (entrer dans : go into the classroom). Exemple complet : « I arrived at school at 7 am, and I stayed there until 4 pm, since I had extra classes during the afternoon. »</p>
      <h3>📌 Point du programme à ne pas manquer : autres prépositions de lieu utiles</h3><p>D'autres prépositions de lieu très fréquentes : <strong>between</strong> (entre deux éléments : the book is between the two pens), <strong>among</strong> (parmi plusieurs éléments : she is among the best students), <strong>next to</strong> / <strong>beside</strong> (à côté de), <strong>in front of</strong> (devant), <strong>behind</strong> (derrière), <strong>above</strong> (au-dessus de, sans contact), <strong>under/below</strong> (en dessous de). Ex : « The school is <strong>between</strong> the market and the church, right <strong>in front of</strong> the mosque. »</p>`,
      quiz: [
        {q:"« I was born ___ 2010 »", options:["in","on","at","by"], correct:0, exp:"On utilise « in » pour une année."},
        {q:"« The meeting is ___ Monday »", options:["in","on","at","for"], correct:1, exp:"On utilise « on » pour un jour précis."},
        {q:"« She wakes up ___ 6 o'clock »", options:["in","on","at","from"], correct:2, exp:"On utilise « at » pour une heure précise."},
        {q:"« The book is ___ the table »", options:["in","on","at","into"], correct:1, exp:"« On » s'utilise pour indiquer une position sur une surface."},
        {q:"« They live ___ Abidjan »", options:["at","on","in","by"], correct:2, exp:"« In » s'utilise pour une ville ou un espace large."}
      ,
        { q: "Quelle préposition utiliser pour dire qu'un élève est « parmi les meilleurs de sa classe » ?", options: ["between", "among", "under", "behind"], correct: 1, exp: "« among » s'utilise pour « parmi » un groupe de plus de deux éléments (« among the best students »), alors que « between » s'utilise seulement pour deux éléments précis." }
      ]
    },
    {
      id: "a6",
      title: "Vocabulary: Daily Routine & Family",
      content: `<p>Le vocabulaire de la <strong>routine quotidienne</strong> inclut des expressions comme : wake up (se réveiller), get up (se lever), have breakfast (prendre le petit-déjeuner), go to school/work, do homework, go to bed (se coucher).</p>
      <p>Le vocabulaire de la <strong>famille</strong> inclut : parents, mother/father, brother/sister, grandmother/grandfather, uncle/aunt, cousin, son/daughter.</p>
      <p>Ces expressions s'utilisent souvent avec le Present Simple pour décrire des habitudes : « I usually wake up at 6 am and have breakfast with my family. »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Vocabulaire complémentaire des tâches ménagères, souvent utilisé avec la routine quotidienne : do the dishes (faire la vaisselle), clean the house (nettoyer la maison), take out the trash (sortir les poubelles), help with the cooking (aider à cuisiner). Exemple de paragraphe combinant famille et routine : « Every morning, my mother wakes up first and prepares breakfast for the whole family. My father usually takes my younger brother to school before going to work, while my grandmother stays at home with my little sister. »</p>
      <h3>📌 Point du programme à ne pas manquer : les moments de la journée</h3><p>Pour préciser à quel moment de la journée se déroule une habitude, on utilise : <strong>in the morning</strong> (le matin), <strong>in the afternoon</strong> (l'après-midi), <strong>in the evening</strong> (le soir), mais <strong>at night</strong> (la nuit — avec « at », pas « in »). Ex : « I do my homework <strong>in the evening</strong> and I go to bed <strong>at night</strong>. » Vocabulaire de la famille élargie, utile en complément : nephew/niece (neveu/nièce), stepmother/stepfather (belle-mère/beau-père), parents-in-law (beaux-parents).</p>`,
      quiz: [
        {q:"« Se réveiller » se traduit par :", options:["get up","wake up","go to bed","have breakfast"], correct:1, exp:"« Wake up » signifie « se réveiller »."},
        {q:"« Le frère de mon père » est :", options:["my cousin","my uncle","my grandfather","my nephew"], correct:1, exp:"Le frère du père s'appelle « uncle » (oncle) en anglais."},
        {q:"« Do homework » signifie :", options:["faire ses devoirs","faire la cuisine","aller à l'école","se coucher"], correct:0, exp:"« Do homework » signifie « faire ses devoirs »."},
        {q:"« Grandmother » signifie :", options:["tante","grand-mère","cousine","sœur"], correct:1, exp:"« Grandmother » signifie « grand-mère »."},
        {q:"« Go to bed » signifie :", options:["se réveiller","se coucher","prendre le petit-déjeuner","aller à l'école"], correct:1, exp:"« Go to bed » signifie « se coucher »."}
      ,
        { q: "Quelle préposition manque dans « I always study ___ night » ?", options: ["in", "on", "at", "during"], correct: 2, exp: "Contrairement aux autres moments de la journée (in the morning/afternoon/evening), « night » s'utilise avec « at » : « at night »." }
      ]
    },
    {
      id: "a7",
      title: "Future: will vs going to",
      content: `<p>Il existe deux façons courantes d'exprimer le futur en anglais.</p>
      <p><strong>Will</strong> + base verbale exprime une décision spontanée, une prédiction ou une promesse. Ex : I think it will rain tomorrow. / I'll help you.</p>
      <p><strong>Be going to</strong> + base verbale exprime une intention déjà prévue ou une prédiction basée sur des signes visibles. Ex : I am going to visit my grandmother next week. / Look at those clouds, it's going to rain.</p>
      <p><strong>Forme négative</strong> : won't (will not) ; am/is/are not going to. <strong>Forme interrogative</strong> : Will + sujet + verbe ? ; Am/Is/Are + sujet + going to + verbe ?</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Il existe une troisième façon d'exprimer le futur, très utilisée à l'oral : le present continuous pour un projet déjà organisé, avec une heure ou une date précise. Ex : « I am meeting my friends at 5 pm tomorrow. » (rendez-vous déjà fixé). Comparaison des trois futurs sur un même exemple : « It will probably rain » (prédiction, opinion) / « Look at those dark clouds, it's going to rain » (prédiction basée sur un signe visible) / « I am flying to Paris next Monday » (projet déjà organisé, billet déjà acheté).</p>
      <h3>📌 Point du programme à ne pas manquer : le future continuous</h3><p>Une quatrième façon d'exprimer le futur, moins courante mais utile : le <strong>future continuous</strong> (will be + verbe-ing), qui décrit une action <strong>en train de se dérouler</strong> à un moment précis du futur. Ex : « This time tomorrow, I <strong>will be flying</strong> to Paris. » (à ce moment précis demain, l'action sera en cours). On le distingue du simple « will + base verbale », qui annonce juste un fait futur sans insister sur son déroulement à un instant donné.</p>`,
      quiz: [
        {q:"« I think it ___ rain tomorrow » (prédiction spontanée) :", options:["is going to","will","are","was"], correct:1, exp:"« Will » convient pour une prédiction ou une opinion spontanée introduite par « I think »."},
        {q:"« Look at those clouds! It ___ rain » (signe visible) :", options:["will","is going to","was","would"], correct:1, exp:"« Going to » s'utilise quand un signe visible annonce l'événement futur."},
        {q:"La forme négative de « will » est :", options:["willn't","won't","will not go","don't will"], correct:1, exp:"La contraction négative de « will not » est « won't »."},
        {q:"« I ___ help you with your homework » (décision spontanée, à l'instant) :", options:["am going to","will","was","did"], correct:1, exp:"Une décision prise à l'instant (offre spontanée) s'exprime avec « will »."},
        {q:"« She ___ visit her cousin next month » (projet déjà prévu) :", options:["will","is going to","would","was going to"], correct:1, exp:"Un projet déjà planifié se dit avec « be going to »."}
      ,
        { q: "Quelle phrase utilise correctement le future continuous pour décrire une action en cours à un moment précis du futur ?", options: ["I will study tomorrow.", "This time tomorrow, I will be studying for my exam.", "I am going to study tomorrow.", "I studied yesterday."], correct: 1, exp: "Le future continuous (will be + verbe-ing) insiste sur le déroulement d'une action à un instant précis du futur : « This time tomorrow, I will be studying » (à ce moment-là précisément, l'action sera en cours)." }
      ]
    },
    {
      id: "a8",
      title: "Present Perfect",
      content: `<p>Le <strong>Present Perfect</strong> (have/has + participe passé) relie le passé au présent : il décrit une action passée dont le résultat ou l'importance se ressent maintenant, ou une expérience de vie, sans préciser quand exactement elle a eu lieu.</p>
      <p>Ex : I have visited Paris. (expérience, sans date précise) / She has lost her keys. (conséquence visible maintenant : elle ne peut pas rentrer).</p>
      <p><strong>Mots-clés</strong> : already, just, yet, never, ever, since, for.</p>
      <p><strong>Différence avec le Past Simple</strong> : le Past Simple précise un moment du passé terminé (yesterday, last year), tandis que le Present Perfect ne précise pas de moment exact et garde un lien avec le présent.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Il existe aussi le present perfect continuous (have/has been + verbe-ing), qui insiste sur la durée d'une action commencée dans le passé et qui continue encore maintenant : « I have been studying English for three years. » Différence entre « for » et « since » : « for » s'utilise avec une durée (for two years, for a long time), tandis que « since » s'utilise avec un point de départ précis (since 2022, since Monday). Exemple complet : « She has lived in Abidjan since she was born, and she has been working as a teacher for five years. »</p>
      <h3>📌 Point du programme à ne pas manquer : participes passés irréguliers courants</h3><p>Le Present Perfect utilise le <strong>participe passé</strong>, qui est souvent irrégulier et à mémoriser (comme au Past Simple, mais attention : la forme du participe passé n'est pas toujours identique à celle du prétérit !). Exemples fréquents : go → went → <strong>gone</strong> ; do → did → <strong>done</strong> ; see → saw → <strong>seen</strong> ; write → wrote → <strong>written</strong> ; eat → ate → <strong>eaten</strong> ; be → was/were → <strong>been</strong>. Ex : « I <strong>have been</strong> to Paris twice. » (participe « been », pas « was »).</p>`,
      quiz: [
        {q:"« I ___ never been to London » (expérience) :", options:["was","have","am","did"], correct:1, exp:"« Have been » (Present Perfect) exprime une expérience de vie sans date précise."},
        {q:"Quel mot accompagne souvent le Present Perfect ?", options:["yesterday","already","last year","ago"], correct:1, exp:"« Already » est un indicateur typique du Present Perfect."},
        {q:"« She has lost her keys » signifie que :", options:["elle a perdu ses clés hier","la conséquence se ressent maintenant","elle va perdre ses clés","elle perd toujours ses clés"], correct:1, exp:"Le Present Perfect insiste sur la conséquence présente d'une action passée."},
        {q:"Quelle phrase utilise le Past Simple (moment précis) ?", options:["I have visited Paris","I visited Paris last year","I have never visited Paris","Have you visited Paris?"], correct:1, exp:"« Last year » précise un moment du passé : on utilise donc le Past Simple."},
        {q:"Le Present Perfect se forme avec :", options:["did + base verbale","have/has + participe passé","will + base verbale","be + verbe-ing"], correct:1, exp:"Le Present Perfect utilise have/has suivi du participe passé du verbe."}
      ,
        { q: "Complète : « She has already ___ her homework. » (do)", options: ["did", "done", "doing", "does"], correct: 1, exp: "Au Present Perfect, on utilise le participe passé après have/has : « do » → participe passé « done » (et non « did », qui est le prétérit)." }
      ]
    },
    {
      id: "a9",
      title: "Countable/Uncountable Nouns & Quantifiers",
      content: `<p>Les <strong>noms dénombrables</strong> (countable) peuvent se compter et avoir un pluriel : an apple → apples. Les <strong>noms indénombrables</strong> (uncountable) ne se comptent pas directement et n'ont pas de pluriel : water, rice, information.</p>
      <p><strong>Quantifieurs</strong> : « some » s'utilise dans les phrases affirmatives (avec les deux types de noms) ; « any » s'utilise dans les négations et les questions ; « much » s'utilise avec les indénombrables ; « many » s'utilise avec les dénombrables ; « a lot of » convient aux deux.</p>
      <p>Ex : I have some apples. / I don't have any money. / How much water do you need? / How many books do you have?</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Autres quantifieurs utiles : « a few » (quelques, pour les dénombrables, quantité suffisante) et « few » (peu de, quantité insuffisante) ; « a little » (un peu, pour les indénombrables, quantité suffisante) et « little » (peu de, quantité insuffisante). Exemple de nuance : « I have a few friends here » (j'en ai quelques-uns, c'est positif) vs « I have few friends here » (j'en ai très peu, c'est plutôt négatif). Exemple complet : « There is a little water left in the bottle, but there are only a few apples in the basket. »</p>
      <h3>📌 Point du programme à ne pas manquer : « some » dans une question</h3><p>Exception importante à la règle générale (« any » dans les questions) : on utilise <strong>« some »</strong>, et non « any », dans une question qui constitue une <strong>offre</strong> ou une <strong>demande polie</strong>, car on s'attend à une réponse positive. Ex : « Would you like <strong>some</strong> tea? » (proposer quelque chose), « Can I have <strong>some</strong> water, please? » (demander poliment). Dans une question neutre (information générale), on garde « any » : « Do you have <strong>any</strong> brothers or sisters? »</p>`,
      quiz: [
        {q:"« Water » est un nom :", options:["dénombrable","indénombrable","toujours au pluriel","un adjectif"], correct:1, exp:"« Water » ne se compte pas directement : c'est un nom indénombrable."},
        {q:"« How ___ books do you have? »", options:["much","many","some","any"], correct:1, exp:"« Many » s'utilise avec les noms dénombrables au pluriel, comme « books »."},
        {q:"« How ___ money do you need? »", options:["many","much","some","a"], correct:1, exp:"« Much » s'utilise avec les noms indénombrables, comme « money »."},
        {q:"« I don't have ___ apples » (phrase négative) :", options:["some","any","much","a"], correct:1, exp:"« Any » s'utilise dans les phrases négatives."},
        {q:"« I have ___ apples » (phrase affirmative) :", options:["any","some","much","no any"], correct:1, exp:"« Some » s'utilise dans les phrases affirmatives."}
      ,
        { q: "Quelle phrase est correcte pour proposer poliment quelque chose à boire ?", options: ["Would you like any coffee?", "Would you like some coffee?", "Do you have some coffee?", "Have you any coffee?"], correct: 1, exp: "Dans une offre polie (où l'on s'attend à une réponse positive), on utilise « some » même dans une question : « Would you like some coffee? »" }
      ]
    },
    {
      id: "a10",
      title: "Question Words",
      content: `<p>Les <strong>mots interrogatifs</strong> (wh-questions) permettent de poser des questions précises : <strong>who</strong> (qui), <strong>what</strong> (quoi/que), <strong>where</strong> (où), <strong>when</strong> (quand), <strong>why</strong> (pourquoi), <strong>how</strong> (comment), <strong>which</strong> (lequel), <strong>whose</strong> (à qui).</p>
      <p>Structure générale : mot interrogatif + auxiliaire (do/does/did/is/are/have...) + sujet + verbe. Ex : Where do you live? What is she doing?</p>
      <p>« How » se combine souvent avec un adjectif pour préciser la question : how old (âge), how much/many (quantité), how far (distance), how long (durée).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de mini-dialogue utilisant plusieurs mots interrogatifs : « — Where do you live? — I live in Bouaké. — How long have you lived there? — I have lived there for ten years. — Why did you move there? — Because of my father's job. » Astuce pour ne pas se tromper : après le mot interrogatif, on utilise un auxiliaire (do/does/did/is/are/have) SAUF quand le mot interrogatif est lui-même le sujet de la phrase — dans ce cas, pas d'auxiliaire ni d'inversion : « Who broke the window? » (et non « Who did break the window? »).</p>
      <h3>📌 Point du programme à ne pas manquer : les questions indirectes</h3><p>Dans une <strong>question indirecte</strong> (une question insérée dans une autre phrase, souvent pour être plus polie), on n'utilise <strong>pas d'inversion</strong> ni d'auxiliaire do/does/did : l'ordre redevient sujet + verbe, comme dans une phrase affirmative. Ex : question directe « Where does she live? » → question indirecte « Do you know <strong>where she lives</strong>? » (pas « where does she live »). Autre exemple : « What time is it? » → « Could you tell me <strong>what time it is</strong>? »</p>`,
      quiz: [
        {q:"« ___ is your name? » (identité)", options:["Where","What","When","Why"], correct:1, exp:"« What » s'utilise pour demander un nom ou une information de ce type."},
        {q:"« ___ do you live? » (lieu)", options:["Where","When","Why","Who"], correct:0, exp:"« Where » interroge sur un lieu."},
        {q:"« ___ are you late? » (raison)", options:["How","Why","What","Which"], correct:1, exp:"« Why » interroge sur la raison ou la cause."},
        {q:"« ___ old are you? » (âge)", options:["What","How","Where","Who"], correct:1, exp:"« How old » est l'expression standard pour demander l'âge."},
        {q:"« ___ book is yours? » (choix parmi plusieurs)", options:["What","Which","Who","Whose"], correct:1, exp:"« Which » s'utilise pour un choix parmi un ensemble limité d'éléments."}
      ,
        { q: "Quelle est la bonne façon de transformer « Where is the station? » en question indirecte après « Can you tell me... » ?", options: ["Can you tell me where is the station?", "Can you tell me where the station is?", "Can you tell me where does the station is?", "Can you tell me the station where is?"], correct: 1, exp: "Dans une question indirecte, on revient à l'ordre sujet + verbe (« where the station is »), sans inversion ni auxiliaire — contrairement à la question directe « Where is the station? »" }
      ]
    },
    {
      id: "a11",
      title: "The Passive Voice (introduction)",
      content: `<p>À la <strong>voix passive</strong>, le sujet de la phrase subit l'action au lieu de la faire. On l'utilise quand l'action est plus importante que celui qui la fait, ou quand l'auteur de l'action est inconnu ou évident.</p>
      <p><strong>Structure</strong> : sujet + be (conjugué) + participe passé (+ by + agent, si nécessaire).</p>
      <p>Voix active : The teacher corrects the exercises. → Voix passive : The exercises are corrected by the teacher.</p>
      <p>Le temps du verbe « be » s'accorde avec le temps de la phrase active d'origine (présent, passé, futur...).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Le passif peut s'utiliser à différents temps, en changeant simplement le temps de l'auxiliaire « be » : présent — « The letter is written » ; passé — « The letter was written » ; futur — « The letter will be written » ; present perfect — « The letter has been written ». On peut aussi mettre un modal au passif : « This exercise must be finished before tomorrow » (must be + participe passé). Exemple de transformation complète : « People speak English all over the world » (actif) → « English is spoken all over the world » (passif, plus naturel car on ne sait pas exactement qui parle).</p>
      <h3>📌 Point du programme à ne pas manquer : le passif à la forme interrogative</h3><p>À la forme interrogative, la voix passive suit la structure habituelle des questions : mot interrogatif (éventuel) + <strong>be</strong> + sujet + participe passé. Ex : « <strong>Is</strong> the letter <strong>written</strong>? » (présent), « <strong>When was</strong> this building <strong>built</strong>? » (passé, avec mot interrogatif). Cette structure est très utile pour poser une question sur une action sans connaître (ou sans avoir besoin de préciser) qui l'a réalisée.</p>`,
      quiz: [
        {q:"La voix passive se forme avec :", options:["do + participe passé","be + participe passé","have + base verbale","will + participe passé"], correct:1, exp:"La structure de base de la voix passive est be (conjugué) + participe passé."},
        {q:"« The exercises are corrected by the teacher » est à la voix :", options:["active","passive","impérative","conditionnelle"], correct:1, exp:"Le sujet « the exercises » subit l'action : c'est la voix passive."},
        {q:"Transformer « The cat eats the fish » au passif donne :", options:["The fish eats the cat","The fish is eaten by the cat","The fish was eating the cat","The cat is eaten by the fish"], correct:1, exp:"Le COD « the fish » devient sujet, et « be + participe passé » est utilisé : is eaten."},
        {q:"On utilise la voix passive surtout quand :", options:["l'action est plus importante que l'auteur","le sujet est toujours connu","il n'y a jamais d'auteur","la phrase est au futur uniquement"], correct:0, exp:"La voix passive met l'accent sur l'action ou son résultat plutôt que sur qui la fait."},
        {q:"Dans une phrase passive, « by » introduit :", options:["le lieu de l'action","l'agent (celui qui fait l'action)","le moment de l'action","le résultat de l'action"], correct:1, exp:"« By » introduit l'agent, c'est-à-dire celui qui réalise réellement l'action."}
      ,
        { q: "Quelle est la bonne question au passif pour demander quand une école a été construite ?", options: ["When did the school build?", "When was the school built?", "When the school was built?", "When builds the school?"], correct: 1, exp: "La question au passif suit la structure : mot interrogatif + be (conjugué au bon temps) + sujet + participe passé : « When was the school built? »" }
      ]
    },
    {
      id: "a12",
      title: "Vocabulary: Food & Shopping",
      content: `<p>Vocabulaire utile pour parler de <strong>nourriture</strong> : fruit, vegetables, meat, fish, bread, rice, milk, cheese, meal (repas), breakfast/lunch/dinner.</p>
      <p>Vocabulaire pour le <strong>shopping</strong> : shop/store, market, price, expensive/cheap, to buy, to sell, cash, receipt, shopping list.</p>
      <p>Expressions utiles : « How much does it cost? » (Combien ça coûte ?), « Can I have...? » (Puis-je avoir... ?), « I would like... » (Je voudrais...).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de petit dialogue au marché ou dans un magasin : « — Good morning, can I help you? — Yes, I would like some rice and two kilos of tomatoes, please. — Here you are. That's 2500 francs. — Can I pay by cash? — Of course. » Rappel utile : certains aliments sont indénombrables au singulier (some rice, some bread, some meat), alors que d'autres se comptent normalement au pluriel (two apples, three eggs, some tomatoes) — pense à utiliser « a piece of » ou « a loaf of » pour compter un indénombrable : a piece of bread, a loaf of bread.</p>
      <h3>📌 Point du programme à ne pas manquer : les unités de mesure pour les achats</h3><p>Pour acheter une quantité précise d'un aliment indénombrable, on utilise une unité de mesure suivie de « of » : <strong>a kilo of</strong> rice (un kilo de riz), <strong>a bottle of</strong> water/oil (une bouteille de), <strong>a bag of</strong> sugar (un sac de), <strong>a packet/pack of</strong> pasta (un paquet de), <strong>a can/tin of</strong> tomatoes (une boîte de). Ex : « I would like <strong>a bottle of</strong> oil and <strong>two kilos of</strong> sugar, please. » Ces unités permettent de compter précisément une quantité d'un nom indénombrable, en complément de « a piece of » ou « a loaf of » déjà vus.</p>`,
      quiz: [
        {q:"« Combien ça coûte ? » se traduit par :", options:["How much does it cost?","How many is it?","What is the price of you?","How is it cost?"], correct:0, exp:"« How much does it cost? » est l'expression correcte pour demander le prix."},
        {q:"« Cheap » signifie :", options:["cher","bon marché","délicieux","frais"], correct:1, exp:"« Cheap » signifie « bon marché », « pas cher »."},
        {q:"« Vegetables » signifie :", options:["fruits","légumes","viandes","boissons"], correct:1, exp:"« Vegetables » signifie « légumes »."},
        {q:"« I would like... » s'utilise pour :", options:["donner un ordre","exprimer poliment un souhait","poser une question sur le prix","refuser un achat"], correct:1, exp:"« I would like » est une formule polie pour exprimer ce que l'on souhaite (souvent acheter ou commander)."},
        {q:"« Receipt » signifie :", options:["la liste de courses","le ticket de caisse","le prix","le magasin"], correct:1, exp:"« Receipt » désigne le ticket de caisse remis après un achat."}
      ,
        { q: "Quelle unité de mesure utiliser pour demander de l'huile au marché : « I would like ___ oil, please »?", options: ["a piece of", "a bottle of", "a loaf of", "a cup of coffee"], correct: 1, exp: "L'huile étant un liquide vendu en bouteille, on utilise « a bottle of oil » — comme « a bottle of water », alors que « a piece of » ou « a loaf of » s'utilisent plutôt pour le pain." }
      ]
    },
    {
      id: "au1",
      title: "Unit 1 – At School: holidays, habits and conditions",
      content: `<p>📘 Cette longue leçon reprend le programme officiel ivoirien « Unit 1 – At School » : trois points de grammaire essentiels, avec tout le vocabulaire et de nombreux exemples.</p>

      <h3>1. Parler d'événements passés : le Past Simple avec les Wh-questions</h3>
      <p>Pour raconter ce qu'on a fait pendant les vacances, on utilise le <strong>Past Simple</strong> avec des mots interrogatifs (Where, What...).</p>
      <p><em>Where did you spend your holidays?</em> → <em>I spent my holidays in Abidjan.</em><br>
      <em>What did you do during the holidays?</em> → <em>During the holidays, I went fishing in the lagoon.</em></p>
      <p>Autres exemples : <em>During the holidays, we played a football tournament in my village. / I helped my father hunting animals in the cocoa plantation.</em></p>
      <p><strong>Vocabulaire :</strong> holidays (vacances), to spend holidays (passer ses vacances), holiday time (le temps des vacances, opposé de school time), a countryside (une zone rurale), to go hunting (aller chasser), to go fishing (aller pêcher), to do a holiday job (faire un petit boulot pendant les vacances), to play a tournament (participer à un tournoi), to help parents at home/in the plantation, to meet new friends, to sell/buy things.</p>
      <p><strong>Verbes irréguliers utiles :</strong> to be → was/were (être), to have → had (avoir), to do → did (faire), to go → went (aller), to spend → spent (passer/dépenser), to buy → bought (acheter), to eat → ate (manger), to get → got (obtenir), to give → gave (donner), to learn → learnt (apprendre), to meet → met (rencontrer), to sell → sold (vendre), to speak → spoke (parler).</p>

      <h3>2. Parler d'habitudes passées : used to / didn't use to</h3>
      <p>Pour dire ce qu'on faisait habituellement dans le passé (mais plus maintenant), on utilise <strong>used to</strong> + base verbale. À la forme négative : <strong>didn't use to</strong> + base verbale (attention : pas de -d à « use » dans la négation).</p>
      <p><em>At primary school, I used to eat in the classroom.</em> (à l'école primaire, j'avais l'habitude de manger en classe)<br>
      <em>In form one, the big boys used to beat small boys.</em><br>
      <em>At primary school, I didn't use to cheat in the classroom.</em> (je n'avais pas l'habitude de tricher)</p>
      <p>Pour dire qu'une habitude a cessé aujourd'hui, on ajoute <strong>any more</strong> en fin de phrase (forme négative) ou <strong>no longer</strong> avant le verbe :</p>
      <p><em>Today, I don't steal pens from my neighbors any more.</em><br>
      <em>Now, I no longer weep at school.</em> / <em>Today, my friend is no longer a bad-tempered boy.</em></p>
      <p><strong>Vocabulaire :</strong> a school memory (un souvenir d'école), to cheat in classroom (tricher pendant un contrôle), to chat in classroom (bavarder pendant le cours), to eat in classroom, to beat (donner une punition corporelle), to fight with classmates (se bagarrer), to come late in the classroom, to sleep in the classroom, to steal (voler), to hurt (blesser), to frighten (effrayer), to weep (pleurer), to be cruel ≠ to be cool, to be bad-tempered (être coléreux).</p>

      <h3>3. Exprimer une condition : If + present, ... will + base verbale</h3>
      <p>Pour dire ce qui se passera <strong>si</strong> une condition est remplie, on utilise : <strong>If</strong> + sujet + present simple, sujet + <strong>will</strong> + base verbale. On peut aussi utiliser <strong>unless</strong> (= if...not) pour exprimer une condition négative.</p>
      <p><em>If I work harder, I will improve my school results.</em><br>
      <em>If you don't study your lessons, you will fail.</em><br>
      <em>Konaté will not (won't) obtain good results if he doesn't work harder.</em><br>
      <em>You will fail this year unless you catch up.</em> (= if you don't catch up)</p>
      <p><strong>Vocabulaire :</strong> to work harder (travailler plus dur), to go up ≠ to stay down (passer dans la classe supérieure ≠ redoubler), to obtain good results, to improve school results (améliorer ses résultats), to pass/fail an exam, a hardworking student (un élève travailleur), to achieve a goal (atteindre un objectif), to catch up (rattraper son retard), an aim (un objectif), to take an exam, a grade (une note).</p>`,
      quiz: [
        {q:"« ___ did you spend your holidays? » — « I spent my holidays in Abidjan. »", options:["When","Where","Who","Why"], correct:1, exp:"« Where » interroge sur le lieu où on a passé ses vacances."},
        {q:"« During the holidays, I ___ fishing in the lagoon. »", options:["go","went","goes","going"], correct:1, exp:"Le Past Simple de « to go » est irrégulier : « went »."},
        {q:"« At primary school, I ___ eat in the classroom. » (habitude passée révolue)", options:["use to","used to","am used to","using"], correct:1, exp:"« Used to » + base verbale exprime une habitude passée qui n'existe plus."},
        {q:"« Today, I don't steal pens from my neighbors ___. »", options:["already","any more","yet","ever"], correct:1, exp:"« Any more » en fin de phrase négative indique qu'une habitude a cessé."},
        {q:"« If Koffi ___ harder, he will improve his results. »", options:["works","will work","worked","work"], correct:0, exp:"Après « if » dans une condition de type 1, on utilise le present simple : « works »."},
        {q:"« You will fail this year ___ you catch up. » (= if you don't catch up)", options:["if","unless","because","although"], correct:1, exp:"« Unless » signifie « à moins que / sauf si » = « if...not »."}
      ]
    },
    {
      id: "au2",
      title: "Unit 2 – Women at Work: ability, rights and opinions",
      content: `<p>📘 Cette leçon (programme officiel « Unit 2 – Women at Work ») couvre l'expression de la capacité, des droits/devoirs, des opinions et des comparaisons — avec le discours rapporté en prime.</p>

      <h3>1. Exprimer une capacité : can / to be able to</h3>
      <p><strong>Can</strong> (+ base verbale) exprime une capacité ou une permission ; <strong>to be able to</strong> a le même sens et se conjugue à tous les temps.</p>
      <p><em>Rural women can cook food on firewood.</em> = <em>Rural women are able to cook on firewood.</em><br>
      <em>Rural women cannot teach English.</em> = <em>Rural women are not able to teach English.</em></p>
      <p><strong>Vocabulaire :</strong> to farm (cultiver), to cook on firewood (cuisiner au feu de bois), to fetch water from a well/river (puiser de l'eau), to do the washing / the washing up (faire la lessive / la vaisselle), to breed cattle (élever du bétail).</p>
      <p><strong>Le discours rapporté (introduction) :</strong> quand on rapporte les paroles de quelqu'un, « can » devient « could » et le present devient le past : <em>Direct : Jane said: "Rural women can cook food on firewood."</em> → <em>Indirect : Jane said that rural women could cook food on firewood.</em> De même, <em>Mary said: "Rural women sweep the yard every day."</em> → <em>Mary said that rural women swept the yard every day.</em></p>

      <h3>2. Exprimer des droits et des devoirs : have the right to / have the duty to</h3>
      <p><strong>To have the right to</strong> + base verbale = avoir le droit de. <strong>To have the duty to / must</strong> + base verbale = avoir le devoir de, devoir.</p>
      <p><em>Women have the right to express their opinions. / All the women have the right to take part in elections.</em><br>
      <em>This girl is a student. She has the duty to study her lessons. / Women must provide the children with a good education. / Men mustn't rape women.</em></p>
      <p><strong>Vocabulaire :</strong> a right (un droit), to express an opinion, to be respected, to succeed in life, a leader, to take part in an election (voter), a white-collar job (métier de bureau) ≠ a blue-collar job (métier manuel), a duty (un devoir), to obey (obéir), to abuse someone (maltraiter/insulter), to provide good education.</p>

      <h3>3. Donner son opinion et comparer</h3>
      <p>Pour donner une opinion : <strong>In my opinion, / I think (that) / For me, / From my view point,</strong> ... .</p>
      <p><em>In my opinion, girls can be successful at school. / I think that girls are as intelligent as boys.</em></p>
      <p><strong>Comparatif de supériorité :</strong> adjectif court + <strong>-er</strong> + than (<em>brighter than</em>) ; adjectif long : <strong>more</strong> + adjectif + than (<em>more successful than</em>).<br>
      <strong>Comparatif d'égalité :</strong> <strong>as</strong> + adjectif + <strong>as</strong> (<em>Girls are as skilled as boys.</em>)</p>
      <p><strong>Vocabulaire :</strong> to be successful, to graduate (obtenir un diplôme), a housewife (femme au foyer), to discriminate (faire une discrimination), equal treatment, to accomplish an ambition, clever/bright/smart (intelligent), to be skilled (être qualifié), to win a scholarship (obtenir une bourse).</p>`,
      quiz: [
        {q:"« Rural women ___ cook food on firewood. » (capacité)", options:["must","can","should","have to"], correct:1, exp:"« Can » exprime une capacité à faire quelque chose."},
        {q:"Forme équivalente de « can » pour exprimer une capacité :", options:["to be able to","to have to","to be going to","to be used to"], correct:0, exp:"« To be able to » a le même sens que « can » et se conjugue à tous les temps."},
        {q:"Discours rapporté : Jane said: « Rural women can cook on firewood. » → Jane said that rural women ___ cook on firewood.", options:["can","could","will can","cans"], correct:1, exp:"Au discours rapporté (verbe introducteur au passé), « can » devient « could »."},
        {q:"« Women ___ express their opinions. » (droit)", options:["have the duty to","have the right to","must not","are able"], correct:1, exp:"« Have the right to » exprime un droit."},
        {q:"« This girl ___ study her lessons. » (devoir/obligation)", options:["has the right to","has the duty to","is able to","can"], correct:1, exp:"« Have the duty to » exprime un devoir, une obligation."},
        {q:"« Girls are ___ boys. » (égalité, skilled)", options:["more skilled than","as skilled as","skilled than","the most skilled"], correct:1, exp:"Le comparatif d'égalité se forme avec « as + adjectif + as »."}
      ]
    },
    {
      id: "au3",
      title: "Unit 3 – Travelling: means of transport, necessity and reported speech",
      content: `<p>📘 Programme officiel « Unit 3 – Travelling » : les moyens de transport, la nécessité, les préférences et le discours rapporté au passé.</p>

      <h3>1. Les moyens de transport : on foot / by + moyen de transport</h3>
      <p>Pour dire comment on se déplace : <strong>on foot</strong> (à pied), <strong>by</strong> + moyen de transport (by car, by plane, by train, by boat, by canoe, by bicycle).</p>
      <p><em>How do you go to school? → I go to school on foot. / You go to France by plane. / We go to Burkina Faso by train.</em></p>
      <p><strong>Vocabulaire :</strong> a bicycle, a car, a plane, a boat, a canoe, a train, to drive a car, to ride a bicycle, to fly a plane, to pilot a train, to paddle a canoe.</p>
      <p>Pour exprimer un souhait de transport : <strong>want to</strong> / <strong>would like to</strong> + base verbale. <em>I want to go by car. = I would like to go by car.</em></p>

      <h3>2. Exprimer la nécessité et les préférences</h3>
      <p><strong>Need to</strong> / <strong>don't need to</strong> + base verbale = avoir besoin de / ne pas avoir besoin de.</p>
      <p><em>When you travel by plane, you need to go to the airport. / When you travel by car, you don't need to go to the airport.</em></p>
      <p>Pour les préférences : <strong>I like to... / I prefer...ing / I prefer X to Y / I'd rather</strong> + base verbale.</p>
      <p><em>I like to travel abroad by plane. / I prefer travelling by plane. / I prefer airways to railroad. / I'd rather travel by waterway.</em></p>
      <p><strong>Vocabulaire :</strong> airport, passport, boarding pass, to board, luggage, passenger, check-in desk, a departure lounge, to take off (décoller), to land (atterrir), a flight attendant, a pilot.</p>

      <h3>3. Le discours rapporté (reported speech)</h3>
      <p>Pour rapporter ce que quelqu'un a dit, plusieurs changements ont lieu : le temps recule d'un cran (present → past, past → past perfect...), les pronoms et les indicateurs de temps changent.</p>
      <p><em>Direct : "I am the first black student in this college." He told me.</em> → <em>Indirect : He told me that he was the first black student in that college.</em><br>
      <em>Direct : "I always visit London with my parents." Kadi said.</em> → <em>Indirect : Kadi said that she always visited London with her parents.</em></p>
      <table><tr><th>Discours direct</th><th>Discours indirect</th></tr>
      <tr><td>am / is</td><td>was</td></tr><tr><td>are</td><td>were</td></tr><tr><td>will</td><td>would</td></tr>
      <tr><td>can</td><td>could</td></tr><tr><td>must</td><td>had to</td></tr>
      <tr><td>today</td><td>that day</td></tr><tr><td>tomorrow</td><td>the following day</td></tr>
      <tr><td>yesterday</td><td>the day before</td></tr><tr><td>this / here</td><td>that / there</td></tr></table>
      <p><strong>Vocabulaire :</strong> to stand for (signifier), to settle in (s'installer), scholarship (bourse), foreign (étranger), a king/queen, a kingdom, a palace, rude (impoli), to make out (comprendre).</p>`,
      quiz: [
        {q:"« I go to school ___ foot. »", options:["by","on","in","with"], correct:1, exp:"On dit « on foot » (à pied), sans « by »."},
        {q:"« We go to Burkina Faso ___ train. »", options:["on","in","by","with"], correct:2, exp:"Pour les autres moyens de transport, on utilise « by »."},
        {q:"« When you travel by car, you ___ go to the airport. »", options:["need to","don't need to","must","have to"], correct:1, exp:"Voyager en voiture ne nécessite pas d'aller à l'aéroport : « don't need to »."},
        {q:"« I'd rather travel ___ waterway. »", options:["by","on","in","with"], correct:0, exp:"« By waterway » : par voie fluviale/maritime."},
        {q:"Discours direct : « I am the first student. » He said. → Discours indirect : He said that he ___ the first student.", options:["is","was","has been","will be"], correct:1, exp:"Au discours rapporté, « am » devient « was »."},
        {q:"Discours direct : « I visited London yesterday. » → au discours indirect, « yesterday » devient :", options:["the day before","the following day","that day","today"], correct:0, exp:"« Yesterday » devient « the day before » au discours indirect."}
      ]
    },
    {
      id: "au4",
      title: "Unit 4 – Fashion: present tenses, passive voice and past habits",
      content: `<p>📘 Programme officiel « Unit 4 – Fashion » : Present Simple/Continuous, la voix passive, used to (rappel) et le choix entre Present Perfect et Past Simple.</p>

      <h3>1. Actions répétées ou en cours : Present Simple vs Present Continuous</h3>
      <p><strong>Present Simple</strong> : habitude, vérité générale. <strong>Present Continuous</strong> (be + verbe-ing) : action en cours, souvent avec « Today » ou « Look! ».</p>
      <p><em>Ivorian students wear uniforms.</em> (habitude) vs <em>Today, I am wearing a jacket.</em> (maintenant)<br>
      <em>Look! Seka is wearing a nice polo T-shirt today.</em></p>
      <p><strong>Vocabulaire :</strong> fashion (mode), fashionable ≠ old-fashioned, young people, clothes, to wear, to wash, a hairstyle, a hairdresser, a pair of sneakers, a shoemaker, to give up (abandonner).</p>

      <h3>2. Décrire comment les choses sont faites : la voix passive</h3>
      <p>Structure : sujet + <strong>be</strong> (conjugué) + <strong>participe passé</strong> (+ by + agent).</p>
      <p><em>Designers create fashionable clothes.</em> (actif) → <em>Fashionable clothes are created by designers.</em> (passif)<br>
      <em>Jeans, T-shirts and sneakers are worn by everybody nowadays.</em></p>
      <p><strong>Vocabulaire :</strong> scarf, polo shirt, kita, jeans, sneakers, bubu, cap, suit. Et pour les habitudes passées (rappel de l'Unit 1) : <em>In the past, many people used to wear traditional clothes. Afro hairstyle, long/short-sleeved shirt, baggy trousers, gloves, a brand.</em></p>

      <h3>3. Present Perfect ou Past Simple pour parler du passé</h3>
      <p><strong>Present Perfect</strong> (have/has + participe passé) : une action passée sans date précise, ou dont le résultat compte encore. <strong>Past Simple</strong> : une action terminée à un moment précis (dates, « last week », « yesterday »).</p>
      <p><em>The tailor has already made your shirt. / We have just bought new clothes for the wedding. / Sanogo has not set up his business yet.</em> (Present Perfect)<br>
      <em>This artist wore a beautiful wig last week. / Aya bought a new dress in Treichville two weeks ago.</em> (Past Simple)</p>
      <p><strong>Vocabulaire :</strong> success, business, a fashion show, to set up a business, well-known, a wig, a top model, a catwalk (podium), a seamstress, a tailor, to order, a sewing machine.</p>`,
      quiz: [
        {q:"« Ivorian students ___ uniforms. » (habitude générale)", options:["wear","are wearing","wore","have worn"], correct:0, exp:"Une habitude générale s'exprime au Present Simple."},
        {q:"« Look! Seka ___ a nice T-shirt today. »", options:["wears","is wearing","wore","has worn"], correct:1, exp:"« Look! » + « today » indiquent une action en cours : Present Continuous."},
        {q:"Passif de « Designers create fashionable clothes » :", options:["Fashionable clothes create designers.","Fashionable clothes are created by designers.","Designers are created by fashionable clothes.","Fashionable clothes created designers."], correct:1, exp:"Le COD devient sujet, et on utilise be + participe passé + by + agent."},
        {q:"« In the past, many people ___ wear traditional clothes. » (habitude passée)", options:["use to","used to","are used to","using"], correct:1, exp:"« Used to » exprime une habitude passée révolue."},
        {q:"« We ___ new clothes for the wedding. » (action récente, sans date précise)", options:["bought","have just bought","are buying","will buy"], correct:1, exp:"Une action récente sans date précise se met au Present Perfect : « have just bought »."},
        {q:"« Aya ___ a new dress in Treichville two weeks ago. » (date précise)", options:["has bought","buys","bought","is buying"], correct:2, exp:"« Two weeks ago » précise un moment du passé : Past Simple."}
      ]
    },
    {
      id: "au5",
      title: "Unit 5 – City or Village: wishes, feelings and consequences",
      content: `<p>📘 Programme officiel « Unit 5 – City or Village » : exprimer un souhait, décrire un changement, exprimer un sentiment et une conséquence.</p>

      <h3>1. Exprimer un souhait : wish + past simple</h3>
      <p>Pour exprimer un souhait sur une situation présente (regret), on utilise <strong>wish</strong> + sujet + <strong>past simple</strong> (même si le souhait porte sur le présent !).</p>
      <p><em>I wish I lived in Abidjan.</em> (je souhaiterais vivre à Abidjan, mais ce n'est pas le cas)<br>
      <em>Abou wishes he lived in London. / I wish I was/were in a palace.</em></p>
      <p>Pour décrire un changement entre le passé et aujourd'hui : <strong>there used to be... but now there is/are...</strong></p>
      <p><em>In the past, Abidjan used to be a small village, but today, it is a big town. / In the past, there used to be no traffic lights in Abidjan, but today, there are many.</em></p>
      <p><strong>Vocabulaire :</strong> a bridge, an airport, highways, a stadium, a street, running water, a university, traffic lights, a round about, a crossroads, a traffic jam, a cathedral, buildings, the urban population, a city-dweller.</p>

      <h3>2. Exprimer un sentiment et poser des questions</h3>
      <p>Pour exprimer un sentiment : <strong>to feel</strong> + adjectif.</p>
      <p><em>I feel sad today. / Kouao has produced 10 tons of cotton. He feels very proud.</em></p>
      <p><strong>Vocabulaire des sentiments :</strong> glad (content), proud (fier), worried (inquiet), sad (triste), excited (excité).<br>
      <strong>Vocabulaire de la campagne :</strong> a hut (une case), to grow/to plant (cultiver), to weed (désherber), food crops, cash crops (cultures de rente).</p>
      <p>On peut poser des questions avec les <strong>Wh-questions</strong> (When, Why...) ou des <strong>Yes/No questions</strong> (auxiliaire en tête de phrase) : <em>When did Côte d'Ivoire become a French colony? / Do you know the date Côte d'Ivoire became independent?</em></p>

      <h3>3. Exprimer une conséquence : so + adjectif/adverbe + that</h3>
      <p>Structure : <strong>so</strong> + adjectif (ou adverbe) + <strong>that</strong> + conséquence.</p>
      <p><em>Farm work is so difficult that many young people prefer city life. / Rain is so rare that all the plants die. / He worked so well that he passed his exam.</em> (adverbe)</p>
      <p><strong>Vocabulaire :</strong> employment, rural exodus (exode rural), juvenile delinquency, a tiring work, youngsters, attractive places, overcrowded (surpeuplé), depopulation, drug addiction, poverty, bad living conditions, temptations.</p>`,
      quiz: [
        {q:"« I wish I ___ in Abidjan. » (souhait présent)", options:["live","lived","will live","am living"], correct:1, exp:"Après « wish » pour un souhait présent, on utilise le past simple : « lived »."},
        {q:"« In the past, there ___ no traffic lights in Abidjan. »", options:["are","were","used to be","use to be"], correct:2, exp:"« Used to be » décrit une situation passée qui n'existe plus."},
        {q:"« Kouao has produced 10 tons of cotton. He ___ very proud. »", options:["feels","is feeling","felt","has felt"], correct:0, exp:"« To feel + adjectif » exprime un sentiment ressenti actuellement : Present Simple."},
        {q:"« ___ did Côte d'Ivoire become a French colony? » (question sur le moment)", options:["What","When","Who","How"], correct:1, exp:"« When » interroge sur le moment."},
        {q:"« Farm work is ___ difficult that many young people prefer city life. »", options:["such","so","very","too"], correct:1, exp:"« So + adjectif + that » exprime une conséquence."},
        {q:"« He worked ___ well that he passed his exam. » (adverbe)", options:["so","such","such a","very"], correct:0, exp:"« So » s'utilise aussi devant un adverbe pour exprimer une conséquence."}
      ]
    },
    {
      id: "au6",
      title: "Unit 6 – Human Rights: requests, duties and obligation",
      content: `<p>📘 Programme officiel « Unit 6 – Human Rights » : faire une demande polie, exprimer des devoirs et l'obligation avec have got to.</p>

      <h3>1. Faire une demande polie avec Can</h3>
      <p><strong>Can you...? / Can I...?</strong> permettent de faire une demande polie.</p>
      <p><em>Can you tell me where to buy a stamp, please? / Can I have a stamp? / Can I get an identity card, please?</em></p>
      <p><strong>Vocabulaire :</strong> a birth certificate (acte de naissance), an identity card, a scholarship, to vaccinate, a driving license, health care.</p>
      <p>On exprime aussi l'<strong>obligation</strong> avec <strong>must</strong> et l'<strong>interdiction</strong> avec <strong>mustn't</strong> : <em>Citizens must pay taxes. / Citizens mustn't destroy public services. / Children mustn't smoke cigarettes.</em></p>
      <p><strong>Vocabulaire :</strong> to pay taxes, to obey the law, to get a job, public services, to be protected.</p>

      <h3>2. Exprimer un devoir : have the duty to / it's my duty to</h3>
      <p><em>It's my duty to respect the laws of my country. / I have the duty to obey my parents. / He has the duty to respect the law.</em></p>
      <p>Pour l'absence de nécessité (« ce n'est pas obligatoire ») : <strong>don't have to / doesn't have to</strong>.</p>
      <p><em>I don't have the duty to obey my friends. / It's not my duty to break the school rules.</em></p>
      <p><strong>Vocabulaire :</strong> a duty (un devoir), a citizen (un citoyen), to disobey, to break the rules, to destroy.</p>

      <h3>3. Exprimer l'obligation avec have got to</h3>
      <p><strong>Have got to / has got to</strong> + base verbale a le même sens que « must », pour exprimer une nécessité forte.</p>
      <p><em>People have got to practice peace. / Sally has got to practice tolerance.</em></p>
      <p><strong>Vocabulaire :</strong> tolerance (tolérance), reconciliation (réconciliation), peace ≠ conflict/war, a peace-maker, love, solidarity, non-violence, to reconcile, to prevent (éviter).</p>`,
      quiz: [
        {q:"« ___ you tell me where to buy a stamp, please? » (demande polie)", options:["Do","Can","Must","Shall"], correct:1, exp:"« Can you...? » sert à faire une demande polie."},
        {q:"« Citizens ___ pay taxes. » (obligation)", options:["can","mustn't","must","are able to"], correct:2, exp:"« Must » exprime une obligation forte."},
        {q:"« Children ___ smoke cigarettes. » (interdiction)", options:["mustn't","don't have to","can","should"], correct:0, exp:"« Mustn't » exprime une interdiction."},
        {q:"« It's ___ duty to respect the laws of my country. »", options:["a","my","the","some"], correct:1, exp:"« It's my duty to... » : c'est mon devoir de..."},
        {q:"« I ___ obey my friends. » (absence de nécessité)", options:["don't have to","mustn't","have to","must"], correct:0, exp:"« Don't have to » exprime l'absence de nécessité (ce n'est pas obligatoire)."},
        {q:"« People ___ practice peace. » (have got to)", options:["have got to","has got to","having got to","have got"], correct:0, exp:"Avec « people » (pluriel), on utilise « have got to »."}
      ]
    },
    {
      id: "au7",
      title: "Unit 7 – Hygiene and Health: advice, passive and suggestions",
      content: `<p>📘 Programme officiel « Unit 7 – Hygiene and Health » : donner un conseil avec should, la voix passive au présent continu, et faire une suggestion.</p>

      <h3>1. Donner un conseil : should / shouldn't</h3>
      <p><strong>Should</strong> + base verbale exprime un conseil. <strong>Shouldn't</strong> pour un conseil négatif.</p>
      <p><em>You should go to hospital when you are sick. / You shouldn't drink dirty water.</em></p>
      <p><strong>Vocabulaire :</strong> a disease (une maladie), sick ≠ healthy, a fever (fièvre), a medicine, a tablet/a pill, a chemistry (pharmacie), a prescription, to recover (guérir), to suffer from, a headache, a stomach ache, to vomit, malaria, a mosquito bite.</p>

      <h3>2. La voix passive pour décrire une action en cours</h3>
      <p>Structure : sujet + <strong>be</strong> (conjugué) + <strong>participe passé</strong>, y compris au présent continu (<strong>be being + participe passé</strong>).</p>
      <p><em>Nina was bitten by a mosquito. / What happened to Nina? She was bitten by a mosquito. / The patient's temperature is being taken by the doctor.</em></p>

      <h3>3. Exprimer une opinion et faire une suggestion</h3>
      <p>Pour donner son opinion : <strong>I think...</strong> Pour faire une suggestion : <strong>Why don't you / we...?</strong></p>
      <p><em>Do you think it is important to keep our school clean? — Yes, I think we need to create an Environment Club.</em><br>
      <em>I am suffocating. — Why don't you open the windows? / Our classroom is dirty. — Why don't we clean it?</em></p>
      <p><strong>Vocabulaire :</strong> a gutter (caniveau), a water tap (robinet), to weed the garden, a dustbin (poubelle), Wellington boots (bottes), a hoe (houe), a broom (balai), soap, litter/rubbish (déchets), to suffocate (suffoquer), bushy (broussailleux).</p>`,
      quiz: [
        {q:"« You ___ go to hospital when you are sick. » (conseil)", options:["must","should","can","are able to"], correct:1, exp:"« Should » exprime un conseil."},
        {q:"« You ___ drink dirty water. » (conseil négatif)", options:["mustn't","shouldn't","don't have to","can't"], correct:1, exp:"« Shouldn't » exprime un conseil négatif, une déconseille."},
        {q:"« Nina ___ by a mosquito. » (voix passive, past)", options:["bit","was bitten","has bitten","is biting"], correct:1, exp:"Voix passive au passé : be (was) + participe passé (bitten)."},
        {q:"« The patient's temperature ___ by the doctor right now. » (passif, présent continu)", options:["is taken","is being taken","was taken","takes"], correct:1, exp:"Voix passive au présent continu : is/are being + participe passé."},
        {q:"« ___ you think it is important to keep our school clean? »", options:["Are","Do","Can","Have"], correct:1, exp:"« Do you think... » sert à demander une opinion."},
        {q:"« Our classroom is dirty. ___ we clean it? » (suggestion)", options:["Why don't","Why not to","Should not","Can't"], correct:0, exp:"« Why don't we...? » sert à faire une suggestion."}
      ]
    }
  ]
},

pc: {
  name: "Physique-Chimie",
  color: "#9B7FE8",
  icon: "🧪",
  // Programme officiel 4ème Côte d'Ivoire (APC), aligné sur le cours complet
  // "PC 4ième — Côte d'Ivoire École numérique" : 13 leçons, 4 thèmes.
  lessons: [
    {
      id: "pc1",
      title: "Optique — Sources et récepteurs de lumière",
      content: `<p>Une <strong>source de lumière</strong> est un corps qui émet de la lumière. Exemples : le soleil, la lune, une flamme, une lampe allumée, une luciole, un mur éclairé, un écran de télévision.</p>
      <p>On distingue deux types de sources :</p>
      <ul>
        <li>Une <strong>source primaire</strong> émet la lumière qu'elle <strong>produit</strong> elle-même. Elle peut être <strong>naturelle</strong> (le soleil, les étoiles, les lucioles) ou <strong>artificielle</strong>, fabriquée par l'homme (lampe à incandescence, lampe au néon, écran de télévision allumé, lampe torche allumée, laser, flamme de bougie).</li>
        <li>Une <strong>source secondaire</strong> (ou <strong>objet éclairé</strong>) émet ou diffuse la lumière qu'elle <strong>reçoit</strong>. Exemples : la lune, une planète (Terre, Mars, Jupiter), un nuage, un arbre éclairé, un mur, un tableau, un miroir, un écran de cinéma.</li>
      </ul>
      <p>Un <strong>récepteur de lumière</strong> est un corps sensible à la lumière ou qui réagit à la lumière. Il en existe deux types : les récepteurs <strong>naturels</strong> (l'œil, la peau, la chlorophylle des plantes) et les récepteurs <strong>artificiels</strong> (la pellicule photographique, la photorésistance ou LDR, les photopiles ou piles solaires, le chlorure d'argent).</p>
      <h3>Étude de deux récepteurs de lumière</h3>
      <p><strong>Le chlorure d'argent</strong> : en versant du nitrate d'argent dans de l'eau salée, on obtient un précipité <strong>blanc</strong> de chlorure d'argent. Exposé à la lumière, il <strong>noircit</strong> ; gardé dans l'obscurité (sous un cache), il reste blanc. Le noircissement est provoqué par la lumière : le chlorure d'argent est un <strong>récepteur photochimique</strong>.</p>
      <p><strong>La photorésistance (LDR)</strong> : c'est un composant électronique. Éclairée, elle se comporte comme un <strong>conducteur</strong> (la lampe du circuit s'allume) ; dans l'obscurité, elle se comporte comme un <strong>isolant</strong>. La LDR est un <strong>récepteur photoélectrique</strong>.</p>
      <p>Les récepteurs de lumière sont utilisés dans les appareils photographiques, l'éclairage public (allumage automatique à la tombée de la nuit), les panneaux solaires et les calculatrices solaires.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> un même objet peut être à la fois source et récepteur. Une feuille de manguier est visible, donc c'est une source (secondaire) de lumière ; elle contient aussi de la chlorophylle qui capte la lumière, donc c'est un récepteur. En revanche, tout récepteur n'est pas forcément « source primaire » : la lune ne fait que renvoyer la lumière du soleil.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : range ces objets — soleil, luciole, nuage, étoile, lune, arbre éclairé. Sources primaires : <strong>soleil, luciole, étoile</strong> (elles produisent leur lumière). Sources secondaires : <strong>lune, arbre éclairé, nuage</strong> (ils renvoient la lumière reçue du soleil).</p>
      <p>Application : pour protéger une salle contre les vols nocturnes, on branche en série une pile, une sonnerie et une LDR. Dans l'obscurité, la LDR est isolante : la sonnerie reste muette. Si un voleur allume une lampe, la LDR devient conductrice et la sonnerie retentit.</p>
      <h3>📌 Point du programme à ne pas manquer : photochimique ou photoélectrique ?</h3><p>Le programme demande de bien nommer le type de chaque récepteur. Un récepteur <strong>photochimique</strong> subit une <strong>transformation chimique</strong> sous l'effet de la lumière (chlorure d'argent qui noircit, pellicule photo, chlorophylle). Un récepteur <strong>photoélectrique</strong> voit une <strong>propriété électrique</strong> changer avec la lumière (la LDR qui devient conductrice, la photopile qui produit un courant à partir de la lumière du soleil).</p>`,
      quiz: [
        {q:"Une source primaire de lumière est un corps qui...", options:["renvoie la lumière qu'il reçoit","émet la lumière qu'il produit","absorbe toute la lumière","ne peut être vu que la nuit"], correct:1, exp:"Une source primaire émet la lumière qu'elle produit elle-même (soleil, flamme, lampe allumée)."},
        {q:"La lune est...", options:["une source primaire naturelle","une source primaire artificielle","une source secondaire","un récepteur photoélectrique"], correct:2, exp:"La lune ne produit pas de lumière : elle renvoie celle du soleil. C'est une source secondaire (objet éclairé)."},
        {q:"Parmi ces sources, laquelle est une source primaire artificielle ?", options:["Le soleil","Une luciole","Un laser","Un miroir"], correct:2, exp:"Le laser est fabriqué par l'homme et produit sa propre lumière : source primaire artificielle."},
        {q:"Le chlorure d'argent exposé à la lumière...", options:["reste blanc","devient bleu","noircit","devient transparent"], correct:2, exp:"Le précipité blanc de chlorure d'argent noircit à la lumière : c'est un récepteur photochimique."},
        {q:"Une LDR (photorésistance) éclairée se comporte comme...", options:["un isolant","un conducteur","un générateur","une source de lumière"], correct:1, exp:"Éclairée, la LDR devient conductrice ; dans l'obscurité, elle est isolante."},
        {q:"Lequel de ces récepteurs de lumière est naturel ?", options:["La photopile","La pellicule photographique","La chlorophylle","La LDR"], correct:2, exp:"L'œil, la peau et la chlorophylle sont des récepteurs naturels ; les autres sont fabriqués par l'homme."},
        {q:"La LDR est un récepteur de type...", options:["photochimique","photoélectrique","thermique","magnétique"], correct:1, exp:"Une propriété électrique de la LDR varie avec la lumière : c'est un récepteur photoélectrique."}
      ]
    },
    {
      id: "pc2",
      title: "Optique — Propagation de la lumière",
      content: `<p>Un milieu <strong>transparent</strong> se laisse traverser par la lumière (l'air, l'eau limpide, le vide, le vinaigre blanc). Un milieu <strong>opaque</strong> ne laisse pas passer la lumière (mur de briques, métal, bois, carton). Un corps qui laisse passer <strong>partiellement</strong> la lumière est <strong>translucide</strong> (papier calque, vitre dépolie).</p>
      <p>Un milieu <strong>homogène</strong> est un milieu dont les propriétés sont les mêmes en tout point (le vide, l'eau, le verre, l'air).</p>
      <p><strong>Propagation rectiligne</strong> : avec plusieurs plaques opaques percées, le point lumineux n'apparaît sur l'écran que si tous les trous sont <strong>alignés</strong>. Conclusion : <strong>dans un milieu transparent et homogène, la lumière se propage en ligne droite.</strong></p>
      <p>Un <strong>rayon lumineux</strong> est une ligne droite fléchée qui représente la marche de la lumière ; la flèche indique le sens de propagation. Un <strong>faisceau lumineux</strong> est un ensemble de rayons lumineux issus d'une même source (on le rend visible avec de la poussière de craie dans une salle sombre). Un faisceau peut être divergent, convergent ou parallèle.</p>
      <h3>La chambre noire</h3>
      <p>Une chambre noire est une boîte opaque percée d'un petit trou, le <strong>sténopé</strong>, avec un <strong>écran</strong> translucide sur la face opposée. L'image d'une bougie s'y forme <strong>renversée</strong> (haut et bas inversés) et inversée (gauche et droite échangées). Cette inversion s'explique par la <strong>propagation rectiligne de la lumière</strong> : le rayon issu du haut de la flamme passe par le sténopé et arrive en bas de l'écran. Ainsi l'image de la lettre « p » est un « d », et celle de « q » est un « b ». Plus on rapproche la bougie du sténopé, plus l'image est grande.</p>
      <h3>Vitesse de la lumière et année-lumière</h3>
      <p>Dans le vide, la lumière se propage à <strong>300 000 km/s</strong> (soit 300 000 000 m/s). L'<strong>année-lumière (a.l)</strong> est la <strong>distance</strong> parcourue par la lumière en une année : 1 a.l = 365 × 24 × 3600 × 300 000 ≈ <strong>9,46 × 10¹² km</strong>.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> l'année-lumière n'est pas une durée mais une <strong>distance</strong>. Si la lumière d'une étoile met 4,2 ans pour nous parvenir, cette étoile est à 4,2 a.l de la Terre.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Calcule le temps mis par la lumière du soleil pour arriver sur Terre (distance Soleil-Terre : 150 000 000 km).<br>v = d / t, donc t = d / v = 150 000 000 / 300 000 = <strong>500 s</strong>, soit <strong>8 min 20 s</strong>.</p>
      <p>Orage : on voit l'éclair (source primaire naturelle) avant d'entendre le tonnerre car la lumière (300 000 000 m/s) va environ un million de fois plus vite que le son (330 m/s), alors que les deux phénomènes se produisent en même temps.</p>
      <h3>📌 Point du programme à ne pas manquer : voir un objet</h3><p>Pour voir un objet, l'œil doit <strong>recevoir</strong> de la lumière venant de cet objet (l'œil n'envoie pas de lumière). Si un objet opaque s'intercale entre l'œil et l'objet, la lumière, qui va en ligne droite, est arrêtée : on ne voit plus l'objet. C'est aussi ce qui explique les taches lumineuses rondes sur le sol d'une maison dont le toit est percé.</p>`,
      quiz: [
        {q:"Dans un milieu transparent et homogène, la lumière se propage...", options:["en zigzag","en ligne droite","en cercle","uniquement vers le haut"], correct:1, exp:"C'est la propagation rectiligne de la lumière."},
        {q:"Le papier calque est un corps...", options:["transparent","translucide","opaque","homogène et transparent"], correct:1, exp:"Il laisse passer partiellement la lumière : il est translucide."},
        {q:"Un faisceau lumineux est...", options:["un seul rayon","un ensemble de rayons issus d'une même source","une source de lumière","une ombre"], correct:1, exp:"Un faisceau lumineux est un ensemble de rayons lumineux issus d'une même source."},
        {q:"L'image d'une bougie dans une chambre noire est...", options:["droite et de même sens","renversée","toujours plus petite","invisible"], correct:1, exp:"L'image est renversée (et inversée) à cause de la propagation rectiligne de la lumière."},
        {q:"Dans une chambre noire, l'image de la lettre « p » est...", options:["p","q","d","b"], correct:2, exp:"L'image est renversée et inversée : « p » devient « d »."},
        {q:"La vitesse de la lumière dans le vide vaut...", options:["330 m/s","300 000 km/s","300 km/s","3 000 km/h"], correct:1, exp:"c = 300 000 km/s = 300 000 000 m/s. 330 m/s est la vitesse du son dans l'air."},
        {q:"L'année-lumière est...", options:["une durée d'un an","la distance parcourue par la lumière en un an","la distance Soleil-Terre","le temps pour parcourir 1 km"], correct:1, exp:"L'année-lumière est une unité de distance : environ 9,46 × 10¹² km."},
        {q:"Quand on rapproche la bougie du sténopé, la taille de l'image...", options:["diminue","augmente","ne varie pas","devient nulle"], correct:1, exp:"Plus l'objet est proche du sténopé, plus son image sur l'écran est grande."}
      ]
    },
    {
      id: "pc3",
      title: "Optique — Les phases de la Lune et les éclipses",
      content: `<p>Un objet opaque éclairé par une source présente trois zones d'ombre :</p>
      <ul>
        <li>l'<strong>ombre propre</strong> : la partie de l'objet qui ne reçoit pas la lumière ;</li>
        <li>l'<strong>ombre portée</strong> : l'ombre de l'objet projetée sur l'écran (ou le sol) ;</li>
        <li>le <strong>cône d'ombre</strong> : la zone non éclairée située entre l'ombre propre et l'ombre portée.</li>
      </ul>
      <p>Avec une source étendue, il existe aussi une <strong>pénombre</strong> : zone partiellement éclairée autour de l'ombre.</p>
      <h3>Les phases de la Lune</h3>
      <p>La Lune est éclairée en permanence par le Soleil (une moitié éclairée, une moitié dans l'ombre propre). Selon sa position autour de la Terre, l'observateur terrestre voit une partie plus ou moins grande de sa face éclairée : ce sont les <strong>phases de la Lune</strong>. Dans l'ordre :</p>
      <p><strong>Nouvelle Lune</strong> (on ne la voit pas : Soleil, Lune, Terre alignés dans cet ordre) → <strong>premier croissant</strong> (visible à l'ouest, après le coucher du soleil) → <strong>premier quartier</strong> → <strong>première lune gibbeuse</strong> → <strong>pleine Lune</strong> (Soleil, Terre, Lune alignés ; elle se lève à l'est) → <strong>deuxième (dernière) lune gibbeuse</strong> → <strong>dernier quartier</strong> → <strong>dernier croissant</strong> (visible à l'est avant le lever du jour).</p>
      <p>Une <strong>lunaison</strong> (cycle complet) dure en moyenne <strong>29 jours et 13 heures</strong> (environ 29,5 jours).</p>
      <h3>Les éclipses</h3>
      <p><strong>Éclipse de Soleil</strong> : elle se produit à la <strong>nouvelle Lune</strong>. Soleil, Lune et Terre sont alignés <strong>dans cet ordre</strong> ; la Terre est dans le <strong>cône d'ombre de la Lune</strong>. Dans l'ombre pure, le Soleil est entièrement caché : <strong>éclipse totale</strong> (il fait nuit en plein jour). Dans la pénombre, on ne voit qu'une partie du Soleil : <strong>éclipse partielle</strong>.</p>
      <p><strong>Éclipse de Lune</strong> : elle se produit à la <strong>pleine Lune</strong>. Soleil, Terre et Lune sont alignés <strong>dans cet ordre</strong> ; la Lune entre dans le <strong>cône d'ombre de la Terre</strong>. Totale si la Lune y entre entièrement, partielle sinon.</p>
      <p><strong>Points communs</strong> : les centres des astres sont alignés, la source de lumière est le Soleil, un astre se trouve dans le cône d'ombre de l'autre.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> il n'y a pas d'éclipse à chaque nouvelle ou pleine Lune, car l'orbite de la Lune est inclinée d'environ 5° par rapport à celle de la Terre : les trois astres ne sont pas toujours parfaitement alignés. Une éclipse de Lune peut s'observer sans danger à l'œil nu, contrairement à une éclipse de Soleil.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Complète : on observe une éclipse de Soleil à la <strong>nouvelle Lune</strong> ; une éclipse de Lune pendant la <strong>pleine Lune</strong> ; pendant l'éclipse de Soleil, la Terre est dans le cône d'ombre de <strong>la Lune</strong> ; pendant l'éclipse de Lune, la Lune est dans <strong>le cône d'ombre</strong> de la Terre.</p>
      <p>Prévision : si la nouvelle Lune a lieu le 2 février, la suivante aura lieu environ 29,5 jours plus tard, soit vers le <strong>3 mars</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : l'ordre d'alignement</h3><p>C'est le piège le plus fréquent. <strong>S – L – T</strong> (la Lune au milieu) : nouvelle Lune et éventuelle <strong>éclipse de Soleil</strong>. <strong>S – T – L</strong> (la Terre au milieu) : pleine Lune et éventuelle <strong>éclipse de Lune</strong>. Retenir : l'astre « caché » est celui qui se trouve au bout de l'alignement, derrière l'astre qui fait de l'ombre.</p>`,
      quiz: [
        {q:"L'ombre propre est...", options:["l'ombre de l'objet sur l'écran","la partie de l'objet qui ne reçoit pas la lumière","la zone entre l'objet et l'écran","une source de lumière"], correct:1, exp:"L'ombre propre est la partie non éclairée de l'objet lui-même."},
        {q:"L'ombre portée est...", options:["l'ombre de l'objet projetée sur l'écran","la partie sombre de l'objet","la pénombre","le cône d'ombre"], correct:0, exp:"L'ombre portée est la tache d'ombre de l'objet sur l'écran ou le sol."},
        {q:"Une éclipse de Soleil se produit lors de la...", options:["pleine Lune","nouvelle Lune","premier quartier","dernière gibbeuse"], correct:1, exp:"À la nouvelle Lune, la Lune est entre le Soleil et la Terre et peut projeter son ombre sur la Terre."},
        {q:"Pendant une éclipse de Lune, les astres sont alignés dans l'ordre...", options:["Soleil – Lune – Terre","Soleil – Terre – Lune","Lune – Soleil – Terre","Terre – Soleil – Lune"], correct:1, exp:"La Terre est au milieu : la Lune entre dans le cône d'ombre de la Terre."},
        {q:"Pendant une éclipse de Soleil...", options:["la Lune est dans le cône d'ombre de la Terre","la Terre est dans le cône d'ombre de la Lune","le Soleil est dans l'ombre de la Terre","aucun astre n'est aligné"], correct:1, exp:"C'est l'ombre de la Lune qui atteint la Terre."},
        {q:"Quelle phase vient juste après le premier quartier ?", options:["Premier croissant","Pleine Lune","Première lune gibbeuse","Dernier quartier"], correct:2, exp:"Ordre : nouvelle Lune, premier croissant, premier quartier, première gibbeuse, pleine Lune..."},
        {q:"La durée moyenne d'une lunaison est d'environ...", options:["7 jours","24 heures","29 jours et 13 heures","365 jours"], correct:2, exp:"Une lunaison dure en moyenne environ 29,5 jours (29 j 13 h)."}
      ]
    },
    {
      id: "pc4",
      title: "Optique — Analyse et synthèse de la lumière blanche",
      content: `<p><strong>Analyse (décomposition)</strong> : un faisceau de lumière blanche qui traverse un <strong>verre d'eau</strong> ou un <strong>prisme</strong> donne une bande colorée. La lumière blanche est donc constituée de plusieurs couleurs. Les <strong>sept couleurs</strong> visibles, dans l'ordre, sont : <strong>violet, indigo, bleu, vert, jaune, orange, rouge</strong>. On peut aussi décomposer la lumière blanche avec un réseau ou un disque compact (CD).</p>
      <p><strong>L'arc-en-ciel</strong> présente les mêmes sept couleurs. Il est dû à la décomposition de la lumière blanche du soleil par les <strong>gouttelettes d'eau</strong> en suspension dans l'air. Pour l'observer, il faut avoir <strong>le dos tourné au soleil</strong>.</p>
      <h3>Synthèse de la lumière blanche</h3>
      <p>Le <strong>disque de Newton</strong> (disque peint des sept couleurs) paraît <strong>blanc</strong> quand il tourne vite. Avec trois projecteurs, la superposition des trois <strong>couleurs primaires</strong> (rouge, vert, bleu) donne du <strong>blanc</strong> :</p>
      <ul>
        <li>rouge + vert + bleu = <strong>blanc</strong> ;</li>
        <li>rouge + bleu = <strong>magenta</strong> ;</li>
        <li>rouge + vert = <strong>jaune</strong> ;</li>
        <li>bleu + vert = <strong>cyan</strong>.</li>
      </ul>
      <p>Reconstituer la lumière blanche en superposant ses couleurs s'appelle la <strong>synthèse</strong> de la lumière blanche.</p>
      <h3>Filtres et couleur des objets</h3>
      <p>Un <strong>filtre</strong> absorbe certaines couleurs de la lumière blanche et laisse passer les autres, qui lui donnent sa couleur : il permet d'obtenir une lumière colorée.</p>
      <p>La couleur d'un objet dépend de la <strong>lumière qui l'éclaire</strong> et des couleurs qu'il <strong>diffuse</strong> (renvoie) ou <strong>absorbe</strong>. Un objet vert absorbe toutes les couleurs sauf le vert, qu'il diffuse. Un objet <strong>blanc</strong> diffuse toutes les couleurs ; un objet <strong>noir</strong> les absorbe toutes. La <strong>couleur propre</strong> d'un objet est celle qu'il a en lumière blanche.</p>
      <p>Éclairé par une lumière colorée : si cette lumière ne contient que des couleurs que l'objet absorbe, il paraît <strong>noir</strong> (objet rouge en lumière bleue → noir). S'il diffuse la couleur reçue, il la garde (objet rouge en lumière rouge → rouge ; objet blanc en lumière bleue → bleu).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> la lumière jaune d'un lampadaire contient du rouge et du vert. Une voiture bleue absorbe le rouge et le vert et ne renvoie que le bleu : sous ce lampadaire, elle n'a rien à renvoyer et paraît <strong>noire</strong>.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <table><tr><th>Surface</th><th>Lumière blanche</th><th>Lumière bleue</th><th>Lumière rouge</th></tr>
      <tr><td>Blanche</td><td>blanche</td><td>bleue</td><td>rouge</td></tr>
      <tr><td>Verte</td><td>verte</td><td>noire</td><td>noire</td></tr>
      <tr><td>Rouge</td><td>rouge</td><td>noire</td><td>rouge</td></tr>
      <tr><td>Noire</td><td>noire</td><td>noire</td><td>noire</td></tr></table>
      <p>Exemple : sous une veilleuse rouge, une chemisette blanche paraît rouge (elle renvoie le rouge) et une jupe bleue paraît noire (elle absorbe le rouge).</p>
      <h3>📌 Point du programme à ne pas manquer : couleurs complémentaires</h3><p>Deux lumières colorées qui, superposées, donnent du blanc sont dites <strong>complémentaires</strong>. Comme jaune = rouge + vert, on a <strong>jaune + bleu = blanc</strong>. De même cyan + rouge = blanc et magenta + vert = blanc. Attention : ceci vaut pour les <strong>lumières</strong> qui s'ajoutent, pas pour le mélange de peintures.</p>`,
      quiz: [
        {q:"Combien de couleurs visibles compte la lumière blanche décomposée ?", options:["3","5","7","12"], correct:2, exp:"Violet, indigo, bleu, vert, jaune, orange, rouge : 7 couleurs."},
        {q:"L'arc-en-ciel est dû à la décomposition de la lumière du soleil par...", options:["les nuages noirs","les gouttelettes d'eau","la Lune","le vent"], correct:1, exp:"Les gouttelettes d'eau en suspension décomposent la lumière blanche comme un prisme."},
        {q:"Rouge + vert donnent...", options:["du cyan","du magenta","du jaune","du blanc"], correct:2, exp:"La superposition des lumières rouge et verte donne du jaune."},
        {q:"Rouge + vert + bleu donnent...", options:["du noir","du blanc","du marron","du violet"], correct:1, exp:"Les trois couleurs primaires superposées reconstituent la lumière blanche."},
        {q:"Un objet rouge éclairé en lumière bleue paraît...", options:["rouge","bleu","noir","violet"], correct:2, exp:"Il absorbe le bleu et n'a pas de rouge à renvoyer : il paraît noir."},
        {q:"Un objet blanc éclairé en lumière rouge paraît...", options:["blanc","rouge","noir","vert"], correct:1, exp:"Un objet blanc renvoie toutes les couleurs qu'il reçoit : ici, seulement du rouge."},
        {q:"Le disque de Newton en rotation rapide paraît...", options:["noir","multicolore","blanc","rouge"], correct:2, exp:"La superposition rapide des couleurs donne une impression de blanc : c'est une synthèse."},
        {q:"Un filtre vert éclairé en lumière blanche...", options:["laisse passer toutes les couleurs","absorbe le vert","laisse passer le vert et absorbe les autres couleurs","produit de la lumière blanche"], correct:2, exp:"Un filtre absorbe certaines couleurs et laisse passer celle qui lui donne sa couleur."}
      ]
    },
    {
      id: "pc5",
      title: "Courants et tensions alternatifs — Aimant et bobine",
      content: `<p>Un <strong>aimant</strong> (droit, en U, cylindrique) est un corps qui attire le <strong>fer</strong>, le <strong>nickel</strong>, le <strong>cobalt</strong> et les objets faits à partir de ces métaux : il a une propriété <strong>magnétique</strong>. L'attraction est la plus forte à ses extrémités, appelées les <strong>pôles</strong>.</p>
      <p>Un aimant possède <strong>deux pôles</strong> : un <strong>pôle nord (N)</strong> et un <strong>pôle sud (S)</strong>. Suspendu librement (comme l'aiguille d'une boussole), son pôle nord s'oriente vers le nord géographique. On identifie les pôles d'un aimant avec une aiguille aimantée.</p>
      <p><strong>Interactions entre deux aimants</strong> : deux pôles de <strong>même nom se repoussent</strong> ; deux pôles de <strong>noms différents s'attirent</strong>.</p>
      <h3>La bobine</h3>
      <p>Une <strong>bobine</strong> est un long fil conducteur en cuivre isolé (gainé), enroulé généralement sur un support cylindrique. Parcourue par un courant électrique, elle <strong>se comporte comme un aimant</strong> : elle possède une <strong>face nord</strong> et une <strong>face sud</strong>, et attire ou repousse les aiguilles aimantées. La nature des faces <strong>dépend du sens du courant</strong> : si on inverse les bornes de la pile, les faces s'échangent. Circuit ouvert : aucun effet.</p>
      <h3>L'électroaimant</h3>
      <p>Un <strong>électroaimant</strong> est une bobine parcourue par un courant, à l'intérieur de laquelle passe une tige en fer appelée <strong>noyau</strong>. Avec un noyau de <strong>fer doux</strong>, la bobine attire davantage. Son aimantation disparaît dès qu'on coupe le courant.</p>
      <p>Applications : le <strong>relais</strong> (interrupteur actionné par un électroaimant, utilisé par exemple dans l'éclairage public), le <strong>télérupteur</strong> (fonctionne comme un relais), les sonnettes, les grues de ferraille.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> pour reconnaître un pôle à coup sûr, il faut une <strong>répulsion</strong>. Une attraction ne prouve rien, car un pôle attire aussi un simple morceau de fer non aimanté.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Trois aimants droits AB, CD et EF : A attire C, D repousse E, F est un pôle sud.</p>
      <p>F est sud, donc E (l'autre extrémité du même aimant) est <strong>nord</strong>. D repousse E : même nom, donc D est <strong>nord</strong> et C est <strong>sud</strong>. A attire C (sud) : noms différents, donc A est <strong>nord</strong> et B est <strong>sud</strong>.</p>
      <p>Interactions : A (N) et E (N) → <strong>répulsion</strong> ; E (N) et B (S) → <strong>attraction</strong> ; A (N) et F (S) → <strong>attraction</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : aimant permanent ou électroaimant ?</h3><p>Un aimant ordinaire est <strong>permanent</strong> : il garde ses pôles. Un électroaimant est un aimant <strong>commandé</strong> : il n'agit que lorsque le courant passe, et l'on peut inverser ses faces en inversant le sens du courant. C'est cette possibilité d'allumer et d'éteindre l'aimantation qui le rend utile dans les relais et télérupteurs.</p>`,
      quiz: [
        {q:"Un aimant attire...", options:["tous les métaux","le fer, le nickel et le cobalt","le bois et le plastique","uniquement le cuivre"], correct:1, exp:"Un aimant attire le fer, le nickel, le cobalt et les objets faits de ces métaux, pas le cuivre ni l'aluminium."},
        {q:"Combien de pôles possède un aimant ?", options:["Un seul","Deux : nord et sud","Trois","Quatre"], correct:1, exp:"Tout aimant possède un pôle nord et un pôle sud."},
        {q:"Deux pôles de même nom...", options:["s'attirent","se repoussent","n'interagissent pas","s'annulent"], correct:1, exp:"Deux pôles de même nom se repoussent ; deux pôles de noms différents s'attirent."},
        {q:"Une bobine parcourue par un courant se comporte comme...", options:["un isolant","un aimant","une lampe","une pile"], correct:1, exp:"Elle possède alors une face nord et une face sud, comme un aimant."},
        {q:"La nature des faces d'une bobine dépend...", options:["de sa couleur","du sens du courant","de sa masse","de la température"], correct:1, exp:"Si on inverse le sens du courant, la face nord devient face sud et inversement."},
        {q:"Un électroaimant est formé...", options:["d'un aimant et d'une lampe","d'une bobine parcourue par un courant avec un noyau de fer","de deux aimants collés","d'une pile seule"], correct:1, exp:"Électroaimant = bobine + courant + noyau de fer (doux)."},
        {q:"Laquelle est une application de l'électroaimant ?", options:["La loupe","Le relais","Le thermomètre","Le prisme"], correct:1, exp:"Le relais et le télérupteur sont des interrupteurs actionnés par un électroaimant."}
      ]
    },
    {
      id: "pc6",
      title: "Courants et tensions alternatifs — Production d'une tension alternative",
      content: `<p><strong>Expérience</strong> : on relie une bobine à un galvanomètre et on fait tourner un aimant devant une de ses faces. L'aiguille du galvanomètre dévie <strong>dans un sens puis dans l'autre</strong>.</p>
      <p><strong>Conclusion</strong> : le déplacement d'un aimant au voisinage de la face d'une bobine fait apparaître une <strong>tension</strong> (et un courant) dans le circuit de celle-ci. Un aimant <strong>fixe</strong> devant une bobine fixe ne produit <strong>aucune</strong> tension.</p>
      <p>Avec deux DEL montées tête-bêche, elles s'allument <strong>l'une après l'autre</strong> : le courant change de sens. La tension produite n'a pas un seul sens : c'est une <strong>tension alternative</strong> (comme celle d'un générateur très basse fréquence, GTBF).</p>
      <h3>Visualisation à l'oscilloscope</h3>
      <p>L'<strong>oscilloscope</strong> est un appareil électronique qui permet de visualiser une tension sur son écran (le spot trace une courbe).</p>
      <ul>
        <li>Aux bornes d'une <strong>pile</strong> : on observe une <strong>droite horizontale</strong>, au-dessus ou en dessous de zéro. La tension ne varie pas : c'est une <strong>tension continue</strong>.</li>
        <li>Aux bornes de la bobine devant laquelle tourne l'aimant : on observe une <strong>courbe qui varie et change de signe</strong>, tantôt positive, tantôt négative : c'est une <strong>tension alternative</strong>.</li>
      </ul>
      <h3>Production industrielle : l'alternateur</h3>
      <p>Un <strong>alternateur</strong> est constitué de deux parties : le <strong>rotor</strong>, partie tournante qui comporte un <strong>aimant</strong>, et le <strong>stator</strong>, partie fixe qui comporte une <strong>bobine</strong>.</p>
      <ul>
        <li><strong>Génératrice de bicyclette</strong> : la roue fait tourner le <strong>galet</strong>, qui entraîne l'aimant devant la bobine ; une tension alternative alimente le phare. Quand le vélo s'arrête, l'aimant ne tourne plus et le phare s'éteint.</li>
        <li><strong>Centrale hydroélectrique</strong> (barrages de Kossou, Taabo, Buyo, Soubré, Ayamé) : le mouvement de l'eau fait tourner une turbine reliée à un alternateur.</li>
        <li><strong>Centrale thermique</strong> (Azito) : on brûle du gaz, du pétrole ou du charbon pour transformer l'eau en vapeur ; les jets de vapeur font tourner une turbine qui entraîne un alternateur.</li>
      </ul>
      <p><strong>🔎 Pour aller plus loin :</strong> en Côte d'Ivoire, la majorité de l'électricité (environ 72 %) est produite par des centrales thermiques au gaz naturel, le reste par l'hydroélectricité.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Une génératrice de bicyclette : (1) ses deux parties sont le <strong>stator</strong> (une bobine) et le <strong>rotor</strong> (un aimant) ; (2) la partie mobile est l'aimant, la partie en contact avec la roue est le galet ; (3) à l'oscilloscope, on voit une tension <strong>alternative</strong>, tantôt positive, tantôt négative.</p>
      <h3>📌 Point du programme à ne pas manquer : continue ou alternative ?</h3><p>Une tension <strong>continue</strong> garde toujours le même signe et la même valeur (pile, batterie) : sur l'oscilloscope, c'est une droite horizontale. Une tension <strong>alternative</strong> est variable et <strong>change de signe</strong> au cours du temps (génératrice, alternateur, secteur). Pour produire une tension alternative, il faut un <strong>mouvement</strong> relatif entre l'aimant et la bobine.</p>`,
      quiz: [
        {q:"Que se passe-t-il quand on fait tourner un aimant devant une bobine reliée à un galvanomètre ?", options:["Rien","L'aiguille dévie dans un sens puis dans l'autre","L'aiguille reste bloquée d'un côté","La bobine fond"], correct:1, exp:"Le mouvement de l'aimant produit une tension alternative : l'aiguille dévie dans les deux sens."},
        {q:"Un aimant fixe devant une bobine fixe produit...", options:["une tension continue","une tension alternative","aucune tension","une tension très forte"], correct:2, exp:"Il faut un mouvement relatif entre l'aimant et la bobine pour produire une tension."},
        {q:"À l'oscilloscope, la tension d'une pile apparaît comme...", options:["une sinusoïde","une droite horizontale","des créneaux","un point fixe au centre"], correct:1, exp:"La tension d'une pile est continue : une droite horizontale au-dessus (ou en dessous) de zéro."},
        {q:"Une tension alternative est une tension...", options:["constante","qui change de signe au cours du temps","toujours nulle","toujours positive"], correct:1, exp:"Elle varie et est tantôt positive, tantôt négative."},
        {q:"Dans un alternateur, le rotor comporte...", options:["une bobine fixe","un aimant qui tourne","une pile","une lampe"], correct:1, exp:"Le rotor (partie tournante) porte l'aimant ; le stator (partie fixe) porte la bobine."},
        {q:"Dans une centrale thermique, la turbine est entraînée par...", options:["le vent","des jets de vapeur d'eau","la lumière du soleil","une chute d'eau"], correct:1, exp:"On brûle un combustible pour vaporiser l'eau ; la vapeur fait tourner la turbine."},
        {q:"Quel appareil permet de visualiser une tension ?", options:["Le galvanomètre","L'oscilloscope","Le thermomètre","La balance"], correct:1, exp:"L'oscilloscope affiche la courbe de la tension en fonction du temps."}
      ]
    },
    {
      id: "pc7",
      title: "Courants et tensions alternatifs — Tension alternative sinusoïdale",
      content: `<p>Certains générateurs donnent, à l'oscilloscope, une courbe régulière en forme d'onde (sinusoïde) qui s'annule et change de sens au cours du temps : c'est une <strong>tension alternative sinusoïdale</strong>.</p>
      <h3>Les quatre caractéristiques</h3>
      <ul>
        <li>La <strong>période T</strong> : durée minimale au bout de laquelle le phénomène se reproduit à l'identique (une alternance positive + une alternance négative). Unité : la <strong>seconde (s)</strong>.</li>
        <li>La <strong>fréquence N</strong> : nombre de périodes par seconde ; c'est l'inverse de la période : <strong>N = 1 / T</strong>. Unité : le <strong>hertz (Hz)</strong>.</li>
        <li>La <strong>tension maximale U<sub>max</sub></strong> : la plus grande valeur atteinte par la courbe, en volts (V).</li>
        <li>La <strong>tension efficace U<sub>eff</sub></strong> : la tension mesurée avec un <strong>voltmètre</strong>, en volts (V).</li>
      </ul>
      <p><strong>Relation</strong> : U<sub>max</sub> / U<sub>eff</sub> = 1,41, donc <strong>U<sub>max</sub> = 1,41 × U<sub>eff</sub></strong> et <strong>U<sub>eff</sub> = U<sub>max</sub> / 1,41</strong>.</p>
      <h3>Lire un oscillogramme</h3>
      <p>On compte des <strong>divisions</strong> et on multiplie par le réglage (la sensibilité) de l'oscilloscope :</p>
      <ul>
        <li>U<sub>max</sub> = (nombre de divisions verticales entre 0 et le sommet) × (volts par division) ;</li>
        <li>T = (nombre de divisions horizontales pour une période) × (millisecondes par division).</li>
      </ul>
      <p><strong>🔎 Pour aller plus loin :</strong> pour calculer N = 1/T, il faut d'abord convertir T en <strong>secondes</strong> : 20 ms = 0,02 s. Oublier la conversion donne une fréquence 1000 fois trop petite.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Réglages : 5 V par division verticalement, 5 ms par division horizontalement. La courbe monte de 3 divisions et une période occupe 4 divisions.</p>
      <p>U<sub>max</sub> = 3 × 5 = <strong>15 V</strong> ; T = 4 × 5 = 20 ms = <strong>0,02 s</strong> ; N = 1 / 0,02 = <strong>50 Hz</strong> ; U<sub>eff</sub> = 15 / 1,41 ≈ <strong>10,6 V</strong>.</p>
      <p>Autre exemple : un appareil indique N = 100 Hz et un voltmètre mesure 200 V. La tension est alternative sinusoïdale ; 100 Hz est la fréquence ; U<sub>max</sub> = 1,41 × 200 = <strong>282 V</strong> ; T = 1 / 100 = <strong>0,01 s</strong> (10 ms).</p>
      <h3>📌 Point du programme à ne pas manquer : période ↔ fréquence</h3><p>Il faut savoir passer de l'une à l'autre dans les deux sens : T = 1/N et N = 1/T. Exemples du cours : T = 2 ms → N = 500 Hz ; T = 10 ms → N = 100 Hz ; N = 4 Hz → T = 250 ms ; N = 2000 Hz → T = 0,5 ms. Plus la période est courte, plus la fréquence est grande.</p>`,
      quiz: [
        {q:"La fréquence N et la période T sont liées par...", options:["N = T","N = 1/T","N = 2T","N = T²"], correct:1, exp:"La fréquence est l'inverse de la période : N = 1/T (T en secondes, N en hertz)."},
        {q:"L'unité de la fréquence est...", options:["le volt","la seconde","le hertz","l'ampère"], correct:2, exp:"La fréquence s'exprime en hertz (Hz)."},
        {q:"La tension efficace se mesure avec...", options:["un oscilloscope uniquement","un voltmètre","une règle","un ampèremètre"], correct:1, exp:"Le voltmètre (en mode alternatif) affiche la tension efficace."},
        {q:"La relation entre Umax et Ueff est...", options:["Umax = Ueff","Umax = 1,41 × Ueff","Ueff = 1,41 × Umax","Umax = Ueff / 2"], correct:1, exp:"Umax = 1,41 × Ueff, donc Ueff = Umax / 1,41."},
        {q:"Une période dure 20 ms. La fréquence vaut...", options:["20 Hz","50 Hz","0,02 Hz","500 Hz"], correct:1, exp:"T = 20 ms = 0,02 s ; N = 1/0,02 = 50 Hz."},
        {q:"Laquelle n'est PAS une caractéristique d'une tension alternative sinusoïdale ?", options:["La période","La fréquence","La tension maximale","La couleur"], correct:3, exp:"Les quatre caractéristiques sont : période, fréquence, tension maximale et tension efficace."},
        {q:"Sur l'oscillogramme, la courbe atteint 4 divisions avec un réglage de 5 V/div. Umax vaut...", options:["9 V","20 V","1,25 V","4 V"], correct:1, exp:"Umax = 4 × 5 = 20 V."}
      ]
    },
    {
      id: "pc8",
      title: "Courants et tensions alternatifs — Les dangers du courant du secteur",
      content: `<p>Le <strong>courant du secteur</strong> est le courant fourni par le réseau de distribution d'électricité ; en Côte d'Ivoire, c'est la <strong>CIE</strong> qui le distribue. C'est une <strong>tension alternative sinusoïdale</strong> de caractéristiques :</p>
      <ul>
        <li>tension efficace <strong>U<sub>eff</sub> = 220 V</strong> ;</li>
        <li>tension maximale <strong>U<sub>max</sub> = 1,41 × 220 ≈ 310 V</strong> ;</li>
        <li>fréquence <strong>N = 50 Hz</strong> ;</li>
        <li>période <strong>T = 1/50 = 0,02 s = 20 ms</strong>.</li>
      </ul>
      <p><strong>Bornes d'une prise</strong> : une prise du secteur a trois bornes : la <strong>phase (P)</strong> — la seule pour laquelle la lampe témoin s'allume —, le <strong>neutre (N)</strong> et la <strong>terre (T)</strong>. Une prise simple n'a que deux bornes femelles (phase et neutre). Le fil de phase est reconnaissable à sa couleur <strong>rouge ou marron</strong>.</p>
      <h3>Les dangers</h3>
      <ul>
        <li><strong>Électrisation</strong> : dommage causé à un organisme vivant par le passage du courant, entraînant un choc violent (brûlure, tremblement, tétanisation, asphyxie, arrêt cardiaque).</li>
        <li><strong>Électrocution</strong> : dommage causé par le passage du courant entraînant le <strong>décès</strong>.</li>
        <li><strong>Court-circuit</strong> : connexion des bornes d'un élément du circuit par un fil de connexion (par exemple le fil de phase qui touche le fil neutre).</li>
      </ul>
      <p><strong>Pour les personnes</strong> : le corps humain est conducteur ; à partir de <strong>25 V</strong> le courant qui le traverse devient dangereux. Il y a danger si le corps relie la phase et le neutre, ou la phase et la terre.</p>
      <p><strong>Pour les installations</strong> : le <strong>court-circuit</strong> (contact direct phase-neutre) et la <strong>surcharge</strong> (trop d'appareils sur une même prise, ce qui provoque une surintensité) font chauffer les fils : détérioration des appareils, destruction des isolants, <strong>incendies</strong>.</p>
      <h3>Dispositifs de protection</h3>
      <ul>
        <li><strong>Fusible</strong> : petit fil qui fond quand l'intensité devient trop élevée, ouvrant le circuit.</li>
        <li><strong>Disjoncteur général</strong> : coupe l'électricité du bâtiment quand l'intensité totale dépasse la valeur souscrite.</li>
        <li><strong>Stabilisateur</strong> : délivre une tension stable malgré les variations du secteur.</li>
        <li><strong>Onduleur</strong> : stabilisateur + accumulateur ; en cas de coupure, il fournit le courant accumulé, le temps d'éteindre l'appareil.</li>
        <li><strong>Prise de terre</strong> (protège les personnes) : en cas de contact accidentel, le courant passe par le fil de terre plutôt que par le corps.</li>
        <li><strong>Disjoncteur différentiel</strong> (protège les personnes) : coupe le circuit dès que la différence d'intensité entre phase et neutre atteint <strong>30 mA</strong>.</li>
      </ul>
      <h3>Règles de sécurité</h3>
      <p>Débrancher un appareil avant toute réparation ; couper le courant avant toute intervention, même pour changer une ampoule ; ne pas brancher trop d'appareils sur une même prise ; ne jamais manipuler un appareil branché avec les mains ou les pieds mouillés ; ne jamais toucher un fil dénudé ; ne jamais introduire d'objet métallique dans une prise.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Avec un voltmètre, on mesure 230 V entre les bornes A et B, 0 V entre B et C, 230 V entre A et C. Les seules tensions non nulles impliquent A : la <strong>phase est la borne A</strong> (B et C sont le neutre et la terre).</p>
      <p>Calcul : pour U<sub>eff</sub> = 230 V, U<sub>max</sub> = 1,41 × 230 = <strong>324,3 V</strong>. Une maison où l'on mesure seulement 120 V (U<sub>max</sub> = 169,2 V) a des lampes qui éclairent faiblement : la tension est trop basse (sous-tension).</p>
      <h3>📌 Point du programme à ne pas manquer : qui protège quoi ?</h3><p>Le <strong>fusible</strong> et le <strong>disjoncteur général</strong> protègent les <strong>installations et les appareils</strong> (surintensité, court-circuit). La <strong>prise de terre</strong> et le <strong>disjoncteur différentiel</strong> protègent les <strong>personnes</strong>. Exemple : une fillette touche la carcasse d'un réfrigérateur et est électrisée : il manquait la <strong>prise de terre</strong>.</p>`,
      quiz: [
        {q:"En Côte d'Ivoire, le courant du secteur est distribué par...", options:["la SODECI","la CIE","l'ANADER","la RTI"], correct:1, exp:"La CIE distribue l'électricité ; la SODECI distribue l'eau."},
        {q:"La tension efficace du secteur vaut...", options:["12 V","110 V","220 V","310 V"], correct:2, exp:"Ueff = 220 V ; sa tension maximale vaut environ 310 V."},
        {q:"La fréquence du courant du secteur est...", options:["50 Hz","60 Hz","220 Hz","20 Hz"], correct:0, exp:"N = 50 Hz, donc T = 0,02 s = 20 ms."},
        {q:"Les trois bornes d'une prise du secteur sont...", options:["plus, moins, terre","phase, neutre, terre","entrée, sortie, masse","nord, sud, terre"], correct:1, exp:"Phase (P), neutre (N) et terre (T)."},
        {q:"L'électrocution est...", options:["un court-circuit","un choc électrique sans gravité","un dommage dû au courant entraînant la mort","une panne de courant"], correct:2, exp:"L'électrocution entraîne le décès ; l'électrisation est un choc sans décès."},
        {q:"Un court-circuit se produit quand...", options:["on éteint la lumière","le fil de phase touche directement le fil neutre","on branche une seule lampe","on utilise un fusible"], correct:1, exp:"Le contact direct phase-neutre provoque un court-circuit : les fils chauffent, risque d'incendie."},
        {q:"Quel dispositif protège les personnes en coupant le courant dès 30 mA de fuite ?", options:["Le fusible","Le stabilisateur","Le disjoncteur différentiel","L'onduleur"], correct:2, exp:"Le disjoncteur différentiel coupe dès que la différence phase/neutre atteint 30 mA."},
        {q:"À partir de quelle tension le courant devient-il dangereux pour le corps humain ?", options:["1,5 V","25 V","1000 V","Jamais"], correct:1, exp:"Le cours retient qu'à partir de 25 V le courant qui traverse le corps devient dangereux."}
      ]
    },
    {
      id: "pc9",
      title: "Courants et tensions alternatifs — Transformation, redressement et lissage d'une tension",
      content: `<p>Le secteur délivre une tension alternative sinusoïdale de 220 V, mais beaucoup d'appareils (téléphone, ordinateur, jouet) ont besoin d'une petite <strong>tension continue</strong>. On passe de l'une à l'autre en trois étapes : <strong>transformer</strong>, <strong>redresser</strong>, <strong>lisser</strong>.</p>
      <h3>1. Le transformateur</h3>
      <p>Un <strong>transformateur</strong> est un <strong>quadripôle</strong> (4 bornes) constitué de <strong>deux bobines</strong> électriquement distinctes, couplées par un <strong>noyau</strong> de fer. Il comprend un <strong>circuit primaire</strong> (entrée) et un <strong>circuit secondaire</strong> (sortie). Il ne fonctionne qu'en <strong>courant alternatif</strong>.</p>
      <p>Il existe des transformateurs <strong>abaisseurs</strong> et <strong>élévateurs</strong> de tension. Le transformateur <strong>conserve la nature</strong> (alternative sinusoïdale) et la <strong>fréquence</strong> (même période) de la tension, mais <strong>modifie sa valeur maximale</strong>. Exemple : entrée U<sub>max</sub> = 6 V, sortie U<sub>max</sub> = 4 V → abaisseur.</p>
      <h3>2. Le redressement</h3>
      <p>Une <strong>diode</strong> est un composant qui ne laisse passer le courant que dans <strong>un seul sens</strong>, appelé <strong>sens passant</strong>.</p>
      <ul>
        <li><strong>Redressement simple alternance</strong> (une diode) : l'alternance positive est conservée, l'alternance négative est <strong>supprimée</strong> (la tension est nulle pendant ce temps).</li>
        <li><strong>Redressement double alternance</strong> (un <strong>pont de diodes</strong>, quadripôle à quatre diodes) : l'alternance positive est conservée et l'alternance négative est <strong>rendue positive</strong>.</li>
      </ul>
      <h3>3. Le lissage</h3>
      <p>Un <strong>condensateur</strong> branché à la sortie du pont de diodes <strong>lisse</strong> la tension redressée : à l'oscilloscope, on obtient une tension presque <strong>continue</strong> (une droite).</p>
      <h3>L'adaptateur</h3>
      <p>Un <strong>adaptateur</strong> (chargeur de téléphone, d'ordinateur) est constitué successivement d'un <strong>transformateur abaisseur</strong> (abaisse la tension), d'un <strong>pont de diodes</strong> (redresse) et d'un <strong>condensateur</strong> (lisse). Il transforme la tension alternative sinusoïdale du secteur en tension continue constante.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> sur l'étiquette d'un adaptateur, « Input 220-240 V ~ 50-60 Hz » décrit l'entrée (tension efficace et fréquence du secteur, alternative) et « Output 6 V — 250 mA » décrit la sortie (tension continue et intensité fournie).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Un transformateur branché sur le secteur délivre 12 V (lu au voltmètre). Vrai ou faux ? La tension de sortie est alternative : <strong>vrai</strong>. L'oscillogramme est une droite : <strong>faux</strong> (c'est une sinusoïde). La tension d'entrée est supérieure à celle de sortie : <strong>vrai</strong>. Entrée et sortie ont la même période : <strong>vrai</strong>. La tension maximale de sortie est d'environ 17 V : 1,41 × 12 ≈ 16,9 V, donc environ 17 V.</p>
      <p>Pour alimenter un jouet à piles (tension continue) à partir du secteur (tension alternative), on utilise un <strong>adaptateur</strong> de la bonne tension, par exemple 6 V.</p>
      <h3>📌 Point du programme à ne pas manquer : le rôle de chaque composant</h3><p>À retenir dans l'ordre du montage : <strong>transformateur → abaisse</strong> ; <strong>diode ou pont de diodes → redresse</strong> (simple ou double alternance) ; <strong>condensateur → lisse</strong>. Un transformateur seul ne donne jamais une tension continue : sa sortie reste alternative.</p>`,
      quiz: [
        {q:"Un transformateur possède...", options:["2 bornes","4 bornes (quadripôle)","6 bornes","une seule bobine"], correct:1, exp:"C'est un quadripôle : deux bornes d'entrée (primaire) et deux de sortie (secondaire)."},
        {q:"Un transformateur modifie...", options:["la fréquence de la tension","la nature de la tension","la valeur maximale de la tension","rien du tout"], correct:2, exp:"Il conserve la nature et la fréquence, mais modifie la valeur maximale."},
        {q:"Un transformateur fonctionne...", options:["uniquement en courant continu","uniquement en courant alternatif","avec une pile","sans courant"], correct:1, exp:"Le transformateur ne fonctionne qu'en courant alternatif."},
        {q:"Une diode laisse passer le courant...", options:["dans les deux sens","dans un seul sens","jamais","seulement la nuit"], correct:1, exp:"Elle ne conduit que dans son sens passant."},
        {q:"Avec un pont de diodes, l'alternance négative...", options:["est supprimée","devient positive","double de valeur","reste négative"], correct:1, exp:"Le pont de diodes réalise un redressement double alternance."},
        {q:"Quel composant lisse une tension redressée ?", options:["La diode","Le condensateur","Le transformateur","Le fusible"], correct:1, exp:"Le condensateur lisse la tension redressée, qui devient quasi continue."},
        {q:"Un adaptateur contient, dans l'ordre...", options:["condensateur, diode, pile","transformateur abaisseur, pont de diodes, condensateur","pont de diodes, transformateur, lampe","fusible, aimant, bobine"], correct:1, exp:"Transformer (abaisser), redresser (pont de diodes), lisser (condensateur)."}
      ]
    },
    {
      id: "pc10",
      title: "Les ions — Atomes et ions",
      content: `<p>L'<strong>atome</strong> est la plus petite particule de la matière (le cours le qualifie d'indivisible). Il est constitué d'un <strong>noyau</strong>, au centre, qui porte des charges électriques <strong>positives</strong>, et d'<strong>électrons</strong> qui gravitent autour du noyau et portent des charges <strong>négatives</strong>. Un atome contient autant de charges positives que de charges négatives : il est <strong>électriquement neutre</strong>.</p>
      <h3>L'ion</h3>
      <p>Un <strong>ion</strong> est un atome ou un assemblage d'atomes ayant <strong>gagné ou perdu</strong> un ou plusieurs électrons.</p>
      <ul>
        <li>S'il <strong>perd</strong> des électrons, il devient un ion <strong>positif</strong> : un <strong>cation</strong>. Exemples : ion cuivre II Cu²⁺, ion fer II Fe²⁺, ion fer III Fe³⁺, ion zinc Zn²⁺, ion hydrogène H⁺, ion sodium Na⁺, ion aluminium Al³⁺, ion calcium Ca²⁺.</li>
        <li>S'il <strong>gagne</strong> des électrons, il devient un ion <strong>négatif</strong> : un <strong>anion</strong>. Exemples : ion chlorure Cl⁻, ion hydroxyde OH⁻, ion carbonate CO₃²⁻, ion sulfate SO₄²⁻, ion nitrate NO₃⁻, ion permanganate MnO₄⁻, ion dichromate Cr₂O₇²⁻.</li>
      </ul>
      <p>Le nombre en exposant indique le nombre d'électrons gagnés ou perdus : l'atome de cuivre qui perd 2 électrons devient Cu²⁺ ; l'atome de chlore qui gagne 1 électron devient Cl⁻.</p>
      <h3>Solution aqueuse</h3>
      <p>Une <strong>solution aqueuse</strong> est obtenue par dissolution d'un corps (le <strong>soluté</strong>) dans l'eau (le <strong>solvant</strong>). Une solution aqueuse <strong>ionique</strong> contient des ions : des cations et des anions. Elle est électriquement neutre, car les charges des anions compensent celles des cations.</p>
      <h3>Identification des ions</h3>
      <p><strong>Couleur en solution</strong> : Cu²⁺ <strong>bleu</strong> ; Fe²⁺ <strong>vert pâle</strong> ; Fe³⁺ <strong>rouille (orangé)</strong> ; Zn²⁺, Na⁺, Al³⁺ <strong>incolores</strong>.</p>
      <table><tr><th>Ion</th><th>Réactif</th><th>Observation</th></tr>
      <tr><td>Cu²⁺</td><td>soude (Na⁺ + OH⁻)</td><td>précipité <strong>bleu</strong> d'hydroxyde de cuivre</td></tr>
      <tr><td>Fe²⁺</td><td>soude</td><td>précipité <strong>vert pâle</strong> d'hydroxyde de fer II</td></tr>
      <tr><td>Fe³⁺</td><td>soude</td><td>précipité <strong>rouille</strong> d'hydroxyde de fer III</td></tr>
      <tr><td>Zn²⁺</td><td>soude</td><td>précipité <strong>blanc</strong> d'hydroxyde de zinc</td></tr>
      <tr><td>Cl⁻</td><td>nitrate d'argent (ion Ag⁺)</td><td>précipité <strong>blanc</strong> de chlorure d'argent qui <strong>noircit à la lumière</strong></td></tr>
      <tr><td>SO₄²⁻</td><td>chlorure de baryum (ion Ba²⁺)</td><td>précipité <strong>blanc</strong> de sulfate de baryum</td></tr></table>
      <p><strong>🔎 Pour aller plus loin :</strong> le nom d'un produit indique ses ions. Sulfate de cuivre : Cu²⁺ et SO₄²⁻. Sulfate de fer (II) : Fe²⁺ et SO₄²⁻. Chlorure de fer (III) : Fe³⁺ et Cl⁻. Le premier mot désigne l'anion, le second le cation.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Deux flacons sans étiquette. Flacon A + soude → précipité <strong>vert pâle</strong> : il contient l'ion <strong>Fe²⁺</strong> (précipité d'hydroxyde de fer II). Flacon B + soude → précipité <strong>rouille</strong> : il contient l'ion <strong>Fe³⁺</strong> (précipité d'hydroxyde de fer III).</p>
      <p>L'or perd 3 électrons → Au³⁺ (cation) ; l'argent perd 1 électron → Ag⁺ (cation) ; le chlore gagne 1 électron → Cl⁻ (anion) ; le cuivre perd 2 électrons → Cu²⁺ (cation).</p>
      <h3>📌 Point du programme à ne pas manquer : un réactif pour chaque ion</h3><p>Retenir les trois réactifs : la <strong>soude</strong> identifie les ions <strong>métalliques</strong> (Cu²⁺, Fe²⁺, Fe³⁺, Zn²⁺) par la couleur du précipité ; l'ion <strong>argent</strong> (nitrate d'argent) identifie l'ion <strong>chlorure</strong> ; l'ion <strong>baryum</strong> (chlorure de baryum) identifie l'ion <strong>sulfate</strong>. Le chlorure d'argent qui noircit à la lumière est le même récepteur photochimique que dans la leçon sur la lumière.</p>`,
      quiz: [
        {q:"Le noyau d'un atome porte des charges...", options:["négatives","positives","nulles","variables"], correct:1, exp:"Le noyau est chargé positivement ; les électrons sont chargés négativement."},
        {q:"Un atome est électriquement neutre car...", options:["il n'a pas de charges","il a autant de charges positives que négatives","il n'a que des électrons","il n'a pas de noyau"], correct:1, exp:"Les charges positives du noyau compensent exactement celles des électrons."},
        {q:"Un atome qui perd des électrons devient...", options:["un anion","un cation","une molécule","un atome neutre"], correct:1, exp:"En perdant des électrons (négatifs), il devient positif : un cation."},
        {q:"La formule de l'ion sulfate est...", options:["SO₄²⁻","SO₄⁺","S²⁻","SO₂"], correct:0, exp:"L'ion sulfate est SO₄²⁻ (un anion)."},
        {q:"Quel ion donne un précipité bleu avec la soude ?", options:["Fe²⁺","Fe³⁺","Cu²⁺","Zn²⁺"], correct:2, exp:"Cu²⁺ + soude → précipité bleu d'hydroxyde de cuivre."},
        {q:"Le réactif de l'ion chlorure est...", options:["la soude","le nitrate d'argent","le chlorure de baryum","l'eau"], correct:1, exp:"Le nitrate d'argent (ion Ag⁺) donne un précipité blanc qui noircit à la lumière."},
        {q:"Une solution contenant l'ion Fe³⁺ est de couleur...", options:["bleue","vert pâle","rouille (orangé)","incolore"], correct:2, exp:"Fe³⁺ est rouille en solution ; Fe²⁺ est vert pâle ; Cu²⁺ est bleu."},
        {q:"L'atome de chlore gagne un électron. L'ion formé est...", options:["Cl⁺","Cl⁻","Cl²⁻","Cl₂"], correct:1, exp:"Un électron gagné = une charge négative : Cl⁻, un anion."}
      ]
    },
    {
      id: "pc11",
      title: "Les ions — Transformation du métal cuivre en ion et inversement",
      content: `<h3>1. Du cuivre métal à l'ion cuivre II (voie chimique)</h3>
      <p>On verse de l'<strong>acide nitrique</strong> sur des copeaux de cuivre. On observe : un dégagement de <strong>gaz roux</strong>, la <strong>disparition</strong> des copeaux et l'apparition d'une solution <strong>bleue</strong> (avec la soude, elle donne un précipité bleu). Le métal cuivre s'est transformé en ions cuivre II :</p>
      <p style="text-align:center"><strong>Cu → Cu²⁺ + 2e⁻</strong></p>
      <p>Le gaz roux est du <strong>dioxyde d'azote (NO₂)</strong>, très <strong>toxique</strong> : l'expérience se fait sous la hotte ou en plein air.</p>
      <h3>2. De l'ion cuivre II au cuivre métal (voie chimique)</h3>
      <p>On plonge un <strong>clou en fer</strong> dans une solution bleue de <strong>sulfate de cuivre</strong>. On observe : un <strong>dépôt rouge de cuivre</strong> sur le clou ; la solution bleue devient <strong>verte</strong> ; avec la soude, elle donne un précipité <strong>vert pâle</strong> (ions Fe²⁺). Les ions cuivre deviennent du cuivre métal et, en même temps, le fer devient des ions fer II :</p>
      <p style="text-align:center"><strong>Cu²⁺ + 2e⁻ → Cu</strong> &nbsp;et&nbsp; <strong>Fe → Fe²⁺ + 2e⁻</strong></p>
      <p>Équation-bilan : <strong>Fe + Cu²⁺ → Cu + Fe²⁺</strong></p>
      <h3>3. Voie électrochimique (électrolyse)</h3>
      <p>On fait passer un courant continu dans une solution de sulfate de cuivre, avec une <strong>anode en cuivre</strong> (reliée à la borne +) et une <strong>cathode en graphite</strong> (reliée à la borne −). On observe : un <strong>dépôt rouge de cuivre</strong> sur la cathode, une <strong>diminution de l'épaisseur</strong> de l'anode, et la couleur de la solution <strong>ne change pas</strong>.</p>
      <ul>
        <li>À l'<strong>anode</strong> : <strong>Cu → Cu²⁺ + 2e⁻</strong> (le cuivre se dissout).</li>
        <li>À la <strong>cathode</strong> : <strong>Cu²⁺ + 2e⁻ → Cu</strong> (le cuivre se dépose).</li>
      </ul>
      <p>Ces réactions ne se produisent que lorsque le courant passe : ce sont des <strong>réactions électrochimiques</strong>.</p>
      <h3>4. Nature du courant électrique</h3>
      <p>Dans les <strong>métaux</strong>, le courant est dû à la circulation des <strong>électrons libres</strong>. Dans les <strong>solutions aqueuses</strong>, il est dû à la <strong>double migration des ions</strong> : les cations et les anions se déplacent en sens contraires.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> dans l'électrolyse, autant de cuivre se dépose à la cathode qu'il en disparaît de l'anode : la quantité d'ions Cu²⁺ dans la solution reste la même, c'est pourquoi sa couleur bleue ne change pas. Cette technique sert au <strong>cuivrage</strong> : l'objet à recouvrir est relié à la borne négative.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Une lame de fer plongée dans du sulfate de cuivre se recouvre d'un dépôt rouge et la solution bleue devient verte. L'ion responsable du bleu est l'ion cuivre II <strong>Cu²⁺</strong> ; celui du vert est l'ion fer II <strong>Fe²⁺</strong> ; le dépôt rouge est du <strong>cuivre (Cu)</strong>. Équation-bilan : <strong>Fe + Cu²⁺ → Cu + Fe²⁺</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : écrire correctement les équations</h3><p>Les électrons apparaissent du côté des <strong>produits</strong> quand un métal devient ion (il les <strong>perd</strong>) : Cu → Cu²⁺ + 2e⁻. Ils apparaissent du côté des <strong>réactifs</strong> quand un ion devient métal (il les <strong>gagne</strong>) : Cu²⁺ + 2e⁻ → Cu. Dans l'équation-bilan, les électrons échangés s'éliminent : Fe + Cu²⁺ → Fe²⁺ + Cu. Les réponses du type « Fe²⁺ + Cu → Cu²⁺ + Fe » sont fausses.</p>`,
      quiz: [
        {q:"Quand on verse de l'acide nitrique sur du cuivre, la solution devient...", options:["incolore","vert pâle","bleue","rouge"], correct:2, exp:"Le cuivre se transforme en ions Cu²⁺, qui colorent la solution en bleu."},
        {q:"Le gaz roux dégagé par l'action de l'acide nitrique sur le cuivre est...", options:["du dioxygène","du dioxyde d'azote, toxique","de la vapeur d'eau","du dihydrogène"], correct:1, exp:"C'est du dioxyde d'azote NO₂, un gaz très toxique."},
        {q:"L'équation de la transformation du cuivre métal en ion est...", options:["Cu²⁺ + 2e⁻ → Cu","Cu → Cu²⁺ + 2e⁻","Cu → Cu⁺","Cu + 2e⁻ → Cu²⁺"], correct:1, exp:"L'atome de cuivre perd 2 électrons : Cu → Cu²⁺ + 2e⁻."},
        {q:"On plonge une lame de fer dans du sulfate de cuivre. La solution devient...", options:["incolore","vert pâle","plus bleue","rouge"], correct:1, exp:"Les ions Fe²⁺ formés donnent une couleur verte (vert pâle)."},
        {q:"L'équation-bilan de la réaction entre le fer et les ions cuivre II est...", options:["Fe²⁺ + Cu → Cu²⁺ + Fe","Fe + Cu → Fe²⁺ + Cu²⁺","Fe + Cu²⁺ → Fe²⁺ + Cu","Fe²⁺ + Cu²⁺ → Fe + Cu"], correct:2, exp:"Le fer donne ses électrons aux ions cuivre : Fe + Cu²⁺ → Fe²⁺ + Cu."},
        {q:"Lors de l'électrolyse du sulfate de cuivre, le dépôt de cuivre se forme...", options:["à l'anode","à la cathode","au fond du bécher seulement","nulle part"], correct:1, exp:"À la cathode : Cu²⁺ + 2e⁻ → Cu (dépôt rouge)."},
        {q:"Dans une solution aqueuse, le courant électrique est dû...", options:["aux électrons libres","à la double migration des ions","aux protons du noyau","à la lumière"], correct:1, exp:"Dans les métaux : électrons libres ; dans les solutions : migration des cations et des anions."},
        {q:"Pendant l'électrolyse avec anode en cuivre, la couleur de la solution...", options:["devient verte","disparaît","ne change pas","devient rouge"], correct:2, exp:"Le cuivre perdu par l'anode compense celui déposé à la cathode : la concentration en Cu²⁺ reste la même."}
      ]
    },
    {
      id: "pc12",
      title: "Eau potable — Traitement de l'eau",
      content: `<p>L'eau est une source de vie, mais elle peut aussi transmettre des maladies : il faut la <strong>traiter</strong> avant de la consommer. En Côte d'Ivoire, c'est le rôle de la <strong>SODECI</strong>, société de distribution d'eau.</p>
      <p><strong>Agents de pollution de l'eau</strong> : les <strong>bactéries</strong> (et autres microorganismes), les <strong>déchets organiques</strong> et les <strong>produits phytosanitaires</strong> (pesticides, engrais).</p>
      <h3>Étapes du traitement physico-chimique de l'eau (dans l'ordre)</h3>
      <ol>
        <li><strong>Floculation</strong> : on injecte un réactif, le <strong>sulfate d'alumine</strong> (Al₂(SO₄)₃,18H₂O) ; les impuretés s'agglomèrent en <strong>flocons</strong>.</li>
        <li><strong>Décantation</strong> : on laisse reposer ; les flocons, plus lourds, tombent au fond et sont éliminés. L'eau du dessus devient limpide.</li>
        <li><strong>Filtration</strong> : l'eau traverse un filtre (sable, tissu) qui retient les fines particules restantes.</li>
        <li><strong>Désinfection (stérilisation)</strong> : on détruit les microorganismes qui transmettent des maladies, avec de l'<strong>hypochlorite de calcium</strong> (Ca(ClO)₂), de l'<strong>ozone</strong> ou du <strong>dichlore</strong>.</li>
        <li><strong>Neutralisation</strong> : on ramène l'eau à un <strong>pH neutre (pH = 7)</strong>.</li>
      </ol>
      <p><strong>Au village</strong>, on peut rendre l'eau d'un marigot ou d'une rivière consommable : la laisser <strong>reposer</strong> (décantation), la <strong>filtrer</strong> sur un tissu propre et blanc, puis la <strong>désinfecter</strong> en la faisant bouillir ou en ajoutant quelques gouttes d'eau de Javel.</p>
      <h3>Lire une facture d'eau</h3>
      <p>L'<strong>ancien index</strong> est le chiffre du compteur lors de la facture précédente ; le <strong>nouvel index</strong> est le chiffre relevé par l'agent de la SODECI cette fois-ci. Le <strong>cubage consommé</strong> (en m³) se calcule ainsi :</p>
      <p style="text-align:center"><strong>Cubage consommé = nouvel index − ancien index</strong></p>
      <p>Comme pour l'électricité, la facture est découpée en <strong>tranches</strong> ; le montant dépend du prix du m³ de chaque tranche.</p>
      <h3>Ne pas gaspiller l'eau</h3>
      <p>Prendre des douches plutôt que des bains ; ne pas laisser couler l'eau en se brossant les dents ; réparer les fuites et bien fermer les robinets ; laver la voiture à l'éponge plutôt qu'au jet ; arroser le soir ; ne pas jeter d'ordures dans les cours d'eau. Ces gestes réduisent la consommation de 20 à 30 %.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> la décantation ne retient que les particules lourdes, et la filtration les particules fines ; aucune des deux ne tue les microbes. C'est pourquoi la <strong>désinfection</strong> est indispensable : une eau limpide n'est pas forcément potable.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Facture : ancien index 1 337 m³, nouvel index 1 452 m³. Cubage consommé = 1 452 − 1 337 = <strong>115 m³</strong> pour le trimestre.</p>
      <p>Range dans l'ordre : neutralisation, décantation, filtration, désinfection, floculation. Réponse : <strong>floculation → décantation → filtration → désinfection → neutralisation</strong>.</p>
      <h3>📌 Point du programme à ne pas manquer : définition de l'eau potable</h3><p>Une <strong>eau potable</strong> est une eau qui ne contient pas d'agents polluants dangereux et qui est propre à la consommation : on peut la boire sans danger pour la santé. Le traitement de la SODECI sert précisément à transformer une eau de lac ou de rivière, chargée de boues, de déchets et de microbes, en eau potable.</p>`,
      quiz: [
        {q:"En Côte d'Ivoire, la société qui traite et distribue l'eau est...", options:["la CIE","la SODECI","la SOTRA","l'ANADER"], correct:1, exp:"La SODECI distribue l'eau potable ; la CIE distribue l'électricité."},
        {q:"Quelle est la première étape du traitement de l'eau ?", options:["La filtration","La désinfection","La floculation","La neutralisation"], correct:2, exp:"Ordre : floculation, décantation, filtration, désinfection, neutralisation."},
        {q:"Le réactif utilisé pour la floculation est...", options:["l'eau de Javel","le sulfate d'alumine","le sel de cuisine","la soude"], correct:1, exp:"Le sulfate d'alumine fait s'agglomérer les impuretés en flocons."},
        {q:"La désinfection de l'eau sert à...", options:["la rendre limpide","détruire les microorganismes","enlever le sable","changer sa couleur"], correct:1, exp:"Elle détruit les microbes susceptibles de transmettre des maladies (chlore, ozone...)."},
        {q:"La neutralisation ramène l'eau à un pH de...", options:["0","3","7","14"], correct:2, exp:"Elle rend à l'eau un pH neutre, égal à 7."},
        {q:"Ancien index 1 337 m³, nouvel index 1 452 m³. Le cubage consommé est...", options:["2 789 m³","115 m³","1 452 m³","125 m³"], correct:1, exp:"Cubage = nouvel index − ancien index = 1 452 − 1 337 = 115 m³."},
        {q:"Lequel de ces comportements est bon pour l'eau ?", options:["Laisser couler le robinet","Jeter les ordures dans le marigot","Réparer les fuites d'eau","Laver la voiture au jet"], correct:2, exp:"Réparer les fuites évite le gaspillage ; jeter les ordures pollue l'eau."}
      ]
    },
    {
      id: "pc13",
      title: "Eau potable — Qualité de l'eau",
      content: `<h3>Les paramètres de qualité de l'eau</h3>
      <ul>
        <li><strong>Paramètres organoleptiques</strong> (perçus par nos sens) : la <strong>couleur</strong>, la <strong>transparence</strong>, la <strong>saveur</strong> et l'<strong>odeur</strong>. Ils n'ont pas de valeur sanitaire directe : une eau trouble ou colorée peut être consommable, et une eau limpide peut être dangereuse.</li>
        <li><strong>Paramètres physico-chimiques</strong> : le <strong>pH</strong>, la température, le taux d'oxygène, le pouvoir de dilution, la <strong>dureté</strong> (minéraux dissous).</li>
        <li><strong>Substances toxiques</strong> : poisons mortels pour l'homme, par exemple les <strong>métaux lourds</strong> (plomb, chrome).</li>
      </ul>
      <p>Une <strong>eau potable</strong> est une eau que l'on peut boire sans danger et qui respecte les <strong>normes de l'OMS</strong>. Quelques normes : pH compris entre 6,5 et 8,5 ; nitrates ≤ 50 mg/L ; nitrites ≤ 0,2 mg/L ; chlorures ≤ 200 mg/L ; sodium ≤ 200 mg/L ; sulfates ≤ 500 mg/L ; magnésium ≤ 50 mg/L ; fer ≤ 0,3 mg/L.</p>
      <h3>Étiquette d'eau minérale et dureté</h3>
      <p>L'étiquette d'une eau minérale (par exemple l'eau AWA : calcium 52 mg/L, magnésium 2,82 mg/L, sodium 18,5 mg/L, bicarbonate 264,7 mg/L, sulfate 6,2 mg/L, chlorure 8,5 mg/L...) montre qu'une eau de boisson <strong>contient des ions</strong>.</p>
      <p>Une eau <strong>dure</strong> contient beaucoup de minéraux dissous. La dureté est surtout due aux ions <strong>calcium Ca²⁺</strong> : de 0 à 28 mg/L, eau très douce ; de 28 à 60 mg/L, eau douce ; de 60 à 120 mg/L, eau plutôt dure ; plus de 160 mg/L, eau très dure.</p>
      <h3>Identification des ions dans l'eau minérale</h3>
      <table><tr><th>Ion</th><th>Réactif</th><th>Observation</th></tr>
      <tr><td>calcium Ca²⁺</td><td>oxalate d'ammonium (ion oxalate C₂O₄²⁻)</td><td>précipité <strong>blanc</strong> (d'oxalate de calcium)</td></tr>
      <tr><td>sulfate SO₄²⁻</td><td>chlorure de baryum (ion Ba²⁺)</td><td>précipité <strong>blanc</strong> de sulfate de baryum</td></tr>
      <tr><td>chlorure Cl⁻</td><td>nitrate d'argent (ion Ag⁺)</td><td>précipité <strong>blanc qui noircit à la lumière</strong></td></tr></table>
      <h3>Importance de quelques ions dans l'alimentation</h3>
      <ul>
        <li><strong>Ca²⁺ et Mg²⁺</strong> : construction et solidification des <strong>os</strong> (très importants pour les nourrissons).</li>
        <li><strong>K⁺ et Na⁺</strong> : production et transmission des <strong>messages nerveux</strong>.</li>
        <li><strong>Na⁺ et Cl⁻</strong> : <strong>contraction des muscles</strong> et rétention d'eau dans le corps.</li>
        <li><strong>Fe²⁺</strong> : constitution de l'<strong>hémoglobine</strong> du sang, qui transporte le dioxygène ; un manque provoque l'<strong>anémie</strong>.</li>
      </ul>
      <p>Hygiène et assainissement : conserver l'eau dans des récipients propres, assainir les abords des fontaines, des puits et des marigots, éloigner les fosses septiques des points d'eau.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> les eaux riches en calcium (plus de 150 mg/L) aident à prévenir les problèmes osseux ; riches en magnésium (plus de 50 mg/L), elles sont conseillées contre le stress et la fatigue ; les eaux sulfatées (plus de 200 mg/L) sont laxatives ; les eaux riches en bicarbonates facilitent la digestion.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Une eau minérale contient : calcium Ca²⁺ 250 mg/L, chlorure Cl⁻ 100 mg/L, fluor F⁻ 0,5 mg/L, magnésium Mg²⁺ 50 mg/L, nitrates NO₃⁻ 5 mg/L, nitrites NO₂⁻ 3 mg/L, sodium Na⁺ 150 mg/L, sulfates SO₄²⁻ 60 mg/L, potassium K⁺ 12 mg/L.</p>
      <p>Cations : <strong>Ca²⁺, Mg²⁺, Na⁺, K⁺</strong>. Anions : <strong>Cl⁻, F⁻, NO₃⁻, NO₂⁻, SO₄²⁻</strong>. Ion majoritaire : <strong>le calcium</strong> (250 mg/L), essentiel à la construction des os des bébés.</p>
      <h3>📌 Point du programme à ne pas manquer : organoleptique ou physico-chimique ?</h3><p>Exercice classique de classement. <strong>Organoleptiques</strong> (ce que l'on voit, sent ou goûte) : saveur, odeur, transparence, couleur. <strong>Physico-chimiques</strong> (ce que l'on mesure) : pH, température, minéraux, dureté. Seuls les paramètres mesurés et les normes de l'OMS permettent de décider si une eau est potable.</p>`,
      quiz: [
        {q:"Lequel est un paramètre organoleptique de l'eau ?", options:["Le pH","La dureté","L'odeur","Le taux d'oxygène"], correct:2, exp:"Les paramètres organoleptiques sont perçus par les sens : couleur, transparence, saveur, odeur."},
        {q:"Une eau potable est une eau...", options:["boueuse","toujours gazeuse","que l'on peut boire sans danger et qui respecte les normes de l'OMS","sans aucun ion"], correct:2, exp:"Une eau potable respecte les normes de l'OMS et peut être bue sans danger."},
        {q:"La dureté de l'eau est surtout due à l'ion...", options:["sodium Na⁺","calcium Ca²⁺","chlorure Cl⁻","fer Fe²⁺"], correct:1, exp:"Les ions calcium Ca²⁺ sont les principaux responsables de la dureté."},
        {q:"Le réactif de l'ion calcium est...", options:["la soude","l'oxalate d'ammonium","le nitrate d'argent","le chlorure de baryum"], correct:1, exp:"L'oxalate d'ammonium (ion oxalate) donne un précipité blanc avec Ca²⁺."},
        {q:"Les ions essentiels à la construction des os sont...", options:["Na⁺ et Cl⁻","K⁺ et Na⁺","Ca²⁺ et Mg²⁺","Fe²⁺ et Cl⁻"], correct:2, exp:"Le calcium et le magnésium construisent et solidifient les os."},
        {q:"Un manque d'ions fer II (Fe²⁺) provoque...", options:["l'anémie","des caries","la fièvre","des crampes uniquement"], correct:0, exp:"Fe²⁺ entre dans la constitution de l'hémoglobine ; son insuffisance provoque l'anémie."},
        {q:"Selon l'OMS, le pH d'une eau potable doit être compris entre...", options:["0 et 3","6,5 et 8,5","9 et 12","1 et 14"], correct:1, exp:"La norme OMS citée dans le cours est 6,5 < pH < 8,5."},
        {q:"Les métaux lourds comme le plomb sont...", options:["des paramètres organoleptiques","des substances toxiques","indispensables à la santé","des ions du sang"], correct:1, exp:"Les métaux lourds (plomb, chrome) sont des substances toxiques, de véritables poisons."}
      ]
    }
  ]
},

hg: {
  name: "Histoire-Géographie",
  color: "#5CC7A0",
  icon: "🌍",
  lessons: [
    {
      id: "h1",
      title: "Le peuplement et les zones culturelles de la Côte d'Ivoire (XVIe-XVIIIe siècle)",
      content: `<p>Entre 1500 et 1800, le peuplement de la Côte d'Ivoire actuelle s'est profondément transformé sous l'effet de <strong>migrations</strong> venues de l'intérieur du continent. Ces mouvements ont donné naissance à de grandes <strong>zones culturelles</strong> encore reconnaissables aujourd'hui : les <strong>Akan</strong> (dont les Baoulé), les <strong>Krou</strong>, les <strong>Gour (ou Voltaïque)</strong> (dont les Sénoufo), les <strong>Mandé du Nord</strong> et les <strong>Mandé du Sud</strong>.</p>
      <p><strong>Causes des migrations :</strong> la chute de grands empires (comme le Mali ou le Songhaï), l'insécurité provoquée par les razzias esclavagistes, la recherche de terres fertiles pour l'agriculture, les pressions religieuses liées à l'islamisation, et les opportunités commerciales autour de produits précieux comme la cola et l'or.</p>
      <p><strong>Conséquences sociales :</strong> ces migrations ont bouleversé le peuplement interne du territoire. Des structures politiques anciennes ont disparu, mais les alliances et les échanges culturels ont aussi rapproché les peuples sur le plan linguistique et religieux, tandis que des réseaux économiques se développaient entre régions.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Retiens un exemple de chaque grande zone culturelle : les Baoulé appartiennent à l'aire Akan, les Sénoufo à l'aire Gour. Une même zone culturelle peut regrouper des peuples d'origines différentes, réunis par des langues et des traditions proches suite à ces siècles de migrations et d'échanges.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Cite deux facteurs qui ont provoqué les migrations de peuplement en Côte d'Ivoire entre le XVIe et le XVIIIe siècle, et explique l'un d'eux. » Réponse : parmi les facteurs possibles — chute des grands empires, insécurité (razzias esclavagistes), recherche de terres fertiles, pressions religieuses, opportunités commerciales. Exemple d'explication : la recherche de terres fertiles a poussé des groupes à migrer vers des régions moins peuplées et plus propices à l'agriculture, ce qui explique en partie pourquoi certaines zones de la Côte d'Ivoire actuelle sont devenues plus densément peuplées que d'autres.</p>`,
      quiz: [
        {q:"Les Baoulé appartiennent à quelle aire culturelle ?", options:["Krou","Akan","Mandé du Nord","Gour"], correct:1, exp:"Les Baoulé font partie de l'aire culturelle Akan."},
        {q:"Les Sénoufo appartiennent à quelle aire culturelle ?", options:["Akan","Krou","Gour (Voltaïque)","Mandé du Sud"], correct:2, exp:"Les Sénoufo relèvent de la classification Gour (ou Voltaïque)."},
        {q:"Parmi les causes des migrations de peuplement, on trouve...", options:["uniquement le climat","la chute de grands empires et l'insécurité des razzias esclavagistes","uniquement la conquête coloniale européenne","aucune cause connue"], correct:1, exp:"La chute des grands empires et l'insécurité liée aux razzias esclavagistes comptent parmi les causes majeures des migrations."},
        {q:"Les migrations ont eu pour conséquence sociale...", options:["aucun changement","la disparition de structures politiques anciennes mais aussi des rapprochements culturels","uniquement des rapprochements, sans aucune perturbation","le départ total des populations du territoire"], correct:1, exp:"Les migrations ont bouleversé certaines structures politiques tout en favorisant, via les alliances, des rapprochements linguistiques et religieux."},
        {q:"Quelles sont les cinq grandes zones culturelles de la Côte d'Ivoire évoquées dans ce cours ?", options:["Akan, Krou, Gour, Mandé du Nord, Mandé du Sud","Baoulé, Sénoufo, Agni, Yacouba, Dioula","Nord, Sud, Est, Ouest, Centre","Il n'y en a que deux"], correct:0, exp:"Les cinq grandes zones culturelles sont : Akan, Krou, Gour (Voltaïque), Mandé du Nord et Mandé du Sud."}
      ]
    },
    {
      id: "h2",
      title: "L'arrivée des Européens et l'évolution des contacts avec la Côte d'Ivoire (XVe-XVIIIe siècle)",
      content: `<p>Les premiers Européens à atteindre le golfe de Guinée furent les <strong>Portugais</strong> : João de Santarém et Pêro Escobar, vers 1470, qui installèrent un commerce d'épices et d'ivoire le long des côtes Krou. Plusieurs noms de lieux actuels, comme <strong>Sassandra</strong> et <strong>San-Pédro</strong>, gardent la trace de cette époque. Les <strong>Néerlandais</strong> leur succédèrent au XVIe siècle, puis la <strong>France</strong> et l'<strong>Angleterre</strong> dominèrent le commerce côtier à partir du milieu du XVIIe siècle.</p>
      <p><strong>Motivations européennes :</strong> la recherche de produits tropicaux et d'épices (mil, coton, matières précieuses) ainsi que des objectifs religieux — convertir les populations locales au christianisme, en réaction à l'expansion de l'islam venue du nord.</p>
      <p>Le littoral fut divisé en trois zones commerciales : la <strong>Côte des Graines</strong> (à l'ouest), la <strong>Côte des Dents</strong> (au centre) et la <strong>Côte des Quaquas</strong> (à l'est). Les échanges se faisaient par <strong>troc</strong> : les Européens offraient des barres de fer, du corail, des parfums et des textiles contre des produits tropicaux et des minéraux, puis, à partir du XVIIIe siècle, contre des esclaves. La France établit un comptoir à <strong>Assinie</strong> dès 1687 et signa des traités avec les royaumes Essouma, Abouré et Sanwi au XIXe siècle.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Ce contact progressif eut des conséquences profondes des deux côtés : pour la Côte d'Ivoire, désorganisation économique, déclin démographique lié à l'esclavage, mais aussi changements culturels (introduction de nouvelles cultures comme le maïs, le manioc, la tomate) et insécurité croissante ; pour l'Europe, émergence d'une bourgeoisie commerciale, développement des ports, enrichissement national et rivalités accrues entre puissances européennes.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Explique pourquoi le troc a progressivement laissé place à la traite des esclaves au XVIIIe siècle. » Réponse : au départ, les Européens échangeaient des marchandises manufacturées (fer, textiles, parfums) contre des produits tropicaux et des minéraux locaux. Mais avec le développement des plantations dans les colonies américaines, la demande de main-d'œuvre servile a explosé, transformant progressivement le commerce côtier en un commerce centré sur les êtres humains — la traite négrière, étudiée dans la leçon suivante.</p>`,
      quiz: [
        {q:"Quels furent les premiers Européens à atteindre le golfe de Guinée, vers 1470 ?", options:["Les Français","Les Anglais","Les Portugais","Les Néerlandais"], correct:2, exp:"João de Santarém et Pêro Escobar, navigateurs portugais, atteignirent le golfe de Guinée vers 1470."},
        {q:"La Côte d'Ivoire actuelle était divisée en trois zones commerciales. Laquelle de ces réponses est correcte ?", options:["Côte des Graines, Côte des Dents, Côte des Quaquas","Côte Nord, Côte Sud, Côte Centrale","Côte de l'Or, Côte des Esclaves, Côte du Poivre","Il n'existait qu'une seule zone"], correct:0, exp:"Le littoral était divisé en Côte des Graines (ouest), Côte des Dents (centre) et Côte des Quaquas (est)."},
        {q:"Quelles étaient les deux principales motivations des Européens ?", options:["La recherche de produits tropicaux/épices et des objectifs religieux","Uniquement la curiosité scientifique","Uniquement la conquête militaire","Le tourisme"], correct:0, exp:"Les Européens recherchaient des produits tropicaux et des épices, et visaient aussi la conversion religieuse des populations locales."},
        {q:"Le comptoir français d'Assinie fut établi en...", options:["1470","1687","1800","1975"], correct:1, exp:"La France établit un comptoir à Assinie dès 1687."},
        {q:"Le système d'échange initial entre Européens et populations locales s'appelait...", options:["le troc","la décentralisation","le protectorat","la palabre"], correct:0, exp:"Les échanges se faisaient par troc : marchandises européennes contre produits tropicaux et minéraux locaux."}
      ]
    },
    {
      id: "h3",
      title: "Les mécanismes de prévention et de résolution des conflits chez les peuples de Côte d'Ivoire",
      content: `<p>Les sociétés traditionnelles de Côte d'Ivoire ont développé des <strong>mécanismes de prévention</strong> des conflits fondés sur des systèmes d'alliance, et des <strong>mécanismes de résolution</strong> pour apaiser les tensions quand elles surviennent. Le principe fondamental est résumé ainsi : « il ne s'agit pas de gagner ou de perdre, mais de trouver un consensus acceptable » pour préserver l'harmonie sociale.</p>
      <p><strong>Les alliances de prévention</strong> prennent plusieurs formes : les <strong>alliances interculturelles</strong> (entre ou au sein de groupes culturels, par exemple Sénoufo/Yacouba), la <strong>parenté à plaisanterie</strong> (échange d'humour entre alliés — grands-parents/petits-enfants, oncles/neveux, cousins — qui désamorce les tensions sans jamais dégénérer), les <strong>alliances par patronymes</strong> (entre familles portant certains noms, comme Koné-Traoré ou Coulibaly-Ouattara), les <strong>alliances par serment</strong> (scellées par un serment sacré de ne jamais verser le sang, comme entre Agni et Baoulé) et les <strong>alliances matrimoniales</strong> (mariages qui unissent des groupes ethniques).</p>
      <p>Ces alliances comportent des <strong>clauses</strong> : interdiction de verser le sang entre alliés, partage de ressources, obligation de médiation mutuelle en cas de conflit, solidarité, et devoirs de générosité et de courtoisie.</p>
      <p><strong>Les mécanismes de résolution</strong> comptent trois méthodes principales : la <strong>négociation</strong> (dialogue direct entre parties en conflit pour trouver ensemble une solution), la <strong>médiation</strong> (un tiers neutre facilite un accord volontaire) et la <strong>palabre</strong> (assemblée communautaire sous l'arbre à palabre, où les sages arbitrent le différend tout en préservant les liens sociaux).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La parenté à plaisanterie (aussi appelée « cousinage à plaisanterie ») est un mécanisme unique : deux groupes « alliés à plaisanterie » peuvent se moquer l'un de l'autre sans jamais se fâcher, ce qui sert de soupape de sécurité sociale, désamorçant les tensions avant qu'elles ne deviennent de véritables conflits.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Distingue la négociation, la médiation et la palabre comme mécanismes de résolution des conflits. » Réponse : la négociation est un dialogue direct entre les deux parties en conflit, sans intermédiaire ; la médiation fait intervenir un tiers neutre qui aide les parties à trouver un accord volontaire ; la palabre est une assemblée communautaire, souvent sous un arbre, où les sages du village écoutent les deux parties et arbitrent le différend en recherchant un consensus qui préserve les relations sociales, plutôt qu'un simple gagnant et un perdant.</p>`,
      quiz: [
        {q:"Le principe fondamental de la résolution des conflits chez les peuples de Côte d'Ivoire est...", options:["de désigner un gagnant et un perdant","de trouver un consensus acceptable qui préserve l'harmonie sociale","d'ignorer le conflit","de faire intervenir systématiquement la justice moderne"], correct:1, exp:"L'objectif n'est pas de gagner ou de perdre, mais de trouver un consensus acceptable."},
        {q:"La parenté à plaisanterie sert à...", options:["provoquer des conflits","désamorcer les tensions par l'échange d'humour entre alliés","remplacer le mariage","interdire tout contact entre groupes"], correct:1, exp:"La parenté à plaisanterie permet d'échanger des taquineries entre alliés sans jamais dégénérer en conflit, désamorçant ainsi les tensions."},
        {q:"L'alliance entre Agni et Baoulé, scellée par un serment de ne jamais verser le sang, est un exemple de...", options:["alliance matrimoniale","alliance par serment","alliance par patronyme","parenté à plaisanterie"], correct:1, exp:"C'est un exemple d'alliance par serment (ou alliance de sang), scellée par un engagement sacré."},
        {q:"La palabre se déroule généralement...", options:["dans un tribunal moderne","en assemblée communautaire, sous un arbre, avec arbitrage des sages","uniquement par écrit","entre deux personnes seulement, sans témoin"], correct:1, exp:"La palabre est une assemblée communautaire (souvent sous l'arbre à palabre) où les sages arbitrent le conflit."},
        {q:"Parmi les trois méthodes de résolution des conflits, laquelle fait intervenir un tiers neutre ?", options:["La négociation","La médiation","La palabre uniquement","Aucune"], correct:1, exp:"La médiation se caractérise justement par l'intervention d'un tiers neutre qui facilite l'accord."}
      ]
    },
    {
      id: "h4",
      title: "La traite négrière et son abolition",
      content: `<p>À partir du XVIe siècle, la demande européenne de main-d'œuvre pour les plantations des Caraïbes donna naissance au <strong>commerce triangulaire</strong> : des navires européens transportaient des marchandises bon marché (« pacotille ») vers l'Afrique, les échangeaient contre des Africains réduits en esclavage, les vendaient ensuite en Amérique, puis revenaient en Europe chargés de produits tropicaux. Ce commerce, qui dura près de quatre siècles, a vidé l'Afrique d'une grande partie de sa population la plus vigoureuse.</p>
      <p>La <strong>traversée de l'Atlantique</strong> (le « passage du milieu ») se faisait dans des conditions atroces : les esclaves étaient entassés dans les cales des navires, où « l'air devenait irrespirable, causant maladies et morts nombreuses ». Certains étaient marqués au fer rouge ; d'autres préféraient se jeter à la mer plutôt que de subir cette traversée.</p>
      <p><strong>Le mouvement abolitionniste :</strong> en Angleterre, le réformateur <strong>Granville Sharp</strong> fit reconnaître dès 1787 que l'esclavage était illégal sur le sol anglais. La même année se forma le Comité pour l'abolition de la traite, soutenu par des politiciens comme Pitt et Wilberforce. En France, des philosophes comme <strong>Voltaire</strong> s'inspirèrent de l'exemple des Quakers de Pennsylvanie. En 1807, le Royaume-Uni interdit la traite ; la France l'abolit définitivement en 1848.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La traite négrière a laissé des traces culturelles durables dans les Amériques : la société brésilienne, par exemple, a intégré de nombreux éléments culturels africains (samba, vaudou, pratiques sportives) transmis par la diaspora, créant des traits culturels partagés avec leurs origines africaines.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Décris les trois étapes du commerce triangulaire. » Réponse : 1) un navire quitte l'Europe chargé de marchandises bon marché (pacotille : armes, alcool, tissus) à destination des côtes africaines ; 2) sur la côte africaine, ces marchandises sont échangées contre des hommes, femmes et enfants réduits en esclavage, qui sont transportés vers l'Amérique dans des conditions inhumaines (c'est le « passage du milieu ») ; 3) en Amérique, les esclaves sont vendus, et le navire repart vers l'Europe chargé de produits tropicaux (sucre, coton, café) issus du travail forcé dans les plantations — bouclant ainsi le « triangle ».</p>`,
      quiz: [
        {q:"Le commerce triangulaire reliait...", options:["l'Europe, l'Afrique et l'Amérique","l'Europe, l'Asie et l'Afrique","uniquement l'Afrique et l'Amérique","l'Europe, l'Amérique et l'Océanie"], correct:0, exp:"Le commerce triangulaire reliait l'Europe (marchandises), l'Afrique (esclaves) et l'Amérique (produits tropicaux)."},
        {q:"Que transportaient les navires au retour d'Amérique vers l'Europe ?", options:["Des esclaves","Des produits tropicaux (sucre, coton, café...)","De la pacotille","Rien, ils revenaient vides"], correct:1, exp:"Au retour, les navires rapportaient en Europe les produits tropicaux issus des plantations américaines."},
        {q:"Qui contribua à faire reconnaître, dès 1787, que l'esclavage était illégal sur le sol anglais ?", options:["Voltaire","Granville Sharp","Wilberforce uniquement","Kankou Moussa"], correct:1, exp:"Granville Sharp fit reconnaître dès 1787 l'illégalité de l'esclavage sur le sol anglais."},
        {q:"En quelle année la France abolit-elle définitivement la traite/l'esclavage ?", options:["1807","1789","1848","1975"], correct:2, exp:"La France abolit définitivement l'esclavage en 1848."},
        {q:"Quel héritage culturel africain retrouve-t-on au Brésil, conséquence de la traite ?", options:["Aucun, tout a disparu","La samba, le vaudou, certaines pratiques sportives","Uniquement la langue française","Le système CEDEAO"], correct:1, exp:"La société brésilienne a intégré des éléments culturels africains comme la samba, le vaudou et certaines pratiques sportives."}
      ]
    },
    {
      id: "h5",
      title: "La révolution industrielle en Europe (XVIIIe-XIXe siècle)",
      content: `<p>La <strong>révolution industrielle</strong> désigne le passage d'une production artisanale et manuelle à une production industrielle moderne. Elle débute vers <strong>1760 en Angleterre</strong>, avant de se propager au reste de l'Europe et du monde au cours du XIXe siècle.</p>
      <p><strong>Facteurs économiques et financiers :</strong> les capitaux accumulés grâce au commerce atlantique ont financé la recherche scientifique et le développement industriel. L'Angleterre disposait de ressources naturelles décisives (fer, cuivre, charbon, pétrole) et de matières premières abondantes (coton, laine).</p>
      <p><strong>Facteur démographique :</strong> l'Europe connut une explosion démographique aux XVIIe-XVIIIe siècles, grâce aux progrès agricoles et médicaux, fournissant à la fois davantage de main-d'œuvre et une demande de consommation croissante.</p>
      <p><strong>Facteurs scientifiques et techniques :</strong> les découvertes de Lavoisier (loi de conservation de la matière), Volta (pile électrique, 1800) et Pasteur (microbes) accompagnèrent des innovations techniques majeures. <strong>Inventions clés :</strong> la machine à vapeur perfectionnée par James Watt (1769-1785), le water-frame d'Arkwright (1767, filature mécanique), le métier à tisser mécanique de Cartwright (1785), le procédé au coke de Darby (métallurgie), et plus tard le moteur à combustion interne d'Otto (1876), le télégraphe, la photographie et le téléphone.</p>
      <p>Les principaux <strong>centres industriels</strong> se développèrent en Grande-Bretagne, en France, en Allemagne et en Russie (villes comme Manchester, Lyon, ou la région de Berlin).</p>
      <p><strong>Conséquences économiques :</strong> productivité agricole accrue, Europe devenue puissance industrielle dominante, réseaux commerciaux considérablement étendus. <strong>Conséquences sociales :</strong> forte croissance urbaine (exode rural), apparition de nouvelles classes sociales — la <strong>bourgeoisie industrielle</strong> (propriétaires d'usines et de banques) face au <strong>prolétariat ouvrier</strong> (travailleurs des usines, souvent dans des conditions difficiles) — et hausse de l'espérance de vie, passée d'environ 35 à 50 ans entre 1800 et 1900.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Retiens bien l'ordre logique des facteurs : ce sont d'abord les capitaux (issus du commerce atlantique) et les ressources naturelles anglaises qui ont permis de financer et d'alimenter les premières usines, avant que les inventions techniques (machine à vapeur, métiers à tisser mécaniques) ne viennent démultiplier la production.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Explique en quoi la révolution industrielle a transformé la société européenne. » Réponse : sur le plan économique, elle a fait de l'Europe la première puissance industrielle mondiale, avec une production et des échanges commerciaux démultipliés. Sur le plan social, elle a provoqué un exode massif des campagnes vers les villes (urbanisation), créant deux nouvelles classes sociales aux intérêts opposés : la bourgeoisie industrielle, propriétaire des usines et des capitaux, et le prolétariat ouvrier, qui vendait sa force de travail dans des conditions souvent très difficiles (longues journées, bas salaires, quartiers surpeuplés) — un contraste qui explique la naissance, plus tard, des mouvements ouvriers et syndicaux.</p>`,
      quiz: [
        {q:"La révolution industrielle débute vers 1760 dans quel pays ?", options:["La France","L'Angleterre","L'Allemagne","La Russie"], correct:1, exp:"La révolution industrielle débute vers 1760 en Angleterre, avant de se propager en Europe."},
        {q:"James Watt est associé à quelle invention majeure ?", options:["Le water-frame","La machine à vapeur","Le métier à tisser mécanique","La pile électrique"], correct:1, exp:"James Watt perfectionna la machine à vapeur entre 1769 et 1785."},
        {q:"Quelles sont les deux nouvelles classes sociales apparues avec l'industrialisation ?", options:["Les nobles et les paysans","La bourgeoisie industrielle et le prolétariat ouvrier","Les rois et les empereurs","Les artisans et les commerçants uniquement"], correct:1, exp:"L'industrialisation fit émerger la bourgeoisie industrielle (propriétaires d'usines) et le prolétariat ouvrier (travailleurs des usines)."},
        {q:"Entre 1800 et 1900, l'espérance de vie en Europe est passée d'environ...", options:["35 à 50 ans","50 à 35 ans","20 à 25 ans","60 à 80 ans"], correct:0, exp:"L'espérance de vie est passée d'environ 35 à 50 ans entre 1800 et 1900."},
        {q:"Parmi les facteurs de la révolution industrielle, on trouve...", options:["uniquement le hasard","des facteurs économiques, démographiques et scientifiques/techniques combinés","uniquement la colonisation de l'Afrique","uniquement les guerres napoléoniennes"], correct:1, exp:"La révolution industrielle résulte de la combinaison de facteurs économiques, démographiques et scientifiques/techniques."}
      ]
    },
    {
      id: "h6",
      title: "La révolution française de 1789",
      content: `<p>À la fin des années 1780, la France traverse une grave <strong>crise financière</strong> (héritée notamment des dettes de la guerre d'indépendance américaine), aggravée par de mauvaises récoltes provoquant famine et pauvreté généralisée. Ce contexte explosif conduit à la <strong>Révolution</strong>.</p>
      <p>Le <strong>17 juin 1789</strong>, le Tiers-État (le peuple, par opposition à la noblesse et au clergé) se proclame <strong>Assemblée nationale</strong>. Ses membres prêtent le fameux <strong>serment du Jeu de Paume</strong> : ne pas se séparer avant d'avoir doté la France d'une constitution. Le <strong>14 juillet 1789</strong>, la prise de la <strong>Bastille</strong> (prison symbole de l'arbitraire royal) marque symboliquement la fin de l'absolutisme monarchique : le roi Louis XVI doit reconnaître que le pouvoir politique appartient désormais au peuple.</p>
      <p>La Révolution proclame la <strong>Déclaration des droits de l'homme et du citoyen</strong>, qui affirme des droits naturels : la <strong>liberté</strong> (de conscience, de religion, de la presse) et l'<strong>égalité</strong> (suppression des privilèges hiérarchiques, avancement possible au mérite plutôt qu'à la naissance). Les réformes révolutionnaires abolissent la <strong>féodalité</strong> et suppriment, dans un premier temps, l'esclavage dans les colonies françaises (avant qu'il ne soit rétabli par Napoléon en 1802, puis aboli définitivement en 1848).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Retiens la chronologie clé : 17 juin 1789 (Assemblée nationale) → serment du Jeu de Paume (volonté d'écrire une constitution) → 14 juillet 1789 (prise de la Bastille) → Déclaration des droits de l'homme et du citoyen. Chaque étape marque un recul supplémentaire du pouvoir absolu du roi au profit de la nation.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Explique le lien entre la crise financière et le déclenchement de la Révolution française. » Réponse : la monarchie française, très endettée après avoir financé la guerre d'indépendance américaine, cherche à augmenter les impôts. Mais ce sont surtout le Tiers-État (paysans, bourgeois, artisans) qui paient des impôts, alors que la noblesse et le clergé en sont largement exemptés. Combinée aux mauvaises récoltes qui provoquent la famine, cette injustice fiscale alimente la colère populaire, qui trouve une issue politique quand le Tiers-État se proclame Assemblée nationale en juin 1789, refusant de continuer à subir ce système sans réforme.</p>`,
      quiz: [
        {q:"Le Tiers-État se proclame Assemblée nationale le...", options:["14 juillet 1789","17 juin 1789","1er janvier 1789","28 mai 1975"], correct:1, exp:"Le Tiers-État se proclame Assemblée nationale le 17 juin 1789."},
        {q:"La prise de la Bastille a lieu le...", options:["17 juin 1789","14 juillet 1789","4 août 1789","1er janvier 1790"], correct:1, exp:"La prise de la Bastille, le 14 juillet 1789, symbolise la fin de l'absolutisme."},
        {q:"Le serment du Jeu de Paume engageait les députés à...", options:["se séparer immédiatement","ne pas se séparer avant d'avoir doté la France d'une constitution","déclarer la guerre à l'Angleterre","abolir immédiatement la monarchie"], correct:1, exp:"Les députés du Tiers-État jurèrent de ne pas se séparer avant d'avoir donné une constitution à la France."},
        {q:"La Déclaration des droits de l'homme et du citoyen affirme notamment...", options:["le maintien des privilèges de la noblesse","la liberté et l'égalité comme droits naturels","le rétablissement de l'esclavage","l'interdiction de toute religion"], correct:1, exp:"La Déclaration affirme les droits naturels de liberté (conscience, religion, presse) et d'égalité (fin des privilèges hiérarchiques)."},
        {q:"Parmi les causes de la Révolution française de 1789, on trouve...", options:["uniquement des causes religieuses","la crise financière, les mauvaises récoltes et la pauvreté généralisée","uniquement la pression de pays étrangers","aucune cause économique"], correct:1, exp:"La crise financière, les mauvaises récoltes (famine) et la pauvreté généralisée sont au cœur des causes de la Révolution."}
      ]
    },
    {
      id: "h7",
      title: "L'organisation administrative de la Côte d'Ivoire : déconcentration et décentralisation",
      content: `<p>L'administration territoriale de la Côte d'Ivoire repose sur deux principes complémentaires. La <strong>déconcentration</strong> consiste, pour l'État, à déléguer un pouvoir de décision à des agents locaux (préfets, sous-préfets) qui agissent au nom du gouvernement central. La <strong>décentralisation</strong>, elle, crée des <strong>collectivités territoriales autonomes</strong>, dotées d'une indépendance financière et d'une personnalité juridique propre.</p>
      <p><strong>La hiérarchie administrative</strong> s'organise ainsi : les <strong>régions</strong> (administrées par des préfets), les <strong>départements</strong> (préfets), les <strong>sous-préfectures</strong> (sous-préfets) et les <strong>villages</strong> (chefs de village assistés d'un conseil villageois). Une réorganisation de 2011 a introduit les <strong>districts</strong> (regroupant plusieurs régions) et porté le nombre de régions de 19 à 30, avec 95 départements et 497 sous-préfectures.</p>
      <p><strong>Les collectivités décentralisées</strong> — districts, départements et communes — fonctionnent comme des collectivités territoriales autonomes sur le plan financier et juridique, exerçant les compétences que l'État leur délègue. La <strong>commune</strong> (regroupement de quartiers ou de villages) fonctionne avec un conseil municipal et une municipalité. Les <strong>départements</strong> disposent de conseils généraux chargés de superviser le développement local, tandis que les <strong>districts</strong> coordonnent des projets à l'échelle supra-régionale.</p>
      <p><strong>Difficultés de l'administration :</strong> ressources financières limitées, cadre juridique parfois flou, personnel qualifié insuffisant, conflits de compétences entre autorités, ainsi qu'une administration parfois marquée par « la lourdeur, la lenteur, le formalisme, l'irresponsabilité » et la corruption. Les communes dépendent fortement des dotations de l'État, leurs recettes internes (impôts locaux) restant souvent insuffisantes.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Ne confonds pas déconcentration et décentralisation : dans la déconcentration, le préfet reste un représentant de l'État central (il n'a pas d'autonomie financière propre) ; dans la décentralisation, la collectivité (comme une commune) a son propre budget et peut prendre des décisions locales de façon autonome, dans les limites fixées par la loi.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Distingue déconcentration et décentralisation à l'aide d'un exemple. » Réponse : un préfet de région, nommé par l'État et agissant en son nom, illustre la déconcentration — il applique les décisions du pouvoir central sans disposer d'un budget propre indépendant. À l'inverse, une commune, dirigée par un maire élu et disposant de son propre budget municipal (financé en partie par les impôts locaux et les dotations de l'État), illustre la décentralisation : elle décide elle-même, dans son domaine de compétence (voirie locale, marchés, état civil...), sans que chaque décision doive remonter à l'État central.</p>`,
      quiz: [
        {q:"La déconcentration consiste à...", options:["créer des collectivités autonomes","déléguer un pouvoir de décision à des agents locaux de l'État (préfets, sous-préfets)","supprimer l'administration locale","donner l'indépendance financière aux communes"], correct:1, exp:"La déconcentration délègue un pouvoir de décision à des agents qui restent des représentants de l'État central."},
        {q:"La décentralisation crée...", options:["des agents de l'État sans autonomie","des collectivités territoriales autonomes, avec indépendance financière et personnalité juridique","uniquement des préfectures","rien de nouveau"], correct:1, exp:"La décentralisation crée des collectivités autonomes dotées d'indépendance financière et de personnalité juridique."},
        {q:"Depuis la réorganisation de 2011, la Côte d'Ivoire compte combien de régions ?", options:["19","30","95","497"], correct:1, exp:"Le nombre de régions est passé de 19 à 30 lors de la réorganisation de 2011."},
        {q:"Qui administre une région en Côte d'Ivoire ?", options:["Un maire","Un préfet","Un chef de village","Un ministre"], correct:1, exp:"Une région est administrée par un préfet."},
        {q:"Parmi les difficultés de l'administration ivoirienne citées, on trouve...", options:["un excès de ressources financières","des ressources financières limitées et des conflits de compétences","l'absence totale de problèmes","une administration toujours rapide et efficace"], correct:1, exp:"Les ressources financières limitées et les conflits de compétences entre autorités comptent parmi les difficultés identifiées."}
      ]
    },
    {
      id: "h8",
      title: "Les regroupements économiques régionaux : la CEDEAO et l'Union européenne",
      content: `<p>La <strong>CEDEAO</strong> (Communauté Économique des États de l'Afrique de l'Ouest) a été créée le <strong>28 mai 1975</strong>. Son objectif est l'<strong>intégration économique</strong> régionale, favorisant le bien-être et la coopération entre ses 15 États membres actuels. Son siège se trouve à <strong>Abuja</strong> (Nigeria).</p>
      <p><strong>Organes de la CEDEAO :</strong> la Conférence des chefs d'État et de gouvernement (organe suprême, réunions annuelles, présidence tournante), le Conseil des ministres (assure le fonctionnement, se réunit deux fois par an), le Parlement (fonction législative), la Commission exécutive (met en œuvre les décisions, propose des textes, gère budgets et programmes), des Commissions techniques spécialisées (commerce/douanes/monnaie ; industrie/agriculture ; transport/énergie ; affaires sociales), la Cour de justice (fait respecter les accords, règle les différends), le Conseil économique et social (organe consultatif) et le Fonds de coopération et de compensation (finance les projets des États membres).</p>
      <p><strong>Principes fondamentaux :</strong> égalité des États membres, intégrité des frontières héritées, non-agression mutuelle, non-ingérence dans les affaires internes. <strong>Réalisations :</strong> création d'ECOBANK, mise en place de la force de maintien de la paix ECOMOG, suppression des visas entre citoyens des États membres, fonds de développement. <strong>Limites :</strong> le commerce intracommunautaire reste faible, la réduction des tarifs douaniers progresse lentement, et l'instabilité politique ainsi que la mauvaise gouvernance freinent l'intégration régionale.</p>
      <p><strong>L'Union européenne (UE)</strong> constitue le troisième groupement de population au monde (après la Chine et l'Inde) et le bloc économique le plus puissant de la planète. Son histoire passe par la CECA (1951), la CEE (1957), puis l'UE elle-même (traité de Maastricht, 1992), avec des élargissements successifs jusqu'à 27 membres en 2004.</p>
      <p><strong>Institutions de l'UE :</strong> le Conseil européen (chefs d'État/gouvernement, grandes décisions, réunions biannuelles), le Conseil des ministres (27 ministres coordonnant les politiques), la Commission européenne (27 commissaires proposant les lois, exécutant le budget, gérant les programmes), le Parlement européen (785 députés, fonctions législative et budgétaire) et la Cour de justice (27 juges, règlement des différends, respect des traités). L'UE dispose d'abondantes ressources minérales (étain, fer, cuivre, charbon), énergétiques (charbon, pétrole, gaz naturel, uranium), d'une agriculture diversifiée (blé, pommes de terre, betteraves sucrières, raisin) et d'industries avancées (mécanique, textile, aérospatiale, télécommunications, banque), avec une population de 495 millions d'habitants.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Compare les deux regroupements : la CEDEAO vise avant tout l'intégration économique de 15 pays ouest-africains, avec des résultats encore limités (faible commerce intracommunautaire) ; l'UE, née plus tôt (1951) et regroupant des pays plus riches, a atteint une intégration beaucoup plus poussée (monnaie unique dans une partie des membres, libre circulation des personnes, parlement élu au suffrage direct).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exercice type : « Cite un avantage et une limite de l'intégration régionale à travers l'exemple de la CEDEAO. » Réponse : un avantage est la suppression des visas entre citoyens des États membres, qui facilite la libre circulation des personnes et des échanges en Afrique de l'Ouest. Une limite est la faiblesse du commerce intracommunautaire, freinée notamment par une réduction trop lente des tarifs douaniers entre pays membres et par l'instabilité politique dans certains États, ce qui empêche la CEDEAO d'atteindre un niveau d'intégration économique comparable à celui de l'Union européenne.</p>`,
      quiz: [
        {q:"La CEDEAO a été créée le...", options:["28 mai 1975","17 juin 1789","14 juillet 1789","1992"], correct:0, exp:"La CEDEAO a été créée le 28 mai 1975."},
        {q:"Où se trouve le siège de la CEDEAO ?", options:["Abidjan","Abuja (Nigeria)","Bruxelles","Dakar"], correct:1, exp:"Le siège de la CEDEAO se trouve à Abuja, au Nigeria."},
        {q:"Quel organe de la CEDEAO fait respecter les accords et règle les différends entre États membres ?", options:["Le Parlement","La Cour de justice","Le Fonds de coopération et de compensation","La Commission exécutive"], correct:1, exp:"La Cour de justice de la CEDEAO fait respecter les accords et règle les différends."},
        {q:"L'Union européenne est passée par quelles étapes avant de devenir l'UE en 1992 ?", options:["CECA (1951) puis CEE (1957)","Directement l'UE dès 1945","La CEDEAO puis l'UE","Aucune étape, l'UE a toujours existé"], correct:0, exp:"L'UE est l'aboutissement d'un processus passant par la CECA (1951) puis la CEE (1957)."},
        {q:"Parmi les limites de la CEDEAO, on trouve...", options:["une intégration économique trop rapide","un commerce intracommunautaire faible et une réduction lente des tarifs douaniers","l'absence totale d'États membres","une monnaie unique déjà pleinement en place partout"], correct:1, exp:"Le commerce intracommunautaire reste faible et la réduction des tarifs douaniers progresse lentement, freinant l'intégration."},
        {q:"Combien de membres comptait l'Union européenne après les élargissements de 2004 ?", options:["15","27","30","497"], correct:1, exp:"Après les élargissements successifs, l'UE comptait 27 membres en 2004."}
      ]
    }
  ]
},

svt: {
  name: "SVT",
  color: "#8FCB4B",
  icon: "🌱",
  lessons: [
    {
      id: "s1",
      title: "Les transformations du corps de l'enfance à l'adolescence",
      content: `<p>La <strong>puberté</strong> est la période durant laquelle le corps de l'enfant se transforme progressivement en corps d'adulte, capable de se reproduire. Elle s'accompagne de <strong>transformations morphologiques</strong> (caractères sexuels secondaires : pilosité, mue de la voix, développement de la poitrine...), <strong>physiologiques</strong> (apparition des règles chez la fille, production de spermatozoïdes chez le garçon) et <strong>psychologiques</strong> (changements d'humeur, affirmation de la personnalité).</p>
      <p>Ces transformations sont déclenchées par des <strong>hormones</strong> : la testostérone chez le garçon, les œstrogènes et la progestérone chez la fille, généralement entre 10 et 16 ans selon les individus.</p>
      <p>Face à ces changements, il est important d'adopter un <strong>comportement sexuel responsable</strong>, notamment par l'abstinence à l'adolescence, en attendant d'être en mesure d'assumer les responsabilités d'une vie sexuelle et reproductive.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La puberté ne se termine pas au même âge chez tout le monde — c'est un processus qui suit un rythme propre à chaque individu, influencé par des facteurs génétiques et environnementaux (alimentation, santé générale). Ces variations sont tout à fait normales.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de classement des transformations : la mue de la voix chez le garçon est une transformation morphologique/physiologique (liée au développement du larynx), l'apparition de l'acné est une transformation physiologique liée aux hormones, tandis qu'une plus grande sensibilité émotionnelle ou un désir d'indépendance vis-à-vis des parents relèvent des transformations psychologiques. Comprendre l'origine hormonale de ces changements aide à mieux les vivre sereinement.</p>
      <h3>📌 Point du programme à ne pas manquer : les trois types de transformations</h3><p>Le programme distingue précisément trois types de transformations à la puberté. Les transformations <strong>morphologiques</strong> (la forme du corps) : pilosité (pubis, aisselles, visage chez le garçon), développement des seins et élargissement du bassin chez la fille, croissance musculaire chez le garçon, croissance rapide en général. Les transformations <strong>physiologiques</strong> (le fonctionnement des organes) : chez le garçon, les premières éjaculations (parfois nocturnes et involontaires) ; chez la fille, les premières règles (apparition des menstruations), en général entre <strong>10 et 12 ans</strong>. Les transformations <strong>psychologiques</strong> : recherche d'identité, sautes d'humeur, besoin d'indépendance vis-à-vis des parents, recherche de nouveaux modèles. Un rapport sexuel précoce expose à des risques graves : grossesse non désirée, interruption de la scolarité, complications de l'accouchement, ou séquelles d'un avortement clandestin — d'où l'importance de l'abstinence à cet âge.</p>`,
      quiz: [
        {q:"La puberté est déclenchée principalement par...", options:["l'alimentation seule","des hormones (testostérone, œstrogènes...)","le climat","la taille des parents"], correct:1, exp:"Ce sont les hormones sexuelles (testostérone chez le garçon, œstrogènes/progestérone chez la fille) qui déclenchent la puberté."},
        {q:"Quel type de transformation correspond à un changement d'humeur à l'adolescence ?", options:["Morphologique","Physiologique","Psychologique","Aucune de ces réponses"], correct:2, exp:"Les changements d'humeur relèvent des transformations psychologiques de la puberté."},
        {q:"L'hormone principale responsable des transformations chez le garçon est...", options:["la testostérone","les œstrogènes","la progestérone","l'insuline"], correct:0, exp:"La testostérone est l'hormone sexuelle principale responsable des transformations pubertaires masculines."},
        {q:"Quel comportement est recommandé à l'adolescence face à la sexualité naissante ?", options:["Aucune précaution n'est nécessaire","L'abstinence, en attendant d'être prêt à en assumer les responsabilités","Ignorer le sujet complètement","Cela ne concerne que les adultes"], correct:1, exp:"Le comportement sexuel responsable recommandé à l'adolescence est l'abstinence."},
        {q:"L'âge de la puberté est-il identique pour tout le monde ?", options:["Oui, exactement 12 ans pour tous","Non, cela varie selon les individus (souvent entre 10 et 16 ans)","Oui, toujours à 18 ans","Cela ne dépend que du sexe"], correct:1, exp:"L'âge de la puberté varie selon les individus, en général entre 10 et 16 ans."}
      ,
        { q: "Parmi les propositions suivantes, laquelle est une transformation PHYSIOLOGIQUE de la puberté (et non morphologique ou psychologique) ?", options: ["L'apparition de poils au pubis", "L'apparition des premières règles chez la fille", "Le besoin d'indépendance vis-à-vis des parents", "Le développement de la musculature"], correct: 1, exp: "Une transformation physiologique concerne le fonctionnement d'un organe : les règles marquent le début du fonctionnement cyclique de l'appareil reproducteur féminin (en général entre 10 et 12 ans)." }
      ]
    },
    {
      id: "s2",
      title: "De la fécondation au fœtus",
      content: `<p>Chez la femme, un <strong>ovule</strong> est libéré environ une fois par mois lors de l'<strong>ovulation</strong> (cycle menstruel d'environ 28 jours). Lors d'un rapport sexuel, des <strong>spermatozoïdes</strong> sont déposés dans les voies génitales féminines ; s'ils rencontrent un ovule, la <strong>fécondation</strong> peut avoir lieu : un spermatozoïde pénètre l'ovule, formant une cellule-œuf.</p>
      <p>La cellule-œuf se divise ensuite de nombreuses fois en se déplaçant vers l'utérus, où elle s'implante (<strong>nidation</strong>) et devient un <strong>embryon</strong>, puis, après environ 2 mois de développement, un <strong>fœtus</strong>. La grossesse (<strong>gestation</strong>) dure environ 9 mois jusqu'à la naissance.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pendant la grossesse, l'embryon puis le fœtus se développent dans l'utérus et sont nourris grâce au <strong>placenta</strong>, un organe qui assure les échanges de nutriments et d'oxygène entre le sang de la mère et celui du fœtus, sans que les deux sangs ne se mélangent directement.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Chronologie simplifiée d'une grossesse : fécondation (jour 0) → cellule-œuf qui se divise en migrant vers l'utérus (environ 1 semaine) → nidation dans la paroi utérine → stade embryon (jusqu'à 2 mois, formation des principaux organes) → stade fœtus (de 2 à 9 mois, croissance et maturation des organes) → naissance (accouchement, vers 9 mois). Chaque étape est essentielle et une perturbation à l'un de ces stades peut avoir des conséquences sur le développement.</p>
      <h3>📌 Point du programme à ne pas manquer : comparer spermatozoïde et ovule</h3><p>Les deux cellules reproductrices ont des caractéristiques opposées, à bien distinguer. Le <strong>spermatozoïde</strong> (produit par les testicules) est une cellule allongée composée de trois parties (tête, pièce intermédiaire, flagelle), mobile grâce à son flagelle, et ne vit qu'environ <strong>3 jours</strong>. L'<strong>ovule</strong> (produit par les ovaires) est une cellule sphérique, immobile, plus grosse que le spermatozoïde, et ne vit qu'environ <strong>1 jour</strong> s'il n'est pas fécondé. La fécondation se déroule en plusieurs étapes : dépôt des spermatozoïdes dans le vagin, migration vers les trompes grâce au flagelle, rencontre avec l'ovule, pénétration d'un seul spermatozoïde (une membrane de fécondation se forme aussitôt pour empêcher l'entrée d'un autre), puis fusion des noyaux des deux cellules pour former une nouvelle cellule-œuf : le <strong>zygote</strong>.</p>`,
      quiz: [
        {q:"La fécondation est...", options:["la libération de l'ovule","la rencontre d'un spermatozoïde et d'un ovule","la naissance du bébé","la formation du placenta"], correct:1, exp:"La fécondation est la rencontre et la fusion d'un spermatozoïde et d'un ovule."},
        {q:"Combien de temps dure en moyenne une grossesse humaine ?", options:["3 mois","6 mois","9 mois","12 mois"], correct:2, exp:"La gestation humaine dure en moyenne environ 9 mois."},
        {q:"L'organe qui assure les échanges entre la mère et le fœtus est...", options:["l'utérus seul","le placenta","l'ovaire","le vagin"], correct:1, exp:"Le placenta assure les échanges de nutriments et d'oxygène entre la mère et le fœtus."},
        {q:"Après combien de temps de développement environ l'embryon devient-il un fœtus ?", options:["1 semaine","2 mois","6 mois","9 mois"], correct:1, exp:"On parle de fœtus à partir d'environ 2 mois de développement, une fois les principaux organes formés."},
        {q:"L'ovulation se produit environ...", options:["une fois par jour","une fois par mois","une fois par an","une seule fois dans la vie"], correct:1, exp:"L'ovulation se produit environ une fois par mois, au cours du cycle menstruel."}
      ,
        { q: "Pourquoi une membrane de fécondation se forme-t-elle juste après la pénétration d'un spermatozoïde dans l'ovule ?", options: ["Pour nourrir le zygote", "Pour empêcher un autre spermatozoïde de pénétrer à son tour", "Pour permettre au spermatozoïde de respirer", "Pour transformer l'ovule en spermatozoïde"], correct: 1, exp: "La membrane de fécondation empêche la polyspermie (l'entrée d'un second spermatozoïde), garantissant qu'un seul patrimoine génétique paternel se combine à celui de la mère." }
      ]
    },
    {
      id: "s3",
      title: "La formation des roches endogènes",
      content: `<p>Les <strong>roches endogènes</strong> (ou roches magmatiques) se forment à partir du <strong>magma</strong>, une roche en fusion (liquide très chaud) présente en profondeur dans la Terre. Selon la vitesse et le lieu de son refroidissement, on distingue deux grandes familles.</p>
      <p>Les <strong>roches volcaniques</strong> (comme le basalte) se forment quand le magma remonte jusqu'à la surface (lors d'une éruption volcanique) et <strong>refroidit rapidement</strong> à l'air libre : les cristaux n'ont pas le temps de bien se former, la roche a une texture fine, parfois vitreuse.</p>
      <p>Les <strong>roches plutoniques</strong> (comme le granite) se forment quand le magma refroidit <strong>lentement en profondeur</strong>, sans atteindre la surface : les cristaux ont le temps de bien grandir, la roche a une texture grenue (on distingue les cristaux à l'œil nu).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La vitesse de refroidissement du magma est donc le facteur clé qui détermine la texture de la roche endogène obtenue : refroidissement rapide → cristaux petits ou absents (roche volcanique) ; refroidissement lent → gros cristaux visibles (roche plutonique).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple comparatif : le granite (roche plutonique) présente de gros cristaux de quartz, feldspath et mica clairement visibles à l'œil nu, car le magma qui lui a donné naissance a refroidi très lentement, en profondeur, pendant parfois des milliers d'années. Le basalte (roche volcanique), au contraire, a une texture fine et compacte car il provient d'un magma qui a jailli en surface lors d'une éruption et a refroidi en quelques heures ou quelques jours seulement à l'air libre.</p>
      <h3>📌 Point du programme à ne pas manquer : les trois textures des roches endogènes</h3><p>La <strong>texture</strong> d'une roche désigne l'ensemble des caractéristiques (taille, forme, disposition) des éléments qui la composent, et dépend directement de la vitesse de refroidissement du magma. En profondeur (au-delà de 800°C environ), le refroidissement est très lent : les cristaux ont le temps de grossir, on obtient une texture <strong>pegmatitique</strong> (cristaux visibles, centimétriques — ex : la pegmatite). À semi-profondeur, le refroidissement est plus rapide : texture <strong>grenue</strong> (cristaux millimétriques — ex : le granite). En surface, le refroidissement est très rapide : texture <strong>microlitique</strong> (cristaux invisibles à l'œil nu — ex : le basalte). Ces roches sont formées de trois minéraux principaux : le <strong>quartz</strong> (le plus dur, incolore ou grisâtre, grain vitreux), le <strong>feldspath</strong> (blanc ou rose, aspect lamellaire) et le <strong>mica</strong> (lamelles souples et brillantes).</p>`,
      quiz: [
        {q:"Les roches endogènes se forment à partir de...", options:["l'érosion du sol","le magma en fusion","les débris végétaux","l'eau de pluie"], correct:1, exp:"Les roches endogènes (magmatiques) proviennent du refroidissement du magma."},
        {q:"Une roche volcanique, comme le basalte, se forme lors d'un refroidissement...", options:["rapide, en surface","lent, en profondeur","instantané, sous l'eau","aucun refroidissement n'est nécessaire"], correct:0, exp:"Les roches volcaniques se forment quand le magma refroidit rapidement à la surface."},
        {q:"Une roche plutonique, comme le granite, se forme lors d'un refroidissement...", options:["rapide et en surface","lent et en profondeur","identique à celui du basalte","au contact de l'air uniquement"], correct:1, exp:"Les roches plutoniques se forment par refroidissement lent, en profondeur."},
        {q:"Pourquoi le granite a-t-il de gros cristaux visibles ?", options:["Refroidissement rapide","Refroidissement lent, laissant le temps aux cristaux de grandir","Il n'a pas de cristaux","À cause de la pluie"], correct:1, exp:"Le refroidissement lent en profondeur permet aux cristaux de bien se former et de grandir."},
        {q:"Le magma est...", options:["une roche solide froide","une roche en fusion, liquide et très chaude","de l'eau souterraine","du sable compacté"], correct:1, exp:"Le magma est une roche en fusion présente en profondeur dans la Terre."}
      ,
        { q: "Une roche formée en profondeur, avec un refroidissement très lent du magma, présente une texture :", options: ["Microlitique (cristaux invisibles)", "Pegmatitique (grands cristaux visibles)", "Vitreuse (sans aucun cristal)", "Grenue fine (cristaux millimétriques)"], correct: 1, exp: "Plus le refroidissement est lent (donc plus la roche se forme en profondeur), plus les cristaux ont le temps de grossir : c'est la texture pegmatitique." }
      ]
    },
    {
      id: "s4",
      title: "La dégradation des roches endogènes",
      content: `<p>Une fois formées et exposées à la surface, les roches endogènes subissent une <strong>dégradation</strong> progressive appelée <strong>altération</strong>, sous l'effet de plusieurs facteurs : les variations de température (dilatation/contraction qui fissure la roche), l'eau (gel/dégel qui élargit les fissures, dissolution de certains minéraux), et l'action des êtres vivants (racines des plantes qui s'infiltrent dans les fissures, micro-organismes).</p>
      <p>Cette altération transforme progressivement la roche compacte en <strong>fragments</strong> de plus en plus petits (blocs, graviers, sables, puis argiles), qui participent ensuite à la formation du sol.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le phénomène de <strong>gélifraction</strong> (ou gel-dégel) est particulièrement efficace pour fragmenter les roches : l'eau s'infiltre dans une fissure, gèle (et augmente de volume en gelant), ce qui élargit la fissure ; répété de nombreuses fois, ce cycle finit par faire éclater la roche.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple concret : un bloc de granite exposé en montagne subit, au fil des saisons, des cycles répétés de gel et dégel de l'eau infiltrée dans ses fissures naturelles. Chaque cycle élargit légèrement les fissures, jusqu'à ce que des morceaux entiers du bloc se détachent. Ces fragments continuent ensuite à se dégrader sous l'effet de la pluie et du vent, devenant progressivement des graviers puis des sables, qui participeront à la formation d'un futur sol à cet endroit.</p>
      <h3>📌 Point du programme à ne pas manquer : dégradation physique et chimique</h3><p>Le programme distingue deux mécanismes de dégradation des roches endogènes. La dégradation <strong>physique</strong> (mécanique) : les variations de température font se dilater puis se contracter les minéraux, ce qui finit par les fissurer ; les racines des plantes s'insèrent dans les fissures et les élargissent en grossissant ; l'action humaine (explosifs) fracture aussi les roches. La dégradation <strong>chimique</strong> : l'eau de pluie absorbe le CO₂ et l'O₂ de l'air et devient acide ; cette eau acide attaque chimiquement certains minéraux (hydrolyse). Ces dégradations suivent des étapes : apparition de fissures (diaclases) → blocs anguleux → arène (débris accumulés dans les fissures) → chaos (blocs arrondis empilés). Les produits finaux sont : l'<strong>argile</strong> (issue du mica et du feldspath — utilisée en construction et poterie), la <strong>rouille</strong> (issue de l'oxydation du fer du mica noir) et les <strong>grains de sable</strong> (le quartz, très résistant, reste presque intact — utilisé en construction et verrerie).</p>`,
      quiz: [
        {q:"L'altération des roches désigne...", options:["leur formation initiale","leur dégradation progressive en surface","leur fusion en profondeur","leur disparition instantanée"], correct:1, exp:"L'altération est le processus de dégradation progressive des roches exposées en surface."},
        {q:"La gélifraction est un phénomène lié à...", options:["la chaleur uniquement","le cycle du gel et du dégel de l'eau","les êtres vivants uniquement","le vent seul"], correct:1, exp:"La gélifraction résulte du gel de l'eau infiltrée dans les fissures, qui élargit ces fissures en augmentant de volume."},
        {q:"Les racines des plantes peuvent-elles contribuer à la dégradation des roches ?", options:["Non, jamais","Oui, en s'infiltrant dans les fissures et en les élargissant","Seulement sous l'eau","Seulement en hiver"], correct:1, exp:"Les racines qui s'infiltrent dans les fissures des roches contribuent à leur fragmentation progressive."},
        {q:"L'altération d'une roche produit finalement...", options:["du magma","des fragments de plus en plus petits (graviers, sables, argiles)","de l'eau pure","rien de particulier"], correct:1, exp:"L'altération fragmente progressivement la roche en morceaux de plus en plus petits."},
        {q:"Les fragments issus de l'altération des roches participent à...", options:["la formation du sol","la fusion du magma","la formation des nuages","aucun processus particulier"], correct:0, exp:"Ces fragments constituent la matière minérale de base qui participe à la formation du sol."}
      ,
        { q: "Quel minéral des roches endogènes, très résistant à la dégradation, se retrouve presque intact sous forme de grains de sable ?", options: ["Le mica", "Le feldspath", "Le quartz", "La rouille"], correct: 2, exp: "Le quartz est le minéral le plus dur et le plus résistant : il ne se transforme pas en argile comme le mica et le feldspath, il reste sous forme de grains de sable." }
      ]
    },
    {
      id: "s5",
      title: "La formation du sol",
      content: `<p>Le <strong>sol</strong> se forme à partir de la <strong>roche mère</strong> (la roche sous-jacente altérée) qui se fragmente progressivement, combinée à de la <strong>matière organique</strong> (débris de végétaux et d'animaux décomposés par des micro-organismes, formant l'<strong>humus</strong>).</p>
      <p>Un sol se compose donc de plusieurs éléments mélangés : des fragments minéraux (issus de l'altération de la roche mère), de la matière organique (humus), de l'eau, de l'air, et de nombreux organismes vivants (vers de terre, bactéries, champignons, insectes) qui participent activement à sa transformation continue.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un <strong>profil de sol</strong> (une coupe verticale) fait apparaître plusieurs couches, appelées <strong>horizons</strong> : l'horizon supérieur, riche en humus (souvent foncé), l'horizon intermédiaire, et l'horizon profond proche de la roche mère non encore transformée. La formation complète d'un sol fertile est un processus très lent, qui peut prendre plusieurs siècles.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : en forêt tropicale ivoirienne, les feuilles mortes tombées au sol sont rapidement décomposées par les micro-organismes et les insectes (grâce à la chaleur et l'humidité), formant un humus riche qui se mélange aux fragments minéraux issus de l'altération de la roche mère sous-jacente. Cette combinaison donne des sols souvent fertiles, mais qui peuvent s'appauvrir rapidement s'ils sont déforestés, car la matière organique n'est alors plus renouvelée en continu.</p>
      <h3>📌 Point du programme à ne pas manquer : les trois horizons du sol</h3><p>Le sol se forme par la superposition de plusieurs couches appelées <strong>horizons</strong>, et résulte du mélange de constituants minéraux (sable, argile, débris de roche altérée) et organiques (feuilles mortes, branches, restes d'animaux, vers de terre en décomposition). On distingue généralement trois horizons : l'<strong>horizon A</strong> (en surface), le plus riche, mélange de matière organique décomposée (humus) et de matière minérale ; l'<strong>horizon B</strong>, intermédiaire, essentiellement minéral ; et l'<strong>horizon C</strong>, la roche-mère partiellement altérée, à la base du profil. Cette organisation en couches (le « profil du sol ») explique pourquoi la couleur et la texture d'un sol changent souvent avec la profondeur.</p>`,
      quiz: [
        {q:"Le sol se forme à partir de...", options:["uniquement de l'eau","la roche mère altérée et de la matière organique","uniquement de l'air","le magma directement"], correct:1, exp:"Le sol résulte de la combinaison de fragments de roche mère altérée et de matière organique (humus)."},
        {q:"L'humus est...", options:["une roche magmatique","la matière organique issue de la décomposition des végétaux et animaux","un type de sable","de l'eau souterraine"], correct:1, exp:"L'humus provient de la décomposition de la matière organique (débris végétaux et animaux)."},
        {q:"Qui décompose la matière organique pour former l'humus ?", options:["Le vent uniquement","Des micro-organismes (bactéries, champignons)","La lumière du soleil seule","Personne, c'est spontané"], correct:1, exp:"Ce sont des micro-organismes (bactéries, champignons) qui décomposent la matière organique."},
        {q:"Un profil de sol montre...", options:["une seule couche uniforme","plusieurs couches appelées horizons","uniquement de la roche","uniquement de l'eau"], correct:1, exp:"Un profil de sol révèle plusieurs horizons superposés, de la surface riche en humus jusqu'à la roche mère."},
        {q:"La formation complète d'un sol fertile est un processus...", options:["instantané","très lent, pouvant prendre plusieurs siècles","qui dure un jour","impossible dans la nature"], correct:1, exp:"La formation d'un sol fertile est un processus très lent, qui peut prendre plusieurs siècles."}
      ,
        { q: "Dans le profil d'un sol, quel horizon correspond à la roche-mère partiellement altérée, à la base ?", options: ["Horizon A", "Horizon B", "Horizon C", "Horizon D"], correct: 2, exp: "L'horizon C, le plus profond, correspond à la roche-mère en cours d'altération, à partir de laquelle se forme progressivement le sol." }
      ]
    },
    {
      id: "s6",
      title: "Les textures des sols",
      content: `<p>La <strong>texture</strong> d'un sol dépend de la proportion de trois types de particules minérales qu'il contient : le <strong>sable</strong> (grosses particules, laisse bien passer l'eau), le <strong>limon</strong> (particules moyennes), et l'<strong>argile</strong> (très petites particules, retient bien l'eau mais draine mal).</p>
      <p>On distingue ainsi des sols <strong>sableux</strong> (drainent vite, se dessèchent rapidement), des sols <strong>argileux</strong> (retiennent l'eau, deviennent collants et lourds quand ils sont humides), et des sols <strong>limoneux</strong> ou <strong>équilibrés</strong> (un bon mélange, souvent les plus fertiles pour l'agriculture).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On peut déterminer approximativement la texture d'un sol par un test simple : prendre un peu de terre humide dans la main et essayer d'en faire un boudin. Si elle s'effrite (ne tient pas), le sol est sableux ; si elle forme un boudin souple et collant, le sol est argileux ; entre les deux, il est limoneux.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple pratique pour un agriculteur : un sol trop sableux draine l'eau trop vite et nécessite des arrosages fréquents, tandis qu'un sol trop argileux retient l'eau en excès, ce qui peut asphyxier les racines des plantes en cas de fortes pluies. Un sol de texture équilibrée (mélange de sable, limon et argile), comme on en trouve dans de nombreuses zones agricoles fertiles, offre le meilleur compromis : il retient assez d'eau pour les plantes tout en laissant l'excès s'écouler correctement.</p>
      <h3>📌 Point du programme à ne pas manquer : les catégories granulométriques</h3><p>Pour déterminer la texture d'un sol par tamisage, on classe ses éléments minéraux en quatre catégories selon leur diamètre : le <strong>sable grossier</strong> (2 à 0,2 mm), le <strong>sable fin</strong> (0,2 à 0,02 mm), le <strong>limon</strong> (0,02 à 0,002 mm) et l'<strong>argile</strong> (moins de 0,002 mm). Méthode : on prend un échantillon de sol sec (débarrassé des débris organiques et des gros éléments), on le fait passer à travers une série de tamis de mailles décroissantes, puis on pèse ce qui reste sur chaque tamis. Le pourcentage de chaque fraction se calcule ainsi : <strong>(masse de la fraction ÷ masse totale de l'échantillon) × 100</strong>. La texture du sol est ensuite nommée d'après la fraction dominante (sol sableux, argileux ou limoneux), ce qui est essentiel pour savoir comment il retient l'eau et comment le fertiliser.</p>`,
      quiz: [
        {q:"Un sol sableux se caractérise par...", options:["une bonne rétention d'eau","un bon drainage mais un dessèchement rapide","une texture collante","l'absence totale d'eau"], correct:1, exp:"Les grosses particules de sable laissent l'eau s'écouler facilement, d'où un drainage rapide mais un séchage rapide aussi."},
        {q:"Un sol argileux se caractérise par...", options:["un excellent drainage","une bonne rétention d'eau mais un drainage difficile","l'absence de particules","une texture toujours sèche"], correct:1, exp:"Les particules très fines de l'argile retiennent bien l'eau mais la laissent mal s'écouler."},
        {q:"Quel type de sol est généralement le plus fertile pour l'agriculture ?", options:["Un sol purement sableux","Un sol purement argileux","Un sol limoneux/équilibré (mélange)","Aucun sol n'est plus fertile qu'un autre"], correct:2, exp:"Un sol équilibré, mélangeant sable, limon et argile, offre généralement le meilleur compromis pour l'agriculture."},
        {q:"Comment teste-t-on simplement la texture d'un sol ?", options:["En le goûtant","En essayant d'en former un boudin avec de la terre humide","En le pesant","En le brûlant"], correct:1, exp:"Le test du boudin (former un boudin de terre humide dans la main) permet d'estimer si un sol est sableux, argileux ou limoneux."},
        {q:"Les particules les plus fines d'un sol sont celles de...", options:["sable","limon","argile","gravier"], correct:2, exp:"L'argile est constituée des particules minérales les plus fines du sol."}
      ,
        { q: "Un échantillon de sol sec de 200 g est tamisé ; 50 g restent bloqués dans la catégorie « argile ». Quel est le pourcentage d'argile dans ce sol ?", options: ["10 %", "20 %", "25 %", "50 %"], correct: 2, exp: "Pourcentage = (masse de la fraction ÷ masse totale) × 100 = (50 ÷ 200) × 100 = 25 %." }
      ]
    },
    {
      id: "s7",
      title: "Les maladies liées à l'eau : identification",
      content: `<p>L'eau, si elle n'est pas propre, peut transmettre de nombreuses <strong>maladies</strong>. On distingue notamment le <strong>choléra</strong> et la <strong>fièvre typhoïde</strong> (causées par des bactéries présentes dans une eau souillée par des matières fécales), et le <strong>paludisme</strong> (transmis par les moustiques qui se reproduisent dans les eaux stagnantes).</p>
      <p>Ces maladies se manifestent généralement par des symptômes comme la diarrhée, les vomissements, la fièvre, la déshydratation, qui peuvent être graves voire mortels sans traitement rapide, en particulier chez les jeunes enfants.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On identifie une eau potentiellement dangereuse par plusieurs signes : présence de matières en suspension, couleur ou odeur anormale, proximité d'une source de pollution (latrines, déchets, eaux usées). Mais attention, une eau qui paraît claire et propre à l'œil nu peut néanmoins être contaminée par des micro-organismes invisibles.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de chaîne de transmission : dans un village sans système d'assainissement adapté, les matières fécales contaminées peuvent atteindre le puits d'eau potable par ruissellement lors de fortes pluies. Une personne qui boit cette eau sans la traiter peut alors contracter le choléra, dont les symptômes (diarrhées sévères et vomissements) apparaissent en quelques heures à quelques jours. Sans réhydratation rapide, la déshydratation qui en résulte peut devenir mortelle, particulièrement chez les enfants et les personnes âgées.</p>
      <h3>📌 Point du programme à ne pas manquer : deux mécanismes de transmission</h3><p>L'eau transmet des maladies selon deux grands mécanismes. 1) Les <strong>maladies du péril fécal</strong> (transmission directe par ingestion d'eau ou d'aliments souillés par des matières fécales) : la <strong>fièvre typhoïde</strong> (bactérie Salmonella typhi — maux de tête, fièvre, parfois perforations intestinales), l'<strong>amibiase</strong> (une amibe — douleurs abdominales, diarrhée, glaires dans les selles), le <strong>choléra</strong> (bactérie Vibrio cholerae — diarrhée aqueuse sévère, vomissements, déshydratation), la <strong>bilharziose</strong> (un schistosome qui pénètre directement à travers la peau). 2) Les <strong>maladies à vecteur</strong> (un animal intermédiaire transmet le germe) : le <strong>paludisme</strong> (Plasmodium, transmis par l'anophèle femelle), l'<strong>onchocercose</strong> (Onchocerca volvulus, transmis par la simulie), la <strong>dracunculose</strong>/ver de Guinée (transmis par un petit crustacé, le cyclops), et la <strong>trypanosomiase</strong> (transmise par la glossine/mouche tsé-tsé).</p>`,
      quiz: [
        {q:"Le choléra est causé par...", options:["des moustiques","des bactéries présentes dans une eau souillée","le froid","la chaleur du soleil"], correct:1, exp:"Le choléra est une maladie bactérienne transmise par une eau contaminée par des matières fécales."},
        {q:"Le paludisme est transmis par...", options:["l'eau directement bue","les moustiques qui se reproduisent dans les eaux stagnantes","l'air uniquement","le contact avec la peau"], correct:1, exp:"Le paludisme est transmis par la piqûre de moustiques qui se reproduisent dans les eaux stagnantes."},
        {q:"Une eau qui paraît claire à l'œil nu peut-elle être dangereuse ?", options:["Non, jamais","Oui, elle peut contenir des micro-organismes invisibles","Seulement si elle a une odeur","Seulement si elle est colorée"], correct:1, exp:"Des micro-organismes pathogènes invisibles peuvent contaminer une eau apparemment claire."},
        {q:"Quel symptôme est fréquent dans les maladies liées à l'eau contaminée ?", options:["La toux sèche","La diarrhée et les vomissements","Les douleurs articulaires uniquement","La perte de cheveux"], correct:1, exp:"Diarrhées et vomissements sont des symptômes très fréquents des maladies hydriques."},
        {q:"Pourquoi les jeunes enfants sont-ils plus vulnérables à ces maladies ?", options:["Ils boivent plus d'eau que les adultes","La déshydratation liée à la diarrhée les affecte plus rapidement et gravement","Ils sont immunisés naturellement","Cela ne les concerne pas"], correct:1, exp:"Les jeunes enfants se déshydratent plus vite et plus dangereusement en cas de diarrhée sévère."}
      ,
        { q: "Quelle maladie liée à l'eau est transmise par pénétration directe du parasite à travers la peau, sans vecteur animal ?", options: ["Le paludisme", "La bilharziose", "L'onchocercose", "La trypanosomiase"], correct: 1, exp: "La bilharziose est causée par un schistosome qui pénètre directement à travers la peau lors d'un contact avec une eau infestée — contrairement aux maladies à vecteur qui nécessitent un insecte ou un crustacé intermédiaire." }
      ]
    },
    {
      id: "s8",
      title: "La lutte contre les maladies liées à l'eau",
      content: `<p>Pour lutter contre les maladies liées à l'eau, plusieurs mesures sont essentielles : <strong>traiter l'eau</strong> avant de la consommer (voir la leçon suivante), <strong>assainir</strong> l'environnement (latrines propres et éloignées des points d'eau, évacuation correcte des déchets), <strong>lutter contre les moustiques</strong> (moustiquaires imprégnées, élimination des eaux stagnantes) pour prévenir le paludisme, et adopter de bonnes pratiques d'<strong>hygiène</strong> (lavage des mains, hygiène alimentaire).</p>
      <p>La <strong>vaccination</strong> existe aussi contre certaines maladies liées à l'eau (comme la fièvre typhoïde), en complément de ces mesures préventives.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La prévention est toujours plus efficace et moins coûteuse que le traitement d'une maladie déjà déclarée. C'est pourquoi les campagnes de sensibilisation sur l'hygiène de l'eau et de l'assainissement sont une priorité de santé publique, en particulier dans les zones où l'accès à l'eau potable reste difficile.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de plan d'action pour une communauté villageoise : construire des latrines éloignées d'au moins 30 mètres du point d'eau potable (pour éviter toute infiltration de contamination), organiser le nettoyage régulier des alentours des points d'eau pour éliminer les eaux stagnantes propices aux moustiques, distribuer des moustiquaires imprégnées pour les nuits, et organiser des séances de sensibilisation au lavage des mains avec du savon avant les repas et après être allé aux toilettes.</p>
      <h3>📌 Point du programme à ne pas manquer : des moyens de lutte adaptés à chaque mécanisme</h3><p>Puisque les maladies liées à l'eau se transmettent selon deux mécanismes différents (péril fécal ou vecteur — voir la leçon précédente), les moyens de lutte doivent être adaptés à chacun. Contre les <strong>maladies du péril fécal</strong> : traiter et rendre potable l'eau de boisson, construire et utiliser des latrines pour éviter de souiller les points d'eau, se laver les mains avant de manger et après être allé aux toilettes, protéger les aliments. Contre les <strong>maladies à vecteur</strong> : dormir sous une moustiquaire imprégnée (contre le paludisme), assainir les zones d'eau stagnante où se reproduisent moustiques et simulies (drainage, comblement), éviter le contact prolongé avec une eau infestée par les cyclops ou les schistosomes, et suivre les campagnes de vaccination ou de traitement de masse quand elles existent. L'éducation sanitaire de la population (sensibilisation à l'hygiène) reste un moyen de lutte transversal, efficace contre les deux types de maladies.</p>`,
      quiz: [
        {q:"Quelle mesure aide à prévenir le paludisme ?", options:["Boire plus d'eau","Éliminer les eaux stagnantes et utiliser des moustiquaires","Manger plus de sucre","Éviter de se laver"], correct:1, exp:"Éliminer les eaux stagnantes (lieu de reproduction des moustiques) et utiliser des moustiquaires réduit fortement le risque de paludisme."},
        {q:"Où doivent être construites les latrines par rapport aux points d'eau ?", options:["Le plus près possible","Éloignées, pour éviter toute contamination","Directement au-dessus du puits","Peu importe l'emplacement"], correct:1, exp:"Les latrines doivent être suffisamment éloignées des points d'eau pour éviter toute infiltration de matières contaminantes."},
        {q:"Existe-t-il un vaccin contre certaines maladies liées à l'eau ?", options:["Non, aucun vaccin n'existe","Oui, par exemple contre la fièvre typhoïde","Seulement contre le rhume","Uniquement pour les animaux"], correct:1, exp:"Des vaccins existent contre certaines maladies liées à l'eau, comme la fièvre typhoïde."},
        {q:"Le lavage des mains est une mesure de...", options:["traitement de l'eau","hygiène préventive","vaccination","aucune de ces réponses"], correct:1, exp:"Le lavage des mains est une mesure d'hygiène qui prévient la transmission de nombreuses maladies."},
        {q:"Pourquoi la prévention est-elle préférable au traitement ?", options:["Elle est plus coûteuse","Elle est généralement plus efficace et moins coûteuse que soigner une maladie déjà déclarée","Elle n'a aucun avantage","Le traitement est toujours plus simple"], correct:1, exp:"Prévenir une maladie coûte généralement moins cher et évite les souffrances liées à la maladie elle-même."}
      ,
        { q: "Quel moyen de lutte est spécifiquement adapté aux maladies à VECTEUR (comme le paludisme), plutôt qu'aux maladies du péril fécal ?", options: ["Se laver les mains avant de manger", "Construire des latrines", "Dormir sous une moustiquaire imprégnée", "Faire bouillir l'eau de boisson"], correct: 2, exp: "La moustiquaire imprégnée protège contre les piqûres de l'anophèle, vecteur du paludisme — c'est une mesure ciblant un vecteur animal, différente des mesures d'hygiène contre le péril fécal (latrines, lavage des mains, traitement de l'eau)." }
      ]
    },
    {
      id: "s9",
      title: "Le traitement de l'eau souillée",
      content: `<p>Pour rendre une eau souillée potable, on utilise plusieurs techniques, souvent combinées : la <strong>décantation</strong> (laisser reposer l'eau pour que les particules lourdes se déposent au fond), la <strong>filtration</strong> (faire passer l'eau à travers un filtre, par exemple du sable, du charbon actif ou un tissu propre, pour retenir les impuretés), et la <strong>désinfection</strong> (éliminer les micro-organismes pathogènes).</p>
      <p>La désinfection peut se faire par <strong>ébullition</strong> (faire bouillir l'eau au moins quelques minutes, ce qui tue la plupart des micro-organismes), par <strong>chloration</strong> (ajout de quelques gouttes d'eau de Javel diluée ou de comprimés de chlore), ou par exposition aux <strong>rayons UV du soleil</strong> (méthode SODIS : eau claire dans une bouteille plastique transparente exposée au soleil plusieurs heures).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Ces techniques doivent souvent être combinées : par exemple, décanter puis filtrer une eau trouble avant de la désinfecter, car la présence de particules en suspension peut réduire l'efficacité de la chloration ou des UV en « protégeant » certains micro-organismes de leur action.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de procédure complète pour traiter une eau de rivière trouble : 1) Laisser reposer l'eau plusieurs heures dans un récipient pour la décantation (les particules lourdes se déposent au fond) ; 2) Verser délicatement l'eau claire du dessus à travers un filtre (tissu propre, ou filtre à sable) pour retenir les particules restantes ; 3) Faire bouillir cette eau filtrée pendant au moins 3 minutes, ou ajouter quelques gouttes d'eau de Javel diluée adaptée à la consommation, pour éliminer les micro-organismes pathogènes restants. L'eau est alors prête à être consommée en toute sécurité.</p>
      <h3>📌 Point du programme à ne pas manquer : deux familles de procédés complémentaires</h3><p>Le traitement de l'eau souillée combine deux familles de procédés, complémentaires et non substituables l'une à l'autre. 1) La <strong>destruction des microbes</strong> : l'<strong>ébullition</strong> (la chaleur tue les microbes) et la <strong>désinfection/chloration</strong> (l'eau de Javel tue les microbes). L'observation au microscope confirme l'effet : les microbes sont mobiles et vivants dans une eau contaminée, mais apparaissent groupés et immobiles (morts) après ébullition ou chloration. 2) L'<strong>élimination des déchets solides</strong> : la <strong>filtration</strong> (l'eau traverse un tissu ou un filtre — sable, charbon, tissu propre — qui retient les débris) et la <strong>décantation</strong> (les déchets solides se déposent au fond du récipient quand l'eau est laissée au repos). Point essentiel à retenir : un seul de ces procédés ne suffit jamais à rendre une eau totalement potable — filtrer une eau ne tue pas les microbes, et faire bouillir une eau chargée de déchets solides ne les élimine pas.</p>`,
      quiz: [
        {q:"La décantation consiste à...", options:["faire bouillir l'eau","laisser reposer l'eau pour que les particules lourdes se déposent","ajouter du chlore","exposer l'eau au soleil"], correct:1, exp:"La décantation utilise la gravité : les particules lourdes se déposent au fond avec le temps."},
        {q:"La méthode SODIS pour désinfecter l'eau utilise...", options:["le chlore","l'exposition aux rayons UV du soleil","l'ébullition","le froid"], correct:1, exp:"La méthode SODIS expose l'eau claire aux rayons UV du soleil pendant plusieurs heures pour la désinfecter."},
        {q:"Combien de temps faut-il faire bouillir l'eau pour la désinfecter efficacement ?", options:["Quelques secondes","Au moins quelques minutes","24 heures","Cela n'a aucun effet"], correct:1, exp:"Il faut faire bouillir l'eau au moins quelques minutes pour éliminer la plupart des micro-organismes pathogènes."},
        {q:"Pourquoi filtrer l'eau avant de la désinfecter chimiquement ?", options:["Ce n'est jamais nécessaire","Les particules en suspension peuvent réduire l'efficacité de la désinfection","Cela rend l'eau plus trouble","Cela n'a aucun rapport"], correct:1, exp:"Les particules en suspension peuvent protéger certains micro-organismes de l'action du chlore ou des UV, réduisant l'efficacité de la désinfection."},
        {q:"La chloration de l'eau consiste à...", options:["ajouter du sel","ajouter du chlore (eau de Javel diluée ou comprimés)","faire bouillir l'eau","filtrer avec du sable uniquement"], correct:1, exp:"La chloration utilise du chlore (sous forme d'eau de Javel diluée adaptée ou de comprimés) pour désinfecter l'eau."}
      ,
        { q: "Pourquoi ne suffit-il pas de filtrer une eau souillée pour la rendre entièrement potable ?", options: ["La filtration rend l'eau trop claire", "La filtration retient les déchets solides mais ne tue pas les microbes", "La filtration ajoute des microbes à l'eau", "La filtration élimine le goût de l'eau"], correct: 1, exp: "La filtration élimine seulement les déchets solides visibles (grâce au sable, au charbon, au tissu) ; elle ne détruit pas les microbes. Il faut aussi faire bouillir ou désinfecter (chlorer) l'eau pour la rendre potable." }
      ]
    }
  ]
}

};

if (typeof module !== "undefined") module.exports = COURSES;
