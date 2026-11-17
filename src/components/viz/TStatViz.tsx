"use client";

import { useState } from "react";

const lgamma = (x: number): number => {
  const g = [676.5203681218851, -1259.1392167224028, 771.32342877765313, -176.61503916999185, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (x < 0.5) return Math.log(Math.PI / Math.abs(Math.sin(Math.PI * x))) - lgamma(1 - x);
  x -= 1;
  let a = 0.99999999999980993;
  const t = x + 7.5;
  for (let i = 0; i < 8; i++) a += g[i] / (x + i + 1);
  return 0.5 * Math.log(2 * Math.PI) + (x + 0.5) * Math.log(t) - t + Math.log(a);
};

const simpson = (f: (x: number) => number, a: number, b: number, n = 2000) => {
  const h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (s * h) / 3;
};

/** Student’s t density against the standard normal: heavier tails when σ has to be estimated. */
export function TStatViz() {
  const [df, setDf] = useState(4);
  const [c, setC] = useState(2);
  const k = Math.exp(lgamma((df + 1) / 2) - lgamma(df / 2)) / Math.sqrt(df * Math.PI);
  const tD = (x: number) => k * Math.pow(1 + (x * x) / df, -(df + 1) / 2);
  const nD = (x: number) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI);
  const tTail = 1 - 2 * simpson(tD, 0, c);
  const nTail = 1 - 2 * simpson(nD, 0, c);
  const xs = Array.from({ length: 401 }, (_, i) => -5 + (i / 400) * 10);
  const X = (x: number) => 260 + x * 48, Y = (v: number) => 170 - (v / 0.42) * 150;
  const path = (f: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ");
  const tail = (side: 1 | -1) => {
    const pts = xs.filter((x) => side * x >= c);
    if (!pts.length) return "";
    const ordered = side === 1 ? pts : [...pts].reverse();
    return `M${X(ordered[0])},${Y(0)} ` + ordered.map((x) => `L${X(x).toFixed(1)},${Y(tD(x)).toFixed(1)}`).join(" ") + ` L${X(ordered[ordered.length - 1])},${Y(0)} Z`;
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>degrees of freedom n − 1: <span className="mono">{df}</span></span>
          <input type="range" min={1} max={30} step={1} value={df} onChange={(e) => setDf(Number(e.target.value))} /></label>
        <label><span>cut-off c: <span className="mono">{c.toFixed(2)}</span></span>
          <input type="range" min={1} max={4} step={0.05} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="The t density and the normal density" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <path d={tail(1)} style={{ fill: "var(--accent-soft)" }} />
        <path d={tail(-1)} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X(-5)} y1={Y(0)} x2={X(5)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(nD)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={path(tD)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        {[-4, -2, 0, 2, 4].map((x) => <text key={x} x={X(x) - 4} y={Y(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div style={{ fontWeight: 700 }}>t with {df} degrees of freedom: P(|T| &gt; {c.toFixed(2)}) = {tTail.toFixed(4)}</div>
        <div>standard normal: P(|Z| &gt; {c.toFixed(2)}) = {nTail.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        For a normal sample of size n, (X̄ − μ)/(σ/√n) is standard normal, dashed. Replacing the unknown σ by the sample
        standard deviation S gives T = (X̄ − μ)/(S/√n), which has Student&rsquo;s t distribution with n − 1 degrees of
        freedom, solid. Because S is itself random, T is more spread out, with heavier tails. As n grows, S settles near σ
        and the t density approaches the normal one.
      </figcaption>
    </figure>
  );
}
