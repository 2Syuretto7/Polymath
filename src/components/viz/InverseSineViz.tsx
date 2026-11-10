"use client";

import { useState } from "react";
import { Axes, curvePath, scales, type View } from "./Plot";

const V: View = { xmin: -7, xmax: 7, ymin: -1.6, ymax: 1.6, w: 560, h: 220 };
const H = Math.PI / 2;
const sgn = (s: string) => s.replace(/^-/, "−");

/** sin x = c has infinitely many solutions; arcsin picks the one between −π/2 and π/2. */
export function InverseSineViz() {
  const [c, setC] = useState(0.5);
  const { X, Y } = scales(V);
  const p = Math.asin(c);
  const xs: number[] = [];
  for (let k = -2; k <= 2; k++) {
    for (const x of [p + 2 * Math.PI * k, Math.PI - p + 2 * Math.PI * k]) {
      if (x >= V.xmin && x <= V.xmax && !xs.some((y) => Math.abs(y - x) < 1e-9)) xs.push(x);
    }
  }
  const deg = (p * 180) / Math.PI;

  return (
    <figure className="viz">
      <Axes v={V} label={`The line y = ${c} meets the sine curve ${xs.length} times in view; arcsin ${c} is ${p.toFixed(3)}`}>
        <line x1={X(-H)} y1={0} x2={X(-H)} y2={V.h} className="plot-mirror" />
        <line x1={X(H)} y1={0} x2={X(H)} y2={V.h} className="plot-mirror" />
        <path d={curvePath(V, Math.sin, 800)} className="plot-ghost" />
        <path d={curvePath(V, (x) => (Math.abs(x) <= H ? Math.sin(x) : NaN), 800)} className="plot-curve" style={{ strokeWidth: 3.5 }} />
        <line x1={0} y1={Y(c)} x2={V.w} y2={Y(c)} className="plot-line" />
        {xs.map((x) => (
          <circle key={x} cx={X(x)} cy={Y(c)} r={Math.abs(x - p) < 1e-9 ? 7 : 5} className={Math.abs(x - p) < 1e-9 ? "plot-hot" : "plot-point"} />
        ))}
      </Axes>
      <div className="viz-sliders">
        <label>
          <span>Height <span className="mono">c = {sgn(c.toFixed(2))}</span></span>
          <input type="range" min={-1} max={1} step={0.05} value={c} onChange={(e) => setC(Number(e.target.value))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        The line <span className="mono">y = {sgn(c.toFixed(2))}</span> meets the wave {xs.length} times in this window, and
        infinitely often in all. Between the dotted lines at <span className="mono">±π/2</span> the solid piece of the curve
        rises steadily, so it meets the line exactly once, at{" "}
        <span className="mono">arcsin({sgn(c.toFixed(2))}) = {sgn(p.toFixed(3))} ≈ {sgn(deg.toFixed(1))}°</span>.
      </figcaption>
    </figure>
  );
}
