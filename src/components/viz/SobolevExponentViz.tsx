"use client";

import { useState } from "react";

/** The Sobolev conjugate p* = np/(n − p) for p < n. */
export function sobolevConjugate(n: number, p: number) {
  return p < n ? (n * p) / (n - p) : Infinity;
}

export function SobolevExponentViz() {
  const [n, setN] = useState(3);
  const [p, setP] = useState(2);
  const ps = sobolevConjugate(n, p);
  const X = (q: number) => 40 + Math.min(q, 12) * 38;
  const qs = [1, 2, 4, 6, 8, 10, 12];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>dimension n = {n} <input type="range" min={1} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>p = {p} <input type="range" min={1} max={8} step={0.5} value={p} onChange={(e) => setP(Number(e.target.value))} aria-label="p" /></label>
      </div>
      <svg viewBox="0 0 540 90" role="img" aria-label="The exponents q for which the Sobolev bound can hold" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(1)} y1={50} x2={X(12)} y2={50} style={{ stroke: "var(--border-strong)" }} />
        {qs.map((q) => (
          <g key={q}>
            <line x1={X(q)} y1={44} x2={X(q)} y2={56} style={{ stroke: "var(--text-faint)" }} />
            <text x={X(q)} y={74} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{q}</text>
          </g>
        ))}
        <text x={X(12) + 6} y={54} style={{ fill: "var(--text-muted)", fontSize: 11 }}>q</text>
        {p < n && ps <= 12 && <circle cx={X(ps)} cy={50} r={8} style={{ fill: "var(--accent)" }} />}
        {p < n && ps <= 12 && <text x={X(ps)} y={30} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12 }}>p* = {ps.toFixed(2)}</text>}
        {p < n && ps > 12 && <text x={X(12)} y={30} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 12 }}>p* = {ps.toFixed(2)}, off the scale</text>}
        {p >= n && <text x={X(6.5)} y={30} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 12 }}>p ≥ n: no finite p*</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {p < n
          ? `n = ${n}, p = ${p}: the Gagliardo-Nirenberg-Sobolev inequality bounds the Lᵖ* norm of u by the Lᵖ norm of Du with p* = np/(n − p) = ${ps.toFixed(2)}.`
          : p > n
            ? `n = ${n}, p = ${p} > n: Morrey’s inequality makes u Hölder continuous with exponent 1 − n/p = ${(1 - n / p).toFixed(2)}.`
            : `n = ${n}, p = n: the borderline case. u lies in every Lq locally, but need not be bounded.`}
      </p>
      <figcaption className="viz-caption">
        Replace u(x) by u(λx). The two sides of an inequality ‖u‖ in Lq ≤ C‖Du‖ in Lᵖ scale by different powers of λ
        unless 1 − n/p + n/q = 0, which forces q = p*. So the exponent is dictated by dimensional analysis, and the
        theorem says that this one exponent works.
      </figcaption>
    </figure>
  );
}
