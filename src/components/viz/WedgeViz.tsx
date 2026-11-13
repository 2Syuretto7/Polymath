"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const S = 90, CX = 170, CY = 150;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** The 2-form dx ∧ dy eats two vectors and returns the signed area of the parallelogram they span. */
export function WedgeViz() {
  const [a, setA] = useState(20);
  const [b, setB] = useState(100);
  const [lv, setLv] = useState(1.2);
  const u: [number, number] = [1.3 * Math.cos((a * Math.PI) / 180), 1.3 * Math.sin((a * Math.PI) / 180)];
  const v: [number, number] = [lv * Math.cos((b * Math.PI) / 180), lv * Math.sin((b * Math.PI) / 180)];
  const w = u[0] * v[1] - u[1] * v[0];
  const pos = w >= 0;
  const fm = (z: number) => fmtNum(Number(z.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 340 300" role="img" aria-label="Two vectors and the parallelogram they span" style={{ width: "100%", maxWidth: 420, display: "block", margin: "0 auto" }}>
        <defs>
          <marker id="wg-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text)" }} />
          </marker>
        </defs>
        <line x1={0} y1={CY} x2={340} y2={CY} className="viz-axis" />
        <line x1={CX} y1={0} x2={CX} y2={300} className="viz-axis" />
        <path d={`M${X(0)},${Y(0)} L${X(u[0])},${Y(u[1])} L${X(u[0] + v[0])},${Y(u[1] + v[1])} L${X(v[0])},${Y(v[1])} Z`}
          style={{ fill: pos ? "var(--accent-soft)" : "var(--danger-soft)", stroke: pos ? "var(--accent)" : "var(--danger)", strokeWidth: 1.5 }} />
        <line x1={X(0)} y1={Y(0)} x2={X(u[0])} y2={Y(u[1])} markerEnd="url(#wg-arrow)" style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <line x1={X(0)} y1={Y(0)} x2={X(v[0])} y2={Y(v[1])} markerEnd="url(#wg-arrow)" style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <text x={X(u[0] * 1.12)} y={Y(u[1] * 1.12) + 4} style={{ fontSize: 14, fill: "var(--text)" }}>u</text>
        <text x={X(v[0] * 1.12)} y={Y(v[1] * 1.12) + 4} style={{ fontSize: 14, fill: "var(--text)" }}>v</text>
      </svg>
      <div className="viz-sliders">
        <label><span>direction of u: <span className="mono">{a}°</span></span>
          <input type="range" min={0} max={359} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>direction of v: <span className="mono">{b}°</span></span>
          <input type="range" min={0} max={359} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>length of v: <span className="mono">{fm(lv)}</span></span>
          <input type="range" min={0} max={1.6} step={0.05} value={lv} onChange={(e) => setLv(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>dx ∧ dy (u, v) = u₁v₂ − u₂v₁</td><td className="mono">{fm(w)}</td></tr>
          <tr><td>dx ∧ dy (v, u)</td><td className="mono">{fm(-w)}</td></tr>
          <tr><td>turning from u to v is</td><td>{Math.abs(w) < 1e-9 ? "neither: u and v are parallel" : pos ? "anticlockwise: positive" : "clockwise: negative"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The 2-form measures oriented area. Swap the vectors and the sign flips; make them parallel and it vanishes. Integrating
        a 2-form over a surface adds up these little signed areas, which is why forms carry their own orientation.
      </figcaption>
    </figure>
  );
}
