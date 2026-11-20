"use client";

import { useState } from "react";

/** Projective conics F(x, y, z) = 0, their points at infinity (z = 0) over ℝ and over ℂ. */
export const CONICS = [
  { label: "yz = x²", F: (x: number, y: number, z: number) => y * z - x * x, inf: "[0 : 1 : 0], once (tangent)", nInf: 1, nInfC: 1 },
  { label: "xy = z²", F: (x: number, y: number, z: number) => x * y - z * z, inf: "[1 : 0 : 0] and [0 : 1 : 0]", nInf: 2, nInfC: 2 },
  { label: "x² + y² = z²", F: (x: number, y: number, z: number) => x * x + y * y - z * z, inf: "none over ℝ; [1 : i : 0] and [1 : −i : 0] over ℂ", nInf: 0, nInfC: 2 },
];
export const CHARTS = ["z = 1", "y = 1", "x = 1"];

/** Points of the chart where F vanishes, found by sign changes on a grid. */
export function chartCells(ci: number, k: number, step = 0.05, R = 3) {
  const F = CONICS[ci].F;
  const g = (u: number, v: number) => (k === 0 ? F(u, v, 1) : k === 1 ? F(u, 1, v) : F(1, u, v));
  const out: [number, number][] = [];
  for (let u = -R; u < R; u += step) for (let v = -R; v < R; v += step) {
    const s = [g(u, v), g(u + step, v), g(u, v + step), g(u + step, v + step)];
    if (Math.min(...s) <= 0 && Math.max(...s) >= 0) out.push([u + step / 2, v + step / 2]);
  }
  return out;
}

/** One projective conic seen in three affine charts. */
export function ProjectiveChartViz() {
  const [ci, setCi] = useState(0);
  const [k, setK] = useState(0);
  const c = CONICS[ci];
  const cells = chartCells(ci, k);
  const S = 38, X0 = 270, Y0 = 120;
  const axes = [["x", "y"], ["x", "z"], ["y", "z"]][k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="conic">
        {CONICS.map((v, i) => <button key={v.label} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{v.label}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="chart" style={{ marginTop: 6 }}>
        {CHARTS.map((v, i) => <button key={v} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>chart {v}</button>)}
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="A projective conic in an affine chart" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={4} x2={X0} y2={236} style={{ stroke: "var(--border-strong)" }} />
        <text x={526} y={Y0 - 6} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{axes[0]}</text>
        <text x={X0 + 6} y={16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{axes[1]}</text>
        {k > 0 && <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "6 4" }} />}
        {k > 0 && <text x={14} y={Y0 + 14} style={{ fill: "var(--danger)", fontSize: 10 }}>z = 0: the line at infinity of the chart z = 1</text>}
        {cells.map(([u, v], i) => <rect key={i} x={X0 + u * S - 1.4} y={Y0 - v * S - 1.4} width={2.8} height={2.8} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {c.label} in the chart {CHARTS[k]}. Points at infinity (z = 0): {c.inf}. Real count {c.nInf}, complex count {c.nInfC}.
      </p>
      <figcaption className="viz-caption">
        The projective plane is covered by three affine charts. A parabola, a hyperbola and a circle are the same kind of
        curve, a smooth conic, differing only in how they meet the line at infinity: tangent at one point, crossing it at
        two real points, or at two complex points. In the charts y = 1 and x = 1 the line z = 0 is visible, drawn dashed.
      </figcaption>
    </figure>
  );
}
