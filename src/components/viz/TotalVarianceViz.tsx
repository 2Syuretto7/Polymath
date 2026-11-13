"use client";

import { useState } from "react";

/** Three equally likely groups: total variance = average within-group variance + variance of the group means. */
export function TotalVarianceViz() {
  const [dd, setDd] = useState(2);
  const [s, setS] = useState(1);
  const means = [-dd, 0, dd];
  const within = s * s, between = (2 * dd * dd) / 3, total = within + between;
  const W = 520, H = 200, pad = 20, L = 8;
  const X = (x: number) => W / 2 + (x / L) * (W / 2 - pad);
  const phi = (x: number, m: number) => Math.exp(-((x - m) ** 2) / (2 * s * s)) / (s * Math.sqrt(2 * Math.PI));
  const mix = (x: number) => means.reduce((t, m) => t + phi(x, m), 0) / 3;
  const top = Math.max(...Array.from({ length: 161 }, (_, i) => mix(-8 + i * 0.1))) * 1.15;
  const Y = (y: number) => H - 25 - (Math.min(y, top) / top) * (H - 40);
  const xs = Array.from({ length: 401 }, (_, i) => -L + (2 * L * i) / 400);
  const path = (f: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`).join(" ");
  const bar = (v: number, label: string, strong: boolean) => (
    <div style={{ display: "grid", gridTemplateColumns: "190px 1fr", gap: 8, alignItems: "center", fontSize: 13 }}>
      <span className="mono">{label} {v.toFixed(2)}</span>
      <div style={{ height: 12, background: "var(--bg-subtle)", border: "1px solid var(--border)", borderRadius: 3 }}>
        <div style={{ width: `${(v / 8.25) * 100}%`, height: "100%", background: strong ? "var(--accent)" : "var(--text-faint)" }} />
      </div>
    </div>
  );
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>distance between group means d: <span className="mono">{dd}</span></span>
          <input type="range" min={0} max={3} step={0.25} value={dd} onChange={(e) => setDd(Number(e.target.value))} /></label>
        <label><span>spread within each group σ: <span className="mono">{s}</span></span>
          <input type="range" min={0.25} max={1.5} step={0.25} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Three group densities and their mixture" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {means.map((m, k) => <path key={k} d={path((x) => phi(x, m) / 3)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />)}
        <path d={path(mix)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {[-6, -3, 0, 3, 6].map((t) => <text key={t} x={X(t)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <div style={{ display: "grid", gap: 6, marginTop: 6 }}>
        {bar(within, "E(Var(Y | G)) =", false)}
        {bar(between, "Var(E(Y | G)) =", false)}
        {bar(total, "Var(Y) =", true)}
      </div>
      <figcaption className="viz-caption">
        Y is drawn by first picking one of three equally likely groups G, with means −d, 0 and d, then drawing from that group with standard deviation σ. The thick curve is the whole population. Its variance splits exactly into the average spread within groups, σ², plus the spread of the group means, 2d²/3.
      </figcaption>
    </figure>
  );
}
