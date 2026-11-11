"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Law = { name: string; F: (x: number) => number; W: (a: number, b: number) => number; a: number; max: number; unitX: string; unitF: string; v: View; xStep?: number; yStep?: number; note: string };
const LAWS: Law[] = [
  {
    name: "constant push", F: () => 20, W: (a, b) => 20 * (b - a), a: 0, max: 5, unitX: "m", unitF: "N",
    v: { xmin: -0.3, xmax: 5.3, ymin: -3, ymax: 30, w: 520, h: 220 }, yStep: 5,
    note: "A constant force: work is force times distance, the area of a rectangle.",
  },
  {
    name: "spring", F: (x) => 50 * x, W: (a, b) => 25 * (b * b - a * a), a: 0, max: 0.4, unitX: "m", unitF: "N",
    v: { xmin: -0.02, xmax: 0.42, ymin: -2, ymax: 22, w: 520, h: 220 }, xStep: 0.1, yStep: 5,
    note: "Hooke's law, F = kx with k = 50 N/m. The force grows as the spring stretches, so the area is a triangle: W = ½kb².",
  },
  {
    name: "gravity", F: (x) => 1 / (x * x), W: (a, b) => 1 / a - 1 / b, a: 1, max: 20, unitX: "Earth radii", unitF: "units of weight at the surface",
    v: { xmin: 0, xmax: 20.5, ymin: -0.1, ymax: 1.15, w: 520, h: 220 }, xStep: 2, yStep: 0.5,
    note: "Gravity falls off as 1/x². Lifting from the surface (x = 1) to x = b takes work 1 − 1/b, which never exceeds 1: a finite amount of work lifts a body free of the Earth for ever.",
  },
];

/** Work as the area under a graph of force against distance. */
export function WorkAreaViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(0.6);
  const L = LAWS[k];
  const b = L.a + (L.max - L.a) * s;
  const { X, Y } = scales(L.v);
  let d = `M${X(L.a)} ${Y(0)} `;
  for (let i = 0; i <= 120; i++) { const x = L.a + ((b - L.a) * i) / 120; d += `L${X(x).toFixed(1)} ${Y(L.F(x)).toFixed(1)} `; }
  d += `L${X(b)} ${Y(0)} Z`;
  const four = (n: number) => fmtNum(Number(n.toPrecision(4)));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Force law">
        {LAWS.map((l, i) => (
          <button key={l.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>{l.name}</button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>force F ({L.unitF}) against position x ({L.unitX})</p>
      <Axes v={L.v} xStep={L.xStep} yStep={L.yStep} label={`Force against position for the ${L.name}, with the work from ${four(L.a)} to ${four(b)} shaded`}>
        <path d={d} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={curvePath(L.v, (x) => (x >= L.a ? L.F(x) : NaN), 600)} className="plot-curve" />
        <line x1={X(b)} y1={Y(0)} x2={X(b)} y2={Y(L.F(b))} className="plot-line" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          end position b = <span className="mono">{four(b)}</span> {L.unitX}
          <input type="range" className="viz-range" min={0.02} max={1} step={0.01} value={s} onChange={(e) => setS(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>force at b</td><td className="mono">{four(L.F(b))}</td></tr>
          <tr><td>work from {fmtNum(L.a)} to b, the shaded area</td><td className="mono">{four(L.W(L.a, b))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">{L.note}</figcaption>
    </figure>
  );
}
