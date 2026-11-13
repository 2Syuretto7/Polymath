"use client";

import { useState } from "react";

const FS = [
  { name: "x² + 3y", D: (a: number, b: number) => 3 * b, grad: [0, 3], diff: true, note: "Differentiable at 0 with derivative (0, 3): every directional derivative is the linear expression 3b." },
  { name: "x²y / (x² + y²)", D: (a: number, b: number) => a * a * b, grad: [0, 0], diff: false, note: "Every directional derivative exists and equals a²b, but this is not linear in (a, b): the partial derivatives are both 0, yet the derivative along (1, 1)/√2 is 1/(2√2). So f is not differentiable at 0." },
  { name: "x²y / (x⁴ + y²)", D: (a: number, b: number) => (Math.abs(b) < 1e-12 ? 0 : (a * a) / b), grad: [0, 0], diff: false, note: "Directional derivatives exist (a²/b, or 0 along the x-axis) but are unbounded near the x-axis; the function is not even continuous at 0." },
];

/** Directional derivatives at the origin as the direction turns: differentiable means they come from one linear map. */
export function DirectionalDerivViz() {
  const [fi, setFi] = useState(1);
  const [th, setTh] = useState(45);
  const F = FS[fi];
  const W = 560, H = 220, pl = 36;
  const angs = Array.from({ length: 361 }, (_, i) => i);
  const val = (deg: number) => { const t = (deg * Math.PI) / 180; return F.D(Math.cos(t), Math.sin(t)); };
  const lin = (deg: number) => { const t = (deg * Math.PI) / 180; return F.grad[0] * Math.cos(t) + F.grad[1] * Math.sin(t); };
  const R = fi === 0 ? 3.5 : 2;
  const clip = (v: number) => Math.max(-R, Math.min(R, v));
  const X = (deg: number) => pl + (deg / 360) * (W - pl - 10), Y = (v: number) => H / 2 - (clip(v) / R) * (H / 2 - 14);
  const path = (fn: (d: number) => number) => angs.map((d, i) => `${i ? "L" : "M"}${X(d).toFixed(1)},${Y(fn(d)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((q, i) => <button key={q.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>direction θ: <span className="mono">{th}°</span></span><input type="range" min={0} max={360} step={5} value={th} onChange={(e) => setTh(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Directional derivative against direction, with the linear prediction" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={pl} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {[0, 90, 180, 270, 360].map((d) => <text key={d} x={X(d)} y={H - 2} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{d}°</text>)}
        <path d={path(lin)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <path d={path(val)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <line x1={X(th)} y1={10} x2={X(th)} y2={H - 14} style={{ stroke: "var(--text-muted)" }} />
        <circle cx={X(th)} cy={Y(val(th))} r={5} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        D_v f(0) = {val(th).toFixed(4)}; linear prediction ∇f(0)·v = {lin(th).toFixed(4)}
      </p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{F.note}</p>
      <figcaption className="viz-caption">
        The solid curve is the directional derivative along v = (cos θ, sin θ); the dashed one is what a linear derivative built
        from the partial derivatives would give. f is differentiable exactly when some linear map L gives f(h) = f(0) + L h + o(|h|),
        and then the two curves must coincide.
      </figcaption>
    </figure>
  );
}
