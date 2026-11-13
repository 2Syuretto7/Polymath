"use client";

import { useState } from "react";

type P = { label: string; f: (t: number, y: number) => number; exact: (t: number) => number; T: number; ymax: number; note: string };
const PS: P[] = [
  { label: "y′ = y", f: (_t, y) => y, exact: (t) => Math.exp(t), T: 2, ymax: 8, note: "the iterates are the Taylor polynomials 1 + t + t²/2! + … + tᵏ/k! of eᵗ" },
  { label: "y′ = 2ty", f: (t, y) => 2 * t * y, exact: (t) => Math.exp(t * t), T: 1.5, ymax: 10, note: "the iterates are the Taylor polynomials of e^(t²)" },
  { label: "y′ = y²", f: (_t, y) => y * y, exact: (t) => 1 / (1 - t), T: 0.9, ymax: 10, note: "the solution 1/(1 − t) blows up at t = 1, and the iterates converge only for t < 1" },
];
const N = 300;

/** Picard iteration for y′ = f(t, y), y(0) = 1: each iterate is 1 + ∫ f(s, previous iterate) ds. */
export function PicardViz() {
  const [pi, setPi] = useState(0);
  const [n, setN] = useState(3);
  const P = PS[pi];
  const ts = Array.from({ length: N + 1 }, (_, i) => (i / N) * P.T);
  const its: number[][] = [ts.map(() => 1)];
  for (let k = 1; k <= n; k++) {
    const prev = its[k - 1], next = [1];
    for (let i = 1; i <= N; i++) next.push(next[i - 1] + ((ts[i] - ts[i - 1]) / 2) * (P.f(ts[i - 1], prev[i - 1]) + P.f(ts[i], prev[i])));
    its.push(next);
  }
  const err = Math.max(...ts.map((t, i) => Math.abs(its[n][i] - P.exact(t))));
  const W = 520, H = 260, L = 34;
  const X = (t: number) => L + (t / P.T) * (W - L - 10);
  const Y = (y: number) => 10 + ((P.ymax - Math.min(Math.max(y, -1), P.ymax + 1)) / P.ymax) * (H - 30);
  const path = (ys: number[]) => ys.map((y, i) => `${i ? "L" : "M"}${X(ts[i]).toFixed(1)},${Y(y).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {PS.map((p, i) => <button key={p.label} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => setPi(i)}>{p.label}, y(0) = 1</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>iterations k: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={10} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Picard iterates approaching the solution" style={{ width: "100%", display: "block" }}>
        <defs><clipPath id="picard-clip"><rect x={L} y={0} width={W - L} height={H - 20} /></clipPath></defs>
        <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={10} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {[0, P.ymax / 2, P.ymax].map((v) => <text key={v} x={L - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        {[0, P.T / 2, P.T].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <g clipPath="url(#picard-clip)">
          <path d={path(ts.map(P.exact))} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "6 4" }} />
          {its.slice(0, n).map((ys, k) => <path key={k} d={path(ys)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
          <path d={path(its[n])} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </g>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>largest gap between iterate {n} and the solution on [0, {P.T}]: {err.toFixed(4)}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>Here {P.note}.</p>
      <figcaption className="viz-caption">
        The dashed curve is the true solution. Start from the constant guess y = 1 and repeatedly feed the current guess into the right-hand side of y(t) = 1 + ∫₀ᵗ f(s, y(s)) ds. The thin curves are earlier iterates, the thick one the latest. Each pass fixes the error a little further out in t.
      </figcaption>
    </figure>
  );
}
