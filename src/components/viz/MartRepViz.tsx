"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const FS = [
  { name: "F = B₁²", EF: 1, M: (t: number, b: number) => b * b + (1 - t), H: (_t: number, b: number) => 2 * b, Hlab: "2Bₜ" },
  { name: "F = B₁³", EF: 0, M: (t: number, b: number) => b ** 3 + 3 * (1 - t) * b, H: (t: number, b: number) => 3 * b * b + 3 * (1 - t), Hlab: "3Bₜ² + 3(1 − t)" },
  { name: "F = exp(B₁)", EF: Math.exp(0.5), M: (t: number, b: number) => Math.exp(b + (1 - t) / 2), H: (t: number, b: number) => Math.exp(b + (1 - t) / 2), Hlab: "exp(Bₜ + (1 − t)/2)" },
];

/** A random variable F of the Brownian path written as E F + ∫ H dB, tracked along one path. */
export function MartRepViz() {
  const [k, setK] = useState(0);
  const [seed, setSeed] = useState(1);
  const N = 4000, dt = 1 / N, F = FS[k];
  const r = seededRng(seed * 37 + 1);
  const B = [0], Mx = [F.M(0, 0)], I = [F.EF];
  for (let i = 0; i < N; i++) {
    const d = Math.sqrt(dt) * normalDraw(r);
    I.push(I[i] + F.H(i * dt, B[i]) * d);
    B.push(B[i] + d);
    Mx.push(F.M((i + 1) * dt, B[i + 1]));
  }
  const all = [...Mx, ...I];
  const hi = Math.max(...all), lo = Math.min(...all), pad = (hi - lo) * 0.1 + 0.1;
  const X0 = 30, W = 460, Y0 = 50, H = 150;
  const x = (i: number) => X0 + (i / N) * W;
  const y = (v: number) => Y0 + ((hi + pad - v) / (hi - lo + 2 * pad)) * H;
  const pl = (a: number[]) => a.filter((_, i) => i % 10 === 0).map((v, i) => `${x(i * 10)},${y(v)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="random variable">
        {FS.map((d, i) => <button key={d.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 215" role="img" aria-label="The martingale E of F given the past, against the stochastic integral" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={X0 + 6} y={14} style={{ fill: "var(--text)", fontSize: 11 }}>black: Mₜ = E[F | the path up to t]</text>
        <text x={X0 + 6} y={30} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: E F + ∫₀ᵗ Hₛ dBₛ, with Hₜ = {F.Hlab}</text>
        <polyline points={pl(Mx)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 3.2 }} />
        <polyline points={pl(I)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.4 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        E F = {F.EF.toFixed(3)}. At t = 1: F = {Mx[N].toFixed(3)}; E F + ∫ H dB = {I[N].toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Every square-integrable F determined by the Brownian path is its mean plus a stochastic integral. The integrand H
        is the sensitivity of the conditional expectation to the current position, Hₜ = ∂Mₜ/∂x. In finance, H is the
        hedging strategy that replicates the payoff F.
      </figcaption>
    </figure>
  );
}
