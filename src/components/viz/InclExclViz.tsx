"use client";

import { useState } from "react";

// Regions of three sets: which sets contain them, their size, and a label position.
const REGIONS: { sets: string; size: number; x: number; y: number }[] = [
  { sets: "A", size: 10, x: 112, y: 112 },
  { sets: "B", size: 8, x: 268, y: 112 },
  { sets: "C", size: 6, x: 190, y: 250 },
  { sets: "AB", size: 4, x: 190, y: 98 },
  { sets: "AC", size: 3, x: 148, y: 182 },
  { sets: "BC", size: 2, x: 232, y: 182 },
  { sets: "ABC", size: 1, x: 190, y: 152 },
];
const STEPS = [
  { name: "start", formula: "" },
  { name: "+ singles", formula: "|A| + |B| + |C| = 18 + 15 + 12 = 45" },
  { name: "− pairs", formula: "45 − |A∩B| − |A∩C| − |B∩C| = 45 − 5 − 4 − 3 = 33" },
  { name: "+ triple", formula: "33 + |A∩B∩C| = 33 + 1 = 34" },
];
const choose = (m: number, k: number) => (k > m ? 0 : k === 0 ? 1 : k === 1 ? m : k === 2 ? (m * (m - 1)) / 2 : 1);

/** Count the union of three sets by adding singles, subtracting pairs and adding the triple. */
export function InclExclViz() {
  const [step, setStep] = useState(0);
  const times = (m: number) => [0, choose(m, 1), choose(m, 1) - choose(m, 2), choose(m, 1) - choose(m, 2) + choose(m, 3)][step];
  const total = REGIONS.reduce((s, r) => s + r.size * times(r.sets.length), 0);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Step">
        {STEPS.map((s, i) => (
          <button key={s.name} type="button" className={i === step ? "seg is-on" : "seg"} aria-pressed={i === step} onClick={() => setStep(i)}>{s.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 380 300" style={{ width: "100%", maxWidth: 440, display: "block", margin: "8px auto" }} role="img" aria-label="Three overlapping sets">
        {[[150, 130, "A", 60, 50], [230, 130, "B", 320, 50], [190, 200, "C", 190, 296]].map(([cx, cy, l, lx, ly]) => (
          <g key={l as string}>
            <circle cx={cx as number} cy={cy as number} r={80} style={{ fill: "var(--accent)", fillOpacity: 0.08, stroke: "var(--accent)" }} />
            <text x={lx as number} y={ly as number} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 14 }}>{l}</text>
          </g>
        ))}
        {REGIONS.map((r) => {
          const t = times(r.sets.length);
          return (
            <g key={r.sets}>
              <text x={r.x} y={r.y - 4} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{r.size}</text>
              <text x={r.x} y={r.y + 12} textAnchor="middle" style={{ fill: t === 1 ? "var(--accent)" : t > 1 ? "var(--danger)" : "var(--text-muted)", fontSize: 15, fontWeight: 600 }}>×{t}</text>
            </g>
          );
        })}
      </svg>
      <table className="table mono" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>running count</td><td>{step === 0 ? "0" : STEPS[step].formula}</td></tr>
          <tr><td>check</td><td>sum over regions of size × times counted = {total}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {step === 0 && "Each region shows its size (small) and how many times it has been counted so far (large). Three sets: students taking mathematics, physics and chemistry."}
        {step === 1 && "Adding the three set sizes counts the two-set regions twice and the centre three times."}
        {step === 2 && "Subtracting the pairwise intersections fixes the two-set regions, but the centre has now been added three times and taken away three times: it is counted zero times."}
        {step === 3 && "Adding the triple intersection back counts every region exactly once. There are 34 students in all."}
      </figcaption>
    </figure>
  );
}
