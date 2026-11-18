"use client";

import { useState } from "react";

const PTS: [number, number][] = [[1, 2], [2, 3], [3, 5], [4, 4], [5, 6]];

/** Choose a line by hand and compare its residual sum of squares with the least-squares line. */
export function LeastSquaresFitViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(0.5);
  const n = PTS.length;
  const xb = PTS.reduce((s, p) => s + p[0], 0) / n, yb = PTS.reduce((s, p) => s + p[1], 0) / n;
  const sxy = PTS.reduce((s, p) => s + (p[0] - xb) * (p[1] - yb), 0), sxx = PTS.reduce((s, p) => s + (p[0] - xb) ** 2, 0);
  const bh = sxy / sxx, ah = yb - bh * xb;
  const rss = (A: number, Bv: number) => PTS.reduce((s, p) => s + (p[1] - A - Bv * p[0]) ** 2, 0);
  const X = (x: number) => 40 + (x / 6) * 440, Y = (y: number) => 200 - (y / 8) * 180;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>intercept a: <span className="mono">{a.toFixed(2)}</span></span>
          <input type="range" min={-2} max={5} step={0.05} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>slope b: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={-0.5} max={2} step={0.05} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => { setA(Math.round(ah * 100) / 100); setB(Math.round(bh * 100) / 100); }}>Fit by least squares</button>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="Scatter plot with a line and its residuals" style={{ width: "100%", display: "block" }}>
        <line x1={X(0)} y1={Y(0)} x2={X(6)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(0)} x2={X(0)} y2={Y(8)} style={{ stroke: "var(--border)" }} />
        {PTS.map(([x, y]) => (
          <line key={`r${x}`} x1={X(x)} y1={Y(y)} x2={X(x)} y2={Y(a + b * x)} style={{ stroke: "var(--danger)", strokeWidth: 1.5 }} />
        ))}
        <line x1={X(0)} y1={Y(a)} x2={X(6)} y2={Y(a + 6 * b)} style={{ stroke: "var(--accent)", strokeWidth: 2.4 }} />
        {PTS.map(([x, y]) => <circle key={x} cx={X(x)} cy={Y(y)} r={5} style={{ fill: "var(--text)" }} />)}
        {[1, 2, 3, 4, 5].map((t) => <text key={t} x={X(t) - 3} y={Y(0) + 15} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{t}</text>)}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>your line: y = {a.toFixed(2)} + {b.toFixed(2)}x; residual sum of squares {rss(a, b).toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>least squares: y = {ah.toFixed(2)} + {bh.toFixed(2)}x; residual sum of squares {rss(ah, bh).toFixed(3)}</div>
      </div>
      <figcaption className="viz-caption">
        The red segments are the residuals, the vertical distances from the points to the line. Least squares picks the line
        that makes the sum of their squares as small as possible: slope Sxy/Sxx and intercept ȳ − b x̄, so the line passes
        through the point of means (3, 4).
      </figcaption>
    </figure>
  );
}
