"use client";

import { useState } from "react";

const FACTS = [
  "Ripe tomatoes reflect light of about 650 nm.",
  "Such light excites L-cones more than M-cones.",
  "This produces a pattern of activity in area V4.",
  "People who see it say ‘red’ and compare it to fire.",
];
const REPLIES = [
  { k: "dualism", name: "Jackson (1982)", gain: "a new fact: what it is like to see red", verdict: "Since Mary knew all the physical facts and learnt a new fact, physicalism is false.", status: "new fact" },
  { k: "ability", name: "ability hypothesis", gain: "new abilities: to recognise, imagine and remember red", verdict: "Lewis and Nemirow: Mary gains know-how, not know-that. No new fact is learnt, so physicalism survives.", status: "know-how" },
  { k: "acq", name: "acquaintance", gain: "acquaintance with redness", verdict: "Conee: Mary becomes acquainted with a property she already knew about, as meeting a person you have read about.", status: "acquaintance" },
  { k: "concept", name: "phenomenal concepts", gain: "a new concept of an old fact", verdict: "Loar and others: Mary learns an old physical fact under a new, phenomenal concept, as one may learn that Hesperus is Phosphorus.", status: "old fact, new concept" },
];

/** Mary's room: what does Mary learn when she first sees red? Each reply reinterprets the gain. */
export function MaryViz() {
  const [out, setOut] = useState(false);
  const [r, setR] = useState(0);
  const R = REPLIES[r];
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Mary is a brilliant scientist raised in a black-and-white room. She knows every physical fact about colour vision.</p>
      <div style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "8px 12px" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "var(--text-muted)" }}>what Mary knows in the room (a sample)</p>
        {FACTS.map((f) => <div key={f} style={{ fontSize: 14 }}>• {f}</div>)}
        <div style={{ fontSize: 14 }}>• … and every other physical fact</div>
        {out && <div style={{ fontSize: 14, marginTop: 6, fontWeight: 700, color: "var(--accent)" }}>+ on release: {R.gain}</div>}
      </div>
      <div className="viz-controls">
        <button type="button" className={out ? "btn" : "btn btn-primary"} onClick={() => setOut(!out)}>{out ? "Put her back" : "Release Mary and show her a tomato"}</button>
      </div>
      {out && (
        <>
          <div className="segmented" role="group" aria-label="Reply" style={{ marginTop: 6 }}>
            {REPLIES.map((x, i) => <button key={x.k} type="button" aria-pressed={r === i} className={r === i ? "seg is-on" : "seg"} onClick={() => setR(i)}>{x.name}</button>)}
          </div>
          <p style={{ margin: "8px 0 4px", fontSize: 14 }}><strong>What she gains: {R.status}.</strong> {R.verdict}</p>
        </>
      )}
      <figcaption className="viz-caption">
        Almost everyone agrees Mary gains something on release. The argument turns on what kind of thing it is. Only if it is a new fact, unknown despite complete physical knowledge, does physicalism fail. Jackson himself later came to accept a physicalist reply.
      </figcaption>
    </figure>
  );
}
