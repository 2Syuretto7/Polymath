"use client";

import { useState } from "react";

/** Non-zero points of the lattice with basis (1, 0), (s, t) inside the disc of radius r. */
export function pointsInDisc(s: number, t: number, r: number) {
  const out: [number, number][] = [];
  const N = Math.ceil(r / t) + 1;
  for (let n = -N; n <= N; n++) for (let m = -Math.ceil(r + Math.abs(n * s)) - 1; m <= Math.ceil(r + Math.abs(n * s)) + 1; m++) {
    const x = m + n * s, y = n * t;
    if ((m || n) && x * x + y * y <= r * r + 1e-9) out.push([x, y]);
  }
  return out;
}
/** The radius at which the disc has area 4 × covolume, Minkowski’s threshold in the plane. */
export const threshold = (t: number) => 2 * Math.sqrt(t / Math.PI);

/** Minkowski’s convex body theorem for discs and plane lattices. */
export function MinkowskiBodyViz() {
  const [s, setS] = useState(0.5);
  const [t, setT] = useState(1.5);
  const [r, setR] = useState(1.2);
  const S = 50, X0 = 270, Y0 = 125;
  const all: [number, number][] = [];
  for (let n = -4; n <= 4; n++) for (let m = -8; m <= 8; m++) { const x = m + n * s, y = n * t; if (Math.abs(x) <= 5.2 && Math.abs(y) <= 2.4) all.push([x, y]); }
  const inside = pointsInDisc(s, t, r);
  const area = Math.PI * r * r, bound = 4 * t;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>s = {s.toFixed(1)} <input type="range" min={0} max={0.9} step={0.1} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="s" /></label>
        <label>t = {t.toFixed(1)} <input type="range" min={0.5} max={2} step={0.1} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
        <label>r = {r.toFixed(2)} <input type="range" min={0.2} max={2.4} step={0.02} value={r} onChange={(e) => setR(Number(e.target.value))} aria-label="radius" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="A disc and a plane lattice" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={X0} cy={Y0} r={r * S} style={{ fill: area > bound ? "var(--success-soft)" : "var(--accent-soft)", stroke: area > bound ? "var(--success)" : "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X0} cy={Y0} r={threshold(t) * S} style={{ fill: "none", stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        {all.map(([x, y], i) => {
          const isIn = (x || y) && x * x + y * y <= r * r + 1e-9;
          return <circle key={i} cx={X0 + x * S} cy={Y0 - y * S} r={isIn ? 5 : 3} style={{ fill: !x && !y ? "var(--text)" : isIn ? "var(--success)" : "var(--text-faint)" }} />;
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Area πr² = {area.toFixed(3)}; 4 × covolume = {bound.toFixed(3)}. {area > bound ? "The theorem guarantees a non-zero lattice point." : "The theorem guarantees nothing."} Non-zero points in the disc: {inside.length}. Threshold radius 2√(covolume/π) = {threshold(t).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        The lattice has basis (1, 0) and (s, t), so its covolume is t. Minkowski&rsquo;s theorem: a convex region symmetric
        about 0 with area more than 4 times the covolume contains a non-zero lattice point. The dashed circle has exactly
        that area. Smaller discs may still contain points; the theorem only promises them beyond the threshold.
      </figcaption>
    </figure>
  );
}
