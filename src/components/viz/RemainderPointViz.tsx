"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const W = 520, H = 220, X0 = 30, X1 = 500, Y0 = 200, Y1 = 14, XR = [-2, 2.2], YR = [-1, 9];

/** Taylor's theorem for eˣ at 0: the remainder equals e^c xⁿ⁺¹/(n + 1)! for some c between 0 and x. Find that c. */
export function RemainderPointViz() {
  const [n, setN] = useState(2);
  const [x, setX] = useState(1.5);
  const P = (t: number) => { let s = 0; for (let k = 0; k <= n; k++) s += Math.pow(t, k) / fact(k); return s; };
  const R = Math.exp(x) - P(x);
  const coef = Math.pow(x, n + 1) / fact(n + 1);
  const c = x === 0 ? 0 : Math.log(R / coef);
  const XX = (t: number) => X0 + ((t - XR[0]) / (XR[1] - XR[0])) * (X1 - X0);
  const YY = (v: number) => Y0 - ((Math.max(YR[0], Math.min(YR[1], v)) - YR[0]) / (YR[1] - YR[0])) * (Y0 - Y1);
  const grid = Array.from({ length: 201 }, (_, i) => XR[0] + ((XR[1] - XR[0]) * i) / 200);
  const line = (fn: (t: number) => number) => grid.map((t) => `${XX(t).toFixed(1)},${YY(fn(t)).toFixed(1)}`).join(" ");
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The exponential and its Taylor polynomial" style={{ width: "100%", display: "block" }}>
        <line x1={X0} y1={YY(0)} x2={X1} y2={YY(0)} className="viz-axis" />
        <line x1={XX(0)} y1={Y1} x2={XX(0)} y2={Y0} className="viz-axis" />
        <polyline points={line(Math.exp)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <polyline points={line(P)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={XX(x)} y1={YY(P(x))} x2={XX(x)} y2={YY(Math.exp(x))} style={{ stroke: "var(--danger)", strokeWidth: 3 }} />
        {x !== 0 && <circle cx={XX(c)} cy={YY(0)} r={5} style={{ fill: "var(--danger)" }} />}
        {x !== 0 && <text x={XX(c)} y={YY(0) + 16} textAnchor="middle" style={{ fontSize: 11, fill: "var(--danger)" }}>c</text>}
        <text x={XX(x)} y={YY(0) + 16} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>x</text>
      </svg>
      <p className="mono-meta" style={{ margin: "4px 0 0", textTransform: "none" }}>dark: eˣ · accent: Pₙ · vertical bar: the remainder at x</p>
      <div className="viz-sliders">
        <label><span>degree n: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={6} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>x: <span className="mono">{fm(x)}</span></span>
          <input type="range" min={-2} max={2} step={0.1} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>remainder eˣ − Pₙ(x)</td><td className="mono">{fm(R)}</td></tr>
          <tr><td>the c with e^c xⁿ⁺¹/(n + 1)! equal to it</td><td className="mono">{x === 0 ? "any" : fm(c)}</td></tr>
          <tr><td>bound using e^c ≤ e^max(0, x)</td><td className="mono">{fm(Math.exp(Math.max(0, x)) * Math.abs(coef))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Whatever n and x you choose, the point c lands strictly between 0 and x, as Lagrange&rsquo;s form of the remainder promises. Not knowing c exactly does not matter: bounding e^c gives an error bound that tends to 0 as n grows.
      </figcaption>
    </figure>
  );
}
