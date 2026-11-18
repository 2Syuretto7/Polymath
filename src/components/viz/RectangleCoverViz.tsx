"use client";

import { useState } from "react";

const R = 0.4, C = 0.5;
const inside = (x: number, y: number) => (x - C) ** 2 + (y - C) ** 2 <= R * R;

/** Inner and outer approximations of a disc by grid rectangles. */
export function discCounts(n: number): { inner: number; outer: number } {
  let inner = 0, outer = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x0 = i / n, x1 = (i + 1) / n, y0 = j / n, y1 = (j + 1) / n;
    const all = inside(x0, y0) && inside(x1, y0) && inside(x0, y1) && inside(x1, y1);
    const nx = Math.min(Math.max(C, x0), x1), ny = Math.min(Math.max(C, y0), y1);
    const some = inside(nx, ny);
    if (all) inner++;
    if (some) outer++;
  }
  return { inner, outer };
}

/** Product measure from rectangles: a disc squeezed between unions of grid cells. */
export function RectangleCoverViz() {
  const [n, setN] = useState(8);
  const { inner, outer } = discCounts(n);
  const S = 200, O = 10;
  const cells = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const x0 = i / n, x1 = (i + 1) / n, y0 = j / n, y1 = (j + 1) / n;
    const all = inside(x0, y0) && inside(x1, y0) && inside(x0, y1) && inside(x1, y1);
    const some = inside(Math.min(Math.max(C, x0), x1), Math.min(Math.max(C, y0), y1));
    if (some) cells.push(<rect key={`${i}-${j}`} x={O + x0 * S} y={O + (1 - y1) * S} width={S / n} height={S / n} style={{ fill: all ? "var(--accent)" : "var(--accent-soft)", opacity: all ? 0.55 : 1, stroke: "var(--border)", strokeWidth: 0.5 }} />);
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="grid">
        {[4, 8, 16, 32].map((x) => <button key={x} type="button" aria-pressed={n === x} className={n === x ? "seg is-on" : "seg"} onClick={() => setN(x)}>{x} × {x}</button>)}
      </div>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center", marginTop: 8 }}>
        <svg viewBox="0 0 220 220" role="img" aria-label="A disc covered by grid cells" style={{ width: "100%", maxWidth: 260, display: "block" }}>
          <rect x={O} y={O} width={S} height={S} style={{ fill: "var(--bg)", stroke: "var(--border)" }} />
          {cells}
          <circle cx={O + C * S} cy={O + C * S} r={R * S} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
        </svg>
        <div className="mono" style={{ fontSize: 13, flex: "1 1 200px" }}>
          <p>Each cell is a rectangle A × B with measure λ(A)·λ(B) = 1/{n * n}.</p>
          <p>cells inside the disc: {inner}, total {(inner / (n * n)).toFixed(4)}</p>
          <p>cells meeting the disc: {outer}, total {(outer / (n * n)).toFixed(4)}</p>
          <p style={{ fontWeight: 700 }}>area of the disc: π(0.4)² = {(Math.PI * R * R).toFixed(4)}</p>
        </div>
      </div>
      <figcaption className="viz-caption">
        Dark cells lie inside the disc; light cells only meet it. Product measure starts from rectangles, whose measure is the
        product of the side lengths, and extends to every set in the product σ-algebra, here by squeezing between unions of
        rectangles.
      </figcaption>
    </figure>
  );
}
