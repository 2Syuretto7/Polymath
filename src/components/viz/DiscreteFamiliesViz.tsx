"use client";

import { useState } from "react";

const lgamma = (n: number) => { let s = 0; for (let k = 2; k <= n; k++) s += Math.log(k); return s; };
const binom = (n: number, p: number, k: number) => Math.exp(lgamma(n) - lgamma(k) - lgamma(n - k) + k * Math.log(p) + (n - k) * Math.log(1 - p));
const pois = (l: number, k: number) => Math.exp(-l + k * Math.log(l) - lgamma(k));
const geom = (p: number, k: number) => (k >= 1 ? Math.pow(1 - p, k - 1) * p : 0);

const FAM = ["binomial", "geometric", "Poisson"] as const;

/** The binomial, geometric and Poisson distributions, with the Poisson approximation to the binomial. */
export function DiscreteFamiliesViz() {
  const [f, setF] = useState(0);
  const [n, setN] = useState(20);
  const [p, setP] = useState(0.15);
  const [lam, setLam] = useState(3);
  const [approx, setApprox] = useState(true);
  const K = 25;
  const ks = Array.from({ length: K + 1 }, (_, k) => k);
  const pm = (k: number) => (f === 0 ? (k <= n ? binom(n, p, k) : 0) : f === 1 ? geom(p, k) : pois(lam, k));
  const vals = ks.map(pm);
  const ov = f === 0 && approx ? ks.map((k) => pois(n * p, k)) : null;
  const mean = f === 0 ? n * p : f === 1 ? 1 / p : lam;
  const desc = f === 0 ? `number of successes in ${n} independent trials, each with success probability ${p}` : f === 1 ? `number of trials up to and including the first success, success probability ${p}` : `count of rare events with average rate ${lam}`;
  const W = 520, H = 200, pad = 30;
  const maxv = Math.max(...vals, ...(ov ?? [0]), 0.05);
  const X = (k: number) => pad + (k / K) * (W - 2 * pad);
  const Y = (v: number) => H - 20 - (v / maxv) * (H - 40);
  const sl = (nm: string, v: number, set: (x: number) => void, min: number, max: number, step: number) => (
    <label><span>{nm}: <span className="mono">{v}</span></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Family">
        {FAM.map((nm, i) => <button key={nm} type="button" aria-pressed={f === i} className={f === i ? "seg is-on" : "seg"} onClick={() => setF(i)}>{nm}</button>)}
      </div>
      <div className="viz-sliders">
        {f === 0 && sl("n", n, setN, 1, 25, 1)}
        {f !== 2 && sl("p", p, setP, 0.05, 0.95, 0.05)}
        {f === 2 && sl("λ", lam, setLam, 0.5, 12, 0.5)}
      </div>
      {f === 0 && (
        <div className="segmented" role="group" aria-label="Poisson overlay" style={{ marginTop: 6 }}>
          <button type="button" aria-pressed={approx} className={approx ? "seg is-on" : "seg"} onClick={() => setApprox(true)}>overlay Poisson(np)</button>
          <button type="button" aria-pressed={!approx} className={!approx ? "seg is-on" : "seg"} onClick={() => setApprox(false)}>binomial only</button>
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Probability mass function" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={H - 20} x2={W - pad} y2={H - 20} style={{ stroke: "var(--border)" }} />
        {ks.map((k) => (
          <g key={k}>
            <rect x={X(k) - 6} y={Y(vals[k])} width={12} height={H - 20 - Y(vals[k])} style={{ fill: "var(--accent)", fillOpacity: 0.8 }} />
            {k % 5 === 0 && <text x={X(k)} y={H - 5} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{k}</text>}
          </g>
        ))}
        {ov && ks.map((k) => <circle key={k} cx={X(k)} cy={Y(ov[k])} r={3.5} style={{ fill: "var(--danger)" }} />)}
        <line x1={X(mean)} y1={10} x2={X(mean)} y2={H - 20} style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
      </svg>
      <p style={{ margin: "4px 0" }}>The {FAM[f]} distribution: the {desc}. Mean <span className="mono">{mean.toFixed(2)}</span>, marked by the dashed line.</p>
      <figcaption className="viz-caption">
        Bars show P(X = k). For the binomial, the red dots are the Poisson distribution with the same mean np: make n large and p small and they nearly coincide, which is why Poisson counts rare events among many opportunities.
      </figcaption>
    </figure>
  );
}
