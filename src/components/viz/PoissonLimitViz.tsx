"use client";

import { useState } from "react";

function binom(n: number, p: number, k: number) {
  if (k > n) return 0;
  let lg = 0;
  for (let i = 1; i <= k; i++) lg += Math.log((n - k + i) / i);
  return Math.exp(lg + k * Math.log(p) + (n - k) * Math.log(1 - p));
}
function pois(l: number, k: number) {
  let lg = -l;
  for (let i = 1; i <= k; i++) lg += Math.log(l / i);
  return Math.exp(lg);
}

/** Binomial(n, λ/n) against Poisson(λ): the law of rare events. */
export function PoissonLimitViz() {
  const [lam, setLam] = useState(3);
  const [n, setN] = useState(6);
  const nn = Math.max(n, lam + 1);
  const K = 15;
  const ks = Array.from({ length: K + 1 }, (_, k) => k);
  const b = ks.map((k) => binom(nn, lam / nn, k));
  const q = ks.map((k) => pois(lam, k));
  let tv = 0;
  for (let k = 0; k <= Math.max(nn, 60); k++) tv += Math.abs(binom(nn, lam / nn, k) - pois(lam, k));
  tv /= 2;
  const bound = (lam * lam) / nn;
  const top = Math.max(...b, ...q) * 1.1;
  const X0 = 30, W = 470, Y0 = 12, H = 150, step = W / (K + 1);
  const y = (v: number) => Y0 + H - (v / top) * H;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>λ = {lam} <input type="range" min={1} max={8} value={lam} onChange={(e) => setLam(Number(e.target.value))} aria-label="lambda" /></label>
        <label>n = {nn} <input type="range" min={2} max={200} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="Binomial and Poisson probabilities side by side" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {ks.map((k) => (
          <g key={k}>
            <rect x={X0 + k * step + 3} y={y(b[k])} width={step / 2 - 3} height={Y0 + H - y(b[k])} style={{ fill: "var(--accent)", opacity: 0.75 }} />
            <rect x={X0 + k * step + step / 2} y={y(q[k])} width={step / 2 - 3} height={Y0 + H - y(q[k])} style={{ fill: "var(--success)", opacity: 0.75 }} />
            <text x={X0 + k * step + step / 2} y={Y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{k}</text>
          </g>
        ))}
        <line x1={X0} y1={Y0 + H} x2={X0 + W} y2={Y0 + H} style={{ stroke: "var(--border-strong)" }} />
        <rect x={360} y={14} width={10} height={10} style={{ fill: "var(--accent)" }} />
        <text x={376} y={23} style={{ fill: "var(--text)", fontSize: 11 }}>binomial(n, λ/n)</text>
        <rect x={360} y={32} width={10} height={10} style={{ fill: "var(--success)" }} />
        <text x={376} y={41} style={{ fill: "var(--text)", fontSize: 11 }}>Poisson(λ)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Total variation distance: {tv.toFixed(4)}. Le Cam&rsquo;s bound n·p² = λ²/n: {bound.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Each of n independent trials succeeds with probability λ/n, so the expected count stays λ. As n grows the
        binomial bars approach the Poisson bars, and the distance between the two laws is never more than λ²/n.
      </figcaption>
    </figure>
  );
}
