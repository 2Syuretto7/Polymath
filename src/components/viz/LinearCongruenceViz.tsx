"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** The map x ↦ ax mod n, and when ax ≡ b (mod n) can be solved. */
export function LinearCongruenceViz() {
  const [n, setN] = useState(12);
  const [a, setA] = useState(8);
  const [b, setB] = useState(4);
  const A = a % n, Bv = b % n;
  const g = gcd(A, n);
  const sols = Array.from({ length: n }, (_, x) => x).filter((x) => (A * x) % n === Bv);
  const image = new Set(Array.from({ length: n }, (_, x) => (A * x) % n));
  const W = 560, H = 150, dx = (W - 40) / Math.max(n - 1, 1), X = (i: number) => 20 + i * dx;
  const r = Math.min(10, dx / 2.4);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>modulus n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={24} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>a: <span className="mono">{A}</span></span>
          <input type="range" min={0} max={23} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b: <span className="mono">{Bv}</span></span>
          <input type="range" min={0} max={23} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`The map x to ${A}x modulo ${n}`} style={{ width: "100%", display: "block", marginTop: 6 }}>
        {Array.from({ length: n }, (_, x) => {
          const y = (A * x) % n, hit = sols.includes(x);
          return <line key={`l${x}`} x1={X(x)} y1={34} x2={X(y)} y2={112} style={{ stroke: hit ? "var(--accent)" : "var(--border)", strokeWidth: hit ? 2.5 : 1 }} />;
        })}
        {Array.from({ length: n }, (_, x) => (
          <g key={x}>
            <circle cx={X(x)} cy={26} r={r} style={{ fill: sols.includes(x) ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
            <text x={X(x)} y={12} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>
            <circle cx={X(x)} cy={120} r={r} style={{ fill: image.has(x) ? "var(--accent)" : "var(--bg)", fillOpacity: image.has(x) ? 0.3 : 1, stroke: x === Bv ? "var(--text)" : "var(--border)", strokeWidth: x === Bv ? 2.5 : 1 }} />
            <text x={X(x)} y={144} textAnchor="middle" style={{ fill: x === Bv ? "var(--text)" : "var(--text-muted)", fontSize: 10, fontWeight: x === Bv ? 700 : 400 }}>{x}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>
        gcd({A}, {n}) = {g}; the values of {A}x mod {n} are the multiples of {g || n}
      </p>
      <p className={sols.length ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "6px 0" }}>
        {sols.length
          ? `${A}x ≡ ${Bv} (mod ${n}) has ${sols.length} solution${sols.length > 1 ? "s" : ""}: x ≡ ${sols.join(", ")}.`
          : `${A}x ≡ ${Bv} (mod ${n}) has no solution, because ${g} does not divide ${Bv}.`}
      </p>
      <figcaption className="viz-caption">
        Each residue x on the top row is sent to {A}x mod {n} on the bottom row. Shaded residues are hit; the outlined one is b. The congruence is solvable exactly when gcd(a, n) divides b, and then it has gcd(a, n) solutions. When gcd(a, n) = 1 the map is a bijection and a has an inverse.
      </figcaption>
    </figure>
  );
}
