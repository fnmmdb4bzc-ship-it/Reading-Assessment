/* ============================================================
   Afrikaans FAL Placement Tool - a First Additional Language diagnostic/
   placement tool, sibling to the Mathematics tool (Lets Math!) and the
   Afrikaans Huistaal (Home Language) tool in this same Let's Test! shell.
   Same examiner/learner console architecture, same Netlify Functions +
   Blobs backend, same design system (styles.css, copied from the Maths
   tool's own copy).

   WHY THIS IS A SEPARATE SUBJECT, NOT A COPY OF THE HOME LANGUAGE TOOL:
   the existing Afrikaans tab (public/afrikaans/app.js) is Afrikaans
   HUISTAAL - it assumes the learner already speaks Afrikaans fluently at
   home, and uses continuous reading passages and home-language word
   lists. Afrikaans FAL (First Additional Language) is for a learner who
   does NOT speak Afrikaans at home and is learning it as a second
   language at school - a much more basic, oral-vocabulary-first skill
   set. This tool's content was built from scratch for that purpose, not
   adapted from the Home Language passages.

   SCOPE: Grade 1 through Grade 3 ONLY - no Grade R. Unlike the
   Mathematics tool, grade keys here are plain "1"/"2"/"3" strings with no
   "0" (Grade R) rung, since Afrikaans FAL is explicitly a Grade 1-3 tool.

   CONTENT NOTE: the four content areas below (Luister en Praat / Listening
   and Speaking; Fonetiese Klanke / Letter and Phonic Sounds; Lees /
   Reading; Skryf / Writing) and their grade-by-grade weighting follow the
   real DBE Foundation Phase First Additional Language CAPS document
   (education.gov.za/Portals/0/Documents/FAL.pdf) - see the header comment
   in fal_items.js for the full explanation of what in this tool is real
   CAPS structure versus original content written to fill it in. The
   actual test ITEMS in fal_items.js are original material, not a
   transcription of any official CAPS question bank or published test -
   check them against your own CAPS/DBE resources before relying on them
   for a formal placement decision. See FAL_CONTENT_NOTE below, shown on
   the report too.

   METHODOLOGY NOTE: each content area runs its own basal/ceiling climb
   (test up from a pass, down from a ceiling), exactly like the other
   three subjects, so each area gets its own placement grade. Because the
   real CAPS item counts genuinely differ by grade within an area (for
   example Fonetiese Klanke has no items at all at Grade 1, since real
   phonics instruction only starts at Grade 2), this tool computes each
   grade's pass/ceiling thresholds as a PERCENTAGE of however many items
   that grade actually has (see passRatio/failRatio in AREA_META and
   itemCountFor/passAtFor/failAtFor below), rather than a single fixed
   item count and pass mark shared across all three grades the way the
   Mathematics tool does (which is safe there, since every Math grade/area
   combination has the same item count).
   ============================================================ */

const FAL_CONTENT_NOTE = "These Afrikaans First Additional Language items are original material written to match the real DBE Foundation Phase FAL CAPS document's structure and grade-by-grade skill progression (education.gov.za), not a transcription of any official CAPS question bank or published test - CAPS itself does not publish one. Please check them against your own CAPS/DBE resources before relying on them for a formal placement decision.";

/* ============================================================
   Content areas
   ============================================================ */
const AREA_META = {
  luisterpraat: { label: "Luister en Praat (Listening and Speaking)", shortLabel: "Luister en Praat", mode: "digital", weight: 0.40, passRatio: 0.7, failRatio: 0.3, prefix: "L",
    blurb: "Oral vocabulary and simple instructions. Say the word or instruction aloud yourself (in Afrikaans); the learner taps the matching picture." },
  fonetiese: { label: "Fonetiese Klanke (Letter and Phonic Sounds)", shortLabel: "Fonetiese Klanke", mode: "digital", weight: 0.20, passRatio: 0.7, failRatio: 0.3, prefix: "F",
    blurb: "Initial letter sounds, consonant blends and digraphs, and long/short vowel sounds. Real phonics instruction only begins at Grade 2 under CAPS, so Grade 1 has no items here." },
  lees: { label: "Lees (Reading)", shortLabel: "Lees", mode: "digital", weight: 0.25, passRatio: 0.7, failRatio: 0.3, prefix: "R",
    blurb: "Initial sounds and sight-word/environmental-print recognition at Grade 1, growing to very short, simple sentences by Grade 3 - never continuous passages, which is Home Language level, not FAL." },
  skryf: { label: "Skryf (Writing)", shortLabel: "Skryf", mode: "digital", weight: 0.15, passRatio: 0.7, failRatio: 0.3, prefix: "S",
    blurb: "A digital stand-in for handwriting: labelling a picture with the one matching word at Grade 1, completing a simple labelled sentence frame by Grade 2-3, and typing a single simple word to label a picture by Grade 3." }
};
const AREA_ORDER = ["luisterpraat", "fonetiese", "lees", "skryf"];
const DIGITAL_AREAS = AREA_ORDER.slice(); // every FAL content area is learner-device based - there is no oral/examiner-only area here, unlike Mathematics' Number Sense
// Afrikaans FAL on this tool is Grade 1-3 only - no Grade R (the user was
// explicit about this). Grade keys are plain numbers/strings "1"/"2"/"3",
// with no "0" rung and no "R" label, unlike the Mathematics tool.
const GRADE_RANGE = [1, 2, 3];
function gradeLabel(g){ return g == null ? "" : String(g); }
// Which grades actually have items for an area - Fonetiese Klanke has
// none at Grade 1 by design (real phonics instruction only starts at
// Grade 2 under CAPS). Used so the examiner can never land on, or
// manually pick, a grade that sends the learner nothing - that used to
// show the learner a dead-end "ask your examiner for a different code"
// screen whenever a Grade 1 session landed on Fonetiese Klanke.
function gradesWithItems(area){
  return GRADE_RANGE.filter(g => FAL_ITEMS[area] && FAL_ITEMS[area][g]);
}
function firstAvailableGrade(area, preferredGrade){
  if(FAL_ITEMS[area] && FAL_ITEMS[area][preferredGrade]) return preferredGrade;
  const list = gradesWithItems(area);
  return list.length ? list[0] : preferredGrade;
}

/* ============================================================
   Helpers (identical in spirit to the other subjects')
   ============================================================ */
