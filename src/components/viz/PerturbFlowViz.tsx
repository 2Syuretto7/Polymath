"use client";

import { useState } from "react";

const FAMILIES = [
  { label: "x − x³ + μ", f: (x: number, m: number) => x - x ** 3 + m, df: (x: number) => 1 - 3 * x * x },
  { label: "x² + μ", f: (x: number, m: number) => x * x + m, df: (x: number) => 2 * x },
  { label: "μx − x³", f: (x: number, m: number) => m * x - x ** 3, df: (x: number, m: number) => m - 3 * x * x },
];
/** Zeros of f(·, μ) in [−2, 2], found by sign changes and bisection, with exact zeros at grid points kept. */
export function zeros(k: number, m: number) {
  const f = (x: number) => FAMILIES[k].f(x, m);
  const out: number[] = [];
  const N = 4000;
  for (let i = 0; i < N; i++) {
    let a = -2 + (4 * i) / N, b = a + 4 / N;
    if (f(a) === 0) { out.push(a); continue; }
    if (f(a) * f(b) < 0) { for (let s = 0; s < 60; s++) { const c = (a + b) / 2; if (f(a) * f(c) <= 0) b = c; else a = c; } out.push((a + b) / 2); }
  }
  return out.filter((z, i) => i === 0 || Math.abs(z - out[i - 1]) > 1e-6).map((z) => (Math.abs(z) < 1e-9 ? 0 : z));
}

/** One-dimensional flows ẋ = f(x) under a small change of parameter: which phase portraits survive? */
export function PerturbFlowViz() {
  const [k, setK] = useState(0);
  const [m, setM] = useState(0);
  const { f, df } = FAMILIES[k];
  const zs = zeros(k, m);
  const px = (x: number) => 40 + ((x + 2) / 4) * 460, py = (v: number) => 120 - Math.max(-3, Math.min(3, v)) * 30;
  const xs = Array.from({ length: 401 }, (_, i) => -2 + i / 100);
  const type = (z: number) => { const d = df(z, m); return Math.abs(d) < 1e-6 ? "degenerate" : d < 0 ? "stable" : "unstable"; };
  const arrows = [-1.8, -1.2, -0.6, 0, 0.6, 1.2, 1.8].filter((x) => Math.abs(f(x, m)) > 0.02 && zs.every((z) => Math.abs(z - x) > 0.2));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="family">
        {FAMILIES.map((F, i) => <button key={F.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>ẋ = {F.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>μ = {m.toFixed(2).replace("-", "−")} <input type="range" min={-0.5} max={0.5} step={0.05} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="mu" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Graph of the vector field and its zeros" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={120} x2={500} y2={120} style={{ stroke: "var(--border-strong)" }} />
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${py(f(x, m)).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {arrows.map((x) => { const r = f(x, m) > 0; return <path key={x} d={r ? `M${px(x) - 7},${226} L${px(x) + 7},${226} M${px(x) + 2},${221} L${px(x) + 7},${226} L${px(x) + 2},${231}` : `M${px(x) + 7},${226} L${px(x) - 7},${226} M${px(x) - 2},${221} L${px(x) - 7},${226} L${px(x) - 2},${231}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />; })}
        <line x1={40} y1={226} x2={500} y2={226} style={{ stroke: "var(--grid-line)" }} />
        {zs.map((z, i) => {
          const t = type(z);
          return <circle key={i} cx={px(z)} cy={226} r={6} style={{ fill: t === "stable" ? "var(--success)" : t === "unstable" ? "var(--surface)" : "var(--danger)", stroke: t === "unstable" ? "var(--danger)" : "none", strokeWidth: 2 }} />;
        })}
        {[-2, -1, 0, 1, 2].map((x) => <text key={x} x={px(x)} y={136} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        <text x={40} y={22} style={{ fill: "var(--text-muted)", fontSize: 10 }}>blue: the vector field; below: the phase line, green dots stable, hollow unstable, red degenerate</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {zs.length} equilibri{zs.length === 1 ? "um" : "a"}{zs.length ? `: ${zs.map((z) => `${z.toFixed(3).replace("-", "−")} (${type(z)})`).join(", ")}` : ""}.
      </p>
      <figcaption className="viz-caption">
        A system is structurally stable if every small enough perturbation gives a topologically equivalent phase
        portrait. For ẋ = x − x³ all three equilibria are hyperbolic, and small μ only moves them. For ẋ = x² the single
        equilibrium is degenerate: any μ &lt; 0 splits it in two and any μ &gt; 0 removes it, a saddle-node bifurcation.
      </figcaption>
    </figure>
  );
}
