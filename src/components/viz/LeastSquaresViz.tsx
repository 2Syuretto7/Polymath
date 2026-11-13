"use client";

import { useState } from "react";

const XS = [-3, -2, -1, 0, 1, 2, 3];
const YS = [1.0, -0.4, -0.6, 0.2, 0.9, 2.5, 4.4];

function solve(A: number[][], b: number[]): number[] {
  const n = b.length;
  const M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = 0; r < n; r++) if (r !== c) { const f = M[r][c] / M[c][c]; for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]; }
  }
  return M.map((r, i) => r[n] / r[i]);
}

function fit(deg: number): number[] {
  const m = deg + 1;
  const A = Array.from({ length: m }, (_, i) => Array.from({ length: m }, (_, j) => XS.reduce((s, x) => s + x ** (i + j), 0)));
  const b = Array.from({ length: m }, (_, i) => XS.reduce((s, x, k) => s + x ** i * YS[k], 0));
  return solve(A, b);
}

const ev = (c: number[], x: number) => c.reduce((s, a, i) => s + a * x ** i, 0);
const sse = (g: (x: number) => number) => XS.reduce((s, x, k) => s + (YS[k] - g(x)) ** 2, 0);

/** Least squares as orthogonal projection: the best polynomial of each degree, and a line of your own to compare. */
export function LeastSquaresViz() {
  const [deg, setDeg] = useState(1);
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(0);
  const c = fit(deg);
  const best = sse((x) => ev(c, x));
  const mine = sse((x) => a + b * x);
  const W = 520, H = 260;
  const X = (x: number) => 30 + ((x + 3.5) / 7) * (W - 60);
  const Y = (y: number) => 15 + ((5 - y) / 6.5) * (H - 30);
  const path = (g: (x: number) => number) => Array.from({ length: 141 }, (_, i) => { const x = -3.5 + i * 0.05; return `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`; }).join(" ");
  const names = ["constant", "line", "quadratic", "cubic"];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Degree of the best fit">
        {names.map((nm, i) => <button key={nm} type="button" aria-pressed={deg === i} className={deg === i ? "seg is-on" : "seg"} onClick={() => setDeg(i)}>{nm}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>your line, intercept: <span className="mono">{a}</span></span>
          <input type="range" min={-1} max={3} step={0.1} value={a} onChange={(e) => setA(Math.round(Number(e.target.value) * 10) / 10)} /></label>
        <label><span>your line, slope: <span className="mono">{b}</span></span>
          <input type="range" min={-1} max={2} step={0.1} value={b} onChange={(e) => setB(Math.round(Number(e.target.value) * 10) / 10)} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Data points with the least squares fit" style={{ width: "100%", display: "block" }}>
        <line x1={X(-3.5)} y1={Y(0)} x2={X(3.5)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(-1.5)} x2={X(0)} y2={Y(5)} style={{ stroke: "var(--border)" }} />
        {XS.map((x, k) => <line key={k} x1={X(x)} y1={Y(YS[k])} x2={X(x)} y2={Y(ev(c, x))} style={{ stroke: "var(--danger)", strokeWidth: 1.5 }} />)}
        <path d={path((x) => a + b * x)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <path d={path((x) => ev(c, x))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {XS.map((x, k) => <circle key={k} cx={X(x)} cy={Y(YS[k])} r={4} style={{ fill: "var(--text)" }} />)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        best {names[deg]}: squared error {best.toFixed(3)}; your dashed line: squared error {mine.toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        The seven data values form a vector y in ℝ⁷. Polynomials of degree at most d, evaluated at the seven points, form a subspace U, and the best fit is the orthogonal projection of y onto U: the residual vector, shown by the short vertical segments, is orthogonal to U. No line you choose beats the best line, and raising the degree enlarges U, so the error can only fall.
      </figcaption>
    </figure>
  );
}
