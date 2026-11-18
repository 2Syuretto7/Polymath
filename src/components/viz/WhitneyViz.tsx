"use client";

import { useState } from "react";

const sup = (m: number) => String(m).split("").map((c) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(c)]).join("");

/** The dimension count behind Whitney's easy embedding theorem: when can we project from ℝᴺ to ℝᴺ⁻¹ and keep an embedding? */
export function WhitneyViz() {
  const [n, setN] = useState(2);
  const [N, setNN] = useState(7);
  const dirs = N - 1;
  const sec = 2 * n;
  const tan = 2 * n - 1;
  const okEmb = dirs > sec;
  const okImm = dirs > tan;
  const S = 22;
  const bar = (y: number, len: number, label: string, col: string) => (
    <g>
      <rect x={150} y={y} width={Math.max(2, len * S)} height={18} rx={3} style={{ fill: col }} />
      <text x={144} y={y + 13} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label}</text>
      <text x={150 + Math.max(2, len * S) + 6} y={y + 13} style={{ fill: "var(--text)", fontSize: 11 }}>{len}</text>
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>dimension of M: n = {n} <input type="range" min={1} max={4} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
        <label>ambient ℝᴺ: N = {N} <input type="range" min={2} max={12} value={N} onChange={(e) => setNN(Number(e.target.value))} aria-label="N" /></label>
      </div>
      <svg viewBox="0 0 520 130" role="img" aria-label="Dimensions of the bad directions against all directions" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {bar(12, dirs, "all directions", "var(--border-strong)")}
        {bar(44, sec, "secant directions", okEmb ? "var(--accent)" : "var(--danger)")}
        {bar(76, tan, "tangent directions", okImm ? "var(--accent-soft)" : "var(--danger)")}
        <text x={150} y={122} style={{ fill: "var(--text-faint)", fontSize: 10 }}>dimensions, in the space ℝPᴺ⁻¹ of directions in ℝᴺ</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {okEmb
          ? `${dirs} > ${sec}: by Sard, some direction is neither secant nor tangent. Projecting along it gives an embedding in ℝ${sup(N - 1)}.`
          : okImm
            ? `${dirs} ≤ ${sec}: the secant directions may fill everything, so projection can create crossings. But ${dirs} > ${tan}, so an immersion survives.`
            : `${dirs} ≤ ${tan}: even tangent directions may fill every direction. The projection argument stops here.`}
      </p>
      <p style={{ fontSize: 13, margin: "4px 0" }}>
        The argument reaches embeddings in ℝ<sup>{2 * n + 1}</sup> and immersions in ℝ<sup>{2 * n}</sup>. Whitney&rsquo;s harder
        theorems improve these to ℝ<sup>{2 * n}</sup> and{n > 1 ? <> ℝ<sup>{2 * n - 1}</sup></> : " (for n = 1, still ℝ²)"}.
      </p>
      <figcaption className="viz-caption">
        Secant directions come from pairs of points of M, a 2n-dimensional family; tangent directions from the unit tangent
        bundle, of dimension 2n − 1. A smooth image of a manifold of lower dimension has measure zero, so a good direction
        exists when there are more directions than bad ones.
      </figcaption>
    </figure>
  );
}
