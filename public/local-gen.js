// I'm The Best — Générateur LOCAL d'exercices (sans IA, fonctionne toujours, même hors-ligne)
// Deux mécanismes combinés :
//  1) TEMPLATES : générateurs paramétrés (maths + physique-chimie) qui tirent des valeurs
//     aléatoires et recalculent la bonne réponse à chaque fois -> variété quasi infinie.
//  2) Pool de secours : pour toute leçon (y compris celles sans template), on pioche parmi
//     le quiz de la leçon + ses exercices de pratique, on mélange l'ordre des options d'un
//     QCM (en recalculant l'index de la bonne réponse), et on évite de répéter deux fois de
//     suite le même item -> chaque clic donne un rendu différent, pour les 103 leçons.
const LOCAL_GEN = (function(){

  /* ---------- Utilitaires ---------- */
  function randInt(min, max){ return Math.floor(Math.random() * (max - min + 1)) + min; }
  function randNonZeroInt(min, max){ let n; do { n = randInt(min, max); } while (n === 0); return n; }
  function pick(arr){ return arr[randInt(0, arr.length - 1)]; }
  function shuffle(arr){
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--){
      const j = randInt(0, i);
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
  function fmt(n){
    // affiche proprement un nombre (évite 3.0000000002 dû aux flottants)
    const r = Math.round(n * 1000) / 1000;
    return String(r).replace(".", ",");
  }
  function gcd(a, b){ a = Math.abs(a); b = Math.abs(b); while (b){ [a, b] = [b, a % b]; } return a || 1; }
  function fracStr(num, den){
    if (den < 0){ num = -num; den = -den; }
    const g = gcd(num, den);
    num /= g; den /= g;
    if (den === 1) return String(num);
    return num + "/" + den;
  }

  function qcm(q, options, correct, exp){ return { type: "qcm", exercise: { q, options, correct, exp } }; }
  function open(statement, solution){ return { type: "open", exercise: { statement, solution } }; }

  /* Garde-fou : vérifie qu'un exercice est présentable avant de l'envoyer à
     l'interface. Un générateur peut échouer (banque de faits incapable de
     fournir 4 réponses distinctes, tirage dégénéré, bug de template) ; plutôt
     que d'afficher un QCM avec deux options identiques ou un index de bonne
     réponse invalide, on le rejette et on tire un autre générateur. */
  function validExercise(r){
    if (!r || !r.exercise) return false;
    const e = r.exercise;
    const str = v => typeof v === "string" && v.trim().length > 0;
    if (r.type === "qcm"){
      if (!str(e.q) || !str(e.exp)) return false;
      if (!Array.isArray(e.options) || e.options.length !== 4) return false;
      if (!e.options.every(str)) return false;
      const uniq = {};
      for (const o of e.options){
        const k = o.trim().toLowerCase();
        if (uniq[k]) return false;   // deux options identiques à l'écran
        uniq[k] = true;
      }
      return typeof e.correct === "number" && e.correct >= 0 && e.correct <= 3;
    }
    if (r.type === "open") return str(e.statement) && str(e.solution);
    return false;
  }

  /* Construit 3 fausses réponses numériques plausibles autour de la bonne réponse,
     mélange le tout, renvoie {options, correctIndex}.
     La comparaison d'unicité se fait sur la valeur FORMATÉE (celle réellement affichée),
     pour éviter que deux valeurs brutes différentes (ex : arrondi) ou un leurre de secours
     retombent sur le même texte affiché -> deux options identiques à l'écran. */
  function numericOptions(correctVal, decorators){
    const disp = v => (typeof v === "number" ? fmt(v) : String(v));
    const seen = new Set([disp(correctVal)]);
    const uniq = [];
    decorators.map(d => d(correctVal)).forEach(w => {
      const s = disp(w);
      if (!seen.has(s)) { seen.add(s); uniq.push(w); }
    });
    let guard = 0;
    while (uniq.length < 3 && guard < 40){
      guard++;
      const candidate = (typeof correctVal === "number")
        ? correctVal + randNonZeroInt(-9, 9) * (uniq.length + 1 + guard)
        : correctVal + " ".repeat(guard); // cas rare : leurre textuel, on varie l'espacement pour rester unique
      const s = disp(candidate);
      if (!seen.has(s)) { seen.add(s); uniq.push(candidate); }
    }
    const opts = shuffle([correctVal, ...uniq.slice(0, 3)]);
    return { options: opts.map(disp), correctIndex: opts.indexOf(correctVal) };
  }

  /* Assemble 4 options textuelles : la bonne réponse plus les 3 premiers
     leurres distincts de la liste proposée (les leurres sont donnés par ordre
     de pertinence pédagogique, d'où la prise dans l'ordre). Renvoie
     correctIndex = -1 si on ne peut pas réunir 4 propositions différentes. */
  function fourWays(correct, decoys){
    const seen = new Set([String(correct).trim().toLowerCase()]);
    const wrong = [];
    decoys.forEach(d => {
      const k = String(d).trim().toLowerCase();
      if (!seen.has(k) && wrong.length < 3){ seen.add(k); wrong.push(d); }
    });
    if (wrong.length < 3) return { options: [], correctIndex: -1 };
    const opts = shuffle([correct, ...wrong]);
    return { options: opts, correctIndex: opts.indexOf(correct) };
  }

  /* ================= MATHS ================= */
  const MATHS = {
    m1: [ () => {
      const a = randInt(1, 9) + (Math.random() < 0.5 ? randInt(1, 9) / 10 : 0);
      const p = randNonZeroInt(-6, 6);
      const value = a * Math.pow(10, p);
      const { options, correctIndex } = numericOptions(`${fmt(a)} × 10^${p}`, [
        () => `${fmt(a)} × 10^${p + 1}`, () => `${fmt(a)} × 10^${p - 1}`, () => `${fmt(a + 1)} × 10^${p}`
      ]);
      return qcm(
        `Écris le nombre ${fmt(value)} sous la forme a × 10^p avec 1 ≤ a < 10.`,
        options, correctIndex,
        `${fmt(value)} = ${fmt(a)} × 10^${p} (un seul chiffre non nul avant la virgule dans "a").`
      );
    }, () => {
      const a1 = randInt(1,9), p1 = randInt(1,5), a2 = randInt(1,9), p2 = randInt(1,5);
      const prod = a1*a2, pSum = p1+p2;
      const correct = `${prod} × 10^${pSum}`;
      const { options, correctIndex } = numericOptions(correct, [
        () => `${a1+a2} × 10^${pSum}`, () => `${prod} × 10^${pSum+1}`, () => `${prod} × 10^${p1*p2}`
      ]);
      return qcm(`Calcule (${a1} × 10^${p1}) × (${a2} × 10^${p2}).`, options, correctIndex,
        `On multiplie les "a" entre eux (${a1}×${a2}=${prod}) et on additionne les exposants (${p1}+${p2}=${pSum}) : ${correct}.`);
    }],
    m2: [ () => {
      const scenario = pick([
        {text:"(d1) // (d2) et (d3) ⊥ (d1)", answer:"(d3) ⊥ (d2)"},
        {text:"(d1) ⊥ (d2) et (d3) ⊥ (d1)", answer:"(d3) // (d2)"},
        {text:"(d1) // (d2) et (d2) // (d3)", answer:"(d1) // (d3)"},
        {text:"(d1) ⊥ (d2) et (d1) ⊥ (d3)", answer:"(d2) // (d3)"}
      ]);
      const wrongs = ["(d3) // (d2)", "(d3) ⊥ (d2)", "on ne peut rien conclure", "(d1) // (d3)"].filter(w => w !== scenario.answer);
      const options = shuffle([scenario.answer, ...shuffle(wrongs).slice(0,3)]);
      return qcm(`On sait que ${scenario.text}. Que peut-on en conclure ?`, options, options.indexOf(scenario.answer),
        `D'après les propriétés du parallélisme et de l'orthogonalité : ${scenario.text} ⟹ ${scenario.answer}.`);
    }],
    m3: [ () => {
      const a=randNonZeroInt(-9,9), b=randNonZeroInt(2,9), c=randNonZeroInt(-9,9), d=randNonZeroInt(2,9);
      const op = pick(["+","×"]);
      let numN, denN, statement;
      if (op === "+"){
        numN = a*d + c*b; denN = b*d;
        statement = `Calcule ${fracStr(a,b)} + ${fracStr(c,d)}.`;
      } else {
        numN = a*c; denN = b*d;
        statement = `Calcule ${fracStr(a,b)} × ${fracStr(c,d)}.`;
      }
      const correct = fracStr(numN, denN);
      const { options, correctIndex } = numericOptions(correct, [
        () => fracStr(numN + gcd(numN,denN), denN), () => fracStr(numN, denN + 1), () => fracStr(-numN, denN)
      ]);
      return qcm(statement, options, correctIndex, `On calcule puis on simplifie : le résultat est ${correct}.`);
    }],
    m4: [ () => {
      const a = randNonZeroInt(-12, 12), b = randNonZeroInt(-12, 12);
      const dist = Math.abs(b - a);
      const { options, correctIndex } = numericOptions(dist, [v => v+1, v => Math.abs(a+b), v => v-1]);
      return qcm(`A a pour abscisse ${a} et B a pour abscisse ${b}. Quelle est la distance AB ?`, options, correctIndex,
        `AB = |${b} − (${a})| = ${dist}.`);
    }, () => {
      const a = randNonZeroInt(-12, 12), b = randNonZeroInt(-12, 12);
      const mid = (a+b)/2;
      const { options, correctIndex } = numericOptions(mid, [v => v+1, v => v-1, v => a+b]);
      return qcm(`Quelle est l'abscisse du milieu de [AB] si A(${a}) et B(${b}) ?`, options, correctIndex,
        `x_I = (${a} + ${b}) / 2 = ${fmt(mid)}.`);
    }],
    m5: [ () => {
      const bc = randInt(4, 20) * 2;
      const ij = bc / 2;
      const { options, correctIndex } = numericOptions(ij, [v=>v+1, v=>v*2, v=>v-1]);
      return qcm(`Dans un triangle ABC, I est le milieu de [AB] et J le milieu de [AC]. BC = ${bc} cm. Que vaut IJ ?`, options, correctIndex,
        `D'après la droite des milieux, IJ = BC/2 = ${bc}/2 = ${ij} cm.`);
    }],
    m6: [ () => {
      const n = randInt(1, 4);
      const base = pick([2,3,4,5,10]);
      const correct = fracStr(1, Math.pow(base, n));
      const { options, correctIndex } = numericOptions(correct, [
        () => String(-Math.pow(base,n)), () => fracStr(1, base*n), () => String(Math.pow(base,n))
      ]);
      return qcm(`Que vaut ${base}⁻${n} ?`, options, correctIndex, `${base}⁻${n} = 1/${base}^${n} = ${correct}.`);
    }],
    m7: [ () => {
      const n = randInt(5, 12);
      const sum = (n-2)*180;
      const { options, correctIndex } = numericOptions(sum, [v=>v+180, v=>v-180, v=>n*180]);
      const names = {5:"pentagone",6:"hexagone",7:"heptagone",8:"octogone",9:"ennéagone",10:"décagone"};
      const name = names[n] || `polygone à ${n} côtés`;
      return qcm(`Quelle est la somme des angles intérieurs d'un ${name} (${n} côtés) ?`, options.map(o=>o+"°"), correctIndex,
        `Somme = (n−2) × 180° = (${n}−2) × 180 = ${sum}°.`);
    }],
    m8: [ () => {
      const ax=randInt(-5,5), ay=randInt(-5,5), bx=ax+randNonZeroInt(-8,8), by=ay+randNonZeroInt(-8,8);
      const cx=bx+randNonZeroInt(-8,8), cy=by+randNonZeroInt(-8,8);
      const dx = cx-(bx-ax), dy = cy-(by-ay);
      return open(
        `On donne A(${ax};${ay}), B(${bx};${by}), C(${cx};${cy}) et D(${dx};${dy}). Montre que ABCD est un parallélogramme.`,
        `<p>Vecteur AB : (${bx-ax} ; ${by-ay}). Vecteur DC : (${cx-dx} ; ${cy-dy}) = (${bx-ax} ; ${by-ay}).<br>Comme vecteur AB = vecteur DC, ABCD est un parallélogramme (caractérisation vectorielle).</p>`
      );
    }],
    m9: [ () => {
      const k = randNonZeroInt(-4, 4);
      const len = randInt(2, 12);
      const newLen = Math.abs(k) * len;
      const { options, correctIndex } = numericOptions(newLen, [v=>v+2, v=>len, v=>v-2]);
      return qcm(`Un vecteur u a pour longueur ${len} cm. Quelle est la longueur du vecteur ${k}u ?`, options.map(o=>o+" cm"), correctIndex,
        `La longueur de k×u vaut |k| fois celle de u : |${k}| × ${len} = ${newLen} cm.`);
    }],
    m10: [
      () => {
        // Multiplication des deux membres d'une inégalité : a < b est garanti
        // par construction (l'ancienne version tirait a et b indépendamment,
        // donc l'énoncé pouvait affirmer une inégalité fausse).
        const a = randNonZeroInt(-9, 8);
        const b = randInt(a + 1, 9);
        const k = randNonZeroInt(-9, 9);
        const symbol = k > 0 ? "<" : ">";
        const correct = `${a * k} ${symbol} ${b * k}`;
        const { options, correctIndex } = fourWays(correct, [
          `${a * k} ${k > 0 ? ">" : "<"} ${b * k}`,
          `${a + k} ${symbol} ${b + k}`,
          `${a * k} = ${b * k}`,
          `${b * k} ${symbol} ${a * k}`
        ]);
        if (correctIndex < 0) return null;
        return qcm(`On sait que ${a} < ${b}. On multiplie les deux membres par ${k}. Quelle inégalité obtient-on ?`,
          options, correctIndex,
          `Multiplier les deux membres par un nombre ${k > 0 ? "positif conserve" : "négatif inverse"} le sens de l'inégalité. Ici ${a} × ${k} = ${a * k} et ${b} × ${k} = ${b * k}, donc ${correct}.`);
      },
      () => {
        // Addition d'un même nombre aux deux membres : le sens est conservé
        const a = randNonZeroInt(-9, 8);
        const b = randInt(a + 1, 9);
        const k = randNonZeroInt(-9, 9);
        const correct = `${a + k} < ${b + k}`;
        const { options, correctIndex } = fourWays(correct, [
          `${a + k} > ${b + k}`,
          `${a * k} < ${b * k}`,
          `${a + k} = ${b + k}`,
          `${a - k} < ${b - k}`
        ]);
        if (correctIndex < 0) return null;
        return qcm(`On sait que ${a} < ${b}. On ajoute ${k} aux deux membres. Quelle inégalité obtient-on ?`,
          options, correctIndex,
          `Ajouter un même nombre aux deux membres ne change jamais le sens d'une inégalité : ${a} + ${k} = ${a + k} et ${b} + ${k} = ${b + k}, donc ${correct}.`);
      },
      () => {
        // Plus petit ensemble de nombres contenant une valeur donnée
        const bank = [
          { n:"7", a:"ℕ (entiers naturels)" }, { n:"0", a:"ℕ (entiers naturels)" },
          { n:"12", a:"ℕ (entiers naturels)" }, { n:"√9", a:"ℕ (entiers naturels)" },
          { n:"−4", a:"ℤ (entiers relatifs)" }, { n:"−15", a:"ℤ (entiers relatifs)" },
          { n:"2/3", a:"ℚ (rationnels)" }, { n:"−7/2", a:"ℚ (rationnels)" },
          { n:"0,25", a:"ℚ (rationnels)" }, { n:"1,75", a:"ℚ (rationnels)" },
          { n:"√2", a:"ℝ (réels) — il est irrationnel" }, { n:"π", a:"ℝ (réels) — il est irrationnel" },
          { n:"√3", a:"ℝ (réels) — il est irrationnel" }
        ];
        return bankQcm(bank,
          i => `Quel est le plus petit de ces ensembles qui contient le nombre ${i.n} ?`,
          i => `${i.n} appartient à ${i.a}. Rappel : ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, et un nombre irrationnel comme √2 ou π est dans ℝ sans être dans ℚ.`,
          ["ℕ (entiers naturels)", "ℤ (entiers relatifs)", "ℚ (rationnels)", "ℝ (réels) — il est irrationnel"]);
      },
      () => {
        // Rangement de trois réels dans l'ordre croissant
        const bank = [
          { l:"−3", v:-3 }, { l:"−1,5", v:-1.5 }, { l:"−2/3", v:-2/3 }, { l:"−1/2", v:-0.5 },
          { l:"0", v:0 }, { l:"1/4", v:0.25 }, { l:"0,5", v:0.5 }, { l:"2/3", v:2/3 },
          { l:"1", v:1 }, { l:"3/2", v:1.5 }, { l:"√2", v:Math.SQRT2 }, { l:"2", v:2 },
          { l:"π", v:Math.PI }, { l:"√9", v:3 }, { l:"7/2", v:3.5 }
        ];
        const trio = shuffle(bank).slice(0, 3);
        // valeurs deux à deux distinctes (évite un "ordre" ambigu)
        for (let i = 0; i < 3; i++) for (let j = i + 1; j < 3; j++) {
          if (Math.abs(trio[i].v - trio[j].v) < 1e-9) return null;
        }
        const asc = trio.slice().sort((x, y) => x.v - y.v);
        const correct = asc.map(x => x.l).join(" < ");
        const perms = [
          [0,2,1],[1,0,2],[1,2,0],[2,0,1],[2,1,0]
        ].map(p => p.map(k => asc[k].l).join(" < "));
        const { options, correctIndex } = fourWays(correct, perms);
        if (correctIndex < 0) return null;
        return qcm(`Range ces trois nombres réels dans l'ordre croissant : ${trio.map(x => x.l).join(" ; ")}.`,
          options, correctIndex,
          `En valeurs approchées : ${asc.map(x => x.l + " ≈ " + fmt(Math.round(x.v * 100) / 100)).join(", ")}. L'ordre croissant est donc ${correct}.`);
      }
    ],
    m11: [ () => {
      const v1=randInt(5,18), e1=randInt(1,6), v2=randInt(5,18), e2=randInt(1,6), v3=randInt(5,18), e3=randInt(1,6);
      const total = e1+e2+e3;
      const mean = (v1*e1+v2*e2+v3*e3)/total;
      const { options, correctIndex } = numericOptions(Math.round(mean*100)/100, [v=>v+1, v=>v-1, v=>(v1+v2+v3)/3]);
      return qcm(`Série : ${v1} (effectif ${e1}), ${v2} (effectif ${e2}), ${v3} (effectif ${e3}). Quelle est la moyenne (arrondie au centième) ?`,
        options, correctIndex,
        `Moyenne = (${v1}×${e1} + ${v2}×${e2} + ${v3}×${e3}) / (${e1}+${e2}+${e3}) = ${fmt(mean)}.`);
    }],
    m12: [ () => {
      const a = randNonZeroInt(-6,6), b = randNonZeroInt(-9,9), x = randInt(-8,8);
      const img = a*x+b;
      const { options, correctIndex } = numericOptions(img, [v=>v+a, v=>v-b, v=>a*x]);
      return qcm(`Pour l'application f définie par f(x) = ${a}x ${b>=0?"+":"−"} ${Math.abs(b)}, quelle est l'image de ${x} ?`, options, correctIndex,
        `f(${x}) = ${a}×${x} ${b>=0?"+":"−"} ${Math.abs(b)} = ${img}.`);
    }],
    m13: [ () => {
      const a = randInt(2,9), b = randInt(2,9);
      const sign = pick(["+","−"]);
      const b2 = b*b, ab2 = 2*a*b;
      const correct = sign === "+" ? `${a*a}x² + ${ab2}x + ${b2}` : `${a*a}x² − ${ab2}x + ${b2}`;
      const wrong1 = `${a*a}x² + ${b2}`;
      const wrong2 = sign === "+" ? `${a*a}x² − ${ab2}x + ${b2}` : `${a*a}x² + ${ab2}x + ${b2}`;
      const wrong3 = `${a*a}x² + ${ab2}x − ${b2}`;
      const options = shuffle([correct, wrong1, wrong2, wrong3]);
      return qcm(`Développe (${a}x ${sign} ${b})².`, options, options.indexOf(correct),
        `(a${sign}b)² = a² ${sign==="+"?"+":"−"} 2ab + b² avec a=${a}x, b=${b} : ${correct}.`);
    }],
    m14: [ () => {
      const px=randInt(-8,8), py=randInt(-8,8), vx=randNonZeroInt(-6,6), vy=randNonZeroInt(-6,6);
      const ix = px+vx, iy = py+vy;
      const correct = `(${ix} ; ${iy})`;
      const { options, correctIndex } = numericOptions(correct, [
        () => `(${px-vx} ; ${py-vy})`, () => `(${ix} ; ${py})`, () => `(${px} ; ${iy})`
      ]);
      return qcm(`Soit M(${px} ; ${py}) et le vecteur de translation u(${vx} ; ${vy}). Quelles sont les coordonnées de l'image M' de M ?`, options, correctIndex,
        `M'(x+a ; y+b) = (${px}+${vx} ; ${py}+${vy}) = (${ix} ; ${iy}).`);
    }],
    m15: [ () => {
      const ux=randNonZeroInt(-6,6), uy=randNonZeroInt(-6,6), vx=randNonZeroInt(-6,6), vy=randNonZeroInt(-6,6);
      const sx = ux+vx, sy = uy+vy;
      const correct = `(${sx} ; ${sy})`;
      const { options, correctIndex } = numericOptions(correct, [
        () => `(${ux-vx} ; ${uy-vy})`, () => `(${sx+1} ; ${sy})`, () => `(${ux*vx} ; ${uy*vy})`
      ]);
      return qcm(`La composée d'une translation de vecteur u(${ux} ; ${uy}) suivie d'une translation de vecteur v(${vx} ; ${vy}) est une translation de vecteur...`, options, correctIndex,
        `Le vecteur de la composée est u+v = (${ux}+${vx} ; ${uy}+${vy}) = (${sx} ; ${sy}).`);
    }],
    m16: [ () => {
      const L = randInt(4,15), l = randInt(3,12);
      const area = L*l;
      const { options, correctIndex } = numericOptions(area, [v=>v+L, v=>v-l, v=>2*(L+l)]);
      return qcm(`Un pavé droit a une base rectangulaire de ${L} cm sur ${l} cm. Quelle est l'aire de la section obtenue par un plan parallèle à la base ?`,
        options.map(o=>o+" cm²"), correctIndex,
        `La section parallèle à la base d'un pavé droit reproduit exactement cette base : aire = ${L} × ${l} = ${area} cm².`);
    }],
    m17: [ () => {
      const a=randInt(2,9), b=randInt(1,20), c=randInt(1,a-1<1?1:a-1), d=randInt(1,20);
      // a x + b = c x + d, a != c pour solution unique
      const cc = c === a ? c+1 : c;
      const x = (d-b)/(a-cc);
      const correct = Number.isInteger(x) ? x : Math.round(x*100)/100;
      const { options, correctIndex } = numericOptions(correct, [v=>v+1, v=>v-1, v=>-v]);
      return qcm(`Résous : ${a}x + ${b} = ${cc}x + ${d}.`, options.map(o=>"x = "+o), correctIndex,
        `${a}x − ${cc}x = ${d} − ${b}, donc ${a-cc}x = ${d-b}, d'où x = ${fmt(correct)}.`);
    }]
  };

  /* ================= PHYSIQUE-CHIMIE ================= */
  const PC = {
    p2: [ () => {
      const kg = randInt(1, 40) + pick([0, 0.2, 0.5, 0.25]);
      const g = kg * 1000;
      const { options, correctIndex } = numericOptions(g, [v=>v/10, v=>v*10, v=>v+100]);
      return qcm(`Convertis ${fmt(kg)} kg en grammes.`, options.map(o=>o+" g"), correctIndex, `${fmt(kg)} × 1000 = ${fmt(g)} g.`);
    }],
    p3: [ () => {
      const L = randInt(1, 20);
      const cm3 = L * 1000;
      const { options, correctIndex } = numericOptions(cm3, [v=>v/10, v=>v*10, v=>v+500]);
      return qcm(`Convertis ${L} L en cm³.`, options.map(o=>o+" cm³"), correctIndex, `1 L = 1000 cm³, donc ${L} L = ${cm3} cm³.`);
    }],
    p4: [ () => {
      const m = randInt(20, 900), V = randInt(5, 300);
      const rho = Math.round((m/V)*100)/100;
      const { options, correctIndex } = numericOptions(rho, [v=>Math.round(v*10)/10+1, v=>Math.round((V/m)*100)/100, v=>v+1]);
      return qcm(`Un corps a une masse de ${m} g et un volume de ${V} cm³. Quelle est sa masse volumique ?`, options.map(o=>o+" g/cm³"), correctIndex,
        `ρ = m/V = ${m}/${V} ≈ ${fmt(rho)} g/cm³.`);
    }],
    p10: [ () => {
      const V = randInt(6, 24) * 2, n = pick([2,3,4]);
      const each = Math.round((V/n)*100)/100;
      const { options, correctIndex } = numericOptions(each, [v=>V, v=>v+1, v=>v-1]);
      return qcm(`Un générateur de ${V} V alimente ${n} lampes identiques en SÉRIE. Quelle tension reçoit chaque lampe (loi d'additivité) ?`,
        options.map(o=>o+" V"), correctIndex, `En série, les tensions s'additionnent : chaque lampe reçoit ${V}/${n} ≈ ${fmt(each)} V.`);
    }, () => {
      const V = randInt(3, 24);
      const { options, correctIndex } = numericOptions(V, [v=>Math.round((v/3)*100)/100, v=>v*3, v=>v+3]);
      return qcm(`Un générateur de ${V} V alimente 3 lampes identiques en DÉRIVATION. Quelle tension reçoit chaque lampe ?`,
        options.map(o=>o+" V"), correctIndex,
        `En dérivation, chaque branche est soumise à la même tension que le générateur : chaque lampe reçoit ${V} V (la tension ne se divise pas entre les branches, contrairement au montage en série).`);
    }],
    p11: [ () => {
      const v1 = pick([1.5, 4.5, 9]), n = randInt(2,4);
      const total = Math.round(v1*n*100)/100;
      const { options, correctIndex } = numericOptions(total, [v=>v1, v=>v-v1, v=>v+v1]);
      return qcm(`On associe ${n} piles identiques de ${fmt(v1)} V en série, dans le même sens. Quelle est la tension totale ?`, options.map(o=>o+" V"), correctIndex,
        `En série et dans le même sens, les tensions s'additionnent : ${fmt(v1)} × ${n} = ${fmt(total)} V.`);
    }],
    p14: [ () => {
      const m = randInt(2, 120), g = pick([9.8, 10]);
      const P = Math.round(m*g*100)/100;
      const { options, correctIndex } = numericOptions(P, [v=>v/g, v=>v+g, v=>v-m]);
      return qcm(`Une masse de ${m} kg est soumise à la pesanteur (g = ${g} N/kg). Quel est son poids ?`, options.map(o=>o+" N"), correctIndex,
        `P = m × g = ${m} × ${g} = ${fmt(P)} N.`);
    }],
    p15: [ () => {
      const V = randInt(50, 900), rho = pick([1000, 800, 1.29]);
      const g = 10;
      const Vm3 = V/1e6; // cm3 -> m3
      const push = Math.round(rho*Vm3*g*1000)/1000;
      const { options, correctIndex } = numericOptions(push, [v=>v*2, v=>Math.round(v/2*1000)/1000, v=>v+1]);
      return qcm(`Un corps de volume ${V} cm³ est plongé entièrement dans un fluide de masse volumique ${rho} kg/m³ (g=10 N/kg). Quelle est l'intensité de la poussée d'Archimède ?`,
        options.map(o=>o+" N"), correctIndex,
        `Π = ρ_fluide × V_déplacé(m³) × g = ${rho} × ${Vm3} × 10 ≈ ${fmt(push)} N.`);
    }],
    p17: [ () => {
      const d = randInt(300000, 5000000);
      const t = Math.round((d/300000)*1000)/1000;
      const { options, correctIndex } = numericOptions(t, [v=>v*2, v=>Math.round(v/2*1000)/1000, v=>v+1]);
      return qcm(`Une distance de ${d.toLocaleString("fr-FR")} km sépare deux objets. Combien de temps (en secondes) met la lumière pour la parcourir (vitesse ≈ 300 000 km/s) ?`,
        options.map(o=>o+" s"), correctIndex, `t = distance / vitesse = ${d} / 300000 ≈ ${fmt(t)} s.`);
    }],
    p22: [ () => {
      const mol = pick([
        {f:"H₂O", atoms:3}, {f:"CO₂", atoms:3}, {f:"CH₄", atoms:5}, {f:"O₂", atoms:2}, {f:"H₂", atoms:2}, {f:"NH₃", atoms:4}
      ]);
      const { options, correctIndex } = numericOptions(mol.atoms, [v=>v+1, v=>v-1, v=>v+2]);
      return qcm(`Combien d'atomes au total contient une molécule de ${mol.f} ?`, options, correctIndex, `${mol.f} contient ${mol.atoms} atomes au total.`);
    }],
    p23: [ () => {
      const el = pick([
        {name:"hydrogène", Z:1}, {name:"carbone", Z:6}, {name:"oxygène", Z:8}, {name:"azote", Z:7}, {name:"sodium", Z:11}, {name:"chlore", Z:17}
      ]);
      const { options, correctIndex } = numericOptions(el.Z, [v=>v+1, v=>v-1, v=>v*2]);
      return qcm(`Un atome de ${el.name} a pour numéro atomique Z=${el.Z}. Combien d'électrons possède-t-il ?`, options, correctIndex,
        `Un atome neutre a autant d'électrons que de protons, donc ${el.Z} électrons pour Z=${el.Z}.`);
    }]
  };

  /* ---------- Banques de faits : primitives communes ---------- */

  /* QCM construit à partir d'une banque d'items {q..., a}. La bonne réponse est
     celle de l'item tiré, et les 3 leurres sont d'autres réponses DIFFÉRENTES
     de la même banque (ou de la liste de catégories fournie) -> les leurres
     sont toujours plausibles et jamais identiques à la bonne réponse.
     Renvoie null si la banque ne peut pas fournir 4 réponses distinctes. */
  function bankQcm(bank, qFn, expFn, cats){
    const item = pick(bank);
    const pool = cats || bank.map(x => x.a);
    const wrong = [];
    shuffle(pool).forEach(a => {
      if (a !== item.a && wrong.indexOf(a) === -1 && wrong.length < 3) wrong.push(a);
    });
    if (wrong.length < 3) return null;
    const opts = shuffle([item.a, ...wrong]);
    return qcm(qFn(item), opts, opts.indexOf(item.a), expFn(item));
  }

  /* ================= PHYSIQUE-CHIMIE (compléments) ================= */

  const ETATS = ["solide", "liquide", "gazeux"];
  const CORPS_ETATS = [
    { n:"le fer", a:"solide" }, { n:"l'eau", a:"liquide" }, { n:"le dioxygène", a:"gazeux" },
    { n:"le mercure", a:"liquide" }, { n:"le bois", a:"solide" }, { n:"le dioxyde de carbone", a:"gazeux" },
    { n:"l'huile", a:"liquide" }, { n:"le cuivre", a:"solide" }, { n:"le diazote", a:"gazeux" },
    { n:"le sel", a:"solide" }, { n:"l'alcool", a:"liquide" }, { n:"la vapeur d'eau", a:"gazeux" }
  ];
  const PROP_ETATS = [
    { p:"a une forme propre et un volume propre", a:"solide" },
    { p:"a un volume propre mais prend la forme de son récipient", a:"liquide" },
    { p:"n'a ni forme propre ni volume propre : il occupe tout le récipient", a:"gazeux" },
    { p:"est facilement compressible", a:"gazeux" },
    { p:"présente une surface libre plane et horizontale au repos", a:"liquide" },
    { p:"est pratiquement incompressible et garde sa forme sans récipient", a:"solide" }
  ];
  const CHANGEMENTS = [
    { de:"solide", vers:"liquide", a:"la fusion", ex:"la glace qui fond" },
    { de:"liquide", vers:"solide", a:"la solidification", ex:"l'eau qui devient glace au congélateur" },
    { de:"liquide", vers:"gazeux", a:"la vaporisation", ex:"l'eau qui bout dans une casserole" },
    { de:"gazeux", vers:"liquide", a:"la liquéfaction", ex:"la buée sur une vitre froide" },
    { de:"solide", vers:"gazeux", a:"la sublimation", ex:"la naphtaline qui disparaît" },
    { de:"gazeux", vers:"solide", a:"la condensation solide", ex:"le givre sur une vitre" }
  ];
  const MODES_CHALEUR = ["la conduction", "la convection", "le rayonnement"];
  const SITUATIONS_CHALEUR = [
    { s:"la cuillère en métal qui chauffe dans un bol de soupe chaude", a:"la conduction" },
    { s:"la chaleur du Soleil qui nous parvient à travers le vide", a:"le rayonnement" },
    { s:"l'air chaud qui monte au-dessus d'un radiateur", a:"la convection" },
    { s:"le manche d'une casserole qui devient brûlant", a:"la conduction" },
    { s:"la chaleur ressentie devant un feu de bois, sans le toucher", a:"le rayonnement" },
    { s:"l'eau qui se met en mouvement dans une casserole qu'on chauffe", a:"la convection" },
    { s:"la barre de fer chauffée à une extrémité qui devient chaude à l'autre", a:"la conduction" }
  ];
  const MELANGES_EAU = [
    { n:"le sel", a:"homogène", mis:"soluble" }, { n:"le sucre", a:"homogène", mis:"soluble" },
    { n:"l'alcool", a:"homogène", mis:"miscible" }, { n:"le sirop", a:"homogène", mis:"miscible" },
    { n:"le vinaigre", a:"homogène", mis:"miscible" },
    { n:"l'huile", a:"hétérogène", mis:"non miscible" }, { n:"le sable", a:"hétérogène", mis:"insoluble" },
    { n:"la craie en poudre", a:"hétérogène", mis:"insoluble" }, { n:"l'essence", a:"hétérogène", mis:"non miscible" }
  ];
  const MATERIAUX_COND = [
    { n:"le cuivre", a:"conducteur" }, { n:"l'aluminium", a:"conducteur" }, { n:"le fer", a:"conducteur" },
    { n:"l'eau salée", a:"conducteur" }, { n:"le graphite", a:"conducteur" },
    { n:"le verre", a:"isolant" }, { n:"le plastique", a:"isolant" }, { n:"le bois sec", a:"isolant" },
    { n:"le caoutchouc", a:"isolant" }, { n:"la porcelaine", a:"isolant" }, { n:"l'air sec", a:"isolant" }
  ];
  const LUMIERE_OBJETS = [
    { n:"le Soleil", a:"une source primaire de lumière" },
    { n:"une lampe allumée", a:"une source primaire de lumière" },
    { n:"une bougie allumée", a:"une source primaire de lumière" },
    { n:"une étoile", a:"une source primaire de lumière" },
    { n:"la Lune", a:"un objet diffusant (source secondaire)" },
    { n:"un mur blanc éclairé", a:"un objet diffusant (source secondaire)" },
    { n:"une planète comme Mars", a:"un objet diffusant (source secondaire)" },
    { n:"l'œil", a:"un récepteur de lumière" },
    { n:"une plaque photographique", a:"un récepteur de lumière" },
    { n:"une cellule photoélectrique", a:"un récepteur de lumière" }
  ];
  const COMBUSTIONS_TYPE = [
    { s:"le gaz butane qui brûle sur une gazinière", a:"une combustion avec flamme" },
    { s:"une bougie allumée", a:"une combustion avec flamme" },
    { s:"l'alcool à brûler enflammé", a:"une combustion avec flamme" },
    { s:"la braise rouge d'un barbecue", a:"une combustion sans flamme (incandescence)" },
    { s:"une cigarette qui se consume", a:"une combustion sans flamme (incandescence)" },
    { s:"un morceau de charbon de bois rougeoyant", a:"une combustion sans flamme (incandescence)" },
    { s:"le bois qui flambe dans un feu de cheminée", a:"une combustion avec flamme" }
  ];
  const FORCES_TYPE = [
    { s:"un joueur qui frappe un ballon", a:"une force de contact" },
    { s:"une main qui pousse une table", a:"une force de contact" },
    { s:"la tension d'une corde qui tire une charge", a:"une force de contact" },
    { s:"le frottement du sol sur une caisse qu'on traîne", a:"une force de contact" },
    { s:"le poids d'un fruit qui tombe de l'arbre", a:"une force à distance" },
    { s:"un aimant qui attire un clou sans le toucher", a:"une force à distance" },
    { s:"l'attraction de la Terre sur la Lune", a:"une force à distance" },
    { s:"une règle frottée qui attire des petits papiers", a:"une force à distance" }
  ];
  const DANGERS_ELEC = [
    { s:"une intensité trop grande qui risque de faire fondre les fils", a:"le fusible ou le disjoncteur" },
    { s:"un appareil métallique dont la carcasse pourrait devenir sous tension", a:"la prise de terre" },
    { s:"une fuite de courant vers une personne qui touche un appareil défectueux", a:"le disjoncteur différentiel" },
    { s:"le contact direct des doigts avec un fil dénudé", a:"l'isolation des conducteurs" },
    { s:"deux fils nus qui se touchent et provoquent un court-circuit", a:"le fusible ou le disjoncteur" },
    { s:"l'humidité qui rend le corps beaucoup plus conducteur", a:"ne jamais manipuler l'électricité avec les mains mouillées" }
  ];

  const PC_EXTRA = {
    p1: [
      () => bankQcm(CORPS_ETATS, i => `À température ordinaire, sous quel état physique se trouve ${i.n} ?`,
            i => `À température ordinaire, ${i.n} est à l'état ${i.a}.`, ETATS.concat(["plasma"])),
      () => bankQcm(PROP_ETATS, i => `Quel état physique ${i.p} ?`,
            i => `C'est une propriété de l'état ${i.a}.`, ETATS.concat(["plasma"]))
    ],
    p5: [
      () => {
        const c = randInt(-20, 120);
        const k = c + 273;
        const { options, correctIndex } = numericOptions(k, [v=>v-273-273, v=>c-273, v=>v+100]);
        return qcm(`Convertis ${c} °C en kelvins (K).`, options.map(o=>o+" K"), correctIndex,
          `T(K) = θ(°C) + 273, donc ${c} + 273 = ${k} K.`);
      },
      () => {
        const k = randInt(260, 400);
        const c = k - 273;
        const { options, correctIndex } = numericOptions(c, [v=>k+273, v=>v+273, v=>v-10]);
        return qcm(`Une température vaut ${k} K. Combien fait-elle en degrés Celsius ?`, options.map(o=>o+" °C"), correctIndex,
          `θ(°C) = T(K) − 273, donc ${k} − 273 = ${c} °C.`);
      },
      () => bankQcm([
          { p:"la fusion de la glace sous pression normale", a:"0 °C, soit 273 K" },
          { p:"l'ébullition de l'eau pure sous pression normale", a:"100 °C, soit 373 K" },
          { p:"le zéro absolu", a:"−273 °C, soit 0 K" },
          { p:"la température normale du corps humain", a:"environ 37 °C, soit 310 K" }
        ], i => `Quelle est la température de ${i.p} ?`, i => `${i.p} correspond à ${i.a}.`)
    ],
    p6: [
      () => bankQcm(SITUATIONS_CHALEUR, i => `Quel mode de propagation de la chaleur explique ${i.s} ?`,
            i => `Il s'agit de ${i.a}.`, MODES_CHALEUR.concat(["la dilatation"])),
      () => bankQcm([
          { p:"se propage de proche en proche dans un solide, sans déplacement de matière", a:"la conduction" },
          { p:"se propage grâce au déplacement d'un fluide (liquide ou gaz) qui transporte la chaleur", a:"la convection" },
          { p:"se propage même dans le vide, sans aucun support matériel", a:"le rayonnement" },
          { p:"est le seul mode possible entre le Soleil et la Terre", a:"le rayonnement" }
        ], i => `Quel mode de propagation de la chaleur ${i.p} ?`, i => `C'est ${i.a}.`, MODES_CHALEUR.concat(["la dilatation"]))
    ],
    p7: [
      () => bankQcm(CHANGEMENTS, i => `Comment s'appelle le passage de l'état ${i.de} à l'état ${i.vers} ?`,
            i => `Le passage ${i.de} → ${i.vers} s'appelle ${i.a} (exemple : ${i.ex}).`),
      () => bankQcm(CHANGEMENTS, i => `Quel changement d'état se produit dans le cas suivant : ${i.ex} ?`,
            i => `${i.ex} : c'est ${i.a} (passage ${i.de} → ${i.vers}).`),
      () => open(
        (() => { const c = pick(CHANGEMENTS); return `Un élève observe le phénomène suivant : ${c.ex}. Nomme le changement d'état, précise les états de départ et d'arrivée, et indique si le corps reçoit ou cède de la chaleur.`; })(),
        `<p><strong>Méthode.</strong> On identifie l'état initial puis l'état final, on nomme le changement, puis on raisonne sur la chaleur.</p>
         <p><strong>Rappel des six changements d'état :</strong><br>
         solide → liquide : la fusion (le corps <strong>reçoit</strong> de la chaleur)<br>
         liquide → solide : la solidification (le corps <strong>cède</strong> de la chaleur)<br>
         liquide → gazeux : la vaporisation (le corps <strong>reçoit</strong> de la chaleur)<br>
         gazeux → liquide : la liquéfaction (le corps <strong>cède</strong> de la chaleur)<br>
         solide → gazeux : la sublimation (le corps <strong>reçoit</strong> de la chaleur)<br>
         gazeux → solide : la condensation solide (le corps <strong>cède</strong> de la chaleur)</p>
         <p><strong>Règle simple.</strong> Aller vers un état plus désordonné (solide → liquide → gaz) demande de la chaleur ; revenir en arrière en libère. Pendant tout le changement d'état d'un corps pur, la température reste constante.</p>`)
    ],
    p8: [
      () => bankQcm(MELANGES_EAU, i => `On mélange ${i.n} avec de l'eau. Le mélange obtenu est-il homogène ou hétérogène ?`,
            i => `${i.n} + eau donne un mélange ${i.a} : ${i.n} est ${i.mis} dans l'eau.`,
            ["homogène", "hétérogène", "homogène puis hétérogène après repos", "toujours hétérogène quelle que soit la quantité"]),
      () => bankQcm([
          { p:"séparer l'eau et le sable d'un mélange hétérogène", a:"la filtration" },
          { p:"séparer deux liquides non miscibles comme l'eau et l'huile", a:"la décantation puis l'ampoule à décanter" },
          { p:"récupérer l'eau pure d'une eau salée", a:"la distillation" },
          { p:"laisser les particules les plus lourdes tomber au fond avant de verser", a:"la décantation" }
        ], i => `Quelle technique permet de ${i.p} ?`, i => `Pour ${i.p}, on utilise ${i.a}.`)
    ],
    p9: [
      () => bankQcm(MATERIAUX_COND, i => `${i.n.charAt(0).toUpperCase() + i.n.slice(1)} est-il conducteur ou isolant du courant électrique ?`,
            i => `${i.n.charAt(0).toUpperCase() + i.n.slice(1)} est ${i.a}.`,
            ["conducteur", "isolant", "conducteur seulement à chaud", "isolant seulement à froid"]),
      () => {
        const n = randInt(2, 4);
        const serie = Math.random() < 0.5;
        const correct = serie ? "toutes les lampes s'éteignent" : "les autres lampes restent allumées";
        const opts = shuffle([correct,
          serie ? "les autres lampes restent allumées" : "toutes les lampes s'éteignent",
          "les autres lampes brillent deux fois plus",
          "le générateur est mis en court-circuit"]);
        return qcm(`Un circuit comporte ${n} lampes montées en ${serie ? "série" : "dérivation"} avec une pile. On dévisse une lampe. Que se passe-t-il ?`,
          opts, opts.indexOf(correct),
          serie
            ? `En série, il n'y a qu'une seule boucle : dévisser une lampe ouvre le circuit, donc toutes les lampes s'éteignent.`
            : `En dérivation, chaque lampe est sur sa propre branche : dévisser l'une n'ouvre pas les autres branches, les autres lampes restent allumées.`);
      }
    ],
    p12: [
      () => bankQcm(DANGERS_ELEC, i => `Contre quel risque protège-t-on en priorité dans cette situation : ${i.s} ? Quel est le dispositif ou le geste adapté ?`,
            i => `Face à ${i.s}, la protection adaptée est ${i.a}.`),
      () => bankQcm([
          { p:"le passage du courant à travers le corps humain", a:"l'électrisation (ou l'électrocution si elle est mortelle)" },
          { p:"un contact accidentel entre deux fils qui fait circuler une intensité très élevée", a:"le court-circuit" },
          { p:"un échauffement des fils qui peut déclencher un incendie", a:"la surintensité" },
          { p:"une tension d'alimentation supérieure à celle prévue par l'appareil", a:"la surtension" }
        ], i => `Comment nomme-t-on ${i.p} ?`, i => `${i.p} correspond à ${i.a}.`)
    ],
    p13: [
      () => bankQcm(FORCES_TYPE, i => `S'agit-il d'une force de contact ou d'une force à distance : ${i.s} ?`,
            i => `${i.s} : c'est ${i.a}.`,
            ["une force de contact", "une force à distance", "une force sans point d'application", "une force sans direction"]),
      () => bankQcm([
          { p:"le point du corps où la force s'exerce", a:"le point d'application" },
          { p:"la droite le long de laquelle la force agit", a:"la direction" },
          { p:"l'orientation de la force sur cette droite (vers le haut ou vers le bas, par exemple)", a:"le sens" },
          { p:"l'intensité de la force, mesurée en newtons avec un dynamomètre", a:"la valeur" }
        ], i => `Parmi les caractéristiques d'une force, laquelle désigne ${i.p} ?`,
           i => `${i.p} : c'est ${i.a}.`),
      () => {
        const n = randInt(2, 40) * 5;
        const correct = "le newton (N)";
        const opts = shuffle([correct, "le kilogramme (kg)", "le joule (J)", "le pascal (Pa)"]);
        return qcm(`Un dynamomètre indique ${n} pour la valeur d'une force. Dans quelle unité cette valeur s'exprime-t-elle ?`,
          opts, opts.indexOf(correct),
          `La valeur d'une force se mesure en newtons (N) à l'aide d'un dynamomètre. Le kilogramme mesure une masse, pas une force.`);
      }
    ],
    p16: [
      () => bankQcm(LUMIERE_OBJETS, i => `Comment classe-t-on ${i.n} du point de vue de la lumière ?`,
            i => `${i.n.charAt(0).toUpperCase() + i.n.slice(1)} est ${i.a}.`,
            ["une source primaire de lumière", "un objet diffusant (source secondaire)", "un récepteur de lumière", "un milieu opaque"]),
      () => bankQcm([
          { n:"le verre transparent", a:"transparent" }, { n:"l'eau claire", a:"transparent" },
          { n:"le papier calque", a:"translucide" }, { n:"le verre dépoli", a:"translucide" },
          { n:"une planche de bois", a:"opaque" }, { n:"une plaque de métal", a:"opaque" },
          { n:"un carton épais", a:"opaque" }
        ], i => `Comment qualifie-t-on ${i.n} pour le passage de la lumière ?`,
           i => `${i.n.charAt(0).toUpperCase() + i.n.slice(1)} est ${i.a}.`,
           ["transparent", "translucide", "opaque", "réfléchissant total"])
    ],
    p18: [
      () => {
        // Agrandissement de l'ombre par une source ponctuelle (théorème de Thalès)
        const h = randInt(2, 12);
        const d = randInt(1, 5);
        const k = randInt(2, 5);
        const D = d * k;
        const H = h * k;
        const { options, correctIndex } = numericOptions(H, [v=>h*(k+1), v=>h+k, v=>Math.round(h/k*10)/10]);
        return qcm(`Une source ponctuelle éclaire un objet de ${h} cm de haut placé à ${d} m de la source. L'écran est à ${D} m de la source. Quelle est la hauteur de l'ombre portée sur l'écran ?`,
          options.map(o=>o+" cm"), correctIndex,
          `Les triangles sont semblables : H/h = D/d, donc H = h × D/d = ${h} × ${D}/${d} = ${H} cm.`);
      },
      () => bankQcm([
          { p:"la partie non éclairée de l'objet lui-même", a:"l'ombre propre" },
          { p:"la zone sombre projetée par l'objet sur un écran", a:"l'ombre portée" },
          { p:"la zone partiellement éclairée qui apparaît autour de l'ombre avec une source étendue", a:"la pénombre" },
          { p:"la zone de l'espace située derrière l'objet et privée de lumière", a:"le cône d'ombre" }
        ], i => `Comment nomme-t-on ${i.p} ?`, i => `${i.p} s'appelle ${i.a}.`),
      () => {
        const ponct = Math.random() < 0.5;
        const correct = ponct ? "une ombre nette, sans pénombre" : "une ombre entourée d'une pénombre";
        const opts = shuffle([correct,
          ponct ? "une ombre entourée d'une pénombre" : "une ombre nette, sans pénombre",
          "aucune ombre du tout",
          "une ombre plus petite que l'objet quelle que soit la distance"]);
        return qcm(`Un objet opaque est éclairé par ${ponct ? "une source ponctuelle" : "une source étendue"}. Qu'observe-t-on sur l'écran ?`,
          opts, opts.indexOf(correct),
          ponct
            ? `Une source ponctuelle n'envoie la lumière que d'un seul point : la limite de l'ombre est franche, il n'y a pas de pénombre.`
            : `Une source étendue est faite d'une infinité de points : certaines zones ne reçoivent qu'une partie de la lumière, ce qui crée une pénombre autour de l'ombre.`);
      }
    ],
    p19: [
      () => bankQcm(COMBUSTIONS_TYPE, i => `S'agit-il d'une combustion avec ou sans flamme : ${i.s} ?`,
            i => `${i.s} : c'est ${i.a}.`,
            ["une combustion avec flamme", "une combustion sans flamme (incandescence)", "une combustion sans combustible", "une combustion sans comburant"]),
      () => bankQcm([
          { p:"la substance qui brûle", a:"le combustible" },
          { p:"le gaz qui entretient la combustion, le plus souvent le dioxygène de l'air", a:"le comburant" },
          { p:"l'apport de chaleur qui déclenche la réaction", a:"l'énergie d'activation" },
          { p:"l'ensemble des trois conditions nécessaires à toute combustion", a:"le triangle du feu" }
        ], i => `Dans le triangle du feu, comment nomme-t-on ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`),
      () => bankQcm([
          { m:"on jette du sable sur des braises", a:"on supprime le comburant : le dioxygène n'atteint plus le combustible" },
          { m:"on ferme le robinet de gaz d'un brûleur enflammé", a:"on supprime le combustible" },
          { m:"on arrose un feu de bois avec de l'eau", a:"on abaisse la température sous le seuil nécessaire" },
          { m:"on étouffe une casserole en feu avec un couvercle", a:"on supprime le comburant : le dioxygène n'atteint plus le combustible" },
          { m:"on creuse une tranchée coupe-feu devant un feu de brousse", a:"on supprime le combustible" }
        ],
        i => `Pour éteindre un feu, ${i.m}. Sur quel côté du triangle du feu agit-on ?`,
        i => `Quand ${i.m}, ${i.a}. Supprimer un seul des trois côtés du triangle du feu suffit à arrêter la combustion.`,
        ["on supprime le comburant : le dioxygène n'atteint plus le combustible",
         "on supprime le combustible",
         "on abaisse la température sous le seuil nécessaire",
         "on augmente l'énergie d'activation"])
    ],
    p20: [
      () => bankQcm([
          { p:"les seuls produits d'une combustion complète d'un hydrocarbure", a:"du dioxyde de carbone et de l'eau" },
          { p:"le gaz toxique formé lors d'une combustion incomplète", a:"du monoxyde de carbone" },
          { p:"le dépôt noir observé sur un récipient lors d'une combustion incomplète", a:"du carbone (suie)" },
          { p:"ce qui manque pour qu'une combustion soit complète", a:"une quantité suffisante de dioxygène" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => {
        const complete = Math.random() < 0.5;
        const correct = complete ? "bleue, sans fumée ni suie" : "jaune et fumeuse, avec dépôt de suie";
        const opts = shuffle([correct,
          complete ? "jaune et fumeuse, avec dépôt de suie" : "bleue, sans fumée ni suie",
          "verte et sans chaleur",
          "invisible et sans dégagement de chaleur"]);
        return qcm(`Comment se présente la flamme d'une combustion ${complete ? "complète" : "incomplète"} d'un hydrocarbure ?`,
          opts, opts.indexOf(correct),
          complete
            ? `Avec assez de dioxygène, la combustion est complète : la flamme est bleue et ne produit que du dioxyde de carbone et de l'eau.`
            : `Avec trop peu de dioxygène, la combustion est incomplète : la flamme devient jaune et fumeuse, et il se forme du carbone (suie) ainsi que du monoxyde de carbone toxique.`);
      }
    ],
    p21: [
      () => bankQcm([
          { p:"il est inodore, incolore et invisible, donc indétectable sans appareil", a:"le monoxyde de carbone" },
          { p:"il se fixe sur le sang à la place du dioxygène et peut tuer", a:"le monoxyde de carbone" },
          { p:"il trouble l'eau de chaux et participe à l'effet de serre", a:"le dioxyde de carbone" },
          { p:"il se dépose en couche noire sur les ustensiles", a:"le carbone (suie)" }
        ], i => `Quel produit de combustion correspond à cette description : ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`),
      () => bankQcm([
          { p:"utiliser un appareil à gaz dans une pièce fermée", a:"aérer la pièce et ventiler en permanence" },
          { p:"une bouteille de gaz qui fuit", a:"fermer le robinet, ne pas faire d'étincelle et aérer" },
          { p:"un feu de friture dans une casserole", a:"couvrir la casserole, ne jamais verser d'eau" },
          { p:"un appareil de chauffage jamais entretenu", a:"faire vérifier et entretenir l'appareil régulièrement" }
        ], i => `Quelle précaution faut-il prendre dans ce cas : ${i.p} ?`, i => `Dans ce cas, il faut ${i.a}.`)
    ],
    p24: [
      () => {
        const mC = randInt(1, 15) * 3;          // multiple de 3 -> masses entières
        const mCO2 = mC * 44 / 12;
        const { options, correctIndex } = numericOptions(mCO2, [v=>mC*44, v=>v/2, v=>mC+44]);
        return qcm(`On brûle complètement ${mC} g de carbone dans un excès de dioxygène. Quelle masse de dioxyde de carbone obtient-on ? (masses molaires : C = 12 g/mol, O = 16 g/mol)`,
          options.map(o=>o+" g"), correctIndex,
          `L'équation est C + O₂ → CO₂. 12 g de carbone donnent 44 g de CO₂, donc ${mC} g donnent ${mC} × 44/12 = ${fmt(mCO2)} g.`);
      },
      () => bankQcm([
          { p:"l'équation de la combustion complète du carbone", a:"C + O₂ → CO₂" },
          { p:"le test qui met en évidence le dioxyde de carbone formé", a:"l'eau de chaux se trouble" },
          { p:"ce que l'on observe du carbone pendant la combustion", a:"il rougit et brûle sans flamme (incandescence)" },
          { p:"le gaz consommé pendant la combustion", a:"le dioxygène de l'air" }
        ], i => `Concernant la combustion du carbone, qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => open(
        `On réalise la combustion complète du carbone dans un flacon de dioxygène. Écris l'équation-bilan de la réaction, nomme le produit formé, décris le test qui permet de l'identifier, puis calcule la masse de produit obtenue à partir de 6 g de carbone (C = 12 g/mol, O = 16 g/mol).`,
        `<p><strong>1. Équation-bilan.</strong> C + O₂ → CO₂<br>
         L'équation est déjà équilibrée : 1 atome de carbone et 2 atomes d'oxygène de chaque côté.</p>
         <p><strong>2. Produit formé.</strong> Le dioxyde de carbone (CO₂), un gaz incolore et inodore.</p>
         <p><strong>3. Test d'identification.</strong> On verse de l'eau de chaux limpide dans le flacon et on agite : <strong>l'eau de chaux se trouble</strong> (elle devient laiteuse). C'est le test caractéristique du dioxyde de carbone.</p>
         <p><strong>4. Calcul.</strong> Masse molaire du carbone : M(C) = 12 g/mol.<br>
         Masse molaire du dioxyde de carbone : M(CO₂) = 12 + 2 × 16 = 44 g/mol.<br>
         D'après l'équation, 1 mol de carbone donne 1 mol de CO₂, donc 12 g de carbone donnent 44 g de CO₂.<br>
         Pour 6 g de carbone : m(CO₂) = 6 × 44/12 = <strong>22 g</strong>.</p>
         <p><strong>Remarque.</strong> On peut vérifier avec la conservation de la masse : 6 g de carbone + 16 g de dioxygène = 22 g de dioxyde de carbone.</p>`)
    ],
    p25: [
      () => {
        const mH2 = randInt(1, 12);
        const mH2O = mH2 * 9;                   // 4 g H2 -> 36 g H2O, soit ×9
        const { options, correctIndex } = numericOptions(mH2O, [v=>mH2*18, v=>mH2+18, v=>v/2]);
        return qcm(`On brûle complètement ${mH2} g de dihydrogène dans un excès de dioxygène. Quelle masse d'eau obtient-on ? (masses molaires : H = 1 g/mol, O = 16 g/mol)`,
          options.map(o=>o+" g"), correctIndex,
          `L'équation est 2 H₂ + O₂ → 2 H₂O. 4 g de dihydrogène donnent 36 g d'eau, donc ${mH2} g donnent ${mH2} × 36/4 = ${mH2O} g.`);
      },
      () => bankQcm([
          { p:"l'équation de la combustion du dihydrogène", a:"2 H₂ + O₂ → 2 H₂O" },
          { p:"le seul produit formé", a:"de l'eau" },
          { p:"le test qui met en évidence l'eau formée", a:"le sulfate de cuivre anhydre blanc devient bleu" },
          { p:"le bruit caractéristique d'un mélange dihydrogène-air qui s'enflamme", a:"une détonation (aboiement)" }
        ], i => `Concernant la combustion du dihydrogène, qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`)
    ]
  };

  /* ================= SVT ================= */

  const SVT = {
    s1: [
      () => bankQcm([
          { t:"la mue de la voix (voix qui devient grave)", a:"chez le garçon uniquement" },
          { t:"l'apparition de la barbe et de la moustache", a:"chez le garçon uniquement" },
          { t:"les premières éjaculations", a:"chez le garçon uniquement" },
          { t:"le développement des seins", a:"chez la fille uniquement" },
          { t:"l'apparition des premières règles (ménarche)", a:"chez la fille uniquement" },
          { t:"l'élargissement du bassin", a:"chez la fille uniquement" },
          { t:"l'apparition des poils pubiens", a:"chez le garçon et chez la fille" },
          { t:"la poussée de croissance et la transpiration plus forte", a:"chez le garçon et chez la fille" },
          { t:"le développement des organes génitaux et le début de la fertilité", a:"chez le garçon et chez la fille" }
        ], i => `Chez qui observe-t-on ${i.t} à la puberté ?`, i => `${i.t.charAt(0).toUpperCase()+i.t.slice(1)} s'observe ${i.a}.`,
           ["chez le garçon uniquement", "chez la fille uniquement", "chez le garçon et chez la fille", "chez aucun des deux"]),
      () => bankQcm([
          { p:"l'organe qui produit les spermatozoïdes", a:"le testicule" },
          { p:"l'organe qui produit les ovules", a:"l'ovaire" },
          { p:"l'organe où se déroule le plus souvent la fécondation", a:"la trompe de Fallope" },
          { p:"l'organe où l'embryon s'implante et se développe", a:"l'utérus" }
        ], i => `Quel est ${i.p} ?`, i => `${i.p} est ${i.a}.`)
    ],
    s2: [
      () => bankQcm([
          { p:"la cellule reproductrice masculine, petite et mobile grâce à son flagelle", a:"le spermatozoïde" },
          { p:"la cellule reproductrice féminine, grosse et immobile, riche en réserves", a:"l'ovule" },
          { p:"la cellule unique formée par la fusion des deux gamètes", a:"la cellule-œuf (zygote)" },
          { p:"l'implantation de l'embryon dans la muqueuse utérine", a:"la nidation" }
        ], i => `Qu'est-ce que ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`),
      () => {
        const etapes = ["la fécondation", "la segmentation (divisions de la cellule-œuf)", "la nidation", "le développement de l'embryon", "le stade fœtus"];
        const i = randInt(0, etapes.length - 2);
        const correct = etapes[i + 1];
        const wrong = shuffle(etapes.filter((e, k) => k !== i + 1)).slice(0, 3);
        const opts = shuffle([correct, ...wrong]);
        return qcm(`Dans le développement avant la naissance, quelle étape suit immédiatement ${etapes[i]} ?`,
          opts, opts.indexOf(correct),
          `L'ordre est : ${etapes.join(" → ")}. Après ${etapes[i]} vient donc ${correct}.`);
      },
      () => bankQcm([
          { p:"le moment où l'embryon prend le nom de fœtus", a:"à la fin du 2e mois (après 8 semaines)" },
          { p:"la durée moyenne d'une grossesse humaine", a:"environ 9 mois (39 à 40 semaines)" },
          { p:"l'organe d'échanges entre la mère et le fœtus", a:"le placenta" },
          { p:"le liquide qui protège le fœtus des chocs", a:"le liquide amniotique" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`)
    ],
    s3: [
      () => bankQcm([
          { n:"le granite", a:"une texture grenue" }, { n:"le basalte", a:"une texture microlitique" },
          { n:"la pegmatite", a:"une texture pegmatitique" }, { n:"le gabbro", a:"une texture grenue" },
          { n:"l'obsidienne", a:"une texture vitreuse" }, { n:"l'andésite", a:"une texture microlitique" }
        ], i => `Quelle texture présente ${i.n} ?`, i => `${i.n.charAt(0).toUpperCase()+i.n.slice(1)} présente ${i.a}.`,
           ["une texture grenue", "une texture microlitique", "une texture pegmatitique", "une texture vitreuse"]),
      () => bankQcm([
          { p:"un refroidissement très lent en profondeur, qui laisse le temps à tous les cristaux de se former", a:"une texture grenue" },
          { p:"un refroidissement lent et prolongé en présence d'eau, donnant de très gros cristaux", a:"une texture pegmatitique" },
          { p:"un refroidissement rapide en surface, avec de petits cristaux noyés dans une pâte", a:"une texture microlitique" },
          { p:"un refroidissement brutal qui empêche toute cristallisation", a:"une texture vitreuse" }
        ], i => `Quelle texture résulte de ${i.p} ?`, i => `${i.p} donne ${i.a}.`),
      () => bankQcm([
          { p:"les roches formées en profondeur, qui refroidissent lentement", a:"les roches plutoniques (ou intrusives)" },
          { p:"les roches formées en surface après une éruption", a:"les roches volcaniques (ou effusives)" },
          { p:"le magma refroidi et solidifié", a:"une roche magmatique (endogène)" },
          { p:"les principaux minéraux du granite", a:"le quartz, les feldspaths et les micas" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`)
    ],
    s4: [
      () => bankQcm([
          { s:"l'éclatement d'une roche par l'alternance du gel et du dégel", a:"une dégradation physique (mécanique)" },
          { s:"la fragmentation d'une roche par les écarts de température jour/nuit", a:"une dégradation physique (mécanique)" },
          { s:"l'éclatement d'une roche par les racines d'un arbre qui s'y enfoncent", a:"une dégradation physique (mécanique)" },
          { s:"la transformation des feldspaths du granite en argile par l'eau", a:"une dégradation chimique" },
          { s:"la formation de rouille sur une roche riche en fer", a:"une dégradation chimique" },
          { s:"la dissolution du calcaire par une eau acide", a:"une dégradation chimique" }
        ], i => `De quel type de dégradation s'agit-il : ${i.s} ?`, i => `${i.s.charAt(0).toUpperCase()+i.s.slice(1)} est ${i.a}.`,
           ["une dégradation physique (mécanique)", "une dégradation chimique", "une sédimentation", "un métamorphisme"]),
      () => bankQcm([
          { p:"l'altération des feldspaths", a:"l'argile" },
          { p:"l'altération des minéraux riches en fer", a:"la rouille (oxyde de fer)" },
          { p:"la désagrégation du quartz, minéral très résistant", a:"le sable" },
          { p:"la décomposition des débris végétaux et animaux", a:"l'humus" }
        ], i => `Quel produit provient de ${i.p} ?`, i => `${i.p} donne ${i.a}.`)
    ],
    s5: [
      () => bankQcm([
          { p:"l'horizon supérieur, sombre, riche en humus et en racines", a:"l'horizon A" },
          { p:"l'horizon intermédiaire, plus clair, où s'accumulent les éléments entraînés du dessus", a:"l'horizon B" },
          { p:"l'horizon profond, fait de fragments de la roche-mère peu altérés", a:"l'horizon C" },
          { p:"la roche dure et intacte située sous tous les horizons", a:"la roche-mère" }
        ], i => `Quel horizon du sol correspond à ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`),
      () => bankQcm([
          { p:"la matière organique noire issue de la décomposition des débris végétaux et animaux", a:"l'humus" },
          { p:"les êtres vivants du sol qui décomposent la matière organique", a:"les décomposeurs (bactéries, champignons, vers)" },
          { p:"le mélange de particules minérales et de matière organique qui constitue le sol", a:"le complexe argilo-humique" },
          { p:"le temps nécessaire à la formation d'un sol, de l'ordre de plusieurs siècles", a:"un processus très lent" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`)
    ],
    s6: [
      () => {
        // Complète une composition granulométrique à 100 %
        const sable = randInt(20, 60);
        const limon = randInt(10, Math.max(11, 90 - sable));
        const argile = 100 - sable - limon;
        if (argile < 5) return null;
        const { options, correctIndex } = numericOptions(argile, [v=>v+10, v=>100-sable, v=>100-limon]);
        return qcm(`Une analyse de sol donne ${sable} % de sable et ${limon} % de limon. Quel est le pourcentage d'argile ?`,
          options.map(o=>o+" %"), correctIndex,
          `Les trois fractions font 100 % : argile = 100 − ${sable} − ${limon} = ${argile} %.`);
      },
      () => bankQcm([
          { p:"les particules les plus fines, inférieures à 2 micromètres", a:"l'argile" },
          { p:"les particules intermédiaires, entre 2 et 50 micromètres", a:"le limon" },
          { p:"les particules les plus grossières, entre 50 micromètres et 2 millimètres", a:"le sable" },
          { p:"les éléments de plus de 2 millimètres, exclus de l'analyse granulométrique", a:"les graviers et cailloux" }
        ], i => `Quelle catégorie granulométrique correspond à ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`),
      () => bankQcm([
          { p:"retient très bien l'eau mais s'engorge et se travaille difficilement", a:"un sol argileux" },
          { p:"laisse filer l'eau très vite et retient mal les éléments nutritifs", a:"un sol sableux" },
          { p:"équilibre les trois fractions et convient bien aux cultures", a:"un sol limoneux équilibré (terre franche)" },
          { p:"est riche en matière organique décomposée et de couleur très sombre", a:"un sol humifère" }
        ], i => `Quel type de sol ${i.p} ?`, i => `Un sol qui ${i.p} est ${i.a}.`)
    ],
    s7: [
      () => bankQcm([
          { m:"le choléra", a:"une bactérie" }, { m:"la fièvre typhoïde", a:"une bactérie" },
          { m:"l'amibiase", a:"un protozoaire" }, { m:"le paludisme", a:"un protozoaire" },
          { m:"l'hépatite A", a:"un virus" }, { m:"la poliomyélite", a:"un virus" },
          { m:"la bilharziose", a:"un ver (schistosome)" }, { m:"l'ascaridiose", a:"un ver (ascaris)" }
        ], i => `Quel type d'agent pathogène provoque ${i.m} ?`, i => `${i.m.charAt(0).toUpperCase()+i.m.slice(1)} est provoqué${/e$/.test(i.m)?"e":""} par ${i.a}.`,
           ["une bactérie", "un virus", "un protozoaire", "un ver (schistosome)", "un champignon"]),
      () => bankQcm([
          { m:"le choléra", a:"l'ingestion d'eau ou d'aliments souillés par des matières fécales (péril fécal)" },
          { m:"la fièvre typhoïde", a:"l'ingestion d'eau ou d'aliments souillés par des matières fécales (péril fécal)" },
          { m:"le paludisme", a:"la piqûre d'un moustique (anophèle femelle)" },
          { m:"la dengue", a:"la piqûre d'un moustique (Aedes)" },
          { m:"la bilharziose", a:"la pénétration du parasite à travers la peau lors d'un bain en eau douce" },
          { m:"l'onchocercose", a:"la piqûre d'une simulie près des rivières" }
        ], i => `Comment se transmet ${i.m} ?`, i => `${i.m.charAt(0).toUpperCase()+i.m.slice(1)} se transmet par ${i.a}.`)
    ],
    s8: [
      () => bankQcm([
          { p:"les maladies du péril fécal comme le choléra", a:"assainir l'eau de boisson et construire des latrines" },
          { p:"le paludisme transmis par le moustique", a:"dormir sous une moustiquaire imprégnée et éliminer les eaux stagnantes" },
          { p:"la bilharziose contractée en se baignant", a:"éviter les bains en eau douce infestée et traiter les malades" },
          { p:"les vers intestinaux transmis par le sol et les mains sales", a:"se laver les mains et porter des chaussures" }
        ], i => `Quel moyen de lutte est adapté contre ${i.p} ?`, i => `Contre ${i.p}, il faut ${i.a}.`),
      () => bankQcm([
          { p:"supprimer les gîtes de reproduction des moustiques", a:"une lutte contre le vecteur" },
          { p:"vacciner la population contre une maladie", a:"une lutte préventive individuelle" },
          { p:"soigner les personnes déjà malades avec des médicaments", a:"une lutte curative" },
          { p:"construire des latrines et traiter l'eau de la ville", a:"une lutte par l'assainissement collectif" }
        ], i => `Comment qualifie-t-on l'action qui consiste à ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} relève de ${i.a}.`)
    ],
    s9: [
      () => bankQcm([
          { p:"la décantation, qui laisse les particules lourdes se déposer", a:"un procédé physique" },
          { p:"la filtration sur sable, qui retient les particules en suspension", a:"un procédé physique" },
          { p:"le tamisage (dégrillage) des gros déchets", a:"un procédé physique" },
          { p:"la chloration, qui détruit les micro-organismes", a:"un procédé chimique" },
          { p:"l'ozonation de l'eau", a:"un procédé chimique" },
          { p:"la floculation par ajout de sulfate d'aluminium", a:"un procédé chimique" }
        ], i => `De quel type de procédé de traitement de l'eau s'agit-il : ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} est ${i.a}.`,
           ["un procédé physique", "un procédé chimique", "un procédé biologique", "un procédé mécanique sans effet"]),
      () => bankQcm([
          { p:"éliminer les gros déchets flottants à l'entrée de la station", a:"le dégrillage" },
          { p:"regrouper les fines particules en flocons plus lourds", a:"la floculation" },
          { p:"laisser les flocons se déposer au fond du bassin", a:"la décantation" },
          { p:"détruire les microbes restants avant la distribution", a:"la désinfection (chloration ou ozonation)" }
        ], i => `Quelle étape du traitement de l'eau permet de ${i.p} ?`, i => `Pour ${i.p}, on utilise ${i.a}.`),
      () => open(
        `Dans un village, les habitants consomment l'eau d'une rivière sans la traiter et plusieurs cas de diarrhées graves apparaissent. Explique le mécanisme de contamination, nomme deux maladies possibles, et propose une démarche de traitement de l'eau en indiquant l'ordre des étapes et le rôle de chacune.`,
        `<p><strong>1. Mécanisme de contamination (le péril fécal).</strong> Les matières fécales humaines ou animales, contenant des agents pathogènes, atteignent la rivière (absence de latrines, ruissellement, défécation à l'air libre). En buvant cette eau, les habitants ingèrent ces agents, qui se multiplient dans leur intestin : c'est la transmission <strong>féco-orale</strong>.</p>
         <p><strong>2. Deux maladies possibles.</strong> Le <strong>choléra</strong> (bactérie <em>Vibrio cholerae</em>) et la <strong>fièvre typhoïde</strong> (bactérie <em>Salmonella typhi</em>). On peut aussi citer l'amibiase (protozoaire) ou l'hépatite A (virus).</p>
         <p><strong>3. Démarche de traitement, dans l'ordre.</strong><br>
         <strong>a. Dégrillage / tamisage</strong> — retenir les gros déchets flottants (feuilles, branches).<br>
         <strong>b. Floculation</strong> — ajouter un floculant (sulfate d'aluminium) pour regrouper les très fines particules en flocons plus lourds.<br>
         <strong>c. Décantation</strong> — laisser reposer pour que les flocons tombent au fond ; l'eau claire est prélevée en surface.<br>
         <strong>d. Filtration sur sable</strong> — retenir les particules encore en suspension.<br>
         <strong>e. Désinfection</strong> — chloration (ou ozonation, ou ébullition à la maison) pour détruire les micro-organismes restants. <em>C'est l'étape indispensable</em> : les précédentes clarifient l'eau mais ne la rendent pas potable.</p>
         <p><strong>4. Prévention durable.</strong> Traiter l'eau ne suffit pas : il faut aussi construire des latrines, protéger le point d'eau, et promouvoir le lavage des mains au savon. On agit ainsi à la fois sur l'eau et sur la source de la contamination.</p>`)
    ]
  };

  /* ================= HISTOIRE-GÉOGRAPHIE ================= */

  const GROUPES_CULTURELS = ["les Akan", "les Krou", "les Mandé du Nord", "les Mandé du Sud", "les Gour (Voltaïques)"];
  const PEUPLES_CI = [
    { n:"les Baoulé", a:"les Akan" }, { n:"les Agni", a:"les Akan" }, { n:"les Abron", a:"les Akan" },
    { n:"les Attié", a:"les Akan" }, { n:"les Abouré", a:"les Akan" },
    { n:"les Bété", a:"les Krou" }, { n:"les Dida", a:"les Krou" }, { n:"les Guéré (Wè)", a:"les Krou" },
    { n:"les Neyo", a:"les Krou" },
    { n:"les Malinké", a:"les Mandé du Nord" }, { n:"les Dioula", a:"les Mandé du Nord" },
    { n:"les Dan (Yacouba)", a:"les Mandé du Sud" }, { n:"les Gouro", a:"les Mandé du Sud" },
    { n:"les Sénoufo", a:"les Gour (Voltaïques)" }, { n:"les Lobi", a:"les Gour (Voltaïques)" },
    { n:"les Koulango", a:"les Gour (Voltaïques)" }
  ];

  const HG = {
    h1: [
      () => bankQcm(PEUPLES_CI, i => `À quel grand groupe culturel de Côte d'Ivoire appartiennent ${i.n} ?`,
            i => `${i.n.charAt(0).toUpperCase()+i.n.slice(1)} appartiennent à ${i.a}.`, GROUPES_CULTURELS),
      () => bankQcm([
          { p:"le groupe installé principalement dans le Sud-Est et le Centre, venu de l'actuel Ghana", a:"les Akan" },
          { p:"le groupe installé principalement dans le Sud-Ouest et l'Ouest forestier", a:"les Krou" },
          { p:"le groupe installé dans le Nord-Ouest, marqué par le commerce et l'islam", a:"les Mandé du Nord" },
          { p:"le groupe installé dans le Nord et le Nord-Est, réputé pour ses masques et sa sculpture", a:"les Gour (Voltaïques)" }
        ], i => `Quel groupe culturel correspond à cette description : ${i.p} ?`, i => `${i.p} : ce sont ${i.a}.`, GROUPES_CULTURELS)
    ],
    h2: [
      () => bankQcm([
          { p:"les premiers Européens à atteindre la côte ivoirienne au XVe siècle", a:"les Portugais" },
          { p:"le produit qui a donné son nom à la « Côte des Dents » puis à la Côte d'Ivoire", a:"l'ivoire des éléphants" },
          { p:"les établissements côtiers où se faisaient les échanges avec les Européens", a:"les comptoirs" },
          { p:"le type d'échange pratiqué au début, sans monnaie, entre Européens et populations locales", a:"le troc" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => bankQcm([
          { p:"les produits recherchés par les Européens sur la côte", a:"l'or, l'ivoire, le poivre et plus tard les captifs" },
          { p:"les produits apportés par les Européens en échange", a:"des tissus, des armes, de l'alcool et de la verroterie" },
          { p:"la conséquence la plus grave des contacts à partir du XVIe siècle", a:"la traite négrière" },
          { p:"la raison pour laquelle la côte ivoirienne fut longtemps peu fréquentée", a:"une côte difficile d'accès, sans rade naturelle et bordée d'une barre dangereuse" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`)
    ],
    h3: [
      () => bankQcm([
          { p:"une relation qui autorise la moquerie réciproque entre deux peuples et interdit qu'ils se fassent la guerre", a:"la parenté à plaisanterie (le sinankunya)" },
          { p:"un pacte scellé entre deux communautés, souvent par un serment, pour garantir la paix", a:"l'alliance interethnique" },
          { p:"le lieu traditionnel de discussion où les anciens débattent jusqu'à l'accord", a:"l'arbre à palabres" },
          { p:"les groupes réunissant les personnes d'une même génération, chargés de tâches collectives et du maintien de l'ordre", a:"les classes d'âge" },
          { p:"l'autorité qui gère les terres et arbitre les litiges foncier", a:"le chef de terre" }
        ], i => `Quel mécanisme traditionnel correspond à ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`),
      () => bankQcm([
          { p:"empêcher un conflit d'éclater", a:"la prévention" },
          { p:"mettre fin à un conflit déjà déclaré", a:"la résolution" },
          { p:"faire intervenir un tiers accepté par les deux camps pour rapprocher les positions", a:"la médiation" },
          { p:"confier la décision à une autorité reconnue dont le verdict s'impose", a:"l'arbitrage" }
        ], i => `Comment nomme-t-on le fait de ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} relève de ${i.a}.`)
    ],
    h4: [
      () => bankQcm([
          { p:"le pays qui abolit la traite des Noirs en 1807, puis l'esclavage dans ses colonies en 1833", a:"la Grande-Bretagne" },
          { p:"le pays qui abolit définitivement l'esclavage dans ses colonies en 1848", a:"la France" },
          { p:"le pays où le 13e amendement abolit l'esclavage en 1865", a:"les États-Unis" },
          { p:"l'homme politique français dont le nom reste attaché au décret d'abolition de 1848", a:"Victor Schœlcher" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => {
        const etapes = [
          { n:1, t:"l'Europe vers l'Afrique : les navires apportent des marchandises (tissus, armes, alcool, verroterie) échangées contre des captifs" },
          { n:2, t:"l'Afrique vers l'Amérique : c'est la traversée de l'Atlantique dans des conditions atroces, appelée le « passage du milieu »" },
          { n:3, t:"l'Amérique vers l'Europe : les navires ramènent les produits des plantations (sucre, coton, café, tabac)" }
        ];
        const e = pick(etapes);
        const correct = "le côté n° " + e.n + " du commerce triangulaire";
        const opts = shuffle([correct, "le côté n° " + (e.n % 3 + 1) + " du commerce triangulaire",
          "le côté n° " + ((e.n + 1) % 3 + 1) + " du commerce triangulaire", "un trajet extérieur au commerce triangulaire"]);
        return qcm(`Dans le commerce triangulaire, à quel côté correspond ce trajet : ${e.t} ?`,
          opts, opts.indexOf(correct),
          `Le commerce triangulaire comportait trois côtés : 1) Europe → Afrique (marchandises contre captifs), 2) Afrique → Amérique (le « passage du milieu »), 3) Amérique → Europe (produits des plantations). Ce trajet est le côté n° ${e.n}.`);
      }
    ],
    h5: [
      () => bankQcm([
          { p:"la machine à vapeur perfectionnée qui a lancé l'industrie", a:"James Watt" },
          { p:"la première locomotive à vapeur utilisée sur une ligne de chemin de fer", a:"George Stephenson" },
          { p:"le pays où la révolution industrielle a commencé au XVIIIe siècle", a:"l'Angleterre" },
          { p:"la source d'énergie dominante de la première révolution industrielle", a:"le charbon" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => bankQcm([
          { p:"les propriétaires des usines et des capitaux", a:"la bourgeoisie industrielle" },
          { p:"les ouvriers qui vendent leur force de travail dans les usines", a:"le prolétariat" },
          { p:"le déplacement massif des campagnes vers les villes industrielles", a:"l'exode rural" },
          { p:"le système économique fondé sur la propriété privée et la recherche du profit", a:"le capitalisme" }
        ], i => `Comment nomme-t-on ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`)
    ],
    h6: [
      () => bankQcm([
          { p:"la prise de la Bastille", a:"le 14 juillet 1789" },
          { p:"l'abolition des privilèges par l'Assemblée", a:"la nuit du 4 août 1789" },
          { p:"l'adoption de la Déclaration des droits de l'homme et du citoyen", a:"le 26 août 1789" },
          { p:"la proclamation de la Première République", a:"en septembre 1792" }
        ], i => `À quelle date se situe ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => bankQcm([
          { p:"les trois ordres de la société d'Ancien Régime", a:"le clergé, la noblesse et le tiers état" },
          { p:"l'ordre qui payait l'essentiel des impôts sans privilèges", a:"le tiers état" },
          { p:"la devise issue de la Révolution française", a:"Liberté, Égalité, Fraternité" },
          { p:"les cahiers où les Français consignèrent leurs plaintes avant 1789", a:"les cahiers de doléances" }
        ], i => `Qu'est-ce qui correspond à ${i.p} ?`, i => `${i.p} : ${i.a}.`)
    ],
    h7: [
      () => bankQcm([
          { n:"la région", a:"la décentralisation" }, { n:"la commune", a:"la décentralisation" },
          { n:"le district autonome", a:"la décentralisation" },
          { n:"la préfecture (le département)", a:"la déconcentration" },
          { n:"la sous-préfecture", a:"la déconcentration" },
          { n:"le village administratif", a:"la déconcentration" }
        ], i => `${i.n.charAt(0).toUpperCase()+i.n.slice(1)} relève de la déconcentration ou de la décentralisation ?`,
           i => `${i.n.charAt(0).toUpperCase()+i.n.slice(1)} relève de ${i.a}.`,
           ["la déconcentration", "la décentralisation", "la séparation des pouvoirs", "la privatisation"]),
      () => bankQcm([
          { p:"le représentant de l'État à la tête d'un département", a:"le préfet" },
          { p:"le représentant de l'État à la tête d'une sous-préfecture", a:"le sous-préfet" },
          { p:"l'élu qui dirige une commune", a:"le maire" },
          { p:"l'élu qui dirige un conseil régional", a:"le président du conseil régional" }
        ], i => `Qui est ${i.p} ?`, i => `${i.p} est ${i.a}.`),
      () => {
        const deconc = Math.random() < 0.5;
        const correct = deconc
          ? "l'État délègue ses pouvoirs à ses propres agents nommés, qui restent sous son autorité"
          : "l'État transfère des compétences à des collectivités dotées d'organes élus et d'un budget propre";
        const opts = shuffle([correct,
          deconc
            ? "l'État transfère des compétences à des collectivités dotées d'organes élus et d'un budget propre"
            : "l'État délègue ses pouvoirs à ses propres agents nommés, qui restent sous son autorité",
          "l'État supprime tout échelon local et gère directement depuis la capitale",
          "l'État confie l'administration du territoire à des entreprises privées"]);
        return qcm(`Qu'est-ce qui caractérise la ${deconc ? "déconcentration" : "décentralisation"} ?`,
          opts, opts.indexOf(correct),
          deconc
            ? `Dans la déconcentration, les agents (préfet, sous-préfet) sont <em>nommés</em> par l'État et agissent en son nom : le pouvoir de décision reste à l'État.`
            : `Dans la décentralisation, les collectivités (commune, région, district autonome) ont des organes <em>élus</em>, un budget propre et de vraies compétences transférées.`);
      }
    ],
    h8: [
      () => bankQcm([
          { p:"l'année de création de la CEDEAO, par le traité de Lagos", a:"1975" },
          { p:"l'année du traité de Rome, qui institue la Communauté économique européenne", a:"1957" },
          { p:"l'année du traité de Maastricht, qui donne naissance à l'Union européenne", a:"1992" },
          { p:"l'année du traité de Lagos révisé, qui renforce la CEDEAO", a:"1993" }
        ], i => `Quelle est ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => bankQcm([
          { p:"le siège de la Commission de la CEDEAO", a:"Abuja, au Nigeria" },
          { p:"le siège principal des institutions de l'Union européenne", a:"Bruxelles, en Belgique" },
          { p:"la monnaie unique adoptée par une partie des pays de l'Union européenne", a:"l'euro" },
          { p:"l'objectif commun à la CEDEAO et à l'Union européenne", a:"l'intégration économique régionale et la libre circulation" }
        ], i => `Quel est ${i.p} ?`, i => `${i.p} : ${i.a}.`),
      () => bankQcm([
          { p:"la libre circulation des personnes et des biens entre pays membres", a:"un avantage de l'intégration régionale" },
          { p:"un marché élargi qui attire les investissements", a:"un avantage de l'intégration régionale" },
          { p:"la concurrence subie par les entreprises locales les plus fragiles", a:"une difficulté de l'intégration régionale" },
          { p:"les écarts de développement entre pays membres, source de tensions", a:"une difficulté de l'intégration régionale" }
        ], i => `Comment analyser ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} constitue ${i.a}.`,
           ["un avantage de l'intégration régionale", "une difficulté de l'intégration régionale",
            "une conséquence de la décentralisation", "un effet de la révolution industrielle"])
    ]
  };

  /* ================= ANGLAIS ================= */

  // Toutes les formes verbales sont stockées explicitement : aucune n'est
  // devinée par une règle, pour qu'aucun exercice ne puisse enseigner une
  // forme fausse (les exceptions anglaises sont trop nombreuses).
  const EN_VERBS = [
    { b:"go", p:"went", pp:"gone", s:"goes", ing:"going" },
    { b:"eat", p:"ate", pp:"eaten", s:"eats", ing:"eating" },
    { b:"see", p:"saw", pp:"seen", s:"sees", ing:"seeing" },
    { b:"take", p:"took", pp:"taken", s:"takes", ing:"taking" },
    { b:"write", p:"wrote", pp:"written", s:"writes", ing:"writing" },
    { b:"speak", p:"spoke", pp:"spoken", s:"speaks", ing:"speaking" },
    { b:"drink", p:"drank", pp:"drunk", s:"drinks", ing:"drinking" },
    { b:"buy", p:"bought", pp:"bought", s:"buys", ing:"buying" },
    { b:"bring", p:"brought", pp:"brought", s:"brings", ing:"bringing" },
    { b:"teach", p:"taught", pp:"taught", s:"teaches", ing:"teaching" },
    { b:"make", p:"made", pp:"made", s:"makes", ing:"making" },
    { b:"give", p:"gave", pp:"given", s:"gives", ing:"giving" },
    { b:"come", p:"came", pp:"come", s:"comes", ing:"coming" },
    { b:"run", p:"ran", pp:"run", s:"runs", ing:"running" },
    { b:"sing", p:"sang", pp:"sung", s:"sings", ing:"singing" },
    { b:"break", p:"broke", pp:"broken", s:"breaks", ing:"breaking" },
    { b:"forget", p:"forgot", pp:"forgotten", s:"forgets", ing:"forgetting" },
    { b:"know", p:"knew", pp:"known", s:"knows", ing:"knowing" },
    { b:"leave", p:"left", pp:"left", s:"leaves", ing:"leaving" },
    { b:"meet", p:"met", pp:"met", s:"meets", ing:"meeting" },
    { b:"send", p:"sent", pp:"sent", s:"sends", ing:"sending" },
    { b:"win", p:"won", pp:"won", s:"wins", ing:"winning" },
    { b:"wear", p:"wore", pp:"worn", s:"wears", ing:"wearing" },
    { b:"find", p:"found", pp:"found", s:"finds", ing:"finding" },
    { b:"sell", p:"sold", pp:"sold", s:"sells", ing:"selling" },
    { b:"tell", p:"told", pp:"told", s:"tells", ing:"telling" },
    { b:"choose", p:"chose", pp:"chosen", s:"chooses", ing:"choosing" },
    { b:"drive", p:"drove", pp:"driven", s:"drives", ing:"driving" },
    { b:"play", p:"played", pp:"played", s:"plays", ing:"playing", reg:true },
    { b:"watch", p:"watched", pp:"watched", s:"watches", ing:"watching", reg:true },
    { b:"study", p:"studied", pp:"studied", s:"studies", ing:"studying", reg:true },
    { b:"cook", p:"cooked", pp:"cooked", s:"cooks", ing:"cooking", reg:true },
    { b:"clean", p:"cleaned", pp:"cleaned", s:"cleans", ing:"cleaning", reg:true },
    { b:"help", p:"helped", pp:"helped", s:"helps", ing:"helping", reg:true },
    { b:"finish", p:"finished", pp:"finished", s:"finishes", ing:"finishing", reg:true },
    { b:"visit", p:"visited", pp:"visited", s:"visits", ing:"visiting", reg:true },
    { b:"arrive", p:"arrived", pp:"arrived", s:"arrives", ing:"arriving", reg:true },
    { b:"wash", p:"washed", pp:"washed", s:"washes", ing:"washing", reg:true },
    { b:"want", p:"wanted", pp:"wanted", s:"wants", ing:"wanting", reg:true },
    { b:"open", p:"opened", pp:"opened", s:"opens", ing:"opening", reg:true }
  ];
  const EN_SUBJ3 = ["She", "He", "My brother", "Ama", "Kouassi", "The teacher", "My sister"];
  const EN_SUBJP = ["I", "We", "They", "You", "My friends", "The students"];

  const EN_ADJ = [
    { a:"tall", c:"taller", s:"the tallest", lg:false },
    { a:"big", c:"bigger", s:"the biggest", lg:false },
    { a:"hot", c:"hotter", s:"the hottest", lg:false },
    { a:"cheap", c:"cheaper", s:"the cheapest", lg:false },
    { a:"fast", c:"faster", s:"the fastest", lg:false },
    { a:"young", c:"younger", s:"the youngest", lg:false },
    { a:"happy", c:"happier", s:"the happiest", lg:false },
    { a:"easy", c:"easier", s:"the easiest", lg:false },
    { a:"busy", c:"busier", s:"the busiest", lg:false },
    { a:"expensive", c:"more expensive", s:"the most expensive", lg:true },
    { a:"beautiful", c:"more beautiful", s:"the most beautiful", lg:true },
    { a:"interesting", c:"more interesting", s:"the most interesting", lg:true },
    { a:"difficult", c:"more difficult", s:"the most difficult", lg:true },
    { a:"careful", c:"more careful", s:"the most careful", lg:true },
    { a:"good", c:"better", s:"the best", irr:true },
    { a:"bad", c:"worse", s:"the worst", irr:true },
    { a:"far", c:"farther", s:"the farthest", irr:true }
  ];

  const EN = {
    a1: [
      () => {
        const v = pick(EN_VERBS), sub = pick(EN_SUBJ3);
        const when = pick(["every day", "every morning", "usually", "on Sundays", "twice a week"]);
        const correct = sub + " " + v.s;
        const { options, correctIndex } = fourWays(correct, [
          sub + " " + v.b, sub + " is " + v.ing, sub + " " + v.ing, sub + " " + v.p
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Complete with the correct form: "___ ... ${when}." (verb: to ${v.b})`,
          options, correctIndex,
          `"${when}" marque une habitude : on emploie le present simple. À la 3e personne du singulier, on ajoute -s : ${correct}.`);
      },
      () => {
        const v = pick(EN_VERBS), sub = pick(EN_SUBJP.filter(s => s !== "I"));
        const correct = sub + " are " + v.ing;
        const { options, correctIndex } = fourWays(correct, [
          sub + " " + v.b, sub + " is " + v.ing, sub + " " + v.ing, sub + " were " + v.ing
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Complete: "___ ... right now." (verb: to ${v.b})`,
          options, correctIndex,
          `"right now" marque une action en cours : present continuous = be + verbe-ing. Avec "${sub}", l'auxiliaire est "are" : ${correct}.`);
      },
      () => bankQcm([
          { t:"every day", a:"the present simple" }, { t:"usually", a:"the present simple" },
          { t:"never", a:"the present simple" }, { t:"once a week", a:"the present simple" },
          { t:"right now", a:"the present continuous" }, { t:"at the moment", a:"the present continuous" },
          { t:"Look! ...", a:"the present continuous" }, { t:"today, while you speak", a:"the present continuous" }
        ], i => `Which tense goes with "${i.t}" ?`,
           i => `"${i.t}" appelle ${i.a}. Le present simple décrit une habitude ou une vérité générale ; le present continuous décrit une action en train de se dérouler.`,
           ["the present simple", "the present continuous", "the past simple", "the present perfect"])
    ],
    a2: [
      () => {
        const v = pick(EN_VERBS);
        const { options, correctIndex } = fourWays(v.p, [
          v.b + "ed", v.pp, v.b, v.ing
        ]);
        if (correctIndex < 0) return null;
        return qcm(`What is the past simple of "to ${v.b}" ?`, options, correctIndex,
          v.reg
            ? `"${v.b}" est un verbe régulier : son past simple est "${v.p}". Attention à ne pas le confondre avec le participe passé, identique ici.`
            : `"${v.b}" est un verbe irrégulier : past simple "${v.p}", participe passé "${v.pp}". Il ne prend jamais -ed.`);
      },
      () => {
        const v = pick(EN_VERBS), sub = pick(EN_SUBJ3.concat(EN_SUBJP));
        const correct = sub + " didn't " + v.b;
        const { options, correctIndex } = fourWays(correct, [
          sub + " didn't " + v.p, sub + " don't " + v.b, sub + " wasn't " + v.ing, sub + " not " + v.p
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Put into the negative: "${sub} ${v.p} ..." `, options, correctIndex,
          `Au past simple négatif, on emploie did not (didn't) suivi de la <em>base verbale</em>, jamais du passé : ${correct}.`);
      },
      () => bankQcm(EN_VERBS.map(v => ({ b:v.b, a: v.reg ? "a regular verb (-ed)" : "an irregular verb" })),
            i => `Is "to ${i.b}" a regular or an irregular verb?`,
            i => `"to ${i.b}" est ${i.a === "a regular verb (-ed)" ? "régulier : son passé se forme avec -ed" : "irrégulier : son passé ne suit pas la règle du -ed"}.`,
            ["a regular verb (-ed)", "an irregular verb", "a modal verb", "an auxiliary only"])
    ],
    a3: [
      () => bankQcm(EN_ADJ.map(x => ({ a0:x.a, a:x.c })),
            i => `What is the comparative of "${i.a0}" ?`,
            i => `Le comparatif de "${i.a0}" est "${i.a}".`,
            EN_ADJ.map(x => x.c)),
      () => bankQcm(EN_ADJ.map(x => ({ a0:x.a, a:x.s })),
            i => `What is the superlative of "${i.a0}" ?`,
            i => `Le superlatif de "${i.a0}" est "${i.a}".`,
            EN_ADJ.map(x => x.s)),
      () => {
        const adj = pick(EN_ADJ);
        const correct = adj.irr
          ? "it is an irregular adjective with its own forms"
          : (adj.lg ? "it is a long adjective, so we use more / the most" : "it is a short adjective, so we add -er / -est");
        const { options, correctIndex } = fourWays(correct, [
          adj.lg ? "it is a short adjective, so we add -er / -est" : "it is a long adjective, so we use more / the most",
          "it is an irregular adjective with its own forms",
          "it has no comparative form",
          "it takes both -er and more at the same time"
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Why is the comparative of "${adj.a}" formed as "${adj.c}" ?`, options, correctIndex,
          `Règle : adjectif court (1 syllabe, ou 2 en -y) → -er / -est ; adjectif long → more / the most ; quelques adjectifs sont irréguliers (good/better/best, bad/worse/worst). "${adj.a}" → "${adj.c}" / "${adj.s}".`);
      }
    ],
    a4: [
      () => bankQcm([
          { s:"You are able to swim very well.", a:"can" },
          { s:"It is necessary to wear a helmet: it is the law.", a:"must" },
          { s:"It is a good idea to see a doctor, in my opinion.", a:"should" },
          { s:"It is forbidden to smoke here.", a:"mustn't" },
          { s:"You have the ability to speak three languages.", a:"can" },
          { s:"I advise you not to eat too much sugar.", a:"shouldn't" }
        ], i => `Which modal expresses this idea: "${i.s}" ?`,
           i => `"${i.s}" exprime ${
             i.a === "can" ? "une capacité → can" :
             i.a === "must" ? "une obligation forte → must" :
             i.a === "should" ? "un conseil → should" :
             i.a === "shouldn't" ? "un conseil négatif → shouldn't" :
             "une interdiction → mustn't"}.`,
           ["can", "must", "should", "mustn't", "shouldn't"]),
      () => {
        const v = pick(EN_VERBS), mod = pick(["can", "must", "should"]);
        const correct = mod + " " + v.b;
        const { options, correctIndex } = fourWays(correct, [
          mod + " to " + v.b, mod + " " + v.s, mod + " " + v.ing, mod + " " + v.p
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Complete: "You ___ ..." (modal: ${mod}, verb: to ${v.b})`, options, correctIndex,
          `Après un modal (can, must, should...), on met toujours la <em>base verbale</em> : pas de "to", pas de -s, pas de -ing. On dit donc "${correct}".`);
      }
    ],
    a5: [
      () => bankQcm([
          { t:"7 o'clock", a:"at" }, { t:"night", a:"at" }, { t:"noon", a:"at" }, { t:"midnight", a:"at" },
          { t:"January", a:"in" }, { t:"2026", a:"in" }, { t:"the morning", a:"in" }, { t:"summer", a:"in" },
          { t:"Monday", a:"on" }, { t:"5th May", a:"on" }, { t:"my birthday", a:"on" }, { t:"Friday evening", a:"on" }
        ], i => `Which preposition of time goes with "${i.t}" ?`,
           i => `On dit "${i.a} ${i.t}". Repères : <strong>at</strong> pour une heure précise et pour night/noon/midnight, <strong>in</strong> pour les mois, années, saisons et parties de la journée, <strong>on</strong> pour les jours et les dates.`,
           ["at", "in", "on", "by"]),
      () => bankQcm([
          { t:"Abidjan", a:"in" }, { t:"Côte d'Ivoire", a:"in" }, { t:"the kitchen", a:"in" },
          { t:"school", a:"at" }, { t:"home", a:"at" }, { t:"the bus stop", a:"at" },
          { t:"the table", a:"on" }, { t:"the wall", a:"on" }, { t:"the floor", a:"on" }
        ], i => `Which preposition of place goes with "${i.t}" ?`,
           i => `On dit "${i.a} ${i.t}". Repères : <strong>in</strong> pour un espace fermé, une ville ou un pays, <strong>at</strong> pour un lieu vu comme un point, <strong>on</strong> pour une surface.`,
           ["in", "at", "on", "under"]),
      () => bankQcm([
          { p:"under", a:"sous" }, { p:"between", a:"entre (deux éléments)" }, { p:"behind", a:"derrière" },
          { p:"in front of", a:"devant" }, { p:"next to", a:"à côté de" }, { p:"above", a:"au-dessus de" },
          { p:"opposite", a:"en face de" }, { p:"among", a:"parmi (plus de deux)" }
        ], i => `What does the preposition "${i.p}" mean?`, i => `"${i.p}" signifie « ${i.a} ».`)
    ],
    a6: [
      () => bankQcm([
          { p:"your father's brother", a:"your uncle" },
          { p:"your mother's sister", a:"your aunt" },
          { p:"your uncle's son", a:"your cousin" },
          { p:"your brother's daughter", a:"your niece" },
          { p:"your sister's son", a:"your nephew" },
          { p:"your father's father", a:"your grandfather" },
          { p:"your son's daughter", a:"your granddaughter" },
          { p:"your wife's brother", a:"your brother-in-law" }
        ], i => `In English, what do you call ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} is ${i.a}.`),
      () => bankQcm([
          { f:"se réveiller", a:"to wake up" }, { f:"se lever", a:"to get up" },
          { f:"se brosser les dents", a:"to brush one's teeth" }, { f:"prendre une douche", a:"to have a shower" },
          { f:"prendre le petit déjeuner", a:"to have breakfast" }, { f:"s'habiller", a:"to get dressed" },
          { f:"aller à l'école", a:"to go to school" }, { f:"faire ses devoirs", a:"to do one's homework" },
          { f:"se coucher", a:"to go to bed" }, { f:"rentrer à la maison", a:"to go back home" }
        ], i => `How do you say « ${i.f} » in English?`, i => `« ${i.f} » se dit ${i.a}.`)
    ],
    a7: [
      () => bankQcm([
          { s:"You have already bought the tickets and packed your bag.", a:"going to (a plan already decided)" },
          { s:"Look at those black clouds!", a:"going to (a prediction based on evidence)" },
          { s:"The phone is ringing — you decide to answer at that very moment.", a:"will (a spontaneous decision)" },
          { s:"You promise to help your friend tomorrow.", a:"will (a promise or an offer)" },
          { s:"You have an appointment written in your diary for Saturday.", a:"going to (a plan already decided)" },
          { s:"You think your team may win, but you have no proof.", a:"will (a simple prediction or opinion)" }
        ], i => `Will or going to? "${i.s}"`,
           i => `Ici on emploie ${i.a}. Règle : <strong>going to</strong> pour une intention déjà décidée ou une prévision fondée sur un indice visible ; <strong>will</strong> pour une décision prise sur le moment, une promesse, une offre, ou une simple opinion.`,
           ["going to (a plan already decided)", "going to (a prediction based on evidence)",
            "will (a spontaneous decision)", "will (a promise or an offer)", "will (a simple prediction or opinion)"]),
      () => {
        const v = pick(EN_VERBS), sub = pick(EN_SUBJ3);
        const correct = sub + " is going to " + v.b;
        const { options, correctIndex } = fourWays(correct, [
          sub + " is going to " + v.ing, sub + " will going to " + v.b,
          sub + " is going " + v.b, sub + " are going to " + v.b
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Complete with "going to": "___ ... next week." (verb: to ${v.b})`, options, correctIndex,
          `Structure : sujet + be (am/is/are) + going to + base verbale. Avec "${sub}", l'auxiliaire est "is" : ${correct}.`);
      }
    ],
    a8: [
      () => {
        const v = pick(EN_VERBS), sub = pick(EN_SUBJ3);
        const correct = sub + " has " + v.pp;
        const { options, correctIndex } = fourWays(correct, [
          sub + " have " + v.pp, sub + " has " + v.p, sub + " has " + v.b, sub + " is " + v.pp
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Complete in the present perfect: "___ ... already." (verb: to ${v.b})`, options, correctIndex,
          `Present perfect = have/has + participe passé. Avec "${sub}" (3e personne du singulier), l'auxiliaire est "has", et le participe passé de "${v.b}" est "${v.pp}" : ${correct}.`);
      },
      () => bankQcm(EN_VERBS.map(v => ({ b:v.b, a:v.pp })),
            i => `What is the past participle of "to ${i.b}" ?`,
            i => `Le participe passé de "to ${i.b}" est "${i.a}".`,
            EN_VERBS.map(v => v.pp)),
      () => bankQcm([
          { t:"two years", a:"for" }, { t:"a long time", a:"for" }, { t:"three weeks", a:"for" },
          { t:"2020", a:"since" }, { t:"last Monday", a:"since" }, { t:"I was a child", a:"since" },
          { t:"my birthday", a:"since" }, { t:"six months", a:"for" }
        ], i => `"for" or "since"? I have lived here ___ ${i.t}.`,
           i => `On dit "${i.a} ${i.t}". <strong>for</strong> introduit une <em>durée</em> ; <strong>since</strong> introduit un <em>point de départ</em> dans le temps.`,
           ["for", "since", "during", "ago"]),
      () => bankQcm([
          { t:"yesterday", a:"the past simple" }, { t:"last week", a:"the past simple" },
          { t:"in 2019", a:"the past simple" }, { t:"two days ago", a:"the past simple" },
          { t:"already", a:"the present perfect" }, { t:"just", a:"the present perfect" },
          { t:"never (up to now)", a:"the present perfect" }, { t:"yet", a:"the present perfect" },
          { t:"ever (in your whole life)", a:"the present perfect" }
        ], i => `Which tense goes with "${i.t}" ?`,
           i => `"${i.t}" appelle ${i.a}. Un moment passé <em>terminé et daté</em> (yesterday, ago, in 2019) impose le past simple ; un lien avec le présent (already, just, yet, ever, never) appelle le present perfect.`,
           ["the past simple", "the present perfect", "the present continuous", "the future"])
    ],
    a9: [
      () => bankQcm([
          { n:"apple", a:"countable" }, { n:"book", a:"countable" }, { n:"chair", a:"countable" },
          { n:"student", a:"countable" }, { n:"egg", a:"countable" }, { n:"car", a:"countable" },
          { n:"water", a:"uncountable" }, { n:"rice", a:"uncountable" }, { n:"money", a:"uncountable" },
          { n:"bread", a:"uncountable" }, { n:"information", a:"uncountable" }, { n:"advice", a:"uncountable" },
          { n:"furniture", a:"uncountable" }, { n:"homework", a:"uncountable" }, { n:"sugar", a:"uncountable" }
        ], i => `Is "${i.n}" countable or uncountable?`,
           i => `"${i.n}" est ${i.a === "countable" ? "dénombrable : il a un pluriel et peut être précédé de a/an ou d'un nombre" : "indénombrable : pas de pluriel, pas de a/an, et il se construit avec much / a little"}.`,
           ["countable", "uncountable", "always plural", "a proper noun"]),
      () => {
        const c = Math.random() < 0.5;
        const noun = c ? pick(["apples", "books", "students", "eggs", "cars"]) : pick(["money", "water", "rice", "sugar", "information"]);
        const correct = c ? "many" : "much";
        const { options, correctIndex } = fourWays(correct, [c ? "much" : "many", "a lot", "few of"]);
        if (correctIndex < 0) return null;
        return qcm(`Complete the question: "How ___ ${noun} do you need?"`, options, correctIndex,
          c
            ? `"${noun}" est dénombrable pluriel, donc on emploie <strong>many</strong>. (much s'emploie avec les indénombrables.)`
            : `"${noun}" est indénombrable, donc on emploie <strong>much</strong>. (many s'emploie avec les dénombrables pluriels.)`);
      },
      () => {
        const c = Math.random() < 0.5;
        const noun = c ? pick(["friends", "books", "apples"]) : pick(["milk", "money", "time"]);
        const correct = c ? "a few" : "a little";
        const { options, correctIndex } = fourWays(correct, [c ? "a little" : "a few", "much of", "many of"]);
        if (correctIndex < 0) return null;
        return qcm(`Complete: "I have ___ ${noun}." (= a small quantity)`, options, correctIndex,
          c
            ? `Avec un dénombrable pluriel comme "${noun}", une petite quantité se dit <strong>a few</strong>.`
            : `Avec un indénombrable comme "${noun}", une petite quantité se dit <strong>a little</strong>.`);
      }
    ],
    a10: [
      () => bankQcm([
          { r:"At 8 o'clock.", a:"When" }, { r:"Tomorrow morning.", a:"When" },
          { r:"In Abidjan.", a:"Where" }, { r:"At school.", a:"Where" },
          { r:"Because I was ill.", a:"Why" },
          { r:"My brother.", a:"Who" }, { r:"The teacher did.", a:"Who" },
          { r:"By bus.", a:"How" }, { r:"Very carefully.", a:"How" },
          { r:"Three students.", a:"How many" }, { r:"Two thousand francs.", a:"How much" },
          { r:"The red one, not the blue one.", a:"Which" },
          { r:"It's Ama's bag.", a:"Whose" }
        ], i => `Which question word fits this answer: "${i.r}"`,
           i => `La réponse « ${i.r} » correspond à la question en <strong>${i.a}</strong>.`,
           ["When", "Where", "Why", "Who", "How", "How many", "How much", "Which", "Whose"]),
      () => {
        const v = pick(EN_VERBS), qw = pick(["When", "Where", "Why", "How"]);
        const correct = qw + " did you " + v.b + " ...?";
        const { options, correctIndex } = fourWays(correct, [
          qw + " did you " + v.p + " ...?", qw + " you did " + v.b + " ...?",
          qw + " do you " + v.p + " ...?", qw + " did you " + v.ing + " ...?"
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Build a correct past question with "${qw}" and the verb "to ${v.b}".`, options, correctIndex,
          `Ordre de la question au passé : mot interrogatif + <strong>did</strong> + sujet + <strong>base verbale</strong>. On dit donc "${correct}".`);
      }
    ],
    a11: [
      () => {
        const v = pick(EN_VERBS.filter(x => x.pp !== x.b));
        const obj = pick(["The letter", "The house", "The song", "The car", "The lesson", "The window"]);
        const agent = pick(["by Paul", "by the students", "by my sister", "by the workers"]);
        const correct = obj + " was " + v.pp + " " + agent;
        const { options, correctIndex } = fourWays(correct, [
          obj + " were " + v.pp + " " + agent,
          obj + " was " + v.p + " " + agent,
          obj + " is " + v.pp + " " + agent,
          obj + " was " + v.b + " " + agent
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Put into the passive (past): "... ${v.p} ${obj.toLowerCase()}."`, options, correctIndex,
          `Passif au passé : sujet + <strong>was/were</strong> + participe passé (+ by + agent). "${obj}" est singulier, donc "was", et le participe passé de "${v.b}" est "${v.pp}" : ${correct}.`);
      },
      () => bankQcm([
          { p:"the person or thing that undergoes the action becomes the subject", a:"that is the passive voice" },
          { p:"the person who does the action is the subject", a:"that is the active voice" },
          { p:"the doer of the action is introduced by « by »", a:"that is the agent of a passive sentence" },
          { p:"the verb is made of be + past participle", a:"that is the structure of the passive" }
        ], i => `In a sentence where ${i.p}, what can we say?`, i => `Quand ${i.p}, ${i.a}.`)
    ],
    a12: [
      () => bankQcm([
          { f:"du pain", a:"bread" }, { f:"du riz", a:"rice" }, { f:"de la viande", a:"meat" },
          { f:"du poisson", a:"fish" }, { f:"des œufs", a:"eggs" }, { f:"du lait", a:"milk" },
          { f:"des légumes", a:"vegetables" }, { f:"des fruits", a:"fruit" }, { f:"du sucre", a:"sugar" },
          { f:"de l'huile", a:"oil" }, { f:"du sel", a:"salt" }, { f:"du fromage", a:"cheese" }
        ], i => `How do you say « ${i.f} » in English?`, i => `« ${i.f} » se dit "${i.a}".`),
      () => bankQcm([
          { q:"bread", a:"a loaf of" }, { q:"water", a:"a bottle of" }, { q:"chocolate", a:"a bar of" },
          { q:"bananas", a:"a bunch of" }, { q:"rice", a:"a kilo of" }, { q:"cake", a:"a slice of" },
          { q:"milk", a:"a carton of" }, { q:"tea", a:"a cup of" }
        ], i => `Which quantity expression goes with "${i.q}" ?`,
           i => `On dit "${i.a} ${i.q}".`,
           ["a loaf of", "a bottle of", "a bar of", "a bunch of", "a kilo of", "a slice of", "a carton of", "a cup of"]),
      () => bankQcm([
          { s:"bread and cakes", a:"the baker's (bakery)" }, { s:"meat", a:"the butcher's" },
          { s:"medicines", a:"the chemist's (pharmacy)" }, { s:"fruit and vegetables", a:"the greengrocer's" },
          { s:"newspapers", a:"the newsagent's" }, { s:"everything, in one big shop", a:"the supermarket" }
        ], i => `Where do you buy ${i.s} ?`, i => `On achète ${i.s} at ${i.a}.`)
    ],
    au1: [
      () => {
        const v = pick(EN_VERBS);
        const correct = "If it rains, we will " + v.b;
        const { options, correctIndex } = fourWays(correct, [
          "If it will rain, we will " + v.b,
          "If it rains, we " + v.b,
          "If it rained, we will " + v.b,
          "If it rains, we would " + v.b
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Complete the first conditional with the verb "to ${v.b}".`, options, correctIndex,
          `Conditionnel de type 1 (situation réelle, possible) : <strong>If + present simple, ... will + base verbale</strong>. On ne met jamais "will" après "if".`);
      },
      () => bankQcm([
          { p:"If + present simple, will + base verbale — une condition réelle et possible", a:"the first conditional" },
          { p:"If + past simple, would + base verbale — une situation imaginaire", a:"the second conditional" },
          { p:"une action habituelle à l'école, avec usually ou every day", a:"the present simple" },
          { p:"une action en cours pendant qu'on parle", a:"the present continuous" }
        ], i => `Which structure corresponds to: ${i.p} ?`, i => `${i.p} : c'est ${i.a}.`)
    ],
    au2: [
      () => {
        const v = pick(EN_VERBS);
        const past = Math.random() < 0.5;
        const correct = (past ? "could " : "can ") + v.b;
        const { options, correctIndex } = fourWays(correct, [
          (past ? "can " : "could ") + v.b, (past ? "could " : "can ") + v.ing,
          (past ? "could to " : "can to ") + v.b, (past ? "was able " : "is able ") + v.b
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Express ability ${past ? "in the past" : "in the present"} with "to ${v.b}": "She ___ ..."`,
          options, correctIndex,
          past
            ? `Capacité au passé : <strong>could</strong> + base verbale (ou "was able to" + base verbale).`
            : `Capacité au présent : <strong>can</strong> + base verbale (ou "is able to" + base verbale).`);
      },
      () => bankQcm([
          { p:"In my opinion, ...", a:"giving an opinion" },
          { p:"I agree with you.", a:"agreeing" },
          { p:"I'm afraid I disagree.", a:"disagreeing politely" },
          { p:"Women have the right to equal pay.", a:"talking about rights" },
          { p:"She is able to lead the team.", a:"talking about ability" }
        ], i => `What is the speaker doing when saying: "${i.p}" ?`, i => `"${i.p}" sert à ${i.a}.`)
    ],
    au3: [
      () => bankQcm([
          { t:"bus", a:"by bus" }, { t:"car", a:"by car" }, { t:"train", a:"by train" },
          { t:"plane", a:"by plane" }, { t:"bicycle", a:"by bike" },
          { t:"your own feet", a:"on foot" }
        ], i => `How do you say you travel using a ${i.t} ?`,
           i => `On dit "${i.a}". Attention : tous les moyens de transport prennent <strong>by</strong>, sauf « à pied » qui se dit <strong>on foot</strong>.`,
           ["by bus", "by car", "by train", "by plane", "by bike", "on foot"]),
      () => bankQcm([
          { d:'He says: "I am tired."', a:'He said (that) he was tired.' },
          { d:'She says: "I live in Abidjan."', a:'She said (that) she lived in Abidjan.' },
          { d:'He says: "I will come."', a:'He said (that) he would come.' },
          { d:'She says: "I can swim."', a:'She said (that) she could swim.' },
          { d:'He says: "I have finished."', a:'He said (that) he had finished.' }
        ], i => `Put into reported speech: ${i.d}`,
           i => `Au discours indirect au passé, le temps « recule » : am → was, live → lived, will → would, can → could, have finished → had finished. D'où : ${i.a}`),
      () => bankQcm([
          { p:"une obligation venant de l'extérieur (un règlement, un horaire)", a:"have to" },
          { p:"une obligation forte ressentie par celui qui parle", a:"must" },
          { p:"une absence d'obligation : ce n'est pas nécessaire", a:"don't have to" },
          { p:"une interdiction formelle", a:"mustn't" }
        ], i => `Which form expresses ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} s'exprime avec <strong>${i.a}</strong>.`)
    ],
    au4: [
      () => {
        const v = pick(EN_VERBS);
        const correct = "used to " + v.b;
        const { options, correctIndex } = fourWays(correct, [
          "used to " + v.ing, "use to " + v.b, "used " + v.b, "was used to " + v.b
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Express a past habit that has stopped, with "to ${v.b}": "I ___ ... when I was a child."`,
          options, correctIndex,
          `Habitude passée révolue : <strong>used to</strong> + base verbale. À la forme négative et interrogative on écrit "didn't use to" et "Did you use to...?" (sans -d).`);
      },
      () => {
        const v = pick(EN_VERBS.filter(x => x.pp !== x.b));
        const correct = "These clothes are " + v.pp + " in Ghana";
        const { options, correctIndex } = fourWays(correct, [
          "These clothes is " + v.pp + " in Ghana",
          "These clothes are " + v.ing + " in Ghana",
          "These clothes " + v.s + " in Ghana",
          "These clothes are " + v.b + " in Ghana"
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Put into the passive (present): "... ${v.s} these clothes in Ghana." (verb: to ${v.b})`,
          options, correctIndex,
          `Passif au présent : sujet + <strong>am/is/are</strong> + participe passé. "These clothes" est pluriel, donc "are", et le participe passé de "${v.b}" est "${v.pp}".`);
      }
    ],
    au5: [
      () => bankQcm([
          { p:"I wish I had more money.", a:"expressing a wish about the present (regret)" },
          { p:"The film was so boring that I fell asleep.", a:"expressing a consequence with so ... that" },
          { p:"It was such a long journey that we were exhausted.", a:"expressing a consequence with such ... that" },
          { p:"I feel lonely in a big city.", a:"expressing a feeling" },
          { p:"Life in the village is quieter than in town.", a:"comparing two places" }
        ], i => `What is the speaker doing in: "${i.p}" ?`, i => `"${i.p}" sert à ${i.a}.`),
      () => {
        const adjMode = Math.random() < 0.5;
        const correct = adjMode ? "so + adjective + that" : "such + a/an + adjective + noun + that";
        const { options, correctIndex } = fourWays(correct, [
          adjMode ? "such + a/an + adjective + noun + that" : "so + adjective + that",
          "so + adjective + noun + that",
          "such + adjective + that"
        ]);
        if (correctIndex < 0) return null;
        const ex = adjMode ? "The city was ___ noisy ___ I could not sleep." : "It was ___ a noisy city ___ I could not sleep.";
        return qcm(`Which structure completes this sentence: "${ex}"`, options, correctIndex,
          `<strong>so</strong> se place devant un adjectif seul (so noisy that...) ; <strong>such</strong> se place devant un groupe nominal (such a noisy city that...).`);
      }
    ],
    au6: [
      () => bankQcm([
          { p:"Could you open the window, please?", a:"a polite request" },
          { p:"You must respect other people's rights.", a:"a strong obligation" },
          { p:"You mustn't discriminate against anyone.", a:"a formal prohibition" },
          { p:"Children have to go to school.", a:"an obligation imposed from outside (a law)" },
          { p:"You don't have to pay: it is free.", a:"an absence of obligation" }
        ], i => `What does this sentence express: "${i.p}" ?`, i => `"${i.p}" exprime ${i.a}.`),
      () => {
        const polite = Math.random() < 0.5;
        const v = pick(EN_VERBS);
        const correct = (polite ? "Could you " : "Can you ") + v.b + ", please?";
        const { options, correctIndex } = fourWays(correct, [
          (polite ? "Could you " : "Can you ") + v.ing + ", please?",
          (polite ? "Could you to " : "Can you to ") + v.b + ", please?",
          (polite ? "Could you " : "Can you ") + v.p + ", please?",
          "You " + v.b + ", please?"
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Make a ${polite ? "very polite" : "simple"} request with "to ${v.b}".`, options, correctIndex,
          `Une demande se construit avec <strong>Can you</strong> / <strong>Could you</strong> + base verbale + please. "Could" est plus poli que "Can".`);
      }
    ],
    au7: [
      () => bankQcm([
          { p:"You should wash your hands before eating.", a:"giving advice" },
          { p:"You shouldn't drink unsafe water.", a:"advising against something" },
          { p:"Let's clean the classroom together.", a:"making a suggestion" },
          { p:"Why don't we open the windows?", a:"making a suggestion" },
          { p:"How about boiling the water first?", a:"making a suggestion" },
          { p:"Hands must be washed with soap.", a:"using the passive to state a rule" }
        ], i => `What is the function of: "${i.p}" ?`, i => `"${i.p}" sert à ${i.a}.`),
      () => {
        const form = pick([
          { f:"Let's", after:"base verbale", ex:v => "Let's " + v.b },
          { f:"Why don't we", after:"base verbale", ex:v => "Why don't we " + v.b + "?" },
          { f:"How about", after:"verbe en -ing", ex:v => "How about " + v.ing + "?" },
          { f:"You should", after:"base verbale", ex:v => "You should " + v.b }
        ]);
        const v = pick(EN_VERBS);
        const correct = form.ex(v);
        const { options, correctIndex } = fourWays(correct, [
          form.after === "base verbale" ? form.f + " " + v.ing + (form.f.startsWith("Why") || form.f.startsWith("How") ? "?" : "")
                                        : form.f + " " + v.b + "?",
          form.f + " to " + v.b,
          form.f + " " + v.p,
          form.f + " " + v.s
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Make a suggestion or give advice with "${form.f}" and the verb "to ${v.b}".`, options, correctIndex,
          `Après <strong>${form.f}</strong>, on emploie la ${form.after}. On dit donc "${correct}".`);
      }
    ]
  };

  /* ================= FRANÇAIS ================= */

  // Formes conjuguées stockées explicitement (3e personne du singulier) :
  // aucune n'est reconstruite par une règle, pour qu'aucun exercice ne puisse
  // enseigner une forme fausse.
  const FR_CONJ = [
    { inf:"chanter",  g:"1er groupe", ps:"il chanta",  im:"il chantait",  fu:"il chantera",  co:"il chanterait",  su:"qu'il chante" },
    { inf:"parler",   g:"1er groupe", ps:"il parla",   im:"il parlait",   fu:"il parlera",   co:"il parlerait",   su:"qu'il parle" },
    { inf:"finir",    g:"2e groupe",  ps:"il finit",   im:"il finissait", fu:"il finira",    co:"il finirait",    su:"qu'il finisse" },
    { inf:"grandir",  g:"2e groupe",  ps:"il grandit", im:"il grandissait", fu:"il grandira", co:"il grandirait", su:"qu'il grandisse" },
    { inf:"aller",    g:"3e groupe",  ps:"il alla",    im:"il allait",    fu:"il ira",       co:"il irait",       su:"qu'il aille" },
    { inf:"être",     g:"auxiliaire", ps:"il fut",     im:"il était",     fu:"il sera",      co:"il serait",      su:"qu'il soit" },
    { inf:"avoir",    g:"auxiliaire", ps:"il eut",     im:"il avait",     fu:"il aura",      co:"il aurait",      su:"qu'il ait" },
    { inf:"faire",    g:"3e groupe",  ps:"il fit",     im:"il faisait",   fu:"il fera",      co:"il ferait",      su:"qu'il fasse" },
    { inf:"dire",     g:"3e groupe",  ps:"il dit",     im:"il disait",    fu:"il dira",      co:"il dirait",      su:"qu'il dise" },
    { inf:"venir",    g:"3e groupe",  ps:"il vint",    im:"il venait",    fu:"il viendra",   co:"il viendrait",   su:"qu'il vienne" },
    { inf:"pouvoir",  g:"3e groupe",  ps:"il put",     im:"il pouvait",   fu:"il pourra",    co:"il pourrait",    su:"qu'il puisse" },
    { inf:"vouloir",  g:"3e groupe",  ps:"il voulut",  im:"il voulait",   fu:"il voudra",    co:"il voudrait",    su:"qu'il veuille" },
    { inf:"voir",     g:"3e groupe",  ps:"il vit",     im:"il voyait",    fu:"il verra",     co:"il verrait",     su:"qu'il voie" },
    { inf:"prendre",  g:"3e groupe",  ps:"il prit",    im:"il prenait",   fu:"il prendra",   co:"il prendrait",   su:"qu'il prenne" },
    { inf:"partir",   g:"3e groupe",  ps:"il partit",  im:"il partait",   fu:"il partira",   co:"il partirait",   su:"qu'il parte" },
    { inf:"savoir",   g:"3e groupe",  ps:"il sut",     im:"il savait",    fu:"il saura",     co:"il saurait",     su:"qu'il sache" }
  ];
  const FR_TENSES = [
    { k:"ps", n:"passé simple" }, { k:"im", n:"imparfait" }, { k:"fu", n:"futur simple" },
    { k:"co", n:"conditionnel présent" }, { k:"su", n:"subjonctif présent" }
  ];

  // Générateur commun : demande une forme conjuguée et propose les autres
  // temps du même verbe comme leurres (les confusions les plus fréquentes).
  function frConjQcm(tenseKeys){
    const v = pick(FR_CONJ);
    const t = pick(FR_TENSES.filter(x => tenseKeys.indexOf(x.k) !== -1));
    const correct = v[t.k];
    const decoys = FR_TENSES.filter(x => x.k !== t.k).map(x => v[x.k]);
    const { options, correctIndex } = fourWays(correct, shuffle(decoys));
    if (correctIndex < 0) return null;
    return qcm(`Conjugue le verbe « ${v.inf} » à la 3e personne du singulier du ${t.n}.`,
      options, correctIndex,
      `${t.n.charAt(0).toUpperCase() + t.n.slice(1)} de « ${v.inf} » : <strong>${correct}</strong>.`);
  }

  const FR_FIGURES = [
    { ex:"Cet homme est un lion au combat.", a:"une métaphore" },
    { ex:"Ses dents sont comme des perles.", a:"une comparaison" },
    { ex:"Il est fort comme un bœuf.", a:"une comparaison" },
    { ex:"Le vent hurlait dans la nuit.", a:"une personnification" },
    { ex:"La ville dort paisiblement.", a:"une personnification" },
    { ex:"Je te l'ai dit mille fois !", a:"une hyperbole" },
    { ex:"Il verse un torrent de larmes.", a:"une hyperbole" },
    { ex:"Ce n'est pas mauvais du tout.", a:"une litote" },
    { ex:"Il n'est pas sans talent.", a:"une litote" },
    { ex:"Il nous a quittés.", a:"un euphémisme" },
    { ex:"Une personne de forte corpulence.", a:"un euphémisme" },
    { ex:"Cette obscure clarté qui tombe des étoiles.", a:"un oxymore" },
    { ex:"Un silence assourdissant.", a:"un oxymore" },
    { ex:"Je pleure, je crie, je supplie.", a:"une gradation" },
    { ex:"Partir, c'est mourir un peu.", a:"une antithèse" },
    { ex:"Ici tout est calme, ailleurs tout est chaos.", a:"une antithèse" },
    { ex:"Boire un verre.", a:"une métonymie" },
    { ex:"Lire un Molière.", a:"une métonymie" },
    { ex:"Pour qui sont ces serpents qui sifflent sur nos têtes ?", a:"une allitération" },
    { ex:"Mon cœur, mon corps, mon courage m'abandonnent.", a:"une anaphore" }
  ];
  const FR_FIG_CATS = ["une métaphore", "une comparaison", "une personnification", "une hyperbole",
    "une litote", "un euphémisme", "un oxymore", "une gradation", "une antithèse", "une métonymie",
    "une allitération", "une anaphore"];

  const FR_CLASSES = ["un nom", "un verbe", "un adjectif qualificatif", "un adverbe",
    "un déterminant", "un pronom", "une préposition", "une conjonction"];
  const FR_MOTS = [
    { m:"maison", a:"un nom" }, { m:"courage", a:"un nom" }, { m:"élève", a:"un nom" }, { m:"village", a:"un nom" },
    { m:"chanter", a:"un verbe" }, { m:"grandissait", a:"un verbe" }, { m:"partirons", a:"un verbe" },
    { m:"beau", a:"un adjectif qualificatif" }, { m:"rapide", a:"un adjectif qualificatif" }, { m:"heureuse", a:"un adjectif qualificatif" },
    { m:"lentement", a:"un adverbe" }, { m:"très", a:"un adverbe" }, { m:"hier", a:"un adverbe" }, { m:"toujours", a:"un adverbe" },
    { m:"le", a:"un déterminant" }, { m:"cette", a:"un déterminant" }, { m:"mes", a:"un déterminant" }, { m:"trois", a:"un déterminant" },
    { m:"elle", a:"un pronom" }, { m:"celui", a:"un pronom" }, { m:"qui", a:"un pronom" }, { m:"nous", a:"un pronom" },
    { m:"dans", a:"une préposition" }, { m:"sans", a:"une préposition" }, { m:"pour", a:"une préposition" }, { m:"avec", a:"une préposition" },
    { m:"et", a:"une conjonction" }, { m:"mais", a:"une conjonction" }, { m:"parce que", a:"une conjonction" }, { m:"donc", a:"une conjonction" }
  ];

  const FR_FONCTIONS = ["sujet", "complément d'objet direct (COD)", "complément d'objet indirect (COI)",
    "attribut du sujet", "complément circonstanciel", "épithète", "complément du nom"];
  const FR_PHRASES_FONCTION = [
    { p:"<strong>Le vieux pêcheur</strong> répare ses filets.", a:"sujet" },
    { p:"<strong>Les élèves de 4ème</strong> préparent l'examen.", a:"sujet" },
    { p:"Il répare <strong>ses filets</strong>.", a:"complément d'objet direct (COD)" },
    { p:"Ama lit <strong>un roman passionnant</strong>.", a:"complément d'objet direct (COD)" },
    { p:"Il parle <strong>à son frère</strong>.", a:"complément d'objet indirect (COI)" },
    { p:"Nous pensons <strong>à nos examens</strong>.", a:"complément d'objet indirect (COI)" },
    { p:"Ce garçon est <strong>très courageux</strong>.", a:"attribut du sujet" },
    { p:"Mon oncle devient <strong>directeur</strong>.", a:"attribut du sujet" },
    { p:"Il travaille <strong>dans le champ</strong>.", a:"complément circonstanciel" },
    { p:"Nous partirons <strong>demain matin</strong>.", a:"complément circonstanciel" },
    { p:"Une <strong>vieille</strong> pirogue glissait sur l'eau.", a:"épithète" },
    { p:"Il porte une chemise <strong>blanche</strong>.", a:"épithète" },
    { p:"Le cahier <strong>de mon frère</strong> est neuf.", a:"complément du nom" },
    { p:"La maison <strong>du chef</strong> est au centre.", a:"complément du nom" }
  ];

  const FR_SUBORD = ["une proposition subordonnée relative", "une proposition subordonnée conjonctive complétive",
    "une subordonnée circonstancielle de temps", "une subordonnée circonstancielle de cause",
    "une subordonnée circonstancielle de but", "une subordonnée circonstancielle de conséquence",
    "une subordonnée circonstancielle de condition", "une subordonnée circonstancielle de concession"];
  const FR_SUBORD_EX = [
    { p:"Le livre <strong>que tu m'as prêté</strong> est passionnant.", a:"une proposition subordonnée relative" },
    { p:"L'homme <strong>qui parle</strong> est mon oncle.", a:"une proposition subordonnée relative" },
    { p:"Je pense <strong>que tu as raison</strong>.", a:"une proposition subordonnée conjonctive complétive" },
    { p:"Il faut <strong>que tu viennes</strong>.", a:"une proposition subordonnée conjonctive complétive" },
    { p:"<strong>Quand la pluie cessa</strong>, nous sortîmes.", a:"une subordonnée circonstancielle de temps" },
    { p:"Nous partirons <strong>dès que tu seras prêt</strong>.", a:"une subordonnée circonstancielle de temps" },
    { p:"Il est resté <strong>parce qu'il était malade</strong>.", a:"une subordonnée circonstancielle de cause" },
    { p:"<strong>Puisque tu insistes</strong>, je viendrai.", a:"une subordonnée circonstancielle de cause" },
    { p:"Il travaille <strong>pour qu'il réussisse</strong>.", a:"une subordonnée circonstancielle de but" },
    { p:"Parle plus fort <strong>afin que tous t'entendent</strong>.", a:"une subordonnée circonstancielle de but" },
    { p:"Il a tant couru <strong>qu'il est épuisé</strong>.", a:"une subordonnée circonstancielle de conséquence" },
    { p:"<strong>Si tu travailles</strong>, tu réussiras.", a:"une subordonnée circonstancielle de condition" },
    { p:"<strong>Bien qu'il soit jeune</strong>, il est très sage.", a:"une subordonnée circonstancielle de concession" },
    { p:"<strong>Même s'il pleut</strong>, nous irons.", a:"une subordonnée circonstancielle de concession" }
  ];

  const FR = {
    f1: [
      () => bankQcm([
          { p:"le moment où l'on présente les personnages, le lieu et l'époque, avant tout problème", a:"la situation initiale" },
          { p:"l'événement qui vient bouleverser l'équilibre de départ", a:"l'élément perturbateur" },
          { p:"la suite des actions et des épreuves que traverse le héros", a:"les péripéties" },
          { p:"l'événement qui met fin aux difficultés", a:"l'élément de résolution" },
          { p:"le nouvel équilibre atteint à la fin du récit", a:"la situation finale" }
        ], i => `Dans le schéma narratif, comment nomme-t-on ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`),
      () => {
        const et = ["la situation initiale", "l'élément perturbateur", "les péripéties", "l'élément de résolution", "la situation finale"];
        const i = randInt(0, et.length - 2);
        const correct = et[i + 1];
        const { options, correctIndex } = fourWays(correct, shuffle(et.filter((e, k) => k !== i + 1)));
        if (correctIndex < 0) return null;
        return qcm(`Dans le schéma narratif, quelle étape suit ${et[i]} ?`, options, correctIndex,
          `L'ordre du schéma narratif est : ${et.join(" → ")}. Après ${et[i]} vient donc ${correct}.`);
      }
    ],
    f2: [
      () => bankQcm([
          { p:"un adjectif, un complément du nom ou une relative qui enrichit le nom", a:"une expansion du nom" },
          { p:"des mots comme « à gauche », « au fond », « au premier plan »", a:"un repère spatial" },
          { p:"le vocabulaire de la vue, de l'ouïe, de l'odorat, du goût et du toucher", a:"le lexique des cinq sens" },
          { p:"le regard d'un personnage à travers lequel le lecteur découvre le lieu", a:"un point de vue interne" },
          { p:"un narrateur qui sait tout et voit tout, même les pensées", a:"un point de vue omniscient" }
        ], i => `Dans une description, à quoi correspond ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f3: [
      () => bankQcm(FR_FIGURES, i => `Quelle figure de style reconnaît-on dans : « ${i.ex} » ?`,
            i => `« ${i.ex} » contient ${i.a}.`, FR_FIG_CATS),
      () => bankQcm([
          { p:"un rapprochement entre deux réalités SANS mot de comparaison", a:"une métaphore" },
          { p:"un rapprochement entre deux réalités AVEC un mot de comparaison (comme, tel, pareil à)", a:"une comparaison" },
          { p:"l'attribution de comportements humains à une chose ou à un animal", a:"une personnification" },
          { p:"une exagération volontaire pour frapper l'esprit", a:"une hyperbole" },
          { p:"dire moins pour suggérer plus, souvent par une négation", a:"une litote" },
          { p:"adoucir une réalité désagréable par une expression atténuée", a:"un euphémisme" },
          { p:"réunir dans la même expression deux mots de sens contraires", a:"un oxymore" },
          { p:"désigner une chose par un élément qui lui est lié", a:"une métonymie" }
        ], i => `Quelle figure de style consiste à ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`, FR_FIG_CATS)
    ],
    f4: [
      () => bankQcm([
          { p:"Le soleil se lève sur la lagune.", a:"déclarative" },
          { p:"Quand partons-nous au village ?", a:"interrogative" },
          { p:"Ferme la porte, s'il te plaît.", a:"injonctive (impérative)" },
          { p:"Comme ce paysage est beau !", a:"exclamative" },
          { p:"Où as-tu rangé mon cahier ?", a:"interrogative" },
          { p:"N'oublie jamais tes racines.", a:"injonctive (impérative)" },
          { p:"Quelle chaleur aujourd'hui !", a:"exclamative" }
        ], i => `Quel est le TYPE de cette phrase : « ${i.p} » ?`, i => `« ${i.p} » est une phrase ${i.a}.`,
           ["déclarative", "interrogative", "injonctive (impérative)", "exclamative"]),
      () => bankQcm([
          { p:"Il n'a rien compris.", a:"négative" },
          { p:"Le voleur a été arrêté par la police.", a:"passive" },
          { p:"La police a arrêté le voleur.", a:"active" },
          { p:"C'est moi qui ai trouvé la solution.", a:"emphatique" },
          { p:"Il pleut depuis ce matin.", a:"impersonnelle" },
          { p:"Personne ne le sait.", a:"négative" },
          { p:"Il faut partir maintenant.", a:"impersonnelle" }
        ], i => `Quelle est la FORME de cette phrase : « ${i.p} » ?`, i => `« ${i.p} » est une phrase ${i.a}.`,
           ["négative", "passive", "active", "emphatique", "impersonnelle"])
    ],
    f5: [
      () => bankQcm([
          { d:'Il déclare : « Je suis fatigué. »', a:"Il déclare qu'il est fatigué." },
          { d:'Elle dit : « Je viendrai demain. »', a:"Elle dit qu'elle viendra le lendemain." },
          { d:'Il demanda : « Où vas-tu ? »', a:"Il demanda où j'allais." },
          { d:'Elle affirma : « J\'ai tout compris. »', a:"Elle affirma qu'elle avait tout compris." },
          { d:'Il ordonna : « Sors d\'ici ! »', a:"Il ordonna de sortir." }
        ], i => `Transpose au discours indirect : ${i.d}`,
           i => `Au discours indirect, on supprime les guillemets et les deux points, on introduit par une conjonction (que, si, où...), et on adapte les pronoms et les temps : <strong>${i.a}</strong>`),
      () => bankQcm([
          { p:"les paroles sont rapportées entre guillemets, telles qu'elles ont été prononcées", a:"le discours direct" },
          { p:"les paroles sont intégrées à la phrase par une subordonnée introduite par « que »", a:"le discours indirect" },
          { p:"les paroles se mêlent au récit, sans guillemets ni « que »", a:"le discours indirect libre" },
          { p:"le narrateur résume les paroles en une seule expression, sans les rapporter", a:"le discours narrativisé" }
        ], i => `Quel type de discours rapporté correspond à : ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f6: [
      () => bankQcm([
          { p:"l'opinion que l'on veut faire admettre au destinataire", a:"la thèse" },
          { p:"une raison avancée pour soutenir cette opinion", a:"un argument" },
          { p:"un fait précis qui illustre et rend concret un argument", a:"un exemple" },
          { p:"l'opinion adverse, que l'on reconnaît avant de la réfuter", a:"la concession" },
          { p:"des mots comme « d'abord », « ensuite », « enfin », « en conclusion »", a:"des connecteurs logiques" }
        ], i => `Dans une lettre argumentative, comment nomme-t-on ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`),
      () => bankQcm([
          { p:"le lieu et la date, en haut à droite", a:"un élément de la présentation de la lettre" },
          { p:"« Monsieur le Directeur, »", a:"la formule d'appel" },
          { p:"« Veuillez agréer, Monsieur, l'expression de mes salutations distinguées. »", a:"la formule de politesse finale" },
          { p:"la raison précise de la lettre, annoncée dès le début", a:"l'objet de la lettre" }
        ], i => `Dans une lettre, à quoi correspond ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f7: [
      () => bankQcm(FR_MOTS, i => `À quelle classe grammaticale appartient le mot « ${i.m} » ?`,
            i => `« ${i.m} » est ${i.a}.`, FR_CLASSES),
      () => bankQcm([
          { p:"varie en genre et en nombre et désigne un être ou une chose", a:"un nom" },
          { p:"se conjugue et exprime une action ou un état", a:"un verbe" },
          { p:"précise le nom et s'accorde avec lui", a:"un adjectif qualificatif" },
          { p:"est un mot invariable qui modifie un verbe, un adjectif ou un autre adverbe", a:"un adverbe" },
          { p:"précède le nom et en indique le genre et le nombre", a:"un déterminant" },
          { p:"remplace un nom ou un groupe nominal", a:"un pronom" },
          { p:"est un mot invariable qui relie un mot à son complément", a:"une préposition" },
          { p:"est un mot invariable qui relie deux mots ou deux propositions", a:"une conjonction" }
        ], i => `Quelle classe grammaticale ${i.p} ?`, i => `Ce qui ${i.p} est ${i.a}.`, FR_CLASSES)
    ],
    f8: [
      () => bankQcm(FR_PHRASES_FONCTION,
            i => `Quelle est la fonction du groupe en gras : ${i.p}`,
            i => `Dans ${i.p} le groupe en gras est <strong>${i.a}</strong>.`, FR_FONCTIONS),
      () => bankQcm([
          { p:"le groupe qui commande l'accord du verbe et répond à « qui est-ce qui ? »", a:"sujet" },
          { p:"le complément qui se construit SANS préposition après le verbe", a:"complément d'objet direct (COD)" },
          { p:"le complément qui se construit AVEC une préposition (à, de...)", a:"complément d'objet indirect (COI)" },
          { p:"le mot qui qualifie le sujet par l'intermédiaire d'un verbe d'état (être, devenir, sembler)", a:"attribut du sujet" },
          { p:"le complément qui indique le lieu, le temps, la manière, et qu'on peut souvent déplacer ou supprimer", a:"complément circonstanciel" }
        ], i => `Quelle fonction désigne ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est le ${i.a}.`, FR_FONCTIONS)
    ],
    f9: [
      () => frConjQcm(["ps", "im"]),
      () => bankQcm([
          { p:"la description d'un décor ou d'un personnage, en arrière-plan du récit", a:"l'imparfait" },
          { p:"une action habituelle, qui se répète dans le passé", a:"l'imparfait" },
          { p:"une action en train de se dérouler quand une autre survient", a:"l'imparfait" },
          { p:"une action brève et unique qui fait avancer le récit", a:"le passé simple" },
          { p:"la succession des événements de premier plan dans un récit écrit", a:"le passé simple" }
        ], i => `Quel temps du récit emploie-t-on pour ${i.p} ?`,
           i => `Pour ${i.p}, on emploie <strong>${i.a}</strong>. Repère : l'imparfait pose le décor et la durée, le passé simple fait avancer l'action.`,
           ["l'imparfait", "le passé simple", "le présent de narration", "le plus-que-parfait"])
    ],
    f10: [
      () => frConjQcm(["co", "su"]),
      () => bankQcm([
          { p:"Il faut que tu ...", a:"le subjonctif" },
          { p:"Je veux que tu ...", a:"le subjonctif" },
          { p:"Bien qu'il ...", a:"le subjonctif" },
          { p:"Si j'avais de l'argent, je ...", a:"le conditionnel" },
          { p:"Je souhaiterais que ce soit possible : le verbe « souhaiter » est ici au ...", a:"le conditionnel" },
          { p:"Pour qu'il ...", a:"le subjonctif" }
        ], i => `Quel mode faut-il employer après « ${i.p} » ?`,
           i => `« ${i.p} » entraîne <strong>${i.a}</strong>. Repère : les expressions d'obligation, de volonté, de but et de concession appellent le subjonctif ; l'hypothèse « si + imparfait » appelle le conditionnel dans l'autre proposition.`,
           ["le subjonctif", "le conditionnel", "l'indicatif", "l'impératif"])
    ],
    f11: [
      () => bankQcm([
          { p:"La fille ___ chante est ma sœur.", a:"qui", f:"sujet" },
          { p:"Le livre ___ je lis est passionnant.", a:"que", f:"COD" },
          { p:"Le village ___ je suis né est loin.", a:"où", f:"complément de lieu" },
          { p:"L'ami ___ je te parle arrive demain.", a:"dont", f:"COI en « de »" },
          { p:"Le jour ___ il est parti, il pleuvait.", a:"où", f:"complément de temps" },
          { p:"L'élève ___ les résultats sont excellents est récompensé.", a:"dont", f:"complément du nom" }
        ], i => `Quel pronom relatif complète cette phrase : « ${i.p} » ?`,
           i => `On écrit « ${i.p.replace("___", i.a)} ». Le pronom relatif est <strong>${i.a}</strong> car il est ${i.f} dans la subordonnée.`,
           ["qui", "que", "dont", "où", "lequel"]),
      () => bankQcm([
          { p:"une relative qui est indispensable au sens et qui restreint le nom", a:"une relative déterminative" },
          { p:"une relative qui ajoute une information non indispensable, séparée par des virgules", a:"une relative explicative" },
          { p:"le nom que le pronom relatif reprend", a:"l'antécédent" },
          { p:"le rôle du pronom relatif « qui » dans la subordonnée", a:"sujet du verbe de la subordonnée" }
        ], i => `Dans l'étude de la proposition relative, qu'est-ce que ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f12: [
      () => bankQcm([
          { c:"parce que", a:"la cause" }, { c:"car", a:"la cause" }, { c:"puisque", a:"la cause" },
          { c:"grâce à", a:"la cause" }, { c:"à cause de", a:"la cause" }, { c:"étant donné que", a:"la cause" },
          { c:"donc", a:"la conséquence" }, { c:"par conséquent", a:"la conséquence" },
          { c:"c'est pourquoi", a:"la conséquence" }, { c:"si bien que", a:"la conséquence" },
          { c:"de sorte que", a:"la conséquence" }, { c:"tellement... que", a:"la conséquence" }
        ], i => `Le connecteur « ${i.c} » exprime-t-il la cause ou la conséquence ?`,
           i => `« ${i.c} » exprime <strong>${i.a}</strong>.`,
           ["la cause", "la conséquence", "le but", "la concession"]),
      () => bankQcm([
          { p:"Il est absent parce qu'il est malade.", a:"la cause" },
          { p:"Il était malade, c'est pourquoi il est absent.", a:"la conséquence" },
          { p:"Grâce à son travail, il a réussi.", a:"la cause" },
          { p:"Il a tellement travaillé qu'il a réussi.", a:"la conséquence" },
          { p:"À cause de la pluie, le match est annulé.", a:"la cause" }
        ], i => `Que met en relief cette phrase : « ${i.p} » ?`,
           i => `« ${i.p} » exprime <strong>${i.a}</strong>.`,
           ["la cause", "la conséquence", "le but", "l'opposition"])
    ],
    f13: [
      () => bankQcm([
          { p:"un sujet qui demande d'expliquer POURQUOI un phénomène se produit (ses causes)", a:"un sujet de type causal" },
          { p:"un sujet qui demande d'expliquer COMMENT un phénomène fonctionne (son déroulement)", a:"un sujet de type fonctionnel" },
          { p:"la partie qui pose la question à laquelle le texte va répondre", a:"la phase de questionnement" },
          { p:"la partie qui apporte la réponse, organisée et illustrée", a:"la phase explicative" },
          { p:"le temps dominant du texte explicatif, parce qu'il énonce des vérités générales", a:"le présent de vérité générale" }
        ], i => `Dans le texte explicatif, à quoi correspond ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f14: [
      () => bankQcm([
          { p:"réduire le texte au quart de sa longueur environ, en respectant la marge tolérée", a:"une règle de longueur" },
          { p:"reformuler avec ses propres mots, sans recopier des phrases entières", a:"une règle de reformulation" },
          { p:"garder le même système d'énonciation que l'auteur (même personne, même temps)", a:"une règle d'énonciation" },
          { p:"ne pas écrire « l'auteur dit que » ni donner son avis personnel", a:"une règle d'effacement du commentaire" },
          { p:"respecter l'ordre des idées et l'enchaînement logique du texte de départ", a:"une règle de fidélité au plan" }
        ], i => `Dans le résumé de texte, quelle règle impose de ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f15: [
      () => bankQcm([
          { p:"un document qui rapporte fidèlement et intégralement les débats, avec valeur juridique", a:"le procès-verbal" },
          { p:"un document qui synthétise l'essentiel de la réunion, sans tout rapporter", a:"le compte rendu" },
          { p:"la liste des points à traiter, fixée avant la réunion", a:"l'ordre du jour" },
          { p:"la liste des personnes présentes, absentes et excusées", a:"la liste de présence" },
          { p:"les décisions prises et les tâches attribuées à chacun", a:"les résolutions" }
        ], i => `Dans le cadre d'une réunion, qu'est-ce que ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f16: [
      () => bankQcm([
          { p:"l'opinion défendue par le premier interlocuteur", a:"la thèse" },
          { p:"l'opinion contraire défendue par le second interlocuteur", a:"l'antithèse" },
          { p:"admettre une partie de l'argument adverse avant de le combattre", a:"la concession" },
          { p:"démonter l'argument de l'adversaire en montrant sa faiblesse", a:"la réfutation" },
          { p:"le tiret qui marque le changement d'interlocuteur", a:"un signe de ponctuation du dialogue" }
        ], i => `Dans un dialogue argumentatif, qu'est-ce que ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`),
      () => bankQcm([
          { c:"certes... mais", a:"la concession" }, { c:"bien que", a:"la concession" },
          { c:"cependant", a:"l'opposition" }, { c:"en revanche", a:"l'opposition" },
          { c:"en effet", a:"la justification" }, { c:"par exemple", a:"l'illustration" },
          { c:"en conclusion", a:"la conclusion" }, { c:"d'abord", a:"l'ouverture d'une énumération" }
        ], i => `Que marque le connecteur « ${i.c} » dans une argumentation ?`, i => `« ${i.c} » marque ${i.a}.`)
    ],
    f17: [
      () => bankQcm([
          { p:"les coordonnées de l'expéditeur, en haut à gauche", a:"l'en-tête" },
          { p:"les coordonnées du destinataire, en haut à droite", a:"la suscription" },
          { p:"la mention qui résume en une ligne la raison de la lettre", a:"l'objet" },
          { p:"« Monsieur l'Inspecteur, »", a:"la formule d'appel" },
          { p:"« Je vous prie d'agréer, Monsieur, l'assurance de ma considération distinguée. »", a:"la formule de politesse" },
          { p:"le nom écrit à la main au bas de la lettre", a:"la signature" }
        ], i => `Dans une lettre officielle, à quoi correspond ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`),
      () => {
        const off = Math.random() < 0.5;
        const correct = off ? "un registre soutenu, avec le vouvoiement et des formules figées"
                            : "un registre familier ou courant, avec le tutoiement possible";
        const { options, correctIndex } = fourWays(correct, [
          off ? "un registre familier ou courant, avec le tutoiement possible"
              : "un registre soutenu, avec le vouvoiement et des formules figées",
          "un registre argotique",
          "un registre poétique et imagé"
        ]);
        if (correctIndex < 0) return null;
        return qcm(`Quel registre de langue convient à une lettre ${off ? "officielle (à une administration)" : "personnelle (à un ami)"} ?`,
          options, correctIndex,
          off
            ? `Une lettre officielle exige un registre soutenu : vouvoiement, pas d'abréviation, formules d'appel et de politesse conventionnelles.`
            : `Une lettre personnelle admet un registre courant ou familier : le tutoiement et un ton libre y sont possibles.`);
      }
    ],
    f18: [
      () => bankQcm([
          { p:"Une <strong>belle</strong> maison", a:"un adjectif épithète" },
          { p:"La maison <strong>de mon père</strong>", a:"un complément du nom" },
          { p:"La maison <strong>que j'ai visitée</strong>", a:"une proposition subordonnée relative" },
          { p:"Mon voisin, <strong>un homme discret</strong>, est parti", a:"une apposition" },
          { p:"Un cahier <strong>neuf</strong>", a:"un adjectif épithète" },
          { p:"Le chant <strong>des oiseaux</strong>", a:"un complément du nom" }
        ], i => `Quelle est la nature de l'expansion en gras : « ${i.p} » ?`,
           i => `Dans « ${i.p} », l'expansion en gras est ${i.a}.`,
           ["un adjectif épithète", "un complément du nom", "une proposition subordonnée relative", "une apposition"]),
      () => bankQcm([
          { p:"le mot autour duquel s'organise tout le groupe nominal", a:"le noyau (le nom)" },
          { p:"le mot obligatoire qui précède le nom et en marque le genre et le nombre", a:"le déterminant" },
          { p:"tout élément facultatif qui vient enrichir le nom", a:"une expansion du nom" },
          { p:"une expansion placée entre virgules, qui désigne la même réalité que le nom", a:"une apposition" }
        ], i => `Dans le groupe nominal, qu'est-ce que ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f19: [
      () => bankQcm([
          { p:"Je vois <strong>le directeur</strong>.", a:"Je le vois.", f:"COD masculin singulier" },
          { p:"Je vois <strong>la directrice</strong>.", a:"Je la vois.", f:"COD féminin singulier" },
          { p:"Je vois <strong>les élèves</strong>.", a:"Je les vois.", f:"COD pluriel" },
          { p:"Je parle <strong>à mon frère</strong>.", a:"Je lui parle.", f:"COI singulier introduit par « à »" },
          { p:"Je parle <strong>à mes parents</strong>.", a:"Je leur parle.", f:"COI pluriel introduit par « à »" },
          { p:"Je reviens <strong>du village</strong>.", a:"J'en reviens.", f:"complément introduit par « de »" },
          { p:"Je pense <strong>à mes examens</strong>.", a:"J'y pense.", f:"complément introduit par « à » (chose)" },
          { p:"Je vais <strong>à Abidjan</strong>.", a:"J'y vais.", f:"complément de lieu" }
        ], i => `Remplace le groupe en gras par le pronom qui convient : « ${i.p} »`,
           i => `On écrit : <strong>${i.a}</strong> — le groupe en gras est ${i.f}.`),
      () => bankQcm([
          { p:"un COD de personne ou de chose, masculin ou féminin", a:"le, la, les" },
          { p:"un COI introduit par « à » désignant une personne", a:"lui, leur" },
          { p:"un complément introduit par « de »", a:"en" },
          { p:"un complément de lieu ou un complément introduit par « à » désignant une chose", a:"y" }
        ], i => `Quel pronom remplace ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} se remplace par <strong>${i.a}</strong>.`)
    ],
    f20: [
      () => bankQcm(FR_CONJ.map(v => ({ inf:v.inf, a:v.g })),
            i => `À quel groupe appartient le verbe « ${i.inf} » ?`,
            i => i.a === "auxiliaire"
              ? `« ${i.inf} » n'appartient à aucun des trois groupes : c'est un auxiliaire.`
              : `« ${i.inf} » appartient au ${i.a}.${i.inf === "aller" ? " Attention : malgré sa terminaison en -er, « aller » est du 3e groupe." : ""}`,
            ["1er groupe", "2e groupe", "3e groupe", "auxiliaire"]),
      () => frConjQcm(["ps", "im", "fu", "co", "su"]),
      () => bankQcm([
          { p:"le sujet fait l'action", a:"la voix active" },
          { p:"le sujet subit l'action", a:"la voix passive" },
          { p:"le verbe exprime un fait présenté comme réel", a:"le mode indicatif" },
          { p:"le verbe exprime un fait souhaité, envisagé, incertain", a:"le mode subjonctif" },
          { p:"le verbe exprime un ordre ou un conseil, sans sujet exprimé", a:"le mode impératif" },
          { p:"le verbe exprime un fait soumis à une condition", a:"le mode conditionnel" }
        ], i => `Comment nomme-t-on la forme verbale où ${i.p} ?`, i => `Quand ${i.p}, on parle de ${i.a}.`)
    ],
    f21: [
      () => bankQcm(FR_SUBORD_EX, i => `De quelle nature est la proposition en gras : ${i.p}`,
            i => `Dans ${i.p} la proposition en gras est <strong>${i.a}</strong>.`, FR_SUBORD),
      () => bankQcm([
          { c:"quand, lorsque, dès que, pendant que", a:"une subordonnée circonstancielle de temps" },
          { c:"parce que, puisque, comme, étant donné que", a:"une subordonnée circonstancielle de cause" },
          { c:"pour que, afin que", a:"une subordonnée circonstancielle de but" },
          { c:"si bien que, de sorte que, tellement que", a:"une subordonnée circonstancielle de conséquence" },
          { c:"si, à condition que, pourvu que", a:"une subordonnée circonstancielle de condition" },
          { c:"bien que, quoique, même si", a:"une subordonnée circonstancielle de concession" }
        ], i => `Quelle subordonnée introduisent les conjonctions « ${i.c} » ?`, i => `« ${i.c} » introduisent ${i.a}.`, FR_SUBORD)
    ],
    f22: [
      () => bankQcm([
          { p:"in-, im-, dé-, anti-", a:"des préfixes de sens négatif ou contraire" },
          { p:"re-, ré-", a:"un préfixe indiquant la répétition" },
          { p:"pré-", a:"un préfixe indiquant l'antériorité" },
          { p:"poly-, multi-", a:"des préfixes indiquant la pluralité" },
          { p:"trans-", a:"un préfixe indiquant le passage à travers" }
        ], i => `Quel sens portent « ${i.p} » ?`, i => `« ${i.p} » : ce sont ${i.a}.`),
      () => bankQcm([
          { s:"-tion, -ment (comme dans « changement »)", a:"un suffixe qui forme des noms" },
          { s:"-able, -ible", a:"un suffixe qui forme des adjectifs" },
          { s:"-ment (comme dans « lentement »)", a:"un suffixe qui forme des adverbes" },
          { s:"-eur, -iste", a:"un suffixe qui désigne celui qui fait l'action" },
          { s:"-ette, -eau", a:"un suffixe diminutif" }
        ], i => `Que forme le suffixe « ${i.s} » ?`, i => `« ${i.s} » est ${i.a}.`),
      () => bankQcm([
          { p:"la partie du mot qui porte le sens principal", a:"le radical" },
          { p:"l'élément placé AVANT le radical", a:"le préfixe" },
          { p:"l'élément placé APRÈS le radical", a:"le suffixe" },
          { p:"l'ensemble des mots construits sur le même radical", a:"une famille de mots" }
        ], i => `Dans la formation des mots, qu'est-ce que ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f23: [
      () => bankQcm([
          { p:"Beaucoup d'élèves ___ absents aujourd'hui.", a:"sont", r:"« beaucoup de + nom pluriel » commande le pluriel" },
          { p:"Peu de gens ___ la vérité.", a:"savent", r:"« peu de + nom pluriel » commande le pluriel" },
          { p:"La plupart des candidats ___ réussi.", a:"ont", r:"« la plupart de + nom pluriel » commande le pluriel" },
          { p:"Assez d'eau ___ tombée cette nuit.", a:"est", r:"« assez de + nom singulier » commande le singulier" },
          { p:"Beaucoup de patience ___ nécessaire.", a:"est", r:"« beaucoup de + nom singulier » commande le singulier" },
          { p:"Trop de bruit ___ gênant.", a:"est", r:"« trop de + nom singulier » commande le singulier" }
        ], i => `Complète correctement : « ${i.p} »`,
           i => `On écrit « ${i.p.replace("___", i.a)} » : avec « beaucoup de, peu de, assez de, la plupart de », le verbe s'accorde avec le <strong>complément</strong>, pas avec l'adverbe. Ici, ${i.r}.`,
           ["sont", "est", "savent", "ont", "a"]),
      () => bankQcm([
          { p:"beaucoup de, peu de, assez de, trop de suivis d'un nom au PLURIEL", a:"le verbe se met au pluriel" },
          { p:"beaucoup de, peu de, assez de, trop de suivis d'un nom au SINGULIER", a:"le verbe se met au singulier" },
          { p:"« la plupart des » suivi d'un nom pluriel", a:"le verbe se met au pluriel" },
          { p:"« plus d'un » suivi d'un nom singulier", a:"le verbe se met au singulier" }
        ], i => `Avec ${i.p}, comment accorde-t-on le verbe ?`,
           i => `Avec ${i.p}, ${i.a} : c'est le complément qui commande l'accord.`,
           ["le verbe se met au pluriel", "le verbe se met au singulier",
            "le verbe reste à l'infinitif", "le verbe s'accorde avec l'adverbe"])
    ],
    f24: [
      () => bankQcm([
          { p:"celui qui distribue la parole, veille au temps et au respect mutuel", a:"le modérateur (l'animateur)" },
          { p:"celui qui défend une position et répond aux objections", a:"un intervenant (un débatteur)" },
          { p:"écouter sans interrompre et attendre son tour de parole", a:"une règle de courtoisie du débat" },
          { p:"appuyer son opinion sur des faits vérifiables plutôt que sur des attaques personnelles", a:"une règle d'argumentation honnête" },
          { p:"résumer les positions et dégager les points d'accord à la fin", a:"le rôle de la synthèse finale" }
        ], i => `Dans un débat, à quoi correspond ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ],
    f25: [
      () => bankQcm([
          { p:"annoncer le sujet et le plan que l'on va suivre", a:"l'introduction de l'exposé" },
          { p:"développer les parties annoncées, une idée par partie", a:"le développement" },
          { p:"résumer l'essentiel et ouvrir sur une question plus large", a:"la conclusion" },
          { p:"une affiche, un schéma ou un objet qui appuie le propos", a:"un support visuel" },
          { p:"parler assez fort, articuler et regarder l'auditoire", a:"une règle de communication orale" },
          { p:"ne pas lire ses notes mot à mot, mais s'appuyer sur un plan détaillé", a:"une règle de préparation de l'oral" }
        ], i => `Dans un exposé oral, à quoi correspond ${i.p} ?`, i => `${i.p.charAt(0).toUpperCase()+i.p.slice(1)} : c'est ${i.a}.`)
    ]
  };

  const TEMPLATES = {
    maths: MATHS,
    pc: Object.assign({}, PC, PC_EXTRA),
    svt: SVT,
    hg: HG,
    anglais: EN,
    francais: FR
  };

  /* ---------- Pool de secours (quiz + practice, mélangés) ---------- */
  const lastKey = {}; // lessonId -> signature du dernier exercice rendu (pour éviter la répétition immédiate)

  function poolCandidates(subjectKey, lessonId, type){
    const subj = COURSES[subjectKey];
    if (!subj) return [];
    const lesson = subj.lessons.find(l => l.id === lessonId);
    if (!lesson) return [];
    const cands = [];
    if (!type || type === "qcm"){
      (lesson.quiz || []).forEach((q, i) => cands.push({ sig: "quiz" + i, make: () => {
        const idx = q.options.map((_, k) => k);
        const shuffled = shuffle(idx);
        const options = shuffled.map(k => q.options[k]);
        const correct = shuffled.indexOf(q.correct);
        return qcm(q.q, options, correct, q.exp);
      }}));
    }
    if (!type || type === "open"){
      (PRACTICE[lessonId] || []).forEach((p, i) => cands.push({ sig: "prac" + i, make: () => open(p.statement, p.solution) }));
    }
    return cands;
  }

  /* ---------- Générateur principal ---------- */
  function generate(subjectKey, lessonId, type, difficulty){
    const tmplList = (TEMPLATES[subjectKey] && TEMPLATES[subjectKey][lessonId]) || [];
    const usableTmpl = tmplList; // les templates ci-dessus rendent tous des QCM sauf m8 (open)
    const candidates = [];

    // Templates : forte pondération car variété infinie (sauf si un type précis est demandé
    // et que le template ne peut pas le fournir de façon fiable -> on les garde disponibles
    // pour "qcm" ou non précisé ; m8 (open) reste disponible pour "open" ou non précisé).
    usableTmpl.forEach((fn, i) => {
      candidates.push({ sig: "tmpl" + i, weight: 3, make: fn });
    });

    poolCandidates(subjectKey, lessonId, type).forEach(c => candidates.push({ ...c, weight: 1 }));

    if (!candidates.length) return null;

    // tirage pondéré, en évitant si possible la dernière signature utilisée pour cette leçon
    let pool = candidates;
    if (candidates.length > 1){
      const filtered = candidates.filter(c => c.sig !== lastKey[lessonId]);
      if (filtered.length) pool = filtered;
    }
    const weighted = [];
    pool.forEach(c => { for (let i = 0; i < c.weight; i++) weighted.push(c); });

    // Tirage pondéré : mélanger le multiensemble puis prendre le premier élément
    // équivaut à un tirage pondéré, et les suivants servent de repli si un
    // générateur échoue ou produit un exercice invalide.
    let result = null, chosen = null;
    for (const cand of shuffle(weighted)){
      let r = null;
      try { r = cand.make(); } catch (e) { r = null; }
      if (validExercise(r)){ result = r; chosen = cand; break; }
    }
    if (!result) return null;
    lastKey[lessonId] = chosen.sig;

    // filtre a posteriori si un type précis était demandé et que le template a rendu l'autre type
    if (type && result.type !== type){
      const strict = poolCandidates(subjectKey, lessonId, type);
      for (const c of shuffle(strict)){
        let r = null;
        try { r = c.make(); } catch (e) { r = null; }
        if (validExercise(r)){ lastKey[lessonId] = c.sig; return r; }
      }
    }
    return result;
  }

  function hasContent(subjectKey, lessonId){
    const subj = COURSES[subjectKey];
    const lesson = subj && subj.lessons.find(l => l.id === lessonId);
    if (!lesson) return false;
    const tmplCount = (TEMPLATES[subjectKey] && TEMPLATES[subjectKey][lessonId] || []).length;
    return tmplCount > 0 || (lesson.quiz && lesson.quiz.length) || (PRACTICE[lessonId] && PRACTICE[lessonId].length);
  }

  return { generate, hasContent };
})();
