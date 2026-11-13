"use client";

import { useState } from "react";

type Web = { name: string; beliefs: string[]; support: [number, number][]; conflict: [number, number][] };

const WEBS: Web[] = [
  {
    name: "a detective's beliefs",
    beliefs: [
      "The butler had mud on his boots",
      "It rained in the garden last night",
      "The butler was in the garden",
      "The butler says he never left the house",
      "The butler is lying",
      "The window was forced from outside",
      "The thief came through the garden",
    ],
    support: [[0, 2], [1, 2], [2, 4], [3, 4], [5, 6], [2, 6], [1, 0]],
    conflict: [[3, 2]],
  },
  {
    name: "a consistent fairy tale",
    beliefs: [
      "A dragon guards the mountain",
      "The villagers lose sheep every month",
      "Scorch marks cover the hillside",
      "No one returns from the summit",
      "The king offers a reward for the dragon",
      "Knights ride towards the mountain",
      "The dragon sleeps in winter",
    ],
    support: [[0, 1], [0, 2], [0, 3], [0, 4], [4, 5], [6, 1], [3, 5]],
    conflict: [],
  },
];

/** A web of beliefs: support links reward holding beliefs together, conflicts penalise holding both. */
export function CoherenceWebViz() {
  const [wi, setWi] = useState(0);
  const [held, setHeld] = useState<boolean[]>(Array(7).fill(true));
  const Wb = WEBS[wi];
  const n = Wb.beliefs.length;
  const sup = Wb.support.filter(([a, b]) => held[a] && held[b]).length;
  const con = Wb.conflict.filter(([a, b]) => held[a] && held[b]).length;
  const score = sup - 2 * con;
  const W = 760, H = 300, cx = W / 2, cy = H / 2, R = 120;
  const pos = (i: number) => [cx + R * 1.1 * Math.cos((2 * Math.PI * i) / n - Math.PI / 2), cy + R * Math.sin((2 * Math.PI * i) / n - Math.PI / 2)];
  const toggle = (i: number) => setHeld(held.map((x, j) => (j === i ? !x : x)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="System of beliefs">
        {WEBS.map((w, i) => <button key={w.name} type="button" aria-pressed={wi === i} className={wi === i ? "seg is-on" : "seg"} onClick={() => { setWi(i); setHeld(Array(7).fill(true)); }}>{w.name}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Network of beliefs with support and conflict links" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {Wb.support.map(([a, b], k) => { const [x1, y1] = pos(a), [x2, y2] = pos(b); const on = held[a] && held[b]; return <line key={`s${k}`} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: on ? "var(--accent)" : "var(--border)", strokeWidth: on ? 2.5 : 1 }} />; })}
        {Wb.conflict.map(([a, b], k) => { const [x1, y1] = pos(a), [x2, y2] = pos(b); const on = held[a] && held[b]; return <line key={`c${k}`} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: on ? "var(--danger)" : "var(--border)", strokeWidth: on ? 2.5 : 1, strokeDasharray: "6 4" }} />; })}
        {Wb.beliefs.map((b, i) => {
          const [x, y] = pos(i);
          return (
            <g key={b} onClick={() => toggle(i)} style={{ cursor: "pointer" }}>
              <circle cx={x} cy={y} r={9} style={{ fill: held[i] ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
              <text x={Math.abs(x - cx) < 10 ? x : x + (x > cx ? 14 : -14)} y={Math.abs(x - cx) < 10 ? y - 14 : y + 4} textAnchor={Math.abs(x - cx) < 10 ? "middle" : x > cx ? "start" : "end"} style={{ fill: held[i] ? "var(--text)" : "var(--text-faint)", fontSize: 11, textDecoration: held[i] ? undefined : "line-through" }}>{b}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls">
        {Wb.beliefs.map((b, i) => <button key={b} type="button" aria-pressed={held[i]} className={held[i] ? "viz-chip is-on" : "viz-chip"} onClick={() => toggle(i)}>{i + 1}. {held[i] ? "held" : "rejected"}</button>)}
      </div>
      <p className="mono" style={{ margin: "6px 0" }}>
        active supports: {sup}; active conflicts: {con}; coherence score: {score}
      </p>
      <figcaption className="viz-caption">
        Click a belief to reject or restore it. Solid links are relations of support, dashed links are conflicts. In the detective&apos;s web, rejecting the butler&apos;s testimony removes the only conflict and raises coherence. But the fairy tale is perfectly coherent too, though none of it is true: this is the isolation objection to coherentism.
      </figcaption>
    </figure>
  );
}
