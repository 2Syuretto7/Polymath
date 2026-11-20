"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const MODELS = [
  { name: "dX = −X dt + √2 dB", m: (t: number) => 2 * Math.exp(-t), v: (t: number) => 1 - Math.exp(-2 * t), b: (x: number) => -x },
  { name: "dX = √2 dB", m: (_t: number) => 2, v: (t: number) => 2 * t, b: (_x: number) => 0 },
];
const TIMES = [0.1, 0.5, 1, 2, 4];

/** Particles started at 2 under a diffusion, against the exact Gaussian density solving the forward equation. */
export function DensityEvolveViz() {
  const [mi, setMi] = useState(0);
  const [ti, setTi] = useState(2);
  const M = MODELS[mi], t = TIMES[ti];
  const P = 3000, dt = 0.01, steps = Math.round(t / dt);
  const r = seededRng(7 + mi * 13 + ti * 101);
  const xs: number[] = [];
  for (let p = 0; p < P; p++) {
    let x = 2;
    for (let k = 0; k < steps; k++) x += M.b(x) * dt + Math.sqrt(2 * dt) * normalDraw(r);
    xs.push(x);
  }
  const L = -5, R = 7, BINS = 48, bw = (R - L) / BINS;
  const cnt = new Array(BINS).fill(0);
  xs.forEach((x) => { const j = Math.floor((x - L) / bw); if (j >= 0 && j < BINS) cnt[j]++; });
  const dens = cnt.map((c) => c / (P * bw));
  const pdf = (x: number) => Math.exp(-((x - M.m(t)) ** 2) / (2 * M.v(t))) / Math.sqrt(2 * Math.PI * M.v(t));
  const top = Math.max(0.45, pdf(M.m(t)) * 1.1);
  const X0 = 30, W = 460, Y0 = 10, H = 160;
  const x = (v: number) => X0 + ((v - L) / (R - L)) * W;
  const y = (d: number) => Y0 + H - (Math.min(d, top) / top) * H;
  const grid = Array.from({ length: 241 }, (_, i) => L + (i / 240) * (R - L));
  const mean = xs.reduce((a, b) => a + b, 0) / P;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="model">
        {MODELS.map((d, i) => <button key={d.name} type="button" aria-pressed={mi === i} className={mi === i ? "seg is-on" : "seg"} onClick={() => setMi(i)}>{d.name}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="time" style={{ marginTop: 6 }}>
        {TIMES.map((v, i) => <button key={v} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>t = {v}</button>)}
      </div>
      <svg viewBox="0 0 520 195" role="img" aria-label="Histogram of particle positions with the exact density" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {dens.map((d, j) => <rect key={j} x={X0 + j * (W / BINS) + 1} y={y(d)} width={W / BINS - 2} height={Y0 + H - y(d)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />)}
        <polyline points={grid.map((g) => `${x(g)},${y(pdf(g))}`).join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4, 6].map((v) => <text key={v} x={x(v)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <text x={X0 + W} y={Y0 + 12} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>red: exact density p(t, x)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {P} particles: sample mean {mean.toFixed(3)}; exact mean {M.m(t).toFixed(3)}, exact variance {M.v(t).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Every particle starts at 2. The density of Xₜ solves the forward (Fokker–Planck) equation ∂p/∂t = L*p, where L is
        the generator. With the drift −x the density settles to the standard normal, the stationary law; without it the
        density keeps spreading.
      </figcaption>
    </figure>
  );
}
