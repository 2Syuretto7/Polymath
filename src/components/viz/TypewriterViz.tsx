"use client";

import { useState } from "react";

/** The n-th typewriter interval, n ≥ 1: write n = 2ᵏ + j with 0 ≤ j < 2ᵏ, and take [j/2ᵏ, (j + 1)/2ᵏ]. */
export function typewriter(n: number): { k: number; a: number; b: number } {
  const k = Math.floor(Math.log2(n));
  const j = n - 2 ** k;
  return { k, a: j / 2 ** k, b: (j + 1) / 2 ** k };
}

const X0 = 0.3;

/** A sequence converging to 0 in L¹ but at no point, with a subsequence converging almost everywhere. */
export function TypewriterViz() {
  const [n, setN] = useState(5);
  const { k, a, b } = typewriter(n);
  const X = (x: number) => 30 + x * 460;
  const vals = Array.from({ length: 63 }, (_, i) => { const t = typewriter(i + 1); return X0 >= t.a && X0 < t.b ? 1 : 0; });
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 210" role="img" aria-label="An indicator of a short interval, and the values at one point" style={{ width: "100%", display: "block" }}>
        <rect x={X(a)} y={30} width={X(b) - X(a)} height={70} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(0)} y1={100} x2={X(1)} y2={100} style={{ stroke: "var(--text-muted)" }} />
        <line x1={X(X0)} y1={20} x2={X(X0)} y2={108} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <text x={X(X0)} y={120} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x = 0.3</text>
        <text x={X(0)} y={120} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={120} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <text x={30} y={146} style={{ fill: "var(--text-muted)", fontSize: 11 }}>fₙ(0.3) for n = 1 to 63 (subsequence n = 2ᵏ ringed):</text>
        {vals.map((v, i) => {
          const isSub = Number.isInteger(Math.log2(i + 1));
          return <g key={i}>
            <rect x={30 + i * 7.3} y={v ? 156 : 176} width={6} height={v ? 24 : 4} style={{ fill: i + 1 === n ? "var(--accent)" : v ? "var(--text)" : "var(--border-strong)" }} />
            {isSub && <circle cx={33 + i * 7.3} cy={194} r={3} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />}
          </g>;
        })}
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          n = {n}{" "}
          <input type="range" min={1} max={63} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        fₙ = indicator of [{a.toFixed(5).replace(/0+$/, "").replace(/\.$/, "")}, {b.toFixed(5).replace(/0+$/, "").replace(/\.$/, "")}]. ‖fₙ‖₁ = 1/{2 ** k}.
      </p>
      <figcaption className="viz-caption">
        The intervals sweep across [0, 1] again and again, each pass with intervals half as long. So ‖fₙ‖₁ → 0, yet every
        point is covered once in each pass, and fₙ(x) converges at no x. The subsequence of intervals [0, 1/2ᵏ] does converge
        to 0 at every x &gt; 0, as the proof of completeness predicts.
      </figcaption>
    </figure>
  );
}
