"use client";

import { useState } from "react";

const erfc = (z: number): number => {
  const a = Math.abs(z), s = 1 / (1 + 0.5 * a);
  const r = s * Math.exp(-a * a - 1.26551223 + s * (1.00002368 + s * (0.37409196 + s * (0.09678418 + s * (-0.18628806 + s * (0.27886807 + s * (-1.13520398 + s * (1.48851587 + s * (-0.82215223 + s * 0.17087277)))))))));
  return z >= 0 ? r : 2 - r;
};
const xlogy = (x: number, y: number) => (x === 0 ? 0 : x * Math.log(y));

/** The likelihood ratio test for a coin: 2 log Λ against the chi-squared cut-off 3.84. */
export function LikelihoodRatioViz() {
  const [n, setN] = useState(50);
  const [k, setK] = useState(32);
  const [p0, setP0] = useState(0.5);
  const kk = Math.min(k, n);
  const ll = (p: number) => xlogy(kk, p) + xlogy(n - kk, 1 - p);
  const phat = kk / n;
  const stat = 2 * (ll(phat) - ll(p0));
  const pval = erfc(Math.sqrt(Math.max(stat, 0) / 2));
  const ps = Array.from({ length: 199 }, (_, i) => (i + 1) / 200);
  const top = ll(phat);
  const floor = top - 12;
  const X = (p: number) => 30 + p * 470, Y = (v: number) => 20 + ((top - Math.max(v, floor)) / (top - floor)) * 150;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>tosses n: <span className="mono">{n}</span></span>
          <input type="range" min={5} max={200} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>heads k: <span className="mono">{kk}</span></span>
          <input type="range" min={0} max={n} step={1} value={kk} onChange={(e) => setK(Number(e.target.value))} /></label>
        <label><span>null value p₀: <span className="mono">{p0.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.01} value={p0} onChange={(e) => setP0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Log-likelihood of the coin's bias" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(floor)} x2={X(1)} y2={Y(floor)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(top - 1.92)} x2={X(1)} y2={Y(top - 1.92)} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <path d={ps.map((p, i) => `${i ? "L" : "M"}${X(p).toFixed(1)},${Y(ll(p)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <line x1={X(phat)} y1={Y(top)} x2={X(phat)} y2={Y(floor)} style={{ stroke: "var(--accent)", strokeDasharray: "2 3" }} />
        <line x1={X(p0)} y1={Y(ll(p0))} x2={X(p0)} y2={Y(floor)} style={{ stroke: "var(--text-muted)" }} />
        <line x1={X(p0)} y1={Y(ll(p0))} x2={X(phat)} y2={Y(ll(p0))} style={{ stroke: "var(--text-muted)" }} />
        <circle cx={X(p0)} cy={Y(ll(p0))} r={4} style={{ fill: "var(--text-muted)" }} />
        <text x={X(0) + 4} y={Y(top - 1.92) - 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>1.92 below the peak</text>
        {[0, 0.25, 0.5, 0.75, 1].map((p) => <text key={p} x={X(p) - 8} y={Y(floor) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{p}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>maximum likelihood estimate k/n = {phat.toFixed(3)}</div>
        <div>2 log Λ = 2 × (peak − log-likelihood at p₀) = {stat.toFixed(3)}</div>
        <div>approximate p-value, chance a χ² variable on 1 degree of freedom exceeds it: {pval.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>{stat > 3.841 ? "reject p₀ at the 5% level (2 log Λ > 3.84)" : "do not reject p₀ at the 5% level (2 log Λ ≤ 3.84)"}</div>
      </div>
      <figcaption className="viz-caption">
        The curve is the log-likelihood of the bias. The test compares its height at the null value with its peak. Wilks&rsquo;s
        theorem says that, if the null is true, twice the drop is approximately chi-squared with one degree of freedom, so
        the null is rejected at the 5% level when the drop exceeds 1.92, the dashed line. The values of p₀ that survive form
        a 95% confidence interval.
      </figcaption>
    </figure>
  );
}
