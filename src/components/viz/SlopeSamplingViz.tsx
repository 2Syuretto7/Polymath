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

const REPS = 1500;
const TRUE_B = 0.5;

/** Repeated samples from y = 1 + 0.5x + noise: the spread of the fitted slope matches σ/√Sxx. */
export function SlopeSamplingViz() {
  const [n, setN] = useState(10);
  const [sigma, setSigma] = useState(1);
  const [seed, setSeed] = useState(2);
  const r = rng(seed * 31337 + n * 101 + Math.round(sigma * 1000));
  const xs = Array.from({ length: n }, (_, i) => i + 1);
  const xb = (n + 1) / 2;
  const sxx = xs.reduce((s, x) => s + (x - xb) ** 2, 0);
  const gauss = () => { const u = Math.max(r(), 1e-12), v = r(); return Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v); };
  const slopes = Array.from({ length: REPS }, () => {
    let sxy = 0;
    xs.forEach((x) => { const y = 1 + TRUE_B * x + sigma * gauss(); sxy += (x - xb) * y; });
    return sxy / sxx;
  });
  const se = sigma / Math.sqrt(sxx);
  const m = slopes.reduce((a, b) => a + b, 0) / REPS;
  const sd = Math.sqrt(slopes.reduce((a, b) => a + (b - m) ** 2, 0) / (REPS - 1));
  const lo = -0.5, hi = 1.5, bins = 40;
  const counts = Array(bins).fill(0);
  slopes.forEach((s) => { const k = Math.floor(((s - lo) / (hi - lo)) * bins); if (k >= 0 && k < bins) counts[k]++; });
  const w = (hi - lo) / bins;
  const peak = Math.max(...counts, (REPS * w) / (se * Math.sqrt(2 * Math.PI)));
  const X = (x: number) => 20 + ((x - lo) / (hi - lo)) * 480, Y = (c: number) => 150 - (c / peak) * 130;
  const curve = Array.from({ length: 201 }, (_, i) => lo + ((hi - lo) * i) / 200)
    .map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y((REPS * w * Math.exp(-((x - TRUE_B) ** 2) / (2 * se * se))) / (se * Math.sqrt(2 * Math.PI))).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>points per sample n: <span className="mono">{n}</span></span>
          <input type="range" min={3} max={40} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>noise σ: <span className="mono">{sigma.toFixed(1)}</span></span>
          <input type="range" min={0.2} max={3} step={0.1} value={sigma} onChange={(e) => setSigma(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Histogram of fitted slopes" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {counts.map((c, i) => <rect key={i} x={X(lo + i * w) + 1} y={Y(c)} width={480 / bins - 2} height={150 - Y(c)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />)}
        <path d={curve} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.8 }} />
        <line x1={X(TRUE_B)} y1={10} x2={X(TRUE_B)} y2={150} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <line x1={20} y1={150} x2={500} y2={150} style={{ stroke: "var(--border)" }} />
        {[-0.5, 0, 0.5, 1, 1.5].map((t) => <text key={t} x={X(t) - 8} y={165} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>Simulate again</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>x values 1, 2, …, {n}; Sxx = {sxx.toFixed(1)}</div>
        <div>spread of the {REPS} fitted slopes: {sd.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>theory, σ/√Sxx: {se.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        Each simulated sample has y = 1 + 0.5x plus independent normal noise with standard deviation σ. The histogram shows
        the least-squares slopes; the curve is the normal distribution with mean 0.5 and standard deviation σ/√Sxx. More
        points, or points more spread out in x, make Sxx larger and the slope more precise.
      </figcaption>
    </figure>
  );
}
