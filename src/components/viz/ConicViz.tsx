"use client";

import { useState } from "react";
import { Axes, scales, type View } from "./Plot";

const V: View = { xmin: -8, xmax: 6, ymin: -5, ymax: 5, w: 448, h: 320 };
const D = 1.5; // the directrix is the line x = −D; the focus is the origin
const T = (2 * Math.PI) / 3; // the angle of the sample point P

/** Every point P of a conic has PF = e · PD: distance to the focus is e times distance to the directrix. */
export function ConicViz() {
  const [e, setE] = useState(0.6);
  const { X, Y } = scales(V);
  const r = (t: number) => (e * D) / (1 - e * Math.cos(t));

  let d = "";
  let pen = false;
  let prev = 0;
  for (let i = 0; i <= 1440; i++) {
    const t = (2 * Math.PI * i) / 1440;
    const rr = r(t);
    if (!Number.isFinite(rr) || Math.abs(rr) > 60 || (pen && Math.sign(rr) !== Math.sign(prev))) { pen = false; prev = rr; continue; }
    d += `${pen ? "L" : "M"}${X(rr * Math.cos(t)).toFixed(1)} ${Y(rr * Math.sin(t)).toFixed(1)} `;
    pen = true;
    prev = rr;
  }

  const rp = r(T);
  const P = { x: rp * Math.cos(T), y: rp * Math.sin(T) };
  const PF = Math.abs(rp), PD = P.x + D;
  const name = Math.abs(e - 1) < 0.001 ? "a parabola" : e < 1 ? "an ellipse" : "a hyperbola";

  return (
    <figure className="viz">
      <Axes v={V} label={`The conic with eccentricity ${e}: ${name}`}>
        <line x1={X(-D)} y1={0} x2={X(-D)} y2={V.h} className="plot-line" />
        <path d={d} className="plot-curve" />
        <line x1={X(0)} y1={Y(0)} x2={X(P.x)} y2={Y(P.y)} className="plot-curve-2" />
        <line x1={X(P.x)} y1={Y(P.y)} x2={X(-D)} y2={Y(P.y)} className="plot-ghost" />
        <circle cx={X(0)} cy={Y(0)} r={5.5} className="plot-hot" />
        <circle cx={X(P.x)} cy={Y(P.y)} r={5.5} className="plot-point" />
        <text x={X(0) + 8} y={Y(0) + 16} className="viz-label">F</text>
        <text x={X(P.x) - 6} y={Y(P.y) - 10} textAnchor="end" className="viz-label">P</text>
        <text x={X(-D) - 6} y={14} textAnchor="end" className="viz-label">directrix</text>
      </Axes>
      <div className="viz-sliders">
        <label>
          <span>Eccentricity <span className="mono">e = {e.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={2} step={0.05} value={e} onChange={(ev) => setE(Number(Number(ev.target.value).toFixed(2)))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        This is {name}. For the point P, the distance to the focus is <span className="mono">PF = {PF.toFixed(2)}</span> and the
        distance to the directrix is <span className="mono">PD = {PD.toFixed(2)}</span>, and{" "}
        <span className="mono">PF ÷ PD = {(PF / PD).toFixed(2)}</span>, the eccentricity. {e < 1
          ? "Below 1, the curve closes up round the focus."
          : Math.abs(e - 1) < 0.001
            ? "At exactly 1, the curve opens and never closes."
            : "Above 1, the curve splits into two branches."}
      </figcaption>
    </figure>
  );
}
