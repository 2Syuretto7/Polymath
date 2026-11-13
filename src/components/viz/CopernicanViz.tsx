"use client";

import { useState } from "react";

const VIEWS = {
  old: {
    name: "knowledge conforms to objects",
    arrow: "object → mind",
    rows: [
      ["What fixes the shape of experience?", "The objects themselves, impressing their features on a passive mind."],
      ["Can we know anything about objects a priori?", "No. Whatever we know of objects must wait on experience of them, so it can never be necessary or universal."],
      ["What about geometry and causation?", "Either they are mere relations of ideas, saying nothing about the world, or they are learnt from experience and so uncertain. Hume took this road to scepticism."],
    ],
  },
  new: {
    name: "objects conform to knowledge",
    arrow: "mind → object",
    rows: [
      ["What fixes the shape of experience?", "Our own faculties: the forms of sensibility and the concepts of the understanding, which every possible experience must fit."],
      ["Can we know anything about objects a priori?", "Yes, but only about objects as they appear to us, since they must conform to the conditions under which we can experience them."],
      ["What about geometry and causation?", "They hold necessarily of every object of experience, because they are conditions of there being experience at all."],
    ],
  },
};
type K = keyof typeof VIEWS;

/** Kant's Copernican revolution: instead of assuming that our knowledge must conform to objects, suppose that objects must conform to our knowledge. */
export function CopernicanViz() {
  const [k, setK] = useState<K>("old");
  const v = VIEWS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Hypothesis">
        {(Object.keys(VIEWS) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => setK(x)}>{VIEWS[x].name}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 110" role="img" aria-label="An arrow between mind and object" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <defs>
          <marker id="cop-arr" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} />
          </marker>
        </defs>
        <circle cx={110} cy={55} r={38} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={110} y={60} textAnchor="middle" style={{ fontSize: 13, fill: "var(--text)" }}>the mind</text>
        <rect x={350} y={20} width={120} height={70} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={410} y={60} textAnchor="middle" style={{ fontSize: 13, fill: "var(--text)" }}>objects</text>
        {k === "old"
          ? <line x1={345} y1={55} x2={155} y2={55} markerEnd="url(#cop-arr)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
          : <line x1={155} y1={55} x2={345} y2={55} markerEnd="url(#cop-arr)" style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />}
        <text x={250} y={44} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>{k === "old" ? "objects shape what we know" : "our faculties shape what can appear"}</text>
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          {v.rows.map(([q, a]) => <tr key={q}><td>{q}</td><td>{a}</td></tr>)}
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Copernicus, unable to explain the heavens by assuming they revolve around the observer, tried making the observer revolve instead. Kant proposes the same reversal for knowledge, and it is the hypothesis he tests in the whole of the Critique.
      </figcaption>
    </figure>
  );
}
