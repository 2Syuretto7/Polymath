"use client";

import { useState } from "react";

const PEOPLE = [
  { name: "Asha", box: "a small black beetle" },
  { name: "Dev", box: "something that keeps changing" },
  { name: "Leela", box: "nothing at all" },
  { name: "Rahul", box: "a large green beetle" },
];
const TALK = [
  "“My beetle is in its box.”",
  "“Everyone has a beetle.”",
  "“I keep my beetle with me.”",
  "“You cannot look at my beetle, and I cannot look at yours.”",
];

/** Wittgenstein’s beetle in a box: what is in each box plays no part in the language game with “beetle”. */
export function BeetleBoxViz() {
  const [open, setOpen] = useState(false);
  const [shuffle, setShuffle] = useState(0);
  const contents = PEOPLE.map((_, i) => PEOPLE[(i + shuffle) % PEOPLE.length].box);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setOpen(!open)}>{open ? "Close the boxes" : "Peek into every box"}</button>
        <button type="button" className="btn" onClick={() => setShuffle((shuffle + 1) % PEOPLE.length)}>Change what is in the boxes</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 8, marginTop: 10 }}>
        {PEOPLE.map((p, i) => (
          <div key={p.name} style={{ border: "1px solid var(--border)", borderRadius: 6, padding: 8, background: open ? "var(--accent-soft)" : "var(--bg)" }}>
            <strong style={{ fontSize: 14 }}>{p.name}&rsquo;s box</strong>
            <div className="mono" style={{ fontSize: 13, marginTop: 4, color: open ? "var(--text)" : "var(--text-muted)" }}>{open ? contents[i] : "closed: only its owner can look"}</div>
          </div>
        ))}
      </div>
      <p style={{ margin: "10px 0 4px", fontSize: 14 }}>What people say, whatever is in the boxes:</p>
      <ul className="mono" style={{ margin: 0, fontSize: 13 }}>
        {TALK.map((t) => <li key={t}>{t}</li>)}
      </ul>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        the use of &ldquo;beetle&rdquo; is unchanged {open ? "by what the boxes hold" : "while nobody can compare boxes"}
      </p>
      <figcaption className="viz-caption">
        Each person learns what a beetle is only by looking in their own box. Change the contents, or empty a box, and nothing
        in the shared use of the word changes. Wittgenstein concludes that if &ldquo;beetle&rdquo; has a use, the thing in the
        box is no part of it: it &ldquo;cancels out, whatever it is&rdquo;.
      </figcaption>
    </figure>
  );
}
