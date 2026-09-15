// I'm The Best — Contenu pédagogique 4ème
// Structure : COURSES[matiere] = { name, color, icon, lessons: [{id, title, content, quiz:[{q,options,correct,exp}]}] }

const COURSES = {

maths: {
  name: "Mathématiques",
  color: "#F2B84B",
  icon: "📐",
  lessons: [
    {
      id: "m1",
      title: "Les nombres décimaux relatifs (écriture a×10^p)",
      content: `<p>Un <strong>nombre décimal relatif</strong> peut s'écrire sous la forme <strong>a × 10<sup>p</sup></strong>, avec a un nombre décimal relatif et p un entier relatif. Cette écriture est très pratique pour manipuler de très grands ou très petits nombres.</p>
      <p>Pour écrire un nombre sous cette forme avec 1 ≤ |a| &lt; 10 (écriture scientifique), on déplace la virgule jusqu'à obtenir un seul chiffre non nul avant elle, et p indique le nombre de rangs déplacés (positif vers la gauche, négatif vers la droite).</p>
      <p>Exemple : 45 000 = 4,5 × 10⁴ et 0,0032 = 3,2 × 10⁻³.</p>
      <p><strong>Multiplier</strong> deux nombres écrits sous cette forme : on multiplie les « a » entre eux et on additionne les exposants « p ». <strong>Additionner</strong> deux nombres sous cette forme nécessite d'abord de les ramener à la même puissance de 10.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Exemple de multiplication : (3 × 10²) × (2 × 10⁴) = (3×2) × 10^(2+4) = 6 × 10⁶. Exemple d'addition : pour additionner 3×10³ et 5×10², on réécrit 3×10³ = 30×10², donc 30×10² + 5×10² = 35×10² = 3,5×10³.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Écris 0,00056 sous la forme a×10^p avec 1 ≤ a &lt; 10 : on déplace la virgule de 4 rangs vers la droite pour obtenir 5,6, donc 0,00056 = 5,6 × 10⁻⁴. Vérification inverse : 5,6 × 10⁻⁴ = 5,6 ÷ 10 000 = 0,00056. ✓ Cette écriture scientifique permet de comparer facilement deux nombres très différents en taille : il suffit de comparer d'abord les exposants, puis les « a » si les exposants sont égaux.</p>
      <h3>📌 Point du programme à ne pas manquer : puissances de 10</h3>
      <p>Avant de manipuler l'écriture a×10^p, il faut maîtriser la <strong>puissance entière de 10</strong> : 10ⁿ (avec n entier naturel) vaut 1 suivi de n zéros (10³ = 1000, 10⁵ = 100 000), et 10⁻ⁿ = 1/10ⁿ vaut 0, suivi de (n−1) zéros puis 1 (10⁻² = 1/100 = 0,01 ; 10⁻⁴ = 0,0001). Règle : 10⁰ = 1.</p>`,
      quiz: [
        {q:"Quelle est l'écriture scientifique de 72 000 ?", options:["72 × 10³","7,2 × 10⁴","7,2 × 10³","0,72 × 10⁵"], correct:1, exp:"On déplace la virgule de 4 rangs vers la gauche : 72 000 = 7,2 × 10⁴."},
        {q:"Quelle est l'écriture scientifique de 0,0091 ?", options:["9,1 × 10⁻³","9,1 × 10³","0,91 × 10⁻²","91 × 10⁻⁴"], correct:0, exp:"On déplace la virgule de 3 rangs vers la droite : 0,0091 = 9,1 × 10⁻³."},
        {q:"Que vaut (2 × 10³) × (4 × 10²) ?", options:["8 × 10⁶","6 × 10⁵","8 × 10⁵","6 × 10⁶"], correct:2, exp:"On multiplie 2×4=8 et on additionne les exposants 3+2=5, soit 8 × 10⁵."},
        {q:"Combien vaut 1 ≤ a dans l'écriture scientifique a × 10^p ?", options:["a peut être n'importe quel nombre","1 ≤ a < 10","0 ≤ a < 1","a est toujours entier"], correct:1, exp:"Par convention, l'écriture scientifique impose 1 ≤ a < 10."},
        {q:"Quelle est l'écriture scientifique de 3,5 (déjà écrit sous forme a×10^p) ?", options:["3,5 × 10⁰","3,5 × 10¹","35 × 10⁻¹","0,35 × 10¹"], correct:0, exp:"3,5 est déjà compris entre 1 et 10, donc p = 0 : 3,5 = 3,5 × 10⁰."},
        {q:"Que vaut 10⁻³ ?", options:["1000","0,001","100","0,01"], correct:1, exp:"10⁻³ = 1/10³ = 1/1000 = 0,001."}
      ]
    },
    {
      id: "m2",
      title: "Positions relatives de deux droites du plan",
      content: `<p>Dans le plan, deux droites peuvent être <strong>parallèles</strong> (elles ne se coupent jamais, ou sont confondues) ou <strong>sécantes</strong> (elles se coupent en un seul point). Un cas particulier important de droites sécantes est celui des droites <strong>perpendiculaires</strong>, qui se coupent en formant un angle droit (90°).</p>
      <p><strong>Propriétés du parallélisme :</strong> si deux droites sont parallèles à une même troisième droite, alors elles sont parallèles entre elles. Si une droite est parallèle à une droite (d), alors elle est parallèle à toute droite parallèle à (d).</p>
      <p><strong>Propriétés de l'orthogonalité :</strong> si deux droites sont perpendiculaires à une même troisième droite, alors elles sont parallèles entre elles. Si une droite est parallèle à une droite perpendiculaire à (d), alors elle est aussi perpendiculaire à (d).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Ces propriétés permettent souvent de démontrer un parallélisme sans mesurer, uniquement par déduction logique. C'est une bonne préparation au raisonnement géométrique que tu approfondiras avec le théorème de Thalès en classe de 3ème.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de démonstration : soit (d₁) parallèle à (d₂), et (d₃) perpendiculaire à (d₁). Montrons que (d₃) est perpendiculaire à (d₂). Comme (d₃) ⊥ (d₁) et (d₁) // (d₂), on applique la propriété : « si une droite est perpendiculaire à une droite parallèle à (d), elle est perpendiculaire à (d) », donc (d₃) ⊥ (d₂). Cette chaîne de déductions, purement logique, ne nécessite aucune mesure sur la figure.</p>`,
      quiz: [
        {q:"Deux droites parallèles à une même troisième droite sont...", options:["perpendiculaires entre elles","parallèles entre elles","sécantes","aucune de ces réponses"], correct:1, exp:"Deux droites parallèles à une même troisième droite sont parallèles entre elles."},
        {q:"Deux droites perpendiculaires à une même troisième droite sont...", options:["parallèles entre elles","perpendiculaires entre elles","confondues obligatoirement","sécantes non perpendiculaires"], correct:0, exp:"Deux droites perpendiculaires à une même droite sont parallèles entre elles."},
        {q:"Si (d1) // (d2) et (d3) ⊥ (d1), alors (d3) et (d2) sont...", options:["parallèles","perpendiculaires","confondues","on ne peut pas savoir"], correct:1, exp:"Une droite perpendiculaire à l'une de deux droites parallèles est perpendiculaire à l'autre."},
        {q:"Deux droites sécantes...", options:["ne se coupent jamais","se coupent en un seul point","sont toujours perpendiculaires","sont toujours parallèles"], correct:1, exp:"Des droites sécantes se coupent en exactement un point."},
        {q:"Un angle droit mesure...", options:["45°","180°","90°","60°"], correct:2, exp:"Un angle droit mesure exactement 90°, c'est la marque de la perpendicularité."}
      ]
    },
    {
      id: "m3",
      title: "Quotient d'entiers relatifs",
      content: `<p>Le <strong>quotient de deux entiers relatifs</strong> a et b (avec b ≠ 0) se note a/b. C'est un nombre qui, multiplié par b, redonne a.</p>
      <p><strong>Égalité de deux quotients :</strong> a/b = c/d (avec b, d ≠ 0) si et seulement si a × d = b × c (produit en croix).</p>
      <p><strong>Opposé et inverse :</strong> l'opposé de a/b est −a/b = a/(−b). L'inverse d'un quotient non nul a/b est b/a.</p>
      <p><strong>Opérations :</strong> pour additionner ou soustraire deux quotients, on les met au même dénominateur. Pour multiplier deux quotients, on multiplie numérateurs entre eux et dénominateurs entre eux. Pour diviser par un quotient, on multiplie par son inverse.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Règle des signes à retenir absolument : a/b et (−a)/(−b) représentent le même nombre (les deux signes s'annulent). On écrit toujours un quotient avec, au plus, un seul signe négatif, placé devant la fraction : −a/b et non a/(−b).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple complet : calcule A = (−3/4) + (5/6). On cherche le plus petit dénominateur commun de 4 et 6, qui est 12. On a −3/4 = −9/12 et 5/6 = 10/12, donc A = −9/12 + 10/12 = 1/12. Autre exemple avec la division : (2/3) ÷ (−4/5) = (2/3) × (−5/4) = −10/12 = −5/6 (en simplifiant par 2).</p>
      <h3>📌 Point du programme à ne pas manquer : puissance d'une fraction</h3>
      <p>Pour élever une fraction à une puissance entière, on élève séparément le numérateur et le dénominateur : (a/b)ⁿ = aⁿ/bⁿ. Exemple : (2/3)² = 2²/3² = 4/9. Autre exemple avec un exposant plus grand : (1/2)³ = 1³/2³ = 1/8.</p>`,
      quiz: [
        {q:"Les quotients 2/3 et 8/12 sont-ils égaux ?", options:["Oui, car 2×12 = 3×8","Non, car les dénominateurs diffèrent","Oui, car 2+12 = 3+8","On ne peut pas savoir"], correct:0, exp:"2×12 = 24 et 3×8 = 24 : les produits en croix sont égaux, donc les quotients sont égaux."},
        {q:"Quel est l'inverse de −3/7 ?", options:["3/7","−7/3","7/3","−3/7"], correct:1, exp:"L'inverse de a/b est b/a : l'inverse de −3/7 est −7/3."},
        {q:"Que vaut (−2/5) × (3/4) ?", options:["−6/20 soit −3/10","6/20 soit 3/10","−5/9","5/9"], correct:0, exp:"On multiplie numérateurs et dénominateurs : (−2×3)/(5×4) = −6/20 = −3/10 après simplification."},
        {q:"Que vaut (1/2) ÷ (−1/3) ?", options:["−3/2","3/2","−1/6","1/6"], correct:0, exp:"Diviser par −1/3 revient à multiplier par son inverse −3 : (1/2) × (−3) = −3/2."},
        {q:"Comment écrit-on correctement le quotient −5 sur 8 avec un seul signe ?", options:["5/(−8)","−5/8 ou 5/(−8) sont équivalents mais on préfère −5/8","−(−5)/8","5/8"], correct:1, exp:"On préfère toujours placer le signe négatif devant la fraction entière : −5/8."},
        {q:"Que vaut (2/3)² ?", options:["4/9","2/9","4/6","2/6"], correct:0, exp:"(2/3)² = 2²/3² = 4/9."}
      ]
    },
    {
      id: "m4",
      title: "Repérage linéaire",
      content: `<p>Sur une <strong>droite graduée</strong>, chaque point est repéré par un nombre appelé son <strong>abscisse</strong>. La distance entre deux points A et B d'abscisses respectives a et b est donnée par AB = |b − a| (la valeur absolue de leur différence).</p>
      <p><strong>Milieu de deux points :</strong> l'abscisse du milieu I du segment [AB] est la moyenne des abscisses de A et B : x<sub>I</sub> = (a + b) / 2.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La distance AB est toujours positive, quel que soit l'ordre des points : AB = BA. C'est pour cela qu'on utilise la valeur absolue, qui « efface » le signe négatif éventuel de la soustraction.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : sur une droite graduée, A a pour abscisse −5 et B a pour abscisse 3. La distance AB = |3 − (−5)| = |8| = 8. L'abscisse du milieu I de [AB] est x<sub>I</sub> = (−5 + 3)/2 = −2/2 = −1. Vérification : la distance de A à I est |−1−(−5)| = 4, et la distance de I à B est |3−(−1)| = 4 : les deux distances sont bien égales, I est bien au milieu.</p>`,
      quiz: [
        {q:"A a pour abscisse −2 et B a pour abscisse 7. Quelle est la distance AB ?", options:["5","9","−9","14"], correct:1, exp:"AB = |7 − (−2)| = |9| = 9."},
        {q:"Quelle est l'abscisse du milieu de [AB] si A(4) et B(−10) ?", options:["−3","7","−7","3"], correct:0, exp:"x_I = (4 + (−10))/2 = −6/2 = −3."},
        {q:"Si AB = 6 et A a pour abscisse 1, quelles sont les abscisses possibles de B ?", options:["7 seulement","−5 seulement","7 ou −5","6 ou −6"], correct:2, exp:"B est à distance 6 de A : soit 1+6=7, soit 1−6=−5."},
        {q:"La distance entre deux points peut-elle être négative ?", options:["Oui, si le second point est à gauche","Non, jamais","Oui, toujours","Seulement si les abscisses sont négatives"], correct:1, exp:"Une distance, grâce à la valeur absolue, est toujours positive ou nulle."},
        {q:"Le milieu de [AB] avec A(−3) et B(3) a pour abscisse...", options:["0","3","−3","6"], correct:0, exp:"x_I = (−3+3)/2 = 0/2 = 0."}
      ]
    },
    {
      id: "m5",
      title: "Projection",
      content: `<p>La <strong>projection d'un point M sur une droite (d) parallèlement à une droite (d')</strong> est le point d'intersection de (d) avec la droite passant par M et parallèle à (d'). Quand la droite (d') est perpendiculaire à (d), on parle de <strong>projection orthogonale</strong> : c'est le pied de la perpendiculaire abaissée de M sur (d).</p>
      <p><strong>Propriété de la droite des milieux :</strong> dans un triangle, la droite qui joint les milieux de deux côtés est parallèle au troisième côté, et sa longueur vaut la moitié de celle de ce troisième côté.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La projection conserve l'alignement : si trois points sont alignés, leurs projetés (selon une même direction) sont aussi alignés. C'est un outil puissant pour construire des figures sans mesurer directement certaines longueurs.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Application de la droite des milieux : dans un triangle ABC, I est le milieu de [AB] et J est le milieu de [AC]. D'après la propriété, (IJ) est parallèle à (BC) et IJ = BC/2. Si BC = 8 cm, alors IJ = 4 cm — sans avoir besoin de mesurer directement IJ sur la figure. Cette propriété est très utile pour calculer une longueur inaccessible à partir des milieux d'un triangle.</p>`,
      quiz: [
        {q:"La projection orthogonale d'un point M sur une droite (d) est...", options:["le point de (d) le plus proche de M","le pied de la perpendiculaire abaissée de M sur (d)","un point choisi au hasard sur (d)","le milieu de (d)"], correct:1, exp:"La projection orthogonale correspond au pied de la perpendiculaire abaissée de M sur (d), qui est bien aussi le point le plus proche."},
        {q:"Dans un triangle ABC, I milieu de [AB], J milieu de [AC], BC = 10 cm. Que vaut IJ ?", options:["10 cm","5 cm","20 cm","2,5 cm"], correct:1, exp:"D'après la droite des milieux, IJ = BC/2 = 10/2 = 5 cm."},
        {q:"La droite des milieux d'un triangle est...", options:["perpendiculaire au troisième côté","parallèle au troisième côté","confondue avec le troisième côté","aucune de ces réponses"], correct:1, exp:"La droite joignant les milieux de deux côtés est parallèle au troisième côté du triangle."},
        {q:"Si trois points sont alignés, que peut-on dire de leurs projetés sur une droite ?", options:["Ils sont aussi alignés","Ils sont confondus en un seul point","Ils forment un triangle","Rien de particulier"], correct:0, exp:"La projection conserve l'alignement des points."},
        {q:"Une projection parallèlement à une droite (d') sur (d) est orthogonale quand...", options:["(d) et (d') sont parallèles","(d) et (d') sont perpendiculaires","(d) et (d') sont confondues","jamais"], correct:1, exp:"On parle de projection orthogonale précisément quand la direction de projection (d') est perpendiculaire à (d)."}
      ]
    },
    {
      id: "m6",
      title: "Les nombres rationnels",
      content: `<p>Un <strong>nombre rationnel</strong> est un nombre qui peut s'écrire comme le quotient de deux entiers relatifs (a/b, avec b ≠ 0). L'ensemble des nombres rationnels se note <strong>ℚ</strong>. On a l'inclusion ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ (les entiers naturels, puis relatifs, puis décimaux, sont tous des rationnels particuliers).</p>
      <p>Tout nombre rationnel peut s'écrire sous la forme d'une <strong>SDIP</strong> (Suite Décimale Illimitée Périodique) : son écriture décimale, après un certain rang, répète indéfiniment le même motif de chiffres.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Exemple de SDIP : 1/3 = 0,333333… (le chiffre 3 se répète indéfiniment), et 1/7 = 0,142857142857… (le motif « 142857 » se répète). Pour retrouver un quotient à partir d'une SDIP, il existe une méthode algébrique utilisant la multiplication par une puissance de 10 adaptée à la période.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Retrouver le quotient à partir de x = 0,777... (SDIP de période 1) : on pose x = 0,7777..., donc 10x = 7,7777... En soustrayant, 10x − x = 7,7777... − 0,7777... = 7, donc 9x = 7, d'où x = 7/9. Vérification : 7 ÷ 9 = 0,7777... ✓ Cette méthode (multiplier par 10^période puis soustraire) fonctionne pour transformer n'importe quelle SDIP en quotient d'entiers.</p>
      <h3>📌 Point du programme à ne pas manquer : ordre, puissances et approximations dans ℚ</h3>
      <p><strong>Ordre et opérations :</strong> si on additionne (ou soustrait) un même nombre aux deux membres d'une inégalité, l'ordre est conservé. Si on multiplie (ou divise) les deux membres par un nombre POSITIF, l'ordre est conservé ; par un nombre NÉGATIF, l'ordre est inversé. Exemple : 2 &lt; 5, mais en multipliant par −1 : −2 &gt; −5.</p>
      <p><strong>Puissance dans ℚ (exposant négatif) :</strong> pour tout rationnel a non nul et tout entier naturel n, a⁻ⁿ = 1/aⁿ. Exemple : 2⁻¹ = 1/2 = 0,5 ; 2⁻³ = 1/2³ = 1/8.</p>
      <p><strong>Approximation décimale par défaut / par excès :</strong> pour un nombre rationnel x et une précision 10⁻ⁿ donnée, la valeur approchée par défaut est le plus grand décimal ayant n chiffres après la virgule qui est ≤ x ; la valeur approchée par excès est le plus petit qui est ≥ x. Exemple : pour x = 1/3 à 10⁻² près, la valeur approchée par défaut est 0,33 et par excès est 0,34 (car 0,33 ≤ 1/3 &lt; 0,34).</p>`,
      quiz: [
        {q:"L'ensemble des nombres rationnels se note...", options:["ℕ","ℤ","ℚ","ℝ"], correct:2, exp:"ℚ désigne l'ensemble des nombres rationnels."},
        {q:"Un nombre rationnel peut toujours s'écrire...", options:["comme quotient de deux entiers relatifs","uniquement comme un entier","uniquement comme un décimal fini","comme un nombre irrationnel"], correct:0, exp:"Par définition, un rationnel s'écrit a/b avec a et b entiers relatifs, b non nul."},
        {q:"Que signifie SDIP ?", options:["Somme Décimale Infinie Positive","Suite Décimale Illimitée Périodique","Système Décimal International Précis","Suite Décimale Intégrale Positive"], correct:1, exp:"SDIP signifie Suite Décimale Illimitée Périodique."},
        {q:"1/3 s'écrit sous forme décimale...", options:["0,3","0,333... (illimité et périodique)","0,33 exactement","1,3"], correct:1, exp:"1/3 = 0,3333... avec le chiffre 3 qui se répète indéfiniment : c'est une SDIP."},
        {q:"Parmi ℕ, ℤ, 𝔻, ℚ, quel est l'ordre correct d'inclusion ?", options:["ℚ ⊂ 𝔻 ⊂ ℤ ⊂ ℕ","ℕ ⊂ ℤ ⊂ 𝔻 ⊂ ℚ","ℤ ⊂ ℕ ⊂ ℚ ⊂ 𝔻","aucun de ces ordres"], correct:1, exp:"Les entiers naturels sont inclus dans les relatifs, eux-mêmes inclus dans les décimaux, eux-mêmes inclus dans les rationnels."},
        {q:"Que vaut 2⁻¹ ?", options:["−2","0,5","2","−0,5"], correct:1, exp:"2⁻¹ = 1/2¹ = 1/2 = 0,5."}
      ]
    },
    {
      id: "m7",
      title: "Les polygones",
      content: `<p>Un <strong>polygone</strong> est une figure fermée formée de segments (ses côtés). Le nom d'un polygone dépend de son nombre de côtés : triangle (3), quadrilatère (4), pentagone (5), hexagone (6), heptagone (7), octogone (8), ennéagone (9), décagone (10).</p>
      <p>Un polygone est <strong>convexe</strong> si tous ses angles intérieurs sont saillants (compris entre 0° et 180°) — autrement dit, aucun de ses sommets ne « rentre » vers l'intérieur. Il est <strong>concave</strong> si au moins un de ses angles intérieurs est rentrant (entre 180° et 360°).</p>
      <p>Un polygone <strong>régulier</strong> a tous ses côtés de même longueur et tous ses angles de même mesure (exemples : triangle équilatéral, carré, pentagone régulier).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour un polygone à n côtés, la somme de ses angles intérieurs vaut (n−2) × 180°. Exemple : un hexagone (6 côtés) a une somme d'angles de (6−2)×180 = 720°, et s'il est régulier, chaque angle mesure 720°/6 = 120°.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Pour construire un polygone régulier à n côtés inscrit dans un cercle, on divise le cercle en n arcs égaux : l'angle au centre entre deux sommets consécutifs vaut 360°/n. Exemple : pour un pentagone régulier, l'angle au centre est 360°/5 = 72°. On place donc 5 points sur le cercle en tournant de 72° à chaque fois, puis on relie les points consécutifs pour obtenir le pentagone régulier.</p>`,
      quiz: [
        {q:"Comment appelle-t-on un polygone à 7 côtés ?", options:["Hexagone","Octogone","Heptagone","Ennéagone"], correct:2, exp:"Un polygone à 7 côtés est un heptagone."},
        {q:"Un polygone convexe a tous ses angles intérieurs...", options:["compris entre 0° et 180°","compris entre 180° et 360°","tous égaux à 90°","tous égaux à 180°"], correct:0, exp:"Un polygone convexe a tous ses angles intérieurs saillants, entre 0° et 180°."},
        {q:"Quelle est la somme des angles intérieurs d'un octogone (8 côtés) ?", options:["720°","1080°","900°","1440°"], correct:1, exp:"(8−2) × 180 = 6 × 180 = 1080°."},
        {q:"Un polygone régulier a...", options:["seulement des côtés égaux","seulement des angles égaux","des côtés ET des angles tous égaux","4 côtés obligatoirement"], correct:2, exp:"Un polygone régulier a à la fois tous ses côtés et tous ses angles égaux."},
        {q:"Un polygone est concave si...", options:["tous ses angles sont aigus","au moins un angle intérieur est rentrant (>180°)","il a plus de 6 côtés","il est régulier"], correct:1, exp:"Un polygone concave a au moins un angle intérieur rentrant, entre 180° et 360°."}
      ]
    },
    {
      id: "m8",
      title: "Le parallélogramme",
      content: `<p>Un <strong>parallélogramme</strong> ABCD est un quadrilatère dont les côtés opposés sont parallèles deux à deux. Sa <strong>caractérisation vectorielle</strong> est essentielle : ABCD est un parallélogramme si et seulement si le vecteur AB est égal au vecteur DC (ou, de façon équivalente, le vecteur AD est égal au vecteur BC).</p>
      <p>Cette caractérisation permet de <strong>démontrer</strong> qu'un quadrilatère est un parallélogramme, simplement en montrant l'égalité de deux vecteurs, sans avoir à mesurer les longueurs ou les angles.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Retiens bien le sens des lettres : dans « vecteur AB = vecteur DC », les lettres tournent dans le même sens autour du quadrilatère (A→B et D→C), ce qui correspond bien aux côtés opposés [AB] et [DC] de ABCD.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de démonstration : on donne quatre points M(1;2), N(5;2), P(6;5), Q(2;5) et on veut montrer que MNPQ est un parallélogramme. On calcule le vecteur MN : (5−1 ; 2−2) = (4 ; 0). On calcule le vecteur QP : (6−2 ; 5−5) = (4 ; 0). Comme vecteur MN = vecteur QP, MNPQ est bien un parallélogramme (d'après la caractérisation vectorielle), sans avoir eu besoin de tracer la figure ni de mesurer quoi que ce soit.</p>`,
      quiz: [
        {q:"ABCD est un parallélogramme. Que peut-on dire du vecteur AB et du vecteur DC ?", options:["Ils sont égaux","Ils sont opposés","Ils sont perpendiculaires","Rien de particulier"], correct:0, exp:"La caractérisation vectorielle du parallélogramme donne vecteur AB = vecteur DC."},
        {q:"Pour démontrer que MNPQ est un parallélogramme par la méthode vectorielle, il suffit de montrer que...", options:["MN = QP en longueur seulement","le vecteur MN est égal au vecteur QP","les angles sont tous égaux","les diagonales sont perpendiculaires"], correct:1, exp:"Il suffit de montrer l'égalité vectorielle vecteur MN = vecteur QP."},
        {q:"Dans un parallélogramme ABCD, les côtés opposés sont...", options:["perpendiculaires","parallèles","de longueurs différentes obligatoirement","aucune de ces réponses"], correct:1, exp:"Par définition, un parallélogramme a ses côtés opposés parallèles deux à deux."},
        {q:"Si vecteur AB = vecteur DC, alors ABCD est...", options:["un triangle","un parallélogramme","un cercle","toujours un carré"], correct:1, exp:"C'est exactement la caractérisation vectorielle du parallélogramme."},
        {q:"Le vecteur AD dans un parallélogramme ABCD est égal à...", options:["vecteur BC","vecteur CB","vecteur AB","vecteur DC"], correct:0, exp:"De façon équivalente à AB=DC, on a aussi vecteur AD = vecteur BC."}
      ]
    },
    {
      id: "m9",
      title: "Les vecteurs",
      content: `<p>Deux <strong>bipoints</strong> (A ; B) et (B' ; A') sont dits <strong>équipollents</strong> si ABB'A' est un parallélogramme (A est l'origine, B l'extrémité). Un <strong>vecteur</strong> représente l'ensemble de tous les bipoints équipollents entre eux : il a une direction, un sens et une longueur (norme).</p>
      <p>Deux vecteurs sont égaux s'ils ont même direction, même sens et même longueur — on peut les représenter par des bipoints équipollents n'importe où dans le plan.</p>
      <p><strong>Relation de Chasles :</strong> pour tous points A, B, C, on a vecteur AB + vecteur BC = vecteur AC. Cette relation permet d'additionner des vecteurs facilement, en les mettant « bout à bout ».</p>
      <p><strong>Caractérisation vectorielle du milieu :</strong> I est le milieu de [AB] si et seulement si vecteur AI = vecteur IB.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La relation de Chasles permet aussi de démontrer que des points sont alignés : si vecteur AB et vecteur AC sont colinéaires (l'un est un multiple de l'autre), alors A, B et C sont alignés.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'utilisation de Chasles : simplifie l'expression vecteur AC + vecteur CB + vecteur BD. En regroupant deux à deux : vecteur AC + vecteur CB = vecteur AB (Chasles), puis vecteur AB + vecteur BD = vecteur AD (Chasles à nouveau). Donc l'expression complète se simplifie en un seul vecteur AD. Cette technique de simplification par Chasles est très utile pour résoudre des exercices de géométrie vectorielle.</p>
      <h3>📌 Point du programme à ne pas manquer : multiplication d'un vecteur par un nombre</h3>
      <p>Multiplier un vecteur u par un nombre réel k donne un nouveau vecteur k×u : s'il est non nul, k×u a la même direction que u, le même sens que u si k &gt; 0 (sens opposé si k &lt; 0), et une longueur (norme) égale à |k| fois celle de u. Exemple : si u a pour longueur 3 cm, alors 2u a pour longueur 6 cm et pointe dans le même sens que u, tandis que −2u a aussi pour longueur 6 cm mais pointe dans le sens opposé.</p>`,
      quiz: [
        {q:"Deux bipoints (A;B) et (B';A') sont équipollents si...", options:["ABB'A' est un parallélogramme","A=A'","AB=A'B' en longueur seulement","B est le milieu de AA'"], correct:0, exp:"L'équipollence signifie exactement que ABB'A' forme un parallélogramme."},
        {q:"D'après la relation de Chasles, vecteur AB + vecteur BC =", options:["vecteur AC","vecteur CA","vecteur BA","0"], correct:0, exp:"La relation de Chasles donne directement vecteur AB + vecteur BC = vecteur AC."},
        {q:"I est le milieu de [AB] si et seulement si...", options:["vecteur AI = vecteur BI","vecteur AI = vecteur IB","AI est perpendiculaire à IB","vecteur AI = 2×vecteur IB"], correct:1, exp:"Le milieu vérifie vecteur AI = vecteur IB (même direction, sens et longueur des deux moitiés)."},
        {q:"Simplifie vecteur MN + vecteur NP :", options:["vecteur MP","vecteur PM","vecteur MN","0"], correct:0, exp:"D'après Chasles, vecteur MN + vecteur NP = vecteur MP."},
        {q:"Deux vecteurs égaux ont...", options:["même direction et même sens mais pas forcément même longueur","même direction, même sens et même longueur","seulement la même longueur","des directions différentes"], correct:1, exp:"Deux vecteurs égaux ont exactement même direction, même sens et même longueur (norme)."},
        {q:"Si u a pour longueur 4 cm, quelle est la longueur du vecteur −3u ?", options:["4 cm","12 cm","−12 cm","3 cm"], correct:1, exp:"La longueur de k×u est |k| fois celle de u : |−3|×4 = 12 cm."}
      ]
    },
    {
      id: "m10",
      title: "Les nombres réels",
      content: `<p>Tous les nombres rationnels peuvent s'écrire sous forme de SDIP (Suite Décimale Illimitée Périodique). Mais il existe des nombres dont l'écriture décimale est illimitée et NON périodique : ce sont les <strong>nombres irrationnels</strong> (exemple : π = 3,1415926535… dont les décimales ne se répètent jamais selon un motif).</p>
      <p>L'ensemble regroupant les nombres rationnels ET les nombres irrationnels s'appelle l'ensemble des <strong>nombres réels</strong>, noté <strong>ℝ</strong>. On a donc ℚ ⊂ ℝ, mais tout nombre réel n'est pas forcément rationnel.</p>
      <p>On note ℝ⁺ l'ensemble des réels positifs, ℝ⁻ l'ensemble des réels négatifs, et ℝ* = ℝ − {0} l'ensemble des réels non nuls. On a ℝ = ℝ⁺ ∪ ℝ⁻ et ℝ⁺ ∩ ℝ⁻ = {0}.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> D'autres nombres irrationnels célèbres : √2 (la diagonale d'un carré de côté 1) et le nombre d'or φ ≈ 1,618. La découverte de l'irrationalité de √2 par les mathématiciens grecs de l'Antiquité a d'ailleurs été un choc scientifique majeur à l'époque !</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Pour savoir si un nombre est rationnel ou irrationnel, on cherche s'il peut s'écrire comme un quotient exact d'entiers. Exemple : 3/2 ∈ ℚ (et donc aussi ∈ ℝ, car ℚ ⊂ ℝ), tandis que π ∈ ℝ mais π ∉ ℚ (π n'est pas un quotient exact d'entiers, ses décimales ne se répètent jamais). En résumé : « rationnel » ⟹ toujours « réel », mais « réel » n'implique pas toujours « rationnel ».</p>
      <h3>📌 Point du programme à ne pas manquer : opérations, puissances et ordre dans ℝ</h3>
      <p>Les règles de calcul déjà vues dans ℚ (addition, soustraction, multiplication, division, puissance entière — y compris les exposants négatifs, a⁻ⁿ = 1/aⁿ) restent valables dans ℝ. Les règles d'ordre également : ajouter un même nombre aux deux membres conserve l'ordre ; multiplier par un positif conserve l'ordre, par un négatif l'inverse. Exemple : √2 ≈ 1,414 &lt; 1,5, donc en multipliant par −3 (négatif) : −3√2 ≈ −4,243 &gt; −4,5.</p>`,
      quiz: [
        {q:"L'ensemble des nombres réels se note...", options:["ℚ","ℝ","ℤ","𝔻"], correct:1, exp:"ℝ désigne l'ensemble des nombres réels (rationnels et irrationnels réunis)."},
        {q:"Un nombre irrationnel a une écriture décimale...", options:["finie","illimitée et périodique","illimitée et NON périodique","toujours négative"], correct:2, exp:"Un nombre irrationnel a une écriture décimale illimitée dont les décimales ne suivent aucun motif périodique."},
        {q:"Tout nombre rationnel est-il un nombre réel ?", options:["Oui, toujours (ℚ ⊂ ℝ)","Non, jamais","Seulement s'il est positif","Seulement s'il est entier"], correct:0, exp:"ℚ est inclus dans ℝ : tout rationnel est un réel."},
        {q:"π (pi) est un nombre...", options:["rationnel","irrationnel","entier","négatif"], correct:1, exp:"π est un nombre irrationnel : ses décimales sont illimitées et non périodiques."},
        {q:"Que vaut ℝ⁺ ∩ ℝ⁻ ?", options:["ℝ tout entier","∅ (l'ensemble vide)","{0}","{1}"], correct:2, exp:"L'intersection des réels positifs et négatifs est réduite au seul nombre 0."},
        {q:"En multipliant les deux membres de l'inégalité 3 < 7 par −2, on obtient...", options:["−6 < −14","−6 > −14","6 < 14","6 > 14"], correct:1, exp:"Multiplier par un nombre négatif inverse le sens de l'inégalité : −6 > −14."}
      ]
    },
    {
      id: "m11",
      title: "Statistiques",
      content: `<p>Une étude statistique porte sur une <strong>population</strong> (l'ensemble des individus étudiés) et un <strong>caractère</strong> (la propriété étudiée, comme la note obtenue). L'<strong>effectif</strong> d'une valeur est le nombre d'individus qui possèdent cette valeur. La <strong>fréquence</strong> d'une valeur est son effectif divisé par l'effectif total (souvent exprimée en pourcentage).</p>
      <p>La <strong>moyenne</strong> d'une série se calcule en multipliant chaque valeur par son effectif, en additionnant tous ces produits, puis en divisant par l'effectif total.</p>
      <p>Les données statistiques se représentent sous forme de <strong>tableau</strong>, de <strong>diagramme en bâtons</strong>, de <strong>diagramme circulaire</strong> (ou « camembert ») ou d'<strong>histogramme</strong> (pour des données regroupées en classes).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le diagramme circulaire répartit un cercle de 360° proportionnellement aux fréquences : une catégorie de fréquence 25 % occupera un secteur de 360° × 0,25 = 90°. C'est un excellent outil pour visualiser des parts d'un ensemble.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de calcul de moyenne à partir d'un tableau d'effectifs : pour les notes 8 (effectif 2), 12 (effectif 5), 16 (effectif 3), la moyenne est (8×2 + 12×5 + 16×3) / (2+5+3) = (16+60+48)/10 = 124/10 = 12,4. La fréquence de la note 12 est 5/10 = 0,5, soit 50 %. Dans un diagramme circulaire, cette catégorie occuperait donc un secteur de 360° × 0,5 = 180°, soit la moitié du cercle.</p>`,
      quiz: [
        {q:"L'effectif total d'une série de notes 8(×2), 12(×5), 16(×3) est...", options:["3","10","36","8"], correct:1, exp:"2 + 5 + 3 = 10 individus au total."},
        {q:"La fréquence d'une valeur se calcule comme...", options:["effectif total ÷ effectif de la valeur","effectif de la valeur ÷ effectif total","effectif de la valeur × effectif total","effectif de la valeur − effectif total"], correct:1, exp:"La fréquence = effectif de la valeur divisé par l'effectif total."},
        {q:"Pour une fréquence de 25 %, l'angle du secteur dans un diagramme circulaire est...", options:["25°","90°","180°","360°"], correct:1, exp:"360° × 0,25 = 90°."},
        {q:"La moyenne d'une série 10(×1), 20(×1), 30(×1) vaut...", options:["20","30","60","10"], correct:0, exp:"(10+20+30)/3 = 60/3 = 20."},
        {q:"Quel diagramme convient le mieux pour des données regroupées en classes (intervalles) ?", options:["Diagramme circulaire","Histogramme","Tableau seul","Aucun de ces outils"], correct:1, exp:"L'histogramme est adapté aux données regroupées en classes (intervalles de valeurs)."}
      ]
    },
    {
      id: "m12",
      title: "Les applications (symétries, projection, fonctions)",
      content: `<p>En mathématiques, une <strong>application</strong> est une règle qui, à chaque élément d'un ensemble de départ, associe un UNIQUE élément d'un ensemble d'arrivée. En géométrie et en calcul, plusieurs notions déjà étudiées sont en réalité des applications : la <strong>symétrie centrale</strong>, la <strong>symétrie orthogonale</strong>, la <strong>projection</strong>, ainsi que les <strong>fonctions monômes</strong> et les <strong>fonctions polynômes</strong>.</p>
      <p>On peut <strong>composer</strong> deux applications : appliquer d'abord l'une, puis l'autre au résultat obtenu. La composée de deux applications f et g (appliquer d'abord f, puis g) se note g∘f.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Reconnaître qu'une transformation est une application, c'est vérifier que chaque point de départ a bien UNE SEULE image (jamais deux images différentes pour un même point de départ). C'est cette unicité qui distingue une application d'une simple relation.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : la fonction monôme f(x) = 3x est une application qui, à chaque nombre x, associe l'unique nombre 3x. Si on lui associe une autre application g(x) = x + 2, la composée g∘f associe à x d'abord f(x) = 3x, puis g(3x) = 3x + 2. Exemple numérique : pour x = 4, f(4) = 12, puis g(12) = 14, donc (g∘f)(4) = 14. On retrouve la même règle géométrique lorsqu'on compose deux transformations du plan, comme deux symétries.</p>
      <h3>📌 Point du programme à ne pas manquer : application dans ℝ (fonction réelle)</h3>
      <p>Une fonction réelle comme x ↦ 3x + 2 est un exemple d'application dans ℝ : à chaque réel x, elle associe l'unique réel 3x + 2. Exemple : l'image de 4 par cette application est 3×4+2 = 14 ; l'image de −1 est 3×(−1)+2 = −1. Comme pour les autres applications du programme, chaque nombre de départ a bien une seule image.</p>`,
      quiz: [
        {q:"Une application associe à chaque élément de départ...", options:["plusieurs éléments d'arrivée possibles","un unique élément d'arrivée","aucun élément d'arrivée","toujours le même élément"], correct:1, exp:"Par définition, une application associe UN SEUL élément d'arrivée à chaque élément de départ."},
        {q:"Parmi les transformations suivantes, laquelle N'EST PAS citée comme une application au programme ?", options:["La symétrie centrale","La symétrie orthogonale","La rotation de 45°","La projection"], correct:2, exp:"Le programme de 4e cite la symétrie centrale, orthogonale, la projection et les fonctions monômes/polynômes, pas la rotation."},
        {q:"La composée de f puis g se note...", options:["f∘g","g∘f","f+g","f×g"], correct:1, exp:"« g rond f » signifie qu'on applique d'abord f, puis g, et se note g∘f."},
        {q:"Si f(x) = 2x et g(x) = x+1, que vaut (g∘f)(3) ?", options:["6","7","8","9"], correct:1, exp:"f(3)=6, puis g(6)=7. Donc (g∘f)(3) = 7."},
        {q:"Une fonction monôme est un exemple de...", options:["application","relation non définie","nombre irrationnel","polygone"], correct:0, exp:"Une fonction monôme, comme toute fonction bien définie, est une application."},
        {q:"Pour l'application x ↦ 3x + 2, quelle est l'image de −1 ?", options:["−1","−3","1","5"], correct:0, exp:"3×(−1)+2 = −3+2 = −1."}
      ]
    },
    {
      id: "m13",
      title: "Monômes et polynômes",
      content: `<p>Un <strong>monôme</strong> est une expression de la forme a×xⁿ, où a est un nombre (le coefficient) et n un entier naturel (le degré du monôme). Un <strong>polynôme</strong> est une somme de plusieurs monômes.</p>
      <p><strong>Développer</strong> une expression, c'est la transformer d'un produit en une somme (en distribuant). <strong>Factoriser</strong>, c'est l'opération inverse : transformer une somme en un produit, souvent en mettant un facteur commun en évidence.</p>
      <p><strong>Identités remarquables</strong> à connaître par cœur : (a+b)² = a² + 2ab + b² ; (a−b)² = a² − 2ab + b² ; (a+b)(a−b) = a² − b².</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Attention à l'erreur classique : (x + 3)² n'est PAS égal à x² + 9 ! Il faut développer avec la règle (a+b)² = a² + 2ab + b², ce qui donne x² + 6x + 9.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de factorisation avec facteur commun : 6x² + 9x = 3x(2x + 3), car 3x divise à la fois 6x² et 9x. Exemple avec identité remarquable : factorise x² − 16. On reconnaît a² − b² avec a = x et b = 4 (car 16 = 4²), donc x² − 16 = (x−4)(x+4). Vérification en développant : (x−4)(x+4) = x² + 4x − 4x − 16 = x² − 16. ✓</p>`,
      quiz: [
        {q:"Développe (x + 3)² correctement :", options:["x² + 9","x² + 6x + 9","x² + 3x + 9","2x + 6"], correct:1, exp:"(a+b)² = a²+2ab+b², donc (x+3)² = x² + 6x + 9."},
        {q:"Factorise x² − 25 :", options:["(x−5)²","(x+5)²","(x−5)(x+5)","(x−25)(x+1)"], correct:2, exp:"x² − 25 = x² − 5² = (x−5)(x+5), identité remarquable a²−b²."},
        {q:"Factorise 8x² + 12x (facteur commun) :", options:["4x(2x+3)","4(2x²+3x)","4x(2x+3x)","2x(4x+6)"], correct:0, exp:"4x est le facteur commun de 8x² et 12x : 8x²+12x = 4x(2x+3)."},
        {q:"Le degré du monôme 5x³ est...", options:["5","3","8","15"], correct:1, exp:"Le degré d'un monôme a×xⁿ est l'exposant n, ici 3."},
        {q:"Développe (2x − 1)² :", options:["4x² − 1","4x² − 4x + 1","2x² − 4x + 1","4x² + 4x + 1"], correct:1, exp:"(a−b)² = a²−2ab+b² avec a=2x, b=1 : 4x² − 4x + 1."}
      ]
    },
    {
      id: "m14",
      title: "Translation",
      content: `<p>Une <strong>translation</strong> est une transformation du plan qui déplace tous les points d'une figure dans une même direction, un même sens, et sur une même distance, définis par un <strong>vecteur</strong>. Si A' est l'image de A par la translation de vecteur u, alors vecteur AA' = u.</p>
      <p>Pour construire l'image d'une figure par translation, il suffit de construire l'image de chacun de ses sommets (en reportant le vecteur depuis chaque point), puis de relier les images obtenues dans le même ordre.</p>
      <p><strong>Propriétés</strong> conservées par une translation : les longueurs, les angles, le parallélisme, et les figures particulières (un parallélogramme reste un parallélogramme).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> En coordonnées, si le vecteur de translation est u(a ; b), l'image d'un point M(x ; y) a pour coordonnées M'(x + a ; y + b) : on ajoute simplement les coordonnées du vecteur à celles du point de départ.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : soit A(2 ; 3) et le vecteur de translation u(4 ; −1). L'image A' de A a pour coordonnées (2+4 ; 3+(−1)) = (6 ; 2). Si on translate aussi B(0 ; 0) par le même vecteur u, son image B' a pour coordonnées (0+4 ; 0−1) = (4 ; −1). On remarque que vecteur AB = (0−2 ; 0−3) = (−2 ; −3) et vecteur A'B' = (4−6 ; −1−2) = (−2 ; −3) : ils sont égaux, ce qui confirme que la translation conserve bien les longueurs et les directions.</p>`,
      quiz: [
        {q:"Une translation est définie par...", options:["un point","un vecteur","un angle","un cercle"], correct:1, exp:"Une translation est entièrement définie par un vecteur (direction, sens, longueur du déplacement)."},
        {q:"Si le vecteur de translation est u(3 ; −2), l'image de M(1 ; 5) a pour coordonnées...", options:["(4 ; 3)","(−2 ; 7)","(3 ; −10)","(1 ; 5)"], correct:0, exp:"On ajoute les coordonnées : (1+3 ; 5+(−2)) = (4 ; 3)."},
        {q:"Une translation conserve...", options:["uniquement les longueurs","uniquement les angles","les longueurs, les angles et le parallélisme","rien de la figure d'origine"], correct:2, exp:"Une translation est une isométrie : elle conserve longueurs, angles et parallélisme."},
        {q:"Si A' est l'image de A par la translation de vecteur u, alors vecteur AA' vaut...", options:["u","−u","2u","0"], correct:0, exp:"Par définition de la translation, vecteur AA' est exactement égal au vecteur de translation u."},
        {q:"L'image d'un parallélogramme par translation est...", options:["un triangle","un parallélogramme","un cercle","cela dépend du vecteur"], correct:1, exp:"La translation conserve le parallélisme, donc l'image d'un parallélogramme reste un parallélogramme."}
      ]
    },
    {
      id: "m15",
      title: "Composition d'applications du plan",
      content: `<p><strong>Composer deux applications du plan</strong>, c'est appliquer la première, puis appliquer la seconde à l'image obtenue. Le programme de 4e étudie en particulier trois cas : la composée de deux translations, la composée de deux symétries centrales, et la composée de deux symétries orthogonales d'axes perpendiculaires.</p>
      <p><strong>Composée de deux translations :</strong> la composée d'une translation de vecteur u suivie d'une translation de vecteur v est une translation de vecteur u + v.</p>
      <p><strong>Composée de deux symétries centrales :</strong> la composée de la symétrie de centre O₁ suivie de la symétrie de centre O₂ est une translation.</p>
      <p><strong>Composée de deux symétries orthogonales d'axes perpendiculaires :</strong> c'est une symétrie centrale, de centre le point d'intersection des deux axes.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Retiens la règle pratique : composer deux transformations « qui retournent » la figure (comme deux symétries) peut redonner une transformation « qui ne retourne pas » la figure (comme une translation ou une symétrie centrale) — deux renversements s'annulent, un peu comme deux signes moins qui se compensent.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : soit la symétrie centrale de centre O₁(0;0) puis celle de centre O₂(4;0), appliquées successivement à un point M(1;1). Image de M par la 1ère symétrie (centre O₁) : M'(−1;−1) (on prend l'opposé des coordonnées). Image de M' par la 2ème symétrie (centre O₂) : M''(2×4−(−1) ; 2×0−(−1)) = (9 ; 1). On peut vérifier que ce résultat correspond bien à une translation de vecteur 2×(vecteur O₁O₂) = 2×(4;0) = (8;0) appliquée directement à M(1;1) : (1+8 ; 1+0) = (9;1). ✓</p>`,
      quiz: [
        {q:"La composée de deux translations de vecteurs u et v est une translation de vecteur...", options:["u × v","u − v","u + v","u/v"], correct:2, exp:"La composée de deux translations est une translation dont le vecteur est la somme des deux vecteurs."},
        {q:"La composée de deux symétries centrales (centres différents) est...", options:["une translation","une symétrie centrale","une symétrie orthogonale","l'identité"], correct:0, exp:"Composer deux symétries centrales de centres distincts donne une translation."},
        {q:"La composée de deux symétries orthogonales d'axes perpendiculaires est...", options:["une translation","une symétrie centrale de centre le point d'intersection des axes","une symétrie orthogonale","une rotation de 45°"], correct:1, exp:"C'est une symétrie centrale, de centre le point d'intersection des deux axes perpendiculaires."},
        {q:"Pour composer deux applications f puis g, on note le résultat...", options:["f∘g","g∘f","f+g","fg"], correct:1, exp:"g∘f signifie qu'on applique d'abord f, puis g."},
        {q:"Composer deux symétries (centrales ou orthogonales) donne en général...", options:["toujours une symétrie","une transformation qui ne « retourne » plus la figure (translation ou symétrie centrale)","toujours l'identité","un agrandissement"], correct:1, exp:"Deux renversements successifs s'annulent : on obtient une translation ou une symétrie centrale selon le cas."}
      ]
    },
    {
      id: "m16",
      title: "Section de solides",
      content: `<p>Une <strong>section</strong> d'un solide par un plan est la figure plane obtenue à l'intersection du solide et de ce plan. Le programme de 4e étudie en particulier les sections obtenues par un <strong>plan parallèle à la base</strong> du solide (cube, pavé droit, pyramide, prisme...).</p>
      <p>Pour un <strong>pavé droit</strong> ou un <strong>cube</strong>, une section par un plan parallèle à une face est toujours un rectangle (ou un carré) de mêmes dimensions que cette face.</p>
      <p>Pour une <strong>pyramide</strong>, une section par un plan parallèle à la base est une réduction de la base (une figure de même forme, mais plus petite).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On représente souvent ces sections en <strong>perspective cavalière</strong>, une technique de dessin qui permet de représenter un solide en 3 dimensions sur une feuille plane, en conservant le parallélisme des arêtes et en réduisant les longueurs « en profondeur ».</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : un pavé droit mesure 8 cm × 5 cm × 6 cm de hauteur. On le coupe par un plan horizontal parallèle à la base, à mi-hauteur (3 cm du bas). La section obtenue est un rectangle identique à la base : 8 cm × 5 cm, quelle que soit la hauteur à laquelle on coupe (tant que le plan reste parallèle à la base et à l'intérieur du solide). Pour une pyramide de base carrée de 8 cm de côté et de hauteur 6 cm, une section à mi-hauteur (3 cm) donnerait un carré réduit de moitié en dimension par rapport à la base, soit 4 cm de côté.</p>`,
      quiz: [
        {q:"La section d'un pavé droit par un plan parallèle à une face est...", options:["un triangle","un rectangle identique à cette face","un cercle","un pentagone"], correct:1, exp:"Pour un pavé droit, une section parallèle à une face reproduit exactement cette face (même dimensions)."},
        {q:"La section d'une pyramide par un plan parallèle à sa base est...", options:["identique à la base","une réduction de la base","un cercle toujours","impossible à déterminer"], correct:1, exp:"La section d'une pyramide par un plan parallèle à la base est une réduction (figure semblable plus petite) de la base."},
        {q:"La perspective cavalière sert à...", options:["calculer un volume","représenter un solide en 3D sur une feuille plane","mesurer un angle","calculer une aire"], correct:1, exp:"C'est une technique de représentation en 3 dimensions sur une surface plane."},
        {q:"Dans une perspective cavalière, les arêtes fuyantes (en profondeur) sont généralement...", options:["agrandies","dessinées à leur taille réelle","réduites","supprimées"], correct:2, exp:"Les longueurs « en profondeur » sont réduites selon un coefficient pour donner une impression de perspective."},
        {q:"Une section de cube par un plan parallèle à une face est toujours...", options:["un triangle","un carré identique à la face","un rectangle non carré","un cercle"], correct:1, exp:"Pour un cube, toutes les faces sont carrées, donc la section parallèle à une face est un carré de même dimension."}
      ]
    },
    {
      id: "m17",
      title: "Équations et inéquations du premier degré dans ℝ",
      content: `<p>Une <strong>équation du premier degré</strong> à une inconnue x est une égalité de la forme ax + b = cx + d (avec a, b, c, d des nombres réels). Résoudre l'équation, c'est trouver toutes les valeurs de x qui rendent l'égalité vraie.</p>
      <p>Une <strong>inéquation du premier degré</strong> est une inégalité de même forme (avec &lt;, &gt;, ≤ ou ≥ à la place de =). Sa résolution donne un ensemble de valeurs (un intervalle), qu'on peut représenter sur une droite graduée.</p>
      <p><strong>Règle essentielle pour les inéquations :</strong> multiplier ou diviser les deux membres par un nombre NÉGATIF inverse le sens de l'inégalité.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Après avoir trouvé la solution d'une équation, prends l'habitude de vérifier en remplaçant x par ta valeur dans l'équation de départ : si les deux membres sont égaux, ta solution est correcte.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'équation : résous 5x − 3 = 2x + 9. On regroupe les x d'un côté : 5x − 2x = 9 + 3, soit 3x = 12, donc x = 4. Vérification : 5×4−3 = 17 et 2×4+9 = 17. ✓ Exemple d'inéquation : résous −2x + 6 &lt; 0. On isole x : −2x &lt; −6, puis on divise par −2 (nombre négatif, donc on inverse le sens) : x &gt; 3. La solution est donc l'ensemble des réels strictement supérieurs à 3, qu'on représente sur une droite graduée par une demi-droite ouverte partant de 3 vers la droite.</p>
      <h3>📌 Point du programme à ne pas manquer : résolution de problèmes</h3>
      <p>Pour résoudre un problème concret avec une équation : on choisit une inconnue x, on traduit l'énoncé en équation, on la résout, puis on vérifie que la solution a un sens dans le contexte. Exemple : « Karim a 3 ans de plus que le double de l'âge de sa sœur. Ensemble ils ont 33 ans. Quel est l'âge de la sœur ? » On note x l'âge de la sœur : Karim a 2x+3 ans. L'équation est x + (2x+3) = 33, soit 3x+3=33, donc 3x=30, x=10. La sœur a 10 ans (et Karim a 2×10+3 = 23 ans ; vérification : 10+23=33 ✓).</p>`,
      quiz: [
        {q:"Résous 4x + 5 = 2x + 17.", options:["x = 4","x = 6","x = 12","x = 2"], correct:1, exp:"4x−2x = 17−5, donc 2x=12, x=6."},
        {q:"En résolvant une inéquation, quand faut-il inverser le sens de l'inégalité ?", options:["En additionnant un nombre positif","En divisant par un nombre positif","En multipliant ou divisant par un nombre négatif","Jamais"], correct:2, exp:"Multiplier ou diviser par un nombre négatif inverse le sens de l'inégalité."},
        {q:"Résous −3x + 9 > 0.", options:["x > 3","x < 3","x > −3","x < −3"], correct:1, exp:"−3x > −9, puis on divise par −3 (on inverse le sens) : x < 3."},
        {q:"Une équation du premier degré a en général...", options:["aucune solution toujours","une solution unique","toujours deux solutions","une infinité de solutions toujours"], correct:1, exp:"Une équation du premier degré (avec a≠c) a en général une unique solution."},
        {q:"Comment vérifier la solution d'une équation ?", options:["On ne peut pas vérifier","En remplaçant x par la solution trouvée dans l'équation de départ","En redessinant la figure","En multipliant par 2"], correct:1, exp:"On remplace x par la valeur trouvée : si les deux membres deviennent égaux, la solution est correcte."},
        {q:"Un problème se traduit par l'équation x + (2x+3) = 33. Quelle est la valeur de x ?", options:["10","12","15","30"], correct:0, exp:"3x+3=33, donc 3x=30, x=10."}
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
      <p>Le schéma narratif comporte classiquement 5 étapes : la situation initiale (le décor, les personnages, avant que tout ne commence), l'élément perturbateur (ce qui déclenche l'histoire), les péripéties (les événements, obstacles, actions), l'élément de résolution (ce qui règle le problème) et la situation finale (comment tout se termine). Exemple en une phrase par étape : « Kofi vivait paisiblement à Abidjan (initiale). Un jour, il perdit son emploi (perturbateur). Il chercha du travail, essuya plusieurs refus, puis rencontra un ancien ami (péripéties). Cet ami lui proposa un poste dans son entreprise (résolution). Kofi retrouva une vie stable et sereine (finale). »</p>`,
      quiz: [
        {q:"Combien d'étapes comporte le schéma narratif classique ?", options:["3","4","5","6"], correct:2, exp:"Le schéma narratif comporte cinq étapes."},
        {q:"L'élément perturbateur intervient :", options:["au début du récit","après la situation initiale","à la toute fin","il n'existe pas toujours"], correct:1, exp:"Il rompt l'équilibre présenté dans la situation initiale."},
        {q:"Les péripéties sont :", options:["le tout début du récit","la conclusion du récit","la suite d'actions que traverse le héros","la présentation des personnages"], correct:2, exp:"Les péripéties forment le corps de l'action, entre le déclencheur et la résolution."},
        {q:"La situation finale correspond à :", options:["l'équilibre de départ obligatoirement","un nouvel équilibre","l'élément perturbateur","une péripétie"], correct:1, exp:"La situation finale présente un état nouveau, souvent transformé par l'histoire vécue."},
        {q:"Le schéma narratif s'applique à :", options:["uniquement la poésie","uniquement le théâtre","contes, romans, nouvelles, fables","uniquement les articles de presse"], correct:2, exp:"C'est une structure typique des récits (contes, romans, nouvelles, fables)."}
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
      <p>La description suit souvent un ordre logique (du général au particulier, de haut en bas, de près à loin, ou selon le regard qui se déplace) pour ne pas donner une impression de désordre au lecteur. Elle dépend aussi du point de vue (focalisation) : si on décrit ce qu'un personnage voit et ressent, on parle de focalisation interne ; si le narrateur décrit sans se limiter au regard d'un personnage, on parle de focalisation externe ou omnisciente.</p>`,
      quiz: [
        {q:"Le portrait décrit principalement :", options:["un lieu","un personnage","une action","un sentiment"], correct:1, exp:"Le portrait est la description d'un personnage."},
        {q:"Une description s'appuie souvent sur :", options:["les cinq sens","uniquement la vue","uniquement le toucher","aucun sens en particulier"], correct:0, exp:"Une bonne description mobilise plusieurs sens (vue, ouïe, odorat, toucher, goût)."},
        {q:"Un procédé fréquent de la description est :", options:["le dialogue uniquement","l'adjectif qualificatif","la conjugaison au futur","la négation systématique"], correct:1, exp:"Les adjectifs qualificatifs précisent les caractéristiques décrites."},
        {q:"Une fonction de la description peut être :", options:["accélérer brutalement l'action","créer une atmosphère","remplacer le dialogue","conclure obligatoirement le récit"], correct:1, exp:"La description peut installer une ambiance ou un climat particulier."},
        {q:"La description d'un lieu s'appelle :", options:["un portrait","un paysage","un dialogue","une péripétie"], correct:1, exp:"On parle de paysage pour la description d'un lieu."}
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
      <p>Différence essentielle entre comparaison et métaphore : la comparaison utilise un outil de comparaison visible (comme, tel que, pareil à) — « Ses yeux brillaient comme des étoiles » — alors que la métaphore fait le rapprochement directement, sans outil de comparaison — « Ses yeux étaient des étoiles ». La personnification, elle, attribue des caractéristiques humaines à une chose ou un animal : « Le vent hurlait de rage. »</p>`,
      quiz: [
        {q:"« Elle court comme le vent » est une :", options:["métaphore","comparaison","personnification","antithèse"], correct:1, exp:"Le mot « comme » signale une comparaison."},
        {q:"« Le temps est un voleur » est une :", options:["comparaison","métaphore","personnification","énumération"], correct:1, exp:"Il n'y a pas de mot de comparaison : les deux éléments sont directement fusionnés, c'est une métaphore."},
        {q:"« La lune sourit dans le ciel » est une :", options:["comparaison","métaphore","personnification","hyperbole"], correct:2, exp:"On attribue une action humaine (sourire) à la lune : c'est une personnification."},
        {q:"Un mot de comparaison typique est :", options:["mais","comme","donc","or"], correct:1, exp:"« Comme » est un mot de comparaison classique."},
        {q:"Les figures de style servent à :", options:["rendre un texte plus imagé","supprimer les adjectifs","raccourcir les phrases","éviter la ponctuation"], correct:0, exp:"Elles enrichissent l'expression et l'image véhiculée par le texte."}
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
      <p>Les 4 types de phrase (déclarative, interrogative, exclamative, injonctive) répondent à la question « que veut faire la phrase ? », tandis que les formes (affirmative/négative, emphatique, passive) précisent « comment elle le fait ». On peut donc combiner un type et plusieurs formes : « Ne viendras-tu pas demain ? » est une phrase de type interrogatif et de forme négative en même temps.</p>`,
      quiz: [
        {q:"« Range ta chambre ! » est une phrase :", options:["déclarative","interrogative","injonctive","exclamative"], correct:2, exp:"Elle donne un ordre : c'est une phrase injonctive."},
        {q:"« Quelle belle journée ! » est une phrase :", options:["déclarative","exclamative","interrogative","injonctive"], correct:1, exp:"Elle exprime une émotion forte : c'est une phrase exclamative."},
        {q:"« Il ne viendra jamais » est une phrase de forme :", options:["affirmative","négative","interrogative","injonctive"], correct:1, exp:"La présence de « ne...jamais » indique une forme négative."},
        {q:"Dans une phrase passive :", options:["le sujet fait l'action","le sujet subit l'action","il n'y a pas de sujet","le verbe est toujours au futur"], correct:1, exp:"À la forme passive, le sujet subit l'action au lieu de la faire."},
        {q:"« Viens-tu demain ? » est une phrase :", options:["déclarative","interrogative","exclamative","injonctive"], correct:1, exp:"Elle pose une question : c'est une phrase interrogative."}
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
      <p>Exemple complet de transformation du discours direct au discours indirect : « Je pars demain », dit Awa devient, au discours indirect, Awa dit qu'elle partait le lendemain (le présent devient imparfait, « demain » devient « le lendemain », et « je » devient « elle »). Autre point important : au discours direct, on utilise les guillemets et le tiret pour marquer les paroles rapportées telles quelles ; au discours indirect, il n'y a plus ni guillemets ni tiret, car les paroles sont intégrées dans la phrase du narrateur avec « que ».</p>`,
      quiz: [
        {q:"Le discours direct utilise :", options:["des guillemets","toujours le futur","aucune ponctuation particulière","uniquement la troisième personne"], correct:0, exp:"Les paroles rapportées au discours direct sont encadrées de guillemets."},
        {q:"« Je viendrai demain » devient au discours indirect :", options:["qu'il viendrait le lendemain","qu'il vient demain","qu'il viendra ici","qu'il est venu hier"], correct:0, exp:"Le futur devient conditionnel et « demain » devient « le lendemain »."},
        {q:"Le discours indirect est introduit souvent par :", options:["un point d'exclamation","que","des guillemets","un tiret"], correct:1, exp:"La conjonction « que » introduit la proposition subordonnée au discours indirect."},
        {q:"Au discours indirect, « ici » devient généralement :", options:["là","demain","toujours ici","aujourd'hui"], correct:0, exp:"L'indicateur de lieu « ici » devient « là » lors du passage au discours indirect."},
        {q:"Le verbe de parole introduit :", options:["uniquement le discours direct","uniquement le discours indirect","les deux formes de discours rapporté","aucun des deux"], correct:2, exp:"Des verbes comme dire, demander, répondre introduisent aussi bien le discours direct que l'indirect."}
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
      <p>Structure type d'un paragraphe argumentatif : on annonce l'idée (l'argument), puis on l'illustre avec un exemple concret, et on peut terminer par une petite conclusion qui relie l'argument à la thèse défendue. Exemple : « L'école est essentielle pour l'avenir d'un pays (argument), car elle forme les futurs ingénieurs, médecins et enseignants dont la société a besoin (exemple). C'est pourquoi investir dans l'éducation est une priorité (mini-conclusion). »</p>`,
      quiz: [
        {q:"Le but d'une lettre argumentative est de :", options:["raconter une histoire","décrire un lieu","convaincre le destinataire","donner une recette"], correct:2, exp:"Elle cherche à persuader le lecteur d'un point de vue ou d'une action."},
        {q:"Un connecteur logique utile dans une argumentation est :", options:["soudain","de plus","il était une fois","au clair de lune"], correct:1, exp:"« De plus » relie logiquement deux arguments."},
        {q:"Un argument est plus convaincant lorsqu'il est :", options:["vague","illustré par un exemple","répété plusieurs fois sans preuve","très court"], correct:1, exp:"Un exemple concret appuie et renforce un argument."},
        {q:"La lettre se termine généralement par :", options:["un exemple","une formule de politesse","un élément perturbateur","une comparaison"], correct:1, exp:"Une formule de politesse clôture traditionnellement une lettre."},
        {q:"« Cependant » sert à exprimer :", options:["une addition","une opposition","une conséquence","une certitude absolue"], correct:1, exp:"« Cependant » introduit une nuance ou une opposition dans le raisonnement."}
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
      <p>Les classes grammaticales variables (qui changent de forme selon le genre, le nombre ou la personne) sont : le nom, le déterminant, l'adjectif qualificatif, le pronom et le verbe. Exemple d'analyse d'une phrase : dans « Les [déterminant] petits [adjectif] enfants [nom] jouent [verbe] joyeusement [adverbe] dans [préposition] le jardin [nom] », chaque mot appartient à une classe précise qui détermine son rôle et ses accords possibles.</p>`,
      quiz: [
        {q:"Dans « Le chat dort », « chat » est :", options:["un verbe","un nom","un adjectif","une préposition"], correct:1, exp:"« Chat » désigne un être vivant : c'est un nom."},
        {q:"Un adverbe est un mot :", options:["qui se conjugue","variable en genre et nombre","invariable","qui remplace un nom"], correct:2, exp:"L'adverbe est par nature invariable, contrairement à l'adjectif."},
        {q:"Dans « Elle est gentille », « gentille » est :", options:["un adverbe","un adjectif","un pronom","une conjonction"], correct:1, exp:"« Gentille » qualifie le pronom « elle » : c'est un adjectif."},
        {q:"« Il » est un exemple de :", options:["nom","pronom","préposition","conjonction"], correct:1, exp:"« Il » remplace un nom : c'est un pronom."},
        {q:"« Mais » est une :", options:["préposition","conjonction","interjection","adverbe"], correct:1, exp:"« Mais » relie deux idées : c'est une conjonction de coordination."}
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
      <p>Autres fonctions importantes à connaître : l'attribut du sujet (relié au sujet par un verbe d'état comme être, sembler, devenir : « Awa est intelligente »), et le complément circonstanciel (précise le lieu, le temps, la manière, la cause... et peut souvent être déplacé ou supprimé sans rendre la phrase incorrecte : « Hier, il a plu à Abidjan » → « Il a plu à Abidjan »). Contrairement au COD/COI, le complément circonstanciel n'est pas obligatoire pour que la phrase ait un sens.</p>`,
      quiz: [
        {q:"Dans « Marie mange une pomme », « une pomme » est :", options:["sujet","COD","COI","complément circonstanciel"], correct:1, exp:"« Une pomme » répond à « mange quoi ? » sans préposition : c'est le COD."},
        {q:"Dans « Il parle à son ami », « à son ami » est :", options:["COD","COI","sujet","attribut"], correct:1, exp:"« À son ami » répond à « parle à qui ? » avec une préposition : c'est le COI."},
        {q:"Le complément circonstanciel peut généralement être :", options:["jamais déplacé","déplacé ou supprimé","transformé en sujet","seulement au début de phrase"], correct:1, exp:"Le complément circonstanciel est souvent mobile et peut être supprimé sans rendre la phrase incorrecte."},
        {q:"Le sujet d'une phrase :", options:["répond à qui/quoi après le verbe","fait ou subit l'action du verbe","précise le lieu ou le temps","est toujours un adjectif"], correct:1, exp:"Le sujet est celui qui fait ou subit l'action exprimée par le verbe."},
        {q:"La fonction d'un mot dépend :", options:["uniquement de sa nature","de son rôle dans la phrase","de sa longueur","de sa position alphabétique"], correct:1, exp:"La fonction dépend du rôle que joue le mot dans la phrase, contrairement à sa nature qui est fixe."}
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
      <p>Un troisième temps complète souvent le passé simple et l'imparfait dans un récit : le plus-que-parfait, qui exprime une action antérieure à une autre action passée. Exemple : « Quand il arriva (passé simple) à la gare, le train était déjà parti (plus-que-parfait) » — le départ du train a eu lieu AVANT l'arrivée du personnage, d'où l'utilisation du plus-que-parfait pour marquer cette antériorité.</p>`,
      quiz: [
        {q:"L'imparfait sert surtout à :", options:["exprimer une action brève","décrire un décor ou une habitude","poser une question","donner un ordre"], correct:1, exp:"L'imparfait installe le cadre, la description ou une habitude, à l'arrière-plan du récit."},
        {q:"Le passé simple sert surtout à :", options:["décrire un décor","exprimer une action ponctuelle qui fait avancer le récit","exprimer une vérité générale","donner un conseil"], correct:1, exp:"Le passé simple marque les événements précis qui font progresser l'histoire."},
        {q:"« Il pleuvait depuis le matin » est à :", options:["l'imparfait","au passé simple","au futur","au présent"], correct:0, exp:"Cette phrase décrit une situation qui dure : c'est l'imparfait."},
        {q:"« Soudain, la porte s'ouvrit » est au :", options:["imparfait","passé simple","conditionnel","subjonctif"], correct:1, exp:"Une action brève et ponctuelle qui surprend : c'est le passé simple."},
        {q:"Dans un récit, l'arrière-plan (décor) est généralement exprimé :", options:["au passé simple","à l'imparfait","au futur simple","au subjonctif"], correct:1, exp:"L'imparfait sert de toile de fond descriptive au récit."}
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
      <p>Astuce de conjugaison : le conditionnel présent se forme en général avec le radical du futur simple + les terminaisons de l'imparfait (-ais, -ais, -ait, -ions, -iez, -aient). Exemple : futur « il finira » → conditionnel « il finirait ». Pour le subjonctif présent, on part souvent du radical de la 3e personne du pluriel au présent de l'indicatif : « ils finissent » → « que je finisse, que tu finisses... ».</p>`,
      quiz: [
        {q:"« Je voyagerais si j'avais de l'argent » utilise :", options:["le futur","le conditionnel","le subjonctif","l'impératif"], correct:1, exp:"Cette phrase exprime une action soumise à une condition : c'est le conditionnel."},
        {q:"Le conditionnel présent se forme avec :", options:["le radical du passé + terminaisons du présent","le radical du futur + terminaisons de l'imparfait","le radical du présent + terminaisons du futur","l'infinitif seul"], correct:1, exp:"Le conditionnel présent combine le radical du futur et les terminaisons de l'imparfait."},
        {q:"« Il faut que tu viennes » utilise :", options:["l'indicatif","le conditionnel","le subjonctif","l'imparfait"], correct:2, exp:"Après « il faut que », on emploie le subjonctif pour exprimer une nécessité."},
        {q:"Le subjonctif exprime souvent :", options:["un fait certain","un doute, un souhait ou une nécessité","une habitude passée","une action ponctuelle du passé"], correct:1, exp:"Le subjonctif s'utilise pour des faits envisagés, souhaités ou incertains, non pour des faits certains."},
        {q:"« Bien qu'il soit fatigué, il continue » utilise le mode :", options:["indicatif","subjonctif","conditionnel","impératif"], correct:1, exp:"« Bien que » est suivi du subjonctif : soit."}
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
      <p>Exemple de fusion de deux phrases grâce à une proposition subordonnée relative : « J'ai lu le livre. Tu m'as offert ce livre. » devient « J'ai lu le livre que tu m'as offert. » (« que » remplace « ce livre », complément d'objet direct du verbe offrir). Le choix du pronom relatif dépend de la fonction du mot qu'il remplace : « qui » pour un sujet, « que » pour un COD, « dont » pour un complément en « de », « où » pour un lieu ou un temps.</p>`,
      quiz: [
        {q:"Dans « L'homme qui parle est mon voisin », « qui » remplace :", options:["le COD","le sujet du verbe « parle »","un complément circonstanciel","rien, c'est un mot vide"], correct:1, exp:"« Qui » reprend « l'homme » comme sujet du verbe « parle »."},
        {q:"Dans « Le livre que je lis », « que » a pour fonction :", options:["sujet","COD","COI","complément circonstanciel"], correct:1, exp:"« Que » remplace « le livre », complément d'objet direct de « lis »."},
        {q:"« Dont » remplace généralement un complément introduit par :", options:["à","de","sur","pour"], correct:1, exp:"« Dont » reprend un complément construit avec la préposition « de »."},
        {q:"« Où » dans une relative indique souvent :", options:["une personne","un lieu ou un temps","une quantité","une couleur"], correct:1, exp:"« Où » introduit généralement un complément de lieu ou de temps."},
        {q:"La subordonnée relative complète :", options:["le verbe principal uniquement","un nom ou un pronom (son antécédent)","toujours le sujet","rien de précis"], correct:1, exp:"Elle apporte une précision sur un nom ou un pronom appelé antécédent."}
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
      <p>Nuance utile entre les connecteurs de cause : « parce que » répond directement à la question « pourquoi ? » et introduit une raison objective, tandis que « puisque » introduit une cause déjà connue ou évidente pour l'interlocuteur. Exemple combinant cause et conséquence dans un même texte : « Puisque la route était inondée (cause connue), les élèves sont arrivés en retard, si bien que le professeur a dû reprendre le cours du début (conséquence). »</p>`,
      quiz: [
        {q:"« Parce que » introduit :", options:["une cause","une conséquence","une comparaison","une condition"], correct:0, exp:"« Parce que » explique la raison d'un fait : c'est un connecteur de cause."},
        {q:"« Donc » introduit :", options:["une cause","une conséquence","une opposition","un but"], correct:1, exp:"« Donc » indique le résultat qui découle de ce qui précède : c'est un connecteur de conséquence."},
        {q:"« Grâce à » exprime :", options:["une conséquence positive dont on connaît la cause","une opposition","un doute","un but"], correct:0, exp:"« Grâce à » introduit une cause perçue positivement, menant à une conséquence favorable."},
        {q:"« Si bien que » introduit :", options:["une cause","une conséquence","une comparaison","une hypothèse"], correct:1, exp:"« Si bien que » relie un fait à son résultat : c'est un connecteur de conséquence."},
        {q:"« Comme il pleuvait, nous sommes restés » : « comme » exprime ici :", options:["une comparaison","une cause","une conséquence","un but"], correct:1, exp:"En début de phrase, « comme » indique ici la cause de ce qui suit."}
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
      <p>Différence à connaître : le compte rendu résume et reformule ce qui s'est dit (dans l'ordre logique des thèmes abordés), tandis que le procès-verbal rapporte les échanges de façon plus formelle et souvent chronologique, avec une valeur presque juridique pour certaines réunions officielles. Exemple de structure : Objet de la réunion — Présents/Absents — Points abordés (1, 2, 3...) — Décisions prises — Date de la prochaine réunion.</p>`,
      quiz: [
        {q:"Le compte rendu de réunion est généralement rédigé par :", options:["le président uniquement","le secrétaire de séance","un participant au hasard","un journaliste"], correct:1, exp:"C'est le secrétaire de séance qui est chargé de rédiger le compte rendu."},
        {q:"L'en-tête du compte rendu doit indiquer notamment :", options:["uniquement le titre","la date, le lieu, l'heure et les participants","seulement les absents","rien de particulier"], correct:1, exp:"L'en-tête regroupe les informations essentielles : intitulé, date, lieu, heure, participants."},
        {q:"Le corps du compte rendu doit :", options:["inventer de nouveaux propos","résumer chaque intervention en citant son auteur","être rédigé au discours direct uniquement","omettre les décisions prises"], correct:1, exp:"On résume fidèlement chaque intervention, en indiquant qui a pris la parole."},
        {q:"Le compte rendu se termine par :", options:["une formule de politesse amoureuse","une formule indiquant la fin de l'ordre du jour et l'heure de levée de séance","un poème","une liste de courses"], correct:1, exp:"Une formule de clôture précise que l'ordre du jour est épuisé et donne l'heure de fin."},
        {q:"L'ordre du jour dans un compte rendu désigne :", options:["la météo du jour","la liste des sujets à traiter pendant la réunion","le nom du secrétaire","l'heure de début uniquement"], correct:1, exp:"L'ordre du jour liste les points qui doivent être abordés durant la réunion."}
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
      <p>Technique utile dans un dialogue argumentatif : la concession, qui consiste à reconnaître un point de l'adversaire avant de le contrer, ce qui rend l'argumentation plus convaincante. Exemple : « — Certes, les réseaux sociaux permettent de rester en contact avec ses amis, mais ils prennent aussi énormément de temps qui pourrait être consacré aux études, répondit Aya. » Cette structure « certes... mais » montre qu'on a compris l'avis opposé tout en défendant le sien.</p>`,
      quiz: [
        {q:"Le but du dialogue argumentatif est de :", options:["décrire un paysage","convaincre l'interlocuteur","raconter une légende","donner une recette"], correct:1, exp:"Ce type de dialogue vise à faire changer d'avis ou à convaincre l'autre personnage."},
        {q:"Le dialogue argumentatif comporte :", options:["seulement un développement","une introduction, un développement et une conclusion","seulement une conclusion","uniquement des questions"], correct:1, exp:"Comme les autres types de textes structurés, il suit un plan en trois parties."},
        {q:"Un argument doit être :", options:["vague et sans exemple","soutenu et illustré par un exemple","toujours faux","répété sans preuve"], correct:1, exp:"Un bon argument s'appuie sur une illustration concrète pour être convaincant."},
        {q:"Les marques du dialogue incluent notamment :", options:["les tirets et le discours direct","les racines carrées","les formules chimiques","les théorèmes"], correct:0, exp:"Les tirets et le discours direct signalent les prises de parole des personnages."},
        {q:"Quand un narrateur rapporte le dialogue, il doit notamment :", options:["inventer un nouveau sujet","présenter les points de vue et faire un bilan final","ignorer les arguments","supprimer la conclusion"], correct:1, exp:"Le narrateur restitue les points de vue échangés et conclut sur l'issue du débat."}
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
      <p>Structure complète d'une lettre officielle : coordonnées de l'expéditeur (en haut à gauche), coordonnées du destinataire (en haut à droite), lieu et date, objet de la lettre (une ligne résumant la demande), formule d'appel, corps de la lettre (contexte, demande, justification), formule de politesse, et signature. Exemple d'objet : « Objet : Demande de certificat de scolarité » — une ligne claire qui permet au destinataire de comprendre immédiatement le motif de la lettre.</p>`,
      quiz: [
        {q:"La lettre officielle s'adresse à :", options:["un ami proche","une autorité compétente","un personnage imaginaire","un animal"], correct:1, exp:"Elle est destinée à une autorité (administration, direction...) dans un cadre formel."},
        {q:"Le niveau de langue d'une lettre officielle doit être :", options:["familier","soutenu","argotique","enfantin"], correct:1, exp:"Une lettre officielle exige un registre de langue soutenu et respectueux."},
        {q:"Parmi les parties d'une lettre officielle, on trouve :", options:["le schéma narratif","l'objet de la lettre et la formule d'appel","les péripéties","le résumé du texte"], correct:1, exp:"L'objet et la formule d'appel font partie des éléments structurants d'une lettre officielle."},
        {q:"« J'ai l'honneur de solliciter... » est une formule utilisée pour :", options:["clore la lettre","exposer poliment une demande","donner un ordre","décrire un paysage"], correct:1, exp:"Cette formule introduit poliment l'objet précis de la demande dans le corps de la lettre."},
        {q:"Les pièces jointes dans une lettre officielle sont mentionnées :", options:["au début de la lettre uniquement","généralement en bas, après la signature ou juste avant","jamais","à la place de l'objet"], correct:1, exp:"Les pièces jointes (p.j.) sont habituellement listées en fin de lettre."}
      ]
    },
    {
      id: "f18",
      title: "Le groupe nominal",
      content: `<p>Un <strong>groupe nominal</strong> (GN) est un ensemble de mots équivalent à un nom : il peut être remplacé par un nom ou un pronom. Exemple : « la capitale de la Côte d'Ivoire » peut être remplacé par « Yamoussoukro ».</p>
      <p>Le groupe nominal est composé d'un <strong>nom noyau</strong> (l'élément central) et éventuellement d'expansions qui viennent le compléter : le <strong>déterminant</strong> (précède le nom, s'accorde en genre et en nombre : la classe), l'<strong>adjectif épithète</strong> (relié directement au nom : la voiture rouge), le <strong>complément du nom</strong> (relié par une préposition : le bureau du proviseur), et la <strong>subordonnée relative</strong> (reliée directement au nom : les enfants que tu m'as envoyés sont sages).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un groupe nominal peut cumuler plusieurs expansions autour du même nom noyau : « l'énorme voiture rouge du voisin que j'ai vue hier » contient un déterminant, un adjectif épithète, un complément du nom et une subordonnée relative, tous rattachés au nom noyau « voiture ».</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'analyse : « Le château de mon père est beau. » Le groupe nominal sujet est « Le château de mon père », avec « château » comme nom noyau, « Le » comme déterminant, et « de mon père » comme complément du nom (relié par la préposition « de »). Repérer le nom noyau en premier permet ensuite d'identifier facilement les expansions qui l'entourent.</p>`,
      quiz: [
        {q:"Un groupe nominal peut être remplacé par...", options:["un verbe","un nom ou un pronom","un adverbe seul","une préposition"], correct:1, exp:"Le groupe nominal est équivalent à un nom, donc remplaçable par un nom ou un pronom."},
        {q:"Dans « la voiture rouge », « rouge » est...", options:["un complément du nom","un adjectif épithète","une subordonnée relative","un déterminant"], correct:1, exp:"« rouge » est un adjectif qualificatif relié directement au nom : c'est un adjectif épithète."},
        {q:"Dans « le bureau du proviseur », « du proviseur » est...", options:["un adjectif épithète","un complément du nom","une subordonnée relative","un déterminant"], correct:1, exp:"« du proviseur » est relié au nom par la préposition « de » : c'est un complément du nom."},
        {q:"Le nom noyau d'un groupe nominal est...", options:["le déterminant","l'élément central autour duquel s'organisent les autres mots","toujours le premier mot","l'adjectif"], correct:1, exp:"Le nom noyau est l'élément principal du groupe nominal, autour duquel s'organisent ses expansions."},
        {q:"Une subordonnée relative dans un groupe nominal est reliée...", options:["par une préposition","directement au nom, sans préposition","toujours par une virgule","jamais au nom"], correct:1, exp:"La subordonnée relative est directement reliée au nom qu'elle complète (par un pronom relatif comme qui, que, dont, où)."}
      ]
    },
    {
      id: "f19",
      title: "La pronominalisation",
      content: `<p>La <strong>pronominalisation</strong> consiste à remplacer un groupe de mots (souvent un groupe nominal) par un <strong>pronom</strong>, afin d'éviter les répétitions et d'alléger la phrase. Exemple : « Awa aime les mangues. Awa en mange chaque jour. » devient « Awa aime les mangues. Elle en mange chaque jour. »</p>
      <p>On distingue le <strong>déterminant zéro</strong> : l'absence de déterminant devant un nom, qui s'emploie dans certains cas précis : devant les noms propres (Alice s'est rendue à Bouaké), dans les proverbes et maximes (« Pauvreté est mère du vice »), et dans certaines expressions figées ou vœux (« Meilleurs vœux »).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le choix du bon pronom dépend de la fonction du mot remplacé : un pronom personnel sujet (il, elle, ils, elles) remplace un groupe nominal sujet, tandis qu'un pronom complément (le, la, les, lui, leur, en, y) remplace un groupe nominal complément, selon sa fonction précise dans la phrase.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de pronominalisation complète : « Le professeur donne le livre à l'élève. » → « Le professeur le lui donne. » (« le » remplace « le livre », COD ; « lui » remplace « à l'élève », COI). Cette technique évite de répéter « le livre » et « à l'élève » si ces éléments ont déjà été mentionnés dans la phrase précédente.</p>`,
      quiz: [
        {q:"La pronominalisation sert à...", options:["allonger les phrases","remplacer un groupe de mots par un pronom pour éviter les répétitions","supprimer le sujet","ajouter des adjectifs"], correct:1, exp:"La pronominalisation permet d'éviter les répétitions en remplaçant un groupe de mots par un pronom."},
        {q:"Le déterminant zéro s'emploie devant...", options:["tous les noms communs","les noms propres, dans les proverbes, et certaines expressions figées","uniquement les adjectifs","jamais dans la langue française"], correct:1, exp:"Le déterminant zéro (absence de déterminant) s'emploie dans des cas précis : noms propres, proverbes, expressions figées."},
        {q:"Dans « Bloléquin est beau », le nom « Bloléquin » a...", options:["un déterminant défini","un déterminant zéro (absence de déterminant)","un déterminant indéfini","deux déterminants"], correct:1, exp:"Les noms propres n'ont généralement pas de déterminant : c'est le déterminant zéro."},
        {q:"Dans « Le professeur le lui donne », « le » remplace...", options:["le professeur","le livre (COD)","l'élève","aucun mot"], correct:1, exp:"« le » est un pronom COD qui remplace le groupe nominal complément d'objet direct, ici « le livre »."},
        {q:"Quel type de mot utilise-t-on pour la pronominalisation ?", options:["Un adjectif","Un pronom","Une préposition","Une conjonction"], correct:1, exp:"On utilise un pronom pour remplacer le groupe de mots (pronominalisation)."}
      ]
    },
    {
      id: "f20",
      title: "Le verbe : formes et emplois",
      content: `<p>Le <strong>verbe</strong> est le mot central de la phrase, qui exprime une action ou un état, et qui se conjugue selon la personne, le temps et le mode. On distingue les <strong>verbes d'action</strong> (courir, manger, écrire) des <strong>verbes d'état</strong> (être, sembler, paraître, devenir, rester), qui relient le sujet à un attribut.</p>
      <p>Selon leur construction, on distingue aussi les verbes <strong>transitifs</strong> (qui admettent un complément d'objet : « Il mange une mangue ») des verbes <strong>intransitifs</strong> (sans complément d'objet : « Il dort »), et les verbes <strong>pronominaux</strong> (construits avec un pronom réfléchi : se laver, se lever).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un même verbe peut parfois s'employer de façon transitive ou intransitive selon le contexte : « Il mange » (intransitif, sans complément) et « Il mange une mangue » (transitif, avec un complément d'objet direct). C'est le sens de la phrase qui détermine l'emploi.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'analyse : dans la phrase « Awa se lave rapidement avant de sortir. », le verbe « se laver » est un verbe pronominal (construit avec le pronom réfléchi « se », qui renvoie au sujet Awa elle-même). Dans « Awa semble fatiguée », le verbe « sembler » est un verbe d'état qui relie le sujet « Awa » à l'attribut « fatiguée », sans exprimer d'action concrète.</p>`,
      quiz: [
        {q:"Un verbe d'état relie le sujet à...", options:["un complément d'objet direct","un attribut du sujet","un complément circonstanciel","rien du tout"], correct:1, exp:"Les verbes d'état (être, sembler, devenir...) relient le sujet à un attribut du sujet."},
        {q:"Un verbe transitif est un verbe qui...", options:["n'a jamais de complément","admet un complément d'objet","est toujours pronominal","est toujours au passé"], correct:1, exp:"Un verbe transitif admet un complément d'objet (direct ou indirect)."},
        {q:"Dans « Il se lave », le verbe « se laver » est...", options:["un verbe d'état","un verbe pronominal","un verbe intransitif simple","un verbe au passif"], correct:1, exp:"« se laver » est construit avec le pronom réfléchi « se » : c'est un verbe pronominal."},
        {q:"Dans « Il dort », le verbe « dort » est utilisé de façon...", options:["transitive","intransitive (pas de complément d'objet)","pronominale","passive"], correct:1, exp:"« dormir » n'a pas de complément d'objet ici : il est employé de façon intransitive."},
        {q:"Parmi ces verbes, lequel est un verbe d'état ?", options:["Courir","Manger","Sembler","Écrire"], correct:2, exp:"« Sembler » est un verbe d'état qui relie le sujet à un attribut, contrairement aux verbes d'action listés."}
      ]
    },
    {
      id: "f21",
      title: "Étude de quelques propositions subordonnées",
      content: `<p>Une <strong>proposition subordonnée</strong> dépend d'une proposition principale et ne peut généralement pas fonctionner seule. Le programme de 4e étudie notamment plusieurs types : la <strong>subordonnée relative</strong> (introduite par qui, que, dont, où : « le livre que je lis »), la <strong>subordonnée conjonctive complétive</strong> (introduite par « que », complément du verbe : « Je pense qu'il viendra »), et des subordonnées <strong>circonstancielles</strong> (de temps, de cause, de condition...).</p>
      <p>Pour repérer une subordonnée, on cherche le mot qui l'introduit (pronom relatif, conjonction de subordination) et on délimite son début et sa fin dans la phrase.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Une même conjonction peut parfois introduire différents types de subordonnées selon le sens : « comme » peut introduire une subordonnée de cause (« Comme il pleuvait, nous sommes restés »/ = parce qu'il pleuvait) ou une subordonnée de comparaison (« Il court comme un champion »).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'analyse : « Je sais que tu as réussi ton examen. » La proposition principale est « Je sais », et la subordonnée conjonctive complétive est « que tu as réussi ton examen », complément d'objet direct du verbe « sais ». Autre exemple avec une relative : « L'élève qui travaille bien réussira. » — la subordonnée relative « qui travaille bien » complète le nom « élève » et précise de quel élève il s'agit.</p>`,
      quiz: [
        {q:"Une proposition subordonnée...", options:["peut toujours fonctionner seule","dépend généralement d'une proposition principale","n'a jamais de verbe conjugué","est toujours au début de la phrase"], correct:1, exp:"Une subordonnée dépend syntaxiquement de la proposition principale à laquelle elle est rattachée."},
        {q:"Dans « Je pense qu'il viendra », la subordonnée « qu'il viendra » est...", options:["une subordonnée relative","une subordonnée conjonctive complétive","une proposition indépendante","un groupe nominal"], correct:1, exp:"Introduite par « que » et complément du verbe « pense », c'est une subordonnée conjonctive complétive."},
        {q:"Une subordonnée relative est généralement introduite par...", options:["un pronom relatif (qui, que, dont, où)","une préposition seule","un adverbe","rien, elle n'a pas de mot introducteur"], correct:0, exp:"La subordonnée relative est introduite par un pronom relatif comme qui, que, dont ou où."},
        {q:"Dans « L'élève qui travaille bien réussira », la subordonnée complète...", options:["le verbe « réussira »","le nom « élève »","toute la phrase","rien en particulier"], correct:1, exp:"La subordonnée relative « qui travaille bien » vient compléter et préciser le nom « élève »."},
        {q:"« Comme » peut introduire une subordonnée de...", options:["cause ou de comparaison selon le contexte","lieu uniquement","temps uniquement","aucune subordonnée"], correct:0, exp:"Selon le contexte, « comme » peut exprimer la cause ou la comparaison."}
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
      <p>Exemple : le mot « démobilisation » se décompose ainsi : préfixe « dé » (indique l'inverse), radical « mobil » (qui bouge), suffixe « isation » (qui indique une action/un processus) — le mot signifie donc « l'action de rendre à nouveau immobile, de retirer d'un état de mobilisation ». Le mot composé « boîte à musique » assemble trois mots existants (boîte, à, musique) pour désigner un objet précis, différent de la simple somme de ses parties.</p>`,
      quiz: [
        {q:"La composition consiste à...", options:["ajouter un préfixe","ajouter un suffixe","assembler deux mots existants","supprimer une lettre"], correct:2, exp:"La composition assemble deux (ou plusieurs) mots existants pour en former un nouveau."},
        {q:"Dans « incapable », « in » est...", options:["un suffixe","un préfixe","un radical","un mot composé"], correct:1, exp:"« in » est placé devant le radical « capable » : c'est un préfixe."},
        {q:"Dans « jouable », « able » est...", options:["un préfixe","un suffixe","un mot composé","un radical"], correct:1, exp:"« able » est ajouté après le radical « jou » : c'est un suffixe."},
        {q:"« Porte-monnaie » est formé par...", options:["dérivation","composition","aucun procédé particulier","suffixation uniquement"], correct:1, exp:"« porte-monnaie » assemble deux mots existants (porte, monnaie) : c'est de la composition."},
        {q:"Le radical d'un mot est...", options:["son préfixe","son suffixe","la partie de base porteuse du sens principal","toujours la première lettre"], correct:2, exp:"Le radical est la partie centrale du mot qui porte le sens principal, à laquelle on ajoute préfixes et/ou suffixes."}
      ]
    },
    {
      id: "f23",
      title: "Orthographe grammaticale : accord du verbe avec « beaucoup, assez, peu »",
      content: `<p>L'<strong>orthographe grammaticale</strong> concerne les règles d'accord entre les mots. Un cas particulier étudié en 4e est l'accord du verbe quand le sujet contient des expressions de quantité comme « beaucoup de », « assez de », « peu de », « la plupart de », « trop de ».</p>
      <p><strong>Règle :</strong> avec ces expressions, le verbe s'accorde généralement avec le <strong>nom complément</strong> qui suit (au pluriel si ce nom est au pluriel) : « Beaucoup d'élèves sont venus » (le verbe s'accorde avec « élèves », pluriel), et non avec « beaucoup ».</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Si le nom complément est au singulier (indénombrable), le verbe reste au singulier : « Beaucoup de courage est nécessaire pour réussir » (le verbe s'accorde avec « courage », singulier, et non avec « beaucoup »).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple complet : « Peu d'élèves ont réussi l'examen cette année. » — ici, « peu » est suivi du nom pluriel « élèves », donc le verbe « ont réussi » s'accorde au pluriel. Comparons avec : « Peu de patience suffit pour apprendre cette leçon. » — ici, « peu » est suivi du nom singulier « patience », donc le verbe « suffit » reste au singulier. La règle est donc de toujours regarder le nom qui suit l'expression de quantité pour déterminer l'accord du verbe.</p>`,
      quiz: [
        {q:"Dans « Beaucoup d'élèves sont venus », le verbe s'accorde avec...", options:["« beaucoup »","« élèves » (le nom complément, pluriel)","le sujet implicite « il »","aucun accord particulier n'est nécessaire"], correct:1, exp:"Le verbe s'accorde avec le nom complément « élèves », qui est au pluriel."},
        {q:"Complète correctement : « Assez de patience ___ nécessaire. »", options:["sont","est","seront","étaient"], correct:1, exp:"« patience » est singulier, donc le verbe reste au singulier : « est nécessaire »."},
        {q:"Complète correctement : « La plupart des élèves ___ leur travail. »", options:["a fini","ont fini","a finis","ont finis"], correct:1, exp:"« élèves » est pluriel, donc le verbe s'accorde au pluriel : « ont fini »."},
        {q:"Avec les expressions de quantité comme « beaucoup de », l'accord du verbe se fait avec...", options:["toujours le singulier","le nom complément qui suit l'expression","toujours le pluriel","le sujet de la phrase précédente"], correct:1, exp:"C'est le nom complément (singulier ou pluriel) qui détermine l'accord du verbe."},
        {q:"Complète : « Trop de bruit ___ les élèves. »", options:["dérangent","dérange","dérangeaient","ont dérangé"], correct:1, exp:"« bruit » est singulier, donc le verbe s'accorde au singulier : « dérange »."}
      ]
    },
    {
      id: "f24",
      title: "Le débat",
      content: `<p>Le <strong>débat</strong> est un exercice d'expression orale où plusieurs personnes échangent des <strong>arguments</strong> contradictoires sur un sujet donné, dans le but de convaincre ou de confronter des points de vue différents, dans le respect mutuel.</p>
      <p>Pour bien participer à un débat, il faut : préparer ses arguments à l'avance (avec des exemples concrets pour les illustrer), écouter attentivement les arguments des autres participants (pour pouvoir y répondre précisément), et s'exprimer avec un langage courtois même en cas de désaccord.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un débat réussi utilise des formules pour nuancer son propos et respecter l'avis adverse tout en défendant le sien : « Je comprends votre point de vue, cependant… », « Certes, mais… », « Je suis d'accord sur ce point, toutefois… ». Cette technique de concession renforce la crédibilité de l'argumentation.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de structure d'intervention dans un débat sur le thème « Les réseaux sociaux sont-ils bénéfiques pour les jeunes ? » : « Je pense que les réseaux sociaux présentent un risque pour les jeunes (thèse), car ils peuvent réduire le temps consacré aux études (argument), comme le montre une étude sur la baisse des résultats scolaires liée à un usage excessif (exemple). Certes, ils permettent aussi de rester en contact avec ses amis (concession), mais cet avantage ne compense pas, selon moi, les risques évoqués (conclusion personnelle). »</p>`,
      quiz: [
        {q:"Le débat est un exercice de...", options:["expression écrite","expression orale","lecture silencieuse","dictée"], correct:1, exp:"Le débat est un exercice d'expression orale, basé sur l'échange d'arguments."},
        {q:"Que faut-il faire avant de participer à un débat ?", options:["Rien de particulier","Préparer ses arguments avec des exemples concrets","Éviter d'écouter les autres","Improviser sans réfléchir"], correct:1, exp:"Une bonne préparation, avec des arguments et exemples, est essentielle pour bien participer à un débat."},
        {q:"La formule « Certes... mais... » permet de...", options:["ignorer l'avis adverse","reconnaître un point de l'adversaire avant de le contrer (concession)","conclure le débat","poser une question"], correct:1, exp:"C'est une technique de concession, qui reconnaît un point valable de l'autre avant d'apporter une nuance ou une objection."},
        {q:"Dans un débat, il est important de...", options:["couper la parole systématiquement","écouter attentivement les arguments des autres","ne jamais changer d'avis","parler le plus fort possible"], correct:1, exp:"Écouter les arguments adverses permet d'y répondre de façon précise et pertinente."},
        {q:"Le ton à adopter dans un débat, même en cas de désaccord, doit être...", options:["agressif","courtois et respectueux","silencieux","moqueur"], correct:1, exp:"Le respect mutuel et la courtoisie sont essentiels, même face à des points de vue opposés."}
      ]
    },
    {
      id: "f25",
      title: "L'exposé oral",
      content: `<p>L'<strong>exposé oral</strong> est une présentation structurée d'un sujet devant un public (la classe), préparée à l'avance, qui vise à informer et expliquer plutôt qu'à débattre.</p>
      <p>Un bon exposé se structure en trois parties : une <strong>introduction</strong> (qui présente le sujet et annonce le plan), un <strong>développement</strong> (organisé en plusieurs parties claires, avec des exemples), et une <strong>conclusion</strong> (qui résume l'essentiel et peut ouvrir sur une question ou une perspective).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour un exposé réussi, il est conseillé de préparer des fiches avec des mots-clés plutôt que de lire un texte rédigé en entier : cela permet de garder un contact visuel avec le public, de parler avec un débit naturel, et de mieux capter l'attention des auditeurs.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de plan d'exposé sur le thème « Les grands empires africains précoloniaux » : Introduction (présenter le sujet : l'existence de puissants empires en Afrique de l'Ouest avant la colonisation, annoncer le plan). Développement, partie 1 (l'Empire du Ghana : origines, richesse liée au commerce de l'or et du sel), partie 2 (l'Empire du Mali : apogée sous Kankou Moussa), partie 3 (l'Empire Songhaï : déclin). Conclusion (résumer l'héritage culturel et historique de ces empires, et ouvrir sur leur influence encore visible aujourd'hui).</p>`,
      quiz: [
        {q:"L'exposé oral vise principalement à...", options:["débattre et convaincre","informer et expliquer un sujet","raconter une histoire imaginaire","chanter"], correct:1, exp:"Contrairement au débat, l'exposé vise à informer et expliquer un sujet, sans chercher la confrontation d'opinions."},
        {q:"Un exposé oral bien structuré comprend...", options:["uniquement une introduction","introduction, développement, conclusion","uniquement des exemples","uniquement une conclusion"], correct:1, exp:"Un exposé suit la structure classique : introduction, développement (en plusieurs parties), conclusion."},
        {q:"Pourquoi préparer des fiches avec des mots-clés plutôt qu'un texte entier ?", options:["C'est plus rapide à écrire","Cela permet de garder un contact visuel avec le public et un débit naturel","Ce n'est pas recommandé","Cela n'a aucune importance"], correct:1, exp:"Des fiches avec mots-clés évitent la lecture monotone et permettent un meilleur contact avec le public."},
        {q:"La conclusion d'un exposé oral sert à...", options:["poser de nouvelles questions sans lien avec le sujet","résumer l'essentiel et éventuellement ouvrir une perspective","répéter l'introduction mot pour mot","annoncer le plan"], correct:1, exp:"La conclusion résume les points essentiels abordés et peut ouvrir sur une question ou perspective plus large."},
        {q:"Quelle est la différence principale entre un débat et un exposé ?", options:["Il n'y a aucune différence","Le débat confronte des opinions, l'exposé informe sur un sujet","L'exposé est toujours écrit","Le débat ne se fait jamais à l'oral"], correct:1, exp:"Le débat oppose des points de vue contradictoires, tandis que l'exposé présente et explique un sujet de façon informative."}
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
      <p>Exemple de transformation : « She usually plays tennis. » (habitude, present simple) devient « She is playing tennis right now. » (action en cours, present continuous) — seul le contexte (now / usually) change, pas le sport. Liste utile de verbes d'état à ne jamais mettre au continuous : like, love, hate, want, need, know, believe, understand, own, belong. Exercice mental : « I ___ (not/understand) this exercise right now » → « I don't understand this exercise right now » (present simple, car « understand » est un verbe d'état, même si « right now » suggère le continuous).</p>`,
      quiz: [
        {q:"Choisir la bonne forme : She ___ to school every day.", options:["is going","go","goes","going"], correct:2, exp:"À la 3ème personne du singulier au Present Simple, on ajoute -es : she goes."},
        {q:"Choisir la bonne forme : Look! They ___ football now.", options:["play","plays","are playing","played"], correct:2, exp:"« Now » indique une action en cours, donc Present Continuous : are playing."},
        {q:"Quel mot indique le Present Simple ?", options:["now","usually","at the moment","right now"], correct:1, exp:"« Usually » est un indicateur d'habitude, typique du Present Simple."},
        {q:"« I am knowing the answer » est incorrect car :", options:["know est un verbe d'état","il manque un mot","le sujet est faux","la phrase est au passé"], correct:0, exp:"Les verbes d'état comme « know » ne s'utilisent normalement pas à la forme continue."},
        {q:"La structure du Present Continuous est :", options:["sujet + verbe + s","sujet + be + verbe-ing","sujet + have + verbe","sujet + did + verbe"], correct:1, exp:"Le Present Continuous se forme avec be (am/is/are) + verbe-ing."}
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
      <p>Quelques verbes irréguliers très fréquents à mémoriser en priorité : be → was/were, do → did, make → made, come → came, take → took, give → gave, write → wrote, say → said. Exemple de paragraphe complet au passé : « Yesterday, I woke up early, had breakfast, went to school and met my friends. We played football after class and then I did my homework. » Remarque importante : à la forme négative et interrogative, le verbe revient toujours à sa base (« did you go », pas « did you went »), car l'auxiliaire « did » porte déjà la marque du passé.</p>`,
      quiz: [
        {q:"La forme correcte de « go » au passé est :", options:["goed","gone","went","going"], correct:2, exp:"« Go » est un verbe irrégulier : sa forme au passé simple est « went »."},
        {q:"Forme négative correcte : She ___ go to the party.", options:["don't","doesn't","didn't","not"], correct:2, exp:"Au Past Simple, la négation se construit avec « didn't » + base verbale."},
        {q:"Quelle phrase est interrogative correcte ?", options:["Did you went there?","Did you go there?","You did go there?","Do you went there?"], correct:1, exp:"La structure correcte est : Did + sujet + base verbale (sans -ed ni forme conjuguée)."},
        {q:"« Play » au passé simple devient :", options:["played","plaied","playd","plays"], correct:0, exp:"« Play » est régulier : on ajoute -ed → played."},
        {q:"Quel mot indique le Past Simple ?", options:["now","every day","yesterday","always"], correct:2, exp:"« Yesterday » indique un moment précis dans le passé."}
      ]
    },
    {
      id: "a3",
      title: "Comparatives and Superlatives",
      content: `<p>Le <strong>comparatif</strong> compare deux éléments. Pour les adjectifs courts (1 syllabe), on ajoute -er : tall → taller. Pour les adjectifs longs, on utilise more + adjectif : beautiful → more beautiful. On utilise « than » après le comparatif.</p>
      <p>Le <strong>superlatif</strong> compare un élément à un groupe entier. Adjectifs courts : the + adjectif + est : the tallest. Adjectifs longs : the most + adjectif : the most beautiful.</p>
      <p><strong>Formes irrégulières</strong> à connaître : good → better → the best ; bad → worse → the worst.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Règles d'orthographe à connaître pour les adjectifs courts : si l'adjectif se termine par une voyelle + une consonne, on double la consonne avant -er/-est (big → bigger → the biggest) ; si l'adjectif se termine par -y précédé d'une consonne, le y devient i (happy → happier → the happiest). Exemple complet : « This exercise is more difficult than the last one, but it is not the most difficult exercise of the book. » Pour exprimer une égalité, on utilise « as...as » : « My sister is as tall as me. »</p>`,
      quiz: [
        {q:"« He is ___ than his brother » (tall) devient :", options:["more tall","taller","tallest","most tall"], correct:1, exp:"Adjectif court d'une syllabe : on ajoute -er → taller."},
        {q:"Le superlatif de « beautiful » est :", options:["beautifulest","the most beautiful","more beautiful","the beautifullest"], correct:1, exp:"Adjectif long : on utilise « the most » + adjectif."},
        {q:"La forme comparative de « good » est :", options:["gooder","more good","better","the best"], correct:2, exp:"« Good » est irrégulier : son comparatif est « better »."},
        {q:"Quel mot accompagne souvent le comparatif ?", options:["the","than","most","very"], correct:1, exp:"« Than » sert à introduire le second élément de la comparaison."},
        {q:"Le superlatif de « bad » est :", options:["the baddest","the worst","worse","more bad"], correct:1, exp:"« Bad » est irrégulier : son superlatif est « the worst »."}
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
      <p>D'autres modaux utiles à connaître : « may/might » pour exprimer une possibilité (It may rain this afternoon), et « have to » qui exprime aussi une obligation, mais souvent imposée de l'extérieur (par une règle, une personne), contrairement à « must » qui exprime plutôt une obligation que l'on ressent soi-même. Exemple de nuance : « I must finish this today » (je le décide moi-même) vs « I have to wear a uniform at school » (c'est une règle de l'école). Attention : « mustn't » exprime une interdiction (You mustn't smoke here), alors que « don't have to » exprime simplement une absence d'obligation (You don't have to come if you're tired).</p>`,
      quiz: [
        {q:"« You ___ study for the exam » (conseil) :", options:["can","must","should","could"], correct:2, exp:"« Should » exprime un conseil, une recommandation."},
        {q:"« I ___ swim very well » (capacité) :", options:["must","can","should","shall"], correct:1, exp:"« Can » exprime la capacité à faire quelque chose."},
        {q:"« You ___ wear a seatbelt » (obligation forte) :", options:["can","should","must","could"], correct:2, exp:"« Must » exprime une obligation forte, une règle stricte."},
        {q:"Quelle est la forme négative correcte de « must » ?", options:["not must","mustn't","don't must","musn't not"], correct:1, exp:"La forme négative de « must » est « mustn't »."},
        {q:"Après un modal, le verbe est :", options:["conjugué avec -s","à la base verbale","au participe passé","précédé de « to »"], correct:1, exp:"Les modaux sont toujours suivis de la base verbale, sans « to » ni conjugaison."}
      ]
    },
    {
      id: "a5",
      title: "Prepositions of Time and Place",
      content: `<p>Les <strong>prépositions de temps</strong> les plus courantes : <strong>in</strong> (mois, année, saison : in July, in 2024), <strong>on</strong> (jour, date : on Monday, on July 3rd), <strong>at</strong> (heure précise : at 6 o'clock, at night).</p>
      <p>Les <strong>prépositions de lieu</strong> : <strong>in</strong> (à l'intérieur d'un espace : in the classroom), <strong>on</strong> (sur une surface : on the table), <strong>at</strong> (à un endroit précis : at the door, at school).</p>
      <p>Astuce : penser à la taille de l'espace évoqué (grand = in, surface = on, point précis = at) aide à choisir la bonne préposition.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>D'autres prépositions utiles : « by » (avant une limite : by 6 pm), « during » (pendant toute une période : during the holidays), « for » (une durée : for two hours) et « since » (un point de départ : since Monday). Pour le mouvement, on utilise « to » (aller vers : go to school), « from » (venir de : come from Abidjan) et « into » (entrer dans : go into the classroom). Exemple complet : « I arrived at school at 7 am, and I stayed there until 4 pm, since I had extra classes during the afternoon. »</p>`,
      quiz: [
        {q:"« I was born ___ 2010 »", options:["in","on","at","by"], correct:0, exp:"On utilise « in » pour une année."},
        {q:"« The meeting is ___ Monday »", options:["in","on","at","for"], correct:1, exp:"On utilise « on » pour un jour précis."},
        {q:"« She wakes up ___ 6 o'clock »", options:["in","on","at","from"], correct:2, exp:"On utilise « at » pour une heure précise."},
        {q:"« The book is ___ the table »", options:["in","on","at","into"], correct:1, exp:"« On » s'utilise pour indiquer une position sur une surface."},
        {q:"« They live ___ Abidjan »", options:["at","on","in","by"], correct:2, exp:"« In » s'utilise pour une ville ou un espace large."}
      ]
    },
    {
      id: "a6",
      title: "Vocabulary: Daily Routine & Family",
      content: `<p>Le vocabulaire de la <strong>routine quotidienne</strong> inclut des expressions comme : wake up (se réveiller), get up (se lever), have breakfast (prendre le petit-déjeuner), go to school/work, do homework, go to bed (se coucher).</p>
      <p>Le vocabulaire de la <strong>famille</strong> inclut : parents, mother/father, brother/sister, grandmother/grandfather, uncle/aunt, cousin, son/daughter.</p>
      <p>Ces expressions s'utilisent souvent avec le Present Simple pour décrire des habitudes : « I usually wake up at 6 am and have breakfast with my family. »</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Vocabulaire complémentaire des tâches ménagères, souvent utilisé avec la routine quotidienne : do the dishes (faire la vaisselle), clean the house (nettoyer la maison), take out the trash (sortir les poubelles), help with the cooking (aider à cuisiner). Exemple de paragraphe combinant famille et routine : « Every morning, my mother wakes up first and prepares breakfast for the whole family. My father usually takes my younger brother to school before going to work, while my grandmother stays at home with my little sister. »</p>`,
      quiz: [
        {q:"« Se réveiller » se traduit par :", options:["get up","wake up","go to bed","have breakfast"], correct:1, exp:"« Wake up » signifie « se réveiller »."},
        {q:"« Le frère de mon père » est :", options:["my cousin","my uncle","my grandfather","my nephew"], correct:1, exp:"Le frère du père s'appelle « uncle » (oncle) en anglais."},
        {q:"« Do homework » signifie :", options:["faire ses devoirs","faire la cuisine","aller à l'école","se coucher"], correct:0, exp:"« Do homework » signifie « faire ses devoirs »."},
        {q:"« Grandmother » signifie :", options:["tante","grand-mère","cousine","sœur"], correct:1, exp:"« Grandmother » signifie « grand-mère »."},
        {q:"« Go to bed » signifie :", options:["se réveiller","se coucher","prendre le petit-déjeuner","aller à l'école"], correct:1, exp:"« Go to bed » signifie « se coucher »."}
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
      <p>Il existe une troisième façon d'exprimer le futur, très utilisée à l'oral : le present continuous pour un projet déjà organisé, avec une heure ou une date précise. Ex : « I am meeting my friends at 5 pm tomorrow. » (rendez-vous déjà fixé). Comparaison des trois futurs sur un même exemple : « It will probably rain » (prédiction, opinion) / « Look at those dark clouds, it's going to rain » (prédiction basée sur un signe visible) / « I am flying to Paris next Monday » (projet déjà organisé, billet déjà acheté).</p>`,
      quiz: [
        {q:"« I think it ___ rain tomorrow » (prédiction spontanée) :", options:["is going to","will","are","was"], correct:1, exp:"« Will » convient pour une prédiction ou une opinion spontanée introduite par « I think »."},
        {q:"« Look at those clouds! It ___ rain » (signe visible) :", options:["will","is going to","was","would"], correct:1, exp:"« Going to » s'utilise quand un signe visible annonce l'événement futur."},
        {q:"La forme négative de « will » est :", options:["willn't","won't","will not go","don't will"], correct:1, exp:"La contraction négative de « will not » est « won't »."},
        {q:"« I ___ help you with your homework » (décision spontanée, à l'instant) :", options:["am going to","will","was","did"], correct:1, exp:"Une décision prise à l'instant (offre spontanée) s'exprime avec « will »."},
        {q:"« She ___ visit her cousin next month » (projet déjà prévu) :", options:["will","is going to","would","was going to"], correct:1, exp:"Un projet déjà planifié se dit avec « be going to »."}
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
      <p>Il existe aussi le present perfect continuous (have/has been + verbe-ing), qui insiste sur la durée d'une action commencée dans le passé et qui continue encore maintenant : « I have been studying English for three years. » Différence entre « for » et « since » : « for » s'utilise avec une durée (for two years, for a long time), tandis que « since » s'utilise avec un point de départ précis (since 2022, since Monday). Exemple complet : « She has lived in Abidjan since she was born, and she has been working as a teacher for five years. »</p>`,
      quiz: [
        {q:"« I ___ never been to London » (expérience) :", options:["was","have","am","did"], correct:1, exp:"« Have been » (Present Perfect) exprime une expérience de vie sans date précise."},
        {q:"Quel mot accompagne souvent le Present Perfect ?", options:["yesterday","already","last year","ago"], correct:1, exp:"« Already » est un indicateur typique du Present Perfect."},
        {q:"« She has lost her keys » signifie que :", options:["elle a perdu ses clés hier","la conséquence se ressent maintenant","elle va perdre ses clés","elle perd toujours ses clés"], correct:1, exp:"Le Present Perfect insiste sur la conséquence présente d'une action passée."},
        {q:"Quelle phrase utilise le Past Simple (moment précis) ?", options:["I have visited Paris","I visited Paris last year","I have never visited Paris","Have you visited Paris?"], correct:1, exp:"« Last year » précise un moment du passé : on utilise donc le Past Simple."},
        {q:"Le Present Perfect se forme avec :", options:["did + base verbale","have/has + participe passé","will + base verbale","be + verbe-ing"], correct:1, exp:"Le Present Perfect utilise have/has suivi du participe passé du verbe."}
      ]
    },
    {
      id: "a9",
      title: "Countable/Uncountable Nouns & Quantifiers",
      content: `<p>Les <strong>noms dénombrables</strong> (countable) peuvent se compter et avoir un pluriel : an apple → apples. Les <strong>noms indénombrables</strong> (uncountable) ne se comptent pas directement et n'ont pas de pluriel : water, rice, information.</p>
      <p><strong>Quantifieurs</strong> : « some » s'utilise dans les phrases affirmatives (avec les deux types de noms) ; « any » s'utilise dans les négations et les questions ; « much » s'utilise avec les indénombrables ; « many » s'utilise avec les dénombrables ; « a lot of » convient aux deux.</p>
      <p>Ex : I have some apples. / I don't have any money. / How much water do you need? / How many books do you have?</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Autres quantifieurs utiles : « a few » (quelques, pour les dénombrables, quantité suffisante) et « few » (peu de, quantité insuffisante) ; « a little » (un peu, pour les indénombrables, quantité suffisante) et « little » (peu de, quantité insuffisante). Exemple de nuance : « I have a few friends here » (j'en ai quelques-uns, c'est positif) vs « I have few friends here » (j'en ai très peu, c'est plutôt négatif). Exemple complet : « There is a little water left in the bottle, but there are only a few apples in the basket. »</p>`,
      quiz: [
        {q:"« Water » est un nom :", options:["dénombrable","indénombrable","toujours au pluriel","un adjectif"], correct:1, exp:"« Water » ne se compte pas directement : c'est un nom indénombrable."},
        {q:"« How ___ books do you have? »", options:["much","many","some","any"], correct:1, exp:"« Many » s'utilise avec les noms dénombrables au pluriel, comme « books »."},
        {q:"« How ___ money do you need? »", options:["many","much","some","a"], correct:1, exp:"« Much » s'utilise avec les noms indénombrables, comme « money »."},
        {q:"« I don't have ___ apples » (phrase négative) :", options:["some","any","much","a"], correct:1, exp:"« Any » s'utilise dans les phrases négatives."},
        {q:"« I have ___ apples » (phrase affirmative) :", options:["any","some","much","no any"], correct:1, exp:"« Some » s'utilise dans les phrases affirmatives."}
      ]
    },
    {
      id: "a10",
      title: "Question Words",
      content: `<p>Les <strong>mots interrogatifs</strong> (wh-questions) permettent de poser des questions précises : <strong>who</strong> (qui), <strong>what</strong> (quoi/que), <strong>where</strong> (où), <strong>when</strong> (quand), <strong>why</strong> (pourquoi), <strong>how</strong> (comment), <strong>which</strong> (lequel), <strong>whose</strong> (à qui).</p>
      <p>Structure générale : mot interrogatif + auxiliaire (do/does/did/is/are/have...) + sujet + verbe. Ex : Where do you live? What is she doing?</p>
      <p>« How » se combine souvent avec un adjectif pour préciser la question : how old (âge), how much/many (quantité), how far (distance), how long (durée).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de mini-dialogue utilisant plusieurs mots interrogatifs : « — Where do you live? — I live in Bouaké. — How long have you lived there? — I have lived there for ten years. — Why did you move there? — Because of my father's job. » Astuce pour ne pas se tromper : après le mot interrogatif, on utilise un auxiliaire (do/does/did/is/are/have) SAUF quand le mot interrogatif est lui-même le sujet de la phrase — dans ce cas, pas d'auxiliaire ni d'inversion : « Who broke the window? » (et non « Who did break the window? »).</p>`,
      quiz: [
        {q:"« ___ is your name? » (identité)", options:["Where","What","When","Why"], correct:1, exp:"« What » s'utilise pour demander un nom ou une information de ce type."},
        {q:"« ___ do you live? » (lieu)", options:["Where","When","Why","Who"], correct:0, exp:"« Where » interroge sur un lieu."},
        {q:"« ___ are you late? » (raison)", options:["How","Why","What","Which"], correct:1, exp:"« Why » interroge sur la raison ou la cause."},
        {q:"« ___ old are you? » (âge)", options:["What","How","Where","Who"], correct:1, exp:"« How old » est l'expression standard pour demander l'âge."},
        {q:"« ___ book is yours? » (choix parmi plusieurs)", options:["What","Which","Who","Whose"], correct:1, exp:"« Which » s'utilise pour un choix parmi un ensemble limité d'éléments."}
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
      <p>Le passif peut s'utiliser à différents temps, en changeant simplement le temps de l'auxiliaire « be » : présent — « The letter is written » ; passé — « The letter was written » ; futur — « The letter will be written » ; present perfect — « The letter has been written ». On peut aussi mettre un modal au passif : « This exercise must be finished before tomorrow » (must be + participe passé). Exemple de transformation complète : « People speak English all over the world » (actif) → « English is spoken all over the world » (passif, plus naturel car on ne sait pas exactement qui parle).</p>`,
      quiz: [
        {q:"La voix passive se forme avec :", options:["do + participe passé","be + participe passé","have + base verbale","will + participe passé"], correct:1, exp:"La structure de base de la voix passive est be (conjugué) + participe passé."},
        {q:"« The exercises are corrected by the teacher » est à la voix :", options:["active","passive","impérative","conditionnelle"], correct:1, exp:"Le sujet « the exercises » subit l'action : c'est la voix passive."},
        {q:"Transformer « The cat eats the fish » au passif donne :", options:["The fish eats the cat","The fish is eaten by the cat","The fish was eating the cat","The cat is eaten by the fish"], correct:1, exp:"Le COD « the fish » devient sujet, et « be + participe passé » est utilisé : is eaten."},
        {q:"On utilise la voix passive surtout quand :", options:["l'action est plus importante que l'auteur","le sujet est toujours connu","il n'y a jamais d'auteur","la phrase est au futur uniquement"], correct:0, exp:"La voix passive met l'accent sur l'action ou son résultat plutôt que sur qui la fait."},
        {q:"Dans une phrase passive, « by » introduit :", options:["le lieu de l'action","l'agent (celui qui fait l'action)","le moment de l'action","le résultat de l'action"], correct:1, exp:"« By » introduit l'agent, c'est-à-dire celui qui réalise réellement l'action."}
      ]
    },
    {
      id: "a12",
      title: "Vocabulary: Food & Shopping",
      content: `<p>Vocabulaire utile pour parler de <strong>nourriture</strong> : fruit, vegetables, meat, fish, bread, rice, milk, cheese, meal (repas), breakfast/lunch/dinner.</p>
      <p>Vocabulaire pour le <strong>shopping</strong> : shop/store, market, price, expensive/cheap, to buy, to sell, cash, receipt, shopping list.</p>
      <p>Expressions utiles : « How much does it cost? » (Combien ça coûte ?), « Can I have...? » (Puis-je avoir... ?), « I would like... » (Je voudrais...).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de petit dialogue au marché ou dans un magasin : « — Good morning, can I help you? — Yes, I would like some rice and two kilos of tomatoes, please. — Here you are. That's 2500 francs. — Can I pay by cash? — Of course. » Rappel utile : certains aliments sont indénombrables au singulier (some rice, some bread, some meat), alors que d'autres se comptent normalement au pluriel (two apples, three eggs, some tomatoes) — pense à utiliser « a piece of » ou « a loaf of » pour compter un indénombrable : a piece of bread, a loaf of bread.</p>`,
      quiz: [
        {q:"« Combien ça coûte ? » se traduit par :", options:["How much does it cost?","How many is it?","What is the price of you?","How is it cost?"], correct:0, exp:"« How much does it cost? » est l'expression correcte pour demander le prix."},
        {q:"« Cheap » signifie :", options:["cher","bon marché","délicieux","frais"], correct:1, exp:"« Cheap » signifie « bon marché », « pas cher »."},
        {q:"« Vegetables » signifie :", options:["fruits","légumes","viandes","boissons"], correct:1, exp:"« Vegetables » signifie « légumes »."},
        {q:"« I would like... » s'utilise pour :", options:["donner un ordre","exprimer poliment un souhait","poser une question sur le prix","refuser un achat"], correct:1, exp:"« I would like » est une formule polie pour exprimer ce que l'on souhaite (souvent acheter ou commander)."},
        {q:"« Receipt » signifie :", options:["la liste de courses","le ticket de caisse","le prix","le magasin"], correct:1, exp:"« Receipt » désigne le ticket de caisse remis après un achat."}
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
  lessons: [
    {
      id: "p1",
      title: "États de la matière",
      content: `<p>La matière existe sous trois <strong>états physiques</strong> principaux : l'état <strong>solide</strong> (forme propre, volume propre), l'état <strong>liquide</strong> (pas de forme propre, volume propre) et l'état <strong>gazeux</strong> (ni forme propre, ni volume propre : il occupe tout l'espace disponible).</p>
      <p>Au niveau microscopique, ces trois états se distinguent par l'agitation et l'espacement des molécules : très proches et peu mobiles dans un solide, proches mais mobiles dans un liquide, très espacées et libres dans un gaz.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Cette agitation croissante des molécules (solide → liquide → gaz) explique pourquoi un gaz occupe tout le volume de son récipient, alors qu'un solide ou un liquide gardent un volume propre.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : l'eau existe dans les trois états selon la température — glace (solide) en dessous de 0°C, eau liquide entre 0°C et 100°C, vapeur d'eau (gazeux) au-dessus de 100°C (à pression atmosphérique normale). C'est le même type de molécules (H₂O) dans les trois cas ; seule leur agitation et leur organisation changent.</p>`,
      quiz: [
        {q:"Quel état de la matière n'a ni forme propre ni volume propre ?", options:["Solide","Liquide","Gazeux","Aucun"], correct:2, exp:"L'état gazeux n'a ni forme propre ni volume propre : il occupe tout l'espace disponible."},
        {q:"Dans quel état les molécules sont-elles les plus agitées ?", options:["Solide","Liquide","Gazeux","Elles le sont autant dans les trois états"], correct:2, exp:"Les molécules sont les plus agitées et les plus espacées à l'état gazeux."},
        {q:"Un liquide a...", options:["une forme propre et un volume propre","pas de forme propre mais un volume propre","ni forme ni volume propres","une forme propre mais pas de volume propre"], correct:1, exp:"Un liquide épouse la forme de son récipient (pas de forme propre) mais garde un volume constant."},
        {q:"L'eau à −10°C est à l'état...", options:["Liquide","Gazeux","Solide (glace)","Aucun de ces états"], correct:2, exp:"En dessous de 0°C, l'eau est à l'état solide (glace)."},
        {q:"Un solide a...", options:["une forme propre et un volume propre","pas de forme propre","un volume variable","aucune de ces réponses"], correct:0, exp:"Un solide garde sa forme et son volume, quel que soit son récipient."}
      ]
    },
    {
      id: "p2",
      title: "Masse d'un corps",
      content: `<p>La <strong>masse</strong> d'un corps mesure la quantité de matière qu'il contient. Elle s'exprime en <strong>kilogramme (kg)</strong>, l'unité légale, avec ses multiples et sous-multiples : tonne (t), gramme (g), milligramme (mg).</p>
      <p>La masse se mesure avec une <strong>balance</strong>. Contrairement au poids, la masse d'un corps ne change pas selon l'endroit où il se trouve (elle reste la même sur Terre, sur la Lune, dans l'espace).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Conversions utiles : 1 t = 1000 kg, 1 kg = 1000 g, 1 g = 1000 mg. Pour convertir, on multiplie ou divise par 1000 selon le sens (grande unité vers petite : on multiplie ; petite vers grande : on divise).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de conversion : convertis 2,5 kg en grammes. Comme 1 kg = 1000 g, on multiplie : 2,5 × 1000 = 2500 g. Autre exemple : convertis 350 g en kg. On divise par 1000 : 350 ÷ 1000 = 0,350 kg. La masse d'un objet reste identique même transportée sur la Lune, alors que son poids (la force exercée par la gravité) y serait environ 6 fois plus faible que sur Terre.</p>`,
      quiz: [
        {q:"L'unité légale de la masse est...", options:["le gramme","le kilogramme","la tonne","le newton"], correct:1, exp:"Le kilogramme (kg) est l'unité légale (unité du Système International) de la masse."},
        {q:"Convertis 3,2 kg en grammes.", options:["32 g","320 g","3200 g","0,32 g"], correct:2, exp:"3,2 × 1000 = 3200 g."},
        {q:"La masse d'un objet change-t-elle selon l'endroit (Terre, Lune) ?", options:["Oui, fortement","Non, elle reste la même","Oui, mais très légèrement","Cela dépend de l'objet"], correct:1, exp:"La masse est une propriété intrinsèque de la matière, indépendante du lieu."},
        {q:"Avec quel instrument mesure-t-on une masse ?", options:["Un thermomètre","Une balance","Un dynamomètre","Un voltmètre"], correct:1, exp:"La balance est l'instrument utilisé pour mesurer une masse."},
        {q:"1 tonne équivaut à...", options:["100 kg","1000 kg","10 000 kg","10 kg"], correct:1, exp:"1 t = 1000 kg."}
      ]
    },
    {
      id: "p3",
      title: "Volume d'un corps",
      content: `<p>Le <strong>volume</strong> d'un corps mesure l'espace qu'il occupe. L'unité légale est le <strong>mètre cube (m³)</strong>, mais on utilise très souvent le <strong>litre (L)</strong> pour les liquides. Rappel important : 1 dm³ = 1 L = 1000 cm³, et 1 m³ = 1000 L.</p>
      <p>Pour un solide de forme géométrique simple (cube, pavé droit, cylindre...), on calcule le volume avec une formule. Pour un solide de forme irrégulière, on peut mesurer son volume par <strong>déplacement d'eau</strong> : on plonge l'objet dans un récipient gradué, et la différence de niveau d'eau donne son volume.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Astuce pratique pour convertir un volume : retiens que 1 dm³ = 1 litre = 1000 cm³, et 1 m³ = 1000 litres. Cela permet de vérifier si un résultat est réaliste : un réservoir de 2 m³ contient donc 2000 litres d'eau.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de mesure par déplacement d'eau : un objet est plongé dans un cylindre gradué contenant initialement 150 mL d'eau. Après avoir plongé l'objet, le niveau monte à 210 mL. Le volume de l'objet est donc 210 − 150 = 60 mL, soit 60 cm³. Cette méthode fonctionne pour n'importe quel solide, même de forme irrégulière, tant qu'il ne flotte pas et n'absorbe pas l'eau.</p>`,
      quiz: [
        {q:"L'unité légale du volume est...", options:["le litre","le mètre cube","le centimètre","le gramme"], correct:1, exp:"Le mètre cube (m³) est l'unité légale du volume, même si le litre est très utilisé au quotidien."},
        {q:"1 litre équivaut à...", options:["100 cm³","1000 cm³","10 cm³","1 cm³"], correct:1, exp:"1 L = 1 dm³ = 1000 cm³."},
        {q:"Comment mesure-t-on le volume d'un objet de forme irrégulière ?", options:["Avec une formule mathématique","Par déplacement d'eau dans un récipient gradué","Avec une balance","On ne peut pas le mesurer"], correct:1, exp:"On utilise la méthode du déplacement d'eau (vases communicants) pour un solide de forme irrégulière."},
        {q:"Un objet plongé dans l'eau fait monter le niveau de 150 mL à 195 mL. Quel est son volume ?", options:["195 cm³","150 cm³","45 cm³","345 cm³"], correct:2, exp:"195 − 150 = 45 mL = 45 cm³."},
        {q:"1 m³ équivaut à combien de litres ?", options:["10 L","100 L","1000 L","10 000 L"], correct:2, exp:"1 m³ = 1000 L."}
      ]
    },
    {
      id: "p4",
      title: "La masse volumique et la densité d'un corps",
      content: `<p>La <strong>masse volumique</strong> d'un corps homogène est le quotient de sa masse par son volume : ρ = m / V. Elle s'exprime en kg/m³ (unité légale) ou en g/cm³ (unité souvent utilisée en pratique). La masse volumique de l'eau est 1000 kg/m³, soit 1 g/cm³.</p>
      <p>La <strong>densité</strong> d'un corps est le rapport entre sa masse volumique et celle de l'eau (pour un solide ou un liquide) : elle n'a pas d'unité (c'est un nombre sans dimension).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour savoir si un objet flotte sur l'eau, compare sa masse volumique à celle de l'eau : si elle est inférieure, l'objet flotte ; si elle est supérieure, il coule. C'est pourquoi le bois (moins dense) flotte alors que le fer (plus dense) coule.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de calcul : un objet a une masse de 270 g et un volume de 100 cm³. Sa masse volumique est ρ = m/V = 270/100 = 2,7 g/cm³ (c'est justement la masse volumique de l'aluminium). Sa densité est d = 2,7/1 = 2,7 (car la masse volumique de l'eau est 1 g/cm³). Comme cette densité est supérieure à 1, cet objet coule dans l'eau.</p>
      <h3>📌 Point du programme à ne pas manquer : masse volumique et densité d'un gaz</h3>
      <p>La masse volumique d'un gaz se calcule avec la même relation ρ = m/V, mais elle dépend fortement de la pression et de la température (contrairement à un solide ou un liquide). Dans les conditions habituelles, l'air a une masse volumique d'environ 1,29 kg/m³. La <strong>densité d'un gaz</strong> ne se compare PAS à l'eau mais à l'AIR : d = ρ_gaz / ρ_air. Exemple : le dioxygène a une masse volumique d'environ 1,3 g/L, donc sa densité par rapport à l'air est d = 1,3/1,29 ≈ 1,01 (le dioxygène est donc à peine plus dense que l'air).</p>`,
      quiz: [
        {q:"La formule de la masse volumique est...", options:["ρ = m × V","ρ = m / V","ρ = V / m","ρ = m + V"], correct:1, exp:"La masse volumique est le quotient de la masse par le volume : ρ = m/V."},
        {q:"La masse volumique de l'eau est...", options:["100 kg/m³","1000 kg/m³","10 000 kg/m³","1 kg/m³"], correct:1, exp:"La masse volumique de l'eau est 1000 kg/m³, soit 1 g/cm³."},
        {q:"Un corps de masse 500 g et de volume 250 cm³ a pour masse volumique...", options:["2 g/cm³","0,5 g/cm³","125 g/cm³","750 g/cm³"], correct:0, exp:"ρ = 500/250 = 2 g/cm³."},
        {q:"La densité d'un corps est...", options:["sa masse volumique en kg/m³","le rapport entre sa masse volumique et celle de l'eau","son volume divisé par sa masse","toujours égale à 1"], correct:1, exp:"La densité est un rapport sans unité entre la masse volumique du corps et celle de l'eau."},
        {q:"Un objet de densité 0,8 dans l'eau va...", options:["couler","flotter","rester exactement au milieu","exploser"], correct:1, exp:"Une densité inférieure à 1 (masse volumique inférieure à celle de l'eau) signifie que l'objet flotte."},
        {q:"La densité d'un gaz se compare à...", options:["l'eau","l'air","le mercure","rien, elle n'existe pas pour les gaz"], correct:1, exp:"Contrairement à un solide ou un liquide (comparé à l'eau), la densité d'un gaz se compare à l'air."}
      ]
    },
    {
      id: "p5",
      title: "Thermomètre",
      content: `<p>Le <strong>thermomètre</strong> est l'instrument qui permet de mesurer la <strong>température</strong> d'un corps. L'unité légale de température est le <strong>degré Celsius (°C)</strong>, avec deux points de repère importants : 0°C (température de fusion de la glace) et 100°C (température d'ébullition de l'eau, à pression atmosphérique normale).</p>
      <p>Il existe plusieurs types de thermomètres : à liquide (mercure ou alcool coloré qui se dilate avec la chaleur), électronique (à sonde), ou infrarouge (sans contact).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le principe physique d'un thermomètre à liquide repose sur la <strong>dilatation thermique</strong> : quand la température augmente, le liquide à l'intérieur du tube se dilate (prend plus de volume) et monte dans le tube fin, ce qui permet de lire la température sur une échelle graduée.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple d'utilisation : pour mesurer la température du corps humain, on utilise un thermomètre médical, généralement placé sous l'aisselle, dans la bouche ou à l'oreille. La température normale du corps humain est d'environ 37°C ; au-delà de 38°C, on parle de fièvre. Pour lire correctement un thermomètre, on positionne son œil bien en face de l'échelle graduée (pour éviter une erreur de lecture due à l'angle de vue, appelée erreur de parallaxe).</p>`,
      quiz: [
        {q:"Quelle est l'unité légale de température ?", options:["Le kelvin","Le degré Celsius","Le degré Fahrenheit","Le newton"], correct:1, exp:"Le degré Celsius (°C) est l'unité couramment utilisée pour la température."},
        {q:"À quelle température la glace fond-elle (pression normale) ?", options:["0°C","100°C","−10°C","37°C"], correct:0, exp:"La glace fond à 0°C sous pression atmosphérique normale."},
        {q:"À quelle température l'eau bout-elle (pression normale) ?", options:["0°C","50°C","100°C","150°C"], correct:2, exp:"L'eau bout à 100°C sous pression atmosphérique normale."},
        {q:"Le principe d'un thermomètre à liquide repose sur...", options:["la conductivité électrique","la dilatation thermique du liquide","la réflexion de la lumière","le magnétisme"], correct:1, exp:"Un thermomètre à liquide utilise la dilatation (augmentation de volume) du liquide quand la température monte."},
        {q:"La température normale du corps humain est d'environ...", options:["30°C","37°C","42°C","25°C"], correct:1, exp:"La température corporelle normale est d'environ 37°C."}
      ]
    },
    {
      id: "p6",
      title: "Propagation de la chaleur",
      content: `<p>La chaleur se propage de trois façons : la <strong>conduction</strong> (transfert de proche en proche à travers la matière, sans déplacement de matière — ex : une cuillère qui chauffe dans une casserole), la <strong>convection</strong> (transfert par déplacement de matière dans un fluide, liquide ou gaz — ex : l'air chaud qui monte), et le <strong>rayonnement</strong> (transfert sans support matériel, même dans le vide — ex : la chaleur du Soleil).</p>
      <p>La chaleur se propage toujours du corps <strong>le plus chaud</strong> vers le corps <strong>le plus froid</strong>, jusqu'à ce que les deux corps atteignent la même température (équilibre thermique).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Les bons conducteurs de chaleur sont généralement les métaux (fer, cuivre, aluminium), tandis que le bois, le plastique, l'air ou la laine sont de bons isolants — c'est pourquoi les poignées de casseroles sont souvent en plastique ou en bois : elles limitent la conduction de la chaleur vers la main.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple combinant les trois modes : quand on fait chauffer de l'eau dans une casserole métallique sur une cuisinière, la chaleur passe d'abord par conduction à travers le métal de la casserole, puis se propage dans l'eau par convection (les couches d'eau chaude, moins denses, montent, et les couches froides descendent, créant un mouvement circulaire), tandis que la plaque chauffante elle-même émet aussi un peu de rayonnement infrarouge perceptible à proximité.</p>`,
      quiz: [
        {q:"Le transfert de chaleur sans déplacement de matière, de proche en proche, s'appelle...", options:["la convection","la conduction","le rayonnement","l'évaporation"], correct:1, exp:"La conduction est un transfert de chaleur de proche en proche à travers la matière, sans déplacement de matière."},
        {q:"La chaleur du Soleil nous parvient par...", options:["conduction","convection","rayonnement","aucun de ces modes"], correct:2, exp:"Le rayonnement peut se propager même dans le vide, c'est ainsi que la chaleur du Soleil traverse l'espace."},
        {q:"La chaleur se propage toujours...", options:["du corps froid vers le corps chaud","du corps chaud vers le corps froid","de façon aléatoire","uniquement vers le haut"], correct:1, exp:"La chaleur se propage naturellement du corps le plus chaud vers le corps le plus froid."},
        {q:"L'air chaud qui monte dans une pièce est un exemple de...", options:["conduction","convection","rayonnement","aucun de ces modes"], correct:1, exp:"La convection est un transfert de chaleur par déplacement de matière (ici, l'air)."},
        {q:"Un bon isolant thermique est...", options:["le cuivre","le fer","la laine","l'aluminium"], correct:2, exp:"La laine est un bon isolant thermique, contrairement aux métaux qui sont de bons conducteurs."}
      ]
    },
    {
      id: "p7",
      title: "Les changements d'état physique",
      content: `<p>La matière peut passer d'un état physique à un autre : <strong>fusion</strong> (solide → liquide), <strong>solidification</strong> (liquide → solide), <strong>vaporisation</strong> (liquide → gaz), <strong>liquéfaction</strong> (gaz → liquide), <strong>sublimation</strong> (solide → gaz directement) et <strong>condensation solide</strong> (gaz → solide directement).</p>
      <p>Pendant un changement d'état, la <strong>température reste constante</strong> tant que la transformation n'est pas terminée, même si on continue de chauffer ou de refroidir.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Exemple de sublimation : la neige carbonique (dioxyde de carbone solide, ou « glace sèche ») passe directement de l'état solide à l'état gazeux à température ambiante, sans étape liquide visible, ce qui produit un effet de « fumée » froide très utilisé pour les effets spéciaux.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple avec un graphique de température : si on chauffe un glaçon initialement à −10°C, sa température monte d'abord régulièrement jusqu'à 0°C (état solide qui se réchauffe), puis reste bloquée à 0°C pendant toute la durée de la fusion (le glaçon fond progressivement mais la température ne bouge pas), puis remonte à nouveau une fois tout le solide fondu (l'eau liquide se réchauffe), jusqu'à atteindre 100°C où elle reste bloquée pendant la vaporisation.</p>`,
      quiz: [
        {q:"Le passage de l'état liquide à l'état gazeux s'appelle...", options:["fusion","vaporisation","solidification","sublimation"], correct:1, exp:"La vaporisation est le passage de l'état liquide à l'état gazeux."},
        {q:"Le passage direct de l'état solide à l'état gazeux s'appelle...", options:["fusion","liquéfaction","sublimation","condensation"], correct:2, exp:"La sublimation est le passage direct du solide au gaz, sans étape liquide."},
        {q:"Pendant un changement d'état, la température...", options:["augmente rapidement","diminue rapidement","reste constante","varie de façon aléatoire"], correct:2, exp:"La température reste constante pendant toute la durée du changement d'état."},
        {q:"Le passage de l'état gazeux à l'état liquide s'appelle...", options:["vaporisation","liquéfaction","fusion","sublimation"], correct:1, exp:"La liquéfaction est le passage de l'état gazeux à l'état liquide."},
        {q:"Comment s'appelle le passage de l'état liquide à l'état solide ?", options:["Fusion","Solidification","Vaporisation","Sublimation"], correct:1, exp:"La solidification est le passage de l'état liquide à l'état solide."}
      ]
    },
    {
      id: "p8",
      title: "Les mélanges avec l'eau",
      content: `<p>Quand on mélange une substance avec de l'eau, on obtient soit un <strong>mélange homogène</strong> (on ne distingue plus les constituants à l'œil nu, comme l'eau salée ou l'eau sucrée), soit un <strong>mélange hétérogène</strong> (on distingue plusieurs constituants, comme l'eau et l'huile, ou l'eau boueuse).</p>
      <p>Dans un mélange homogène, le <strong>soluté</strong> est la substance dissoute et le <strong>solvant</strong> est le liquide qui dissout (ici, l'eau). Une solution est dite <strong>saturée</strong> quand on ne peut plus rien dissoudre de plus : l'excès de soluté reste visible, non dissous, au fond du récipient.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour séparer les constituants d'un mélange, on utilise différentes techniques : la <strong>filtration</strong> (pour séparer un solide non dissous d'un liquide, à l'aide d'un filtre), la <strong>décantation</strong> (laisser reposer pour que les phases se séparent naturellement par différence de densité).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : on ajoute progressivement du sucre dans un verre d'eau en remuant. Au début, tout le sucre se dissout (mélange homogène, on ne le voit plus). Mais à partir d'une certaine quantité, le sucre supplémentaire ne se dissout plus et reste visible au fond du verre : la solution est devenue saturée. Si on avait un mélange d'eau et de sable, on pourrait les séparer par filtration (le sable, non dissous, resterait sur le filtre pendant que l'eau passerait à travers).</p>
      <h3>📌 Point du programme à ne pas manquer : corps pur et critères de pureté</h3>
      <p>Un <strong>corps pur</strong> est constitué d'une seule espèce chimique (contrairement à un mélange, qui en contient plusieurs). On vérifie la pureté d'un corps grâce à des <strong>critères physiques</strong> : un corps pur a une <strong>température de fusion</strong> et une <strong>température d'ébullition</strong> fixes et constantes (elles ne varient pas pendant le changement d'état), alors qu'un mélange fond ou bout sur une plage de températures. Exemple : l'eau pure bout toujours exactement à 100°C (à pression atmosphérique normale) ; de l'eau salée (un mélange) bout à une température légèrement supérieure et moins précise.</p>`,
      quiz: [
        {q:"Un mélange homogène est un mélange où...", options:["on distingue plusieurs constituants","on ne distingue aucun constituant à l'œil nu","il y a toujours un solide","il n'y a jamais d'eau"], correct:1, exp:"Dans un mélange homogène, les constituants sont indiscernables à l'œil nu."},
        {q:"Dans une solution d'eau salée, le soluté est...", options:["l'eau","le sel","le récipient","la température"], correct:1, exp:"Le soluté est la substance dissoute, ici le sel ; le solvant est l'eau."},
        {q:"Une solution saturée est une solution où...", options:["on peut encore dissoudre indéfiniment","on ne peut plus rien dissoudre de plus","il n'y a pas de soluté","le solvant a disparu"], correct:1, exp:"Une solution saturée ne peut plus dissoudre de soluté supplémentaire ; l'excès reste visible."},
        {q:"Quelle technique sépare un solide non dissous d'un liquide ?", options:["La filtration","La dilution","L'évaporation instantanée","La combustion"], correct:0, exp:"La filtration permet de séparer un solide non dissous du liquide à l'aide d'un filtre."},
        {q:"L'eau et l'huile forment un mélange...", options:["homogène","hétérogène","saturé uniquement","gazeux"], correct:1, exp:"L'eau et l'huile ne se mélangent pas : on distingue les deux phases, c'est un mélange hétérogène."},
        {q:"Un corps pur a une température d'ébullition...", options:["variable selon la quantité","fixe et constante","toujours égale à 0°C","impossible à mesurer"], correct:1, exp:"Un corps pur bout à une température fixe et constante, contrairement à un mélange."}
      ]
    },
    {
      id: "p9",
      title: "Circuit électrique",
      content: `<p>Un <strong>circuit électrique</strong> est un ensemble de composants (générateur, récepteurs, fils, interrupteur) reliés entre eux, permettant au courant électrique de circuler. Dans un <strong>circuit en série</strong>, les composants sont branchés les uns à la suite des autres : si on en retire un, tout le circuit s'arrête. Dans un <strong>circuit en dérivation</strong> (parallèle), chaque composant est branché sur une boucle indépendante : si on en retire un, les autres continuent de fonctionner.</p>
      <p>Le <strong>sens conventionnel du courant</strong> va de la borne + vers la borne − à l'extérieur du générateur.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On représente un circuit électrique par un <strong>schéma normalisé</strong>, utilisant des symboles précis pour chaque composant (générateur, lampe, interrupteur, fil de connexion...), ce qui permet à n'importe qui de comprendre le montage sans ambiguïté, quel que soit le pays.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : dans un circuit en série avec une pile et deux lampes, si une lampe grille (son filament casse), le circuit est coupé et la seconde lampe s'éteint aussi, car le courant ne peut plus circuler nulle part dans la boucle. Dans un circuit en dérivation avec les deux mêmes lampes, si une lampe grille, l'autre continue de briller normalement, car elle est sur sa propre boucle indépendante reliée directement au générateur.</p>
      <h3>📌 Point du programme à ne pas manquer : conducteurs et isolants</h3>
      <p>Un matériau <strong>conducteur</strong> laisse circuler le courant électrique (métaux comme le cuivre, le fer, l'aluminium ; l'eau salée ou le corps humain mouillé sont aussi conducteurs). Un matériau <strong>isolant</strong> ne laisse pas circuler le courant (plastique, verre, bois sec, air, caoutchouc). C'est pour cela que les fils électriques ont une âme en métal conducteur, entourée d'une gaine en plastique isolant qui protège l'utilisateur.</p>`,
      quiz: [
        {q:"Dans un circuit en série, si on retire un composant...", options:["rien ne change","tout le circuit s'arrête","seul ce composant s'arrête","le courant double"], correct:1, exp:"En série, tous les composants dépendent les uns des autres : en retirer un coupe tout le circuit."},
        {q:"Dans un circuit en dérivation, si on retire un composant...", options:["tout s'arrête","les autres continuent de fonctionner","le circuit explose","rien n'est branché"], correct:1, exp:"En dérivation, chaque branche est indépendante : les autres composants continuent de fonctionner."},
        {q:"Le sens conventionnel du courant électrique va...", options:["de − vers + à l'extérieur du générateur","de + vers − à l'extérieur du générateur","dans les deux sens en même temps","il n'y a pas de sens conventionnel"], correct:1, exp:"Par convention, le courant va de la borne + vers la borne − à l'extérieur du générateur."},
        {q:"Un schéma électrique normalisé sert à...", options:["décorer un circuit","représenter un circuit avec des symboles universels","remplacer le générateur","mesurer une tension"], correct:1, exp:"Un schéma normalisé utilise des symboles standards compréhensibles par tous, quel que soit le pays."},
        {q:"Un circuit électrique a besoin au minimum de...", options:["un générateur et un récepteur reliés par des fils","seulement un générateur","seulement des fils","rien de particulier"], correct:0, exp:"Un circuit fonctionnel nécessite au minimum un générateur et un récepteur reliés en boucle fermée."},
        {q:"Lequel de ces matériaux est un isolant ?", options:["Le cuivre","Le fer","Le plastique","L'aluminium"], correct:2, exp:"Le plastique est un isolant électrique ; les métaux cités sont tous conducteurs."}
      ]
    },
    {
      id: "p10",
      title: "Tension électrique",
      content: `<p>La <strong>tension électrique</strong> (ou différence de potentiel) entre deux points d'un circuit se mesure avec un <strong>voltmètre</strong>, toujours branché <strong>EN DÉRIVATION</strong> (en parallèle) aux bornes du composant à mesurer, jamais en série. Elle s'exprime en <strong>volts (V)</strong>.</p>
      <p><strong>Dans un circuit en série</strong>, les tensions aux bornes des différents récepteurs s'additionnent pour donner la tension totale du générateur (loi d'additivité des tensions).</p>
      <p><strong>Dans un circuit en dérivation</strong>, tous les récepteurs reçoivent la même tension que le générateur.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Erreur fréquente à éviter : brancher un voltmètre EN SÉRIE dans le circuit empêcherait quasiment tout le courant de passer (sa résistance interne est très élevée), ce qui fausserait complètement la mesure et le fonctionnement du circuit.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : un générateur de 9 V alimente deux lampes identiques en série. D'après la loi d'additivité, chaque lampe reçoit environ 9/2 = 4,5 V. Si on branche les deux mêmes lampes en dérivation sur le même générateur de 9 V, chaque lampe reçoit directement 9 V (la tension du générateur), ce qui explique pourquoi les lampes brillent plus fort en dérivation qu'en série.</p>
      <h3>📌 Point du programme à ne pas manquer : adaptation, surtension et sous-tension</h3>
      <p>Chaque récepteur (lampe, moteur...) est conçu pour fonctionner sous une <strong>tension nominale</strong> précise, indiquée par le fabricant. On dit qu'un récepteur est bien <strong>adapté</strong> au générateur quand la tension appliquée est proche de sa tension nominale. En cas de <strong>surtension</strong> (tension appliquée supérieure à la tension nominale), le récepteur peut être endommagé ou détruit (ex : une lampe de 6 V branchée sur 12 V grille immédiatement). En cas de <strong>sous-tension</strong> (tension inférieure à la tension nominale), le récepteur fonctionne mal (ex : une lampe de 12 V branchée sur 6 V brille très faiblement).</p>`,
      quiz: [
        {q:"Un voltmètre se branche toujours...", options:["en série","en dérivation, aux bornes du composant","n'importe où dans le circuit","jamais dans un circuit fermé"], correct:1, exp:"Le voltmètre se branche en dérivation (en parallèle) aux bornes du composant à mesurer."},
        {q:"Dans un circuit en série, les tensions des récepteurs...", options:["s'additionnent pour donner la tension totale","sont toutes égales à la tension totale","se soustraient","n'ont aucun lien entre elles"], correct:0, exp:"En série, la somme des tensions des récepteurs est égale à la tension du générateur."},
        {q:"Un générateur de 12 V alimente en dérivation deux lampes identiques. Quelle tension reçoit chaque lampe ?", options:["6 V","12 V","24 V","0 V"], correct:1, exp:"En dérivation, chaque branche reçoit directement la tension du générateur : 12 V."},
        {q:"Que se passe-t-il si on branche un voltmètre en série dans un circuit ?", options:["Rien de spécial","Cela empêche quasiment le courant de passer, faussant la mesure","Le courant double","Le voltmètre affiche 0 automatiquement, ce qui est correct"], correct:1, exp:"La résistance interne très élevée du voltmètre empêcherait le courant de circuler normalement s'il était en série."},
        {q:"L'unité de la tension électrique est...", options:["l'ampère","le volt","le watt","l'ohm"], correct:1, exp:"La tension électrique se mesure en volts (V)."},
        {q:"Une lampe de 6 V branchée sur un générateur de 12 V subit...", options:["une sous-tension","une surtension, risquant de la détruire","aucun effet","une adaptation parfaite"], correct:1, exp:"12 V est bien supérieur à sa tension nominale de 6 V : c'est une surtension, dangereuse pour la lampe."}
      ]
    },
    {
      id: "p11",
      title: "Associations de générateurs et associations de récepteurs",
      content: `<p>On peut associer plusieurs <strong>générateurs</strong> (piles) en série pour additionner leurs tensions : la tension totale est la somme des tensions de chaque générateur (à condition de les brancher dans le même sens). Deux piles de 1,5 V associées en série donnent une tension totale de 3 V.</p>
      <p>On peut aussi associer plusieurs <strong>récepteurs</strong> (lampes, résistances) en série ou en dérivation, ce qui modifie leur comportement (voir les leçons précédentes sur le circuit et la tension).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Si on associe deux générateurs identiques en série, mais branchés « en opposition » (l'un dans un sens, l'autre dans l'autre), leurs tensions s'annulent au lieu de s'additionner : la tension totale devient nulle (0 V), et aucun courant utile ne circule.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : une lampe de poche utilise souvent 2 piles de 1,5 V associées en série pour obtenir une tension totale de 3 V, suffisante pour allumer l'ampoule normalement. Si l'une des piles est insérée à l'envers (bornes inversées), les deux tensions s'opposent : 1,5 − 1,5 = 0 V, et la lampe ne s'allume pas du tout, même si les deux piles sont individuellement en bon état.</p>`,
      quiz: [
        {q:"Deux piles de 1,5 V associées en série (même sens) donnent une tension totale de...", options:["1,5 V","3 V","0,75 V","4,5 V"], correct:1, exp:"En série et dans le même sens, les tensions s'additionnent : 1,5 + 1,5 = 3 V."},
        {q:"Si deux générateurs identiques sont branchés en opposition, la tension totale est...", options:["doublée","nulle (0 V)","la même qu'un seul générateur","toujours positive"], correct:1, exp:"En opposition, les tensions s'annulent : la tension totale devient nulle."},
        {q:"Pourquoi associe-t-on plusieurs piles en série dans une lampe de poche ?", options:["Pour réduire la tension","Pour obtenir une tension totale plus élevée","Pour économiser de l'énergie","Cela n'a aucun effet"], correct:1, exp:"L'association en série permet d'additionner les tensions pour atteindre la tension nécessaire au fonctionnement."},
        {q:"Que se passe-t-il si une pile est insérée à l'envers dans une lampe de poche avec une autre pile normale ?", options:["Rien, cela fonctionne normalement","Les tensions s'annulent, la lampe ne s'allume pas","La lampe brille deux fois plus","La pile normale explose"], correct:1, exp:"Les tensions s'opposent et s'annulent : plus aucun courant utile ne circule."},
        {q:"Associer des générateurs en série sert principalement à...", options:["diminuer l'intensité","additionner les tensions","créer un court-circuit","mesurer une résistance"], correct:1, exp:"L'association en série de générateurs sert à additionner leurs tensions respectives."}
      ]
    },
    {
      id: "p12",
      title: "Courant électrique et ses dangers",
      content: `<p>Le corps humain, surtout mouillé, devient un bon conducteur électrique, ce qui rend l'électricité particulièrement dangereuse près de l'eau (salle de bain, pluie). Une <strong>électrisation</strong> (passage du courant dans le corps) peut provoquer des brûlures, des troubles cardiaques, voire la mort (<strong>électrocution</strong>).</p>
      <p>Les dispositifs de <strong>protection</strong> comme le <strong>fusible</strong> et le <strong>disjoncteur</strong> coupent automatiquement le courant en cas de surintensité dangereuse, protégeant ainsi les personnes et les installations.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le fusible doit être remplacé après avoir « sauté », alors que le disjoncteur peut simplement être réenclenché manuellement après avoir coupé le courant, ce qui le rend plus pratique au quotidien. Règle de sécurité essentielle : ne jamais toucher un appareil électrique avec les mains mouillées.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Règles de sécurité essentielles à retenir : ne jamais toucher un fil électrique dénudé, couper le courant (au disjoncteur) avant toute intervention sur une installation électrique, ne jamais surcharger une même prise avec trop d'appareils, et ne jamais utiliser d'appareil électrique près d'une source d'eau (baignoire, évier). En cas d'électrisation d'une personne, il faut d'abord couper le courant avant de la toucher, pour ne pas s'électriser soi-même.</p>
      <h3>📌 Point du programme à ne pas manquer : le court-circuit</h3>
      <p>Un <strong>court-circuit</strong> se produit quand deux points d'un circuit reliés directement par un simple fil, avec une résistance quasi nulle (sans passer par un récepteur), se retrouvent connectés — le courant emprunte ce chemin de moindre résistance, avec une intensité brutalement très élevée. Cela peut faire fondre les fils, provoquer un incendie ou détruire le générateur : c'est pourquoi les installations sont protégées par des fusibles ou des disjoncteurs qui coupent immédiatement le courant en cas de court-circuit.</p>`,
      quiz: [
        {q:"Le corps humain mouillé est...", options:["un mauvais conducteur","un bon conducteur électrique, donc dangereux","totalement isolant","insensible à l'électricité"], correct:1, exp:"L'eau rend le corps humain plus conducteur, augmentant fortement le danger électrique."},
        {q:"Quel dispositif doit être remplacé après avoir coupé un circuit en surintensité ?", options:["Le disjoncteur","Le fusible","La prise électrique","L'interrupteur"], correct:1, exp:"Un fusible « grillé » doit être remplacé, contrairement au disjoncteur qui se réenclenche."},
        {q:"Que faut-il faire en premier face à une personne électrisée ?", options:["La toucher immédiatement pour l'aider","Couper le courant avant de la toucher","L'arroser d'eau","Rien, attendre les secours sans agir"], correct:1, exp:"Il faut d'abord couper le courant pour ne pas s'électriser soi-même en portant secours."},
        {q:"Pourquoi ne faut-il jamais toucher un appareil électrique avec les mains mouillées ?", options:["Cela abîme l'appareil","L'eau augmente le risque d'électrisation","Cela n'a aucun effet","Cela décharge la pile plus vite"], correct:1, exp:"L'eau rend le corps plus conducteur, augmentant fortement le risque d'électrisation."},
        {q:"Le rôle d'un disjoncteur est de...", options:["augmenter la tension","couper automatiquement le courant en cas de danger","stocker de l'énergie","mesurer l'intensité"], correct:1, exp:"Le disjoncteur protège l'installation en coupant automatiquement le courant en cas de surintensité."},
        {q:"Un court-circuit se caractérise par...", options:["une intensité très faible","une intensité brutalement très élevée","une absence totale de courant","une tension nulle"], correct:1, exp:"Un court-circuit fait chuter la résistance quasiment à zéro, ce qui provoque une intensité très élevée, dangereuse."}
      ]
    },
    {
      id: "p13",
      title: "Notion de force",
      content: `<p>Une <strong>force</strong> est une action mécanique exercée par un objet (ou un phénomène) sur un autre, capable de modifier son mouvement (le mettre en mouvement, l'arrêter, le dévier) ou de le déformer. Une force est caractérisée par : son <strong>point d'application</strong>, sa <strong>direction</strong>, son <strong>sens</strong>, et son <strong>intensité</strong> (mesurée en newtons, N, avec un dynamomètre).</p>
      <p>On représente une force par une <strong>flèche</strong> (un vecteur), dont l'origine est le point d'application, la direction et le sens indiqués par la flèche, et la longueur proportionnelle à l'intensité.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On distingue les forces de <strong>contact</strong> (l'objet qui exerce la force touche directement l'objet qui la subit, comme pousser une porte) des forces <strong>à distance</strong> (pas besoin de contact, comme la force gravitationnelle ou la force magnétique).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : quand on tire une caisse posée au sol avec une corde, on exerce une force de contact sur la caisse. Cette force a un point d'application (là où la corde est attachée), une direction (celle de la corde), un sens (vers soi), et une intensité qu'on peut mesurer avec un dynamomètre (par exemple 50 N). Si l'intensité de la force est suffisante pour vaincre les frottements, la caisse se met en mouvement dans le sens de la force.</p>
      <h3>📌 Point du programme à ne pas manquer : catégories de forces et équilibre</h3>
      <p>On distingue plusieurs <strong>catégories de forces</strong> : les forces de contact (force musculaire, force de frottement, tension d'un fil) et les forces à distance (poids, force magnétique). <strong>Un solide est en équilibre sous l'action de deux forces</strong> si ces deux forces ont : la même droite d'action, des sens opposés, et la même intensité. Exemple : un livre posé immobile sur une table est en équilibre sous l'action de deux forces — son poids (vertical, vers le bas) et la réaction de la table (verticale, vers le haut) — de même intensité et de sens opposés.</p>`,
      quiz: [
        {q:"Une force est caractérisée par...", options:["seulement son intensité","point d'application, direction, sens et intensité","seulement sa couleur","seulement sa direction"], correct:1, exp:"Une force est entièrement définie par ces 4 caractéristiques : point d'application, direction, sens et intensité."},
        {q:"L'unité de l'intensité d'une force est...", options:["le kilogramme","le newton","le mètre","le volt"], correct:1, exp:"L'intensité d'une force se mesure en newtons (N)."},
        {q:"Avec quel instrument mesure-t-on l'intensité d'une force ?", options:["Une balance","Un dynamomètre","Un thermomètre","Un voltmètre"], correct:1, exp:"Le dynamomètre est l'instrument utilisé pour mesurer l'intensité d'une force."},
        {q:"La force gravitationnelle est une force...", options:["de contact","à distance","qui n'existe pas","uniquement électrique"], correct:1, exp:"La force gravitationnelle agit à distance, sans contact physique nécessaire."},
        {q:"On représente une force par...", options:["un point","une flèche (vecteur)","un cercle","un simple nombre sans direction"], correct:1, exp:"Une force se représente par une flèche indiquant point d'application, direction, sens et intensité (longueur)."},
        {q:"Un solide est en équilibre sous l'action de deux forces si elles ont...", options:["des directions différentes","même droite d'action, sens opposés, même intensité","la même direction et le même sens","aucune de ces conditions"], correct:1, exp:"Les trois conditions d'équilibre sous deux forces sont : même droite d'action, sens opposés, et intensités égales."}
      ]
    },
    {
      id: "p14",
      title: "Poids d'un corps",
      content: `<p>Le <strong>poids</strong> d'un corps est la force exercée par l'attraction gravitationnelle (de la Terre, ou d'un autre astre) sur ce corps. Il se mesure en <strong>newtons (N)</strong> avec un dynamomètre, contrairement à la masse qui se mesure en kg avec une balance.</p>
      <p><strong>Relation entre poids et masse :</strong> P = m × g, où P est le poids (en N), m la masse (en kg), et g l'intensité de la pesanteur (environ 9,8 N/kg, souvent arrondi à 10 N/kg, sur Terre).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Contrairement à la masse, le poids varie selon le lieu : sur la Lune, g vaut environ 1,6 N/kg (6 fois moins que sur Terre), donc un objet y pèse environ 6 fois moins lourd, tout en gardant exactement la même masse.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de calcul : une personne a une masse de 70 kg. Son poids sur Terre est P = m × g = 70 × 10 = 700 N (en prenant g = 10 N/kg). Sur la Lune, avec g ≈ 1,6 N/kg, son poids serait P = 70 × 1,6 = 112 N, soit bien moins lourd, alors que sa masse resterait exactement 70 kg dans les deux cas — c'est ce qui explique pourquoi les astronautes bondissent facilement sur la Lune.</p>`,
      quiz: [
        {q:"Le poids se mesure en...", options:["kilogrammes","newtons","litres","degrés Celsius"], correct:1, exp:"Le poids, étant une force, se mesure en newtons (N)."},
        {q:"La formule reliant poids et masse est...", options:["P = m + g","P = m × g","P = m / g","P = m − g"], correct:1, exp:"Le poids est le produit de la masse par l'intensité de la pesanteur : P = m × g."},
        {q:"Une masse de 50 kg a un poids sur Terre (g=10 N/kg) de...", options:["50 N","500 N","5 N","5000 N"], correct:1, exp:"P = m × g = 50 × 10 = 500 N."},
        {q:"Le poids d'un objet sur la Lune, comparé à la Terre, est...", options:["identique","plus élevé","plus faible","impossible à déterminer"], correct:2, exp:"La pesanteur lunaire (g≈1,6 N/kg) est plus faible que sur Terre (g≈10 N/kg), donc le poids y est plus faible."},
        {q:"La masse d'un objet change-t-elle entre la Terre et la Lune ?", options:["Oui, elle diminue","Oui, elle augmente","Non, elle reste identique","Cela dépend de l'objet"], correct:2, exp:"La masse est une propriété de la matière indépendante du lieu ; seul le poids change."}
      ]
    },
    {
      id: "p15",
      title: "La poussée d'Archimède",
      content: `<p>Tout corps plongé (totalement ou partiellement) dans un fluide (liquide ou gaz) subit une force verticale, dirigée vers le haut, appelée <strong>poussée d'Archimède</strong>. Cette poussée est égale au poids du volume de fluide déplacé par le corps.</p>
      <p>Si la poussée d'Archimède est supérieure au poids du corps, celui-ci <strong>flotte</strong> (ou remonte). Si elle est inférieure, le corps <strong>coule</strong>. Si elle est égale, le corps reste en équilibre (il « flotte entre deux eaux »).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> C'est grâce à ce principe qu'un énorme bateau en acier (plus dense que l'eau) peut flotter : sa forme creuse lui fait déplacer un grand volume d'eau, dont le poids (et donc la poussée d'Archimède) dépasse le poids total du bateau.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : un objet de volume 200 cm³ est entièrement plongé dans l'eau (masse volumique 1 g/cm³ = 1000 kg/m³). Le volume d'eau déplacé est donc 200 cm³ = 0,0002 m³. La poussée d'Archimède vaut : Π = ρ_eau × V_déplacé × g = 1000 × 0,0002 × 10 = 2 N. Si le poids réel de l'objet est inférieur à 2 N, il flottera ; s'il est supérieur, il coulera.</p>`,
      quiz: [
        {q:"La poussée d'Archimède est dirigée...", options:["vers le bas","vers le haut","horizontalement","dans un sens aléatoire"], correct:1, exp:"La poussée d'Archimède est toujours verticale, dirigée vers le haut."},
        {q:"La poussée d'Archimède est égale au...", options:["poids du corps lui-même","poids du volume de fluide déplacé","volume du corps en litres","double du poids du corps"], correct:1, exp:"Elle est égale au poids du volume de fluide déplacé par le corps immergé."},
        {q:"Un corps flotte si...", options:["la poussée d'Archimède est inférieure à son poids","la poussée d'Archimède est supérieure à son poids","son volume est nul","il n'a pas de masse"], correct:1, exp:"Le corps flotte quand la poussée (vers le haut) l'emporte sur son propre poids (vers le bas)."},
        {q:"Pourquoi un bateau en acier peut-il flotter ?", options:["L'acier est moins dense que l'eau","Sa forme creuse déplace un grand volume d'eau","Il n'a pas de poids","C'est un mystère non expliqué par la physique"], correct:1, exp:"Grâce à sa forme creuse, le bateau déplace un grand volume d'eau, générant une poussée d'Archimède suffisante."},
        {q:"Qui a découvert ce principe de la poussée ?", options:["Newton","Pythagore","Archimède","Pascal"], correct:2, exp:"Ce principe porte le nom du savant grec Archimède, qui l'a formulé dans l'Antiquité."}
      ]
    },
    {
      id: "p16",
      title: "Sources et récepteurs de lumière",
      content: `<p>Une <strong>source de lumière</strong> est un objet qui émet sa propre lumière. On distingue les sources <strong>primaires</strong> (qui produisent elles-mêmes la lumière, comme le Soleil ou une ampoule) des sources <strong>secondaires</strong> (qui ne font que renvoyer la lumière qu'elles reçoivent, comme la Lune ou une page de livre).</p>
      <p>Un <strong>récepteur de lumière</strong> est un objet capable de détecter la lumière : l'œil humain, une caméra, une cellule photoélectrique.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La Lune elle-même n'émet aucune lumière propre : elle nous apparaît lumineuse uniquement parce qu'elle réfléchit la lumière du Soleil — c'est donc une source secondaire, tout comme les objets qui nous entourent dans une pièce éclairée.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de classement : le Soleil (source primaire), une bougie allumée (source primaire), un miroir qui reflète la lumière du soleil (source secondaire), la Lune (source secondaire), une page de ce cours éclairée par une lampe (source secondaire). L'œil qui perçoit toute cette lumière est, lui, un récepteur de lumière — c'est grâce à lui (et au cerveau qui interprète le signal) que nous « voyons » les objets éclairés.</p>`,
      quiz: [
        {q:"Une source primaire de lumière est un objet qui...", options:["réfléchit la lumière reçue","produit sa propre lumière","absorbe toute la lumière","est toujours invisible"], correct:1, exp:"Une source primaire produit elle-même sa propre lumière (ex : le Soleil, une ampoule)."},
        {q:"La Lune est une source de lumière...", options:["primaire","secondaire","elle n'émet ni ne reflète de lumière","aucune de ces réponses"], correct:1, exp:"La Lune ne produit pas sa propre lumière : elle réfléchit celle du Soleil, c'est une source secondaire."},
        {q:"Un récepteur de lumière est un objet qui...", options:["émet de la lumière","détecte la lumière","bloque toute lumière","n'a aucun rapport avec la lumière"], correct:1, exp:"Un récepteur de lumière détecte la lumière reçue, comme l'œil ou une caméra."},
        {q:"Une page de livre éclairée par une lampe est...", options:["une source primaire","une source secondaire","un récepteur uniquement","invisible"], correct:1, exp:"La page ne produit pas sa propre lumière ; elle réfléchit celle de la lampe, c'est une source secondaire."},
        {q:"L'œil humain est...", options:["une source primaire de lumière","un récepteur de lumière","une source secondaire","aucune de ces réponses"], correct:1, exp:"L'œil détecte la lumière reçue : c'est un récepteur de lumière."}
      ]
    },
    {
      id: "p17",
      title: "Propagation rectiligne et vitesse de la lumière",
      content: `<p>Dans un milieu transparent et homogène, la lumière se propage <strong>en ligne droite</strong> : c'est le principe de <strong>propagation rectiligne</strong>. C'est ce principe qui explique la formation des ombres nettes derrière un objet opaque.</p>
      <p>La lumière se propage à très grande vitesse : environ <strong>300 000 km/s</strong> dans le vide (et presque aussi vite dans l'air). C'est la vitesse la plus élevée connue dans l'univers.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> À cause de cette vitesse pourtant finie, la lumière du Soleil met environ 8 minutes pour atteindre la Terre : quand on regarde le Soleil, on le voit tel qu'il était il y a 8 minutes, pas tel qu'il est exactement à cet instant !</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de calcul : la distance Terre-Lune est d'environ 384 000 km. Le temps mis par la lumière pour parcourir cette distance est t = distance / vitesse = 384 000 / 300 000 ≈ 1,28 seconde. C'est pourquoi, lors des missions Apollo, il y avait un léger délai perceptible dans les communications radio entre la Terre et les astronautes sur la Lune, car les ondes radio se déplacent aussi à la vitesse de la lumière.</p>`,
      quiz: [
        {q:"Dans un milieu transparent homogène, la lumière se propage...", options:["en zigzag","en ligne droite","en cercle","de façon aléatoire"], correct:1, exp:"C'est le principe de propagation rectiligne de la lumière."},
        {q:"La vitesse de la lumière dans le vide est d'environ...", options:["300 km/s","3000 km/s","300 000 km/s","3 000 000 km/s"], correct:2, exp:"La lumière se propage à environ 300 000 km/s dans le vide."},
        {q:"Combien de temps met la lumière du Soleil pour atteindre la Terre ?", options:["Environ 8 secondes","Environ 8 minutes","Environ 8 heures","Instantanément"], correct:1, exp:"La lumière du Soleil met environ 8 minutes pour parcourir les 150 millions de km jusqu'à la Terre."},
        {q:"Le principe de propagation rectiligne explique...", options:["la couleur du ciel","la formation d'ombres nettes derrière un objet opaque","le son du tonnerre","la formation des nuages"], correct:1, exp:"Comme la lumière va en ligne droite, un objet opaque bloque son passage et crée une ombre nette derrière lui."},
        {q:"La lumière est-elle la chose la plus rapide connue dans l'univers ?", options:["Non, le son est plus rapide","Oui, sa vitesse est la plus élevée connue","Non, rien n'est plus lent","Cela dépend du jour"], correct:1, exp:"À notre connaissance actuelle, rien ne va plus vite que la lumière dans le vide."}
      ]
    },
    {
      id: "p18",
      title: "Les ombres",
      content: `<p>Quand un objet opaque est placé devant une source de lumière, il bloque une partie de la lumière et forme une <strong>ombre</strong>. On distingue l'<strong>ombre propre</strong> (la partie de l'objet lui-même qui n'est pas éclairée) de l'<strong>ombre portée</strong> (la zone sombre projetée sur un écran ou un mur derrière l'objet).</p>
      <p>La taille de l'ombre portée dépend de la position de la source lumineuse : plus la source est proche de l'objet, plus l'ombre portée est grande ; plus elle est éloignée, plus l'ombre se rapproche de la taille réelle de l'objet.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Une <strong>éclipse de Soleil</strong> est un exemple spectaculaire d'ombre portée à l'échelle astronomique : la Lune, placée entre le Soleil et la Terre, projette son ombre sur une partie de la Terre, plongeant temporairement cette zone dans l'obscurité en plein jour.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de construction géométrique d'une ombre portée : on trace des droites (rayons lumineux) depuis la source ponctuelle de lumière, passant par chaque point du contour de l'objet opaque, et on les prolonge jusqu'à l'écran (le sol ou le mur). Les points d'intersection de ces droites avec l'écran délimitent l'ombre portée. Plus la source est basse et proche de l'objet (comme un lampadaire le soir), plus l'ombre portée s'allonge démesurément.</p>`,
      quiz: [
        {q:"L'ombre propre est...", options:["l'ombre projetée sur un écran","la partie non éclairée de l'objet lui-même","une ombre qui n'existe pas","toujours plus grande que l'objet"], correct:1, exp:"L'ombre propre est la zone non éclairée de l'objet opaque lui-même."},
        {q:"L'ombre portée est...", options:["la partie non éclairée de l'objet","la zone sombre projetée sur un écran derrière l'objet","toujours identique à l'objet","impossible à observer"], correct:1, exp:"L'ombre portée est projetée sur un écran ou une surface derrière l'objet opaque."},
        {q:"Plus une source lumineuse est proche d'un objet, plus son ombre portée est...", options:["petite","grande","inexistante","de couleur différente"], correct:1, exp:"Une source proche projette une ombre portée plus grande qu'une source éloignée."},
        {q:"Une éclipse de Soleil est un exemple de...", options:["ombre propre géante","ombre portée à l'échelle astronomique (la Lune sur la Terre)","réflexion de la lumière uniquement","dispersion de la lumière"], correct:1, exp:"L'ombre de la Lune se projette sur la Terre, créant une éclipse : c'est une ombre portée."},
        {q:"Pour qu'une ombre se forme, l'objet doit être...", options:["transparent","opaque","toujours coloré en noir","en mouvement"], correct:1, exp:"Seul un objet opaque (qui bloque la lumière) peut créer une ombre."}
      ]
    },
    {
      id: "p19",
      title: "La combustion avec ou sans flamme",
      content: `<p>Une <strong>combustion</strong> est une réaction chimique entre un <strong>combustible</strong> (la substance qui brûle) et un <strong>comburant</strong> (généralement le dioxygène de l'air), qui dégage de la chaleur (et souvent de la lumière). On distingue la combustion <strong>avec flamme</strong> (comme une bougie qui brûle) de la combustion <strong>sans flamme</strong> (comme un morceau de charbon incandescent qui rougeoie sans flamme visible, ou la lente rouille du fer).</p>
      <p>Pour qu'une combustion démarre, il faut réunir trois éléments, appelés le <strong>« triangle du feu »</strong> : un combustible, un comburant, et une source de chaleur suffisante (température d'inflammation).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Supprimer un seul des trois éléments du triangle du feu suffit à éteindre un incendie — c'est le principe utilisé par les extincteurs : l'eau refroidit (supprime la chaleur), la mousse étouffe (supprime le comburant), la poudre interrompt la réaction chimique.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : une bougie qui brûle est une combustion avec flamme — la cire fondue (combustible) réagit avec le dioxygène de l'air (comburant) au niveau de la mèche, produisant chaleur et lumière visible sous forme de flamme. Si on éteint la bougie en soufflant dessus, on refroidit brutalement la mèche en dessous de sa température d'inflammation, supprimant ainsi un des trois éléments du triangle du feu.</p>`,
      quiz: [
        {q:"Le triangle du feu est composé de...", options:["combustible, eau, air","combustible, comburant, source de chaleur","oxygène, azote, carbone","flamme, fumée, cendre"], correct:1, exp:"Les trois éléments nécessaires à une combustion sont le combustible, le comburant et une source de chaleur suffisante."},
        {q:"Le comburant le plus courant dans les combustions est...", options:["le dioxyde de carbone","le dioxygène de l'air","l'azote","l'hydrogène"], correct:1, exp:"Le comburant habituel est le dioxygène (O₂) présent dans l'air."},
        {q:"Pour éteindre un feu, il suffit de...", options:["ajouter du combustible","supprimer un seul des trois éléments du triangle du feu","augmenter la chaleur","rien, un feu ne s'éteint jamais"], correct:1, exp:"Retirer un seul élément (combustible, comburant OU chaleur) suffit à arrêter la combustion."},
        {q:"Le charbon incandescent qui rougeoie sans flamme est un exemple de...", options:["combustion avec flamme","combustion sans flamme","absence totale de combustion","réaction non chimique"], correct:1, exp:"C'est une combustion sans flamme visible, mais qui dégage bien de la chaleur."},
        {q:"Un extincteur à mousse agit principalement en...", options:["ajoutant du comburant","étouffant le feu (supprimant le comburant)","augmentant la température","ajoutant du combustible"], correct:1, exp:"La mousse recouvre le feu et le prive de contact avec le dioxygène de l'air (le comburant)."}
      ]
    },
    {
      id: "p20",
      title: "Les aspects pratiques des combustions",
      content: `<p>Les combustions ont de nombreuses applications pratiques : production de chaleur (chauffage, cuisson), production d'énergie (moteurs à essence, centrales thermiques), production de lumière. Mais une combustion peut être <strong>complète</strong> (assez de dioxygène disponible) ou <strong>incomplète</strong> (pas assez de dioxygène).</p>
      <p>Une combustion <strong>complète</strong> produit du dioxyde de carbone (CO₂) et de l'eau, avec une flamme généralement propre. Une combustion <strong>incomplète</strong> produit en plus du <strong>monoxyde de carbone</strong> (CO, gaz toxique et invisible) et de la suie (fumée noire), avec une flamme plus jaune/orangée.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pour vérifier la présence de dioxyde de carbone (CO₂) produit par une combustion, on utilise l'<strong>eau de chaux</strong> : elle se trouble (devient blanche laiteuse) en présence de CO₂. C'est un test très simple et fiable réalisable en classe.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple pratique : dans un appareil de chauffage au gaz mal réglé ou mal ventilé, la combustion peut devenir incomplète et produire du monoxyde de carbone (CO), un gaz sans odeur, sans couleur, mais extrêmement toxique et potentiellement mortel — c'est pourquoi il est essentiel de toujours bien ventiler une pièce où fonctionne un appareil à combustion, et d'installer un détecteur de monoxyde de carbone dans les logements équipés de tels appareils.</p>`,
      quiz: [
        {q:"Une combustion complète produit principalement...", options:["du monoxyde de carbone et de la suie","du dioxyde de carbone et de l'eau","uniquement de la fumée noire","de l'azote pur"], correct:1, exp:"Une combustion complète (assez de dioxygène) produit du CO₂ et de l'eau."},
        {q:"Le monoxyde de carbone (CO) est un gaz...", options:["inoffensif","toxique, sans odeur ni couleur","toujours visible sous forme de fumée verte","utilisé pour respirer"], correct:1, exp:"Le CO est particulièrement dangereux car il est invisible, inodore et très toxique."},
        {q:"Pour détecter la présence de CO₂, on utilise...", options:["l'eau de chaux, qui se trouble","de l'eau salée","un thermomètre","un aimant"], correct:0, exp:"L'eau de chaux se trouble (devient blanche laiteuse) en présence de dioxyde de carbone."},
        {q:"Une combustion incomplète se produit quand...", options:["il y a trop de dioxygène","il n'y a pas assez de dioxygène disponible","il n'y a pas de combustible","la température est trop basse pour démarrer"], correct:1, exp:"Le manque de dioxygène provoque une combustion incomplète, produisant CO et suie."},
        {q:"Pourquoi faut-il bien ventiler une pièce avec un appareil à combustion ?", options:["Pour éviter le bruit","Pour éviter l'accumulation de monoxyde de carbone toxique","Pour refroidir la pièce","Ce n'est pas nécessaire"], correct:1, exp:"Une bonne ventilation apporte du dioxygène frais et évacue le CO potentiellement produit, réduisant le danger."}
      ]
    },
    {
      id: "p21",
      title: "L'utilisation des combustibles – les dangers",
      content: `<p>Les <strong>combustibles</strong> courants incluent le bois, le charbon, le gaz naturel, l'essence, le gaz butane/propane (utilisé pour la cuisine). Chacun présente des avantages (disponibilité, coût, pouvoir calorifique) et des risques spécifiques.</p>
      <p><strong>Dangers principaux</strong> liés aux combustibles : risque d'incendie ou d'explosion (fuite de gaz près d'une flamme), production de gaz toxiques (monoxyde de carbone en cas de combustion incomplète), pollution de l'air (fumées, particules).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le gaz domestique (butane/propane), naturellement inodore, est volontairement <strong>odorisé</strong> par les fournisseurs (avec une substance à odeur caractéristique) afin qu'une fuite soit détectable par l'odorat avant qu'elle ne devienne dangereuse.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Règles de sécurité essentielles pour l'utilisation des combustibles domestiques : ne jamais approcher une flamme d'une bouteille de gaz, vérifier régulièrement l'état des tuyaux et raccords, aérer la pièce où l'on cuisine au gaz, ne jamais entreposer de combustibles inflammables près d'une source de chaleur, et couper l'arrivée de gaz après chaque utilisation. En cas d'odeur de gaz suspectée, il faut immédiatement couper l'arrivée de gaz, aérer, et ne surtout pas actionner d'interrupteur électrique (qui pourrait provoquer une étincelle).</p>`,
      quiz: [
        {q:"Pourquoi le gaz domestique est-il volontairement odorisé ?", options:["Pour améliorer son goût","Pour permettre de détecter une fuite par l'odorat","Pour le rendre plus inflammable","Cela n'est pas fait volontairement"], correct:1, exp:"Le gaz naturel est inodore à l'origine ; on lui ajoute une odeur caractéristique pour détecter les fuites."},
        {q:"Que faut-il faire en cas de suspicion de fuite de gaz ?", options:["Allumer la lumière pour voir","Couper l'arrivée de gaz et aérer, sans actionner d'interrupteur","Approcher une flamme pour vérifier","Ne rien faire"], correct:1, exp:"Il faut couper le gaz, aérer, et éviter toute étincelle (donc pas d'interrupteur électrique)."},
        {q:"Quel est un danger majeur lié aux combustibles ?", options:["Le risque d'incendie ou d'explosion","La production d'oxygène pur","Le refroidissement excessif","Aucun danger notable"], correct:0, exp:"Les combustibles présentent un risque important d'incendie ou d'explosion en cas de mauvaise utilisation."},
        {q:"Citez un combustible couramment utilisé pour la cuisine.", options:["L'azote","Le gaz butane/propane","L'eau","Le dioxyde de carbone"], correct:1, exp:"Le gaz butane ou propane est très couramment utilisé pour la cuisson domestique."},
        {q:"Il est recommandé de stocker des combustibles inflammables...", options:["près d'une source de chaleur","loin de toute source de chaleur ou de flamme","dans la cuisine, sans précaution","peu importe où"], correct:1, exp:"Pour éviter tout risque d'incendie, les combustibles doivent être stockés loin des sources de chaleur."}
      ]
    },
    {
      id: "p22",
      title: "Les atomes et les molécules",
      content: `<p>Toute la matière est constituée de particules extrêmement petites appelées <strong>atomes</strong>. Un atome est électriquement <strong>neutre</strong> : il possède autant de protons (charge positive) que d'électrons (charge négative).</p>
      <p>Une <strong>molécule</strong> est un assemblage de plusieurs atomes liés entre eux. Une <strong>formule chimique</strong> indique la composition d'une molécule : par exemple, H₂O (eau) contient 2 atomes d'hydrogène et 1 atome d'oxygène ; CO₂ (dioxyde de carbone) contient 1 atome de carbone et 2 atomes d'oxygène.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le petit chiffre en indice après un symbole chimique indique le nombre d'atomes de cet élément présents dans la molécule. Pas d'indice signifie qu'il n'y a qu'un seul atome de cet élément (par exemple, dans H₂O, il n'y a qu'un seul atome d'oxygène, donc pas d'indice après le « O »).</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de lecture de formule : la molécule de méthane, CH₄, contient 1 atome de carbone (C) et 4 atomes d'hydrogène (H), soit 5 atomes au total dans une seule molécule. Autre exemple : la molécule de dioxygène O₂ (celle que l'on respire) contient 2 atomes d'oxygène liés ensemble — c'est un exemple de molécule formée d'un seul type d'atome.</p>`,
      quiz: [
        {q:"Un atome est électriquement...", options:["toujours positif","toujours négatif","neutre (autant de protons que d'électrons)","aléatoire"], correct:2, exp:"Un atome neutre possède exactement autant de protons que d'électrons."},
        {q:"Combien d'atomes d'hydrogène contient une molécule d'eau H₂O ?", options:["1","2","3","0"], correct:1, exp:"Le chiffre 2 en indice après H indique 2 atomes d'hydrogène."},
        {q:"Une molécule est...", options:["un seul atome isolé","un assemblage de plusieurs atomes liés","toujours composée d'un seul élément","une particule chargée"], correct:1, exp:"Une molécule est un assemblage d'au moins deux atomes liés entre eux."},
        {q:"La formule CH₄ (méthane) contient combien d'atomes au total ?", options:["4","5","1","8"], correct:1, exp:"1 atome de carbone + 4 atomes d'hydrogène = 5 atomes au total."},
        {q:"Dans une formule chimique, l'absence d'indice après un symbole signifie...", options:["0 atome de cet élément","1 seul atome de cet élément","un nombre inconnu d'atomes","toujours 2 atomes"], correct:1, exp:"Pas d'indice signifie qu'il y a exactement 1 atome de cet élément dans la molécule."}
      ]
    },
    {
      id: "p23",
      title: "La structure de l'atome",
      content: `<p>Un atome est constitué d'un <strong>noyau</strong> (au centre, très petit et très dense) contenant des <strong>protons</strong> (charge positive) et des <strong>neutrons</strong> (sans charge électrique), entouré d'<strong>électrons</strong> (charge négative) qui gravitent tout autour à grande distance relative.</p>
      <p>Le <strong>numéro atomique</strong> (noté Z) indique le nombre de protons (et donc aussi le nombre d'électrons, puisque l'atome est neutre). C'est ce numéro qui caractérise et distingue chaque élément chimique (hydrogène Z=1, carbone Z=6, oxygène Z=8...).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le noyau, bien que contenant presque toute la masse de l'atome, est extrêmement petit comparé à la taille totale de l'atome : si un atome avait la taille d'un stade de football, son noyau aurait à peu près la taille d'un petit pois placé en son centre — l'atome est donc constitué en très grande majorité de vide !</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : l'atome de carbone a pour numéro atomique Z = 6, ce qui signifie qu'il possède 6 protons dans son noyau et, étant neutre, 6 électrons autour du noyau. Son noyau contient aussi généralement 6 neutrons (pour l'isotope le plus courant, le carbone 12). L'atome d'oxygène (Z=8) possède quant à lui 8 protons et 8 électrons.</p>`,
      quiz: [
        {q:"Le noyau d'un atome contient...", options:["protons et électrons","protons et neutrons","seulement des électrons","seulement des neutrons"], correct:1, exp:"Le noyau contient les protons et les neutrons ; les électrons gravitent autour."},
        {q:"Le numéro atomique Z correspond au nombre de...", options:["neutrons","protons","molécules","liaisons chimiques"], correct:1, exp:"Le numéro atomique Z est le nombre de protons dans le noyau."},
        {q:"Les électrons ont une charge électrique...", options:["positive","négative","nulle","variable"], correct:1, exp:"Les électrons portent une charge électrique négative."},
        {q:"Comparé à la taille totale de l'atome, le noyau est...", options:["très grand, presque toute la taille de l'atome","extrêmement petit","de taille égale à l'atome entier","invisible et sans dimension"], correct:1, exp:"Le noyau est extrêmement petit comparé à la taille totale de l'atome, qui est surtout composé de vide."},
        {q:"Le carbone a pour numéro atomique Z=6. Combien d'électrons possède-t-il ?", options:["6","12","3","0"], correct:0, exp:"Un atome neutre a autant d'électrons que de protons, donc 6 électrons pour le carbone."}
      ]
    },
    {
      id: "p24",
      title: "La combustion du carbone",
      content: `<p>Le <strong>carbone</strong> (présent par exemple dans le charbon) brûle dans le <strong>dioxygène</strong> de l'air selon la réaction : <strong>carbone + dioxygène → dioxyde de carbone</strong>, notée C + O₂ → CO₂.</p>
      <p>Cette équation chimique est déjà <strong>équilibrée</strong> : on retrouve 1 atome de carbone et 2 atomes d'oxygène de chaque côté de la flèche, conformément à la loi de conservation de la matière (loi de Lavoisier) : rien ne se perd, rien ne se crée, tout se transforme.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le produit de cette combustion, le dioxyde de carbone (CO₂), peut être détecté grâce au test à l'eau de chaux, qui se trouble en sa présence — c'est le même test utilisé pour toutes les combustions produisant du CO₂.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Vérification de l'équilibre de l'équation C + O₂ → CO₂ : à gauche, on compte 1 atome de C et 2 atomes de O (dans la molécule O₂) ; à droite, dans la molécule CO₂, on compte aussi 1 atome de C et 2 atomes de O. Les deux côtés contiennent bien le même nombre de chaque type d'atome : l'équation est équilibrée, conformément à la loi de conservation de la matière lors d'une transformation chimique.</p>`,
      quiz: [
        {q:"L'équation de la combustion du carbone s'écrit...", options:["C + O₂ → CO₂","2C + O₂ → 2CO","C + 2O → CO₂","C₂ + O → CO₂"], correct:0, exp:"La combustion complète du carbone dans le dioxygène produit du dioxyde de carbone : C + O₂ → CO₂."},
        {q:"Le produit de la combustion du carbone est...", options:["le monoxyde de carbone uniquement","le dioxyde de carbone (CO₂)","de l'eau uniquement","de l'azote"], correct:1, exp:"La combustion complète du carbone produit du dioxyde de carbone, CO₂."},
        {q:"Dans l'équation C + O₂ → CO₂, combien d'atomes d'oxygène y a-t-il de chaque côté ?", options:["1 de chaque côté","2 de chaque côté","1 à gauche, 2 à droite","2 à gauche, 1 à droite"], correct:1, exp:"On compte 2 atomes d'oxygène à gauche (dans O₂) et 2 à droite (dans CO₂) : l'équation est équilibrée."},
        {q:"La loi de conservation de la matière énonce que...", options:["la matière peut disparaître","rien ne se perd, rien ne se crée, tout se transforme","la masse double toujours","seuls les atomes de carbone se conservent"], correct:1, exp:"C'est la formulation classique de la loi de Lavoisier sur la conservation de la matière."},
        {q:"Comment détecter la présence de CO₂ produit par cette combustion ?", options:["Avec un thermomètre","Avec de l'eau de chaux, qui se trouble","Avec un aimant","Avec une balance"], correct:1, exp:"L'eau de chaux se trouble (devient blanche laiteuse) en présence de dioxyde de carbone."}
      ]
    },
    {
      id: "p25",
      title: "La combustion de l'hydrogène",
      content: `<p>Le <strong>dihydrogène</strong> (H₂) brûle dans le <strong>dioxygène</strong> de l'air selon la réaction : <strong>dihydrogène + dioxygène → eau</strong>, notée 2H₂ + O₂ → 2H₂O.</p>
      <p>Cette combustion est spectaculaire : elle produit une petite détonation (le fameux « test d'aboiement » qui permet de reconnaître le dihydrogène) et le seul produit formé est de l'<strong>eau</strong> (H₂O), qu'on peut observer se condenser sous forme de buée sur une paroi froide.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Vérifions l'équilibre de l'équation 2H₂ + O₂ → 2H₂O : à gauche, 4 atomes de H (dans 2 molécules H₂) et 2 atomes de O ; à droite, dans 2 molécules d'eau, on compte aussi 4 atomes de H et 2 atomes de O. L'équation est bien équilibrée.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Le test caractéristique du dihydrogène : on approche une flamme (allumette) de l'ouverture d'un tube à essai contenant du dihydrogène — on entend une petite détonation sèche (un « pop » caractéristique), ce qui permet d'identifier ce gaz avec certitude. Ce test est très différent de celui du dioxygène, qui ravive au contraire une flamme (bûchette incandescente qui se rallume), ou de celui du dioxyde de carbone, qui trouble l'eau de chaux.</p>`,
      quiz: [
        {q:"L'équation de la combustion de l'hydrogène s'écrit...", options:["H₂ + O₂ → H₂O","2H₂ + O₂ → 2H₂O","H₂ + O → H₂O","4H + 2O → 2H₂O₂"], correct:1, exp:"La combustion équilibrée du dihydrogène s'écrit 2H₂ + O₂ → 2H₂O."},
        {q:"Le produit de la combustion du dihydrogène est...", options:["du dioxyde de carbone","de l'eau (H₂O)","du monoxyde de carbone","de l'azote"], correct:1, exp:"La combustion du dihydrogène dans le dioxygène produit uniquement de l'eau."},
        {q:"Comment reconnaît-on le dihydrogène lors d'un test à la flamme ?", options:["Il ravive la flamme","Il produit une détonation caractéristique (« pop »)","Il trouble l'eau de chaux","Il n'a aucune réaction"], correct:1, exp:"Le dihydrogène produit une petite détonation caractéristique au contact d'une flamme, c'est son test de reconnaissance."},
        {q:"Dans 2H₂ + O₂ → 2H₂O, combien d'atomes d'hydrogène y a-t-il de chaque côté ?", options:["2 de chaque côté","4 de chaque côté","2 à gauche, 4 à droite","4 à gauche, 2 à droite"], correct:1, exp:"À gauche : 2 molécules H₂ = 4 atomes H. À droite : 2 molécules H₂O = 4 atomes H. L'équation est équilibrée."},
        {q:"Quel test permet de reconnaître le dioxygène (différent de celui de l'hydrogène) ?", options:["Il produit une détonation","Il ravive une bûchette incandescente","Il trouble l'eau de chaux","Il n'a pas de test spécifique"], correct:1, exp:"Le dioxygène ravive une flamme ou une bûchette incandescente, contrairement au dihydrogène qui détone."}
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
      <p>Exemple de classement des transformations : la mue de la voix chez le garçon est une transformation morphologique/physiologique (liée au développement du larynx), l'apparition de l'acné est une transformation physiologique liée aux hormones, tandis qu'une plus grande sensibilité émotionnelle ou un désir d'indépendance vis-à-vis des parents relèvent des transformations psychologiques. Comprendre l'origine hormonale de ces changements aide à mieux les vivre sereinement.</p>`,
      quiz: [
        {q:"La puberté est déclenchée principalement par...", options:["l'alimentation seule","des hormones (testostérone, œstrogènes...)","le climat","la taille des parents"], correct:1, exp:"Ce sont les hormones sexuelles (testostérone chez le garçon, œstrogènes/progestérone chez la fille) qui déclenchent la puberté."},
        {q:"Quel type de transformation correspond à un changement d'humeur à l'adolescence ?", options:["Morphologique","Physiologique","Psychologique","Aucune de ces réponses"], correct:2, exp:"Les changements d'humeur relèvent des transformations psychologiques de la puberté."},
        {q:"L'hormone principale responsable des transformations chez le garçon est...", options:["la testostérone","les œstrogènes","la progestérone","l'insuline"], correct:0, exp:"La testostérone est l'hormone sexuelle principale responsable des transformations pubertaires masculines."},
        {q:"Quel comportement est recommandé à l'adolescence face à la sexualité naissante ?", options:["Aucune précaution n'est nécessaire","L'abstinence, en attendant d'être prêt à en assumer les responsabilités","Ignorer le sujet complètement","Cela ne concerne que les adultes"], correct:1, exp:"Le comportement sexuel responsable recommandé à l'adolescence est l'abstinence."},
        {q:"L'âge de la puberté est-il identique pour tout le monde ?", options:["Oui, exactement 12 ans pour tous","Non, cela varie selon les individus (souvent entre 10 et 16 ans)","Oui, toujours à 18 ans","Cela ne dépend que du sexe"], correct:1, exp:"L'âge de la puberté varie selon les individus, en général entre 10 et 16 ans."}
      ]
    },
    {
      id: "s2",
      title: "De la fécondation au fœtus",
      content: `<p>Chez la femme, un <strong>ovule</strong> est libéré environ une fois par mois lors de l'<strong>ovulation</strong> (cycle menstruel d'environ 28 jours). Lors d'un rapport sexuel, des <strong>spermatozoïdes</strong> sont déposés dans les voies génitales féminines ; s'ils rencontrent un ovule, la <strong>fécondation</strong> peut avoir lieu : un spermatozoïde pénètre l'ovule, formant une cellule-œuf.</p>
      <p>La cellule-œuf se divise ensuite de nombreuses fois en se déplaçant vers l'utérus, où elle s'implante (<strong>nidation</strong>) et devient un <strong>embryon</strong>, puis, après environ 2 mois de développement, un <strong>fœtus</strong>. La grossesse (<strong>gestation</strong>) dure environ 9 mois jusqu'à la naissance.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Pendant la grossesse, l'embryon puis le fœtus se développent dans l'utérus et sont nourris grâce au <strong>placenta</strong>, un organe qui assure les échanges de nutriments et d'oxygène entre le sang de la mère et celui du fœtus, sans que les deux sangs ne se mélangent directement.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Chronologie simplifiée d'une grossesse : fécondation (jour 0) → cellule-œuf qui se divise en migrant vers l'utérus (environ 1 semaine) → nidation dans la paroi utérine → stade embryon (jusqu'à 2 mois, formation des principaux organes) → stade fœtus (de 2 à 9 mois, croissance et maturation des organes) → naissance (accouchement, vers 9 mois). Chaque étape est essentielle et une perturbation à l'un de ces stades peut avoir des conséquences sur le développement.</p>`,
      quiz: [
        {q:"La fécondation est...", options:["la libération de l'ovule","la rencontre d'un spermatozoïde et d'un ovule","la naissance du bébé","la formation du placenta"], correct:1, exp:"La fécondation est la rencontre et la fusion d'un spermatozoïde et d'un ovule."},
        {q:"Combien de temps dure en moyenne une grossesse humaine ?", options:["3 mois","6 mois","9 mois","12 mois"], correct:2, exp:"La gestation humaine dure en moyenne environ 9 mois."},
        {q:"L'organe qui assure les échanges entre la mère et le fœtus est...", options:["l'utérus seul","le placenta","l'ovaire","le vagin"], correct:1, exp:"Le placenta assure les échanges de nutriments et d'oxygène entre la mère et le fœtus."},
        {q:"Après combien de temps de développement environ l'embryon devient-il un fœtus ?", options:["1 semaine","2 mois","6 mois","9 mois"], correct:1, exp:"On parle de fœtus à partir d'environ 2 mois de développement, une fois les principaux organes formés."},
        {q:"L'ovulation se produit environ...", options:["une fois par jour","une fois par mois","une fois par an","une seule fois dans la vie"], correct:1, exp:"L'ovulation se produit environ une fois par mois, au cours du cycle menstruel."}
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
      <p>Exemple comparatif : le granite (roche plutonique) présente de gros cristaux de quartz, feldspath et mica clairement visibles à l'œil nu, car le magma qui lui a donné naissance a refroidi très lentement, en profondeur, pendant parfois des milliers d'années. Le basalte (roche volcanique), au contraire, a une texture fine et compacte car il provient d'un magma qui a jailli en surface lors d'une éruption et a refroidi en quelques heures ou quelques jours seulement à l'air libre.</p>`,
      quiz: [
        {q:"Les roches endogènes se forment à partir de...", options:["l'érosion du sol","le magma en fusion","les débris végétaux","l'eau de pluie"], correct:1, exp:"Les roches endogènes (magmatiques) proviennent du refroidissement du magma."},
        {q:"Une roche volcanique, comme le basalte, se forme lors d'un refroidissement...", options:["rapide, en surface","lent, en profondeur","instantané, sous l'eau","aucun refroidissement n'est nécessaire"], correct:0, exp:"Les roches volcaniques se forment quand le magma refroidit rapidement à la surface."},
        {q:"Une roche plutonique, comme le granite, se forme lors d'un refroidissement...", options:["rapide et en surface","lent et en profondeur","identique à celui du basalte","au contact de l'air uniquement"], correct:1, exp:"Les roches plutoniques se forment par refroidissement lent, en profondeur."},
        {q:"Pourquoi le granite a-t-il de gros cristaux visibles ?", options:["Refroidissement rapide","Refroidissement lent, laissant le temps aux cristaux de grandir","Il n'a pas de cristaux","À cause de la pluie"], correct:1, exp:"Le refroidissement lent en profondeur permet aux cristaux de bien se former et de grandir."},
        {q:"Le magma est...", options:["une roche solide froide","une roche en fusion, liquide et très chaude","de l'eau souterraine","du sable compacté"], correct:1, exp:"Le magma est une roche en fusion présente en profondeur dans la Terre."}
      ]
    },
    {
      id: "s4",
      title: "La dégradation des roches endogènes",
      content: `<p>Une fois formées et exposées à la surface, les roches endogènes subissent une <strong>dégradation</strong> progressive appelée <strong>altération</strong>, sous l'effet de plusieurs facteurs : les variations de température (dilatation/contraction qui fissure la roche), l'eau (gel/dégel qui élargit les fissures, dissolution de certains minéraux), et l'action des êtres vivants (racines des plantes qui s'infiltrent dans les fissures, micro-organismes).</p>
      <p>Cette altération transforme progressivement la roche compacte en <strong>fragments</strong> de plus en plus petits (blocs, graviers, sables, puis argiles), qui participent ensuite à la formation du sol.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Le phénomène de <strong>gélifraction</strong> (ou gel-dégel) est particulièrement efficace pour fragmenter les roches : l'eau s'infiltre dans une fissure, gèle (et augmente de volume en gelant), ce qui élargit la fissure ; répété de nombreuses fois, ce cycle finit par faire éclater la roche.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple concret : un bloc de granite exposé en montagne subit, au fil des saisons, des cycles répétés de gel et dégel de l'eau infiltrée dans ses fissures naturelles. Chaque cycle élargit légèrement les fissures, jusqu'à ce que des morceaux entiers du bloc se détachent. Ces fragments continuent ensuite à se dégrader sous l'effet de la pluie et du vent, devenant progressivement des graviers puis des sables, qui participeront à la formation d'un futur sol à cet endroit.</p>`,
      quiz: [
        {q:"L'altération des roches désigne...", options:["leur formation initiale","leur dégradation progressive en surface","leur fusion en profondeur","leur disparition instantanée"], correct:1, exp:"L'altération est le processus de dégradation progressive des roches exposées en surface."},
        {q:"La gélifraction est un phénomène lié à...", options:["la chaleur uniquement","le cycle du gel et du dégel de l'eau","les êtres vivants uniquement","le vent seul"], correct:1, exp:"La gélifraction résulte du gel de l'eau infiltrée dans les fissures, qui élargit ces fissures en augmentant de volume."},
        {q:"Les racines des plantes peuvent-elles contribuer à la dégradation des roches ?", options:["Non, jamais","Oui, en s'infiltrant dans les fissures et en les élargissant","Seulement sous l'eau","Seulement en hiver"], correct:1, exp:"Les racines qui s'infiltrent dans les fissures des roches contribuent à leur fragmentation progressive."},
        {q:"L'altération d'une roche produit finalement...", options:["du magma","des fragments de plus en plus petits (graviers, sables, argiles)","de l'eau pure","rien de particulier"], correct:1, exp:"L'altération fragmente progressivement la roche en morceaux de plus en plus petits."},
        {q:"Les fragments issus de l'altération des roches participent à...", options:["la formation du sol","la fusion du magma","la formation des nuages","aucun processus particulier"], correct:0, exp:"Ces fragments constituent la matière minérale de base qui participe à la formation du sol."}
      ]
    },
    {
      id: "s5",
      title: "La formation du sol",
      content: `<p>Le <strong>sol</strong> se forme à partir de la <strong>roche mère</strong> (la roche sous-jacente altérée) qui se fragmente progressivement, combinée à de la <strong>matière organique</strong> (débris de végétaux et d'animaux décomposés par des micro-organismes, formant l'<strong>humus</strong>).</p>
      <p>Un sol se compose donc de plusieurs éléments mélangés : des fragments minéraux (issus de l'altération de la roche mère), de la matière organique (humus), de l'eau, de l'air, et de nombreux organismes vivants (vers de terre, bactéries, champignons, insectes) qui participent activement à sa transformation continue.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Un <strong>profil de sol</strong> (une coupe verticale) fait apparaître plusieurs couches, appelées <strong>horizons</strong> : l'horizon supérieur, riche en humus (souvent foncé), l'horizon intermédiaire, et l'horizon profond proche de la roche mère non encore transformée. La formation complète d'un sol fertile est un processus très lent, qui peut prendre plusieurs siècles.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple : en forêt tropicale ivoirienne, les feuilles mortes tombées au sol sont rapidement décomposées par les micro-organismes et les insectes (grâce à la chaleur et l'humidité), formant un humus riche qui se mélange aux fragments minéraux issus de l'altération de la roche mère sous-jacente. Cette combinaison donne des sols souvent fertiles, mais qui peuvent s'appauvrir rapidement s'ils sont déforestés, car la matière organique n'est alors plus renouvelée en continu.</p>`,
      quiz: [
        {q:"Le sol se forme à partir de...", options:["uniquement de l'eau","la roche mère altérée et de la matière organique","uniquement de l'air","le magma directement"], correct:1, exp:"Le sol résulte de la combinaison de fragments de roche mère altérée et de matière organique (humus)."},
        {q:"L'humus est...", options:["une roche magmatique","la matière organique issue de la décomposition des végétaux et animaux","un type de sable","de l'eau souterraine"], correct:1, exp:"L'humus provient de la décomposition de la matière organique (débris végétaux et animaux)."},
        {q:"Qui décompose la matière organique pour former l'humus ?", options:["Le vent uniquement","Des micro-organismes (bactéries, champignons)","La lumière du soleil seule","Personne, c'est spontané"], correct:1, exp:"Ce sont des micro-organismes (bactéries, champignons) qui décomposent la matière organique."},
        {q:"Un profil de sol montre...", options:["une seule couche uniforme","plusieurs couches appelées horizons","uniquement de la roche","uniquement de l'eau"], correct:1, exp:"Un profil de sol révèle plusieurs horizons superposés, de la surface riche en humus jusqu'à la roche mère."},
        {q:"La formation complète d'un sol fertile est un processus...", options:["instantané","très lent, pouvant prendre plusieurs siècles","qui dure un jour","impossible dans la nature"], correct:1, exp:"La formation d'un sol fertile est un processus très lent, qui peut prendre plusieurs siècles."}
      ]
    },
    {
      id: "s6",
      title: "Les textures des sols",
      content: `<p>La <strong>texture</strong> d'un sol dépend de la proportion de trois types de particules minérales qu'il contient : le <strong>sable</strong> (grosses particules, laisse bien passer l'eau), le <strong>limon</strong> (particules moyennes), et l'<strong>argile</strong> (très petites particules, retient bien l'eau mais draine mal).</p>
      <p>On distingue ainsi des sols <strong>sableux</strong> (drainent vite, se dessèchent rapidement), des sols <strong>argileux</strong> (retiennent l'eau, deviennent collants et lourds quand ils sont humides), et des sols <strong>limoneux</strong> ou <strong>équilibrés</strong> (un bon mélange, souvent les plus fertiles pour l'agriculture).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On peut déterminer approximativement la texture d'un sol par un test simple : prendre un peu de terre humide dans la main et essayer d'en faire un boudin. Si elle s'effrite (ne tient pas), le sol est sableux ; si elle forme un boudin souple et collant, le sol est argileux ; entre les deux, il est limoneux.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple pratique pour un agriculteur : un sol trop sableux draine l'eau trop vite et nécessite des arrosages fréquents, tandis qu'un sol trop argileux retient l'eau en excès, ce qui peut asphyxier les racines des plantes en cas de fortes pluies. Un sol de texture équilibrée (mélange de sable, limon et argile), comme on en trouve dans de nombreuses zones agricoles fertiles, offre le meilleur compromis : il retient assez d'eau pour les plantes tout en laissant l'excès s'écouler correctement.</p>`,
      quiz: [
        {q:"Un sol sableux se caractérise par...", options:["une bonne rétention d'eau","un bon drainage mais un dessèchement rapide","une texture collante","l'absence totale d'eau"], correct:1, exp:"Les grosses particules de sable laissent l'eau s'écouler facilement, d'où un drainage rapide mais un séchage rapide aussi."},
        {q:"Un sol argileux se caractérise par...", options:["un excellent drainage","une bonne rétention d'eau mais un drainage difficile","l'absence de particules","une texture toujours sèche"], correct:1, exp:"Les particules très fines de l'argile retiennent bien l'eau mais la laissent mal s'écouler."},
        {q:"Quel type de sol est généralement le plus fertile pour l'agriculture ?", options:["Un sol purement sableux","Un sol purement argileux","Un sol limoneux/équilibré (mélange)","Aucun sol n'est plus fertile qu'un autre"], correct:2, exp:"Un sol équilibré, mélangeant sable, limon et argile, offre généralement le meilleur compromis pour l'agriculture."},
        {q:"Comment teste-t-on simplement la texture d'un sol ?", options:["En le goûtant","En essayant d'en former un boudin avec de la terre humide","En le pesant","En le brûlant"], correct:1, exp:"Le test du boudin (former un boudin de terre humide dans la main) permet d'estimer si un sol est sableux, argileux ou limoneux."},
        {q:"Les particules les plus fines d'un sol sont celles de...", options:["sable","limon","argile","gravier"], correct:2, exp:"L'argile est constituée des particules minérales les plus fines du sol."}
      ]
    },
    {
      id: "s7",
      title: "Les maladies liées à l'eau : identification",
      content: `<p>L'eau, si elle n'est pas propre, peut transmettre de nombreuses <strong>maladies</strong>. On distingue notamment le <strong>choléra</strong> et la <strong>fièvre typhoïde</strong> (causées par des bactéries présentes dans une eau souillée par des matières fécales), et le <strong>paludisme</strong> (transmis par les moustiques qui se reproduisent dans les eaux stagnantes).</p>
      <p>Ces maladies se manifestent généralement par des symptômes comme la diarrhée, les vomissements, la fièvre, la déshydratation, qui peuvent être graves voire mortels sans traitement rapide, en particulier chez les jeunes enfants.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> On identifie une eau potentiellement dangereuse par plusieurs signes : présence de matières en suspension, couleur ou odeur anormale, proximité d'une source de pollution (latrines, déchets, eaux usées). Mais attention, une eau qui paraît claire et propre à l'œil nu peut néanmoins être contaminée par des micro-organismes invisibles.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de chaîne de transmission : dans un village sans système d'assainissement adapté, les matières fécales contaminées peuvent atteindre le puits d'eau potable par ruissellement lors de fortes pluies. Une personne qui boit cette eau sans la traiter peut alors contracter le choléra, dont les symptômes (diarrhées sévères et vomissements) apparaissent en quelques heures à quelques jours. Sans réhydratation rapide, la déshydratation qui en résulte peut devenir mortelle, particulièrement chez les enfants et les personnes âgées.</p>`,
      quiz: [
        {q:"Le choléra est causé par...", options:["des moustiques","des bactéries présentes dans une eau souillée","le froid","la chaleur du soleil"], correct:1, exp:"Le choléra est une maladie bactérienne transmise par une eau contaminée par des matières fécales."},
        {q:"Le paludisme est transmis par...", options:["l'eau directement bue","les moustiques qui se reproduisent dans les eaux stagnantes","l'air uniquement","le contact avec la peau"], correct:1, exp:"Le paludisme est transmis par la piqûre de moustiques qui se reproduisent dans les eaux stagnantes."},
        {q:"Une eau qui paraît claire à l'œil nu peut-elle être dangereuse ?", options:["Non, jamais","Oui, elle peut contenir des micro-organismes invisibles","Seulement si elle a une odeur","Seulement si elle est colorée"], correct:1, exp:"Des micro-organismes pathogènes invisibles peuvent contaminer une eau apparemment claire."},
        {q:"Quel symptôme est fréquent dans les maladies liées à l'eau contaminée ?", options:["La toux sèche","La diarrhée et les vomissements","Les douleurs articulaires uniquement","La perte de cheveux"], correct:1, exp:"Diarrhées et vomissements sont des symptômes très fréquents des maladies hydriques."},
        {q:"Pourquoi les jeunes enfants sont-ils plus vulnérables à ces maladies ?", options:["Ils boivent plus d'eau que les adultes","La déshydratation liée à la diarrhée les affecte plus rapidement et gravement","Ils sont immunisés naturellement","Cela ne les concerne pas"], correct:1, exp:"Les jeunes enfants se déshydratent plus vite et plus dangereusement en cas de diarrhée sévère."}
      ]
    },
    {
      id: "s8",
      title: "La lutte contre les maladies liées à l'eau",
      content: `<p>Pour lutter contre les maladies liées à l'eau, plusieurs mesures sont essentielles : <strong>traiter l'eau</strong> avant de la consommer (voir la leçon suivante), <strong>assainir</strong> l'environnement (latrines propres et éloignées des points d'eau, évacuation correcte des déchets), <strong>lutter contre les moustiques</strong> (moustiquaires imprégnées, élimination des eaux stagnantes) pour prévenir le paludisme, et adopter de bonnes pratiques d'<strong>hygiène</strong> (lavage des mains, hygiène alimentaire).</p>
      <p>La <strong>vaccination</strong> existe aussi contre certaines maladies liées à l'eau (comme la fièvre typhoïde), en complément de ces mesures préventives.</p>
      <p><strong>🔎 Pour aller plus loin :</strong> La prévention est toujours plus efficace et moins coûteuse que le traitement d'une maladie déjà déclarée. C'est pourquoi les campagnes de sensibilisation sur l'hygiène de l'eau et de l'assainissement sont une priorité de santé publique, en particulier dans les zones où l'accès à l'eau potable reste difficile.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de plan d'action pour une communauté villageoise : construire des latrines éloignées d'au moins 30 mètres du point d'eau potable (pour éviter toute infiltration de contamination), organiser le nettoyage régulier des alentours des points d'eau pour éliminer les eaux stagnantes propices aux moustiques, distribuer des moustiquaires imprégnées pour les nuits, et organiser des séances de sensibilisation au lavage des mains avec du savon avant les repas et après être allé aux toilettes.</p>`,
      quiz: [
        {q:"Quelle mesure aide à prévenir le paludisme ?", options:["Boire plus d'eau","Éliminer les eaux stagnantes et utiliser des moustiquaires","Manger plus de sucre","Éviter de se laver"], correct:1, exp:"Éliminer les eaux stagnantes (lieu de reproduction des moustiques) et utiliser des moustiquaires réduit fortement le risque de paludisme."},
        {q:"Où doivent être construites les latrines par rapport aux points d'eau ?", options:["Le plus près possible","Éloignées, pour éviter toute contamination","Directement au-dessus du puits","Peu importe l'emplacement"], correct:1, exp:"Les latrines doivent être suffisamment éloignées des points d'eau pour éviter toute infiltration de matières contaminantes."},
        {q:"Existe-t-il un vaccin contre certaines maladies liées à l'eau ?", options:["Non, aucun vaccin n'existe","Oui, par exemple contre la fièvre typhoïde","Seulement contre le rhume","Uniquement pour les animaux"], correct:1, exp:"Des vaccins existent contre certaines maladies liées à l'eau, comme la fièvre typhoïde."},
        {q:"Le lavage des mains est une mesure de...", options:["traitement de l'eau","hygiène préventive","vaccination","aucune de ces réponses"], correct:1, exp:"Le lavage des mains est une mesure d'hygiène qui prévient la transmission de nombreuses maladies."},
        {q:"Pourquoi la prévention est-elle préférable au traitement ?", options:["Elle est plus coûteuse","Elle est généralement plus efficace et moins coûteuse que soigner une maladie déjà déclarée","Elle n'a aucun avantage","Le traitement est toujours plus simple"], correct:1, exp:"Prévenir une maladie coûte généralement moins cher et évite les souffrances liées à la maladie elle-même."}
      ]
    },
    {
      id: "s9",
      title: "Le traitement de l'eau souillée",
      content: `<p>Pour rendre une eau souillée potable, on utilise plusieurs techniques, souvent combinées : la <strong>décantation</strong> (laisser reposer l'eau pour que les particules lourdes se déposent au fond), la <strong>filtration</strong> (faire passer l'eau à travers un filtre, par exemple du sable, du charbon actif ou un tissu propre, pour retenir les impuretés), et la <strong>désinfection</strong> (éliminer les micro-organismes pathogènes).</p>
      <p>La désinfection peut se faire par <strong>ébullition</strong> (faire bouillir l'eau au moins quelques minutes, ce qui tue la plupart des micro-organismes), par <strong>chloration</strong> (ajout de quelques gouttes d'eau de Javel diluée ou de comprimés de chlore), ou par exposition aux <strong>rayons UV du soleil</strong> (méthode SODIS : eau claire dans une bouteille plastique transparente exposée au soleil plusieurs heures).</p>
      <p><strong>🔎 Pour aller plus loin :</strong> Ces techniques doivent souvent être combinées : par exemple, décanter puis filtrer une eau trouble avant de la désinfecter, car la présence de particules en suspension peut réduire l'efficacité de la chloration ou des UV en « protégeant » certains micro-organismes de leur action.</p>
      <h3>📝 Explication détaillée et exemple corrigé</h3>
      <p>Exemple de procédure complète pour traiter une eau de rivière trouble : 1) Laisser reposer l'eau plusieurs heures dans un récipient pour la décantation (les particules lourdes se déposent au fond) ; 2) Verser délicatement l'eau claire du dessus à travers un filtre (tissu propre, ou filtre à sable) pour retenir les particules restantes ; 3) Faire bouillir cette eau filtrée pendant au moins 3 minutes, ou ajouter quelques gouttes d'eau de Javel diluée adaptée à la consommation, pour éliminer les micro-organismes pathogènes restants. L'eau est alors prête à être consommée en toute sécurité.</p>`,
      quiz: [
        {q:"La décantation consiste à...", options:["faire bouillir l'eau","laisser reposer l'eau pour que les particules lourdes se déposent","ajouter du chlore","exposer l'eau au soleil"], correct:1, exp:"La décantation utilise la gravité : les particules lourdes se déposent au fond avec le temps."},
        {q:"La méthode SODIS pour désinfecter l'eau utilise...", options:["le chlore","l'exposition aux rayons UV du soleil","l'ébullition","le froid"], correct:1, exp:"La méthode SODIS expose l'eau claire aux rayons UV du soleil pendant plusieurs heures pour la désinfecter."},
        {q:"Combien de temps faut-il faire bouillir l'eau pour la désinfecter efficacement ?", options:["Quelques secondes","Au moins quelques minutes","24 heures","Cela n'a aucun effet"], correct:1, exp:"Il faut faire bouillir l'eau au moins quelques minutes pour éliminer la plupart des micro-organismes pathogènes."},
        {q:"Pourquoi filtrer l'eau avant de la désinfecter chimiquement ?", options:["Ce n'est jamais nécessaire","Les particules en suspension peuvent réduire l'efficacité de la désinfection","Cela rend l'eau plus trouble","Cela n'a aucun rapport"], correct:1, exp:"Les particules en suspension peuvent protéger certains micro-organismes de l'action du chlore ou des UV, réduisant l'efficacité de la désinfection."},
        {q:"La chloration de l'eau consiste à...", options:["ajouter du sel","ajouter du chlore (eau de Javel diluée ou comprimés)","faire bouillir l'eau","filtrer avec du sable uniquement"], correct:1, exp:"La chloration utilise du chlore (sous forme d'eau de Javel diluée adaptée ou de comprimés) pour désinfecter l'eau."}
      ]
    }
  ]
}

};

if (typeof module !== "undefined") module.exports = COURSES;
