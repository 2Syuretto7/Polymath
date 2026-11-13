"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 45, CX = 250, CY = 160, RAD = Math.sqrt(5);
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** Maximise f = x + 2y on the circle x² + y² = 5. At the best point the gradients of f and of the constraint line up. */
export function LagrangeViz() {
  const [deg, setDeg] = useState(20);
  const th = (deg * Math.PI) / 180;
  const p: [number, number] = [RAD * Math.cos(th), RAD * Math.sin(th)];
  const fv = p[0] + 2 * p[1];
  const gf: [number, number] = [1, 2];
  const gg: [number, number] = [2 * p[0], 2 * p[1]];
  const crossv = gf[0] * gg[1] - gf[1] * gg[0];
  const fm = (z: number) => fmtNum(Number(z.toFixed(2)));
  const levels = [-5, -3, -1, 1, 3, 5];
  const line = (c: number) => { const xs = [-5, 5]; return xs.map((x) => `${X(x)},${Y((c - x) / 2)}`).join(" "); };
  const sc = 0.4;

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 320" role="img" aria-label={`At angle ${deg} degrees, f = ${fm(fv)}.`} style={{ width: "100%", display: "block" }}>
        <defs><clipPath id="lagclip"><rect x={10} y={10} width={480} height={300} /></clipPath></defs>
        <g clipPath="url(#lagclip)">
          {levels.map((c) => <polyline key={c} points={line(c)} style={{ stroke: "var(--border-strong)", strokeWidth: 1, strokeDasharray: "4 4" }} />)}
          <polyline points={line(fv)} style={{ stroke: "var(--violet-300)", strokeWidth: 2 }} />
        </g>
        <line x1={20} y1={CY} x2={480} y2={CY} className="viz-axis" />
        <line x1={CX} y1={10} x2={CX} y2={310} className="viz-axis" />
        <circle cx={CX} cy={CY} r={S * RAD} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={X(p[0])} y1={Y(p[1])} x2={X(p[0] + sc * 2 * gf[0])} y2={Y(p[1] + sc * 2 * gf[1])} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(p[0] + sc * 2 * gf[0]) + 5} y={Y(p[1] + sc * 2 * gf[1])} className="viz-label is-on">∇f</text>
        <line x1={X(p[0])} y1={Y(p[1])} x2={X(p[0] + sc * gg[0])} y2={Y(p[1] + sc * gg[1])} style={{ stroke: "var(--danger)", strokeWidth: 2.5 }} />
        <text x={X(p[0] + sc * gg[0]) + 5} y={Y(p[1] + sc * gg[1]) + 12} className="viz-label">∇g</text>
        <circle cx={X(p[0])} cy={Y(p[1])} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>position on the circle: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>point (x, y)</td><td className="mono">({fm(p[0])}, {fm(p[1])})</td></tr>
          <tr><td>f = x + 2y</td><td className="mono">{fm(fv)}</td></tr>
          <tr><td>∇f = (1, 2) and ∇g = (2x, 2y)</td><td className="mono">(1, 2), ({fm(gg[0])}, {fm(gg[1])})</td></tr>
          <tr><td>how far from parallel (2 × 2 determinant)</td><td className="mono">{fm(crossv)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {Math.abs(crossv) < 0.15
          ? "Here the gradients are parallel, ∇f = λ∇g, and the level line of f just touches the circle. This is the maximum, 5, at (1, 2), or the minimum, −5, at (−1, −2)."
          : "The level line of f through the point crosses the circle, so moving along the circle one way increases f. Find where the level line only touches."}
      </figcaption>
    </figure>
  );
}
