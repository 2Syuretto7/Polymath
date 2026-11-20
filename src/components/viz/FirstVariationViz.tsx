"use client";

import { useState } from "react";

/** I[w] = ∫ (w′²/2 − w) on (0, 1) with zero boundary values, at w = u + εv, where u = x(1 − x)/2 and v = sin kπx. */
export function FirstVariationViz() {
  const [k, setK] = useState(1);
  const [e100, setE100] = useState(5);
  const eps = e100 / 100;
  const I0 = -1 / 24;
  const c = (k * k * Math.PI * Math.PI) / 4;
  const I = (e: number) => I0 + c * e * e;
  const u = (x: number) => (x * (1 - x)) / 2;
  const w = (x: number) => u(x) + eps * Math.sin(k * Math.PI * x);
  const xs = Array.from({ length: 201 }, (_, i) => i / 200);
  const es = Array.from({ length: 81 }, (_, i) => -0.2 + (i * 0.4) / 80);
  const X = (x: number) => 20 + x * 250;
  const Y = (y: number) => 110 - y * 300;
  const EX = (e: number) => 310 + ((e + 0.2) / 0.4) * 210;
  const EY = (v: number) => 170 - ((v - I0) / (c * 0.04)) * 150;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="variation">
        {[1, 2, 3].map((m) => (
          <button key={m} type="button" aria-pressed={k === m} className={k === m ? "seg is-on" : "seg"} onClick={() => setK(m)}>v = sin {m === 1 ? "" : m}πx</button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>ε = {eps.toFixed(2)} <input type="range" min={-20} max={20} step={1} value={e100} onChange={(e) => setE100(Number(e.target.value))} aria-label="epsilon" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="The perturbed function and the energy as a function of epsilon" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(u(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(w(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(0.5)} y={182} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>u + εv on [0, 1]</text>
        <line x1={EX(0)} y1={20} x2={EX(0)} y2={175} style={{ stroke: "var(--grid-line)" }} />
        <polyline points={es.map((e) => `${EX(e)},${EY(I(e))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <circle cx={EX(eps)} cy={EY(I(eps))} r={6} style={{ fill: "var(--accent)" }} />
        <text x={EX(0.2)} y={182} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>I[u + εv] against ε</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        I[u + εv] = {I(eps).toFixed(4)} = I[u] + {c.toFixed(3)}ε². The slope at ε = 0 is 0 for every v.
      </p>
      <figcaption className="viz-caption">
        Here u = x(1 − x)/2 solves the Euler-Lagrange equation −u″ = 1. For any variation v vanishing at the ends, the
        function ε ↦ I[u + εv] has a minimum at ε = 0, so its derivative there, the first variation, is 0. Requiring this
        for all v is exactly the weak form of the Euler-Lagrange equation.
      </figcaption>
    </figure>
  );
}
