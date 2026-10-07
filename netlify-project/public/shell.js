// Lets Test! shell
//
// This page is the single entry point for all three diagnostic tools.
// It signs the examiner in once, then shows a persistent tab bar
// (English | Afrikaans | Mathematics) above a single <iframe> whose src
// swaps between english/index.html, afrikaans/index.html and
// math/index.html. Each subject tool is otherwise the exact same,
// already-tested code it was before this merge - this shell does not
// reach into any of them.
//
// The sign-in is shared across all three because they all read the same
// localStorage key (SHARED_AUTH_KEY). Setting it here, before a subject
// iframe ever loads, means that subject's own app.js sees
// STATE.examinerAuthed = true on first load and skips straight past its
// own (still-intact, unused-in-practice) login screen.

const SHARED_AUTH_KEY = "dspet_examiner_authed";
// Change this here AND in public/english/index.html, public/afrikaans/index.html
// and public/math/index.html (all four must match) if you want a fresh password.
const SHELL_PASSWORD = "LetsTestCircle26";

const SUBJECTS = [
  { id: "english", label: "English Placement Tool", src: "english/index.html" },
  { id: "afrikaans", label: "Afrikaans Placement Tool", src: "afrikaans/index.html" },
  { id: "math", label: "Mathematics Placement Tool", src: "math/index.html" }
];

// Draft wording - see the note left for Debby about this disclaimer; it
// still needs her sign-off before this is final.
const DISCLAIMER_TEXT = "Lets Test! is a set of diagnostic screening tools based on the CAPS curriculum's requirements and expectations for each grade. They are not formal, standardised psychometric tests, and are not a substitute for a formal psycho-educational, speech-language or occupational-therapy assessment.";

const SHELL_STATE = {
  authed: localStorage.getItem(SHARED_AUTH_KEY) === "1",
  activeSubject: "english"
};

function shellRoute(){
  const app = document.getElementById("shellApp");
  if(!SHELL_STATE.authed){
    renderShellLogin(app);
  } else {
    renderShellMain(app);
  }
}

function renderShellLogin(app){
  app.innerHTML = `
    <div class="shell-login-wrap">
      <div class="card shell-login-card">
        <img class="logo" src="logo.png" alt="Debby Smit Educational Therapy logo" />
        <h2 style="text-align:center;margin:0 0 4px;">Lets Test!</h2>
        <p class="muted" style="text-align:center;margin-top:0;">Sign in to continue</p>
        <p class="note" style="margin-top:14px;">${DISCLAIMER_TEXT}</p>
        <div class="row" style="margin-top:14px;justify-content:center;">
          <input type="password" id="shellPwInput" placeholder="Password" autocomplete="off" />
          <button class="btn" onclick="tryShellLogin()">Continue</button>
        </div>
        <p class="muted" style="font-size:.85rem;margin-top:10px;">This is a light gate to keep casual visitors out, not real security.</p>
      </div>
    </div>
  `;
  const input = document.getElementById("shellPwInput");
  input.focus();
  input.addEventListener("keydown", e => { if(e.key === "Enter") tryShellLogin(); });
}

function tryShellLogin(){
  const val = document.getElementById("shellPwInput").value.trim();
  if(val === SHELL_PASSWORD){
    localStorage.setItem(SHARED_AUTH_KEY, "1");
    SHELL_STATE.authed = true;
    shellRoute();
  } else {
    alert("That password isn't right - please try again.");
  }
}

function shellLogout(){
  localStorage.removeItem(SHARED_AUTH_KEY);
  SHELL_STATE.authed = false;
  shellRoute();
}

function shellSelectSubject(id){
  SHELL_STATE.activeSubject = id;
  shellRoute();
}

function renderShellMain(app){
  const active = SUBJECTS.find(s => s.id === SHELL_STATE.activeSubject) || SUBJECTS[0];
  app.innerHTML = `
    <div class="shell-topbar">
      <img class="logo" src="logo.png" alt="Debby Smit Educational Therapy logo" />
      <div class="shell-title-block">
        <span class="brand">Lets Test!</span>
        <span class="tag muted">CAPS-based diagnostic placement tools</span>
      </div>
      <div class="spacer"></div>
      <button class="btn secondary small" onclick="shellLogout()">Sign out</button>
    </div>
    <div class="shell-disclaimer">${DISCLAIMER_TEXT}</div>
    <div class="shell-tabs">
      ${SUBJECTS.map(s => `<button class="${s.id===active.id?'active':''}" onclick="shellSelectSubject('${s.id}')">${s.label}</button>`).join("")}
    </div>
    <div class="shell-frame-wrap">
      <iframe src="${active.src}" title="${active.label}"></iframe>
    </div>
  `;
}

shellRoute();
