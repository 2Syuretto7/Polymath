"use client";

import { useState } from "react";

const CRIT = ["reliably available", "easily accessed when needed", "automatically endorsed", "consciously endorsed in the past"];
const RES: { name: string; meets: boolean[]; note: string }[] = [
  { name: "Inga’s biological memory", meets: [true, true, true, true], note: "The clear case of a belief stored in memory." },
  { name: "Otto’s notebook", meets: [true, true, true, true], note: "Otto has Alzheimer’s and always carries the notebook. He looks up the museum address and trusts it as Inga trusts her memory, so Clark and Chalmers count its entries as his beliefs." },
  { name: "a smartphone’s notes app", meets: [true, true, true, true], note: "For many people today it plays the notebook’s role, so the criteria are met, as far as the person relies on it in that way." },
  { name: "a search engine", meets: [true, true, false, false], note: "Always to hand, but its results are not automatically trusted and were never endorsed before, so it is a tool, not part of the mind." },
  { name: "a library book", meets: [false, false, false, false], note: "Information you could look up is not thereby something you believe." },
  { name: "a friend’s memory", meets: [false, true, true, true], note: "A trusted partner who remembers for you can come close, but they are not always there." },
];

/** Clark and Chalmers’s conditions for an external resource to be part of a person’s mind. */
export function ExtendedCriteriaViz() {
  const [ri, setRi] = useState(1);
  const R = RES[ri];
  const all = R.meets.every(Boolean);
  return (
    <figure className="viz">
      <div className="viz-controls">
        {RES.map((r, i) => <button key={r.name} type="button" aria-pressed={ri === i} className={ri === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setRi(i)}>{r.name}</button>)}
      </div>
      <table className="table" style={{ fontSize: 14, marginTop: 10 }}>
        <thead><tr><th style={{ textTransform: "none" }}>condition</th><th style={{ textTransform: "none" }}>met?</th></tr></thead>
        <tbody>
          {CRIT.map((c, i) => <tr key={c}><td>{c}</td><td style={{ color: R.meets[i] ? "var(--accent)" : "var(--danger)" }}>{R.meets[i] ? "yes" : "no"}</td></tr>)}
        </tbody>
      </table>
      <p className={all ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "8px 0 4px" }}>
        {all ? "Counts as part of the mind, by these conditions." : "Does not count as part of the mind."}
      </p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{R.note}</p>
      <figcaption className="viz-caption">
        The parity principle: if a process in the world works in a way that we would count as cognitive were it done in the
        head, then it is part of the cognitive process. These conditions, from Clark and Chalmers (1998), are meant to stop
        the mind from spreading to everything we could consult.
      </figcaption>
    </figure>
  );
}
