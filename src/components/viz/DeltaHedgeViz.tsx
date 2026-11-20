"use client";

import { useMemo, useState } from "react";
import { normalDraw, seededRng } from "./seededRng";

const S0 = 100, R = 0.05, T = 1, MU = 0.12, PATHS = 300;

export function normCdf(x: number) {
  const t = 1 / (1 + 0.2316419 * Math.abs(x));
  const d = 0.3989422804014327 * Math.exp((-x * x) / 2);
  const p = d * t * (0.31938153 + t * (-0.356563782 + t * (1.781477937 + t * (-1.821255978 + t * 1.330274429))));
  return x >= 0 ? 1 - p : p;
}

/** Black–Scholes call price and delta at time t with spot s. */
export function bsCall(s: number, k: number, sig: number, t: number) {
  const tau = T - t;
  if (tau <= 1e-12) return { price: Math.max(s - k, 0), delta: s > k ? 1 : 0 };
  const d1 = (Math.log(s / k) + (R + (sig * sig) / 2) * tau) / (sig * Math.sqrt(tau));
  const d2 = d1 - sig * Math.sqrt(tau);
  return { price: s * normCdf(d1) - k * Math.exp(-R * tau) * normCdf(d2), delta: normCdf(d1) };
}

const STEPS = [4, 16, 64, 256];

/** Sell a call at the Black–Scholes price, delta-hedge it N times on paths with real-world drift 12%, and look at the error. */
export function DeltaHedgeViz() {
  const [sig, setSig] = useState(0.2);
  const [K, setK] = useState(100);
  const [N, setN] = useState(16);
  const res = useMemo(() => {
    const rng = seededRng(187);
    const dt = T / N;
    const errs: number[] = [];
    let sample: { s: number[]; v: number[]; c: number[] } | null = null;
    const c0 = bsCall(S0, K, sig, 0).price;
    for (let p = 0; p < PATHS; p++) {
      let s = S0, { delta } = bsCall(S0, K, sig, 0);
      let cash = c0 - delta * S0;
      const tr = p === 0 ? { s: [s], v: [c0], c: [c0] } : null;
      for (let i = 1; i <= N; i++) {
        s *= Math.exp((MU - (sig * sig) / 2) * dt + sig * Math.sqrt(dt) * normalDraw(rng));
        cash *= Math.exp(R * dt);
        const v = cash + delta * s;
        const bs = bsCall(s, K, sig, i * dt);
        if (tr) { tr.s.push(s); tr.v.push(v); tr.c.push(bs.price); }
        cash -= (bs.delta - delta) * s;
        delta = bs.delta;
      }
      errs.push(cash + delta * s - Math.max(s - K, 0));
      if (tr) sample = tr;
    }
    const mean = errs.reduce((a, b) => a + b, 0) / PATHS;
    const sd = Math.sqrt(errs.reduce((a, b) => a + (b - mean) ** 2, 0) / PATHS);
    return { c0, errs, mean, sd, sample: sample! };
  }, [sig, K, N]);
  const bins = 24, lo = -8, hi = 8;
  const counts = new Array(bins).fill(0);
  res.errs.forEach((e) => { const k = Math.floor(((Math.max(lo, Math.min(hi - 1e-9, e)) - lo) / (hi - lo)) * bins); counts[k]++; });
  const cmax = Math.max(...counts);
  const sp = res.sample;
  const vmax = Math.max(...sp.v, ...sp.c, 1) * 1.1;
  const lx = (i: number) => 30 + (i / N) * 220, ly = (v: number) => 230 - (v / vmax) * 190;
  const path = (a: number[]) => a.map((v, i) => `${i ? "L" : "M"}${lx(i).toFixed(1)},${ly(Math.max(v, 0)).toFixed(1)}`).join("");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>σ = {sig.toFixed(2)} <input type="range" min={0.1} max={0.5} step={0.05} value={sig} onChange={(e) => setSig(Number(e.target.value))} aria-label="sigma" /></label>
        <label>K = {K} <input type="range" min={80} max={120} step={5} value={K} onChange={(e) => setK(Number(e.target.value))} aria-label="strike" /></label>
      </div>
      <div className="segmented" role="group" aria-label="rebalances">
        {STEPS.map((s) => <button key={s} type="button" aria-pressed={N === s} className={N === s ? "seg is-on" : "seg"} onClick={() => setN(s)}>{s} trades</button>)}
      </div>
      <svg viewBox="0 0 540 270" role="img" aria-label="Delta hedging a call option" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={230} x2={250} y2={230} style={{ stroke: "var(--border-strong)" }} />
        <line x1={30} y1={40} x2={30} y2={230} style={{ stroke: "var(--border-strong)" }} />
        <path d={path(sp.c)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={path(sp.v)} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 1.6, strokeDasharray: "4 3" }} />
        <text x={30} y={20} style={{ fill: "var(--accent)", fontSize: 11 }}>blue: option value on one path</text>
        <text x={30} y={34} style={{ fill: "var(--success)", fontSize: 11 }}>green: hedge portfolio</text>
        <text x={140} y={248} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>time 0 to 1 year</text>
        {counts.map((c, i) => (
          <rect key={i} x={290 + (i * 230) / bins} y={230 - (c / cmax) * 180} width={230 / bins - 1} height={(c / cmax) * 180} style={{ fill: "var(--accent)", opacity: 0.7 }} />
        ))}
        <line x1={290} y1={230} x2={520} y2={230} style={{ stroke: "var(--border-strong)" }} />
        <line x1={405} y1={45} x2={405} y2={230} style={{ stroke: "var(--danger)", strokeDasharray: "3 3" }} />
        {[-8, 0, 8].map((v) => <text key={v} x={290 + ((v - lo) / (hi - lo)) * 230} y={244} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <text x={290} y={262} style={{ fill: "var(--text-muted)", fontSize: 10 }}>hedging error at expiry over {PATHS} paths</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Black–Scholes price {res.c0.toFixed(2)}. Hedging error: mean {res.mean.toFixed(2).replace("-", "−")}, standard deviation {res.sd.toFixed(2)}.
      </p>
      <figcaption className="viz-caption">
        Sell the call for its Black–Scholes price, then hold Δ = N(d₁) shares, rebalancing at each trade and keeping the
        rest in the bank at 5%. Stock paths grow at 12% a year, yet the price never used that number. As trades become
        more frequent, the portfolio tracks the option ever more closely: the price is the cost of replication.
      </figcaption>
    </figure>
  );
}
