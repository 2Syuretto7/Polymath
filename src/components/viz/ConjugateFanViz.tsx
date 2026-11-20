"use client";

import { useState } from "react";

/** Geodesics leaving the north pole of the unit sphere, drawn up to length L: they refocus at the south pole. */
export function ConjugateFanViz() {
  const [L100, setL] = useState(250);
  const L = L100 / 100;
  const cx = 180, cy = 100, R = 80, b = (22 * Math.PI) / 180;
  const proj = (t: number, ph: number) => {
    const X = Math.sin(t) * Math.cos(ph), Y = Math.sin(t) * Math.sin(ph), Z = Math.cos(t);
    return { sx: cx + R * X, sy: cy - R * (Z * Math.cos(b) + Y * Math.sin(b)), front: Z * Math.sin(b) - Y * Math.cos(b) > 0 };
  };
  const phis = Array.from({ length: 12 }, (_, i) => (i * Math.PI) / 6);
  const segs: { x1: number; y1: number; x2: number; y2: number; f: boolean; k: string }[] = [];
  phis.forEach((ph, i) => {
    const N = 60;
    for (let j = 0; j < N; j++) {
      const a = proj((L * j) / N, ph), c = proj((L * (j + 1)) / N, ph);
      segs.push({ x1: a.sx, y1: a.sy, x2: c.sx, y2: c.sy, f: a.front && c.front, k: `${i}-${j}` });
    }
  });
  const N0 = proj(0, 0), S0 = proj(Math.PI, 0);
  const status = L < Math.PI - 1e-9 ? "Each geodesic is still the unique shortest path to its endpoint." : L <= Math.PI + 1e-9 ? "All geodesics meet at the south pole: the first conjugate point." : "Past the conjugate point: no geodesic in the fan is minimising any more.";
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>length L = {L.toFixed(2)} <input type="range" min={10} max={628} value={L100} onChange={(e) => setL(Number(e.target.value))} aria-label="length" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A fan of geodesics on the sphere" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {segs.filter((s) => !s.f).map((s) => <line key={s.k} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} style={{ stroke: "var(--accent)", strokeWidth: 1.2, opacity: 0.3 }} />)}
        {segs.filter((s) => s.f).map((s) => <line key={s.k} x1={s.x1} y1={s.y1} x2={s.x2} y2={s.y2} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />)}
        <circle cx={N0.sx} cy={N0.sy} r={4} style={{ fill: "var(--text)" }} />
        <text x={N0.sx + 8} y={N0.sy - 6} style={{ fill: "var(--text)", fontSize: 11 }}>p</text>
        <circle cx={S0.sx} cy={S0.sy} r={4} style={{ fill: L >= Math.PI ? "var(--danger)" : "var(--text-muted)" }} />
        <text x={S0.sx + 8} y={S0.sy + 12} style={{ fill: L >= Math.PI ? "var(--danger)" : "var(--text-muted)", fontSize: 11 }}>antipode of p</text>
        <text x={330} y={60} style={{ fill: "var(--text-muted)", fontSize: 11 }}>faint: the far side</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>L = {L.toFixed(2)}, π = 3.14. {status}</p>
      <figcaption className="viz-caption">
        Twelve geodesics leave p on the unit sphere. Every Jacobi field along them that vanishes at p vanishes again at
        distance π, where the fan refocuses: the antipode is conjugate to p along each geodesic. Beyond a conjugate point a
        geodesic can be shortened by a small variation.
      </figcaption>
    </figure>
  );
}
