"use client";

import { useState } from "react";

const PEOPLE = [
  { name: "a sage", start: 0 },
  { name: "a worthy", start: 3 },
  { name: "an ordinary person", start: 6 },
  { name: "a dull person", start: 9 },
];
const MAX = 10;

/** Zhu Xi: nature (li) is a pearl, endowed qi is water of varying clarity; investigation of things clears it. */
export function PearlWaterViz() {
  const [mud, setMud] = useState(PEOPLE.map((p) => p.start));
  const [steps, setSteps] = useState(PEOPLE.map(() => 0));
  const study = (i: number) => {
    setMud(mud.map((m, j) => (j === i ? Math.max(0, m - (steps[i] >= 3 ? 2 : 1)) : m)));
    setSteps(steps.map((s, j) => (j === i ? s + 1 : s)));
  };
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 180" role="img" aria-label="Four vessels of water, each holding the same pearl" style={{ width: "100%", display: "block" }}>
        {PEOPLE.map((p, i) => {
          const x = 30 + i * 125, t = mud[i] / MAX;
          return (
            <g key={p.name}>
              <path d={`M${x} 30 L${x} 140 Q${x} 160 ${x + 20} 160 L${x + 80} 160 Q${x + 100} 160 ${x + 100} 140 L${x + 100} 30`} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 2 }} />
              <circle cx={x + 50} cy={125} r={14} style={{ fill: "var(--bg)", stroke: "var(--accent)", strokeWidth: 3 }} />
              <circle cx={x + 45} cy={120} r={4} style={{ fill: "var(--accent-soft)" }} />
              <path d={`M${x + 2} 45 L${x + 2} 140 Q${x + 2} 158 ${x + 20} 158 L${x + 80} 158 Q${x + 98} 158 ${x + 98} 140 L${x + 98} 45 Z`} style={{ fill: "rgb(125, 100, 60)", opacity: 0.06 + 0.88 * t }} />
              <text x={x + 50} y={20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{p.name}</text>
              <text x={x + 50} y={176} textAnchor="middle" style={{ fill: mud[i] === 0 ? "var(--accent)" : "var(--text-muted)", fontSize: 11 }}>{mud[i] === 0 ? "pearl shines through" : `turbidity ${mud[i]}`}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls">
        {PEOPLE.map((p, i) => <button key={p.name} type="button" className="btn btn-ghost" onClick={() => study(i)} disabled={mud[i] === 0}>{p.name}: investigate a thing</button>)}
        <button type="button" className="btn btn-ghost" onClick={() => { setMud(PEOPLE.map((p) => p.start)); setSteps(PEOPLE.map(() => 0)); }}>reset</button>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Things investigated: {PEOPLE.map((p, i) => `${p.name} ${steps[i]}`).join(", ")}. Every vessel holds the same pearl.
      </p>
      <figcaption className="viz-caption">
        For Zhu Xi, everyone&rsquo;s nature is the same principle (li), like a pearl; what differs is the endowment of qi,
        like water clear or muddy. Investigating the principle in things, one after another, clears the water, and after
        long effort comes a sudden breakthrough in which everything is seen to connect. Here the clearing speeds up after
        the third investigation.
      </figcaption>
    </figure>
  );
}
