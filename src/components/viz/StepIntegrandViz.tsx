"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

/** Approximating ∫ B dB by simple integrands that hold B constant on each of n intervals. */
export function StepIntegrandViz() {
  const [p, setP] = useState(3);
  const [seed, setSeed] = useState(1);
  const N = 2048, n = 2 ** p, h = N / n;
  const r = seededRng(seed * 977 + 5);
  const B = [0];
  for (let k = 0; k < N; k++) B.push(B[k] + Math.sqrt(1 / N) * normalDraw(r));
  let sum = 0, qv = 0;
  for (let i = 0; i < n; i++) {
    const d = B[(i + 1) * h] - B[i * h];
    sum += B[i * h] * d; qv += d * d;
  }
  const B1 = B[N];
  const top = Math.max(1.5, ...B.map(Math.abs)) * 1.05;
  const X0 = 30, W = 460, Y0 = 10, H = 170;
  const x = (k: number) => X0 + (k / N) * W;
  const y = (v: number) => Y0 + ((top - v) / (2 * top)) * H;
  const path = B.filter((_, i) => i % 4 === 0).map((v, i) => `${x(i * 4)},${y(v)}`).join(" ");
  const steps = Array.from({ length: n }, (_, i) => `M${x(i * h)},${y(B[i * h])} H${x((i + 1) * h)}`).join(" ");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>intervals n = {n} <input type="range" min={1} max={8} step={1} value={p} onChange={(e) => setP(Number(e.target.value))} aria-label="number of intervals, as a power of two" /></label>
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A Brownian path and a step approximation to it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={path} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1 }} />
        <path d={steps} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <text x={X0 + 6} y={Y0 + 12} style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey: B</text>
        <text x={X0 + 6} y={Y0 + 28} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: Hₙ, B frozen at each left endpoint</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ∫ Hₙ dB = {sum.toFixed(4)}; (B₁² − Σ(ΔB)²)/2 = {((B1 * B1 - qv) / 2).toFixed(4)}; limit (B₁² − 1)/2 = {((B1 * B1 - 1) / 2).toFixed(4)}
      </p>
      <figcaption className="viz-caption">
        A simple integrand is constant on each interval, with its value fixed at the left endpoint, so it uses no
        knowledge of the future. Its integral is a finite sum Σ B(tᵢ)(B(tᵢ₊₁) − B(tᵢ)), which always equals half of B₁²
        minus the sum of squared increments. As n grows that sum tends to 1, and the integrals converge in L² to
        (B₁² − 1)/2.
      </figcaption>
    </figure>
  );
}
