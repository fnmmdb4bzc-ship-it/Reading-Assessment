import { getStore } from "@netlify/blobs";
import { readCapture, writeCapture, clearCapture } from "./lib/captureStore.mjs";

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
  const store = getStore("captures");
  const url = new URL(req.url);
  const session = url.searchParams.get("session");
  const kind = url.searchParams.get("kind");
  const grade = url.searchParams.get("grade");

  if (!session || !kind || !grade) {
    return new Response(JSON.stringify({ error: "session, kind and grade are all required" }), { status: 400, headers: CORS });
  }

  try {
    if (req.method === "GET") {
      const rec = await readCapture(store, session, kind, grade);
      return new Response(JSON.stringify(rec), { headers: CORS });
    }
    if (req.method === "POST") {
      const body = await req.json();
      const rec = await writeCapture(store, session, kind, grade, body);
      return new Response(JSON.stringify(rec), { headers: CORS });
    }
    if (req.method === "DELETE") {
      await clearCapture(store, session, kind, grade);
      return new Response(JSON.stringify({ ok: true }), { headers: CORS });
    }
    return new Response("Method not allowed", { status: 405, headers: CORS });
  } catch (e) {
    return new Response(JSON.stringify({ error: String((e && e.message) || e) }), { status: 500, headers: CORS });
  }
};
