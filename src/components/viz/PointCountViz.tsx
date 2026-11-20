"use client";

import { useState } from "react";

export const PRIMES = [2, 3, 5, 7, 11, 13];

/** The points of x² + y² = 1 with coordinates in the field with p elements. */
export function conicPoints(p: number) {
  const out: [number, number][] = [];
  for (let x = 0; x < p; x++) for (let y = 0; y < p; y++) if ((x * x + y * y - 1) % p === 0) out.push([x, y]);
  return out;
}

/** The functor of points: X(𝔽ₚ) = Hom(Spec 𝔽ₚ, X) for the scheme X = Spec ℤ[x, y]/(x² + y² − 1). */
export function PointCountViz() {
  const [p, setP] = useState(5);
  const pts = conicPoints(p);
  const S = 260 / p;
  const has = (x: number, y: number) => pts.some(([a, b]) => a === x && b === y);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="prime p">
        {PRIMES.map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "seg is-on" : "seg"} onClick={() => setP(q)}>p = {q}</button>)}
      </div>
      <svg viewBox="0 0 540 300" role="img" aria-label="A grid of all pairs (x, y) modulo p, with solutions of x squared plus y squared equal to 1 marked" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: p }, (_, x) => Array.from({ length: p }, (_, y) => {
          const on = has(x, y);
          return <rect key={`${x}-${y}`} x={40 + x * S} y={270 - (y + 1) * S} width={S - 2} height={S - 2} rx={2} style={{ fill: on ? "var(--success)" : "var(--bg-subtle)", stroke: "var(--border)" }} />;
        }))}
        <text x={40 + (p * S) / 2} y={292} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = 0, 1, …, {p - 1}</text>
        <text x={26} y={270 - (p * S) / 2} textAnchor="middle" transform={`rotate(-90 26 ${270 - (p * S) / 2})`} style={{ fill: "var(--text-muted)", fontSize: 11 }}>y = 0, 1, …, {p - 1}</text>
        <text x={330} y={60} style={{ fill: "var(--text)", fontSize: 13 }}>points modulo {p}</text>
        <text x={330} y={88} style={{ fill: "var(--success)", fontSize: 22, fontWeight: 700 }}>{pts.length} points</text>
        <text x={330} y={116} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{p === 2 ? "p = 2: x + y = 1, two points" : `−1 is ${(p - 1) % 4 === 0 ? "a square" : "not a square"} mod ${p}: p ${(p - 1) % 4 === 0 ? "−" : "+"} 1 = ${pts.length}`}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        p = {p}: the morphisms Spec 𝔽ₚ → X are the {pts.length} solutions of x² + y² = 1 modulo {p}.
      </p>
      <figcaption className="viz-caption">
        One scheme over ℤ, the circle x² + y² = 1, has a set of points with values in every ring. A point with values in the
        field with p elements is a morphism from Spec 𝔽ₚ, that is, a solution modulo p. For odd p the count is p − 1 when −1
        is a square modulo p, and p + 1 when it is not.
      </figcaption>
    </figure>
  );
}
