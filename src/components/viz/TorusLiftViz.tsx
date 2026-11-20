"use client";

import { useState } from "react";

const P = [0.35, 0.4];

/** A geodesic on the flat square torus and its lift to the plane: expₚ is a covering map. */
export function TorusLiftViz() {
  const [deg, setDeg] = useState(27);
  const [L10, setL] = useState(30);
  const th = (deg * Math.PI) / 180, L = L10 / 10;
  const dx = Math.cos(th), dy = Math.sin(th);
  // wrapped pieces in the unit square
  const pieces: [number, number, number, number][] = [];
  let s = 0, px = P[0], py = P[1];
  while (s < L - 1e-9) {
    const tx = dx > 1e-9 ? (1 - px) / dx : Infinity, ty = dy > 1e-9 ? (1 - py) / dy : Infinity;
    const step = Math.min(tx, ty, L - s);
    const qx = px + step * dx, qy = py + step * dy;
    pieces.push([px, py, qx, qy]);
    s += step;
    px = qx >= 1 - 1e-9 ? 0 : qx; py = qy >= 1 - 1e-9 ? 0 : qy;
  }
  let best = Infinity, hit = "";
  for (let a = 0; a <= 6; a++) for (let b = 0; b <= 6; b++) {
    if (a === 0 && b === 0) continue;
    const t = a * dx + b * dy;
    if (t > 0 && t <= L) { const d = Math.abs(a * dy - b * dx); if (d < best) { best = d; hit = `(${a}, ${b})`; } }
  }
  const S = 130, sx = 20, sy = 30;
  const C = 40, ox = 230, oy = 170;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>direction = {deg}° <input type="range" min={0} max={90} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="direction" /></label>
        <label>length = {L.toFixed(1)} <input type="range" min={1} max={60} value={L10} onChange={(e) => setL(Number(e.target.value))} aria-label="length" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A geodesic on the torus and its lift to the plane" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={sx} y={sy} width={S} height={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {pieces.map(([a, b, c, d], i) => <line key={i} x1={sx + a * S} y1={sy + S - b * S} x2={sx + c * S} y2={sy + S - d * S} style={{ stroke: "var(--accent)", strokeWidth: 1.8 }} />)}
        <circle cx={sx + P[0] * S} cy={sy + S - P[1] * S} r={4} style={{ fill: "var(--text)" }} />
        <text x={sx + S / 2} y={sy - 8} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>the torus: opposite edges glued</text>
        {Array.from({ length: 7 }, (_, i) => <line key={`v${i}`} x1={ox + i * C} y1={oy - 6 * C + 10} x2={ox + i * C} y2={oy} style={{ stroke: "var(--grid-line)" }} />)}
        {Array.from({ length: 5 }, (_, j) => <line key={`h${j}`} x1={ox} y1={oy - j * C} x2={ox + 6 * C} y2={oy - j * C} style={{ stroke: "var(--grid-line)" }} />)}
        {Array.from({ length: 6 }, (_, i) => Array.from({ length: 4 }, (_, j) => <circle key={`${i}-${j}`} cx={ox + (i + P[0]) * C} cy={oy - (j + P[1]) * C} r={2.5} style={{ fill: "var(--text-muted)" }} />))}
        <line x1={ox + P[0] * C} y1={oy - P[1] * C} x2={ox + (P[0] + Math.min(L, 8) * dx) * C} y2={oy - (P[1] + Math.min(L, 8) * dy) * C} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={ox + P[0] * C} cy={oy - P[1] * C} r={4} style={{ fill: "var(--text)" }} />
        <text x={ox + 3 * C} y={sy - 8} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>the lift to the plane: dots are copies of p</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {best < 1e-6 ? `The lift reaches the copy p + ${hit}: a closed geodesic loop at p.` : hit ? `Closest approach so far: the lift passes within ${best.toFixed(3)} of the copy p + ${hit}.` : "The lift has not yet passed near another copy of p."}
      </p>
      <figcaption className="viz-caption">
        On the flat torus every geodesic from p lifts to a straight line in the plane, and expₚ is the covering map from
        the plane to the torus. Geodesic loops at p correspond to copies p + (a, b), one in each homotopy class. Cartan–Hadamard says the same holds whenever a complete manifold has curvature ≤ 0.
      </figcaption>
    </figure>
  );
}
