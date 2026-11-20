"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const INT = [
  { name: "H = 1", h: (_s: number, _b: number) => 1, ex: 1, lab: "1" },
  { name: "H = s", h: (s: number, _b: number) => s, ex: 1 / 3, lab: "1/3" },
  { name: "H = Bₛ", h: (_s: number, b: number) => b, ex: 1 / 2, lab: "1/2" },
  { name: "H = 2Bₛ", h: (_s: number, b: number) => 2 * b, ex: 2, lab: "2" },
];

/** Monte Carlo check of the Itô isometry E[(∫ H dB)²] = E ∫ H² ds on [0, 1]. */
export function IsometryMCViz() {
  const [m, setM] = useState(0);
  const [seed, setSeed] = useState(1);
  const P = 1500, N = 200, dt = 1 / N, it = INT[m];
  const r = seededRng(seed * 7919 + m * 31);
  const I: number[] = [];
  let sq = 0, mean = 0;
  for (let p = 0; p < P; p++) {
    let b = 0, s = 0;
    for (let k = 0; k < N; k++) {
      const d = Math.sqrt(dt) * normalDraw(r);
      s += it.h(k * dt, b) * d; b += d;
    }
    I.push(s); sq += s * s; mean += s;
  }
  sq /= P; mean /= P;
  const BINS = 40, L = -4, R = 4, bw = (R - L) / BINS;
  const counts = new Array(BINS).fill(0);
  I.forEach((v) => { const j = Math.floor((v - L) / bw); if (j >= 0 && j < BINS) counts[j]++; });
  const cmax = Math.max(...counts);
  const X0 = 30, W = 460, Y0 = 10, H = 150;
  const bx = (v: number) => X0 + ((v - L) / (R - L)) * W;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="integrand">
        {INT.map((d, i) => <button key={d.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{d.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed(seed + 1)}>new sample</button>
      </div>
      <svg viewBox="0 0 520 185" role="img" aria-label="Histogram of simulated stochastic integrals" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {counts.map((c, j) => <rect key={j} x={X0 + j * (W / BINS) + 1} y={Y0 + H - (c / cmax) * H} width={W / BINS - 2} height={(c / cmax) * H} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />)}
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4].map((v) => <text key={v} x={bx(v)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <line x1={bx(0)} y1={Y0} x2={bx(0)} y2={Y0 + H} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {P} paths: mean of I = {mean.toFixed(3)}; mean of I² = {sq.toFixed(3)}; exact E ∫ H² ds = {it.lab}.
      </p>
      <figcaption className="viz-caption">
        Each sample is I = ∫₀¹ H dB along one simulated path. The histogram is centred at 0, as the integral is a
        martingale started at 0. The average of I² matches E ∫₀¹ H² ds up to sampling noise: the Itô isometry.
      </figcaption>
    </figure>
  );
}
