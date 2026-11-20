"use client";

import { useState } from "react";

export const POLYS = [
  { label: "x³", f: (x: number, p: number) => (x * x * x) % p },
  { label: "x³ + x", f: (x: number, p: number) => (x * x * x + x) % p },
  { label: "x²", f: (x: number, p: number) => (x * x) % p },
  { label: "x⁵", f: (x: number, p: number) => { let r = 1; for (let i = 0; i < 5; i++) r = (r * x) % p; return r; } },
];

const SUBS: Record<number, string> = { 5: "₅", 7: "₇", 11: "₁₁", 13: "₁₃" };

/** A polynomial map of a finite field to itself: injective exactly when surjective. */
export function imageSize(k: number, p: number) {
  return new Set(Array.from({ length: p }, (_, x) => POLYS[k].f(x, p))).size;
}

export function PolyPermutationViz() {
  const [k, setK] = useState(0);
  const [p, setP] = useState(7);
  const F = POLYS[k];
  const vals = Array.from({ length: p }, (_, x) => F.f(x, p));
  const size = new Set(vals).size;
  const bij = size === p;
  const X = (i: number) => 40 + (i * 460) / (p - 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="polynomial">
        {POLYS.map((q, i) => <button key={q.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>f(x) = {q.label}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="field" style={{ marginTop: 8 }}>
        {[5, 7, 11, 13].map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "seg is-on" : "seg"} onClick={() => setP(q)}>𝔽{SUBS[q]}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Arrows from each element of the field to its image" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {vals.map((v, x) => <line key={x} x1={X(x)} y1={35} x2={X(v)} y2={135} style={{ stroke: bij ? "var(--success)" : "var(--accent)", strokeWidth: 1.5, opacity: 0.8 }} />)}
        {Array.from({ length: p }, (_, i) => (
          <g key={i}>
            <circle cx={X(i)} cy={30} r={9} style={{ fill: "var(--surface)", stroke: "var(--border-strong)" }} />
            <text x={X(i)} y={34} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>{i}</text>
            <circle cx={X(i)} cy={140} r={9} style={{ fill: vals.includes(i) ? "var(--accent-soft)" : "var(--surface)", stroke: vals.includes(i) ? "var(--accent)" : "var(--border)" }} />
            <text x={X(i)} y={144} textAnchor="middle" style={{ fill: vals.includes(i) ? "var(--text)" : "var(--text-faint)", fontSize: 10 }}>{i}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        f(x) = {F.label} on 𝔽{SUBS[p]} takes {size} distinct values: {bij ? "it is injective and surjective, a permutation." : "it is neither injective nor surjective."}
      </p>
      <figcaption className="viz-caption">
        On a finite set, a map to itself is injective exactly when it is surjective, so the two always fail or succeed
        together. Ax&rsquo;s proof carries this from finite fields to the algebraic closure of each 𝔽ₚ, and from there,
        by the Lefschetz principle, to ℂ.
      </figcaption>
    </figure>
  );
}
