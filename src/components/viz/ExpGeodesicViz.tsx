"use client";

import { useState } from "react";

type V3 = [number, number, number];
const dot = (a: V3, b: V3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const norm = (a: V3): V3 => { const l = Math.hypot(...a); return [a[0] / l, a[1] / l, a[2] / l]; };
const cross = (a: V3, b: V3): V3 => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** The exponential map of the unit sphere at the north pole: a tangent vector v goes to the end of the geodesic of length |v|. */
export function ExpGeodesicViz() {
  const [r100, setR100] = useState(100);
  const [deg, setDeg] = useState(30);
  const r = r100 / 100, th = (deg * Math.PI) / 180;
  const pt = (rr: number, tt: number): V3 => [Math.sin(rr) * Math.cos(tt), Math.sin(rr) * Math.sin(tt), Math.cos(rr)];
  const view = norm([1, 0.7, 0.9]);
  const ex = norm(cross([0, 0, 1], view));
  const ey = cross(view, ex);
  const S = 85, cx = 380, cy = 115;
  const pr = (p: V3): [number, number] => [cx + S * dot(p, ex), cy - S * dot(p, ey)];
  const lines = (pts: V3[], col: string, w: number, key: string) => pts.slice(1).map((q, i) => {
    const a = pr(pts[i]), b = pr(q);
    return <line key={key + i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} style={{ stroke: col, strokeWidth: w, opacity: dot(pts[i], view) >= -0.02 ? 1 : 0.25 }} />;
  });
  const geo = Array.from({ length: 81 }, (_, i) => pt((r * i) / 80, th));
  const circ = Array.from({ length: 91 }, (_, i) => pt(r, (2 * Math.PI * i) / 90));
  const end = pr(pt(r, th));
  const T = 22, tx = 120, ty = 115;
  const circumference = 2 * Math.PI * Math.abs(Math.sin(r));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>|v| = {r.toFixed(2)} <input type="range" min={0} max={350} value={r100} onChange={(e) => setR100(Number(e.target.value))} aria-label="length" /></label>
        <label>direction = {deg}° <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="direction" /></label>
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="A tangent vector at the pole and its image under the exponential map" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><marker id="eg-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
        <text x={tx} y={18} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>tangent plane at the pole</text>
        <circle cx={tx} cy={ty} r={T * Math.PI} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "4 3" }} />
        <circle cx={tx} cy={ty} r={T * r} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        {r > 0.02 && <line x1={tx} y1={ty} x2={tx + T * r * Math.cos(th)} y2={ty - T * r * Math.sin(th)} markerEnd="url(#eg-arr)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />}
        <text x={tx} y={ty + T * Math.PI + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>dashed: |v| = π</text>
        <text x={cx} y={18} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>the unit sphere</text>
        <circle cx={cx} cy={cy} r={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {lines(circ, "var(--accent)", 1.5, "c")}
        {lines(geo, "var(--danger)", 2.5, "g")}
        <circle cx={end[0]} cy={end[1]} r={4} style={{ fill: "var(--danger)" }} />
        <circle cx={pr([0, 0, 1])[0]} cy={pr([0, 0, 1])[1]} r={3} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Geodesic circle of radius {r.toFixed(2)}: length {circumference.toFixed(3)}, against {(2 * Math.PI * r).toFixed(3)} in the plane.
        {r >= Math.PI - 0.005 ? " Beyond π, geodesics from the pole stop minimising." : ""}
      </p>
      <figcaption className="viz-caption">
        exp sends v to the point reached at time 1 by the geodesic with initial velocity v. It maps the disc of radius r to
        a geodesic ball, whose boundary circle has length 2π sin r, shorter than 2πr because the sphere is positively
        curved. At |v| = π every direction reaches the south pole.
      </figcaption>
    </figure>
  );
}
