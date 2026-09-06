// Pure session storage logic, independent of the Netlify runtime, so it can
// be unit/integration tested with any store object that implements
// get(key, {type:"json"}), setJSON(key, value), delete(key) - the same
// shape @netlify/blobs' getStore() returns.
const INDEX_KEY = "_index";

export async function listSessions(store) {
  const index = (await store.get(INDEX_KEY, { type: "json" })) || [];
  return index.slice().sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0)).slice(0, 50);
}

export async function getSession(store, code) {
  if (!code) return null;
  return (await store.get(String(code).toUpperCase(), { type: "json" })) || null;
}

export async function saveSession(store, sess) {
  if (!sess || !sess.code) throw new Error("Session must have a code");
  const code = String(sess.code).toUpperCase();
  const toSave = Object.assign({}, sess, { code });
  await store.setJSON(code, toSave);
  const index = (await store.get(INDEX_KEY, { type: "json" })) || [];
  const summary = {
    code,
    learnerName: sess.learnerName,
    gradeStart: sess.gradeStart,
    createdAt: sess.createdAt,
    status: sess.status
  };
  const filtered = index.filter((x) => x.code !== code);
  filtered.push(summary);
  await store.setJSON(INDEX_KEY, filtered);
  return true;
}

export async function deleteSession(store, code) {
  if (!code) return false;
  const upper = String(code).toUpperCase();
  await store.delete(upper);
  const index = (await store.get(INDEX_KEY, { type: "json" })) || [];
  await store.setJSON(INDEX_KEY, index.filter((x) => x.code !== upper));
  return true;
}
