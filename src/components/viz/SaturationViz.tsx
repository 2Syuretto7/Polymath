"use client";

import { useState } from "react";

export const ZMODELS = [
  { label: "ℤ", blocks: 1, aAt: 0, above: false, below: false },
  { label: "ℤ + ℤ, a in the first copy", blocks: 2, aAt: 0, above: true, below: false },
  { label: "ℤ + ℤ + ℤ, a in the middle", blocks: 3, aAt: 1, above: true, below: true },
];

/** Types over one element a in Th(ℤ, <): x = a + n for each integer n, and two non-isolated types, infinitely above or below. */
export function SaturationViz() {
  const [k, setK] = useState(1);
  const M = ZMODELS[k];
  const W = 460 / M.blocks;
  const realised = Number(M.above) + Number(M.below);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="model">
        {ZMODELS.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>)}
      </div>
      <svg viewBox="0 0 540 100" role="img" aria-label="Copies of the integers placed one after another" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: M.blocks }, (_, b) => {
          const x0 = 40 + b * W;
          return (
            <g key={b}>
              <line x1={x0 + 6} y1={45} x2={x0 + W - 6} y2={45} style={{ stroke: "var(--border-strong)" }} />
              {Array.from({ length: 9 }, (_, j) => <circle key={j} cx={x0 + 14 + ((W - 28) * j) / 8} cy={45} r={j === 4 && b === M.aAt ? 6 : 3} style={{ fill: j === 4 && b === M.aAt ? "var(--accent)" : "var(--text-faint)" }} />)}
              {b === M.aAt && <text x={x0 + W / 2} y={70} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12 }}>a</text>}
              {b > M.aAt && <text x={x0 + W / 2} y={88} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 11 }}>infinitely above a</text>}
              {b < M.aAt && <text x={x0 + W / 2} y={88} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 11 }}>infinitely below a</text>}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        In {M.label}: every type x = a + n is realised; of the two non-isolated types over a, {realised} {realised === 1 ? "is" : "are"} realised
        {realised === 2 ? "." : `, so this model is not ω-saturated.`}
      </p>
      <figcaption className="viz-caption">
        Each copy of ℤ is a discrete order; ℤ + ℤ puts one copy after another. All these orders satisfy the same sentences
        as ℤ. Over a single element they realise more and more types, and the countable model ℤ × ℚ, a copy of ℤ for each
        rational, realises every type over every finite set: it is ω-saturated.
      </figcaption>
    </figure>
  );
}
