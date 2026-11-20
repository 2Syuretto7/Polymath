"use client";

import { useState } from "react";

const ATTS = [
  { v: "knows that", factive: true, state: true, knows: true, note: "The most general factive mental state: every other one entails it." },
  { v: "sees that", factive: true, state: true, knows: true, note: "One cannot see that it is raining unless it is. Seeing that p is one way of knowing that p." },
  { v: "remembers that", factive: true, state: true, knows: true, note: "Remembering that p requires p and is a way of knowing it, by memory." },
  { v: "regrets that", factive: true, state: true, knows: true, note: "Factive, and on Williamson’s view one regrets that p only if one knows that p." },
  { v: "believes that", factive: false, state: true, knows: false, note: "A mental state, but not factive: false beliefs are common." },
  { v: "is certain that", factive: false, state: true, knows: false, note: "Not factive: one can be certain and wrong." },
  { v: "proves that", factive: true, state: false, knows: false, note: "Factive, but an act or achievement, not a state one is in." },
];

/** Williamson's tests: is the attitude factive, is it a state, and does it entail knowing? */
export function FactiveViz() {
  const [k, setK] = useState(4);
  const A = ATTS[k];
  const cell = (b: boolean) => <td style={{ padding: "6px 10px", color: b ? "var(--success)" : "var(--danger)", fontWeight: 700 }}>{b ? "yes" : "no"}</td>;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="attitude">
        {ATTS.map((a, i) => <button key={a.v} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{a.v}</button>)}
      </div>
      <p style={{ fontWeight: 700, marginTop: 12 }}>Sita {A.v} the train has left.</p>
      <table style={{ borderCollapse: "collapse", marginTop: 6 }}>
        <tbody>
          <tr><td style={{ padding: "6px 10px" }}>Factive: does it entail that the train has left?</td>{cell(A.factive)}</tr>
          <tr><td style={{ padding: "6px 10px" }}>Stative: is it a mental state Sita is in?</td>{cell(A.state)}</tr>
          <tr><td style={{ padding: "6px 10px" }}>Does it entail that Sita knows the train has left?</td>{cell(A.knows)}</tr>
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{A.factive && A.state ? "A factive mental state, so a way of knowing." : "Not a factive mental state."} {A.note}</p>
      <figcaption className="viz-caption">
        Timothy Williamson calls an attitude a factive mental state if it is a state of mind and one can be in it towards
        p only if p is true. His thesis is that knowing is the most general such state: whatever factive mental state one
        is in towards p, one knows p.
      </figcaption>
    </figure>
  );
}
