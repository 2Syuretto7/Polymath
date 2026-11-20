"use client";

import { useState } from "react";

function binom(n: number, k: number) {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - i + 1)) / i;
  return r;
}

/** Everett: after n measurements every sequence of outcomes occurs on some branch; branch counts and branch weights differ. */
export function BranchWeightViz() {
  const [n, setN] = useState(4);
  const [p, setP] = useState(0.8);
  const ks = Array.from({ length: n + 1 }, (_, k) => k);
  const counts = ks.map((k) => binom(n, k));
  const weights = ks.map((k) => binom(n, k) * p ** k * (1 - p) ** (n - k));
  const maxC = Math.max(...counts);
  const maxW = Math.max(...weights);
  const bw = Math.min(40, 220 / (n + 1));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>measurements n = {n} <input type="range" min={1} max={10} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>Born weight of up = {p.toFixed(2)} <input type="range" min={0.5} max={0.95} step={0.05} value={p} onChange={(e) => setP(Number(e.target.value))} aria-label="p" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="Number of branches and total weight against number of up results" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>number of branches, by count of ups</text>
        <text x={290} y={18} style={{ fill: "var(--text-muted)", fontSize: 11 }}>total weight, by count of ups</text>
        {ks.map((k) => (
          <g key={k}>
            <rect x={20 + k * (bw + 2)} y={160 - (counts[k] / maxC) * 120} width={bw} height={(counts[k] / maxC) * 120} style={{ fill: "var(--accent)" }} />
            <text x={20 + k * (bw + 2) + bw / 2} y={176} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>
            <rect x={290 + k * (bw + 2)} y={160 - (weights[k] / maxW) * 120} width={bw} height={(weights[k] / maxW) * 120} style={{ fill: "var(--success)" }} />
            <text x={290 + k * (bw + 2) + bw / 2} y={176} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {2 ** n} branches after {n} measurements. Most branches have about {n / 2} ups; most weight lies near {(n * p).toFixed(1)} ups.
      </p>
      <figcaption className="viz-caption">
        On Everett&rsquo;s view every outcome of every measurement occurs, each on its own branch. Counting branches would
        make a half-and-half record typical whatever the amplitudes. Weighting branches by squared amplitude recovers the
        Born rule. Why weight, rather than number, should guide expectation is the probability problem for many worlds.
      </figcaption>
    </figure>
  );
}
