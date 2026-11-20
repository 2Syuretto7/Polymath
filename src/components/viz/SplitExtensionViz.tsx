"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

/** The short exact sequence 0 → ℤ/m → ℤ/mn → ℤ/n → 0, and whether it splits. */
export function SplitExtensionViz() {
  const [m, setM] = useState(2);
  const [n, setN] = useState(3);
  const N = m * n;
  const split = gcd(m, n) === 1;
  const lcm = N / gcd(m, n);
  const X = (i: number) => 40 + (i * 460) / Math.max(N - 1, 1);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>m = {m} <input type="range" min={2} max={6} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
        <label>n = {n} <input type="range" min={2} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="The elements of the middle group, with the image of the first map highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={24} style={{ fill: "var(--text)", fontSize: 11.5 }}>0 → ℤ/{m} → ℤ/{N} → ℤ/{n} → 0, first map: multiply by {n}; second map: reduce mod {n}</text>
        {Array.from({ length: N }, (_, i) => {
          const inK = i % n === 0;
          return (
            <g key={i}>
              <circle cx={X(i)} cy={80} r={N > 24 ? 6 : 9} style={{ fill: inK ? "var(--accent)" : "var(--bg-subtle)", stroke: inK ? "var(--accent)" : "var(--border-strong)" }} />
              <text x={X(i)} y={108} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: N > 24 ? 8 : 10 }}>{i}</text>
            </g>
          );
        })}
        <text x={20} y={140} style={{ fill: "var(--accent)", fontSize: 12 }}>filled: the image of ℤ/{m}, which is exactly the kernel of reduction mod {n}</text>
        <text x={20} y={160} style={{ fill: split ? "var(--success)" : "var(--danger)", fontSize: 12, fontWeight: 700 }}>
          largest order in ℤ/{N}: {N}; in ℤ/{m} ⊕ ℤ/{n}: {lcm}
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Exact for every m and n. {split ? `It splits: gcd(${m}, ${n}) = 1, so ℤ/${N} ≅ ℤ/${m} ⊕ ℤ/${n}.` : `It does not split: gcd(${m}, ${n}) = ${gcd(m, n)}, and ℤ/${N} has an element of order ${N} while the direct sum does not.`}
      </p>
      <figcaption className="viz-caption">
        In an abelian category, exactness means that the image of each map is the kernel of the next. Exact sequences need
        not split: the middle object is an extension of ℤ/{n} by ℤ/{m}, and different extensions are measured by Ext.
      </figcaption>
    </figure>
  );
}
