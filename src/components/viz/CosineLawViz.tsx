"use client";

import { useState } from "react";

const a = 6, b = 5, U = 40; // side lengths, and pixels per unit
const C0 = { x: 300, y: 270 };
const f2 = (n: number) => (Math.abs(n) < 5e-3 ? "0.00" : n.toFixed(2)).replace(/^-/, "−");

/** The law of cosines: c² = a² + b² − 2ab cos C, Pythagoras with a correction for the angle. */
export function CosineLawViz() {
  const [deg, setDeg] = useState(60);
  const t = (deg * Math.PI) / 180;
  const A = { x: C0.x + b * U, y: C0.y };
  const B = { x: C0.x + a * U * Math.cos(t), y: C0.y - a * U * Math.sin(t) };
  const D = { x: B.x, y: C0.y };
  const c2 = a * a + b * b - 2 * a * b * Math.cos(t);
  const corr = 2 * a * b * Math.cos(t);
  const arc = `M${C0.x + 28} ${C0.y} A28 28 0 0 0 ${(C0.x + 28 * Math.cos(t)).toFixed(1)} ${(C0.y - 28 * Math.sin(t)).toFixed(1)}`;

  return (
    <figure className="viz">
      <svg viewBox="0 0 620 330" role="img" aria-label={`A triangle with sides 6 and 5 and angle C of ${deg} degrees; the third side is ${Math.sqrt(c2).toFixed(2)}`}>
        {D.x < C0.x && <line x1={D.x} y1={D.y} x2={C0.x} y2={C0.y} className="plot-ghost" />}
        {deg !== 90 && <line x1={B.x} y1={B.y} x2={D.x} y2={D.y} className="plot-ghost" />}
        {deg !== 90 && <line x1={C0.x} y1={C0.y + 32} x2={D.x} y2={D.y + 32} className="plot-curve-2" />}
        <path d={`M${C0.x} ${C0.y} L${A.x} ${A.y}`} className="plot-curve" />
        <path d={`M${C0.x} ${C0.y} L${B.x} ${B.y}`} className="plot-curve" />
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="plot-line" style={{ strokeWidth: 3 }} />
        <path d={arc} className="plot-curve-2" />
        {[A, B, C0].map((v, i) => <circle key={i} cx={v.x} cy={v.y} r={4.5} className="plot-point" />)}
        <text x={C0.x - 6} y={C0.y + 20} textAnchor="end" className="viz-label">C</text>
        <text x={A.x + 10} y={A.y + 4} className="viz-label">A</text>
        <text x={B.x} y={B.y - 12} textAnchor="middle" className="viz-label">B</text>
        <text x={(C0.x + A.x) / 2} y={C0.y + 20} textAnchor="middle" className="viz-label">b = 5</text>
        <text x={(C0.x + B.x) / 2 - 10} y={(C0.y + B.y) / 2} textAnchor="end" className="viz-label">a = 6</text>
        <text x={(A.x + B.x) / 2 + 10} y={(A.y + B.y) / 2} className="viz-label is-on">c</text>
        {deg !== 90 && <text x={(C0.x + D.x) / 2} y={C0.y + 50} textAnchor="middle" className="plot-tick">a cos C</text>}
      </svg>
      <div className="viz-sliders">
        <label>
          <span>Angle C <span className="mono">{deg}°</span></span>
          <input type="range" min={10} max={170} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        <span className="mono">c² = a² + b² − 2ab cos C = 61 {corr < 0 ? "+" : "−"} {f2(Math.abs(corr))} = {f2(c2)}</span>, so{" "}
        <span className="mono">c ≈ {Math.sqrt(c2).toFixed(2)}</span>.{" "}
        {deg === 90
          ? <>At a right angle the correction vanishes, and this is Pythagoras.</>
          : deg < 90
            ? <>An acute angle pulls B in, so <span className="mono">c²</span> is less than 61.</>
            : <>An obtuse angle pushes B out, so the correction is negative and <span className="mono">c²</span> is more than 61.</>}
      </figcaption>
    </figure>
  );
}
