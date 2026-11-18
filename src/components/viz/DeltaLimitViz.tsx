"use client";

import { useState } from "react";

const phi = (x: number) => Math.exp(-x * x) * (1 + x);

/** Narrowing bumps gε paired with a test function φ: the integrals tend to φ(0), which is what δ does. */
export function DeltaLimitViz() {
  const [e100, setE] = useState(80);
  const eps = e100 / 100;
  const g = (x: number) => Math.exp(-(x * x) / (2 * eps * eps)) / (eps * Math.sqrt(2 * Math.PI));
  let s = 0;
  const h = 0.0005;
  for (let x = -6; x <= 6; x += h) s += g(x) * phi(x) * h;
  const X = (x: number) => 260 + x * 80, Yg = (v: number) => 170 - Math.min(v, 6) * 25, Yp = (v: number) => 170 - v * 60;
  const pts = (f: (x: number) => number, Y: (v: number) => number) => Array.from({ length: 601 }, (_, i) => { const x = -3 + i * 0.01; return `${X(x)},${Y(f(x))}`; }).join(" ");
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 190" role="img" aria-label="A narrowing bump and a test function" style={{ width: "100%", display: "block" }}>
        <line x1={20} y1={170} x2={500} y2={170} style={{ stroke: "var(--text-muted)" }} />
        <line x1={260} y1={10} x2={260} y2={175} style={{ stroke: "var(--border)" }} />
        <polyline points={pts(g, Yg)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <polyline points={pts(phi, Yp)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={500} y={24} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>gε, total area 1 (clipped at height 6)</text>
        <text x={500} y={40} textAnchor="end" style={{ fill: "var(--text)", fontSize: 11 }}>test function φ(x) = exp(−x²)(1 + x)</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          ε = {eps.toFixed(2)}{" "}
          <input type="range" min={2} max={100} value={e100} onChange={(e) => setE(Number(e.target.value))} aria-label="width epsilon" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∫ gε φ = {s.toFixed(4)}. φ(0) = 1. As ε → 0, gε → δ as distributions.
      </p>
      <figcaption className="viz-caption">
        No function δ has area 1 concentrated at a point. But the functionals φ ↦ ∫ gε φ converge, for every test function
        φ, to φ ↦ φ(0). That limit is the Dirac distribution: a continuous linear functional on test functions, not a
        function at all.
      </figcaption>
    </figure>
  );
}
