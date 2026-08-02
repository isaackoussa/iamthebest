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
  let grades = loadGradesLocal(); // { subjectKey: [ {id, type, label, score, outOf, date} ] }

  function loadLocal(){
    try{ return JSON.parse(localStorage.getItem(LS_KEY)) || {}; }
    catch(e){ return {}; }
  }
  function loadGradesLocal(){
    try{ return JSON.parse(localStorage.getItem(LS_GRADES_KEY)) || {}; }
    catch(e){ return {}; }
  }
  function saveLocal(){
    try{ localStorage.setItem(LS_KEY, JSON.stringify(progress)); }catch(e){ /* storage blocked in preview */ }
  }
  function saveGradesLocal(){
    try{ localStorage.setItem(LS_GRADES_KEY, JSON.stringify(grades)); }catch(e){ /* storage blocked in preview */ }
  }
  function saveRemote(){
    if (!currentEmail) return;
    fetch(`/api/progress?email=${encodeURIComponent(currentEmail)}`, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({ progress, grades })
    }).catch(()=>{ /* offline: ok, local storage keeps it */ });
  }
  function loadRemoteThenRender(){
    if (!currentEmail){ render(); return; }
    fetch(`/api/progress?email=${encodeURIComponent(currentEmail)}`).then(r => r.ok ? r.json() : null).then(remote => {
      if (remote && typeof remote === "object"){
        const remoteProgress = remote.progress && typeof remote.progress === "object" ? remote.progress : remote;
        const remoteGrades = remote.grades && typeof remote.grades === "object" ? remote.grades : {};
        if (Object.keys(remoteProgress).length){ progress = Object.assign({}, progress, remoteProgress); saveLocal(); }
        if (Object.keys(remoteGrades).length){ grades = Object.assign({}, grades, remoteGrades); saveGradesLocal(); }
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
    if (!currentEmail){ return renderAuthGate(); }
    const parts = currentRoute();
    window.scrollTo(0,0);
    if (parts.length === 0) return renderHome();
    if (parts[0] === "subject" && parts[1]) return renderSubject(parts[1]);
    if (parts[0] === "lesson" && parts[1] && parts[2]) return renderLesson(parts[1], parts[2]);
    if (parts[0] === "quiz" && parts[1] && parts[2]) return renderQuiz(parts[1], parts[2]);
    if (parts[0] === "situations" && parts[1]) return renderSituations(parts[1]);
    if (parts[0] === "notes" && parts[1]) return renderNotes(parts[1]);
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
      <div class="lesson-actions">
        <button class="btn btn-primary" id="go-quiz" style="--subj-color:${subj.color}">
          ${p && p.done ? "🔁 Refaire l'évaluation" : "📝 Faire l'évaluation"}
        </button>
        <a class="btn btn-ghost" href="#/subject/${key}">← Retour aux leçons</a>
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
        aiAnswer.innerHTML = ok ? esc(data.answer) : `⚠️ ${esc((data && data.error) || "Erreur inconnue")}`;
      }).catch(() => {
        aiBtn.disabled = false; aiBtn.textContent = "Demander";
        aiAnswer.className = "ai-answer show";
        aiAnswer.innerHTML = "⚠️ Assistant IA indisponible ici (fonctionne une fois l'app déployée sur Netlify avec une clé API configurée).";
      });
    }
    aiBtn.addEventListener("click", askAI);
    aiInput.addEventListener("keydown", e => { if (e.key === "Enter") askAI(); });
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

  function renderNotes(key){
    const subj = COURSES[key];
    if (!subj){ root.innerHTML = `<p class="empty">Matière introuvable.</p>`; return; }
    const list = grades[key] || [];

    // Statistiques
    function avgOf(items){
      if (!items.length) return null;
      const sum = items.reduce((a, g) => a + (g.score / g.outOf) * 20, 0);
      return sum / items.length;
    }
    const overallAvg = avgOf(list);
    let weightedSum = 0, weightedCoef = 0;
    list.forEach(g => {
      const coef = g.coef && g.coef > 0 ? g.coef : 1;
      weightedSum += (g.score / g.outOf) * 20 * coef;
      weightedCoef += coef;
    });
    const weightedAvg = weightedCoef ? weightedSum / weightedCoef : null;

    const statsHtml = NOTE_TYPES.map(t => {
      const items = list.filter(g => g.type === t.key);
      const avg = avgOf(items);
      return `<div class="notes-stat"><span class="num">${avg !== null ? avg.toFixed(1) : "—"}</span><span class="label">${t.label} (${items.length})</span></div>`;
    }).join("");

    const rowsHtml = list.length ? list.slice().reverse().map(g => {
      const t = NOTE_TYPES.find(nt => nt.key === g.type);
      const coef = g.coef && g.coef > 0 ? g.coef : 1;
      return `
        <li class="note-row">
          <span class="note-type-badge" style="--subj-color:${subj.color}">${t ? t.label : g.type}</span>
          <span class="note-info">
            <span class="note-label">${esc(g.label || t.label)}</span>
            ${g.date ? `<span class="note-date">${esc(g.date)}</span>` : ""}
          </span>
          <span class="note-coef">coef. ${coef}</span>
          <span class="note-score">${g.score}/${g.outOf}</span>
          <button class="note-delete" data-id="${g.id}" title="Supprimer">✕</button>
        </li>`;
    }).join("") : `<p class="empty">Aucune note enregistrée pour l'instant.</p>`;

    root.innerHTML = `
      <div class="crumb"><a href="#/">Accueil</a> <span>/</span> <a href="#/subject/${key}">${esc(subj.name)}</a> <span>/</span> <span>Mes notes</span></div>
      <div class="subject-header" style="--subj-color:${subj.color}">
        <span class="sh-icon">📔</span>
        <h1 style="--subj-color:${subj.color}">Mes notes — ${esc(subj.name)}</h1>
      </div>
      <div class="notes-board">
        <div class="notes-stat notes-stat-main"><span class="num">${overallAvg !== null ? overallAvg.toFixed(1) : "—"}/20</span><span class="label">Moyenne simple</span></div>
        <div class="notes-stat notes-stat-main"><span class="num">${weightedAvg !== null ? weightedAvg.toFixed(1) : "—"}/20</span><span class="label">Moyenne pondérée (selon tes coefficients)</span></div>
        ${statsHtml}
      </div>

      <div class="note-form" style="--subj-color:${subj.color}">
        <div class="note-form-row">
          <select id="note-type" class="auth-input note-select">
            ${NOTE_TYPES.map(t => `<option value="${t.key}">${t.label}</option>`).join("")}
          </select>
          <input type="text" id="note-label" class="auth-input note-label-input" placeholder="Libellé (optionnel, ex : Chapitre fractions)">
        </div>
        <div class="note-form-row">
          <input type="number" id="note-score" class="auth-input note-num" placeholder="Note obtenue" min="0" step="0.5">
          <span class="note-slash">/</span>
          <input type="number" id="note-outof" class="auth-input note-num" placeholder="Sur" value="20" min="1" step="0.5">
          <input type="number" id="note-coef" class="auth-input note-num" placeholder="Coef." value="1" min="0.5" step="0.5" title="Coefficient de cette note">
          <input type="date" id="note-date" class="auth-input note-date-input">
        </div>
        <button class="btn btn-primary" id="add-note-btn" style="--subj-color:${subj.color}">➕ Ajouter la note</button>
        <p class="note-error" id="note-error"></p>
      </div>

      <ul class="note-list">${rowsHtml}</ul>
    `;

    document.getElementById("add-note-btn").addEventListener("click", () => {
      const type = document.getElementById("note-type").value;
      const label = document.getElementById("note-label").value.trim();
      const score = parseFloat(document.getElementById("note-score").value);
      const outOf = parseFloat(document.getElementById("note-outof").value) || 20;
      const coef = parseFloat(document.getElementById("note-coef").value) || 1;
      const date = document.getElementById("note-date").value;
      const errEl = document.getElementById("note-error");

      if (isNaN(score) || score < 0 || outOf <= 0 || score > outOf){
        errEl.textContent = "Entre une note valide (ex : 14 sur 20).";
        return;
      }
      errEl.textContent = "";
      addGrade(key, { id: Date.now() + "-" + Math.floor(Math.random()*1000), type, label, score, outOf, coef, date });
      renderNotes(key);
    });

    root.querySelectorAll(".note-delete").forEach(btn => {
      btn.addEventListener("click", () => {
        deleteGrade(key, btn.dataset.id);
        renderNotes(key);
      });
    });
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

  // First paint before remote sync completes
  render();
})();
