"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const MODES = [
  { name: "σ = 1", s: (_t: number) => 1, A: (t: number) => t, lab: "t" },
  { name: "σ = 2", s: (_t: number) => 2, A: (t: number) => 4 * t, lab: "4t" },
  { name: "σ(t) = 2t", s: (t: number) => 2 * t, A: (t: number) => (4 * t * t * t) / 3, lab: "4t³/3" },
];

/** For M = ∫ σ dB, the realised quadratic variation tracks ⟨M⟩ = ∫ σ² ds. */
export function QVTrackViz() {
  const [m, setM] = useState(0);
  const [seed, setSeed] = useState(1);
  const N = 4000, dt = 1 / N, md = MODES[m];
  const r = seededRng(seed * 131 + m);
  const Mp = [0], Q = [0];
  for (let k = 0; k < N; k++) {
    const d = md.s(k * dt) * Math.sqrt(dt) * normalDraw(r);
    Mp.push(Mp[k] + d); Q.push(Q[k] + d * d);
  }
  const top = Math.max(4.2, ...Mp.map(Math.abs)) , lo = -top;
  const X0 = 30, W = 460, Y0 = 12, H = 170;
  const x = (k: number) => X0 + (k / N) * W;
  const y = (v: number) => Y0 + ((top - v) / (top - lo)) * H;
  const thin = (a: number[]) => a.filter((_, i) => i % 10 === 0).map((v, i) => `${x(i * 10)},${y(v)}`).join(" ");
  const ts = Array.from({ length: 101 }, (_, i) => i / 100);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="integrand">
        {MODES.map((d, i) => <button key={d.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new path</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A martingale, its realised quadratic variation and its bracket" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={y(0)} x2={X0 + W} y2={y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={thin(Mp)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.3 }} />
        <polyline points={ts.map((t) => `${X0 + t * W},${y(md.A(t))}`).join(" ")} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2.5 }} />
        <polyline points={thin(Q)} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.5, strokeDasharray: "5 3" }} />
        <text x={X0 + 6} y={Y0 + 12} style={{ fill: "var(--accent)", fontSize: 11 }}>violet: M</text>
        <text x={X0 + 6} y={Y0 + 28} style={{ fill: "var(--danger)", fontSize: 11 }}>red dashed: Σ (ΔM)²</text>
        <text x={X0 + 6} y={Y0 + 44} style={{ fill: "var(--text)", fontSize: 11 }}>black: ⟨M⟩ = {md.lab}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At t = 1: realised quadratic variation {Q[N].toFixed(3)}; ⟨M⟩₁ = {md.A(1).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        M is the Itô integral of σ against Brownian motion. Its realised quadratic variation, the running sum of squared
        increments, follows the deterministic curve ⟨M⟩ₜ = ∫ σ² ds, however wildly M itself moves. M² − ⟨M⟩ is a
        martingale.
      </figcaption>
    </figure>
  );
}
