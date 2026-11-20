"use client";

import { useState } from "react";
import { padicAbs } from "./PadicDigitsViz";

const primesUpTo = (n: number) => Array.from({ length: n + 1 }, (_, i) => i).filter((k) => k > 1 && Array.from({ length: k - 2 }, (_, j) => j + 2).every((d) => d * d > k || k % d !== 0));

/** The absolute values of a/b at ∞ and at each prime dividing a or b; their product is 1. */
export function places(a: number, b: number) {
  const ps = primesUpTo(Math.max(a, b)).filter((p) => a % p === 0 || b % p === 0);
  const rows = ps.map((p) => [`|x|${p}`, padicAbs(a, p) / padicAbs(b, p)] as [string, number]);
  return [["|x|∞", a / b] as [string, number], ...rows];
}

/** Ostrowski’s places of ℚ and the product formula. */
export function ProductFormulaViz() {
  const [a, setA] = useState(12);
  const [b, setB] = useState(5);
  const rows = places(a, b);
  const product = rows.reduce((s, [, v]) => s * v, 1);
  const lg = (v: number) => Math.log(v);
  const max = Math.max(...rows.map(([, v]) => Math.abs(lg(v))), 1);
  const fmt = (v: number) => (Math.abs(v - Math.round(v)) < 1e-9 ? String(Math.round(v)) : Math.abs(1 / v - Math.round(1 / v)) < 1e-9 ? `1/${Math.round(1 / v)}` : v.toFixed(3));
  const sub = (s: string) => s.replace(/\d+/g, (m) => m.split("").map((c) => "₀₁₂₃₄₅₆₇₈₉"[Number(c)]).join(""));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>numerator = {a} <input type="range" min={1} max={60} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} aria-label="numerator" /></label>
        <label>denominator = {b} <input type="range" min={1} max={60} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} aria-label="denominator" /></label>
      </div>
      <svg viewBox={`0 0 540 ${20 + rows.length * 28}`} role="img" aria-label="Absolute values of x at each place" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={330} y1={4} x2={330} y2={16 + rows.length * 28} style={{ stroke: "var(--border-strong)" }} />
        {rows.map(([name, v], i) => {
          const w = (lg(v) / max) * 150;
          return (
            <g key={name}>
              <text x={90} y={22 + i * 28} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>{sub(name)}</text>
              <text x={100} y={22 + i * 28} style={{ fill: "var(--text-muted)", fontSize: 12 }}>= {fmt(v)}</text>
              <rect x={Math.min(330, 330 + w)} y={10 + i * 28} width={Math.abs(w)} height={16} style={{ fill: w >= 0 ? "var(--accent)" : "var(--success)" }} />
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        x = {a}/{b}. Product of all the absolute values: {Math.abs(product - 1) < 1e-9 ? "1" : product.toFixed(6)}. Sum of their logarithms: {Math.abs(Math.log(product)) < 1e-9 ? "0" : Math.log(product).toFixed(6)}.
      </p>
      <figcaption className="viz-caption">
        Bars show log|x| at each place: to the right when |x| &gt; 1, to the left when |x| &lt; 1. Every prime not shown
        gives |x| = 1. A prime in the numerator makes x small at that prime, and the real size of x balances them exactly:
        the logarithms always sum to 0. By Ostrowski&rsquo;s theorem these are all the absolute values on ℚ, up to
        equivalence.
      </figcaption>
    </figure>
  );
}
