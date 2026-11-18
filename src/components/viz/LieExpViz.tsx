"use client";

import { useState } from "react";

const GENS: { name: string; A: number[][]; exp: (t: number) => number[][]; note: string }[] = [
  { name: "rotation [0, −1; 1, 0]", A: [[0, -1], [1, 0]], exp: (t) => [[Math.cos(t), -Math.sin(t)], [Math.sin(t), Math.cos(t)]], note: "exp(tA) is rotation by t: a circle subgroup SO(2), periodic with period 2π." },
  { name: "stretch [1, 0; 0, −1]", A: [[1, 0], [0, -1]], exp: (t) => [[Math.exp(t), 0], [0, Math.exp(-t)]], note: "exp(tA) = diag(eᵗ, e⁻ᵗ): determinant 1, a non-compact subgroup of SL(2, ℝ)." },
  { name: "shear [0, 1; 0, 0]", A: [[0, 1], [0, 0]], exp: (t) => [[1, t], [0, 1]], note: "A² = 0, so the series stops: exp(tA) = I + tA, a shear." },
];
const f = (n: number) => (Math.abs(n) < 0.005 ? "0.00" : n < 0 ? `−${(-n).toFixed(2)}` : n.toFixed(2));

/** The exponential map for 2 × 2 matrices: exp(tA) traces a one-parameter subgroup, here acting on the unit square. */
export function LieExpViz() {
  const [k, setK] = useState(0);
  const [t, setT] = useState(1);
  const G = GENS[k];
  const E = G.exp(t);
  const S = 40, CX = 130, CY = 110;
  const app = (x: number, y: number) => [E[0][0] * x + E[0][1] * y, E[1][0] * x + E[1][1] * y];
  const sq = [[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => app(x, y));
  const P = (x: number, y: number) => `${CX + S * x},${CY - S * y}`;
  const orbit: string[] = [];
  for (let i = 0; i <= 80; i++) { const s = (t * i) / 80; const M = G.exp(s); orbit.push(P(M[0][0] + M[0][1], M[1][0] + M[1][1])); }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="generator">
        {GENS.map((g, i) => <button key={g.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{g.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>t = {t < 0 ? `−${(-t).toFixed(2)}` : t.toFixed(2)} <input type="range" min={-200} max={200} value={Math.round(t * 100)} onChange={(e) => setT(Number(e.target.value) / 100)} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="The unit square moved by exp(tA)" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><clipPath id="le-clip"><rect x={10} y={10} width={240} height={200} /></clipPath></defs>
        <g clipPath="url(#le-clip)">
          <line x1={10} y1={CY} x2={250} y2={CY} style={{ stroke: "var(--border)" }} />
          <line x1={CX} y1={10} x2={CX} y2={210} style={{ stroke: "var(--border)" }} />
          <polygon points={[[0, 0], [1, 0], [1, 1], [0, 1]].map(([x, y]) => P(x, y)).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
          <polygon points={sq.map(([x, y]) => P(x, y)).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
          <polyline points={orbit.join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "3 3" }} />
        </g>
        <text x={270} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>A = {G.name.split(" ").slice(1).join(" ")}</text>
        <text x={270} y={64} style={{ fill: "var(--text)", fontSize: 12 }}>exp(tA) = I + tA + t²A²/2! + …</text>
        <text x={270} y={92} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>= [{f(E[0][0])}, {f(E[0][1])}; {f(E[1][0])}, {f(E[1][1])}]</text>
        <text x={270} y={118} style={{ fill: "var(--text-muted)", fontSize: 11 }}>det = {f(E[0][0] * E[1][1] - E[0][1] * E[1][0])}</text>
      </svg>
      <p style={{ fontSize: 13, margin: "4px 0" }}>{G.note}</p>
      <figcaption className="viz-caption">
        The dashed square is the identity; the shaded one is its image under exp(tA). The red curve is the path of the corner
        (1, 1) as s runs from 0 to t: an orbit of the one-parameter subgroup s ↦ exp(sA).
      </figcaption>
    </figure>
  );
}
