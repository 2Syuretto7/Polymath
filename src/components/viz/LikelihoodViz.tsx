"use client";

import { useState } from "react";

/** The likelihood of a coin’s bias given k heads in n tosses, and where it peaks. */
export function LikelihoodViz() {
  const [n, setN] = useState(10);
  const [kRaw, setK] = useState(7);
  const [p, setP] = useState(0.5);
  const k = Math.min(kRaw, n);
  const logL = (q: number) => {
    const a = k === 0 ? 0 : k * Math.log(q);
    const b = n - k === 0 ? 0 : (n - k) * Math.log(1 - q);
    return a + b;
  };
  const mle = k / n;
  const ps = Array.from({ length: 399 }, (_, i) => (i + 1) / 400);
  const L = ps.map((q) => Math.exp(logL(q) - logL(Math.min(0.9999, Math.max(0.0001, mle)))));
  const X = (q: number) => 30 + q * 460, Y = (v: number) => 160 - v * 135;
  const rel = Math.exp(logL(p) - logL(Math.min(0.9999, Math.max(0.0001, mle))));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>tosses n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={100} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>heads k: <span className="mono">{k}</span></span>
          <input type="range" min={0} max={n} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
        <label><span>candidate p: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.01} max={0.99} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Likelihood as a function of p" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(1)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={L.map((v, i) => `${i ? "L" : "M"}${X(ps[i]).toFixed(1)},${Y(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <line x1={X(mle)} y1={Y(0)} x2={X(mle)} y2={Y(1) - 6} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
        <text x={mle > 0.75 ? X(mle) - 4 : X(mle) + 4} y={Y(1) - 8} textAnchor={mle > 0.75 ? "end" : "start"} style={{ fill: "var(--text)", fontSize: 11 }}>maximum at k/n = {mle.toFixed(3)}</text>
        <circle cx={X(p)} cy={Y(rel)} r={5} style={{ fill: "var(--accent)" }} />
        {[0, 0.25, 0.5, 0.75, 1].map((q) => <text key={q} x={X(q) - 8} y={Y(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{q}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>log-likelihood at p = {p.toFixed(2)}: k log p + (n − k) log(1 − p) = {logL(p).toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>likelihood at p relative to its maximum: {rel.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        Each value of p gives the observed tosses a probability, p to the power k times (1 − p) to the power n − k. Read as a
        function of p with the data fixed, this is the likelihood; the curve is scaled so that its peak has height 1. The
        maximum likelihood estimate is the p that makes the data most probable, here k/n. With more tosses the curve
        becomes narrower, so the data rule out more values of p.
      </figcaption>
    </figure>
  );
}
