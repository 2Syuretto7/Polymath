"use client";

import { useState } from "react";

/** Quadratic fields by discriminant D, with the residue of the Dedekind zeta function at s = 1. */
export const FIELDS = [
  { label: "ℚ(i)", D: -4, kappa: Math.PI / 4, how: "2π · 1 / (4 · √4)" },
  { label: "ℚ(√−3)", D: -3, kappa: (2 * Math.PI) / (6 * Math.sqrt(3)), how: "2π · 1 / (6 · √3)" },
  { label: "ℚ(√−5)", D: -20, kappa: (2 * Math.PI * 2) / (2 * Math.sqrt(20)), how: "2π · 2 / (2 · √20)" },
  { label: "ℚ(√2)", D: 8, kappa: (2 * Math.log(1 + Math.SQRT2)) / Math.sqrt(8), how: "2 · log(1 + √2) / √8" },
  { label: "ℚ(√5)", D: 5, kappa: (2 * Math.log((1 + Math.sqrt(5)) / 2)) / Math.sqrt(5), how: "2 · log((1 + √5)/2) / √5" },
];

/** The Kronecker symbol (D/p) for a prime p. */
function chiPrime(D: number, p: number) {
  if (p === 2) {
    if (D % 2 === 0) return 0;
    const r = ((D % 8) + 8) % 8;
    return r === 1 || r === 7 ? 1 : -1;
  }
  const r = ((D % p) + p) % p;
  if (r === 0) return 0;
  let e = (p - 1) / 2, b = r, acc = 1;
  while (e > 0) { if (e & 1) acc = (acc * b) % p; b = (b * b) % p; e >>= 1; }
  return acc === 1 ? 1 : -1;
}

/** Number of ideals of norm n in the quadratic field of discriminant D: the sum over d | n of χ(d). */
export function idealsOfNorm(D: number, n: number) {
  let count = 1, m = n;
  for (let p = 2; p * p <= m; p++) {
    if (m % p) continue;
    let e = 0;
    while (m % p === 0) { m /= p; e++; }
    const c = chiPrime(D, p);
    count *= c === 1 ? e + 1 : c === 0 ? 1 : e % 2 === 0 ? 1 : 0;
  }
  if (m > 1) { const c = chiPrime(D, m); count *= c === 1 ? 2 : c === 0 ? 1 : 0; }
  return count;
}

/** Cumulative counts of ideals of norm at most X, for X = 1, …, N. */
export function cumulative(D: number, N: number) {
  const out: number[] = [];
  let s = 0;
  for (let n = 1; n <= N; n++) { s += idealsOfNorm(D, n); out.push(s); }
  return out;
}

/** Ideals of norm at most X, divided by X, tend to the residue of the Dedekind zeta function at s = 1. */
export function IdealCountViz() {
  const [fi, setFi] = useState(0);
  const [N, setN] = useState(1000);
  const f = FIELDS[fi];
  const cum = cumulative(f.D, N);
  const X0 = 50, W = 470, Y0 = 170, H = 150, top = 1.6;
  const px = (x: number) => X0 + (x / N) * W;
  const py = (v: number) => Y0 - (Math.min(v, top) / top) * H;
  const step = Math.max(1, Math.floor(N / 400));
  let d = "";
  for (let x = 1; x <= N; x += step) d += `${x === 1 ? "M" : "L"}${px(x).toFixed(1)},${py(cum[x - 1] / x).toFixed(1)}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="field">
        {FIELDS.map((v, i) => <button key={v.label} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{v.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>X up to {N} <input type="range" min={100} max={4000} step={100} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="X" /></label>
      </div>
      <svg viewBox="0 0 540 196" role="img" aria-label="Number of ideals of norm at most X, divided by X" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={Y0} x2={X0} y2={Y0 - H} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.5, 1, 1.5].map((v) => (
          <g key={v}>
            <line x1={X0 - 4} y1={py(v)} x2={X0} y2={py(v)} style={{ stroke: "var(--border-strong)" }} />
            <text x={X0 - 8} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>
          </g>
        ))}
        <line x1={X0} y1={py(f.kappa)} x2={X0 + W} y2={py(f.kappa)} style={{ stroke: "var(--success)", strokeDasharray: "5 4", strokeWidth: 1.5 }} />
        <text x={X0 + W} y={py(f.kappa) - 6} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>class number formula: {f.kappa.toFixed(3)}</text>
        <path d={d} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <text x={X0 + W} y={Y0 + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>X = {N}</text>
        <text x={X0} y={Y0 + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        <text x={X0 + 6} y={14} style={{ fill: "var(--text-muted)", fontSize: 10 }}>(ideals of norm at most X) / X</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {f.label}, discriminant {String(f.D).replace("-", "−")}: {cum[N - 1]} ideals of norm at most {N}, ratio {(cum[N - 1] / N).toFixed(3)}. Limit {f.how} = {f.kappa.toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        The number of ideals of norm n is the sum of χ(d) over the divisors d of n, where χ is the quadratic character of
        the field. Counting them up to X and dividing by X gives the residue of the Dedekind zeta function at s = 1, which
        the class number formula expresses through the class number, the regulator, the roots of unity and the
        discriminant.
      </figcaption>
    </figure>
  );
}
