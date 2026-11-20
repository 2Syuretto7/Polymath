"use client";

import { useState } from "react";

/** B[u, v] = uᵀAv on ℝ² with A = [[a, s], [−s, d]]; coercivity constant is the least eigenvalue of the symmetric part. */
export function LaxMilgramViz() {
  const [a, setA] = useState(2);
  const [d, setD] = useState(2);
  const [s, setS] = useState(1);
  const f = [1, 1];
  const beta = Math.min(a, d);
  const det = a * d + s * s;
  const u = [(d * f[0] + s * f[1]) / det, (a * f[1] - s * f[0]) / det];
  const norm = Math.hypot(u[0], u[1]);
  const bound = beta > 0 ? Math.hypot(f[0], f[1]) / beta : Infinity;
  const C = 80;
  const O = [270, 105];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>a = {a} <input type="range" min={-1} max={3} step={0.5} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>d = {d} <input type="range" min={-1} max={3} step={0.5} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="d" /></label>
        <label>skew part s = {s} <input type="range" min={0} max={3} step={0.5} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="s" /></label>
      </div>
      <svg viewBox="0 0 540 210" role="img" aria-label="The data f, the solution u and the bound on its size" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={O[0] - 200} y1={O[1]} x2={O[0] + 200} y2={O[1]} style={{ stroke: "var(--grid-line)" }} />
        <line x1={O[0]} y1={5} x2={O[0]} y2={205} style={{ stroke: "var(--grid-line)" }} />
        {beta > 0 && bound * C < 300 && <circle cx={O[0]} cy={O[1]} r={bound * C} style={{ fill: "var(--success-soft)", stroke: "var(--success)", strokeDasharray: "4 3" }} />}
        <line x1={O[0]} y1={O[1]} x2={O[0] + f[0] * C} y2={O[1] - f[1] * C} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={O[0] + f[0] * C + 6} y={O[1] - f[1] * C} style={{ fill: "var(--text-muted)", fontSize: 12 }}>f</text>
        {beta > 0 && <line x1={O[0]} y1={O[1]} x2={O[0] + u[0] * C} y2={O[1] - u[1] * C} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        {beta > 0 && <text x={O[0] + u[0] * C + 6} y={O[1] - u[1] * C + 4} style={{ fill: "var(--accent)", fontSize: 12 }}>u</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {beta > 0
          ? `B[v, v] ≥ ${beta}|v|² for all v, so B is coercive with β = ${beta}. The unique u with B[u, v] = f · v for all v has |u| = ${norm.toFixed(3)} ≤ |f|/β = ${bound.toFixed(3)}.`
          : `B[v, v] ≤ 0 for some v ≠ 0: B is not coercive, and Lax-Milgram gives no guarantee.`}
      </p>
      <figcaption className="viz-caption">
        Here H = ℝ² and B[u, v] = uᵀAv with A = [[a, s], [−s, d]]. The skew part s does not affect B[v, v], so coercivity
        depends only on a and d. Lax-Milgram does not need B to be symmetric: whenever it is bounded and coercive, the
        equation has exactly one solution, inside the circle of radius |f|/β.
      </figcaption>
    </figure>
  );
}
