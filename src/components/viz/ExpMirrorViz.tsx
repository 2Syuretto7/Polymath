"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

const V: View = { xmin: -3, xmax: 5, ymin: -3, ymax: 5, w: 380, h: 380 };

/** exp is the mirror image of ln in the line y = x, so its slopes are the reciprocals of ln's: exp′ = exp. */
export function ExpMirrorViz() {
  const [x, setX] = useState(1);
  const { X, Y } = scales(V);
  const y = Math.exp(x);
  const four = (n: number) => fmtNum(Number(n.toPrecision(6)));
  const tanExp = (t: number) => y + y * (t - x);
  const tanLog = (t: number) => x + (t - y) / y;

  return (
    <figure className="viz">
      <div style={{ maxWidth: 420, margin: "0 auto" }}>
        <Axes v={V} label={`The graphs of ln x and exp x, mirror images in the line y = x, with tangents at (${four(x)}, ${four(y)}) and (${four(y)}, ${four(x)})`}>
          <path d={curvePath(V, (t) => t, 2)} className="plot-mirror" />
          <path d={curvePath(V, (t) => (t > 0 ? Math.log(t) : NaN), 800)} className="plot-ghost" style={{ strokeDasharray: "none", strokeWidth: 2 }} />
          <path d={curvePath(V, Math.exp, 800)} className="plot-curve" />
          <path d={curvePath(V, tanExp, 2)} className="plot-line" />
          <path d={curvePath(V, tanLog, 2)} className="plot-line" />
          <line x1={X(x)} y1={Y(y)} x2={X(y)} y2={Y(x)} className="plot-mirror" />
          <circle cx={X(x)} cy={Y(y)} r={5} className="plot-hot" />
          <circle cx={X(y)} cy={Y(x)} r={5} className="plot-hot" />
        </Axes>
      </div>
      <p className="mono-meta" style={{ margin: "4px 0 0", textTransform: "none", textAlign: "center" }}>
        solid: exp x; grey: ln x; dotted: the mirror line y = x
      </p>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          x = <span className="mono">{four(x)}</span>
          <input type="range" className="viz-range" min={-2} max={1.5} step={0.05} value={x} onChange={(e) => setX(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>exp x</td><td className="mono">{four(y)}</td></tr>
          <tr><td>slope of ln at the mirror point, 1/exp x</td><td className="mono">{four(1 / y)}</td></tr>
          <tr><td>slope of exp at x, the reciprocal of that</td><td className="mono">{four(y)}</td></tr>
          <tr><td>slope of exp at x, measured as (exp(x + h) − exp(x − h)) / 2h with h = 0.0001</td><td className="mono">{four((Math.exp(x + 1e-4) - Math.exp(x - 1e-4)) / 2e-4)}</td></tr>
          {[10, 100, 1000].map((n) => (
            <tr key={n}><td>(1 + x/n)ⁿ with n = {n}</td><td className="mono">{four((1 + x / n) ** n)}</td></tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Reflecting a graph in the line y = x swaps rise and run, so it turns each slope into its reciprocal. The slope of ln
        at the point (exp x, x) is 1/exp x; so the slope of exp at (x, exp x) is exp x. The last rows show another route to
        the same function: compound growth in ever smaller steps.
      </figcaption>
    </figure>
  );
}
