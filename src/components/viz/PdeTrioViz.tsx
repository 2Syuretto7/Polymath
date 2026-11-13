"use client";

import { useState } from "react";

type Kind = "transport" | "heat" | "wave";
const S0 = 0.5, KH = 0.5, CW = 1;
const u0 = (x: number) => Math.exp(-(x * x) / (2 * S0 * S0));

/** Three model equations acting on the same initial bump: it moves, it spreads, it splits. */
export function PdeTrioViz() {
  const [kind, setKind] = useState<Kind>("heat");
  const [t, setT] = useState(0.75);
  const u = (x: number) => {
    if (kind === "transport") return u0(x - CW * t);
    if (kind === "wave") return 0.5 * (u0(x - CW * t) + u0(x + CW * t));
    const s2 = S0 * S0 + 2 * KH * t;
    return (S0 / Math.sqrt(s2)) * Math.exp(-(x * x) / (2 * s2));
  };
  const W = 520, H = 220;
  const X = (x: number) => 20 + ((x + 5) / 10) * 480, Y = (y: number) => 180 - y * 140;
  const xs = Array.from({ length: 401 }, (_, i) => -5 + (i / 400) * 10);
  const path = (g: (x: number) => number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(g(x)).toFixed(1)}`).join(" ");
  let area = 0, peak = 0;
  for (const x of xs) { const v = u(x); area += v * (10 / 400); peak = Math.max(peak, v); }
  const EQ = { transport: "uₜ + c uₓ = 0, with c = 1", heat: "uₜ = k uₓₓ, with k = 0.5", wave: "uₜₜ = c² uₓₓ, with c = 1, starting at rest" };
  const WHAT = { transport: "the bump moves to the right without changing shape", heat: "the bump spreads out and flattens", wave: "the bump splits into two halves moving apart" };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Equation">
        {(["transport", "heat", "wave"] as Kind[]).map((k) => <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{k}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>time t: <span className="mono">{t.toFixed(2)}</span></span>
          <input type="range" min={0} max={3} step={0.05} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The solution u at time t and the initial bump" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(-5)} y1={Y(0)} x2={X(5)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {[-4, -2, 0, 2, 4].map((x) => <text key={x} x={X(x)} y={Y(0) + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{x}</text>)}
        <path d={path(u0)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={path(u) + ` L${X(5)},${Y(0)} L${X(-5)},${Y(0)} Z`} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X(-4.9)} y={24} style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: the initial bump at t = 0</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>{EQ[kind]}</div>
        <div>peak height = {peak.toFixed(3)}, area under the curve = {area.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>{WHAT[kind]}</div>
      </div>
      <figcaption className="viz-caption">
        The same initial profile evolves very differently under three model equations. Transport carries it along at speed c;
        heat diffuses it, so the peak falls as σ₀/√(σ₀² + 2kt) with σ₀ = 0.5; the wave equation sends half one way and half the
        other. In all three the area under the curve is conserved.
      </figcaption>
    </figure>
  );
}
