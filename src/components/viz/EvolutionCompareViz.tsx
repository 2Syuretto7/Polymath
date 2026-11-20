"use client";

import { useState } from "react";

const g = (x: number) => Math.exp(-x * x * 2);

/** The solution at time t of the transport, heat or wave equation on the line, starting from the bump g. */
export function solve(kind: "transport" | "heat" | "wave", x: number, t: number) {
  if (kind === "transport") return g(x - t);
  if (kind === "wave") return 0.5 * (g(x - t) + g(x + t));
  const s = 1 + 8 * t;
  return Math.exp((-2 * x * x) / s) / Math.sqrt(s);
}

const KINDS = [
  { key: "transport" as const, label: "transport uₜ + uₓ = 0", note: "the bump moves right at speed 1, unchanged in shape" },
  { key: "heat" as const, label: "heat uₜ = uₓₓ", note: "the bump spreads and flattens at once, with infinite speed of propagation" },
  { key: "wave" as const, label: "wave uₜₜ = uₓₓ", note: "the bump splits into two halves moving apart at speed 1" },
];

export function EvolutionCompareViz() {
  const [k, setK] = useState(0);
  const [t, setT] = useState(2);
  const K = KINDS[k];
  const X = (x: number) => 270 + x * 40;
  const Y = (u: number) => 170 - u * 130;
  const pts = (tt: number) => Array.from({ length: 241 }, (_, i) => -6 + i * 0.05).map((x) => `${X(x)},${Y(solve(K.key, x, tt))}`).join(" ");
  const peak = Array.from({ length: 1201 }, (_, i) => -6 + i * 0.01).reduce((best, x) => (solve(K.key, x, t) > solve(K.key, best, t) + 1e-9 ? x : best), -6);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="equation">
        {KINDS.map((q, i) => <button key={q.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{q.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>t = {t.toFixed(1)} <input type="range" min={0} max={4} step={0.1} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="The initial bump and the solution at time t" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={170} x2={520} y2={170} style={{ stroke: "var(--border-strong)" }} />
        {[-6, -4, -2, 0, 2, 4, 6].map((x) => <text key={x} x={X(x)} y={188} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>)}
        <polyline points={pts(0)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <polyline points={pts(t)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {K.label}, t = {t.toFixed(1)}: {K.note}. Highest point at x ≈ {Math.abs(peak) < 0.005 ? "0.00" : peak.toFixed(2)}.
      </p>
      <figcaption className="viz-caption">
        The same initial bump, dashed, evolves very differently. Transport carries data along lines, the heat equation
        smooths instantly and irreversibly, and the wave equation propagates at finite speed and keeps sharp features. The
        Laplace equation, with no time at all, describes the steady states the heat equation settles into.
      </figcaption>
    </figure>
  );
}
