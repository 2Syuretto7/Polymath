"use client";

import { useMemo, useState } from "react";

const MATS = [
  { name: "A", M: [[1, 2, 0], [0, 1, 2], [1, 0, 1]] },
  { name: "B", M: [[3, 1, 0], [0, 0, 1], [0, 0, 1]] },
  { name: "C", M: [[1, 1, 1], [0, 0, 0], [0, 0, 0]] },
];

/** ‖Tx‖_p / ‖x‖_p maximised over non-negative x, which suffices for a matrix with non-negative entries. */
export function opNorm(M: number[][], s: number) {
  const pn = (v: number[]) => (s === 0 ? Math.max(...v.map(Math.abs)) : v.reduce((a, b) => a + Math.abs(b) ** (1 / s), 0) ** s);
  let best = 0;
  const G = 90;
  for (let i = 0; i <= G; i++) for (let j = 0; i + j <= G; j++) {
    const x = [i / G, j / G, (G - i - j) / G];
    const d = pn(x);
    if (d === 0) continue;
    const y = M.map((r) => r.reduce((a, v, k) => a + v * x[k], 0));
    best = Math.max(best, pn(y) / d);
  }
  return best;
}

/** Operator norms of a matrix on ℓᵖ, as 1/p runs from 0 to 1: their logarithm is convex, as Riesz–Thorin predicts. */
export function RieszThorinViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(0.5);
  const M = MATS[k].M;
  const S = useMemo(() => Array.from({ length: 21 }, (_, i) => i / 20), []);
  const norms = useMemo(() => S.map((t) => opNorm(M, t)), [M, S]);
  const n0 = norms[0], n1 = norms[20];
  const idx = Math.round(s * 20);
  const bound = n0 ** (1 - s) * n1 ** s;
  const lmax = Math.log(Math.max(...norms)) * 1.15 + 0.1, lmin = Math.min(0, Math.log(Math.min(...norms))) - 0.1;
  const px = (t: number) => 60 + t * 400, py = (l: number) => 210 - ((l - lmin) / (lmax - lmin)) * 170;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="matrix">
        {MATS.map((m, i) => <button key={m.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>matrix {m.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>1/p = {s.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="one over p" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Log operator norm against 1/p" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={470} y={40} style={{ fill: "var(--text)", fontSize: 12, fontFamily: "var(--font-mono, monospace)" }}>
          {M.map((r, i) => <tspan key={i} x={470} dy={i ? 16 : 0}>{r.join("  ")}</tspan>)}
        </text>
        <line x1={60} y1={210} x2={460} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={60} y1={30} x2={60} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={px(0)} y1={py(Math.log(n0))} x2={px(1)} y2={py(Math.log(n1))} style={{ stroke: "var(--danger)", strokeDasharray: "5 4" }} />
        <path d={S.map((t, i) => `${i ? "L" : "M"}${px(t).toFixed(1)},${py(Math.log(norms[i])).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(s)} cy={py(Math.log(norms[idx]))} r={5} style={{ fill: "var(--accent)" }} />
        <circle cx={px(s)} cy={py(Math.log(bound))} r={5} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <text x={60} y={228} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>p = ∞</text>
        <text x={260} y={228} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>p = 2</text>
        <text x={460} y={228} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>p = 1</text>
        <text x={66} y={22} style={{ fill: "var(--accent)", fontSize: 11 }}>blue: log ‖T‖ on ℓᵖ</text>
        <text x={200} y={22} style={{ fill: "var(--danger)", fontSize: 11 }}>red: the straight line between the endpoints</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖T‖ on ℓ∞ = {n0.toFixed(3)} (largest row sum), on ℓ¹ = {n1.toFixed(3)} (largest column sum). At 1/p = {s.toFixed(2)}: ‖T‖ = {norms[idx].toFixed(3)} ≤ bound {bound.toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        The Riesz–Thorin theorem: if T is bounded on the Lebesgue spaces with exponents p₀ and p₁, with norms M₀ and M₁,
        then it is bounded for every exponent p in between, with norm at most M₀ to the power 1 − θ times M₁ to the power
        θ, where 1/p = (1 − θ)/p₀ + θ/p₁. Equivalently, log ‖T‖ is a convex function of 1/p, so it lies below the straight
        line joining its endpoint values.
      </figcaption>
    </figure>
  );
}
