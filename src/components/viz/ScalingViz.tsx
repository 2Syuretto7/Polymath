"use client";

import { useState } from "react";

const u = 56; // side of the small triangle
const h = (Math.sqrt(3) / 2) * u;
const x0 = 150, y0 = 280;

/** Scaling a triangle by k: lengths multiply by k, and the big triangle splits into k² copies of the small one. */
export function ScalingViz() {
  const [k, setK] = useState(3);
  const tris: { d: string; up: boolean }[] = [];
  const cx = x0 + (k * u) / 2, top = y0 - k * h;
  for (let r = 0; r < k; r++) {
    const yTop = top + r * h, yBot = top + (r + 1) * h;
    for (let j = 0; j <= r; j++) {
      const left = cx - ((r + 1) * u) / 2 + j * u;
      tris.push({ d: `M${left} ${yBot} L${left + u} ${yBot} L${left + u / 2} ${yTop} Z`, up: true });
    }
    for (let j = 0; j < r; j++) {
      const left = cx - (r * u) / 2 + j * u;
      tris.push({ d: `M${left} ${yTop} L${left + u} ${yTop} L${left + u / 2} ${yBot} Z`, up: false });
    }
  }
  return (
    <figure className="viz">
      <svg viewBox="0 0 620 300" role="img" aria-label={`A triangle scaled by ${k}, made of ${k * k} copies of the original`}>
        <path d={`M30 ${y0} L${30 + u} ${y0} L${30 + u / 2} ${y0 - h} Z`} className="viz-cell is-on" />
        <text x={30 + u / 2} y={y0 + 18} textAnchor="middle" className="plot-tick">original</text>
        {tris.map((t, i) => <path key={i} d={t.d} className={t.up ? "viz-cell is-on" : "viz-cell"} />)}
        <text x={x0 + (k * u) / 2} y={y0 + 18} textAnchor="middle" className="plot-tick">scaled by {k}</text>
      </svg>
      <div className="viz-controls">
        <span className="viz-stepper"><span className="viz-stepper-label">scale factor k</span>
          <button type="button" className="btn" onClick={() => setK(Math.max(1, k - 1))} disabled={k <= 1} aria-label="Decrease k">−</button>
          <span className="mono viz-stepper-value">{k}</span>
          <button type="button" className="btn" onClick={() => setK(Math.min(5, k + 1))} disabled={k >= 5} aria-label="Increase k">+</button>
        </span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Each side is {k} times as long, so the perimeter is {k} times as large. But the area is made of{" "}
        <span className="mono">{k} × {k} = {k * k}</span> copies of the original: scaling lengths by <span className="mono">k</span> scales
        areas by <span className="mono">k²</span>.
      </figcaption>
    </figure>
  );
}
