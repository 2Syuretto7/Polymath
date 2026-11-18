"use client";

import { useState } from "react";

type Mat = [number, number, number, number];
const mul = (A: Mat, B: Mat): Mat => [A[0] * B[0] + A[1] * B[2], A[0] * B[1] + A[1] * B[3], A[2] * B[0] + A[3] * B[2], A[2] * B[1] + A[3] * B[3]];
const norm = ([a, b, c, d]: Mat) => {
  const p = a * a + b * b + c * c + d * d, q = a * d - b * c;
  return Math.sqrt((p + Math.sqrt(Math.max(0, p * p - 4 * q * q))) / 2);
};
const KINDS = [
  { key: "jordan", label: "[[0.5, a], [0, 0.5]]", m: (a: number): Mat => [0.5, a, 0, 0.5], r: 0.5 },
  { key: "nil", label: "[[0, a], [0, 0]]", m: (a: number): Mat => [0, a, 0, 0], r: 0 },
  { key: "diag", label: "[[0.5, 0], [0, a/4]]", m: (a: number): Mat => [0.5, 0, 0, a / 4], r: -1 },
];
const NMAX = 30;

/** Gelfand’s formula: ‖Tⁿ‖^(1/n) tends to the spectral radius, which can be far below ‖T‖. */
export function SpectralRadiusViz() {
  const [k, setK] = useState(0);
  const [a10, setA] = useState(30);
  const a = a10 / 10;
  const K = KINDS[k];
  const A = K.m(a);
  const r = K.r >= 0 ? K.r : Math.max(0.5, a / 4);
  const vals: number[] = [];
  let P: Mat = A;
  for (let n = 1; n <= NMAX; n++) { vals.push(norm(P) ** (1 / n)); P = mul(P, A); }
  const top = Math.max(1, ...vals) * 1.05;
  const X = (n: number) => 40 + ((n - 1) / (NMAX - 1)) * 460, Y = (v: number) => 170 - (v / top) * 150;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="matrix">
        {KINDS.map((x, i) => <button key={x.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.label}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="The n-th root of the norm of the n-th power, for n from 1 to 30" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={Y(r)} x2={500} y2={Y(r)} style={{ stroke: "var(--accent)", strokeDasharray: "6 4" }} />
        <text x={500} y={r < 0.15 * top ? Y(r) - 5 : Y(r) + 14} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>spectral radius {r.toFixed(2)}</text>
        <line x1={40} y1={Y(vals[0])} x2={500} y2={Y(vals[0])} style={{ stroke: "var(--text-faint)", strokeDasharray: "2 4" }} />
        <text x={500} y={Y(vals[0]) - 5} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>‖T‖ = {vals[0].toFixed(2)}</text>
        {vals.map((v, i) => <circle key={i} cx={X(i + 1)} cy={Y(v)} r={3.5} style={{ fill: "var(--text)" }} />)}
        <line x1={40} y1={170} x2={500} y2={170} style={{ stroke: "var(--text-muted)" }} />
        <text x={270} y={186} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>n = 1 to {NMAX}</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          a = {a.toFixed(1)}{" "}
          <input type="range" min={0} max={40} value={a10} onChange={(e) => setA(Number(e.target.value))} aria-label="value of a" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖T‖ = {vals[0].toFixed(3)}; 10th root of ‖T¹⁰‖ = {vals[9].toFixed(3)}; 30th root of ‖T³⁰‖ = {vals[29].toFixed(3)}. Spectral radius = {r.toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        The spectrum of a matrix is its set of eigenvalues, and the spectral radius r(T) is the largest of their absolute
        values. The norm ‖T‖ can be much larger, but the dots, the n-th roots of ‖Tⁿ‖, always tend to r(T): Gelfand&rsquo;s formula,
        which holds for every bounded operator on a complex Banach space.
      </figcaption>
    </figure>
  );
}
