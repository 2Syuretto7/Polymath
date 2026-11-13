"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const s = (x: number) => Math.abs(x - Math.round(x)); // distance to the nearest integer
const T = (x: number, n: number) => { let t = 0; for (let k = 0; k < n; k++) t += s(2 ** k * x) / 2 ** k; return t; };
const W = 520, H = 200, X0 = 20, X1 = 500, Y0 = 185, Y1 = 14;

/** Takagi's function, a sum of ever finer zigzags. Zoom in on a point and the graph never straightens out. */
export function TakagiViz() {
  const [n, setN] = useState(4);
  const [z, setZ] = useState(0);
  const c = 1 / 3, w = Math.pow(2, -z) / 2;
  const a = z === 0 ? 0 : Math.max(0, c - w), b = z === 0 ? 1 : Math.min(1, c + w);
  const ys = Array.from({ length: 801 }, (_, i) => a + ((b - a) * i) / 800).map((x) => ({ x, y: T(x, n) }));
  const lo = Math.min(...ys.map((p) => p.y)), hi = Math.max(...ys.map((p) => p.y));
  const X = (x: number) => X0 + ((x - a) / (b - a)) * (X1 - X0);
  const Y = (y: number) => Y0 - ((y - lo) / (hi - lo || 1)) * (Y0 - Y1);
  const hs = [1e-1, 1e-2, 1e-3, 1e-4].map((h) => (T(c + h, 30) - T(c, 30)) / h);
  const fm = (v: number) => fmtNum(Number(v.toFixed(3)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The graph of Takagi's function" style={{ width: "100%", display: "block" }}>
        <polyline points={ys.map((p) => `${X(p.x).toFixed(1)},${Y(p.y).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <line x1={X(c)} y1={Y1} x2={X(c)} y2={Y0} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <text x={X(c) + 4} y={Y1 + 10} style={{ fontSize: 11, fill: "var(--text-muted)" }}>x = 1/3</text>
      </svg>
      <div className="viz-sliders">
        <label><span>zigzags added: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={20} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>zoom around 1/3: <span className="mono">×{2 ** z}</span></span>
          <input type="range" min={0} max={10} value={z} onChange={(e) => setZ(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>window shown</td><td className="mono">[{fm(a)}, {fm(b)}]</td></tr>
          <tr><td>difference quotients at 1/3 for h = 0.1, 0.01, 0.001, 0.0001</td><td className="mono">{hs.map(fm).join(", ")}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        T(x) = Σ s(2ᵏx)/2ᵏ, where s(x) is the distance from x to the nearest integer. Each term is continuous, and the sum converges uniformly, so T is continuous. But with all the zigzags in, zooming never reveals a straight piece, and the difference quotients refuse to settle: T has no derivative anywhere.
      </figcaption>
    </figure>
  );
}
