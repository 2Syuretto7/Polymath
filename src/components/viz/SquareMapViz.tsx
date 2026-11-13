"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 60, RHO = 0.35;

/** The map (x, y) ↦ (x² − y², 2xy), squaring in the complex plane. A small circle around p maps to a loop around F(p). */
export function SquareMapViz() {
  const [m, setM] = useState(1);
  const [deg, setDeg] = useState(30);
  const th = (deg * Math.PI) / 180;
  const p: [number, number] = [m * Math.cos(th), m * Math.sin(th)];
  const F = (x: number, y: number): [number, number] => [x * x - y * y, 2 * x * y];
  const circ = Array.from({ length: 121 }, (_, i) => { const a = (2 * Math.PI * i) / 120; return [p[0] + RHO * Math.cos(a), p[1] + RHO * Math.sin(a)] as [number, number]; });
  const det = 4 * (p[0] * p[0] + p[1] * p[1]);
  const covers0 = m < RHO;
  const L = (cx: number) => (q: [number, number]) => `${cx + S * q[0]},${150 - S * q[1]}`;
  const left = L(120), right = L(380);
  const Fp = F(...p);
  const fm = (z: number) => fmtNum(Number(z.toFixed(2)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 300" role="img" aria-label={`The Jacobian determinant at p is ${fm(det)}.`} style={{ width: "100%", display: "block" }}>
        <text x={20} y={20} className="viz-label">domain</text>
        <text x={280} y={20} className="viz-label">image under F</text>
        <line x1={250} y1={10} x2={250} y2={290} style={{ stroke: "var(--border)" }} />
        {[120, 380].map((cx) => (
          <g key={cx}>
            <line x1={cx - 110} y1={150} x2={cx + 110} y2={150} className="viz-axis" />
            <line x1={cx} y1={40} x2={cx} y2={290} className="viz-axis" />
          </g>
        ))}
        <polyline points={circ.map(left).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={120 + S * p[0]} cy={150 - S * p[1]} r={4} style={{ fill: "var(--text)" }} />
        <polyline points={circ.map((q) => right(F(q[0], q[1]))).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={380 + S * Fp[0]} cy={150 - S * Fp[1]} r={4} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>distance of p from the origin: <span className="mono">{m}</span></span>
          <input type="range" min={0} max={1.5} step={0.05} value={m} onChange={(e) => setM(Number(e.target.value))} /></label>
        <label><span>angle of p: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>F(x, y) = (x² − y², 2xy); p</td><td className="mono">({fm(p[0])}, {fm(p[1])})</td></tr>
          <tr><td>det DF(p) = 4(x² + y²)</td><td className="mono">{fm(det)}</td></tr>
          <tr><td>small circle of radius {RHO} around p</td><td>{covers0 ? "contains the origin: its image wraps twice round, so F is two-to-one there" : "image is a simple loop: F is one-to-one near p"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        F is not one-to-one overall, since F(−p) = F(p). But wherever det DF(p) ≠ 0, F is one-to-one on a small enough disc
        around p, with a differentiable inverse. At the origin the determinant is 0, and no disc, however small, works.
      </figcaption>
    </figure>
  );
}
