"use client";

import { useState } from "react";

// enumerate the rationals in [0, 1] by denominator: 0, 1, 1/2, 1/3, 2/3, 1/4, 3/4, …
const Q: [number, number][] = [];
for (let q = 1; Q.length < 60; q++) for (let p = 0; p <= q; p++) {
  let a = p, b = q; while (b) [a, b] = [b, a % b];
  if (a === 1 || (p === 0 && q === 1)) Q.push([p, q]);
}

/** Nested closed intervals that dodge the n-th rational at step n: their common point is irrational, so ℚ ∩ [0, 1] is not all of [0, 1]. */
export function BaireGameViz() {
  const [k, setK] = useState(0);
  const ivs: [number, number][] = [[0, 1]];
  for (let i = 0; i < k; i++) {
    const [a, b] = ivs[i], r = Q[i][0] / Q[i][1];
    // split into thirds and keep a third whose closure avoids r
    const thirds: [number, number][] = [[a, a + (b - a) / 3], [a + (b - a) / 3, a + (2 * (b - a)) / 3], [a + (2 * (b - a)) / 3, b]];
    ivs.push(thirds.find(([u, v]) => r < u || r > v) ?? thirds[0]);
  }
  const [lo, hi] = ivs[k];
  const W = 600, H = 60 + 14 * Math.min(k + 1, 13), pl = 20;
  const X = (x: number) => pl + x * (W - 2 * pl);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={k >= 30} onClick={() => setK(k + 1)}>Dodge the next rational</button>
        <button type="button" className="btn" onClick={() => setK(0)}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Nested intervals avoiding rationals one by one" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={30} x2={X(1)} y2={30} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        <text x={X(0)} y={18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        {Q.slice(0, k).map(([p, q], i) => <line key={i} x1={X(p / q)} y1={24} x2={X(p / q)} y2={36} style={{ stroke: "var(--danger)", strokeWidth: 1.5 }} />)}
        {ivs.slice(Math.max(0, k - 12), k + 1).map(([a, b], i) => <rect key={i} x={X(a)} y={44 + i * 14} width={Math.max(1.5, X(b) - X(a))} height={9} rx={2} style={{ fill: "var(--accent)", fillOpacity: 0.35 + 0.65 * ((i + 1) / Math.min(k + 1, 13)) }} />)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>step {k}: {k ? `avoided ${Q[k - 1][0]}/${Q[k - 1][1]}` : "start with [0, 1]"}</div>
        <div>current interval [{lo.toFixed(8)}, {hi.toFixed(8)}]</div>
      </div>
      <figcaption className="viz-caption">
        The red ticks are the rationals listed so far. At step n the closed interval shrinks to a third that misses the n-th
        rational. By completeness the nested intervals share a point, and it differs from every rational. Baire&rsquo;s theorem
        generalises this: a complete metric space is never a countable union of nowhere dense closed sets, such as single points.
      </figcaption>
    </figure>
  );
}
