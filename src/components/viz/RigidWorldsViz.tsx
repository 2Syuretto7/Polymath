"use client";

import { useState } from "react";

type P = { name: string; taught: boolean; wrote: boolean; note: string };
const WORLDS: { label: string; people: P[] }[] = [
  {
    label: "the actual world",
    people: [
      { name: "Aristotle", taught: true, wrote: true, note: "tutor to Alexander; writes the Metaphysics" },
      { name: "Xenocrates", taught: false, wrote: false, note: "heads the Academy" },
      { name: "Theophrastus", taught: false, wrote: false, note: "studies plants" },
    ],
  },
  {
    label: "Aristotle stays in Athens",
    people: [
      { name: "Aristotle", taught: false, wrote: true, note: "never goes to Macedon; writes the Metaphysics" },
      { name: "Xenocrates", taught: true, wrote: false, note: "tutor to Alexander" },
      { name: "Theophrastus", taught: false, wrote: false, note: "studies plants" },
    ],
  },
  {
    label: "Aristotle becomes a doctor",
    people: [
      { name: "Aristotle", taught: false, wrote: false, note: "a physician, like his father" },
      { name: "Xenocrates", taught: false, wrote: false, note: "heads the Academy" },
      { name: "Theophrastus", taught: true, wrote: true, note: "tutor to Alexander; writes the Metaphysics" },
    ],
  },
  {
    label: "Aristotle is never born",
    people: [
      { name: "Xenocrates", taught: true, wrote: false, note: "tutor to Alexander" },
      { name: "Theophrastus", taught: false, wrote: true, note: "writes the Metaphysics" },
    ],
  },
];
const TERMS: { label: string; pick: (ps: P[]) => P | undefined }[] = [
  { label: "Aristotle", pick: (ps) => ps.find((p) => p.name === "Aristotle") },
  { label: "the teacher of Alexander", pick: (ps) => ps.find((p) => p.taught) },
  { label: "the author of the Metaphysics", pick: (ps) => ps.find((p) => p.wrote) },
];

/** Names and descriptions across possible worlds: a rigid designator picks out the same object in every world where it exists. */
export function RigidWorldsViz() {
  const [ti, setTi] = useState(0);
  const t = TERMS[ti];
  const refs = WORLDS.map((w) => t.pick(w.people));
  const names = new Set(refs.filter(Boolean).map((p) => p!.name));
  const rigid = names.size === 1 && WORLDS.every((w, i) => refs[i] || !w.people.some((p) => names.has(p.name)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Expression">
        {TERMS.map((x, i) => <button key={x.label} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => setTi(i)}>{x.label}</button>)}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8, marginTop: 10 }}>
        {WORLDS.map((w, i) => (
          <div key={w.label} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: 8, background: "var(--bg)" }}>
            <div style={{ fontWeight: 600, fontSize: 13, marginBottom: 6 }}>{w.label}</div>
            {w.people.map((p) => {
              const on = refs[i]?.name === p.name;
              return (
                <div key={p.name} style={{ padding: "4px 6px", borderRadius: 6, marginBottom: 4, fontSize: 13, background: on ? "var(--accent)" : "transparent", color: on ? "var(--accent-text)" : "var(--text)" }}>
                  <strong>{p.name}</strong>: {p.note}
                </div>
              );
            })}
            <div className="mono" style={{ fontSize: 12, marginTop: 6, color: "var(--text-muted)" }}>
              &ldquo;{t.label} taught Alexander&rdquo;: {refs[i] ? (refs[i]!.taught ? "true" : "false") : "no referent here"}
            </div>
          </div>
        ))}
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8 }}>
        refers to: {[...names].join(", ")}; <strong>{rigid ? "rigid" : "not rigid"}</strong>
      </div>
      <figcaption className="viz-caption">
        Talking about each possible situation, we keep using our words with their actual meaning. The name picks out the same
        man in every world where he exists, even ones where he did none of the famous things. A description picks out whoever
        fits it there, so &ldquo;the teacher of Alexander taught Alexander&rdquo; cannot be false, while &ldquo;Aristotle taught
        Alexander&rdquo; could have been.
      </figcaption>
    </figure>
  );
}
