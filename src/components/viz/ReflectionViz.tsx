"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const Phi = (z: number) => {
  const t = 1 / (1 + 0.2316419 * Math.abs(z));
  const d = 0.3989423 * Math.exp(-z * z / 2);
  const p = d * t * (0.3193815 + t * (-0.3565638 + t * (1.781478 + t * (-1.821256 + t * 1.330274))));
  return z > 0 ? 1 - p : p;
};

/** Reflection principle: reflect the path after it first hits a, so P(max over [0, 1] ≥ a) = 2P(B₁ ≥ a). */
export function ReflectionViz() {
  const [a10, setA] = useState(10);
  const a = a10 / 10;
  const N = 1000, dt = 1 / N;
  const r = seededRng(23);
  const show: number[] = [];
  let hitIdx = -1;
  for (let k = 0, b = 0; k <= N; k++) {
    show.push(b);
    if (hitIdx < 0 && b >= a) hitIdx = k;
    b += Math.sqrt(dt) * normalDraw(r);
  }
  const refl = show.map((v, k) => (hitIdx >= 0 && k > hitIdx ? 2 * a - v : v));
  const M = 3000, r2 = seededRng(99);
  let hits = 0;
  for (let j = 0; j < M; j++) {
    let b = 0, mx = 0;
    for (let k = 0; k < 400; k++) { b += normalDraw(r2) / 20; if (b > mx) mx = b; }
    if (mx >= a) hits++;
  }
  const exact = 2 * (1 - Phi(a));
  const X0 = 30, W = 460, Y0 = 12, H = 160, lo = -2.5, hi = 3.5;
  const x = (k: number) => X0 + (k / N) * W;
  const y = (v: number) => Y0 + ((hi - Math.max(lo, Math.min(hi, v))) / (hi - lo)) * H;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>level a = {a.toFixed(1)} <input type="range" min={1} max={30} value={a10} onChange={(e) => setA(Number(e.target.value))} aria-label="level" /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A path and its reflection after hitting level a" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={y(a)} x2={X0 + W} y2={y(a)} style={{ stroke: "var(--success)", strokeDasharray: "4 3" }} />
        <text x={X0 + W} y={y(a) - 4} textAnchor="end" style={{ fill: "var(--success)", fontSize: 10 }}>a</text>
        {hitIdx >= 0 && <polyline points={refl.map((v, k) => `${x(k)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.3, opacity: 0.8 }} />}
        <polyline points={show.map((v, k) => `${x(k)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5 }} />
        {hitIdx >= 0 && <circle cx={x(hitIdx)} cy={y(a)} r={4} style={{ fill: "var(--text)" }} />}
        <text x={X0} y={Y0 + H + 16} style={{ fill: "var(--text-muted)", fontSize: 10 }}>t = 0</text>
        <text x={X0 + W} y={Y0 + H + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>t = 1</text>
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div>{hitIdx >= 0 ? `This path first reaches a at t = ${(hitIdx / N).toFixed(3)}; red is its reflection after that time.` : "This path never reaches a by time 1."}</div>
        <div style={{ fontWeight: 700 }}>P(max over [0, 1] ≥ a): simulated {(hits / M).toFixed(3)}; 2P(B₁ ≥ a) = {exact.toFixed(3)}.</div>
      </div>
      <figcaption className="viz-caption">
        Reflecting a path in the line at height a after it first reaches a gives another Brownian path, equally likely.
        Each path that reaches a and ends below it pairs with one that ends above it, so P(max ≥ a) = 2P(B₁ ≥ a). The
        simulation uses 400 steps per path, so it slightly underestimates the maximum.
      </figcaption>
    </figure>
  );
}
