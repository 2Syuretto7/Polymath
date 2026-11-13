"use client";

import { useState } from "react";

type D = { name: string; f: (x: number) => number; F: (x: number) => number; top: number };
const cl = (x: number) => Math.min(1, Math.max(0, x));
const DS: D[] = [
  { name: "uniform on [0, 2]", f: (x) => (x >= 0 && x <= 2 ? 0.5 : 0), F: (x) => cl(x / 2), top: 1.2 },
  { name: "triangle", f: (x) => Math.max(0, 1 - Math.abs(x - 1)), F: (x) => (x <= 0 ? 0 : x <= 1 ? (x * x) / 2 : x <= 2 ? 1 - ((2 - x) ** 2) / 2 : 1), top: 1.2 },
  { name: "rising", f: (x) => (x >= 0 && x <= 2 ? x / 2 : 0), F: (x) => cl((x * x) / 4), top: 1.2 },
  { name: "narrow uniform", f: (x) => (x >= 0.8 && x <= 1.2 ? 2.5 : 0), F: (x) => cl((x - 0.8) / 0.4), top: 2.8 },
];

/** A density curve: probability is area under it, and a single point has probability zero. */
export function IntervalAreaViz() {
  const [di, setDi] = useState(1);
  const [a, setA] = useState(0.5);
  const [b, setB] = useState(1.25);
  const d = DS[di];
  const lo = Math.min(a, b), hi = Math.max(a, b);
  const W = 520, H = 210, pad = 30;
  const X = (x: number) => pad + ((x + 0.25) / 2.5) * (W - 2 * pad);
  const Y = (y: number) => H - 25 - (y / d.top) * (H - 40);
  const grid = (u: number, v: number) => Array.from({ length: 201 }, (_, i) => u + ((v - u) * i) / 200);
  const curve = grid(-0.25, 2.25).map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(d.f(x)).toFixed(1)}`).join(" ");
  const area = `M${X(lo)},${Y(0)} ` + grid(lo, hi).map((x) => `L${X(x).toFixed(1)},${Y(d.f(x)).toFixed(1)}`).join(" ") + ` L${X(hi)},${Y(0)} Z`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Density">
        {DS.map((x, i) => <button key={x.name} type="button" aria-pressed={di === i} className={di === i ? "seg is-on" : "seg"} onClick={() => setDi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>a: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={0} max={2} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>b: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={0} max={2} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A density curve with the area between a and b shaded" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <path d={area} style={{ fill: "var(--accent)", fillOpacity: 0.3 }} />
        <path d={curve} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {[0, 0.5, 1, 1.5, 2].map((t) => <text key={t} x={X(t)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        <line x1={X(0) - 4} y1={Y(1)} x2={X(0) + 4} y2={Y(1)} style={{ stroke: "var(--text-faint)" }} />
        <text x={X(0) - 8} y={Y(1) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>1</text>
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        P({lo.toFixed(2)} ≤ X ≤ {hi.toFixed(2)}) = F({hi.toFixed(2)}) − F({lo.toFixed(2)}) = {(d.F(hi) - d.F(lo)).toFixed(4)}; f({b.toFixed(2)}) = {d.f(b).toFixed(2)}
      </p>
      <figcaption className="viz-caption">
        The shaded area is the probability that X lands between a and b. Bring a and b together and the area shrinks to nothing: every single value has probability zero. The narrow uniform has density 2.5, more than 1, which is allowed, because a density is a rate of probability per unit length, not a probability.
      </figcaption>
    </figure>
  );
}
