"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const P: [number, number] = [1, 0.5];
const F = (x: number, y: number): [number, number] => [x + 0.4 * y * y, y + 0.4 * x * x];
// Jacobian of F at P: [[1, 0.8y], [0.8x, 1]]
const J: [[number, number], [number, number]] = [[1, 0.8 * P[1]], [0.8 * P[0], 1]];
const SIZES = [1.2, 0.8, 0.4, 0.2, 0.1, 0.05];

/** A small square around a point, mapped by a curved map F and by its derivative DF. Zoom in and the two images agree. */
export function JacobianZoomViz() {
  const [k, setK] = useState(0);
  const s = SIZES[k];
  const FP = F(P[0], P[1]);
  const scale = 110 / s; // magnify so the square always looks the same size
  const toSvg = (u: number, v: number) => `${260 + scale * u},${150 - scale * v}`;
  // boundary of the square [-s/2, s/2]^2 around P, sampled
  const pts: [number, number][] = [];
  const m = 40;
  for (let i = 0; i < m; i++) pts.push([-s / 2 + (s * i) / m, -s / 2]);
  for (let i = 0; i < m; i++) pts.push([s / 2, -s / 2 + (s * i) / m]);
  for (let i = 0; i < m; i++) pts.push([s / 2 - (s * i) / m, s / 2]);
  for (let i = 0; i < m; i++) pts.push([-s / 2, s / 2 - (s * i) / m]);
  let err = 0;
  const curved = pts.map(([dx, dy]) => {
    const [a, b] = F(P[0] + dx, P[1] + dy);
    const la = J[0][0] * dx + J[0][1] * dy, lb = J[1][0] * dx + J[1][1] * dy;
    err = Math.max(err, Math.hypot(a - FP[0] - la, b - FP[1] - lb));
    return toSvg(a - FP[0], b - FP[1]);
  }).join(" ");
  const linear = pts.map(([dx, dy]) => toSvg(J[0][0] * dx + J[0][1] * dy, J[1][0] * dx + J[1][1] * dy)).join(" ");
  const f = (x: number) => fmtNum(Number(x.toPrecision(3)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 300" role="img" aria-label={`Square of side ${s}: the largest gap between F and its linear approximation is ${f(err)}.`} style={{ width: "100%", display: "block" }}>
        <polygon points={linear} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <polygon points={curved} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={260} cy={150} r={4} style={{ fill: "var(--danger)" }} />
        <text x={10} y={20} className="viz-label">solid: image under F; dashed, shaded: image under DF(p)</text>
        <text x={10} y={290} className="viz-label">magnified {fmtNum(Math.round(scale / 110 * 100) / 100)} times, centred on F(p)</text>
      </svg>
      <div className="viz-sliders">
        <label><span>side of the square around p = (1, 0.5): <span className="mono">{s}</span></span>
          <input type="range" min={0} max={SIZES.length - 1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>F(x, y)</td><td className="mono">(x + 0.4y², y + 0.4x²)</td></tr>
          <tr><td>DF(p), the Jacobian matrix at p</td><td className="mono">[[1, 0.4], [0.8, 1]]</td></tr>
          <tr><td>largest gap between F and its linear approximation</td><td className="mono">{f(err)}</td></tr>
          <tr><td>gap divided by the size of the square</td><td className="mono">{f(err / s)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        As the square shrinks, the gap shrinks faster than the square itself: the last row tends to 0. That is exactly what
        it means for F to be differentiable at p with derivative DF(p). Up close, a smooth map looks linear.
      </figcaption>
    </figure>
  );
}
