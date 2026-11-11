"use client";

import { useState } from "react";
import { Arrow, Axes, scales, type View } from "./Plot";
import { fmtNum } from "./format";

const V: View = { xmin: -4, xmax: 5, ymin: -3.5, ymax: 4, w: 440, h: 367 };

/** The dot product as length times length times cosine, with the projection and the Cauchy–Schwarz bound. */
export function CauchyViz() {
  const [lu, setLu] = useState(3);
  const [lv, setLv] = useState(2.5);
  const [deg, setDeg] = useState(50);
  const th = (deg * Math.PI) / 180;
  const u: [number, number] = [lu, 0];
  const v: [number, number] = [lv * Math.cos(th), lv * Math.sin(th)];
  const dot = u[0] * v[0] + u[1] * v[1];
  const proj = dot / lu; // signed length of the projection of v on u
  const { X, Y } = scales(V);
  const f = (x: number) => fmtNum(Number(x.toFixed(2)));

  return (
    <figure className="viz">
      <Axes v={V} label={`u has length ${f(lu)}, v has length ${f(lv)}, the angle is ${deg} degrees and u · v = ${f(dot)}`}>
        <line x1={X(v[0])} y1={Y(v[1])} x2={X(proj)} y2={Y(0)} className="plot-ghost" />
        <line x1={X(0)} y1={Y(0)} x2={X(proj)} y2={Y(0)} style={{ stroke: "var(--danger)", strokeWidth: 5, opacity: 0.6 }} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(u[0])} y2={Y(u[1])} />
        <Arrow x1={X(0)} y1={Y(0)} x2={X(v[0])} y2={Y(v[1])} className="plot-arrow is-muted" />
        <text x={X(u[0]) + 6} y={Y(0) + 16} className="viz-label is-on">u</text>
        <text x={X(v[0]) + 6} y={Y(v[1]) - 6} className="viz-label">v</text>
      </Axes>
      <div className="viz-sliders">
        <label><span>|u| = <span className="mono">{f(lu)}</span></span>
          <input type="range" min={0.5} max={4.5} step={0.1} value={lu} onChange={(e) => setLu(Number(e.target.value))} /></label>
        <label><span>|v| = <span className="mono">{f(lv)}</span></span>
          <input type="range" min={0.5} max={3.5} step={0.1} value={lv} onChange={(e) => setLv(Number(e.target.value))} /></label>
        <label><span>angle θ = <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={180} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>u · v = u₁v₁ + u₂v₂</td><td className="mono">{f(dot)}</td></tr>
          <tr><td>|u| |v| cos θ</td><td className="mono">{f(lu * lv * Math.cos(th))}</td></tr>
          <tr><td>signed length of the shadow of v on u (red)</td><td className="mono">{f(proj)}</td></tr>
          <tr><td>Cauchy–Schwarz: |u · v| ≤ |u| |v|</td><td className="mono">{f(Math.abs(dot))} ≤ {f(lu * lv)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {deg === 90
          ? "At a right angle the shadow vanishes and u · v = 0: the vectors are orthogonal."
          : deg === 0 || deg === 180
            ? "Along one line, the bound is reached: |u · v| = |u| |v|. Only then is Cauchy–Schwarz an equality."
            : deg > 90
              ? "Past a right angle the shadow points backwards and the dot product is negative."
              : "The dot product is the length of u times the signed length of v's shadow on u."}
      </figcaption>
    </figure>
  );
}
