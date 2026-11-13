"use client";

import { useState } from "react";

type C = { s: string; naive: string; naiveC: string[]; para?: string; paraS?: string; paraC?: string[]; note: string };
const CS: C[] = [
  { s: "There is a hole in this dosa.", naive: "∃x (Hole(x) ∧ In(x, this dosa))", naiveC: ["dosas", "holes"], paraS: "This dosa is perforated.", para: "Perforated(this dosa)", paraC: ["dosas"], note: "The paraphrase says the same with no quantifier over holes, so holes need not be counted among what exists." },
  { s: "Pegasus does not exist.", naive: "¬Exists(Pegasus)", naiveC: ["Pegasus?"], paraS: "Nothing pegasises.", para: "¬∃x Pegasises(x)", paraC: [], note: "Read naively, the name seems to refer to something that does not exist. Treating the name as a description removes the puzzle, as Russell and Quine proposed." },
  { s: "The average family has 2.4 children.", naive: "∃x (AverageFamily(x) ∧ Children(x) = 2.4)", naiveC: ["average families", "numbers"], paraS: "The number of children divided by the number of families is 2.4.", para: "#children / #families = 2.4", paraC: ["numbers"], note: "No one is committed to the average family. The paraphrase still quantifies over numbers, though." },
  { s: "There is a chance it will rain.", naive: "∃x (Chance(x) ∧ Of(x, rain))", naiveC: ["chances"], paraS: "It may rain.", para: "◇ Rain", paraC: [], note: "A modal operator replaces the quantifier over chances. Whether that is an honest paraphrase is itself debated." },
  { s: "There are prime numbers greater than 100.", naive: "∃x (Number(x) ∧ Prime(x) ∧ x > 100)", naiveC: ["numbers"], note: "No agreed paraphrase avoids quantifying over numbers. If science needs sentences like this, Quine says we are committed to numbers." },
  { s: "Some critics admire only one another.", naive: "∃X (∃x Xx ∧ ∀x∀y ((Xx ∧ Admires(x, y)) → (Xy ∧ x ≠ y)))", naiveC: ["critics", "classes of critics"], note: "The Geach–Kaplan sentence cannot be stated in first-order logic about critics alone. It needs a quantifier over collections, and so commits us to classes." },
];

/** Quine's criterion: we are committed to whatever our bound variables must range over, in our best paraphrase. */
export function CommitmentViz() {
  const [ci, setCi] = useState(0);
  const [para, setPara] = useState(false);
  const C = CS[ci];
  const use = para && C.para;
  const comm = use ? C.paraC! : C.naiveC;
  return (
    <figure className="viz">
      <div className="viz-controls">
        {CS.map((x, i) => <button key={x.s} type="button" aria-pressed={ci === i} className={ci === i ? "viz-chip is-on" : "viz-chip"} onClick={() => { setCi(i); setPara(false); }}>{x.s}</button>)}
      </div>
      <div style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "10px 12px", marginTop: 10 }}>
        <p style={{ margin: "0 0 6px", fontSize: 17 }}>{use ? C.paraS : C.s}</p>
        <p className="mono" style={{ margin: "0 0 8px", fontSize: 14, color: "var(--text-muted)" }}>{use ? C.para : C.naive}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
          <span style={{ fontSize: 14 }}>committed to:</span>
          {comm.length ? comm.map((x) => <span key={x} className="mono" style={{ border: "1px solid var(--accent)", borderRadius: 12, padding: "1px 10px", fontSize: 13 }}>{x}</span>) : <span className="mono" style={{ fontSize: 13 }}>nothing new</span>}
        </div>
      </div>
      <div style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" disabled={!C.para} onClick={() => setPara(!para)}>{!C.para ? "no paraphrase available" : para ? "show the original" : "paraphrase it"}</button>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>{C.note}</p>
      <figcaption className="viz-caption">
        Quine: to be is to be the value of a bound variable. Translate a theory into first-order logic; it is committed to the things its existential quantifiers must range over for it to be true. A good paraphrase can remove an apparent commitment, but not every commitment can be paraphrased away.
      </figcaption>
    </figure>
  );
}
