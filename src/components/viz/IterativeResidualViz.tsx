"use client";

import { useState } from "react";

/** Residual histories for Jacobi, Gauss–Seidel and conjugate gradients on the 1D Poisson matrix tridiag(−1, 2, −1). */
export function residuals(n: number, iters: number): number[][] {
  const b = Array.from({ length: n }, () => 1);
  const Av = (x: number[]) => x.map((xi, i) => 2 * xi - (i > 0 ? x[i - 1] : 0) - (i < n - 1 ? x[i + 1] : 0));
  const norm = (v: number[]) => Math.sqrt(v.reduce((s, t) => s + t * t, 0));
  const nb = norm(b);
  const res = (x: number[]) => Math.max(norm(Av(x).map((t, i) => b[i] - t)) / nb, 1e-17);
  const out: number[][] = [[], [], []];
  let x = new Array(n).fill(0);
  for (let k = 0; k <= iters; k++) {
    out[0].push(res(x));
    x = x.map((_, i) => (b[i] + (i > 0 ? x[i - 1] : 0) + (i < n - 1 ? x[i + 1] : 0)) / 2);
  }
  x = new Array(n).fill(0);
  for (let k = 0; k <= iters; k++) {
    out[1].push(res(x));
    for (let i = 0; i < n; i++) x[i] = (b[i] + (i > 0 ? x[i - 1] : 0) + (i < n - 1 ? x[i + 1] : 0)) / 2;
  }
  x = new Array(n).fill(0);
  let r = [...b], p = [...r], rr = r.reduce((s, t) => s + t * t, 0);
  for (let k = 0; k <= iters; k++) {
    out[2].push(res(x));
    if (rr < 1e-30) continue;
    const Ap = Av(p), alpha = rr / p.reduce((s, t, i) => s + t * Ap[i], 0);
    x = x.map((xi, i) => xi + alpha * p[i]);
    r = r.map((ri, i) => ri - alpha * Ap[i]);
    const rr2 = r.reduce((s, t) => s + t * t, 0);
    p = r.map((ri, i) => ri + (rr2 / rr) * p[i]);
    rr = rr2;
  }
  return out;
}

const NAMES = ["Jacobi", "Gauss–Seidel", "conjugate gradient"];
const COLS = ["var(--danger)", "var(--text-muted)", "var(--accent)"];
const ITERS = 200;

/** Relative residual against iteration count for three iterative solvers. */
export function IterativeResidualViz() {
  const [n, setN] = useState(10);
  const R = residuals(n, ITERS);
  const X = (k: number) => 40 + (k / ITERS) * 460, Y = (e: number) => 10 + (-Math.log10(e) / 16) * 170;
  const first = (rs: number[]) => { const k = rs.findIndex((e) => e < 1e-8); return k < 0 ? `more than ${ITERS}` : String(k); };
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono">unknowns n: {n}</span>
        <input type="range" min={5} max={100} step={5} value={n} onChange={(e) => setN(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <svg viewBox="0 0 520 210" role="img" aria-label="Residual against iteration" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, -4, -8, -12, -16].map((t) => (
          <g key={t}>
            <line x1={40} y1={Y(10 ** t)} x2={500} y2={Y(10 ** t)} style={{ stroke: "var(--border)" }} />
            <text x={34} y={Y(10 ** t) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t === 0 ? "1" : `1e${t}`}</text>
          </g>
        ))}
        {[0, 50, 100, 150, 200].map((k) => <text key={k} x={X(k)} y={200} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{k}</text>)}
        {R.map((rs, i) => (
          <g key={i}>
            <path d={rs.map((e, k) => `${k ? "L" : "M"}${X(k).toFixed(1)},${Y(e).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: COLS[i], strokeWidth: 2 }} />
            <text x={496} y={150 + 14 * i} textAnchor="end" style={{ fill: COLS[i], fontSize: 12 }}>{NAMES[i]}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        {NAMES.map((m, i) => <div key={m}>{m}: residual below 1e−8 after {first(R[i])} iterations</div>)}
      </div>
      <figcaption className="viz-caption">
        The matrix is tridiag(−1, 2, −1), the discrete second derivative, with n unknowns. Jacobi and Gauss–Seidel reduce
        the residual by a fixed factor close to 1 each sweep, and the factor gets closer to 1 as n grows, so the iteration
        count grows like n². Conjugate gradients, in exact arithmetic, finish in at most n steps, and in practice need
        about n/2 here.
      </figcaption>
    </figure>
  );
}
