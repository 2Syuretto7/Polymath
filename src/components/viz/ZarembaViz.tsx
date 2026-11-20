"use client";

import { useState } from "react";

/** On the annulus ε < |z| < 1, the harmonic function with value 1 on |z| = ε and 0 on |z| = 1. */
export const uEps = (eps: number, r: number) => Math.log(r) / Math.log(eps);

/** Zaremba’s punctured disc: the boundary value at the puncture is forgotten in the limit. */
export function ZarembaViz() {
  const [k, setK] = useState(2);
  const eps = 10 ** -k;
  const px = (r: number) => 50 + r * 440, py = (v: number) => 200 - v * 170;
  const pts = Array.from({ length: 400 }, (_, i) => { const r = eps + ((1 - eps) * i) / 399; return [r, uEps(eps, r)] as const; });
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>inner radius ε = 10 to the −{k} <input type="range" min={1} max={12} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="minus log epsilon" /></label>
      </div>
      <svg viewBox="0 0 540 228" role="img" aria-label="Radial harmonic functions on shrinking annuli" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={50} y1={20} x2={50} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.5, 1].map((v) => <text key={v} x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        {[0, 0.25, 0.5, 0.75, 1].map((r) => <text key={r} x={px(r)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{r}</text>)}
        <text x={px(0.5)} y={228} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>distance r from the centre</text>
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(0)} cy={py(1)} r={5} style={{ fill: "var(--danger)" }} />
        <text x={px(0) + 10} y={py(1) + 4} style={{ fill: "var(--danger)", fontSize: 10 }}>required value 1 at the centre</text>
        <circle cx={px(0.5)} cy={py(uEps(eps, 0.5))} r={4} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        u(0.5) = log 0.5 / log ε = {uEps(eps, 0.5).toFixed(4)}. As ε → 0 this tends to 0.
      </p>
      <figcaption className="viz-caption">
        Ask for a harmonic function on the punctured disc equal to 0 on the circle and 1 at the centre. On each annulus the
        answer is log r / log ε, but as the hole shrinks these functions tend to 0 everywhere. A single point is too small
        to hold a boundary value: the centre is an irregular boundary point, and the Dirichlet problem has no solution.
      </figcaption>
    </figure>
  );
}
