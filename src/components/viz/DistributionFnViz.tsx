"use client";

import { useState } from "react";

const FS = [
  { key: "inv", label: "f(x) = 1/|x| on [−1, 1]", a: 1 },
  { key: "sqrt", label: "f(x) = 1/√|x| on [−1, 1]", a: 0.5 },
  { key: "two", label: "f(x) = 1/|x|² on [−1, 1]", a: 2 },
];

/** For f = |x|^(−a) on [−1, 1]: λ(t) = |{|f| > t}| = 2 min(1, t^(−1/a)). */
export const lambdaOf = (a: number, t: number) => 2 * Math.min(1, t ** (-1 / a));

/** The distribution function of a power singularity: weak L¹ when t·λ(t) stays bounded, L¹ when λ is integrable. */
export function DistributionFnViz() {
  const [k, setK] = useState(0);
  const [t, setT] = useState(4);
  const a = FS[k].a;
  const lam = lambdaOf(a, t);
  const x0 = Math.min(1, t ** (-1 / a));
  const px = (x: number) => 30 + ((x + 1) / 2) * 220, py = (v: number) => 210 - Math.min(v, 12) * 15;
  const f = (x: number) => Math.abs(x) ** -a;
  const curve = (sgn: number) => Array.from({ length: 200 }, (_, i) => sgn * (0.004 + (i / 199) * 0.996)).map((x, i) => `${i ? "L" : "M"}${px(x).toFixed(1)},${py(f(x)).toFixed(1)}`).join("");
  const integral = a < 1 ? 2 / (1 - a) : Infinity;
  const ts = Array.from({ length: 120 }, (_, i) => 0.1 + (i / 119) * 11.9);
  const gx = (s: number) => 300 + (s / 12) * 220, gy = (v: number) => 210 - v * 40;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FS.map((x, i) => <button key={x.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>height t = {t.toFixed(1)} <input type="range" min={0.5} max={12} step={0.5} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="A function and its distribution function" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(-x0)} y={30} width={px(x0) - px(-x0)} height={180} style={{ fill: "var(--accent-soft)" }} />
        <line x1={30} y1={210} x2={250} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={30} y1={py(t)} x2={250} y2={py(t)} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />
        <path d={curve(-1)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={curve(1)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={30} y={22} style={{ fill: "var(--text-muted)", fontSize: 10 }}>shaded: where |f| &gt; t, of length λ(t)</text>
        {[-1, 0, 1].map((x) => <text key={x} x={px(x)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        <line x1={300} y1={210} x2={520} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <line x1={300} y1={30} x2={300} y2={210} style={{ stroke: "var(--border-strong)" }} />
        <path d={ts.map((s, i) => `${i ? "L" : "M"}${gx(s).toFixed(1)},${gy(lambdaOf(a, s)).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={ts.map((s, i) => `${i ? "L" : "M"}${gx(s).toFixed(1)},${gy(Math.min(4.4, s * lambdaOf(a, s))).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <circle cx={gx(t)} cy={gy(lam)} r={4} style={{ fill: "var(--danger)" }} />
        <text x={306} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: λ(t)</text>
        <text x={380} y={22} style={{ fill: "var(--success)", fontSize: 10 }}>green: t · λ(t)</text>
        <text x={410} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>t from 0 to 12</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        λ({t.toFixed(1)}) = {lam.toFixed(3)}, t · λ(t) = {(t * lam).toFixed(3)}. ∫|f| = ∫ λ(t) dt = {Number.isFinite(integral) ? integral.toFixed(3) : "∞"}. {a < 1 ? "In L¹." : a === 1 ? "Weak L¹ but not L¹: t · λ(t) stays at 2." : "Not even weak L¹: t · λ(t) grows."}
      </p>
      <figcaption className="viz-caption">
        The distribution function λ(t) measures where |f| exceeds t. The layer-cake formula ∫|f| = ∫ λ(t) dt recovers the
        integral, while weak L¹ asks only that t · λ(t) stay bounded. 1/|x| is the standard example on the boundary:
        Chebyshev&rsquo;s inequality holds for it, but its integral diverges.
      </figcaption>
    </figure>
  );
}
