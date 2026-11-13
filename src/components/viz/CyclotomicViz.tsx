"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

/** Integer coefficients of the cyclotomic polynomial Φₙ, lowest degree first. */
const cyclo = (() => {
  const memo: Record<number, number[]> = {};
  const divide = (a: number[], b: number[]) => {
    const r = a.slice(), q = Array(a.length - b.length + 1).fill(0);
    for (let k = q.length - 1; k >= 0; k--) {
      const c = r[k + b.length - 1] / b[b.length - 1];
      q[k] = c;
      for (let j = 0; j < b.length; j++) r[k + j] -= c * b[j];
    }
    return q;
  };
  const phi = (n: number): number[] => {
    if (memo[n]) return memo[n];
    let p = [-1, ...Array(n - 1).fill(0), 1];
    for (let d = 1; d < n; d++) if (n % d === 0) p = divide(p, phi(d));
    memo[n] = p.map((c) => Math.round(c));
    return memo[n];
  };
  return phi;
})();

const sup = (k: number) => String(k).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join("");
const show = (c: number[]) => {
  const parts: string[] = [];
  for (let k = c.length - 1; k >= 0; k--) {
    const a = c[k];
    if (!a) continue;
    const mag = Math.abs(a), body = k === 0 ? String(mag) : `${mag === 1 ? "" : mag}x${k > 1 ? sup(k) : ""}`;
    parts.push(parts.length ? `${a < 0 ? "−" : "+"} ${body}` : `${a < 0 ? "−" : ""}${body}`);
  }
  return parts.join(" ");
};

/** Roots of unity, the cyclotomic polynomial, and the Galois group (ℤ/n)ˣ acting by ζ ↦ ζᵏ. */
export function CyclotomicViz() {
  const [n, setN] = useState(12);
  const [k, setK] = useState(5);
  const units = Array.from({ length: n }, (_, i) => i).filter((i) => i > 0 && gcd(i, n) === 1);
  const kk = units.includes(k) ? k : units[units.length > 1 ? 1 : 0];
  const W = 300, R = 115, c = W / 2;
  const pt = (j: number) => [c + R * Math.cos((2 * Math.PI * j) / n), c - R * Math.sin((2 * Math.PI * j) / n)];
  const P = cyclo(n);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>n: <span className="mono">{n}</span></span><input type="range" min={2} max={24} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <span style={{ fontSize: 14 }}>automorphism ζ ↦ ζᵏ, k =</span>
        {units.map((u) => <button key={u} type="button" aria-pressed={kk === u} className={kk === u ? "viz-chip is-on" : "viz-chip"} onClick={() => setK(u)}>{u}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The n-th roots of unity, with the primitive ones filled" style={{ width: "100%", maxWidth: 320, display: "block", margin: "6px auto" }}>
        <defs><marker id="cyArrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker></defs>
        <circle cx={c} cy={c} r={R} style={{ fill: "none", stroke: "var(--border)" }} />
        {units.map((j) => {
          const t = (j * kk) % n;
          if (t === j) return null;
          const [x1, y1] = pt(j), [x2, y2] = pt(t);
          const len = Math.hypot(x2 - x1, y2 - y1);
          return <line key={j} x1={x1} y1={y1} x2={x2 - ((x2 - x1) / len) * 9} y2={y2 - ((y2 - y1) / len) * 9} markerEnd="url(#cyArrow)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.2 }} />;
        })}
        {Array.from({ length: n }, (_, j) => {
          const [x, y] = pt(j);
          const prim = units.includes(j);
          return (
            <g key={j}>
              <circle cx={x} cy={y} r={6} style={{ fill: prim ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
              <text x={c + (R + 16) * Math.cos((2 * Math.PI * j) / n)} y={c - (R + 16) * Math.sin((2 * Math.PI * j) / n) + 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{j}</text>
            </g>
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>Φ{String(n).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]).join("")}(x) = {show(P)}</div>
        <div>degree φ({n}) = {units.length}; primitive roots ζʲ with gcd(j, {n}) = 1: j = {units.join(", ")}</div>
        <div>Gal(ℚ(ζ)/ℚ) ≅ (ℤ/{n})ˣ, of order {units.length}; arrows show ζʲ ↦ ζ^({kk}j)</div>
      </div>
      <figcaption className="viz-caption">
        Point j is ζʲ with ζ = e^(2πi/{n}). The filled points, the primitive roots, are the roots of the irreducible cyclotomic
        polynomial. Each automorphism sends ζ to another primitive root ζᵏ, and so permutes the filled points.
      </figcaption>
    </figure>
  );
}
