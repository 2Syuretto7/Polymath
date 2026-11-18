"use client";

import { useState } from "react";

const XV: [number, number] = [2, 1];
const YV: [number, number] = [1, 2];

/** Fitting y ≈ b x for two observations: the best b makes the residual perpendicular to x. */
export function ResidualProjectionViz() {
  const [b, setB] = useState(0.3);
  const fit: [number, number] = [b * XV[0], b * XV[1]];
  const res: [number, number] = [YV[0] - fit[0], YV[1] - fit[1]];
  const dot = res[0] * XV[0] + res[1] * XV[1];
  const len2 = res[0] ** 2 + res[1] ** 2;
  const bh = (XV[0] * YV[0] + XV[1] * YV[1]) / (XV[0] ** 2 + XV[1] ** 2);
  const P = (v: [number, number]) => [60 + v[0] * 110, 250 - v[1] * 110];
  const [ox, oy] = P([0, 0]);
  const arrow = (v: [number, number], from: [number, number], col: string, w = 2.2) => {
    const [x1, y1] = P(from), [x2, y2] = P([from[0] + v[0], from[1] + v[1]]);
    return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: col, strokeWidth: w }} />;
  };
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>coefficient b: <span className="mono">{b.toFixed(2)}</span></span>
          <input type="range" min={-0.2} max={1.4} step={0.01} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 280" role="img" aria-label="Projection of y onto the line spanned by x" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {(() => { const [x1, y1] = P([-0.2 * XV[0], -0.2 * XV[1]]), [x2, y2] = P([1.6 * XV[0], 1.6 * XV[1]]); return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--border)", strokeDasharray: "4 4" }} />; })()}
        {arrow(XV, [0, 0], "var(--text-muted)")}
        {arrow(YV, [0, 0], "var(--text)")}
        {arrow(fit, [0, 0], "var(--accent)", 3)}
        {arrow(res, fit, "var(--danger)")}
        <circle cx={ox} cy={oy} r={3} style={{ fill: "var(--text)" }} />
        {(() => { const [x, y] = P(XV); return <text x={x + 6} y={y + 4} style={{ fill: "var(--text-muted)", fontSize: 12 }}>x = (2, 1)</text>; })()}
        {(() => { const [x, y] = P(YV); return <text x={x + 6} y={y} style={{ fill: "var(--text)", fontSize: 12 }}>y = (1, 2)</text>; })()}
        {(() => { const [x, y] = P(fit); return <text x={x + 4} y={y + 16} style={{ fill: "var(--accent)", fontSize: 12 }}>b x</text>; })()}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>residual y − b x = ({res[0].toFixed(2)}, {res[1].toFixed(2)}); squared length {len2.toFixed(3)}</div>
        <div>dot product of residual with x: {dot.toFixed(3)}</div>
        <div style={{ fontWeight: 700 }}>{Math.abs(dot) < 0.03 ? "residual perpendicular to x: this is the least-squares fit" : `least squares needs b = x·y / x·x = ${bh.toFixed(2)}`}</div>
      </div>
      <figcaption className="viz-caption">
        Two observations make the data a vector y in the plane, and the model y ≈ b x allows only multiples of x. The
        residual is shortest exactly when it is perpendicular to x, so the fitted vector is the orthogonal projection of y
        onto the line through x. With more observations and more columns, the same picture holds in higher dimensions.
      </figcaption>
    </figure>
  );
}
