"use client";

import { useState } from "react";

/** Generators and their orders writing (ℤ/q)ˣ as a direct product of cyclic groups. */
const GROUPS: Record<number, [number, number][]> = {
  5: [[2, 4]],
  7: [[3, 6]],
  8: [[3, 2], [5, 2]],
  9: [[2, 6]],
  12: [[5, 2], [7, 2]],
};
export const MODULI = [5, 7, 8, 9, 12];

/** The residues coprime to q, each with its exponent vector in the chosen generators. */
export function residues(q: number) {
  const gens = GROUPS[q], out: { a: number; e: number[] }[] = [];
  const rec = (i: number, val: number, e: number[]) => {
    if (i === gens.length) { out.push({ a: val, e }); return; }
    let v = val;
    for (let k = 0; k < gens[i][1]; k++) { rec(i + 1, v, [...e, k]); v = (v * gens[i][0]) % q; }
  };
  rec(0, 1, []);
  return out.sort((x, y) => x.a - y.a);
}
/** All Dirichlet characters mod q: χ(a) = exp(2πi Σ kᵢ eᵢ / ordᵢ), returned as angles in turns. */
export function characters(q: number) {
  const gens = GROUPS[q], res = residues(q), ks: number[][] = [[]];
  for (const [, o] of gens) { const nk: number[][] = []; for (const k of ks) for (let j = 0; j < o; j++) nk.push([...k, j]); ks.splice(0, ks.length, ...nk); }
  return ks.map((k) => res.map((r) => { let t = 0; gens.forEach(([, o], i) => { t += (k[i] * r.e[i]) / o; }); return t - Math.floor(t + 1e-9); }));
}
export const isReal = (row: number[]) => row.every((t) => Math.abs(t) < 1e-9 || Math.abs(t - 0.5) < 1e-9);

/** The table of Dirichlet characters mod q, each value drawn as an arrow on the unit circle. */
export function DirichletCharTableViz() {
  const [q, setQ] = useState(7);
  const res = residues(q), chars = characters(q);
  const real = chars.filter(isReal).length;
  const cw = 54, rh = 40, X0 = 70, Y0 = 34;
  const W = X0 + cw * res.length + 10, H = Y0 + rh * chars.length + 6;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="modulus">
        {MODULI.map((m) => <button key={m} type="button" aria-pressed={q === m} className={q === m ? "seg is-on" : "seg"} onClick={() => setQ(m)}>q = {m}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Table of Dirichlet characters" style={{ width: "100%", maxWidth: W * 1.3, display: "block", marginTop: 8 }}>
        {res.map((r, j) => <text key={r.a} x={X0 + cw * j + cw / 2} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>a = {r.a}</text>)}
        {chars.map((row, i) => (
          <g key={i}>
            <text x={X0 - 10} y={Y0 + rh * i + rh / 2 + 4} textAnchor="end" style={{ fill: isReal(row) ? "var(--accent)" : "var(--text)", fontSize: 12, fontWeight: isReal(row) ? 700 : 400 }}>χ{"₀₁₂₃₄₅₆₇"[i]}</text>
            {row.map((t, j) => {
              const cx = X0 + cw * j + cw / 2, cy = Y0 + rh * i + rh / 2, R = 14;
              const x2 = cx + R * Math.cos(2 * Math.PI * t), y2 = cy - R * Math.sin(2 * Math.PI * t);
              return (
                <g key={j}>
                  <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--grid-line)" }} />
                  <line x1={cx} y1={cy} x2={x2} y2={y2} style={{ stroke: isReal(row) ? "var(--accent)" : "var(--text)", strokeWidth: 2 }} />
                  <circle cx={x2} cy={y2} r={2.5} style={{ fill: isReal(row) ? "var(--accent)" : "var(--text)" }} />
                </g>
              );
            })}
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        φ({q}) = {res.length} residues coprime to {q}, so {chars.length} characters, of which {real} take only the values ±1 (highlighted).
      </p>
      <figcaption className="viz-caption">
        Each arrow shows χ(a) as a point on the unit circle, pointing right for 1 and left for −1. The first row is the
        principal character χ₀. Every other row sums to 0, and any two different rows are orthogonal. A character is
        defined on all integers by setting χ(n) = 0 when n shares a factor with q.
      </figcaption>
    </figure>
  );
}
