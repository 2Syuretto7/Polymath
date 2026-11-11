"use client";

import { useState } from "react";

const STAGES = [
  { name: "fire", note: "Air thinned out as far as it goes." },
  { name: "air", note: "Anaximenes' basic stuff, in its middle state." },
  { name: "wind", note: "Air beginning to thicken." },
  { name: "cloud", note: "Thicker still: air you can see." },
  { name: "water", note: "Cloud condensed into rain." },
  { name: "earth", note: "Water thickened into soil." },
  { name: "stone", note: "The densest form of all." },
];

/** Anaximenes: one stuff, air, becomes everything else by thinning and thickening. */
export function RarefactionViz() {
  const [k, setK] = useState(1);
  const S = STAGES[k];
  const dots = 6 + k * 14;
  const pts = Array.from({ length: dots }, (_, i) => {
    const a = i * 2.39996, r = Math.sqrt(i / dots) * 70;
    return [110 + r * Math.cos(a), 90 + r * Math.sin(a)];
  });

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 180" style={{ width: "100%", display: "block" }} role="img" aria-label={`Air at density stage ${k + 1} of 7: ${S.name}`}>
        <circle cx={110} cy={90} r={78} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        {pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={3} style={{ fill: "var(--accent)" }} />)}
        <text x={230} y={70} style={{ fontSize: 28, fill: "var(--text)", fontFamily: "var(--font-serif)" }}>{S.name}</text>
        <text x={230} y={102} style={{ fontSize: 13, fill: "var(--text-muted)" }}>{S.note}</text>
        <text x={230} y={132} className="mono" style={{ fontSize: 12, fill: "var(--text-muted)" }}>same stuff, {dots} grains in the same space</text>
      </svg>
      <div className="viz-sliders">
        <label><span>thin out ⟵ ⟶ thicken</span>
          <input type="range" min={0} max={STAGES.length - 1} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        One stuff, and one process with a single dial. Differences of kind become differences of degree, which is the shape many later scientific explanations take.
      </figcaption>
    </figure>
  );
}
