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

type Est = "mom" | "max" | "adj";
const NAMES: Record<Est, string> = { mom: "2X̄", max: "maximum", adj: "(n + 1)/n × maximum" };
const REPS = 3000, BINS = 40;

/** Three estimators of θ for the uniform distribution on [0, θ], with θ = 1: bias, variance and mean squared error. */
export function EstimatorMseViz() {
  const [n, setN] = useState(5);
  const [est, setEst] = useState<Est>("mom");
  const sims = useMemo(() => {
    const r = rng(4243 + n * 13);
    const out: Record<Est, number[]> = { mom: [], max: [], adj: [] };
    for (let i = 0; i < REPS; i++) {
      let s = 0, m = 0;
      for (let j = 0; j < n; j++) { const u = r(); s += u; if (u > m) m = u; }
      out.mom.push((2 * s) / n);
      out.max.push(m);
      out.adj.push(((n + 1) / n) * m);
    }
    return out;
  }, [n]);
  const exact: Record<Est, { bias: number; v: number }> = {
    mom: { bias: 0, v: 1 / (3 * n) },
    max: { bias: -1 / (n + 1), v: n / ((n + 1) * (n + 1) * (n + 2)) },
    adj: { bias: 0, v: 1 / (n * (n + 2)) },
  };
  const vals = sims[est];
  const counts = Array(BINS).fill(0) as number[];
  for (const v of vals) counts[Math.min(BINS - 1, Math.max(0, Math.floor((v / 2) * BINS)))]++;
  const top = Math.max(...counts);
  const W = 460 / BINS;
  const e = exact[est];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Estimator">
        {(Object.keys(NAMES) as Est[]).map((k) => (
          <button key={k} type="button" aria-pressed={est === k} className={est === k ? "seg is-on" : "seg"} onClick={() => setEst(k)}>{NAMES[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>sample size n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={40} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Histogram of the estimates" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {counts.map((c, i) => (
          <rect key={i} x={30 + i * W + 1} y={140 - (c / top) * 120} width={W - 2} height={(c / top) * 120} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        ))}
        <line x1={30 + 230} y1={12} x2={30 + 230} y2={140} style={{ stroke: "var(--text)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <text x={264} y={22} style={{ fill: "var(--text)", fontSize: 11 }}>true θ = 1</text>
        <line x1={30} y1={140} x2={490} y2={140} style={{ stroke: "var(--border)" }} />
        {[0, 0.5, 1, 1.5, 2].map((x) => <text key={x} x={30 + x * 230 - 6} y={156} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>bias {e.bias.toFixed(4)}</div>
        <div>variance {e.v.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>mean squared error = variance + bias² = {(e.v + e.bias * e.bias).toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        Each of {REPS} samples of size n from the uniform distribution on [0, 1] gives one estimate of θ, and the histogram
        shows where they fall. The figures below are exact. Twice the sample mean is unbiased but spread out. The maximum
        is never too large, so it is biased downwards, yet its errors are small. Scaling the maximum by (n + 1)/n removes
        the bias and gives the smallest mean squared error of the three.
      </figcaption>
    </figure>
  );
}
