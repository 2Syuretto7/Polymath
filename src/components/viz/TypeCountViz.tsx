"use client";

import { useState } from "react";

/** Complete 1-types over a finite set A in (ℚ, <): a type says where x sits relative to the parameters. */
export function TypeCountViz() {
  const [n, setN] = useState(3);
  const [sel, setSel] = useState(0);
  const params = Array.from({ length: n }, (_, i) => (i + 1) * (480 / (n + 1)) + 30);
  const count = 2 * n + 1;
  const s = Math.min(sel, count - 1);
  const pos = (j: number) => {
    if (n === 0) return 270;
    if (j % 2 === 1) return params[(j - 1) / 2];
    const i = j / 2;
    const lo = i === 0 ? 30 : params[i - 1];
    const hi = i === n ? 510 : params[i];
    return (lo + hi) / 2;
  };
  const describe = (j: number) => {
    if (n === 0) return "x = x: no parameters, so a single type";
    if (j % 2 === 1) return `x = a${"₁₂₃₄₅₆"[(j - 1) / 2]}`;
    const i = j / 2;
    const sub = (m: number) => `a${"₁₂₃₄₅₆"[m]}`;
    if (i === 0) return `x < ${sub(0)}`;
    if (i === n) return `x > ${sub(n - 1)}`;
    return `${sub(i - 1)} < x < ${sub(i)}`;
  };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>parameters n = {n} <input type="range" min={0} max={6} step={1} value={n} onChange={(e) => { setN(Number(e.target.value)); setSel(0); }} aria-label="n" /></label>
        <label>type number {s + 1} <input type="range" min={0} max={count - 1} step={1} value={s} onChange={(e) => setSel(Number(e.target.value))} aria-label="type" /></label>
      </div>
      <svg viewBox="0 0 540 100" role="img" aria-label="The parameters on the line and a realisation of the chosen type" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={50} x2={520} y2={50} style={{ stroke: "var(--border-strong)" }} />
        {params.map((p, i) => (
          <g key={i}>
            <line x1={p} y1={40} x2={p} y2={60} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={p} y={80} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>a{"₁₂₃₄₅₆"[i]}</text>
          </g>
        ))}
        {Array.from({ length: count }, (_, j) => (
          <circle key={j} cx={pos(j)} cy={50} r={j === s ? 7 : 3} style={{ fill: j === s ? "var(--accent)" : "var(--text-faint)" }} />
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {count} complete 1-type{count === 1 ? "" : "s"} over A = {"{"}{params.map((_, i) => `a${"₁₂₃₄₅₆"[i]}`).join(", ")}{"}"}. Type {s + 1} is determined by {describe(s)}.
      </p>
      <figcaption className="viz-caption">
        In the dense linear order (ℚ, &lt;), quantifier elimination means a complete type of one element over A is fixed by
        its order relations to the parameters: equal to one of them, or strictly between two neighbours, or beyond the ends.
        Every such type is realised in ℚ, here by the grey dots.
      </figcaption>
    </figure>
  );
}
