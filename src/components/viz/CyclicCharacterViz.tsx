"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);
/** The order of the character χₐ(j) = exp(2πiaj/n) of ℤ/n. */
export const charOrder = (n: number, a: number) => n / gcd(n, a % n || n);
/** ⟨χₐ, χ_b⟩ = (1/n) Σⱼ χₐ(j) conj χ_b(j), returned as [real, imaginary]. */
export function inner(n: number, a: number, b: number) {
  let re = 0, im = 0;
  for (let j = 0; j < n; j++) { const t = (2 * Math.PI * (a - b) * j) / n; re += Math.cos(t); im += Math.sin(t); }
  return [re / n, im / n];
}

/** The characters of the cyclic group ℤ/n, drawn as arrows on the unit circle. */
export function CyclicCharacterViz() {
  const [n, setN] = useState(12);
  const [a, setA] = useState(8);
  const [b, setB] = useState(3);
  const A = Math.min(a, n - 1), B = Math.min(b, n - 1);
  const [re, im] = inner(n, A, B);
  const cell = 480 / n, R = Math.min(15, cell / 2 - 3);
  const row = (k: number, y: number, col: string) => Array.from({ length: n }, (_, j) => {
    const cx = 30 + cell * (j + 0.5), t = (2 * Math.PI * k * j) / n;
    return (
      <g key={j}>
        <circle cx={cx} cy={y} r={R} style={{ fill: "none", stroke: "var(--border)" }} />
        <line x1={cx} y1={y} x2={cx + R * Math.cos(t)} y2={y - R * Math.sin(t)} style={{ stroke: col, strokeWidth: 2 }} />
        <circle cx={cx + R * Math.cos(t)} cy={y - R * Math.sin(t)} r={2.5} style={{ fill: col }} />
      </g>
    );
  });
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={3} max={16} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>a = {A} <input type="range" min={0} max={15} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="a" /></label>
        <label>b = {B} <input type="range" min={0} max={15} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="b" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="Values of two characters of the cyclic group" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: n }, (_, j) => <text key={j} x={30 + cell * (j + 0.5)} y={20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{j}</text>)}
        <text x={24} y={64} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>χ{A}</text>
        {row(A, 60, "var(--accent)")}
        <text x={24} y={124} textAnchor="end" style={{ fill: "var(--success)", fontSize: 11 }}>χ{B}</text>
        {row(B, 120, "var(--success)")}
        <text x={30} y={172} style={{ fill: "var(--text-muted)", fontSize: 10 }}>Each arrow is the complex number χ(j) = exp(2πi kj/n), for j = 0, 1, …, n − 1 along the top.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        χ{A} has order {charOrder(n, A)}. ⟨χ{A}, χ{B}⟩ = {Math.abs(re) < 1e-9 ? "0" : re.toFixed(3)}{Math.abs(im) > 1e-9 ? ` + ${im.toFixed(3)}i` : ""}{A === B ? ": a character has norm 1." : ": distinct characters are orthogonal."}
      </p>
      <figcaption className="viz-caption">
        A character of a finite abelian group is a homomorphism into the unit circle. For ℤ/n there are exactly n, one
        for each a, and χₐ turns by a/n of a full turn at each step. Averaging one character times the conjugate of another over the group
        gives 1 or 0: the arrows of a nontrivial character cancel.
      </figcaption>
    </figure>
  );
}
