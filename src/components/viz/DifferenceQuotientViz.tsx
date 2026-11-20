"use client";

import { useState } from "react";

/** The L² norm on (−1, 1 − h) of the difference quotient of u(x) = |x|^α. */
export function dqNorm(alpha: number, h: number) {
  const u = (x: number) => Math.pow(Math.abs(x), alpha);
  const N = 6000;
  let s = 0;
  const L = 2 - h;
  for (let i = 0; i < N; i++) {
    const x = -1 + ((i + 0.5) * L) / N;
    const q = (u(x + h) - u(x)) / h;
    s += q * q;
  }
  return Math.sqrt((s * L) / N);
}

export function DifferenceQuotientViz() {
  const [alpha, setAlpha] = useState(1);
  const hs = [0.4, 0.2, 0.1, 0.05, 0.025, 0.0125, 0.00625];
  const vals = hs.map((h) => dqNorm(alpha, h));
  const max = Math.max(...vals, 2);
  const X = (i: number) => 60 + i * 70;
  const Y = (v: number) => 170 - (v / max) * 150;
  const bounded = alpha > 0.5;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>u(x) = |x| to the power α, with α = {alpha.toFixed(2)} <input type="range" min={0.3} max={1.5} step={0.1} value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} aria-label="alpha" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The norm of the difference quotient as h shrinks" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={170} x2={530} y2={170} style={{ stroke: "var(--border-strong)" }} />
        {vals.map((v, i) => (
          <g key={i}>
            <rect x={X(i) - 18} y={Y(v)} width={36} height={170 - Y(v)} rx={3} style={{ fill: bounded ? "var(--accent)" : "var(--danger)" }} />
            <text x={X(i)} y={186} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>h = {hs[i]}</text>
            <text x={X(i)} y={Y(v) - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v.toFixed(2)}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {bounded
          ? `α = ${alpha.toFixed(2)} > 1/2: u′ lies in L², and the norms of the difference quotients stay bounded, approaching ‖u′‖ = ${(alpha * Math.sqrt(2 / (2 * alpha - 1))).toFixed(2)}.`
          : `α = ${alpha.toFixed(2)} ≤ 1/2: u′ is not in L², and the norms grow without bound as h shrinks.`}
      </p>
      <figcaption className="viz-caption">
        The difference quotient (u(x + h) − u(x))/h needs no derivative to define. A function lies in W¹˒² exactly when
        these quotients are bounded in L² as h tends to 0. Regularity proofs bound the difference quotients of Du using the
        equation, and conclude that the second derivatives exist.
      </figcaption>
    </figure>
  );
}
