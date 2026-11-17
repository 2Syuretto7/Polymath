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

type Pop = "die" | "uniform" | "exponential";
const POPS: Record<Pop, { label: string; mu: number; var: number; lo: number; hi: number; draw: (u: number) => number }> = {
  die: { label: "a fair die", mu: 3.5, var: 35 / 12, lo: 1, hi: 6, draw: (u) => 1 + Math.floor(u * 6) },
  uniform: { label: "uniform on [0, 1]", mu: 0.5, var: 1 / 12, lo: 0, hi: 1, draw: (u) => u },
  exponential: { label: "exponential, mean 1", mu: 1, var: 1, lo: 0, hi: 3, draw: (u) => -Math.log(1 - u) },
};
const REPS = 2000, BINS = 30;

/** Many random samples from one population: the spread of the sample mean, and which divisor makes S² unbiased. */
export function IidSampleViz() {
  const [pop, setPop] = useState<Pop>("die");
  const [n, setN] = useState(5);
  const [seed, setSeed] = useState(1);
  const P = POPS[pop];
  const res = useMemo(() => {
    const r = rng(seed * 7919 + n * 31 + (pop === "die" ? 1 : pop === "uniform" ? 2 : 3));
    const means: number[] = [];
    let sN = 0, sN1 = 0;
    for (let rep = 0; rep < REPS; rep++) {
      const xs = Array.from({ length: n }, () => P.draw(r()));
      const m = xs.reduce((a, b) => a + b, 0) / n;
      const ss = xs.reduce((a, b) => a + (b - m) * (b - m), 0);
      means.push(m);
      sN += ss / n;
      sN1 += ss / (n - 1);
    }
    const mm = means.reduce((a, b) => a + b, 0) / REPS;
    const vm = means.reduce((a, b) => a + (b - mm) * (b - mm), 0) / REPS;
    const counts = Array(BINS).fill(0) as number[];
    for (const m of means) {
      const b = Math.floor(((m - P.lo) / (P.hi - P.lo)) * BINS);
      counts[Math.min(BINS - 1, Math.max(0, b))]++;
    }
    return { mm, vm, aN: sN / REPS, aN1: sN1 / REPS, counts };
  }, [pop, n, seed, P]);
  const top = Math.max(...res.counts);
  const W = 480 / BINS;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Population">
        {(Object.keys(POPS) as Pop[]).map((p) => (
          <button key={p} type="button" aria-pressed={pop === p} className={pop === p ? "seg is-on" : "seg"} onClick={() => setPop(p)}>{POPS[p].label}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={30} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setSeed((s) => s + 1)}>draw {REPS} fresh samples</button>
      </div>
      <svg viewBox="0 0 520 180" role="img" aria-label="Histogram of the sample means" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {res.counts.map((c, i) => (
          <rect key={i} x={20 + i * W + 1} y={150 - (c / top) * 130} width={W - 2} height={(c / top) * 130} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        ))}
        <line x1={20 + ((P.mu - P.lo) / (P.hi - P.lo)) * 480} y1={12} x2={20 + ((P.mu - P.lo) / (P.hi - P.lo)) * 480} y2={150} style={{ stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <line x1={20} y1={150} x2={500} y2={150} style={{ stroke: "var(--border)" }} />
        <text x={20} y={168} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{P.lo}</text>
        <text x={490} y={168} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{P.hi}</text>
        <text x={24 + ((P.mu - P.lo) / (P.hi - P.lo)) * 480} y={24} style={{ fill: "var(--text)", fontSize: 11 }}>μ = {P.mu}</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4, whiteSpace: "pre" }}>
        <div>{`average of the sample means   ${res.mm.toFixed(3)}   (μ = ${P.mu.toFixed(3)})`}</div>
        <div>{`variance of the sample means  ${res.vm.toFixed(4)}  (σ²/n = ${(P.var / n).toFixed(4)})`}</div>
        <div>{`average S² with divisor n     ${res.aN.toFixed(4)}`}</div>
        <div style={{ fontWeight: 700 }}>{`average S² with divisor n − 1 ${res.aN1.toFixed(4)}  (σ² = ${P.var.toFixed(4)})`}</div>
      </div>
      <figcaption className="viz-caption">
        Each of the {REPS} samples is n independent draws from the same population. The histogram shows where their
        sample means fall. They centre on μ and their variance is close to σ²/n, so the histogram narrows as n grows.
        Dividing the sum of squared deviations by n gives estimates of σ² that are too small on average; dividing by n − 1
        corrects this.
      </figcaption>
    </figure>
  );
}
