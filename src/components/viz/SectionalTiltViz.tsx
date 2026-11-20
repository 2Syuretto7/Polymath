"use client";

import { useState } from "react";

const SP = [
  { name: "round S³", K: (_c: number) => 1, ricV: 2, ricH: 2, scal: 6 },
  { name: "S² × R", K: (c: number) => c * c, ricV: 0, ricH: 1, scal: 2 },
  { name: "H² × R", K: (c: number) => -c * c, ricV: 0, ricH: -1, scal: -2 },
];

/** Sectional curvature of a tangent 2-plane whose normal makes angle φ with the third axis. */
export function SectionalTiltViz() {
  const [s, setS] = useState(1);
  const [deg, setDeg] = useState(30);
  const ph = (deg * Math.PI) / 180;
  const K = SP[s].K(Math.cos(ph));
  const cx = 170, cy = 100;
  const P = (x: number, y: number, z: number) => [cx + 80 * x - 36 * y, cy - 80 * z + 22 * y];
  const u = [0, 1, 0], w = [Math.cos(ph), 0, -Math.sin(ph)];
  const disc = Array.from({ length: 73 }, (_, i) => {
    const t = (2 * Math.PI * i) / 72;
    const p = P(u[0] * Math.cos(t) + w[0] * Math.sin(t), u[1] * Math.cos(t) + w[1] * Math.sin(t), u[2] * Math.cos(t) + w[2] * Math.sin(t));
    return `${p[0]},${p[1]}`;
  }).join(" ");
  const flat = Array.from({ length: 73 }, (_, i) => {
    const t = (2 * Math.PI * i) / 72;
    const p = P(Math.cos(t), Math.sin(t), 0);
    return `${p[0]},${p[1]}`;
  }).join(" ");
  const [a0, a1] = [P(0, 0, -1.15), P(0, 0, 1.15)];
  const n = P(Math.sin(ph) * 0.9, 0, Math.cos(ph) * 0.9);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="manifold">
        {SP.map((x, i) => <button key={x.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        <label>tilt φ = {deg}° <input type="range" min={0} max={90} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="tilt" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A tilted tangent plane and the third axis" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="st-head" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--danger)" }} /></marker>
        </defs>
        <polygon points={flat} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "4 3" }} />
        <polygon points={disc} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={a0[0]} y1={a0[1]} x2={a1[0]} y2={a1[1]} style={{ stroke: "var(--text)", strokeWidth: 1.5 }} />
        <text x={a1[0] + 6} y={a1[1] + 4} style={{ fill: "var(--text)", fontSize: 11 }}>{s === 0 ? "e₃" : "R direction"}</text>
        <line x1={cx} y1={cy} x2={n[0]} y2={n[1]} markerEnd="url(#st-head)" style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
        <text x={n[0] + 6} y={n[1] - 2} style={{ fill: "var(--danger)", fontSize: 11 }}>normal</text>
        <text x={330} y={50} style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: the plane φ = 0</text>
        <text x={330} y={68} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: the plane σ</text>
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div style={{ fontWeight: 700 }}>K(σ) = {K.toFixed(3)}</div>
        <div>Ric({s === 0 ? "e₃" : "R direction"}) = {SP[s].ricV}; Ric(unit vector at right angles to it) = {SP[s].ricH}; scalar curvature = {SP[s].scal}</div>
      </div>
      <figcaption className="viz-caption">
        Tilt a 2-plane σ in a three-dimensional tangent space. On the round 3-sphere every plane has curvature 1. On S² × R
        a plane whose normal makes angle φ with the R direction has K = cos²φ: 1 when σ is tangent to the sphere factor, 0
        when it contains the R direction. Ricci curvature adds the sectional curvatures of two perpendicular planes through
        a direction; scalar curvature adds Ricci over an orthonormal basis.
      </figcaption>
    </figure>
  );
}
