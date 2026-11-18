"use client";

import { useState } from "react";

const PRIMES: { p: number; over: string[]; kind: string }[] = [
  { p: 2, over: ["(1 + i)"], kind: "ramified: (2) = (1 + i)², one prime above it, with multiplicity 2" },
  { p: 3, over: ["(3)"], kind: "inert: 3 stays prime in ℤ[i], since 3 is not a sum of two squares" },
  { p: 5, over: ["(2 + i)", "(2 − i)"], kind: "split: 5 = (2 + i)(2 − i), two primes above it" },
  { p: 7, over: ["(7)"], kind: "inert: 7 leaves remainder 3 on division by 4" },
  { p: 11, over: ["(11)"], kind: "inert: 11 leaves remainder 3 on division by 4" },
  { p: 13, over: ["(3 + 2i)", "(3 − 2i)"], kind: "split: 13 = 3² + 2² = (3 + 2i)(3 − 2i)" },
  { p: 17, over: ["(4 + i)", "(4 − i)"], kind: "split: 17 = 4² + 1² = (4 + i)(4 − i)" },
];

/** Primes of ℤ[i] lying over primes of ℤ: every prime has something above it, and nothing above it is nested. */
export function GoingUpViz() {
  const [k, setK] = useState(2);
  const P = PRIMES[k];
  const X = (j: number) => 120 + j * 60;
  const top = 50, bot = 150;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="prime of ℤ">
        {PRIMES.map((q, i) => <button key={q.p} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>({q.p})</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Primes of the Gaussian integers above primes of the integers" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={8} y={top + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>ℤ[i]</text>
        <text x={8} y={bot + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>ℤ</text>
        <line x1={55} y1={top + 6} x2={55} y2={bot - 6} style={{ stroke: "var(--text-faint)" }} />
        <circle cx={55} cy={top} r={5} style={{ fill: "var(--text-muted)" }} />
        <circle cx={55} cy={bot} r={5} style={{ fill: "var(--text-muted)" }} />
        <text x={55} y={bot + 20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>(0)</text>
        {PRIMES.map((q, j) => {
          const on = j === k;
          const xs = q.over.length === 2 ? [X(j) - 12, X(j) + 12] : [X(j)];
          const col = on ? "var(--accent)" : "var(--text-faint)";
          return (
            <g key={q.p}>
              {xs.map((x, t) => <line key={t} x1={X(j)} y1={bot - 6} x2={x} y2={top + 6} style={{ stroke: col, strokeWidth: on ? 2 : 1 }} />)}
              {xs.map((x, t) => <circle key={t} cx={x} cy={top} r={on ? 6 : 4} style={{ fill: col }} />)}
              {q.p === 2 && <circle cx={X(j)} cy={top} r={10} style={{ fill: "none", stroke: col }} />}
              <circle cx={X(j)} cy={bot} r={on ? 6 : 4} style={{ fill: col }} />
              <text x={X(j)} y={bot + 20} textAnchor="middle" style={{ fill: on ? "var(--accent)" : "var(--text-muted)", fontSize: 11, fontWeight: on ? 700 : 400 }}>({q.p})</text>
            </g>
          );
        })}
        <text x={X(k)} y={top - 18} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>{P.over.join(", ")}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Over ({P.p}): {P.over.length} prime{P.over.length > 1 ? "s" : ""}, {P.kind}. Each contracts to ({P.p}), and none contains another.
      </p>
      <figcaption className="viz-caption">
        ℤ[i] is integral over ℤ. Lying over: every prime of ℤ has a prime of ℤ[i] above it. Incomparability: primes above the
        same prime are never nested. Going up: the chain (0) ⊂ ({P.p}) lifts to (0) ⊂ {P.over[0]}, a chain of the same length.
        Which case occurs depends on the remainder of p mod 4.
      </figcaption>
    </figure>
  );
}
