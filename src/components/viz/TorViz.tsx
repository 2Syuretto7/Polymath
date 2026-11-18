"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Tor and Ext of ℤ/m and ℤ/n from the resolution 0 → ℤ → ℤ → ℤ/m → 0: both come from multiplication by m on ℤ/n. */
export function TorViz() {
  const [m, setM] = useState(4);
  const [n, setN] = useState(6);
  const [mode, setMode] = useState<"tor" | "ext">("tor");
  const d = gcd(m, n);
  const ker = Array.from({ length: n }, (_, i) => i).filter((i) => (i * m) % n === 0);
  const im = Array.from(new Set(Array.from({ length: n }, (_, i) => (i * m) % n))).sort((a, b) => a - b);
  const R = 70, cx = 150, cy = 100;
  const pos = (i: number) => [cx + R * Math.sin((2 * Math.PI * i) / n), cy - R * Math.cos((2 * Math.PI * i) / n)];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="functor">
        <button type="button" aria-pressed={mode === "tor"} className={mode === "tor" ? "seg is-on" : "seg"} onClick={() => setMode("tor")}>tensor with ℤ/{n}: Tor</button>
        <button type="button" aria-pressed={mode === "ext"} className={mode === "ext" ? "seg is-on" : "seg"} onClick={() => setMode("ext")}>Hom into ℤ/{n}: Ext</button>
      </div>
      <div className="viz-controls">
        <label>m = {m} <input type="range" min={1} max={12} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
        <label>n = {n} <input type="range" min={2} max={12} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Multiplication by m on the cyclic group of order n" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border)" }} />
        {Array.from({ length: n }, (_, i) => {
          const [x, y] = pos(i);
          const inKer = ker.includes(i), inIm = im.includes(i);
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={11} style={{ fill: inKer ? "var(--accent-soft)" : "var(--bg)", stroke: inIm ? "var(--success)" : "var(--border-strong)", strokeWidth: inIm ? 3 : 1 }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{i}</text>
            </g>
          );
        })}
        <text x={cx} y={cy + 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>ℤ/{n}, times {m}</text>
        <rect x={290} y={40} width={16} height={16} rx={8} style={{ fill: "var(--accent-soft)", stroke: "var(--border-strong)" }} />
        <text x={314} y={53} style={{ fill: "var(--text)", fontSize: 12 }}>kernel: {ker.length} elements</text>
        <rect x={290} y={70} width={16} height={16} rx={8} style={{ fill: "var(--bg)", stroke: "var(--success)", strokeWidth: 3 }} />
        <text x={314} y={83} style={{ fill: "var(--text)", fontSize: 12 }}>image: {im.length} elements</text>
        <text x={290} y={120} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{mode === "tor" ? `Tor₁(ℤ/${m}, ℤ/${n}) = kernel ≅ ℤ/${d}` : `Ext¹(ℤ/${m}, ℤ/${n}) = cokernel ≅ ℤ/${d}`}</text>
        <text x={290} y={142} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{mode === "tor" ? `Tor₀ = ℤ/${m} ⊗ ℤ/${n} = cokernel ≅ ℤ/${d}` : `Ext⁰ = Hom(ℤ/${m}, ℤ/${n}) = kernel ≅ ℤ/${d}`}</text>
        <text x={290} y={164} style={{ fill: "var(--text-muted)", fontSize: 11 }}>cokernel has {n / im.length} elements</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {mode === "tor"
          ? `Tensor 0 → ℤ → ℤ → ℤ/${m} → 0 with ℤ/${n}: the injection ℤ → ℤ, times ${m}, becomes ℤ/${n} → ℤ/${n}, times ${m}, with kernel of size ${ker.length}. Tor₁ measures the lost injectivity.`
          : `Apply Hom(−, ℤ/${n}) to the same resolution: Hom(ℤ, ℤ/${n}) → Hom(ℤ, ℤ/${n}) is again times ${m}, and Ext¹ is what is left over: the cokernel, of size ${n / im.length}.`}
      </p>
      <figcaption className="viz-caption">
        Resolve ℤ/m by free modules, apply the functor, and take homology. Both answers come from one map, multiplication by m
        on ℤ/n: its kernel and cokernel both have gcd(m, n) elements. When gcd(m, n) = 1 everything vanishes.
      </figcaption>
    </figure>
  );
}
