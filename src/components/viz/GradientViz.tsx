"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const f = (x: number, y: number) => x * x + 2 * y * y;
const S = 55, CX = 250, CY = 160;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** Level curves of f = x² + 2y², the gradient at a point, and the rate of change in a chosen direction. */
export function GradientViz() {
  const [px, setPx] = useState(1.5);
  const [py, setPy] = useState(1);
  const [deg, setDeg] = useState(45);
  const g: [number, number] = [2 * px, 4 * py];
  const gl = Math.hypot(g[0], g[1]);
  const th = (deg * Math.PI) / 180;
  const u: [number, number] = [Math.cos(th), Math.sin(th)];
  const du = g[0] * u[0] + g[1] * u[1];
  const levels = [0.5, 1, 2, 3, 4.5, 6, 8, 10.5];
  const fm = (x: number) => fmtNum(Number(x.toFixed(2)));
  const gs = 0.25; // draw gradient at quarter length
  const angleToGrad = gl > 0 ? (Math.acos(Math.max(-1, Math.min(1, du / gl))) * 180) / Math.PI : 0;

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 320" role="img" aria-label={`At (${fm(px)}, ${fm(py)}) the gradient is (${fm(g[0])}, ${fm(g[1])}).`} style={{ width: "100%", display: "block" }}>
        <line x1={20} y1={CY} x2={480} y2={CY} className="viz-axis" />
        <line x1={CX} y1={10} x2={CX} y2={310} className="viz-axis" />
        {levels.map((c) => (
          <ellipse key={c} cx={CX} cy={CY} rx={S * Math.sqrt(c)} ry={S * Math.sqrt(c / 2)} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1 }} />
        ))}
        <ellipse cx={CX} cy={CY} rx={S * Math.sqrt(f(px, py))} ry={S * Math.sqrt(f(px, py) / 2)} style={{ fill: "none", stroke: "var(--violet-300)", strokeWidth: 2 }} />
        <line x1={X(px)} y1={Y(py)} x2={X(px + gs * g[0])} y2={Y(py + gs * g[1])} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={X(px + gs * g[0])} cy={Y(py + gs * g[1])} r={4} style={{ fill: "var(--accent)" }} />
        <text x={X(px + gs * g[0]) + 6} y={Y(py + gs * g[1]) - 4} className="viz-label is-on">∇f</text>
        <line x1={X(px)} y1={Y(py)} x2={X(px + 0.9 * u[0])} y2={Y(py + 0.9 * u[1])} style={{ stroke: "var(--danger)", strokeWidth: 2.5 }} />
        <circle cx={X(px + 0.9 * u[0])} cy={Y(py + 0.9 * u[1])} r={3.5} style={{ fill: "var(--danger)" }} />
        <text x={X(px + 0.9 * u[0]) + 6} y={Y(py + 0.9 * u[1]) + 12} className="viz-label">u</text>
        <circle cx={X(px)} cy={Y(py)} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>point, x = <span className="mono">{fm(px)}</span></span>
          <input type="range" min={-2.5} max={2.5} step={0.25} value={px} onChange={(e) => setPx(Number(e.target.value))} /></label>
        <label><span>point, y = <span className="mono">{fm(py)}</span></span>
          <input type="range" min={-1.75} max={1.75} step={0.25} value={py} onChange={(e) => setPy(Number(e.target.value))} /></label>
        <label><span>direction u, angle: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>f = x² + 2y² at the point</td><td className="mono">{fm(f(px, py))}</td></tr>
          <tr><td>∇f = (2x, 4y), drawn at quarter length</td><td className="mono">({fm(g[0])}, {fm(g[1])}), length {fm(gl)}</td></tr>
          <tr><td>directional derivative ∇f · u, in red direction</td><td className="mono">{fm(du)}</td></tr>
          <tr><td>angle between u and ∇f</td><td className="mono">{fm(angleToGrad)}°</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The rate of change in direction u is |∇f| cos of the angle between them. It is greatest, |∇f|, when u points along
        the gradient, and zero when u runs along the level curve through the point: the gradient is perpendicular to level
        curves.
      </figcaption>
    </figure>
  );
}
