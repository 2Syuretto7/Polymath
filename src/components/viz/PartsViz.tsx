"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, scales, type View } from "./Plot";

type Case = {
  name: string; u: string; v: string; udv: string; vdu: string;
  U: (x: number) => number; V: (x: number) => number;
  A: (x: number) => number; B: (x: number) => number;
  a: number; max: number; view: View;
};

const CASES: Case[] = [
  {
    name: "∫ x eˣ dx", u: "x", v: "eˣ", udv: "x eˣ dx", vdu: "eˣ dx",
    U: (x) => x, V: Math.exp, A: (t) => Math.exp(t) - 1, B: (t) => t * Math.exp(t) - Math.exp(t) + 1,
    a: 0, max: 1.5, view: { xmin: -0.3, xmax: 2, ymin: -0.4, ymax: 4.8, w: 520, h: 260 },
  },
  {
    name: "∫ ln x dx", u: "ln x", v: "x", udv: "ln x dx", vdu: "x · (1/x) dx = dx",
    U: Math.log, V: (x) => x, A: (t) => t - 1, B: (t) => t * Math.log(t) - t + 1,
    a: 1, max: 5, view: { xmin: -0.3, xmax: 2, ymin: -0.4, ymax: 5.4, w: 520, h: 260 },
  },
  {
    name: "∫ x cos x dx", u: "x", v: "sin x", udv: "x cos x dx", vdu: "sin x dx",
    U: (x) => x, V: Math.sin, A: (t) => 1 - Math.cos(t), B: (t) => t * Math.sin(t) + Math.cos(t) - 1,
    a: 0, max: Math.PI / 2, view: { xmin: -0.3, xmax: 2, ymin: -0.2, ymax: 1.25, w: 520, h: 260 },
  },
];

/** The rectangle uv splits along the curve (u, v) into ∫v du (below the curve) and ∫u dv (to its left). */
export function PartsViz() {
  const [k, setK] = useState(0);
  const C = CASES[k];
  const [s, setS] = useState(0.7);
  const t = C.a + (C.max - C.a) * s;
  const { X, Y } = scales(C.view);
  const pts: [number, number][] = [];
  for (let i = 0; i <= 80; i++) { const x = C.a + ((t - C.a) * i) / 80; pts.push([C.U(x), C.V(x)]); }
  const along = pts.map(([u, v]) => `L${X(u).toFixed(1)} ${Y(v).toFixed(1)}`).join(" ");
  const [u1, v1] = pts[pts.length - 1], [u0, v0] = pts[0];
  const below = `M${X(u0)} ${Y(0)} ${along} L${X(u1)} ${Y(0)} Z`;
  const left = `M${X(0)} ${Y(v0)} ${along} L${X(0)} ${Y(v1)} Z`;
  const full: string[] = [];
  for (let i = 0; i <= 200; i++) { const x = C.a + ((C.max - C.a) * i) / 200; full.push(`${i ? "L" : "M"}${X(C.U(x)).toFixed(1)} ${Y(C.V(x)).toFixed(1)}`); }
  const four = (n: number) => fmtNum(Number(n.toFixed(4)));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Integral">
        {CASES.map((c, i) => (
          <button key={c.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{c.name}</span>
          </button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "10px 0 0", textTransform: "none" }}>
        The curve traced by the point (u, v) = ({C.u}, {C.v}) as x runs from {fmtNum(C.a)} to {four(t)}; u across, v up
      </p>
      <Axes v={C.view} label={`The curve (${C.u}, ${C.v}) with the regions for the two integrals`}>
        <path d={below} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={left} style={{ fill: "var(--accent)", fillOpacity: 0.4, strokeWidth: 0 }} />
        <path d={full.join(" ")} className="plot-ghost" />
        <path d={`M${X(u0)} ${Y(v0)} ${along}`} className="plot-curve" />
        <line x1={X(u1)} y1={Y(0)} x2={X(u1)} y2={Y(v1)} className="plot-line" />
        <line x1={X(0)} y1={Y(v1)} x2={X(u1)} y2={Y(v1)} className="plot-line" />
        <circle cx={X(u1)} cy={Y(v1)} r={5} className="plot-hot" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          x = <span className="mono">{four(t)}</span>
          <input type="range" className="viz-range" min={0.02} max={1} step={0.01} value={s} onChange={(e) => setS(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>∫ u dv = ∫ {C.udv}, to the left of the curve (dark)</td><td className="mono">{four(C.B(t))}</td></tr>
          <tr><td>∫ v du = ∫ {C.vdu}, below the curve (light)</td><td className="mono">{four(C.A(t))}</td></tr>
          <tr><td>the two together</td><td className="mono">{four(C.A(t) + C.B(t))}</td></tr>
          <tr><td>uv at the end minus uv at the start</td><td className="mono">{four(u1 * v1 - u0 * v0)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The two shaded regions fill the rectangle from the origin to the moving point, less the rectangle at the start
        (which here has zero area, since u or v starts at 0). So ∫u dv + ∫v du = [uv], and one integral can be traded for
        the other. Integration by parts is worth doing when the light region, ∫v du, is the easier one to find.
      </figcaption>
    </figure>
  );
}
