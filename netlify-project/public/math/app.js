/* ============================================================
   Lets Math! - a Mathematics diagnostic/placement tool, sibling to the
   Reading and Phonics Assessment tool (dsetletsread.netlify.app) and its
   Afrikaans version (onslees.netlify.app). Same examiner/learner console
   architecture, same Netlify Functions + Blobs backend, same design system
   (public/styles.css, copied unchanged from the reading tool).

   SCOPE: Grade R (Reception year) through Grade 7 - Foundation Phase and
   Intermediate Phase only, by design. Grade R is represented internally
   as grade 0 (see GRADE_RANGE and gradeLabel() below) so it sorts
   correctly as the lowest rung of each area's basal/ceiling climb, and is
   displayed as "Grade R" everywhere. Grade R's digital items are all
   tap-to-choose, never typed, since CAPS does not expect a Reception-year
   child to read/write independently yet. Senior Phase (Gr 8-9) content
   was authored and verified earlier but is deliberately out of scope now
   (see gen_content.py's SHIPPED_GRADES) - it stays in the source file in
   case the range is ever extended again.

   CONTENT NOTE: the five content areas below (Numbers, Operations and
   Relationships / "Number Sense"; Patterns, Functions and Algebra; Space
   and Shape; Measurement; Data Handling) and their grade weightings follow
   the official CAPS Mathematics documents (Foundation Phase Gr R-3,
   Intermediate Phase Gr 4-6, education.gov.za). The actual test ITEMS
   below are original material written to match those CAPS benchmark
   skills - they are not a transcription of any official CAPS question
   bank (CAPS itself does not publish one). Please check them against
   your own CAPS/DBE resources before relying on them for a formal
   placement decision - see MATH_CONTENT_NOTE below, shown on the report
   too.

   METHODOLOGY NOTE: each of the five content areas runs its own
   basal/ceiling climb (test up from a pass, down from a ceiling, exactly
   like the reading tool's spelling and graded word list), so each area
   gets its own placement grade. The overall "Lets Math! placement" on the
   report is a weighted average of the five, with Number Sense weighted
   most heavily (see AREA_META below) - per your own instruction that
   number sense should hold the most weight throughout, rather than
   shifting per grade the way CAPS's own content-area time allocations do
   (CAPS itself weights Algebra, not Numbers, most heavily by Grade 9 -
   moot here since Letsmath stops at Grade 7, but worth knowing).
   ============================================================ */

const MATH_CONTENT_NOTE = "These Mathematics items are original material written to match the official CAPS content-area benchmarks for each grade (education.gov.za), not a transcription of any official CAPS question bank - CAPS itself does not publish one. Please check them against your own CAPS/DBE resources before relying on them for a formal placement decision.";

/* ============================================================
   Content areas
   ============================================================ */
const AREA_META = {
  numbersense: { label: "Number Sense", shortLabel: "Number Sense", mode: "oral", weight: 0.40, itemCount: 10, passAt: 7, failAt: 3, prefix: null,
    blurb: "Numbers, Operations and Relationships. Read each item aloud and mark the learner's spoken answer correct or incorrect - no learner device needed." },
  patterns: { label: "Patterns, Functions and Algebra", shortLabel: "Patterns", mode: "digital", weight: 0.15, itemCount: 6, passAt: 4, failAt: 2, prefix: "P",
    blurb: "Copying, extending and describing number and shape patterns." },
  shape: { label: "Space and Shape", shortLabel: "Space and Shape", mode: "digital", weight: 0.15, itemCount: 6, passAt: 4, failAt: 2, prefix: "H",
    blurb: "2-D shapes, 3-D objects, position and symmetry." },
  measurement: { label: "Measurement", shortLabel: "Measurement", mode: "digital", weight: 0.15, itemCount: 6, passAt: 4, failAt: 2, prefix: "M",
    blurb: "Length, mass, capacity, time and money." },
  data: { label: "Data Handling", shortLabel: "Data Handling", mode: "digital", weight: 0.15, itemCount: 6, passAt: 4, failAt: 2, prefix: "D" ,
    blurb: "Collecting, sorting, representing and interpreting data." }
};
const AREA_ORDER = ["numbersense", "patterns", "shape", "measurement", "data"];
const DIGITAL_AREAS = AREA_ORDER.filter(a => AREA_META[a].mode === "digital");
// Letsmath covers Grade R (Reception year) through Grade 7 - Foundation
// Phase and Intermediate Phase only. Grade R is represented internally as
// 0 (so it sorts correctly as the lowest rung of the basal/ceiling climb,
// and MATH_ITEMS/session score keys line up with it) and displayed as
// "Grade R" everywhere via gradeLabel() below.
const GRADE_RANGE = [0,1,2,3,4,5,6,7];
function gradeLabel(g){
  if(g == null) return "";
  const n = typeof g === "number" ? g : parseFloat(g);
  if(n === 0) return "R";
  return String(g);
}

/* ============================================================
   Helpers (identical in spirit to the reading tool's)
   ============================================================ */
