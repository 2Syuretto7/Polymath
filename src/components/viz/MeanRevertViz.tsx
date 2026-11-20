"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const THETAS = [0.5, 1, 2, 4];

/** Ornstein–Uhlenbeck paths dX = −θX dt + dB from X₀ = 3, with the exact mean and a two-standard-deviation band. */
export function MeanRevertViz() {
  const [ti, setTi] = useState(1);
  const [seed, setSeed] = useState(1);
  const th = THETAS[ti], T = 5, N = 1000, dt = T / N, x0 = 3;
  const r = seededRng(seed * 101 + ti);
  const paths = Array.from({ length: 5 }, () => {
    const p = [x0];
    for (let i = 0; i < N; i++) p.push(p[i] - th * p[i] * dt + Math.sqrt(dt) * normalDraw(r));
    return p;
  });
  const hi = 4.5, lo = -3;
  const X0 = 30, W = 460, Y0 = 10, H = 170;
  const x = (t: number) => X0 + (t / T) * W;
  const y = (v: number) => Y0 + ((hi - Math.max(lo, Math.min(hi, v))) / (hi - lo)) * H;
  const ts = Array.from({ length: 201 }, (_, i) => (i / 200) * T);
  const mean = (t: number) => x0 * Math.exp(-th * t);
  const sd = (t: number) => Math.sqrt((1 - Math.exp(-2 * th * t)) / (2 * th));
  const band = [...ts.map((t) => `${x(t)},${y(mean(t) + 2 * sd(t))}`), ...ts.slice().reverse().map((t) => `${x(t)},${y(mean(t) - 2 * sd(t))}`)].join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="theta">
        {THETAS.map((v, i) => <button key={v} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>θ = {v}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new paths</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Ornstein–Uhlenbeck paths with mean and band" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polygon points={band} style={{ fill: "var(--accent-soft)", stroke: "none" }} />
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        {paths.map((p, j) => <polyline key={j} points={p.filter((_, i) => i % 4 === 0).map((v, i) => `${x(i * 4 * dt)},${y(v)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1 }} />)}
        <polyline points={ts.map((t) => `${x(t)},${y(mean(t))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        {[1, 2, 3, 4, 5].map((t) => <text key={t} x={x(t)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Mean 3·exp(−{th}t); stationary variance 1/(2θ) = {(1 / (2 * th)).toFixed(3)}; half-life of the mean ln 2/θ = {(Math.log(2) / th).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        The linear SDE dX = −θX dt + dB has the explicit solution Xₜ = exp(−θt)X₀ + ∫₀ᵗ exp(−θ(t − s)) dBₛ, a Gaussian
        process. The violet curve is its mean and the shaded band is two standard deviations either side. Larger θ pulls
        paths back to 0 faster and holds them in a narrower band.
      </figcaption>
    </figure>
  );
}
