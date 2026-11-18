"use client";

import { useState } from "react";
import { Axes, curvePath, scales, type View } from "./Plot";

type Fn = { name: string; f: (x: number) => number; df: (x: number) => number; root: number; v: View; x0: number };
const FNS: Fn[] = [
  { name: "x² − 2", f: (x) => x * x - 2, df: (x) => 2 * x, root: Math.SQRT2, v: { xmin: -0.5, xmax: 3.5, ymin: -3, ymax: 9, w: 560, h: 260 }, x0: 3 },
  { name: "x³ − 2x − 5", f: (x) => x ** 3 - 2 * x - 5, df: (x) => 3 * x * x - 2, root: 2.0945514815423265, v: { xmin: 0, xmax: 4, ymin: -10, ymax: 40, w: 560, h: 260 }, x0: 3.5 },
  { name: "cube root of x", f: (x) => Math.cbrt(x), df: (x) => 1 / (3 * Math.cbrt(x) ** 2), root: 0, v: { xmin: -4, xmax: 4, ymin: -2, ymax: 2, w: 560, h: 260 }, x0: 0.5 },
];

/** Newton’s method: follow the tangent to the axis, again and again. */
export function NewtonTangentViz() {
  const [fi, setFi] = useState(0);
  const [steps, setSteps] = useState(1);
  const F = FNS[fi];
  const xs = [F.x0];
  for (let i = 0; i < steps; i++) { const x = xs[xs.length - 1]; xs.push(x - F.f(x) / F.df(x)); }
  const { X, Y } = scales(F.v);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((g, i) => (
          <button key={g.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => { setFi(i); setSteps(1); }}>{g.name}</button>
        ))}
      </div>
      <Axes v={F.v} label={`Newton iterates for ${F.name}`} xStep={1} yStep={F.v.ymax - F.v.ymin > 16 ? 10 : 1}>
        <path d={curvePath(F.v, F.f)} className="plot-curve" />
        {xs.slice(0, -1).map((x, i) => {
          const nx = xs[i + 1];
          return (
            <g key={i}>
              <line x1={X(x)} y1={Y(0)} x2={X(x)} y2={Y(F.f(x))} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
              <line x1={X(x)} y1={Y(F.f(x))} x2={X(nx)} y2={Y(0)} style={{ stroke: "var(--accent)", strokeWidth: 1.8 }} />
              <circle cx={X(x)} cy={Y(F.f(x))} r={4} className="plot-point" />
            </g>
          );
        })}
      </Axes>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSteps(steps + 1)} disabled={steps >= 8}>Take another step</button>
        <button type="button" className="btn" onClick={() => setSteps(1)}>Start again</button>
      </div>
      <div className="mono" style={{ display: "grid", gap: 2, fontSize: 13 }}>
        {xs.map((x, i) => (
          <div key={i}>x{"₀₁₂₃₄₅₆₇₈₉"[i]} = {Number.isFinite(x) ? x.toFixed(12) : "undefined"} &nbsp; error {Number.isFinite(x) ? Math.abs(x - F.root).toExponential(2) : "undefined"}</div>
        ))}
      </div>
      <figcaption className="viz-caption">
        Each step replaces f by its tangent line at the current point and jumps to where the tangent meets the axis:
        xₙ₊₁ = xₙ − f(xₙ)/f′(xₙ). Near a simple root the error is roughly squared at every step, so the number of correct
        digits doubles. For the cube root, the tangent always overshoots: each step doubles the distance from the root and
        flips its sign.
      </figcaption>
    </figure>
  );
}
