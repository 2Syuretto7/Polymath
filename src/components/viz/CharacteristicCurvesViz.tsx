"use client";

import { useState } from "react";

export const SPEEDS = [
  { label: "uₜ + uₓ = 0", c: (_x: number) => 1, curve: (x0: number, t: number) => x0 + t, formula: "x = x₀ + t" },
  { label: "uₜ + x uₓ = 0", c: (x: number) => x, curve: (x0: number, t: number) => x0 * Math.exp(t), formula: "x = x₀ eᵗ" },
  { label: "uₜ − x uₓ = 0", c: (x: number) => -x, curve: (x0: number, t: number) => x0 * Math.exp(-t), formula: "x = x₀ e⁻ᵗ" },
];

/** Characteristic curves of uₜ + c(x) uₓ = 0: the solution is constant along each curve dx/dt = c(x). */
export function CharacteristicCurvesViz() {
  const [k, setK] = useState(1);
  const [x0, setX0] = useState(1);
  const S = SPEEDS[k];
  const X = (x: number) => 270 + x * 50;
  const T = (t: number) => 190 - t * 150;
  const path = (a: number) => Array.from({ length: 51 }, (_, i) => i / 50).map((t) => `${X(Math.max(-5.2, Math.min(5.2, S.curve(a, t))))},${T(t)}`).join(" ");
  const end = S.curve(x0, 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="equation">
        {SPEEDS.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>starting point x₀ = {x0.toFixed(1)} <input type="range" min={-2} max={2} step={0.5} value={x0} onChange={(e) => setX0(Number(e.target.value))} aria-label="x0" /></label>
      </div>
      <svg viewBox="0 0 540 210" role="img" aria-label="Characteristic curves in the x, t plane" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={T(0)} x2={530} y2={T(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={T(0)} x2={X(0)} y2={T(1.05)} style={{ stroke: "var(--grid-line)" }} />
        <text x={X(0) + 4} y={T(1.05) + 4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = 1</text>
        <text x={520} y={T(0) - 6} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>x</text>
        {[-2, -1.5, -1, -0.5, 0, 0.5, 1, 1.5, 2].map((a) => (
          <polyline key={a} points={path(a)} style={{ fill: "none", stroke: a === x0 ? "var(--accent)" : "var(--text-faint)", strokeWidth: a === x0 ? 3 : 1 }} />
        ))}
        <circle cx={X(x0)} cy={T(0)} r={5} style={{ fill: "var(--accent)" }} />
        {Math.abs(end) <= 5.2 && <circle cx={X(end)} cy={T(1)} r={5} style={{ fill: "var(--success)" }} />}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {S.label}: characteristics {S.formula}. From x₀ = {x0.toFixed(1)}, at t = 1 the curve is at x = {end.toFixed(2)}, and u there equals g({x0.toFixed(1)}).
      </p>
      <figcaption className="viz-caption">
        Along a curve with dx/dt = c(x), the chain rule gives du/dt = uₜ + c(x) uₓ = 0, so u is constant. The PDE reduces
        to ordinary differential equations, and the initial data g are carried along the curves: u(x, t) = g(x₀) where x₀
        is the starting point of the curve through (x, t).
      </figcaption>
    </figure>
  );
}
