"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const f = (x: number) => 0.5 + 0.35 * Math.sin(5 * x) + 0.1 * x;
const W = 520, H = 210, X0 = 30, X1 = 500, Y0 = 190, Y1 = 14;

/** Why continuous functions are integrable: uniform continuity gives one δ, and on any partition finer than δ each piece contributes at most ε times its width to U − L. */
export function UCPartitionViz() {
  const [e, setE] = useState(0.3);
  // On [0, 1], |f′| ≤ 1.75 + 0.1 = 1.85, so δ = ε/1.85 works.
  const delta = e / 1.85;
  const n = Math.ceil(1 / delta);
  const X = (x: number) => X0 + x * (X1 - X0);
  const Y = (y: number) => Y0 - y * (Y0 - Y1);
  const cells = Array.from({ length: n }, (_, k) => {
    const a = k / n, b = (k + 1) / n;
    let m = Infinity, M = -Infinity;
    for (let i = 0; i <= 40; i++) { const v = f(a + ((b - a) * i) / 40); m = Math.min(m, v); M = Math.max(M, v); }
    return { a, b, m, M };
  });
  const gap = cells.reduce((t, c) => t + (c.M - c.m) * (c.b - c.a), 0);
  const fm = (v: number) => fmtNum(Number(v.toFixed(4)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A continuous function with the gaps between upper and lower rectangles shaded" style={{ width: "100%", display: "block" }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        {cells.map((c, i) => (
          <rect key={i} x={X(c.a)} y={Y(c.M)} width={Math.max(0.5, X(c.b) - X(c.a))} height={Math.max(0.5, Y(c.m) - Y(c.M))} style={{ fill: "var(--danger-soft)", stroke: "var(--danger)", strokeWidth: 0.6 }} />
        ))}
        <polyline points={Array.from({ length: 201 }, (_, i) => i / 200).map((x) => `${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.8 }} />
      </svg>
      <div className="viz-sliders">
        <label><span>ε: <span className="mono">{fm(e)}</span></span>
          <input type="range" min={0.02} max={0.5} step={0.02} value={e} onChange={(ev) => setE(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>δ from uniform continuity (here ε divided by a bound on the slope)</td><td className="mono">{fm(delta)}</td></tr>
          <tr><td>equal pieces needed, each narrower than δ</td><td className="mono">{n}</td></tr>
          <tr><td>U − L, the total shaded area</td><td className="mono">{fm(gap)}</td></tr>
          <tr><td>guaranteed bound ε(b − a)</td><td className="mono">{fm(e)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        On each piece narrower than δ, the function varies by less than ε, so the shaded box has height less than ε. Adding the widths gives U − L &lt; ε(b − a). Since ε was arbitrary, the upper and lower integrals agree.
      </figcaption>
    </figure>
  );
}
