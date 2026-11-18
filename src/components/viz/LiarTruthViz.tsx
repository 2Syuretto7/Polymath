"use client";

import { useState } from "react";

const CASES = [
  {
    name: "suppose L is true",
    steps: ["L is true.", "So, by the T-schema, True(⌜L⌝) holds.", "But L is equivalent to ¬True(⌜L⌝), so L is false.", "Contradiction: L is both true and false."],
  },
  {
    name: "suppose L is false",
    steps: ["L is false, so ¬L.", "L is equivalent to ¬True(⌜L⌝), so ¬¬True(⌜L⌝): True(⌜L⌝).", "By the T-schema, True(⌜L⌝) gives L.", "Contradiction: L is both false and true."],
  },
];

/** Tarski: if True(x) defined truth, the diagonal lemma would build the liar, and both cases collapse. */
export function LiarTruthViz() {
  const [c, setC] = useState(0);
  const [k, setK] = useState(1);
  const C = CASES[c];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((x, i) => <button key={x.name} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => { setC(i); setK(1); }}>{x.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, margin: "10px 0 4px" }}>Assume True(x) defines truth, so True(⌜σ⌝) ↔ σ for every σ. The diagonal lemma gives L with L ↔ ¬True(⌜L⌝).</p>
      <ol className="mono" style={{ fontSize: 14, display: "grid", gap: 4, paddingLeft: 22 }}>
        {C.steps.slice(0, k).map((s, i) => (
          <li key={s} style={{ color: i === C.steps.length - 1 ? "var(--danger)" : "var(--text)", fontWeight: i === C.steps.length - 1 ? 700 : 400 }}>{s}</li>
        ))}
      </ol>
      <div className="viz-controls" style={{ display: "flex", gap: 8 }}>
        <button type="button" className="btn btn-ghost" disabled={k <= 1} onClick={() => setK(k - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={k >= C.steps.length} onClick={() => setK(k + 1)}>Next step</button>
      </div>
      <figcaption className="viz-caption">
        Either way the assumption collapses. The fault is not in L, which the diagonal lemma always supplies, but in the
        supposed formula True(x). So no formula of arithmetic defines arithmetical truth.
      </figcaption>
    </figure>
  );
}
