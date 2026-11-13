"use client";

import { useState } from "react";
import { fmtNum } from "./format";

type P3 = [number, number, number];
type Curve = { name: string; formula: string; r: (t: number) => P3; d: (t: number) => P3; t0: number; t1: number };

const CURVES: Curve[] = [
  { name: "circle", formula: "(2 cos t, 2 sin t, 0)", r: (t) => [2 * Math.cos(t), 2 * Math.sin(t), 0], d: (t) => [-2 * Math.sin(t), 2 * Math.cos(t), 0], t0: 0, t1: 2 * Math.PI },
  { name: "helix", formula: "(2 cos t, 2 sin t, t/3)", r: (t) => [2 * Math.cos(t), 2 * Math.sin(t), t / 3], d: (t) => [-2 * Math.sin(t), 2 * Math.cos(t), 1 / 3], t0: 0, t1: 4 * Math.PI },
  { name: "twisted cubic", formula: "(t, t², t³)", r: (t) => [t, t * t, t * t * t], d: (t) => [1, 2 * t, 3 * t * t], t0: -1.4, t1: 1.4 },
  { name: "circle, twice as fast", formula: "(2 cos 2t, 2 sin 2t, 0)", r: (t) => [2 * Math.cos(2 * t), 2 * Math.sin(2 * t), 0], d: (t) => [-4 * Math.sin(2 * t), 4 * Math.cos(2 * t), 0], t0: 0, t1: Math.PI },
];

/** A curve as a moving point: its position r(t), its velocity r′(t), and its speed. */
export function CurveViz() {
  const [k, setK] = useState(1);
  const [s, setS] = useState(0.3);
  const c = CURVES[k];
  const t = c.t0 + s * (c.t1 - c.t0);
  const p = c.r(t), v = c.d(t);
  const proj = (q: P3): [number, number] => {
    const a = 0.6;
    const x = q[0] * Math.cos(a) - q[1] * Math.sin(a);
    const y = q[0] * Math.sin(a) + q[1] * Math.cos(a);
    return [250 + 50 * x, 200 - 50 * (q[2] * 0.9 + y * 0.4)];
  };
  const path = Array.from({ length: 201 }, (_, i) => proj(c.r(c.t0 + (i / 200) * (c.t1 - c.t0))).join(",")).join(" ");
  const done = Array.from({ length: 101 }, (_, i) => proj(c.r(c.t0 + (i / 100) * (t - c.t0))).join(",")).join(" ");
  const scale = 0.5;
  const tip: P3 = [p[0] + scale * v[0], p[1] + scale * v[1], p[2] + scale * v[2]];
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const speed = Math.hypot(...v);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Curve" style={{ flexWrap: "wrap" }}>
        {CURVES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 500 330" role="img" aria-label={`The ${c.name}, with the point at t = ${f(t)} and its velocity.`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {([[[3, 0, 0], "x"], [[0, 3, 0], "y"], [[0, 0, 3], "z"]] as [P3, string][]).map(([q, l]) => (
          <g key={l}>
            <line x1={proj([0, 0, 0])[0]} y1={proj([0, 0, 0])[1]} x2={proj(q)[0]} y2={proj(q)[1]} className="viz-axis" />
            <text x={proj(q)[0] + 4} y={proj(q)[1] - 4} className="viz-label">{l}</text>
          </g>
        ))}
        <polyline points={path} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        <polyline points={done} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={proj(p)[0]} y1={proj(p)[1]} x2={proj(tip)[0]} y2={proj(tip)[1]} style={{ stroke: "var(--danger)", strokeWidth: 2.5 }} />
        <circle cx={proj(tip)[0]} cy={proj(tip)[1]} r={3.5} style={{ fill: "var(--danger)" }} />
        <circle cx={proj(p)[0]} cy={proj(p)[1]} r={5} style={{ fill: "var(--text)" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>time t = <span className="mono">{f(t)}</span></span>
          <input type="range" min={0} max={1} step={0.005} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>r(t) = {c.formula}</td><td className="mono">({f(p[0])}, {f(p[1])}, {f(p[2])})</td></tr>
          <tr><td>velocity r′(t), drawn in red at half scale</td><td className="mono">({f(v[0])}, {f(v[1])}, {f(v[2])})</td></tr>
          <tr><td>speed |r′(t)|</td><td className="mono">{f(speed)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The velocity is always tangent to the curve. The two circles trace the same set of points, but the second goes
        round twice as fast: a curve is a set, a parametrisation is a way of moving along it.
      </figcaption>
    </figure>
  );
}
