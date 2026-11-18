"use client";

import { useState } from "react";

const PRESETS: { name: string; m: [number, number, number, number]; note: string }[] = [
  { name: "stretch", m: [2, 0, 0, 1.5], note: "Lengths scale by 2 and 1.5, so area scales by 3." },
  { name: "shear", m: [1, 1, 0, 1], note: "A shear slides layers past each other: every horizontal slice keeps its length, so area is unchanged." },
  { name: "rotation", m: [0.8, -0.6, 0.6, 0.8], note: "A rotation is an isometry: area is unchanged." },
  { name: "general", m: [1.5, 0.5, -0.5, 1], note: "Any invertible map: area scales by |det A|." },
  { name: "singular", m: [1, 2, 0.5, 1], note: "The columns are parallel: the square collapses onto a line, a set of measure 0." },
];

/** The image of the unit square, and of a disc, under a linear map: measure scales by |det A|. */
export function LinearImageViz() {
  const [k, setK] = useState(3);
  const [a, b, c, d] = PRESETS[k].m;
  const det = a * d - b * c;
  const S = 50, OX = 260, OY = 150;
  const P = (x: number, y: number) => `${(OX + S * (a * x + b * y)).toFixed(1)},${(OY - S * (c * x + d * y)).toFixed(1)}`;
  const sq = [P(0, 0), P(1, 0), P(1, 1), P(0, 1)].join(" ");
  const disc = Array.from({ length: 72 }, (_, i) => { const t = (i / 72) * 2 * Math.PI; return P(-1.6 + 0.5 * Math.cos(t), 0.9 + 0.5 * Math.sin(t)); }).join(" ");
  const grid = [];
  for (let i = -5; i <= 5; i++) {
    grid.push(<line key={`v${i}`} x1={OX + S * i} y1={0} x2={OX + S * i} y2={300} style={{ stroke: "var(--border)", strokeWidth: i === 0 ? 1.5 : 0.5 }} />);
    grid.push(<line key={`h${i}`} x1={0} y1={OY + S * i} x2={520} y2={OY + S * i} style={{ stroke: "var(--border)", strokeWidth: i === 0 ? 1.5 : 0.5 }} />);
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        {PRESETS.map((p, i) => <button key={p.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p.name}</button>)}
      </div>
      <svg viewBox="0 0 520 300" role="img" aria-label="Images of a square and a disc under a linear map" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {grid}
        <polygon points={[`${OX},${OY}`, `${OX + S},${OY}`, `${OX + S},${OY - S}`, `${OX},${OY - S}`].join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeDasharray: "4 3", strokeWidth: 1.5 }} />
        <polygon points={sq} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <polygon points={disc} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        A = [[{a}, {b}], [{c}, {d}]]. det A = {det.toFixed(2)}. Image of the unit square: area {Math.abs(det).toFixed(2)}. Image of the disc of
        radius 0.5: area {(Math.abs(det) * Math.PI * 0.25).toFixed(3)}.
      </p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{PRESETS[k].note}</p>
      <figcaption className="viz-caption">
        Dashed: the unit square. Shaded: its image, and the image of a disc. Lebesgue measure on ℝⁿ is translation invariant,
        and a linear map multiplies the measure of every measurable set by the same factor, |det A|.
      </figcaption>
    </figure>
  );
}
