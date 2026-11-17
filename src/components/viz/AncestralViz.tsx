"use client";

import { useState } from "react";

const PEOPLE: Record<string, [number, number]> = {
  Ada: [260, 26], Ben: [150, 76], Cal: [370, 76], Dee: [90, 126], Eve: [200, 126], Fay: [370, 126], Gus: [90, 176], Hal: [320, 176], Ivy: [420, 176],
};
const CHILDREN: Record<string, string[]> = { Ada: ["Ben", "Cal"], Ben: ["Dee", "Eve"], Cal: ["Fay"], Dee: ["Gus"], Fay: ["Hal", "Ivy"] };
const STARTS = ["Ada", "Ben", "Cal"];

/** Frege’s ancestral of a relation, built stage by stage from the parent relation. */
export function AncestralViz() {
  const [start, setStart] = useState("Ada");
  const [stage, setStage] = useState(0);
  const stages: string[][] = [];
  let frontier = [start];
  const seen = new Set<string>();
  while (true) {
    const next = frontier.flatMap((p) => CHILDREN[p] ?? []).filter((c) => !seen.has(c));
    if (!next.length) break;
    next.forEach((c) => seen.add(c));
    stages.push(next);
    frontier = next;
  }
  const shown = new Set(stages.slice(0, stage).flat());
  const finished = stage >= stages.length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Starting person">
        {STARTS.map((s) => (
          <button key={s} type="button" aria-pressed={start === s} className={start === s ? "seg is-on" : "seg"} onClick={() => { setStart(s); setStage(0); }}>start from {s}</button>
        ))}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" disabled={finished} onClick={() => setStage((s) => s + 1)}>next stage</button>
        <button type="button" className="btn btn-ghost" onClick={() => setStage(0)}>start again</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A family tree with the descendants of the chosen person marked" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Object.entries(CHILDREN).flatMap(([p, cs]) => cs.map((c) => (
          <line key={p + c} x1={PEOPLE[p][0]} y1={PEOPLE[p][1] + 10} x2={PEOPLE[c][0]} y2={PEOPLE[c][1] - 10} style={{ stroke: shown.has(c) ? "var(--accent)" : "var(--border)", strokeWidth: shown.has(c) ? 2 : 1.2 }} />
        )))}
        {Object.entries(PEOPLE).map(([name, [x, y]]) => {
          const on = shown.has(name), me = name === start;
          return (
            <g key={name}>
              <rect x={x - 22} y={y - 10} width={44} height={20} rx={5} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: me ? "var(--text)" : on ? "var(--accent)" : "var(--text-faint)", strokeWidth: me ? 2.2 : 1.4 }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{name}</text>
            </g>
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>stage {Math.min(stage, stages.length)}{finished ? ", nothing new can be added" : ""}</div>
        <div style={{ fontWeight: 700 }}>following {start} in the parent series so far: {shown.size ? [...shown].join(", ") : "nobody yet"} ({shown.size})</div>
      </div>
      <figcaption className="viz-caption">
        The lines show the relation parent of, going downwards. Each stage adds the children of those added at the stage
        before. Frege defined the result without stages or numbers: y follows x in the series when y has every property
        that is hereditary, meaning passed from each parent to each child, and that belongs to every child of x. Every
        descendant has every such property, and being a descendant of x is itself such a property, so the definition picks
        out exactly the descendants.
      </figcaption>
    </figure>
  );
}
