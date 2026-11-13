"use client";

import { useState } from "react";

/** The degree of a loop round the origin, read off by lifting its angle continuously. */
export function WindingCountViz() {
  const [off, setOff] = useState(0.3);
  const [k, setK] = useState(1);
  const [wob, setWob] = useState(0.4);
  const N = 720;
  const g = (t: number): [number, number] => {
    const a = 2 * Math.PI * t, r = 1 + wob * Math.cos(3 * a);
    return [off + r * Math.cos(k * a), r * Math.sin(k * a) * 0.8];
  };
  const pts = Array.from({ length: N + 1 }, (_, i) => g(i / N));
  let total = 0;
  const lifted: number[] = [Math.atan2(pts[0][1], pts[0][0])];
  for (let i = 1; i <= N; i++) {
    let d = Math.atan2(pts[i][1], pts[i][0]) - Math.atan2(pts[i - 1][1], pts[i - 1][0]);
    if (d > Math.PI) d -= 2 * Math.PI; if (d < -Math.PI) d += 2 * Math.PI;
    total += d; lifted.push(lifted[0] + total);
  }
  const deg = Math.round(total / (2 * Math.PI));
  const hits = pts.some(([x, y]) => Math.hypot(x, y) < 0.02);
  const W = 520, H = 240, U = 55, cx = 140, cy = 120;
  const X = (v: number) => cx + v * U, Y = (v: number) => cy - v * U;
  const gx = (t: number) => 300 + t * 200, lo = Math.min(...lifted, -1), hi = Math.max(...lifted, 1), gy = (v: number) => 210 - ((v - lo) / (hi - lo)) * 180;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>shift the loop sideways: <span className="mono">{off.toFixed(2)}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.01} value={off} onChange={(e) => setOff(Number(e.target.value))} /></label>
        <label><span>times round its centre: <span className="mono">{k}</span></span>
          <input type="range" min={-2} max={2} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
        <label><span>wobble: <span className="mono">{wob.toFixed(2)}</span></span>
          <input type="range" min={0} max={0.6} step={0.01} value={wob} onChange={(e) => setWob(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A loop in the plane and the graph of its continuously lifted angle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X(0)} cy={Y(0)} r={5} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <text x={X(0) + 8} y={Y(0) - 8} style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <line x1={gx(0)} y1={gy(lo)} x2={gx(0)} y2={gy(hi)} style={{ stroke: "var(--border)" }} />
        <line x1={gx(0)} y1={210} x2={gx(1)} y2={210} style={{ stroke: "var(--border)" }} />
        <path d={lifted.map((v, i) => `${i ? "L" : "M"}${gx(i / N).toFixed(1)},${gy(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={400} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>the angle, lifted to ℝ, against time</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {hits ? "the loop passes through 0, so its winding number is not defined" : `total change of angle = ${(total / Math.PI).toFixed(2)}π, so the winding number is ${deg}`}
      </p>
      <figcaption className="viz-caption">
        The angle of a point moving round the loop is defined only up to multiples of 2π, but lifting it through the covering
        of the circle by the line makes it a continuous real function. Its total change is 2π times an integer, the degree,
        which cannot change as the loop is deformed without crossing 0.
      </figcaption>
    </figure>
  );
}
