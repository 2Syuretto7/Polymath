"use client";

import { useState } from "react";

/** y′ + ky = sin t: every solution is a steady oscillation plus a transient C e^(−kt) that dies away. */
export function TransientViz() {
  const [k, setK] = useState(0.5);
  const [y0, setY0] = useState(2);
  const T = 20;
  // particular solution A sin t + B cos t with A = k/(k²+1), B = −1/(k²+1)
  const A = k / (k * k + 1), Bc = -1 / (k * k + 1);
  const yp = (t: number) => A * Math.sin(t) + Bc * Math.cos(t);
  const C = y0 - yp(0);
  const y = (t: number, c: number) => yp(t) + c * Math.exp(-k * t);
  const W = 520, H = 230, pad = 30, L = 3;
  const X = (t: number) => pad + (t / T) * (W - 2 * pad);
  const Y = (v: number) => H / 2 - (Math.max(-L, Math.min(L, v)) / L) * (H / 2 - 12);
  const ts = Array.from({ length: 401 }, (_, i) => (T * i) / 400);
  const path = (g: (t: number) => number) => ts.map((t, i) => `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(g(t)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>decay rate k: <span className="mono">{k}</span></span>
          <input type="range" min={0.1} max={2} step={0.1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
        <label><span>starting value y(0): <span className="mono">{y0}</span></span>
          <input type="range" min={-3} max={3} step={0.25} value={y0} onChange={(e) => setY0(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Solutions of a forced linear equation approaching a steady oscillation" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {[-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((v) => <path key={v} d={path((t) => y(t, v - yp(0)))} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1 }} />)}
        <path d={path(yp)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <path d={path((t) => y(t, C))} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        {[0, 5, 10, 15, 20].map((t) => <text key={t} x={X(t)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        y(t) = {A.toFixed(3)} sin t {Bc < 0 ? "−" : "+"} {Math.abs(Bc).toFixed(3)} cos t {C < 0 ? "−" : "+"} {Math.abs(C).toFixed(3)} e^(−{k}t)
      </p>
      <figcaption className="viz-caption">
        The dashed curve is the steady-state solution; the thin curves start from other values. The difference between any two solutions satisfies the homogeneous equation, so it is a multiple of e^(−kt) and fades. Larger k forgets the start faster and makes the steady oscillation smaller.
      </figcaption>
    </figure>
  );
}
