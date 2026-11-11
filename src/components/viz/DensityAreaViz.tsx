"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

type Dist = { name: string; f: (x: number) => number; lo: number; hi: number; mean: string; v: View; note: string };
const DISTS: Dist[] = [
  { name: "uniform on [0, 2]", f: (x) => (x >= 0 && x <= 2 ? 0.5 : 0), lo: -1, hi: 3, mean: "1", v: { xmin: -1, xmax: 3, ymin: -0.1, ymax: 1, w: 520, h: 200 }, note: "Every stretch of the same length inside [0, 2] is equally likely." },
  { name: "exponential, rate 1", f: (x) => (x >= 0 ? Math.exp(-x) : 0), lo: -1, hi: 6, mean: "1", v: { xmin: -1, xmax: 6, ymin: -0.1, ymax: 1.1, w: 520, h: 200 }, note: "A model for waiting times: short waits are likeliest, but long ones are possible. The total area, ∫₀^∞ e^(−x) dx, is an improper integral equal to 1." },
  { name: "standard normal", f: (x) => Math.exp(-x * x / 2) / Math.sqrt(2 * Math.PI), lo: -4, hi: 4, mean: "0", v: { xmin: -4, xmax: 4, ymin: -0.05, ymax: 0.5, w: 520, h: 200 }, note: "The bell curve. About 68% of the area lies within 1 of the centre, and about 95% within 2." },
];

function integrate(f: (x: number) => number, a: number, b: number) {
  if (b <= a) return 0;
  const n = 600, h = (b - a) / n;
  let s = f(a) + f(b);
  for (let i = 1; i < n; i++) s += (i % 2 ? 4 : 2) * f(a + i * h);
  return (s * h) / 3;
}

/** A probability density: the probability of landing in [a, b] is the area under the curve there. */
export function DensityAreaViz() {
  const [k, setK] = useState(2);
  const [a, setA] = useState(-1);
  const [b, setB] = useState(1);
  const D = DISTS[k];
  const lo = Math.min(a, b), hi = Math.max(a, b);
  const { X, Y } = scales(D.v);
  let d = `M${X(lo)} ${Y(0)} `;
  for (let i = 0; i <= 200; i++) { const x = lo + ((hi - lo) * i) / 200; d += `L${X(x).toFixed(1)} ${Y(D.f(x)).toFixed(1)} `; }
  d += `L${X(hi)} ${Y(0)} Z`;
  // integrate piecewise around the kinks of the uniform and exponential densities
  const P = [D.lo, 0, 2, D.hi].filter((t, i, arr) => arr.indexOf(t) === i).sort((p, q) => p - q);
  const prob = (u: number, w: number) => { let s = 0; const pts = [u, ...P.filter((t) => t > u && t < w), w]; for (let i = 1; i < pts.length; i++) s += integrate(D.f, pts[i - 1], pts[i]); return s; };
  const pick = (i: number) => { setK(i); const m = DISTS[i]; setA(Math.max(m.lo, -1)); setB(1); };
  const four = (n: number) => fmtNum(Number(n.toFixed(4)));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Distribution">
        {DISTS.map((t, i) => (
          <button key={t.name} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => pick(i)}>{t.name}</button>
        ))}
      </div>
      <Axes v={D.v} yStep={D.v.ymax < 0.6 ? 0.1 : 0.5} label={`The density of the ${D.name} distribution, with the area from ${four(lo)} to ${four(hi)} shaded`}>
        <path d={d} className="viz-region" style={{ strokeWidth: 0 }} />
        <path d={curvePath(D.v, D.f, 800)} className="plot-curve" />
      </Axes>
      <div className="viz-sliders">
        <label>
          <span>a = <span className="mono">{four(a)}</span></span>
          <input type="range" min={D.lo} max={D.hi} step={0.1} value={a} onChange={(e) => setA(Number(Number(e.target.value).toFixed(1)))} />
        </label>
        <label>
          <span>b = <span className="mono">{four(b)}</span></span>
          <input type="range" min={D.lo} max={D.hi} step={0.1} value={b} onChange={(e) => setB(Number(Number(e.target.value).toFixed(1)))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>probability of landing between {four(lo)} and {four(hi)}, the shaded area</td><td className="mono">{four(prob(lo, hi))}</td></tr>
          <tr><td>total area under the curve</td><td className="mono">1</td></tr>
          <tr><td>mean, ∫ x f(x) dx</td><td className="mono">{D.mean}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">{D.note}</figcaption>
    </figure>
  );
}
