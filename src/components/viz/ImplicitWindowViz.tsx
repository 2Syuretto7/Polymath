"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 110, CX = 250, CY = 150, W = 0.35;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** The circle x² + y² = 1. Through a small window around a point, is the curve the graph of a function y = g(x)? */
export function ImplicitWindowViz() {
  const [deg, setDeg] = useState(50);
  const th = (deg * Math.PI) / 180;
  const p: [number, number] = [Math.cos(th), Math.sin(th)];
  const Fy = 2 * p[1], Fx = 2 * p[0];
  // inside the window, does each vertical line meet the curve at most once?
  const inWin = (x: number, y: number) => Math.abs(x - p[0]) <= W && Math.abs(y - p[1]) <= W;
  let graph = true;
  for (let i = 0; i <= 60; i++) {
    const x = p[0] - W + (2 * W * i) / 60;
    if (Math.abs(x) > 1) continue;
    const ys = [Math.sqrt(1 - x * x), -Math.sqrt(1 - x * x)].filter((y) => inWin(x, y));
    if (ys.length > 1 && Math.abs(ys[0] - ys[1]) > 1e-9) { graph = false; break; }
  }
  const fm = (z: number) => fmtNum(Number(z.toFixed(2)));
  const slope = Math.abs(Fy) > 1e-6 ? -Fx / Fy : null;

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 300" role="img" aria-label={graph ? "Inside the window the curve is a graph over x." : "Inside the window the curve is not a graph over x."} style={{ width: "100%", display: "block" }}>
        <line x1={20} y1={CY} x2={480} y2={CY} className="viz-axis" />
        <line x1={CX} y1={10} x2={CX} y2={290} className="viz-axis" />
        <circle cx={CX} cy={CY} r={S} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        <rect x={X(p[0] - W)} y={Y(p[1] + W)} width={2 * W * S} height={2 * W * S} style={{ fill: graph ? "var(--accent-soft)" : "var(--danger-soft)", stroke: graph ? "var(--accent)" : "var(--danger)", strokeWidth: 1.5 }} />
        <path d={Array.from({ length: 361 }, (_, i) => { const a = (i * Math.PI) / 180; const q: [number, number] = [Math.cos(a), Math.sin(a)]; return inWin(...q) ? `${X(q[0])},${Y(q[1])}` : null; }).reduce<string>((acc, s, i, arr) => s ? acc + (arr[i - 1] ? " L" : " M") + s : acc, "")}
          style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3 }} />
        <circle cx={X(p[0])} cy={Y(p[1])} r={5} style={{ fill: "var(--danger)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>point on the circle: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={359} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>point (a, b)</td><td className="mono">({fm(p[0])}, {fm(p[1])})</td></tr>
          <tr><td>∂F/∂y = 2b, for F = x² + y² − 1</td><td className="mono">{fm(Fy)}</td></tr>
          <tr><td>slope g′(a) = −F_x / F_y</td><td className="mono">{slope === null ? "undefined" : fm(slope)}</td></tr>
          <tr><td>inside the window, the curve is</td><td>{graph ? "the graph of a function y = g(x)" : "not a graph over x: some vertical lines meet it twice"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Where ∂F/∂y ≠ 0, a small enough window shows the curve as a graph y = g(x), even though no single formula covers the
        whole circle. Near (±1, 0), where ∂F/∂y = 0, every window fails. Shrinking the window helps only away from those points.
      </figcaption>
    </figure>
  );
}
