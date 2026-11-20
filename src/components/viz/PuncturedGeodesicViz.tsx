"use client";

import { useState } from "react";

/** In the punctured plane, two points on opposite sides of the hole have no minimising geodesic between them. */
export function PuncturedGeodesicViz() {
  const [deg, setDeg] = useState(150);
  const [punct, setPunct] = useState(true);
  const th = (deg * Math.PI) / 180;
  const p: [number, number] = [-1.5, 0];
  const q: [number, number] = [1.5 * Math.cos(Math.PI - th), 1.5 * Math.sin(Math.PI - th)];
  // distance from origin to segment pq
  const dx = q[0] - p[0], dy = q[1] - p[1];
  const t = Math.max(0, Math.min(1, -(p[0] * dx + p[1] * dy) / (dx * dx + dy * dy)));
  const near = Math.hypot(p[0] + t * dx, p[1] + t * dy);
  const blocked = punct && near < 1e-3;
  const S = 60, cx = 260, cy = 100;
  const X = (u: number) => cx + S * u, Y = (v: number) => cy - S * v;
  const d = Math.hypot(dx, dy);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="space">
        <button type="button" aria-pressed={!punct} className={!punct ? "seg is-on" : "seg"} onClick={() => setPunct(false)}>the plane</button>
        <button type="button" aria-pressed={punct} className={punct ? "seg is-on" : "seg"} onClick={() => setPunct(true)}>the plane without the origin</button>
      </div>
      <div className="viz-controls">
        <label>angle of q = {deg}° <input type="range" min={0} max={180} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="angle" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Two points and the straight segment between them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={X(0)} cy={Y(0)} r={1.5 * S} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "3 3" }} />
        <line x1={X(p[0])} y1={Y(p[1])} x2={X(q[0])} y2={Y(q[1])} style={{ stroke: blocked ? "var(--danger)" : "var(--accent)", strokeWidth: 3, strokeDasharray: blocked ? "6 4" : undefined }} />
        {blocked && <path d={`M ${X(p[0])} ${Y(p[1])} Q ${X(0)} ${Y(0.35)} ${X(q[0])} ${Y(q[1])}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />}
        <circle cx={X(0)} cy={Y(0)} r={5} style={{ fill: punct ? "var(--bg)" : "var(--text-muted)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <circle cx={X(p[0])} cy={Y(p[1])} r={5} style={{ fill: "var(--text)" }} />
        <circle cx={X(q[0])} cy={Y(q[1])} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(p[0]) - 16} y={Y(p[1]) + 4} style={{ fill: "var(--text)", fontSize: 12 }}>p</text>
        <text x={X(q[0]) + 8} y={Y(q[1]) - 6} style={{ fill: "var(--text)", fontSize: 12 }}>q</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        d(p, q) = {d.toFixed(3)}. {blocked ? "The segment passes through the missing origin. Nearby curves have lengths approaching d, but none attains it: no minimising geodesic exists." : "The straight segment is a minimising geodesic."}
      </p>
      <figcaption className="viz-caption">
        Removing one point makes the plane incomplete: a Cauchy sequence can converge to the hole, and a geodesic aimed at
        it cannot be extended for all time. Hopf–Rinow says these failures go together.
      </figcaption>
    </figure>
  );
}
