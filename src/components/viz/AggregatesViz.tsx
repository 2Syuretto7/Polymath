"use client";

import { useState } from "react";

const AGG = [
  { pali: "rūpa", gloss: "form", text: "The body and the material world it meets: the four elements and what is made of them." },
  { pali: "vedanā", gloss: "feeling", text: "The pleasant, painful or neutral tone of each experience." },
  { pali: "saññā", gloss: "perception", text: "Recognising and labelling: this is blue, this is a friend." },
  { pali: "saṅkhārā", gloss: "formations", text: "Volitions, habits and dispositions: the active shaping of experience, including intention, which makes karma." },
  { pali: "viññāṇa", gloss: "consciousness", text: "Awareness through each of the six senses, the mind included, arising in dependence on a sense and its object." },
];
const TEST = ["Is it permanent or impermanent? Impermanent.", "Is what is impermanent satisfying or unsatisfying? Unsatisfying.", "Is it fit to regard what is impermanent and unsatisfying as ‘this is mine, this I am, this is my self’? No."];

/** The five aggregates, each put to the same test. */
export function AggregatesViz() {
  const [k, setK] = useState(0);
  const [step, setStep] = useState(0);
  const A = AGG[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="aggregate" style={{ flexWrap: "wrap" }}>
        {AGG.map((a, i) => <button key={a.pali} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setStep(0); }}>{a.pali}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Five stacked bands making up a person" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {AGG.map((a, i) => {
          const y = 10 + i * 31;
          const on = i === k;
          return (
            <g key={a.pali} onClick={() => { setK(i); setStep(0); }} style={{ cursor: "pointer" }}>
              <rect x={150} y={y} width={220} height={27} rx={4} style={{ fill: on ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--accent)" }} />
              <text x={260} y={y + 18} textAnchor="middle" style={{ fill: on ? "var(--bg)" : "var(--text)", fontSize: 12, fontWeight: on ? 700 : 400, textDecoration: on && step === 3 ? "line-through" : undefined }}>{a.pali}: {a.gloss}</text>
            </g>
          );
        })}
        <text x={400} y={88} style={{ fill: "var(--text-muted)", fontSize: 12 }}>a ‘person’</text>
        <path d="M385 12 Q392 12 392 22 L392 75 Q392 85 398 85 Q392 85 392 95 L392 148 Q392 158 385 158" style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
      </svg>
      <p style={{ margin: "4px 0" }}><strong>{A.pali}</strong>: {A.text}</p>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={step === 3} onClick={() => setStep(step + 1)}>Ask the next question</button>
      </div>
      <ol className="mono" style={{ fontSize: 13, margin: "4px 0", paddingLeft: 22 }}>
        {TEST.slice(0, step).map((t) => <li key={t}>{t}</li>)}
      </ol>
      <figcaption className="viz-caption">
        The Discourse on the Characteristic of Not-self puts each aggregate to the same three questions. None passes, and
        there is nothing besides the five, so no self is found: only processes, arising and passing.
      </figcaption>
    </figure>
  );
}
