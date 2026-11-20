"use client";

import { useState } from "react";

export const FORMULAS: { label: string; holds: (re: number, im: number) => boolean; qf: string; kind: string }[] = [
  { label: "∃y (y² = x)", holds: () => true, qf: "x = x (always true)", kind: "all of ℂ, which is cofinite" },
  { label: "∃y (xy = 1)", holds: (re, im) => re !== 0 || im !== 0, qf: "x ≠ 0", kind: "cofinite: everything except one point" },
  { label: "∃y (xy = 1 ∧ y² = 1)", holds: (re, im) => im === 0 && Math.abs(re) === 1, qf: "x = 1 ∨ x = −1", kind: "finite: two points" },
  { label: "∃y (y ≠ 0 ∧ xy = 0)", holds: (re, im) => re === 0 && im === 0, qf: "x = 0", kind: "finite: one point" },
];

/** Quantifier elimination in ℂ: each formula ∃y φ(x, y) defines a finite or cofinite set of x. */
export function ACFProjectionViz() {
  const [k, setK] = useState(0);
  const F = FORMULAS[k];
  const grid: [number, number][] = [];
  for (let a = -4; a <= 4; a++) for (let b = -2; b <= 2; b++) grid.push([a, b]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="formula">
        {FORMULAS.map((f, i) => <button key={f.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Gaussian integer points of the complex plane, marked where the formula holds" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={85} x2={500} y2={85} style={{ stroke: "var(--grid-line)" }} />
        <line x1={270} y1={10} x2={270} y2={160} style={{ stroke: "var(--grid-line)" }} />
        <text x={505} y={89} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Re</text>
        <text x={282} y={12} style={{ fill: "var(--text-muted)", fontSize: 11 }}>Im</text>
        {grid.map(([a, b]) => {
          const on = F.holds(a, b);
          return <circle key={`${a},${b}`} cx={270 + a * 52} cy={85 - b * 32} r={8} style={{ fill: on ? "var(--accent)" : "var(--surface)", stroke: on ? "var(--accent)" : "var(--border-strong)" }} />;
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Over ℂ, {F.label} is equivalent to {F.qf}. The set it defines is {F.kind}.
      </p>
      <figcaption className="viz-caption">
        The dots are the points a + bi with small integers a and b, filled where the formula holds. In an algebraically
        closed field every formula is equivalent to a quantifier-free one, so in one variable it defines a finite or
        cofinite set: a Boolean combination of zero sets of polynomials.
      </figcaption>
    </figure>
  );
}
