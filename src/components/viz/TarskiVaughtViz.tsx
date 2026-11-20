"use client";

import { useState } from "react";

export const PAIRS = [
  {
    label: "(ℚ, <) inside (ℝ, <)",
    formula: "φ(a, b): ∃x (a < x ∧ x < b), with a = 0, b = 1",
    small: "true: take x = 1/2",
    big: "true",
    elementary: true,
    note: "Every formula with rational parameters that has a real witness has a rational one. By Tarski-Vaught, (ℚ, <) is an elementary substructure.",
  },
  {
    label: "(ℕ, <) inside (ℤ, <)",
    formula: "φ(a): ∃x (x < a), with a = 0",
    small: "false: nothing in ℕ is below 0",
    big: "true: take x = −1",
    elementary: false,
    note: "The witness −1 lies outside ℕ, and nothing in ℕ can replace it. The substructure is not elementary.",
  },
  {
    label: "(2ℤ, +) inside (ℤ, +)",
    formula: "φ(a): ∃y (y + y = a), with a = 2",
    small: "false: y = 1 is not in 2ℤ",
    big: "true: take y = 1",
    elementary: false,
    note: "2ℤ is isomorphic to ℤ, so the two are elementarily equivalent, yet with the parameter 2 they disagree. Equivalence does not give elementarity.",
  },
];

/** The Tarski-Vaught test: a substructure is elementary when every formula with parameters from it that has a witness has one inside it. */
export function TarskiVaughtViz() {
  const [k, setK] = useState(0);
  const P = PAIRS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="pair of structures">
        {PAIRS.map((p, i) => <button key={p.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p.label}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="A formula with parameters, evaluated in the smaller and the larger structure" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={24} style={{ fill: "var(--text)", fontSize: 13 }}>{P.formula}</text>
        <rect x={14} y={44} width={250} height={70} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={24} y={66} style={{ fill: "var(--text-muted)", fontSize: 11 }}>in the smaller structure</text>
        <text x={24} y={92} style={{ fill: P.small.startsWith("true") ? "var(--success)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{P.small}</text>
        <rect x={276} y={44} width={250} height={70} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={286} y={66} style={{ fill: "var(--text-muted)", fontSize: 11 }}>in the larger structure</text>
        <text x={286} y={92} style={{ fill: "var(--success)", fontSize: 13, fontWeight: 700 }}>{P.big}</text>
        <text x={14} y={146} style={{ fill: P.elementary ? "var(--success)" : "var(--danger)", fontSize: 14, fontWeight: 700 }}>{P.elementary ? "elementary substructure" : "substructure, but not elementary"}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{P.note}</p>
      <figcaption className="viz-caption">
        M is an elementary substructure of N when every formula with parameters from M has the same truth value in M as in
        N. The Tarski-Vaught test reduces this to existential formulas: whenever N has a witness, M must have one too.
      </figcaption>
    </figure>
  );
}
