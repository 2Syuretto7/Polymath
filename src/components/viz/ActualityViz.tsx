"use client";

import { useState } from "react";

type Stage = { label: string; state: string; potential: string; actual: string };
const CASES: { name: string; stages: Stage[]; note: string }[] = [
  {
    name: "the knower",
    stages: [
      { label: "first potentiality", state: "A child who has never studied grammar.", potential: "can come to know grammar, being human", actual: "a human being with a mind" },
      { label: "first actuality", state: "A grammarian, asleep or thinking about something else.", potential: "can read and write correctly at will", actual: "has the knowledge of grammar" },
      { label: "second actuality", state: "The grammarian reading this sentence.", potential: "nothing further in this respect", actual: "is exercising the knowledge, attending to this very word" },
    ],
    note: "Aristotle's own example in De Anima II.5. Going from the first to the second stage takes learning, a real change that needs a teacher. Going from the second to the third is no change at all, he says, but the thing coming into its own.",
  },
  {
    name: "the acorn",
    stages: [
      { label: "potentiality", state: "An acorn on the forest floor.", potential: "can become an oak, but not a horse or a pine", actual: "an acorn, alive" },
      { label: "change under way", state: "A sapling growing through its first summers.", potential: "is still becoming an oak", actual: "is the growing, the actuality of the potential as potential" },
      { label: "actuality", state: "A full-grown oak, producing acorns.", potential: "can make new oaks", actual: "an oak, the end the growth was for" },
    ],
    note: "The acorn's potential is specific: it is directed towards one end. Aristotle defines change itself, in Physics III.1, as the actuality of what is potentially, insofar as it is potentially.",
  },
  {
    name: "the bronze",
    stages: [
      { label: "potentiality", state: "A lump of bronze in the workshop.", potential: "can be shaped into a statue, a bowl or a bell", actual: "bronze, a metal with its own nature" },
      { label: "change under way", state: "The sculptor casting and chasing the figure.", potential: "is becoming a statue", actual: "is being shaped" },
      { label: "actuality", state: "The finished statue of Hermes.", potential: "could be melted down and recast", actual: "is a statue: matter with a form" },
    ],
    note: "Here potentiality goes with matter and actuality with form. The bronze persists through the change; what it gains is a shape. The statue still holds a potential, for being melted, which is why things made of matter can perish.",
  },
];

/** Step through stages of potentiality and actuality in three of Aristotle's examples. */
export function ActualityViz() {
  const [k, setK] = useState(0);
  const [s, setS] = useState(0);
  const C = CASES[k];
  const st = C.stages[s];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Example">
        {CASES.map((c, i) => (
          <button key={c.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => { setK(i); setS(0); }}>{c.name}</button>
        ))}
      </div>
      <ol style={{ display: "flex", gap: 8, listStyle: "none", padding: 0, margin: "14px 0 0", flexWrap: "wrap" }}>
        {C.stages.map((x, i) => (
          <li key={x.label} style={{ flex: "1 1 160px" }}>
            <button type="button" onClick={() => setS(i)} aria-pressed={i === s}
              className={i === s ? "viz-chip is-on" : "viz-chip"} style={{ width: "100%", justifyContent: "center", height: "auto", padding: "6px 10px" }}>
              {i + 1}. {x.label}
            </button>
          </li>
        ))}
      </ol>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td style={{ width: 130 }}>the situation</td><td>{st.state}</td></tr>
          <tr><td>actually</td><td>{st.actual}</td></tr>
          <tr><td>potentially</td><td>{st.potential}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={s >= 2} onClick={() => setS(s + 1)}>Next stage</button>
        <button type="button" className="btn" disabled={s === 0} onClick={() => setS(s - 1)}>Back</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {s === 2 ? C.note : "Every stage is actually something and potentially something else. Move along and watch a potential become actual."}
      </figcaption>
    </figure>
  );
}