function escapeHtml(s){
  return String(s==null?"":s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
}

/* ============================================================
   Visual aids for the learner-facing (child's own device) screen only.
   The user was explicit: this subject "must have a lot of pictures" -
   every single answer option across every item, in every content area
   and grade, resolves to a real picture (an emoji where one reads
   clearly, a simple inline SVG otherwise), never bare text. This is why
   every item in fal_items.js was deliberately written so every option is
   a concrete noun, colour, size or number - never an abstract word,
   grammar particle or misspelling - so it always has something real to
   draw. This never changes the underlying prompt/options/answer data
   (the examiner's reference booklet and response sheets still show plain
   text, which is correct for an adult reading on paper) - it only adds a
   picture layer on top, purely in how the learner's own screen renders a
   recognised Afrikaans word. Geometric shapes and colour swatches use
   fixed hex colours rather than the app's theme variables on purpose: a
   colour-identification item must show the same real colour on every
   device, light or dark mode.
   ============================================================ */
function _svgIcon(inner, vb){
  return `<svg viewBox="0 0 ${vb||48} ${vb||48}" width="100%" height="100%" aria-hidden="true" focusable="false">${inner}</svg>`;
}
// A real photo/illustration used as an ICON_MAP entry (as opposed to an
// emoji or _svgIcon's inline vector) - for a word an emoji can't show
// clearly or gets flat-out wrong (see "sit" below, which used to be a
// chair emoji - a picture of furniture, not of a child sitting). Returns
// a plain marker string the renderers below recognise by its "IMG:"
// prefix; the real work is just remembering the filename.
function _imgIcon(filename){ return "IMG:" + filename; }
const ICON_MAP = {
  // Family (Luister en Praat, Grade 1: "Myself and My Family") - no
  // icon on purpose: the emoji faces all looked too similar for a young
  // learner to tell apart, so these fall back to plain text (handled by
  // visualTokenHtml's text-only branch below) rather than a wrong/confusing
  // picture.
  // Body parts (Grade 1: "My Body")
  "neus": "👃", "oog": "👁️", "mond": "👄", "oor": "👂",
  // Animals - domestic (Grade 1 "Domestic Animals") and wild (Grade 3 "Wild Animals")
  "hond": _imgIcon("hond.png"), "kat": _imgIcon("kat.png"), "vis": _imgIcon("vis.png"), "voël": "🐦",
  "koei": "🐮", "skaap": "🐑", "perd": "🐴",
  "sebra": _imgIcon("sebra.png"), "leeu": "🦁", "olifant": _imgIcon("olifant.png"), "aap": "🐒",
  "tier": _imgIcon("tier.png"), // new word, used by the wild-animal "doesn't fit" item below
  // Food (Grade 1 "Food")
  "appel": _imgIcon("appel.png"), "piesang": _imgIcon("piesang.png"), "brood": "🍞", "melk": "🥛", "vleis": "🍖",
  "peer": _imgIcon("peer.png"), // new word, used by the fruit "doesn't fit" item below
  // Clothes (Grade 1 "Clothes")
  "hemp": "👕", "broek": "👖", "skoene": "👟", "hoed": _imgIcon("hoed.png"),
  // Actions - "responding physically to simple instructions" (Grade 1-2).
  // Real pictures of a child doing each action, not emoji - "sit" in
  // particular used to be a chair emoji (furniture, not the action of
  // sitting), which risked teaching the wrong thing rather than just
  // looking plain.
  "klap": _imgIcon("action-klap.png"), "spring": _imgIcon("action-spring.png"),
  "sit": _imgIcon("action-sit.png"), "staan": _imgIcon("action-staan.png"),
  "loop": _imgIcon("action-loop.png"),
  // Weather and sky (Grade 1 shapes/colours groundwork, general vocabulary)
  "wolk": _imgIcon("wolk.png"), "reën": "🌧️",
  "son": _imgIcon("son.png"),
  "maan": _imgIcon("maan.png"),
  // Numbers 1-6 (Grade 1-3 "number/age/size") - Unicode die-face glyphs, a
  // real, instantly-recognisable picture of the quantity rather than a
  // bare numeral.
  "een": "⚀", "twee": "⚁", "drie": "⚂", "vier": "⚃", "vyf": "⚄", "ses": "⚅",
  // Colours (Grade 1 "shapes/colours") - the actual colour, not its name,
  // as a filled circle.
  "rooi": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#D1453B"/>`),
  "blou": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#2E6FBA"/>`),
  "groen": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#2F9E52"/>`),
  "geel": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#D9A62E"/>`),
  "pers": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#8C6FB0"/>`),
  "oranje": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#C97B4A"/>`),
  "bruin": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#8C5A2E"/>`),
  "swart": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#2A2A2A"/>`),
  "wit": _svgIcon(`<circle cx="24" cy="24" r="18" fill="#FFFFFF" stroke="#2A2A2A" stroke-width="3"/>`),
  // Size (Skryf sentence-completion items) - shown as an actual size
  // difference, both the same shape just scaled, same approach as the
  // Mathematics tool's big/small.
  "groot": _svgIcon(`<circle cx="24" cy="24" r="22" fill="#189E71"/>`),
  "klein": _svgIcon(`<circle cx="24" cy="24" r="10" fill="#189E71"/>`),
  // Play/Sport, Journeys, Supermarket, Farming (Grade 2 topics)
  "bal": _imgIcon("bal.png"), "fiets": "🚲", "boek": "📖", "sak": "🎒", "geld": "💰",
  "kar": "🚗", "bus": "🚌", "trein": "🚂", "huis": _imgIcon("huis.png"), "boom": _imgIcon("boom.png"), "bed": "🛏️",
  // People who help (Grade 1-2 "People who help me")
  "dokter": "🧑‍⚕️", "onderwyser": "👨‍🏫", "juffrou": "👩‍🏫",
  "polisieman": "👮", "brandweerman": "🧑‍🚒", "boer": "🧑‍🌾",
  // The Sea, community places (Grade 2-3)
  "see": "🌊", "winkel": "🏪", "kerk": "⛪", "skool": _imgIcon("skool.png"), "tuin": "🌻",
  // Lees (Reading): environmental print / signs
  "stopteken": _imgIcon("stopteken.png"), "stoel": _imgIcon("stoel.png")
};
// Looks up a word/short phrase for a learner-facing icon: lowercases,
// strips a leading "'n"/"die"/"a"/"the" and trailing punctuation, then
// tries the whole phrase before falling back to its last word (so "'n
// Boek" and "boek" both find the book icon). Returns null (not a blank
// string) when nothing matches, so callers can fall back to text.
function iconForToken(raw){
  if(raw == null) return null;
  let t = String(raw).trim().toLowerCase().replace(/^('n|die|a|an|the)\s+/,'').replace(/[.?!]+$/,'');
  if(ICON_MAP[t]) return ICON_MAP[t];
  const words = t.split(/\s+/);
  const last = words[words.length-1];
  if(ICON_MAP[last]) return ICON_MAP[last];
  return null;
}
// Renders one visual token (icon if we have one, otherwise the plain
// escaped text) plus a small caption underneath so the word is never
// lost - some learners will still be sounding out letters even where a
// picture is the main cue.
function visualTokenHtml(raw, size, hideCaption){
  const icon = iconForToken(raw);
  const label = hideCaption ? "" : `<span class="visual-caption">${escapeHtml(raw)}</span>`;
  if(!icon) return `<span class="visual-token text-only">${escapeHtml(raw)}</span>`;
  if(icon.startsWith("IMG:")){
    const box = `<span class="visual-icon" style="width:${size||40}px;height:${size||40}px;display:inline-flex;align-items:center;justify-content:center;"><img src="${escapeHtml(icon.slice(4))}" alt="${hideCaption ? '' : escapeHtml(raw)}" style="max-width:100%;max-height:100%;object-fit:contain;" /></span>`;
    return `<span class="visual-token">${box}${label}</span>`;
  }
  const isEmoji = !icon.startsWith("<svg");
  const box = isEmoji
    ? `<span class="visual-icon emoji" style="font-size:${size||40}px;line-height:1;">${icon}</span>`
    : `<span class="visual-icon" style="width:${size||40}px;height:${size||40}px;">${icon}</span>`;
  return `<span class="visual-token">${box}${label}</span>`;
}
// The actual word a Lees/Skryf item is testing, shown MUCH bigger than
// the small instruction text around it (e.g. "Wys:" or the writing
// task's own short instruction) - this is the thing the child is
// actually meant to read, so it needs to dominate the screen, not sit at
// the same size as everything else. Returns "" when the item has no
// bigWord, so every other item (Luister en Praat's oral items, for
// instance, which have nothing for the child to read) is unaffected.
function bigWordHtml(it){
  if(!it || !it.bigWord) return "";
  return `<div style="font-size:3.4rem;font-weight:700;line-height:1.1;text-align:center;margin:2px 0 4px;">${escapeHtml(it.bigWord)}</div>`;
}
// A single stimulus picture shown ABOVE a question (as opposed to
// visualTokenHtml, which decorates one answer BUTTON) - used by Skryf's
// "label this picture" / "complete the sentence for this picture" items,
// and by its typed "write the word for this picture" items where there
// are no answer buttons at all to carry the icon. No caption is printed
// here on purpose: for a typed item the caption would hand the learner
// the very word they're being asked to type. An optional v.size lets a
// size-judgement item (e.g. "the dog is ___: groot/klein") render the
// SAME picture visibly bigger or smaller to match its own correct
// answer, so the size judgement is something the learner can actually
// see, not just infer from the Afrikaans adjective alone.
function picStimulusHtml(v){
  const icon = ICON_MAP[String(v.icon||'').trim().toLowerCase()];
  if(!icon) return "";
  const size = v.size || 84;
  if(icon.startsWith("IMG:")){
    return `<div style="display:flex;justify-content:center;margin:8px 0 10px;"><img src="${escapeHtml(icon.slice(4))}" alt="" style="max-width:${size}px;width:100%;height:auto;" /></div>`;
  }
  const isEmoji = !icon.startsWith("<svg");
  const box = isEmoji
    ? `<span class="visual-icon emoji" style="font-size:${size}px;line-height:1;">${icon}</span>`
    : `<span class="visual-icon" style="width:${size}px;height:${size}px;display:inline-block;">${icon}</span>`;
  return `<div style="display:flex;justify-content:center;margin:8px 0 10px;">${box}</div>`;
}
// A real photo/illustration (as opposed to picStimulusHtml's single
// ICON_MAP glyph) shown above a question - for a scene with more than one
// thing in it, where a single emoji/SVG icon can't carry the whole
// picture. v.src is a plain filename served alongside this app's own
// files (e.g. "family.png"), v.alt is the Afrikaans word read aloud by
// the alt text, and v.maxWidth caps how wide it renders (same idea as
// picStimulusHtml's size, just for a rectangular image instead of a
// square icon).
function imgStimulusHtml(v){
  if(!v.src) return "";
  const maxWidth = v.maxWidth || 320;
  return `<div style="display:flex;justify-content:center;margin:8px 0 10px;"><img src="${escapeHtml(v.src)}" alt="${escapeHtml(v.alt||'')}" style="max-width:${maxWidth}px;width:100%;height:auto;border-radius:14px;border:2px solid #8a8070;" /></div>`;
}
// Dispatches on item.visual.type to render the right stimulus picture
// above a question. Returns "" when the item has no visual field, so
// every other item is completely unaffected.
function stimulusHtml(item){
  const v = item && item.visual;
  if(!v) return "";
  if(v.type === "pic") return picStimulusHtml(v);
  if(v.type === "img") return imgStimulusHtml(v);
  return "";
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
// Letterhead content shared across all four subjects' reports, matching
// Debby Smit Educational Therapy's own letterhead - copied verbatim from
// the Mathematics/Afrikaans Huistaal tools, do not alter the practice's
// actual name or credentials.
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
// Normalizes a short typed answer for comparison: trims, lowercases and
// strips punctuation, so "Hond." / " hond " / "HOND" all match "hond".
function normAnswer(w){
  return (w==null?"":String(w)).trim().toLowerCase().replace(/[.,!?;:'"]/g,"");
}

/* ============================================================
   Legacy per-activity learner codes. These are no longer shown anywhere
   in the console - every session now hands out just ONE code (its
   session code, see the Overview tab) that the learner types once, with
   the examiner then sending each activity to their screen in turn (see
   pushLiveItem/startLearnerLivePolling). This old scheme - a code is
   {prefix}{grade}, e.g. "L1" (Luister en Praat, Grade 1) - is kept
   working here only so an already-given-out old-style code or link
   doesn't suddenly break, exactly like the Mathematics and Afrikaans
   Huistaal tools.
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
   like the other three subjects. Netlify Functions + Blobs on the
   backend (netlify/functions/capture.mjs, already wired for the
   "afrikaansfal" subject); the examiner's console polls every 400ms
   rather than getting pushed updates, so there is still a small,
   near-instant delay before an answer shows up here.
   ============================================================ */
const API_BASE = "/api/afrikaansfal";
const Capture = {
  async read(session, area, grade){
    if(!session) return null;
    try{
      // cache: "no-store" stops the browser from quietly reusing an old
      // response during polling - without it, the examiner screen can
      // appear frozen until a full page reload forces a fresh request.
      const res = await fetch(`${API_BASE}/capture?session=${encodeURIComponent(session)}&kind=${area}&grade=${grade}`, {cache: "no-store"});
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
// one (area, grade), auto-marking each answered item against FAL_ITEMS,
// without stomping a manual override of an item the learner hasn't
// retyped/retapped since. Returns true if anything changed.
function applyDigitalCaptureRecord(area, grade, cap){
  const s = STATE.session;
  if(!s || !cap || !cap.answers) return false;
  const items = (FAL_ITEMS[area] && FAL_ITEMS[area][grade]) || null;
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
  let inFlight = false; // guards against a slow read overlapping the next tick now that polling is fast
  const tick = async () => {
    if(inFlight) return;
    inFlight = true;
    try{
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
    } finally {
      inFlight = false;
    }
  };
  tick();
  // Polls every 400ms - a real assessment is a live back-and-forth with
  // the child, and the examiner needs to see an answer land in well under
  // a second to decide whether to move up or down a level.
  STATE.capturePollTimer = setInterval(tick, 400);
}

/* ============================================================
   Store: session records (learner particulars, every area's marks) live
   in Netlify Blobs behind netlify/functions/sessions.mjs, reached here
   through the /api/afrikaansfal/sessions redirect in netlify.toml.
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
      const res = await fetch(`${API_BASE}/sessions?code=${encodeURIComponent(code)}`, {cache: "no-store"});
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
  learnerEnded: false,     // true once this learner's code has been switched off by the examiner
  learnerLivePollTimer: null,
  liveChannel: null,       // examiner's own cached copy of {area, grade, active} for the open session
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
    STATE.learnerItem = payload ? {area: payload.area, grade: payload.grade, sc: payload.sc} : null;
    STATE.learnerSessionCode = (payload && payload.sc) ? payload.sc : null;
    STATE.learnerEnded = false;
    if(payload && payload.sc && !payload.area) startLearnerLivePolling();
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
  if(!payload || (!payload.area && !payload.sc)){
    inner = '<div class="err">That code or link isn\'t valid. Please ask your examiner for a fresh one.</div>';
  } else if(payload.sc && STATE.learnerEnded){
    inner = learnerEndedHtml();
  } else if(payload.sc && !payload.area){
    inner = learnerWaitingHtml();
  } else {
    inner = learnerContentHtml(payload);
  }
  app.innerHTML = `
    <div class="app">
      <div class="topbar no-print">
        <img class="logo" src="${LOGO_SRC}" alt="Debby Smit Educational Therapy logo" />
        <div class="title-block">
          <div class="brand">Afrikaans FAL!</div>
          <div class="tag">Debby Smit Educational Therapy</div>
        </div>
      </div>
      <div class="centered">
        <div class="col" style="align-items:center;width:100%;">
          ${inner}
          ${STATE.learnerItem ? `<button class="btn secondary small no-print" style="margin-top:16px;" onclick="exitLearnerMode()">${STATE.examinerAuthed ? "Done - back to examiner console" : "Enter a different code"}</button>` : ''}
        </div>
      </div>
    </div>
  `;
}
function exitLearnerMode(){
  stopLearnerLivePolling();
  STATE.learnerItem = null;
  STATE.learnerSessionCode = null;
  STATE.learnerEnded = false;
  route();
}
// A simple spinning flower for the "nothing sent yet" waiting screen - see
// the .waiting-flower rule in styles.css for the spin animation.
const FLOWER_SVG = `<svg class="waiting-flower" width="64" height="64" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <circle cx="32" cy="15" r="11" fill="#F6C6D0"/>
  <circle cx="49" cy="32" r="11" fill="#FBE2A7"/>
  <circle cx="32" cy="49" r="11" fill="#C7E8CA"/>
  <circle cx="15" cy="32" r="11" fill="#BFE1F6"/>
  <circle cx="32" cy="32" r="10" fill="#F3A6B8"/>
</svg>`;
function learnerWaitingHtml(){
  return `<div class="reading-sheet" style="max-width:420px;text-align:center;">
    ${FLOWER_SVG}
    <p style="font-size:1.25rem;margin-top:14px;">Getting your activity ready...</p>
    <p class="muted">Sit tight - your teacher will send the next activity to your screen in just a moment.</p>
  </div>`;
}
function learnerEndedHtml(){
  return `<div class="reading-sheet" style="max-width:420px;text-align:center;">
    <p style="font-size:1.25rem;">All done for today!</p>
    <p class="muted">This code has been switched off. Please check with your examiner.</p>
    <button type="button" class="btn secondary small no-print" style="margin-top:10px;" onclick="STATE.learnerEnded=false; startLearnerLivePolling();">Check again</button>
  </div>`;
}
function stopLearnerLivePolling(){
  if(STATE.learnerLivePollTimer){ clearInterval(STATE.learnerLivePollTimer); STATE.learnerLivePollTimer = null; }
}
function startLearnerLivePolling(){
  stopLearnerLivePolling();
  const sc = STATE.learnerSessionCode;
  if(!sc) return;
  let inFlight = false;
  const tick = async () => {
    if(inFlight) return;
    inFlight = true;
    try{
      const live = await Capture.read(sc, "_live", "_");
      const active = !live || live.active !== false;
      if(!active){
        STATE.learnerEnded = true;
        stopLearnerLivePolling();
        renderLearner(document.getElementById("app"), {sc});
        return;
      }
      const liveArea = live ? (live.area || null) : null;
      const liveGrade = live ? (live.grade || null) : null;
      const curArea = STATE.learnerItem ? STATE.learnerItem.area : null;
      const curGrade = STATE.learnerItem ? STATE.learnerItem.grade : null;
      if(liveArea !== curArea || String(liveGrade) !== String(curGrade)){
        STATE.learnerItem = {area: liveArea, grade: liveGrade, sc};
        renderLearner(document.getElementById("app"), STATE.learnerItem);
      }
    } finally {
      inFlight = false;
    }
  };
  tick();
  STATE.learnerLivePollTimer = setInterval(tick, 500);
}
function noSessionNoticeHtml(){
  if(STATE.learnerSessionCode) return "";
  return '<div class="err" style="margin:8px 0;">This code or link isn\'t tied to an assessment session, so what you answer here won\'t reach your examiner. Please ask them for the correct code or link.</div>';
}
// Which question (by index into FAL_ITEMS[area][grade]) is currently on
// screen, per "area_grade" - a plain in-memory position, not saved
// anywhere, so a fresh page load always starts back at question 1.
const _qIndexByKey = {};
function goLearnerQuestion(newIdx){
  const key = _answerKey();
  if(!key || !STATE.learnerItem) return;
  const items = (FAL_ITEMS[STATE.learnerItem.area] && FAL_ITEMS[STATE.learnerItem.area][STATE.learnerItem.grade]) || [];
  _qIndexByKey[key] = Math.max(0, Math.min(newIdx, items.length));
  renderLearner(document.getElementById("app"), {area: STATE.learnerItem.area, grade: STATE.learnerItem.grade, sc: STATE.learnerItem.sc});
}
function learnerContentHtml(payload){
  const area = payload.area, grade = payload.grade;
  const meta = AREA_META[area];
  if(!meta){
    return '<div class="err">This activity could not be found.</div>';
  }
  const items = (FAL_ITEMS[area] && FAL_ITEMS[area][grade]) || null;
  if(!items){
    return `<div class="reading-sheet"><h2>${escapeHtml(meta.label)}</h2><p>Grade ${escapeHtml(grade)} isn't ready here yet. Please ask your examiner for a different code.</p></div>`;
  }
  const key = area + "_" + grade;
  if(_qIndexByKey[key] == null) _qIndexByKey[key] = 0;
  const total = items.length;
  const idx = _qIndexByKey[key];
  const buffer = _answerBuffer[key] || [];
  const progressHtml = `<div class="muted" style="font-size:.95rem;margin-bottom:2px;">Question ${Math.min(idx+1,total)} of ${total}</div>`;

  if(idx >= total){
    return `<div class="reading-sheet" style="max-width:480px;">
      <h2>${escapeHtml(meta.label)}</h2>
      ${noSessionNoticeHtml()}
      <p style="font-size:1.2rem;margin-top:10px;">Well done! You've answered all ${total} questions.</p>
      <button type="button" class="btn secondary small" onclick="goLearnerQuestion(${total-1})">&larr; Go back and check my answers</button>
    </div>`;
  }

  const it = items[idx];
  let questionHtml;
  if(it.type === "choice"){
    const selectedOi = buffer[idx];
    const optionsHtml = it.options.map(opt => visualTokenHtml(opt, 48, !!it.hideOptionCaptions))
      .map((html,oi) => `<button type="button" class="btn secondary icon-choice-btn${selectedOi===oi?' clay':''}" data-idx="${oi}" onclick="captureChoiceAnswer(${idx},${oi},this); const nb=document.getElementById('learnerNextBtn'); if(nb) nb.disabled=false;">${html}</button>`)
      .join("");
    questionHtml = `<div class="col" style="gap:10px;width:100%;align-items:center;">
      ${it.prompt ? `<label style="font-size:1.3rem;text-align:center;">${escapeHtml(it.prompt)}</label>` : ""}
      ${bigWordHtml(it)}
      ${stimulusHtml(it)}
      <div class="row" id="choicerow-${idx}" style="gap:10px;flex-wrap:wrap;justify-content:center;">
        ${optionsHtml}
      </div>
    </div>`;
  } else {
    const typed = buffer[idx] != null ? buffer[idx] : "";
    questionHtml = `<div class="col" style="gap:14px;width:100%;align-items:center;">
      ${it.prompt ? `<label style="font-size:1.3rem;text-align:center;">${escapeHtml(it.prompt)}</label>` : ""}
      ${bigWordHtml(it)}
      ${stimulusHtml(it)}
      <input type="text" autocomplete="off" autocapitalize="off" spellcheck="false" style="width:160px;font-size:1.2rem;text-align:center;" value="${escapeHtml(typed)}" oninput="captureShortAnswer(${idx},this.value); const nb=document.getElementById('learnerNextBtn'); if(nb) nb.disabled=!this.value.trim();" />
    </div>`;
  }

  const hasAnswer = buffer[idx] !== undefined && buffer[idx] !== null && buffer[idx] !== "";
  const isLast = idx === total - 1;
  const navRow = `<div class="row" style="width:100%;max-width:420px;justify-content:space-between;margin-top:18px;">
    <button type="button" class="btn secondary small" ${idx===0?'disabled':''} onclick="goLearnerQuestion(${idx-1})">&larr; Back</button>
    <button type="button" class="btn small" id="learnerNextBtn" ${hasAnswer?'':'disabled'} onclick="goLearnerQuestion(${idx+1})">${isLast ? "Finish" : "Next →"}</button>
  </div>`;

  return `<div class="reading-sheet" style="max-width:480px;">
    <h2>${escapeHtml(meta.label)}</h2>
    ${noSessionNoticeHtml()}
    ${progressHtml}
    ${questionHtml}
    ${navRow}
  </div>`;
}

/* ============================================================
   Learner-side writers: whole-record flushes (never a read-modify-write
   against the server), keyed by the item index so two rapid answers
   can't race each other into a lost update.
   ============================================================ */
const _captureTimers = {};
function _debounceCaptureWrite(timerKey, fn){
  clearTimeout(_captureTimers[timerKey]);
  _captureTimers[timerKey] = setTimeout(fn, 120);
}
const _answerBuffer = {}; // "area_grade" -> array of typed/selected answers so far
function _answerKey(){ return STATE.learnerItem ? (STATE.learnerItem.area+"_"+STATE.learnerItem.grade) : null; }
function _writeAnswersNow(key){
  Capture.write(STATE.learnerSessionCode, STATE.learnerItem.area, STATE.learnerItem.grade, {answers: (_answerBuffer[key]||[]).slice()});
}
function _flushAnswers(immediate){
  if(!STATE.learnerSessionCode || !STATE.learnerItem) return;
  const key = _answerKey();
  if(immediate){
    clearTimeout(_captureTimers[key]);
    _writeAnswersNow(key);
    return;
  }
  _debounceCaptureWrite(key, () => _writeAnswersNow(key));
}
function captureShortAnswer(idx, val){
  const key = _answerKey();
  if(!key) return;
  if(!_answerBuffer[key]) _answerBuffer[key] = [];
  _answerBuffer[key][idx] = val;
  _flushAnswers(false);
}
function captureChoiceAnswer(idx, optionIdx, btnEl){
  const key = _answerKey();
  if(!key) return;
  if(!_answerBuffer[key]) _answerBuffer[key] = [];
  _answerBuffer[key][idx] = optionIdx;
  _flushAnswers(true);
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
          <div class="brand">Afrikaans FAL!</div>
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
async function tryExaminerLogin(){
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
  if(upper.length >= 4){
    const sess = await Store.getSession(upper);
    if(sess){
      STATE.learnerItem = {area: null, grade: null, sc: upper};
      STATE.learnerSessionCode = upper;
      STATE.learnerEnded = false;
      startLearnerLivePolling();
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
            <p class="note">Each content area below runs its own test-up/test-down climb, starting from this learner's current grade. ${escapeHtml(FAL_CONTENT_NOTE)}</p>
          </div>
          <div class="card">
            <h2>Reference booklet</h2>
            <p class="muted">A printable, examiner-only copy of every Afrikaans FAL item with its answer, across Grade 1-3. Nothing on it ever goes to a learner. Print it once and keep it with your kit.</p>
            <button class="btn secondary small" onclick="openReferenceStandalone()">Open reference booklet</button>
          </div>
          <div class="card">
            <h2>Learner response booklet</h2>
            <p class="muted">Blank, paper-based answer sheets for every content area, one per grade, for when you'd rather have the learner write on paper than use a device. No answers are printed on these.</p>
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
  STATE.liveChannel = {area: null, grade: null, active: true};
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
    await refreshLiveChannel();
    route();
  }
}
function closeSession(){
  stopCapturePolling();
  STATE.session = null;
  STATE.liveChannel = null;
  route();
}
async function persistSession(){
  if(!STATE.session) return;
  const ok = await Store.saveSession(STATE.session);
  setSaveStatus(ok);
}

/* ============================================================
   Live channel: what the learner's screen is currently showing for the
   open session - one small record per session (reusing the capture
   endpoint's storage with the made-up kind "_live"), kept completely
   separate from the session record itself.
   ============================================================ */
async function refreshLiveChannel(){
  const s = STATE.session;
  if(!s){ STATE.liveChannel = null; return; }
  const live = await Capture.read(s.code, "_live", "_");
  STATE.liveChannel = live || {area: null, grade: null, active: true};
}
async function writeLiveChannel(patch){
  const s = STATE.session;
  if(!s) return;
  STATE.liveChannel = Object.assign({area: null, grade: null, active: true}, STATE.liveChannel, patch);
  await Capture.write(s.code, "_live", "_", STATE.liveChannel);
}
// Sends one content area + grade to the learner's screen right now.
async function pushLiveItem(area, grade){
  await writeLiveChannel({area, grade, active: true});
  renderConsoleContent();
}
// Clears the learner's screen back to the waiting flower, without
// switching the code off.
async function clearLiveItem(){
  await writeLiveChannel({area: null, grade: null});
  renderConsoleContent();
}
async function setLearnerAccess(active){
  if(!active && !confirm("Switch this learner's code off? They won't be able to continue until you switch it back on.")) return;
  await writeLiveChannel({active});
  renderConsole(document.getElementById("app"));
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
        ${falReferenceBookletHtml()}
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
        ${falResponseSheetsHtml()}
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
        <div class="brand">Afrikaans FAL!</div>
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
// Moving to a new content area on the examiner's own screen sends it
// straight to the learner's screen - no separate click needed for the
// normal "move through the areas in order" case. (Every FAL area is
// digital/learner-device-based, so this always applies here, unlike the
// Mathematics tool where Number Sense is oral-only and skips this.) The
// "Send to learner's screen" / "Clear learner's screen" buttons still
// work as before for re-sending after a clear, or sending the same area
// again after switching the grade.
function setNav(key){
  STATE.navSection = key;
  if(AREA_META[key]){
    // firstAvailableGrade steers around grades this area has no items for
    // (Fonetiese Klanke at Grade 1) instead of pushing a dead end to the
    // learner's screen.
    const grade = firstAvailableGrade(key, STATE.areaGrade[key] || STATE.session.gradeStart);
    STATE.areaGrade[key] = grade;
    startCapturePolling(key, grade);
    pushLiveItem(key, grade);
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
  if(STATE.navSection === "reference"){ c.innerHTML = falReferenceBookletHtml(); return; }
  if(STATE.navSection === "responsesheets"){ c.innerHTML = falResponseSheetsHtml(); return; }
  if(STATE.navSection === "report"){ c.innerHTML = reportHtml(s); return; }
  if(STATE.navSection === "isp"){ c.innerHTML = ispHtml(s); return; }
  if(AREA_META[STATE.navSection]){
    c.innerHTML = digitalAreaHtml(STATE.navSection);
    return;
  }
  c.innerHTML = "";
}

/* ============================================================
   Overview
   ============================================================ */
function overviewHtml(s){
  const age = fmtAge(s.dob, s.assessmentDate);
  const lc = STATE.liveChannel || {area: null, grade: null, active: true};
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
        <h3>Learner code</h3>
        <p class="muted">Give the learner this one code for their whole visit. They type it in once, then wait - whatever you send to their screen from a content area tab shows up there on its own, no further typing needed.</p>
        <div class="row" style="align-items:center;gap:12px;flex-wrap:wrap;margin-top:6px;">
          <strong style="font-size:1.6rem;letter-spacing:3px;">${escapeHtml(s.code)}</strong>
          <button class="btn small" onclick="copyLearnerSessionLink()">Copy learner link</button>
        </div>
        <div id="learnerLinkBox-overview"></div>
        <div class="row" style="margin-top:12px;align-items:center;gap:10px;flex-wrap:wrap;">
          <span class="chip ${lc.active===false ? 'locked' : ''}">${lc.active===false ? "Code switched off" : "Code active"}</span>
          ${lc.active===false
            ? `<button class="btn small" onclick="setLearnerAccess(true)">Switch code back on</button>`
            : `<button class="btn secondary small" onclick="setLearnerAccess(false)">Switch code off</button>`}
        </div>
        <p class="muted" style="font-size:.85rem;margin-top:6px;">Switch the code off once this learner's report is ready, so it no longer lets anyone in. You can switch it back on again later if you need to.</p>
      </div>
      <div class="card">
        <h3>Danger zone</h3>
        <button class="btn danger small" onclick="deleteThisSession()">Delete this session</button>
      </div>
    </div>
  `;
}
function copyLearnerSessionLink(){
  const s = STATE.session;
  if(!s) return;
  const url = baseUrl() + "#learner=" + b64urlEncode({sc: s.code});
  const box = document.getElementById("learnerLinkBox-overview");
  if(!box) return;
  box.innerHTML = `
    <div class="row" style="width:100%;max-width:420px;margin-top:8px;">
      <input type="text" readonly value="${escapeHtml(url)}" onfocus="this.select()" id="learnerSessionLinkInput" />
      <button class="btn small" onclick="copyLink('learnerSessionLinkInput')">Copy</button>
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
   Dynamic item count / pass / ceiling thresholds. Unlike the Mathematics
   tool (where every grade/area combination always has the same item
   count, so a single fixed itemCount/passAt/failAt per area is safe),
   real CAPS-grounded Afrikaans FAL item counts genuinely differ by grade
   within the same area (Fonetiese Klanke has 0 items at Grade 1, 6 at
   Grade 2 and 3; Luister en Praat has 10 at Grade 1, 8 at Grade 2, 6 at
   Grade 3; etc) - so pass/ceiling here is a PERCENTAGE of whatever that
   grade's item set actually has (AREA_META[area].passRatio/failRatio),
   computed fresh from fal_items.js at render time.
   ============================================================ */
function itemCountFor(area, grade){
  const items = FAL_ITEMS[area] && FAL_ITEMS[area][grade];
  return items ? items.length : 0;
}
function passAtFor(area, grade){
  const n = itemCountFor(area, grade);
  if(!n) return 0;
  return Math.max(1, Math.round(n * AREA_META[area].passRatio));
}
function failAtFor(area, grade){
  const n = itemCountFor(area, grade);
  if(!n) return 0;
  return Math.floor(n * AREA_META[area].failRatio);
}

/* ============================================================
   The four content areas: Luister en Praat, Fonetiese Klanke, Lees,
   Skryf. Same learner-code / link mechanism as the other three subjects.
   Every area here is learner-device based (there is no oral/
   examiner-only area, unlike Mathematics' Number Sense), so there is one
   shared render function rather than a separate oral vs digital one.
   ============================================================ */
function digitalAreaHtml(area){
  const s = STATE.session;
  const meta = AREA_META[area];
  if(!s.scores[area]) s.scores[area] = {};
  const grade = STATE.areaGrade[area] || s.gradeStart;
  const cap = STATE.captureCache[area+"_"+grade];
  const items = (FAL_ITEMS[area] && FAL_ITEMS[area][grade]) || null;
  const rec = s.scores[area][grade] || {};
  const marks = rec.marks || [];
  const correctCount = marks.filter(x=>x===true).length;
  const itemCount = itemCountFor(area, grade);
  const placement = placementGradeFor(area);
  const lc = STATE.liveChannel || {area: null, grade: null, active: true};
  const isLiveHere = lc.area === area && String(lc.grade) === String(grade);
  return `
    <div class="grid" style="max-width:820px;">
      <h2 style="margin:0;">${escapeHtml(meta.label)}</h2>
      <p class="note">${escapeHtml(meta.blurb)} Send this to the learner's screen with their one session code already entered; you can still correct any item yourself.</p>
      <div class="card">
        <label>Grade-level item set</label>
        <select onchange="changeAreaGrade('${area}',this.value)">
          ${gradesWithItems(area).map(g=>`<option value="${g}" ${String(g)===String(grade)?'selected':''}>Grade ${gradeLabel(g)}</option>`).join("")}
        </select>
        <div class="row" style="margin-top:8px;gap:8px;flex-wrap:wrap;align-items:center;">
          ${isLiveHere
            ? `<span class="chip">Now on learner's screen</span><button class="btn secondary small" onclick="clearLiveItem()">Clear learner's screen</button>`
            : `<button class="btn small" onclick="pushLiveItem('${area}','${grade}')">Send to learner's screen</button>`}
          <button class="btn secondary small" onclick="enterLearnerModeDirectly('${area}','${grade}')">Hand this screen to the learner now</button>
        </div>
        ${!items ? `<p class="muted" style="margin-top:14px;">Grade ${escapeHtml(grade)} items for ${escapeHtml(meta.shortLabel)} aren't written yet${area==='fonetiese' && String(grade)==='1' ? " - this is expected: real phonics instruction under CAPS only begins at Grade 2" : ""}.</p>` : `
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
          <div class="score-tile"><span class="num">${correctCount}/${itemCount}</span><span class="lbl">Correct</span></div>
          <div class="score-tile"><span class="num">${pct(correctCount,itemCount)}%</span><span class="lbl">Accuracy</span></div>
        </div>`}
      </div>
      <div class="card">
        <h3>Placement guide</h3>
        <p class="muted">${items ? `${passAtFor(area,grade)}/${itemCount} or more counts as a pass at Grade ${gradeLabel(grade)} (basal); ${failAtFor(area,grade)}/${itemCount} or fewer counts as a ceiling.` : ""} Test up from a pass, down from a ceiling, until you find the highest grade the learner passes.</p>
        ${placementTableHtml(area)}
        <p style="margin-top:8px;">${placement!=null ? `<strong>Estimated ${escapeHtml(meta.shortLabel)} grade level: Grade ${gradeLabel(placement)}</strong>` : "Not enough data yet to estimate a grade level for this area."}</p>
      </div>
    </div>
  `;
}
function changeAreaGrade(area, g){
  STATE.areaGrade[area] = g;
  startCapturePolling(area, g);
  // Changing the grade-level dropdown re-sends this area at the new
  // grade, same reasoning as setNav() above.
  pushLiveItem(area, g);
  renderConsoleContent();
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
const CAPTURE_KINDS = DIGITAL_AREAS; // kept as a plain array; mirrors the other subjects' CAPTURE_KINDS naming
// Switches THIS device straight to the learner's view for one area/grade -
// for when the examiner hands their own screen/tablet to the child instead
// of using a separate device.
function enterLearnerModeDirectly(area, grade){
  const s = STATE.session;
  if(s) writeLiveChannel({area, grade, active: true}); // fire-and-forget
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
function areaPass(rec, area, grade){
  if(!rec || !rec.marks) return false;
  const correct = rec.marks.filter(x=>x===true).length;
  return correct >= passAtFor(area, grade);
}
function areaFail(rec, area, grade){
  if(!rec || !rec.marks) return false;
  const correct = rec.marks.filter(x=>x===true).length;
  return correct <= failAtFor(area, grade);
}
function placementGradeFor(area){
  const s = STATE.session;
  if(!s || !s.scores[area]) return null;
  const graded = Object.keys(s.scores[area]).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  let placement = null;
  graded.forEach(g => { if(areaPass(s.scores[area][g], area, g)) placement = Math.max(placement==null?-Infinity:placement, g); });
  return placement;
}
function placementTableHtml(area){
  const s = STATE.session;
  const graded = Object.keys(s.scores[area]||{}).map(g=>parseInt(g,10)).sort((a,b)=>a-b);
  if(!graded.length) return `<p class="muted">No grade sets scored yet.</p>`;
  return `<table><tr><th>Grade</th><th>Correct</th><th>Result</th></tr>
    ${graded.map(g => {
      const r = s.scores[area][g];
      const c = (r.marks||[]).filter(x=>x===true).length;
      const result = areaPass(r,area,g) ? "Pass (basal)" : (areaFail(r,area,g) ? "Ceiling" : "Borderline");
      return `<tr><td>Grade ${gradeLabel(g)}</td><td>${c}/${itemCountFor(area,g)}</td><td>${result}</td></tr>`;
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
   across all 4 content areas and Grade 1-3, with its answer, in the
   exact same style/layout as the other subjects' reference booklets.
   Nothing on it is ever shown to a learner.
   ============================================================ */
function falRefAnswerHtml(it){
  if(it.type === "choice"){
    return it.options.map((opt,oi) => oi===it.answer
      ? `<strong>${escapeHtml(opt)}</strong>`
      : escapeHtml(opt)
    ).join(" / ");
  }
  return `<strong>${escapeHtml(it.answer)}</strong>`;
}
function falRefAreaSection(area){
  const meta = AREA_META[area];
  const gradeBlocks = GRADE_RANGE.map(g => {
    const items = (FAL_ITEMS[area] && FAL_ITEMS[area][g]) || [];
    if(!items.length) return "";
    return `
      <div class="ref-block">
        <h3>Grade ${gradeLabel(g)}</h3>
        <ol>${items.map(it => `<li>${escapeHtml(it.prompt)} <span class="muted">(Answer: ${falRefAnswerHtml(it)})</span></li>`).join("")}</ol>
      </div>
    `;
  }).join("");
  return `
    <h2 class="ref-break">${escapeHtml(meta.label)}</h2>
    <p class="muted" style="margin-top:-6px;">${escapeHtml(meta.blurb)}</p>
    ${gradeBlocks || '<p class="muted">No items written for this area yet.</p>'}
  `;
}
function falReferenceBookletHtml(){
  const sections = AREA_ORDER.map(a => falRefAreaSection(a)).join("");
  return `
    <div class="grid" style="max-width:900px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Reference booklet</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">This is a plain paper copy of every Afrikaans FAL question and its answer, across all 4 content areas and Grade 1-3, for your own reference while you test. Nothing on this page is ever sent to a learner. Print it once and keep it with your kit.</p>
      <div id="printableReference" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Afrikaans FAL!, Reference Booklet</h2>
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
   Learner response booklet: blank, paper-based answer sheets for all
   four content areas, one per grade, for when a learner writes on paper
   instead of using a device. Carries no answers, so it is safe to hand
   to a learner or leave on a desk.
   ============================================================ */
function falResponseItemHtml(it, idx){
  const stim = stimulusHtml(it);
  const bigWord = bigWordHtml(it);
  if(it.type === "choice"){
    const optionCells = it.options.map(opt => `
      <span style="display:inline-flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;border:2px solid #8a8070;border-radius:12px;padding:8px 12px;min-width:56px;min-height:56px;">${visualTokenHtml(opt, 44, !!it.hideOptionCaptions)}</span>
    `).join("");
    return `
      <div style="margin-bottom:16px;">
        ${it.prompt ? `<div style="margin-bottom:6px;">${idx+1}. ${escapeHtml(it.prompt)}</div>` : `<div style="margin-bottom:6px;">${idx+1}.</div>`}
        ${bigWord}
        ${stim}
        <div class="row" style="gap:14px;flex-wrap:wrap;padding-left:22px;margin-top:4px;">${optionCells}</div>
      </div>
    `;
  }
  return `
    <div style="margin-bottom:14px;">
      ${it.prompt ? `<div style="margin-bottom:4px;">${idx+1}. ${escapeHtml(it.prompt)}</div>` : `<div style="margin-bottom:4px;">${idx+1}.</div>`}
      ${bigWord}
      ${stim}
      <div style="padding-left:22px;margin-top:4px;">
        <span style="display:inline-block;width:120px;border-bottom:1px solid #333;height:26px;"></span>
      </div>
    </div>
  `;
}
function falResponseSheetsHtml(){
  const areaSheets = DIGITAL_AREAS.map(area => {
    const meta = AREA_META[area];
    const gradeSheets = GRADE_RANGE.map(g => {
      const items = (FAL_ITEMS[area] && FAL_ITEMS[area][g]) || [];
      if(!items.length) return "";
      return `
        <div class="ref-block ref-break">
          <h3>${escapeHtml(meta.label)}, Grade ${gradeLabel(g)}</h3>
          ${sheetHeaderHtml()}
          <p class="muted" style="margin-bottom:14px;">Answer each question below. For questions with choices, circle the picture that is your answer.</p>
          <div style="max-width:560px;">${items.map((it,i) => falResponseItemHtml(it,i)).join("")}</div>
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
      <p class="note no-print">Blank, paper-based answer sheets for every content area, one per grade. These carry no answers, only what the learner writes or circles themselves, so they are safe to print and hand out. Print just the page(s) you need for today's grade and content area, or the whole set to keep on hand.</p>
      <div id="printableResponseSheets" class="card">
        <div class="row" style="justify-content:space-between;align-items:flex-start;">
          <div>
            <h2 style="margin:0;">Afrikaans FAL!, Learner Response Booklet</h2>
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
// the Afrikaans FAL report, grounded strictly in the scores already
// recorded for this session - no numbers are invented here, only phrased
// into sentences. The examiner can edit or regenerate each section
// afterwards.
function generateFalNarrative(s){
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
      out[area] = `${name} has attempted up to Grade ${gradeLabel(topGrade)} level in ${meta.label} (${topCorrect}/${itemCountFor(area,topGrade)} correct) but has not yet reached a clear basal pass at any grade tested. Consider testing an easier grade to establish a secure basal level.`;
    } else {
      const gap = currentGrade - placement;
      let placementSentence;
      if(gap<=0) placementSentence = `in line with the current Grade ${gradeLabel(currentGrade)} placement`;
      else placementSentence = `${gap} grade${gap===1?"":"s"} behind the current Grade ${gradeLabel(currentGrade)} placement`;
      out[area] = `${name} passed ${meta.label} at a Grade ${gradeLabel(placement)} level on this tool's basal/ceiling criteria, ${placementSentence}.`;
    }
  });

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

  const anyData = AREA_ORDER.some(area => placements[area]!=null);
  if(!anyData){
    out.conclusion = `Assessment is still in progress. A conclusion can be generated once more content areas have been scored.`;
  } else {
    out.conclusion = `${name}'s overall Afrikaans FAL placement across the four content areas assessed is approximately Grade ${composite!=null?gradeLabel(composite):"not yet determined"}, a weighted average with Luister en Praat (Listening and Speaking) weighted most heavily, in line with how strongly oral vocabulary dominates the real CAPS FAL curriculum. ${areas.length ? `The clearest area${areas.length===1?"":"s"} of need identified ${areas.length===1?"is":"are"} summarised above under Areas for Development. ` : ""}With focused support in these specific areas, ${name} has a good foundation to build from.`;
  }

  return out;
}

/* ============================================================
   Individualised Support Plan (ISP)
   An 8-week, editable intervention plan grounded in this session's own
   recorded scores (via getTargetAreas, reusing overallPlacement and the
   same gap logic as the report's narrative above) and built from this
   tool's own real content bank (FAL_ITEMS) rather than invented items.
   ============================================================ */

// This tool's weekly technique descriptions below are grounded in NILD
// Educational Therapy's own published, general description of its
// multisensory, Orton-Gillingham-informed approach to language learning
// (nildsa.co.za): hands-on, structured, cumulative, multisensory
// instruction; mediation and Socratic questioning; and deliberately
// building vocabulary and oral language confidence before pushing
// reading/writing independence - not NILD's own copyrighted session
// plans, which this project has no access to.
const FAL_RX_NOTE = "This plan's \"NILD-Informed\" techniques are grounded in NILD Educational Therapy's own published, general description of its multisensory, structured, Orton-Gillingham-informed approach to language learning - not NILD's own copyrighted session plans, which this tool does not have access to. Please check this plan against your own NILD training and materials before using it for intervention.";
const RX_TECHNIQUES = [
  "hands-on, multisensory practice (real objects, pictures, and saying the word aloud together) to build the Afrikaans word or phrase before expecting it to be read or written independently",
  "mediated learning: pausing to ask simple questions (\"wys vir my...\", \"watter een...?\") instead of supplying the answer, so the learner builds the word-picture link themselves",
  "modelling the correct Afrikaans pronunciation clearly, then having the learner repeat it before moving on",
  "keeping new vocabulary cumulative and well-practised before introducing the next small set of words, rather than moving on before the current set is secure",
  "keeping the pace calm, positive and success-oriented, since confidence in a second language builds fastest where mistakes feel safe",
  "letting the learner use a newly-learned word or phrase in one small sentence or exchange of their own, not only in repeating the taught item"
];
function rxTechniqueFor(i){ return RX_TECHNIQUES[((i%RX_TECHNIQUES.length)+RX_TECHNIQUES.length)%RX_TECHNIQUES.length]; }

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
      out.push({id:area, label:meta.label, baseline:`No basal pass reached up to Grade ${gradeLabel(topGrade)} (${topCorrect}/${itemCountFor(area,topGrade)})`, goal:"Establish a secure basal pass through structured, concrete practice at an easier grade level.", severity:45, grade: Math.max(1, topGrade-1)});
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

const ISP_DEFAULT_SEQUENCE = AREA_ORDER.map(area => ({id:area, label:AREA_META[area].label, baseline:"Not yet assessed", goal:`Confirm ${AREA_META[area].label} at an appropriate grade level.`, grade:1}));

function buildWeekPlan(target, weekNum, name, repeatRound){
  const suffix = repeatRound>0 ? " (continued and extended)" : "";
  const technique = rxTechniqueFor(weekNum-1);
  const meta = AREA_META[target.id];
  const grade = target.grade!=null ? target.grade : 1;
  const items = (FAL_ITEMS[target.id] && FAL_ITEMS[target.id][grade]) || (FAL_ITEMS[target.id] && FAL_ITEMS[target.id][1]) || [];
  const itemText = it => it.prompt + (it.answer!=null ? ` (answer: ${(it.type==='choice' && it.options) ? it.options[it.answer] : it.answer})` : "");
  const materials = [
    "Real objects, flashcards or simple pictures appropriate to Grade "+gradeLabel(grade)+"'s vocabulary",
    "This tool's own "+meta.shortLabel+" item set (printed or on screen)"
  ];
  const half = Math.ceil(items.length/2);
  const guided = items.slice(0, half).map(itemText);
  const independent = items.slice(half).map(itemText);
  const warmUp = `Review 2-3 items ${name} already handles confidently in ${meta.label}, as a confidence warm-up.`;
  const teachModel = `Model 1-2 new items from this week's set aloud, in Afrikaans, step by step, using real objects or pictures. This area covers: ${meta.blurb}`;
  const closure = `Ask ${name} to say, in Afrikaans, one word or phrase they practised today - listening for clear pronunciation, not just a correct tap or typed answer.`;

  const lessonText =
`Focus: ${meta.label}${suffix}
Objective: ${target.goal}

Warm-Up (5 min): ${warmUp}

Teach/Model (10 min): ${teachModel}

Multisensory (NILD-Informed) Technique: ${technique}.

Guided Practice (work through together):
${(guided.length?guided:["No Grade "+gradeLabel(grade)+" items are written yet for "+meta.shortLabel+" in this tool - substitute items from your own NILD materials."]).map(g=>"- "+g).join("\n")}

Independent Practice (learner completes with support available if needed):
${(independent.length?independent:["See Guided Practice above - repeat with new words or examples."]).map(g=>"- "+g).join("\n")}

Closure (5 min): ${closure}`;

  const homeworkText =
`Week ${weekNum} Homework: ${meta.label}
Practice 10-15 minutes, 3-4 times this week.

${(independent.length?independent:guided).map(g=>"- "+g).join("\n")}

Note for parents/caregivers: Keep sessions short, calm and positive - this is practice of what was already taught this week, not a test. If ${name} gets stuck, say the Afrikaans word together rather than drilling it.`;

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

Multisensory (NILD-Informed) Technique: ${rxTechniqueFor(7)}.

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
      <p class="muted no-print" style="font-size:.85rem;">${escapeHtml(FAL_RX_NOTE)}</p>
      ${usedDefault ? `<p class="note no-print" style="color:var(--clay-dark);">No clear area of weakness could be identified yet from this session's recorded scores, so this plan uses a general, default sequence of all four content areas as a starting point. Score more content areas, then revisit this plan, or edit it directly below.</p>` : ""}
      <div class="card" id="printableISP">
        ${letterheadHtml("INDIVIDUALISED SUPPORT PLAN")}
        <h2 class="report-title" style="margin-top:-6px;">An 8-Week Program for ${escapeHtml(s.learnerName||"")}</h2>
        ${ispInfoTableHtml(s)}

        <p>This Individualised Support Plan sets out an 8-week program of structured intervention for ${name}, based on the results of the assessment summarised in this learner's Report, to target the specific content areas identified below.</p>

        <h3 class="section-num">A NILD-Informed Approach</h3>
        <p>This plan draws on NILD-informed principles: building Afrikaans oral vocabulary, pronunciation and emerging reading/writing skills through hands-on, multisensory activities, mediation and structured, cumulative practice, in an environment that keeps second-language anxiety low and confidence high. Each week below names the specific technique used.</p>

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
  const narrative = generateFalNarrative(s);
  const currentGrade = parseInt(s.gradeStart,10);
  const areaNumeral = {luisterpraat:"1", fonetiese:"2", lees:"3", skryf:"4"};

  return `
    <div class="grid" style="max-width:820px;">
      <div class="row no-print" style="justify-content:space-between;">
        <h2 style="margin:0;">Report</h2>
        <button class="btn small" onclick="window.print()">Print / Save as PDF</button>
      </div>
      <p class="note no-print">Every narrative section below is auto-drafted from the scores recorded in this session. Edit any section directly, or use "Regenerate from scores" to discard your edits and pull the auto-drafted text back in. Nothing is finalised until you print or save - review and edit the write-up before sending it on.</p>
      <div class="card" id="printableReport">
        ${letterheadHtml("AFRIKAANS FIRST ADDITIONAL LANGUAGE ASSESSMENT REPORT")}
        ${learnerInfoTableHtml(s)}

        <p>This report presents the results of an Afrikaans First Additional Language (FAL) assessment conducted with ${name}, to establish current levels of Afrikaans oral vocabulary, phonics, reading and writing skill development across the four CAPS content areas, and to guide recommendations for further support.</p>
        <p><strong>Assessment Tools Used:</strong> Luister en Praat (Listening and Speaking), Fonetiese Klanke (Letter and Phonic Sounds), Lees (Reading), and Skryf (Writing), each tested with a basal/ceiling climb across Grade 1-3 CAPS-aligned items. All tasks were administered using the Afrikaans FAL Placement Tool (Debby Smit Educational Therapy).</p>
        <p><strong>Purpose of the Assessment:</strong> To evaluate ${name}'s current Afrikaans First Additional Language skills against grade-level CAPS expectations across all four content areas, and to identify areas of strength and areas that require further support.</p>
        <p class="muted" style="font-size:.85rem;">${escapeHtml(FAL_CONTENT_NOTE)} This report reflects a CAPS-curriculum-based diagnostic screening, not a formal, standardised psychometric assessment - not a clinical diagnosis or a norm-referenced score.</p>

        <table style="margin-top:4px;">
          <tr><th>Content Area</th><th>Definition</th><th>Weight</th><th>Placement</th><th>Comments</th></tr>
          ${AREA_ORDER.map(area => {
            const meta = AREA_META[area];
            return `<tr><td><strong>${escapeHtml(meta.label)}</strong></td><td style="font-size:.9rem;">${escapeHtml(meta.blurb)}</td><td>${Math.round(meta.weight*100)}%</td><td>${placements[area]!=null?"Grade "+gradeLabel(placements[area]):"Not yet enough data"}</td><td>${escapeHtml(areaComment(area, placements[area], currentGrade))}</td></tr>`;
          }).join("")}
        </table>
        <p style="margin-top:10px;">${composite!=null ? `<strong>Overall Afrikaans FAL placement: Grade ${gradeLabel(composite)}</strong> (a weighted average across all four areas, with Luister en Praat weighted most heavily)` : "Not enough data yet across the content areas to compute an overall placement."}</p>

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
