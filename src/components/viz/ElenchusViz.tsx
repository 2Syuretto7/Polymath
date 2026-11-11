"use client";

import { useState } from "react";

export type ElClaim = { text: string; thesis?: boolean; cost: string };
export type ElCase = { name: string; who: string; claims: ElClaim[]; clash: string };

/** The interlocutor's beliefs cannot all be true. Choose which to give up, and see what it costs. */
export function ElenchusViz({ cases }: { cases: ElCase[] }) {
  const [k, setK] = useState(0);
  const [off, setOff] = useState<number[]>([]);
  const C = cases[k];
  const toggle = (i: number) => setOff(off.includes(i) ? off.filter((x) => x !== i) : [...off, i]);

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Choose a dialogue">
        {cases.map((c, i) => (
          <button key={c.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k}
            onClick={() => { setK(i); setOff([]); }}>{c.name}</button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "12px 0 0", textTransform: "none" }}>{C.who} agrees to all of these:</p>
      <ol className="tagger">
        {C.claims.map((c, i) => {
          const gone = off.includes(i);
          return (
            <li key={c.text} className={`tagger-row ${gone ? "is-wrong" : c.thesis ? "is-right" : ""}`}>
              <p className="tagger-text" style={{ marginBottom: 8, textDecoration: gone ? "line-through" : undefined, color: gone ? "var(--text-faint)" : undefined }}>
                <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)", marginRight: 8 }}>{i + 1}. {c.thesis ? "thesis" : "agreed"}</span>
                {c.text}
              </p>
              <button type="button" className="viz-chip" style={{ cursor: "pointer" }} aria-pressed={gone} onClick={() => toggle(i)}>
                {gone ? "keep it after all" : "give this up"}
              </button>
              {gone && off.length === 1 && <p className="tagger-why">{c.cost}</p>}
            </li>
          );
        })}
      </ol>
      <figcaption className="viz-caption" aria-live="polite">
        {off.length === 0
          ? `These cannot all be true. ${C.clash} Something has to go. Logic alone does not say which.`
          : off.length === 1
            ? `Consistent again. ${off[0] === C.claims.findIndex((c) => c.thesis) ? "This is what the interlocutor usually does in the dialogue." : "That is a possible way out, though not the one taken in the dialogue."}`
            : "Consistent, but you have given up more than you need to. One claim is enough."}
      </figcaption>
    </figure>
  );
}
