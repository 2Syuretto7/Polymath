"use client";

import { useMemo, useState } from "react";
import { seededRng } from "./seededRng";

const LEN = 200000, NMAX = 12;
const H = (p: number) => (p <= 0 || p >= 1 ? 0 : -p * Math.log(p) - (1 - p) * Math.log(1 - p));

/** A seeded sample of a Bernoulli(p) process (kind 0) or of the chain with no two 1s in a row (kind 1). */
export function sample(kind: number, p: number) {
  const r = seededRng(20261120), out = new Uint8Array(LEN);
  let prev = 0;
  for (let i = 0; i < LEN; i++) {
    const s = kind === 1 && prev === 1 ? 0 : r() < p ? 1 : 0;
    out[i] = s; prev = s;
  }
  return out;
}
/** Plug-in estimates of H_n / n (in nats) from overlapping blocks of length n = 1, …, NMAX. */
export function blockRates(x: Uint8Array) {
  const res: number[] = [];
  for (let n = 1; n <= NMAX; n++) {
    const cnt = new Int32Array(1 << n), total = x.length - n + 1;
    let code = 0;
    for (let i = 0; i < x.length; i++) {
      code = ((code << 1) | x[i]) & ((1 << n) - 1);
      if (i >= n - 1) cnt[code]++;
    }
    let h = 0;
    for (const c of cnt) if (c) { const q = c / total; h -= q * Math.log(q); }
    res.push(h / n);
  }
  return res;
}
export const trueRate = (kind: number, p: number) => (kind === 0 ? H(p) : H(p) / (1 + p));

/** Estimating the entropy rate of a process from the frequencies of its blocks. */
export function EntropyBlockViz() {
  const [kind, setKind] = useState(0);
  const [p, setP] = useState(0.5);
  const rates = useMemo(() => blockRates(sample(kind, p)), [kind, p]);
  const h = trueRate(kind, p);
  const px = (n: number) => 50 + (n - 1) * 38, py = (v: number) => 190 - (v / 0.75) * 160;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Process">
        {["Coin flips", "No two 1s in a row"].map((l, i) => <button key={l} type="button" aria-pressed={kind === i} className={kind === i ? "seg is-on" : "seg"} onClick={() => setKind(i)}>{l}</button>)}
      </div>
      <div className="viz-controls">
        <label>p = {p.toFixed(2)} <input type="range" min={0.05} max={0.95} step={0.05} value={p} onChange={(e) => setP(Number(e.target.value))} aria-label="p" /></label>
      </div>
      <svg viewBox="0 0 540 220" role="img" aria-label="Block entropy per symbol against block length" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={190} x2={520} y2={190} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={30} x2={40} y2={190} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.25, 0.5, 0.75].map((v) => <text key={v} x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v.toFixed(2)}</text>)}
        {rates.map((_, i) => <text key={i} x={px(i + 1)} y={206} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{i + 1}</text>)}
        <line x1={40} y1={py(h)} x2={520} y2={py(h)} style={{ stroke: "var(--success)", strokeDasharray: "5 3", strokeWidth: 2 }} />
        <text x={516} y={py(h) + 14} textAnchor="end" style={{ fill: "var(--success)", fontSize: 10 }}>true rate {h.toFixed(3)}</text>
        <path d={rates.map((v, i) => `${i ? "L" : "M"}${px(i + 1)},${py(v).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {rates.map((v, i) => <circle key={i} cx={px(i + 1)} cy={py(v)} r={4} style={{ fill: "var(--accent)" }} />)}
        <text x={280} y={218} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>block length n</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        True entropy rate {h.toFixed(3)} nats per symbol. Estimate from blocks of length 12: {rates[NMAX - 1].toFixed(3)}.
      </p>
      <figcaption className="viz-caption">
        Each dot is the entropy of the observed blocks of length n, divided by n, from a sample of 2,00,000 symbols. For coin
        flips every block length gives the rate H(p) at once. When 1s may not repeat, short blocks overestimate the
        uncertainty, and the estimates fall towards H(p)/(1 + p) as n grows.
      </figcaption>
    </figure>
  );
}
