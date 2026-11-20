"use client";

import { useState } from "react";

const CASES = [
  {
    name: "Squirrel",
    q: "A squirrel clings to a tree trunk; a man walks round the tree, and the squirrel keeps the trunk between them. Does the man go round the squirrel?",
    word: "go round",
    a: "Yes: he is first north of it, then east, then south, then west of it.",
    b: "No: he is first in front of it, then to its side, but never behind it; its belly always faces him.",
    ra: "The man passes successively north, east, south and west of the squirrel.",
    rb: "The man is never behind the squirrel.",
    verdict: "Verbal. Both restatements are true and both sides accept them. William James settled it this way in 1907.",
    tone: "var(--success)",
  },
  {
    name: "Pluto",
    q: "Is Pluto a planet?",
    word: "planet",
    a: "Yes: it is a round body orbiting the Sun.",
    b: "No: it has not cleared its orbit of other bodies.",
    ra: "Pluto is a round body orbiting the Sun.",
    rb: "Pluto has not cleared its orbit.",
    verdict: "Largely verbal about Pluto, which both describe alike. What remains is a practical question about which classification serves astronomy best.",
    tone: "var(--success)",
  },
  {
    name: "Free will",
    q: "Do agents in a deterministic world act freely?",
    word: "free",
    a: "Yes: they act on their own reasons, without coercion.",
    b: "No: they could not have done otherwise, given the past and the laws.",
    ra: "Such agents act on their own reasons, without coercion.",
    rb: "Such agents could not have done otherwise.",
    verdict: "Partly verbal, but the parties still disagree about which condition matters for blame and desert. A substantive dispute survives the ban.",
    tone: "var(--danger)",
  },
  {
    name: "Tables",
    q: "Where there are particles arranged table-wise, is there a table?",
    word: "exist (there is)",
    a: "Yes: tables exist; they are the particles arranged table-wise.",
    b: "No: only the particles exist.",
    ra: "Hirsch: each side speaks truly in its own language; the dispute is verbal.",
    rb: "Sider: one meaning of the quantifier carves nature at the joints; the dispute is about which.",
    verdict: "Contested. Whether the quantifier itself can be banned, or has a privileged meaning, is the question of the next lesson.",
    tone: "var(--accent)",
  },
];

/** Chalmers's method of elimination: ban the key word and see whether the disagreement survives. */
export function VerbalDisputeViz() {
  const [k, setK] = useState(0);
  const [ban, setBan] = useState(false);
  const C = CASES[k];
  const box = (title: string, body: string, on: boolean) => (
    <div style={{ border: `1px solid ${on ? "var(--accent)" : "var(--border-strong)"}`, borderRadius: 8, padding: 12, background: on ? "var(--accent-soft)" : "var(--bg-subtle)" }}>
      <p style={{ fontSize: 12, color: "var(--text-muted)", margin: 0 }}>{title}</p>
      <p style={{ margin: "6px 0 0" }}>{body}</p>
    </div>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="dispute">
        {CASES.map((c, i) => <button key={c.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setBan(false); }}>{c.name}</button>)}
      </div>
      <p style={{ fontWeight: 700, marginTop: 10 }}>{C.q}</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12, marginTop: 8 }}>
        {box(ban ? "Side A, without the word" : "Side A", ban ? C.ra : C.a, !ban)}
        {box(ban ? "Side B, without the word" : "Side B", ban ? C.rb : C.b, !ban)}
      </div>
      <div className="viz-controls" style={{ marginTop: 10 }}>
        <button type="button" className={ban ? "btn btn-ghost" : "btn btn-primary"} onClick={() => setBan(!ban)}>{ban ? "Restore the word" : `Ban the word ‘${C.word}’`}</button>
      </div>
      {ban && <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: C.tone }}>{C.verdict}</p>}
      <figcaption className="viz-caption">
        A dispute is verbal when the parties agree on the facts and differ only in what they mean by a key word. David
        Chalmers&rsquo;s test: forbid the word, have each side state its view without it, and see whether any disagreement
        is left.
      </figcaption>
    </figure>
  );
}
