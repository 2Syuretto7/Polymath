"use client";

import { useState } from "react";

type Cond = { kind: string; holds: string; fails: string; verdict: string };
const ACTS: { label: string; utter: string; conds: Cond[] }[] = [
  {
    label: "promise",
    utter: "“I promise to come to your party tomorrow.”",
    conds: [
      { kind: "propositional content", holds: "it is about a future act of the speaker", fails: "it is about the past: “I promise I came yesterday”", verdict: "not a promise at all: one cannot promise a past act" },
      { kind: "preparatory", holds: "the hearer wants the speaker to come, and the speaker would not obviously come anyway", fails: "the hearer dreads the speaker coming", verdict: "defective: this is closer to a threat than a promise" },
      { kind: "sincerity", holds: "the speaker intends to come", fails: "the speaker has no intention of coming", verdict: "a promise, but an insincere one: the speaker is still bound by it" },
      { kind: "essential", holds: "the utterance counts as taking on an obligation to come", fails: "it is said by an actor in a play", verdict: "no obligation is undertaken, so no promise is made" },
    ],
  },
  {
    label: "request",
    utter: "“Please close the window.”",
    conds: [
      { kind: "propositional content", holds: "it is about a future act of the hearer", fails: "it asks for something already done", verdict: "not a request: there is nothing left to do" },
      { kind: "preparatory", holds: "the hearer can close the window, and would not obviously do so anyway", fails: "the window is already shut", verdict: "defective: the request misfires" },
      { kind: "sincerity", holds: "the speaker wants the window closed", fails: "the speaker secretly wants it open", verdict: "a request, but an insincere one" },
      { kind: "essential", holds: "the utterance counts as an attempt to get the hearer to close it", fails: "it is quoted as an example of English", verdict: "no attempt is made, so no request" },
    ],
  },
  {
    label: "assertion",
    utter: "“It is raining.”",
    conds: [
      { kind: "propositional content", holds: "any proposition will do", fails: "", verdict: "" },
      { kind: "preparatory", holds: "the speaker has some evidence, and it is not obvious to both that it is raining", fails: "both are standing in the downpour", verdict: "defective: pointless, though not false" },
      { kind: "sincerity", holds: "the speaker believes it is raining", fails: "the speaker believes it is dry", verdict: "an assertion, but a lie" },
      { kind: "essential", holds: "the utterance counts as committing the speaker to its truth", fails: "it is a line in a poem", verdict: "nothing is asserted" },
    ],
  },
];

/** Searle’s conditions for speech acts: switch one off and see what kind of failure results. */
export function SpeechActViz() {
  const [ai, setAi] = useState(0);
  const [off, setOff] = useState<number | null>(null);
  const A = ACTS[ai];
  const verdict = off === null ? `a successful and sincere ${A.label}` : A.conds[off].verdict;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Speech act">
        {ACTS.map((x, i) => <button key={x.label} type="button" aria-pressed={ai === i} className={ai === i ? "seg is-on" : "seg"} onClick={() => { setAi(i); setOff(null); }}>{x.label}</button>)}
      </div>
      <p style={{ margin: "10px 0 6px" }}>{A.utter}</p>
      <div style={{ display: "grid", gap: 6 }}>
        {A.conds.map((c, i) => {
          const failing = off === i;
          return (
            <div key={c.kind} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center", padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6, background: failing ? "var(--danger-soft)" : "var(--bg)" }}>
              <div style={{ fontSize: 14 }}>
                <strong>{c.kind}</strong>: {failing ? c.fails : c.holds}
              </div>
              {c.fails && <button type="button" className="btn" style={{ height: 30, padding: "0 10px", fontSize: 13 }} onClick={() => setOff(failing ? null : i)}>{failing ? "Restore" : "Make it fail"}</button>}
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>result: <strong>{verdict}</strong></p>
      <figcaption className="viz-caption">
        Searle analysed each kind of illocutionary act by four sorts of rule. The essential condition says what the act counts
        as, so it defines the act. A failed sincerity condition leaves the act performed but abused, while other failures
        leave it defective or not performed at all.
      </figcaption>
    </figure>
  );
}
