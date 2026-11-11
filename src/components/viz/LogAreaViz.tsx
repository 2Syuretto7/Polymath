"use client";

import { useState } from "react";
import { fmtNum } from "./format";
import { Axes, curvePath, scales, type View } from "./Plot";

const V: View = { xmin: -0.3, xmax: 9.5, ymin: -0.1, ymax: 1.3, w: 520, h: 220 };

function region(t0: number, t1: number) {
  const { X, Y } = scales(V);
  let d = `M${X(t0).toFixed(1)} ${Y(0).toFixed(1)} `;
  for (let i = 0; i <= 80; i++) { const t = t0 + ((t1 - t0) * i) / 80; d += `L${X(t).toFixed(1)} ${Y(1 / t).toFixed(1)} `; }
  return d + `L${X(t1).toFixed(1)} ${Y(0).toFixed(1)} Z`;
}

/** ln x as the area under 1/t from 1 to x: the area from b to ab equals the area from 1 to a. */
export function LogAreaViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const { X, Y } = scales(V);
  const four = (n: number) => fmtNum(Number(n.toFixed(4)));

  return (
    <figure className="viz">
      <Axes v={V} label={`The curve 1/t, with the area from 1 to ${a} and the area from ${b} to ${four(a * b)} shaded`}>
        <path d={region(1, a)} style={{ fill: "var(--accent)", fillOpacity: 0.45, strokeWidth: 0 }} />
        <path d={region(b, a * b)} style={{ fill: "var(--accent)", fillOpacity: 0.45, strokeWidth: 0 }} />
        <path d={region(a, b)} className="viz-region" style={{ strokeWidth: 0, opacity: a < b ? 1 : 0 }} />
        <path d={curvePath(V, (t) => (t > 0.05 ? 1 / t : NaN), 800)} className="plot-curve" />
        {[1, a, b, a * b].map((t, i) => <line key={i} x1={X(t)} y1={Y(0)} x2={X(t)} y2={Y(1 / t)} className="plot-line" />)}
      </Axes>
      <div className="viz-sliders">
        <label>
          <span>a = <span className="mono">{four(a)}</span></span>
          <input type="range" min={1.05} max={3} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} />
        </label>
        <label>
          <span>b = <span className="mono">{four(b)}</span></span>
          <input type="range" min={1.05} max={3} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>area from 1 to a, which is ln a (dark, left)</td><td className="mono">{four(Math.log(a))}</td></tr>
          <tr><td>area from b to ab = {four(a * b)} (dark, right)</td><td className="mono">{four(Math.log(a * b) - Math.log(b))}</td></tr>
          <tr><td>area from 1 to b, which is ln b</td><td className="mono">{four(Math.log(b))}</td></tr>
          <tr><td>ln a + ln b</td><td className="mono">{four(Math.log(a) + Math.log(b))}</td></tr>
          <tr><td>area from 1 to ab, which is ln(ab)</td><td className="mono">{four(Math.log(a * b))}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The two dark regions always have the same area. The right one is the left one stretched sideways by the factor b
        and squashed vertically by the same factor, since 1/(bt) = (1/b)(1/t), so its area is unchanged. Hence the area
        from 1 to ab is the area from 1 to b plus the area from 1 to a: ln(ab) = ln a + ln b.
      </figcaption>
    </figure>
  );
}
