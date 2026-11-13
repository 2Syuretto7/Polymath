"use client";

import { useState } from "react";

type Rule = { name: string; send: (got: number) => number; story: string };
const RULES: Rule[] = [
  { name: "copy the note", send: (g) => g, story: "You resolve to send back exactly the note you received." },
  { name: "send the opposite", send: (g) => 1 - g, story: "You resolve to send back the opposite of the note you received, as Tim resolves to kill the grandfather who in fact survived." },
  { name: "always send “yes”", send: () => 1, story: "You resolve to send back “yes” whatever arrives." },
];
const WORD = ["no", "yes"];

/** A note sent back in time: which histories are consistent, given how you respond to the note? */
export function TimeLoopViz() {
  const [ri, setRi] = useState(0);
  const [got, setGot] = useState(1);
  const R = RULES[ri];
  const sent = R.send(got);
  const ok = sent === got;
  const consistent = [0, 1].filter((v) => R.send(v) === v);
  const W = 560, H = 130;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>On Monday a note arrives from your future self, reading &ldquo;yes&rdquo; or &ldquo;no&rdquo;. On Friday you step into a time machine and send a note back to Monday.</p>
      <div className="segmented" role="group" aria-label="Your plan">
        {RULES.map((r, i) => <button key={r.name} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{r.name}</button>)}
      </div>
      <div className="viz-controls">
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>Suppose Monday&rsquo;s note reads:</span>
        {[1, 0].map((v) => <button key={v} type="button" aria-pressed={got === v} className={got === v ? "viz-chip is-on" : "viz-chip"} onClick={() => setGot(v)}>{WORD[v]}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A timeline from Monday to Friday with a note sent back" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={90} x2={W - 40} y2={90} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        <path d={`M ${W - 80} 82 C ${W - 140} 10, 140 10, 80 82`} style={{ fill: "none", stroke: ok ? "var(--accent)" : "var(--danger)", strokeWidth: 2, strokeDasharray: "6 4" }} />
        <polygon points="80,84 74,70 88,72" style={{ fill: ok ? "var(--accent)" : "var(--danger)" }} />
        <circle cx={80} cy={90} r={7} style={{ fill: "var(--accent)" }} />
        <circle cx={W - 80} cy={90} r={7} style={{ fill: "var(--accent)" }} />
        <text x={80} y={114} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>Monday: receives &ldquo;{WORD[got]}&rdquo;</text>
        <text x={W - 80} y={114} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>Friday: sends &ldquo;{WORD[sent]}&rdquo;</text>
        <text x={W / 2} y={62} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the note travels back</text>
      </svg>
      <p className={ok ? "viz-verdict viz-verdict-right" : "viz-verdict viz-verdict-wrong"} style={{ margin: "6px 0" }}>
        {ok ? `Consistent: the note you send is the note you received.` : `Inconsistent: you would send “${WORD[sent]}”, but the note that arrived reads “${WORD[got]}”. This history cannot happen.`}
      </p>
      <p className="mono" style={{ margin: "4px 0", fontSize: 13 }}>
        consistent histories with this plan: {consistent.length ? consistent.map((v) => `“${WORD[v]}”`).join(" and ") : "none"}
      </p>
      <figcaption className="viz-caption">
        {R.story}{" "}
        {consistent.length === 2 && "Both histories are consistent, and nothing in the loop settles which one happens: the note’s content seems to come from nowhere. This is a bootstrap paradox."}
        {consistent.length === 0 && "No history is consistent. If time travel happens, something must stop the plan: the machine fails, or your hand slips. Lewis says you can kill your grandfather in one sense and cannot in another; you will not."}
        {consistent.length === 1 && "Exactly one history is consistent, and the loop is harmless."}
      </figcaption>
    </figure>
  );
}
