"use client";

import { useState } from "react";

export type Premise = { text: string; who: string; why: string };

/** A valid argument laid out premise by premise; reject one to see who has, and why. */
export function PremiseRejectViz({ premises, conclusion, intro }: { premises: Premise[]; conclusion: string; intro: string }) {
  const [rej, setRej] = useState<number | null>(null);
  return (
    <figure className="viz">
      <ol style={{ paddingLeft: 22, margin: "4px 0" }}>
        {premises.map((p, i) => (
          <li key={i} style={{ marginBottom: 6 }}>
            <span style={{ textDecoration: rej === i ? "line-through" : "none", color: rej === i ? "var(--danger)" : "var(--text)" }}>{p.text}</span>{" "}
            <button type="button" className={rej === i ? "btn btn-primary" : "btn btn-ghost"} style={{ marginLeft: 6 }} onClick={() => setRej(rej === i ? null : i)}>{rej === i ? "restore" : "reject"}</button>
          </li>
        ))}
      </ol>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: rej === null ? "var(--accent)" : "var(--text-muted)", borderTop: "1px solid var(--border)", paddingTop: 6 }}>
        {rej === null ? `Therefore: ${conclusion}` : "The conclusion no longer follows."}
      </p>
      <p style={{ fontSize: 14, margin: "4px 0" }}>{rej === null ? intro : <><strong>{premises[rej].who}.</strong> {premises[rej].why}</>}</p>
    </figure>
  );
}
