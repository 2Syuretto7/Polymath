"use client";

import { useState } from "react";

type Ctx = { agent: string; place: string; time: string; hungry: boolean; inChennai: boolean };
const CTXS: Ctx[] = [
  { agent: "Meera", place: "Chennai", time: "9 a.m. on 1 March 2026", hungry: true, inChennai: true },
  { agent: "Arjun", place: "Delhi", time: "1 p.m. on 1 March 2026", hungry: false, inChennai: false },
  { agent: "Meera", place: "Mumbai", time: "8 p.m. on 2 March 2026", hungry: false, inChennai: false },
];
const SENTS: { s: string; content: (c: Ctx) => string; truth: (c: Ctx) => boolean; note: string }[] = [
  { s: "I am hungry.", content: (c) => `that ${c.agent} is hungry at ${c.time}`, truth: (c) => c.hungry, note: "Its character is fixed; its content shifts with the speaker and time." },
  { s: "I am in Chennai now.", content: (c) => `that ${c.agent} is in Chennai at ${c.time}`, truth: (c) => c.inChennai, note: "True in some contexts and false in others." },
  { s: "I am here now.", content: (c) => `that ${c.agent} is in ${c.place} at ${c.time}`, truth: () => true, note: "True in every context of use, yet what it says is contingent: the speaker could have been elsewhere." },
];

/** Kaplan’s character and content: an indexical sentence expresses different propositions in different contexts. */
export function IndexicalViz() {
  const [si, setSi] = useState(2);
  const [ci, setCi] = useState(0);
  const S = SENTS[si], c = CTXS[ci];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sentence">
        {SENTS.map((x, i) => <button key={x.s} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{x.s}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="Context" style={{ marginTop: 6 }}>
        {CTXS.map((x, i) => <button key={i} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => setCi(i)}>{`${x.agent}, ${x.place}`}</button>)}
      </div>
      <div style={{ overflowX: "auto", marginTop: 10 }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead>
            <tr><th style={{ textTransform: "none" }}>context of use</th><th style={{ textTransform: "none" }}>content expressed</th><th style={{ textTransform: "none" }}>true in that context</th></tr>
          </thead>
          <tbody>
            {CTXS.map((x, i) => (
              <tr key={i} style={i === ci ? { background: "var(--accent-soft)", fontWeight: 600 } : undefined}>
                <td>{x.agent}, {x.place}, {x.time}</td>
                <td>{S.content(x)}</td>
                <td className="mono">{S.truth(x) ? "true" : "false"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>
        In the chosen context, &ldquo;{S.s}&rdquo; says {S.content(c)}. {S.note}
      </p>
      <figcaption className="viz-caption">
        The character of an expression is its constant meaning: a rule taking each context to a content. &ldquo;I&rdquo; always
        refers to the speaker, &ldquo;here&rdquo; to the place and &ldquo;now&rdquo; to the time. The content is what is said on
        an occasion, and it is what is necessary or contingent, believed or doubted.
      </figcaption>
    </figure>
  );
}
