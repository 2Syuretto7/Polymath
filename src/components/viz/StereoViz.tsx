"use client";

import { useState } from "react";

/** The one-point compactification of the line: stereographic projection from the top of a circle, with ∞ at the pole. */
export function StereoViz() {
  const [s, setS] = useState(1);
  const x = Math.sign(s) * (Math.pow(10, Math.abs(s) / 2) - 1); // slider is logarithmic so far points are reachable
  // circle of radius 1 centred at (0, 1) touching the line at 0, projecting from N = (0, 2)
  const t = 4 / (x * x + 4);
  const P = [t * x, 2 - 2 * t]; // the point where the segment from N to (x, 0) meets the circle
  const W = 520, H = 260, U = 60, cx = W / 2, base = 220;
  const X = (u: number) => cx + u * U, Y = (v: number) => base - v * U;
  const angle = (Math.atan2(P[1] - 1, P[0]) * 180) / Math.PI;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>a point x on the line: <span className="mono">{Math.abs(x) > 999 ? x.toExponential(1) : x.toFixed(2)}</span></span>
          <input type="range" min={-10} max={10} step={0.25} value={s} onChange={(e) => setS(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A circle sitting on the line, with a ray from its top point through a point of the circle to the line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--text-faint)", strokeWidth: 2 }} />
        <circle cx={X(0)} cy={Y(1)} r={U} style={{ fill: "var(--accent-soft)", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <line x1={X(0)} y1={Y(2)} x2={X(Math.max(-5, Math.min(5, x)) )} y2={Math.abs(x) <= 5 ? Y(0) : Y(2 - 2 * (5 / Math.abs(x)))} style={{ stroke: "var(--accent)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <circle cx={X(0)} cy={Y(2)} r={6} style={{ fill: "var(--text)" }} />
        <text x={X(0) + 10} y={Y(2) - 6} style={{ fill: "var(--text)", fontSize: 13 }}>N, the point ∞</text>
        <circle cx={X(P[0])} cy={Y(P[1])} r={6} style={{ fill: "var(--accent)" }} />
        {Math.abs(x) <= 4.2 && <circle cx={X(x)} cy={Y(0)} r={5} style={{ fill: "var(--accent)" }} />}
        {Math.abs(x) > 4.2 && <text x={x > 0 ? W - 6 : 6} y={Y(0) - 8} textAnchor={x > 0 ? "end" : "start"} style={{ fill: "var(--text-muted)", fontSize: 12 }}>x is off the picture {x > 0 ? "→" : "←"}</text>}
        <text x={X(0)} y={Y(0) + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        x = {Math.abs(x) > 999 ? x.toExponential(1) : x.toFixed(2)} goes to the circle point at angle {angle.toFixed(1)}°; the pole N is at 90°
      </p>
      <figcaption className="viz-caption">
        The line through N and a point of the circle meets the line at exactly one point, so the circle minus N is
        homeomorphic to ℝ. As x runs off to either end, its image creeps up to N from one side or the other. Adding N as a
        point ∞ makes the line compact: a neighbourhood of ∞ is the complement of a closed bounded set.
      </figcaption>
    </figure>
  );
}
