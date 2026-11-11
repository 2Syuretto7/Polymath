"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, type View } from "./Plot";

type Case = { name: string; f: (x: number) => number; coef: (n: number) => number; v: View; note: string };
const fact = (n: number) => { let p = 1; for (let i = 2; i <= n; i++) p *= i; return p; };
const CASES: Case[] = [
  { name: "eˣ", f: Math.exp, coef: (n) => 1 / fact(n), v: { xmin: -3, xmax: 3, ymin: -1, ymax: 12, w: 520, h: 240 }, note: "The Taylor polynomials of eˣ close in on it at every x, as the remainder bound guarantees." },
  { name: "ln(1 + x)", f: (x) => Math.log(1 + x), coef: (n) => (n === 0 ? 0 : (n % 2 ? 1 : -1) / n), v: { xmin: -1.5, xmax: 3, ymin: -3, ymax: 2.5, w: 520, h: 240 }, note: "The polynomials match ln(1 + x) for −1 < x ≤ 1, and fail beyond 1, though the function itself carries on smoothly." },
  { name: "1/(1 + x²)", f: (x) => 1 / (1 + x * x), coef: (n) => (n % 2 ? 0 : (n / 2) % 2 ? -1 : 1), v: { xmin: -2, xmax: 2, ymin: -1, ymax: 2, w: 520, h: 240 }, note: "Smooth on the whole line, yet its Taylor series works only for |x| < 1. The obstacle is invisible on the real line: it lies at the complex points ±i." },
  { name: "e^(−1/x²)", f: (x) => (x === 0 ? 0 : Math.exp(-1 / (x * x))), coef: () => 0, v: { xmin: -3, xmax: 3, ymin: -0.3, ymax: 1, w: 520, h: 240 }, note: "Every derivative of this function at 0 is 0, so every Taylor polynomial is 0. The series converges everywhere, to the wrong function." },
];

/** A function and its Taylor polynomials at 0. */
export function TaylorRemainderViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(3);
  const [x, setX] = useState(1);
  const C = CASES[k];
  const T = (t: number) => { let s = 0, p = 1; for (let i = 0; i <= n; i++) { s += C.coef(i) * p; p *= t; } return s; };
  const five = (v: number) => (Number.isFinite(v) ? fmtNum(Number(v.toPrecision(5))) : "undefined");
  const fx = x <= -1 && k === 1 ? NaN : C.f(x);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Function">
        {CASES.map((c, i) => (
          <button key={c.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{c.name}</span>
          </button>
        ))}
      </div>
      <Axes v={C.v} label={`${C.name} and its Taylor polynomial of degree ${n} at 0`}>
        <path d={curvePath(C.v, (t) => (k === 1 && t <= -1 ? NaN : C.f(t)), 800)} className="plot-ghost" style={{ strokeDasharray: "none", strokeWidth: 2 }} />
        <path d={curvePath(C.v, T, 800)} className="plot-curve" />
      </Axes>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          degree n = <span className="mono">{n}</span>
          <input type="range" className="viz-range" min={0} max={20} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} />
        </label>
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          x = <span className="mono">{fmtNum(x)}</span>
          <input type="range" className="viz-range" min={-1.5} max={2.5} step={0.1} value={x} onChange={(e) => setX(Number(Number(e.target.value).toFixed(1)))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>{C.name} at x</td><td className="mono">{five(fx)}</td></tr>
          <tr><td>Taylor polynomial at x</td><td className="mono">{five(T(x))}</td></tr>
          <tr><td>error</td><td className="mono">{five(fx - T(x))}</td></tr>
          {k === 0 && <tr><td>Lagrange bound e^|x| |x|ⁿ⁺¹/(n + 1)!</td><td className="mono">{five(Math.exp(Math.abs(x)) * Math.abs(x) ** (n + 1) / fact(n + 1))}</td></tr>}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">Grey: the function; coloured: the polynomial. {C.note}</figcaption>
    </figure>
  );
}
