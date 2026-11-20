"use client";

import { useMemo, useState } from "react";

const LIMIT = 100000;
const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
let SIEVE: Uint8Array | null = null;
function sieve() {
  if (SIEVE) return SIEVE;
  const s = new Uint8Array(LIMIT + 1).fill(1);
  s[0] = 0; s[1] = 0;
  for (let p = 2; p * p <= LIMIT; p++) if (s[p]) for (let m = p * p; m <= LIMIT; m += p) s[m] = 0;
  SIEVE = s;
  return s;
}
/** Counts of primes up to X in each residue class a mod q with gcd(a, q) = 1. */
export function classCounts(q: number, X: number) {
  const s = sieve();
  const classes = Array.from({ length: q }, (_, a) => a).filter((a) => gcd(a, q) === 1);
  const counts = new Map<number, number>(classes.map((a) => [a, 0]));
  for (let p = 2; p <= X; p++) if (s[p] && counts.has(p % q)) counts.set(p % q, counts.get(p % q)! + 1);
  return classes.map((a) => ({ a, count: counts.get(a)! }));
}
const QS = [3, 4, 5, 8, 10, 12];

/** Primes in arithmetic progressions: each class coprime to q gets about 1/φ(q) of the primes. */
export function PrimesInProgressionViz() {
  const [q, setQ] = useState(4);
  const [e, setE] = useState(4);
  const X = Math.round(10 ** e);
  const data = useMemo(() => classCounts(q, X), [q, X]);
  const total = data.reduce((s, d) => s + d.count, 0);
  const max = Math.max(...data.map((d) => d.count));
  const bw = Math.min(70, 440 / data.length);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="modulus">
        {QS.map((v) => <button key={v} type="button" aria-pressed={q === v} className={q === v ? "seg is-on" : "seg"} onClick={() => setQ(v)}>q = {v}</button>)}
      </div>
      <div className="viz-controls">
        <label>X = {X.toLocaleString("en-IN")} <input type="range" min={2} max={5} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log X" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Number of primes in each residue class" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={190} x2={520} y2={190} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={190 - (total / data.length / max) * 150} x2={520} y2={190 - (total / data.length / max) * 150} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        {data.map((d, i) => {
          const h = (d.count / max) * 150, x = 50 + i * (440 / data.length) + (440 / data.length - bw) / 2;
          return (
            <g key={d.a}>
              <rect x={x} y={190 - h} width={bw} height={h} rx={3} style={{ fill: "var(--accent)" }} />
              <text x={x + bw / 2} y={184 - h} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{d.count}</text>
              <text x={x + bw / 2} y={206} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{d.a} mod {q}</text>
            </g>
          );
        })}
        <text x={40} y={224} style={{ fill: "var(--text-muted)", fontSize: 10 }}>red: an equal share, {total} / {data.length}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {total} primes up to {X.toLocaleString("en-IN")} not dividing {q}, split over φ({q}) = {data.length} classes: {data.map((d) => `${d.a}: ${d.count}`).join(", ")}.
      </p>
      <figcaption className="viz-caption">
        Dirichlet proved that every class a mod q with gcd(a, q) = 1 contains infinitely many primes; the prime number
        theorem for progressions says each gets a share 1/φ(q) in the limit. Look closely and the non-residues are often
        slightly ahead: Chebyshev&rsquo;s bias.
      </figcaption>
    </figure>
  );
}
