"use client";

import { useState } from "react";

export const PRIMES = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
/** S(x, z): the number of n ≤ x with no prime factor below or equal to z (n = 1 included). */
export function survivors(x: number, k: number) {
  const ps = PRIMES.slice(0, k);
  let c = 0;
  for (let n = 1; n <= x; n++) if (ps.every((p) => n % p !== 0)) c++;
  return c;
}
/** The main term x Π (1 − 1/p) of Legendre’s inclusion–exclusion. */
export const mainTerm = (x: number, k: number) => PRIMES.slice(0, k).reduce((m, p) => m * (1 - 1 / p), x);
/** Legendre’s exact formula: the sum over squarefree d built from the first k primes of μ(d) ⌊x/d⌋. */
export function legendre(x: number, k: number) {
  let s = 0;
  for (let mask = 0; mask < 1 << k; mask++) {
    let d = 1, sign = 1;
    for (let i = 0; i < k; i++) if (mask & (1 << i)) { d *= PRIMES[i]; sign = -sign; }
    s += sign * Math.floor(x / d);
  }
  return s;
}

/** Legendre’s sieve: exact inclusion–exclusion, its main term, and the number of terms. */
export function LegendreSieveViz() {
  const [e, setE] = useState(3);
  const [k, setK] = useState(11);
  const x = Math.round(10 ** e);
  const S = survivors(x, k), L = legendre(x, k), mt = mainTerm(x, k);
  const bars = PRIMES.map((_, i) => ({ k: i + 1, S: survivors(x, i + 1), mt: mainTerm(x, i + 1) }));
  const maxv = x;
  const bw = 34, X0 = 50;
  const py = (v: number) => 190 - (v / maxv) * 160;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>x = {x.toLocaleString("en-IN")} <input type="range" min={2} max={5} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log x" /></label>
        <label>sieve by primes up to {PRIMES[k - 1]} <input type="range" min={1} max={11} step={1} value={k} onChange={(ev) => setK(Number(ev.target.value))} aria-label="number of primes" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Survivors of the sieve against the main term" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={190} x2={X0 + bw * 11 + 10} y2={190} style={{ stroke: "var(--border-strong)" }} />
        {bars.map((b, i) => (
          <g key={b.k}>
            <rect x={X0 + i * bw + 6} y={py(b.S)} width={bw - 12} height={190 - py(b.S)} style={{ fill: i < k ? "var(--accent)" : "var(--accent-soft)" }} />
            <line x1={X0 + i * bw + 2} y1={py(b.mt)} x2={X0 + i * bw + bw - 2} y2={py(b.mt)} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
            <text x={X0 + i * bw + bw / 2} y={206} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{PRIMES[i]}</text>
          </g>
        ))}
        <text x={X0 + 11 * bw / 2} y={220} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>largest prime sieved</text>
        <text x={440} y={40} style={{ fill: "var(--accent)", fontSize: 10 }}>bars: survivors</text>
        <text x={440} y={56} style={{ fill: "var(--danger)", fontSize: 10 }}>red: main term</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Survivors {S.toLocaleString("en-IN")} (Legendre&rsquo;s formula gives {L.toLocaleString("en-IN")}); main term {mt.toFixed(1)}; the formula has {(2 ** k).toLocaleString("en-IN")} terms.
      </p>
      <figcaption className="viz-caption">
        Inclusion–exclusion counts the integers up to x with no prime factor up to z exactly. Each term ⌊x/d⌋ differs
        from x/d by less than 1, so the error in replacing the sum by its main term can be as large as the number of terms,
        2 to the power π(z). Once z is more than a small power of log x this swamps everything.
      </figcaption>
    </figure>
  );
}
