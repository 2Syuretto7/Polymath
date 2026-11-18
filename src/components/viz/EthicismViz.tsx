"use client";

import { useState } from "react";

const VIEWS: { name: string; who: string; score: (craft: number, flaw: number, blocks: boolean) => number; why: string }[] = [
  { name: "autonomism", who: "Anderson and Dickinson", score: (c) => c, why: "Moral flaws are real, but they are never aesthetic flaws." },
  { name: "moderate moralism", who: "Carroll", score: (c, f, b) => c - (b ? f : 0), why: "A moral flaw is an aesthetic flaw when it blocks the response the work aims at." },
  { name: "ethicism", who: "Gaut", score: (c, f) => c - f, why: "A work that prescribes an unmerited response is, to that extent, always aesthetically flawed." },
];

/** How a moral flaw in a work's attitudes bears on its aesthetic value, on three views. */
export function EthicismViz() {
  const [craft, setCraft] = useState(7);
  const [flaw, setFlaw] = useState(2);
  const [blocks, setBlocks] = useState(false);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>other aesthetic merits = {craft} <input type="range" min={1} max={10} value={craft} onChange={(e) => setCraft(Number(e.target.value))} aria-label="craft" /></label>
        <label>moral flaw in the attitudes it invites = {flaw} <input type="range" min={0} max={5} value={flaw} onChange={(e) => setFlaw(Number(e.target.value))} aria-label="flaw" /></label>
      </div>
      <div className="segmented" role="group" aria-label="uptake" style={{ marginTop: 4 }}>
        <button type="button" aria-pressed={!blocks} className={!blocks ? "seg is-on" : "seg"} onClick={() => setBlocks(false)}>audiences can still respond as invited</button>
        <button type="button" aria-pressed={blocks} className={blocks ? "seg is-on" : "seg"} onClick={() => setBlocks(true)}>the flaw blocks the invited response</button>
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="Aesthetic value on three views" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {VIEWS.map((v, i) => {
          const s = Math.max(0, v.score(craft, flaw, blocks));
          return (
            <g key={v.name}>
              <text x={150} y={30 + i * 44} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>{v.name}</text>
              <text x={150} y={44 + i * 44} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 10 }}>{v.who}</text>
              <rect x={160} y={20 + i * 44} width={300} height={20} rx={3} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
              <rect x={160} y={20 + i * 44} width={30 * s} height={20} rx={3} style={{ fill: s < craft ? "var(--danger)" : "var(--accent)" }} />
              <text x={468} y={35 + i * 44} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{s}</text>
            </g>
          );
        })}
      </svg>
      <ul style={{ fontSize: 13, margin: "4px 0", paddingLeft: 20 }}>
        {VIEWS.map((v) => <li key={v.name}><strong>{v.name}</strong>: {v.why}</li>)}
      </ul>
      <figcaption className="viz-caption">
        A toy model, not a measurement: each bar is the work&rsquo;s overall aesthetic value on that view. Red bars mark where
        the moral flaw has lowered it. Immoralists add a fourth view: a moral flaw can sometimes be an aesthetic merit.
      </figcaption>
    </figure>
  );
}
