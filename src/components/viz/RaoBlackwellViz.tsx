"use client";

import { useMemo, useState } from "react";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const poisson = (r: () => number, lam: number) => {
  const L = Math.exp(-lam);
  let k = 0, p = 1;
  do { k++; p *= r(); } while (p > L);
  return k - 1;
};
const REPS = 2000, BINS = 25;

/** Estimating P(X = 0) = exp(−λ) from Poisson data: a crude estimator and its Rao-Blackwell improvement. */
export function RaoBlackwellViz() {
  const [lam, setLam] = useState(1);
  const [n, setN] = useState(10);
  const target = Math.exp(-lam);
  const sims = useMemo(() => {
    const r = rng(9001 + n * 7 + Math.round(lam * 100));
    const crude: number[] = [], rb: number[] = [];
    for (let i = 0; i < REPS; i++) {
      let T = 0, first = 0;
      for (let j = 0; j < n; j++) { const x = poisson(r, lam); if (j === 0) first = x; T += x; }
      crude.push(first === 0 ? 1 : 0);
      rb.push(Math.pow((n - 1) / n, T));
    }
    return { crude, rb };
  }, [lam, n]);
  const vCrude = target * (1 - target);
  const vRb = Math.exp(-2 * lam) * (Math.exp(lam / n) - 1);
  const hist = (vals: number[]) => {
    const c = Array(BINS).fill(0) as number[];
    for (const v of vals) c[Math.min(BINS - 1, Math.floor(v * BINS))]++;
    return c;
  };
  const hc = hist(sims.crude), hr = hist(sims.rb);
  const top = Math.max(...hc, ...hr);
  const W = 460 / BINS;
  const panel = (h: number[], y0: number, label: string) => (
    <g>
      <text x={30} y={y0 - 64} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label}</text>
      {h.map((c, i) => (
        <rect key={i} x={30 + i * W + 1} y={y0 - Math.sqrt(c / top) * 56} width={W - 2} height={Math.sqrt(c / top) * 56} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
      ))}
      <line x1={30} y1={y0} x2={490} y2={y0} style={{ stroke: "var(--border)" }} />
      <line x1={30 + target * 460} y1={y0 - 60} x2={30 + target * 460} y2={y0} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
    </g>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>λ: <span className="mono">{lam.toFixed(1)}</span></span>
          <input type="range" min={0.2} max={3} step={0.1} value={lam} onChange={(e) => setLam(Number(e.target.value))} /></label>
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={50} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Histograms of the two estimators" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {panel(hc, 86, "crude: 1 if the first count is 0, else 0")}
        {panel(hr, 176, "Rao-Blackwell: ((n − 1)/n) to the power T")}
        {[0, 0.5, 1].map((x) => <text key={x} x={30 + x * 460 - 6} y={194} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>target exp(−λ) = {target.toFixed(4)}; both estimators are unbiased</div>
        <div>variance of the crude estimator: {vCrude.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>variance after Rao-Blackwell: {vRb.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        Each of {REPS} samples of n Poisson counts gives two estimates of the chance of a zero count. The crude estimator
        looks only at the first count and is either 0 or 1. Averaging it over all samples with the same total T, which is
        sufficient, gives ((n − 1)/n) to the power T. Bar heights use a square-root scale so that both panels are visible.
        The improved estimator stays unbiased and its variance is far smaller.
      </figcaption>
    </figure>
  );
}
