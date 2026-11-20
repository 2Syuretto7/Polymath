"use client";

import { useState } from "react";

const PR = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59];

/** Prime factorisation of n as [p, exponent] pairs. */
export function factor(n: number) {
  const out: [number, number][] = [];
  for (let p = 2; p * p <= n; p++) { let e = 0; while (n % p === 0) { n /= p; e++; } if (e) out.push([p, e]); }
  if (n > 1) out.push([n, 1]);
  return out;
}

/** Spec ℤ/n sits inside Spec ℤ as the closed set V(n): the primes dividing n, thickened by their exponents. */
export function SpecIntegersViz() {
  const [n, setN] = useState(60);
  const f = factor(n);
  const pts = f.map(([p]) => p);
  const x = (i: number) => 70 + i * 27;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={2} max={60} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 160" role="img" aria-label="The prime spectrum of the integers, with the closed points dividing n highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={50} y1={80} x2={530} y2={80} style={{ stroke: "var(--border-strong)" }} />
        <circle cx={24} cy={80} r={12} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeDasharray: "3 2" }} />
        <text x={24} y={84} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>(0)</text>
        <text x={24} y={112} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>generic</text>
        {PR.map((p, i) => {
          const hit = f.find(([q]) => q === p);
          return (
            <g key={p}>
              {hit && Array.from({ length: hit[1] }, (_, k) => <circle key={k} cx={x(i)} cy={80} r={7 + 4 * (k + 1)} style={{ fill: "none", stroke: "var(--success)", opacity: 0.8 - k * 0.15 }} />)}
              <circle cx={x(i)} cy={80} r={5} style={{ fill: hit ? "var(--success)" : "var(--text-faint)" }} />
              <text x={x(i)} y={58 - (hit ? 4 * hit[1] : 0)} textAnchor="middle" style={{ fill: hit ? "var(--success)" : "var(--text-muted)", fontSize: 11, fontWeight: hit ? 700 : 400 }}>({p})</text>
            </g>
          );
        })}
        <text x={290} y={140} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>closed points (p) of Spec ℤ, primes up to 59; rings show nilpotent thickening</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        n = {n} = {f.map(([p, e]) => (e > 1 ? `${p}${["", "", "²", "³", "⁴", "⁵"][e]}` : `${p}`)).join(" · ")}. Spec ℤ/{n} has {pts.length} point{pts.length > 1 ? "s" : ""}: {pts.map((p) => `(${p})`).join(", ")}. {f.some(([, e]) => e > 1) ? "Repeated factors give nilpotent elements, invisible as points." : "n is squarefree, so ℤ/n has no nilpotents."}
      </p>
      <figcaption className="viz-caption">
        The points of Spec ℤ are the prime ideals: one closed point (p) for each prime, and the generic point (0), whose
        closure is everything. The quotient ℤ/n has spectrum V(n), the primes dividing n. Its ring remembers more than its
        points: in ℤ/12 the element 6 is nilpotent, and the point (2) carries that extra structure.
      </figcaption>
    </figure>
  );
}
