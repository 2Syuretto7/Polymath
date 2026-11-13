"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type C = { name: string; f: (x: number) => number; a: number; b: number; inA: boolean; inB: boolean; ymax: number; sup: string; attained: boolean; xs: (n: number) => number; note: string };
const CASES: C[] = [
  {
    name: "x on (0, 1)", f: (x) => x, a: 0, b: 1, inA: false, inB: false, ymax: 1.2, sup: "1", attained: false,
    xs: (n) => 1 - 1 / (n + 1),
    note: "The points xₙ climb towards 1, and f(xₙ) towards the supremum 1. But the limit point 1 is not in the domain, so the supremum is never attained.",
  },
  {
    name: "1/x on (0, 1]", f: (x) => 1 / x, a: 0, b: 1, inA: false, inB: true, ymax: 12, sup: "∞", attained: false,
    xs: (n) => 1 / (n + 1),
    note: "The function is unbounded: f(xₙ) = n + 1 grows without limit as xₙ approaches 0, which is missing from the domain.",
  },
  {
    name: "x(2 − x)(0.6 + 0.4 sin² 3x) on [0, 2]", f: (x) => x * (2 - x) * (0.6 + 0.4 * Math.sin(3 * x) ** 2), a: 0, b: 2, inA: true, inB: true, ymax: 1.2, sup: "", attained: true,
    xs: (n) => 0, // filled below
    note: "On the closed bounded interval, a subsequence of the xₙ converges to a point c of the domain, and by continuity f(c) equals the supremum: the maximum is attained.",
  },
];
const W = 520, H = 220, X0 = 30, X1 = 500, Y0 = 200, Y1 = 14;

/** The extreme value theorem by chasing the supremum: pick points whose values approach sup f, and see whether their limit lies in the domain. */
export function SupChaseViz() {
  const [k, setK] = useState(2);
  const [n, setN] = useState(4);
  const c = CASES[k];
  const X = (x: number) => X0 + ((x - c.a) / (c.b - c.a)) * (X1 - X0);
  const Y = (y: number) => Y0 - (Math.min(y, c.ymax) / c.ymax) * (Y0 - Y1);
  const grid = Array.from({ length: 401 }, (_, i) => c.a + ((c.b - c.a) * i) / 400).filter((x) => x > 0 || c.inA);
  let best = grid[0], fb = c.f(grid[0]);
  for (const x of grid) if (c.f(x) > fb) { fb = c.f(x); best = x; }
  const xs = Array.from({ length: n }, (_, i) => (k === 2 ? best + (i % 2 ? 1 : -1) * 0.5 / (i + 2) : c.xs(i + 1)));
  const path = grid.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(c.f(x)).toFixed(1)}`).join(" ");
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));
  const sup = k === 2 ? fm(fb) : c.sup;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {CASES.map((d, i) => (
          <button key={d.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>f(x) = {d.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Graph with points approaching the supremum" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        {k !== 1 && <line x1={X0} y1={Y(k === 2 ? fb : 1)} x2={X1} y2={Y(k === 2 ? fb : 1)} style={{ stroke: "var(--accent)", strokeDasharray: "4 4" }} />}
        <path d={path} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        {[[c.a, c.inA], [c.b, c.inB]].map(([v, inc], i) => (
          <circle key={i} cx={X(v as number)} cy={Y0} r={5} style={{ fill: inc ? "var(--text)" : "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
        ))}
        {xs.map((x, i) => (
          <g key={i}>
            <line x1={X(x)} y1={Y0} x2={X(x)} y2={Y(c.f(x))} style={{ stroke: "var(--danger)", strokeDasharray: "2 3", opacity: 0.7 }} />
            <circle cx={X(x)} cy={Y(c.f(x))} r={4} style={{ fill: "var(--danger)" }} />
          </g>
        ))}
        {k === 2 && <circle cx={X(best)} cy={Y(fb)} r={6} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />}
      </svg>
      <div className="viz-sliders">
        <label><span>points chosen: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>supremum of f</td><td className="mono">{sup}</td></tr>
          <tr><td>f at the latest point</td><td className="mono">{fm(c.f(xs[n - 1]))}</td></tr>
          <tr><td>maximum attained?</td><td>{c.attained ? `yes, at x ≈ ${fm(best)}` : "no"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">{c.note}</figcaption>
    </figure>
  );
}