function escapeHtml(s){
  return String(s==null?"":s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ============================================================
   Visual aids for the learner-facing (child's own device) screen only.
   CAPS expects concrete/pictorial work well before a child reads words
   independently, especially at Grade R - so a pattern like "circle,
   square, circle, square" has to be SEEN as shapes, not read as text.
   This never changes the underlying prompt/options/answer data (the
   examiner's reference booklet, response sheets and reports still show
   plain text, which is correct for an adult reading on paper) - it only
   adds a picture layer on top, purely in how the learner's own screen
   renders a recognised word or short phrase. Geometric shapes and size/
   colour swatches use fixed hex colours rather than the app's theme
   variables on purpose: several of those variables swap to light tones
   in dark mode (see the reading-sheet fix above) and a shape icon must
   stay the same real colour on every device.
   ============================================================ */
function _svgIcon(inner, vb){
  return `<svg viewBox="0 0 ${vb||48} ${vb||48}" width="100%" height="100%" aria-hidden="true" focusable="false">${inner}</svg>`;
}
const ICON_MAP = {
  // Pure geometric shapes - the core of the Grade R/1 "no words in a
  // pattern" fix.
  "circle": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#189E71"/>`),
  "square": _svgIcon(`<rect x="6" y="6" width="36" height="36" rx="4" fill="#C97B4A"/>`),
  "triangle": _svgIcon(`<polygon points="24,6 44,42 4,42" fill="#2E6FBA"/>`),
  "rectangle": _svgIcon(`<rect x="3" y="12" width="42" height="24" rx="4" fill="#8C6FB0"/>`),
  "star": _svgIcon(`<polygon points="24,3 29.6,17.6 45,18.8 33.2,28.6 37,43.6 24,35.2 11,43.6 14.8,28.6 3,18.8 18.4,17.6" fill="#D9A62E"/>`),
  "moon": _svgIcon(`<path d="M30,4 A20,20 0 1 0 30,44 A15,20 0 0 1 30,4 Z" fill="#5B6B8C"/>`),
  "sun": _svgIcon(`<g fill="#E8A33D"><circle cx="24" cy="24" r="11"/><g stroke="#E8A33D" stroke-width="3" stroke-linecap="round"><line x1="24" y1="2" x2="24" y2="9"/><line x1="24" y1="39" x2="24" y2="46"/><line x1="2" y1="24" x2="9" y2="24"/><line x1="39" y1="24" x2="46" y2="24"/><line x1="8" y1="8" x2="13" y2="13"/><line x1="35" y1="35" x2="40" y2="40"/><line x1="40" y1="8" x2="35" y2="13"/><line x1="13" y1="35" x2="8" y2="40"/></g></g>`),
  "heart": _svgIcon(`<path d="M24,42 C8,30 4,20 10,12 C14,6 22,7 24,16 C26,7 34,6 38,12 C44,20 40,30 24,42 Z" fill="#D1687A"/>`),
  // Size, shown as an actual size difference rather than the words
  // "big"/"small" - both render the same shape, just scaled.
  "big": _svgIcon(`<circle cx="24" cy="24" r="22" fill="#189E71"/>`),
  "small": _svgIcon(`<circle cx="24" cy="24" r="10" fill="#189E71"/>`),
  // Colour, shown as the actual colour rather than its name.
  "red": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#D1453B"/>`),
  "blue": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#2E6FBA"/>`),
  "green": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#2F9E52"/>`),
  // 3-D objects (Space and Shape, Grade R): a ball/sphere vs a box/cube.
  "ball shape": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#C97B4A"/><ellipse cx="18" cy="17" rx="7" ry="4" fill="#fff" opacity="0.35"/>`),
  "box shape": _svgIcon(`<polygon points="10,16 30,10 42,16 22,22" fill="#8C6FB0"/><polygon points="10,16 22,22 22,40 10,34" fill="#6F4F94"/><polygon points="22,22 42,16 42,34 22,40" fill="#7A5AA3"/>`),
  // 3-D object names used from Grade 1 up (Space and Shape). Sphere and
  // cube reuse the ball/box look above since that is what they are;
  // prism gets its own box so two "box-shaped" answer options in the
  // same item still look like two different buttons.
  "sphere": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#C97B4A"/><ellipse cx="18" cy="17" rx="7" ry="4" fill="#fff" opacity="0.35"/>`),
  "cube": _svgIcon(`<polygon points="10,16 30,10 42,16 22,22" fill="#8C6FB0"/><polygon points="10,16 22,22 22,40 10,34" fill="#6F4F94"/><polygon points="22,22 42,16 42,34 22,40" fill="#7A5AA3"/>`),
  "prism": _svgIcon(`<polygon points="6,20 26,12 42,18 22,26" fill="#4A7C9E"/><polygon points="6,20 22,26 22,42 6,36" fill="#345A74"/><polygon points="22,26 42,18 42,34 22,42" fill="#3D6D8C"/>`),
  "cone": _svgIcon(`<ellipse cx="24" cy="40" rx="16" ry="5" fill="#8C5A2E"/><polygon points="24,5 9,38 39,38" fill="#C97B4A"/>`),
  "cylinder": _svgIcon(`<rect x="8" y="10" width="32" height="26" fill="#189E71"/><ellipse cx="24" cy="36" rx="16" ry="5" fill="#0E7A58"/><ellipse cx="24" cy="10" rx="16" ry="5" fill="#3FB386"/>`),
  "pyramid": _svgIcon(`<polygon points="24,4 6,38 42,38" fill="#D9A62E"/><polygon points="24,4 42,38 48,33" fill="#AD8415"/>`),
  // Short actions/movement pattern (clap, stomp, clap, stomp...) and
  // concrete nouns from the Measurement and Data items - plain emoji
  // here rather than custom art, since these are already clear,
  // universally-recognised pictures in their own right.
  "clap": "👏", "stomp": "👣", "jump": "🦘",
  "pencil": "✏️", "car": "🚗", "feather": "🪶", "stone": "🪨",
  "teaspoon": "🥄", "bucket": "🪣", "worm": "🐛", "snake": "🐍",
  "apple": "🍎", "banana": "🍌", "ball": "⚽", "box": "📦",
  "sweets": "🍬", "sweet": "🍬",
  // Time-of-day, reusing the sun/moon shapes already built above.
  "wake up": _svgIcon(`<g fill="#E8A33D"><circle cx="24" cy="24" r="11"/><g stroke="#E8A33D" stroke-width="3" stroke-linecap="round"><line x1="24" y1="2" x2="24" y2="9"/><line x1="24" y1="39" x2="24" y2="46"/><line x1="2" y1="24" x2="9" y2="24"/><line x1="39" y1="24" x2="46" y2="24"/><line x1="8" y1="8" x2="13" y2="13"/><line x1="35" y1="35" x2="40" y2="40"/><line x1="40" y1="8" x2="35" y2="13"/><line x1="13" y1="35" x2="8" y2="40"/></g></g>`),
  "go to sleep": _svgIcon(`<path d="M30,4 A20,20 0 1 0 30,44 A15,20 0 0 1 30,4 Z" fill="#5B6B8C"/>`),
  // Grade 1-4 Measurement/Data concrete nouns, same approach as above -
  // plain emoji where one exists and already reads clearly.
  "rope": "🪢", "brick": "🧱", "cup": "🥛",
  "breakfast": "🍳", "supper": "🍽️",
  "pear": "🍐", "orange": "🍊"
};
// Looks up a word/short phrase for a learner-facing icon: lowercases,
// strips a leading "a "/"an "/"the " and trailing punctuation, then
// tries the whole phrase before falling back to its last word (so "a
// pencil" and "pencil" both find the pencil icon). Returns null (not a
// blank string) when nothing matches, so callers can fall back to text.
function iconForToken(raw){
  if(raw == null) return null;
  let t = String(raw).trim().toLowerCase().replace(/^(a|an|the)\s+/,'').replace(/[.?!]+$/,'');
  if(ICON_MAP[t]) return ICON_MAP[t];
  const words = t.split(/\s+/);
  const last = words[words.length-1];
  if(ICON_MAP[last]) return ICON_MAP[last];
  // Simple plural fallback ("apples" -> "apple", "oranges" -> "orange")
  // so content can use whichever form reads naturally without needing
  // a duplicate ICON_MAP entry for every plural.
  if(t.length > 1 && t.endsWith('s') && ICON_MAP[t.slice(0,-1)]) return ICON_MAP[t.slice(0,-1)];
  if(last.length > 1 && last.endsWith('s') && ICON_MAP[last.slice(0,-1)]) return ICON_MAP[last.slice(0,-1)];
  return null;
}
// For an option like "6 cars" or "9 cars" (Data Handling comparisons),
// shows the actual counted quantity as repeated icons rather than a
// single picture plus the numeral in words - letting a child SEE 6 is
// fewer than 9, not just read it. Only fires for a clean "<number>
// <noun>" option where we have an icon for the (singularised) noun and
// the count is small enough to lay out cleanly; everything else falls
// through to the normal single-icon rendering below.
function quantityIconHtml(raw, size){
  const m = String(raw).trim().match(/^(\d{1,2})\s+([a-zA-Z]+)$/);
  if(!m) return null;
  const count = parseInt(m[1], 10);
  if(count < 1 || count > 12) return null;
  const noun = m[2].toLowerCase();
  const singular = noun.endsWith('s') ? noun.slice(0,-1) : noun;
  const icon = ICON_MAP[noun] || ICON_MAP[singular];
  if(!icon) return null;
  const isEmoji = !icon.startsWith("<svg");
  const unit = Math.max(14, Math.round((size||40) * 0.5));
  const dot = isEmoji
    ? `<span class="visual-icon emoji" style="font-size:${unit}px;line-height:1;">${icon}</span>`
    : `<span class="visual-icon" style="width:${unit}px;height:${unit}px;">${icon}</span>`;
  const row = Array.from({length: count}, () => dot).join("");
  const label = `<span class="visual-caption">${escapeHtml(raw)}</span>`;
  return `<span class="visual-token"><span class="visual-qty-row" style="display:flex;flex-wrap:wrap;gap:1px;max-width:${(size||40)*3}px;justify-content:center;">${row}</span>${label}</span>`;
}
// Renders one visual token (icon if we have one, otherwise the plain
// escaped text) plus a small caption underneath so the word is never
// lost - some children will still be sounding out letters even where a
// picture is the main cue, and it keeps the screen usable for an item a
// future content update doesn't have an icon for yet.
function visualTokenHtml(raw, size){
  const qty = quantityIconHtml(raw, size);
  if(qty) return qty;
  const icon = iconForToken(raw);
  const label = `<span class="visual-caption">${escapeHtml(raw)}</span>`;
  if(!icon) return `<span class="visual-token text-only">${escapeHtml(raw)}</span>`;
  const isEmoji = !icon.startsWith("<svg");
  const box = isEmoji
    ? `<span class="visual-icon emoji" style="font-size:${size||40}px;line-height:1;">${icon}</span>`
    : `<span class="visual-icon" style="width:${size||40}px;height:${size||40}px;">${icon}</span>`;
  return `<span class="visual-token">${box}${label}</span>`;
}
function b64urlEncode(obj){
  const json = JSON.stringify(obj);
  const b64 = btoa(unescape(encodeURIComponent(json)));
  return b64.replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
}
function b64urlDecode(str){
  try{
    let b64 = str.replace(/-/g,'+').replace(/_/g,'/');
    while(b64.length % 4) b64 += '=';
    const json = decodeURIComponent(escape(atob(b64)));
    return JSON.parse(json);
  }catch(e){ return null; }
}
function genCode(len){
  const chars = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";
  let out = "";
  for(let i=0;i<(len||6);i++) out += chars[Math.floor(Math.random()*chars.length)];
  return out;
}
function pct(n,d){ if(!d) return 0; return Math.round((n/d)*1000)/10; }
function nowMs(){ return Date.now(); }
function fmtDate(ms){ try{ return new Date(ms).toLocaleDateString('en-ZA',{day:'numeric',month:'short',year:'numeric'}); }catch(e){ return ""; } }
function ageAtDate(dobStr, atDateStr){
  if(!dobStr || !atDateStr) return null;
  const dob = new Date(dobStr+"T00:00:00");
  const at = new Date(atDateStr+"T00:00:00");
  if(isNaN(dob.getTime()) || isNaN(at.getTime()) || at < dob) return null;
  let years = at.getFullYear() - dob.getFullYear();
  let months = at.getMonth() - dob.getMonth();
  if(at.getDate() < dob.getDate()) months -= 1;
  if(months < 0){ years -= 1; months += 12; }
  return {years, months};
}
function fmtAge(dobStr, atDateStr){
  const a = ageAtDate(dobStr, atDateStr);
  if(!a) return "";
  return a.years+"y "+a.months+"m";
}
function fmtAgeFull(dobStr, atDateStr){
  const a = ageAtDate(dobStr, atDateStr);
  if(!a) return "Not recorded";
  return a.years+" year"+(a.years===1?"":"s")+" "+a.months+" month"+(a.months===1?"":"s");
}
function firstNameOf(fullName){
  const n = (fullName||"").trim();
  if(!n) return "The learner";
  return n.split(/\s+/)[0];
}
function joinList(items){
  if(!items.length) return "";
  if(items.length===1) return items[0];
  if(items.length===2) return items[0]+" and "+items[1];
  return items.slice(0,-1).join(", ")+" and "+items[items.length-1];
}
// Letterhead content shared across all three subjects' reports, matching
// Debby Smit Educational Therapy's own letterhead.
const PRACTICE_CREDENTIALS = [
  "Membership No: WC030",
  "B.Ed (Foundation Phase)",
  "BA Hons (Counselling Psychology)",
  "National Institute for Learning Development Level 1 Certification: NILD Level 1",
  "WCJ-V",
  "Optima School Readiness Assessment accreditation"
];
function letterheadHtml(reportTitle){
  return `
    <div class="report-letterhead">
      <div class="row" style="justify-content:space-between;align-items:flex-start;">
        <div>
          <h1 style="margin:0;font-size:1.8rem;">Debby Smit</h1>
          <p class="muted" style="margin:2px 0 0;letter-spacing:.06em;">NILD EDUCATIONAL THERAPY</p>
        </div>
        <img src="${LOGO_SRC}" style="height:64px;" alt="logo" />
      </div>
      <ul class="credentials-list">${PRACTICE_CREDENTIALS.map(c=>`<li>${escapeHtml(c)}</li>`).join("")}</ul>
      <hr class="letterhead-rule" />
      <p class="confidential-label">CONFIDENTIAL</p>
      <h2 class="report-title">${reportTitle}</h2>
    </div>
  `;
}
function learnerInfoTableHtml(s){
  const age = fmtAgeFull(s.dob, s.assessmentDate || todayDateStr());
  return `
    <table class="learner-info-table">
      <tr><th>Learner:</th><td>${escapeHtml(s.learnerName||"Not recorded")}</td></tr>
      <tr><th>Date of Birth:</th><td>${s.dob?fmtDate(new Date(s.dob+"T00:00:00").getTime()):"Not recorded"}</td></tr>
      <tr><th>Age at Assessment:</th><td>${age}</td></tr>
      <tr><th>Current Grade:</th><td>Grade ${escapeHtml(gradeLabel(s.gradeStart))}</td></tr>
      <tr><th>Date of Assessment:</th><td>${s.assessmentDate?fmtDate(new Date(s.assessmentDate+"T00:00:00").getTime()):fmtDate(nowMs())}</td></tr>
      <tr><th>Report Generated:</th><td>${fmtDate(nowMs())}</td></tr>
      <tr><th>School:</th><td>${escapeHtml(s.school||"Not recorded")}</td></tr>
    </table>
  `;
}
// Generic editable narrative field used across all report sections: shows
// a textarea pre-filled with either the examiner's own saved edit, or (the
// first time a section is viewed) the freshly auto-generated narrative.
// A "Regenerate from scores" button lets the examiner discard their edits
// and pull the auto-generated text back in, without affecting other fields.
let LAST_GENERATED_NARRATIVE = {};
function editableNarrativeField(id, label, autoText, rows, container){
  container = container || "report";
  const saved = STATE.session[container] && STATE.session[container].fields && STATE.session[container].fields[id];
  const value = (saved!=null && saved!=="") ? saved : (autoText||"");
  LAST_GENERATED_NARRATIVE[id] = autoText||"";
  return `
    <div class="report-section">
      <div class="row" style="justify-content:space-between;align-items:baseline;">
        <h3 style="margin:0;">${label}</h3>
        <button class="btn secondary small no-print" onclick="regenerateReportField('${id}','${container}')">Regenerate from scores</button>
      </div>
      <textarea id="rf_${id}" class="report-textarea no-print" rows="${rows||4}" oninput="autoSaveReportField('${id}', this.value, '${container}')">${escapeHtml(value)}</textarea>
      <div class="print-only" style="display:none;white-space:pre-wrap;">${escapeHtml(value)}</div>
    </div>
  `;
}
let reportFieldSaveTimeout = {};
function autoSaveReportField(id, val, container){
  container = container || "report";
  if(!STATE.session[container]) STATE.session[container] = {};
  if(!STATE.session[container].fields) STATE.session[container].fields = {};
  STATE.session[container].fields[id] = val;
  clearTimeout(reportFieldSaveTimeout[id]);
  reportFieldSaveTimeout[id] = setTimeout(() => persistSession(), 600);
}
function regenerateReportField(id, container){
  container = container || "report";
  const val = LAST_GENERATED_NARRATIVE[id] || "";
  const ta = document.getElementById("rf_"+id);
  if(ta) ta.value = val;
  autoSaveReportField(id, val, container);
}
let notesSaveTimeout = null;
function autoSaveNotes(val){
  if(!STATE.session.report) STATE.session.report = {};
  STATE.session.report.notes = val;
  clearTimeout(notesSaveTimeout);
  notesSaveTimeout = setTimeout(() => persistSession(), 600);
}
function todayDateStr(){
  const d = new Date();
  const pad = n => (n<10?"0":"")+n;
  return d.getFullYear()+"-"+pad(d.getMonth()+1)+"-"+pad(d.getDate());
}
function fmtCaptureTime(ts){
  if(!ts) return "";
  const d = new Date(ts);
  const pad = n => (n<10?"0":"")+n;
  return pad(d.getHours())+":"+pad(d.getMinutes())+":"+pad(d.getSeconds());
}
// Normalizes a short typed answer for comparison: trims, lowercases, strips
// punctuation, and - because most answers here are numbers - also strips
// leading zeros and a trailing "." so "08" / "8." / " 8 " all match "8".
function normAnswer(w){
  let s = (w==null?"":String(w)).trim().toLowerCase().replace(/[.,!?;:'"]/g,"");
  if(/^\d+$/.test(s)) s = String(parseInt(s,10));
  return s;
}

/* ============================================================
   Learner codes for the four digital content areas. Number Sense has no
   code at all - it is examiner-only, oral, marked on the console, so
   there is never a reason to send a learner to a device for it.
   A code is {prefix}{grade}, e.g. "P3" (Patterns, Grade 3). Exactly like
   the reading tool, the compound form {code}-{SESSION} ties a learner's
   typing to one open session so two learners' answers can never collide.
   ============================================================ */
function codeForItemSet(area, grade){
  return AREA_META[area].prefix + gradeLabel(grade);
}
const CODE_MAP = {};
(function buildCodeMap(){
  DIGITAL_AREAS.forEach(area => {
    GRADE_RANGE.forEach(g => { CODE_MAP[codeForItemSet(area,g)] = {area, grade:String(g)}; });
  });
})();

/* ============================================================
   Capture: a learner's in-progress or submitted answers for one
   session's one (area, grade) item set, scoped by session code exactly
   like the reading tool so two learners never collide. Netlify Functions
   + Blobs on the backend (netlify/functions/capture.mjs); the examiner's
   console polls every 2.5s rather than getting pushed updates, so there
   is a short, normal delay before typing shows up here.
   ============================================================ */
const API_BASE = "/api/math";
const Capture = {
  async read(session, area, grade){
    if(!session) return null;
    try{
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${area}&grade=${grade}`);
      if(!res.ok) return null;
      return await res.json();
    }catch(e){ return null; }
  },
  async write(session, area, grade, data){
    if(!session) return null;
    try{
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${area}&grade=${grade}`, {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(data)
      });
      if(!res.ok) return null;
      return await res.json();
    }catch(e){ return null; }
  },
  async clear(session, area, grade){
    if(!session) return false;
    try{
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${area}&grade=${grade}`, {method:"DELETE"});
      return res.ok;
    }catch(e){ return false; }
  }
};
async function clearCapture(area, grade){
  const s = STATE.session;
  if(!s) return;
  await Capture.clear(s.code, area, grade);
  STATE.captureCache[area+"_"+grade] = null;
  if(s.scores[area] && s.scores[area][grade]) delete s.scores[area][grade].autoSeen;
  renderConsoleContent();
}
// Applies an already-fetched capture record onto the session's marks for
// one (area, grade), auto-marking each answered item against MATH_ITEMS,
// without stomping a manual override of an item the learner hasn't
// retyped/retapped since. Returns true if anything changed.
function applyDigitalCaptureRecord(area, grade, cap){
  const s = STATE.session;
  if(!s || !cap || !cap.answers) return false;
  const items = (MATH_ITEMS[area] && MATH_ITEMS[area][grade]) || null;
  if(!items) return false;
  if(!s.scores[area]) s.scores[area] = {};
  if(!s.scores[area][grade]) s.scores[area][grade] = {};
  const rec = s.scores[area][grade];
  if(!rec.marks) rec.marks = [];
  if(!rec.autoSeen) rec.autoSeen = [];
  let changed = false;
  cap.answers.forEach((typed,i) => {
    if(typed==null || typed==="") return;
    const seenKey = String(typed);
    if(rec.autoSeen[i] === seenKey) return;
    const item = items[i];
    if(!item) return;
    let correct;
    if(item.type === "choice"){
      correct = (parseInt(typed,10) === item.answer);
    } else {
      correct = (normAnswer(typed) === normAnswer(item.answer));
    }
    rec.marks[i] = correct;
    rec.autoSeen[i] = seenKey;
    changed = true;
  });
  if(changed){
    rec.correct = rec.marks.filter(x=>x===true).length;
    persistSession();
  }
  return changed;
}
function isExaminerTyping(){
  const active = document.activeElement;
  return !!(active && (active.tagName==="TEXTAREA" || (active.tagName==="INPUT" && active.type!=="button")));
}
function stopCapturePolling(){
  if(STATE.capturePollTimer){ clearInterval(STATE.capturePollTimer); STATE.capturePollTimer = null; }
}
function startCapturePolling(area, grade){
  stopCapturePolling();
  if(AREA_META[area].mode !== "digital") return;
  const tick = async () => {
    const s = STATE.session;
    if(!s) return;
    const cap = await Capture.read(s.code, area, grade);
    const cacheKey = area+"_"+grade;
    const prevJson = JSON.stringify(STATE.captureCache[cacheKey] || null);
    STATE.captureCache[cacheKey] = cap;
    const recChanged = JSON.stringify(cap) !== prevJson;
    const scoreChanged = applyDigitalCaptureRecord(area, grade, cap);
    if((recChanged || scoreChanged) && !isExaminerTyping()){
      renderConsoleContent();
    }
  };
  tick();
  STATE.capturePollTimer = setInterval(tick, 2500);
}

/* ============================================================
   Store: session records (learner particulars, every area's marks) live
   in Netlify Blobs behind netlify/functions/sessions.mjs, reached here
   through the /api/sessions redirect in netlify.toml - identical to the
   reading tool, so the same session can be opened from any of the
   examiner's own devices.
   ============================================================ */
const Store = {
  async listSessions(){
    try{
      const res = await fetch(`${API_BASE}/sessions`);
      if(!res.ok) return [];
      return await res.json();
    }catch(e){ return []; }
  },
  async getSession(code){
    try{
      const res = await fetch(`${API_BASE}/sessions?code=${encodeURIComponent(code)}`);
      if(!res.ok) return null;
      return await res.json();
    }catch(e){ return null; }
  },
  async saveSession(sess){
    try{
      const res = await fetch(`${API_BASE}/sessions`, {
        method: "POST",
        headers: {"content-type":"application/json"},
        body: JSON.stringify(sess)
      });
      return res.ok;
    }catch(e){ return false; }
  },
  async deleteSession(code){
    try{
      const res = await fetch(`${API_BASE}/sessions?code=${encodeURIComponent(code)}`, {method:"DELETE"});
      return res.ok;
    }catch(e){ return false; }
  }
};
function setSaveStatus(ok){
  STATE.saveStatus = ok ? "saved" : "error";
  const el = document.getElementById("saveStatusChip");
  if(!el) return;
  if(ok){ el.className = "chip"; el.textContent = "Saved"; }
  else { el.className = "chip locked"; el.textContent = "Not saved - check your connection"; }
}

/* ============================================================
   App state
   ============================================================ */
const STATE = {
  examinerAuthed: (localStorage.getItem("dspet_examiner_authed") === "1"),
  session: null,
  standalonePage: null, // "reference" or "responsesheets" when viewing a printable booklet outside a session
  navSection: "overview",
  areaGrade: {},        // area -> currently selected grade (string) for that area's panel
  timers: {},
  learnerItem: null,     // {area, grade, sc?} once a learner code/link has been opened on this device
  learnerSessionCode: null,
  saveStatus: "unknown",
  captureCache: {},
  capturePollTimer: null
};
function baseUrl(){
  return location.origin + location.pathname;
}

/* ============================================================
   Router
   ============================================================ */
function route(){
  const hash = location.hash || "";
  const app = document.getElementById("app");
  if(hash.indexOf("#learner=") === 0){
    const payload = b64urlDecode(hash.slice(9));
    STATE.learnerSessionCode = (payload && payload.sc) ? payload.sc : null;
    renderLearner(app, payload);
    return;
  }
  if(STATE.learnerItem){
    STATE.learnerSessionCode = STATE.learnerItem.sc || null;
    renderLearner(app, {area: STATE.learnerItem.area, grade: STATE.learnerItem.grade, sc: STATE.learnerItem.sc});
    return;
  }
  if(!STATE.examinerAuthed){
    renderExaminerLogin(app);
    return;
  }
  if(STATE.standalonePage === "reference"){
    renderReferenceStandalone(app);
    return;
  }
  if(STATE.standalonePage === "responsesheets"){
    renderResponseSheetsStandalone(app);
    return;
  }
  if(STATE.session){
    renderConsole(app);
  } else {
    renderExaminerHome(app);
  }
}
window.addEventListener("hashchange", route);
document.addEventListener("DOMContentLoaded", route);

/* ============================================================
   Learner view: reads ONLY the URL (plus the live capture channel it
   writes into), never the examiner's own session store.
   ============================================================ */
function renderLearner(app, payload){
  let inner = "";
  if(!payload || !payload.area || !payload.grade){
    inner = '<div class="err">That code or link isn\'t valid. Please ask your examiner for a fresh one.</div>';
  } else {
    inner = learnerContentHtml(payload);
  }
  app.innerHTML = `
    <div class="app">
      <div class="topbar no-print">
        <img class="logo" src="${LOGO_SRC}" alt="Debby Smit Educational Therapy logo" />
        <div class="title-block">
          <div class="brand">Lets Math!</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="col" style="align-items:center;width:100%;">
          ${inner}
          ${STATE.learnerItem ? `<button class="btn secondary small no-print" style="margin-top:16px;" onclick="STATE.learnerItem=null; STATE.learnerSessionCode=null; route();">${STATE.examinerAuthed ? "Done - back to examiner console" : "Enter a different code"}</button>` : ''}
        </div>
      </div>
    </div>
  `;
}
function noSessionNoticeHtml(){
  if(STATE.learnerSessionCode) return "";
  return '<div class="err" style="margin:8px 0;">This code or link isn\'t tied to an assessment session, so what you answer here won\'t reach your examiner. Please ask them for the correct code or link.</div>';
}
function learnerContentHtml(payload){
  const area = payload.area, grade = payload.grade;
  const meta = AREA_META[area];
  if(!meta){
    return '<div class="err">This activity could not be found.</div>';
  }
  const items = (MATH_ITEMS[area] && MATH_ITEMS[area][grade]) || null;
  if(!items){
    return `<div class="reading-sheet"><h2>${escapeHtml(meta.label)}</h2><p>Grade ${escapeHtml(grade)} isn't ready here yet. Please ask your examiner for a different code.</p></div>`;
  }
  const rows = items.map((it,i) => {
    if(it.type === "choice"){
      // A pattern item can carry an explicit "sequence" array (e.g.
      // ["circle","square","circle","square","?"]) so the pattern itself
      // is SEEN as shapes, not read as a sentence - CAPS expects this to
      // be concrete/pictorial, especially at Grade R. Items without a
      // sequence (most Shape/Measurement/Data items) just show their
      // ordinary prompt text, with icons only on the answer buttons.
      const sequenceHtml = it.sequence ? `
        <div class="row pattern-sequence" style="gap:10px;flex-wrap:wrap;margin:4px 0;">
          ${it.sequence.map(tok => tok === "?"
            ? `<span class="visual-token"><span class="visual-icon pattern-blank" style="width:40px;height:40px;">?</span></span>`
            : visualTokenHtml(tok, 40)
          ).join("")}
        </div>` : "";
      const promptLabel = it.sequence ? "What comes next?" : it.prompt;
      return `<div class="col" style="gap:6px;width:100%;max-width:460px;">
        <label style="font-size:1.05rem;">${i+1}. ${escapeHtml(promptLabel)}</label>
        ${sequenceHtml}
        <div class="row" id="choicerow-${i}" style="gap:8px;flex-wrap:wrap;">
          ${it.options.map((opt,oi) => `<button type="button" class="btn secondary small icon-choice-btn" data-idx="${oi}" onclick="captureChoiceAnswer(${i},${oi},this)">${visualTokenHtml(opt, 36)}</button>`).join("")}
        </div>
      </div>`;
    }
    return `<div class="row" style="width:100%;max-width:460px;"><label style="flex:1;font-size:1.05rem;">${i+1}. ${escapeHtml(it.prompt)}</label><input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:120px;" oninput="captureShortAnswer(${i},this.value)" /></div>`;
  }).join("");
  return `<div class="reading-sheet"><h2>${escapeHtml(meta.label)}</h2>${noSessionNoticeHtml()}<p style="font-size:1.05rem;">Grade ${escapeHtml(grade)}. Answer each question below.</p>
    <div class="col" style="gap:14px;width:100%;align-items:flex-start;">${rows}</div></div>`;
}

/* ============================================================
   Learner-side writers: debounced, whole-record flushes (never a
   read-modify-write against the server) exactly like the reading tool's
   spelling capture, keyed by the item index so two rapid answers can't
   race each other into a lost update.
   ============================================================ */
const _captureTimers = {};
function _debounceCaptureWrite(timerKey, fn){
  clearTimeout(_captureTimers[timerKey]);
  _captureTimers[timerKey] = setTimeout(fn, 250);
}
const _answerBuffer = {}; // "area_grade" -> array of typed/selected answers so far
function _answerKey(){ return STATE.learnerItem ? (STATE.learnerItem.area+"_"+STATE.learnerItem.grade) : null; }
function _flushAnswers(){
  if(!STATE.learnerSessionCode || !STATE.learnerItem) return;
  const key = _answerKey();
  _debounceCaptureWrite(key, () => {
    Capture.write(STATE.learnerSessionCode, STATE.learnerItem.area, STATE.learnerItem.grade, {answers: (_answerBuffer[key]||[]).slice()});
  });
}
function captureShortAnswer(idx, val){
  const key = _answerKey();
  if(!key) return;
  if(!_answerBuffer[key]) _answerBuffer[key] = [];
  _answerBuffer[key][idx] = val;
  _flushAnswers();
}
function captureChoiceAnswer(idx, optionIdx, btnEl){
  const key = _answerKey();
  if(!key) return;
  if(!_answerBuffer[key]) _answerBuffer[key] = [];
  _answerBuffer[key][idx] = optionIdx;
  _flushAnswers();
  const row = document.getElementById("choicerow-"+idx);
  if(row){
    Array.from(row.children).forEach(b => b.classList.remove("clay"));
    if(btnEl) btnEl.classList.add("clay");
  }
}

/* ============================================================
   Examiner: login gate
   ============================================================ */
function renderExaminerLogin(app){
  app.innerHTML = `
    <div class="app">
      <div class="topbar">
        <img class="logo" src="${LOGO_SRC}" alt="logo" />
        <div class="title-block">
          <div class="brand">Lets Math!</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="card narrow col">
          <h2>Sign in</h2>
          <p class="muted">Assessor: enter your password below. Learner: enter the short code your assessor gave you.</p>
          <input type="text" id="pwInput" placeholder="Password or code" autocomplete="off" autocapitalize="characters" />
          <div id="pwErr"></div>
          <button class="btn" onclick="tryExaminerLogin()">Continue</button>
          <p class="note">A password or code here is a light gate to keep casual visitors out. It is not high-security encryption, so do not rely on it to protect sensitive records on a shared computer.</p>
        </div>
      </div>
    </div>
  `;
}
function tryExaminerLogin(){
  const val = document.getElementById("pwInput").value.trim();
  if(val === EXAMINER_PASSWORD){
    STATE.examinerAuthed = true;
    localStorage.setItem("dspet_examiner_authed","1");
    route();
    return;
  }
  const upper = val.toUpperCase();
  const item = CODE_MAP[upper];
  if(item){
    STATE.learnerItem = {area:item.area, grade:item.grade};
    STATE.learnerSessionCode = null;
    route();
    return;
  }
  const dash = upper.indexOf("-");
  if(dash > 0){
    const baseItem = CODE_MAP[upper.slice(0, dash)];
    const sessionPart = upper.slice(dash+1);
    if(baseItem && sessionPart){
      STATE.learnerItem = Object.assign({}, baseItem, {sc: sessionPart});
      STATE.learnerSessionCode = sessionPart;
      route();
      return;
    }
  }
  document.getElementById("pwErr").innerHTML = '<div class="err">That password or code isn\'t right. Try again.</div>';
}
function examinerLogout(){
  stopCapturePolling();
  STATE.examinerAuthed = false;
  STATE.session = null;
  localStorage.removeItem("dspet_examiner_authed");
  route();
}

/* ============================================================
   Examiner: home (session list + new assessment)
   ============================================================ */
async function renderExaminerHome(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(false)}
      <div class="content">
        <div class="grid" style="max-width:900px;margin:0 auto;">
          <div class="card">
            <h2>Start a new assessment</h2>
            <div class="row">
              <div class="col"><label>Learner's name</label><input type="text" id="newLearnerName" placeholder="e.g. Lindiwe M." /></div>
              <div class="col"><label>Current grade</label>
                <select id="newLearnerGrade">
                  ${GRADE_RANGE.map(g=>`<option value="${g}">Grade ${gradeLabel(g)}</option>`).join("")}
                </select>
              </div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col"><label>Date of birth</label><input type="date" id="newLearnerDob" /></div>
              <div class="col"><label>Date of assessment</label><input type="date" id="newAssessmentDate" value="${todayDateStr()}" /></div>
            </div>
            <div class="row" style="margin-top:10px;">
              <div class="col" style="flex:1;"><label>School</label><input type="text" id="newLearnerSchool" placeholder="e.g. Deliucim Private School" /></div>
            </div>
            <p class="muted" style="font-size:.85rem;">Date of birth and assessment date are used to work out the learner's chronological age, so the report can compare their results to both their current grade and their age.</p>
            <div class="row" style="margin-top:10px;">
              <button class="btn" onclick="createSession()">Create session</button>
            </div>
            <p class="note">Each content area below runs its own test-up/test-down climb, starting from this learner's current grade. ${escapeHtml(MATH_CONTENT_NOTE)}</p>
          </div>
          <div class="card">
            <h2>Reference booklet</h2>
            <p class="muted">A printable, examiner-only copy of every Number Sense question, and every Patterns, Space and Shape, Measurement and Data Handling item with its answer, across Grade R-7. Nothing on it ever goes to a learner. Print it once and keep it with your kit.</p>
            <button class="btn secondary small" onclick="openReferenceStandalone()">Open reference booklet</button>
          </div>
          <div class="card">
            <h2>Learner response booklet</h2>
            <p class="muted">Blank, paper-based answer sheets for Patterns, Space and Shape, Measurement and Data Handling, one per grade, for when you'd rather have the learner write on paper than use a device. No answers are printed on these. Number Sense has no sheet, since it is always oral and marked by you directly.</p>
            <button class="btn secondary small" onclick="openResponseSheetsStandalone()">Open response booklet</button>
          </div>
          <div class="card">
            <h2>Previous sessions</h2>
            <div id="sessionList" class="col">Loading…</div>
          </div>
        </div>
      </div>
    </div>
  `;
  const sessions = await Store.listSessions();
  const list = document.getElementById("sessionList");
  if(!sessions.length){
    list.innerHTML = '<p class="muted">No sessions yet. Create your first one above.</p>';
  } else {
    list.innerHTML = sessions.map(s => `
      <div class="row" style="justify-content:space-between;border-bottom:1px solid var(--line);padding:8px 0;">
        <div>
          <strong>${escapeHtml(s.learnerName||"Unnamed learner")}</strong>
          <span class="muted"> · started Grade ${escapeHtml(gradeLabel(s.gradeStart))} · ${fmtDate(s.createdAt)} · code ${escapeHtml(s.code)}</span>
        </div>
        <div class="row">
          <button class="btn small" onclick="openSession('${s.code}')">Open</button>
        </div>
      </div>
    `).join("");
  }
}
async function createSession(){
  const name = document.getElementById("newLearnerName").value.trim() || "Unnamed learner";
  const grade = document.getElementById("newLearnerGrade").value;
  const dob = document.getElementById("newLearnerDob").value || "";
  const assessmentDate = document.getElementById("newAssessmentDate").value || todayDateStr();
  const school = document.getElementById("newLearnerSchool").value.trim() || "";
  const code = genCode(6);
  const scores = {};
  AREA_ORDER.forEach(a => { scores[a] = {}; });
  const sess = {
    code, learnerName: name, gradeStart: grade, dob, assessmentDate, school,
    createdAt: nowMs(), status: "active",
    scores
  };
  const ok = await Store.saveSession(sess);
  setSaveStatus(ok);
  STATE.session = sess;
  STATE.navSection = "overview";
  route();
}
async function openSession(code){
  stopCapturePolling();
  const sess = await Store.getSession(code);
  if(sess){
    AREA_ORDER.forEach(a => { if(!sess.scores[a]) sess.scores[a] = {}; });
    STATE.session = sess;
    STATE.navSection = "overview";
    setSaveStatus(true);
    route();
  }
}
function closeSession(){
  stopCapturePolling();
  STATE.session = null;
  route();
}
async function persistSession(){
  if(!STATE.session) return;
  const ok = await Store.saveSession(STATE.session);
  setSaveStatus(ok);
}
function openReferenceStandalone(){
  STATE.standalonePage = "reference";
  route();
}
function closeReferenceStandalone(){
  STATE.standalonePage = null;
  route();
}
function renderReferenceStandalone(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(false)}
      <div class="content">
        <button class="btn secondary small no-print" onclick="closeReferenceStandalone()">&larr; Back</button>
        ${mathReferenceBookletHtml()}
      </div>
    </div>
  `;
}
function openResponseSheetsStandalone(){
  STATE.standalonePage = "responsesheets";
  route();
}
function closeResponseSheetsStandalone(){
  STATE.standalonePage = null;
  route();
}
function renderResponseSheetsStandalone(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(false)}
      <div class="content">
        <button class="btn secondary small no-print" onclick="closeResponseSheetsStandalone()">&larr; Back</button>
        ${mathResponseSheetsHtml()}
      </div>
    </div>
  `;
}
function saveStatusChipHtml(){
  if(STATE.saveStatus === "saved") return `<span class="chip" id="saveStatusChip">Saved</span>`;
  if(STATE.saveStatus === "error") return `<span class="chip locked" id="saveStatusChip">Not saved - check your connection</span>`;
  return `<span class="chip waiting" id="saveStatusChip">Connecting…</span>`;
}
function topbarHtml(showSession){
  return `
    <div class="topbar">
      <img class="logo" src="${LOGO_SRC}" alt="logo" />
      <div class="title-block">
        <div class="brand">Lets Math!</div>
        <div class="tag">Debby Smit Educational Therapy</div>
      </div>
      <div class="spacer"></div>
      ${showSession && STATE.session ? saveStatusChipHtml() : ''}
      ${showSession && STATE.session ? `<span class="chip waiting">${escapeHtml(STATE.session.learnerName)}</span>` : ''}
      <button class="btn secondary small" onclick="examinerLogout()">Sign out</button>
    </div>
  `;
}

/* ============================================================
   Examiner: console (session open)
   ============================================================ */
const NAV = [
  {group:"Session", items:[["overview","Overview"]]},
  {group:"Resources", items:[["reference","Reference Booklet (print)"],["responsesheets","Learner Response Booklet (print)"]]},
  {group:"Content areas", items: AREA_ORDER.map(a => [a, AREA_META[a].shortLabel])},
  {group:"Wrap up", items:[["report","Report"],["isp","Support Plan"]]}
];
async function renderConsole(app){
  app.innerHTML = `
    <div class="app">
      ${topbarHtml(true)}
      <div class="shell">
        <div class="sidebar no-print">
          <button class="navitem" onclick="closeSession()">&larr; <span class="label-text">All sessions</span></button>
          ${NAV.map(g => `
            <div class="navgroup-label">${g.group}</div>
            ${g.items.map(([key,label]) => `<button class="navitem ${STATE.navSection===key?'active':''}" onclick="setNav('${key}')"><span class="label-text">${label}</span></button>`).join("")}
          `).join("")}
        </div>
        <div class="content" id="content"></div>
      </div>
    </div>
  `;
  renderConsoleContent();
}
function setNav(key){
  STATE.navSection = key;
  if(AREA_META[key] && AREA_META[key].mode === "digital"){
    startCapturePolling(key, STATE.areaGrade[key] || STATE.session.gradeStart);
  } else {
    stopCapturePolling();
  }
  renderConsole(document.getElementById("app"));
}
function renderConsoleContent(){
  const c = document.getElementById("content");
  const s = STATE.session;
  if(!s){ c.innerHTML = ""; return; }
  if(STATE.navSection === "overview"){ c.innerHTML = overviewHtml(s); return; }
  if(STATE.navSection === "reference"){ c.innerHTML = mathReferenceBookletHtml(); return; }
  if(STATE.navSection === "responsesheets"){ c.innerHTML = mathResponseSheetsHtml(); return; }
  if(STATE.navSection === "report"){ c.innerHTML = reportHtml(s); return; }
  if(STATE.navSection === "isp"){ c.innerHTML = ispHtml(s); return; }
  if(AREA_META[STATE.navSection]){
    c.innerHTML = (AREA_META[STATE.navSection].mode === "oral") ? oralAreaHtml(STATE.navSection) : digitalAreaHtml(STATE.navSection);
    return;
  }
  c.innerHTML = "";
}

/* ============================================================
   Overview
   ============================================================ */
function overviewHtml(s){
  const age = fmtAge(s.dob, s.assessmentDate);
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">Overview</h2>
      <div class="card">
        <div class="row" style="justify-content:space-between;flex-wrap:wrap;">
          <div class="col">
            <label>Learner's name</label>
            <input type="text" id="editLearnerName" value="${escapeHtml(s.learnerName)}" />
          </div>
          <div class="col">
            <label>Current grade</label>
            <select id="editLearnerGrade">${GRADE_RANGE.map(g=>`<option value="${g}" ${String(g)===String(s.gradeStart)?'selected':''}>Grade ${gradeLabel(g)}</option>`).join("")}</select>
          </div>
        </div>
        <div class="row" style="margin-top:10px;flex-wrap:wrap;">
          <div class="col"><label>Date of birth</label><input type="date" id="editLearnerDob" value="${escapeHtml(s.dob||"")}" /></div>
          <div class="col"><label>Date of assessment</label><input type="date" id="editAssessmentDate" value="${escapeHtml(s.assessmentDate||"")}" /></div>
          <div class="col"><label>Age at assessment</label><div class="muted" style="padding-top:10px;">${age || "—"}</div></div>
        </div>
        <div class="row" style="margin-top:10px;flex-wrap:wrap;">
          <div class="col" style="flex:1;"><label>School</label><input type="text" id="editLearnerSchool" value="${escapeHtml(s.school||"")}" placeholder="e.g. Deliucim Private School" /></div>
        </div>
        <div class="row" style="margin-top:10px;">
          <button class="btn small" onclick="saveParticulars()">Save details</button>
        </div>
      </div>
      <div class="card">
        <h3>Session code</h3>
        <p class="muted">Code: <strong>${escapeHtml(s.code)}</strong>. Each content area's learner code or link (shown on that area's tab) is tied to this code, so a learner's typing always comes back to this session, never a different one.</p>
      </div>
      <div class="card">
        <h3>Danger zone</h3>
        <button class="btn danger small" onclick="deleteThisSession()">Delete this session</button>
      </div>
    </div>
  `;
}
function saveParticulars(){
  const s = STATE.session;
  s.learnerName = document.getElementById("editLearnerName").value.trim() || "Unnamed learner";
  s.gradeStart = document.getElementById("editLearnerGrade").value;
  s.dob = document.getElementById("editLearnerDob").value || "";
  s.assessmentDate = document.getElementById("editAssessmentDate").value || todayDateStr();
  s.school = document.getElementById("editLearnerSchool").value.trim() || "";
  persistSession();
  renderConsole(document.getElementById("app"));
}
async function deleteThisSession(){
  const s = STATE.session;
  if(!s) return;
  if(!confirm(`Delete the session for ${s.learnerName}? This cannot be undone.`)) return;
  await Store.deleteSession(s.code);
  STATE.session = null;
  route();
}

/* ============================================================
   Number Sense: oral, examiner-marked, no learner device at all.
   ============================================================ */
function oralAreaHtml(area){
  const s = STATE.session;
  const meta = AREA_META[area];
  if(!s.scores[area]) s.scores[area] = {};
  const grade = STATE.areaGrade[area] || s.gradeStart;
  const items = (MATH_ITEMS[area] && MATH_ITEMS[area][grade]) || null;
  const rec = s.scores[area][grade] || {};
  const marks = rec.marks || [];
  const correctCount = marks.filter(x=>x===true).length;
  const placement = placementGradeFor(area);
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">${escapeHtml(meta.label)}</h2>
      <p class="note">${escapeHtml(meta.blurb)} Read each item aloud, let the learner answer, then mark it correct or incorrect.</p>
      <div class="card">
        <label>Grade-level item set</label>
        <select onchange="changeAreaGrade('${area}',this.value)">
          ${GRADE_RANGE.map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Grade ${gradeLabel(g)}</option>`).join("")}
        </select>
        ${!items ? `<p class="muted" style="margin-top:14px;">Grade ${escapeHtml(grade)} items for ${escapeHtml(meta.shortLabel)} aren't written yet - coming in a follow-up update.</p>` : `
        ${items.map((it,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(it.prompt)} <span class="muted" style="font-size:.85rem;">(answer: ${escapeHtml(it.type==='choice' ? it.options[it.answer] : it.answer)})</span></div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markOralItem('${area}','${grade}',${i},true)" title="Correct">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markOralItem('${area}','${grade}',${i},false)" title="Incorrect">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/${meta.itemCount}</span><span class="lbl">Correct</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,meta.itemCount)}%</span><span class="lbl">Accuracy</span></div>
        </div>`}
      </div>
      <div class="card">
        <h3>Placement guide</h3>
        <p class="muted">${meta.passAt}/${meta.itemCount} or more counts as a pass at that grade (basal); ${meta.failAt}/${meta.itemCount} or fewer counts as a ceiling. Test up from a pass, down from a ceiling, until you find the highest grade the learner passes.</p>
        ${placementTableHtml(area)}
        <p style="margin-top:8px;">${placement!=null ? `<strong>Estimated ${escapeHtml(meta.shortLabel)} grade level: Grade ${gradeLabel(placement)}</strong>` : "Not enough data yet to estimate a grade level for this area."}</p>
      </div>
    </div>
  `;
}
function changeAreaGrade(area, g){
  STATE.areaGrade[area] = g;
  if(AREA_META[area].mode === "digital") startCapturePolling(area, g);
  renderConsoleContent();
}
async function markOralItem(area, grade, i, val){
  const s = STATE.session;
  if(!s.scores[area]) s.scores[area] = {};
  if(!s.scores[area][grade]) s.scores[area][grade] = {};
  const rec = s.scores[area][grade];
  if(!rec.marks) rec.marks = [];
  rec.marks[i] = val;
  rec.correct = rec.marks.filter(x=>x===true).length;
  await persistSession();
  renderConsoleContent();
}

/* ============================================================
   The four digital content areas: Patterns, Space and Shape,
   Measurement, Data Handling. Same learner-code / link mechanism as the
   reading tool's spelling and dictation subtests.
   ============================================================ */
function digitalAreaHtml(area){
  const s = STATE.session;
  const meta = AREA_META[area];
  if(!s.scores[area]) s.scores[area] = {};
  const grade = STATE.areaGrade[area] || s.gradeStart;
  const cap = STATE.captureCache[area+"_"+grade];
  const items = (MATH_ITEMS[area] && MATH_ITEMS[area][grade]) || null;
  const rec = s.scores[area][grade] || {};
  const marks = rec.marks || [];
  const correctCount = marks.filter(x=>x===true).length;
  const placement = placementGradeFor(area);
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">${escapeHtml(meta.label)}</h2>
      <p class="note">${escapeHtml(meta.blurb)} The learner answers on their own device using the code or link below; you can still correct any item yourself.</p>
      <div class="card">
        <label>Grade-level item set</label>
        <select onchange="changeAreaGrade('${area}',this.value)">
          ${GRADE_RANGE.map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Grade ${gradeLabel(g)}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;">
          <button class="btn small" onclick="showLearnerLink('${area}','${grade}')">Show learner code</button>
        </div>
        <div id="linkbox-${area}-${grade}"></div>
        ${!items ? `<p class="muted" style="margin-top:14px;">Grade ${escapeHtml(grade)} items for ${escapeHtml(meta.shortLabel)} aren't written yet - coming in a follow-up update.</p>` : `
        <div class="note" style="margin-top:10px;font-size:.9rem;">
          <div class="row" style="justify-content:space-between;align-items:center;">
            <span class="muted">${cap ? `Digital entry last updated ${fmtCaptureTime(cap.updatedAt)}` : "No digital entry received yet for this grade."}</span>
            <button class="btn secondary small" onclick="clearCapture('${area}','${grade}')">Clear digital entry</button>
          </div>
        </div>
        ${items.map((it,i) => `
          <div class="item-row">
            <div class="item-text"><strong>${i+1}.</strong> ${escapeHtml(it.prompt)}${(cap && cap.answers && cap.answers[i]!=null && cap.answers[i]!=="") ? ` <span class="muted" style="font-size:.85rem;">(answered: "${escapeHtml(it.type==='choice' ? (it.options[cap.answers[i]]||'') : cap.answers[i])}")</span>` : ""}</div>
            <div class="marks">
              <button class="mark-btn correct ${marks[i]===true?'on':''}" onclick="markDigitalItem('${area}','${grade}',${i},true)" title="Correct">&#10003;</button>
              <button class="mark-btn wrong ${marks[i]===false?'on':''}" onclick="markDigitalItem('${area}','${grade}',${i},false)" title="Incorrect">&#10007;</button>
            </div>
          </div>
        `).join("")}
        <div class="score-box" style="margin-top:14px;">
          <div class="score-tile"><span class="num">${correctCount}/${meta.itemCount}</span><span class="lbl">Correct</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,meta.itemCount)}%</span><span class="lbl">Accuracy</span></div>
        </div>`}
      </div>
      <div class="card">
        <h3>Placement guide</h3>
        <p class="muted">${meta.passAt}/${meta.itemCount} or more counts as a pass at that grade (basal); ${meta.failAt}/${meta.itemCount} or fewer counts as a ceiling. Test up from a pass, down from a ceiling, until you find the highest grade the learner passes.</p>
        ${placementTableHtml(area)}
        <p style="margin-top:8px;">${placement!=null ? `<strong>Estimated ${escapeHtml(meta.shortLabel)} grade level: Grade ${gradeLabel(placement)}</strong>` : "Not enough data yet to estimate a grade level for this area."}</p>
      </div>
    </div>
  `;
}
async function markDigitalItem(area, grade, i, val){
  const s = STATE.session;
  if(!s.scores[area]) s.scores[area] = {};
  if(!s.scores[area][grade]) s.scores[area][grade] = {};
  const rec = s.scores[area][grade];
  if(!rec.marks) rec.marks = [];
  rec.marks[i] = val;
  rec.correct = rec.marks.filter(x=>x===true).length;
  await persistSession();
  renderConsoleContent();
}
const CAPTURE_KINDS = DIGITAL_AREAS; // kept as a plain array; mirrors the reading tool's CAPTURE_KINDS naming
function showLearnerLink(area, grade){
  const s = STATE.session;
  const baseCode = codeForItemSet(area, grade);
  const code = s ? (baseCode + "-" + s.code) : baseCode;
  const payload = {area, grade};
  if(s) payload.sc = s.code;
  const url = baseUrl() + "#learner=" + b64urlEncode(payload);
  const box = document.getElementById("linkbox-"+area+"-"+grade);
  const captureNote = s
    ? ` What the learner answers on their own device will appear back here within a few seconds.`
    : ` Open or start a session first so this code has somewhere to report back to.`;
  box.innerHTML = `
    <div class="linkbox" style="flex-direction:column;align-items:flex-start;gap:8px;">
      <div><span class="muted">Learner code:</span> <strong style="font-size:1.4rem;letter-spacing:3px;">${code}</strong></div>
      <div class="row" style="width:100%;">
        <input type="text" readonly value="${escapeHtml(url)}" onfocus="this.select()" id="linkinput-${area}-${grade}" />
        <button class="btn small" onclick="copyLink('linkinput-${area}-${grade}')">Copy link</button>
      </div>
      <button class="btn clay small" onclick="enterLearnerModeDirectly('${area}','${grade}')">Hand this screen to the learner now</button>
    </div>
    <p class="muted" style="font-size:.85rem;margin-top:4px;">On the learner's own device, open the link above, or go to this tool and enter the code <strong>${code}</strong> where it asks for a password or code.${captureNote} On THIS device, "Hand this screen to the learner now" switches straight to their view instead.</p>
  `;
}
function enterLearnerModeDirectly(area, grade){
  const s = STATE.session;
  STATE.learnerItem = s ? {area, grade, sc: s.code} : {area, grade};
  route();
}
function copyLink(inputId){
  const inp = document.getElementById(inputId);
  inp.select();
  try{ navigator.clipboard.writeText(inp.value); }catch(e){ try{ document.execCommand('copy'); }catch(e2){} }
}

/* ============================================================
   Placement (per area) and the weighted overall placement
   ============================================================ */
function areaPass(rec, meta){
  if(!rec || !rec.marks) return false;
  const correct = rec.marks.filter(x=>x===true).length;
  return correct >= meta.passAt;
}
function areaFail(rec, meta){
  if(!rec || !rec.marks) return false;
  const correct = rec.marks.filter(x=>x===true).length;
  return correct <= meta.failAt;
}
function placementGradeFor(area){
  const s = STATE.session;
  if(!s || !s.scores[area]) return null;
  const meta = AREA_META[area];
  const graded = Object.keys(s.scores[area]).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  let placement = null;
  graded.forEach(g => { if(areaPass(s.scores[area][g], meta)) placement = Math.max(placement==null?-Infinity:placement, g); });
  return placement;
}
function placementTableHtml(area){
  const s = STATE.session;
  const meta = AREA_META[area];
  const graded = Object.keys(s.scores[area]||{}).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(!graded.length) return `<p class="muted">No grade sets scored yet.</p>`;
  return `<table><tr><th>Grade</th><th>Correct</th><th>Result</th></tr>
    ${graded.map(g => {
      const r = s.scores[area][g];
      const c = (r.marks||[]).filter(x=>x===true).length;
      const result = areaPass(r,meta) ? "Pass (basal)" : (areaFail(r,meta) ? "Ceiling" : "Borderline");
      return `<tr><td>Grade ${gradeLabel(g)}</td><td>${c}/${meta.itemCount}</td><td>${result}</td></tr>`;
    }).join("")}
  </table>`;
}
function overallPlacement(){
  const placements = {};
  let weightedSum = 0, weightTotal = 0;
  AREA_ORDER.forEach(area => {
    const p = placementGradeFor(area);
    placements[area] = p;
    if(p != null){
      weightedSum += p * AREA_META[area].weight;
      weightTotal += AREA_META[area].weight;
    }
  });
  const composite = weightTotal > 0 ? Math.round((weightedSum/weightTotal)*10)/10 : null;
  return {placements, composite, weightTotal};
}

function sheetHeaderHtml(){
  return `
    <div class="row" style="gap:28px;flex-wrap:wrap;margin-bottom:14px;font-size:1.05rem;">
      <div>Name: <span style="display:inline-block;min-width:220px;border-bottom:1px solid #333;">&nbsp;</span></div>
      <div>Grade: <span style="display:inline-block;min-width:70px;border-bottom:1px solid #333;">&nbsp;</span></div>
      <div>Date: <span style="display:inline-block;min-width:140px;border-bottom:1px solid #333;">&nbsp;</span></div>
    </div>
  `;
}

/* ============================================================
   Reference booklet: a printable, examiner-only copy of every item
   across all 5 content areas and Grade R-7, with its answer, in the
   exact same style/layout as the reading tool's reference booklet
   (see public/english/app.js's referenceBookletHtml()). Nothing on it
   is ever shown to a learner.
   ============================================================ */
function mathRefAnswerHtml(it){
  if(it.type === "choice"){
    return it.options.map((opt,oi) => oi===it.answer
      ? `<strong>${escapeHtml(opt)}</strong>`
      : escapeHtml(opt)
    ).join(" / ");
  }
  return `<strong>${escapeHtml(it.answer)}</strong>`;
}
function mathRefAreaSection(area){
  const meta = AREA_META[area];
  const gradeBlocks = GRADE_RANGE.map(g => {
    const items = (MATH_ITEMS[area] && MATH_ITEMS[area][g]) || [];
    if(!items.length) return "";
    return `
      <div class="ref-block">
        <h3>Grade ${gradeLabel(g)}</h3>
        <ol>${items.map(it => `<li>${escapeHtml(it.prompt)} <span class="muted">(Answer: ${mathRefAnswerHtml(it)})</span></li>`).join("")}</ol>
      </div>
    `;
  }).join("");
  return `
    <h2 class="ref-break">${escapeHtml(meta.label)}${meta.mode==='oral' ? ' (oral, examiner-marked)' : ''}</h2>
    <p class="muted" style="margin-top:-6px;">${escapeHtml(meta.blurb)}</p>
    ${gradeBlocks}
  `;
}
function mathReferenceBookletHtml(){
  const sections = AREA_ORDER.map(a => mathRefAreaSection(a)).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Reference booklet</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">This is a plain paper copy of every Lets Math! question and its answer, across all 5 content areas and Grade R-7, for your own reference while you test. Nothing on this page is ever sent to a learner. Print it once and keep it with your kit.</p>
      <div id="printableReference" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Lets Math!, Reference Booklet</h2>
            <p class="muted">Debby Smit Educational Therapy. Examiner copy, not for learners.</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        ${sections}
      </div>
    </div>
    <style>@media print{ .ref-break{ page-break-before: always; } }</style>
  `;
}

/* ============================================================
   Learner response booklet: blank, paper-based answer sheets for the
   four digital content areas (Patterns, Space and Shape, Measurement,
   Data Handling), one per grade, for when a learner writes on paper
   instead of using a device. Number Sense has no sheet here - it is
   always oral, examiner-marked, exactly like the reading tool's
   phonological awareness and graded word reading sections. Carries no
   answers, so it is safe to hand to a learner or leave on a desk.
   ============================================================ */
function mathResponseItemHtml(it, idx){
  if(it.type === "choice"){
    return `
      <div style="margin-bottom:14px;">
        <div style="margin-bottom:6px;">${idx+1}. ${escapeHtml(it.prompt)}</div>
        <div class="row" style="gap:18px;flex-wrap:wrap;padding-left:22px;">
          ${it.options.map(opt => `<span style="white-space:nowrap;">&#9711; ${escapeHtml(opt)}</span>`).join("")}
        </div>
      </div>
    `;
  }
  return `
    <div class="row" style="align-items:baseline;gap:10px;margin-bottom:12px;">
      <span style="flex:1;">${idx+1}. ${escapeHtml(it.prompt)}</span>
      <span style="width:120px;border-bottom:1px solid #333;height:26px;"></span>
    </div>
  `;
}
function mathResponseSheetsHtml(){
  const areaSheets = DIGITAL_AREAS.map(area => {
    const meta = AREA_META[area];
    const gradeSheets = GRADE_RANGE.map(g => {
      const items = (MATH_ITEMS[area] && MATH_ITEMS[area][g]) || [];
      if(!items.length) return "";
      return `
        <div class="ref-block ref-break">
          <h3>${escapeHtml(meta.label)}, Grade ${gradeLabel(g)}</h3>
          ${sheetHeaderHtml()}
          <p class="muted" style="margin-bottom:14px;">Answer each question below. For questions with choices, circle your answer.</p>
          <div style="max-width:560px;">${items.map((it,i) => mathResponseItemHtml(it,i)).join("")}</div>
        </div>
      `;
    }).join("");
    return gradeSheets;
  }).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Learner response booklet</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">Blank, paper-based answer sheets for Patterns, Space and Shape, Measurement and Data Handling, one per grade. These carry no answers, only what the learner writes or circles themselves, so they are safe to print and hand out. Print just the page(s) you need for today's grade and content area, or the whole set to keep on hand. Number Sense has no sheet here, since it is always oral and marked by you directly on the console.</p>
      <div id="printableResponseSheets" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Lets Math!, Learner Response Booklet</h2>
            <p class="muted">Debby Smit Educational Therapy.</p>
          </div>
          <img src="${LOGO_SRC}" style="height:56px;" alt="logo" />
        </div>
        ${areaSheets}
      </div>
    </div>
    <style>@media print{ .ref-break{ page-break-before: always; } }</style>
  `;
}

function areaComment(area, placement, currentGrade){
  const meta = AREA_META[area];
  if(placement==null) return "Not yet enough data to estimate a placement.";
  if(placement===currentGrade) return `In line with the current grade placement (Grade ${gradeLabel(placement)}).`;
  if(placement>currentGrade) return `Above the current grade placement (Grade ${gradeLabel(placement)}).`;
  return `Below the current grade placement (Grade ${gradeLabel(placement)}).`;
}
// Builds the auto-generated narrative text for every editable section of
// the Mathematics report, grounded strictly in the scores already
// recorded for this session - no numbers are invented here, only phrased
// into sentences. The examiner can edit or regenerate each section
// afterwards.
function generateMathNarrative(s){
  const name = firstNameOf(s.learnerName);
  const out = {};
  const currentGrade = parseInt(s.gradeStart,10);
  const {placements, composite} = overallPlacement();

  AREA_ORDER.forEach(area => {
    const meta = AREA_META[area];
    const graded = Object.keys(s.scores[area]||{}).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
    if(!graded.length){
      out[area] = `${meta.label} has not been assessed yet.`;
      return;
    }
    const placement = placements[area];
    const topGrade = graded[graded.length-1];
    const topRec = s.scores[area][topGrade];
    const topCorrect = (topRec.marks||[]).filter(x=>x===true).length;
    if(placement==null){
      out[area] = `${name} has attempted up to Grade ${gradeLabel(topGrade)} level in ${meta.label} (${topCorrect}/${meta.itemCount} correct) but has not yet reached a clear basal pass at any grade tested. Consider testing an easier grade to establish a secure basal level.`;
    } else {
      const gap = currentGrade - placement;
      let placementSentence;
      if(gap<=0) placementSentence = `in line with the current Grade ${gradeLabel(currentGrade)} placement`;
      else placementSentence = `${gap} grade${gap===1?"":"s"} behind the current Grade ${gradeLabel(currentGrade)} placement`;
      out[area] = `${name} passed ${meta.label} at a Grade ${gradeLabel(placement)} level on this tool's basal/ceiling criteria, ${placementSentence}.`;
    }
  });

  // Strengths / areas for development / recommendations, aggregated from
  // the area-level placements above.
  const strengths = [], areas = [], recs = [];
  AREA_ORDER.forEach(area => {
    const meta = AREA_META[area];
    const placement = placements[area];
    if(placement==null) return;
    const gap = currentGrade - placement;
    if(gap<=0){
      strengths.push(`${meta.label} is at or above the current Grade ${gradeLabel(currentGrade)} placement (Grade ${gradeLabel(placement)}).`);
    } else {
      areas.push(`${meta.label} is estimated at a Grade ${gradeLabel(placement)} level, ${gap} grade${gap===1?"":"s"} behind the current Grade ${gradeLabel(currentGrade)} placement.`);
      recs.push(`Target ${meta.label} directly with focused, grade-appropriate practice: ${meta.blurb}`);
    }
  });
  out.strengths = strengths.length ? strengths.map(x=>"- "+x).join("\n") : "Not enough content areas have been scored yet to summarise strengths.";
  out.areas = areas.length ? areas.map(x=>"- "+x).join("\n") : "Not enough content areas have been scored yet to summarise areas for development.";
  out.recommendations = recs.length ? recs.map(x=>"- "+x).join("\n") : "Not enough content areas have been scored yet to generate recommendations.";

  // Conclusion: a short synthesis, deliberately conservative - this is a
  // draft starting point for the examiner's own clinical write-up, not a
  // diagnostic statement.
  const anyData = AREA_ORDER.some(area => placements[area]!=null);
  if(!anyData){
    out.conclusion = `Assessment is still in progress. A conclusion can be generated once more content areas have been scored.`;
  } else {
    out.conclusion = `${name}'s overall Lets Math! placement across the five content areas assessed is approximately Grade ${composite!=null?gradeLabel(composite):"not yet determined"}, a weighted average with Number Sense weighted most heavily. ${areas.length ? `The clearest area${areas.length===1?"":"s"} of need identified ${areas.length===1?"is":"are"} summarised above under Areas for Development. ` : ""}With focused support in these specific areas, ${name} has a good foundation to build from.`;
  }

  return out;
}

/* ============================================================
   Individualised Support Plan (ISP)
   An 8-week, editable intervention plan grounded in this session's
   own recorded scores (via getTargetAreas, reusing overallPlacement
   and the same gap logic as the report's narrative above) and built
   from this tool's own real content bank (MATH_ITEMS) rather than
   invented items. Lesson and homework text reuse the
   editableNarrativeField infrastructure, saved in a separate
   STATE.session.isp.fields bucket so edits never collide with the
   Report's own fields.
   ============================================================ */

// This tool's weekly technique descriptions below are grounded in NILD
// Educational Therapy's own published descriptions of its "Rx 4 Discovery
// Math" / "Rx for Math" course (nildsa.co.za, nildcanada.org): hands-on,
// concrete, research-based number-sense activities; mediation and
// Socratic questioning; small-group pacing; and deliberately reducing
// math anxiety while building number sense, fluency, vocabulary and
// problem-solving. Those sources describe the course at a Grade R-5
// level; this tool applies the same stated principles across the full
// Grade R-7 range it covers. The weekly lesson structure itself (warm-up/
// teach-model/practice/closure) is this tool's own construction, not
// NILD's own session plans, which this project has no access to.
const MATH_RX_NOTE = "This plan's \"Rx Mathematics-Informed\" techniques are grounded in NILD Educational Therapy's own published description of its Rx 4 Discovery Math / Rx for Math course (hands-on number-sense activities, mediation and Socratic questioning, reduced math anxiety) - not NILD's own copyrighted session plans, which this tool does not have access to. Please check this plan against your own Rx Mathematics training and materials before using it for intervention.";
const RX_TECHNIQUES = [
  "hands-on, concrete manipulatives (counters, a number line, base-ten blocks, or real objects) to make the number or operation physically real before moving to symbols",
  "mediated learning: pausing to ask Socratic questions (\"how do you know?\", \"what would happen if...?\") instead of supplying the answer, so the learner builds the reasoning themselves",
  "modelling precise mathematical vocabulary, then requiring the learner to use it when explaining their own answer",
  "working the problem aloud step by step before the learner tries it alone, to make the thinking process visible",
  "keeping the pace calm and starting from what the learner can already do, to reduce math anxiety and keep thinking active rather than anxious",
  "letting the learner apply newly-built number sense to one novel problem of their own, rather than only repeating the taught procedure"
];
function rxTechniqueFor(i){ return RX_TECHNIQUES[((i%RX_TECHNIQUES.length)+RX_TECHNIQUES.length)%RX_TECHNIQUES.length]; }

// Structured, score-grounded list of this learner's weakest content
// areas - same gap logic as "Areas for Development" in the report's
// narrative above, but returned as structured data so the ISP can build
// a Target Areas/Goals table and an 8-week sequence from it.
function getTargetAreas(s){
  const out = [];
  const {placements} = overallPlacement();
  const currentGrade = parseInt(s.gradeStart,10);
  AREA_ORDER.forEach(area=>{
    const meta = AREA_META[area];
    const graded = Object.keys(s.scores[area]||{}).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
    if(!graded.length) return;
    const placement = placements[area];
    if(placement==null){
      const topGrade = graded[graded.length-1];
      const topRec = s.scores[area][topGrade];
      const topCorrect = (topRec.marks||[]).filter(x=>x===true).length;
      out.push({id:area, label:meta.label, baseline:`No basal pass reached up to Grade ${gradeLabel(topGrade)} (${topCorrect}/${meta.itemCount})`, goal:"Establish a secure basal pass through structured, concrete practice at an easier grade level.", severity:45, grade: Math.max(0, topGrade-1)});
    } else {
      const gap = currentGrade - placement;
      if(gap>0){
        out.push({id:area, label:meta.label, baseline:`Approximately Grade ${gradeLabel(placement)} level, ${gap} grade${gap===1?"":"s"} behind the current Grade ${gradeLabel(currentGrade)} placement`, goal:`Close the gap toward Grade ${gradeLabel(currentGrade)} through focused, grade-appropriate practice.`, severity: gap*10, grade: placement});
      }
    }
  });
  out.sort((a,b)=>b.severity-a.severity);
  return out;
}

// Default fallback sequence used only when no weak area could be
// identified from recorded scores (e.g. assessment still in progress) -
// the plan says this plainly so the therapist knows to adjust it, rather
// than presenting invented weaknesses as real findings.
const ISP_DEFAULT_SEQUENCE = AREA_ORDER.map(area => ({id:area, label:AREA_META[area].label, baseline:"Not yet assessed", goal:`Confirm ${AREA_META[area].label} at an appropriate grade level.`, grade:1}));

function buildWeekPlan(target, weekNum, name, repeatRound){
  const suffix = repeatRound>0 ? " (continued and extended)" : "";
  const technique = rxTechniqueFor(weekNum-1);
  const meta = AREA_META[target.id];
  const grade = target.grade!=null ? target.grade : 1;
  const items = (MATH_ITEMS[target.id] && MATH_ITEMS[target.id][grade]) || (MATH_ITEMS[target.id] && MATH_ITEMS[target.id][1]) || [];
  const itemText = it => it.prompt + (it.answer!=null ? ` (answer: ${(it.type==='choice' && it.options) ? it.options[it.answer] : it.answer})` : "");
  const materials = [
    "Counters, a number line, or other concrete manipulatives appropriate to Grade "+gradeLabel(grade),
    meta.mode==="oral" ? "No learner device needed - this area is examiner-led and oral" : "This tool's own "+meta.shortLabel+" item set (printed or on screen)"
  ];
  const half = Math.ceil(items.length/2);
  const guided = items.slice(0, half).map(itemText);
  const independent = items.slice(half).map(itemText);
  const warmUp = `Review 2-3 items ${name} already handles confidently in ${meta.label}, as a confidence warm-up.`;
  const teachModel = `Model 1-2 new items from this week's set aloud, step by step, using concrete manipulatives. This area covers: ${meta.blurb}`;
  const closure = `Ask ${name} to explain, in their own words, how they solved one item today - listening for the mathematical vocabulary used, not just the final answer.`;

  const lessonText =
`Focus: ${meta.label}${suffix}
Objective: ${target.goal}

Warm-Up (5 min): ${warmUp}

Teach/Model (10 min): ${teachModel}

Multisensory (Rx Mathematics-Informed) Technique: ${technique}.

Guided Practice (work through together):
${(guided.length?guided:["No Grade "+gradeLabel(grade)+" items are written yet for "+meta.shortLabel+" in this tool - substitute items from your own Rx Mathematics materials."]).map(g=>"- "+g).join("\n")}

Independent Practice (learner completes with support available if needed):
${(independent.length?independent:["See Guided Practice above - repeat with new numbers or examples."]).map(g=>"- "+g).join("\n")}

Closure (5 min): ${closure}`;

  const homeworkText =
`Week ${weekNum} Homework: ${meta.label}
Practice 10-15 minutes, 3-4 times this week.

${(independent.length?independent:guided).map(g=>"- "+g).join("\n")}

Note for parents/caregivers: Keep sessions short, calm and positive - this is practice of what was already taught this week, not a test. If ${name} gets stuck, work through one example together rather than drilling it.`;

  return {materials, lessonText, homeworkText};
}

function generateSupportPlanWeeks(s){
  const name = firstNameOf(s.learnerName);
  let targets = getTargetAreas(s);
  const usedDefault = targets.length===0;
  if(usedDefault) targets = ISP_DEFAULT_SEQUENCE;
  const weeks = [];
  for(let w=1; w<=7; w++){
    const target = targets[(w-1) % targets.length];
    const repeatRound = Math.floor((w-1)/targets.length);
    const built = buildWeekPlan(target, w, name, repeatRound);
    weeks.push({week:w, focus: target.label + (repeatRound>0?" (continued)":""), objective: target.goal, materials: built.materials, lessonText: built.lessonText, homeworkText: built.homeworkText});
  }
  weeks.push({
    week:8, focus:"Integration and Progress Check", objective:"Consolidate all target areas and re-check progress against each baseline.",
    materials:["Materials from any of Weeks 1-7, as needed for review"],
    lessonText:
`Focus: Integration and Progress Check
Objective: Consolidate progress across all target areas below and re-check each baseline informally.

Warm-Up (5 min): Briefly revisit each of this program's target content areas, asking ${name} what they remember practising.

Teach/Model (10 min): Re-administer a short, informal check on each target area (a handful of items per area, using this tool's own content areas), noting whether the baseline score has improved.

Multisensory (Rx Mathematics-Informed) Technique: ${rxTechniqueFor(7)}.

Guided Practice (work through together):
${targets.slice(0,4).map(t=>"- Quick review: "+t.label).join("\n")}

Independent Practice (learner completes with support available if needed):
${targets.slice(0,4).map(t=>"- Independent re-check: "+t.label).join("\n")}

Closure (5 min): Discuss progress with ${name} in encouraging, concrete terms, and agree on 1-2 areas to keep practising at home.`,
    homeworkText:
`Week 8 Homework: Integration and Progress Check
Continue practising each area above for 10-15 minutes, 3-4 times this week.

Note for parents/caregivers: This week is about consolidating what has already been learned, not introducing new material. Celebrate progress made over the past 7 weeks.`
  });
  return {weeks, targets, usedDefault};
}

function ispInfoTableHtml(s){
  const start = (STATE.session.isp && STATE.session.isp.startDate) || todayDateStr();
  return `
    <table class="learner-info-table">
      <tr><th>Learner:</th><td>${escapeHtml(s.learnerName||"Not recorded")}</td></tr>
      <tr><th>Current Grade:</th><td>Grade ${gradeLabel(s.gradeStart)}</td></tr>
      <tr><th>Based on Assessment Dated:</th><td>${s.assessmentDate?fmtDate(new Date(s.assessmentDate+"T00:00:00").getTime()):fmtDate(nowMs())}</td></tr>
      <tr><th>Program Start Date:</th><td><input type="date" id="ispStartDate" value="${escapeHtml(start)}" onchange="saveIspStartDate(this.value)" class="no-print" /><span class="print-only" style="display:none;">${fmtDate(new Date(start+"T00:00:00").getTime())}</span></td></tr>
      <tr><th>Program Length:</th><td>8 weeks</td></tr>
    </table>
  `;
}
function saveIspStartDate(val){
  if(!STATE.session.isp) STATE.session.isp = {};
  STATE.session.isp.startDate = val;
  persistSession();
}

function ispHtml(s){
  const name = firstNameOf(s.learnerName);
  const {weeks, targets, usedDefault} = generateSupportPlanWeeks(s);

  return `
    <div class="grid" style="max-width:820px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Individualised Support Plan</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">Every lesson and homework section below is auto-drafted from this session's own recorded scores and content bank. Edit any section directly, or use "Regenerate from scores" to pull the auto-drafted text back in. Review and edit before sending this on.</p>
      <p class="muted no-print" style="font-size:.85rem;">${escapeHtml(MATH_RX_NOTE)}</p>
      ${usedDefault ? `<p class="note no-print" style="color:var(--clay-dark);">No clear area of weakness could be identified yet from this session's recorded scores, so this plan uses a general, default sequence of all five content areas as a starting point. Score more content areas, then revisit this plan, or edit it directly below.</p>` : ""}
      <div class="card" id="printableISP">
        ${letterheadHtml("INDIVIDUALISED SUPPORT PLAN")}
        <h2 class="report-title" style="margin-top:-6px;">An 8-Week Program for ${escapeHtml(s.learnerName||"")}</h2>
        ${ispInfoTableHtml(s)}

        <p>This Individualised Support Plan sets out an 8-week program of structured intervention for ${name}, based on the results of the assessment summarised in this learner's Report, to target the specific content areas identified below.</p>

        <h3 class="section-num">A Rx Mathematics-Informed Approach</h3>
        <p>This plan draws on Rx Mathematics-informed principles: building number sense, mathematical fluency, precise mathematical vocabulary and flexible problem-solving strategies through hands-on, concrete activities, mediation and Socratic questioning, in an environment that keeps math anxiety low and thinking active. Each week below names the specific technique used.</p>

        <h3 class="section-num">Target Areas and Goals</h3>
        <table>
          <tr><th>Skill Area</th><th>Baseline</th><th>8-Week Goal</th></tr>
          ${targets.map(t=>`<tr><td>${escapeHtml(t.label)}</td><td>${escapeHtml(t.baseline)}</td><td>${escapeHtml(t.goal)}</td></tr>`).join("")}
        </table>

        <h3 class="section-num">8-Week Overview</h3>
        <table>
          <tr><th>Week</th><th>Focus</th></tr>
          ${weeks.map(w=>`<tr><td>Week ${w.week}</td><td>${escapeHtml(w.focus)}</td></tr>`).join("")}
        </table>

        ${weeks.map(w=>`
          <h3 class="section-num">Week ${w.week}: ${escapeHtml(w.focus)}</h3>
          <p><strong>Materials Needed:</strong> ${w.materials.map(m=>escapeHtml(m)).join("; ")}</p>
          ${editableNarrativeField("isp_week"+w.week+"_lesson", "Lesson Plan (1 Hour)", w.lessonText, 16, "isp")}
          ${editableNarrativeField("isp_week"+w.week+"_homework", "Week "+w.week+" Homework", w.homeworkText, 7, "isp")}
        `).join("")}

        <p class="signature-line">Programme designed by: Debby Smit,<br/>Debby Smit Educational Therapy</p>
      </div>
    </div>
    <style>
      @media print{ .print-only{display:block !important; white-space:pre-wrap;} .report-textarea{display:none;} .report-section .btn{display:none;} }
      .report-letterhead .credentials-list{list-style:none;padding:0;margin:8px 0;font-size:.82rem;display:flex;flex-wrap:wrap;gap:4px 14px;justify-content:center;text-align:center;}
      .report-letterhead .credentials-list li{display:inline;}
      .report-letterhead .credentials-list li:not(:last-child)::after{content:" \\2022";margin-left:14px;color:var(--ink-soft);}
      .letterhead-rule{border:none;border-top:2px solid var(--line);margin:10px 0;}
      .confidential-label{text-align:center;font-weight:700;letter-spacing:.08em;margin:0;}
      .report-title{text-align:center;margin:4px 0 14px;font-size:1.1rem;}
      .learner-info-table th{text-align:left;width:220px;background:var(--paper);}
      .report-section{margin-top:10px;}
      .report-textarea{width:100%;}
      .signature-line{margin-top:18px;}
      .section-num{margin-top:18px;}
    </style>
  `;
}

/* ============================================================
   Report
   ============================================================ */
function reportHtml(s){
  const name = firstNameOf(s.learnerName);
  const {placements, composite} = overallPlacement();
  const narrative = generateMathNarrative(s);
  const currentGrade = parseInt(s.gradeStart,10);
  const areaNumeral = {numbersense:"1", patterns:"2", shape:"3", measurement:"4", data:"5"};

  return `
    <div class="grid" style="max-width:820px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Report</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">Every narrative section below is auto-drafted from the scores recorded in this session. Edit any section directly, or use "Regenerate from scores" to discard your edits and pull the auto-drafted text back in. Nothing is finalised until you print or save - review and edit the write-up before sending it on.</p>
      <div class="card" id="printableReport">
        ${letterheadHtml("MATHEMATICS ASSESSMENT REPORT")}
        ${learnerInfoTableHtml(s)}

        <p>This report presents the results of a Mathematics assessment conducted with ${name}, to establish current levels of numeracy and mathematical skill development across the five CAPS content areas, and to guide recommendations for further support.</p>
        <p><strong>Assessment Tools Used:</strong> Number Sense (Numbers, Operations and Relationships - oral), Patterns, Functions and Algebra, Space and Shape, Measurement, and Data Handling, each tested with a basal/ceiling climb across Grade R-7 CAPS-aligned items. All tasks were administered using the Lets Math! placement tool (Debby Smit Educational Therapy).</p>
        <p><strong>Purpose of the Assessment:</strong> To evaluate ${name}'s current mathematics skills against grade-level CAPS expectations across all five content areas, and to identify areas of strength and areas that require further support.</p>
        <p class="muted" style="font-size:.85rem;">${escapeHtml(MATH_CONTENT_NOTE)} This report reflects a CAPS-curriculum-based diagnostic screening, not a formal, standardised psychometric assessment - not a clinical diagnosis or a norm-referenced score.</p>

        <table style="margin-top:4px;">
          <tr><th>Content Area</th><th>Definition</th><th>Weight</th><th>Placement</th><th>Comments</th></tr>
          ${AREA_ORDER.map(area => {
            const meta = AREA_META[area];
            return `<tr><td><strong>${escapeHtml(meta.label)}</strong></td><td style="font-size:.9rem;">${escapeHtml(meta.blurb)}</td><td>${Math.round(meta.weight*100)}%</td><td>${placements[area]!=null?"Grade "+gradeLabel(placements[area]):"Not yet enough data"}</td><td>${escapeHtml(areaComment(area, placements[area], currentGrade))}</td></tr>`;
          }).join("")}
        </table>
        <p style="margin-top:10px;">${composite!=null ? `<strong>Overall Lets Math! placement: Grade ${gradeLabel(composite)}</strong> (a weighted average across all five areas, with Number Sense weighted most heavily)` : "Not enough data yet across the content areas to compute an overall placement."}</p>

        ${AREA_ORDER.map(area => {
          const meta = AREA_META[area];
          return `
            <h3 class="section-num">${areaNumeral[area]}. ${escapeHtml(meta.label)}</h3>
            ${placementTableHtml(area)}
            ${editableNarrativeField(area, escapeHtml(meta.label)+" - narrative", narrative[area], 3)}
          `;
        }).join("")}

        ${editableNarrativeField("strengths","Strengths",narrative.strengths,4)}
        ${editableNarrativeField("areas","Areas for Development",narrative.areas,4)}
        ${editableNarrativeField("recommendations","Recommendations",narrative.recommendations,4)}
        ${editableNarrativeField("conclusion","Conclusion",narrative.conclusion,4)}

        <h3>Examiner Notes</h3>
        <textarea id="reportNotes" rows="4" style="width:100%;" class="no-print" oninput="autoSaveNotes(this.value)">${escapeHtml(s.report && s.report.notes || "")}</textarea>
        <div class="print-only" style="display:none;white-space:pre-wrap;">${escapeHtml(s.report && s.report.notes || "")}</div>

        <p class="signature-line">Assessed by: Debby Smit,<br/>Debby Smit Educational Therapy</p>
      </div>
    </div>
    <style>
      @media print{ #reportNotes{display:none;} .print-only{display:block !important; white-space:pre-wrap;} .report-textarea{display:none;} .report-section .btn{display:none;} }
      .report-letterhead .credentials-list{list-style:none;padding:0;margin:8px 0;font-size:.82rem;display:flex;flex-wrap:wrap;gap:4px 14px;justify-content:center;text-align:center;}
      .report-letterhead .credentials-list li{display:inline;}
      .report-letterhead .credentials-list li:not(:last-child)::after{content:" \\2022";margin-left:14px;color:var(--ink-soft);}
      .letterhead-rule{border:none;border-top:2px solid var(--line);margin:10px 0;}
      .confidential-label{text-align:center;font-weight:700;letter-spacing:.08em;margin:0;}
      .report-title{text-align:center;margin:4px 0 14px;font-size:1.1rem;}
      .learner-info-table th{text-align:left;width:220px;background:var(--paper);}
      .report-section{margin-top:10px;}
      .report-textarea{width:100%;}
      .signature-line{margin-top:18px;}
      .section-num{margin-top:18px;}
    </style>
  `;
}
