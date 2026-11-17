"use client";

import { useState } from "react";

const erfc = (z: number): number => {
  const a = Math.abs(z), s = 1 / (1 + 0.5 * a);
  const r = s * Math.exp(-a * a - 1.26551223 + s * (1.00002368 + s * (0.37409196 + s * (0.09678418 + s * (-0.18628806 + s * (0.27886807 + s * (-1.13520398 + s * (1.48851587 + s * (-0.82215223 + s * 0.17087277)))))))));
  return z >= 0 ? r : 2 - r;
};
const Phi = (x: number) => 0.5 * erfc(-x / Math.SQRT2);
const zUpper = (alpha: number) => {
  let lo = -10, hi = 10;
  for (let i = 0; i < 100; i++) { const m = (lo + hi) / 2; if (1 - Phi(m) > alpha) lo = m; else hi = m; }
  return (lo + hi) / 2;
};

/** A one-sided test for a normal mean: the rejection threshold, the size α, and the power curve. */
export function PowerCurveViz() {
  const [n, setN] = useState(25);
  const [alpha, setAlpha] = useState(0.05);
  const [mu, setMu] = useState(0.5);
  const z = zUpper(alpha);
  const c = z / Math.sqrt(n);
  const power = (m: number) => 1 - Phi((c - m) * Math.sqrt(n));
  const ms = Array.from({ length: 241 }, (_, i) => -0.4 + (i / 240) * 1.6);
  const X = (m: number) => 40 + ((m + 0.4) / 1.6) * 450, Y = (v: number) => 170 - v * 150;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={100} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>significance level α: <span className="mono">{alpha.toFixed(3)}</span></span>
          <input type="range" min={0.005} max={0.2} step={0.005} value={alpha} onChange={(e) => setAlpha(Number(e.target.value))} /></label>
        <label><span>true mean μ: <span className="mono">{mu.toFixed(2)}</span></span>
          <input type="range" min={-0.4} max={1.2} step={0.01} value={mu} onChange={(e) => setMu(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 195" role="img" aria-label="Power curve" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-0.4)} y1={Y(0)} x2={X(1.2)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(-0.4)} y1={Y(alpha)} x2={X(1.2)} y2={Y(alpha)} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(1)} style={{ stroke: "var(--text-faint)" }} />
        <path d={ms.map((m, i) => `${i ? "L" : "M"}${X(m).toFixed(1)},${Y(power(m)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <circle cx={X(mu)} cy={Y(power(mu))} r={5} style={{ fill: "var(--accent)" }} />
        <text x={X(0) + 4} y={Y(1) + 10} style={{ fill: "var(--text-muted)", fontSize: 11 }}>null value μ = 0</text>
        {[-0.4, 0, 0.4, 0.8, 1.2].map((m) => <text key={m} x={X(m) - 8} y={Y(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{m}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>reject the null when X̄ &gt; {c.toFixed(4)}</div>
        <div>chance of rejecting when μ = 0 (type I error): {power(0).toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>power at μ = {mu.toFixed(2)}: {power(mu).toFixed(4)}; type II error {(1 - power(mu)).toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        Data are a normal sample with standard deviation 1. The null hypothesis is μ = 0 and the alternative is μ &gt; 0. The
        test rejects when the sample mean exceeds a threshold chosen so that, if the null is true, rejection happens with
        probability α. The curve is the power: the chance of rejecting, as a function of the true mean. Larger samples make
        the curve steeper; a smaller α moves the threshold up and lowers the power everywhere.
      </figcaption>
    </figure>
  );
}
