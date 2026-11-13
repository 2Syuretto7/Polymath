"use client";

import { useState } from "react";
import { subs } from "./groupOrder";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** The map k ↦ (k mod m, k mod n), traced through the grid ℤₘ × ℤₙ. */
export function CRTGridViz() {
  const [m, setM] = useState(3);
  const [n, setN] = useState(4);
  const [k, setK] = useState(5);
  const L = m * n;
  const cell = Math.min(44, 300 / Math.max(m, n));
  const first = new Map<string, number>();
  for (let j = 0; j < L; j++) { const key = `${j % m},${j % n}`; if (!first.has(key)) first.set(key, j); }
  const cop = gcd(m, n) === 1;
  const kk = Math.min(k, L - 1);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>m: <span className="mono">{m}</span></span>
          <input type="range" min={2} max={7} value={m} onChange={(ev) => setM(Math.round(Number(ev.target.value)))} /></label>
        <label><span>n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={7} value={n} onChange={(ev) => setN(Math.round(Number(ev.target.value)))} /></label>
        <label><span>k: <span className="mono">{kk}</span></span>
          <input type="range" min={0} max={L - 1} value={kk} onChange={(ev) => setK(Math.round(Number(ev.target.value)))} /></label>
      </div>
      <svg viewBox={`0 0 ${n * cell + 40} ${m * cell + 30}`} role="img" aria-label="The grid of pairs" style={{ width: "100%", maxWidth: 420, display: "block", margin: "8px auto" }}>
        {Array.from({ length: n }, (_, c) => <text key={c} x={30 + (c + 0.5) * cell} y={14} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{c}</text>)}
        {Array.from({ length: m }, (_, r) => <text key={r} x={14} y={22 + (r + 0.5) * cell + 4} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{r}</text>)}
        {Array.from({ length: m }, (_, r) => Array.from({ length: n }, (_, c) => {
          const j = first.get(`${r},${c}`);
          const reached = j !== undefined && j <= kk;
          const now = kk % m === r && kk % n === c;
          return (
            <g key={`${r}-${c}`}>
              <rect x={30 + c * cell + 1} y={22 + r * cell + 1} width={cell - 2} height={cell - 2} rx={3}
                style={{ fill: now ? "var(--accent)" : reached ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: "var(--border)" }} />
              {reached && <text x={30 + (c + 0.5) * cell} y={22 + (r + 0.5) * cell + 4} textAnchor="middle" className="mono" style={{ fill: now ? "var(--bg)" : "var(--text)", fontSize: 11 }}>{j}</text>}
            </g>
          );
        }))}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        {kk} ↦ ({kk % m}, {kk % n}); gcd({m}, {n}) = {gcd(m, n)}, so {cop ? `all ${L} cells are hit: ℤ${subs(L)} ≅ ℤ${subs(m)} × ℤ${subs(n)}` : `only ${first.size} of ${L} cells are ever hit`}
      </p>
      <figcaption className="viz-caption">
        Rows are residues mod m, columns residues mod n. As k runs from 0, the point moves one step down and one step right, wrapping round. When m and n are coprime, the path visits every cell before repeating, so the ring homomorphism ℤₘₙ → ℤₘ × ℤₙ is a bijection: the Chinese remainder theorem. Otherwise it repeats after lcm(m, n) steps.
      </figcaption>
    </figure>
  );
}
