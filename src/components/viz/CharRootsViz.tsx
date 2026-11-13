"use client";

import { useState } from "react";

/** y″ + b y′ + c y = 0 with y(0) = 1, y′(0) = 0: the roots of r² + br + c decide the behaviour. */
export function CharRootsViz() {
  const [b, setB] = useState(0.5);
  const [c, setC] = useState(4);
  const disc = b * b - 4 * c;
  let kind: string, y: (t: number) => number, roots: [number, number][], form: string;
  if (Math.abs(disc) < 1e-9) {
    const r = -b / 2;
    kind = b === 0 ? "constant (double root 0)" : "critically damped (repeated real root)";
    y = (t) => (1 - r * t) * Math.exp(r * t);
    roots = [[r, 0], [r, 0]];
    form = `y = (C₁ + C₂t) e^(${r.toFixed(2)}t)`;
  } else if (disc > 0) {
    const r1 = (-b + Math.sqrt(disc)) / 2, r2 = (-b - Math.sqrt(disc)) / 2;
    kind = "overdamped (two real roots)";
    y = (t) => (r2 * Math.exp(r1 * t) - r1 * Math.exp(r2 * t)) / (r2 - r1);
    roots = [[r1, 0], [r2, 0]];
    form = `y = C₁e^(${r1.toFixed(2)}t) + C₂e^(${r2.toFixed(2)}t)`;
  } else {
    const al = -b / 2, om = Math.sqrt(-disc) / 2;
    kind = b === 0 ? "undamped (purely imaginary roots)" : "underdamped (complex roots)";
    y = (t) => Math.exp(al * t) * (Math.cos(om * t) - (al / om) * Math.sin(om * t));
    roots = [[al, om], [al, -om]];
    form = `y = e^(${al.toFixed(2)}t)(C₁ cos ${om.toFixed(2)}t + C₂ sin ${om.toFixed(2)}t)`;
  }
  const W = 520, H = 220, L = 30, T = 15;
  const X = (t: number) => L + (t / T) * (W - L - 10);
  const Y = (v: number) => H / 2 - 12 - (Math.max(-1.3, Math.min(1.3, v)) / 1.2) * (H / 2 - 24);
  const path = Array.from({ length: 401 }, (_, i) => { const t = (i / 400) * T; return `${i ? "L" : "M"}${X(t).toFixed(1)},${Y(y(t)).toFixed(1)}`; }).join(" ");
  const S = 180, R = 3.2, PX = (x: number) => S / 2 + (x / R) * (S / 2 - 10), PY = (v: number) => S / 2 - (v / R) * (S / 2 - 10);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>damping b: <span className="mono">{b.toFixed(1)}</span></span>
          <input type="range" min={0} max={5} step={0.1} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>stiffness c: <span className="mono">{c.toFixed(1)}</span></span>
          <input type="range" min={0} max={6} step={0.1} value={c} onChange={(e) => setC(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", marginTop: 8 }}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The solution y(t)" style={{ flex: "3 1 300px", minWidth: 0 }}>
          <line x1={L} y1={Y(0)} x2={W - 10} y2={Y(0)} style={{ stroke: "var(--border)" }} />
          <line x1={L} y1={8} x2={L} y2={H - 20} style={{ stroke: "var(--border)" }} />
          {[1, -1].map((v) => <text key={v} x={L - 6} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
          {[0, 5, 10, 15].map((v) => <text key={v} x={X(v)} y={H - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
          <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        </svg>
        <svg viewBox={`0 0 ${S} ${S}`} role="img" aria-label="Roots of the characteristic polynomial in the complex plane" style={{ flex: "1 1 140px", maxWidth: 200, minWidth: 0 }}>
          <rect x={0} y={0} width={S / 2} height={S} style={{ fill: "var(--accent-soft)", fillOpacity: 0.3 }} />
          <line x1={0} y1={PY(0)} x2={S} y2={PY(0)} style={{ stroke: "var(--border)" }} />
          <line x1={PX(0)} y1={0} x2={PX(0)} y2={S} style={{ stroke: "var(--border)" }} />
          <text x={S - 4} y={PY(0) - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>Re</text>
          <text x={PX(0) + 4} y={10} style={{ fill: "var(--text-muted)", fontSize: 10 }}>Im</text>
          {roots.map(([re, im], k) => <circle key={k} cx={PX(Math.max(-R, re))} cy={PY(im)} r={k ? 5 : 7} style={{ fill: k ? "var(--accent)" : "none", stroke: "var(--accent)", strokeWidth: 2 }} />)}
        </svg>
      </div>
      <p className="mono" style={{ margin: "4px 0" }}>r² + {b.toFixed(1)}r + {c.toFixed(1)} = 0, discriminant {disc.toFixed(2)}: {kind}</p>
      <p className="mono" style={{ margin: "4px 0" }}>{form}</p>
      <figcaption className="viz-caption">
        Trying y = e^(rt) turns the equation into r² + br + c = 0. Real roots give pure exponentials, complex roots α ± iω give oscillation at frequency ω inside an envelope e^(αt). Roots in the shaded left half-plane mean every solution decays. Try b = 2, c = 1 for the critical case.
      </figcaption>
    </figure>
  );
}
