"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -6, xmax: 6, ymin: -5, ymax: 5, w: 440, h: 367 };
type Pair = { name: string; u: [number, number]; v: [number, number]; b: [number, number] };
const PAIRS: Pair[] = [
  { name: "u = (2, 1), v = (−1, 2)", u: [2, 1], v: [-1, 2], b: [3, 4] },
  { name: "u = (1, 1), v = (2, −1)", u: [1, 1], v: [2, -1], b: [-1, 2] },
  { name: "u = (2, 1), v = (−4, −2)", u: [2, 1], v: [-4, -2], b: [1, 3] },
];

/** Combine two vectors with chosen weights, and try to reach a target. */
export function CombinationViz() {
  const [k, setK] = useState(0);
  const [c, setC] = useState(1);
  const [d, setD] = useState(1);
  const P = PAIRS[k];
  const { X, Y } = scales(V);
  const cu: [number, number] = [c * P.u[0], c * P.u[1]];
  const w: [number, number] = [cu[0] + d * P.v[0], cu[1] + d * P.v[1]];
  const det = P.u[0] * P.v[1] - P.u[1] * P.v[0];
  const hit = Math.abs(w[0] - P.b[0]) < 1e-9 && Math.abs(w[1] - P.b[1]) < 1e-9;
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));
  const lattice: [number, number][] = [];
  for (let i = -6; i <= 6; i++) for (let j = -6; j <= 6; j++) lattice.push([i * P.u[0] + j * P.v[0], i * P.u[1] + j * P.v[1]]);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Pair of vectors">
        {PAIRS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k}
            onClick={() => { setK(i); setC(1); setD(1); }}>{p.name}</button>
        ))}
      </div>
      <Axes v={V} label={`${f(c)} u + ${f(d)} v = (${f(w[0])}, ${f(w[1])}); target (${P.b[0]}, ${P.b[1]})`}>
        {lattice.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={2} style={{ fill: "var(--text-faint)" }} />)}
        <circle cx={X(P.b[0])} cy={Y(P.b[1])} r={7} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(cu[0])} y2={Y(cu[1])} />
        <Arrow x1={X(cu[0])} y1={Y(cu[1])} x2={X(w[0])} y2={Y(w[1])} className="plot-arrow is-muted" />
        <circle cx={X(w[0])} cy={Y(w[1])} r={4} style={{ fill: "var(--accent)" }} />
        <text x={X(cu[0] / 2) + 6} y={Y(cu[1] / 2) - 6} className="viz-label is-on">cu</text>
        <text x={X(cu[0] + (d * P.v[0]) / 2) + 6} y={Y(cu[1] + (d * P.v[1]) / 2) - 6} className="viz-label">dv</text>
      </Axes>
      <div className="viz-sliders">
        <label><span>c = <span className="mono">{f(c)}</span></span>
          <input type="range" min={-3} max={3} step={0.25} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
        <label><span>d = <span className="mono">{f(d)}</span></span>
          <input type="range" min={-3} max={3} step={0.25} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>cu + dv</td><td className="mono">({f(w[0])}, {f(w[1])})</td></tr>
          <tr><td>target b (red ring)</td><td className="mono">({P.b[0]}, {P.b[1]})</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {det === 0
          ? "These two vectors point along the same line, so every combination stays on that line. The target is off it, and no choice of c and d reaches it."
          : hit
            ? `Reached. b = ${f(c)}u + ${f(d)}v. Since u and v point in different directions, every point of the plane is some combination, and only one choice of c and d gives each point.`
            : "Adjust c and d until the tip lands on the red ring. The grey dots are the combinations with whole-number weights."}
      </figcaption>
    </figure>
  );
}
