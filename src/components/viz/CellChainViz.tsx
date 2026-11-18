"use client";

import { useState } from "react";

type L = "a" | "A" | "b" | "B";
const SHOW: Record<L, string> = { a: "a", A: "a⁻¹", b: "b", B: "b⁻¹" };
const PRESETS: { name: string; w: L[] }[] = [
  { name: "torus: aba⁻¹b⁻¹", w: ["a", "b", "A", "B"] },
  { name: "Klein bottle: abab⁻¹", w: ["a", "b", "a", "B"] },
  { name: "ℝP² ∨ S¹: aa", w: ["a", "a"] },
  { name: "sphere ∨ two circles: aa⁻¹", w: ["a", "A"] },
];
const gcd = (x: number, y: number): number => (y === 0 ? Math.abs(x) : gcd(y, x % y));

/** Cellular homology of one 0-cell, two 1-cells a and b, and one 2-cell attached along a word. */
export function CellChainViz() {
  const [w, setW] = useState<L[]>(["a", "b", "A", "B"]);
  const p = w.filter((l) => l === "a").length - w.filter((l) => l === "A").length;
  const q = w.filter((l) => l === "b").length - w.filter((l) => l === "B").length;
  const g = gcd(p, q);
  const H2 = g === 0 ? "ℤ" : "0";
  const H1 = g === 0 ? "ℤ²" : g === 1 ? "ℤ" : `ℤ ⊕ ℤ/${g}`;
  return (
    <figure className="viz">
      <div className="viz-controls">
        {PRESETS.map((x) => <button key={x.name} type="button" className="btn btn-ghost" onClick={() => setW(x.w)}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        {(["a", "A", "b", "B"] as L[]).map((l) => <button key={l} type="button" className="btn btn-ghost" onClick={() => setW([...w, l])}>append {SHOW[l]}</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => setW([])}>clear</button>
      </div>
      <p className="mono" style={{ fontSize: 14 }}>attaching word: <b>{w.length ? w.map((l) => SHOW[l]).join(" ") : "(empty)"}</b></p>
      <svg viewBox="0 0 520 120" role="img" aria-label="The cellular chain complex" style={{ width: "100%", display: "block" }}>
        <defs>
          <marker id="cc-arr" viewBox="0 0 10 10" refX={9} refY={5} markerWidth={8} markerHeight={8} markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker>
        </defs>
        {[["C₂ = ℤ", 60, "one 2-cell"], ["C₁ = ℤ²", 260, "cells a, b"], ["C₀ = ℤ", 460, "one 0-cell"]].map(([t, x, s]) => (
          <g key={t as string}>
            <rect x={(x as number) - 55} y={24} width={110} height={40} rx={6} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={x as number} y={49} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{t}</text>
            <text x={x as number} y={84} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{s}</text>
          </g>
        ))}
        <line x1={118} y1={44} x2={200} y2={44} markerEnd="url(#cc-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <text x={160} y={36} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>d₂ = ({p}, {q})</text>
        <line x1={318} y1={44} x2={400} y2={44} markerEnd="url(#cc-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <text x={360} y={36} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 700 }}>d₁ = 0</text>
        <text x={260} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>d₂ records how many times, with sign, the word runs over a and over b</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        H₀ = ℤ. H₁ = ℤ²/⟨({p}, {q})⟩ = {H1}{g > 1 ? `, since gcd(${Math.abs(p)}, ${Math.abs(q)}) = ${g}` : ""}. H₂ = ker d₂ = {H2}.
      </p>
      <figcaption className="viz-caption">
        Cellular chains have one generator per cell. The boundary of the 2-cell is the degree with which its attaching map
        runs over each 1-cell: the exponent sums of the word. Homology is then a few lines of integer linear algebra.
      </figcaption>
    </figure>
  );
}
