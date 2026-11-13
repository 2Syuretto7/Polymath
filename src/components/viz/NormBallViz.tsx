"use client";

import { useState } from "react";

const pnorm = (x: number, y: number, p: number) => (p >= 20 ? Math.max(Math.abs(x), Math.abs(y)) : Math.pow(Math.pow(Math.abs(x), p) + Math.pow(Math.abs(y), p), 1 / p));

/** Unit balls of the p-norms on ℝ², and the parallelogram law, which only p = 2 satisfies. */
export function NormBallViz() {
  const [p, setP] = useState(2);
  const pp = p >= 8 ? Infinity : p;
  const S = 120, W = 320, o = W / 2;
  const pts = Array.from({ length: 241 }, (_, k) => {
    const t = (k / 240) * 2 * Math.PI;
    const x = Math.cos(t), y = Math.sin(t);
    const n = pnorm(x, y, pp === Infinity ? 99 : pp);
    return `${o + (x / n) * S},${o - (y / n) * S}`;
  }).join(" ");
  const N = (x: number, y: number) => pnorm(x, y, pp === Infinity ? 99 : pp);
  const lhs = N(1, 1) ** 2 + N(1, -1) ** 2;
  const rhs = 2 * N(1, 0) ** 2 + 2 * N(0, 1) ** 2;
  const ok = Math.abs(lhs - rhs) < 1e-9;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>p: <span className="mono">{pp === Infinity ? "∞" : p}</span></span>
          <input type="range" min={1} max={8} step={0.25} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The unit ball of the p-norm" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={o} cy={o} r={S} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polygon points={pts} style={{ fill: "var(--accent-soft)", fillOpacity: 0.5, stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        with u = (1, 0), v = (0, 1): ‖u + v‖² + ‖u − v‖² = {lhs.toFixed(3)}, 2‖u‖² + 2‖v‖² = {rhs.toFixed(3)}
      </p>
      <p style={{ margin: "4px 0", color: ok ? "var(--accent)" : "var(--danger)" }}>
        {ok ? "The parallelogram law holds: this norm comes from an inner product." : "The parallelogram law fails, so no inner product gives this norm."}
      </p>
      <figcaption className="viz-caption">
        The shape is the set of vectors of norm at most 1 for ‖(x, y)‖ = (|x|ᵖ + |y|ᵖ)^(1/p): a diamond at p = 1, a circle at p = 2, a square as p grows. Every one is a genuine norm, but only the circle comes from an inner product, because an inner product norm must satisfy the parallelogram law.
      </figcaption>
    </figure>
  );
}
