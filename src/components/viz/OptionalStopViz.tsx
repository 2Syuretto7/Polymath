"use client";

import { useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => { s = (s * 1664525 + 1013904223) >>> 0; return s / 4294967296; };
}

/** Simple random walk stopped at T = first time it reaches +1, observed up to time n. */
export function OptionalStopViz() {
  const [lg, setLg] = useState(4);
  const n = 2 ** lg;
  const r = rng(7);
  const M = 4000;
  let stopped = 0, sumAll = 0, sumUn = 0;
  const shown: number[][] = [];
  for (let j = 0; j < M; j++) {
    let x = 0, k = 0;
    const p = [0];
    while (k < n && x < 1) { x += r() < 0.5 ? 1 : -1; k++; if (j < 12) p.push(x); }
    if (x >= 1) stopped++; else sumUn += x;
    sumAll += x;
    if (j < 12) shown.push(p);
  }
  const un = M - stopped;
  const X0 = 40, W = 450, Y0 = 12, H = 160;
  const lo = -Math.max(8, Math.ceil(2.5 * Math.sqrt(n)));
  const x = (k: number) => X0 + (k / n) * W;
  const y = (v: number) => Y0 + ((1.5 - v) / (1.5 - lo)) * H;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>observe up to time n = {n} <input type="range" min={1} max={12} value={lg} onChange={(e) => setLg(Number(e.target.value))} aria-label="horizon" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Random walk paths stopped on reaching 1" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={y(1)} x2={X0 + W} y2={y(1)} style={{ stroke: "var(--success)", strokeDasharray: "4 3" }} />
        <text x={X0 + W + 4} y={y(1) + 4} style={{ fill: "var(--success)", fontSize: 10 }}>1</text>
        <text x={X0 - 6} y={y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        <text x={X0 - 6} y={y(lo) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>−{-lo}</text>
        {shown.map((p, i) => <polyline key={i} points={p.map((v, k) => `${x(k)},${y(Math.max(v, lo))}`).join(" ")} style={{ fill: "none", stroke: p[p.length - 1] >= 1 ? "var(--accent)" : "var(--danger)", strokeWidth: 1.5, opacity: 0.7 }} />)}
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div>Stopped by time n: {(100 * stopped / M).toFixed(1)}% of 4000 walks, each at value 1.</div>
        <div>Still running: average value {un ? (sumUn / un).toFixed(2) : "none"}.</div>
        <div style={{ fontWeight: 700 }}>Simulated average of X at time min(T, n): {(sumAll / M).toFixed(3)}. The exact mean is 0; rare deep walks make the estimate noisy.</div>
      </div>
      <figcaption className="viz-caption">
        A fair ±1 walk from 0 stops when it first reaches 1. It reaches 1 with probability 1, so X at time T is always 1
        and its expected value at T is 1, not 0. Yet at every fixed time n the stopped walk has mean exactly 0: the few walks still running
        (red) sit far below zero. T is not bounded, and that is where optional stopping fails.
      </figcaption>
    </figure>
  );
}
