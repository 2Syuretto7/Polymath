"use client";

import { useState } from "react";

const FS = [
  { name: "f = 1 (area)", f: () => 1, exact: Math.PI / 4 },
  { name: "f = x² + y²", f: (x: number, y: number) => x * x + y * y, exact: Math.PI / 8 },
  { name: "f = 1 − x − y (signed)", f: (x: number, y: number) => 1 - x - y, exact: Math.PI / 4 - 2 / 3 },
];

/** Upper and lower sums over a grid for a function on the quarter disc: the cells cut by the boundary are what the error is made of. */
export function JordanGridViz() {
  const [n, setN] = useState(8);
  const [fi, setFi] = useState(0);
  const F = FS[fi];
  const h = 1 / n;
  const inD = (x: number, y: number) => x * x + y * y <= 1;
  let lower = 0, upper = 0, inside = 0, edge = 0;
  const cells: { i: number; j: number; kind: "in" | "edge" | "out" }[] = [];
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const xs = [i * h, (i + 1) * h], ys = [j * h, (j + 1) * h];
    const corners = xs.flatMap((x) => ys.map((y) => inD(x, y)));
    const kind = corners.every(Boolean) ? "in" : (i * h) ** 2 + (j * h) ** 2 <= 1 ? "edge" : "out";
    cells.push({ i, j, kind });
    if (kind === "out") continue;
    // sample the function on a small grid in the cell, treating it as zero outside the disc
    let mn = Infinity, mx = -Infinity;
    for (let a = 0; a <= 4; a++) for (let b = 0; b <= 4; b++) {
      const x = i * h + (a / 4) * h, y = j * h + (b / 4) * h, v = inD(x, y) ? F.f(x, y) : 0;
      mn = Math.min(mn, v); mx = Math.max(mx, v);
    }
    lower += mn * h * h; upper += mx * h * h;
    if (kind === "in") inside++; else edge++;
  }
  const W = 320, P = 10, S = (W - 2 * P) / n;
  const arc = Array.from({ length: 60 }, (_, k) => { const t = (k / 59) * (Math.PI / 2); return `${k ? "L" : "M"}${(P + Math.cos(t) * (W - 2 * P)).toFixed(1)},${(W - P - Math.sin(t) * (W - 2 * P)).toFixed(1)}`; }).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {FS.map((q, i) => <button key={q.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{q.name}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>grid n × n: <span className="mono">{n}</span></span><input type="range" min={2} max={40} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Grid over the quarter disc with interior and boundary cells" style={{ width: "100%", maxWidth: 340, display: "block", margin: "8px auto" }}>
        {cells.map(({ i, j, kind }) => <rect key={`${i},${j}`} x={P + i * S} y={W - P - (j + 1) * S} width={S} height={S} style={{ fill: kind === "in" ? "var(--accent)" : kind === "edge" ? "var(--danger)" : "none", fillOpacity: kind === "in" ? 0.35 : 0.3, stroke: "var(--border)", strokeWidth: 0.5 }} />)}
        <path d={arc} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>cells inside: {inside}; cells meeting the boundary: {edge}</div>
        <div>lower sum {lower.toFixed(5)} ≤ ∫ ≤ upper sum {upper.toFixed(5)}</div>
        <div>gap {(upper - lower).toFixed(5)}; exact value {F.exact.toFixed(5)}</div>
      </div>
      <figcaption className="viz-caption">
        Extend f by zero outside the quarter disc. The upper and lower sums differ only on cells that meet the boundary
        circle (the second shade). There are about 2n of them, each of area 1/n², so their total area tends to 0: the circle
        has content zero, and f is integrable over the disc.
      </figcaption>
    </figure>
  );
}
