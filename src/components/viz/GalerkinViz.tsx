"use client";

import { useState } from "react";

export const SOURCES = [
  { label: "f = 1", f: (_x: number) => 1, exact: (x: number) => (x * (1 - x)) / 2 },
  { label: "f = 6x", f: (x: number) => 6 * x, exact: (x: number) => x - x * x * x },
  { label: "f = π² sin πx", f: (x: number) => Math.PI * Math.PI * Math.sin(Math.PI * x), exact: (x: number) => Math.sin(Math.PI * x) },
];

/** Galerkin approximation of −u″ = f on (0, 1), u(0) = u(1) = 0, with N piecewise linear hat functions. */
export function galerkin(f: (x: number) => number, N: number) {
  const h = 1 / (N + 1);
  const n = N;
  const b = Array.from({ length: n }, (_, i) => {
    const xi = (i + 1) * h;
    let s = 0;
    const M = 40;
    for (let j = 0; j < M; j++) {
      const x = xi - h + ((j + 0.5) * 2 * h) / M;
      s += f(x) * Math.max(0, 1 - Math.abs(x - xi) / h);
    }
    return (s * 2 * h) / M;
  });
  const a = Array(n).fill(2 / h), c = Array(n).fill(-1 / h);
  const cp: number[] = [], dp: number[] = [];
  for (let i = 0; i < n; i++) {
    const m = a[i] - (i > 0 ? c[i - 1] * cp[i - 1] : 0);
    cp.push(c[i] / m);
    dp.push((b[i] - (i > 0 ? c[i - 1] * dp[i - 1] : 0)) / m);
  }
  const u = Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) u[i] = dp[i] - (i < n - 1 ? cp[i] * u[i + 1] : 0);
  return [0, ...u, 0];
}

export function GalerkinViz() {
  const [k, setK] = useState(0);
  const [N, setN] = useState(3);
  const S = SOURCES[k];
  const nodes = galerkin(S.f, N);
  const h = 1 / (N + 1);
  const ymax = Math.max(...Array.from({ length: 101 }, (_, i) => S.exact(i / 100))) * 1.15;
  const X = (x: number) => 40 + x * 460;
  const Y = (y: number) => 170 - (y / ymax) * 150;
  const xs = Array.from({ length: 101 }, (_, i) => i / 100);
  let err = 0;
  xs.forEach((x) => { const j = Math.min(N, Math.floor(x / h)); const t = (x - j * h) / h; const uh = nodes[j] * (1 - t) + nodes[j + 1] * t; err = Math.max(err, Math.abs(uh - S.exact(x))); });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="source">
        {SOURCES.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>hat functions N = {N} <input type="range" min={1} max={15} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="The exact solution and the Galerkin approximation" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={Y(0)} x2={510} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(S.exact(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "5 3", strokeWidth: 1.5 }} />
        <polyline points={nodes.map((u, i) => `${X(i * h)},${Y(u)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {nodes.map((u, i) => <circle key={i} cx={X(i * h)} cy={Y(u)} r={3.5} style={{ fill: "var(--accent)" }} />)}
        <text x={X(0)} y={Y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={Y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {S.label}, N = {N}: exact u(1/2) = {S.exact(0.5).toFixed(3)}; largest error of the approximation {err.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        The weak form asks for u with ∫ u′v′ = ∫ f v for every v vanishing at the ends. Restricting u and v to the span of
        N hat functions gives N linear equations, a tridiagonal system. The approximation, solid, converges to the exact
        solution, dashed, as N grows.
      </figcaption>
    </figure>
  );
}
