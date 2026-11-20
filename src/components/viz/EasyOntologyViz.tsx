"use client";

import { useState } from "react";

const CHAINS = [
  {
    name: "Properties",
    steps: [
      { s: "The rose is red.", why: "An ordinary empirical claim." },
      { s: "The rose has the property of redness.", why: "A trivial rephrasing: the rules for ‘property’ license it from the first sentence." },
      { s: "There is a property the rose has.", why: "Existential generalisation." },
      { s: "Properties exist.", why: "An ontological claim, reached with no metaphysical work." },
    ],
  },
  {
    name: "Numbers",
    steps: [
      { s: "The planets and the moons are paired off one to one.", why: "An empirical claim (imagine eight moons)." },
      { s: "The number of planets is the number of moons.", why: "Hume’s principle: the numbers are equal exactly when the things can be paired off." },
      { s: "There is something that is the number of planets.", why: "Existential generalisation." },
      { s: "Numbers exist.", why: "The neo-Fregean conclusion of Hale and Wright." },
    ],
  },
  {
    name: "Tables",
    steps: [
      { s: "There are particles arranged table-wise here.", why: "A claim even the nihilist accepts." },
      { s: "There is a table here.", why: "On Thomasson’s view, the application conditions for ‘table’ are met, so this follows analytically." },
      { s: "Tables exist.", why: "So the special composition question has an easy answer." },
    ],
  },
];

/** Thomasson's easy ontology: from an uncontroversial truth, by rules of use, to an existence claim. */
export function EasyOntologyViz() {
  const [k, setK] = useState(0);
  const [n, setN] = useState(1);
  const C = CHAINS[k];
  const done = n >= C.steps.length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="chain">
        {CHAINS.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setN(1); }}>{c.name}</button>)}
      </div>
      <ol style={{ marginTop: 12, paddingLeft: 22 }}>
        {C.steps.slice(0, n).map((st, i) => (
          <li key={i} style={{ marginBottom: 8 }}>
            <span style={{ fontWeight: 700, color: i === C.steps.length - 1 ? "var(--accent)" : "var(--text)" }}>{st.s}</span>
            <br />
            <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{st.why}</span>
          </li>
        ))}
      </ol>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setN(n + 1)}>Next step</button>
        <button type="button" className="btn btn-ghost" onClick={() => setN(1)}>Start again</button>
      </div>
      {done && (
        <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
          Deflationist: the question is answered, and was easy. Critic: the rules for the new term may fail to guarantee a
          referent, or the conclusion is true only in a lightweight sense of &lsquo;exist&rsquo;.
        </p>
      )}
      <figcaption className="viz-caption">
        Amie Thomasson&rsquo;s easy ontology: from an uncontroversial truth, by inferences that the rules of use for a
        term make trivial, to an existence claim. If such inferences are valid, existence questions are either easy or
        unanswerable, and there is no hard, deep ontology left to do.
      </figcaption>
    </figure>
  );
}
