"use client";

import { useMemo, useState } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
/** Farey fractions a/q in [0, 1) with q ≤ Q and gcd(a, q) = 1. */
export function farey(Q: number) { const out: [number, number][] = []; for (let q = 1; q <= Q; q++) for (let a = 0; a < q; a++) if (gcd(a, q) === 1) out.push([a, q]); return out; }
export const SETS = [
  { label: "squares", member: (n: number) => Number.isInteger(Math.sqrt(n)) },
  { label: "primes", member: (n: number) => { if (n < 2) return false; for (let p = 2; p * p <= n; p++) if (n % p === 0) return false; return true; } },
  { label: "all integers", member: () => true },
];
/** |S(α)|² for S(α) = Σ over n ≤ N in the set of e(nα). */
export function power(members: number[], alpha: number) {
  let re = 0, im = 0;
  for (const n of members) { re += Math.cos(2 * Math.PI * n * alpha); im += Math.sin(2 * Math.PI * n * alpha); }
  return re * re + im * im;
}
/** Left side Σ over Farey fractions of |S(a/q)|² and the large sieve bound (N + Q²) Z. */
export function sides(k: number, N: number, Q: number) {
  const m: number[] = []; for (let n = 1; n <= N; n++) if (SETS[k].member(n)) m.push(n);
  const lhs = farey(Q).reduce((s, [a, q]) => s + power(m, a / q), 0);
  return { lhs, rhs: (N + Q * Q) * m.length, Z: m.length };
}

/** The large sieve inequality: exponential sums cannot be large at many well-spaced points at once. */
export function LargeSieveViz() {
  const [k, setK] = useState(1);
  const [Q, setQ] = useState(10);
  const N = 400;
  const members = useMemo(() => { const m: number[] = []; for (let n = 1; n <= N; n++) if (SETS[k].member(n)) m.push(n); return m; }, [k]);
  const curve = useMemo(() => Array.from({ length: 801 }, (_, i) => power(members, i / 800)), [members]);
  const pts = farey(Q);
  const { lhs, rhs } = sides(k, N, Q);
  const top = Math.max(...curve);
  const px = (a: number) => 40 + a * 470, py = (v: number) => 190 - Math.sqrt(v / top) * 165;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="set">
        {SETS.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>Q = {Q} <input type="range" min={2} max={20} step={1} value={Q} onChange={(e) => setQ(Number(e.target.value))} aria-label="Q" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Size of an exponential sum with Farey fractions marked" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={190} x2={510} y2={190} style={{ stroke: "var(--border-strong)" }} />
        <path d={curve.map((v, i) => `${i ? "L" : "M"}${px(i / 800).toFixed(1)},${py(v).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2 }} />
        {pts.map(([a, q]) => <circle key={`${a}/${q}`} cx={px(a / q)} cy={py(power(members, a / q))} r={2.8} style={{ fill: "var(--danger)" }} />)}
        {[0, 0.25, 0.5, 0.75, 1].map((a) => <text key={a} x={px(a)} y={206} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{a}</text>)}
        <text x={275} y={220} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>α (vertical scale: |S(α)|, square-root of the plotted quantity)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {pts.length} Farey fractions with q ≤ {Q}. Sum of |S(a/q)|² = {lhs.toFixed(0)}, bound (N + Q²) × {members.length} = {rhs.toFixed(0)}; ratio {(lhs / rhs).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        S(α) sums e(nα) over the chosen integers up to N = 400. The fractions a/q with q ≤ Q are spaced at least 1/Q² apart,
        and the large sieve inequality says the total of |S|² at these points is at most (N + Q²) times the size of the set.
        A set that avoids many residue classes must have |S(a/q)| large at the corresponding fractions, so it must be small.
      </figcaption>
    </figure>
  );
}
