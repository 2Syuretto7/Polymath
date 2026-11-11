"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, paramPath, scales, type View } from "./Plot";

const FNS: { name: string; inv: string; f: (x: number) => number; df: (x: number) => number; lo: number; hi: number; a0: number }[] = [
  { name: "x³ + x", inv: "no simple formula", f: (x) => x ** 3 + x, df: (x) => 3 * x * x + 1, lo: -1.2, hi: 1.2, a0: 1 },
  { name: "sin x", inv: "arcsin x", f: Math.sin, df: Math.cos, lo: -Math.PI / 2, hi: Math.PI / 2, a0: 0.6 },
  { name: "x³", inv: "∛x", f: (x) => x ** 3, df: (x) => 3 * x * x, lo: -1.4, hi: 1.4, a0: 0.8 },
];

const v: View = { xmin: -3, xmax: 3, ymin: -3, ymax: 3, w: 360, h: 360 };
const n3 = (x: number) => fmtNum(Number(x.toFixed(3)));

/** A function and its inverse, mirror images in y = x, with tangents at matching points. */
export function InverseSlopeViz() {
  const [k, setK] = useState(0);
  const F = FNS[k];
  const [a, setA] = useState(F.a0);
  const { X, Y } = scales(v);
  const b = F.f(a), m = F.df(a);
  const L = 1.6, g = Math.hypot(1, m);
  const ux = 1 / g, uy = m / g;
  const flat = Math.abs(m) < 1e-3;
  const pick = (i: number) => { setK(i); setA(FNS[i].a0); };

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Function">
        {FNS.map((h, i) => (
          <button key={h.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>
            <span className="mono">f(x) = {h.name}</span>
          </button>
        ))}
      </div>
      <div style={{ maxWidth: 400, margin: "0 auto" }}>
        <Axes v={v} label={`The graph of ${F.name} and of its inverse, reflected in the line y = x`}>
          <line x1={X(-3)} y1={Y(-3)} x2={X(3)} y2={Y(3)} className="plot-ghost" />
          <path d={paramPath(v, (t) => [t, F.f(t)], F.lo, F.hi, 400)} className="plot-curve" />
          <path d={paramPath(v, (t) => [F.f(t), t], F.lo, F.hi, 400)} className="plot-curve-2" />
          <line x1={X(a)} y1={Y(b)} x2={X(b)} y2={Y(a)} className="plot-mirror" />
          <line x1={X(a - L * ux)} y1={Y(b - L * uy)} x2={X(a + L * ux)} y2={Y(b + L * uy)} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
          <line x1={X(b - L * uy)} y1={Y(a - L * ux)} x2={X(b + L * uy)} y2={Y(a + L * ux)} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
          <circle cx={X(a)} cy={Y(b)} r={5} className="plot-point" />
          <circle cx={X(b)} cy={Y(a)} r={5} className="plot-hot" />
        </Axes>
      </div>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          a = <span className="mono">{n3(a)}</span>
          <input type="range" className="viz-range" min={F.lo} max={F.hi} step={0.01} value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>slope of f at (a, f(a)) = ({n3(a)}, {n3(b)})</td><td className="mono">f′(a) = {n3(m)}</td></tr>
          <tr><td>slope of the inverse ({F.inv}) at ({n3(b)}, {n3(a)})</td><td className="mono">{flat ? "undefined (vertical tangent)" : `1 / f′(a) = ${n3(1 / m)}`}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The solid curve is f and the dashed curve its inverse. Reflecting in y = x swaps rise and run, so the mirrored
        tangent has the reciprocal slope. Where f has a horizontal tangent, the inverse has a vertical one and no derivative.
      </figcaption>
    </figure>
  );
}
