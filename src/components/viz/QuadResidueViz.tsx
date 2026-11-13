"use client";

import { useState } from "react";
import { isPrime, modpow } from "./ntTools";

const PR = [7, 11, 13, 17, 19, 23, 29];

/** Squaring modulo a prime: each non-zero square is hit exactly twice, so exactly half the non-zero residues are squares. */
export function QuadResidueViz() {
  const [p, setP] = useState(13);
  const [a, setA] = useState(10);
  const A = Math.min(a, p - 1);
  const xs = Array.from({ length: p - 1 }, (_, i) => i + 1);
  const sq = new Set(xs.map((x) => (x * x) % p));
  const roots = xs.filter((x) => (x * x) % p === A);
  const euler = modpow(A, (p - 1) / 2, p);
  const W = 560, H = 150, dx = (W - 40) / (p - 2), X = (i: number) => 20 + (i - 1) * dx;
  const rr = Math.min(10, dx / 2.4);
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>prime p:</span>
        {PR.filter(isPrime).map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "viz-chip is-on" : "viz-chip"} onClick={() => setP(q)}>{q}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>a: <span className="mono">{A}</span></span>
          <input type="range" min={1} max={p - 1} step={1} value={A} onChange={(e) => setA(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Squares modulo ${p}`} style={{ width: "100%", display: "block", marginTop: 6 }}>
        {xs.map((x) => { const y = (x * x) % p, hit = y === A; return <line key={`l${x}`} x1={X(x)} y1={34} x2={X(y)} y2={112} style={{ stroke: hit ? "var(--accent)" : "var(--border)", strokeWidth: hit ? 2.5 : 1 }} />; })}
        {xs.map((x) => (
          <g key={x}>
            <circle cx={X(x)} cy={26} r={rr} style={{ fill: roots.includes(x) ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
            <text x={X(x)} y={12} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>
            <circle cx={X(x)} cy={120} r={rr} style={{ fill: sq.has(x) ? "var(--accent)" : "var(--bg)", fillOpacity: sq.has(x) ? 0.3 : 1, stroke: x === A ? "var(--text)" : "var(--border)", strokeWidth: x === A ? 2.5 : 1 }} />
            <text x={X(x)} y={144} textAnchor="middle" style={{ fill: x === A ? "var(--text)" : "var(--text-muted)", fontSize: 10, fontWeight: x === A ? 700 : 400 }}>{x}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>
        squares mod {p}: {[...sq].sort((u, v) => u - v).join(", ")} ({sq.size} of {p - 1})
      </p>
      <p className={roots.length ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "6px 0" }}>
        {roots.length ? `${A} is a quadratic residue: x² ≡ ${A} for x = ${roots.join(" and ")}.` : `${A} is a non-residue: no x has x² ≡ ${A} (mod ${p}).`}
      </p>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>Euler&rsquo;s criterion: {A}^{(p - 1) / 2} mod {p} = {euler === p - 1 ? `${euler} ≡ −1` : euler}</p>
      <figcaption className="viz-caption">
        The top row is squared onto the bottom row. Since x and p − x have the same square, each shaded residue is hit exactly twice, and exactly (p − 1)/2 of the non-zero residues are squares. Euler&rsquo;s criterion tells them apart without searching: a^((p−1)/2) is 1 for a residue and −1 for a non-residue.
      </figcaption>
    </figure>
  );
}
