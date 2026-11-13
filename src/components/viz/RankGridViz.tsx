"use client";

import { useState } from "react";

type Map2 = (x: number, y: number) => [number, number];
const MAPS: { name: string; f: Map2; rank: string; note: string }[] = [
  { name: "rank 2: (x + y²/4, y + x²/4)", f: (x, y) => [x + (y * y) / 4, y + (x * x) / 4], rank: "2 near the origin", note: "Full rank: locally a diffeomorphism, so the grid is bent but not collapsed. In good coordinates it is the identity." },
  { name: "rank 1: (x + y, (x + y)²)", f: (x, y) => [x + y, (x + y) ** 2 / 2], rank: "1 everywhere", note: "The map depends only on x + y, so whole lines collapse to points and the image is a curve. The rank theorem says that in suitable coordinates it is (u, v) ↦ (u, 0)." },
  { name: "rank 1: (x, 0)", f: (x) => [x, 0], rank: "1 everywhere", note: "The model of a rank 1 map: vertical lines collapse to points." },
  { name: "rank varies: (x, y³ − xy)", f: (x, y) => [x, y * y * y - x * y], rank: "2 except on the curve x = 3y²", note: "The rank drops on a curve, so the rank theorem does not apply there. The image folds over itself, a cusp singularity." },
];

/** The image of a grid under maps of different rank; constant rank makes a map look locally like a projection. */
export function RankGridViz() {
  const [mi, setMi] = useState(0);
  const M = MAPS[mi];
  const W = 300, B = 1.6, S = 1;
  const X = (x: number) => W / 2 + (x / B) * (W / 2 - 10), Y = (y: number) => W / 2 - (y / B) * (W / 2 - 10);
  const ks = Array.from({ length: 9 }, (_, i) => -S + (i / 8) * 2 * S);
  const ts = Array.from({ length: 41 }, (_, i) => -S + (i / 40) * 2 * S);
  const line = (pts: [number, number][]) => pts.map(([x, y], i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(y).toFixed(1)}`).join(" ");
  const grid = (g: Map2) => [
    ...ks.map((k) => ({ d: line(ts.map((t) => g(k, t))), v: true })),
    ...ks.map((k) => ({ d: line(ts.map((t) => g(t, k))), v: false })),
  ];
  const panel = (g: Map2, label: string) => (
    <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label={label} style={{ width: "100%", maxWidth: 300, display: "block" }}>
      <rect x={0} y={0} width={W} height={W} style={{ fill: "none", stroke: "var(--border)" }} />
      {grid(g).map((l, i) => <path key={i} d={l.d} style={{ fill: "none", stroke: l.v ? "var(--accent)" : "var(--text-muted)", strokeWidth: 1.4, strokeOpacity: 0.85 }} />)}
      <text x={8} y={18} style={{ fill: "var(--text-muted)", fontSize: 12 }}>{label}</text>
    </svg>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Map">
        {MAPS.map((m, i) => <button key={m.name} type="button" aria-pressed={mi === i} className={mi === i ? "seg is-on" : "seg"} onClick={() => setMi(i)}>{m.name}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 8 }}>
        {panel((x, y) => [x, y], "the square [−1, 1]²")}
        {panel(M.f, "its image")}
      </div>
      <p className="mono" style={{ margin: "6px 0 4px" }}>rank of the derivative: {M.rank}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{M.note}</p>
      <figcaption className="viz-caption">
        Vertical and horizontal grid lines are drawn in different colours, so you can follow each family into the
        image. The rank theorem: if Df has constant rank r near a point, then after smooth changes of coordinates in the domain
        and target, f is (x₁, …, xₙ) ↦ (x₁, …, x_r, 0, …, 0).
      </figcaption>
    </figure>
  );
}
