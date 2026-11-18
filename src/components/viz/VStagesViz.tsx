"use client";

import { useState } from "react";

const NAMES = [
  [],
  ["∅"],
  ["∅", "{∅}"],
  ["∅", "{∅}", "{{∅}}", "{∅, {∅}}"],
];
const SIZES = [0, 1, 2, 4, 16, 65536];

/** The cumulative hierarchy: each stage is the power set of the one before. */
export function VStagesViz() {
  const [k, setK] = useState(3);
  const W = 520, top = 20, bot = 200;
  const half = (s: number) => 16 + s * 30;
  return (
    <figure className="viz">
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono" style={{ minWidth: 90 }}>stage V{["₀", "₁", "₂", "₃", "₄", "₅"][k]}</span>
        <input type="range" min={0} max={5} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <svg viewBox={`0 0 ${W + 60} 220`} role="img" aria-label="The V shape of the cumulative hierarchy" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polygon points={`${W / 2},${bot} ${W / 2 - 180},${top} ${W / 2 + 180},${top}`} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "4 4" }} />
        {[0, 1, 2, 3, 4, 5].map((s) => {
          const y = bot - s * 30;
          return (
            <g key={s}>
              <line x1={W / 2 - half(s)} y1={y} x2={W / 2 + half(s)} y2={y} style={{ stroke: s <= k ? "var(--accent)" : "var(--border)", strokeWidth: s === k ? 3 : 1.5 }} />
              <text x={W / 2 + half(s) + 8} y={y + 4} style={{ fill: s <= k ? "var(--text)" : "var(--text-faint)", fontSize: 12 }}>
                V{["₀", "₁", "₂", "₃", "₄", "₅"][s]}: {SIZES[s]} {SIZES[s] === 1 ? "set" : "sets"}
              </text>
            </g>
          );
        })}
        <text x={W / 2} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>… then Vω, Vω+1, and so on: every set appears at some stage</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {k === 0 ? "V₀ is empty: we start with nothing." : k <= 3 ? `V${["₀", "₁", "₂", "₃"][k]} = {${NAMES[k].join(", ")}}` : `V${["₀", "₁", "₂", "₃", "₄", "₅"][k]} = the power set of the previous stage: ${SIZES[k]} sets, too many to list.`}
      </p>
      <figcaption className="viz-caption">
        Start with nothing and repeatedly take all subsets of what you have. At limit stages, take the union of everything so
        far. The axioms of ZFC describe this picture: each axiom says that some operation, applied to sets at some stage,
        yields a set at a later one.
      </figcaption>
    </figure>
  );
}
