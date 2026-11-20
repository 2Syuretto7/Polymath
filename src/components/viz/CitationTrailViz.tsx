"use client";

import { useState } from "react";

/** A small citation network on one topic; arrows point from a paper to the papers it cites. */
const PAPERS = [
  { id: "S", label: "Survey (2021)", x: 270, y: 30 },
  { id: "A", label: "Smith (2015)", x: 130, y: 90 },
  { id: "B", label: "Rao (2017)", x: 270, y: 90 },
  { id: "C", label: "Okafor (2018)", x: 410, y: 90 },
  { id: "D", label: "Lee (2004)", x: 90, y: 160 },
  { id: "E", label: "Classic (1971)", x: 270, y: 160 },
  { id: "F", label: "Mehta (2009)", x: 450, y: 160 },
  { id: "G", label: "Origin (1958)", x: 270, y: 220 },
];
const CITES: [string, string][] = [
  ["S", "A"], ["S", "B"], ["S", "C"], ["A", "D"], ["A", "E"], ["B", "E"], ["C", "F"], ["C", "E"], ["D", "G"], ["E", "G"], ["F", "E"],
];

export function CitationTrailViz() {
  const [steps, setSteps] = useState(1);
  const reached = new Map<string, number>([["S", 0]]);
  let frontier = ["S"];
  for (let s = 1; s <= steps; s++) {
    const next: string[] = [];
    for (const p of frontier) for (const [a, b] of CITES) if (a === p && !reached.has(b)) { reached.set(b, s); next.push(b); }
    frontier = next;
  }
  const pos = Object.fromEntries(PAPERS.map((p) => [p.id, p]));
  const hub = PAPERS.filter((p) => CITES.filter(([, b]) => b === p.id).length >= 4).map((p) => p.label);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>steps back through the references = {steps} <input type="range" min={0} max={3} step={1} value={steps} onChange={(e) => setSteps(Number(e.target.value))} aria-label="steps" /></label>
      </div>
      <svg viewBox="0 0 540 245" role="img" aria-label="A citation network starting from a recent survey" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="cite-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" style={{ fill: "var(--text-faint)" }} />
          </marker>
        </defs>
        {CITES.map(([a, b], i) => {
          const p = pos[a];
          const q = pos[b];
          const on = reached.has(a) && reached.has(b) && reached.get(b)! <= steps;
          const same = p.y === q.y;
          const dir = q.x > p.x ? 1 : -1;
          return <line key={i} x1={same ? p.x + dir * 52 : p.x} y1={same ? p.y : p.y + 10} x2={same ? q.x - dir * 54 : q.x} y2={same ? q.y : q.y - 12} markerEnd="url(#cite-arrow)" style={{ stroke: on ? "var(--accent)" : "var(--grid-line)", strokeWidth: on ? 2 : 1.5 }} />;
        })}
        {PAPERS.map((p) => {
          const on = reached.has(p.id);
          return (
            <g key={p.id}>
              <rect x={p.x - 52} y={p.y - 11} width={104} height={22} rx={6} style={{ fill: on ? "var(--accent-soft)" : "var(--surface)", stroke: on ? "var(--accent)" : "var(--border)" }} />
              <text x={p.x} y={p.y + 4} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 11 }}>{p.label}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Papers found: {reached.size} of {PAPERS.length}. The most-cited paper, {hub.join(", ")}, is one every later author engages with: read it closely.
      </p>
      <figcaption className="viz-caption">
        Start from a recent survey or encyclopaedia entry and follow its references backwards. A few steps reach the
        foundational texts, and the papers that many others cite show you where the debate is anchored. Then search
        forwards, for work that cites those classics, to find the newest replies.
      </figcaption>
    </figure>
  );
}
