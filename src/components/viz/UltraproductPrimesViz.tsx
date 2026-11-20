"use client";

import { useState } from "react";

const PR = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

/** Whether x is a square modulo p. */
function isSq(x: number, p: number) {
  for (let y = 0; y < p; y++) if ((y * y - x) % p === 0 || (y * y - x + p * p) % p === 0) return true;
  return false;
}

export const SENTENCES = [
  { label: "1 + 1 ≠ 0", holds: (p: number) => p !== 2, kind: "all but finitely many primes: it holds in every non-principal ultraproduct" },
  { label: "1 + 1 + 1 ≠ 0", holds: (p: number) => p !== 3, kind: "all but finitely many primes: it holds in every non-principal ultraproduct" },
  { label: "−1 is a square", holds: (p: number) => isSq(p - 1, p), kind: "infinitely many primes and infinitely many exceptions: some ultraproducts satisfy it, others do not" },
  { label: "2 is a square", holds: (p: number) => isSq(2, p), kind: "infinitely many primes and infinitely many exceptions: the ultrafilter decides" },
];

/** Łoś’s theorem for an ultraproduct of the fields 𝔽ₚ: a sentence holds there exactly when the set of p where it holds is in the ultrafilter. */
export function UltraproductPrimesViz() {
  const [k, setK] = useState(0);
  const S = SENTENCES[k];
  const fails = PR.filter((p) => !S.holds(p));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sentence">
        {SENTENCES.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 540 130" role="img" aria-label="The primes below 100, coloured by whether the sentence holds in the field with p elements" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {PR.map((p, i) => {
          const h = S.holds(p);
          const x = 20 + (i % 13) * 40;
          const y = 20 + Math.floor(i / 13) * 46;
          return (
            <g key={p}>
              <rect x={x} y={y} width={34} height={34} rx={5} style={{ fill: h ? "var(--success-soft)" : "var(--danger-soft)", stroke: h ? "var(--success)" : "var(--danger)" }} />
              <text x={x + 17} y={y + 22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{p}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        &lsquo;{S.label}&rsquo; fails for {fails.length} of the {PR.length} primes below 100. Pattern: {S.kind}.
      </p>
      <figcaption className="viz-caption">
        A non-principal ultrafilter on the primes contains every cofinite set, and of any set and its complement exactly one.
        By Łoś&rsquo;s theorem, the ultraproduct of the 𝔽ₚ satisfies a sentence exactly when the set of primes where it holds
        is in the ultrafilter. So the ultraproduct is a field of characteristic 0, though every factor has prime
        characteristic.
      </figcaption>
    </figure>
  );
}
