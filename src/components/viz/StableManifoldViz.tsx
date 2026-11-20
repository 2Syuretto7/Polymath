"use client";

import { useState } from "react";

/** f(x, y) = (x/2, 2y − 7x²/4): a saddle at 0 whose stable manifold is the parabola y = x². */
export const step = ([x, y]: number[]) => [x / 2, 2 * y - (7 / 4) * x * x];
export function orbit(eps: number, n: number) {
  const pts = [[1, 1 + eps]];
  for (let k = 0; k < n; k++) pts.push(step(pts[pts.length - 1]));
  return pts;
}

/** Points on the stable manifold converge to the saddle; points just off it are thrown out along the unstable axis. */
export function StableManifoldViz() {
  const [eps, setEps] = useState(0);
  const [n, setN] = useState(5);
  const pts = orbit(eps, n);
  const S = 170, X0 = 40, Y0 = 130;
  const P = (p: number[]) => [X0 + p[0] * S * 1.6, Y0 - p[1] * S * 0.5];
  const vis = (p: number[]) => Math.abs(p[1]) < 2.2;
  const last = pts[pts.length - 1];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>start (1, 1 + ε), ε = {eps.toFixed(3).replace("-", "−")} <input type="range" min={-0.02} max={0.02} step={0.005} value={eps} onChange={(e) => setEps(Number(e.target.value))} aria-label="epsilon" /></label>
        <label>iterates = {n} <input type="range" min={0} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="iterates" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="The stable and unstable manifolds of a saddle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0 - 10} y1={Y0} x2={X0 + 1.1 * S * 1.6} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={10} x2={X0} y2={240} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
        <path d={Array.from({ length: 61 }, (_, i) => i / 60 * 1.1).map((x, i) => `${i ? "L" : "M"}${P([x, x * x])[0].toFixed(1)},${P([x, x * x])[1].toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2 }} />
        <path d={pts.filter(vis).map((p, i) => `${i ? "L" : "M"}${P(p)[0].toFixed(1)},${P(p)[1].toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeDasharray: "3 3" }} />
        {pts.filter(vis).map((p, i) => <circle key={i} cx={P(p)[0]} cy={P(p)[1]} r={i === 0 ? 5 : 3.5} style={{ fill: "var(--accent)" }} />)}
        <circle cx={X0} cy={Y0} r={4} style={{ fill: "var(--text)" }} />
        <text x={X0 + 8} y={22} style={{ fill: "var(--danger)", fontSize: 11 }}>unstable manifold: x = 0</text>
        <text x={P([1.05, 1.1])[0] - 6} y={P([1.05, 1.1])[1] - 8} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>stable manifold: y = x²</text>
        <text x={X0 + 1.1 * S * 1.6 - 4} y={Y0 + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>linear stable direction: the x-axis</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        After {n} iterates: ({last[0].toPrecision(4)}, {last[1].toPrecision(4).replace("-", "−")}). {eps === 0 ? "On the parabola, the orbit converges to the saddle." : "Off the parabola, the y-coordinate eventually doubles each step."}
      </p>
      <figcaption className="viz-caption">
        The map (x, y) ↦ (x/2, 2y − 7x²/4) has a saddle at 0 whose linear stable direction is the x-axis. The points whose
        orbits converge to 0 form not the axis but the parabola y = x², tangent to it at 0. A tiny error ε in the starting
        height is doubled at every step.
      </figcaption>
    </figure>
  );
}
