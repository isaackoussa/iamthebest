// I'm The Best — Générateur LOCAL d'exercices
// Version avec notation mathématique LaTeX : $...$
// Compatible MathJax / KaTeX
// Fonctionne hors-ligne une fois les données chargées.

const LOCAL_GEN = (function(){

  /* =========================================================
     UTILITAIRES
  ========================================================= */

  function randInt(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function randNonZeroInt(min, max){
    let n;
    do {
      n = randInt(min, max);
    } while (n === 0);
    return n;
  }

  function pick(arr){
    return arr[randInt(0, arr.length - 1)];
  }

  function shuffle(arr){
    const a = arr.slice();

    for (let i = a.length - 1; i > 0; i--){
      const j = randInt(0, i);
      [a[i], a[j]] = [a[j], a[i]];
    }

    return a;
  }

  /* ---------- Affichage mathématique ---------- */

  function math(latex){
    return `$${latex}$`;
  }

  function fmt(n){
    const r = Math.round(n * 1000) / 1000;
    return String(r).replace(".", ",");
  }

  function latexNumber(n){
    return fmt(n).replace(",", "{,}");
  }

  function gcd(a, b){
    a = Math.abs(a);
    b = Math.abs(b);

    while (b){
      [a, b] = [b, a % b];
    }

    return a || 1;
  }

  function fracStr(num, den){
    if (den < 0){
      num = -num;
      den = -den;
    }

    const g = gcd(num, den);

    num /= g;
    den /= g;

    if (den === 1){
      return String(num);
    }

    return `\\frac{${num}}{${den}}`;
  }

  function qcm(q, options, correct, exp){
    return {
      type: "qcm",
      exercise: {
        q,
        options,
        correct,
        exp
      }
    };
  }

  function open(statement, solution){
    return {
      type: "open",
      exercise: {
        statement,
        solution
      }
    };
  }

  /* =========================================================
     OPTIONS NUMÉRIQUES
  ========================================================= */

  function numericOptions(correctVal, decorators){

    const wrongs = decorators.map(d => d(correctVal));

    const uniq = [];

    wrongs.forEach(w => {
      if (w !== correctVal && !uniq.includes(w)){
        uniq.push(w);
      }
    });

    while (uniq.length < 3){
      uniq.push(
        correctVal +
        randNonZeroInt(-9, 9) *
        (uniq.length + 1)
      );
    }

    const opts = shuffle([
      correctVal,
      ...uniq.slice(0, 3)
    ]);

    return {
      options: opts.map(v =>
        typeof v === "number"
          ? fmt(v)
          : String(v)
      ),

      correctIndex: opts.indexOf(correctVal)
    };
  }

  /* =========================================================
     MATHS
  ========================================================= */

  const MATHS = {

    /* ---------- M1 : Puissances de 10 ---------- */

    m1: [

      () => {

        const a =
          randInt(1, 9) +
          (Math.random() < 0.5
            ? randInt(1, 9) / 10
            : 0);

        const p = randNonZeroInt(-6, 6);

        const value = a * Math.pow(10, p);

        const correct =
          `${latexNumber(a)} \\times 10^{${p}}`;

        const { options, correctIndex } =
          numericOptions(correct, [

            () =>
              `${latexNumber(a)} \\times 10^{${p + 1}}`,

            () =>
              `${latexNumber(a)} \\times 10^{${p - 1}}`,

            () =>
              `${latexNumber(a + 1)} \\times 10^{${p}}`

          ]);

        return qcm(

          `Écris le nombre ${math(latexNumber(value))}
           sous la forme ${math("a \\times 10^p")}
           avec ${math("1 \\leq a < 10")}.`,

          options.map(math),

          correctIndex,

          `${math(
            `${latexNumber(value)}
             =
             ${latexNumber(a)}
             \\times
             10^{${p}}`
          )}.
          Le nombre ${math("a")} doit être compris entre
          ${math("1")} et ${math("10")} (10 exclu).`

        );

      },

      /* ---------- Produit de puissances ---------- */

      () => {

        const a1 = randInt(1, 9);
        const p1 = randInt(1, 5);

        const a2 = randInt(1, 9);
        const p2 = randInt(1, 5);

        const prod = a1 * a2;
        const pSum = p1 + p2;

        const correct =
          `${prod} \\times 10^{${pSum}}`;

        const { options, correctIndex } =
          numericOptions(correct, [

            () =>
              `${a1 + a2} \\times 10^{${pSum}}`,

            () =>
              `${prod} \\times 10^{${pSum + 1}}`,

            () =>
              `${prod} \\times 10^{${p1 * p2}}`

          ]);

        return qcm(

          `Calcule
          ${math(
            `(${a1} \\times 10^{${p1}})
             \\times
             (${a2} \\times 10^{${p2}})`
          )}.`,

          options.map(math),

          correctIndex,

          `On multiplie les coefficients et on additionne les exposants :
          ${math(
            `${a1}\\times${a2}=${prod}`
          )}
          et
          ${math(
            `${p1}+${p2}=${pSum}`
          )}.

          Donc :
          ${math(correct)}.`

        );

      }

    ],

    /* ===================================================== */

    m2: [

      () => {

        const scenario = pick([

          {
            text:
              `${math("(d_1) \\parallel (d_2)")}
               et
               ${math("(d_3) \\perp (d_1)")}`,

            answer:
              math("(d_3) \\perp (d_2)")
          },

          {
            text:
              `${math("(d_1) \\perp (d_2)")}
               et
               ${math("(d_3) \\perp (d_1)")}`,

            answer:
              math("(d_3) \\parallel (d_2)")
          },

          {
            text:
              `${math("(d_1) \\parallel (d_2)")}
               et
               ${math("(d_2) \\parallel (d_3)")}`,

            answer:
              math("(d_1) \\parallel (d_3)")
          },

          {
            text:
              `${math("(d_1) \\perp (d_2)")}
               et
               ${math("(d_1) \\perp (d_3)")}`,

            answer:
              math("(d_2) \\parallel (d_3)")
          }

        ]);

        const wrongs = [

          math("(d_3) \\parallel (d_2)"),
          math("(d_3) \\perp (d_2)"),
          "On ne peut rien conclure",
          math("(d_1) \\parallel (d_3)")

        ].filter(w => w !== scenario.answer);

        const options = shuffle([
          scenario.answer,
          ...shuffle(wrongs).slice(0, 3)
        ]);

        return qcm(

          `On sait que ${scenario.text}.
           Que peut-on en conclure ?`,

          options,

          options.indexOf(scenario.answer),

          `D'après les propriétés du parallélisme
           et de l'orthogonalité :
           ${scenario.text}
           entraîne
           ${scenario.answer}.`

        );

      }

    ],

    /* ===================================================== */

    m3: [

      () => {

        const a = randNonZeroInt(-9, 9);
        const b = randNonZeroInt(2, 9);

        const c = randNonZeroInt(-9, 9);
        const d = randNonZeroInt(2, 9);

        const op = pick(["+", "\\times"]);

        let numN;
        let denN;
        let statement;

        if (op === "+"){

          numN = a * d + c * b;
          denN = b * d;

          statement =
            `Calcule
             ${math(`${fracStr(a,b)} + ${fracStr(c,d)}`)}.`;

        } else {

          numN = a * c;
          denN = b * d;

          statement =
            `Calcule
             ${math(`${fracStr(a,b)} \\times ${fracStr(c,d)}`)}.`;

        }

        const correct = fracStr(numN, denN);

        const { options, correctIndex } =
          numericOptions(correct, [

            () =>
              fracStr(
                numN + gcd(numN, denN),
                denN
              ),

            () =>
              fracStr(
                numN,
                denN + 1
              ),

            () =>
              fracStr(
                -numN,
                denN
              )

          ]);

        return qcm(

          statement,

          options.map(math),

          correctIndex,

          `On effectue le calcul puis on simplifie :
           ${math(`\\boxed{${correct}}`)}.`

        );

      }

    ],

    /* ===================================================== */

    m4: [

      () => {

        const a = randNonZeroInt(-12, 12);
        const b = randNonZeroInt(-12, 12);

        const dist = Math.abs(b - a);

        const { options, correctIndex } =
          numericOptions(dist, [

            v => v + 1,
            v => Math.abs(a + b),
            v => v - 1

          ]);

        return qcm(

          `A a pour abscisse ${math(a)}
           et B a pour abscisse ${math(b)}.
           Quelle est la distance ${math("AB")} ?`,

          options.map(v =>
            math(`${v}`)
          ),

          correctIndex,

          `${math(
            `AB = |${b} - (${a})| = ${dist}`
          )}.`

        );

      },

      () => {

        const a = randNonZeroInt(-12, 12);
        const b = randNonZeroInt(-12, 12);

        const mid = (a + b) / 2;

        const { options, correctIndex } =
          numericOptions(mid, [

            v => v + 1,
            v => v - 1,
            v => a + b

          ]);

        return qcm(

          `Quelle est l'abscisse du milieu de
           ${math("[AB]")}
           si
           ${math(`A(${a})`)}
           et
           ${math(`B(${b})`)} ?`,

          options.map(math),

          correctIndex,

          `${math(
            `x_I =
             \\frac{${a}+${b}}{2}
             =
             ${latexNumber(mid)}`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m5: [

      () => {

        const bc = randInt(4, 20) * 2;
        const ij = bc / 2;

        const { options, correctIndex } =
          numericOptions(ij, [

            v => v + 1,
            v => v * 2,
            v => v - 1

          ]);

        return qcm(

          `Dans un triangle ${math("ABC")},
           ${math("I")} est le milieu de ${math("[AB]")}
           et ${math("J")} le milieu de ${math("[AC]")}.
           ${math(`BC = ${bc}\\,cm`)}.
           Que vaut ${math("IJ")} ?`,

          options.map(v =>
            math(`${v}\\,cm`)
          ),

          correctIndex,

          `D'après la droite des milieux :
           ${math(
             `IJ = \\frac{BC}{2}
              = \\frac{${bc}}{2}
              = ${ij}\\,cm`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    m6: [

      () => {

        const n = randInt(1, 4);
        const base = pick([2, 3, 4, 5, 10]);

        const correct =
          fracStr(1, Math.pow(base, n));

        const { options, correctIndex } =
          numericOptions(correct, [

            () =>
              String(-Math.pow(base, n)),

            () =>
              fracStr(1, base * n),

            () =>
              String(Math.pow(base, n))

          ]);

        return qcm(

          `Que vaut ${math(`${base}^{-${n}}`)} ?`,

          options.map(math),

          correctIndex,

          `${math(
            `${base}^{-${n}}
             =
             \\frac{1}{${base}^{${n}}}
             =
             ${correct}`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m7: [

      () => {

        const n = randInt(5, 12);

        const sum = (n - 2) * 180;

        const { options, correctIndex } =
          numericOptions(sum, [

            v => v + 180,
            v => v - 180,
            v => n * 180

          ]);

        const names = {
          5: "pentagone",
          6: "hexagone",
          7: "heptagone",
          8: "octogone",
          9: "ennéagone",
          10: "décagone"
        };

        const name =
          names[n] ||
          `polygone à ${n} côtés`;

        return qcm(

          `Quelle est la somme des angles intérieurs
           d'un ${name}
           ${math(`(${n}\\text{ côtés})`)} ?`,

          options.map(o =>
            math(`${o}^{\\circ}`)
          ),

          correctIndex,

          `${math(
            `S = (n-2)\\times180^{\\circ}
             = (${n}-2)\\times180^{\\circ}
             = ${sum}^{\\circ}`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m8: [

      () => {

        const ax = randInt(-5, 5);
        const ay = randInt(-5, 5);

        const bx =
          ax + randNonZeroInt(-8, 8);

        const by =
          ay + randNonZeroInt(-8, 8);

        const cx =
          bx + randNonZeroInt(-8, 8);

        const cy =
          by + randNonZeroInt(-8, 8);

        const dx =
          cx - (bx - ax);

        const dy =
          cy - (by - ay);

        return open(

          `On donne
           ${math(`A(${ax};${ay})`)},
           ${math(`B(${bx};${by})`)},
           ${math(`C(${cx};${cy})`)}
           et
           ${math(`D(${dx};${dy}`)}).
           Montre que ${math("ABCD")}
           est un parallélogramme.`,

          `<p>
            Vecteur
            ${math(
              `\\overrightarrow{AB}
               =
               (${bx-ax};${by-ay})`
            )}.
          </p>

          <p>
            ${math(
              `\\overrightarrow{DC}
               =
               (${cx-dx};${cy-dy})
               =
               (${bx-ax};${by-ay})`
            )}.
          </p>

          <p>
            Donc :
            ${math(
              `\\overrightarrow{AB}
               =
               \\overrightarrow{DC}`
            )}.
          </p>

          <p>
            Ainsi ${math("ABCD")} est un parallélogramme
            d'après la caractérisation vectorielle.
          </p>`

        );

      }

    ],

    /* ===================================================== */

    m9: [

      () => {

        const k = randNonZeroInt(-4, 4);
        const len = randInt(2, 12);

        const newLen =
          Math.abs(k) * len;

        const { options, correctIndex } =
          numericOptions(newLen, [

            v => v + 2,
            v => len,
            v => v - 2

          ]);

        return qcm(

          `Un vecteur ${math("u")}
           a pour longueur ${math(`${len}\\,cm`)}.
           Quelle est la longueur du vecteur
           ${math(`${k}u`)} ?`,

          options.map(o =>
            math(`${o}\\,cm`)
          ),

          correctIndex,

          `La longueur de
           ${math("k\\vec{u}")}
           vaut
           ${math("|k|")}
           fois celle de
           ${math("\\vec{u}")}.
           
           Donc :
           ${math(
             `|${k}|\\times${len}
              =
              ${newLen}\\,cm`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    m10: [

      () => {

        const a = randNonZeroInt(-9, 9);
        const b = randNonZeroInt(-9, 9);
        const k = randNonZeroInt(-9, 9);

        const symbol =
          k > 0
            ? (a < b ? "<" : ">")
            : (a < b ? ">" : "<");

        const correct =
          `${a*k} ${symbol} ${b*k}`;

        const opts = [
          `${a*k} < ${b*k}`,
          `${a*k} > ${b*k}`,
          `${a*k} = ${b*k}`
        ];

        const options =
          shuffle(
            Array.from(new Set(opts))
          );

        return qcm(

          `On sait que
           ${math(`${a} < ${b}`)}.
           
           On multiplie les deux membres par
           ${math(k)}.
           
           Quelle inégalité obtient-on ?`,

          options.map(math),

          options.indexOf(correct),

          `Multiplier une inégalité par un nombre
           ${k > 0 ? "positif conserve" : "négatif inverse"}
           le sens de l'inégalité.

           Donc :
           ${math(correct)}.`

        );

      }

    ],

    /* ===================================================== */

    m11: [

      () => {

        const v1 = randInt(5, 18);
        const e1 = randInt(1, 6);

        const v2 = randInt(5, 18);
        const e2 = randInt(1, 6);

        const v3 = randInt(5, 18);
        const e3 = randInt(1, 6);

        const total =
          e1 + e2 + e3;

        const mean =
          (
            v1 * e1 +
            v2 * e2 +
            v3 * e3
          ) / total;

        const rounded =
          Math.round(mean * 100) / 100;

        const { options, correctIndex } =
          numericOptions(
            rounded,
            [
              v => v + 1,
              v => v - 1,
              v => (v1 + v2 + v3) / 3
            ]
          );

        return qcm(

          `Série :
           ${math(`${v1}`)}
           (effectif ${math(e1)}),
           ${math(`${v2}`)}
           (effectif ${math(e2)}),
           ${math(`${v3}`)}
           (effectif ${math(e3)}).
           
           Quelle est la moyenne
           arrondie au centième ?`,

          options.map(math),

          correctIndex,

          `${math(
            `\\bar{x}
             =
             \\frac{
               ${v1}\\times${e1}
               +
               ${v2}\\times${e2}
               +
               ${v3}\\times${e3}
             }{
               ${e1}+${e2}+${e3}
             }
             =
             ${latexNumber(rounded)}`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m12: [

      () => {

        const a =
          randNonZeroInt(-6, 6);

        const b =
          randNonZeroInt(-9, 9);

        const x =
          randInt(-8, 8);

        const img =
          a * x + b;

        const { options, correctIndex } =
          numericOptions(img, [

            v => v + a,
            v => v - b,
            v => a * x

          ]);

        const expression =
          b >= 0
            ? `${a}x+${b}`
            : `${a}x-${Math.abs(b)}`;

        return qcm(

          `Pour l'application
           ${math(`f(x)=${expression}`)},
           quelle est l'image de
           ${math(x)} ?`,

          options.map(math),

          correctIndex,

          `${math(
            `f(${x})
             =
             ${a}\\times${x}
             ${b >= 0 ? "+" : "-"}
             ${Math.abs(b)}
             =
             ${img}`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m13: [

      () => {

        const a = randInt(2, 9);
        const b = randInt(2, 9);

        const sign =
          pick(["+", "−"]);

        const b2 = b * b;
        const ab2 = 2 * a * b;

        const correct =
          sign === "+"
            ? `${a*a}x^2 + ${ab2}x + ${b2}`
            : `${a*a}x^2 - ${ab2}x + ${b2}`;

        const wrong1 =
          `${a*a}x^2 + ${b2}`;

        const wrong2 =
          sign === "+"
            ? `${a*a}x^2 - ${ab2}x + ${b2}`
            : `${a*a}x^2 + ${ab2}x + ${b2}`;

        const wrong3 =
          `${a*a}x^2 + ${ab2}x - ${b2}`;

        const options =
          shuffle([
            correct,
            wrong1,
            wrong2,
            wrong3
          ]);

        return qcm(

          `Développe
           ${math(`(${a}x ${sign} ${b})^2`)}.`,

          options.map(math),

          options.indexOf(correct),

          `On utilise :
           ${math(
             `(a\\pm b)^2
              =
              a^2
              \\pm 2ab
              +b^2`
           )}.

           Donc :
           ${math(correct)}.`

        );

      }

    ],

    /* ===================================================== */

    m14: [

      () => {

        const px = randInt(-8, 8);
        const py = randInt(-8, 8);

        const vx =
          randNonZeroInt(-6, 6);

        const vy =
          randNonZeroInt(-6, 6);

        const ix = px + vx;
        const iy = py + vy;

        const correct =
          `(${ix};${iy})`;

        const { options, correctIndex } =
          numericOptions(correct, [

            () =>
              `(${px-vx};${py-vy})`,

            () =>
              `(${ix};${py})`,

            () =>
              `(${px};${iy})`

          ]);

        return qcm(

          `Soit
           ${math(`M(${px};${py})`)}
           et le vecteur de translation
           ${math(`\\vec{u}=(${vx};${vy})`)}.
           
           Quelles sont les coordonnées de l'image
           ${math("M'")} de ${math("M")} ?`,

          options.map(math),

          correctIndex,

          `${math(
            `M'
             =
             (${px}+${vx};${py}+${vy})
             =
             (${ix};${iy})`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m15: [

      () => {

        const ux =
          randNonZeroInt(-6, 6);

        const uy =
          randNonZeroInt(-6, 6);

        const vx =
          randNonZeroInt(-6, 6);

        const vy =
          randNonZeroInt(-6, 6);

        const sx = ux + vx;
        const sy = uy + vy;

        const correct =
          `(${sx};${sy})`;

        const { options, correctIndex } =
          numericOptions(correct, [

            () =>
              `(${ux-vx};${uy-vy})`,

            () =>
              `(${sx+1};${sy})`,

            () =>
              `(${ux*vx};${uy*vy})`

          ]);

        return qcm(

          `La composée d'une translation
           de vecteur
           ${math(`\\vec{u}=(${ux};${uy})`)}
           suivie d'une translation
           de vecteur
           ${math(`\\vec{v}=(${vx};${vy})`)}
           est une translation de vecteur...`,

          options.map(math),

          correctIndex,

          `${math(
            `\\vec{u}+\\vec{v}
             =
             (${ux}+${vx};${uy}+${vy})
             =
             (${sx};${sy})`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    m16: [

      () => {

        const L = randInt(4, 15);
        const l = randInt(3, 12);

        const area = L * l;

        const { options, correctIndex } =
          numericOptions(area, [

            v => v + L,
            v => v - l,
            v => 2 * (L + l)

          ]);

        return qcm(

          `Un pavé droit a une base rectangulaire
           de
           ${math(`${L}\\,cm`)}
           sur
           ${math(`${l}\\,cm`)}.
           
           Quelle est l'aire de la section obtenue
           par un plan parallèle à la base ?`,

          options.map(o =>
            math(`${o}\\,cm^2`)
          ),

          correctIndex,

          `La section parallèle à la base reproduit
           exactement cette base.

           Donc :
           ${math(
             `A = ${L}\\times${l}
              =
              ${area}\\,cm^2`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    m17: [

      () => {

        const a = randInt(2, 9);
        const b = randInt(1, 20);

        const c =
          randInt(
            1,
            a - 1 < 1 ? 1 : a - 1
          );

        const d = randInt(1, 20);

        const cc =
          c === a
            ? c + 1
            : c;

        const x =
          (d - b) / (a - cc);

        const correct =
          Number.isInteger(x)
            ? x
            : Math.round(x * 100) / 100;

        const { options, correctIndex } =
          numericOptions(correct, [

            v => v + 1,
            v => v - 1,
            v => -v

          ]);

        return qcm(

          `Résous :
           ${math(
             `${a}x+${b}
              =
              ${cc}x+${d}`
           )}.`,

          options.map(o =>
            math(`x=${o}`)
          ),

          correctIndex,

          `${math(
            `${a}x-${cc}x
             =
             ${d}-${b}`
          )}.

           Donc :
           ${math(
             `${a-cc}x
              =
              ${d-b}`
           )}.

           Finalement :
           ${math(
             `x=${latexNumber(correct)}`
           )}.`

        );

      }

    ]

  };

  /* =========================================================
     PHYSIQUE-CHIMIE
  ========================================================= */

  const PC = {

    /* ---------- Masse ---------- */

    p2: [

      () => {

        const kg =
          randInt(1, 40) +
          pick([0, 0.2, 0.5, 0.25]);

        const g =
          kg * 1000;

        const { options, correctIndex } =
          numericOptions(g, [

            v => v / 10,
            v => v * 10,
            v => v + 100

          ]);

        return qcm(

          `Convertis
           ${math(`${latexNumber(kg)}\\,kg`)}
           en grammes.`,

          options.map(o =>
            math(`${o}\\,g`)
          ),

          correctIndex,

          `${math(
            `${latexNumber(kg)}
             \\times1000
             =
             ${latexNumber(g)}\\,g`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    p3: [

      () => {

        const L = randInt(1, 20);
        const cm3 = L * 1000;

        const { options, correctIndex } =
          numericOptions(cm3, [

            v => v / 10,
            v => v * 10,
            v => v + 500

          ]);

        return qcm(

          `Convertis
           ${math(`${L}\\,L`)}
           en
           ${math("cm^3")}.`,

          options.map(o =>
            math(`${o}\\,cm^3`)
          ),

          correctIndex,

          `${math(
            `1\\,L=1000\\,cm^3`
          )}.

           Donc :
           ${math(
             `${L}\\,L
              =
              ${cm3}\\,cm^3`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    p4: [

      () => {

        const m = randInt(20, 900);
        const V = randInt(5, 300);

        const rho =
          Math.round((m / V) * 100) / 100;

        const { options, correctIndex } =
          numericOptions(rho, [

            v =>
              Math.round(v * 10) / 10 + 1,

            v =>
              Math.round((V / m) * 100) / 100,

            v =>
              v + 1

          ]);

        return qcm(

          `Un corps a une masse de
           ${math(`${m}\\,g`)}
           et un volume de
           ${math(`${V}\\,cm^3`)}.

           Quelle est sa masse volumique ?`,

          options.map(o =>
            math(`${o}\\,g/cm^3`)
          ),

          correctIndex,

          `${math(
            `\\rho
             =
             \\frac{m}{V}
             =
             \\frac{${m}}{${V}}
             \\approx
             ${latexNumber(rho)}
             \\,g/cm^3`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    p10: [

      () => {

        const V =
          randInt(6, 24) * 2;

        const n =
          pick([2, 3, 4]);

        const each =
          Math.round((V / n) * 100) / 100;

        const { options, correctIndex } =
          numericOptions(each, [

            v => V,
            v => v + 1,
            v => v - 1

          ]);

        return qcm(

          `Un générateur de
           ${math(`${V}\\,V`)}
           alimente
           ${math(n)}
           lampes identiques en série.

           Quelle tension reçoit chaque lampe ?`,

          options.map(o =>
            math(`${o}\\,V`)
          ),

          correctIndex,

          `En série, les tensions s'additionnent.

           Donc :
           ${math(
             `U
              =
              \\frac{${V}}{${n}}
              \\approx
              ${latexNumber(each)}\\,V`
           )}.`

        );

      },

      () => {

        const V =
          randInt(3, 24);

        const { options, correctIndex } =
          numericOptions(V, [

            v =>
              Math.round((v / 3) * 100) / 100,

            v => v * 3,
            v => v + 3

          ]);

        return qcm(

          `Un générateur de
           ${math(`${V}\\,V`)}
           alimente trois lampes identiques
           en dérivation.

           Quelle tension reçoit chaque lampe ?`,

          options.map(o =>
            math(`${o}\\,V`)
          ),

          correctIndex,

          `En dérivation, chaque branche est soumise
           à la même tension que le générateur.

           Donc :
           ${math(
             `U=${V}\\,V`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    p11: [

      () => {

        const v1 =
          pick([1.5, 4.5, 9]);

        const n =
          randInt(2, 4);

        const total =
          Math.round(v1 * n * 100) / 100;

        const { options, correctIndex } =
          numericOptions(total, [

            v => v1,
            v => v - v1,
            v => v + v1

          ]);

        return qcm(

          `On associe
           ${math(n)}
           piles identiques de
           ${math(`${latexNumber(v1)}\\,V`)}
           en série, dans le même sens.

           Quelle est la tension totale ?`,

          options.map(o =>
            math(`${o}\\,V`)
          ),

          correctIndex,

          `En série et dans le même sens,
           les tensions s'additionnent :

           ${math(
             `${latexNumber(v1)}
              \\times
              ${n}
              =
              ${latexNumber(total)}\\,V`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    p14: [

      () => {

        const m =
          randInt(2, 120);

        const g =
          pick([9.8, 10]);

        const P =
          Math.round(m * g * 100) / 100;

        const { options, correctIndex } =
          numericOptions(P, [

            v => v / g,
            v => v + g,
            v => v - m

          ]);

        return qcm(

          `Une masse de
           ${math(`${m}\\,kg`)}
           est soumise à la pesanteur
           avec
           ${math(`g=${latexNumber(g)}\\,N/kg`)}.

           Quel est son poids ?`,

          options.map(o =>
            math(`${o}\\,N`)
          ),

          correctIndex,

          `${math(
            `P=m\\times g
             =
             ${m}\\times${latexNumber(g)}
             =
             ${latexNumber(P)}\\,N`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    p15: [

      () => {

        const V =
          randInt(50, 900);

        const rho =
          pick([1000, 800, 1.29]);

        const g = 10;

        const Vm3 =
          V / 1e6;

        const push =
          Math.round(
            rho * Vm3 * g * 1000
          ) / 1000;

        const { options, correctIndex } =
          numericOptions(push, [

            v => v * 2,

            v =>
              Math.round(
                v / 2 * 1000
              ) / 1000,

            v => v + 1

          ]);

        return qcm(

          `Un corps de volume
           ${math(`${V}\\,cm^3`)}
           est plongé entièrement dans un fluide
           de masse volumique
           ${math(`${rho}\\,kg/m^3`)}.

           On prend
           ${math(`g=${g}\\,N/kg`)}.

           Quelle est l'intensité de la poussée
           d'Archimède ?`,

          options.map(o =>
            math(`${o}\\,N`)
          ),

          correctIndex,

          `${math(
            `\\Pi
             =
             \\rho_{fluide}
             \\times
             V_{déplacé}
             \\times g`
          )}.

           Or :
           ${math(
             `${V}\\,cm^3
              =
              ${Vm3}\\,m^3`
           )}.

           Donc :
           ${math(
             `\\Pi
              \\approx
              ${latexNumber(push)}\\,N`
           )}.`

        );

      }

    ],

    /* ===================================================== */

    p17: [

      () => {

        const d =
          randInt(300000, 5000000);

        const t =
          Math.round(
            (d / 300000) * 1000
          ) / 1000;

        const { options, correctIndex } =
          numericOptions(t, [

            v => v * 2,

            v =>
              Math.round(
                v / 2 * 1000
              ) / 1000,

            v => v + 1

          ]);

        return qcm(

          `Une distance de
           ${math(
             `${d.toLocaleString("fr-FR")}\\,km`
           )}
           sépare deux objets.

           Combien de temps, en secondes,
           met la lumière pour la parcourir ?

           On utilise :
           ${math(
             `v\\approx300\\,000\\,km/s`
           )}.`,

          options.map(o =>
            math(`${o}\\,s`)
          ),

          correctIndex,

          `${math(
            `t
             =
             \\frac{d}{v}
             =
             \\frac{${d}}{300000}
             \\approx
             ${latexNumber(t)}\\,s`
          )}.`

        );

      }

    ],

    /* ===================================================== */

    p22: [

      () => {

        const mol =
          pick([

            { f: "H_2O", atoms: 3 },
            { f: "CO_2", atoms: 3 },
            { f: "CH_4", atoms: 5 },
            { f: "O_2", atoms: 2 },
            { f: "H_2", atoms: 2 },
            { f: "NH_3", atoms: 4 }

          ]);

        const { options, correctIndex } =
          numericOptions(mol.atoms, [

            v => v + 1,
            v => v - 1,
            v => v + 2

          ]);

        return qcm(

          `Combien d'atomes au total contient
           une molécule de
           ${math(mol.f)} ?`,

          options.map(math),

          correctIndex,

          `${math(mol.f)}
           contient
           ${math(mol.atoms)}
           atomes au total.`

        );

      }

    ],

    /* ===================================================== */

    p23: [

      () => {

        const el =
          pick([

            {
              name: "hydrogène",
              Z: 1
            },

            {
              name: "carbone",
              Z: 6
            },

            {
              name: "oxygène",
              Z: 8
            },

            {
              name: "azote",
              Z: 7
            },

            {
              name: "sodium",
              Z: 11
            },

            {
              name: "chlore",
              Z: 17
            }

          ]);

        const { options, correctIndex } =
          numericOptions(el.Z, [

            v => v + 1,
            v => v - 1,
            v => v * 2

          ]);

        return qcm(

          `Un atome de ${el.name}
           a pour numéro atomique
           ${math(`Z=${el.Z}`)}.

           Combien d'électrons possède-t-il ?`,

          options.map(math),

          correctIndex,

          `Un atome neutre possède autant
           d'électrons que de protons.

           Donc :
           ${math(
             `N_e=Z=${el.Z}`
           )} électrons.`

        );

      }

    ]

  };

  /* =========================================================
     TEMPLATES
  ========================================================= */

  const TEMPLATES = {
    maths: MATHS,
    pc: PC
  };

  /* =========================================================
     POOL DE SECOURS
  ========================================================= */

  const lastKey = {};

  function poolCandidates(subjectKey, lessonId, type){

    const subj =
      COURSES[subjectKey];

    if (!subj){
      return [];
    }

    const lesson =
      subj.lessons.find(
        l => l.id === lessonId
      );

    if (!lesson){
      return [];
    }

    const cands = [];

    /* ---------- QCM ---------- */

    if (!type || type === "qcm"){

      (lesson.quiz || []).forEach((q, i) => {

        cands.push({

          sig: "quiz" + i,

          make: () => {

            const idx =
              q.options.map(
                (_, k) => k
              );

            const shuffled =
              shuffle(idx);

            const options =
              shuffled.map(
                k => q.options[k]
              );

            const correct =
              shuffled.indexOf(q.correct);

            return qcm(
              q.q,
              options,
              correct,
              q.exp
            );

          }

        });

      });

    }

    /* ---------- Exercices ouverts ---------- */

    if (!type || type === "open"){

      (PRACTICE[lessonId] || [])
        .forEach((p, i) => {

          cands.push({

            sig: "prac" + i,

            make: () =>
              open(
                p.statement,
                p.solution
              )

          });

        });

    }

    return cands;
  }

  /* =========================================================
     GÉNÉRATEUR PRINCIPAL
  ========================================================= */

  function generate(
    subjectKey,
    lessonId,
    type,
    difficulty
  ){

    const tmplList =
      (
        TEMPLATES[subjectKey] &&
        TEMPLATES[subjectKey][lessonId]
      ) || [];

    const candidates = [];

    /* ---------- Templates ---------- */

    tmplList.forEach((fn, i) => {

      candidates.push({

        sig: "tmpl" + i,

        weight: 3,

        make: fn

      });

    });

    /* ---------- Pool de secours ---------- */

    poolCandidates(
      subjectKey,
      lessonId,
      type
    ).forEach(c => {

      candidates.push({

        ...c,

        weight: 1

      });

    });

    if (!candidates.length){
      return null;
    }

    /* ---------- Évite la répétition ---------- */

    let pool = candidates;

    if (candidates.length > 1){

      const filtered =
        candidates.filter(
          c => c.sig !== lastKey[lessonId]
        );

      if (filtered.length){
        pool = filtered;
      }

    }

    /* ---------- Tirage pondéré ---------- */

    const weighted = [];

    pool.forEach(c => {

      for (
        let i = 0;
        i < c.weight;
        i++
      ){

        weighted.push(c);

      }

    });

    const chosen =
      pick(weighted);

    lastKey[lessonId] =
      chosen.sig;

    /* ---------- Génération ---------- */

    let result;

    try {

      result =
        chosen.make();

    } catch (e) {

      console.error(
        "Erreur générateur local :",
        e
      );

      result = null;

    }

    if (!result){
      return null;
    }

    /* ---------- Respect du type ---------- */

    if (
      type &&
      result.type !== type
    ){

      const strict =
        poolCandidates(
          subjectKey,
          lessonId,
          type
        );

      if (strict.length){

        const c =
          pick(strict);

        lastKey[lessonId] =
          c.sig;

        return c.make();

      }

    }

    return result;
  }

  /* =========================================================
     VÉRIFICATION DU CONTENU
  ========================================================= */

  function hasContent(
    subjectKey,
    lessonId
  ){

    const subj =
      COURSES[subjectKey];

    const lesson =
      subj &&
      subj.lessons.find(
        l => l.id === lessonId
      );

    if (!lesson){
      return false;
    }

    const tmplCount =
      (
        TEMPLATES[subjectKey] &&
        TEMPLATES[subjectKey][lessonId] ||
        []
      ).length;

    return (
      tmplCount > 0 ||
      (lesson.quiz &&
       lesson.quiz.length) ||
      (PRACTICE[lessonId] &&
       PRACTICE[lessonId].length)
    );

  }

  /* =========================================================
     API PUBLIQUE
  ========================================================= */

  return {
    generate,
    hasContent
  };

})();