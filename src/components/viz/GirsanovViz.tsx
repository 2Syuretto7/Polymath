"use client";

import { useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const MUS = [0.5, 1, 2];

/** Brownian motion with drift μ, reweighted by Girsanov's density, looks like Brownian motion without drift. */
export function GirsanovViz() {
  const [mi, setMi] = useState(1);
  const [w, setW] = useState(false);
  const mu = MUS[mi], T = 1, P = 4000;
  const r = seededRng(17 + mi * 7);
  const X: number[] = [], Z: number[] = [];
  for (let p = 0; p < P; p++) {
    const b = Math.sqrt(T) * normalDraw(r);
    const x = mu * T + b; // the path under P is B + μt; only the endpoint matters for this density
    X.push(x);
    Z.push(Math.exp(-mu * x + 0.5 * mu * mu * T));
  }
  const zsum = Z.reduce((a, b) => a + b, 0);
  const wt = w ? Z.map((z) => z / zsum) : Z.map(() => 1 / P);
  const mean = X.reduce((s, x, i) => s + wt[i] * x, 0);
  const vr = X.reduce((s, x, i) => s + wt[i] * (x - mean) ** 2, 0);
  const L = -4, R = 6, BINS = 40, bw = (R - L) / BINS;
  const dens = new Array(BINS).fill(0);
  X.forEach((x, i) => { const j = Math.floor((x - L) / bw); if (j >= 0 && j < BINS) dens[j] += wt[i] / bw; });
  const pdf = (x: number, m: number) => Math.exp(-((x - m) ** 2) / 2) / Math.sqrt(2 * Math.PI);
  const X0 = 30, W = 460, Y0 = 10, H = 160, top = 0.5;
  const px = (v: number) => X0 + ((v - L) / (R - L)) * W;
  const py = (d: number) => Y0 + H - (Math.min(d, top) / top) * H;
  const grid = Array.from({ length: 201 }, (_, i) => L + (i / 200) * (R - L));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="drift">
        {MUS.map((m, i) => <button key={m} type="button" aria-pressed={mi === i} className={mi === i ? "seg is-on" : "seg"} onClick={() => setMi(i)}>μ = {m}</button>)}
      </div>
      <div className="viz-controls">
        <label><input type="checkbox" checked={w} onChange={(e) => setW(e.target.checked)} aria-label="reweight by the Girsanov density" /> reweight each path by Z = exp(−μX₁ + μ²/2)</label>
      </div>
      <svg viewBox="0 0 520 195" role="img" aria-label="Histogram of the endpoint of Brownian motion with drift, optionally reweighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {dens.map((d, j) => <rect key={j} x={X0 + j * (W / BINS) + 1} y={py(d)} width={W / BINS - 2} height={Y0 + H - py(d)} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />)}
        <polyline points={grid.map((g) => `${px(g)},${py(pdf(g, 0))}`).join(" ")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <polyline points={grid.map((g) => `${px(g)},${py(pdf(g, mu))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4, 6].map((v) => <text key={v} x={px(v)} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <text x={X0 + W} y={Y0 + 12} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>red dashed: N(0, 1)</text>
        <text x={X0 + W} y={Y0 + 28} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>grey: N(μ, 1)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {w ? "Under Q" : "Under P"}: mean of X₁ = {mean.toFixed(3)}, variance {vr.toFixed(3)}. Average of Z under P: {(zsum / P).toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Under P, Xₜ = Bₜ + μt is Brownian motion with drift, so X₁ is N(μ, 1). Weighting each outcome by the density
        Z = dQ/dP shifts the law back to N(0, 1). Girsanov&rsquo;s theorem says more: under Q the whole path X is a
        standard Brownian motion.
      </figcaption>
    </figure>
  );
}
