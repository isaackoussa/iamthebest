// ============================================================
// I'm The Best — app.js
// Version corrigée
// ============================================================

(function () {

  "use strict";

  const root = document.getElementById("app");

  if (!root) {
    console.error("Erreur : élément #app introuvable.");
    return;
  }

  // ==========================================================
  // CLÉS LOCALSTORAGE
  // ==========================================================

  const LS_KEY = "imthebest_progress_v1";
  const AUTH_KEY = "imthebest_auth_email";
  const LS_GRADES_KEY = "imthebest_grades_v1";

  // ==========================================================
  // ÉTAT AUTHENTIFICATION
  // ==========================================================

  let currentEmail = null;
  let authPendingEmail = "";
  let authError = "";

  try {
    currentEmail = localStorage.getItem(AUTH_KEY) || null;
  } catch (e) {
    currentEmail = null;
  }

  // ==========================================================
  // PROGRESSION
  // ==========================================================

  let progress = loadLocal();
  let grades = loadGradesLocal();

  function loadLocal() {
    try {
      return JSON.parse(localStorage.getItem(LS_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function loadGradesLocal() {
    try {
      return JSON.parse(localStorage.getItem(LS_GRADES_KEY)) || {};
    } catch (e) {
      return {};
    }
  }

  function saveLocal() {
    try {
      localStorage.setItem(
        LS_KEY,
        JSON.stringify(progress)
      );
    } catch (e) {
      // LocalStorage indisponible
    }
  }

  function saveGradesLocal() {
    try {
      localStorage.setItem(
        LS_GRADES_KEY,
        JSON.stringify(grades)
      );
    } catch (e) {
      // LocalStorage indisponible
    }
  }

  // ==========================================================
  // ÉCHAPPEMENT HTML
  // ==========================================================

  function esc(value) {

    return String(value ?? "")
      .replace(
        /[&<>"']/g,
        function (c) {
          return {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
          }[c];
        }
      );

  }

  // ==========================================================
  // TEXTE RICHE + MATHÉMATIQUES
  // ==========================================================

  /*
    Cette fonction permet d'afficher correctement :

    $x$
    $x^2$
    $$x^2 + y^2 = z^2$$
    \(x^2\)
    \[x^2\]

    tout en protégeant le HTML.
  */

  function richText(value) {

    let text = String(value ?? "");

    const mathSlots = [];

    // --------------------------------------------------------
    // $$ ... $$
    // --------------------------------------------------------

    text = text.replace(
      /\$\$([\s\S]*?)\$\$/g,
      function (_, body) {

        const index =
          mathSlots.push(
            "\\[" + body + "\\]"
          ) - 1;

        return "@@MATH_" + index + "@@";
      }
    );

    // --------------------------------------------------------
    // \[ ... \]
    // --------------------------------------------------------

    text = text.replace(
      /\\\[([\s\S]*?)\\\]/g,
      function (_, body) {

        const index =
          mathSlots.push(
            "\\[" + body + "\\]"
          ) - 1;

        return "@@MATH_" + index + "@@";
      }
    );

    // --------------------------------------------------------
    // \( ... \)
    // --------------------------------------------------------

    text = text.replace(
      /\\\(([\s\S]*?)\\\)/g,
      function (_, body) {

        const index =
          mathSlots.push(
            "\\(" + body + "\\)"
          ) - 1;

        return "@@MATH_" + index + "@@";
      }
    );

    // --------------------------------------------------------
    // $ ... $
    // --------------------------------------------------------

    text = text.replace(
      /(^|[^$])\$([^$\n]+?)\$(?!\$)/g,
      function (_, before, body) {

        const index =
          mathSlots.push(
            "\\(" + body + "\\)"
          ) - 1;

        return before + "@@MATH_" + index + "@@";
      }
    );

    // --------------------------------------------------------
    // Échapper le HTML
    // --------------------------------------------------------

    text = esc(text);

    // --------------------------------------------------------
    // Retours à la ligne
    // --------------------------------------------------------

    text = text.replace(
      /\r?\n/g,
      "<br>"
    );

    // --------------------------------------------------------
    // Restaurer les mathématiques
    // --------------------------------------------------------

    text = text.replace(
      /@@MATH_(\d+)@@/g,
      function (_, index) {

        return esc(
          mathSlots[Number(index)]
        );
      }
    );

    return text;
  }

  // ==========================================================
  // MATHJAX
  // ==========================================================

  function typesetMath(container) {

    if (!container) return;

    function run() {

      if (
        window.MathJax &&
        typeof window.MathJax.typesetPromise === "function"
      ) {

        try {

          if (
            typeof window.MathJax.typesetClear === "function"
          ) {

            window.MathJax.typesetClear([container]);
          }

          window.MathJax
            .typesetPromise([container])
            .catch(function () {});

        } catch (error) {

          console.warn(
            "MathJax n'a pas pu être exécuté.",
            error
          );

        }
      }
    }

    if (
      window.MathJax &&
      window.MathJax.startup &&
      window.MathJax.startup.promise
    ) {

      window.MathJax.startup.promise
        .then(run)
        .catch(function () {
          setTimeout(run, 500);
        });

    } else {

      setTimeout(run, 700);
    }
  }

  // ==========================================================
  // AUTHENTIFICATION
  // ==========================================================

  function updateTopbarUser() {

    const el =
      document.getElementById("topbar-user");

    const nav =
      document.getElementById("topnav");

    if (nav) {
      nav.style.display =
        currentEmail ? "flex" : "none";
    }

    if (!el) return;

    if (currentEmail) {

      el.innerHTML =
        '<span class="user-email">' +
        esc(currentEmail) +
        '</span> ' +
        '<button id="logout-btn" class="btn-link">' +
        "Changer de compte" +
        "</button>";

      const btn =
        document.getElementById("logout-btn");

      if (btn) {
        btn.addEventListener(
          "click",
          logout
        );
      }

    } else {

      el.innerHTML = "";
    }
  }

  function logout() {

    try {
      localStorage.removeItem(AUTH_KEY);
    } catch (e) {}

    currentEmail = null;
    authPendingEmail = "";
    authError = "";

    location.hash = "";

    render();
  }

  function renderAuthGate() {

    root.innerHTML = `
      <div class="auth-card">

        <div class="auth-badge">🏆</div>

        <h1 class="auth-title">
          Bienvenue sur I'm The Best
        </h1>

        <p class="auth-sub">
          Entre ton adresse email pour retrouver ta
          progression (ou en démarrer une nouvelle).
        </p>

        <input
          type="email"
          id="auth-email"
          class="auth-input"
          placeholder="ton.email@exemple.com"
          value="${esc(authPendingEmail)}"
          autocomplete="email"
        >

        ${
          authError
            ? `<p class="auth-error">${esc(authError)}</p>`
            : ""
        }

        <button
          class="btn btn-primary auth-btn"
          id="auth-start-btn"
        >
          Continuer
        </button>

      </div>
    `;

    const input =
      document.getElementById("auth-email");

    if (input) {

      input.focus();

      input.addEventListener(
        "keydown",
        function (e) {

          if (e.key === "Enter") {
            startWithEmail();
          }

        }
      );
    }

    const button =
      document.getElementById("auth-start-btn");

    if (button) {
      button.addEventListener(
        "click",
        startWithEmail
      );
    }
  }

  function startWithEmail() {

    const input =
      document.getElementById("auth-email");

    if (!input) return;

    const email =
      (input.value || "")
        .trim()
        .toLowerCase();

    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {

      authError =
        "Entre une adresse email valide.";

      authPendingEmail = email;

      render();

      return;
    }

    authError = "";
    currentEmail = email;

    try {
      localStorage.setItem(
        AUTH_KEY,
        email
      );
    } catch (e) {}

    loadRemoteThenRender();
  }

  // ==========================================================
  // SYNCHRONISATION DISTANTE
  // ==========================================================

  function saveRemote() {

    if (!currentEmail) return;

    fetch(
      "/api/progress?email=" +
      encodeURIComponent(currentEmail),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          progress: progress,
          grades: grades
        })
      }
    ).catch(function () {
      // Le stockage local reste disponible
    });
  }

  function loadRemoteThenRender() {

    if (!currentEmail) {

      render();

      return;
    }

    fetch(
      "/api/progress?email=" +
      encodeURIComponent(currentEmail)
    )
      .then(function (r) {

        return r.ok
          ? r.json()
          : null;

      })
      .then(function (remote) {

        if (
          remote &&
          typeof remote === "object"
        ) {

          const remoteProgress =
            remote.progress &&
            typeof remote.progress === "object"
              ? remote.progress
              : remote;

          const remoteGrades =
            remote.grades &&
            typeof remote.grades === "object"
              ? remote.grades
              : {};

          if (
            Object.keys(remoteProgress).length
          ) {

            progress = Object.assign(
              {},
              progress,
              remoteProgress
            );

            saveLocal();
          }

          if (
            Object.keys(remoteGrades).length
          ) {

            grades = Object.assign(
              {},
              grades,
              remoteGrades
            );

            saveGradesLocal();
          }
        }

      })
      .catch(function () {

        // Offline : on utilise les données locales

      })
      .finally(function () {

        render();

      });
  }

  // ==========================================================
  // PROGRESSION
  // ==========================================================

  function markLesson(
    lessonId,
    score,
    total
  ) {

    progress[lessonId] = {
      done: true,
      score: score,
      total: total,
      ts: Date.now()
    };

    saveLocal();
    saveRemote();
  }

  // ==========================================================
  // NOTES
  // ==========================================================

  function addGrade(
    subjectKey,
    entry
  ) {

    if (!grades[subjectKey]) {
      grades[subjectKey] = [];
    }

    grades[subjectKey].push(entry);

    saveGradesLocal();
    saveRemote();
  }

  function deleteGrade(
    subjectKey,
    id
  ) {

    if (!grades[subjectKey]) return;

    grades[subjectKey] =
      grades[subjectKey].filter(
        function (g) {
          return g.id !== id;
        }
      );

    saveGradesLocal();
    saveRemote();
  }

  // ==========================================================
  // HELPERS
  // ==========================================================

  function allLessons() {

    const out = [];

    Object.keys(COURSES).forEach(
      function (key) {

        if (
          COURSES[key] &&
          Array.isArray(COURSES[key].lessons)
        ) {

          COURSES[key].lessons.forEach(
            function (l) {

              out.push(
                Object.assign(
                  { subjectKey: key },
                  l
                )
              );

            }
          );
        }
      }
    );

    return out;
  }

  function subjectStats(key) {

    const subj = COURSES[key];

    if (!subj) {
      return {
        total: 0,
        done: 0,
        scoreSum: 0,
        scoreTotal: 0
      };
    }

    const total =
      subj.lessons.length;

    let done = 0;
    let scoreSum = 0;
    let scoreTotal = 0;

    subj.lessons.forEach(
      function (l) {

        const p = progress[l.id];

        if (p && p.done) {

          done++;

          scoreSum +=
            Number(p.score) || 0;

          scoreTotal +=
            Number(p.total) || 0;
        }
      }
    );

    return {
      total,
      done,
      scoreSum,
      scoreTotal
    };
  }

  function globalStats() {

    const all = allLessons();

    let done = 0;
    let scoreSum = 0;
    let scoreTotal = 0;

    all.forEach(
      function (l) {

        const p = progress[l.id];

        if (p && p.done) {

          done++;

          scoreSum +=
            Number(p.score) || 0;

          scoreTotal +=
            Number(p.total) || 0;
        }
      }
    );

    return {
      total: all.length,
      done,
      scoreSum,
      scoreTotal
    };
  }

  function findLesson(
    key,
    id
  ) {

    const subj = COURSES[key];

    if (!subj) return null;

    return (
      subj.lessons.find(
        function (l) {
          return l.id === id;
        }
      ) || null
    );
  }

  // ==========================================================
  // ROUTEUR
  // ==========================================================

  window.addEventListener(
    "hashchange",
    render
  );

  window.addEventListener(
    "DOMContentLoaded",
    loadRemoteThenRender
  );

  function currentRoute() {

    const hash =
      location.hash.replace(
        /^#\/?/,
        ""
      );

    return hash
      .split("/")
      .filter(Boolean);
  }

  function render() {

    updateTopbarUser();

    if (!currentEmail) {

      return renderAuthGate();
    }

    const parts =
      currentRoute();

    try {
      window.scrollTo(0, 0);
    } catch (e) {}

    if (parts.length === 0) {
      return renderHome();
    }

    if (
      parts[0] === "subject" &&
      parts[1]
    ) {
      return renderSubject(
        parts[1]
      );
    }

    if (
      parts[0] === "lesson" &&
      parts[1] &&
      parts[2]
    ) {
      return renderLesson(
        parts[1],
        parts[2]
      );
    }

    if (
      parts[0] === "quiz" &&
      parts[1] &&
      parts[2]
    ) {
      return renderQuiz(
        parts[1],
        parts[2]
      );
    }

    if (
      parts[0] === "situations" &&
      parts[1]
    ) {
      return renderSituations(
        parts[1]
      );
    }

    if (
      parts[0] === "notes" &&
      parts[1]
    ) {
      return renderNotes(
        parts[1]
      );
    }

    if (
      parts[0] === "generator"
    ) {
      return renderGenerator(
        parts[1],
        parts[2]
      );
    }

    if (
      parts[0] === "translate"
    ) {
      return renderTranslate();
    }

    return renderHome();
  }

  // ==========================================================
  // ACCUEIL
  // ==========================================================

  function renderHome() {

    const g = globalStats();

    const avg =
      g.scoreTotal
        ? Math.round(
            (g.scoreSum / g.scoreTotal) *
            100
          )
        : null;

    let cards = "";

    Object.keys(COURSES).forEach(
      function (key) {

        const subj =
          COURSES[key];

        const s =
          subjectStats(key);

        const pct =
          s.total
            ? Math.round(
                (s.done / s.total) *
                100
              )
            : 0;

        cards += `
          <div
            class="subject-card"
            tabindex="0"
            role="button"
            data-key="${esc(key)}"
            style="--sc:${subj.color}"
          >

            <span class="sc-icon">
              ${subj.icon}
            </span>

            <span class="sc-name">
              ${esc(subj.name)}
            </span>

            <div class="sc-bar">
              <span style="width:${pct}%"></span>
            </div>

            <div class="sc-meta">
              ${s.done}/${s.total}
              leçons terminées
            </div>

          </div>
        `;
      }
    );

    root.innerHTML = `
      <div class="hero">

        <h1>
          Salut championne, salut champion 🏆
        </h1>

        <p>
          Choisis une matière, lis la leçon,
          puis fais l'évaluation pour vérifier
          que tu as bien compris.
          Ta progression est enregistrée
          automatiquement.
        </p>

        <div class="progress-board">

          <div class="progress-stat">
            <span class="num">
              ${g.done}/${g.total}
            </span>

            <span class="label">
              Leçons faites
            </span>
          </div>

          <div class="progress-stat">
            <span class="num">
              ${
                avg !== null
                  ? avg + "%"
                  : "—"
              }
            </span>

            <span class="label">
              Score moyen
            </span>
          </div>

          <div class="progress-stat">
            <span class="num">
              ${Object.keys(COURSES).length}
            </span>

            <span class="label">
              Matières
            </span>
          </div>

        </div>

      </div>

      <div class="subject-grid">
        ${cards}
      </div>
    `;

    root
      .querySelectorAll(".subject-card")
      .forEach(function (card) {

        const go = function () {

          location.hash =
            "#/subject/" +
            card.dataset.key;
        };

        card.addEventListener(
          "click",
          go
        );

        card.addEventListener(
          "keydown",
          function (e) {

            if (
              e.key === "Enter" ||
              e.key === " "
            ) {

              e.preventDefault();
              go();
            }
          }
        );
      });

    typesetMath(root);
  }

  // ==========================================================
  // MATIÈRE
  // ==========================================================

  function renderSubject(key) {

    const subj =
      COURSES[key];

    if (!subj) {

      root.innerHTML =
        `<p class="empty">Matière introuvable.</p>`;

      return;
    }

    let rows = "";

    subj.lessons.forEach(
      function (l, i) {

        const p =
          progress[l.id];

        const status =
          p && p.done
            ? `${p.score}/${p.total} à l'évaluation`
            : "Pas encore fait";

        rows += `
          <li
            class="lesson-row"
            data-id="${esc(l.id)}"
            style="--subj-color:${subj.color}"
            tabindex="0"
            role="button"
          >

            <span class="lesson-num">
              ${i + 1}
            </span>

            <span class="lesson-info">

              <span class="lesson-title">
                ${esc(l.title)}
              </span>

              <span class="lesson-status">
                ${status}
              </span>

            </span>

            <span class="lesson-check">
              ${p && p.done ? "✅" : "▫️"}
            </span>

          </li>
        `;
      }
    );

    root.innerHTML = `
      <div class="crumb">
        <a href="#/">Accueil</a>
        <span>/</span>
        <span>${esc(subj.name)}</span>
      </div>

      <div
        class="subject-header"
        style="--subj-color:${subj.color}"
      >

        <span class="sh-icon">
          ${subj.icon}
        </span>

        <h1>
          ${esc(subj.name)}
        </h1>

      </div>

      <p class="subject-sub">
        ${subj.lessons.length}
        leçons — clique sur une leçon pour l'ouvrir.
      </p>

      <div class="subject-links">

        <a
          class="btn btn-ghost"
          style="--subj-color:${subj.color}"
          href="#/notes/${esc(key)}"
        >
          📔 Mes notes
        </a>

        ${
          typeof SITUATIONS !== "undefined" &&
          SITUATIONS[key]
            ? `
              <a
                class="btn btn-ghost"
                style="--subj-color:${subj.color}"
                href="#/situations/${esc(key)}"
              >
                📋 Situations d'évaluation
              </a>
            `
            : ""
        }

        <a
          class="btn btn-ghost"
          style="--subj-color:${subj.color}"
          href="#/generator/${esc(key)}"
        >
          🧠 Générer un exercice
        </a>

      </div>

      <ul class="lesson-list">
        ${rows}
      </ul>
    `;

    root
      .querySelectorAll(".lesson-row")
      .forEach(function (row) {

        const go = function () {

          location.hash =
            "#/lesson/" +
            key +
            "/" +
            row.dataset.id;
        };

        row.addEventListener(
          "click",
          go
        );

        row.addEventListener(
          "keydown",
          function (e) {

            if (
              e.key === "Enter" ||
              e.key === " "
            ) {

              e.preventDefault();
              go();
            }
          }
        );
      });

    typesetMath(root);
  }

  // ==========================================================
  // LEÇON
  // ==========================================================

  function renderLesson(
    key,
    id
  ) {

    const subj =
      COURSES[key];

    const lesson =
      findLesson(key, id);

    if (!subj || !lesson) {

      root.innerHTML =
        `<p class="empty">Leçon introuvable.</p>`;

      return;
    }

    const p =
      progress[id];

    root.innerHTML = `
      <div class="crumb">

        <a href="#/">Accueil</a>

        <span>/</span>

        <a href="#/subject/${esc(key)}">
          ${esc(subj.name)}
        </a>

        <span>/</span>

        <span>
          ${esc(lesson.title)}
        </span>

      </div>

      <div
        class="page-sheet"
        style="--subj-color:${subj.color}"
      >

        <h2>
          ${subj.icon}
          ${esc(lesson.title)}
        </h2>

        ${lesson.content || ""}

      </div>

      <div
        class="ai-card"
        style="--subj-color:${subj.color}"
      >

        <div class="practice-label">
          🤖 Assistant IA — pose ta question sur cette leçon
        </div>

        <div class="ai-row">

          <input
            type="text"
            id="ai-question"
            class="auth-input ai-input"
            placeholder="Ex : Pourquoi est-ce que...?"
          >

          <button
            class="btn btn-primary"
            id="ai-ask-btn"
          >
            Demander
          </button>

        </div>

        <div
          id="ai-answer"
          class="ai-answer"
        ></div>

      </div>

      ${
        key === "anglais"
          ? `
            <div
              class="mini-translate"
              style="--subj-color:${subj.color}"
            >

              <div class="practice-label">
                🔤 Traduire un mot ou une phrase de cette leçon
              </div>

              <div class="ai-row">

                <input
                  type="text"
                  id="mt-text"
                  class="auth-input ai-input"
                  placeholder="Ex : to go fishing / je voudrais..."
                >

                <button
                  class="btn btn-primary"
                  id="mt-btn"
                >
                  Traduire
                </button>

              </div>

              <div
                id="mt-result"
                class="ai-answer"
              ></div>

            </div>
          `
          : ""
      }

      <div class="lesson-actions">

        <button
          class="btn btn-primary"
          id="go-quiz"
          style="--subj-color:${subj.color}"
        >
          ${
            p && p.done
              ? "🔁 Refaire l'évaluation"
              : "📝 Faire l'évaluation"
          }
        </button>

        <a
          class="btn btn-ghost"
          href="#/subject/${esc(key)}"
        >
          ← Retour aux leçons
        </a>

        <a
          class="btn btn-ghost"
          href="#/generator/${esc(key)}/${esc(id)}"
        >
          🧠 Générer un exercice sur cette leçon
        </a>

      </div>
    `;

    // --------------------------------------------------------
    // MathJax pour la leçon
    // --------------------------------------------------------

    typesetMath(root);

    // --------------------------------------------------------
    // Assistant IA
    // --------------------------------------------------------

    const aiBtn =
      document.getElementById("ai-ask-btn");

    const aiInput =
      document.getElementById("ai-question");

    const aiAnswer =
      document.getElementById("ai-answer");

    function askAI() {

      const question =
        (aiInput.value || "").trim();

      if (!question) return;

      aiBtn.disabled = true;
      aiBtn.textContent = "...";

      aiAnswer.className =
        "ai-answer show ai-loading";

      aiAnswer.textContent =
        "L'assistant réfléchit...";

      fetch(
        "/api/ask-ai",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            question: question,
            subjectName: subj.name,
            lessonTitle: lesson.title,
            lessonText:
              (lesson.content || "")
                .replace(/<[^>]+>/g, " ")
          })
        }
      )
        .then(function (r) {

          return r.json()
            .then(function (data) {

              return {
                ok: r.ok,
                data: data
              };

            });

        })
        .then(function (result) {

          const ok = result.ok;
          const data = result.data;

          aiBtn.disabled = false;
          aiBtn.textContent = "Demander";

          aiAnswer.className =
            "ai-answer show";

          if (!ok) {

            aiAnswer.innerHTML =
              `⚠️ ${
                esc(
                  (data && data.error) ||
                  "Erreur inconnue"
                )
              }`;

            if (
              data &&
              data.details
            ) {

              aiAnswer.innerHTML +=
                `<br><span style="opacity:.65;font-size:.82rem;">${
                  esc(
                    String(data.details)
                      .slice(0, 500)
                  )
                }</span>`;
            }

            return;
          }

          aiAnswer.innerHTML =
            richText(
              data && data.answer
                ? data.answer
                : "Aucune réponse."
            );

          typesetMath(aiAnswer);

        })
        .catch(function () {

          aiBtn.disabled = false;
          aiBtn.textContent = "Demander";

          aiAnswer.className =
            "ai-answer show";

          aiAnswer.innerHTML =
            "⚠️ Assistant IA indisponible ici.";

        });
    }

    if (aiBtn) {
      aiBtn.addEventListener(
        "click",
        askAI
      );
    }

    if (aiInput) {
      aiInput.addEventListener(
        "keydown",
        function (e) {

          if (e.key === "Enter") {
            askAI();
          }

        }
      );
    }

    // --------------------------------------------------------
    // Mini traducteur
    // --------------------------------------------------------

    const mtBtn =
      document.getElementById("mt-btn");

    if (mtBtn) {

      const mtInput =
        document.getElementById("mt-text");

      const mtResult =
        document.getElementById("mt-result");

      const goTranslate =
        function () {

          runTranslate(
            (mtInput.value || "").trim(),
            "auto",
            mtResult,
            mtBtn,
            "Traduire"
          );

        };

      mtBtn.addEventListener(
        "click",
        goTranslate
      );

      mtInput.addEventListener(
        "keydown",
        function (e) {

          if (e.key === "Enter") {
            goTranslate();
          }

        }
      );
    }

    const quizBtn =
      document.getElementById("go-quiz");

    if (quizBtn) {

      quizBtn.addEventListener(
        "click",
        function () {

          location.hash =
            "#/quiz/" +
            key +
            "/" +
            id;

        }
      );
    }
  }

  // ==========================================================
  // SITUATIONS
  // ==========================================================

  function renderSituations(key) {

    const subj =
      COURSES[key];

    const situations =
      typeof SITUATIONS !== "undefined"
        ? SITUATIONS[key]
        : null;

    if (!subj || !situations) {

      root.innerHTML =
        `<p class="empty">
          Pas de situation d'évaluation pour cette matière.
        </p>`;

      return;
    }

    let cards = "";

    situations.forEach(
      function (sit, si) {

        let tasks = "";

        sit.tasks.forEach(
          function (t, ti) {

            tasks += `
              <div class="situation-task">

                <p class="situation-prompt">
                  ${richText(t.prompt)}
                </p>

                <button
                  class="btn btn-ghost sit-toggle"
                  data-target="sit-${si}-${ti}"
                >
                  Voir la correction
                </button>

                <div
                  class="practice-solution"
                  id="sit-${si}-${ti}"
                >
                  ${t.solution || ""}
                </div>

              </div>
            `;
          }
        );

        cards += `
          <div
            class="situation-card"
            style="--subj-color:${subj.color}"
          >

            <h3>
              ${esc(sit.title)}
            </h3>

            <p class="situation-context">
              ${richText(sit.context)}
            </p>

            ${tasks}

          </div>
        `;
      }
    );

    root.innerHTML = `
      <div class="crumb">

        <a href="#/">Accueil</a>

        <span>/</span>

        <a href="#/subject/${esc(key)}">
          ${esc(subj.name)}
        </a>

        <span>/</span>

        <span>
          Situations d'évaluation
        </span>

      </div>

      <div
        class="subject-header"
        style="--subj-color:${subj.color}"
      >

        <span class="sh-icon">
          📋
        </span>

        <h1>
          Situations d'évaluation
        </h1>

      </div>

      <p class="subject-sub">
        Des problèmes contextualisés qui combinent
        plusieurs leçons de ${esc(subj.name)}.
      </p>

      ${cards}
    `;

    root
      .querySelectorAll(".sit-toggle")
      .forEach(function (btn) {

        btn.addEventListener(
          "click",
          function () {

            const target =
              document.getElementById(
                btn.dataset.target
              );

            if (!target) return;

            const showing =
              target.classList.toggle(
                "show"
              );

            btn.textContent =
              showing
                ? "Masquer la correction"
                : "Voir la correction";

            typesetMath(target);
          }
        );
      });

    typesetMath(root);
  }

  // ==========================================================
  // NOTES
  // ==========================================================

  const NOTE_TYPES = [
    {
      key: "devoir",
      label: "Devoir"
    },
    {
      key: "interrogation",
      label: "Interrogation"
    },
    {
      key: "compo",
      label: "Composition"
    }
  ];

  function renderNotes(key) {

    const subj =
      COURSES[key];

    if (!subj) {

      root.innerHTML =
        `<p class="empty">Matière introuvable.</p>`;

      return;
    }

    const list =
      grades[key] || [];

    function avgOf(items) {

      if (!items.length) {
        return null;
      }

      const sum =
        items.reduce(
          function (a, g) {

            return (
              a +
              (
                (Number(g.score) || 0) /
                (Number(g.outOf) || 1)
              ) *
              20
            );

          },
          0
        );

      return sum / items.length;
    }

    const overallAvg =
      avgOf(list);

    let weightedSum = 0;
    let weightedCoef = 0;

    list.forEach(
      function (g) {

        const coef =
          g.coef &&
          g.coef > 0
            ? g.coef
            : 1;

        weightedSum +=
          (
            (Number(g.score) || 0) /
            (Number(g.outOf) || 1)
          ) *
          20 *
          coef;

        weightedCoef += coef;
      }
    );

    const weightedAvg =
      weightedCoef
        ? weightedSum / weightedCoef
        : null;

    const statsHtml =
      NOTE_TYPES
        .map(function (t) {

          const items =
            list.filter(
              function (g) {
                return g.type === t.key;
              }
            );

          const avg =
            avgOf(items);

          return `
            <div class="notes-stat">

              <span class="num">
                ${
                  avg !== null
                    ? avg.toFixed(1)
                    : "—"
                }
              </span>

              <span class="label">
                ${t.label} (${items.length})
              </span>

            </div>
          `;

        })
        .join("");

    const rowsHtml =
      list.length
        ? list
            .slice()
            .reverse()
            .map(function (g) {

              const t =
                NOTE_TYPES.find(
                  function (nt) {
                    return nt.key === g.type;
                  }
                );

              const coef =
                g.coef &&
                g.coef > 0
                  ? g.coef
                  : 1;

              return `
                <li class="note-row">

                  <span
                    class="note-type-badge"
                    style="--subj-color:${subj.color}"
                  >
                    ${t ? t.label : esc(g.type)}
                  </span>

                  <span class="note-info">

                    <span class="note-label">
                      ${esc(
                        g.label ||
                        (t ? t.label : "")
                      )}
                    </span>

                    ${
                      g.date
                        ? `
                          <span class="note-date">
                            ${esc(g.date)}
                          </span>
                        `
                        : ""
                    }

                  </span>

                  <span class="note-coef">
                    coef. ${coef}
                  </span>

                  <span class="note-score">
                    ${g.score}/${g.outOf}
                  </span>

                  <button
                    class="note-delete"
                    data-id="${esc(g.id)}"
                    title="Supprimer"
                  >
                    ✕
                  </button>

                </li>
              `;

            })
            .join("")
        : `
          <p class="empty">
            Aucune note enregistrée pour l'instant.
          </p>
        `;

    root.innerHTML = `
      <div class="crumb">

        <a href="#/">Accueil</a>

        <span>/</span>

        <a href="#/subject/${esc(key)}">
          ${esc(subj.name)}
        </a>

        <span>/</span>

        <span>
          Mes notes
        </span>

      </div>

      <div
        class="subject-header"
        style="--subj-color:${subj.color}"
      >

        <span class="sh-icon">
          📔
        </span>

        <h1>
          Mes notes — ${esc(subj.name)}
        </h1>

      </div>

      <div class="notes-board">

        <div class="notes-stat notes-stat-main">

          <span class="num">
            ${
              overallAvg !== null
                ? overallAvg.toFixed(1)
                : "—"
            }/20
          </span>

          <span class="label">
            Moyenne simple
          </span>

        </div>

        <div class="notes-stat notes-stat-main">

          <span class="num">
            ${
              weightedAvg !== null
                ? weightedAvg.toFixed(1)
                : "—"
            }/20
          </span>

          <span class="label">
            Moyenne pondérée
            (selon tes coefficients)
          </span>

        </div>

        ${statsHtml}

      </div>

      <div
        class="note-form"
        style="--subj-color:${subj.color}"
      >

        <div class="note-form-row">

          <select
            id="note-type"
            class="auth-input note-select"
          >
            ${NOTE_TYPES
              .map(function (t) {

                return `
                  <option value="${t.key}">
                    ${t.label}
                  </option>
                `;

              })
              .join("")}
          </select>

          <input
            type="text"
            id="note-label"
            class="auth-input note-label-input"
            placeholder="Libellé (optionnel, ex : Chapitre fractions)"
          >

        </div>

        <div class="note-form-row">

          <input
            type="number"
            id="note-score"
            class="auth-input note-num"
            placeholder="Note obtenue"
            min="0"
            step="0.5"
          >

          <span class="note-slash">
            /
          </span>

          <input
            type="number"
            id="note-outof"
            class="auth-input note-num"
            placeholder="Sur"
            value="20"
            min="1"
            step="0.5"
          >

          <input
            type="number"
            id="note-coef"
            class="auth-input note-num"
            placeholder="Coef."
            value="1"
            min="0.5"
            step="0.5"
            title="Coefficient de cette note"
          >

          <input
            type="date"
            id="note-date"
            class="auth-input note-date-input"
          >

        </div>

        <button
          class="btn btn-primary"
          id="add-note-btn"
          style="--subj-color:${subj.color}"
        >
          ➕ Ajouter la note
        </button>

        <p
          class="note-error"
          id="note-error"
        ></p>

      </div>

      <ul class="note-list">
        ${rowsHtml}
      </ul>
    `;

    document
      .getElementById("add-note-btn")
      .addEventListener(
        "click",
        function () {

          const type =
            document.getElementById(
              "note-type"
            ).value;

          const label =
            document.getElementById(
              "note-label"
            ).value.trim();

          const score =
            parseFloat(
              document.getElementById(
                "note-score"
              ).value
            );

          const outOf =
            parseFloat(
              document.getElementById(
                "note-outof"
              ).value
            ) || 20;

          const coef =
            parseFloat(
              document.getElementById(
                "note-coef"
              ).value
            ) || 1;

          const date =
            document.getElementById(
              "note-date"
            ).value;

          const errEl =
            document.getElementById(
              "note-error"
            );

          if (
            isNaN(score) ||
            score < 0 ||
            outOf <= 0 ||
            score > outOf
          ) {

            errEl.textContent =
              "Entre une note valide (ex : 14 sur 20).";

            return;
          }

          errEl.textContent = "";

          addGrade(
            key,
            {
              id:
                Date.now() +
                "-" +
                Math.floor(
                  Math.random() * 1000
                ),
              type: type,
              label: label,
              score: score,
              outOf: outOf,
              coef: coef,
              date: date
            }
          );

          renderNotes(key);
        }
      );

    root
      .querySelectorAll(".note-delete")
      .forEach(function (btn) {

        btn.addEventListener(
          "click",
          function () {

            deleteGrade(
              key,
              btn.dataset.id
            );

            renderNotes(key);
          }
        );
      });
  }

  // ==========================================================
  // GÉNÉRATEUR
  // ==========================================================

  function renderGenerator(
    preKey,
    preLessonId
  ) {

    const subjectKeys =
      Object.keys(COURSES);

    if (!subjectKeys.length) {

      root.innerHTML =
        `<p class="empty">
          Aucune matière disponible.
        </p>`;

      return;
    }

    let selKey =
      preKey &&
      COURSES[preKey]
        ? preKey
        : subjectKeys[0];

    let selLesson = "";

    if (
      preLessonId &&
      COURSES[selKey] &&
      findLesson(
        selKey,
        preLessonId
      )
    ) {

      selLesson =
        preLessonId;
    }

    function lessonOptions(k) {

      const subj =
        COURSES[k];

      let opts =
        subj.lessons
          .map(function (l) {

            return `
              <option
                value="${esc(l.id)}"
                ${
                  l.id === selLesson
                    ? "selected"
                    : ""
                }
              >
                ${esc(l.title)}
              </option>
            `;

          })
          .join("");

      opts += `
        <option
          value="__custom__"
          ${
            selLesson === "__custom__"
              ? "selected"
              : ""
          }
        >
          ✏️ Autre thème (à préciser)
        </option>
      `;

      return opts;
    }

    root.innerHTML = `
      <div class="crumb">

        <a href="#/">Accueil</a>

        <span>/</span>

        <span>
          Générateur d'exercices
        </span>

      </div>

      <div class="tool-header">

        <span class="sh-icon">
          🧠
        </span>

        <h1>
          Générateur d'exercices
        </h1>

      </div>

      <p class="tool-sub">
        Choisis une matière et une leçon
        ou un thème libre.
        Le générateur local crée un exercice
        instantanément sans IA.
        Le générateur IA peut traiter un thème
        libre mais dépend d'une connexion
        et d'une clé API.
      </p>

      <div class="tool-form">

        <div class="tool-form-row">

          <select
            id="gen-subject"
            class="auth-input tool-select"
          >

            ${subjectKeys
              .map(function (k) {

                return `
                  <option
                    value="${esc(k)}"
                    ${
                      k === selKey
                        ? "selected"
                        : ""
                    }
                  >
                    ${COURSES[k].icon}
                    ${esc(COURSES[k].name)}
                  </option>
                `;

              })
              .join("")}

          </select>

          <select
            id="gen-lesson"
            class="auth-input tool-select"
          >
            ${lessonOptions(selKey)}
          </select>

        </div>

        <div
          class="tool-form-row"
          id="gen-topic-row"
          style="${
            selLesson === "__custom__"
              ? ""
              : "display:none;"
          }"
        >

          <input
            type="text"
            id="gen-topic"
            class="auth-input tool-select"
            placeholder="Ex : les triangles semblables, le conditionnel..."
          >

        </div>

        <div class="tool-form-row">

          <select
            id="gen-type"
            class="auth-input tool-select-sm"
          >

            <option value="qcm">
              📝 QCM
            </option>

            <option value="open">
              ✏️ Exercice ouvert
            </option>

          </select>

          <select
            id="gen-difficulty"
            class="auth-input tool-select-sm"
          >

            <option value="facile">
              Facile
            </option>

            <option
              value="moyen"
              selected
            >
              Moyen
            </option>

            <option value="difficile">
              Difficile
            </option>

          </select>

        </div>

        <div class="tool-form-row">

          <button
            class="btn btn-primary"
            id="gen-local-btn"
          >
            ⚡ Générer localement
          </button>

          <button
            class="btn btn-ghost"
            id="gen-btn"
          >
            🧠 Générer avec l'IA
          </button>

        </div>

        <p
          class="tool-error"
          id="gen-error"
        ></p>

      </div>

      <div id="gen-result"></div>
    `;

    const subjectSel =
      document.getElementById(
        "gen-subject"
      );

    const lessonSel =
      document.getElementById(
        "gen-lesson"
      );

    const topicRow =
      document.getElementById(
        "gen-topic-row"
      );

    const topicInput =
      document.getElementById(
        "gen-topic"
      );

    const errEl =
      document.getElementById(
        "gen-error"
      );

    const resultEl =
      document.getElementById(
        "gen-result"
      );

    const genBtn =
      document.getElementById(
        "gen-btn"
      );

    const localBtn =
      document.getElementById(
        "gen-local-btn"
      );

    subjectSel.addEventListener(
      "change",
      function () {

        selKey =
          subjectSel.value;

        selLesson = "";

        lessonSel.innerHTML =
          lessonOptions(selKey);

        topicRow.style.display =
          lessonSel.value === "__custom__"
            ? ""
            : "none";
      }
    );

    lessonSel.addEventListener(
      "change",
      function () {

        selLesson =
          lessonSel.value;

        topicRow.style.display =
          lessonSel.value === "__custom__"
            ? ""
            : "none";
      }
    );

    // --------------------------------------------------------
    // IA
    // --------------------------------------------------------

    function askAgain() {

      const key =
        subjectSel.value;

      const subj =
        COURSES[key];

      const lessonId =
        lessonSel.value;

      const isCustom =
        lessonId === "__custom__";

      const lesson =
        isCustom
          ? null
          : findLesson(
              key,
              lessonId
            );

      const topic =
        isCustom
          ? (topicInput.value || "").trim()
          : "";

      const type =
        document.getElementById(
          "gen-type"
        ).value;

      const difficulty =
        document.getElementById(
          "gen-difficulty"
        ).value;

      if (
        isCustom &&
        !topic
      ) {

        errEl.textContent =
          "Précise un thème pour générer l'exercice.";

        return;
      }

      errEl.textContent = "";

      genBtn.disabled = true;
      genBtn.textContent =
        "Génération en cours...";

      resultEl.innerHTML =
        `<p class="empty">
          🧠 L'IA prépare ton exercice...
        </p>`;

      fetch(
        "/api/generate-exercise",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            subjectName: subj.name,

            lessonTitle:
              lesson
                ? lesson.title
                : "",

            lessonText:
              lesson
                ? (lesson.content || "")
                    .replace(
                      /<[^>]+>/g,
                      " "
                    )
                : "",

            topic: topic,
            type: type,
            difficulty: difficulty
          })
        }
      )
        .then(function (r) {

          return r.json()
            .then(function (data) {

              return {
                ok: r.ok,
                data: data
              };

            });

        })
        .then(function (result) {

          const ok = result.ok;
          const data = result.data;

          genBtn.disabled = false;
          genBtn.textContent =
            "🧠 Générer avec l'IA";

          if (!ok) {

            resultEl.innerHTML =
              `
                <p class="tool-error">
                  ⚠️ ${
                    esc(
                      (data && data.error) ||
                      "Erreur inconnue"
                    )
                  }
                </p>
              `;

            if (
              data &&
              data.details
            ) {

              resultEl.innerHTML +=
                `
                  <p
                    class="tool-error"
                    style="opacity:.65;font-size:.82rem;"
                  >
                    ${esc(
                      String(data.details)
                        .slice(0, 500)
                    )}
                  </p>
                `;
            }

            return;
          }

          if (
            !data ||
            !data.exercise
          ) {

            resultEl.innerHTML =
              `
                <p class="tool-error">
                  ⚠️ L'IA n'a pas renvoyé
                  d'exercice valide.
                </p>
              `;

            return;
          }

          renderGenResult(
            subj,
            data.type,
            data.exercise,
            askAgain
          );

        })
        .catch(function (error) {

          console.error(
            "Erreur générateur IA :",
            error
          );

          genBtn.disabled = false;

          genBtn.textContent =
            "🧠 Générer avec l'IA";

          resultEl.innerHTML =
            `
              <p class="tool-error">
                ⚠️ Générateur indisponible.
              </p>
            `;

        });
    }

    // --------------------------------------------------------
    // GÉNÉRATEUR LOCAL
    // --------------------------------------------------------

    function askLocal() {

      const key =
        subjectSel.value;

      const subj =
        COURSES[key];

      const lessonId =
        lessonSel.value;

      const isCustom =
        lessonId === "__custom__";

      const type =
        document.getElementById(
          "gen-type"
        ).value;

      const difficulty =
        document.getElementById(
          "gen-difficulty"
        ).value;

      if (isCustom) {

        errEl.textContent =
          "Le générateur local fonctionne sur une leçon de l'application.";

        return;
      }

      if (
        typeof LOCAL_GEN === "undefined" ||
        !LOCAL_GEN.hasContent(
          key,
          lessonId
        )
      ) {

        errEl.textContent =
          "Pas encore de contenu local pour cette leçon.";

        return;
      }

      errEl.textContent = "";

      const result =
        LOCAL_GEN.generate(
          key,
          lessonId,
          type,
          difficulty
        );

      if (!result) {

        errEl.textContent =
          "Impossible de générer un exercice local.";

        return;
      }

      renderGenResult(
        subj,
        result.type,
        result.exercise,
        askLocal
      );
    }

    // --------------------------------------------------------
    // AFFICHAGE EXERCICE
    // --------------------------------------------------------

    function renderGenResult(
      subj,
      type,
      exercise,
      onAgain
    ) {

      if (!exercise) {

        resultEl.innerHTML =
          `
            <p class="tool-error">
              ⚠️ Exercice vide.
            </p>
          `;

        return;
      }

      if (type === "qcm") {

        let locked = false;
        let selected = null;

        function paint() {

          const options =
            Array.isArray(exercise.options)
              ? exercise.options
              : [];

          const optsHtml =
            options
              .map(function (opt, i) {

                let cls =
                  "quiz-option";

                if (locked) {

                  if (
                    i === exercise.correct
                  ) {

                    cls += " correct";

                  } else if (
                    i === selected &&
                    selected !== exercise.correct
                  ) {

                    cls += " wrong";
                  }

                } else if (
                  i === selected
                ) {

                  cls += " selected";
                }

                const letters =
                  ["A", "B", "C", "D"];

                return `
                  <li
                    class="${cls}"
                    data-i="${i}"
                  >

                    <span class="opt-letter">
                      ${letters[i] || ""}
                    </span>

                    <span>
                      ${richText(opt)}
                    </span>

                  </li>
                `;

              })
              .join("");

          resultEl.innerHTML = `
            <div
              class="quiz-card"
              style="--subj-color:${subj.color}"
            >

              <div class="quiz-q-label">
                Exercice généré — QCM
              </div>

              <h2 class="quiz-question">
                ${richText(exercise.q)}
              </h2>

              <ul class="quiz-options">
                ${optsHtml}
              </ul>

              <div
                class="quiz-explain ${
                  locked ? "show" : ""
                }"
              >
                ${
                  locked
                    ? richText(
                        exercise.exp || ""
                      )
                    : ""
                }
              </div>

              <div class="quiz-footer">

                <span></span>

                <button
                  class="btn btn-primary"
                  id="gen-again-btn"
                  style="--subj-color:${subj.color}"
                >
                  🎲 Générer un autre
                </button>

              </div>

            </div>
          `;

          resultEl
            .querySelectorAll(".quiz-option")
            .forEach(function (el) {

              el.addEventListener(
                "click",
                function () {

                  if (locked) return;

                  selected =
                    parseInt(
                      el.dataset.i,
                      10
                    );

                  locked = true;

                  paint();
                }
              );
            });

          const again =
            document.getElementById(
              "gen-again-btn"
            );

          if (again) {

            again.addEventListener(
              "click",
              onAgain
            );
          }

          typesetMath(resultEl);
        }

        paint();

      } else {

        let revealed = false;

        function paint() {

          resultEl.innerHTML = `
            <div
              class="quiz-card"
              style="--subj-color:${subj.color}"
            >

              <div class="quiz-q-label">
                Exercice généré — Pratique ✏️
              </div>

              <p
                class="quiz-question practice-statement"
              >
                ${richText(
                  exercise.statement || ""
                )}
              </p>

              <button
                class="btn btn-ghost"
                id="gen-reveal-btn"
              >
                ${
                  revealed
                    ? "Masquer la correction"
                    : "Voir la correction"
                }
              </button>

              <div
                class="quiz-explain ${
                  revealed ? "show" : ""
                }"
              >
                ${
                  revealed
                    ? richText(
                        exercise.solution || ""
                      )
                    : ""
                }
              </div>

              <div class="quiz-footer">

                <span></span>

                <button
                  class="btn btn-primary"
                  id="gen-again-btn"
                  style="--subj-color:${subj.color}"
                >
                  🎲 Générer un autre
                </button>

              </div>

            </div>
          `;

          const reveal =
            document.getElementById(
              "gen-reveal-btn"
            );

          if (reveal) {

            reveal.addEventListener(
              "click",
              function () {

                revealed =
                  !revealed;

                paint();
              }
            );
          }

          const again =
            document.getElementById(
              "gen-again-btn"
            );

          if (again) {

            again.addEventListener(
              "click",
              onAgain
            );
          }

          typesetMath(resultEl);
        }

        paint();
      }
    }

    genBtn.addEventListener(
      "click",
      askAgain
    );

    localBtn.addEventListener(
      "click",
      askLocal
    );

    typesetMath(root);
  }

  // ==========================================================
  // TRADUCTEUR
  // ==========================================================

  function runTranslate(
    text,
    direction,
    targetEl,
    btnEl,
    btnLabel
  ) {

    if (!text) return;

    btnEl.disabled = true;
    btnEl.textContent = "...";

    targetEl.classList.add("show");

    targetEl.innerHTML =
      `<p class="empty">
        🔤 Traduction en cours...
      </p>`;

    fetch(
      "/api/translate",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify({
          text: text,
          direction: direction
        })
      }
    )
      .then(function (r) {

        return r.json()
          .then(function (data) {

            return {
              ok: r.ok,
              data: data
            };

          });

      })
      .then(function (result) {

        const ok = result.ok;
        const data = result.data;

        btnEl.disabled = false;
        btnEl.textContent = btnLabel;

        if (!ok) {

          targetEl.innerHTML =
            `
              <p class="tool-error">
                ⚠️ ${
                  esc(
                    (data && data.error) ||
                    "Erreur inconnue"
                  )
                }
              </p>
            `;

          return;
        }

        const langLabel =
          data.sourceLang === "en"
            ? "Anglais → Français"
            : "Français → Anglais";

        targetEl.innerHTML = `
          <div class="translate-lang">
            ${langLabel}
          </div>

          <p class="translate-text">
            ${richText(
              data.translation || ""
            )}
          </p>

          ${
            data.note
              ? `
                <div class="translate-note">
                  ${richText(data.note)}
                </div>
              `
              : ""
          }
        `;

        typesetMath(targetEl);

      })
      .catch(function () {

        btnEl.disabled = false;
        btnEl.textContent = btnLabel;

        targetEl.innerHTML =
          `
            <p class="tool-error">
              ⚠️ Traducteur indisponible.
            </p>
          `;
      });
  }

  function renderTranslate() {

    root.innerHTML = `
      <div class="crumb">

        <a href="#/">Accueil</a>

        <span>/</span>

        <span>
          Traducteur
        </span>

      </div>

      <div class="tool-header">

        <span class="sh-icon">
          🔤
        </span>

        <h1>
          Traducteur Français ⇄ Anglais
        </h1>

      </div>

      <p class="tool-sub">
        Tape un mot ou une phrase,
        choisis le sens si besoin,
        et obtiens une traduction adaptée
        au niveau collège.
      </p>

      <div class="tool-form">

        <textarea
          id="tr-text"
          class="tool-textarea"
          placeholder="Écris ici un mot, une expression ou une phrase..."
        ></textarea>

        <div class="tool-form-row">

          <select
            id="tr-direction"
            class="auth-input tool-select-sm"
          >

            <option value="auto">
              Détection automatique
            </option>

            <option value="fr-en">
              Français → Anglais
            </option>

            <option value="en-fr">
              Anglais → Français
            </option>

          </select>

          <button
            class="btn btn-primary"
            id="tr-btn"
          >
            Traduire
          </button>

        </div>

      </div>

      <div
        id="tr-result"
        class="translate-result"
        style="display:none;"
      ></div>
    `;

    const textEl =
      document.getElementById(
        "tr-text"
      );

    const dirEl =
      document.getElementById(
        "tr-direction"
      );

    const btn =
      document.getElementById(
        "tr-btn"
      );

    const resultEl =
      document.getElementById(
        "tr-result"
      );

    textEl.focus();

    function go() {

      const text =
        (textEl.value || "").trim();

      if (!text) return;

      resultEl.style.display =
        "block";

      runTranslate(
        text,
        dirEl.value,
        resultEl,
        btn,
        "Traduire"
      );
    }

    btn.addEventListener(
      "click",
      go
    );

    textEl.addEventListener(
      "keydown",
      function (e) {

        if (
          e.key === "Enter" &&
          (e.ctrlKey || e.metaKey)
        ) {

          go();
        }
      }
    );

    typesetMath(root);
  }

  // ==========================================================
  // QUIZ
  // ==========================================================

  function renderQuiz(
    key,
    id
  ) {

    const subj =
      COURSES[key];

    const lesson =
      findLesson(key, id);

    if (!subj || !lesson) {

      root.innerHTML =
        `<p class="empty">
          Évaluation introuvable.
        </p>`;

      return;
    }

    const quiz =
      Array.isArray(lesson.quiz)
        ? lesson.quiz
        : [];

    const practiceList =
      typeof PRACTICE !== "undefined" &&
      PRACTICE[id]
        ? PRACTICE[id]
        : [];

    const items =
      quiz
        .map(function (q) {

          return Object.assign(
            { type: "qcm" },
            q
          );

        })
        .concat(
          practiceList.map(
            function (p) {

              return Object.assign(
                { type: "open" },
                p
              );

            }
          )
        );

    if (!items.length) {

      root.innerHTML =
        `<p class="empty">
          Aucune question disponible pour cette leçon.
        </p>`;

      return;
    }

    let current = 0;

    let answered =
      new Array(
        items.length
      ).fill(null);

    let selected = null;
    let locked = false;

    function progressBar() {

      return items
        .map(
          function (_, i) {

            let cls = "";

            if (i < current) {
              cls = "done";
            } else if (
              i === current
            ) {
              cls = "current";
            }

            return `
              <span class="${cls}"></span>
            `;
          }
        )
        .join("");
    }

    function renderQuestion() {

      const item =
        items[current];

      if (item.type === "qcm") {

        selected =
          answered[current] !== null
            ? answered[current]
            : null;

        locked =
          answered[current] !== null;

        const options =
          Array.isArray(item.options)
            ? item.options
            : [];

        const optsHtml =
          options
            .map(function (opt, i) {

              let cls =
                "quiz-option";

              if (locked) {

                if (
                  i === item.correct
                ) {

                  cls += " correct";

                } else if (
                  i === selected &&
                  selected !== item.correct
                ) {

                  cls += " wrong";
                }

              } else if (
                i === selected
              ) {

                cls += " selected";
              }

              const letters =
                ["A", "B", "C", "D"];

              return `
                <li
                  class="${cls}"
                  data-i="${i}"
                >

                  <span class="opt-letter">
                    ${letters[i] || ""}
                  </span>

                  <span>
                    ${richText(opt)}
                  </span>

                </li>
              `;

            })
            .join("");

        root.innerHTML = `
          <div class="crumb">

            <a href="#/">Accueil</a>

            <span>/</span>

            <a href="#/subject/${esc(key)}">
              ${esc(subj.name)}
            </a>

            <span>/</span>

            <a href="#/lesson/${esc(key)}/${esc(id)}">
              ${esc(lesson.title)}
            </a>

            <span>/</span>

            <span>
              Évaluation
            </span>

          </div>

          <div class="quiz-progress">
            ${progressBar()}
          </div>

          <div
            class="quiz-card"
            style="--subj-color:${subj.color}"
          >

            <div class="quiz-q-label">
              Question
              ${current + 1}
              /
              ${items.length}
              — QCM
            </div>

            <h2 class="quiz-question">
              ${richText(item.q)}
            </h2>

            <ul class="quiz-options">
              ${optsHtml}
            </ul>

            <div
              class="quiz-explain ${
                locked ? "show" : ""
              }"
            >
              ${
                locked
                  ? richText(
                      item.exp || ""
                    )
                  : ""
              }
            </div>

            <div class="quiz-footer">

              <a
                class="btn btn-ghost"
                href="#/lesson/${esc(key)}/${esc(id)}"
              >
                ← Annuler
              </a>

              <button
                class="btn btn-primary"
                id="next-btn"
                style="--subj-color:${subj.color}"
                ${locked ? "" : "disabled"}
              >
                ${
                  current === items.length - 1
                    ? "Voir mon résultat"
                    : "Suivant →"
                }
              </button>

            </div>

          </div>
        `;

        root
          .querySelectorAll(".quiz-option")
          .forEach(function (el) {

            el.addEventListener(
              "click",
              function () {

                if (locked) return;

                const i =
                  parseInt(
                    el.dataset.i,
                    10
                  );

                selected = i;

                answered[current] =
                  i;

                renderQuestion();
              }
            );
          });

      } else {

        locked =
          answered[current] !== null;

        root.innerHTML = `
          <div class="crumb">

            <a href="#/">Accueil</a>

            <span>/</span>

            <a href="#/subject/${esc(key)}">
              ${esc(subj.name)}
            </a>

            <span>/</span>

            <a href="#/lesson/${esc(key)}/${esc(id)}">
              ${esc(lesson.title)}
            </a>

            <span>/</span>

            <span>
              Évaluation
            </span>

          </div>

          <div class="quiz-progress">
            ${progressBar()}
          </div>

          <div
            class="quiz-card"
            style="--subj-color:${subj.color}"
          >

            <div class="quiz-q-label">
              Exercice
              ${current + 1}
              /
              ${items.length}
              — Pratique ✏️
            </div>

            <p class="quiz-question practice-statement">
              ${richText(
                item.statement || ""
              )}
            </p>

            <button
              class="btn btn-ghost"
              id="reveal-btn"
            >
              ${
                locked
                  ? "Masquer la correction"
                  : "Voir la correction"
              }
            </button>

            <div
              class="quiz-explain ${
                locked ? "show" : ""
              }"
            >
              ${
                locked
                  ? richText(
                      item.solution || ""
                    )
                  : ""
              }
            </div>

            <div class="quiz-footer">

              <a
                class="btn btn-ghost"
                href="#/lesson/${esc(key)}/${esc(id)}"
              >
                ← Annuler
              </a>

              <button
                class="btn btn-primary"
                id="next-btn"
                style="--subj-color:${subj.color}"
                ${locked ? "" : "disabled"}
              >
                ${
                  current === items.length - 1
                    ? "Voir mon résultat"
                    : "Suivant →"
                }
              </button>

            </div>

          </div>
        `;

        const reveal =
          document.getElementById(
            "reveal-btn"
          );

        if (reveal) {

          reveal.addEventListener(
            "click",
            function () {

              answered[current] =
                true;

              renderQuestion();
            }
          );
        }
      }

      const nextBtn =
        document.getElementById(
          "next-btn"
        );

      if (nextBtn) {

        nextBtn.disabled =
          !locked;

        if (locked) {

          nextBtn.addEventListener(
            "click",
            function () {

              if (
                current ===
                items.length - 1
              ) {

                finishQuiz();

              } else {

                current++;

                renderQuestion();
              }
            }
          );
        }
      }

      typesetMath(root);
    }

    function finishQuiz() {

      const qcmCount =
        quiz.length;

      const score =
        answered
          .slice(0, qcmCount)
          .reduce(
            function (acc, ans, i) {

              return (
                acc +
                (
                  ans ===
                  quiz[i].correct
                    ? 1
                    : 0
                )
              );

            },
            0
          );

      markLesson(
        id,
        score,
        qcmCount
      );

      const pct =
        qcmCount
          ? Math.round(
              (score / qcmCount) *
              100
            )
          : 100;

      let msg;
      let grade;

      if (pct >= 80) {

        grade = "🌟";

        msg =
          "Excellent travail, continue comme ça !";

      } else if (pct >= 50) {

        grade = "👍";

        msg =
          "Pas mal ! Relis la leçon pour progresser encore.";

      } else {

        grade = "💪";

        msg =
          "Retourne relire la leçon puis retente l'évaluation.";
      }

      const practiceNote =
        practiceList.length
          ? `
            <p class="result-msg">
              Tu as aussi travaillé
              ${practiceList.length}
              exercice${
                practiceList.length > 1
                  ? "s"
                  : ""
              }
              de pratique dans cette évaluation.
            </p>
          `
          : "";

      root.innerHTML = `
        <div class="crumb">

          <a href="#/">Accueil</a>

          <span>/</span>

          <a href="#/subject/${esc(key)}">
            ${esc(subj.name)}
          </a>

          <span>/</span>

          <span>
            Résultat
          </span>

        </div>

        <div
          class="result-card"
          style="--subj-color:${subj.color}"
        >

          <div class="result-grade">
            ${grade}
            ${score}/${qcmCount}
          </div>

          <p class="result-msg">
            ${esc(msg)}
          </p>

          ${practiceNote}

          <div class="result-actions">

            <a
              class="btn btn-primary"
              style="--subj-color:${subj.color}"
              href="#/subject/${esc(key)}"
            >
              Voir les autres leçons
            </a>

            <a
              class="btn btn-ghost"
              href="#/lesson/${esc(key)}/${esc(id)}"
            >
              Relire la leçon
            </a>

            ${
              typeof SITUATIONS !== "undefined" &&
              SITUATIONS[key]
                ? `
                  <a
                    class="btn btn-ghost"
                    href="#/situations/${esc(key)}"
                  >
                    📋 Situations d'évaluation
                  </a>
                `
                : ""
            }

          </div>

        </div>
      `;

      typesetMath(root);
    }

    renderQuestion();
  }

  // ==========================================================
  // PREMIER AFFICHAGE
  // ==========================================================

  try {

    render();

  } catch (error) {

    console.error(
      "Erreur lors du démarrage de l'application :",
      error
    );

    root.innerHTML = `
      <div class="auth-card">

        <div class="auth-badge">
          ⚠️
        </div>

        <h1 class="auth-title">
          Une erreur est survenue
        </h1>

        <p class="auth-sub">
          L'application n'a pas pu être chargée.
          Recharge la page.
        </p>

      </div>
    `;
  }

})();