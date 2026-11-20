"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const f = (x: number) => Math.exp(-x * x);
const POTS = [
  { name: "V = 0", V: (_x: number) => 0 },
  { name: "V = 1", V: (_x: number) => 1 },
  { name: "V = x²/2", V: (x: number) => (x * x) / 2 },
  { name: "V = 3 on |x| < 0.5", V: (x: number) => (Math.abs(x) < 0.5 ? 3 : 0) },
];

/** Feynman–Kac: the PDE solution of ∂u/∂t = ½u″ − Vu against Monte Carlo averages of f(B) exp(−∫V(B)). */
export function FeynmanKacViz() {
  const [k, setK] = useState(0);
  const [seed, setSeed] = useState(1);
  const P = POTS[k], T = 1;
  // explicit finite differences on [−6, 6]
  const dx = 0.05, L = 6, M = Math.round((2 * L) / dx), dt = 0.001;
  const xs = Array.from({ length: M + 1 }, (_, i) => -L + i * dx);
  let u = xs.map(f);
  for (let s = 0; s < Math.round(T / dt); s++) {
    const v = u.slice();
    for (let i = 1; i < M; i++) v[i] = u[i] + dt * (0.5 * (u[i + 1] - 2 * u[i] + u[i - 1]) / (dx * dx) - P.V(xs[i]) * u[i]);
    v[0] = 0; v[M] = 0; u = v;
  }
  // Monte Carlo at a few starting points
  const r = seededRng(seed * 71 + k);
  const starts = [-3, -2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2, 3];
  const N = 100, h = T / N, PATHS = 500;
  const mc = starts.map((x0) => {
    let sum = 0;
    for (let p = 0; p < PATHS; p++) {
      let b = x0, I = 0;
      for (let s = 0; s < N; s++) { I += P.V(b) * h; b += Math.sqrt(h) * normalDraw(r); }
      sum += f(b) * Math.exp(-I);
    }
    return sum / PATHS;
  });
  const X0 = 30, W = 460, Y0 = 10, H = 160, XL = -4, XR = 4;
  const px = (x: number) => X0 + ((x - XL) / (XR - XL)) * W;
  const py = (v: number) => Y0 + H - (v / 1.05) * H;
  const vis = xs.map((x, i) => [x, i] as const).filter(([x]) => x >= XL && x <= XR);
  const at0 = u[Math.round(L / dx)];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="potential">
        {POTS.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new paths</button>
      </div>
      <svg viewBox="0 0 520 195" role="img" aria-label="Solution of a heat equation with potential, by PDE and by Monte Carlo" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={py(0)} x2={X0 + W} y2={py(0)} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4].map((v) => <text key={v} x={px(v)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <polyline points={vis.map(([x]) => `${px(x)},${py(f(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.3, strokeDasharray: "4 3" }} />
        <polyline points={vis.map(([x, i]) => `${px(x)},${py(u[i])}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        {starts.map((x, i) => <circle key={x} cx={px(x)} cy={py(mc[i])} r={4.5} style={{ fill: "var(--danger)" }} />)}
        <text x={X0 + W} y={Y0 + 12} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey dashed: f(x) = exp(−x²)</text>
        <text x={X0 + W} y={Y0 + 28} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>violet: u(1, x) from the PDE</text>
        <text x={X0 + W} y={Y0 + 44} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>red: path averages, {PATHS} per point</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At x = 0: PDE {at0.toFixed(3)}; Monte Carlo {mc[5].toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Feynman–Kac: u(t, x) = E[f(x + Bₜ) exp(−∫₀ᵗ V(x + Bₛ) ds)] solves ∂u/∂t = ½ ∂²u/∂x² − Vu with u(0, ·) = f. The
        potential acts as a killing rate: a path through a region where V is large is discounted. Both computations give
        the same curve.
      </figcaption>
    </figure>
  );
}
