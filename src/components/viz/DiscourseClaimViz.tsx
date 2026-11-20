"use client";

import { useState } from "react";

const UTTERANCES = [
  { label: "“Close the window, please.”", truth: "the window is open and can be closed", rightness: "the speaker may ask this of the hearer", sincerity: "the speaker really wants it closed" },
  { label: "“The river is polluted upstream.”", truth: "the river is polluted upstream", rightness: "it is appropriate to warn people here", sincerity: "the speaker believes it" },
  { label: "“You promised to repay the loan.”", truth: "a promise was in fact made", rightness: "promises of this kind bind", sincerity: "the speaker means the reminder" },
];

const CHALLENGE = {
  truth: { name: "truth", how: "redeemed in theoretical discourse, by evidence and argument about the facts." },
  rightness: { name: "normative rightness", how: "redeemed in practical discourse, by asking whether the norm could win the agreement of all affected." },
  sincerity: { name: "sincerity", how: "not redeemed by argument at all: it is shown, or belied, by whether the speaker’s later conduct is consistent." },
} as const;

type Claim = keyof typeof CHALLENGE;

/** Habermas’s three validity claims raised by every speech act, and how each is redeemed when challenged. */
export function DiscourseClaimViz() {
  const [k, setK] = useState(0);
  const [c, setC] = useState<Claim>("rightness");
  const U = UTTERANCES[k];
  const claims: Claim[] = ["truth", "rightness", "sincerity"];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="utterance">
        {UTTERANCES.map((u, i) => (
          <button key={u.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{u.label}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8, marginTop: 12 }}>
        {claims.map((cl) => {
          const on = cl === c;
          return (
            <button
              key={cl}
              type="button"
              aria-pressed={on}
              onClick={() => setC(cl)}
              style={{ textAlign: "left", padding: "10px 12px", borderRadius: 8, cursor: "pointer", background: on ? "var(--accent-soft)" : "var(--surface)", border: `2px solid ${on ? "var(--accent)" : "var(--border)"}`, color: "var(--text)" }}
            >
              <div style={{ fontWeight: 700 }}>{CHALLENGE[cl].name}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>{U[cl]}</div>
            </button>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        The hearer challenges the claim to {CHALLENGE[c].name}. It is {CHALLENGE[c].how}
      </p>
      <figcaption className="viz-caption">
        Choose an utterance, then click a claim to challenge it. On Habermas&rsquo;s view, every speech act aimed at
        understanding raises all three claims at once, and the hearer can accept or contest each. Communicative action
        coordinates people through these claims; strategic action coordinates them by threat or reward instead.
      </figcaption>
    </figure>
  );
}
