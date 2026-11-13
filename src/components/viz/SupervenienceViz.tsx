"use client";

import { useState } from "react";

const PHYS = ["A", "B", "A", "C", "B", "A"];
const MENTAL = ["calm", "anxious", "joyful"];

/** Supervenience: no mental difference without a physical difference. Assign mental states and test the condition. */
export function SupervenienceViz() {
  const [m, setM] = useState<number[]>([0, 1, 0, 2, 1, 1]);
  const cyc = (i: number) => setM(m.map((x, j) => (j === i ? (x + 1) % MENTAL.length : x)));
  const fails: [number, number][] = [];
  for (let i = 0; i < PHYS.length; i++) for (let j = i + 1; j < PHYS.length; j++) if (PHYS[i] === PHYS[j] && m[i] !== m[j]) fails.push([i, j]);
  const W = 560, cw = W / PHYS.length;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 6px" }}>Six creatures. Letters are their complete physical states. Click a creature to change its mental state.</p>
      <svg viewBox={`0 0 ${W} 150`} role="img" aria-label="Physical and mental states of six creatures" style={{ width: "100%", display: "block" }}>
        {PHYS.map((p, i) => {
          const bad = fails.some(([a, b]) => a === i || b === i);
          return (
            <g key={i} onClick={() => cyc(i)} style={{ cursor: "pointer" }}>
              <rect x={i * cw + 6} y={8} width={cw - 12} height={134} rx={6} style={{ fill: "var(--bg)", stroke: bad ? "var(--danger)" : "var(--border)", strokeWidth: bad ? 2 : 1 }} />
              <text x={i * cw + cw / 2} y={28} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>creature {i + 1}</text>
              <rect x={i * cw + 20} y={38} width={cw - 40} height={36} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
              <text x={i * cw + cw / 2} y={61} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{p}</text>
              <rect x={i * cw + 14} y={86} width={cw - 28} height={36} rx={18} style={{ fill: "var(--accent)", fillOpacity: 0.12 + 0.3 * m[i], stroke: "var(--accent)" }} />
              <text x={i * cw + cw / 2} y={109} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{MENTAL[m[i]]}</text>
            </g>
          );
        })}
      </svg>
      <p className={fails.length ? "viz-verdict viz-verdict-wrong" : "viz-verdict viz-verdict-right"} style={{ margin: "6px 0" }}>
        {fails.length
          ? `Supervenience fails: ${fails.map(([a, b]) => `creatures ${a + 1} and ${b + 1}`).join("; ")} are physically identical but mentally different.`
          : "The mental supervenes on the physical here: physically identical creatures are mentally identical."}
      </p>
      <figcaption className="viz-caption">
        Supervenience allows physically different creatures to share a mental state, as creatures with B and C might both be anxious: that is multiple realisability. It forbids only a mental difference without a physical one. It says that the mental depends on the physical, but not why.
      </figcaption>
    </figure>
  );
}
