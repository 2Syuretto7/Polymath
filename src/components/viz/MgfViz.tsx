"use client";

import { useState } from "react";

type D = { name: string; M: (t: number) => number; m1: number; m2: number };
const DS: D[] = [
  { name: "Bernoulli(0.3)", M: (t) => 0.7 + 0.3 * Math.exp(t), m1: 0.3, m2: 0.3 },
  { name: "Poisson(2)", M: (t) => Math.exp(2 * (Math.exp(t) - 1)), m1: 2, m2: 6 },
  { name: "N(1, 1)", M: (t) => Math.exp(t + t * t / 2), m1: 1, m2: 2 },
  { name: "Exp(1)", M: (t) => (t < 1 ? 1 / (1 - t) : Infinity), m1: 1, m2: 2 },
];

/** The moment generating function near t = 0: its slope there is E(X) and its curvature E(X²). */
export function MgfViz() {
  const [di, setDi] = useState(1);
  const [t0, setT0] = useState(0.3);
  const d = DS[di];
  const tmin = -1, tmax = 0.8, ymax = 4.5;
  const W = 520, H = 230, pad = 34;
  const X = (t: number) => pad + ((t - tmin) / (tmax - tmin)) * (W - 2 * pad);
  const Y = (y: number) => H - 22 - (Math.max(-0.2, Math.min(y, ymax)) / ymax) * (H - 40);
  const ts = Array.from({ length: 301 }, (_, i) => tmin + ((tmax - tmin) * i) / 300);
  const line = (g: (t: number) => number) => ts.filter((t) => Number.isFinite(g(t)) && g(t) < ymax * 1.05 && g(t) > -0.15).map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(g(t)).toFixed(1)}`).join(" ");
  const taylor = (t: number) => 1 + d.m1 * t + (d.m2 * t * t) / 2;
  const tan = (t: number) => 1 + d.m1 * t;
  const Mt = d.M(t0);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Distribution">
        {DS.map((x, i) => <button key={x.name} type="button" aria-pressed={di === i} className={di === i ? "seg is-on" : "seg"} onClick={() => setDi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>t: <span className="mono">{t0.toFixed(2)}</span></span>
          <input type="range" min={-1} max={0.8} step={0.05} value={t0} onChange={(e) => setT0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Graph of the moment generating function with its tangent and quadratic approximation at zero" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={12} x2={X(0)} y2={H - 22} style={{ stroke: "var(--border)" }} />
        {[-1, -0.5, 0, 0.5].map((t) => <text key={t} x={X(t)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        {[1, 2, 3, 4].map((y) => <text key={y} x={X(0) - 6} y={Y(y) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{y}</text>)}
        <path d={line(tan)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <path d={line(taylor)} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "6 4" }} />
        <path d={line(d.M)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {Number.isFinite(Mt) && Mt < ymax && <circle cx={X(t0)} cy={Y(Mt)} r={5} style={{ fill: "var(--accent)" }} />}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        M({t0.toFixed(2)}) = {Number.isFinite(Mt) ? Mt.toFixed(4) : "∞"}; M(0) = 1; M′(0) = E(X) = {d.m1}; M″(0) = E(X²) = {d.m2}; Var(X) = {(d.m2 - d.m1 ** 2).toFixed(2)}
      </p>
      <figcaption className="viz-caption">
        The thick curve is M(t) = E(e^(tX)). The short-dashed line is its tangent at 0, with slope E(X); the long-dashed parabola 1 + E(X)t + E(X²)t²/2 also matches its curvature there. For Exp(1) the function blows up as t approaches 1, which is why an MGF need only exist near 0.
      </figcaption>
    </figure>
  );
}
