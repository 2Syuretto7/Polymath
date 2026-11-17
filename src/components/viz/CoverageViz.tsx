"use client";

import { useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const erfc = (z: number): number => {
  const a = Math.abs(z), s = 1 / (1 + 0.5 * a);
  const r = s * Math.exp(-a * a - 1.26551223 + s * (1.00002368 + s * (0.37409196 + s * (0.09678418 + s * (-0.18628806 + s * (0.27886807 + s * (-1.13520398 + s * (1.48851587 + s * (-0.82215223 + s * 0.17087277)))))))));
  return z >= 0 ? r : 2 - r;
};
const Phi = (x: number) => 0.5 * erfc(-x / Math.SQRT2);
const zUpper = (alpha: number) => {
  let lo = -10, hi = 10;
  for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (1 - Phi(m) > alpha) lo = m; else hi = m; }
  return (lo + hi) / 2;
};

const K = 50;

/** Fifty confidence intervals for a normal mean: the level is a long-run rate of covering the truth. */
export function CoverageViz() {
  const [n, setN] = useState(25);
  const [level, setLevel] = useState(0.95);
  const [seed, setSeed] = useState(3);
  const r = rng(seed * 104729 + 1);
  const means = Array.from({ length: K }, () => {
    const u = Math.max(r(), 1e-12), v = r();
    return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
  }).map((z) => z / Math.sqrt(n));
  const z = zUpper((1 - level) / 2);
  const h = z / Math.sqrt(n);
  const cover = means.filter((m) => Math.abs(m) <= h).length;
  const span = 1.6;
  const X = (x: number) => 260 + (x / span) * 240;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={4} max={100} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>confidence level: <span className="mono">{level.toFixed(2)}</span></span>
          <input type="range" min={0.5} max={0.99} step={0.01} value={level} onChange={(e) => setLevel(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 330" role="img" aria-label="Fifty confidence intervals" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={6} x2={X(0)} y2={314} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        {means.map((m, i) => {
          const ok = Math.abs(m) <= h;
          const y = 10 + i * 6;
          return (
            <g key={i}>
              <line x1={X(Math.max(m - h, -span))} y1={y} x2={X(Math.min(m + h, span))} y2={y} style={{ stroke: ok ? "var(--accent)" : "var(--danger)", strokeWidth: ok ? 2 : 3 }} />
              <circle cx={X(m)} cy={y} r={1.8} style={{ fill: "var(--text)" }} />
            </g>
          );
        })}
        <text x={X(0) + 4} y={326} style={{ fill: "var(--text-muted)", fontSize: 11 }}>true mean μ = 0</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>Draw fifty new samples</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>interval: sample mean ± {z.toFixed(3)}/√n = sample mean ± {h.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>intervals covering μ: {cover} of {K} (expected about {(K * level).toFixed(1)})</div>
      </div>
      <figcaption className="viz-caption">
        Each line is the interval computed from one sample of size n from N(0, 1); the thicker red lines miss the true mean.
        The confidence level is the proportion of intervals that cover the truth in the long run. Any single interval either
        covers μ or does not; the probability belongs to the procedure, not to the interval you happen to have.
      </figcaption>
    </figure>
  );
}
