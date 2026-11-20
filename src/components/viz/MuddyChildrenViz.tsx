"use client";

import { useState } from "react";

const NAMES = ["Asha", "Bilal", "Chen"];
const bits = (s: number) => [0, 1, 2].map((i) => !!(s & (1 << i)));
const str = (s: number) => bits(s).map((b) => (b ? "M" : "c")).join("");

/** The muddy children: public announcements remove possible worlds until the muddy children know they are muddy. */
export function MuddyChildrenViz() {
  const [actual, setActual] = useState(0b011);
  const [said, setSaid] = useState(false);
  const [round, setRound] = useState(0);
  // compute the set of live worlds after the announcement and `round` rounds of "nobody knows"
  const knows = (set: number[], s: number, i: number) => !set.includes(s ^ (1 << i));
  let live = Array.from({ length: 8 }, (_, s) => s);
  if (said) live = live.filter((s) => s !== 0);
  const history: number[][] = [live];
  for (let r = 0; r < round; r++) {
    const cur = history[history.length - 1];
    history.push(cur.filter((s) => [0, 1, 2].every((i) => !knows(cur, s, i))));
  }
  const now = history[history.length - 1];
  const knowers = [0, 1, 2].filter((i) => (actual & (1 << i)) && knows(now, actual, i));
  const reset = (a: number) => { if (a === 0) return; setActual(a); setSaid(false); setRound(0); };
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        <span style={{ fontSize: 13 }}>muddy:</span>
        {NAMES.map((n, i) => <button key={n} type="button" aria-pressed={!!(actual & (1 << i))} className={actual & (1 << i) ? "btn btn-primary" : "btn btn-ghost"} onClick={() => reset(actual ^ (1 << i))}>{n}</button>)}
      </div>
      <div className="viz-controls" style={{ flexWrap: "wrap" }}>
        <button type="button" className="btn btn-ghost" disabled={said} onClick={() => setSaid(true)}>parent: &lsquo;at least one of you is muddy&rsquo;</button>
        <button type="button" className="btn btn-ghost" disabled={knowers.length > 0 || round >= 3} onClick={() => setRound(round + 1)}>ask: &lsquo;do you know?&rsquo;</button>
        <button type="button" className="btn btn-ghost" onClick={() => reset(actual)}>reset</button>
      </div>
      <svg viewBox="0 0 520 90" role="img" aria-label="The eight possible worlds, with eliminated worlds faded" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: 8 }, (_, s) => (
          <g key={s} style={{ opacity: now.includes(s) ? 1 : 0.25 }}>
            <rect x={10 + s * 63} y={14} width={56} height={44} rx={6} style={{ fill: s === actual ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: s === actual ? "var(--accent)" : "var(--border-strong)", strokeWidth: s === actual ? 2 : 1 }} />
            <text x={38 + s * 63} y={42} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700, letterSpacing: 2 }}>{str(s)}</text>
          </g>
        ))}
        <text x={10} y={78} style={{ fill: "var(--text-muted)", fontSize: 10 }}>letters give Asha, Bilal, Chen in order: M muddy, c clean; the outlined world is actual</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {!said ? "Nothing announced yet. " : ""}Rounds of &lsquo;nobody knows&rsquo;: {round}. Worlds still possible: {now.length}.{" "}
        {knowers.length ? `${knowers.map((i) => NAMES[i]).join(" and ")} now ${knowers.length > 1 ? "know" : "knows"} they are muddy.` : "No child knows yet."}
      </p>
      <figcaption className="viz-caption">
        Each child sees the others&rsquo; foreheads but not their own, so they cannot tell apart two worlds that differ
        only in their own letter. A child knows they are muddy when the other world is already eliminated. With k muddy
        children, they know after k − 1 rounds of silence, but only if the announcement was made, though everyone already
        knew its content whenever k ≥ 2.
      </figcaption>
    </figure>
  );
}
