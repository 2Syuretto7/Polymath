"use client";

import { useState } from "react";
import { PRIMES } from "./PrimeSplitViz";

/** The multiplicative order of q modulo p. */
export function order(q: number, p: number) {
  let x = q % p, k = 1;
  while (x !== 1) { x = (x * q) % p; k++; }
  return k;
}
/** (e, f, g) for the prime q in ℚ(ζₚ): q = p is totally ramified; otherwise e = 1, f = order of q mod p, g = (p − 1)/f. */
export const efg = (q: number, p: number): [number, number, number] => (q === p ? [p - 1, 1, 1] : [1, order(q, p), (p - 1) / order(q, p)]);

const PS = [3, 5, 7, 11, 13];

/** How primes decompose in the cyclotomic field ℚ(ζₚ). */
export function CyclotomicSplitViz() {
  const [k, setK] = useState(2);
  const p = PS[k];
  const qs = PRIMES.filter((q) => q < 100);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="p">
        {PS.map((v, i) => <button key={v} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>ℚ(ζ{["₃", "₅", "₇", "₁₁", "₁₃"][i]})</button>)}
      </div>
      <svg viewBox="0 0 540 140" role="img" aria-label="Decomposition of primes below 100 in a cyclotomic field" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {qs.map((q, i) => {
          const [e, f, g] = efg(q, p);
          const x = 8 + (i % 9) * 59, y = 6 + Math.floor(i / 9) * 44;
          const fill = e > 1 ? "var(--danger-soft)" : f === 1 ? "var(--success-soft)" : g === 1 ? "var(--bg-subtle)" : "var(--accent-soft)";
          const stroke = e > 1 ? "var(--danger)" : f === 1 ? "var(--success)" : g === 1 ? "var(--border)" : "var(--accent)";
          return (
            <g key={q}>
              <rect x={x} y={y} width={55} height={40} rx={4} style={{ fill, stroke }} />
              <text x={x + 27.5} y={y + 16} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{q}</text>
              <text x={x + 27.5} y={y + 31} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 9 }}>{e > 1 ? `e = ${e}` : `f ${f}, g ${g}`}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ℚ(ζ{["₃", "₅", "₇", "₁₁", "₁₃"][k]}) has degree {p - 1}. For q ≠ {p}: e = 1 and q splits into g = {p - 1}/f primes, where f is the order of q mod {p}. {p} itself is totally ramified: ({p}) = (1 − ζ) to the {p - 1}.
      </p>
      <figcaption className="viz-caption">
        Each prime q below 100 is labelled with its residue degree f and number of primes g, with efg = p − 1. Green primes
        split completely (q ≡ 1 mod p), grey ones stay prime, purple ones split partly, and red marks the only ramified
        prime, p, which divides the discriminant.
      </figcaption>
    </figure>
  );
}
