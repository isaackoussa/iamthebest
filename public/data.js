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
      title: "Nombres relatifs",
      content: `<p>Un <strong>nombre relatif</strong> est un nombre précédé d'un signe + ou −. Les nombres positifs sont supérieurs à 0, les nombres négatifs sont inférieurs à 0.</p>
      <p><strong>Addition :</strong> pour additionner deux relatifs de même signe, on additionne leurs distances à zéro et on garde le signe commun. Pour additionner deux relatifs de signes différents, on soustrait la plus petite distance à zéro de la plus grande et on garde le signe du nombre qui a la plus grande distance à zéro.</p>
      <p>Exemple : (+5) + (−8) = −3 car 8 − 5 = 3 et −8 a la plus grande distance à zéro.</p>
      <p><strong>Soustraction :</strong> soustraire un nombre relatif revient à ajouter son opposé. (+5) − (−8) = (+5) + (+8) = +13.</p>
      <p><strong>Multiplication et division :</strong> le produit (ou le quotient) de deux nombres de même signe est positif ; le produit (ou le quotient) de deux nombres de signes différents est négatif.</p>`,
      quiz: [
        {q:"Que vaut (+7) + (−12) ?", options:["+19","−5","+5","−19"], correct:1, exp:"12 − 7 = 5, et −12 a la plus grande distance à zéro donc le résultat est négatif : −5."},
        {q:"Que vaut (−4) − (−9) ?", options:["−13","+5","−5","+13"], correct:1, exp:"Soustraire −9 revient à ajouter +9 : (−4) + (+9) = +5."},
        {q:"Que vaut (−6) × (−3) ?", options:["−18","+18","−9","+9"], correct:1, exp:"Deux nombres de même signe (négatif × négatif) donnent un résultat positif : 18."},
        {q:"Que vaut (+15) ÷ (−5) ?", options:["+3","−3","−10","+10"], correct:1, exp:"Signes différents donc résultat négatif : 15 ÷ 5 = 3, donc −3."},
        {q:"Quel est l'opposé de −8 ?", options:["8","−8","0","1/8"], correct:0, exp:"L'opposé de −8 est +8 (même distance à zéro, signe contraire)."}
      ]
    },
    {
      id: "m2",
      title: "Puissances",
      content: `<p>Une <strong>puissance</strong> est une écriture simplifiée d'un produit de facteurs identiques. Pour un nombre a et un entier n : aⁿ = a × a × ... × a (n fois). Le nombre n est appelé l'exposant.</p>
      <p><strong>Règles de calcul :</strong> aⁿ × aᵐ = aⁿ⁺ᵐ (on additionne les exposants) ; aⁿ ÷ aᵐ = aⁿ⁻ᵐ ; (aⁿ)ᵐ = aⁿˣᵐ (on multiplie les exposants).</p>
      <p><strong>Cas particuliers :</strong> a⁰ = 1 (pour a ≠ 0) ; a¹ = a ; a⁻ⁿ = 1/aⁿ.</p>
      <p><strong>Puissances de 10 :</strong> 10ⁿ s'écrit avec n zéros après le 1 (ex : 10³ = 1000). 10⁻ⁿ = 1/10ⁿ, utile pour l'écriture scientifique des très petits ou très grands nombres.</p>`,
      quiz: [
        {q:"Que vaut 2⁴ ?", options:["8","16","6","4"], correct:1, exp:"2⁴ = 2×2×2×2 = 16."},
        {q:"Que vaut 3² × 3³ ?", options:["3⁵","3⁶","9⁵","3¹"], correct:0, exp:"On additionne les exposants de même base : 3² × 3³ = 3⁽²⁺³⁾ = 3⁵."},
        {q:"Que vaut 5⁰ ?", options:["0","5","1","indéfini"], correct:2, exp:"Tout nombre non nul élevé à la puissance 0 vaut 1."},
        {q:"Que vaut 10³ ?", options:["100","1000","30","10000"], correct:1, exp:"10³ = 1000 (trois zéros après le 1)."},
        {q:"Que vaut (2²)³ ?", options:["2⁵","2⁶","2⁹","8"], correct:1, exp:"On multiplie les exposants : (2²)³ = 2⁽²ˣ³⁾ = 2⁶ = 64."}
      ]
    },
    {
      id: "m3",
      title: "Fractions",
      content: `<p>Une <strong>fraction</strong> a/b représente une partie d'un tout, où b (dénominateur) ne doit jamais être nul.</p>
      <p><strong>Addition/soustraction :</strong> il faut d'abord réduire les fractions au même dénominateur, puis additionner ou soustraire les numérateurs. Ex : 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2.</p>
      <p><strong>Multiplication :</strong> on multiplie les numérateurs entre eux et les dénominateurs entre eux : a/b × c/d = (a×c)/(b×d).</p>
      <p><strong>Division :</strong> diviser par une fraction revient à multiplier par son inverse : a/b ÷ c/d = a/b × d/c.</p>
      <p>Une fraction est <strong>irréductible</strong> lorsqu'elle ne peut plus être simplifiée (numérateur et dénominateur n'ont plus de diviseur commun autre que 1).</p>`,
      quiz: [
        {q:"Que vaut 1/4 + 1/2 ?", options:["2/6","3/4","1/6","2/4"], correct:1, exp:"1/2 = 2/4, donc 1/4 + 2/4 = 3/4."},
        {q:"Que vaut 2/3 × 3/5 ?", options:["6/15","5/8","6/8","2/5"], correct:0, exp:"On multiplie numérateurs et dénominateurs : (2×3)/(3×5) = 6/15 (soit 2/5 simplifié)."},
        {q:"Que vaut 3/4 ÷ 1/2 ?", options:["3/8","3/2","6/4","1/2"], correct:1, exp:"Diviser par 1/2 revient à multiplier par 2 : 3/4 × 2 = 6/4 = 3/2."},
        {q:"Quelle fraction est irréductible ?", options:["4/8","6/9","5/7","10/15"], correct:2, exp:"5 et 7 n'ont aucun diviseur commun autre que 1, contrairement aux autres."},
        {q:"Que vaut 5/6 − 1/3 ?", options:["4/3","1/2","4/6","1/6"], correct:1, exp:"1/3 = 2/6, donc 5/6 − 2/6 = 3/6 = 1/2."}
      ]
    },
    {
      id: "m4",
      title: "Calcul littéral",
      content: `<p>Le <strong>calcul littéral</strong> consiste à manipuler des expressions contenant des lettres (comme x) représentant des nombres inconnus.</p>
      <p><strong>Développer</strong> une expression, c'est transformer un produit en somme, grâce à la distributivité : a(b + c) = ab + ac. Avec la double distributivité : (a+b)(c+d) = ac + ad + bc + bd.</p>
      <p><strong>Réduire</strong> une expression, c'est regrouper les termes semblables (ceux qui ont la même lettre au même exposant) pour simplifier l'écriture. Ex : 3x + 5x − 2 = 8x − 2.</p>
      <p><strong>Factoriser</strong>, c'est l'opération inverse du développement : transformer une somme en produit, en cherchant un facteur commun. Ex : 6x + 9 = 3(2x + 3).</p>`,
      quiz: [
        {q:"Développer 3(x + 4) donne :", options:["3x + 4","3x + 12","7x","x + 12"], correct:1, exp:"3(x+4) = 3×x + 3×4 = 3x + 12."},
        {q:"Réduire 5x + 2x − x donne :", options:["6x","5x","7x","4x"], correct:0, exp:"5x + 2x − x = (5+2−1)x = 6x."},
        {q:"Développer (x+2)(x+3) donne :", options:["x²+5x+6","x²+6","2x+5","x²+5x+5"], correct:0, exp:"(x+2)(x+3) = x²+3x+2x+6 = x²+5x+6."},
        {q:"Factoriser 4x + 8 donne :", options:["4(x+2)","2(2x+4)","4x(1+2)","x(4+8)"], correct:0, exp:"4 est le facteur commun : 4x + 8 = 4(x + 2)."},
        {q:"Pour x = 2, la valeur de 3x + 1 est :", options:["5","6","7","9"], correct:2, exp:"3×2 + 1 = 6 + 1 = 7."}
      ]
    },
    {
      id: "m5",
      title: "Théorème de Thalès",
      content: `<p>Le <strong>théorème de Thalès</strong> s'applique dans une configuration de deux droites sécantes coupées par deux droites parallèles (souvent deux triangles emboîtés partageant un sommet).</p>
      <p>Si dans un triangle ABC, un point M est sur (AB), un point N est sur (AC), et si (MN) est parallèle à (BC), alors : AM/AB = AN/AC = MN/BC.</p>
      <p>Ce théorème permet de <strong>calculer une longueur manquante</strong> lorsqu'on connaît les autres, à condition d'avoir bien identifié le parallélisme et les sommets correspondants.</p>
      <p>La <strong>réciproque</strong> du théorème de Thalès permet, à l'inverse, de démontrer que deux droites sont parallèles si les rapports de longueurs sont égaux.</p>`,
      quiz: [
        {q:"Le théorème de Thalès nécessite deux droites :", options:["perpendiculaires","parallèles","sécantes en deux points","de même longueur"], correct:1, exp:"Le théorème s'applique quand deux droites sont parallèles dans une configuration de triangles emboîtés."},
        {q:"Si AM/AB = AN/AC = MN/BC, alors (MN) et (BC) sont :", options:["perpendiculaires","parallèles","confondues","sécantes"], correct:1, exp:"L'égalité des rapports correspond à la conclusion du théorème : les droites sont parallèles."},
        {q:"La réciproque de Thalès sert à :", options:["calculer une aire","démontrer un parallélisme","calculer un angle","démontrer une perpendicularité"], correct:1, exp:"La réciproque permet de prouver que deux droites sont parallèles à partir de l'égalité des rapports."},
        {q:"Dans le théorème de Thalès, on compare des :", options:["angles","aires","longueurs","volumes"], correct:2, exp:"Le théorème de Thalès établit des égalités de rapports de longueurs."},
        {q:"Si AM/AB = 1/3, alors MN/BC vaut :", options:["3","1/3","2/3","1"], correct:1, exp:"Tous les rapports sont égaux dans la configuration de Thalès, donc MN/BC = AM/AB = 1/3."}
      ]
    },
    {
      id: "m6",
      title: "Théorème de Pythagore",
      content: `<p>Dans un <strong>triangle rectangle</strong>, le théorème de Pythagore relie les longueurs des trois côtés : le carré de l'hypoténuse (le côté opposé à l'angle droit, le plus long côté) est égal à la somme des carrés des deux autres côtés.</p>
      <p>Si ABC est rectangle en A, alors : BC² = AB² + AC².</p>
      <p>Ce théorème permet de <strong>calculer la longueur d'un côté</strong> manquant dans un triangle rectangle, à condition de connaître les deux autres côtés.</p>
      <p>La <strong>réciproque</strong> du théorème de Pythagore permet de démontrer qu'un triangle est rectangle : si l'égalité BC² = AB² + AC² est vérifiée, alors le triangle est rectangle en A.</p>`,
      quiz: [
        {q:"Le théorème de Pythagore s'applique dans un triangle :", options:["isocèle","équilatéral","rectangle","quelconque"], correct:2, exp:"Ce théorème est spécifique aux triangles rectangles."},
        {q:"Si ABC est rectangle en A, la formule est :", options:["AB²=BC²+AC²","BC²=AB²+AC²","AC²=AB²+BC²","BC²=AB²−AC²"], correct:1, exp:"L'hypoténuse BC (opposée à l'angle droit en A) est reliée par BC² = AB² + AC²."},
        {q:"Un triangle rectangle a un côté de 3 et un de 4. L'hypoténuse vaut :", options:["5","6","7","25"], correct:0, exp:"3² + 4² = 9 + 16 = 25 = 5², donc l'hypoténuse vaut 5."},
        {q:"La réciproque de Pythagore permet de :", options:["calculer un angle","démontrer qu'un triangle est rectangle","calculer un périmètre","démontrer un parallélisme"], correct:1, exp:"Si l'égalité des carrés est vérifiée, on peut conclure que le triangle est rectangle."},
        {q:"L'hypoténuse est toujours :", options:["le plus petit côté","le côté opposé à l'angle droit","perpendiculaire à un autre côté","égale à la somme des deux autres côtés"], correct:1, exp:"L'hypoténuse est le côté le plus long, opposé à l'angle droit."}
      ]
    },
    {
      id: "m7",
      title: "Équations du premier degré",
      content: `<p>Une <strong>équation</strong> est une égalité contenant une inconnue (souvent x), qu'il faut résoudre, c'est-à-dire trouver la ou les valeurs de x qui rendent l'égalité vraie.</p>
      <p>Pour résoudre une équation du premier degré, on isole x en appliquant les mêmes opérations aux deux membres de l'égalité :</p>
      <p>- On peut <strong>ajouter ou soustraire</strong> le même nombre des deux côtés.<br>
      - On peut <strong>multiplier ou diviser</strong> les deux côtés par un même nombre non nul.</p>
      <p>Exemple : 3x + 5 = 20 → 3x = 20 − 5 → 3x = 15 → x = 15/3 → x = 5.</p>
      <p>Une équation peut avoir <strong>une seule solution</strong>, aucune solution, ou une infinité de solutions selon les cas.</p>`,
      quiz: [
        {q:"Résoudre 2x + 3 = 11 donne x =", options:["3","4","7","5"], correct:1, exp:"2x = 11 − 3 = 8, donc x = 8/2 = 4."},
        {q:"Résoudre x − 7 = 2 donne x =", options:["5","9","−5","14"], correct:1, exp:"x = 2 + 7 = 9."},
        {q:"Résoudre 5x = 30 donne x =", options:["25","35","6","150"], correct:2, exp:"x = 30/5 = 6."},
        {q:"Pour isoler x dans 4x − 2 = 10, la première étape est :", options:["diviser par 4","ajouter 2 aux deux membres","soustraire 4","multiplier par 2"], correct:1, exp:"On ajoute 2 aux deux membres pour obtenir 4x = 12, avant de diviser par 4."},
        {q:"Résoudre 3x + 1 = x + 9 donne x =", options:["2","4","5","8"], correct:1, exp:"3x − x = 9 − 1 → 2x = 8 → x = 4."}
      ]
    },
    {
      id: "m8",
      title: "Racines carrées",
      content: `<p>La <strong>racine carrée</strong> d'un nombre positif a, notée √a, est le nombre positif dont le carré est égal à a. Par exemple, √9 = 3 car 3² = 9.</p>
      <p><strong>Propriétés utiles :</strong> √(a×b) = √a × √b (pour a et b positifs) ; √(a/b) = √a / √b (pour b non nul).</p>
      <p>Ces propriétés permettent de <strong>simplifier une racine carrée</strong> en la décomposant en produit d'un carré parfait et d'un autre facteur. Exemple : √50 = √(25×2) = √25 × √2 = 5√2.</p>
      <p>Attention : √a n'est définie que pour a ≥ 0, et en général √(a+b) ≠ √a + √b.</p>`,
      quiz: [
        {q:"Que vaut √25 ?", options:["5","12,5","625","50"], correct:0, exp:"5² = 25, donc √25 = 5."},
        {q:"Que vaut √4 × √9 ?", options:["√36 = 6","√13","36","13"], correct:0, exp:"√4 × √9 = √(4×9) = √36 = 6 (on retrouve aussi 2×3=6)."},
        {q:"Simplifier √50 donne :", options:["25√2","5√2","10√5","2√25"], correct:1, exp:"√50 = √(25×2) = √25×√2 = 5√2."},
        {q:"√a est définie pour :", options:["tout nombre a","a positif ou nul","a négatif uniquement","a différent de 1"], correct:1, exp:"La racine carrée n'est définie que pour les nombres positifs ou nuls."},
        {q:"√9 + √16 est égal à :", options:["√25 = 5","7","25","3+4=7 mais pas √25"], correct:1, exp:"On calcule d'abord chaque racine séparément : √9=3 et √16=4, donc 3+4=7 (attention, ce n'est pas égal à √(9+16))."}
      ]
    },
    {
      id: "m9",
      title: "Statistiques",
      content: `<p>Une étude statistique porte sur une <strong>population</strong> et un <strong>caractère</strong> étudié. Chaque valeur du caractère a un <strong>effectif</strong> (nombre de fois qu'elle apparaît).</p>
      <p>La <strong>fréquence</strong> d'une valeur est le rapport entre son effectif et l'effectif total, souvent exprimée en pourcentage : fréquence = effectif / effectif total.</p>
      <p>La <strong>moyenne</strong> d'une série de données se calcule en additionnant toutes les valeurs puis en divisant par le nombre total de valeurs (ou, avec des effectifs, en pondérant chaque valeur par son effectif).</p>
      <p>Les données peuvent être représentées par un <strong>diagramme</strong> (bâtons, circulaire) pour faciliter la lecture et la comparaison.</p>`,
      quiz: [
        {q:"L'effectif total est :", options:["la plus grande valeur de la série","la somme de tous les effectifs","la moyenne des valeurs","le nombre de catégories"], correct:1, exp:"L'effectif total est la somme des effectifs de toutes les valeurs de la série."},
        {q:"La fréquence d'une valeur se calcule par :", options:["effectif × effectif total","effectif / effectif total","effectif total / effectif","effectif + effectif total"], correct:1, exp:"La fréquence est le rapport de l'effectif de la valeur sur l'effectif total."},
        {q:"Pour calculer une moyenne, on divise la somme des valeurs par :", options:["la plus grande valeur","le nombre de valeurs","la fréquence","zéro"], correct:1, exp:"La moyenne est la somme des valeurs divisée par le nombre de valeurs (ou d'effectifs)."},
        {q:"Une fréquence est souvent exprimée en :", options:["kilogrammes","pourcentage","mètres","degrés"], correct:1, exp:"On exprime fréquemment une fréquence sous forme de pourcentage."},
        {q:"Pour comparer visuellement des catégories, on peut utiliser :", options:["un diagramme circulaire","une équation","une racine carrée","un théorème"], correct:0, exp:"Un diagramme (bâtons ou circulaire) permet de visualiser et comparer des données."}
      ]
    },
    {
      id: "m10",
      title: "Angles et polygones",
      content: `<p>Dans un <strong>triangle</strong>, la somme des trois angles est toujours égale à 180°.</p>
      <p>Dans un <strong>quadrilatère</strong> (4 côtés), la somme des angles est égale à 360°. Plus généralement, dans un polygone à n côtés, la somme des angles vaut (n − 2) × 180°.</p>
      <p><strong>Angles particuliers</strong> : deux angles sont <strong>complémentaires</strong> si leur somme fait 90°, <strong>supplémentaires</strong> si leur somme fait 180°. Deux angles opposés par le sommet sont toujours égaux.</p>
      <p>Lorsque deux droites parallèles sont coupées par une sécante, on retrouve des angles égaux (angles alternes-internes, angles correspondants).</p>`,
      quiz: [
        {q:"La somme des angles d'un triangle est :", options:["90°","180°","270°","360°"], correct:1, exp:"La somme des angles d'un triangle vaut toujours 180°."},
        {q:"La somme des angles d'un quadrilatère est :", options:["180°","270°","360°","400°"], correct:2, exp:"Un quadrilatère peut se décomposer en deux triangles, soit 2×180° = 360°."},
        {q:"Deux angles complémentaires ont une somme de :", options:["90°","180°","360°","45°"], correct:0, exp:"Par définition, deux angles complémentaires ont une somme égale à 90°."},
        {q:"Deux angles supplémentaires ont une somme de :", options:["90°","180°","270°","100°"], correct:1, exp:"Deux angles supplémentaires ont une somme égale à 180°."},
        {q:"Deux angles opposés par le sommet sont :", options:["complémentaires","supplémentaires","égaux","toujours droits"], correct:2, exp:"Les angles opposés par le sommet sont toujours égaux entre eux."}
      ]
    },
    {
      id: "m11",
      title: "Cosinus dans le triangle rectangle",
      content: `<p>Dans un <strong>triangle rectangle</strong>, le cosinus d'un angle aigu est le rapport entre la longueur du côté adjacent à cet angle et la longueur de l'hypoténuse.</p>
      <p>Formule : cos(angle) = côté adjacent / hypoténuse.</p>
      <p>Cette relation permet de <strong>calculer une longueur</strong> (si on connaît l'angle et une longueur) ou de <strong>calculer un angle</strong> (si on connaît deux longueurs), à l'aide de la calculatrice.</p>
      <p>Le cosinus d'un angle est toujours compris entre 0 et 1 pour un angle aigu (entre 0° et 90°).</p>`,
      quiz: [
        {q:"Le cosinus d'un angle aigu se calcule avec :", options:["opposé/hypoténuse","adjacent/hypoténuse","opposé/adjacent","hypoténuse/adjacent"], correct:1, exp:"cos(angle) = côté adjacent / hypoténuse."},
        {q:"Le cosinus d'un angle aigu est toujours compris entre :", options:["0 et 1","−1 et 1","0 et 90","1 et 10"], correct:0, exp:"Pour un angle aigu (0°-90°), le cosinus est compris entre 0 et 1."},
        {q:"Pour calculer une longueur inconnue avec le cosinus, il faut connaître :", options:["deux longueurs seulement","un angle et une longueur","trois angles","aucune information"], correct:1, exp:"Connaissant l'angle et une longueur (souvent l'hypoténuse), on peut calculer le côté adjacent."},
        {q:"Si cos(angle) = adjacent/hypoténuse, alors adjacent =", options:["hypoténuse × cos(angle)","hypoténuse / cos(angle)","cos(angle) / hypoténuse","hypoténuse + cos(angle)"], correct:0, exp:"En multipliant les deux membres par l'hypoténuse, adjacent = hypoténuse × cos(angle)."},
        {q:"Le cosinus s'utilise dans un triangle :", options:["quelconque","rectangle","équilatéral uniquement","isocèle uniquement"], correct:1, exp:"Cette relation trigonométrique s'applique spécifiquement au triangle rectangle."}
      ]
    },
    {
      id: "m12",
      title: "Aires et volumes",
      content: `<p><strong>Aires courantes</strong> : rectangle = longueur × largeur ; triangle = (base × hauteur) / 2 ; disque = π × rayon².</p>
      <p><strong>Volume d'un prisme droit</strong> (ou d'un cylindre) = aire de la base × hauteur.</p>
      <p>Exemple : le volume d'un cylindre de rayon r et de hauteur h est V = π × r² × h.</p>
      <p>Il est important de garder des <strong>unités cohérentes</strong> : pour un volume en cm³, les longueurs doivent être en cm ; pour un volume en m³, les longueurs doivent être en m.</p>`,
      quiz: [
        {q:"L'aire d'un rectangle se calcule par :", options:["longueur + largeur","longueur × largeur","2×(longueur+largeur)","longueur / largeur"], correct:1, exp:"L'aire d'un rectangle est le produit de sa longueur par sa largeur."},
        {q:"L'aire d'un triangle se calcule par :", options:["base × hauteur","(base × hauteur)/2","base + hauteur","2×base×hauteur"], correct:1, exp:"L'aire d'un triangle est la moitié du produit de la base par la hauteur."},
        {q:"Le volume d'un prisme droit se calcule par :", options:["aire de la base + hauteur","aire de la base × hauteur","périmètre de la base × hauteur","aire de la base / hauteur"], correct:1, exp:"Le volume d'un prisme droit est le produit de l'aire de sa base par sa hauteur."},
        {q:"Le volume d'un cylindre de rayon r et hauteur h est :", options:["π×r×h","π×r²×h","2×π×r×h","π×r²+h"], correct:1, exp:"V = aire du disque de base (π×r²) × hauteur h."},
        {q:"Pour un volume en cm³, les longueurs doivent être en :", options:["m","mm","cm","km"], correct:2, exp:"Il faut garder des unités cohérentes : longueurs en cm pour un volume en cm³."}
      ]
    },
    {
      id: "m13",
      title: "Les nombres rationnels",
      content: `<p>Un <strong>nombre rationnel</strong> est un nombre qui peut s'écrire sous la forme d'un quotient a/b, où a et b sont des entiers relatifs et b est différent de 0.</p>
      <p>Tous les entiers, toutes les fractions et tous les nombres décimaux sont des nombres rationnels. Par exemple, 5 (= 5/1), −3/4 et 0,25 (= 1/4) sont des nombres rationnels.</p>
      <p>Pour <strong>comparer deux nombres rationnels</strong>, on peut les réduire au même dénominateur puis comparer leurs numérateurs, ou les convertir en écriture décimale.</p>
      <p>Sur une <strong>droite graduée</strong>, plus un nombre rationnel est grand, plus il est situé à droite.</p>`,
      quiz: [
        {q:"Un nombre rationnel s'écrit sous la forme :", options:["a×b","a/b avec b≠0","a+b","√a"], correct:1, exp:"Un nombre rationnel est un quotient a/b d'entiers relatifs, avec b différent de 0."},
        {q:"Lequel de ces nombres n'est PAS rationnel (niveau 4e, cas particulier vu en cours) ?", options:["3","−2/5","0,75","√2 (nombre non rationnel étudié plus tard)"], correct:3, exp:"√2 ne peut pas s'écrire comme un quotient exact d'entiers : ce n'est pas un rationnel (notion abordée en approfondissement)."},
        {q:"Pour comparer 2/3 et 3/4, on peut :", options:["additionner les deux fractions","les réduire au même dénominateur","les multiplier entre elles","ignorer les dénominateurs"], correct:1, exp:"Réduire au même dénominateur permet de comparer directement les numérateurs."},
        {q:"0,25 peut aussi s'écrire :", options:["1/4","1/2","2/5","4/1"], correct:0, exp:"0,25 = 25/100 = 1/4."},
        {q:"Sur une droite graduée, le nombre le plus grand est situé :", options:["le plus à gauche","le plus à droite","toujours au centre","cela dépend du signe uniquement"], correct:1, exp:"Par convention, plus un nombre est grand, plus il est placé à droite sur la droite graduée."}
      ]
    },
    {
      id: "m14",
      title: "Le cube et le pavé droit",
      content: `<p>Le <strong>cube</strong> est un solide dont les six faces sont des carrés identiques. Le <strong>pavé droit</strong> (ou parallélépipède rectangle) a six faces rectangulaires, opposées deux à deux et identiques.</p>
      <p>Le <strong>patron</strong> d'un solide est une figure plane qui, une fois découpée et pliée, permet de reconstituer ce solide.</p>
      <p>La <strong>perspective cavalière</strong> est une façon de représenter un solide en trois dimensions sur une feuille plane, en gardant les faces avant et arrière parallèles et identiques, et en traçant les arêtes fuyantes selon une direction et un angle donnés (souvent 45°, réduites de moitié).</p>
      <p><strong>Volume du pavé droit</strong> = longueur × largeur × hauteur. <strong>Volume du cube</strong> de côté c = c × c × c = c³.</p>`,
      quiz: [
        {q:"Un cube a :", options:["4 faces carrées","6 faces carrées identiques","6 faces rectangulaires différentes","8 faces"], correct:1, exp:"Un cube possède 6 faces, toutes carrées et identiques."},
        {q:"Le volume d'un pavé droit se calcule par :", options:["longueur + largeur + hauteur","longueur × largeur × hauteur","2×(longueur+largeur)","longueur × largeur"], correct:1, exp:"Le volume du pavé droit est le produit de ses trois dimensions."},
        {q:"Le volume d'un cube de côté 3 cm est :", options:["9 cm³","27 cm³","6 cm³","18 cm³"], correct:1, exp:"3³ = 3×3×3 = 27 cm³."},
        {q:"Un patron est une figure qui permet de :", options:["calculer un angle","reconstituer un solide après pliage","mesurer une masse","tracer une droite parallèle"], correct:1, exp:"Le patron, une fois découpé et plié, permet d'obtenir le solide en trois dimensions."},
        {q:"En perspective cavalière, les faces avant et arrière sont représentées :", options:["déformées","parallèles et identiques","perpendiculaires","à des échelles différentes"], correct:1, exp:"La perspective cavalière conserve les faces avant/arrière parallèles et de même forme."}
      ]
    },
    {
      id: "m15",
      title: "Proportionnalité et pourcentages",
      content: `<p>Deux grandeurs sont <strong>proportionnelles</strong> si on passe de l'une à l'autre en multipliant toujours par le même nombre, appelé <strong>coefficient de proportionnalité</strong>.</p>
      <p>Le <strong>produit en croix</strong> permet de retrouver une valeur manquante dans un tableau de proportionnalité : si a/b = c/x, alors x = (b × c) / a.</p>
      <p>Un <strong>pourcentage</strong> exprime une proportion sur 100. Calculer t % d'une quantité Q revient à calculer (t × Q) / 100.</p>
      <p>Exemple : 15 % de 80 = (15 × 80) / 100 = 12.</p>
      <p>La proportionnalité s'utilise aussi pour les <strong>échelles</strong> (cartes, plans) et les <strong>vitesses</strong> (distance = vitesse × temps).</p>`,
      quiz: [
        {q:"Deux grandeurs sont proportionnelles si :", options:["leur somme est constante","on passe de l'une à l'autre en multipliant par un même nombre","elles sont toujours égales","leur différence est nulle"], correct:1, exp:"La proportionnalité se caractérise par un coefficient multiplicateur constant entre les deux grandeurs."},
        {q:"Le produit en croix pour a/b = c/x donne x =", options:["(a×c)/b","(b×c)/a","(a×b)/c","a+b−c"], correct:1, exp:"En croisant les produits, x = (b × c) / a."},
        {q:"15 % de 80 est égal à :", options:["8","12","15","20"], correct:1, exp:"15 % de 80 = (15×80)/100 = 12."},
        {q:"Calculer t % d'une quantité Q revient à calculer :", options:["(t×Q)/100","(t+Q)/100","t×Q×100","Q/(t×100)"], correct:0, exp:"Un pourcentage t % d'une quantité Q se calcule par (t × Q) / 100."},
        {q:"La relation entre distance, vitesse et temps est :", options:["distance = vitesse + temps","distance = vitesse × temps","distance = vitesse / temps","distance = temps / vitesse"], correct:1, exp:"La distance parcourue est le produit de la vitesse par le temps de parcours."}
      ]
    },
    {
      id: "m16",
      title: "La symétrie centrale",
      content: `<p>La <strong>symétrie centrale</strong> de centre O associe à un point M un point M' tel que O soit le <strong>milieu</strong> du segment [MM'].</p>
      <p><strong>Propriétés conservées</strong> par la symétrie centrale : les longueurs, les angles, les aires, le parallélisme et l'alignement des points.</p>
      <p>L'image d'une droite par une symétrie centrale est une <strong>droite parallèle</strong> à la droite de départ. L'image d'un cercle est un cercle de même rayon.</p>
      <p>Une figure possède un <strong>centre de symétrie</strong> si elle est sa propre image par une symétrie centrale de ce point (ex : un rectangle, un losange, un cercle).</p>`,
      quiz: [
        {q:"Dans une symétrie centrale de centre O, O est :", options:["un point quelconque","le milieu du segment [MM']","toujours à l'extérieur de la figure","un sommet du triangle"], correct:1, exp:"Par définition, O est le milieu du segment reliant un point à son image."},
        {q:"La symétrie centrale conserve :", options:["seulement les angles","seulement les longueurs","les longueurs, les angles et les aires","rien de particulier"], correct:2, exp:"La symétrie centrale conserve toutes les propriétés métriques : longueurs, angles, aires."},
        {q:"L'image d'une droite par une symétrie centrale est :", options:["une droite perpendiculaire","une droite parallèle à la droite de départ","un cercle","un point"], correct:1, exp:"L'image d'une droite par symétrie centrale est toujours une droite parallèle à l'originale."},
        {q:"Un rectangle possède :", options:["aucun centre de symétrie","un centre de symétrie (le centre du rectangle)","deux centres de symétrie","un centre de symétrie sur chaque sommet"], correct:1, exp:"Le centre du rectangle (intersection des diagonales) est son centre de symétrie."},
        {q:"L'image d'un cercle par une symétrie centrale est :", options:["une droite","un cercle de rayon différent","un cercle de même rayon","un carré"], correct:2, exp:"La symétrie centrale conserve les longueurs, donc l'image d'un cercle est un cercle de même rayon."}
      ]
    },
    {
      id: "m17",
      title: "Translation et vecteurs",
      content: `<p>Une <strong>translation</strong> déplace tous les points d'une figure dans une même direction, un même sens et sur une même distance, sans la déformer ni la faire tourner.</p>
      <p>Un <strong>vecteur</strong> représente ce déplacement : il est caractérisé par une direction, un sens et une longueur (norme). On le note souvent avec une flèche, par exemple le vecteur AB.</p>
      <p>Si M' est l'image de M par la translation de vecteur AB, alors MM' a la même direction, le même sens et la même longueur que AB.</p>
      <p>La translation, comme la symétrie centrale, conserve les longueurs, les angles et les aires : c'est une transformation qui ne déforme pas les figures.</p>`,
      quiz: [
        {q:"Une translation modifie une figure en la :", options:["faisant tourner","déplaçant sans la déformer","agrandissant","réduisant"], correct:1, exp:"La translation déplace la figure dans une direction donnée, sans la déformer ni la faire tourner."},
        {q:"Un vecteur est caractérisé par :", options:["seulement sa longueur","direction, sens et longueur","seulement sa direction","sa couleur"], correct:1, exp:"Un vecteur regroupe trois informations : direction, sens et longueur (norme)."},
        {q:"Si M' est l'image de M par la translation de vecteur AB, alors MM' est :", options:["perpendiculaire à AB","de même direction, sens et longueur que AB","plus court que AB","toujours nul"], correct:1, exp:"Le déplacement MM' correspond exactement au vecteur de la translation, AB."},
        {q:"La translation conserve :", options:["rien du tout","les longueurs, les angles et les aires","seulement les angles","seulement les aires"], correct:1, exp:"Comme la symétrie centrale, la translation conserve toutes les propriétés métriques des figures."},
        {q:"Un vecteur peut être représenté par :", options:["un point isolé","une flèche","un angle","un cercle"], correct:1, exp:"On représente un vecteur par une flèche indiquant sa direction et son sens."}
      ]
    },
    {
      id: "m18",
      title: "Le cercle : propriétés et cercle inscrit",
      content: `<p>Un <strong>cercle</strong> de centre O et de rayon r est l'ensemble des points situés à la distance r du point O. Le <strong>diamètre</strong> est égal à deux fois le rayon.</p>
      <p><strong>Périmètre</strong> d'un cercle = 2 × π × r. <strong>Aire</strong> d'un disque = π × r².</p>
      <p>Le <strong>cercle circonscrit</strong> à un triangle passe par ses trois sommets ; son centre est équidistant des trois sommets. Le <strong>cercle inscrit</strong> dans un triangle est tangent aux trois côtés ; son centre est équidistant des trois côtés.</p>
      <p>Un <strong>angle inscrit</strong> dans un cercle, qui intercepte le même arc qu'un angle au centre, mesure la moitié de cet angle au centre.</p>`,
      quiz: [
        {q:"Le diamètre d'un cercle est égal à :", options:["le rayon", "deux fois le rayon","la moitié du rayon","π × rayon"], correct:1, exp:"Le diamètre est toujours le double du rayon."},
        {q:"Le périmètre d'un cercle de rayon r est :", options:["π×r","2×π×r","π×r²","4×r"], correct:1, exp:"Le périmètre (circonférence) d'un cercle se calcule par 2×π×r."},
        {q:"Le centre du cercle circonscrit à un triangle est équidistant :", options:["des trois côtés","des trois sommets","d'un seul sommet","du centre de gravité uniquement"], correct:1, exp:"Le cercle circonscrit passe par les trois sommets, donc son centre est équidistant de ces sommets."},
        {q:"Le cercle inscrit dans un triangle est :", options:["tangent aux trois côtés","passant par les trois sommets","toujours plus grand que le cercle circonscrit","situé à l'extérieur du triangle"], correct:0, exp:"Le cercle inscrit touche (est tangent à) chacun des trois côtés du triangle."},
        {q:"Un angle inscrit interceptant le même arc qu'un angle au centre mesure :", options:["le double de l'angle au centre","la moitié de l'angle au centre","le même angle que l'angle au centre","toujours 90°"], correct:1, exp:"L'angle inscrit mesure la moitié de l'angle au centre qui intercepte le même arc."}
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
      <p>Ce schéma se retrouve dans les contes, romans, nouvelles et fables, même si l'ordre peut parfois être bousculé pour créer du suspense.</p>`,
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
      <p>La description a plusieurs fonctions : informer le lecteur, créer une atmosphère, révéler la psychologie d'un personnage, ou ralentir le rythme du récit avant un moment important.</p>`,
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
      <p>Ces figures rendent un texte plus imagé, plus expressif, et permettent au lecteur de mieux ressentir ce qui est décrit.</p>`,
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
      - <strong>Active</strong> (le sujet fait l'action) ou <strong>passive</strong> (le sujet subit l'action).</p>`,
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
      <p>Le passage du discours direct à l'indirect entraîne des changements : les <strong>pronoms</strong> (je → il), les <strong>temps</strong> (présent → imparfait, futur → conditionnel) et les <strong>indicateurs de temps/lieu</strong> (demain → le lendemain, ici → là).</p>`,
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
      <p>Un bon argument s'appuie sur un <strong>exemple concret</strong> ou un fait vérifiable, ce qui le rend plus convaincant qu'une simple opinion.</p>`,
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
      <p>Connaître la classe d'un mot aide à comprendre sa fonction et à éviter des erreurs d'accord.</p>`,
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
      <p>Un même mot (ex : un nom) peut occuper différentes fonctions selon la phrase.</p>`,
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
      <p>L'alternance entre ces deux temps permet de distinguer ce qui sert de cadre (imparfait) et ce qui constitue les événements marquants (passé simple).</p>`,
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
      <p>Le subjonctif présent se reconnaît par ses terminaisons -e, -es, -e, -ions, -iez, -ent, après des expressions comme « il faut que », « je souhaite que », « bien que ».</p>`,
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
      <p>La subordonnée relative a une fonction de <strong>complément de l'antécédent</strong> (souvent appelé complément du nom).</p>`,
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
      <p>Bien choisir ses connecteurs logiques permet de structurer un raisonnement clair, notamment dans un texte argumentatif ou explicatif.</p>`,
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
      <p>Il s'organise en trois parties : une <strong>introduction</strong> qui présente le thème et son importance, un <strong>développement</strong> qui explique le phénomène étape par étape avec des exemples, et une <strong>conclusion</strong> qui résume les points clés.</p>`,
      quiz: [
        {q:"Le texte explicatif répond surtout à la question :", options:["qui ?","pourquoi/comment ?","où ?","quand ?"], correct:1, exp:"Ce type de texte cherche à faire comprendre un phénomène, donc à expliquer son fonctionnement ou sa cause."},
        {q:"Le ton d'un texte explicatif est généralement :", options:["passionné et personnel","neutre et objectif","humoristique","poétique"], correct:1, exp:"Le texte explicatif reste neutre et objectif, pour bien transmettre une information vérifiable."},
        {q:"Un exemple de mot explicatif est :", options:["soudain","c'est-à-dire","malheureusement","autrefois"], correct:1, exp:"« C'est-à-dire » est une expression typique du texte explicatif, qui reformule une idée."},
        {q:"Le texte explicatif comporte généralement :", options:["seulement un développement","introduction, développement, conclusion","seulement une conclusion","des dialogues uniquement"], correct:1, exp:"Comme la plupart des textes structurés, il suit un plan en trois parties."},
        {q:"Le texte explicatif peut porter sur :", options:["un phénomène naturel, scientifique ou socioculturel uniquement","des sentiments personnels uniquement","une histoire imaginaire uniquement","un poème"], correct:0, exp:"Le texte explicatif traite de phénomènes réels : naturels, scientifiques ou socioculturels."}
      ]
    },
    {
      id: "f14",
      title: "Le résumé de texte",
      content: `<p>Le <strong>résumé de texte</strong> consiste à réduire un texte à environ un tiers de sa longueur initiale, tout en respectant fidèlement l'ordre et le sens des idées développées par l'auteur.</p>
      <p><strong>Méthode</strong> : lire le texte plusieurs fois, repérer les idées essentielles (en écartant exemples, répétitions et détails secondaires), suivre l'ordre du texte sans rien ajouter ni juger, puis reformuler ces idées avec ses propres mots.</p>
      <p><strong>Règles à respecter</strong> : ne pas donner son avis personnel, ne pas changer le sens du texte, éviter les mots trop familiers, ne pas garder le titre dans le résumé, et indiquer le nombre de mots utilisés à la fin.</p>
      <p>Contrairement à d'autres rédactions, le résumé <strong>ne comporte ni introduction ni conclusion</strong> séparées : c'est une reformulation continue et condensée du texte.</p>`,
      quiz: [
        {q:"Un résumé de texte doit généralement représenter :", options:["la moitié du texte original","environ un tiers du texte original","le double du texte original","seulement le titre"], correct:1, exp:"Le résumé réduit le texte à environ un tiers de sa longueur initiale."},
        {q:"Pour résumer, il faut d'abord :", options:["donner son opinion","repérer les idées essentielles","ajouter des exemples personnels","changer l'ordre des idées"], correct:1, exp:"La première étape consiste à identifier les idées essentielles du texte, sans les détails secondaires."},
        {q:"Dans un résumé, il ne faut pas :", options:["reformuler avec ses propres mots","respecter l'ordre du texte","donner son avis personnel","condenser les idées"], correct:2, exp:"Le résumé doit rester fidèle au texte, sans jugement ni opinion personnelle ajoutée."},
        {q:"Un résumé de texte comporte :", options:["une introduction et une conclusion séparées","uniquement une reformulation condensée, sans intro/conclusion distinctes","seulement des exemples","un dialogue"], correct:1, exp:"Contrairement à une dissertation, le résumé n'a pas d'introduction ni de conclusion séparées."},
        {q:"Il faut éviter dans un résumé :", options:["le vocabulaire précis","les répétitions et les exemples du texte original","de suivre l'ordre du texte","de reformuler les idées"], correct:1, exp:"Les exemples et répétitions sont des détails à écarter, seules les idées essentielles sont gardées."}
      ]
    },
    {
      id: "f15",
      title: "Le compte rendu de réunion",
      content: `<p>Le <strong>compte rendu de réunion</strong> est un rapport qui présente fidèlement le déroulement et le contenu d'une réunion, rédigé le plus souvent par un secrétaire de séance.</p>
      <p><strong>Présentation formelle</strong> : il comporte un en-tête avec l'intitulé, la date, le lieu, l'heure, le nom du responsable et du rapporteur, la liste des membres présents et absents, l'ordre du jour, le déroulement de la réunion, et la signature du rapporteur.</p>
      <p>Le compte rendu <strong>débute par une phrase d'introduction</strong> rappelant la nature, la date, l'heure et le lieu de la réunion, puis résume brièvement chaque intervention en mentionnant son auteur.</p>
      <p>Il se termine par une formule indiquant que l'ordre du jour a été épuisé et précisant l'heure de la levée de séance.</p>`,
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
      <p>Le dialogue peut aussi être <strong>rapporté par un narrateur</strong>, qui présente alors les deux points de vue et fait un bilan final des échanges.</p>`,
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
      <p>Le corps de la lettre commence souvent par une formule comme « J'ai l'honneur de solliciter... » pour exposer poliment et clairement l'objet de la demande.</p>`,
      quiz: [
        {q:"La lettre officielle s'adresse à :", options:["un ami proche","une autorité compétente","un personnage imaginaire","un animal"], correct:1, exp:"Elle est destinée à une autorité (administration, direction...) dans un cadre formel."},
        {q:"Le niveau de langue d'une lettre officielle doit être :", options:["familier","soutenu","argotique","enfantin"], correct:1, exp:"Une lettre officielle exige un registre de langue soutenu et respectueux."},
        {q:"Parmi les parties d'une lettre officielle, on trouve :", options:["le schéma narratif","l'objet de la lettre et la formule d'appel","les péripéties","le résumé du texte"], correct:1, exp:"L'objet et la formule d'appel font partie des éléments structurants d'une lettre officielle."},
        {q:"« J'ai l'honneur de solliciter... » est une formule utilisée pour :", options:["clore la lettre","exposer poliment une demande","donner un ordre","décrire un paysage"], correct:1, exp:"Cette formule introduit poliment l'objet précis de la demande dans le corps de la lettre."},
        {q:"Les pièces jointes dans une lettre officielle sont mentionnées :", options:["au début de la lettre uniquement","généralement en bas, après la signature ou juste avant","jamais","à la place de l'objet"], correct:1, exp:"Les pièces jointes (p.j.) sont habituellement listées en fin de lettre."}
      ]
    }
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
      <p>Attention : certains verbes (comme like, know, want, believe) ne s'utilisent presque jamais au continuous, car ils expriment un état et non une action.</p>`,
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
      <p>Mots-clés fréquents : yesterday, last week, last year, ago, in 2020.</p>`,
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
      <p><strong>Formes irrégulières</strong> à connaître : good → better → the best ; bad → worse → the worst.</p>`,
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
      <p><strong>Formes négatives</strong> : can't (cannot), mustn't, shouldn't.</p>`,
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
      <p>Astuce : penser à la taille de l'espace évoqué (grand = in, surface = on, point précis = at) aide à choisir la bonne préposition.</p>`,
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
      <p>Ces expressions s'utilisent souvent avec le Present Simple pour décrire des habitudes : « I usually wake up at 6 am and have breakfast with my family. »</p>`,
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
      <p><strong>Forme négative</strong> : won't (will not) ; am/is/are not going to. <strong>Forme interrogative</strong> : Will + sujet + verbe ? ; Am/Is/Are + sujet + going to + verbe ?</p>`,
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
      <p><strong>Différence avec le Past Simple</strong> : le Past Simple précise un moment du passé terminé (yesterday, last year), tandis que le Present Perfect ne précise pas de moment exact et garde un lien avec le présent.</p>`,
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
      <p>Ex : I have some apples. / I don't have any money. / How much water do you need? / How many books do you have?</p>`,
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
      <p>« How » se combine souvent avec un adjectif pour préciser la question : how old (âge), how much/many (quantité), how far (distance), how long (durée).</p>`,
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
      <p>Le temps du verbe « be » s'accorde avec le temps de la phrase active d'origine (présent, passé, futur...).</p>`,
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
      <p>Expressions utiles : « How much does it cost? » (Combien ça coûte ?), « Can I have...? » (Puis-je avoir... ?), « I would like... » (Je voudrais...).</p>`,
      quiz: [
        {q:"« Combien ça coûte ? » se traduit par :", options:["How much does it cost?","How many is it?","What is the price of you?","How is it cost?"], correct:0, exp:"« How much does it cost? » est l'expression correcte pour demander le prix."},
        {q:"« Cheap » signifie :", options:["cher","bon marché","délicieux","frais"], correct:1, exp:"« Cheap » signifie « bon marché », « pas cher »."},
        {q:"« Vegetables » signifie :", options:["fruits","légumes","viandes","boissons"], correct:1, exp:"« Vegetables » signifie « légumes »."},
        {q:"« I would like... » s'utilise pour :", options:["donner un ordre","exprimer poliment un souhait","poser une question sur le prix","refuser un achat"], correct:1, exp:"« I would like » est une formule polie pour exprimer ce que l'on souhaite (souvent acheter ou commander)."},
        {q:"« Receipt » signifie :", options:["la liste de courses","le ticket de caisse","le prix","le magasin"], correct:1, exp:"« Receipt » désigne le ticket de caisse remis après un achat."}
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
      title: "La lumière et sa propagation",
      content: `<p>La lumière se propage en <strong>ligne droite</strong> dans un milieu transparent et homogène (comme l'air ou le vide). C'est ce qu'on appelle la propagation rectiligne de la lumière.</p>
      <p>Une <strong>source de lumière</strong> peut être primaire (elle produit sa propre lumière, comme le Soleil ou une lampe) ou secondaire (elle renvoie la lumière reçue, comme la Lune ou un objet éclairé).</p>
      <p>Quand un objet opaque bloque la lumière, il se forme une <strong>ombre</strong> derrière lui. Plus la source est proche de l'objet, plus l'ombre est grande.</p>
      <p>La lumière peut aussi être <strong>réfléchie</strong> (miroir) ou <strong>réfractée</strong> (déviée en changeant de milieu, comme dans l'eau).</p>`,
      quiz: [
        {q:"Dans un milieu transparent homogène, la lumière se propage :", options:["en cercle","en ligne droite","en zigzag","elle ne se propage pas"], correct:1, exp:"La propagation de la lumière est rectiligne dans un milieu transparent et homogène."},
        {q:"Le Soleil est une source de lumière :", options:["secondaire","primaire","artificielle","réfléchie"], correct:1, exp:"Le Soleil produit sa propre lumière : c'est une source primaire."},
        {q:"La Lune est une source de lumière :", options:["primaire","secondaire","artificielle uniquement","invisible"], correct:1, exp:"La Lune ne produit pas sa lumière, elle réfléchit celle du Soleil : c'est une source secondaire."},
        {q:"Une ombre se forme quand :", options:["un objet transparent bloque la lumière","un objet opaque bloque la lumière","il n'y a aucune source de lumière","la lumière est réfléchie"], correct:1, exp:"Un objet opaque empêche la lumière de passer, créant une zone d'ombre."},
        {q:"La déviation de la lumière en changeant de milieu s'appelle :", options:["réflexion","réfraction","diffusion","absorption"], correct:1, exp:"La réfraction est la déviation de la lumière lors du changement de milieu (ex : air vers eau)."}
      ]
    },
    {
      id: "p2",
      title: "Mélanges et corps purs",
      content: `<p>Un <strong>corps pur</strong> est constitué d'une seule espèce chimique (ex : eau distillée, sel pur). Un <strong>mélange</strong> contient plusieurs espèces chimiques.</p>
      <p>Un mélange est <strong>homogène</strong> quand on ne distingue pas ses constituants à l'œil nu (ex : eau salée). Il est <strong>hétérogène</strong> quand on distingue les constituants (ex : eau et huile, eau boueuse).</p>
      <p><strong>Techniques de séparation</strong> : la <strong>filtration</strong> sépare un solide non dissous d'un liquide ; la <strong>décantation</strong> sépare des liquides non miscibles ou un solide qui se dépose ; la <strong>distillation</strong> sépare des liquides miscibles selon leur température d'ébullition.</p>`,
      quiz: [
        {q:"L'eau distillée est un exemple de :", options:["mélange homogène","mélange hétérogène","corps pur","solution saturée"], correct:2, exp:"L'eau distillée ne contient qu'une seule espèce chimique : c'est un corps pur."},
        {q:"L'eau salée est un mélange :", options:["hétérogène","homogène","pur","gazeux uniquement"], correct:1, exp:"On ne distingue pas le sel dissous dans l'eau à l'œil nu : c'est un mélange homogène."},
        {q:"Pour séparer un solide non dissous d'un liquide, on utilise :", options:["la distillation","la filtration","l'évaporation totale","la combustion"], correct:1, exp:"La filtration retient les particules solides non dissoutes grâce à un filtre."},
        {q:"La distillation sépare des liquides selon leur :", options:["couleur","masse volumique","température d'ébullition","odeur"], correct:2, exp:"La distillation exploite les différentes températures d'ébullition des liquides mélangés."},
        {q:"Eau et huile forment un mélange :", options:["homogène","hétérogène","un corps pur","une solution"], correct:1, exp:"On distingue clairement les deux liquides : c'est un mélange hétérogène."}
      ]
    },
    {
      id: "p3",
      title: "États de la matière et changements d'état",
      content: `<p>La matière existe sous trois états principaux : <strong>solide</strong> (forme et volume propres), <strong>liquide</strong> (volume propre, prend la forme du récipient) et <strong>gazeux</strong> (occupe tout l'espace disponible).</p>
      <p><strong>Changements d'état :</strong> fusion (solide → liquide), solidification (liquide → solide), vaporisation (liquide → gaz), liquéfaction (gaz → liquide), sublimation (solide → gaz directement).</p>
      <p>Chaque changement d'état se produit à une <strong>température précise</strong> pour un corps pur donné (ex : l'eau fond à 0°C et bout à 100°C sous pression atmosphérique normale), et cette température reste constante pendant tout le changement d'état.</p>`,
      quiz: [
        {q:"Le passage du solide au liquide s'appelle :", options:["vaporisation","fusion","solidification","sublimation"], correct:1, exp:"La fusion est le passage de l'état solide à l'état liquide."},
        {q:"Le passage du liquide au gaz s'appelle :", options:["fusion","vaporisation","liquéfaction","solidification"], correct:1, exp:"La vaporisation est le passage de l'état liquide à l'état gazeux."},
        {q:"L'eau bout à quelle température (pression normale) ?", options:["0°C","50°C","100°C","212°C"], correct:2, exp:"Sous pression atmosphérique normale, l'eau bout à 100°C."},
        {q:"Pendant un changement d'état, la température :", options:["augmente constamment","diminue constamment","reste constante","varie de façon aléatoire"], correct:2, exp:"La température reste stable pendant toute la durée du changement d'état."},
        {q:"Le passage direct du solide au gaz s'appelle :", options:["fusion","sublimation","liquéfaction","vaporisation"], correct:1, exp:"La sublimation est le passage direct de l'état solide à l'état gazeux, sans passer par le liquide."}
      ]
    },
    {
      id: "p4",
      title: "Le courant électrique",
      content: `<p>Un <strong>circuit électrique</strong> simple comprend un générateur (pile), des fils conducteurs, et un ou plusieurs récepteurs (ampoule, moteur), souvent avec un interrupteur.</p>
      <p>Le courant électrique circule dans un circuit <strong>fermé</strong> : s'il y a une coupure, le courant ne passe plus (circuit ouvert).</p>
      <p>Deux montages principaux : le <strong>circuit série</strong> (les récepteurs sont placés les uns à la suite des autres, le courant est le même partout) et le <strong>circuit en dérivation</strong> (les récepteurs sont sur des branches différentes, chacun peut fonctionner indépendamment).</p>
      <p><strong>Convention</strong> : le sens conventionnel du courant va de la borne + vers la borne − du générateur à l'extérieur de celui-ci.</p>`,
      quiz: [
        {q:"Pour que le courant circule, le circuit doit être :", options:["ouvert","fermé","en série obligatoirement","sans générateur"], correct:1, exp:"Le courant circule uniquement dans un circuit fermé, sans coupure."},
        {q:"Dans un circuit série, si une ampoule grille :", options:["les autres restent allumées","toutes les ampoules s'éteignent","rien ne change","le courant double"], correct:1, exp:"En série, tous les récepteurs sont sur le même chemin : une coupure éteint tout le circuit."},
        {q:"Dans un circuit en dérivation, les récepteurs sont :", options:["tous sur le même fil","sur des branches différentes","toujours identiques","reliés uniquement par un interrupteur"], correct:1, exp:"Chaque récepteur est placé sur sa propre branche, indépendante des autres."},
        {q:"Le sens conventionnel du courant va :", options:["du − vers le + à l'extérieur du générateur","du + vers le − à l'extérieur du générateur","il n'y a pas de sens conventionnel","toujours en cercle aléatoire"], correct:1, exp:"Par convention, le courant circule de la borne + vers la borne − à l'extérieur du générateur."},
        {q:"Un interrupteur sert à :", options:["augmenter la tension","ouvrir ou fermer le circuit","produire de la lumière","stocker l'énergie"], correct:1, exp:"L'interrupteur permet d'ouvrir (couper) ou de fermer (rétablir) le circuit."}
      ]
    },
    {
      id: "p5",
      title: "Masse, volume et masse volumique",
      content: `<p>La <strong>masse</strong> d'un objet (en kg ou g) mesure la quantité de matière qu'il contient ; elle se mesure avec une balance.</p>
      <p>Le <strong>volume</strong> (en L ou cm³/m³) mesure l'espace occupé par un objet ou un liquide ; il se mesure avec une éprouvette graduée ou par calcul (pour les solides réguliers).</p>
      <p>La <strong>masse volumique</strong> ρ (rho) d'un matériau est le rapport entre sa masse et son volume : ρ = m / V, généralement exprimée en g/cm³ ou kg/m³.</p>
      <p>La masse volumique permet de comparer des matériaux : par exemple, l'eau a une masse volumique de 1 g/cm³, et un objet plus dense que l'eau coule, tandis qu'un objet moins dense flotte.</p>`,
      quiz: [
        {q:"La masse se mesure avec :", options:["une éprouvette","une balance","un thermomètre","un chronomètre"], correct:1, exp:"On mesure la masse d'un objet à l'aide d'une balance."},
        {q:"La formule de la masse volumique est :", options:["ρ = V/m","ρ = m × V","ρ = m/V","ρ = m + V"], correct:2, exp:"La masse volumique se calcule en divisant la masse par le volume : ρ = m/V."},
        {q:"La masse volumique de l'eau est d'environ :", options:["0,5 g/cm³","1 g/cm³","10 g/cm³","100 g/cm³"], correct:1, exp:"L'eau a une masse volumique de référence égale à 1 g/cm³."},
        {q:"Un objet plus dense que l'eau va :", options:["flotter","couler","rester en surspension exacte","se dissoudre"], correct:1, exp:"Si sa masse volumique est supérieure à celle de l'eau, l'objet coule."},
        {q:"Le volume d'un liquide se mesure avec :", options:["une balance","un thermomètre","une éprouvette graduée","un ampèremètre"], correct:2, exp:"L'éprouvette graduée permet de lire directement le volume d'un liquide."}
      ]
    },
    {
      id: "p6",
      title: "Les combustions",
      content: `<p>Une <strong>combustion</strong> est une réaction chimique entre un combustible (ex : bois, charbon, gaz) et un comburant (généralement le dioxygène de l'air), produisant de la chaleur et de la lumière.</p>
      <p>La <strong>combustion du carbone</strong> produit du dioxyde de carbone (CO₂) : carbone + dioxygène → dioxyde de carbone.</p>
      <p>La <strong>combustion du méthane</strong> (gaz naturel) produit du dioxyde de carbone et de l'eau : méthane + dioxygène → dioxyde de carbone + eau.</p>
      <p>Une combustion <strong>incomplète</strong> (manque de dioxygène) produit du monoxyde de carbone (CO), un gaz toxique, dangereux car incolore et inodore.</p>`,
      quiz: [
        {q:"Une combustion nécessite un combustible et :", options:["un comburant","un solvant","un catalyseur uniquement","de l'eau"], correct:0, exp:"La combustion est une réaction entre un combustible et un comburant (souvent le dioxygène)."},
        {q:"La combustion du carbone produit :", options:["de l'eau seule","du dioxyde de carbone","de l'azote","du monoxyde d'azote"], correct:1, exp:"Carbone + dioxygène → dioxyde de carbone (CO₂)."},
        {q:"La combustion du méthane produit :", options:["seulement du CO₂","du CO₂ et de l'eau","seulement de l'eau","de l'oxygène pur"], correct:1, exp:"La combustion complète du méthane produit du dioxyde de carbone et de l'eau."},
        {q:"Une combustion incomplète produit un gaz dangereux appelé :", options:["dioxyde de carbone","monoxyde de carbone","dioxygène","azote"], correct:1, exp:"Le monoxyde de carbone (CO), toxique, se forme en cas de manque de dioxygène."},
        {q:"Le monoxyde de carbone est dangereux car il est :", options:["très coloré et odorant","incolore et inodore","toujours visible en fumée noire","non toxique"], correct:1, exp:"C'est un gaz incolore et inodore, donc difficile à détecter sans détecteur spécifique."}
      ]
    },
    {
      id: "p7",
      title: "La tension électrique",
      content: `<p>La <strong>tension électrique</strong> (notée U, en volts V) mesure la différence de potentiel électrique entre deux points d'un circuit ; elle représente ce qui « pousse » le courant à circuler.</p>
      <p>La tension se mesure avec un <strong>voltmètre</strong>, branché en <strong>dérivation</strong> (en parallèle) aux bornes du composant étudié.</p>
      <p>Dans un circuit <strong>série</strong>, la tension totale du générateur est égale à la somme des tensions aux bornes de chaque récepteur. Dans un circuit en <strong>dérivation</strong>, la tension est la même aux bornes de chaque branche.</p>
      <p>Une pile de 4,5 V fournit par exemple une tension de 4,5 volts à un circuit simple.</p>`,
      quiz: [
        {q:"La tension électrique se mesure avec :", options:["un ampèremètre","un voltmètre","un thermomètre","une balance"], correct:1, exp:"Le voltmètre est l'appareil utilisé pour mesurer une tension électrique."},
        {q:"Le voltmètre se branche :", options:["en série","en dérivation","à l'intérieur du générateur","il ne se branche pas"], correct:1, exp:"Le voltmètre se branche toujours en dérivation (en parallèle) aux bornes du composant à mesurer."},
        {q:"L'unité de la tension électrique est :", options:["l'ampère","le volt","le watt","l'ohm"], correct:1, exp:"La tension électrique se mesure en volts (V)."},
        {q:"Dans un circuit série, la tension du générateur est égale à :", options:["la tension d'un seul récepteur","la somme des tensions de chaque récepteur","toujours zéro","la moyenne des tensions"], correct:1, exp:"En série, les tensions aux bornes des récepteurs s'additionnent pour donner la tension totale."},
        {q:"Dans un circuit en dérivation, la tension aux bornes de chaque branche est :", options:["différente pour chaque branche","la même pour chaque branche","toujours nulle","la somme de toutes les branches"], correct:1, exp:"En dérivation, chaque branche reçoit la même tension que le générateur."}
      ]
    },
    {
      id: "p8",
      title: "Résistance et loi d'Ohm",
      content: `<p>Un <strong>résistor</strong> (ou résistance) est un composant qui s'oppose au passage du courant électrique. Sa valeur R se mesure en <strong>ohms</strong> (Ω) à l'aide d'un <strong>ohmmètre</strong>.</p>
      <p>La <strong>loi d'Ohm</strong> relie la tension U aux bornes d'un résistor, l'intensité I qui le traverse, et sa résistance R : U = R × I.</p>
      <p>Cette loi permet de calculer l'une des trois grandeurs si les deux autres sont connues : I = U/R, ou R = U/I.</p>
      <p>Plus la résistance est grande, plus elle limite le passage du courant pour une même tension.</p>`,
      quiz: [
        {q:"La résistance électrique se mesure en :", options:["volts","ampères","ohms","watts"], correct:2, exp:"L'unité de la résistance électrique est l'ohm (Ω)."},
        {q:"La loi d'Ohm s'écrit :", options:["U = R + I","U = R × I","U = R / I","U = I / R"], correct:1, exp:"La loi d'Ohm relie tension, résistance et intensité par U = R × I."},
        {q:"Si U = 12 V et R = 4 Ω, alors I =", options:["3 A","48 A","8 A","16 A"], correct:0, exp:"I = U/R = 12/4 = 3 A."},
        {q:"Plus la résistance est grande, plus elle :", options:["facilite le passage du courant","limite le passage du courant","n'a aucun effet","augmente la tension"], correct:1, exp:"Une résistance plus grande s'oppose davantage au passage du courant."},
        {q:"Un ohmmètre sert à mesurer :", options:["la tension","l'intensité","la résistance","la puissance"], correct:2, exp:"L'ohmmètre mesure directement la valeur d'une résistance."}
      ]
    },
    {
      id: "p9",
      title: "La puissance électrique",
      content: `<p>La <strong>puissance électrique</strong> P (en watts, W) d'un appareil indique la quantité d'énergie électrique qu'il consomme (ou produit) par unité de temps.</p>
      <p>Elle se calcule par la formule : P = U × I, où U est la tension (en volts) et I l'intensité (en ampères).</p>
      <p>La puissance nominale d'un appareil est souvent indiquée par le fabricant (ex : une ampoule de 60 W). L'<strong>énergie électrique</strong> consommée dépend de la puissance et de la durée d'utilisation : E = P × t.</p>
      <p>Comprendre la puissance permet d'estimer la consommation électrique et le coût en électricité d'un appareil.</p>`,
      quiz: [
        {q:"La puissance électrique se calcule par :", options:["P = U + I","P = U × I","P = U / I","P = I / U"], correct:1, exp:"La puissance électrique est le produit de la tension par l'intensité : P = U × I."},
        {q:"L'unité de la puissance électrique est :", options:["le volt","l'ampère","le watt","l'ohm"], correct:2, exp:"La puissance électrique se mesure en watts (W)."},
        {q:"Si U = 220 V et I = 2 A, alors P =", options:["110 W","222 W","440 W","218 W"], correct:2, exp:"P = U × I = 220 × 2 = 440 W."},
        {q:"L'énergie électrique consommée dépend de :", options:["seulement la puissance","seulement la durée","la puissance et la durée","la tension uniquement"], correct:2, exp:"L'énergie consommée E = P × t dépend à la fois de la puissance et du temps d'utilisation."},
        {q:"Une ampoule de forte puissance consomme :", options:["moins d'énergie qu'une faible puissance","plus d'énergie pour une même durée","la même énergie quelle que soit la puissance","aucune énergie"], correct:1, exp:"Pour une même durée, une puissance plus élevée entraîne une consommation d'énergie plus importante."}
      ]
    },
    {
      id: "p10",
      title: "Atomes et molécules",
      content: `<p>Toute matière est constituée de particules extrêmement petites appelées <strong>atomes</strong>. Un atome est composé d'un <strong>noyau</strong> (protons et neutrons) entouré d'<strong>électrons</strong> qui se déplacent autour de lui.</p>
      <p>Une <strong>molécule</strong> est un assemblage de plusieurs atomes liés entre eux. Par exemple, une molécule d'eau (H₂O) est formée de deux atomes d'hydrogène (H) et un atome d'oxygène (O).</p>
      <p>Un <strong>élément chimique</strong> est caractérisé par son type d'atome (ex : carbone, oxygène, hydrogène), représenté par un symbole chimique (C, O, H...).</p>
      <p>Lors d'une réaction chimique, les atomes se réorganisent pour former de nouvelles molécules, mais ils ne disparaissent jamais : c'est la <strong>conservation de la matière</strong>.</p>`,
      quiz: [
        {q:"Un atome est composé d'un noyau et de :", options:["molécules","électrons","ions uniquement","protons uniquement"], correct:1, exp:"Un atome est formé d'un noyau (protons + neutrons) entouré d'électrons."},
        {q:"Une molécule d'eau est formée de :", options:["1 atome d'hydrogène et 2 d'oxygène","2 atomes d'hydrogène et 1 d'oxygène","2 atomes d'oxygène seulement","1 atome de carbone et 2 d'oxygène"], correct:1, exp:"La molécule d'eau, H₂O, contient 2 atomes d'hydrogène et 1 atome d'oxygène."},
        {q:"Le symbole chimique du carbone est :", options:["Ca","C","Cb","Co"], correct:1, exp:"Le carbone est représenté par le symbole C."},
        {q:"Lors d'une réaction chimique, les atomes :", options:["disparaissent","se réorganisent sans disparaître","se transforment en molécules d'eau","augmentent en nombre"], correct:1, exp:"La matière se conserve : les atomes se réorganisent pour former de nouvelles molécules, sans disparaître."},
        {q:"Une molécule est :", options:["un seul atome isolé","un assemblage de plusieurs atomes liés","toujours un gaz","toujours un métal"], correct:1, exp:"Une molécule résulte de la liaison de plusieurs atomes entre eux."}
      ]
    },
    {
      id: "p11",
      title: "Vision et l'œil",
      content: `<p>L'<strong>œil</strong> est l'organe qui permet de percevoir la lumière et de former des images. La lumière entre par la <strong>pupille</strong> (ouverture réglée par l'iris), traverse le <strong>cristallin</strong> (qui fait office de lentille convergente), et forme une image sur la <strong>rétine</strong>, au fond de l'œil.</p>
      <p>La rétine transforme la lumière reçue en signal nerveux, transmis au cerveau par le <strong>nerf optique</strong>, qui interprète l'image.</p>
      <p>Certains défauts de vision sont courants : la <strong>myopie</strong> (mauvaise vision de loin), l'<strong>hypermétropie</strong> (mauvaise vision de près), corrigés par des lunettes à verres appropriés (divergents ou convergents).</p>`,
      quiz: [
        {q:"La lumière entre dans l'œil par :", options:["la rétine","la pupille","le nerf optique","le cristallin uniquement"], correct:1, exp:"La pupille est l'ouverture par laquelle la lumière pénètre dans l'œil."},
        {q:"L'image se forme sur :", options:["la pupille","l'iris","la rétine","le cristallin"], correct:2, exp:"C'est sur la rétine, au fond de l'œil, que l'image se forme."},
        {q:"Le rôle du cristallin est de :", options:["capter le son","faire converger la lumière comme une lentille","produire les larmes","transmettre l'image au cerveau"], correct:1, exp:"Le cristallin agit comme une lentille convergente qui fait converger les rayons lumineux sur la rétine."},
        {q:"Le nerf optique sert à :", options:["produire la lumière","transmettre le signal nerveux de l'œil au cerveau","filtrer la lumière","protéger l'œil"], correct:1, exp:"Le nerf optique transmet l'information visuelle transformée en signal nerveux jusqu'au cerveau."},
        {q:"La myopie correspond à :", options:["une mauvaise vision de loin","une mauvaise vision de près uniquement","une absence totale de vision","une vision parfaite"], correct:0, exp:"Une personne myope voit mal de loin, mais généralement bien de près."}
      ]
    },
    {
      id: "p12",
      title: "Sécurité électrique",
      content: `<p>Le courant électrique peut être dangereux : une <strong>électrisation</strong> se produit lorsqu'un courant traverse le corps humain, ce qui peut provoquer des brûlures ou perturber le fonctionnement du cœur (dans les cas graves, on parle d'électrocution).</p>
      <p><strong>Règles de sécurité de base</strong> : ne jamais toucher un appareil électrique avec les mains mouillées, ne jamais démonter une prise ou un appareil branché, utiliser du matériel isolé et en bon état.</p>
      <p>Le <strong>disjoncteur</strong> et les <strong>fusibles</strong> protègent une installation en coupant automatiquement le courant en cas de surintensité (court-circuit, surcharge), évitant ainsi les incendies.</p>
      <p>La <strong>prise de terre</strong> permet d'évacuer le courant vers le sol en cas de défaut, protégeant les personnes contre l'électrisation.</p>`,
      quiz: [
        {q:"Une électrisation se produit quand :", options:["on regarde un appareil électrique","un courant traverse le corps humain","on allume la lumière","on utilise une pile neuve"], correct:1, exp:"L'électrisation résulte du passage d'un courant électrique à travers le corps humain."},
        {q:"Il ne faut jamais toucher un appareil électrique avec :", options:["des gants isolants","les mains mouillées","une pince isolée","les mains sèches"], correct:1, exp:"L'eau conduit l'électricité, ce qui augmente fortement le risque d'électrisation."},
        {q:"Le rôle du disjoncteur est de :", options:["augmenter la tension","couper le courant en cas de surintensité","produire de l'électricité","mesurer la puissance"], correct:1, exp:"Le disjoncteur coupe automatiquement le circuit en cas de court-circuit ou de surcharge, pour éviter les accidents."},
        {q:"La prise de terre sert à :", options:["augmenter la puissance des appareils","évacuer le courant vers le sol en cas de défaut","éclairer la maison","stocker l'électricité"], correct:1, exp:"En cas de défaut électrique, la prise de terre évacue le courant vers le sol, protégeant les personnes."},
        {q:"Un fusible protège une installation en :", options:["augmentant le courant","coupant le circuit en cas de surintensité","réduisant la tension progressivement","stockant l'énergie"], correct:1, exp:"Comme le disjoncteur, un fusible coupe le circuit en cas de surintensité pour éviter les dommages ou incendies."}
      ]
    },
    {
      id: "p13",
      title: "L'intensité du courant électrique",
      content: `<p>L'<strong>intensité du courant électrique</strong> (notée I, en ampères A) mesure le débit de charges électriques qui traverse un circuit chaque seconde.</p>
      <p>Elle se mesure avec un <strong>ampèremètre</strong>, qui doit être branché <strong>en série</strong> dans le circuit (contrairement au voltmètre qui se branche en dérivation).</p>
      <p>Dans un circuit <strong>série</strong>, l'intensité est la même en tout point du circuit. Dans un circuit en <strong>dérivation</strong>, l'intensité du courant principal est égale à la somme des intensités dans chaque branche.</p>
      <p>Il ne faut jamais brancher un ampèremètre directement aux bornes d'un générateur : cela créerait un court-circuit dangereux.</p>`,
      quiz: [
        {q:"L'intensité du courant électrique se mesure avec :", options:["un voltmètre","un ampèremètre","un ohmmètre","un thermomètre"], correct:1, exp:"L'ampèremètre est l'appareil dédié à la mesure de l'intensité du courant."},
        {q:"L'ampèremètre doit être branché :", options:["en dérivation","en série","à l'extérieur du circuit","cela n'a pas d'importance"], correct:1, exp:"Contrairement au voltmètre, l'ampèremètre se branche toujours en série dans le circuit."},
        {q:"Dans un circuit série, l'intensité est :", options:["différente à chaque point","la même en tout point du circuit","toujours nulle","égale à la tension"], correct:1, exp:"En série, un seul chemin existe pour le courant, donc l'intensité est identique partout."},
        {q:"Dans un circuit en dérivation, l'intensité totale est :", options:["la moyenne des intensités des branches","la somme des intensités de chaque branche","toujours égale à zéro","égale à l'intensité d'une seule branche"], correct:1, exp:"L'intensité principale se répartit puis se recompose : elle est égale à la somme des intensités des branches."},
        {q:"Brancher un ampèremètre directement aux bornes d'un générateur risque de créer :", options:["une tension trop faible","un court-circuit dangereux","une résistance infinie","rien de particulier"], correct:1, exp:"L'ampèremètre a une résistance très faible : branché ainsi, il provoquerait un court-circuit."}
      ]
    },
    {
      id: "p14",
      title: "Courant continu et courant alternatif",
      content: `<p>Le <strong>courant continu</strong> circule toujours dans le même sens, avec une intensité qui peut rester constante (ex : courant fourni par une pile ou une batterie).</p>
      <p>Le <strong>courant alternatif</strong> change périodiquement de sens et d'intensité au cours du temps (ex : courant du secteur, distribué dans les maisons).</p>
      <p>On peut visualiser la différence entre ces deux types de courant à l'aide d'un <strong>oscilloscope</strong>, qui affiche la variation de la tension au cours du temps : une ligne droite horizontale pour un courant continu, une courbe périodique (souvent sinusoïdale) pour un courant alternatif.</p>
      <p>Le courant du secteur utilisé dans les habitations est un courant alternatif, tandis que la plupart des appareils portables (téléphones, lampes de poche) fonctionnent en courant continu, ce qui nécessite parfois un adaptateur pour convertir l'un en l'autre.</p>`,
      quiz: [
        {q:"Le courant continu circule :", options:["toujours dans le même sens","en changeant sans cesse de sens","seulement dans les câbles du secteur","de façon aléatoire"], correct:0, exp:"Le courant continu garde un sens constant, contrairement au courant alternatif."},
        {q:"Le courant alternatif se caractérise par :", options:["un sens qui ne change jamais","un changement périodique de sens et d'intensité","une intensité toujours nulle","l'absence de tension"], correct:1, exp:"Le courant alternatif varie périodiquement en sens et en intensité au cours du temps."},
        {q:"L'appareil permettant de visualiser la variation de la tension au cours du temps est :", options:["l'ampèremètre","le voltmètre","l'oscilloscope","l'ohmmètre"], correct:2, exp:"L'oscilloscope affiche graphiquement l'évolution de la tension dans le temps."},
        {q:"Le courant distribué dans les habitations (secteur) est généralement :", options:["continu","alternatif","ni l'un ni l'autre","toujours nul"], correct:1, exp:"Le réseau électrique domestique fournit un courant alternatif."},
        {q:"Une pile fournit typiquement un courant :", options:["alternatif","continu","variable de façon aléatoire","nul"], correct:1, exp:"Les piles et batteries fournissent un courant continu, de sens constant."}
      ]
    },
    {
      id: "p15",
      title: "Les ions et les solutions ioniques",
      content: `<p>Un <strong>ion</strong> est un atome (ou groupe d'atomes) qui a perdu ou gagné un ou plusieurs électrons, ce qui lui donne une charge électrique. Un <strong>cation</strong> est un ion chargé positivement (a perdu des électrons), un <strong>anion</strong> est chargé négativement (a gagné des électrons).</p>
      <p>Une <strong>solution ionique</strong> contient des ions dissous, ce qui la rend <strong>conductrice</strong> du courant électrique (contrairement à l'eau pure, très peu conductrice).</p>
      <p>Exemple courant : le sel de cuisine (chlorure de sodium) dissous dans l'eau se sépare en ions sodium (Na⁺, cation) et ions chlorure (Cl⁻, anion), ce qui rend l'eau salée conductrice.</p>
      <p>Des tests chimiques simples permettent de reconnaître la présence de certains ions dans une solution.</p>`,
      quiz: [
        {q:"Un ion est un atome qui a :", options:["changé de masse","perdu ou gagné un ou plusieurs électrons","fusionné avec un autre atome","perdu son noyau"], correct:1, exp:"Un ion résulte d'un atome ayant gagné ou perdu des électrons, ce qui crée une charge électrique."},
        {q:"Un cation est un ion :", options:["chargé positivement","chargé négativement","neutre","toujours métallique uniquement"], correct:0, exp:"Le cation a perdu des électrons et porte donc une charge positive."},
        {q:"Un anion est un ion :", options:["chargé positivement","chargé négativement","neutre","sans charge"], correct:1, exp:"L'anion a gagné des électrons et porte donc une charge négative."},
        {q:"Une solution ionique conduit le courant électrique car elle contient :", options:["de l'eau pure uniquement","des ions dissous","seulement des molécules neutres","de l'air dissous"], correct:1, exp:"Les ions dissous dans la solution permettent le passage du courant électrique."},
        {q:"Le sel dissous dans l'eau se sépare en :", options:["deux molécules neutres","ions sodium et ions chlorure","atomes de carbone","gaz uniquement"], correct:1, exp:"Le chlorure de sodium se dissocie en ions Na⁺ (cation) et Cl⁻ (anion) dans l'eau."}
      ]
    },
    {
      id: "p16",
      title: "Acidité et basicité",
      content: `<p>Une solution peut être <strong>acide</strong>, <strong>neutre</strong> ou <strong>basique</strong>. On caractérise ce niveau à l'aide du <strong>pH</strong> (potentiel hydrogène), une échelle qui va généralement de 0 à 14.</p>
      <p>Un pH inférieur à 7 indique une solution <strong>acide</strong> (ex : jus de citron, vinaigre) ; un pH égal à 7 correspond à une solution <strong>neutre</strong> (ex : eau pure) ; un pH supérieur à 7 indique une solution <strong>basique</strong> (ex : eau savonneuse, produits d'entretien).</p>
      <p>Le pH peut se mesurer à l'aide de <strong>papier pH</strong> (qui change de couleur) ou d'un <strong>pH-mètre</strong> électronique.</p>
      <p>Les acides et les bases doivent être manipulés avec précaution : les solutions très acides ou très basiques peuvent être corrosives et dangereuses pour la peau ou les yeux.</p>`,
      quiz: [
        {q:"Le pH d'une solution neutre est égal à :", options:["0","7","14","−7"], correct:1, exp:"Une solution neutre, comme l'eau pure, a un pH égal à 7."},
        {q:"Un pH inférieur à 7 indique une solution :", options:["basique","acide","neutre","impossible à déterminer"], correct:1, exp:"Un pH en dessous de 7 caractérise une solution acide."},
        {q:"Un pH supérieur à 7 indique une solution :", options:["acide","basique","neutre","gazeuse"], correct:1, exp:"Un pH au-dessus de 7 caractérise une solution basique."},
        {q:"Le jus de citron est une solution :", options:["acide","basique","neutre","métallique"], correct:0, exp:"Le jus de citron a un pH bas : c'est une solution acide."},
        {q:"Pour mesurer le pH d'une solution, on peut utiliser :", options:["un ampèremètre","du papier pH ou un pH-mètre","un voltmètre","une balance"], correct:1, exp:"Le papier pH (indicateur coloré) ou le pH-mètre électronique permettent de mesurer le pH."}
      ]
    },
    {
      id: "p17",
      title: "Les réactions chimiques et leur bilan",
      content: `<p>Une <strong>réaction chimique</strong> transforme des <strong>réactifs</strong> (substances de départ) en <strong>produits</strong> (nouvelles substances formées), avec réorganisation des atomes.</p>
      <p>Le <strong>bilan d'une réaction</strong> s'écrit sous la forme : réactifs → produits (ex : carbone + dioxygène → dioxyde de carbone), en indiquant les proportions si nécessaire.</p>
      <p>Il existe des réactions <strong>complètes</strong>, où au moins un des réactifs est totalement consommé, et des réactions <strong>limitées</strong>, où les réactifs ne sont que partiellement transformés et coexistent avec les produits formés.</p>
      <p>Comme vu avec les combustions, la <strong>masse totale</strong> est conservée au cours d'une réaction chimique : rien ne se crée, rien ne se perd, tout se transforme.</p>`,
      quiz: [
        {q:"Dans une réaction chimique, les réactifs sont :", options:["les substances formées à la fin","les substances de départ","toujours des gaz","toujours des métaux"], correct:1, exp:"Les réactifs sont les substances présentes avant la réaction, qui vont se transformer."},
        {q:"Le bilan d'une réaction chimique s'écrit sous la forme :", options:["produits → réactifs","réactifs → produits","réactifs = produits toujours identiques","aucune des propositions"], correct:1, exp:"Le bilan indique la transformation des réactifs en produits, avec une flèche orientée des réactifs vers les produits."},
        {q:"Une réaction complète se caractérise par :", options:["aucun réactif consommé","au moins un réactif totalement consommé","des produits qui disparaissent","l'absence de produits"], correct:1, exp:"Dans une réaction complète, au moins l'un des réactifs de départ est entièrement transformé."},
        {q:"Dans une réaction limitée :", options:["tous les réactifs disparaissent totalement","réactifs et produits coexistent, la transformation est partielle","il n'y a pas de produits","la masse totale change"], correct:1, exp:"Une réaction limitée ne transforme que partiellement les réactifs, qui coexistent alors avec les produits."},
        {q:"Au cours d'une réaction chimique, la masse totale :", options:["augmente toujours","diminue toujours","se conserve","devient nulle"], correct:2, exp:"La matière se conserve : la masse totale des réactifs est égale à la masse totale des produits."}
      ]
    },
    {
      id: "p18",
      title: "La décomposition de la lumière et les couleurs",
      content: `<p>La <strong>lumière blanche</strong> (comme celle du Soleil) est en réalité composée de plusieurs couleurs. Elle peut être <strong>décomposée</strong> à l'aide d'un prisme, qui dévie différemment chaque couleur, révélant un spectre allant du rouge au violet (comme dans un arc-en-ciel).</p>
      <p>Les <strong>couleurs primaires</strong> de la lumière sont le rouge, le vert et le bleu : en les combinant dans différentes proportions, on peut recréer toutes les autres couleurs, y compris le blanc (addition des trois).</p>
      <p>La couleur perçue d'un objet éclairé en lumière blanche dépend des couleurs qu'il <strong>absorbe</strong> et de celles qu'il <strong>diffuse</strong> (renvoie) vers l'œil. Un objet qui diffuse toutes les couleurs paraît blanc ; un objet qui les absorbe toutes paraît noir.</p>`,
      quiz: [
        {q:"La lumière blanche est en réalité :", options:["une seule couleur pure","composée de plusieurs couleurs","toujours invisible","seulement rouge"], correct:1, exp:"La lumière blanche est un mélange de toutes les couleurs du spectre visible."},
        {q:"Un prisme permet de :", options:["créer de la lumière","décomposer la lumière blanche en ses différentes couleurs","supprimer les couleurs","mesurer une tension"], correct:1, exp:"Le prisme dévie différemment chaque couleur, ce qui sépare visuellement le spectre de la lumière blanche."},
        {q:"Les couleurs primaires de la lumière sont :", options:["rouge, jaune, bleu","rouge, vert, bleu","noir, blanc, gris","rouge, vert, jaune"], correct:1, exp:"En optique, les couleurs primaires de la lumière sont le rouge, le vert et le bleu."},
        {q:"Un objet qui paraît noir :", options:["diffuse toutes les couleurs","absorbe toutes les couleurs reçues","n'est jamais éclairé","émet sa propre lumière"], correct:1, exp:"Un objet noir absorbe la quasi-totalité de la lumière reçue, sans en diffuser vers l'œil."},
        {q:"Un objet qui paraît blanc sous lumière blanche :", options:["absorbe toutes les couleurs","diffuse toutes les couleurs reçues","n'est éclairé par aucune lumière","est toujours transparent"], correct:1, exp:"Un objet blanc renvoie (diffuse) la quasi-totalité des couleurs de la lumière qu'il reçoit."}
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
      title: "Histoire : les grands empires africains précoloniaux",
      content: `<p>Avant la colonisation, l'Afrique de l'Ouest a connu de puissants <strong>empires et royaumes</strong>, prospères grâce au commerce transsaharien (or, sel, esclaves) et à des organisations politiques structurées.</p>
      <p>L'<strong>Empire du Ghana</strong> (VIIIe-XIe siècle) contrôlait le commerce de l'or et du sel. L'<strong>Empire du Mali</strong> (XIIIe-XVe siècle), sous Soundiata Keïta puis Kankou Moussa, fut l'un des plus riches et des plus étendus, avec Tombouctou comme centre intellectuel. L'<strong>Empire Songhaï</strong> lui succéda, avec Gao comme capitale.</p>
      <p>Sur le territoire actuel de la Côte d'Ivoire, des royaumes comme le <strong>royaume de Kong</strong> ou le <strong>royaume Abron</strong> se sont aussi développés, jouant un rôle important dans les échanges régionaux.</p>`,
      quiz: [
        {q:"L'Empire du Ghana contrôlait principalement le commerce :", options:["du pétrole","de l'or et du sel","du café","des textiles"], correct:1, exp:"L'Empire du Ghana devait sa richesse au commerce transsaharien de l'or et du sel."},
        {q:"Kankou Moussa fut un souverain célèbre de :", options:["l'Empire du Ghana","l'Empire du Mali","l'Empire Songhaï","le royaume de Kong"], correct:1, exp:"Kankou Moussa, connu pour son pèlerinage fastueux à la Mecque, régna sur l'Empire du Mali."},
        {q:"Tombouctou était un centre important pour :", options:["la pêche uniquement","le commerce et le savoir intellectuel","la production pétrolière","l'industrie textile moderne"], correct:1, exp:"Tombouctou était réputée pour ses universités et bibliothèques, en plus de son rôle commercial."},
        {q:"La capitale de l'Empire Songhaï était :", options:["Tombouctou","Gao","Kong","Bouna"], correct:1, exp:"Gao était la capitale de l'Empire Songhaï."},
        {q:"Un royaume précolonial situé sur le territoire actuel de la Côte d'Ivoire est :", options:["le royaume de Kong","l'Empire du Ghana","l'Empire Songhaï","le royaume du Bénin"], correct:0, exp:"Le royaume de Kong s'est développé dans le nord de l'actuelle Côte d'Ivoire."}
      ]
    },
    {
      id: "h2",
      title: "Histoire : la traite négrière",
      content: `<p>La <strong>traite négrière</strong> désigne la capture, la déportation et la mise en esclavage de millions d'Africains, principalement du XVIe au XIXe siècle, vers les Amériques (traite atlantique), mais aussi vers le monde arabe (traite orientale).</p>
      <p>Ce commerce s'organisait souvent en <strong>« commerce triangulaire »</strong> : des produits manufacturés européens étaient échangés en Afrique contre des captifs, qui étaient déportés vers les Amériques pour travailler dans les plantations, dont les productions (sucre, coton) repartaient vers l'Europe.</p>
      <p>La traite a eu des <strong>conséquences dramatiques</strong> : perte démographique massive pour l'Afrique, déstructuration de sociétés entières, et un héritage de souffrance dont les effets se font encore sentir aujourd'hui.</p>`,
      quiz: [
        {q:"Le commerce triangulaire reliait principalement :", options:["l'Europe, l'Afrique et les Amériques","l'Asie et l'Océanie","l'Europe et l'Antarctique","l'Afrique et l'Australie"], correct:0, exp:"Le commerce triangulaire s'organisait entre l'Europe, l'Afrique et les Amériques."},
        {q:"La traite négrière a duré principalement :", options:["du Ier au IVe siècle","du XVIe au XIXe siècle","au XXe siècle uniquement","avant l'an 500"], correct:1, exp:"La traite atlantique s'est déroulée principalement du XVIe au XIXe siècle."},
        {q:"Les captifs africains étaient échangés contre :", options:["de l'or uniquement","des produits manufacturés européens","des terres agricoles","rien, ils étaient offerts"], correct:1, exp:"Les Européens échangeaient des produits manufacturés contre des captifs sur les côtes africaines."},
        {q:"Une conséquence majeure de la traite pour l'Afrique fut :", options:["une croissance démographique rapide","une perte démographique massive","le développement industriel immédiat","aucune conséquence notable"], correct:1, exp:"La déportation de millions de personnes a provoqué une perte démographique considérable."},
        {q:"Outre la traite atlantique, il existait aussi la traite :", options:["polaire","orientale (vers le monde arabe)","antarctique","scandinave"], correct:1, exp:"La traite orientale déportait des Africains vers le monde arabe, en plus de la traite atlantique."}
      ]
    },
    {
      id: "h3",
      title: "Histoire : la colonisation de l'Afrique",
      content: `<p>À la fin du XIXe siècle, les puissances européennes se partagent l'Afrique lors de la <strong>Conférence de Berlin</strong> (1884-1885), sans consulter les populations africaines, marquant le début de la « course à l'Afrique ».</p>
      <p>La <strong>conquête coloniale</strong> s'est faite par des expéditions militaires, souvent violentes, face à la résistance de nombreux royaumes et peuples africains (comme Samory Touré en Afrique de l'Ouest).</p>
      <p>L'<strong>administration coloniale</strong> a imposé de nouvelles frontières, une exploitation économique des ressources (cultures d'exportation, matières premières), le travail forcé, et une domination politique et culturelle qui a profondément bouleversé les sociétés africaines.</p>`,
      quiz: [
        {q:"La Conférence de Berlin a eu lieu en :", options:["1884-1885","1960","1914","1800"], correct:0, exp:"La Conférence de Berlin, qui organise le partage colonial de l'Afrique, s'est tenue en 1884-1885."},
        {q:"La Conférence de Berlin a été organisée :", options:["avec la participation des peuples africains","sans consulter les populations africaines","par l'Union Africaine","après les indépendances"], correct:1, exp:"Les puissances européennes ont décidé du partage de l'Afrique sans consulter les Africains."},
        {q:"Samory Touré est connu pour :", options:["avoir collaboré avec les colons","avoir résisté à la conquête coloniale","avoir signé la Conférence de Berlin","avoir été un explorateur européen"], correct:1, exp:"Samory Touré a mené une résistance armée contre la conquête coloniale française en Afrique de l'Ouest."},
        {q:"L'administration coloniale a notamment imposé :", options:["l'indépendance immédiate","le travail forcé","la fin du commerce","l'autonomie totale des royaumes"], correct:1, exp:"Le travail forcé fut une des pratiques imposées par les administrations coloniales."},
        {q:"Les frontières actuelles de nombreux pays africains proviennent :", options:["des royaumes précoloniaux","du découpage colonial","des Nations Unies","de décisions post-indépendance uniquement"], correct:1, exp:"De nombreuses frontières africaines actuelles ont été fixées lors du partage colonial."}
      ]
    },
    {
      id: "h4",
      title: "Géographie : les milieux naturels de la Côte d'Ivoire",
      content: `<p>La Côte d'Ivoire présente une diversité de <strong>milieux naturels</strong>, du sud vers le nord.</p>
      <p>Le <strong>sud</strong>, proche du littoral, connaît un climat équatorial chaud et humide, avec une forêt dense (forêt tropicale humide), particulièrement adaptée à des cultures comme le cacao, l'hévéa et le palmier à huile.</p>
      <p>Le <strong>centre et le nord</strong> connaissent un climat tropical avec une saison sèche plus marquée, une végétation de savane (arbustes et hautes herbes), favorable à des cultures comme le coton, l'anacarde et à l'élevage.</p>
      <p>Le pays possède aussi un important réseau <strong>hydrographique</strong> (fleuves Bandama, Comoé, Sassandra) qui structure les paysages et les activités humaines.</p>`,
      quiz: [
        {q:"Le sud de la Côte d'Ivoire a un climat :", options:["désertique","équatorial chaud et humide","polaire","méditerranéen"], correct:1, exp:"Le sud du pays, proche du littoral, connaît un climat équatorial chaud et humide."},
        {q:"La végétation dominante du sud est :", options:["la savane","la forêt dense","le désert","la toundra"], correct:1, exp:"Le sud est couvert d'une forêt tropicale dense, adaptée aux cultures comme le cacao."},
        {q:"Le nord de la Côte d'Ivoire est caractérisé par :", options:["une forêt équatoriale dense","une savane avec saison sèche marquée","un climat désertique","une forêt de conifères"], correct:1, exp:"Le nord connaît un climat tropical avec une végétation de savane."},
        {q:"Un fleuve important de Côte d'Ivoire est :", options:["le Nil","le Bandama","l'Amazone","le Congo"], correct:1, exp:"Le Bandama est l'un des principaux fleuves de Côte d'Ivoire."},
        {q:"Une culture typique du sud forestier est :", options:["le coton","le cacao","le blé","l'orge"], correct:1, exp:"Le cacao pousse particulièrement bien dans le climat humide de la zone forestière du sud."}
      ]
    },
    {
      id: "h5",
      title: "Géographie : population et évolution",
      content: `<p>La <strong>population</strong> d'un pays se caractérise par sa répartition (souvent inégale, avec des zones plus peuplées comme les grandes villes) et son évolution démographique (natalité, mortalité, migrations).</p>
      <p>La Côte d'Ivoire connaît une <strong>croissance démographique</strong> importante, avec une population jeune. Les grandes villes comme Abidjan concentrent une part importante de la population, phénomène appelé <strong>urbanisation</strong>.</p>
      <p>Les <strong>migrations</strong> internes (des campagnes vers les villes, appelées exode rural) et internationales influencent aussi la répartition de la population et sa structure.</p>`,
      quiz: [
        {q:"La répartition de la population dans un pays est généralement :", options:["parfaitement égale","inégale","toujours concentrée au nord","impossible à mesurer"], correct:1, exp:"La population se concentre souvent dans certaines zones (villes, littoral) plus que dans d'autres."},
        {q:"L'exode rural désigne :", options:["le départ des habitants des villes vers les campagnes","le départ des habitants des campagnes vers les villes","une migration internationale uniquement","l'absence de migration"], correct:1, exp:"L'exode rural est le déplacement des populations rurales vers les villes."},
        {q:"L'urbanisation désigne :", options:["la disparition des villes","la croissance et le développement des villes","la baisse de la population urbaine","l'absence de migrations"], correct:1, exp:"L'urbanisation correspond à la croissance de la population et de l'espace urbains."},
        {q:"La Côte d'Ivoire a une population plutôt :", options:["vieillissante","jeune","en forte diminution","stable depuis un siècle"], correct:1, exp:"Le pays connaît une population jeune, avec une natalité relativement élevée."},
        {q:"Abidjan est un exemple de :", options:["zone rurale peu peuplée","grande concentration urbaine","désert inhabité","zone agricole exclusivement"], correct:1, exp:"Abidjan concentre une part importante de la population du pays, illustrant l'urbanisation."}
      ]
    },
    {
      id: "h6",
      title: "Géographie : les activités économiques",
      content: `<p>L'économie de la Côte d'Ivoire repose sur plusieurs <strong>activités économiques</strong> complémentaires.</p>
      <p>L'<strong>agriculture</strong> reste centrale, avec des cultures d'exportation (cacao, café, hévéa, anacarde, palmier à huile) et des cultures vivrières (igname, manioc, riz, maïs) destinées à la consommation locale.</p>
      <p>L'<strong>élevage</strong> se développe surtout dans le nord, plus favorable aux pâturages. Les <strong>ressources minières</strong> (or, manganèse, pétrole offshore) contribuent aussi à l'économie.</p>
      <p>Le <strong>secteur secondaire</strong> (transformation agroalimentaire, industrie) et le <strong>secteur tertiaire</strong> (commerce, transport, services) se développent, notamment autour du port d'Abidjan.</p>`,
      quiz: [
        {q:"Une culture d'exportation majeure de la Côte d'Ivoire est :", options:["le blé","le cacao","l'orge","le seigle"], correct:1, exp:"La Côte d'Ivoire est le premier producteur mondial de cacao."},
        {q:"Une culture vivrière (destinée à la consommation locale) est :", options:["le cacao","le café","l'igname","l'hévéa"], correct:2, exp:"L'igname est une culture vivrière destinée principalement à la consommation locale."},
        {q:"L'élevage se développe surtout :", options:["dans le sud forestier","dans le nord, plus favorable aux pâturages","uniquement sur le littoral","dans les zones urbaines"], correct:1, exp:"Le nord, avec sa végétation de savane, est plus propice à l'élevage."},
        {q:"Le secteur tertiaire regroupe notamment :", options:["l'agriculture","l'industrie de transformation","le commerce et les services","les mines uniquement"], correct:2, exp:"Le secteur tertiaire regroupe le commerce, les transports et les services."},
        {q:"Un port important pour l'économie ivoirienne est celui :", options:["d'Abidjan","de Marseille","de Dakar uniquement","de Lomé exclusivement"], correct:0, exp:"Le port d'Abidjan est un pôle économique majeur pour le commerce extérieur du pays."}
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
      title: "La reproduction chez les êtres vivants",
      content: `<p>La reproduction assure la <strong>survie des espèces</strong>. On distingue la reproduction sexuée et la reproduction asexuée.</p>
      <p>La <strong>reproduction sexuée</strong> nécessite la fusion d'une cellule reproductrice mâle et d'une cellule reproductrice femelle (fécondation), produisant une descendance génétiquement différente des parents.</p>
      <p>Chez les <strong>plantes à fleurs</strong>, la reproduction sexuée passe par la pollinisation (transport du pollen des étamines vers le pistil, souvent par le vent ou les insectes), puis la fécondation, qui aboutit à la formation d'une graine et d'un fruit.</p>
      <p>La <strong>reproduction asexuée</strong> (bouturage, division cellulaire) ne nécessite pas de fécondation et produit des individus génétiquement identiques au parent.</p>`,
      quiz: [
        {q:"La reproduction sexuée nécessite :", options:["une seule cellule","la fusion de deux cellules reproductrices","aucune cellule spécifique","uniquement la lumière"], correct:1, exp:"La reproduction sexuée résulte de la fécondation, fusion d'une cellule mâle et d'une cellule femelle."},
        {q:"La pollinisation est le transport :", options:["de l'eau vers les racines","du pollen des étamines vers le pistil","des graines vers le sol","de la sève dans la tige"], correct:1, exp:"La pollinisation transporte le pollen, souvent par le vent ou les insectes, jusqu'au pistil."},
        {q:"Après la fécondation chez une plante à fleurs se forme :", options:["une feuille","une graine et un fruit","une racine uniquement","une nouvelle fleur immédiatement"], correct:1, exp:"La fécondation aboutit à la formation d'une graine, souvent protégée dans un fruit."},
        {q:"La reproduction asexuée produit des individus :", options:["génétiquement différents des parents","génétiquement identiques au parent","toujours stériles","incapables de survivre"], correct:1, exp:"Sans fécondation, les individus issus de reproduction asexuée sont des copies génétiques du parent."},
        {q:"Le bouturage est un exemple de reproduction :", options:["sexuée","asexuée","hybride","aucune des deux"], correct:1, exp:"Le bouturage permet de faire pousser une nouvelle plante à partir d'un fragment, sans fécondation : c'est asexué."}
      ]
    },
    {
      id: "s2",
      title: "La digestion",
      content: `<p>La <strong>digestion</strong> est l'ensemble des transformations que subissent les aliments dans le tube digestif pour être assimilables par l'organisme.</p>
      <p>Le <strong>tube digestif</strong> comprend : la bouche (mastication, salive), l'œsophage (transport), l'estomac (brassage, sucs gastriques), l'intestin grêle (digestion finale et absorption des nutriments) et le gros intestin (absorption d'eau, formation des déchets).</p>
      <p>Les aliments sont transformés en <strong>nutriments</strong> (sucres simples, acides aminés, acides gras) suffisamment petits pour traverser la paroi de l'intestin grêle et passer dans le sang.</p>
      <p>Les <strong>déchets non digérés</strong> sont évacués sous forme de selles.</p>`,
      quiz: [
        {q:"La mastication se déroule dans :", options:["l'estomac","la bouche","l'intestin grêle","le gros intestin"], correct:1, exp:"La mastication est la première étape de la digestion, réalisée dans la bouche."},
        {q:"L'absorption des nutriments a lieu principalement dans :", options:["l'œsophage","l'estomac","l'intestin grêle","la bouche"], correct:2, exp:"C'est au niveau de l'intestin grêle que les nutriments traversent la paroi pour passer dans le sang."},
        {q:"Les nutriments doivent être suffisamment petits pour :", options:["être mastiqués","traverser la paroi de l'intestin","être stockés dans l'estomac","être digérés une seconde fois"], correct:1, exp:"Seules des molécules petites peuvent traverser la paroi intestinale pour rejoindre le sang."},
        {q:"Le rôle du gros intestin est notamment :", options:["la mastication","l'absorption d'eau et la formation des déchets","la sécrétion de salive","le broyage mécanique des aliments"], correct:1, exp:"Le gros intestin absorbe l'eau restante et forme les déchets évacués sous forme de selles."},
        {q:"L'estomac participe à la digestion grâce :", options:["à la salive uniquement","au brassage et aux sucs gastriques","à l'absorption des nutriments","à la mastication"], correct:1, exp:"L'estomac brasse les aliments et les mélange à des sucs gastriques acides."}
      ]
    },
    {
      id: "s3",
      title: "La respiration",
      content: `<p>La <strong>respiration</strong> permet aux êtres vivants d'échanger des gaz avec leur milieu : absorption du dioxygène (O₂) et rejet du dioxyde de carbone (CO₂).</p>
      <p>Chez l'être humain, l'air entre par le nez ou la bouche, traverse la trachée, puis les bronches, jusqu'aux <strong>poumons</strong>, où se trouvent de minuscules sacs appelés alvéoles pulmonaires.</p>
      <p>C'est au niveau des <strong>alvéoles pulmonaires</strong>, entourées de vaisseaux sanguins, que se réalisent les échanges gazeux : le dioxygène passe dans le sang, tandis que le dioxyde de carbone passe du sang vers l'air pour être expiré.</p>
      <p>Le mouvement de la <strong>cage thoracique</strong> et du diaphragme permet l'inspiration (entrée d'air) et l'expiration (sortie d'air).</p>`,
      quiz: [
        {q:"La respiration permet d'absorber :", options:["du dioxyde de carbone","du dioxygène","de l'azote pur","de la vapeur d'eau uniquement"], correct:1, exp:"La respiration absorbe le dioxygène nécessaire à l'organisme."},
        {q:"Les échanges gazeux se font au niveau :", options:["de la trachée","des bronches","des alvéoles pulmonaires","du nez"], correct:2, exp:"Les alvéoles pulmonaires, entourées de vaisseaux sanguins, sont le lieu des échanges gazeux."},
        {q:"Le gaz rejeté lors de l'expiration est principalement :", options:["le dioxygène","le dioxyde de carbone","l'azote","l'hydrogène"], correct:1, exp:"Le dioxyde de carbone, produit par les cellules, est rejeté lors de l'expiration."},
        {q:"L'air passe successivement par :", options:["poumons puis trachée puis bronches","nez, trachée, bronches, alvéoles","alvéoles puis nez puis trachée","bronches puis nez"], correct:1, exp:"Le trajet de l'air est : nez/bouche → trachée → bronches → alvéoles pulmonaires."},
        {q:"Le muscle qui participe à la respiration est :", options:["le cœur","le diaphragme","le foie","l'estomac"], correct:1, exp:"Le diaphragme, avec la cage thoracique, permet les mouvements d'inspiration et d'expiration."}
      ]
    },
    {
      id: "s4",
      title: "La circulation sanguine",
      content: `<p>Le <strong>cœur</strong> est un muscle qui fonctionne comme une pompe, propulsant le sang dans tout l'organisme à travers un réseau de vaisseaux sanguins.</p>
      <p>On distingue les <strong>artères</strong> (transportent le sang du cœur vers les organes, souvent riche en dioxygène), les <strong>veines</strong> (ramènent le sang vers le cœur, souvent chargé en dioxyde de carbone) et les <strong>capillaires</strong> (vaisseaux très fins où se font les échanges avec les cellules).</p>
      <p>Le <strong>sang</strong> transporte le dioxygène, les nutriments, mais aussi les déchets et le dioxyde de carbone. Il est composé de plasma, de globules rouges (transport de l'O₂), de globules blancs (défense de l'organisme) et de plaquettes (coagulation).</p>`,
      quiz: [
        {q:"Le cœur fonctionne comme :", options:["un filtre","une pompe","un réservoir uniquement","un capteur"], correct:1, exp:"Le cœur pompe le sang pour le faire circuler dans tout le corps."},
        {q:"Les artères transportent le sang :", options:["des organes vers le cœur","du cœur vers les organes","uniquement dans les poumons","elles ne transportent pas de sang"], correct:1, exp:"Les artères conduisent le sang depuis le cœur vers les différents organes."},
        {q:"Les globules rouges sont responsables :", options:["de la défense contre les infections","du transport du dioxygène","de la coagulation","de la digestion"], correct:1, exp:"Les globules rouges transportent le dioxygène dans tout l'organisme."},
        {q:"Les échanges entre le sang et les cellules se font au niveau :", options:["des artères","des veines","des capillaires","du cœur"], correct:2, exp:"Les capillaires, très fins, permettent les échanges directs avec les cellules."},
        {q:"Les plaquettes sanguines interviennent dans :", options:["le transport de l'oxygène","la défense immunitaire","la coagulation du sang","la digestion des aliments"], correct:2, exp:"Les plaquettes participent à la coagulation, essentielle pour arrêter les saignements."}
      ]
    },
    {
      id: "s5",
      title: "Le système nerveux",
      content: `<p>Le <strong>système nerveux</strong> permet de recevoir des informations de l'environnement, de les traiter et de commander une réponse de l'organisme.</p>
      <p>Il comprend le <strong>système nerveux central</strong> (cerveau et moelle épinière) et le <strong>système nerveux périphérique</strong> (les nerfs, qui relient le système central aux organes des sens et aux muscles).</p>
      <p>Un <strong>réflexe</strong> est une réponse rapide et involontaire à un stimulus (ex : retirer sa main d'une plaque chaude), qui passe par la moelle épinière sans nécessiter le traitement conscient du cerveau, ce qui la rend très rapide.</p>
      <p>Le <strong>cerveau</strong> est le centre de commande volontaire : il gère la pensée, la mémoire, et les mouvements volontaires.</p>`,
      quiz: [
        {q:"Le système nerveux central comprend :", options:["les nerfs uniquement","le cerveau et la moelle épinière","les muscles","les organes des sens"], correct:1, exp:"Le système nerveux central regroupe le cerveau et la moelle épinière."},
        {q:"Un réflexe est une réponse :", options:["lente et volontaire","rapide et involontaire","toujours consciente","impossible à expliquer"], correct:1, exp:"Le réflexe est une réponse rapide et automatique, sans traitement conscient du cerveau."},
        {q:"Le trajet d'un réflexe passe principalement par :", options:["le cerveau uniquement","la moelle épinière","le cœur","les poumons"], correct:1, exp:"Le circuit réflexe passe par la moelle épinière, permettant une réponse très rapide."},
        {q:"Le système nerveux périphérique est constitué :", options:["du cerveau","des nerfs","de la moelle épinière uniquement","du cœur"], correct:1, exp:"Les nerfs relient le système central aux organes des sens et aux muscles."},
        {q:"Le cerveau gère notamment :", options:["uniquement les réflexes","la pensée et les mouvements volontaires","la digestion exclusivement","la coagulation du sang"], correct:1, exp:"Le cerveau est le centre des fonctions volontaires comme la pensée et les mouvements conscients."}
      ]
    },
    {
      id: "s6",
      title: "Écosystèmes et relations alimentaires",
      content: `<p>Un <strong>écosystème</strong> est formé d'un milieu de vie (biotope) et de l'ensemble des êtres vivants qui y habitent (biocénose), en interaction les uns avec les autres.</p>
      <p>Une <strong>chaîne alimentaire</strong> représente les relations « est mangé par » entre les êtres vivants d'un écosystème, en partant des <strong>producteurs</strong> (végétaux, qui produisent leur matière grâce à la photosynthèse), suivis des <strong>consommateurs</strong> (herbivores, puis carnivores), et enfin des <strong>décomposeurs</strong> (champignons, bactéries) qui recyclent la matière organique morte.</p>
      <p>Un <strong>réseau alimentaire</strong> regroupe plusieurs chaînes alimentaires en interaction, illustrant la complexité des relations dans un écosystème.</p>`,
      quiz: [
        {q:"Le biotope désigne :", options:["l'ensemble des êtres vivants","le milieu de vie physique","uniquement les plantes","uniquement les animaux"], correct:1, exp:"Le biotope est le milieu physique (sol, eau, climat) dans lequel vivent les organismes."},
        {q:"Les producteurs dans une chaîne alimentaire sont généralement :", options:["les carnivores","les végétaux","les décomposeurs","les champignons uniquement"], correct:1, exp:"Les végétaux, grâce à la photosynthèse, produisent leur propre matière organique : ce sont les producteurs."},
        {q:"Le rôle des décomposeurs est de :", options:["produire de la matière organique","recycler la matière organique morte","chasser les herbivores","polliniser les fleurs"], correct:1, exp:"Les décomposeurs (champignons, bactéries) recyclent la matière organique morte dans l'écosystème."},
        {q:"Une chaîne alimentaire représente les relations :", options:["de reproduction","« est mangé par »","de pollinisation","de migration"], correct:1, exp:"La chaîne alimentaire relie les êtres vivants selon qui mange qui."},
        {q:"Un réseau alimentaire est :", options:["une seule chaîne alimentaire isolée","un ensemble de chaînes alimentaires en interaction","uniquement composé de producteurs","une notion sans lien avec les chaînes alimentaires"], correct:1, exp:"Le réseau alimentaire regroupe plusieurs chaînes alimentaires interconnectées."}
      ]
    }
  ]
}

};

if (typeof module !== "undefined") module.exports = COURSES;
