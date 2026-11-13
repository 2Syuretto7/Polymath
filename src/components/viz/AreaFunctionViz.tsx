"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const FS = {
  smooth: { name: "f continuous", f: (t: number) => 1 + 0.6 * Math.sin(3 * t), F: (x: number) => x + 0.2 * (1 - Math.cos(3 * x)) },
  step: { name: "f with a jump at 1", f: (t: number) => (t < 1 ? 0.5 : 1.5), F: (x: number) => (x < 1 ? 0.5 * x : 0.5 + 1.5 * (x - 1)) },
};
type K = keyof typeof FS;
const W = 520, H = 230, X0 = 30, X1 = 500, A = 0, B = 2;

/** The area function F(x) = ∫ f from 0 to x. Where f is continuous, F′(x) = f(x); at a jump, F has a corner. */
export function AreaFunctionViz() {
  const [k, setK] = useState<K>("step");
  const [x, setX] = useState(1);
  const F = FS[k];
  const X = (t: number) => X0 + ((t - A) / (B - A)) * (X1 - X0);
  const Yf = (y: number) => 105 - y * 55, YF = (y: number) => 220 - y * 32;
  const grid = Array.from({ length: 201 }, (_, i) => A + ((B - A) * i) / 200);
  const h = 0.01;
  const right = (F.F(x + h) - F.F(x)) / h, left = (F.F(x) - F.F(x - h)) / h;
  const fm = (v: number) => fmtNum(Number(v.toFixed(3)));
  const shade = grid.filter((t) => t <= x);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(Object.keys(FS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{FS[q].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A function above and its area function below" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Yf(0)} x2={X1} y2={Yf(0)} className="viz-axis" />
        {shade.length > 1 && <polygon points={`${X(0)},${Yf(0)} ${shade.map((t) => `${X(t).toFixed(1)},${Yf(F.f(t)).toFixed(1)}`).join(" ")} ${X(x)},${Yf(0)}`} style={{ fill: "var(--accent-soft)" }} />}
        <polyline points={grid.map((t) => `${X(t).toFixed(1)},${Yf(F.f(t)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={X1} y={Yf(0) - 4} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>y = f(t)</text>
        <line x1={X0} y1={YF(0)} x2={X1} y2={YF(0)} className="viz-axis" />
        <polyline points={grid.map((t) => `${X(t).toFixed(1)},${YF(F.F(t)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X(x)} cy={YF(F.F(x))} r={4.5} style={{ fill: "var(--accent)" }} />
        <line x1={X(x)} y1={Yf(0)} x2={X(x)} y2={YF(0)} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <text x={X1} y={YF(0) - 4} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>y = F(x)</text>
      </svg>
      <div className="viz-sliders">
        <label><span>x: <span className="mono">{fm(x)}</span></span>
          <input type="range" min={0.1} max={1.9} step={0.05} value={x} onChange={(e) => setX(Math.round(Number(e.target.value) * 100) / 100)} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>F(x), the shaded area</td><td className="mono">{fm(F.F(x))}</td></tr>
          <tr><td>right quotient (F(x + h) − F(x))/h, h = 0.01</td><td className="mono">{fm(right)}</td></tr>
          <tr><td>left quotient (F(x) − F(x − h))/h</td><td className="mono">{fm(left)}</td></tr>
          <tr><td>f(x)</td><td className="mono">{fm(F.f(x))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "step" && Math.abs(x - 1) < 1e-9
          ? "At the jump, the right quotient approaches 1.5 and the left 0.5: F is continuous, but it has a corner and no derivative."
          : "Where f is continuous, both quotients approach f(x): F′(x) = f(x). F is always continuous, even across a jump of f."}
      </figcaption>
    </figure>
  );
}
