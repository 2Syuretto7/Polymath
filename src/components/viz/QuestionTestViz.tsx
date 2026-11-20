"use client";

import { useState } from "react";

const TESTS = ["open: still disputed", "focused: answerable in 15,000 words", "anchored: has a literature to engage", "yours: you have something to add"];
const CANDIDATES = [
  { q: "What is the meaning of life?", pass: [true, false, true, false], note: "Too broad: a thesis can only gesture at it. Narrow it to one view or one argument." },
  { q: "In what year did Kant publish the Groundwork?", pass: [false, true, true, false], note: "Settled and not philosophical: look it up, then ask what the book argues." },
  { q: "Does Frankfurt’s case refute the principle of alternative possibilities?", pass: [true, true, true, false], note: "A good question, but crowded: you need a fresh angle, such as a new kind of case." },
  { q: "Can Ambedkar’s idea of fraternity ground political obligation?", pass: [true, true, true, true], note: "Open, focused, anchored in two literatures, and with room for a new connection." },
];

/** Testing candidate thesis questions against four criteria. */
export function QuestionTestViz() {
  const [k, setK] = useState(0);
  const C = CANDIDATES[k];
  const passed = C.pass.filter(Boolean).length;
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 6 }}>
        {CANDIDATES.map((c, i) => (
          <button key={i} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} style={{ textAlign: "left" }} onClick={() => setK(i)}>{c.q}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(170px, 1fr))", gap: 8, marginTop: 12 }}>
        {TESTS.map((t, i) => (
          <div key={t} style={{ padding: "8px 10px", borderRadius: 8, border: `2px solid ${C.pass[i] ? "var(--success)" : "var(--danger)"}`, background: C.pass[i] ? "var(--success-soft)" : "var(--danger-soft)", fontSize: 13 }}>
            <strong>{C.pass[i] ? "Passes" : "Fails"}</strong>: {t}
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        {passed} of 4 tests passed. {C.note}
      </p>
      <figcaption className="viz-caption">
        A thesis question should be genuinely open, small enough to answer properly, connected to existing work, and one
        on which you can say something that is not already in the literature. Most good questions start broad and are
        narrowed by reading.
      </figcaption>
    </figure>
  );
}
