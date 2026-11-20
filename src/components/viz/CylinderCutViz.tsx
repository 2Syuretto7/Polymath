"use client";

import { useState } from "react";

/** Geodesics on a flat cylinder of circumference 2π: straight lines in the unrolled strip, minimising until they cross the cut locus. */
export function CylinderCutViz() {
  const [deg, setDeg] = useState(20);
  const [L10, setL10] = useState(40);
  const th = (deg * Math.PI) / 180, L = L10 / 10;
  const ex = L * Math.cos(th), ey = L * Math.sin(th);
  const d = Math.min(...[-2, -1, 0, 1, 2].map((k) => Math.hypot(ex + 2 * Math.PI * k, ey)));
  const minimising = d > L - 1e-6;
  // where the geodesic reaches the cut line x = ±π
  const tCut = Math.abs(Math.cos(th)) < 1e-9 ? Infinity : Math.PI / Math.abs(Math.cos(th));
  const S = 26, cx = 260, cy = 100;
  const X = (u: number) => cx + S * u, Y = (v: number) => cy - S * v;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>direction = {deg}° <input type="range" min={0} max={90} value={deg} onChange={(e) => setDeg(Number(e.target.value))} aria-label="direction" /></label>
        <label>length L = {L.toFixed(1)} <input type="range" min={1} max={80} value={L10} onChange={(e) => setL10(Number(e.target.value))} aria-label="length" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="The unrolled cylinder with a geodesic and the cut locus" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X(-Math.PI)} y={10} width={S * 2 * Math.PI} height={180} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        {[-1, 1].map((s) => <line key={s} x1={X(s * Math.PI)} y1={10} x2={X(s * Math.PI)} y2={190} style={{ stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "5 4" }} />)}
        {[-1, 1].map((k) => <text key={k} x={X(k * 2 * Math.PI)} y={cy + 4} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>copy of p</text>)}
        <line x1={X(0)} y1={Y(0)} x2={X(ex)} y2={Y(ey)} style={{ stroke: minimising ? "var(--accent)" : "var(--danger)", strokeWidth: 3 }} />
        <circle cx={X(0)} cy={Y(0)} r={4} style={{ fill: "var(--text)" }} />
        <text x={X(0) - 8} y={Y(0) + 16} style={{ fill: "var(--text)", fontSize: 12 }}>p</text>
        <text x={X(Math.PI) + 4} y={22} style={{ fill: "var(--danger)", fontSize: 11 }}>cut locus</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Geodesic length {L.toFixed(2)}; distance from p to its endpoint {d.toFixed(2)}. {minimising ? "Minimising." : "Not minimising: a shorter path goes the other way round."}
        {Number.isFinite(tCut) ? ` It crosses the cut locus at length ${tCut.toFixed(2)}.` : " Vertical geodesics never meet the cut locus."}
      </p>
      <figcaption className="viz-caption">
        The cylinder is the strip with its left and right edges glued, and the dashed line opposite p is the set of points
        reached by two different shortest geodesics. A geodesic from p minimises length exactly until it crosses that
        line: the cut locus.
      </figcaption>
    </figure>
  );
}
