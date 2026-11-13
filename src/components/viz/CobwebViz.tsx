"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const f = (x: number) => Math.sqrt(2 + x);
const S = 70, X0 = 40, Y0 = 290;
const X = (x: number) => X0 + S * x, Y = (y: number) => Y0 - S * y;

/** The recursion x_{n+1} = √(2 + x_n), drawn as a cobweb. The sequence is monotone and bounded, so it converges, and the limit must be 2. */
export function CobwebViz() {
  const [x1, setX1] = useState(0);
  const [steps, setSteps] = useState(6);
  const xs = [x1];
  for (let i = 0; i < steps; i++) xs.push(f(xs[i]));
  let d = `M${X(xs[0])},${Y(0)} L${X(xs[0])},${Y(xs[1])}`;
  for (let i = 1; i < xs.length - 1; i++) d += ` L${X(xs[i])},${Y(xs[i])} L${X(xs[i])},${Y(xs[i + 1])}`;
  const curve = Array.from({ length: 81 }, (_, i) => { const x = (i / 80) * 5.4; return `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(f(x)).toFixed(1)}`; }).join("");
  const inc = x1 < 2, dec = x1 > 2;
  const fm = (z: number) => fmtNum(Number(z.toFixed(5)));

  return (
    <figure className="viz">
      <svg viewBox="0 0 440 310" role="img" aria-label="A cobweb diagram for the recursion" style={{ width: "100%", maxWidth: 480, display: "block", margin: "0 auto" }}>
        <line x1={X0} y1={Y0} x2={430} y2={Y0} className="viz-axis" />
        <line x1={X0} y1={Y0} x2={X0} y2={10} className="viz-axis" />
        <line x1={X(0)} y1={Y(0)} x2={X(4)} y2={Y(4)} style={{ stroke: "var(--border-strong)", strokeDasharray: "4 4" }} />
        <path d={curve} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <line x1={X(2)} y1={Y0} x2={X(2)} y2={Y(2)} style={{ stroke: "var(--accent)", strokeDasharray: "3 3" }} />
        <path d={d} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 1.8 }} />
        {xs.map((x, i) => <circle key={i} cx={X(x)} cy={Y0} r={3.5} style={{ fill: "var(--danger)" }} />)}
        <text x={X(2)} y={Y0 + 16} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--accent)" }}>2</text>
        <text x={X(3.4)} y={Y(f(3.4)) - 14} textAnchor="end" style={{ fontSize: 11.5, fill: "var(--text-muted)" }}>y = √(2 + x)</text>
        <text x={X(3.6)} y={Y(3.6) - 6} style={{ fontSize: 11.5, fill: "var(--text-muted)" }}>y = x</text>
      </svg>
      <div className="viz-sliders">
        <label><span>starting value x₁: <span className="mono">{fm(x1)}</span></span>
          <input type="range" min={0} max={5} step={0.1} value={x1} onChange={(e) => setX1(Number(e.target.value))} /></label>
        <label><span>steps: <span className="mono">{steps}</span></span>
          <input type="range" min={1} max={12} value={steps} onChange={(e) => setSteps(Number(e.target.value))} /></label>
      </div>
      <p className="mono" style={{ fontSize: 13, margin: "8px 0", overflowWrap: "anywhere" }}>{xs.map(fm).join(", ")}</p>
      <figcaption className="viz-caption" aria-live="polite">
        {inc
          ? "Starting below 2, every term is below 2 and larger than the one before: an increasing sequence bounded above. It converges, and its limit L satisfies L = √(2 + L), so L = 2."
          : dec
            ? "Starting above 2, the sequence decreases and stays above 2: decreasing and bounded below. It converges, and again the limit must be 2."
            : "Starting at 2, the sequence is constant: 2 is the fixed point."}
      </figcaption>
    </figure>
  );
}
