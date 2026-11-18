"use client";

import { useState } from "react";

const FNS = [
  { key: "s1", label: "sin(πx)", u: (x: number) => Math.sin(Math.PI * x), du: (x: number) => Math.PI * Math.cos(Math.PI * x) },
  { key: "s2", label: "sin(2πx)", u: (x: number) => Math.sin(2 * Math.PI * x), du: (x: number) => 2 * Math.PI * Math.cos(2 * Math.PI * x) },
  { key: "par", label: "x(1 − x)", u: (x: number) => x * (1 - x), du: (x: number) => 1 - 2 * x },
  { key: "tent", label: "tent min(x, 1 − x)", u: (x: number) => Math.min(x, 1 - x), du: (x: number) => (x < 0.5 ? 1 : -1) },
];
const N = 4000;

/** The Poincaré inequality on H¹₀(0, 1): ‖u‖ ≤ (1/π)‖u′‖, with equality for sin(πx). */
export function PoincareRatioViz() {
  const [k, setK] = useState(0);
  const F = FNS[k];
  let a = 0, b = 0, top = 0, dtop = 0;
  for (let i = 0; i < N; i++) {
    const x = (i + 0.5) / N;
    a += F.u(x) ** 2 / N; b += F.du(x) ** 2 / N;
    top = Math.max(top, Math.abs(F.u(x))); dtop = Math.max(dtop, Math.abs(F.du(x)));
  }
  const ratio = Math.sqrt(a / b);
  const X = (x: number) => 30 + x * 470;
  const Yu = (v: number) => 60 - (v / top) * 45, Yd = (v: number) => 148 - (v / dtop) * 40;
  const pts = (f: (x: number) => number, Y: (v: number) => number) => Array.from({ length: 401 }, (_, i) => { const x = i / 400; return `${X(x)},${Y(f(x))}`; }).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((f, i) => <button key={f.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{f.label}</button>)}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A function vanishing at both ends, and its weak derivative" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={60} x2={500} y2={60} style={{ stroke: "var(--border)" }} />
        <line x1={30} y1={148} x2={500} y2={148} style={{ stroke: "var(--border)" }} />
        <polyline points={pts(F.u, Yu)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <polyline points={pts(F.du, Yd)} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        <text x={500} y={100} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 11 }}>u, scaled to fit</text>
        <text x={500} y={214} textAnchor="end" style={{ fill: "var(--text)", fontSize: 11 }}>weak derivative u′, scaled to fit</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖u‖ = {Math.sqrt(a).toFixed(4)}, ‖u′‖ = {Math.sqrt(b).toFixed(4)}. Ratio ‖u‖/‖u′‖ = {ratio.toFixed(4)}; the bound is 1/π = {(1 / Math.PI).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        Every u in H¹₀(0, 1), square-integrable with a square-integrable weak derivative and zero at both ends, has
        ‖u‖ ≤ (1/π)‖u′‖. The tent has no classical derivative at ½, but its weak derivative is the step shown. The ratio is
        largest for sin(πx), the first eigenfunction of −d²/dx².
      </figcaption>
    </figure>
  );
}
