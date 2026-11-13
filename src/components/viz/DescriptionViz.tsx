"use client";

import { useState } from "react";

const SITS: { label: string; kings: boolean[] }[] = [
  { label: "France today: no king", kings: [] },
  { label: "one king, who is bald", kings: [true] },
  { label: "one king, not bald", kings: [false] },
  { label: "two kings, both bald", kings: [true, true] },
];
const READS = [
  { label: "is bald", sentence: "The present King of France is bald.", form: "∃x (Kx ∧ ∀y (Ky → y = x) ∧ Bx)", neg: "none" },
  { label: "is not bald: narrow scope", sentence: "The present King of France is not bald.", form: "∃x (Kx ∧ ∀y (Ky → y = x) ∧ ¬Bx)", neg: "inner" },
  { label: "is not bald: wide scope", sentence: "The present King of France is not bald.", form: "¬∃x (Kx ∧ ∀y (Ky → y = x) ∧ Bx)", neg: "outer" },
];

/** Russell’s analysis of a definite description into existence, uniqueness and predication, with the two scopes of negation. */
export function DescriptionViz() {
  const [si, setSi] = useState(0);
  const [ri, setRi] = useState(0);
  const k = SITS[si].kings, r = READS[ri];
  const exists = k.length >= 1, unique = k.length <= 1;
  const reached = exists && unique;
  const pred = reached ? (r.neg === "inner" ? !k[0] : k[0]) : null;
  const inner = exists && unique && (pred as boolean);
  const value = r.neg === "outer" ? !(exists && unique && k[0]) : inner;
  const yes = (b: boolean) => (b ? "true" : "false");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sentence and reading">
        {READS.map((x, i) => <button key={x.label} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{x.label}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Situation" style={{ marginTop: 6 }}>
        {SITS.map((x, i) => <button key={x.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{x.label}</button>)}
      </div>
      <p style={{ margin: "10px 0 4px" }}>&ldquo;{r.sentence}&rdquo;</p>
      <p className="mono" style={{ margin: "0 0 8px", fontSize: 14 }}>{r.form}, where K is &lsquo;is a present King of France&rsquo; and B is &lsquo;is bald&rsquo;</p>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>existence, there is at least one K: <strong>{yes(exists)}</strong></div>
        <div>uniqueness, there is at most one K: <strong>{yes(unique)}</strong></div>
        <div>predication, that K {r.neg === "inner" ? "is not" : "is"} bald: <strong>{pred === null ? "not reached" : yes(pred)}</strong></div>
        {r.neg === "outer" && <div>the claim inside the negation: <strong>{yes(exists && unique && k[0])}</strong>, so its negation is <strong>{yes(value)}</strong></div>}
        <div style={{ marginTop: 4 }}>the sentence on this reading: <strong>{yes(value)}</strong></div>
      </div>
      <figcaption className="viz-caption">
        On Russell&rsquo;s analysis the description is not a name. The sentence says there is exactly one present King of France
        and that he is bald, so it is simply false when there is no king. The denial is ambiguous: with narrow scope it is also
        false, but with wide scope it is true. No bald king is needed to give the sentence a meaning.
      </figcaption>
    </figure>
  );
}
