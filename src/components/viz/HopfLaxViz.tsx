"use client";

import { useState } from "react";

export const DATA = [
  { label: "g(x) = |x|", g: (x: number) => Math.abs(x) },
  { label: "g(x) = −|x|", g: (x: number) => -Math.abs(x) },
  { label: "g(x) = min(x², 1)", g: (x: number) => Math.min(x * x, 1) },
];

/** The Hopf-Lax formula u(x, t) = min over y of (x − y)²/(2t) + g(y), for uₜ + (uₓ)²/2 = 0. */
export function hopfLax(g: (y: number) => number, x: number, t: number) {
  if (t === 0) return g(x);
  let best = Infinity;
  for (let i = 0; i <= 4000; i++) {
    const y = -10 + i * 0.005;
    const v = ((x - y) * (x - y)) / (2 * t) + g(y);
    if (v < best) best = v;
  }
  return best;
}

export function HopfLaxViz() {
  const [k, setK] = useState(1);
  const [t, setT] = useState(2);
  const D = DATA[k];
  const X = (x: number) => 270 + x * 60;
  const Y = (y: number) => 95 - Math.max(-2.5, Math.min(2.5, y)) * 34;
  const xs = Array.from({ length: 161 }, (_, i) => -4 + i * 0.05);
  const gLine = xs.map((x) => `${X(x)},${Y(D.g(x))}`).join(" ");
  const uLine = xs.map((x) => `${X(x)},${Y(hopfLax(D.g, x, t))}`).join(" ");
  const u0 = hopfLax(D.g, 0, t);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="initial data">
        {DATA.map((d, i) => <button key={d.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>t = {t.toFixed(1)} <input type="range" min={0} max={3} step={0.5} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="The initial data and the Hopf-Lax solution at time t" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={Y(0)} x2={520} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={8} x2={X(0)} y2={182} style={{ stroke: "var(--grid-line)" }} />
        {[-4, -2, 2, 4].map((v) => <text key={v} x={X(v)} y={Y(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        <polyline points={gLine} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "4 3", strokeWidth: 1.5 }} />
        <polyline points={uLine} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(0)} cy={Y(u0)} r={5} style={{ fill: "var(--success)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {D.label}, t = {t.toFixed(1)}: u(0, t) = {u0.toFixed(2)}. {k === 0 ? "The corner opens into a smooth parabola." : k === 1 ? "The corner persists and the whole graph sinks by t/2." : "The bottom of the well spreads while the plateau stays at 1."}
      </p>
      <figcaption className="viz-caption">
        For uₜ + (uₓ)²/2 = 0 with initial data g, dashed, the Hopf-Lax formula gives u(x, t) as the least value of
        (x − y)²/(2t) + g(y) over all y. It is Lipschitz but need not be differentiable: an upward corner is smoothed at
        once, while a downward corner, where characteristics collide, survives.
      </figcaption>
    </figure>
  );
}
