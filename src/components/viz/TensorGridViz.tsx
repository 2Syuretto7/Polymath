"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** ℤ/m ⊗ ℤ/n: the bilinear map (a, b) ↦ ab mod gcd(m, n) is universal, so the tensor product is ℤ/gcd(m, n). */
export function TensorGridViz() {
  const [m, setM] = useState(4);
  const [n, setN] = useState(6);
  const d = gcd(m, n);
  const S = Math.min(30, 300 / Math.max(m, n));
  const hue = (v: number) => (v === 0 ? "var(--bg-subtle)" : `hsl(${(250 + (v * 360) / d) % 360} 60% 60%)`);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>m = {m} <input type="range" min={1} max={12} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
        <label>n = {n} <input type="range" min={1} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox={`0 0 520 ${Math.max(24 + m * S, 30 + d * 24) + 10}`} role="img" aria-label="Grid of pairs coloured by their product modulo the gcd" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={40 + (n * S) / 2} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>b in ℤ/{n}</text>
        <text x={14} y={30 + (m * S) / 2} textAnchor="middle" transform={`rotate(-90 14 ${30 + (m * S) / 2})`} style={{ fill: "var(--text-muted)", fontSize: 11 }}>a in ℤ/{m}</text>
        {Array.from({ length: m }, (_, a) => Array.from({ length: n }, (_, b) => {
          const v = (a * b) % d;
          return (
            <g key={`${a}-${b}`}>
              <rect x={40 + b * S} y={24 + a * S} width={S - 2} height={S - 2} rx={3} style={{ fill: hue(v), stroke: "var(--border)" }} />
              {S >= 22 && <text x={40 + b * S + (S - 2) / 2} y={24 + a * S + S / 2 + 3} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>{v}</text>}
            </g>
          );
        }))}
        {Array.from({ length: d }, (_, v) => (
          <g key={v}>
            <rect x={400} y={30 + v * 24} width={18} height={18} rx={3} style={{ fill: hue(v), stroke: "var(--border)" }} />
            <text x={426} y={43 + v * 24} style={{ fill: "var(--text)", fontSize: 11 }}>a ⊗ b = {v} · (1 ⊗ 1)</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        gcd({m}, {n}) = {d}. So ℤ/{m} ⊗ ℤ/{n} ≅ ℤ/{d}{d === 1 ? " = 0" : ""}, and Hom(ℤ/{m}, ℤ/{n}) ≅ ℤ/{d} too. Here 1 ⊗ 1 is killed by {m} and by {n}, hence by {d}.
      </p>
      <figcaption className="viz-caption">
        Each cell is a pure tensor a ⊗ b = ab · (1 ⊗ 1), coloured by ab mod gcd(m, n). This colouring is bilinear, and every
        bilinear map out of ℤ/m × ℤ/n factors through it: that is the universal property of the tensor product.
      </figcaption>
    </figure>
  );
}
