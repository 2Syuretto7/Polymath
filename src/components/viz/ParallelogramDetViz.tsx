"use client";

import { useState } from "react";

/** The columns of a 2 by 2 matrix span a parallelogram whose signed area is the determinant. */
export function ParallelogramDetViz() {
  const [m, setM] = useState([2, 0.5, 0.5, 1.5]);
  const [grid, setGrid] = useState(true);
  const [a, b, c, d] = m; // columns (a, c) and (b, d)
  const det = a * d - b * c;
  const W = 340, o = W / 2, S = 40;
  const P = (x: number, y: number) => `${(o + x * S).toFixed(1)},${(o - y * S).toFixed(1)}`;
  const ap = (x: number, y: number) => [a * x + b * y, c * x + d * y];
  const cells: string[] = [];
  if (grid) for (let i = -2; i < 2; i++) for (let j = -2; j < 2; j++) {
    cells.push([ap(i, j), ap(i + 1, j), ap(i + 1, j + 1), ap(i, j + 1)].map(([x, y]) => P(x, y)).join(" "));
  }
  const col = det > 0 ? "var(--accent)" : det < 0 ? "var(--danger)" : "var(--text-muted)";
  const set = (i: number, x: number) => setM(m.map((y, j) => (j === i ? x : y)));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        {["first column, x", "second column, x", "first column, y", "second column, y"].map((nm, i) => (
          <label key={nm}><span>{nm}: <span className="mono">{m[i]}</span></span>
            <input type="range" min={-2.5} max={2.5} step={0.25} value={m[i]} onChange={(e) => set(i, Number(e.target.value))} /></label>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="Show grid">
        <button type="button" aria-pressed={grid} className={grid ? "seg is-on" : "seg"} onClick={() => setGrid(true)}>image of the grid</button>
        <button type="button" aria-pressed={!grid} className={!grid ? "seg is-on" : "seg"} onClick={() => setGrid(false)}>parallelogram only</button>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The parallelogram spanned by the columns" style={{ width: "100%", maxWidth: 360, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={o} x2={W} y2={o} style={{ stroke: "var(--border)" }} />
        <line x1={o} y1={0} x2={o} y2={W} style={{ stroke: "var(--border)" }} />
        {cells.map((pts, i) => <polygon key={i} points={pts} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 1 }} />)}
        <polygon points={[[0, 0], [a, c], [a + b, c + d], [b, d]].map(([x, y]) => P(x, y)).join(" ")} style={{ fill: col, fillOpacity: 0.22, stroke: col, strokeWidth: 2 }} />
        <line x1={o} y1={o} x2={o + a * S} y2={o - c * S} style={{ stroke: "var(--text)", strokeWidth: 2.5 }} />
        <line x1={o} y1={o} x2={o + b * S} y2={o - d * S} style={{ stroke: "var(--text-muted)", strokeWidth: 2.5 }} />
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>det = ({a})({d}) − ({b})({c}) = {det.toFixed(3)}, area = {Math.abs(det).toFixed(3)}</p>
      <p style={{ margin: "4px 0", color: col }}>
        {det > 0 ? "Positive: the map keeps orientation." : det < 0 ? "Negative: the map reverses orientation, like a mirror." : "Zero: the parallelogram is flat, and the map is not invertible."}
      </p>
      <figcaption className="viz-caption">
        The dark segment is the first column, the image of e₁, and the lighter one the second. Every unit square of the grid is carried to a copy of the shaded parallelogram, so the map multiplies every area by |det|. The sign records whether the order of the two columns is anticlockwise, as for e₁ and e₂, or clockwise.
      </figcaption>
    </figure>
  );
}
