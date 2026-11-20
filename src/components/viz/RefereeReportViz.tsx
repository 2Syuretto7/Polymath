"use client";

import { useState } from "react";

const DRAFTS = [
  {
    label: "Draft A",
    text: "Lying is always wrong, because Kant said so, and many people agree with him.",
    checks: [true, false, false, false],
    major: "The argument rests on authority and popularity. It needs a reason why lying is wrong, and it should face the case of lying to a murderer at the door.",
    rec: "reject",
  },
  {
    label: "Draft B",
    text: "Frankfurt cases show that responsibility does not need alternative possibilities: Jones decides on his own, though a device would have forced the same choice. Section 3 answers the dilemma defence.",
    checks: [true, true, true, true],
    major: "The reply to the dilemma defence is promising but brief. Consider the flicker-of-freedom objection as well.",
    rec: "minor revisions",
  },
  {
    label: "Draft C",
    text: "Fraternity, as Ambedkar uses it, can ground political obligation, since citizens who share a common life owe one another support. I argue this from his speeches of 1949.",
    checks: [true, true, true, false],
    major: "The thesis is original, but no objection is considered. What of citizens who are excluded from the common life the argument appeals to?",
    rec: "major revisions",
  },
];
const CRITERIA = ["clear thesis", "argument with stated premises", "engages the literature", "faces the strongest objection"];

/** What a referee looks for, and the recommendation that follows. */
export function RefereeReportViz() {
  const [k, setK] = useState(0);
  const D = DRAFTS[k];
  const tone = D.rec === "reject" ? "var(--danger)" : D.rec === "major revisions" ? "var(--accent)" : "var(--success)";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="draft">
        {DRAFTS.map((d, i) => (
          <button key={d.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{d.label}</button>
        ))}
      </div>
      <div style={{ marginTop: 12, padding: "10px 14px", borderRadius: 8, background: "var(--bg-subtle)", border: "1px solid var(--border)", fontStyle: "italic" }}>{D.text}</div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8, marginTop: 10 }}>
        {CRITERIA.map((c, i) => (
          <div key={c} style={{ padding: "8px 10px", borderRadius: 8, fontSize: 13, border: `2px solid ${D.checks[i] ? "var(--success)" : "var(--danger)"}`, background: D.checks[i] ? "var(--success-soft)" : "var(--danger-soft)" }}>
            <strong>{D.checks[i] ? "Met" : "Not met"}</strong>: {c}
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        Main comment: {D.major} Recommendation: <span style={{ color: tone }}>{D.rec}</span>.
      </p>
      <figcaption className="viz-caption">
        A referee report summarises the paper, sets out the major problems, lists minor points, and recommends accept,
        minor revisions, major revisions or reject. A good report is specific and constructive: it says what would make
        the paper better, not only what is wrong with it.
      </figcaption>
    </figure>
  );
}
