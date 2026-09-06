// Pure digital-capture storage logic, independent of the Netlify runtime.
// A capture record holds whatever a learner has typed so far for one
// session's one item (kind + grade), so the examiner's device can read it
// back. Scoping every key by session code means two different learners'
// typing can never collide, even on the same kind/grade, and there is
// nothing left to "clear between learners" the way the old same-device,
// session-less design needed.
function key(session, kind, grade) {
  return `${String(session).toUpperCase()}/${kind}/${grade}`;
}

export async function readCapture(store, session, kind, grade) {
  return (await store.get(key(session, kind, grade), { type: "json" })) || null;
}

export async function writeCapture(store, session, kind, grade, data) {
  const record = Object.assign({}, data, { updatedAt: Date.now() });
  await store.setJSON(key(session, kind, grade), record);
  return record;
}

export async function clearCapture(store, session, kind, grade) {
  await store.delete(key(session, kind, grade));
  return true;
}
