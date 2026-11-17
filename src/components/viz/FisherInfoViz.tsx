"use client";

import { useState } from "react";

/** The Cramér-Rao bound for a coin’s bias, against the sample proportion and a biased rival. */
export function FisherInfoViz() {
  const [n, setN] = useState(25);
  const [p, setP] = useState(0.5);
  const bound = (q: number) => (q * (1 - q)) / n;
  const laplace = (q: number) => {
    const v = (n * q * (1 - q)) / ((n + 2) * (n + 2));
    const b = (n * q + 1) / (n + 2) - q;
    return v + b * b;
  };
  const qs = Array.from({ length: 199 }, (_, i) => (i + 1) / 200);
  const top = Math.max(...qs.map(bound), ...qs.map(laplace)) * 1.1;
  const X = (q: number) => 40 + q * 450, Y = (v: number) => 170 - (v / top) * 150;
  const path = (f: (q: number) => number) => qs.map((q, i) => `${i ? "L" : "M"}${X(q).toFixed(1)},${Y(f(q)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={100} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>true p: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.99} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 195" role="img" aria-label="Variance bound and mean squared errors" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(bound)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <path d={path(laplace)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.6, strokeDasharray: "5 3" }} />
        <line x1={X(p)} y1={Y(0)} x2={X(p)} y2={14} style={{ stroke: "var(--text-faint)" }} />
        <circle cx={X(p)} cy={Y(bound(p))} r={4.5} style={{ fill: "var(--accent)" }} />
        <circle cx={X(p)} cy={Y(laplace(p))} r={4.5} style={{ fill: "var(--text-muted)" }} />
        {[0, 0.25, 0.5, 0.75, 1].map((q) => <text key={q} x={X(q) - 8} y={Y(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{q}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>Fisher information per toss 1/(p(1 − p)) = {(1 / (p * (1 - p))).toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>Cramér-Rao bound p(1 − p)/n = variance of k/n = {bound(p).toFixed(5)}</div>
        <div>mean squared error of (k + 1)/(n + 2) = {laplace(p).toFixed(5)}</div>
      </div>
      <figcaption className="viz-caption">
        The solid curve is the Cramér-Rao bound for unbiased estimators of p from n tosses. The sample proportion k/n is
        unbiased and its variance equals the bound, so no unbiased estimator does better. The dashed curve is the mean
        squared error of the biased estimator (k + 1)/(n + 2). Near p = 1/2 it dips below the bound, which is allowed
        because the bound applies only to unbiased estimators; near 0 and 1 its bias makes it worse.
      </figcaption>
    </figure>
  );
}
