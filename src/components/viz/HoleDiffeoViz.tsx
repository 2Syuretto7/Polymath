"use client";

import { useState } from "react";

const HX = 270;
const HY = 110;
const HR = 60;

/** A smooth bump: 1 at the centre of the hole, 0 on and outside its boundary. */
function bump(x: number, y: number) {
  const r2 = ((x - HX) ** 2 + (y - HY) ** 2) / (HR * HR);
  return r2 >= 1 ? 0 : (1 - r2) ** 2;
}

/** The hole argument: a diffeomorphism that is the identity outside a region drags the fields around inside it. */
export function HoleDiffeoViz() {
  const [s, setS] = useState(0.6);
  const shift = (x: number, y: number) => x + s * 55 * bump(x, y);
  const ys = Array.from({ length: 46 }, (_, i) => 10 + i * 4.4);
  const line = ys.map((y) => `${shift(HX, y)},${y}`).join(" ");
  const through = s < 0.05;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>hole transformation s = {s.toFixed(2)} <input type="range" min={0} max={1} step={0.05} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="s" /></label>
      </div>
      <svg viewBox="0 0 540 220" role="img" aria-label="Manifold points, a hole, and a worldline dragged inside the hole" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: 13 }, (_, i) => Array.from({ length: 6 }, (_, j) => {
          const x = 30 + i * 40;
          const y = 20 + j * 36;
          return <circle key={`${i}-${j}`} cx={x} cy={y} r={2} style={{ fill: "var(--text-faint)" }} />;
        }))}
        <circle cx={HX} cy={HY} r={HR} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeDasharray: "5 4" }} />
        <text x={HX + HR + 6} y={HY - HR + 10} style={{ fill: "var(--accent)", fontSize: 11 }}>the hole</text>
        <polyline points={ys.map((y) => `${HX},${y}`).join(" ")} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
        <polyline points={line} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 3 }} />
        <circle cx={HX} cy={HY} r={5} style={{ fill: "var(--danger)" }} />
        <text x={HX - 10} y={HY + 4} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 12, fontWeight: 700 }}>p</text>
        <text x={20} y={214} style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: the original worldline; green: after dragging by the transformation</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Outside the hole: identical. Inside: the worldline {through ? "passes through" : "misses"} the manifold point p. Every observable relation between fields is the same.
      </p>
      <figcaption className="viz-caption">
        General relativity is generally covariant, so dragging every field by a smooth map of the manifold gives another
        solution. Choose a map that is the identity outside a hole. If spacetime points are real things, the two solutions
        differ about which point the worldline crosses, yet the equations and all data outside cannot decide between them.
      </figcaption>
    </figure>
  );
}
