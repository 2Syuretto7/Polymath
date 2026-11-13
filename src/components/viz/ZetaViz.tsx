"use client";

import { useState } from "react";

const MAXN = 200;
const PRIMES: number[] = [];
for (let n = 2; n <= MAXN; n++) if (PRIMES.every((p) => p * p > n || n % p)) PRIMES.push(n);

const zetaApprox = (s: number) => {
  // partial sum plus Euler-Maclaurin tail, accurate enough for s ≥ 1.1
  const N = 1000;
  let t = 0;
  for (let n = 1; n < N; n++) t += Math.pow(n, -s);
  return t + Math.pow(N, 1 - s) / (s - 1) + 0.5 * Math.pow(N, -s) + (s / 12) * Math.pow(N, -s - 1);
};

/** The zeta function for real s > 1: the Dirichlet series and the Euler product converge to the same number. */
export function ZetaViz() {
  const [s, setS] = useState(2);
  const [N, setN] = useState(30);
  const z = zetaApprox(s);
  const sums: number[] = [], prods: number[] = [];
  let a = 0, b = 1;
  for (let n = 1; n <= MAXN; n++) {
    a += Math.pow(n, -s);
    if (PRIMES.includes(n)) b /= 1 - Math.pow(n, -s);
    sums.push(a); prods.push(b);
  }
  const W = 560, H = 240;
  const top = Math.max(z, 1.2) * 1.08;
  const X = (n: number) => 40 + ((n - 1) / (N - 1 || 1)) * (W - 60), Y = (v: number) => 10 + (1 - (v - 1) / (top - 1)) * (H - 40);
  const line = (vs: number[]) => vs.slice(0, N).map((v, k) => `${k ? "L" : "M"}${X(k + 1).toFixed(1)},${Y(v).toFixed(1)}`).join(" ");
  const primesUsed = PRIMES.filter((p) => p <= N);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>s: <span className="mono">{s.toFixed(1)}</span></span><input type="range" min={1.2} max={4} step={0.1} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
        <label><span>up to N: <span className="mono">{N}</span></span><input type="range" min={5} max={MAXN} step={5} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Partial sums and partial Euler products approaching zeta of s" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={40} y1={Y(1)} x2={W - 20} y2={Y(1)} style={{ stroke: "var(--border)" }} />
        <line x1={40} y1={Y(z)} x2={W - 20} y2={Y(z)} style={{ stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />
        <text x={36} y={Y(z) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>ζ(s)</text>
        <text x={36} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <path d={line(sums)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <path d={line(prods)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "2 3" }} />
        <text x={(W + 40) / 2} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>N, from 1 to {N}</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>sum of 1/nˢ for n ≤ {N}: {sums[N - 1].toFixed(5)} (solid)</div>
        <div>product of 1/(1 − p⁻ˢ) for the {primesUsed.length} primes p ≤ {N}: {prods[N - 1].toFixed(5)} (dotted)</div>
        <div>ζ({s.toFixed(1)}) = {z.toFixed(5)}{Math.abs(s - 2) < 1e-9 ? `; π²/6 = ${(Math.PI ** 2 / 6).toFixed(5)}` : ""}</div>
      </div>
      <figcaption className="viz-caption">
        Expanding each factor 1/(1 − p⁻ˢ) as a geometric series and multiplying out gives every 1/nˢ exactly once, by unique
        factorisation. So the product over primes and the sum over integers have the same limit. Move s towards 1 and both
        grow without bound, which already proves there are infinitely many primes.
      </figcaption>
    </figure>
  );
}
