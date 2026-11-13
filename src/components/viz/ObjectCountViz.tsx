"use client";

import { useState } from "react";

const ATOMS = ["a", "b", "c"];
const SUBSETS = [[0], [1], [2], [0, 1], [0, 2], [1, 2], [0, 1, 2]];
type View = "nihilism" | "universalism" | "contact";
const VIEWS: { v: View; label: string; rule: string }[] = [
  { v: "nihilism", label: "nihilism", rule: "Composition never happens: only the simples exist." },
  { v: "universalism", label: "universalism", rule: "Composition always happens: any things whatever compose a further thing." },
  { v: "contact", label: "contact", rule: "Things compose a further thing when they are stuck together." },
];

/** How many objects are there? Answers to the special composition question, for a world of three simples. */
export function ObjectCountViz() {
  const [view, setView] = useState<View>("universalism");
  const [stuck, setStuck] = useState(true);
  const [sel, setSel] = useState<number | null>(null);
  const linked = (s: number[]) => s.length === 1 || (stuck && s.length === 2 && s.includes(0) && s.includes(1));
  const exists = (s: number[]) => view === "universalism" ? true : view === "nihilism" ? s.length === 1 : linked(s);
  const objs = SUBSETS.map((s, i) => ({ s, i })).filter(({ s }) => exists(s));
  const pos = [[110, 90], [170, 90], [330, 90]];
  const hl = sel !== null && exists(SUBSETS[sel]) ? SUBSETS[sel] : [];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Answer to the special composition question">
        {VIEWS.map((x) => <button key={x.v} type="button" aria-pressed={view === x.v} className={view === x.v ? "seg is-on" : "seg"} onClick={() => setView(x.v)}>{x.label}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={stuck} className={stuck ? "viz-chip is-on" : "viz-chip"} onClick={() => setStuck(!stuck)}>{stuck ? "a and b stuck together" : "a and b apart"}</button>
      </div>
      <svg viewBox="0 0 440 170" role="img" aria-label="Three simples" style={{ width: "100%", maxWidth: 480, display: "block", margin: "6px auto" }}>
        {stuck && <line x1={pos[0][0]} y1={90} x2={pos[1][0]} y2={90} style={{ stroke: "var(--text-muted)", strokeWidth: 6 }} />}
        {ATOMS.map((n, i) => (
          <g key={n}>
            <circle cx={stuck || i !== 1 ? pos[i][0] : 230} cy={pos[i][1]} r={24} style={{ fill: hl.includes(i) ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={stuck || i !== 1 ? pos[i][0] : 230} y={95} textAnchor="middle" style={{ fill: hl.includes(i) ? "var(--bg)" : "var(--text)", fontSize: 15, fontWeight: 600 }}>{n}</text>
          </g>
        ))}
        <text x={220} y={155} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 13 }}>Click an object below to see its parts.</text>
      </svg>
      <div className="viz-controls">
        {objs.map(({ s, i }) => <button key={i} type="button" aria-pressed={sel === i} className={sel === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setSel(i)}>{s.length === 1 ? ATOMS[s[0]] : `the fusion of ${s.map((k) => ATOMS[k]).join(", ")}`}</button>)}
      </div>
      <p style={{ margin: "8px 0 4px", fontWeight: 600 }}>Number of objects: {objs.length}</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{VIEWS.find((x) => x.v === view)!.rule}</p>
      <figcaption className="viz-caption">
        Everyone agrees on where the simples are and which are stuck together. They disagree on how many objects there are. Is this a deep question about the world, or a choice of how to use &ldquo;object&rdquo;? That is the question of meta-ontology.
      </figcaption>
    </figure>
  );
}
