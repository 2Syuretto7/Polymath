"use client";

import { useState } from "react";

const I = (L: number) => ((Math.PI * Math.PI) / (L * L) - 1) * (L / 2);

/** Index form of V(t) = sin(πt/L) along a geodesic of length L on the unit sphere. */
export function SecondVariationViz() {
  const [L100, setL] = useState(250);
  const L = L100 / 100;
  const X0 = 40, W = 450, Y0 = 12, H = 160, lo = 1, hi = 6, top = 3, bot = -3;
  const x = (s: number) => X0 + ((s - lo) / (hi - lo)) * W;
  const y = (v: number) => Y0 + ((top - Math.max(bot, Math.min(top, v))) / (top - bot)) * H;
  const ls = Array.from({ length: 201 }, (_, i) => lo + ((hi - lo) * i) / 200);
  const v = I(L);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>geodesic length L = {L.toFixed(2)} <input type="range" min={100} max={600} value={L100} onChange={(e) => setL(Number(e.target.value))} aria-label="length" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="The index form as a function of the length of the geodesic" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        {[1, 2, 3, 4, 5, 6].map((s) => <text key={s} x={x(s)} y={y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{s}</text>)}
        <line x1={x(Math.PI)} y1={Y0} x2={x(Math.PI)} y2={Y0 + H} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        <text x={x(Math.PI) + 4} y={Y0 + 10} style={{ fill: "var(--danger)", fontSize: 11 }}>L = π</text>
        <polyline points={ls.filter((s) => I(s) <= top && I(s) >= bot).map((s) => `${x(s)},${y(I(s))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={x(L)} cy={y(v)} r={5} style={{ fill: v >= 0 ? "var(--accent)" : "var(--danger)" }} />
        <text x={x(4.6)} y={y(1.2)} style={{ fill: "var(--text-muted)", fontSize: 11 }}>I(V, V)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        I(V, V) = (π²/L² − 1)·L/2 = {v.toFixed(3)}. {Math.abs(v) < 1e-9 ? "Zero: V is a Jacobi field, and the endpoints are conjugate." : v > 0 ? "Positive: this variation makes the curve longer." : "Negative: this variation makes the curve shorter, so the geodesic is not minimising."}
      </p>
      <figcaption className="viz-caption">
        Take a great-circle arc of length L on the unit sphere and push it sideways by s·V(t), with V(t) = sin(πt/L)
        vanishing at both ends. To second order the length changes by (s²/2)·I(V, V), where I(V, V) = ∫ (|V′|² − K|V|²) dt
        and K = 1. The sign flips exactly at L = π.
      </figcaption>
    </figure>
  );
}
