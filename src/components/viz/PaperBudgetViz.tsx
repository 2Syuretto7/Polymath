"use client";

import { useState } from "react";

const SECTIONS = [
  { name: "introduction", share: 0.1, job: "State the question, your thesis and the route of the paper." },
  { name: "background", share: 0.15, job: "Set out only the parts of the literature your argument needs." },
  { name: "argument", share: 0.4, job: "Give your positive case, premise by premise." },
  { name: "objections and replies", share: 0.25, job: "Raise the strongest objections and answer them." },
  { name: "conclusion", share: 0.1, job: "Say what has been shown, and what remains open." },
];

/** Dividing a word budget among the sections of a philosophy research paper. */
export function PaperBudgetViz() {
  const [words, setWords] = useState(6000);
  const [k, setK] = useState(2);
  let x = 20;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>length = {words.toLocaleString("en-IN")} words <input type="range" min={4000} max={10000} step={1000} value={words} onChange={(e) => setWords(Number(e.target.value))} aria-label="words" /></label>
      </div>
      <svg viewBox="0 0 540 70" role="img" aria-label="The paper’s word budget divided into sections" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {SECTIONS.map((s, i) => {
          const w = s.share * 500;
          const el = (
            <g key={s.name} onClick={() => setK(i)} style={{ cursor: "pointer" }} role="button" aria-label={s.name}>
              <rect x={x} y={10} width={w - 3} height={36} rx={4} style={{ fill: i === k ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--accent)" }} />
              <text x={x + w / 2} y={62} textAnchor="middle" style={{ fill: i === k ? "var(--text)" : "var(--text-muted)", fontSize: 10, fontWeight: i === k ? 700 : 400 }}>{Math.round(s.share * 100)}%</text>
            </g>
          );
          x += w;
          return el;
        })}
      </svg>
      <div className="segmented" role="group" aria-label="section" style={{ marginTop: 4 }}>
        {SECTIONS.map((s, i) => (
          <button key={s.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.name}</button>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        {SECTIONS[k].name[0].toUpperCase() + SECTIONS[k].name.slice(1)}: about {Math.round(SECTIONS[k].share * words).toLocaleString("en-IN")} words. {SECTIONS[k].job}
      </p>
      <figcaption className="viz-caption">
        These shares are a rough guide, not a rule. The common fault in early papers is the reverse proportion: long
        summaries of the literature and a short argument at the end. Most of the words should go to your own case and to
        defending it.
      </figcaption>
    </figure>
  );
}
