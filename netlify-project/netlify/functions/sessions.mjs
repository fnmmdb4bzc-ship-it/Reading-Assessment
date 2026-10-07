import { getStore } from "@netlify/blobs";
import { listSessions, getSession, saveSession, deleteSession } from "./lib/sessionsStore.mjs";

const CORS = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type"
};

const VALID_SUBJECTS = ["english", "afrikaans", "math"];

// English keeps the exact store name the original standalone reading
// tool used ("sessions", no suffix), so this unified app reads and
// writes the SAME Netlify Blobs store that's already live at
// dsetletsread.netlify.app - every learner session already recorded
// there keeps showing up here with no migration step. Afrikaans and
// Math have never been deployed under this app before, so they get
// their own new, subject-scoped store names.
const SESSIONS_STORE_NAME = {
  english: "sessions",
  afrikaans: "sessions-afrikaans",
  math: "sessions-math",
  default: "sessions-default"
};

export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }
  const url = new URL(req.url);
  const subjectParam = url.searchParams.get("subject");
  // Each of the three placement tools (English, Afrikaans, Mathematics)
  // gets its own completely separate Blobs store, so one tab's sessions
  // never show up in another tab's session list. Falling back to
  // "default" (instead of erroring) if the subject is ever missing keeps
  // this function from 500-ing on a stray request rather than silently
  // losing data in the wrong place.
  const subject = VALID_SUBJECTS.includes(subjectParam) ? subjectParam : "default";
  const store = getStore(SESSIONS_STORE_NAME[subject]);
  const code = url.searchParams.get("code");

  try {
    if (req.method === "GET") {
      if (code) {
        const sess = await getSession(store, code);
        return new Response(JSON.stringify(sess), { headers: CORS, status: sess ? 200 : 404 });
      }
      const list = await listSessions(store);
      return new Response(JSON.stringify(list), { headers: CORS });
    }
    if (req.method === "POST") {
      const body = await req.json();
      await saveSession(store, body);
      return new Response(JSON.stringify({ ok: true }), { headers: CORS });
    }
    if (req.method === "DELETE") {
      await deleteSession(store, code);
      return new Response(JSON.stringify({ ok: true }), { headers: CORS });
    }
    return new Response("Method not allowed", { status: 405, headers: CORS });
  } catch (e) {
    return new Response(JSON.stringify({ error: String((e && e.message) || e) }), { status: 500, headers: CORS });
  }
};
