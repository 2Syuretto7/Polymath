"use client";

import { useState } from "react";

type Mat = number[][];
const hilbert = (n: number): Mat => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => 1 / (i + j + 1)));
const col = (A: Mat, j: number) => A.map((r) => r[j]);
const dot = (a: number[], b: number[]) => a.reduce((s, x, i) => s + x * b[i], 0);

/** Q from classical Gram–Schmidt, modified Gram–Schmidt or Householder reflections, as a list of columns. */
export function orthQ(A: Mat, method: "classical" | "modified" | "Householder"): number[][] {
  const n = A.length;
  if (method === "Householder") {
    const R = A.map((r) => [...r]);
    const vs: number[][] = [];
    for (let k = 0; k < n; k++) {
      const x = R.slice(k).map((r) => r[k]);
      const nx = Math.sqrt(dot(x, x));
      const v = [...x]; v[0] += (x[0] >= 0 ? 1 : -1) * nx;
      const nv = Math.sqrt(dot(v, v)) || 1;
      for (let i = 0; i < v.length; i++) v[i] /= nv;
      vs.push(v);
      for (let j = k; j < n; j++) { const s = 2 * v.reduce((t, vi, i) => t + vi * R[k + i][j], 0); for (let i = 0; i < v.length; i++) R[k + i][j] -= s * v[i]; }
    }
    const Q: number[][] = [];
    for (let j = 0; j < n; j++) {
      const e = Array.from({ length: n }, (_, i) => (i === j ? 1 : 0));
      for (let k = n - 1; k >= 0; k--) { const v = vs[k]; const s = 2 * v.reduce((t, vi, i) => t + vi * e[k + i], 0); for (let i = 0; i < v.length; i++) e[k + i] -= s * v[i]; }
      Q.push(e);
    }
    return Q;
  }
  const Q: number[][] = [];
  for (let j = 0; j < n; j++) {
    const a = col(A, j), v = [...a];
    for (const q of Q) { const r = dot(q, method === "classical" ? a : v); for (let i = 0; i < n; i++) v[i] -= r * q[i]; }
    const nv = Math.sqrt(dot(v, v));
    Q.push(v.map((x) => x / nv));
  }
  return Q;
}

export function orthLoss(Q: number[][]) {
  let m = 0;
  for (let i = 0; i < Q.length; i++) for (let j = 0; j < Q.length; j++) m = Math.max(m, Math.abs(dot(Q[i], Q[j]) - (i === j ? 1 : 0)));
  return Math.max(m, 1e-17);
}

const METHODS = ["classical", "modified", "Householder"] as const;
const COLS = ["var(--danger)", "var(--text-muted)", "var(--accent)"];
const NS = Array.from({ length: 11 }, (_, i) => i + 2);
const LOSS = METHODS.map((m) => NS.map((n) => orthLoss(orthQ(hilbert(n), m))));

/** Loss of orthogonality of the computed Q for Hilbert matrices of growing size. */
export function OrthogonalityLossViz() {
  const [n, setN] = useState(8);
  const X = (k: number) => 40 + ((k - 2) / 10) * 460, Y = (e: number) => 10 + (-Math.log10(e) / 17) * 170;
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono">size n: {n}</span>
        <input type="range" min={2} max={12} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <svg viewBox="0 0 520 210" role="img" aria-label="Loss of orthogonality against matrix size" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, -4, -8, -12, -16].map((t) => (
          <g key={t}>
            <line x1={40} y1={Y(10 ** t)} x2={500} y2={Y(10 ** t)} style={{ stroke: "var(--border)" }} />
            <text x={34} y={Y(10 ** t) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t === 0 ? "1" : `1e${t}`}</text>
          </g>
        ))}
        {NS.filter((k) => k % 2 === 0).map((k) => <text key={k} x={X(k)} y={200} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>n = {k}</text>)}
        <line x1={X(n)} y1={10} x2={X(n)} y2={180} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        {LOSS.map((ls, i) => (
          <g key={i}>
            <path d={ls.map((e, j) => `${j ? "L" : "M"}${X(NS[j]).toFixed(1)},${Y(e).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: COLS[i], strokeWidth: 2 }} />
            <circle cx={X(n)} cy={Y(ls[n - 2])} r={4.5} style={{ fill: COLS[i] }} />
            <text x={50} y={26 + 14 * i} style={{ fill: COLS[i], fontSize: 12 }}>{METHODS[i]}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        {METHODS.map((m, i) => <div key={m} style={{ fontWeight: i === 2 ? 700 : 400 }}>{m}: largest entry of QᵀQ − I is {LOSS[i][n - 2].toExponential(1)}</div>)}
      </div>
      <figcaption className="viz-caption">
        Each method orthogonalises the columns of the n × n Hilbert matrix, whose columns are nearly parallel. In exact
        arithmetic all three give the same Q. In floating point, classical Gram–Schmidt loses orthogonality completely by
        n = 8 or so; modified Gram–Schmidt loses it in proportion to the condition number; Householder reflections keep Q
        orthogonal to rounding level whatever the matrix.
      </figcaption>
    </figure>
  );
}
