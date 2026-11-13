"use client";

import { useState } from "react";

type D = { name: string; mu: number; sd: number; tail: (a: number) => number; dev: (k: number) => number };
// tail(a) = P(X ≥ a); dev(k) = P(|X − μ| ≥ kσ)
const DS: D[] = [
  { name: "Exp(1)", mu: 1, sd: 1, tail: (a) => (a <= 0 ? 1 : Math.exp(-a)), dev: (k) => Math.exp(-(1 + k)) + (k < 1 ? 1 - Math.exp(-(1 - k)) : 0) },
  { name: "Unif(0, 2)", mu: 1, sd: 1 / Math.sqrt(3), tail: (a) => Math.min(1, Math.max(0, (2 - a) / 2)), dev: (k) => Math.max(0, 1 - k / Math.sqrt(3)) },
  { name: "0 or 5", mu: 1, sd: 2, tail: (a) => (a <= 0 ? 1 : a <= 5 ? 0.2 : 0), dev: (k) => (2 * k <= 1 ? 1 : 2 * k <= 4 ? 0.2 : 0) },
];

/** Markov's and Chebyshev's bounds compared with the true tail probabilities. */
export function TailBoundViz() {
  const [di, setDi] = useState(0);
  const [a, setA] = useState(2);
  const [k, setK] = useState(2);
  const d = DS[di];
  const rows: [string, number, number][] = [
    [`P(X ≥ ${a})`, d.tail(a), Math.min(1, d.mu / a)],
    [`P(|X − μ| ≥ ${k}σ)`, d.dev(k), Math.min(1, 1 / (k * k))],
  ];
  const bar = (v: number, strong: boolean) => (
    <div style={{ height: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
      <div style={{ width: `${v * 100}%`, height: "100%", background: strong ? "var(--accent)" : "var(--text-faint)" }} />
    </div>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Distribution">
        {DS.map((x, i) => <button key={x.name} type="button" aria-pressed={di === i} className={di === i ? "seg is-on" : "seg"} onClick={() => setDi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>Markov threshold a: <span className="mono">{a}</span></span>
          <input type="range" min={0.5} max={6} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>Chebyshev multiple k: <span className="mono">{k}</span></span>
          <input type="range" min={1} max={5} step={0.25} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gap: 14, marginTop: 10 }}>
        {rows.map(([lab, tr, bd], i) => (
          <div key={lab} style={{ display: "grid", gap: 4 }}>
            <div className="mono" style={{ fontSize: 13 }}>{lab}: true value {tr.toFixed(4)}, {i === 0 ? "Markov" : "Chebyshev"} bound {bd.toFixed(4)}</div>
            {bar(tr, true)}
            {bar(bd, false)}
          </div>
        ))}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px" }}>μ = {d.mu}; σ = {d.sd.toFixed(3)}</p>
      <figcaption className="viz-caption">
        X is never negative in these examples, as Markov&rsquo;s inequality requires; the last one is 5 with probability 0.2 and 0 otherwise. In each pair the upper bar is the true probability and the lower bar the bound, which uses only the mean (Markov) or the mean and variance (Chebyshev). The bound always sits above the truth, often far above, the price of knowing so little about the distribution. For &ldquo;0 or 5&rdquo; at a = 5 Markov&rsquo;s bound is exact, so it cannot be improved in general.
      </figcaption>
    </figure>
  );
}
