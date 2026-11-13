"use client";

import { useState } from "react";

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function binom(n: number, p: number, r: () => number) {
  if (n > 200) {
    let u = r(), v = r();
    if (u < 1e-12) u = 1e-12;
    const z = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * v);
    return Math.max(0, Math.min(n, Math.round(n * p + z * Math.sqrt(n * p * (1 - p)))));
  }
  let k = 0;
  for (let i = 0; i < n; i++) if (r() < p) k++;
  return k;
}

/** Selection and drift: a fitter variant tends to spread, but in small populations chance often decides. */
export function FitnessDriftViz() {
  const [N, setN] = useState(50);
  const [s, setS] = useState(0.05);
  const [seed, setSeed] = useState(1);
  const G = 120, RUNS = 10;
  const runs = Array.from({ length: RUNS }, (_, k) => {
    const r = rng(seed * 1000 + k * 7919 + N * 13);
    let p = 0.2;
    const path = [p];
    for (let g = 0; g < G; g++) {
      const ps = (p * (1 + s)) / (p * (1 + s) + (1 - p));
      p = binom(N, ps, r) / N;
      path.push(p);
    }
    return path;
  });
  const fixed = runs.filter((r) => r[G] === 1).length, lost = runs.filter((r) => r[G] === 0).length;
  const W = 520, H = 200, X = (g: number) => 30 + (g / G) * 480, Y = (p: number) => 180 - p * 160;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>population size: <span className="mono">{N}</span></span>
          <input type="range" min={10} max={1000} step={10} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>fitness advantage of the variant: <span className="mono">{(s * 100).toFixed(0)}%</span></span>
          <input type="range" min={0} max={0.2} step={0.01} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <button type="button" className="btn btn-ghost" style={{ marginTop: 6 }} onClick={() => setSeed(seed + 1)}>run again</button>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Frequency of the variant over generations in ten populations" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(G)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(1)} x2={X(G)} y2={Y(1)} style={{ stroke: "var(--border)", strokeDasharray: "4 3" }} />
        <text x={24} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        <text x={24} y={Y(0) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(G)} y={Y(0) + 16} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{G} generations</text>
        {runs.map((r, k) => (
          <path key={k} d={r.map((p, g) => `${g ? "L" : "M"}${X(g).toFixed(1)},${Y(p).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: r[G] === 1 ? "var(--accent)" : "var(--text-muted)", strokeWidth: 1.5, opacity: 0.85 }} />
        ))}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>of 10 populations starting at 20%: {fixed} took over, {lost} lost the variant, {RUNS - fixed - lost} still mixed</div>
        <div style={{ fontWeight: 700 }}>{N * s < 1 ? "drift dominates: N × advantage is below 1" : "selection dominates: N × advantage is above 1"}</div>
      </div>
      <figcaption className="viz-caption">
        Each line follows how common a variant is in one population, with each generation sampled at random from the last,
        weighted by fitness. The fitter variant does not always win: in small populations, chance sampling, or drift, often
        swamps a small advantage. This is why many philosophers read fitness as a propensity to leave offspring, not as actual
        reproductive success.
      </figcaption>
    </figure>
  );
}
