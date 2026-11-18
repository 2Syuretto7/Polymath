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

const DATA = [3.1, 4.7, 2.2, 5.9, 3.8, 7.4, 4.1, 2.9, 6.3, 3.5, 4.4, 9.8, 3.0, 5.2, 4.0];
const median = (xs: number[]) => {
  const s = [...xs].sort((a, b) => a - b), m = s.length >> 1;
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};
const mean = (xs: number[]) => xs.reduce((a, b) => a + b, 0) / xs.length;

/** Resampling one sample with replacement to see how much its median would vary. */
export function BootstrapViz() {
  const [B, setB] = useState(1000);
  const [stat, setStat] = useState<"median" | "mean">("median");
  const [seed, setSeed] = useState(1);
  const f = stat === "median" ? median : mean;
  const r = rng(seed * 7717 + 3);
  const n = DATA.length;
  const reps: number[] = [];
  let first: number[] = [];
  for (let b = 0; b < B; b++) {
    const res = Array.from({ length: n }, () => DATA[Math.floor(r() * n)]);
    if (b === 0) first = res;
    reps.push(f(res));
  }
  const m = mean(reps);
  const se = Math.sqrt(reps.reduce((a, x) => a + (x - m) ** 2, 0) / (B - 1));
  const sorted = [...reps].sort((a, b) => a - b);
  const lo = sorted[Math.floor(0.025 * B)], hi = sorted[Math.ceil(0.975 * B) - 1];
  const bins = 30, xmin = 2, xmax = 8;
  const counts = Array(bins).fill(0);
  reps.forEach((x) => { const k = Math.min(bins - 1, Math.max(0, Math.floor(((x - xmin) / (xmax - xmin)) * bins))); counts[k]++; });
  const top = Math.max(...counts);
  const X = (x: number) => 20 + ((x - xmin) / (xmax - xmin)) * 480;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>bootstrap resamples B: <span className="mono">{B}</span></span>
          <input type="range" min={50} max={4000} step={50} value={B} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <div className="segmented" role="group" aria-label="statistic">
          <button type="button" aria-pressed={stat === "median"} className={stat === "median" ? "seg is-on" : "seg"} onClick={() => setStat("median")}>median</button>
          <button type="button" aria-pressed={stat === "mean"} className={stat === "mean" ? "seg is-on" : "seg"} onClick={() => setStat("mean")}>mean</button>
        </div>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>Resample again</button>
      </div>
      <p className="viz-caption">The sample (n = 15): <span className="mono">{DATA.map((v) => v.toFixed(1)).join(", ")}</span></p>
      <p className="viz-caption" style={{ marginTop: 0 }}>First resample: <span className="mono">{first.map((v) => v.toFixed(1)).join(", ")}</span></p>
      <svg viewBox="0 0 520 170" role="img" aria-label="Histogram of bootstrap replicates" style={{ width: "100%", display: "block" }}>
        {counts.map((c, i) => (
          <rect key={i} x={X(xmin + (i * (xmax - xmin)) / bins) + 1} y={140 - (c / top) * 120} width={480 / bins - 2} height={(c / top) * 120} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        ))}
        <line x1={X(lo)} y1={14} x2={X(lo)} y2={140} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <line x1={X(hi)} y1={14} x2={X(hi)} y2={140} style={{ stroke: "var(--text-muted)", strokeDasharray: "3 3" }} />
        <line x1={X(f(DATA))} y1={8} x2={X(f(DATA))} y2={140} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        <line x1={20} y1={140} x2={500} y2={140} style={{ stroke: "var(--border)" }} />
        {[2, 3, 4, 5, 6, 7, 8].map((t) => <text key={t} x={X(t) - 3} y={156} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>sample {stat}: {f(DATA).toFixed(2)}</div>
        <div>bootstrap standard error: {se.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>95% percentile interval: ({lo.toFixed(2)}, {hi.toFixed(2)})</div>
      </div>
      <figcaption className="viz-caption">
        Each resample draws 15 values from the sample with replacement, so some values repeat and others are left out. The
        spread of the statistic across resamples stands in for its spread across new samples from the population, which we
        cannot draw. The dashed lines cut off 2.5% of the replicates at each end.
      </figcaption>
    </figure>
  );
}
