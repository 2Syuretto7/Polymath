"use client";

import { useState } from "react";

type Mat = [number, number, number, number];
const MATS: { label: string; A: Mat; note: string }[] = [
  { label: "diagonal", A: [-1, 0, 0, -2], note: "A is symmetric with negative eigenvalues, so Av · v ≤ 0: A is dissipative." },
  { label: "rotation", A: [0, -1, 1, 0], note: "A is skew, so Av · v = 0: A is dissipative and eᵗᴬ is a rotation." },
  { label: "non-normal", A: [-1, 4, 0, -1], note: "Both eigenvalues are −1, but Av · v > 0 for v = (1, 1): A is not dissipative." },
];

function expm(A: Mat, t: number): Mat {
  // scaling and squaring with a Taylor series
  const s = 8;
  const h = t / 2 ** s;
  let E: Mat = [1, 0, 0, 1];
  let P: Mat = [1, 0, 0, 1];
  for (let k = 1; k < 20; k++) {
    P = [(P[0] * A[0] + P[1] * A[2]) * h / k, (P[0] * A[1] + P[1] * A[3]) * h / k, (P[2] * A[0] + P[3] * A[2]) * h / k, (P[2] * A[1] + P[3] * A[3]) * h / k];
    E = [E[0] + P[0], E[1] + P[1], E[2] + P[2], E[3] + P[3]];
  }
  for (let i = 0; i < s; i++) E = [E[0] * E[0] + E[1] * E[2], E[0] * E[1] + E[1] * E[3], E[2] * E[0] + E[3] * E[2], E[2] * E[1] + E[3] * E[3]];
  return E;
}

function opnorm(M: Mat) {
  const [a, b, c, d] = M;
  const p = a * a + b * b + c * c + d * d;
  const q = a * d - b * c;
  return Math.sqrt((p + Math.sqrt(Math.max(p * p - 4 * q * q, 0))) / 2);
}

export function SemigroupNormViz() {
  const [k, setK] = useState(0);
  const [t10, setT10] = useState(10);
  const t = t10 / 10;
  const A = MATS[k].A;
  const ts = Array.from({ length: 101 }, (_, i) => (i * 4) / 100);
  const ns = ts.map((s) => opnorm(expm(A, s)));
  const nt = opnorm(expm(A, t));
  const X = (s: number) => 50 + s * 115;
  const Y = (y: number) => 170 - y * 60;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="generator">
        {MATS.map((m, i) => (
          <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>t = {t.toFixed(1)} <input type="range" min={0} max={40} step={1} value={t10} onChange={(e) => setT10(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="The operator norm of e to the tA as time passes" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(4)} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(2.5)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={Y(1)} x2={X(4)} y2={Y(1)} style={{ stroke: "var(--success)", strokeDasharray: "5 3" }} />
        <text x={X(0) - 6} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>1</text>
        <text x={X(0) - 6} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
        <text x={X(4)} y={Y(0) + 14} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>t = 4</text>
        <polyline points={ts.map((s, i) => `${X(s)},${Y(Math.min(ns[i], 2.6))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 3 }} />
        <circle cx={X(t)} cy={Y(Math.min(nt, 2.6))} r={6} style={{ fill: nt > 1 + 1e-9 ? "var(--danger)" : "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        A = [[{A[0]}, {A[1]}], [{A[2]}, {A[3]}]]. At t = {t.toFixed(1)}, ‖eᵗᴬ‖ = {nt.toFixed(3)}
        {nt > 1 + 1e-9 ? ", more than 1: this is not a contraction semigroup." : ", at most 1: a contraction."}
      </p>
      <figcaption className="viz-caption">
        {MATS[k].note} By the Lumer-Phillips theorem, eᵗᴬ is a contraction for all t exactly when A is dissipative (and,
        in infinite dimensions, I − A is onto). Eigenvalues alone do not decide this: the non-normal matrix decays in the
        long run but first grows.
      </figcaption>
    </figure>
  );
}
