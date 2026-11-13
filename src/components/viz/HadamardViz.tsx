"use client";

import { useState } from "react";

/** Hadamard's example: tiny Cauchy data for Laplace's equation produce enormous solutions. */
export function HadamardViz() {
  const [n, setN] = useState(5);
  const [y, setY] = useState(1);
  const data = 1 / n;
  const amp = Math.sinh(n * y) / (n * n);
  const W = 520, H = 210;
  const top = Math.max(amp, data);
  const X = (x: number) => 30 + (x / (2 * Math.PI)) * 470, Y = (v: number) => 105 - (v / top) * 85;
  const xs = Array.from({ length: 401 }, (_, i) => (i / 400) * 2 * Math.PI);
  const path = (a: number) => xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(a * Math.sin(n * x)).toFixed(1)}`).join(" ");
  const fmt = (v: number) => (v >= 1000 ? v.toExponential(2) : v.toFixed(v < 1 ? 4 : 2));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>frequency n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={20} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>height y above the line where data are given: <span className="mono">{y.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={y} onChange={(e) => setY(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The data and the solution of Hadamard's example" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(2 * Math.PI)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <path d={path(data)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={path(amp)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.2 }} />
        <text x={X(0)} y={H - 6} style={{ fill: "var(--text-muted)", fontSize: 11 }}>x from 0 to 2π; vertical scale adjusts to the larger curve</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>size of the data uᵧ(x, 0) = sin(nx)/n: {fmt(data)}</div>
        <div style={{ fontWeight: 700 }}>size of the solution u(x, y) = sinh(ny) sin(nx)/n²: {fmt(amp)}</div>
      </div>
      <figcaption className="viz-caption">
        Solve uₓₓ + uᵧᵧ = 0 with u(x, 0) = 0 and uᵧ(x, 0) = sin(nx)/n. The dashed curve is the data, the solid curve the
        solution at height y. As n grows the data shrink to zero, yet at any fixed height y &gt; 0 the solution blows up
        like eⁿʸ/n². The solution does not depend continuously on the data, so this problem is ill-posed.
      </figcaption>
    </figure>
  );
}
