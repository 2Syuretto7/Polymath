"use client";

import { useState } from "react";

const CASES = [
  {
    name: "Twin Earth (Putnam)",
    a: { who: "Oscar, on Earth, 1750", stuff: "the clear liquid in rivers is H₂O" },
    b: { who: "Twin Oscar, on Twin Earth, 1750", stuff: "the clear liquid in rivers is XYZ" },
    rows: [
      ["brain states and sensations", "identical", "identical"],
      ["says “water is wet”", "yes", "yes"],
      ["knows any chemistry", "no", "no"],
      ["the word “water” refers to", "H₂O", "XYZ"],
      ["the belief is about", "water", "twater, a different substance"],
    ],
    moral: "Everything in the head is the same, yet the beliefs differ in what they are about. So, Putnam concluded, “meanings just ain’t in the head”.",
  },
  {
    name: "arthritis (Burge)",
    a: { who: "Bert, in our community", stuff: "doctors use “arthritis” only for joint ailments" },
    b: { who: "Twin Bert, in a counterfactual community", stuff: "doctors use “arthritis” for joint and thigh ailments" },
    rows: [
      ["brain states and sensations", "identical", "identical"],
      ["says “I have arthritis in my thigh”", "yes", "yes"],
      ["defers to doctors on the word", "yes", "yes"],
      ["the word “arthritis” refers to", "joint ailments only", "a wider class, tharthritis"],
      ["the belief is", "false", "true"],
    ],
    moral: "Here the difference lies in the linguistic community, not the chemistry. Tyler Burge concluded that social facts help fix what we think.",
  },
];

/** Internal duplicates who differ in their surroundings: does the content of their thoughts differ too? */
export function TwinEarthViz() {
  const [ci, setCi] = useState(0);
  const [narrow, setNarrow] = useState(false);
  const C = CASES[ci];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Thought experiment">
        {CASES.map((c, i) => <button key={c.name} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{c.name}</button>)}
      </div>
      <table className="table" style={{ fontSize: 14, marginTop: 10 }}>
        <thead>
          <tr><th style={{ textTransform: "none" }}></th><th style={{ textTransform: "none" }}>{C.a.who}</th><th style={{ textTransform: "none" }}>{C.b.who}</th></tr>
        </thead>
        <tbody>
          <tr><td>surroundings</td><td>{C.a.stuff}</td><td>{C.b.stuff}</td></tr>
          {C.rows.map((r, i) => {
            const differ = r[1] !== r[2];
            return <tr key={i}><td>{r[0]}</td><td style={differ ? { color: "var(--accent)", fontWeight: 600 } : undefined}>{r[1]}</td><td style={differ ? { color: "var(--accent)", fontWeight: 600 } : undefined}>{r[2]}</td></tr>;
          })}
          {narrow && <tr><td>narrow content</td><td>the same</td><td>the same</td></tr>}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className={narrow ? "btn" : "btn btn-primary"} onClick={() => setNarrow(!narrow)}>{narrow ? "Hide the internalist reply" : "Show the internalist reply"}</button>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {narrow
          ? "Internalists reply that the twins share a narrow content, fixed inside the head, which yields different wide contents in different settings. Narrow content is what explains why both behave the same way."
          : C.moral}
      </p>
      <figcaption className="viz-caption">
        Highlighted cells are where the twins differ. Externalism says the content of some thoughts depends on things outside
        the thinker: the substances around them and the practices of their community.
      </figcaption>
    </figure>
  );
}
