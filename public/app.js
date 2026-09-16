// I'm The Best — app.js

(function(){

  const root = document.getElementById("app");

  const LS_KEY = "imthebest_progress_v1";
  const AUTH_KEY = "imthebest_auth_email";
  const LS_GRADES_KEY = "imthebest_grades_v1";


  /* ---------- Auth state ---------- */

  let currentEmail = null;

  try {

    currentEmail =
      localStorage.getItem(AUTH_KEY) || null;

  } catch(e) {

    currentEmail = null;

  }


  let authPendingEmail = "";
  let authError = "";


  function updateTopbarUser(){

    const el =
      document.getElementById("topbar-user");

    const nav =
      document.getElementById("topnav");


    if (nav) {

      nav.style.display =
        currentEmail ? "flex" : "none";

    }


    if (!el) return;


    if (currentEmail){

      el.innerHTML = `

        <span class="user-email">
          ${esc(currentEmail)}
        </span>

        <button
          id="logout-btn"
          class="btn-link"
        >
          Changer de compte
        </button>

      `;


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


  function logout(){

    try {

      localStorage.removeItem(
        AUTH_KEY
      );

    } catch(e){}


    currentEmail = null;

    authPendingEmail = "";
    authError = "";

    location.hash = "";

    render();

  }



  /* ---------- Progress state ---------- */

  let progress =
    loadLocal();

  let grades =
    loadGradesLocal();


  function loadLocal(){

    try {

      return JSON.parse(
        localStorage.getItem(LS_KEY)
      ) || {};

    } catch(e) {

      return {};

    }

  }


  function loadGradesLocal(){

    try {

      return JSON.parse(
        localStorage.getItem(
          LS_GRADES_KEY
        )
      ) || {};

    } catch(e) {

      return {};

    }

  }


  function saveLocal(){

    try {

      localStorage.setItem(
        LS_KEY,
        JSON.stringify(progress)
      );

    } catch(e){}

  }


  function saveGradesLocal(){

    try {

      localStorage.setItem(
        LS_GRADES_KEY,
        JSON.stringify(grades)
      );

    } catch(e){}

  }


  function saveRemote(){

    if (!currentEmail) return;


    fetch(
      `/api/progress?email=${encodeURIComponent(currentEmail)}`,
      {

        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({

          progress,
          grades

        })

      }
    ).catch(() => {});

  }


  function loadRemoteThenRender(){

    if (!currentEmail){

      render();

      return;

    }


    fetch(
      `/api/progress?email=${encodeURIComponent(currentEmail)}`
    )

      .then(r =>
        r.ok ? r.json() : null
      )

      .then(remote => {

        if (
          remote &&
          typeof remote === "object"
        ){

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
            Object.keys(
              remoteProgress
            ).length
          ){

            progress =
              Object.assign(
                {},
                progress,
                remoteProgress
              );

            saveLocal();

          }


          if (
            Object.keys(
              remoteGrades
            ).length
          ){

            grades =
              Object.assign(
                {},
                grades,
                remoteGrades
              );

            saveGradesLocal();

          }

        }

      })

      .catch(() => {})

      .finally(render);

  }


  function markLesson(
    lessonId,
    score,
    total
  ){

    progress[lessonId] = {

      done: true,

      score,

      total,

      ts: Date.now()

    };


    saveLocal();

    saveRemote();

  }


  function addGrade(
    subjectKey,
    entry
  ){

    if (!grades[subjectKey]){

      grades[subjectKey] = [];

    }


    grades[subjectKey].push(entry);

    saveGradesLocal();

    saveRemote();

  }


  function deleteGrade(
    subjectKey,
    id
  ){

    if (!grades[subjectKey])
      return;


    grades[subjectKey] =
      grades[subjectKey].filter(
        g => g.id !== id
      );


    saveGradesLocal();

    saveRemote();

  }



  /* ---------- Helpers ---------- */


  // ==========================================================
  // ÉCHAPPEMENT HTML
  // ==========================================================

  function esc(s){

    return String(s ?? "")
      .replace(
        /[&<>"']/g,
        c => ({

          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          '"': "&quot;",
          "'": "&#39;"

        }[c])
      );

  }



  // ==========================================================
  // TEXTE RICHE + MATHÉMATIQUES
  // ==========================================================
  //
  // Cette fonction permet à l'application de comprendre :
  //
  // $x^2$
  //
  // $$\frac{1}{2}$$
  //
  // mais aussi directement :
  //
  // \(x^2\)
  //
  // \[\frac{1}{2}\]
  //
  // ==========================================================

  function richText(value){

    let text =
      String(value ?? "");

    const mathSlots = [];


    // --------------------------------------------------------
    // $$ ... $$  ->  \[ ... \]
    // --------------------------------------------------------

    text =
      text.replace(
        /\$\$([\s\S]*?)\$\$/g,

        (_, body) => {

          const index =
            mathSlots.push(
              "\\[" +
              body +
              "\\]"
            ) - 1;


          return `@@MATH_${index}@@`;

        }
      );



    // --------------------------------------------------------
    // $ ... $  ->  \( ... \)
    // --------------------------------------------------------

    text =
      text.replace(
        /(^|[^$])\$([^$\n]+?)\$(?!\$)/g,

        (_, before, body) => {

          const index =
            mathSlots.push(
              "\\(" +
              body +
              "\\)"
            ) - 1;


          return (
            before +
            `@@MATH_${index}@@`
          );

        }
      );



    // --------------------------------------------------------
    // Protection contre le HTML
    // --------------------------------------------------------

    text =
      esc(text);



    // --------------------------------------------------------
    // Retours à la ligne
    // --------------------------------------------------------

    text =
      text.replace(
        /\r?\n/g,
        "<br>"
      );



    // --------------------------------------------------------
    // Réinsertion des mathématiques
    // --------------------------------------------------------

    text =
      text.replace(
        /@@MATH_(\d+)@@/g,

        (_, index) => {

          return esc(
            mathSlots[
              Number(index)
            ]
          );

        }
      );


    return text;

  }



  // ==========================================================
  // MATHJAX
  // ==========================================================
  //
  // Demande à MathJax de transformer le LaTeX en vraies
  // expressions mathématiques dans la page.
  //
  // ==========================================================

  function typesetMath(container){

    if (!container)
      return;


    const run = () => {

      if (
        window.MathJax &&
        typeof window.MathJax.typesetPromise ===
          "function"
      ){

        try {

          if (
            typeof window.MathJax.typesetClear ===
              "function"
          ){

            window.MathJax.typesetClear(
              [container]
            );

          }


          window.MathJax
            .typesetPromise([container])
            .catch(() => {});


        } catch(error){

          // Ne bloque jamais l'application

        }

      }

    };



    // MathJax est déjà chargé

    if (
      window.MathJax &&
      window.MathJax.startup &&
      window.MathJax.startup.promise
    ){

      window.MathJax.startup.promise
        .then(run)
        .catch(() => {

          setTimeout(
            run,
            500
          );

        });


    } else {

      // MathJax n'est pas encore chargé

      setTimeout(
        run,
        500
      );

    }

  }



  // ==========================================================
  // FIN DU BLOC MATHÉMATIQUES
  // ==========================================================


