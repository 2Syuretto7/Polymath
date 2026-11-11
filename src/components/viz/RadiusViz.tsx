"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type PS = { name: string; coef: (n: number) => number; f: ((x: number) => number) | null; fName: string; R: number; ends: string; v: View };
const fact = (n: number) => { let p = 1; for (let i = 2; i <= n; i++) p *= i; return p; };
const SERIES: PS[] = [
  { name: "Σ xⁿ", coef: () => 1, f: (x) => 1 / (1 - x), fName: "1/(1 − x)", R: 1, ends: "diverges at both ends", v: { xmin: -2, xmax: 2, ymin: -2, ymax: 6, w: 520, h: 240 } },
  { name: "Σ xⁿ/n", coef: (n) => (n === 0 ? 0 : 1 / n), f: (x) => -Math.log(1 - x), fName: "−ln(1 − x)", R: 1, ends: "converges at −1, diverges at 1", v: { xmin: -2, xmax: 2, ymin: -2, ymax: 4, w: 520, h: 240 } },
  { name: "Σ xⁿ/n!", coef: (n) => 1 / fact(n), f: Math.exp, fName: "eˣ", R: Infinity, ends: "converges for every x", v: { xmin: -2, xmax: 2, ymin: -1, ymax: 8, w: 520, h: 240 } },
  { name: "Σ n! xⁿ", coef: (n) => fact(n), f: null, fName: "no function", R: 0, ends: "converges only at 0", v: { xmin: -2, xmax: 2, ymin: -2, ymax: 6, w: 520, h: 240 } },
];

/** Partial sums of power series: inside the radius of convergence they settle on a function; outside they blow up. */
export function RadiusViz() {
  const [k, setK] = useState(0);
  const [N, setN] = useState(6);
  const [x, setX] = useState(0.5);
  const S = SERIES[k];
  const P = (t: number, M: number) => { let s = 0, p = 1; for (let n = 0; n <= M; n++) { s += S.coef(n) * p; p *= t; } return s; };
  const { X } = scales(S.v);
  const lo = Math.max(S.v.xmin, -S.R), hi = Math.min(S.v.xmax, S.R);
  const four = (n: number) => (Number.isFinite(n) && Math.abs(n) < 1e9 ? fmtNum(Number(n.toPrecision(5))) : "huge");

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Power series">
        {SERIES.map((s, i) => (
          <button key={s.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{s.name}</span>
          </button>
        ))}
      </div>
      <Axes v={S.v} label={`Partial sums of ${S.name} up to degree ${N}, with the interval of convergence shaded`}>
        {hi > lo && <rect x={X(lo)} y={0} width={X(hi) - X(lo)} height={S.v.h} className="viz-region" style={{ strokeWidth: 0, opacity: 0.6 }} />}
        {S.f && <path d={curvePath(S.v, (t) => (Math.abs(t) < Math.min(S.R, 5) || S.R === Infinity ? S.f!(t) : NaN), 800)} className="plot-ghost" style={{ strokeDasharray: "none", strokeWidth: 2 }} />}
        <path d={curvePath(S.v, (t) => P(t, N), 800)} className="plot-curve" />
        <line x1={X(x)} y1={0} x2={X(x)} y2={S.v.h} className="plot-line" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          degree N = <span className="mono">{N}</span>
          <input type="range" className="viz-range" min={1} max={30} step={1} value={N} onChange={(e) => setN(Number(e.target.value))} />
        </label>
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          x = <span className="mono">{fmtNum(x)}</span>
          <input type="range" className="viz-range" min={-1.8} max={1.8} step={0.1} value={x} onChange={(e) => setX(Number(Number(e.target.value).toFixed(1)))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          {[5, 10, 20, 40].map((M) => <tr key={M}><td>partial sum to degree {M} at x</td><td className="mono">{four(P(x, M))}</td></tr>)}
          <tr><td>{S.f ? `${S.fName} at x` : "the sum"}</td><td className="mono">{S.f && (Math.abs(x) < S.R || (k === 1 && x === -1)) ? four(S.f(x)) : "none"}</td></tr>
          <tr><td>radius of convergence</td><td className="mono">{S.R === Infinity ? "∞" : fmtNum(S.R)}; {S.ends}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Inside the shaded interval, the partial sums (coloured) settle down on the grey curve as N grows; outside it, they
        swing ever more wildly. A power series converges on an interval centred at 0, and its radius R can be anything
        from 0 to ∞.
      </figcaption>
    </figure>
  );
}
