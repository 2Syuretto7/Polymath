"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Curve = { name: string; f: (x: number) => number; a: number; b: number; exact: number; exactLabel: string; v: View };
const CURVES: Curve[] = [
  { name: "y = x²", f: (x) => x * x, a: 0, b: 1, exact: (2 * Math.sqrt(5) + Math.log(2 + Math.sqrt(5))) / 4, exactLabel: "(2√5 + ln(2 + √5))/4", v: { xmin: -0.2, xmax: 1.3, ymin: -0.2, ymax: 1.2, w: 420, h: 340 } },
  { name: "quarter circle", f: (x) => Math.sqrt(Math.max(0, 1 - x * x)), a: 0, b: 1, exact: Math.PI / 2, exactLabel: "π/2", v: { xmin: -0.2, xmax: 1.3, ymin: -0.2, ymax: 1.2, w: 420, h: 340 } },
  { name: "y = (2/3)x^(3/2)", f: (x) => (2 / 3) * x ** 1.5, a: 0, b: 3, exact: 14 / 3, exactLabel: "14/3", v: { xmin: -0.3, xmax: 3.3, ymin: -0.3, ymax: 3.8, w: 380, h: 420 } },
];

/** A curve approximated by a polygon of n chords; the chord lengths add up to an integral. */
export function ArcLengthViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(3);
  const C = CURVES[k];
  const { X, Y } = scales(C.v);
  const pts = Array.from({ length: n + 1 }, (_, i) => { const x = C.a + ((C.b - C.a) * i) / n; return [x, C.f(x)] as const; });
  let len = 0;
  for (let i = 1; i <= n; i++) len += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  const six = (v: number) => fmtNum(Number(v.toPrecision(6)));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Curve">
        {CURVES.map((c, i) => (
          <button key={c.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => setK(i)}>
            <span className="mono">{c.name}</span>
          </button>
        ))}
      </div>
      <div style={{ maxWidth: 460, margin: "0 auto" }}>
        <Axes v={C.v} label={`The curve ${C.name} with an inscribed polygon of ${n} chords`}>
          <path d={curvePath(C.v, (t) => (t >= C.a && t <= C.b ? C.f(t) : NaN), 600)} className="plot-curve" />
          <path d={pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)} ${Y(y).toFixed(1)}`).join(" ")} className="plot-line" style={{ fill: "none", strokeWidth: 2 }} />
          {pts.map(([x, y], i) => <circle key={i} cx={X(x)} cy={Y(y)} r={3.5} className="plot-hot" />)}
        </Axes>
      </div>
      <div className="viz-controls">
        <label className="viz-stepper-label" style={{ flex: 1 }}>
          chords n = <span className="mono">{n}</span>
          <input type="range" className="viz-range" min={1} max={50} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>length of the polygon</td><td className="mono">{six(len)}</td></tr>
          <tr><td>arc length, ∫ √(1 + f′(x)²) dx = {C.exactLabel}</td><td className="mono">{six(C.exact)}</td></tr>
          <tr><td>shortfall</td><td className="mono">{six(C.exact - len)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        A straight chord is the shortest path between its ends, so every polygon is shorter than the curve, and adding
        points can only lengthen it. The arc length is the limit. A chord over a step Δx has length √(Δx² + Δy²) ≈ √(1 +
        f′(x)²) Δx, which turns the sum into an integral.
      </figcaption>
    </figure>
  );
}
