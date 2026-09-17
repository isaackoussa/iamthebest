// I'm The Best — app.js
(function(){
  const root = document.getElementById("app");
  const LS_KEY = "imthebest_progress_v1";
  const AUTH_KEY = "imthebest_auth_email";

  /* ---------- Auth state ---------- */
  let currentEmail = null;
  try{ currentEmail = localStorage.getItem(AUTH_KEY) || null; }catch(e){ currentEmail = null; }
  let authPendingEmail = "";
  let authError = "";

  function updateTopbarUser(){
    const el = document.getElementById("topbar-user");
    const nav = document.getElementById("topnav");
    if (nav) nav.style.display = currentEmail ? "flex" : "none";
    if (!el) return;
    if (currentEmail){
      el.innerHTML = `<span class="user-email">${esc(currentEmail)}</span> <button id="logout-btn" class="btn-link">Changer de compte</button>`;
      const btn = document.getElementById("logout-btn");
      if (btn) btn.addEventListener("click", logout);
    } else {
      el.innerHTML = "";
    }
  }

  function logout(){
    try{ localStorage.removeItem(AUTH_KEY); }catch(e){}
    currentEmail = null;
    authPendingEmail = "";
    authError = "";
    location.hash = "";
    render();
  }

  /* ---------- Progress state ---------- */
  let progress = loadLocal();
  const LS_GRADES_KEY = "imthebest_grades_v1";
  const LS_COEFS_KEY = "imthebest_coefs_v1";
  const LS_SUBJECTS_KEY = "imthebest_subjects_v1";
  let grades = loadGradesLocal(); // { subjectKey: [ {id, type, label, score, outOf, coef, term, date} ] }
  let subjectCoefs = loadJsonLocal(LS_COEFS_KEY, {});   // coefficients par matière, modifiables
  let customSubjects = loadJsonLocal(LS_SUBJECTS_KEY, []); // matières ajoutées par l'élève

  function loadLocal(){
    try{ return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch(e){ return {}; }
  }
  function loadGradesLocal(){
    try{ return JSON.parse(localStorage.getItem(LS_GRADES_KEY)) || {}; }
    catch(e){ return {}; }
  }
  function loadJsonLocal(key, fallback){
    try{
      const v = JSON.parse(localStorage.getItem(key));
      return (v && typeof v === "object") ? v : fallback;
    }catch(e){ return fallback; }
  }
  function saveLocal(){
    try{ localStorage.setItem(LS_KEY, JSON.stringify(progress)); }catch(e){ /* storage blocked in preview */ }
  }
  function saveGradesLocal(){
    try{ localStorage.setItem(LS_GRADES_KEY, JSON.stringify(grades)); }catch(e){ /* storage blocked in preview */ }
  }
  function saveNotesConfigLocal(){
    try{
      localStorage.setItem(LS_COEFS_KEY, JSON.stringify(subjectCoefs));
      localStorage.setItem(LS_SUBJECTS_KEY, JSON.stringify(customSubjects));
    }catch(e){ /* storage blocked in preview */ }
  }
  function saveRemote(){
    if (!currentEmail) return;
    fetch(`/api/progress?email=${encodeURIComponent(currentEmail)}`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ progress, grades, subjectCoefs, customSubjects })
    }).catch(()=>{ /* offline: ok, local storage keeps it */ });
  }
  function loadRemoteThenRender(){
    // On applique d'abord les corrections de contenu de la console admin,
    // puis on synchronise la progression.
    loadContentOverrides().then(() => {
      if (!currentEmail){ render(); return; }
      syncRemoteThenRender();
    });
  }

  function syncRemoteThenRender(){
    if (!currentEmail){ render(); return; }
    fetch(`/api/progress?email=${encodeURIComponent(currentEmail)}`).then(r => r.ok ? r.json() : null).then(remote => {
      if (remote && typeof remote === "object"){
        const remoteProgress = remote.progress && typeof remote.progress === "object" ? remote.progress : remote;
        const remoteGrades = remote.grades && typeof remote.grades === "object" ? remote.grades : {};
        if (Object.keys(remoteProgress).length){ progress = Object.assign({}, progress, remoteProgress); saveLocal(); }
        if (Object.keys(remoteGrades).length){ grades = Object.assign({}, grades, remoteGrades); saveGradesLocal(); }
        let cfgChanged = false;
        if (remote.subjectCoefs && typeof remote.subjectCoefs === "object" && Object.keys(remote.subjectCoefs).length){
          subjectCoefs = Object.assign({}, subjectCoefs, remote.subjectCoefs); cfgChanged = true;
        }
        if (Array.isArray(remote.customSubjects) && remote.customSubjects.length){
          const seen = {};
          customSubjects = customSubjects.concat(remote.customSubjects)
            .filter(s => s && s.key && !seen[s.key] && (seen[s.key] = true));
          cfgChanged = true;
        }
        if (cfgChanged) saveNotesConfigLocal();
      }
    }).catch(()=>{}).finally(render);
  }

  function markLesson(lessonId, score, total){
    progress[lessonId] = { done:true, score, total, ts: Date.now() };
    saveLocal();
    saveRemote();
  }

  function addGrade(subjectKey, entry){
    if (!grades[subjectKey]) grades[subjectKey] = [];
    grades[subjectKey].push(entry);
    saveGradesLocal();
    saveRemote();
  }
  function deleteGrade(subjectKey, id){
    if (!grades[subjectKey]) return;
    grades[subjectKey] = grades[subjectKey].filter(g => g.id !== id);
    saveGradesLocal();
    saveRemote();
  }

  /* ---------- Helpers ---------- */
  function allLessons(){
    const out = [];
    Object.keys(COURSES).forEach(key => {
      COURSES[key].lessons.forEach(l => out.push({subjectKey:key, ...l}));
    });
    return out;
  }
  function subjectStats(key){
    const subj = COURSES[key];
    const total = subj.lessons.length;
    let done = 0, scoreSum = 0, scoreTotal = 0;
    subj.lessons.forEach(l => {
      const p = progress[l.id];
      if (p && p.done){ done++; scoreSum += p.score; scoreTotal += p.total; }
    });
    return {total, done, scoreSum, scoreTotal};
  }
  function globalStats(){
    const all = allLessons();
    let done = 0, scoreSum = 0, scoreTotal = 0;
    all.forEach(l => {
      const p = progress[l.id];
      if (p && p.done){ done++; scoreSum += p.score; scoreTotal += p.total; }
    });
    return {total: all.length, done, scoreSum, scoreTotal};
  }
  function esc(s){
    return String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
  }
  function findLesson(key, id){
    const subj = COURSES[key];
    if (!subj) return null;
    return subj.lessons.find(l => l.id === id) || null;
  }

  /* ---------- Router ---------- */
  window.addEventListener("hashchange", render);
  window.addEventListener("DOMContentLoaded", loadRemoteThenRender);

  function currentRoute(){
    const hash = location.hash.replace(/^#\/?/, "");
    const parts = hash.split("/").filter(Boolean);
    return parts;
  }

  function render(){
    updateTopbarUser();
    // La console admin a sa propre porte (code vérifié côté serveur) : elle
    // n'exige pas d'être connecté comme élève.
    if (currentRoute()[0] === "admin") return renderAdmin();
    if (!currentEmail){ return renderAuthGate(); }
    const parts = currentRoute();
    window.scrollTo(0,0);
    if (parts.length === 0) return renderHome();
    if (parts[0] === "subject" && parts[1]) return renderSubject(parts[1]);
    if (parts[0] === "lesson" && parts[1] && parts[2]) return renderLesson(parts[1], parts[2]);
    if (parts[0] === "quiz" && parts[1] && parts[2]) return renderQuiz(parts[1], parts[2]);
    if (parts[0] === "situations" && parts[1]) return renderSituations(parts[1]);
    if (parts[0] === "notes"){
      // Ancien lien par matière (#/notes/maths) : on ouvre le tableau global
      // avec cette matière dépliée.
      if (parts[1]){ notesOpen = parts[1]; location.hash = "#/notes"; return; }
      return renderNotesBoard();
    }
    if (parts[0] === "generator") return renderGenerator(parts[1], parts[2]);
    if (parts[0] === "translate") return renderTranslate();
    if (parts[0] === "admin") return renderAdmin();
    return renderHome();
  }

  function renderAuthGate(){
    root.innerHTML = `
      <div class="auth-card">
        <div class="auth-badge">🏆</div>
        <h1 class="auth-title">Bienvenue sur I'm The Best</h1>
        <p class="auth-sub">Entre ton adresse email pour retrouver ta progression (ou en démarrer une nouvelle).</p>
        <input type="email" id="auth-email" class="auth-input" placeholder="ton.email@exemple.com" value="${esc(authPendingEmail)}" autocomplete="email">
        ${authError ? `<p class="auth-error">${esc(authError)}</p>` : ""}
        <button class="btn btn-primary auth-btn" id="auth-start-btn">Continuer</button>
      </div>
    `;
    const input = document.getElementById("auth-email");
    input.focus();
    input.addEventListener("keydown", e => { if (e.key === "Enter") startWithEmail(); });
    document.getElementById("auth-start-btn").addEventListener("click", startWithEmail);
  }

  function startWithEmail(){
    const input = document.getElementById("auth-email");
    const email = (input.value || "").trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){
      authError = "Entre une adresse email valide."; authPendingEmail = email; render(); return;
    }
    authError = "";
    currentEmail = email;
    try{ localStorage.setItem(AUTH_KEY, email); }catch(e){}
    loadRemoteThenRender();
  }

  /* ---------- Views ---------- */
  function renderHome(){
    const g = globalStats();
    const avg = g.scoreTotal ? Math.round((g.scoreSum / g.scoreTotal) * 100) : null;

    let cards = "";
    Object.keys(COURSES).forEach(key => {
      const subj = COURSES[key];
      const s = subjectStats(key);
      const pct = s.total ? Math.round((s.done / s.total) * 100) : 0;
      cards += `
        <div class="subject-card" tabindex="0" role="button" data-key="${key}" style="--sc:${subj.color}">
          <span class="sc-icon">${subj.icon}</span>
          <span class="sc-name">${esc(subj.name)}</span>
          <div class="sc-bar"><span style="width:${pct}%"></span></div>
          <div class="sc-meta">${s.done}/${s.total} leçons terminées</div>
        </div>`;
    });

    root.innerHTML = `
      <div class="hero">
        <h1>Salut championne, salut champion 🏆</h1>
        <p>Choisis une matière, lis la leçon, puis fais l'évaluation pour vérifier que tu as bien compris. Ta progression est enregistrée automatiquement.</p>
        <div class="progress-board">
          <div class="progress-stat"><span class="num">${g.done}/${g.total}</span><span class="label">Leçons faites</span></div>
          <div class="progress-stat"><span class="num">${avg !== null ? avg + "%" : "—"}</span><span class="label">Score moyen</span></div>
          <div class="progress-stat"><span class="num">${Object.keys(COURSES).length}</span><span class="label">Matières</span></div>
        </div>
      </div>
      <div class="subject-grid">${cards}</div>
    `;

    root.querySelectorAll(".subject-card").forEach(card => {
      const go = () => location.hash = "#/subject/" + card.dataset.key;
      card.addEventListener("click", go);
      card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
  }

  function renderSubject(key){
    const subj = COURSES[key];
    if (!subj){ root.innerHTML = `<p class="empty">Matière introuvable.</p>`; return; }

    let rows = "";
    subj.lessons.forEach((l, i) => {
      const p = progress[l.id];
      const status = p && p.done ? `${p.score}/${p.total} à l'évaluation` : "Pas encore fait";
      rows += `
        <li class="lesson-row" data-id="${l.id}" style="--subj-color:${subj.color}" tabindex="0" role="button">
          <span class="lesson-num">${i+1}</span>
          <span class="lesson-info">
            <span class="lesson-title">${esc(l.title)}</span>
            <span class="lesson-status">${status}</span>
          </span>
          <span class="lesson-check">${p && p.done ? "✅" : "▫️"}</span>
        </li>`;
    });

    root.innerHTML = `
      <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <span>${esc(subj.name)}</span></div>
      <div class="subject-header" style="--subj-color:${subj.color}">
        <span class="sh-icon">${subj.icon}</span>
        <h1 style="--subj-color:${subj.color}">${esc(subj.name)}</h1>
      </div>
      <p class="subject-sub">${subj.lessons.length} leçons — clique sur une leçon pour l'ouvrir.</p>
      <div class="subject-links">
        <a class="btn btn-ghost" style="--subj-color:${subj.color}" href="#/notes/${key}">📔 Mes notes</a>
        ${SITUATIONS[key] ? `<a class="btn btn-ghost" style="--subj-color:${subj.color}" href="#/situations/${key}">📋 Situations d'évaluation</a>` : ""}
        <a class="btn btn-ghost" style="--subj-color:${subj.color}" href="#/generator/${key}">🧠 Générer un exercice</a>
      </div>
      <ul class="lesson-list">${rows}</ul>
    `;

    root.querySelectorAll(".lesson-row").forEach(row => {
      const go = () => location.hash = `#/lesson/${key}/${row.dataset.id}`;
      row.addEventListener("click", go);
      row.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); go(); } });
    });
  }

  function renderLesson(key, id){
    const subj = COURSES[key];
    const lesson = findLesson(key, id);
    if (!subj || !lesson){ root.innerHTML = `<p class="empty">Leçon introuvable.</p>`; return; }
    const p = progress[id];

    root.innerHTML = `
      <div class="crumb">
        <a href="#/">Accueil</a> <span>/</span>
        <a href="#/subject/${key}">${esc(subj.name)}</a> <span>/</span>
        <span>${esc(lesson.title)}</span>
      </div>
      <div class="page-sheet" style="--subj-color:${subj.color}">
        <h2>${subj.icon} ${esc(lesson.title)}</h2>
        ${lesson.content}
      </div>
      <div class="ai-card" style="--subj-color:${subj.color}">
        <div class="practice-label">🤖 Assistant IA — pose ta question sur cette leçon</div>
        <div class="ai-row">
          <input type="text" id="ai-question" class="auth-input ai-input" placeholder="Ex : Pourquoi est-ce que...?">
          <button class="btn btn-primary" id="ai-ask-btn" style="--subj-color:${subj.color}">Demander</button>
        </div>
        <div id="ai-answer" class="ai-answer"></div>
      </div>
      ${key === "anglais" ? `
      <div class="mini-translate" style="--subj-color:${subj.color}">
        <div class="practice-label">🔤 Traduire un mot ou une phrase de cette leçon</div>
        <div class="ai-row">
          <input type="text" id="mt-text" class="auth-input ai-input" placeholder="Ex : to go fishing / je voudrais...">
          <button class="btn btn-primary" id="mt-btn" style="--subj-color:${subj.color}">Traduire</button>
        </div>
        <div id="mt-result" class="ai-answer"></div>
      </div>` : ""}
      <div class="lesson-actions">
        <button class="btn btn-primary" id="go-quiz" style="--subj-color:${subj.color}">
          ${p && p.done ? "🔁 Refaire l'évaluation" : "📝 Faire l'évaluation"}
        </button>
        <a class="btn btn-ghost" href="#/subject/${key}">← Retour aux leçons</a>
        <a class="btn btn-ghost" href="#/generator/${key}/${id}">🧠 Générer un exercice sur cette leçon</a>
      </div>
    `;
    const aiBtn = document.getElementById("ai-ask-btn");
    const aiInput = document.getElementById("ai-question");
    const aiAnswer = document.getElementById("ai-answer");
    function askAI(){
      const question = (aiInput.value || "").trim();
      if (!question) return;
      aiBtn.disabled = true; aiBtn.textContent = "...";
      aiAnswer.className = "ai-answer show ai-loading";
      aiAnswer.textContent = "L'assistant réfléchit...";
      fetch("/api/ask-ai", {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
          question,
          subjectName: subj.name,
          lessonTitle: lesson.title,
          lessonText: (lesson.content || "").replace(/<[^>]+>/g, " ")
        })
      }).then(r => r.json().then(data => ({ok:r.ok, data}))).then(({ok, data}) => {
        aiBtn.disabled = false; aiBtn.textContent = "Demander";
        aiAnswer.className = "ai-answer show";
        aiAnswer.innerHTML = ok ? esc(data.answer) : `⚠️ ${esc(apiError(data, "L'assistant IA n'a pas pu répondre. Réessaie dans un instant."))}`;
      }).catch(() => {
        aiBtn.disabled = false; aiBtn.textContent = "Demander";
        aiAnswer.className = "ai-answer show";
        aiAnswer.innerHTML = "⚠️ Assistant IA indisponible ici (fonctionne une fois l'app déployée sur Netlify avec une clé API configurée).";
      });
    }
    aiBtn.addEventListener("click", askAI);
    aiInput.addEventListener("keydown", e => { if (e.key === "Enter") askAI(); });

    const mtBtn = document.getElementById("mt-btn");
    if (mtBtn){
      const mtInput = document.getElementById("mt-text");
      const mtResult = document.getElementById("mt-result");
      const goTranslate = () => runTranslate((mtInput.value || "").trim(), "auto", mtResult, mtBtn, "Traduire");
      mtBtn.addEventListener("click", goTranslate);
      mtInput.addEventListener("keydown", e => { if (e.key === "Enter") goTranslate(); });
    }

    document.getElementById("go-quiz").addEventListener("click", () => {
      location.hash = `#/quiz/${key}/${id}`;
    });
  }

  function renderSituations(key){
    const subj = COURSES[key];
    const situations = (typeof SITUATIONS !== "undefined") ? SITUATIONS[key] : null;
    if (!subj || !situations){ root.innerHTML = `<p class="empty">Pas de situation d'évaluation pour cette matière.</p>`; return; }

    let cards = "";
    situations.forEach((sit, si) => {
      let tasks = "";
      sit.tasks.forEach((t, ti) => {
        tasks += `
          <div class="situation-task">
            <p class="situation-prompt">${esc(t.prompt)}</p>
            <button class="btn btn-ghost sit-toggle" data-target="sit-${si}-${ti}">Voir la correction</button>
            <div class="practice-solution" id="sit-${si}-${ti}">${t.solution}</div>
          </div>`;
      });
      cards += `
        <div class="situation-card" style="--subj-color:${subj.color}">
          <h3>${esc(sit.title)}</h3>
          <p class="situation-context">${esc(sit.context)}</p>
          ${tasks}
        </div>`;
    });

    root.innerHTML = `
      <div class="crumb">
        <a href="#/">Accueil</a> <span>/</span>
        <a href="#/subject/${key}">${esc(subj.name)}</a> <span>/</span>
        <span>Situations d'évaluation</span>
      </div>
      <div class="subject-header" style="--subj-color:${subj.color}">
        <span class="sh-icon">📋</span>
        <h1 style="--subj-color:${subj.color}">Situations d'évaluation</h1>
      </div>
      <p class="subject-sub">Des problèmes contextualisés qui combinent plusieurs leçons de ${esc(subj.name)}.</p>
      ${cards}
    `;

    root.querySelectorAll(".sit-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        const showing = target.classList.toggle("show");
        btn.textContent = showing ? "Masquer la correction" : "Voir la correction";
      });
    });
  }

  const NOTE_TYPES = [
    { key:"devoir", label:"Devoir" },
    { key:"interrogation", label:"Interrogation" },
    { key:"compo", label:"Composition" }
  ];

  /* ---------- Suivi des notes de classe (toutes matières) ---------- */

  // Matières de 4ème (Côte d'Ivoire) qui n'ont pas de cours dans l'appli mais
  // comptent dans le bulletin.
  const EXTRA_SUBJECTS = [
    { key:"edhc",     name:"EDHC",     color:"#E8A94B", icon:"⚖️" },
    { key:"eps",      name:"EPS",      color:"#6FD1C7", icon:"🏃" },
    { key:"espagnol", name:"Espagnol", color:"#E85C8A", icon:"🇪🇸" }
  ];

  // Coefficients pré-remplis, TOUS modifiables dans l'interface : Français 4,
  // Maths 4 et Anglais 3 sont les valeurs officielles les plus couramment
  // citées ; les autres sont des valeurs usuelles à ajuster selon
  // l'établissement (les tableaux officiels de la DPFC ne sont publiés qu'en
  // PDF scannés, non vérifiables automatiquement).
  const DEFAULT_COEFS = { maths:4, francais:4, anglais:3, pc:2, hg:2, svt:2, edhc:1, eps:1, espagnol:2 };

  const TERMS = [
    { key:1, short:"T1", label:"1er trimestre" },
    { key:2, short:"T2", label:"2e trimestre" },
    { key:3, short:"T3", label:"3e trimestre" }
  ];

  const CUSTOM_COLORS = ["#C98BD6", "#7FB8E8", "#E8C15C", "#6FD18F", "#E89B7F", "#8F9BE8"];

  let notesTerm = 1;     // 1, 2, 3 ou "annee"
  let notesOpen = null;  // clé de la matière dépliée

  // Liste complète des matières suivies : les 6 de l'appli, puis les matières
  // de bulletin supplémentaires, puis celles ajoutées par l'élève.
  function gradeSubjects(){
    const base = Object.keys(COURSES).map(k => ({
      key:k, name:COURSES[k].name, color:COURSES[k].color, icon:COURSES[k].icon, inApp:true
    }));
    const extra = EXTRA_SUBJECTS.map(s => Object.assign({}, s, { inApp:false }));
    const custom = customSubjects.map(s => Object.assign({}, s, { inApp:false, custom:true }));
    return base.concat(extra, custom);
  }
  function coefOf(key){
    const c = subjectCoefs[key];
    if (typeof c === "number" && c > 0) return c;
    return DEFAULT_COEFS[key] || 1;
  }
  // Les notes saisies avant l'ajout des trimestres sont rattachées au 1er.
  function notesOf(key, term){
    return (grades[key] || []).filter(g => (g.term || 1) === term);
  }
  function countAllTerms(key){
    return TERMS.reduce((n, t) => n + notesOf(key, t.key).length, 0);
  }
  // Moyenne sur 20, pondérée par le coefficient propre à chaque note.
  function avg20(list){
    let sum = 0, coefSum = 0;
    list.forEach(g => {
      const c = g.coef > 0 ? g.coef : 1;
      sum += (g.score / g.outOf) * 20 * c;
      coefSum += c;
    });
    return coefSum ? sum / coefSum : null;
  }
  function subjectTermAvg(key, term){ return avg20(notesOf(key, term)); }
  // Moyenne annuelle d'une matière = moyenne de ses trimestres déjà notés.
  function subjectAnnualAvg(key){
    const vals = TERMS.map(t => subjectTermAvg(key, t.key)).filter(v => v !== null);
    if (!vals.length) return null;
    return vals.reduce((a, b) => a + b, 0) / vals.length;
  }
  function subjectAvg(key, term){
    return term === "annee" ? subjectAnnualAvg(key) : subjectTermAvg(key, term);
  }
  // Moyenne générale = moyennes des matières pondérées par leurs coefficients
  // (seules les matières ayant au moins une note sont comptées).
  function generalAvg(term){
    let sum = 0, coefSum = 0, noteCount = 0;
    gradeSubjects().forEach(s => {
      const avg = subjectAvg(s.key, term);
      if (avg === null) return;
      const c = coefOf(s.key);
      sum += avg * c;
      coefSum += c;
      noteCount += term === "annee" ? countAllTerms(s.key) : notesOf(s.key, term).length;
    });
    return { avg: coefSum ? sum / coefSum : null, coefSum, noteCount };
  }
  function appreciation(avg){
    if (avg === null) return "";
    if (avg >= 16) return "Excellent";
    if (avg >= 14) return "Très bien";
    if (avg >= 12) return "Bien";
    if (avg >= 10) return "Assez bien";
    if (avg >= 8) return "Insuffisant";
    return "Très insuffisant";
  }
  function fmtAvg(v){ return v === null ? "—" : v.toFixed(2).replace(".", ","); }
  function termLabel(term){
    if (term === "annee") return "année";
    const t = TERMS.find(x => x.key === term);
    return t ? t.label : "trimestre";
  }

  function renderNotesBoard(){
    const isYear = notesTerm === "annee";
    const g = generalAvg(notesTerm);

    const tabsHtml =
      TERMS.map(t => `<button class="term-tab ${notesTerm === t.key ? "active" : ""}" data-term="${t.key}">${t.short}</button>`).join("") +
      `<button class="term-tab ${isYear ? "active" : ""}" data-term="annee">Année</button>`;

    const rowsHtml = gradeSubjects().map(s => {
      const avg = subjectAvg(s.key, notesTerm);
      const count = isYear ? countAllTerms(s.key) : notesOf(s.key, notesTerm).length;
      const open = !isYear && notesOpen === s.key;
      const perTerm = isYear
        ? `<span class="grade-terms">${TERMS.map(t => `${t.short}&nbsp;${fmtAvg(subjectTermAvg(s.key, t.key))}`).join(" · ")}</span>`
        : "";
      return `
        <li class="grade-item ${open ? "open" : ""}" style="--subj-color:${s.color}">
          <div class="grade-row" data-subject="${s.key}">
            <span class="grade-icon">${s.icon}</span>
            <span class="grade-name">
              <span class="grade-name-text">${esc(s.name)}${s.inApp ? "" : ` <span class="grade-tag">bulletin</span>`}</span>
              ${perTerm}
            </span>
            <span class="grade-coef">
              <label for="coef-${s.key}">coef.</label>
              <input type="number" class="coef-input" id="coef-${s.key}" data-coef="${s.key}" value="${coefOf(s.key)}" min="0.5" step="0.5" title="Coefficient de ${esc(s.name)}">
            </span>
            <span class="grade-count">${count} note${count > 1 ? "s" : ""}</span>
            <span class="grade-avg ${avg !== null && avg < 10 ? "low" : ""}">${fmtAvg(avg)}<small>/20</small></span>
            ${s.custom ? `<button class="subject-delete" data-delsubject="${s.key}" title="Retirer cette matière">✕</button>` : ""}
            ${isYear ? "" : `<span class="grade-chevron">${open ? "▾" : "▸"}</span>`}
          </div>
          ${open ? renderSubjectPanel(s) : ""}
        </li>`;
    }).join("");

    root.innerHTML = `
      <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <span>Mes notes</span></div>
      <div class="subject-header" style="--subj-color:var(--gold)">
        <span class="sh-icon">📊</span>
        <h1 style="--subj-color:var(--gold)">Suivi des notes — 4ème</h1>
      </div>

      <div class="term-tabs">${tabsHtml}</div>

      <div class="gen-avg-card ${g.avg !== null && g.avg < 10 ? "low" : ""}">
        <div class="gen-avg-main">
          <span class="gen-avg-num">${fmtAvg(g.avg)}<small>/20</small></span>
          <span class="gen-avg-label">Moyenne générale — ${termLabel(notesTerm)}</span>
        </div>
        <div class="gen-avg-meta">
          <span>${g.noteCount} note${g.noteCount > 1 ? "s" : ""}</span>
          <span>total coef. ${g.coefSum}</span>
          ${g.avg !== null ? `<span class="gen-avg-appr">${appreciation(g.avg)}</span>` : ""}
        </div>
      </div>

      <ul class="grade-list">${rowsHtml}</ul>

      <div class="add-subject">
        <input type="text" class="auth-input" id="new-subject" placeholder="Ajouter une matière (ex : Allemand, Arts plastiques, Musique)">
        <button class="btn btn-ghost" id="add-subject-btn">➕ Ajouter</button>
      </div>
      <p class="note-error" id="subject-error"></p>

      <p class="notes-foot">
        ${isYear
          ? "La moyenne annuelle d'une matière est la moyenne de ses trimestres déjà notés."
          : "Clique sur une matière pour saisir ses notes du trimestre."}
        Les coefficients sont pré-remplis à titre indicatif (Français&nbsp;4, Maths&nbsp;4, Anglais&nbsp;3 sont les valeurs les plus couramment retenues) :
        <strong>vérifie-les sur le bulletin</strong> et corrige-les directement dans le tableau si ton établissement en utilise d'autres.
      </p>
    `;

    // Changement de trimestre
    root.querySelectorAll(".term-tab").forEach(btn => {
      btn.addEventListener("click", () => {
        const v = btn.dataset.term;
        notesTerm = v === "annee" ? "annee" : parseInt(v, 10);
        renderNotesBoard();
      });
    });

    // Plier / déplier une matière (sans réagir aux clics sur le champ coefficient)
    root.querySelectorAll(".grade-row").forEach(row => {
      row.addEventListener("click", e => {
        if (e.target.closest(".coef-input") || e.target.closest(".subject-delete")) return;
        if (notesTerm === "annee") return;
        const key = row.dataset.subject;
        notesOpen = notesOpen === key ? null : key;
        renderNotesBoard();
      });
    });

    // Modification d'un coefficient de matière
    root.querySelectorAll(".coef-input").forEach(input => {
      input.addEventListener("change", () => {
        const key = input.dataset.coef;
        const v = parseFloat(input.value);
        if (!isNaN(v) && v > 0){
          subjectCoefs[key] = v;
          saveNotesConfigLocal();
          saveRemote();
        }
        renderNotesBoard();
      });
    });

    // Ajout d'une note dans la matière dépliée
    const addBtn = document.getElementById("nf-add");
    if (addBtn){
      addBtn.addEventListener("click", () => {
        const key = addBtn.dataset.subject;
        const errEl = document.getElementById("nf-error");
        const score = parseFloat(document.getElementById("nf-score").value);
        const outOf = parseFloat(document.getElementById("nf-outof").value) || 20;
        const coef = parseFloat(document.getElementById("nf-coef").value) || 1;
        if (isNaN(score) || score < 0 || outOf <= 0 || score > outOf){
          errEl.textContent = "Entre une note valide (ex : 14 sur 20).";
          return;
        }
        addGrade(key, {
          id: Date.now() + "-" + Math.floor(Math.random() * 1000),
          type: document.getElementById("nf-type").value,
          label: document.getElementById("nf-label").value.trim(),
          score, outOf, coef,
          term: notesTerm,
          date: document.getElementById("nf-date").value
        });
        renderNotesBoard();
      });
    }

    // Suppression d'une note
    root.querySelectorAll(".note-delete").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        deleteGrade(btn.dataset.subject, btn.dataset.del);
        renderNotesBoard();
      });
    });

    // Ajout d'une matière personnalisée
    const addSubjBtn = document.getElementById("add-subject-btn");
    if (addSubjBtn){
      const doAdd = () => {
        const input = document.getElementById("new-subject");
        const errEl = document.getElementById("subject-error");
        const name = (input.value || "").trim();
        if (!name){ errEl.textContent = "Écris le nom de la matière à ajouter."; return; }
        const exists = gradeSubjects().some(s => s.name.toLowerCase() === name.toLowerCase());
        if (exists){ errEl.textContent = "Cette matière est déjà dans la liste."; return; }
        errEl.textContent = "";
        customSubjects.push({
          key: "x-" + Date.now().toString(36),
          name,
          color: CUSTOM_COLORS[customSubjects.length % CUSTOM_COLORS.length],
          icon: "📘"
        });
        saveNotesConfigLocal();
        saveRemote();
        renderNotesBoard();
      };
      addSubjBtn.addEventListener("click", doAdd);
      document.getElementById("new-subject").addEventListener("keydown", e => {
        if (e.key === "Enter") doAdd();
      });
    }

    // Retrait d'une matière personnalisée (refusé si elle contient des notes)
    root.querySelectorAll(".subject-delete").forEach(btn => {
      btn.addEventListener("click", e => {
        e.stopPropagation();
        const key = btn.dataset.delsubject;
        const errEl = document.getElementById("subject-error");
        if (countAllTerms(key) > 0){
          errEl.textContent = "Supprime d'abord les notes de cette matière avant de la retirer.";
          return;
        }
        customSubjects = customSubjects.filter(s => s.key !== key);
        if (notesOpen === key) notesOpen = null;
        saveNotesConfigLocal();
        saveRemote();
        renderNotesBoard();
      });
    });
  }

  // Panneau de saisie des notes d'une matière, pour le trimestre affiché.
  function renderSubjectPanel(s){
    const list = notesOf(s.key, notesTerm);
    const rows = list.length ? list.slice().reverse().map(gr => {
      const t = NOTE_TYPES.find(nt => nt.key === gr.type);
      const c = gr.coef > 0 ? gr.coef : 1;
      return `
        <li class="note-row">
          <span class="note-type-badge" style="--subj-color:${s.color}">${t ? t.label : esc(gr.type)}</span>
          <span class="note-info">
            <span class="note-label">${esc(gr.label || (t ? t.label : ""))}</span>
            ${gr.date ? `<span class="note-date">${esc(gr.date)}</span>` : ""}
          </span>
          <span class="note-coef">coef. ${c}</span>
          <span class="note-score">${gr.score}/${gr.outOf}</span>
          <button class="note-delete" data-del="${gr.id}" data-subject="${s.key}" title="Supprimer">✕</button>
        </li>`;
    }).join("") : `<p class="empty">Aucune note pour ce trimestre.</p>`;

    return `
      <div class="grade-panel">
        <div class="note-form" style="--subj-color:${s.color}">
          <div class="note-form-row">
            <select class="auth-input note-select" id="nf-type">
              ${NOTE_TYPES.map(t => `<option value="${t.key}">${t.label}</option>`).join("")}
            </select>
            <input type="text" class="auth-input note-label-input" id="nf-label" placeholder="Libellé (optionnel, ex : Devoir n°2)">
          </div>
          <div class="note-form-row">
            <input type="number" class="auth-input note-num" id="nf-score" placeholder="Note" min="0" step="0.25">
            <span class="note-slash">/</span>
            <input type="number" class="auth-input note-num" id="nf-outof" value="20" min="1" step="0.5" title="Note sur">
            <span class="note-slash">coef.</span>
            <input type="number" class="auth-input note-num" id="nf-coef" value="1" min="0.5" step="0.5" title="Coefficient de cette note">
            <input type="date" class="auth-input note-date-input" id="nf-date">
          </div>
          <button class="btn btn-primary" id="nf-add" data-subject="${s.key}" style="--subj-color:${s.color}">➕ Ajouter la note</button>
          <p class="note-error" id="nf-error"></p>
        </div>
        <ul class="note-list">${rows}</ul>
      </div>`;
  }

  /* ---------- Générateur d'exercices IA ---------- */
  function renderGenerator(preKey, preLessonId){
    const subjectKeys = Object.keys(COURSES);
    let selKey = preKey && COURSES[preKey] ? preKey : subjectKeys[0];
    let selLesson = "";
    if (preLessonId && COURSES[selKey] && findLesson(selKey, preLessonId)) selLesson = preLessonId;

    function lessonOptions(k){
      const subj = COURSES[k];
      let opts = subj.lessons.map(l => `<option value="${l.id}" ${l.id===selLesson?"selected":""}>${esc(l.title)}</option>`).join("");
      opts += `<option value="__custom__" ${selLesson==="__custom__"?"selected":""}>✏️ Autre thème (à préciser)</option>`;
      return opts;
    }

    root.innerHTML = `
      <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <span>Générateur d'exercices</span></div>
      <div class="tool-header"><span class="sh-icon">🧠</span><h1>Générateur d'exercices</h1></div>
      <p class="tool-sub">Choisis une matière et une leçon (ou un thème libre). Le générateur local crée un exercice instantanément, sans IA, à partir des cours de l'appli (illimité, fonctionne même hors-ligne) ; le générateur IA peut traiter un thème libre mais dépend d'une connexion et d'une clé API. Jamais le même exercice deux fois.</p>

      <div class="tool-form">
        <div class="tool-form-row">
          <select id="gen-subject" class="auth-input tool-select">
            ${subjectKeys.map(k => `<option value="${k}" ${k===selKey?"selected":""}>${COURSES[k].icon} ${esc(COURSES[k].name)}</option>`).join("")}
          </select>
          <select id="gen-lesson" class="auth-input tool-select">${lessonOptions(selKey)}</select>
        </div>
        <div class="tool-form-row" id="gen-topic-row" style="${selLesson==="__custom__" ? "" : "display:none;"}">
          <input type="text" id="gen-topic" class="auth-input tool-select" placeholder="Ex : les triangles semblables, le conditionnel, la Révolution française...">
        </div>
        <div class="tool-form-row">
          <select id="gen-type" class="auth-input tool-select-sm">
            <option value="qcm">📝 QCM</option>
            <option value="open">✏️ Exercice ouvert</option>
          </select>
          <select id="gen-difficulty" class="auth-input tool-select-sm">
            <option value="facile">Facile</option>
            <option value="moyen" selected>Moyen</option>
            <option value="difficile">Difficile</option>
          </select>
        </div>
        <div class="tool-form-row">
          <button class="btn btn-primary" id="gen-local-btn">⚡ Générer localement (instantané, sans IA)</button>
          <button class="btn btn-ghost" id="gen-btn">🧠 Générer avec l'IA</button>
        </div>
        <p class="tool-error" id="gen-error"></p>
      </div>

      <div id="gen-result"></div>
    `;

    const subjectSel = document.getElementById("gen-subject");
    const lessonSel = document.getElementById("gen-lesson");
    const topicRow = document.getElementById("gen-topic-row");
    const topicInput = document.getElementById("gen-topic");
    const errEl = document.getElementById("gen-error");
    const resultEl = document.getElementById("gen-result");
    const genBtn = document.getElementById("gen-btn");
    const localBtn = document.getElementById("gen-local-btn");

    subjectSel.addEventListener("change", () => {
      selKey = subjectSel.value;
      lessonSel.innerHTML = lessonOptions(selKey);
      topicRow.style.display = lessonSel.value === "__custom__" ? "" : "none";
    });
    lessonSel.addEventListener("change", () => {
      topicRow.style.display = lessonSel.value === "__custom__" ? "" : "none";
    });

    function askAgain(){
      const key = subjectSel.value;
      const subj = COURSES[key];
      const lessonId = lessonSel.value;
      const isCustom = lessonId === "__custom__";
      const lesson = isCustom ? null : findLesson(key, lessonId);
      const topic = isCustom ? (topicInput.value || "").trim() : "";
      const type = document.getElementById("gen-type").value;
      const difficulty = document.getElementById("gen-difficulty").value;

      if (isCustom && !topic){
        errEl.textContent = "Précise un thème pour générer l'exercice.";
        return;
      }
      errEl.textContent = "";
      genBtn.disabled = true; genBtn.textContent = "Génération en cours...";
      resultEl.innerHTML = `<p class="empty">🧠 L'IA prépare ton exercice...</p>`;

      fetch("/api/generate-exercise", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          subjectName: subj.name,
          lessonTitle: lesson ? lesson.title : "",
          lessonText: lesson ? (lesson.content || "").replace(/<[^>]+>/g, " ") : "",
          topic,
          type,
          difficulty
        })
      }).then(r => r.json().then(data => ({ok:r.ok, data}))).then(({ok, data}) => {
        genBtn.disabled = false; genBtn.textContent = "🎲 Générer un exercice";
        if (!ok){
          // L'IA a échoué (surcharge côté Google, quota, réseau...) : plutôt que de
          // laisser l'élève sans rien, on bascule automatiquement sur le générateur
          // local, qui fonctionne hors ligne.
          genFallbackToLocal(apiError(data, "L'IA n'a pas pu répondre."));
          return;
        }
        renderGenResult(subj, data.type, data.exercise, askAgain);
      }).catch(() => {
        genBtn.disabled = false; genBtn.textContent = "🎲 Générer un exercice";
        genFallbackToLocal("Le générateur IA est injoignable (connexion, ou clé API non configurée).");
      });
    }

    // Repli automatique sur le générateur local quand l'IA est indisponible.
    function genFallbackToLocal(reason){
      const key = subjectSel.value;
      const subj = COURSES[key];
      const lessonId = lessonSel.value;
      const type = document.getElementById("gen-type").value;
      const difficulty = document.getElementById("gen-difficulty").value;

      const canLocal = lessonId !== "__custom__" &&
        typeof LOCAL_GEN !== "undefined" &&
        LOCAL_GEN.hasContent(key, lessonId);

      if (canLocal){
        const result = LOCAL_GEN.generate(key, lessonId, type, difficulty);
        if (result){
          renderGenResult(subj, result.type, result.exercise, askLocal);
          // Le message va dans #gen-error (hors de #gen-result) pour rester visible
          // même quand la carte d'exercice se redessine au clic.
          errEl.textContent = "ℹ️ " + reason + " → exercice fourni par le générateur local (hors ligne).";
          return;
        }
      }

      errEl.textContent = "";
      resultEl.innerHTML = `<p class="tool-error">⚠️ ${esc(reason)}</p>` +
        (lessonId === "__custom__"
          ? `<p class="tool-error" style="opacity:.75;font-size:.85rem;">Astuce : choisis une leçon de l'appli au lieu d'un thème libre — le générateur local pourra alors prendre le relais sans internet.</p>`
          : `<p class="tool-error" style="opacity:.75;font-size:.85rem;">Le générateur local n'a pas encore de contenu pour cette leçon.</p>`);
    }

    function askLocal(){
      const key = subjectSel.value;
      const subj = COURSES[key];
      const lessonId = lessonSel.value;
      const isCustom = lessonId === "__custom__";
      const type = document.getElementById("gen-type").value;
      const difficulty = document.getElementById("gen-difficulty").value;

      if (isCustom){
        errEl.textContent = "Le générateur local fonctionne sur une leçon de l'appli : choisis une leçon dans la liste (pas un thème libre — pour un thème libre, utilise le générateur IA).";
        return;
      }
      if (typeof LOCAL_GEN === "undefined" || !LOCAL_GEN.hasContent(key, lessonId)){
        errEl.textContent = "Pas encore de contenu local pour cette leçon.";
        return;
      }
      errEl.textContent = "";
      const result = LOCAL_GEN.generate(key, lessonId, type, difficulty);
      if (!result){
        errEl.textContent = "Impossible de générer un exercice local pour cette leçon.";
        return;
      }
      renderGenResult(subj, result.type, result.exercise, askLocal);
    }

    function renderGenResult(subj, type, exercise, onAgain){
      if (type === "qcm"){
        let locked = false, selected = null;
        function paint(){
          const optsHtml = exercise.options.map((opt, i) => {
            let cls = "quiz-option";
            if (locked){
              if (i === exercise.correct) cls += " correct";
              else if (i === selected && selected !== exercise.correct) cls += " wrong";
            } else if (i === selected){
              cls += " selected";
            }
            const letters = ["A","B","C","D"];
            return `<li class="${cls}" data-i="${i}"><span class="opt-letter">${letters[i]}</span><span>${esc(opt)}</span></li>`;
          }).join("");
          resultEl.innerHTML = `
            <div class="quiz-card" style="--subj-color:${subj.color}">
              <div class="quiz-q-label">Exercice généré — QCM</div>
              <h2 class="quiz-question">${esc(exercise.q)}</h2>
              <ul class="quiz-options">${optsHtml}</ul>
              <div class="quiz-explain ${locked ? "show" : ""}">${locked ? esc(exercise.exp) : ""}</div>
              <div class="quiz-footer">
                <span></span>
                <button class="btn btn-primary" id="gen-again-btn" style="--subj-color:${subj.color}">🎲 Générer un autre</button>
              </div>
            </div>`;
          resultEl.querySelectorAll(".quiz-option").forEach(el => {
            el.addEventListener("click", () => {
              if (locked) return;
              selected = parseInt(el.dataset.i, 10);
              locked = true;
              paint();
            });
          });
          document.getElementById("gen-again-btn").addEventListener("click", onAgain);
        }
        paint();
      } else {
        let revealed = false;
        function paint(){
          resultEl.innerHTML = `
            <div class="quiz-card" style="--subj-color:${subj.color}">
              <div class="quiz-q-label">Exercice généré — Pratique ✏️</div>
              <p class="quiz-question practice-statement">${esc(exercise.statement)}</p>
              <button class="btn btn-ghost" id="gen-reveal-btn">${revealed ? "Masquer la correction" : "Voir la correction"}</button>
              <div class="quiz-explain ${revealed ? "show" : ""}">${revealed ? exercise.solution : ""}</div>
              <div class="quiz-footer">
                <span></span>
                <button class="btn btn-primary" id="gen-again-btn" style="--subj-color:${subj.color}">🎲 Générer un autre</button>
              </div>
            </div>`;
          document.getElementById("gen-reveal-btn").addEventListener("click", () => { revealed = !revealed; paint(); });
          document.getElementById("gen-again-btn").addEventListener("click", onAgain);
        }
        paint();
      }
    }

    genBtn.addEventListener("click", askAgain);
    localBtn.addEventListener("click", askLocal);
  }

  /* ---------- Console d'administration ---------- */

  // Le code admin ne reste qu'en mémoire (jamais dans localStorage) : fermer
  // l'onglet suffit à se déconnecter.
  let adminCode = "";
  let adminTab = "students";
  let adminStudents = null;
  let adminStats = null;
  let adminContent = null;
  let adminDetail = null;      // { email, data }
  let adminMsg = "";
  let adminErr = "";
  let adminBusy = false;
  let adminPending = null;     // action destructrice en attente de confirmation
  let adminContentLesson = ""; // leçon sélectionnée dans l'onglet Contenu
  let adminDiag = null;        // résultat du diagnostic de configuration

  // Quand une fonction Netlify plante, Netlify renvoie un 502 dont le corps est
  // {errorType, errorMessage} : sans ça, l'appli affichait « Connexion
  // impossible » et cachait la véritable cause.
  function apiError(data, fallback){
    if (!data) return fallback;
    return data.error || data.errorMessage || data.errorType || fallback;
  }

  function adminPost(payload){
    return fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.assign({ code: adminCode }, payload))
    }).then(r => r.json().then(data => ({ ok: r.ok, data })))
      .catch(() => ({ ok: false, data: { error: "Serveur injoignable. La console admin ne fonctionne qu'une fois l'appli déployée sur Netlify." } }));
  }

  function adminRun(payload, onOk){
    adminBusy = true; adminErr = ""; renderAdmin();
    adminPost(payload).then(({ ok, data }) => {
      adminBusy = false;
      if (!ok){ adminErr = apiError(data, "Erreur inconnue."); renderAdmin(); return; }
      onOk(data);
      renderAdmin();
    });
  }

  function lessonInfo(lessonId){
    for (const key of Object.keys(COURSES)){
      const l = COURSES[key].lessons.find(x => x.id === lessonId);
      if (l) return { subjectKey: key, subject: COURSES[key], lesson: l };
    }
    return null;
  }
  function fmtDate(ts){
    if (!ts) return "—";
    const d = new Date(ts);
    return d.toLocaleDateString("fr-FR") + " " + d.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
  }

  function renderAdmin(){
    if (!adminStudents){
      root.innerHTML = `
        <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <span>Console admin</span></div>
        <div class="auth-card">
          <div class="auth-badge">🔐</div>
          <h1 class="auth-title">Console d'administration</h1>
          <p class="auth-sub">Entre le code administrateur. Il est vérifié sur le serveur : aucune donnée n'est envoyée sans un code valide.</p>
          <input type="password" id="admin-code" class="auth-input" placeholder="Code administrateur" autocomplete="current-password">
          ${adminErr ? `<p class="auth-error">${esc(adminErr)}</p>` : ""}
          <button class="btn btn-primary auth-btn" id="admin-login-btn" ${adminBusy ? "disabled" : ""}>${adminBusy ? "Vérification..." : "Entrer"}</button>
          ${adminDiag ? `<div class="admin-diag">${adminDiagHtml(adminDiag)}</div>` : ""}
          <button class="btn-link auth-back" id="admin-diag-btn" style="margin-bottom:10px;">🔍 Diagnostiquer le problème</button>
          <a class="btn-link auth-back" href="#/">Retour à l'accueil</a>
        </div>`;
      const input = document.getElementById("admin-code");
      if (input){
        input.focus();
        input.addEventListener("keydown", e => { if (e.key === "Enter") doAdminLogin(); });
      }
      const btn = document.getElementById("admin-login-btn");
      if (btn) btn.addEventListener("click", doAdminLogin);
      const dbtn = document.getElementById("admin-diag-btn");
      if (dbtn) dbtn.addEventListener("click", doAdminDiag);
      return;
    }

    const tabs = [
      { k:"students", label:"👥 Élèves" },
      { k:"stats", label:"📉 Points faibles" },
      { k:"content", label:"✏️ Contenu" }
    ];
    const tabsHtml = tabs.map(t =>
      `<button class="term-tab ${adminTab === t.k ? "active" : ""}" data-atab="${t.k}">${t.label}</button>`
    ).join("");

    let paneHtml = "";
    if (adminTab === "students") paneHtml = adminStudentsPane();
    else if (adminTab === "stats") paneHtml = adminStatsPane();
    else paneHtml = adminContentPane();

    root.innerHTML = `
      <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <span>Console admin</span></div>
      <div class="subject-header" style="--subj-color:var(--gold)">
        <span class="sh-icon">🔐</span>
        <h1 style="--subj-color:var(--gold)">Console d'administration</h1>
      </div>
      <div class="term-tabs">${tabsHtml}<button class="term-tab" id="admin-logout">Quitter</button></div>
      ${adminBusy ? `<p class="empty">Chargement...</p>` : ""}
      ${adminErr ? `<p class="tool-error">⚠️ ${esc(adminErr)}</p>` : ""}
      ${adminMsg ? `<p class="admin-ok">✅ ${esc(adminMsg)}</p>` : ""}
      ${paneHtml}`;

    root.querySelectorAll("[data-atab]").forEach(b => b.addEventListener("click", () => {
      adminTab = b.dataset.atab; adminMsg = ""; adminErr = ""; adminPending = null; adminDetail = null;
      if (adminTab === "stats" && !adminStats) adminRun({ action:"stats" }, d => { adminStats = d; });
      else if (adminTab === "content" && !adminContent) adminRun({ action:"getContent" }, d => { adminContent = d.content || {}; });
      else renderAdmin();
    }));
    const lo = document.getElementById("admin-logout");
    if (lo) lo.addEventListener("click", () => {
      adminCode = ""; adminStudents = null; adminStats = null; adminContent = null;
      adminDetail = null; adminMsg = ""; adminErr = ""; adminPending = null; adminDiag = null;
      location.hash = "#/";
    });

    if (adminTab === "students") wireStudentsPane();
    else if (adminTab === "content") wireContentPane();
  }

  // Interroge le serveur sur l'état de sa configuration (aucun secret renvoyé).
  function doAdminDiag(){
    const input = document.getElementById("admin-code");
    adminCode = (input && input.value) || "";
    if (!adminCode){
      adminErr = "Entre d'abord le code administrateur : le diagnostic est lui aussi protégé.";
      renderAdmin(); return;
    }
    adminBusy = true; adminErr = ""; adminDiag = null; renderAdmin();
    adminPost({ action: "diag" }).then(({ ok, data }) => {
      adminBusy = false;
      if (ok && data && data.diag){ adminDiag = data.diag; }
      else { adminDiag = { erreur: apiError(data, "Le serveur n'a pas répondu au diagnostic.") }; }
      renderAdmin();
    });
  }

  function adminDiagHtml(d){
    const yn = v => v === true ? "✅ oui" : v === false ? "❌ non" : esc(String(v));
    const rows = [
      ["Code ADMIN_CODE configuré", d.adminCodeConfigured],
      ["Paquet @netlify/blobs chargé", d.blobsModuleLoaded],
      ["Stockage Blobs accessible", d.blobsStoreOpens],
      ["Variable NETLIFY_SITE_ID définie", d.netlifySiteIdDefined],
      ["Variable NETLIFY_BLOBS_TOKEN définie", d.netlifyBlobsTokenDefined],
      ["Contexte Blobs injecté par Netlify", d.blobsAutoContextPresent],
      ["Version de Node", d.nodeVersion]
    ].filter(r => r[1] !== undefined);
    let html = "<p class=\"admin-diag-title\">Diagnostic de la configuration</p><ul>" +
      rows.map(r => `<li>${esc(r[0])} : ${yn(r[1])}</li>`).join("") + "</ul>";
    const detail = d.blobsStoreError || d.blobsModuleError || d.erreur;
    if (detail) html += `<p class="admin-diag-detail">${esc(String(detail))}</p>`;
    return html;
  }

  function doAdminLogin(){
    const input = document.getElementById("admin-code");
    adminCode = (input && input.value) || "";
    if (!adminCode){ adminErr = "Entre le code administrateur."; renderAdmin(); return; }
    adminBusy = true; adminErr = ""; renderAdmin();
    adminPost({ action:"login" }).then(({ ok, data }) => {
      adminBusy = false;
      if (!ok){ adminCode = ""; adminErr = apiError(data, "Connexion impossible."); renderAdmin(); return; }
      adminStudents = data.students || [];
      renderAdmin();
    });
  }

  /* ----- Onglet Élèves ----- */
  function adminStudentsPane(){
    if (adminDetail) return adminDetailPane();
    if (!adminStudents.length) return `<p class="empty">Aucun élève enregistré pour l'instant.</p>`;
    const rows = adminStudents.map(s => `
      <li class="grade-item" style="--subj-color:var(--gold)">
        <div class="grade-row" data-student="${esc(s.email)}">
          <span class="grade-icon">👤</span>
          <span class="grade-name">
            <span class="grade-name-text">${esc(s.email)}</span>
            <span class="grade-terms">${s.lessonsDone} leçon${s.lessonsDone > 1 ? "s" : ""} terminée${s.lessonsDone > 1 ? "s" : ""} · ${s.noteCount} note${s.noteCount > 1 ? "s" : ""} · dernière activité ${fmtDate(s.lastActivity)}</span>
          </span>
          <span class="grade-count">quiz ${s.quizAvgPct === null ? "—" : s.quizAvgPct + " %"}</span>
          <span class="grade-avg ${s.gradeAvg !== null && s.gradeAvg < 10 ? "low" : ""}">${s.gradeAvg === null ? "—" : s.gradeAvg.toFixed(2).replace(".", ",")}<small>/20</small></span>
          <span class="grade-chevron">▸</span>
        </div>
      </li>`).join("");
    return `
      <p class="notes-foot">${adminStudents.length} compte${adminStudents.length > 1 ? "s" : ""} enregistré${adminStudents.length > 1 ? "s" : ""}. Clique sur un élève pour voir le détail et agir dessus.</p>
      <ul class="grade-list">${rows}</ul>`;
  }

  function adminDetailPane(){
    const { email, data } = adminDetail;
    const progress = data.progress || {};
    const grades = data.grades || {};

    const bySubject = Object.keys(COURSES).map(key => {
      const subj = COURSES[key];
      let done = 0, sum = 0, tot = 0;
      subj.lessons.forEach(l => {
        const p = progress[l.id];
        if (p && p.done){ done++; sum += Number(p.score) || 0; tot += Number(p.total) || 0; }
      });
      const notes = grades[key] || [];
      return { key, subj, done, total: subj.lessons.length, pct: tot ? Math.round((sum / tot) * 1000) / 10 : null, notes: notes.length };
    });

    const subjRows = bySubject.map(s => `
      <li class="grade-item" style="--subj-color:${s.subj.color}">
        <div class="grade-row" style="cursor:default">
          <span class="grade-icon">${s.subj.icon}</span>
          <span class="grade-name"><span class="grade-name-text">${esc(s.subj.name)}</span></span>
          <span class="grade-count">${s.done}/${s.total} leçons</span>
          <span class="grade-count">${s.notes} note${s.notes > 1 ? "s" : ""}</span>
          <span class="grade-avg ${s.pct !== null && s.pct < 50 ? "low" : ""}">${s.pct === null ? "—" : s.pct + " %"}</span>
        </div>
      </li>`).join("");

    // Notes détaillées, groupées par trimestre
    const termBlocks = [1, 2, 3].map(t => {
      const lines = [];
      Object.keys(grades).forEach(sk => {
        (grades[sk] || []).filter(g => (Number(g.term) || 1) === t).forEach(g => {
          const name = COURSES[sk] ? COURSES[sk].name : sk;
          lines.push(`<li class="note-row"><span class="note-type-badge" style="--subj-color:var(--gold)">${esc(name)}</span><span class="note-info"><span class="note-label">${esc(g.label || g.type || "")}</span>${g.date ? `<span class="note-date">${esc(g.date)}</span>` : ""}</span><span class="note-coef">coef. ${Number(g.coef) > 0 ? g.coef : 1}</span><span class="note-score">${esc(String(g.score))}/${esc(String(g.outOf))}</span></li>`);
        });
      });
      return `
        <h3 class="admin-h3">Trimestre ${t} ${lines.length ? `<button class="btn-link" data-reset-term="${t}">réinitialiser ce trimestre</button>` : ""}</h3>
        ${lines.length ? `<ul class="note-list">${lines.join("")}</ul>` : `<p class="empty">Aucune note.</p>`}`;
    }).join("");

    const confirmBtn = (act, label, danger) => {
      const isPending = adminPending && adminPending.action === act;
      return `<button class="btn ${isPending ? "btn-primary" : "btn-ghost"}" data-act="${act}" style="${isPending || danger ? "--subj-color:#E8735C;" : ""}">${isPending ? "⚠️ Confirmer : " + label : label}</button>`;
    };

    return `
      <p class="crumb"><button class="btn-link" id="admin-back">← Retour à la liste</button></p>
      <div class="gen-avg-card">
        <div class="gen-avg-main">
          <span class="gen-avg-num" style="font-size:1.2rem;">${esc(email)}</span>
          <span class="gen-avg-label">Fiche élève</span>
        </div>
      </div>
      <h3 class="admin-h3">Progression et notes par matière</h3>
      <ul class="grade-list">${subjRows}</ul>
      ${termBlocks}
      <h3 class="admin-h3">Actions</h3>
      <div class="admin-actions">
        ${confirmBtn("resetProgress", "Réinitialiser la progression")}
        ${confirmBtn("resetGrades", "Effacer toutes les notes")}
        ${confirmBtn("deleteStudent", "Supprimer ce compte", true)}
      </div>
      <p class="notes-foot">Ces actions sont définitives : un premier clic demande confirmation, le second exécute.</p>`;
  }

  function wireStudentsPane(){
    root.querySelectorAll("[data-student]").forEach(row => row.addEventListener("click", () => {
      const email = row.dataset.student;
      adminMsg = ""; adminPending = null;
      adminRun({ action:"student", email }, d => { adminDetail = { email: d.email, data: d.data }; });
    }));
    const back = document.getElementById("admin-back");
    if (back) back.addEventListener("click", () => { adminDetail = null; adminPending = null; adminMsg = ""; renderAdmin(); });

    root.querySelectorAll("[data-act]").forEach(btn => btn.addEventListener("click", () => {
      const act = btn.dataset.act;
      if (!adminPending || adminPending.action !== act){
        adminPending = { action: act }; adminMsg = ""; renderAdmin(); return;
      }
      const email = adminDetail.email;
      adminPending = null;
      adminRun({ action: act, email }, () => {
        if (act === "deleteStudent"){
          adminStudents = adminStudents.filter(s => s.email !== email);
          adminDetail = null;
          adminMsg = "Compte " + email + " supprimé.";
        } else {
          adminMsg = act === "resetProgress" ? "Progression réinitialisée." : "Notes effacées.";
          adminRun({ action:"student", email }, d => { adminDetail = { email: d.email, data: d.data }; });
        }
      });
    }));

    root.querySelectorAll("[data-reset-term]").forEach(btn => btn.addEventListener("click", () => {
      const term = Number(btn.dataset.resetTerm);
      const act = "resetTerm" + term;
      if (!adminPending || adminPending.action !== act){
        adminPending = { action: act }; adminMsg = "";
        btn.textContent = "⚠️ cliquer à nouveau pour confirmer";
        return;
      }
      const email = adminDetail.email;
      adminPending = null;
      adminRun({ action:"resetTerm", email, term }, () => {
        adminMsg = "Trimestre " + term + " réinitialisé.";
        adminRun({ action:"student", email }, d => { adminDetail = { email: d.email, data: d.data }; });
      });
    }));
  }

  /* ----- Onglet Points faibles ----- */
  function adminStatsPane(){
    if (!adminStats) return `<p class="empty">Chargement des statistiques...</p>`;
    const lessons = (adminStats.lessons || []).map(l => {
      const info = lessonInfo(l.id);
      return Object.assign({}, l, {
        title: info ? info.lesson.title : l.id,
        subjectName: info ? info.subject.name : "—",
        color: info ? info.subject.color : "#999",
        icon: info ? info.subject.icon : "📘",
        subjectKey: info ? info.subjectKey : null
      });
    });

    if (!lessons.length) return `<p class="empty">Aucune leçon terminée pour l'instant : il n'y a pas encore de statistiques à afficher.</p>`;

    const scored = lessons.filter(l => l.avgPct !== null).sort((a, b) => a.avgPct - b.avgPct);
    const weakest = scored.slice(0, 12);

    // Agrégat par matière
    const bySubj = {};
    lessons.forEach(l => {
      if (!l.subjectKey || l.avgPct === null) return;
      if (!bySubj[l.subjectKey]) bySubj[l.subjectKey] = { sum:0, n:0, done:0 };
      bySubj[l.subjectKey].sum += l.avgPct;
      bySubj[l.subjectKey].n++;
      bySubj[l.subjectKey].done += l.done;
    });
    const subjRows = Object.keys(bySubj).map(k => {
      const s = bySubj[k], subj = COURSES[k];
      const avg = Math.round((s.sum / s.n) * 10) / 10;
      return `
        <li class="grade-item" style="--subj-color:${subj.color}">
          <div class="grade-row" style="cursor:default">
            <span class="grade-icon">${subj.icon}</span>
            <span class="grade-name"><span class="grade-name-text">${esc(subj.name)}</span><span class="grade-terms">${s.n} leçon${s.n > 1 ? "s" : ""} évaluée${s.n > 1 ? "s" : ""}</span></span>
            <span class="grade-count">${s.done} passage${s.done > 1 ? "s" : ""}</span>
            <span class="grade-avg ${avg < 50 ? "low" : ""}">${avg} <small>%</small></span>
          </div>
        </li>`;
    }).join("");

    const weakRows = weakest.map((l, i) => `
      <li class="grade-item" style="--subj-color:${l.color}">
        <div class="grade-row" style="cursor:default">
          <span class="grade-icon">${i < 3 ? "🔴" : l.icon}</span>
          <span class="grade-name">
            <span class="grade-name-text">${esc(l.title)}</span>
            <span class="grade-terms">${esc(l.subjectName)} · ${l.done} passage${l.done > 1 ? "s" : ""}</span>
          </span>
          <span class="grade-avg ${l.avgPct < 50 ? "low" : ""}">${l.avgPct} <small>%</small></span>
          ${l.subjectKey ? `<a class="btn btn-ghost admin-mini" href="#/generator/${l.subjectKey}/${l.id}">s'entraîner</a>` : ""}
        </div>
      </li>`).join("");

    return `
      <div class="gen-avg-card">
        <div class="gen-avg-main">
          <span class="gen-avg-num">${adminStats.studentCount}<small> élève${adminStats.studentCount > 1 ? "s" : ""}</small></span>
          <span class="gen-avg-label">Comptes suivis</span>
        </div>
        <div class="gen-avg-meta">
          <span>${adminStats.totalDone} leçon${adminStats.totalDone > 1 ? "s" : ""} terminée${adminStats.totalDone > 1 ? "s" : ""}</span>
          <span>${scored.length} leçon${scored.length > 1 ? "s" : ""} avec un score</span>
        </div>
      </div>
      <h3 class="admin-h3">Leçons les moins réussies</h3>
      <ul class="grade-list">${weakRows}</ul>
      <h3 class="admin-h3">Moyenne des quiz par matière</h3>
      <ul class="grade-list">${subjRows}</ul>
      <p class="notes-foot">Le pourcentage est la moyenne des scores obtenus aux quiz de fin de leçon, tous élèves confondus. Les leçons jamais terminées n'apparaissent pas.</p>`;
  }

  /* ----- Onglet Contenu ----- */
  function adminContentPane(){
    if (!adminContent) return `<p class="empty">Chargement du contenu...</p>`;
    const c = adminContent;
    const allLessons = [];
    Object.keys(COURSES).forEach(k => COURSES[k].lessons.forEach(l =>
      allLessons.push({ id: l.id, label: COURSES[k].name + " — " + l.title })));

    const sel = adminContentLesson || allLessons[0].id;
    const info = lessonInfo(sel);
    const over = (c.lessons && c.lessons[sel]) || {};

    const existing = [];
    Object.keys(c.lessons || {}).forEach(id => {
      const inf = lessonInfo(id);
      existing.push(`<li class="note-row"><span class="note-type-badge" style="--subj-color:var(--gold)">Leçon modifiée</span><span class="note-info"><span class="note-label">${esc(inf ? inf.lesson.title : id)}</span><span class="note-date">${esc(id)}${c.lessons[id].title ? " · titre remplacé" : ""}${c.lessons[id].content ? " · texte remplacé" : ""}</span></span><button class="note-delete" data-del-kind="lesson" data-del-lesson="${esc(id)}" title="Annuler cette modification">✕</button></li>`);
    });
    Object.keys(c.extraQuiz || {}).forEach(id => (c.extraQuiz[id] || []).forEach(q => {
      const inf = lessonInfo(id);
      existing.push(`<li class="note-row"><span class="note-type-badge" style="--subj-color:#5CA9E8">Question ajoutée</span><span class="note-info"><span class="note-label">${esc(q.q)}</span><span class="note-date">${esc(inf ? inf.lesson.title : id)}</span></span><button class="note-delete" data-del-kind="quiz" data-del-lesson="${esc(id)}" data-del-qid="${esc(q.qid)}" title="Supprimer">✕</button></li>`);
    }));
    Object.keys(c.extraPractice || {}).forEach(id => (c.extraPractice[id] || []).forEach(p => {
      const inf = lessonInfo(id);
      existing.push(`<li class="note-row"><span class="note-type-badge" style="--subj-color:#8FCB4B">Exercice ajouté</span><span class="note-info"><span class="note-label">${esc(p.statement.slice(0, 120))}</span><span class="note-date">${esc(inf ? inf.lesson.title : id)}</span></span><button class="note-delete" data-del-kind="practice" data-del-lesson="${esc(id)}" data-del-qid="${esc(p.qid)}" title="Supprimer">✕</button></li>`);
    }));

    return `
      <div class="note-form" style="--subj-color:var(--gold)">
        <div class="note-form-row">
          <select id="ac-lesson" class="auth-input" style="flex:1;min-width:240px;margin-bottom:0;text-align:left;">
            ${allLessons.map(l => `<option value="${l.id}" ${l.id === sel ? "selected" : ""}>${esc(l.label)}</option>`).join("")}
          </select>
        </div>
      </div>

      <h3 class="admin-h3">Corriger la leçon</h3>
      <div class="note-form" style="--subj-color:var(--gold)">
        <div class="note-form-row">
          <input type="text" id="ac-title" class="auth-input" style="flex:1;min-width:240px;margin-bottom:0;text-align:left;"
                 placeholder="Titre (laisse vide pour garder l'original)" value="${esc(over.title || "")}">
        </div>
        <div class="note-form-row">
          <textarea id="ac-text" class="auth-input admin-textarea" placeholder="Texte de la leçon en HTML simple (laisse vide pour garder l'original)">${esc(over.content || "")}</textarea>
        </div>
        <p class="notes-foot" style="margin-top:0">Original : « ${esc(info ? info.lesson.title : sel)} ». Remplacer le texte n'efface rien dans le code : la correction est enregistrée à part et peut être annulée à tout moment.</p>
        <button class="btn btn-primary" id="ac-save-lesson" style="--subj-color:var(--gold)">💾 Enregistrer la correction</button>
      </div>

      <h3 class="admin-h3">Ajouter une question de quiz</h3>
      <div class="note-form" style="--subj-color:#5CA9E8">
        <div class="note-form-row"><input type="text" id="aq-q" class="auth-input" style="flex:1;min-width:240px;margin-bottom:0;text-align:left;" placeholder="Question"></div>
        <div class="note-form-row">
          ${[0,1,2,3].map(i => `<input type="text" id="aq-o${i}" class="auth-input" style="flex:1;min-width:150px;margin-bottom:0;text-align:left;" placeholder="Proposition ${["A","B","C","D"][i]}">`).join("")}
        </div>
        <div class="note-form-row">
          <select id="aq-correct" class="auth-input note-select" style="margin-bottom:0;">
            ${["A","B","C","D"].map((L, i) => `<option value="${i}">Bonne réponse : ${L}</option>`).join("")}
          </select>
          <input type="text" id="aq-exp" class="auth-input" style="flex:1;min-width:200px;margin-bottom:0;text-align:left;" placeholder="Explication de la bonne réponse">
        </div>
        <button class="btn btn-primary" id="aq-add" style="--subj-color:#5CA9E8">➕ Ajouter la question</button>
      </div>

      <h3 class="admin-h3">Ajouter un exercice de pratique</h3>
      <div class="note-form" style="--subj-color:#8FCB4B">
        <div class="note-form-row"><textarea id="ap-statement" class="auth-input admin-textarea" placeholder="Énoncé de l'exercice"></textarea></div>
        <div class="note-form-row"><textarea id="ap-solution" class="auth-input admin-textarea" placeholder="Corrigé détaillé (HTML simple autorisé : <p>, <strong>, <br>)"></textarea></div>
        <button class="btn btn-primary" id="ap-add" style="--subj-color:#8FCB4B">➕ Ajouter l'exercice</button>
      </div>

      <h3 class="admin-h3">Modifications en vigueur</h3>
      ${existing.length ? `<ul class="note-list">${existing.join("")}</ul>` : `<p class="empty">Aucune modification enregistrée : l'appli utilise le contenu d'origine.</p>`}
      <p class="notes-foot">Les modifications sont appliquées à tous les élèves au prochain chargement de l'appli, sans redéploiement.</p>`;
  }

  function wireContentPane(){
    const selEl = document.getElementById("ac-lesson");
    if (selEl) selEl.addEventListener("change", () => { adminContentLesson = selEl.value; adminMsg = ""; renderAdmin(); });
    const cur = () => (selEl ? selEl.value : adminContentLesson);

    const saveLesson = document.getElementById("ac-save-lesson");
    if (saveLesson) saveLesson.addEventListener("click", () => {
      adminRun({ action:"saveLesson", lessonId: cur(),
                 title: document.getElementById("ac-title").value,
                 text: document.getElementById("ac-text").value },
        d => { adminContent = d.content || {}; adminMsg = "Correction enregistrée."; });
    });

    const addQ = document.getElementById("aq-add");
    if (addQ) addQ.addEventListener("click", () => {
      adminRun({ action:"addQuiz", lessonId: cur(),
                 q: document.getElementById("aq-q").value,
                 options: [0,1,2,3].map(i => document.getElementById("aq-o" + i).value),
                 correct: Number(document.getElementById("aq-correct").value),
                 exp: document.getElementById("aq-exp").value },
        d => { adminContent = d.content || {}; adminMsg = "Question ajoutée."; });
    });

    const addP = document.getElementById("ap-add");
    if (addP) addP.addEventListener("click", () => {
      adminRun({ action:"addPractice", lessonId: cur(),
                 statement: document.getElementById("ap-statement").value,
                 solution: document.getElementById("ap-solution").value },
        d => { adminContent = d.content || {}; adminMsg = "Exercice ajouté."; });
    });

    root.querySelectorAll("[data-del-kind]").forEach(btn => btn.addEventListener("click", () => {
      adminRun({ action:"deleteContentItem", kind: btn.dataset.delKind,
                 lessonId: btn.dataset.delLesson, qid: btn.dataset.delQid || "" },
        d => { adminContent = d.content || {}; adminMsg = "Élément supprimé."; });
    }));
  }

  /* ---------- Corrections de contenu venues de la console admin ---------- */
  // Appliquées avant le premier affichage : l'admin peut corriger une leçon ou
  // ajouter des questions sans toucher au code ni redéployer.
  function applyContentOverrides(c){
    if (!c || typeof c !== "object") return;
    const lessons = c.lessons || {};
    Object.keys(lessons).forEach(id => {
      const info = lessonInfo(id);
      if (!info) return;
      if (lessons[id].title) info.lesson.title = lessons[id].title;
      if (lessons[id].content) info.lesson.content = lessons[id].content;
    });
    // L'ajout se fait par identifiant (qid) : si cette fonction est appelée
    // plusieurs fois (double évènement de chargement, nouvelle synchronisation),
    // les questions déjà présentes ne sont pas ajoutées une seconde fois.
    const eq = c.extraQuiz || {};
    Object.keys(eq).forEach(id => {
      const info = lessonInfo(id);
      if (!info) return;
      info.lesson.quiz = info.lesson.quiz || [];
      const already = {};
      info.lesson.quiz.forEach(q => { if (q && q.qid) already[q.qid] = true; });
      (eq[id] || []).forEach(q => {
        if (!q || !q.q || !Array.isArray(q.options) || q.options.length !== 4) return;
        if (q.qid && already[q.qid]) return;
        if (q.qid) already[q.qid] = true;
        info.lesson.quiz.push(q);
      });
    });
    const ep = c.extraPractice || {};
    Object.keys(ep).forEach(id => {
      if (typeof PRACTICE === "undefined") return;
      PRACTICE[id] = PRACTICE[id] || [];
      const already = {};
      PRACTICE[id].forEach(p => { if (p && p.qid) already[p.qid] = true; });
      (ep[id] || []).forEach(p => {
        if (!p || !p.statement || !p.solution) return;
        if (p.qid && already[p.qid]) return;
        if (p.qid) already[p.qid] = true;
        PRACTICE[id].push(p);
      });
    });
  }

  function loadContentOverrides(){
    return fetch("/api/admin")
      .then(r => r.ok ? r.json() : null)
      .then(c => { applyContentOverrides(c); })
      .catch(() => { /* hors ligne ou non déployé : on garde le contenu d'origine */ });
  }

  /* ---------- Traducteur FR / EN ---------- */
  function runTranslate(text, direction, targetEl, btnEl, btnLabel){
    if (!text) return;
    btnEl.disabled = true; btnEl.textContent = "...";
    targetEl.classList.add("show");
    targetEl.innerHTML = `<p class="empty">🔤 Traduction en cours...</p>`;
    fetch("/api/translate", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ text, direction })
    }).then(r => r.json().then(data => ({ok:r.ok, data}))).then(({ok, data}) => {
      btnEl.disabled = false; btnEl.textContent = btnLabel;
      if (!ok){
        targetEl.innerHTML = `<p class="tool-error">⚠️ ${esc(apiError(data, "Erreur inconnue"))}</p>` +
          "";
        return;
      }
      const langLabel = data.sourceLang === "en" ? "Anglais → Français" : "Français → Anglais";
      targetEl.innerHTML = `
        <div class="translate-lang">${langLabel}</div>
        <p class="translate-text">${esc(data.translation)}</p>
        ${data.note ? `<div class="translate-note">${esc(data.note)}</div>` : ""}
      `;
    }).catch(() => {
      btnEl.disabled = false; btnEl.textContent = btnLabel;
      targetEl.innerHTML = `<p class="tool-error">⚠️ Traducteur indisponible ici (fonctionne une fois l'app déployée sur Netlify avec une clé API configurée).</p>`;
    });
  }

  function renderTranslate(){
    root.innerHTML = `
      <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <span>Traducteur</span></div>
      <div class="tool-header"><span class="sh-icon">🔤</span><h1>Traducteur Français ⇄ Anglais</h1></div>
      <p class="tool-sub">Tape un mot ou une phrase, choisis le sens si besoin, et obtiens une traduction adaptée au niveau collège.</p>

      <div class="tool-form">
        <textarea id="tr-text" class="tool-textarea" placeholder="Écris ici un mot, une expression ou une phrase..."></textarea>
        <div class="tool-form-row">
          <select id="tr-direction" class="auth-input tool-select-sm">
            <option value="auto">Détection automatique</option>
            <option value="fr-en">Français → Anglais</option>
            <option value="en-fr">Anglais → Français</option>
          </select>
          <button class="btn btn-primary" id="tr-btn">Traduire</button>
        </div>
      </div>

      <div id="tr-result" class="translate-result" style="display:none;"></div>
    `;
    const textEl = document.getElementById("tr-text");
    const dirEl = document.getElementById("tr-direction");
    const btn = document.getElementById("tr-btn");
    const resultEl = document.getElementById("tr-result");
    textEl.focus();

    function go(){
      const text = (textEl.value || "").trim();
      if (!text) return;
      resultEl.style.display = "block";
      runTranslate(text, dirEl.value, resultEl, btn, "Traduire");
    }
    btn.addEventListener("click", go);
    textEl.addEventListener("keydown", e => { if (e.key === "Enter" && (e.ctrlKey || e.metaKey)) go(); });
  }

  function renderQuiz(key, id){
    const subj = COURSES[key];
    const lesson = findLesson(key, id);
    if (!subj || !lesson){ root.innerHTML = `<p class="empty">Évaluation introuvable.</p>`; return; }

    const quiz = lesson.quiz;
    const practiceList = (typeof PRACTICE !== "undefined" && PRACTICE[id]) ? PRACTICE[id] : [];

    // Séquence combinée : questions QCM puis exercices de pratique ouverts
    const items = quiz.map(q => ({ type:"qcm", ...q }))
      .concat(practiceList.map(p => ({ type:"open", ...p })));

    let current = 0;
    let answered = new Array(items.length).fill(null); // pour qcm: index choisi ; pour open: true une fois révélé
    let selected = null;
    let locked = false;

    function progressBar(){
      return items.map((_, i) => {
        let cls = "";
        if (i < current) cls = "done";
        else if (i === current) cls = "current";
        return `<span class="${cls}"></span>`;
      }).join("");
    }

    function renderQuestion(){
      const item = items[current];

      if (item.type === "qcm"){
        selected = answered[current] !== null ? answered[current] : null;
        locked = answered[current] !== null;

        const optsHtml = item.options.map((opt, i) => {
          let cls = "quiz-option";
          if (locked){
            if (i === item.correct) cls += " correct";
            else if (i === selected && selected !== item.correct) cls += " wrong";
          } else if (i === selected){
            cls += " selected";
          }
          const letters = ["A","B","C","D"];
          return `<li class="${cls}" data-i="${i}">
            <span class="opt-letter">${letters[i]}</span>
            <span>${esc(opt)}</span>
          </li>`;
        }).join("");

        root.innerHTML = `
          <div class="crumb">
            <a href="#/">Accueil</a> <span>/</span>
            <a href="#/subject/${key}">${esc(subj.name)}</a> <span>/</span>
            <a href="#/lesson/${key}/${id}">${esc(lesson.title)}</a> <span>/</span>
            <span>Évaluation</span>
          </div>
          <div class="quiz-progress">${progressBar()}</div>
          <div class="quiz-card" style="--subj-color:${subj.color}">
            <div class="quiz-q-label">Question ${current+1} / ${items.length} — QCM</div>
            <h2 class="quiz-question">${esc(item.q)}</h2>
            <ul class="quiz-options">${optsHtml}</ul>
            <div class="quiz-explain ${locked ? "show" : ""}">${locked ? esc(item.exp) : ""}</div>
            <div class="quiz-footer">
              <a class="btn btn-ghost" href="#/lesson/${key}/${id}">← Annuler</a>
              <button class="btn btn-primary" id="next-btn" style="--subj-color:${subj.color}" ${locked ? "" : "disabled"}>
                ${current === items.length - 1 ? "Voir mon résultat" : "Suivant →"}
              </button>
            </div>
          </div>
        `;

        root.querySelectorAll(".quiz-option").forEach(el => {
          el.addEventListener("click", () => {
            if (locked) return;
            const i = parseInt(el.dataset.i, 10);
            selected = i;
            answered[current] = i;
            renderQuestion();
          });
        });

      } else {
        // exercice de pratique ouvert
        locked = answered[current] !== null;

        root.innerHTML = `
          <div class="crumb">
            <a href="#/">Accueil</a> <span>/</span>
            <a href="#/subject/${key}">${esc(subj.name)}</a> <span>/</span>
            <a href="#/lesson/${key}/${id}">${esc(lesson.title)}</a> <span>/</span>
            <span>Évaluation</span>
          </div>
          <div class="quiz-progress">${progressBar()}</div>
          <div class="quiz-card" style="--subj-color:${subj.color}">
            <div class="quiz-q-label">Exercice ${current+1} / ${items.length} — Pratique ✏️</div>
            <p class="quiz-question practice-statement">${item.statement}</p>
            <button class="btn btn-ghost" id="reveal-btn">${locked ? "Masquer la correction" : "Voir la correction"}</button>
            <div class="quiz-explain ${locked ? "show" : ""}">${item.solution}</div>
            <div class="quiz-footer">
              <a class="btn btn-ghost" href="#/lesson/${key}/${id}">← Annuler</a>
              <button class="btn btn-primary" id="next-btn" style="--subj-color:${subj.color}" ${locked ? "" : "disabled"}>
                ${current === items.length - 1 ? "Voir mon résultat" : "Suivant →"}
              </button>
            </div>
          </div>
        `;

        document.getElementById("reveal-btn").addEventListener("click", () => {
          answered[current] = true;
          renderQuestion();
        });
      }

      const nextBtn = document.getElementById("next-btn");
      if (locked){
        nextBtn.disabled = false;
        nextBtn.addEventListener("click", () => {
          if (current === items.length - 1){
            finishQuiz();
          } else {
            current++;
            renderQuestion();
          }
        });
      }
    }

    function finishQuiz(){
      const qcmCount = quiz.length;
      const score = answered.slice(0, qcmCount).reduce((acc, ans, i) => acc + (ans === quiz[i].correct ? 1 : 0), 0);
      markLesson(id, score, qcmCount);
      const pct = qcmCount ? Math.round((score / qcmCount) * 100) : 100;
      let msg, grade;
      if (pct >= 80){ grade = "🌟"; msg = "Excellent travail, continue comme ça !"; }
      else if (pct >= 50){ grade = "👍"; msg = "Pas mal ! Relis la leçon pour progresser encore."; }
      else { grade = "💪"; msg = "Retourne relire la leçon puis retente l'évaluation."; }

      const practiceNote = practiceList.length
        ? `<p class="result-msg">Tu as aussi travaillé ${practiceList.length} exercice${practiceList.length>1?"s":""} de pratique dans cette évaluation.</p>`
        : "";

      root.innerHTML = `
        <div class="crumb">
          <a href="#/">Accueil</a> <span>/</span>
          <a href="#/subject/${key}">${esc(subj.name)}</a> <span>/</span>
          <span>Résultat</span>
        </div>
        <div class="result-card" style="--subj-color:${subj.color}">
          <div class="result-grade">${grade} ${score}/${qcmCount}</div>
          <p class="result-msg">${msg}</p>
          ${practiceNote}
          <div class="result-actions">
            <a class="btn btn-primary" style="--subj-color:${subj.color}" href="#/subject/${key}">Voir les autres leçons</a>
            <a class="btn btn-ghost" href="#/lesson/${key}/${id}">Relire la leçon</a>
            ${SITUATIONS[key] ? `<a class="btn btn-ghost" href="#/situations/${key}">📋 Situations d'évaluation</a>` : ""}
          </div>
        </div>
      `;
    }

    renderQuestion();
  }

  // Exposé pour les tests automatisés (sans effet sur l'usage normal).
  window.__imthebest_test = { loadContentOverrides, applyContentOverrides };

  // First paint before remote sync completes
  render();
})();
