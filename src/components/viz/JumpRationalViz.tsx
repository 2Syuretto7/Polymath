"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, H = 230, X0 = 40, X1 = 500, Y0 = 210, Y1 = 14;
// Jump points: rationals in (0, 1) listed by denominator; jump at the k-th of size 2^−k.
const QS: [number, number][] = [];
for (let d = 2; QS.length < 40; d++) for (let p = 1; p < d; p++) { const g = (a: number, b: number): number => (b ? g(b, a % b) : a); if (g(p, d) === 1 && QS.length < 40) QS.push([p, d]); }

/** A monotone function with a jump at each of the first n rationals. Its jumps are disjoint intervals on the y-axis, each containing a rational, so there can be only countably many. */
export function JumpRationalViz() {
  const [n, setN] = useState(6);
  const jumps = QS.slice(0, n).map(([p, d], k) => ({ x: p / d, size: Math.pow(2, -(k + 1)), label: `${p}/${d}` }));
  const total = jumps.reduce((t, j) => t + j.size, 0);
  const f = (x: number, right: boolean) => x + jumps.reduce((t, j) => t + (x > j.x || (right && x === j.x) ? j.size : 0), 0);
  const top = 1 + total;
  const X = (x: number) => X0 + x * (X1 - X0);
  const Y = (y: number) => Y0 - (y / top) * (Y0 - Y1);
  const sorted = [...jumps].sort((a, b) => a.x - b.x);
  const pieces: [number, number][] = [];
  let prev = 0;
  for (const j of sorted) { pieces.push([prev, j.x]); prev = j.x; }
  pieces.push([prev, 1]);

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A monotone function with jumps" style={{ width: "100%", display: "block" }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        <line x1={X0} y1={Y0} x2={X0} y2={Y1} className="viz-axis" />
        {pieces.map(([a, b], i) => (
          <line key={i} x1={X(a)} y1={Y(f(a, true))} x2={X(b)} y2={Y(f(b, false))} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        ))}
        {jumps.map((j) => (
          <g key={j.label}>
            <line x1={X0} y1={Y(f(j.x, false))} x2={X0} y2={Y(f(j.x, true))} style={{ stroke: "var(--accent)", strokeWidth: 6, opacity: 0.8 }} />
            <line x1={X0} y1={Y(f(j.x, false))} x2={X(j.x)} y2={Y(f(j.x, false))} style={{ stroke: "var(--accent)", strokeDasharray: "2 3", opacity: 0.5 }} />
            <circle cx={X(j.x)} cy={Y(f(j.x, false))} r={3} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 1.5 }} />
            <circle cx={X(j.x)} cy={Y(f(j.x, true))} r={3} style={{ fill: "var(--text)" }} />
          </g>
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>jumps: <span className="mono">{n}</span>, at {jumps.slice(0, 6).map((j) => j.label).join(", ")}{n > 6 ? ", …" : ""}</span>
          <input type="range" min={1} max={40} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>jump sizes</td><td className="mono">1/2, 1/4, 1/8, …</td></tr>
          <tr><td>total of the jumps</td><td className="mono">{fmtNum(Number(total.toFixed(6)))}</td></tr>
          <tr><td>f(1) − f(0)</td><td className="mono">{fmtNum(Number((f(1, true) - f(0, false)).toFixed(6)))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Here f(x) = x plus the sizes of all jumps at points up to x. Each jump opens a gap on the vertical axis, drawn as a thick bar; the gaps do not overlap, because f is increasing. Pick a rational in each gap and you have matched the jumps one to one with rationals.
      </figcaption>
    </figure>
  );
}
