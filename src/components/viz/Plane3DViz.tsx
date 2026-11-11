"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type P3 = [number, number, number];
const N: P3 = [1, 1, 2];
const LP: P3 = [-1, 3, 3];
const LD: P3 = [1, -1, -1];
const dot = (a: P3, b: P3) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];

/** A plane n · x = d, its normal, and a line x = p + t v that crosses it, drawn in perspective-free 3D. */
export function Plane3DViz() {
  const [d, setD] = useState(2);
  const [turn, setTurn] = useState(35);
  const [t, setT] = useState(0);
  const a = (turn * Math.PI) / 180, tilt = 0.5;
  const proj = (p: P3): [number, number] => {
    const x = p[0] * Math.cos(a) - p[1] * Math.sin(a);
    const y = p[0] * Math.sin(a) + p[1] * Math.cos(a);
    return [260 + 38 * x, 190 - 38 * (p[2] * 0.95 + y * tilt)];
  };
  const pt = (p: P3) => proj(p).join(",");
  // the plane x + y + 2z = d, drawn over the square |x|, |y| ≤ 2.5
  const z = (x: number, y: number) => (d - x - y) / 2;
  const corners: P3[] = [[-2.5, -2.5, 0], [2.5, -2.5, 0], [2.5, 2.5, 0], [-2.5, 2.5, 0]].map(([x, y]) => [x, y, z(x, y)] as P3);
  const foot: P3 = [(d / dot(N, N)) * N[0], (d / dot(N, N)) * N[1], (d / dot(N, N)) * N[2]];
  const tHit = (d - dot(N, LP)) / dot(N, LD);
  const hit: P3 = [LP[0] + tHit * LD[0], LP[1] + tHit * LD[1], LP[2] + tHit * LD[2]];
  const cur: P3 = [LP[0] + t * LD[0], LP[1] + t * LD[1], LP[2] + t * LD[2]];
  const side = dot(N, cur) - d;
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const nTip: P3 = [foot[0] + N[0] * 0.8, foot[1] + N[1] * 0.8, foot[2] + N[2] * 0.8];
  const axes: [P3, string][] = [[[3, 0, 0], "x"], [[0, 3, 0], "y"], [[0, 0, 3], "z"]];

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 320" style={{ width: "100%", display: "block" }} role="img"
        aria-label={`The plane x + y + 2z = ${d}, its normal vector, and a line crossing it at t = ${f(tHit)}`}>
        {axes.map(([p, l]) => (
          <g key={l}>
            <line x1={proj([0, 0, 0])[0]} y1={proj([0, 0, 0])[1]} x2={proj(p)[0]} y2={proj(p)[1]} className="viz-axis" />
            <text x={proj(p)[0] + 4} y={proj(p)[1] - 4} className="viz-label">{l}</text>
          </g>
        ))}
        <polygon points={corners.map(pt).join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 1, opacity: 0.85 }} />
        <line x1={proj(foot)[0]} y1={proj(foot)[1]} x2={proj(nTip)[0]} y2={proj(nTip)[1]} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={proj(nTip)[0]} cy={proj(nTip)[1]} r={3.5} style={{ fill: "var(--accent)" }} />
        <text x={proj(nTip)[0] + 6} y={proj(nTip)[1]} className="viz-label is-on">n</text>
        <line x1={proj([LP[0] - 1.5 * LD[0], LP[1] - 1.5 * LD[1], LP[2] - 1.5 * LD[2]])[0]} y1={proj([LP[0] - 1.5 * LD[0], LP[1] - 1.5 * LD[1], LP[2] - 1.5 * LD[2]])[1]}
          x2={proj([LP[0] + 6.5 * LD[0], LP[1] + 6.5 * LD[1], LP[2] + 6.5 * LD[2]])[0]} y2={proj([LP[0] + 6.5 * LD[0], LP[1] + 6.5 * LD[1], LP[2] + 6.5 * LD[2]])[1]}
          style={{ stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <circle cx={proj(hit)[0]} cy={proj(hit)[1]} r={5} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <circle cx={proj(cur)[0]} cy={proj(cur)[1]} r={4.5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>d in x + y + 2z = d: <span className="mono">{d}</span></span>
          <input type="range" min={-4} max={6} step={1} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
        <label><span>point on the line, t = <span className="mono">{f(t)}</span></span>
          <input type="range" min={-1.5} max={6.5} step={0.25} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
        <label><span>turn the view: <span className="mono">{turn}°</span></span>
          <input type="range" min={-80} max={80} step={1} value={turn} onChange={(e) => setTurn(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>line: (−1, 3, 3) + t(1, −1, −1) at this t</td><td className="mono">({f(cur[0])}, {f(cur[1])}, {f(cur[2])})</td></tr>
          <tr><td>n · x − d at that point</td><td className="mono">{f(side)}</td></tr>
          <tr><td>the line meets the plane at t =</td><td className="mono">{f(tHit)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {Math.abs(side) < 1e-9
          ? "On the plane: n · x = d exactly. The black dot sits in the red ring."
          : `n · x − d is ${side > 0 ? "positive" : "negative"}: the point is on the side of the plane that n points ${side > 0 ? "towards" : "away from"}. Slide t until it reaches 0.`}
      </figcaption>
    </figure>
  );
}
