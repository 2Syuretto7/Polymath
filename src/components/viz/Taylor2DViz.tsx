"use client";

import { useState } from "react";
import { fmtNum } from "./format";

// f(x, y) = eˣ cos y about (0, 0): f = 1, ∇f = (1, 0), Hessian [[1, 0], [0, −1]]
const f = (x: number, y: number) => Math.exp(x) * Math.cos(y);
const W = 480, H = 220, X0 = 30, T = 1.6;

/** Along a line through the origin, compare eˣ cos y with its linear and quadratic Taylor approximations. */
export function Taylor2DViz() {
  const [deg, setDeg] = useState(30);
  const [h, setH] = useState(0.8);
  const th = (deg * Math.PI) / 180, c = Math.cos(th), s = Math.sin(th);
  const g = (t: number) => f(t * c, t * s);
  const L = (t: number) => 1 + t * c;
  const Q = (t: number) => 1 + t * c + 0.5 * t * t * (c * c - s * s);
  const px = (t: number) => X0 + ((t + T) / (2 * T)) * (W - 2 * X0);
  const py = (v: number) => H - 20 - ((v + 0.5) / 4.5) * (H - 40);
  const curve = (fn: (t: number) => number) => Array.from({ length: 161 }, (_, i) => { const t = -T + (2 * T * i) / 160; return `${px(t)},${py(Math.max(-0.5, Math.min(4, fn(t))))}`; }).join(" ");
  const fm = (z: number) => (Math.abs(z) < 1e-3 && z !== 0 ? z.toExponential(1) : fmtNum(Number(z.toFixed(4))));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The function along a line, with its linear and quadratic approximations." style={{ width: "100%", display: "block" }}>
        <line x1={px(0)} y1={10} x2={px(0)} y2={H - 10} className="viz-axis" />
        <line x1={X0} y1={py(0)} x2={W - X0} y2={py(0)} className="viz-axis" />
        <polyline points={curve(L)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
        <polyline points={curve(Q)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <polyline points={curve(g)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2.5 }} />
        <line x1={px(h)} y1={10} x2={px(h)} y2={H - 10} style={{ stroke: "var(--danger)", strokeWidth: 1, strokeDasharray: "3 3" }} />
        <text x={px(h) + 4} y={22} className="viz-label">t = {h}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>direction u = (cos θ, sin θ), θ = <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={180} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
        <label><span>distance t from the origin: <span className="mono">{h}</span></span>
          <input type="range" min={0.05} max={1.5} step={0.05} value={h} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>f(tu), solid</td><td className="mono">{fm(g(h))}</td></tr>
          <tr><td>linear: 1 + t cos θ, dashed; error</td><td className="mono">{fm(Math.abs(g(h) - L(h)))}</td></tr>
          <tr><td>quadratic: adds ½t²(cos²θ − sin²θ); error</td><td className="mono">{fm(Math.abs(g(h) - Q(h)))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Halve t and the linear error falls by about a quarter, the quadratic error by about an eighth: errors of order t²
        and t³. Turn the direction to 45° and the quadratic term vanishes, since the Hessian gives cos²θ − sin²θ = 0 there.
      </figcaption>
    </figure>
  );
}
