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

const choose = (n: number, k: number) => {
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return r;
};

/** The k-th smallest of n uniform draws: its density, its mean k/(n + 1), and one sample. */
export function OrderStatViz() {
  const [n, setN] = useState(5);
  const [kRaw, setK] = useState(3);
  const [seed, setSeed] = useState(1);
  const k = Math.min(kRaw, n);
  const c = n * choose(n - 1, k - 1);
  const dens = (x: number) => c * Math.pow(x, k - 1) * Math.pow(1 - x, n - k);
  const xs = Array.from({ length: 301 }, (_, i) => i / 300);
  const vals = xs.map(dens);
  const top = Math.max(1.2, ...vals);
  const mean = k / (n + 1);
  let below = 0;
  for (let j = k; j <= n; j++) below += choose(n, j) / Math.pow(2, n);
  const r = rng(seed * 1009 + n);
  const sample = Array.from({ length: n }, () => r()).sort((a, b) => a - b);
  const X = (x: number) => 30 + x * 460, Y = (v: number) => 150 - (v / top) * 130;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={15} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>rank k: <span className="mono">{k}</span></span>
          <input type="range" min={1} max={n} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed((s) => s + 1)}>draw a new sample</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Density of the k-th order statistic" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={vals.map((v, i) => `${i ? "L" : "M"}${X(xs[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <line x1={X(mean)} y1={Y(0)} x2={X(mean)} y2={20} style={{ stroke: "var(--text)", strokeWidth: 1.4, strokeDasharray: "4 3" }} />
        <text x={mean > 0.7 ? X(mean) - 4 : X(mean) + 4} y={30} textAnchor={mean > 0.7 ? "end" : "start"} style={{ fill: "var(--text)", fontSize: 11 }}>mean {mean.toFixed(3)}</text>
        {sample.map((s, i) => (
          <circle key={i} cx={X(s)} cy={178} r={i === k - 1 ? 6 : 4} style={{ fill: i === k - 1 ? "var(--accent)" : "var(--text-faint)" }} />
        ))}
        {[0, 0.25, 0.5, 0.75, 1].map((x) => <text key={x} x={X(x) - 8} y={Y(0) + 14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>E[X₍ₖ₎] = k/(n + 1) = {mean.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>P(X₍ₖ₎ ≤ 0.5) = {below.toFixed(4)}</div>
        <div>this sample: the larger dot is the {k}{k === 1 ? "st" : k === 2 ? "nd" : k === 3 ? "rd" : "th"} smallest, {sample[k - 1].toFixed(3)}</div>
      </div>
      <figcaption className="viz-caption">
        Draw n numbers independently and uniformly from [0, 1] and sort them. The curve is the density of the k-th smallest,
        X₍ₖ₎, which is a beta density with parameters k and n − k + 1. The dots along the bottom are one sample, with its
        k-th smallest marked. On average the n points cut [0, 1] into n + 1 gaps of equal expected length, which is why
        the mean is k/(n + 1).
      </figcaption>
    </figure>
  );
}
