"use client";

import { useMemo, useState } from "react";

const N = 2000;
export const CHARS = [
  { label: "mod 4", chi: (n: number) => [0, 1, 0, -1][n % 4], limit: Math.PI / 4, name: "π/4" },
  { label: "mod 3", chi: (n: number) => [0, 1, -1][n % 3], limit: Math.PI / (3 * Math.sqrt(3)), name: "π/(3√3)" },
  { label: "mod 5", chi: (n: number) => [0, 1, -1, -1, 1][n % 5], limit: (2 * Math.log((1 + Math.sqrt(5)) / 2)) / Math.sqrt(5), name: "(2/√5) log((1 + √5)/2)" },
];
let SIEVE: Uint8Array | null = null;
const isPrime = (n: number) => {
  if (!SIEVE) { SIEVE = new Uint8Array(N + 1).fill(1); SIEVE[0] = SIEVE[1] = 0; for (let p = 2; p * p <= N; p++) if (SIEVE[p]) for (let j = p * p; j <= N; j += p) SIEVE[j] = 0; }
  return SIEVE[n] === 1;
};
/** Partial sums Σ χ(n)/n and partial Euler products Π (1 − χ(p)/p)⁻¹ for n, p ≤ N. */
export function partials(k: number) {
  const { chi } = CHARS[k], sums: number[] = [], prods: number[] = [];
  let s = 0, P = 1;
  for (let n = 1; n <= N; n++) {
    s += chi(n) / n;
    if (isPrime(n)) P /= 1 - chi(n) / n;
    sums.push(s); prods.push(P);
  }
  return { sums, prods };
}

/** L(1, χ) for a real character: the series and the Euler product approach the same non-zero value. */
export function LOneViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(3);
  const { sums, prods } = useMemo(() => partials(k), [k]);
  const M = Math.round(10 ** e), L = CHARS[k].limit;
  const px = (n: number) => 50 + (Math.log10(n) / Math.log10(N)) * 460, py = (v: number) => 190 - ((v - 0.2) / 1.0) * 170;
  const path = (arr: number[]) => arr.map((v, i) => `${i ? "L" : "M"}${px(i + 1).toFixed(1)},${py(Math.max(0.2, Math.min(1.2, v))).toFixed(1)}`).join("");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="character">
        {CHARS.map((c, i) => <button key={c.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>N = {M.toLocaleString("en-IN")} <input type="range" min={0} max={Math.log10(N)} step={0.1} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log N" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Partial sums and partial products of an L-function at 1" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0.2, 0.4, 0.6, 0.8, 1, 1.2].map((v) => (
          <g key={v}>
            <line x1={50} y1={py(v)} x2={510} y2={py(v)} style={{ stroke: "var(--grid-line)" }} />
            <text x={44} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v.toFixed(1)}</text>
          </g>
        ))}
        {[1, 10, 100, 1000].map((n) => <text key={n} x={px(n)} y={206} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{n.toLocaleString("en-IN")}</text>)}
        <line x1={50} y1={py(L)} x2={510} y2={py(L)} style={{ stroke: "var(--success)", strokeDasharray: "5 3", strokeWidth: 2 }} />
        <path d={path(prods)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5 }} />
        <path d={path(sums)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        <line x1={px(M)} y1={20} x2={px(M)} y2={190} style={{ stroke: "var(--border-strong)", strokeDasharray: "2 3" }} />
        <text x={54} y={16} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: series up to N</text>
        <text x={170} y={16} style={{ fill: "var(--danger)", fontSize: 10 }}>red: product over primes up to N</text>
        <text x={360} y={16} style={{ fill: "var(--success)", fontSize: 10 }}>green: L(1, χ)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        N = {M.toLocaleString("en-IN")}: series {sums[M - 1].toFixed(4)}, product {prods[M - 1].toFixed(4)}; L(1, χ) = {CHARS[k].name} = {L.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        For a non-principal character the series Σ χ(n)/n converges, slowly and with oscillation, because the partial sums of
        χ are bounded. The Euler product converges too, more erratically. The limit is never 0: that is the heart of
        Dirichlet&rsquo;s theorem.
      </figcaption>
    </figure>
  );
}
