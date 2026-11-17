"use client";

import { useState } from "react";

const lgamma = (x: number): number => {
  const g = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61503916999185, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lgamma(1 - x);
  x -= 1;
  let a = 0.99999999999980993;
  const t = x + 7.5;
  for (let i = 0; i < 8; i++) a += g[i] / (x + i + 1);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
};
const beta = (a: number, b: number) => (x: number) =>
  x <= 0 || x >= 1 ? 0 : Math.exp(lgamma(a + b) - lgamma(a) - lgamma(b) + (a - 1) * Math.log(x) + (b - 1) * Math.log(1 - x));

/** A beta prior updated by coin tosses: the posterior mean is a weighted average of the prior mean and k/n. */
export function ShrinkPosteriorViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(2);
  const [n, setN] = useState(10);
  const [kRaw, setK] = useState(7);
  const k = Math.min(kRaw, n);
  const prior = beta(a, b), post = beta(a + k, b + n - k);
  const xs = Array.from({ length: 301 }, (_, i) => i / 300);
  const pv = xs.map(prior), qv = xs.map(post);
  const top = Math.max(...pv.slice(1, -1), ...qv.slice(1, -1), 1);
  const X = (x: number) => 30 + x * 460, Y = (v: number) => 150 - (v / top) * 125;
  const path = (vs: number[]) => vs.map((v, i) => `${i ? "L" : "M"}${X(xs[i]).toFixed(1)},${Y(Math.min(v, top)).toFixed(1)}`).join(" ");
  const priorMean = a / (a + b), mle = k / n, w = n / (a + b + n);
  const postMean = (a + k) / (a + b + n);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>prior a: <span className="mono">{a}</span></span>
          <input type="range" min={1} max={30} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>prior b: <span className="mono">{b}</span></span>
          <input type="range" min={1} max={30} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>tosses n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={100} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>heads k: <span className="mono">{k}</span></span>
          <input type="range" min={0} max={n} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Prior and posterior densities" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(pv)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.6, strokeDasharray: "4 3" }} />
        <path d={path(qv)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        {[0, 0.25, 0.5, 0.75, 1].map((x) => <text key={x} x={X(x) - 8} y={Y(0) + 14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
        <line x1={X(priorMean)} y1={182} x2={X(mle)} y2={182} style={{ stroke: "var(--border)", strokeWidth: 6 }} />
        <circle cx={X(priorMean)} cy={182} r={4} style={{ fill: "var(--text-muted)" }} />
        <circle cx={X(mle)} cy={182} r={4} style={{ fill: "var(--text)" }} />
        <circle cx={X(postMean)} cy={182} r={6} style={{ fill: "var(--accent)" }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>prior mean a/(a + b) = {priorMean.toFixed(3)}; data k/n = {mle.toFixed(3)}</div>
        <div>weight on the data n/(a + b + n) = {w.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>posterior mean (a + k)/(a + b + n) = {postMean.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        The dashed curve is the prior, a beta density with parameters a and b; the solid curve is the posterior after k heads
        in n tosses, a beta density with parameters a + k and b + n − k. The bar along the bottom runs from the prior mean
        (grey) to k/n (dark), and the posterior mean (large dot) always lies between them. The prior acts like a + b
        earlier tosses, so it counts for less as n grows.
      </figcaption>
    </figure>
  );
}
