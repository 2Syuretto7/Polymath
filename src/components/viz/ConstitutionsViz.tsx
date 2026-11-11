"use client";

import { useState } from "react";

const WHO = ["one", "a few", "the many"];
const NAMES = [["kingship", "tyranny"], ["aristocracy", "oligarchy"], ["polity", "democracy"]];
const DESC: string[][] = [
  [
    "One person rules for the common good. Aristotle thinks kingship is fitting only where one person far surpasses everyone else in virtue, which is rare; a good law, he notes, has no passions, while any human ruler has them.",
    "One person rules for their own advantage, over unwilling subjects. The worst of the deviations, because it corrupts the best and most divine of the correct forms.",
  ],
  [
    "The best few rule for the common good: either the most virtuous, or those who aim at what is best for the city and everyone in it.",
    "The few rule for their own advantage. Aristotle adds that what really makes it oligarchy is that the rulers are the rich, whether few or many.",
  ],
  [
    "The many rule for the common good. Aristotle calls it by the general name for a constitution, politeia. In practice it is a mixture of oligarchy and democracy, and works best with a large middle class.",
    "The many rule for their own advantage. Aristotle adds that what really makes it democracy is rule by the poor, who happen to be many. The mildest of the deviations.",
  ],
];

/** Aristotle's six constitutions: who rules, and in whose interest. */
export function ConstitutionsViz() {
  const [w, setW] = useState(0);
  const [good, setGood] = useState(0);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, alignItems: "center" }}>
        <span className="mono-meta">who rules</span>
        <div className="segmented" role="group" aria-label="Who rules">
          {WHO.map((x, i) => (
            <button key={x} type="button" className={i === w ? "seg is-on" : "seg"} aria-pressed={i === w} onClick={() => setW(i)}>{x}</button>
          ))}
        </div>
      </div>
      <div className="viz-controls" style={{ alignItems: "center" }}>
        <span className="mono-meta">in whose interest</span>
        <div className="segmented" role="group" aria-label="In whose interest">
          {["the common good", "the rulers' own"].map((x, i) => (
            <button key={x} type="button" className={i === good ? "seg is-on" : "seg"} aria-pressed={i === good} onClick={() => setGood(i)}>{x}</button>
          ))}
        </div>
      </div>
      <table className="table" style={{ marginTop: 12, textAlign: "center" }}>
        <thead>
          <tr><th></th><th>correct: the common good</th><th>deviant: the rulers&rsquo; own good</th></tr>
        </thead>
        <tbody>
          {NAMES.map((pair, i) => (
            <tr key={i}>
              <td style={{ textAlign: "left" }}>rule by {WHO[i]}</td>
              {pair.map((n, j) => {
                const on = i === w && j === good;
                return (
                  <td key={n} style={{ fontWeight: on ? 600 : 400, color: on ? "var(--accent)" : "var(--text)", background: on ? "var(--accent-soft)" : undefined }}>
                    <button type="button" onClick={() => { setW(i); setGood(j); }} aria-pressed={on}
                      style={{ all: "unset", cursor: "pointer", padding: "2px 6px" }}>{n}</button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        <strong>{NAMES[w][good][0].toUpperCase() + NAMES[w][good].slice(1)}.</strong> {DESC[w][good]}
      </figcaption>
    </figure>
  );
}
