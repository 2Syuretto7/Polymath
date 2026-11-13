"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type Fn = { name: string; f: (x: number, y: number) => number; crit: { p: [number, number]; v: number }[] };

const FNS: Fn[] = [
  { name: "x² − y²", f: (x, y) => x * x - y * y, crit: [{ p: [0, 0], v: 0 }] },
  {
    name: "y² − x³ − x²",
    f: (x, y) => y * y - x * x * x - x * x,
    crit: [{ p: [0, 0], v: 0 }, { p: [-2 / 3, 0], v: -4 / 27 }],
  },
];

const W = 500, H = 300, S = 100, CX = 250, CY = 150;
const X = (x: number) => CX + S * x, Y = (y: number) => CY - S * y;
const NX = 125, NY = 75, X0 = -2.5, Y0 = -1.5, D = 0.04;

/** Marching squares: the segments of the level set f = c on a grid. */
function contour(f: (x: number, y: number) => number, c: number): string {
  const v: number[][] = [];
  for (let i = 0; i <= NX; i++) { v.push([]); for (let j = 0; j <= NY; j++) v[i].push(f(X0 + i * D, Y0 + j * D) - c); }
  let d = "";
  const cut = (x1: number, y1: number, a: number, x2: number, y2: number, b: number): [number, number] => {
    const t = a / (a - b);
    return [x1 + t * (x2 - x1), y1 + t * (y2 - y1)];
  };
  for (let i = 0; i < NX; i++) for (let j = 0; j < NY; j++) {
    const x = X0 + i * D, y = Y0 + j * D;
    const a = v[i][j], b = v[i + 1][j], cc = v[i + 1][j + 1], dd = v[i][j + 1];
    const pts: [number, number][] = [];
    if ((a < 0) !== (b < 0)) pts.push(cut(x, y, a, x + D, y, b));
    if ((b < 0) !== (cc < 0)) pts.push(cut(x + D, y, b, x + D, y + D, cc));
    if ((cc < 0) !== (dd < 0)) pts.push(cut(x + D, y + D, cc, x, y + D, dd));
    if ((dd < 0) !== (a < 0)) pts.push(cut(x, y + D, dd, x, y, a));
    for (let k = 0; k + 1 < pts.length; k += 2) d += `M${X(pts[k][0]).toFixed(1)},${Y(pts[k][1]).toFixed(1)}L${X(pts[k + 1][0]).toFixed(1)},${Y(pts[k + 1][1]).toFixed(1)}`;
  }
  return d;
}

/** Level sets f(x, y) = c. Where the gradient never vanishes on the level set, it is a smooth curve: a 1-manifold. */
export function LevelSetViz() {
  const [k, setK] = useState(0);
  const [raw, setRaw] = useState(0.3);
  const F = FNS[k];
  const near = F.crit.find((q) => Math.abs(q.v - raw) < 0.006);
  const c = near ? near.v : raw;
  const bad = F.crit.filter((q) => Math.abs(q.v - c) < 1e-9);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FNS.map((g, i) => (
          <button key={g.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>
            f = {g.name}
          </button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={bad.length ? "The level set has a singular point." : "The level set is a smooth curve."} style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={0} y1={CY} x2={W} y2={CY} className="viz-axis" />
        <line x1={CX} y1={0} x2={CX} y2={H} className="viz-axis" />
        <path d={contour(F.f, c)} style={{ fill: "none", stroke: bad.length ? "var(--danger)" : "var(--accent)", strokeWidth: 2.5, strokeLinecap: "round" }} />
        {F.crit.map((q) => (
          <circle key={q.p.join()} cx={X(q.p[0])} cy={Y(q.p[1])} r={bad.includes(q) ? 6 : 3.5}
            style={{ fill: bad.includes(q) ? "var(--danger)" : "var(--text-faint)" }} />
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>level c: <span className="mono">{fmtNum(Number(c.toFixed(3)))}</span></span>
          <input type="range" min={-0.6} max={0.6} step={0.01} value={raw} onChange={(e) => setRaw(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>points where ∇f = 0 (grey dots)</td><td className="mono">{F.crit.map((q) => `(${fmtNum(Number(q.p[0].toFixed(3)))}, ${fmtNum(q.p[1])}) at level ${fmtNum(Number(q.v.toFixed(3)))}`).join("; ")}</td></tr>
          <tr><td>does ∇f vanish on this level set?</td><td>{bad.length ? "yes, at the red dot" : "no"}</td></tr>
          <tr><td>so the level set is</td><td>{bad.length ? "not guaranteed to be a manifold, and here it is not" : "a smooth curve: a 1-manifold"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {bad.length
          ? k === 0
            ? "At c = 0 the two branches cross at the origin. No small window around the crossing shows a single smooth curve."
            : c === 0
              ? "At c = 0 the curve crosses itself at the origin, forming a node. Near the node it is not a manifold."
              : "At c = −4/27 the level set has a curve and, separately, one isolated point at (−2/3, 0). The point is a solution, but no piece of a line."
          : "Every point of this level set has ∇f ≠ 0, so by the implicit function theorem the set is, near each point, the graph of a smooth function. Slide c through a critical value to see this fail."}
      </figcaption>
    </figure>
  );
}
