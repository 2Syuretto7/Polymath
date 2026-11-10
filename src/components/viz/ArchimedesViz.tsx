"use client";

import { useState } from "react";

const SIDES = [6, 12, 24, 48, 96];
const O = { x: 310, y: 170 }, R = 140;

function polygon(n: number, radius: number) {
  return Array.from({ length: n }, (_, i) => {
    const t = (2 * Math.PI * i) / n - Math.PI / 2;
    return `${i ? "L" : "M"}${(O.x + radius * Math.cos(t)).toFixed(2)} ${(O.y + radius * Math.sin(t)).toFixed(2)}`;
  }).join(" ") + " Z";
}

/** Archimedes' squeeze on π: the circle lies between an inscribed and a circumscribed regular polygon. */
export function ArchimedesViz() {
  const [k, setK] = useState(0);
  const n = SIDES[k];
  const inner = n * Math.sin(Math.PI / n); // half the perimeter of the inscribed n-gon in a unit circle
  const outer = n * Math.tan(Math.PI / n); // half the perimeter of the circumscribed n-gon
  const circumR = R / Math.cos(Math.PI / n);

  return (
    <figure className="viz">
      <svg viewBox="0 0 620 340" role="img" aria-label={`Regular ${n}-gons inside and outside a circle: ${inner.toFixed(5)} < π < ${outer.toFixed(5)}`}>
        <path d={polygon(n, circumR)} className="viz-cell" />
        <circle cx={O.x} cy={O.y} r={R} className="plot-curve" />
        <path d={polygon(n, R)} className="viz-cell is-on" style={{ fillOpacity: 0.6 }} />
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setK(Math.max(0, k - 1))} disabled={k === 0}>Halve the sides</button>
        <button type="button" className="btn btn-primary" onClick={() => setK(Math.min(SIDES.length - 1, k + 1))} disabled={k === SIDES.length - 1}>Double the sides</button>
        <span className="hint">{n} sides</span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        For a circle of radius 1, half the perimeter of the inside {n}-gon is <span className="mono">{inner.toFixed(5)}</span> and of the outside one{" "}
        <span className="mono">{outer.toFixed(5)}</span>. The circle&rsquo;s half-perimeter, π, lies between them. Archimedes went as far as 96 sides,
        by hand, and found <span className="mono">3 10/71 &lt; π &lt; 3 1/7</span>.
      </figcaption>
    </figure>
  );
}
