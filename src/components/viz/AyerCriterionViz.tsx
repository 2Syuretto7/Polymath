"use client";

import { useState } from "react";

const CLAIMS = ["the Absolute is perfect", "the Nothing itself nothings", "copper conducts electricity", "God exists"];
const OBS = ["this wire conducts", "the litmus paper turns red", "there is a bell ringing now"];

/** Ayer’s 1936 criterion of indirect verifiability, and how it lets in any sentence at all. */
export function AyerCriterionViz() {
  const [c, setC] = useState(0);
  const [o, setO] = useState(0);
  const [aux, setAux] = useState(true);
  const N = CLAIMS[c], O = OBS[o];
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>Choose a sentence to test and an observation.</p>
      <div className="segmented" role="group" aria-label="sentence">
        {CLAIMS.map((s, i) => (
          <button key={s} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => setC(i)}>{s}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="observation" style={{ marginTop: 6 }}>
        {OBS.map((s, i) => (
          <button key={s} type="button" aria-pressed={o === i} className={o === i ? "seg is-on" : "seg"} onClick={() => setO(i)}>{s}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="auxiliary premise" style={{ marginTop: 6 }}>
        <button type="button" aria-pressed={aux} className={aux ? "seg is-on" : "seg"} onClick={() => setAux(true)}>add the premise &ldquo;if N then O&rdquo;</button>
        <button type="button" aria-pressed={!aux} className={!aux ? "seg is-on" : "seg"} onClick={() => setAux(false)}>no auxiliary premise</button>
      </div>
      <div style={{ display: "grid", gap: 4, marginTop: 12 }}>
        <div style={{ padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 6 }}>N: {N}</div>
        {aux && <div style={{ padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 6 }}>auxiliary: if {N}, then {O}</div>}
        <div style={{ padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 6 }}>
          {aux ? `by modus ponens: ${O}` : `from N alone, no observation sentence follows`}
        </div>
        {aux && <div style={{ padding: "4px 10px", border: "1px solid var(--border)", borderRadius: 6 }}>does &ldquo;{O}&rdquo; follow from the auxiliary alone? no</div>}
      </div>
      <div className="mono" style={{ marginTop: 10, padding: "6px 10px", borderRadius: 6, fontWeight: 700, background: aux ? "var(--danger-soft)" : "var(--accent-soft)" }}>
        {aux ? "verdict: N is indirectly verifiable, so meaningful" : "verdict: not yet shown verifiable"}
      </div>
      <figcaption className="viz-caption">
        Ayer&rsquo;s first criterion (1936): a sentence is meaningful if, together with some auxiliary premises, it entails an
        observation sentence that the premises alone do not entail. Taking &ldquo;if N then O&rdquo; as the auxiliary passes
        every sentence N whatsoever, metaphysical or scientific. Ayer tightened the criterion in 1946, and Alonzo Church
        showed in 1949 that the new version also lets in everything.
      </figcaption>
    </figure>
  );
}
