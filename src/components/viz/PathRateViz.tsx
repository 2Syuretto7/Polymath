"use client";

import { useState } from "react";
import { fmtNum } from "./format";

// temperature on a plate, and a walker's path through it
const T = (x: number, y: number) => 30 - x * x - 2 * y * y + x * y;
const grad = (x: number, y: number): [number, number] => [-2 * x + y, -4 * y + x];
const r = (t: number): [number, number] => [-2 + t, 1.5 * Math.sin(t)];
const rp = (t: number): [number, number] => [1, 1.5 * Math.cos(t)];
const S = 60, CX = 250, CY = 150;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;

/** A walker crosses a heated plate. The rate at which their temperature changes is the gradient dotted with their velocity. */
export function PathRateViz() {
  const [t, setT] = useState(1);
  const [x, y] = r(t), v = rp(t), g = grad(x, y);
  const chain = g[0] * v[0] + g[1] * v[1];
  const h = 1e-4;
  const numeric = (T(...r(t + h)) - T(...r(t - h))) / (2 * h);
  const fm = (z: number) => fmtNum(Number(z.toFixed(2)));
  const path = Array.from({ length: 121 }, (_, i) => { const s = (4 * i) / 120; const p = r(s); return `${X(p[0])},${Y(p[1])}`; }).join(" ");
  const tMin = 30 - 16 - 2 * 6.25 - 10, tMax = 30;

  return (
    <figure className="viz">
      <svg viewBox="0 0 500 300" role="img" aria-label={`At t = ${fm(t)}, the temperature changes at ${fm(chain)} degrees per second.`} style={{ width: "100%", display: "block" }}>
        {Array.from({ length: 16 }, (_, i) => Array.from({ length: 10 }, (_, j) => {
          const x0 = -4 + i * 0.5, y0 = -2.5 + j * 0.5;
          const val = (T(x0 + 0.25, y0 + 0.25) - tMin) / (tMax - tMin);
          return <rect key={`${i}-${j}`} x={X(x0)} y={Y(y0 + 0.5)} width={S * 0.5} height={S * 0.5} style={{ fill: "var(--danger)", opacity: Math.max(0, Math.min(1, val)) ** 2 * 0.4 }} />;
        }))}
        <polyline points={path} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "5 4" }} />
        <line x1={X(x)} y1={Y(y)} x2={X(x + 0.6 * v[0])} y2={Y(y + 0.6 * v[1])} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <text x={X(x + 0.6 * v[0]) + 5} y={Y(y + 0.6 * v[1])} className="viz-label">r′(t)</text>
        <line x1={X(x)} y1={Y(y)} x2={X(x + 0.15 * g[0])} y2={Y(y + 0.15 * g[1])} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        <text x={X(x + 0.15 * g[0]) + 5} y={Y(y + 0.15 * g[1]) - 4} className="viz-label is-on">∇T</text>
        <circle cx={X(x)} cy={Y(y)} r={6} style={{ fill: "var(--accent)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>time t = <span className="mono">{fm(t)}</span> seconds</span>
          <input type="range" min={0} max={4} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>position r(t) = (t − 2, 1.5 sin t)</td><td className="mono">({fm(x)}, {fm(y)})</td></tr>
          <tr><td>temperature T(r(t)), where T = 30 − x² − 2y² + xy</td><td className="mono">{fm(T(x, y))}°</td></tr>
          <tr><td>∇T · r′(t), by the chain rule</td><td className="mono">{fm(chain)}° per second</td></tr>
          <tr><td>the same rate, measured directly</td><td className="mono">{fm(numeric)}° per second</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Darker shading is hotter. The walker&rsquo;s temperature rises fastest when they walk along the gradient, and does
        not change at all when their velocity is perpendicular to it.
      </figcaption>
    </figure>
  );
}
