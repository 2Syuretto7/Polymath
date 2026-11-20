"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const N = 2 ** 14;

/** Quadratic variation of a Brownian path tends to t; total variation blows up. */
export function BrownianVariationViz() {
  const [k, setK] = useState(4);
  const [seed, setSeed] = useState(2);
  const r = seededRng(seed * 31 + 5);
  const B = [0];
  for (let i = 0; i < N; i++) B.push(B[i] + normalDraw(r) / Math.sqrt(N));
  const m = 2 ** k, step = N / m;
  let qv = 0, tv = 0;
  const coarse: number[] = [];
  for (let j = 0; j <= m; j++) coarse.push(B[j * step]);
  for (let j = 0; j < m; j++) { const d = coarse[j + 1] - coarse[j]; qv += d * d; tv += Math.abs(d); }
  const lo = Math.min(...B) - 0.1, hi = Math.max(...B) + 0.1;
  const X0 = 40, W = 450, Y0 = 12, H = 160;
  const x = (s: number) => X0 + s * W;
  const y = (v: number) => Y0 + ((hi - v) / (hi - lo)) * H;
  const thin = B.filter((_, i) => i % 16 === 0);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>mesh: {m} intervals <input type="range" min={1} max={14} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="mesh" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A Brownian path sampled on a partition" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polyline points={thin.map((v, i) => `${x(i / (thin.length - 1))},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />
        {m <= 256 && <polyline points={coarse.map((v, j) => `${x(j / m)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />}
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div style={{ fontWeight: 700 }}>Σ (ΔB)² = {qv.toFixed(4)} (tends to t = 1)</div>
        <div style={{ fontWeight: 700 }}>Σ |ΔB| = {tv.toFixed(2)} (about √(2m/π) = {Math.sqrt((2 * m) / Math.PI).toFixed(2)}, which grows without bound)</div>
      </div>
      <figcaption className="viz-caption">
        Grey: one Brownian path on [0, 1], simulated with 16 384 steps. Violet: the same path sampled at m equally spaced
        times. As the mesh shrinks, the sum of squared increments settles at 1, while the sum of absolute increments grows
        like √m. A Brownian path has finite quadratic variation but infinite length.
      </figcaption>
    </figure>
  );
}
