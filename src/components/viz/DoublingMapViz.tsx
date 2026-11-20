"use client";

import { useState } from "react";

const Q = 999999937, P = 314159265, STEPS = 40;

/** Orbits of the doubling map x ↦ 2x mod 1 for two starts p/Q and (p + d)/Q, in exact integer arithmetic. */
export function doublingOrbits(d: number) {
  const a: number[] = [P], b: number[] = [P + d];
  for (let n = 1; n <= STEPS; n++) { a.push((2 * a[n - 1]) % Q); b.push((2 * b[n - 1]) % Q); }
  const dist = a.map((x, n) => { const t = Math.abs(x - b[n]) / Q; return Math.min(t, 1 - t); });
  const split = dist.findIndex((t) => t > 0.1);
  return { a: a.map((x) => x / Q), b: b.map((x) => x / Q), dist, split };
}

const bits = (x: number, k: number) => { let s = ""; for (let i = 0; i < k; i++) { x *= 2; s += x >= 1 ? "1" : "0"; x -= Math.floor(x); } return s; };

export function DoublingMapViz() {
  const [k, setK] = useState(6);
  const d = Math.round(Q * 10 ** -k);
  const { a, b, dist, split } = doublingOrbits(d);
  const [n, setN] = useState(0);
  const gx = (i: number) => 40 + (i / STEPS) * 470, gy = (v: number) => 200 - v * 170;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>starting gap 10<sup>−{k}</sup> <input type="range" min={2} max={8} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="gap exponent" /></label>
        <label>step n = {n} <input type="range" min={0} max={STEPS} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="step" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Two orbits of the doubling map" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={510} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={30} x2={40} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.5, 1].map((v) => <text key={v} x={34} y={gy(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        {split >= 0 && <rect x={gx(split) - 4} y={30} width={gx(STEPS) - gx(split) + 8} height={170} style={{ fill: "var(--danger-soft)" }} />}
        <line x1={gx(n)} y1={30} x2={gx(n)} y2={200} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        {a.map((v, i) => <circle key={`a${i}`} cx={gx(i)} cy={gy(v)} r={4} style={{ fill: "var(--accent)" }} />)}
        {b.map((v, i) => <circle key={`b${i}`} cx={gx(i)} cy={gy(v)} r={2.5} style={{ fill: "var(--success)" }} />)}
        <text x={40} y={18} style={{ fill: "var(--accent)", fontSize: 11 }}>blue: orbit of x₀</text>
        <text x={160} y={18} style={{ fill: "var(--success)", fontSize: 11 }}>green: orbit of a point 10<tspan dy={-5} fontSize={8}>−{k}</tspan><tspan dy={5}> away</tspan></text>
        <text x={275} y={222} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>step n from 0 to {STEPS}; shaded once the orbits are more than 0.1 apart</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Step {n}: binary digits of x = 0.{bits(a[n], 24)}…; distance {dist[n].toExponential(2)}. The orbits first differ by more than 0.1 at step {split}.
      </p>
      <figcaption className="viz-caption">
        The doubling map sends x to 2x mod 1. In binary it deletes the first digit and shifts the rest left, so after n
        steps the orbit is governed by digits that were once 2⁻ⁿ small. Nearby points separate at rate 2ⁿ: sensitive
        dependence on initial conditions, in a map anyone can compute by hand.
      </figcaption>
    </figure>
  );
}
