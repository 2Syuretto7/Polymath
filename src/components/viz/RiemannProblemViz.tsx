"use client";

import { useState } from "react";

/** The Riemann problem for Burgers’ equation uₜ + (u²/2)ₓ = 0 with a jump from uL to uR at x = 0. */
export function burgersRiemann(uL: number, uR: number, x: number, t: number) {
  if (t === 0) return x < 0 ? uL : uR;
  if (uL > uR) {
    const s = (uL + uR) / 2;
    return x < s * t ? uL : uR;
  }
  if (x <= uL * t) return uL;
  if (x >= uR * t) return uR;
  return x / t;
}

export function RiemannProblemViz() {
  const [uL, setUL] = useState(2);
  const [uR, setUR] = useState(0);
  const t = 1;
  const X = (x: number) => 270 + x * 60;
  const Yu = (u: number) => 120 - u * 30;
  const xs = Array.from({ length: 321 }, (_, i) => -4 + i * 0.025);
  const prof = xs.map((x) => `${X(x)},${Yu(burgersRiemann(uL, uR, x, t))}`).join(" ");
  const shock = uL > uR;
  const s = (uL + uR) / 2;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>left state uL = {uL} <input type="range" min={-2} max={3} step={1} value={uL} onChange={(e) => setUL(Number(e.target.value))} aria-label="uL" /></label>
        <label>right state uR = {uR} <input type="range" min={-2} max={3} step={1} value={uR} onChange={(e) => setUR(Number(e.target.value))} aria-label="uR" /></label>
      </div>
      <svg viewBox="0 0 540 210" role="img" aria-label="The solution profile at time 1" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={Yu(0)} x2={520} y2={Yu(0)} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X(0)} y1={20} x2={X(0)} y2={200} style={{ stroke: "var(--grid-line)" }} />
        {[-4, -2, 2, 4].map((v) => <text key={v} x={X(v)} y={Yu(0) + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        {[-2, -1, 1, 2, 3].map((v) => <text key={v} x={X(0) - 6} y={Yu(v) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{v}</text>)}
        <polyline points={`${X(-4)},${Yu(uL)} ${X(0)},${Yu(uL)} ${X(0)},${Yu(uR)} ${X(4)},${Yu(uR)}`} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "4 3" }} />
        <polyline points={prof} style={{ fill: "none", stroke: shock ? "var(--danger)" : "var(--accent)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {uL === uR
          ? `uL = uR = ${uL}: the constant state simply persists.`
          : shock
            ? `uL > uR: a shock moving at speed s = (uL + uR)/2 = ${s.toFixed(2)}; at t = 1 it sits at x = ${s.toFixed(2)}.`
            : `uL < uR: a rarefaction fan, u = x/t for ${uL} ≤ x/t ≤ ${uR}; at t = 1 it spans [${uL}, ${uR}].`}
      </p>
      <figcaption className="viz-caption">
        The dashed step is the initial data and the solid curve the entropy solution at t = 1. Characteristics of
        Burgers&rsquo; equation move at speed u, so when faster fluid is behind they collide and a shock forms, moving at the
        Rankine-Hugoniot speed; when faster fluid is ahead they spread into a fan.
      </figcaption>
    </figure>
  );
}
