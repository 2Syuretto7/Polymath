"use client";

import { useState } from "react";

const THESIS = "Responsibility does not require the ability to do otherwise.";
const OBJECTION = "In the Frankfurt case, Jones could still have shown a flicker of resistance before the device acted, so he did have an alternative.";
const STRATEGIES = [
  { label: "rebut", thesis: THESIS, strength: 100, how: "Deny the objection’s premise: argue that a mere flicker is too thin to ground responsibility.", cost: "None, if the new argument works; the paper gains a section." },
  { label: "refine", thesis: "Responsibility does not require robust alternatives, ones the agent could have chosen for reasons.", strength: 80, how: "Grant the flicker, but narrow the thesis to the kind of alternative that matters.", cost: "The claim is weaker, but more defensible and more precise." },
  { label: "concede part", thesis: "In some cases, responsibility does not require the ability to do otherwise.", strength: 50, how: "Accept the objection for the standard case, and keep the thesis for cases built to remove flickers.", cost: "A real loss of scope; say clearly what is left." },
  { label: "bite the bullet", thesis: THESIS, strength: 100, how: "Accept that Jones has a flicker, and argue that responsibility still does not depend on it.", cost: "You must explain why the alternative is idle, and some readers will find this hard to accept." },
];

/** Four ways to revise a thesis in the face of an objection. */
export function RevisionStrategyViz() {
  const [k, setK] = useState(1);
  const S = STRATEGIES[k];
  return (
    <figure className="viz">
      <div style={{ padding: "10px 14px", borderRadius: 8, background: "var(--bg-subtle)", border: "1px solid var(--border)" }}>
        <div><strong>Thesis:</strong> {THESIS}</div>
        <div style={{ marginTop: 6 }}><strong>Objection:</strong> {OBJECTION}</div>
      </div>
      <div className="segmented" role="group" aria-label="strategy" style={{ marginTop: 10 }}>
        {STRATEGIES.map((s, i) => (
          <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>
        ))}
      </div>
      <svg viewBox="0 0 540 40" role="img" aria-label="How much of the original claim survives" style={{ width: "100%", display: "block", marginTop: 10 }}>
        <rect x={20} y={10} width={500} height={18} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={20} y={10} width={5 * S.strength} height={18} rx={4} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Revised thesis: {S.thesis} Strength of the claim kept: {S.strength}%. {S.how}
      </p>
      <figcaption className="viz-caption">
        Cost: {S.cost} Every response to an objection trades strength for safety. The aim is not to keep the original
        thesis at all costs but to end with the strongest claim you can actually defend.
      </figcaption>
    </figure>
  );
}
