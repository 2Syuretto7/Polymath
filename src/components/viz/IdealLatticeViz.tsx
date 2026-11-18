"use client";

import { useState } from "react";

const NS = [8, 12, 30, 36, 60];
const primesOf = (n: number) => { const ps: number[] = []; let m = n; for (let p = 2; p * p <= m; p++) if (m % p === 0) { ps.push(p); while (m % p === 0) m /= p; } if (m > 1) ps.push(m); return ps; };

/** Ideals of ℤ/n correspond to divisors d of n; the prime ones are those with d prime, and they are all maximal. */
export function IdealLatticeViz() {
  const [n, setN] = useState(12);
  const [pick, setPick] = useState(2);
  const divs = Array.from({ length: n }, (_, i) => i + 1).filter((d) => n % d === 0);
  const ps = primesOf(n);
  const rad = ps.reduce((a, b) => a * b, 1);
  const d = divs.includes(pick) ? pick : divs[1];
  const isPrime = ps.includes(d);
  const elems = Array.from({ length: n / d }, (_, i) => i * d);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="n">
        {NS.map((m) => <button key={m} type="button" aria-pressed={n === m} className={n === m ? "seg is-on" : "seg"} onClick={() => setN(m)}>ℤ/{m}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="ideal" style={{ marginTop: 6 }}>
        {divs.map((v) => (
          <button key={v} type="button" aria-pressed={d === v} className={d === v ? "seg is-on" : "seg"} onClick={() => setPick(v)}>
            ({v}){ps.includes(v) ? " prime" : ""}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="Elements of the ring, with the chosen ideal highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: n }, (_, i) => {
          const W = 500 / n, inI = i % d === 0, nil = i % rad === 0;
          return (
            <g key={i}>
              <rect x={10 + i * W} y={14} width={W - 2} height={26} rx={3} style={{ fill: inI ? "var(--accent-soft)" : "var(--bg)", stroke: inI ? "var(--accent)" : "var(--border)" }} />
              <text x={10 + i * W + (W - 2) / 2} y={32} textAnchor="middle" style={{ fill: "var(--text)", fontSize: n > 30 ? 9 : 10 }}>{n <= 30 || i % 5 === 0 ? i : ""}</text>
              {nil && <circle cx={10 + i * W + (W - 2) / 2} cy={52} r={3} style={{ fill: "var(--danger)" }} />}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ({d}) = {"{"}{elems.length > 12 ? elems.slice(0, 12).join(", ") + ", …" : elems.join(", ")}{"}"}. Quotient ≅ ℤ/{d}: {d === n ? "the zero ideal, quotient ℤ/" + n : isPrime ? "a field, so the ideal is maximal (and prime)" : d === 1 ? "the whole ring" : "has zero divisors, so the ideal is not prime"}. Nilradical = ({rad}), marked with red dots.
      </p>
      <figcaption className="viz-caption">
        Ideals of ℤ/n are the multiples of a divisor d of n, and the quotient by (d) is ℤ/d. It is a domain exactly when d is
        prime, and then it is a field, so in these rings every prime ideal is maximal. The nilpotent elements are the
        multiples of the product of the distinct primes dividing n: the intersection of all the prime ideals.
      </figcaption>
    </figure>
  );
}
