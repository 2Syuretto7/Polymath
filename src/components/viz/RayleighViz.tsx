"use client";

import { useState } from "react";

const MATS = [
  { key: "a", label: "[[2, 1], [1, 2]]", m: [2, 1, 1, 2] },
  { key: "b", label: "[[3, 0], [0, 1]]", m: [3, 0, 0, 1] },
  { key: "c", label: "[[1, 2], [2, −2]]", m: [1, 2, 2, -2] },
];

/** The Rayleigh quotient ⟨Tx, x⟩ on unit vectors: its extreme values are eigenvalues, attained at eigenvectors. */
export function RayleighViz() {
  const [k, setK] = useState(0);
  const [deg, setDeg] = useState(20);
  const [a, b, , d] = MATS[k].m;
  const q = (t: number) => a * Math.cos(t) ** 2 + 2 * b * Math.sin(t) * Math.cos(t) + d * Math.sin(t) ** 2;
  const tr = a + d, det = a * d - b * b, disc = Math.sqrt(tr * tr / 4 - det);
  const l1 = tr / 2 + disc, l2 = tr / 2 - disc;
  const t = (deg * Math.PI) / 180;
  const x = [Math.cos(t), Math.sin(t)], Tx = [a * x[0] + b * x[1], b * x[0] + d * x[1]];
  const C = 110, U = 30;
  const P = (u: number, v: number) => [C + u * U, C - v * U];
  const GX = (s: number) => 240 + (s / 180) * 270, GY = (v: number) => 110 - v * 25;
  const curve = Array.from({ length: 181 }, (_, i) => `${GX(i)},${GY(q((i * Math.PI) / 180))}`).join(" ");
  const [x1, y1] = P(x[0], x[1]), [x2, y2] = P(Tx[0], Tx[1]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="matrix">
        {MATS.map((M, i) => <button key={M.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{M.label}</button>)}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A unit vector and its image, beside the graph of the Rayleigh quotient" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><marker id="ry-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0 0 L10 5 L0 10 Z" style={{ fill: "var(--text)" }} /></marker></defs>
        <circle cx={C} cy={C} r={U} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "4 3" }} />
        <line x1={C - 100} y1={C} x2={C + 100} y2={C} style={{ stroke: "var(--border)" }} />
        <line x1={C} y1={10} x2={C} y2={210} style={{ stroke: "var(--border)" }} />
        <line x1={C} y1={C} x2={x2} y2={y2} markerEnd="url(#ry-arr)" style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={C} y1={C} x2={x1} y2={y1} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={8} y={18} style={{ fill: "var(--accent)", fontSize: 11 }}>x (unit)</text>
        <text x={8} y={32} style={{ fill: "var(--text)", fontSize: 11 }}>Tx</text>
        <line x1={240} y1={GY(0)} x2={510} y2={GY(0)} style={{ stroke: "var(--border)" }} />
        <line x1={240} y1={GY(l1)} x2={510} y2={GY(l1)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
        <line x1={240} y1={GY(l2)} x2={510} y2={GY(l2)} style={{ stroke: "var(--accent)", strokeDasharray: "5 4" }} />
        <polyline points={curve} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={GX(deg)} cy={GY(q(t))} r={5} style={{ fill: "var(--accent)" }} />
        <text x={510} y={GY(l1) - 4} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>λ₁ = {l1.toFixed(3)}</text>
        <text x={510} y={GY(l2) + 13} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>λ₂ = {l2.toFixed(3)}</text>
        <text x={375} y={214} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>angle of x, 0° to 180°</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          angle = {deg}°{" "}
          <input type="range" min={0} max={180} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle of x" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ⟨Tx, x⟩ = {q(t).toFixed(3)}. {Math.abs(Tx[0] * x[1] - Tx[1] * x[0]) < 0.03 ? "Tx is parallel to x: x is an eigenvector." : "Tx is not parallel to x."}
      </p>
      <figcaption className="viz-caption">
        As x runs round the unit circle, ⟨Tx, x⟩ rises and falls between the two eigenvalues, reaching each exactly where x
        is an eigenvector. For a compact self-adjoint operator the same argument works: the supremum of |⟨Tx, x⟩| over
        unit vectors is ‖T‖, it is attained, and the maximiser is an eigenvector.
      </figcaption>
    </figure>
  );
}
