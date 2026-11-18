"use client";

import { useState } from "react";

/** A linear functional on the plane, its kernel, level lines, and the vector that represents it. */
export function RieszVectorViz() {
  const [deg, setDeg] = useState(35);
  const [mag, setMag] = useState(12);
  const m = mag / 10, t = (deg * Math.PI) / 180;
  const y = [m * Math.cos(t), m * Math.sin(t)];
  const C = 140, S = 45;
  const u = [-Math.sin(t), Math.cos(t)];
  const lines = [-2, -1, 0, 1, 2].map((c) => {
    const base = [(c / m) * Math.cos(t), (c / m) * Math.sin(t)];
    return { c, a: [base[0] - 5 * u[0], base[1] - 5 * u[1]], b: [base[0] + 5 * u[0], base[1] + 5 * u[1]] };
  });
  const P = (a: number[]) => [C + S * a[0], C - S * a[1]];
  const [YX, YY] = P(y);
  return (
    <figure className="viz">
      <svg viewBox="0 0 280 280" role="img" aria-label="Level lines of a functional and its representing vector" style={{ width: "100%", maxWidth: 320, display: "block", margin: "0 auto" }}>
        <defs>
          <marker id="rv-arr" markerUnits="userSpaceOnUse" markerWidth={10} markerHeight={10} refX={9} refY={5} orient="auto"><path d="M0 0 L10 5 L0 10 z" style={{ fill: "var(--accent)" }} /></marker>
          <clipPath id="rv-clip"><rect x={0} y={0} width={280} height={280} /></clipPath>
        </defs>
        <g clipPath="url(#rv-clip)">
          {lines.map((l) => { const [x1, y1] = P(l.a), [x2, y2] = P(l.b); return <line key={l.c} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: l.c === 0 ? "var(--text)" : "var(--border-strong)", strokeWidth: l.c === 0 ? 2.5 : 1, strokeDasharray: l.c === 0 ? undefined : "5 4" }} />; })}
          {lines.filter((l) => l.c !== 0).map((l) => { const [lx, ly] = P([(l.c / m) * Math.cos(t) + 2.3 * u[0], (l.c / m) * Math.sin(t) + 2.3 * u[1]]); return <text key={`t${l.c}`} x={lx} y={ly} style={{ fill: "var(--text-muted)", fontSize: 11 }}>φ = {l.c}</text>; })}
        </g>
        <line x1={C} y1={C} x2={YX} y2={YY} markerEnd="url(#rv-arr)" style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={YX + 6} y={YY - 4} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>y</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>direction {deg}° <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="direction" /></label>
        <label className="mono" style={{ fontSize: 13 }}>‖φ‖ = {m.toFixed(1)} <input type="range" min={5} max={25} value={mag} onChange={(e) => setMag(Number(e.target.value))} aria-label="norm" /></label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        φ(x) = {y[0].toFixed(2)}x₁ + {y[1].toFixed(2)}x₂ = ⟨x, y⟩. ‖y‖ = {m.toFixed(2)}. Spacing of level lines = 1/‖y‖ = {(1 / m).toFixed(2)}.
      </p>
      <figcaption className="viz-caption">
        Solid: the kernel, where φ = 0, a closed subspace. Dashed: where φ = ±1, ±2. The representing vector y is
        perpendicular to the kernel, and its length is the norm of φ: the larger the norm, the closer the level lines.
      </figcaption>
    </figure>
  );
}
