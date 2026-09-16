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

  /* Construit 3 fausses réponses numériques plausibles autour de la bonne réponse,
     mélange le tout, renvoie {options, correctIndex}. */
  function numericOptions(correctVal, decorators){
    // decorators: liste de fonctions qui, à partir de la bonne valeur, fabriquent un leurre différent
    const wrongs = decorators.map(d => d(correctVal));
    const uniq = [];
    wrongs.forEach(w => { if (w !== correctVal && !uniq.includes(w)) uniq.push(w); });
    while (uniq.length < 3) uniq.push(correctVal + randNonZeroInt(-9, 9) * (uniq.length + 1));
    const opts = shuffle([correctVal, ...uniq.slice(0, 3)]);
    return { options: opts.map(v => (typeof v === "number" ? fmt(v) : String(v))), correctIndex: opts.indexOf(correctVal) };
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
    m10: [ () => {
      const a = randNonZeroInt(-9,9), b = randNonZeroInt(-9,9), k = randNonZeroInt(-9,9);
      const trueIneq = a < b;
      const afterMul = k > 0 ? (a*k < b*k) : (a*k > b*k);
      const symbol = k>0 ? (a<b?"<":">") : (a<b?">":"<");
      const correct = `${a*k} ${symbol} ${b*k}`;
      const opts = [`${a*k} < ${b*k}`, `${a*k} > ${b*k}`, `${a*k} = ${b*k}`];
      const options = shuffle(Array.from(new Set(opts)));
      return qcm(`On sait que ${a} < ${b}. On multiplie les deux membres par ${k}. Quelle inégalité obtient-on ?`, options, options.indexOf(correct),
        `Multiplier par un nombre ${k>0?"positif conserve":"négatif inverse"} le sens de l'inégalité : ${correct}.`);
    }],
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

  const TEMPLATES = { maths: MATHS, pc: PC };

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
    const chosen = pick(weighted);
    lastKey[lessonId] = chosen.sig;

    let result;
    try { result = chosen.make(); } catch (e) { result = null; }
    if (!result) return null;
    // filtre a posteriori si un type précis était demandé et que le template a rendu l'autre type
    if (type && result.type !== type){
      // on retente une fois avec le pool uniquement pour respecter le type demandé
      const strict = poolCandidates(subjectKey, lessonId, type);
      if (strict.length){
        const c = pick(strict);
        lastKey[lessonId] = c.sig;
        return c.make();
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
