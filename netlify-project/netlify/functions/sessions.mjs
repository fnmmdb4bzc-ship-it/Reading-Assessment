import { getStore } from "@netlify/blobs";
import { listSessions, getSession, saveSession, deleteSession } from "./lib/sessionsStore.mjs";

const CORS = {
  "content-type": "application/json",
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type"
};

export default async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 204, headers: CORS });
  }
  const store = getStore("sessions");
  const url = new URL(req.url);
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
