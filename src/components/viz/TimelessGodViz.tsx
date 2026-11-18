"use client";

import { useState } from "react";

const EVENTS = ["creation", "Caesar crosses the Rubicon", "you read this", "tomorrow’s choice"];
const VIEWS = [
  { key: "time", name: "everlasting (in time)", note: (e: number) => e < 2 ? "God has already seen this; it is past for God as for us." : e === 2 ? "This is God’s present too: God experiences it now, as you do." : "This is still future for God. If God knows it, God foreknows it, and the problem of foreknowledge returns." },
  { key: "eternal", name: "timeless (eternal)", note: (e: number) => `Boethius: God sees ${e === 3 ? "tomorrow’s choice" : "it"} in one eternal present, as you see a person walking while they walk. Seeing does not cause it, and there is no ‘before’ in which God knew it.` },
];

/** Two models of God’s relation to time: everlasting, moving along with it, or timeless, present to all of it at once. */
export function TimelessGodViz() {
  const [v, setV] = useState(1);
  const [e, setE] = useState(3);
  const X = (i: number) => 70 + i * 125;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="view">
        {VIEWS.map((x, i) => <button key={x.key} type="button" aria-pressed={v === i} className={v === i ? "seg is-on" : "seg"} onClick={() => setV(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A timeline of events with God's vantage point" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={140} x2={500} y2={140} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={500} y={132} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>time</text>
        {EVENTS.map((t, i) => (
          <g key={t} onClick={() => setE(i)} style={{ cursor: "pointer" }}>
            <circle cx={X(i)} cy={140} r={i === e ? 8 : 6} style={{ fill: i === e ? "var(--accent)" : i === 2 ? "var(--text)" : "var(--bg)", stroke: "var(--text)" }} />
            <text x={X(i)} y={168} textAnchor="middle" style={{ fill: i === e ? "var(--accent)" : "var(--text)", fontSize: 11 }}>{t}</text>
          </g>
        ))}
        {v === 1 ? (
          <g>
            <circle cx={260} cy={36} r={14} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={260} y={40} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11, fontWeight: 700 }}>God</text>
            {EVENTS.map((_, i) => <line key={i} x1={260} y1={50} x2={X(i)} y2={132} style={{ stroke: i === e ? "var(--accent)" : "var(--border-strong)", strokeWidth: i === e ? 2.5 : 1 }} />)}
          </g>
        ) : (
          <g>
            <line x1={30} y1={80} x2={500} y2={80} style={{ stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "6 4" }} />
            <circle cx={X(2)} cy={80} r={14} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={X(2)} y={84} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 11, fontWeight: 700 }}>God</text>
            <line x1={X(2)} y1={94} x2={X(2)} y2={132} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
            <text x={40} y={70} style={{ fill: "var(--text-muted)", fontSize: 10 }}>God’s life, moving along with time</text>
          </g>
        )}
      </svg>
      <p style={{ fontSize: 14, margin: "6px 0" }}><strong>{EVENTS[e]}.</strong> {VIEWS[v].note(e)}</p>
      <figcaption className="viz-caption">
        Click an event. On the timeless view, God&rsquo;s whole life is present at once, and every moment of time is present
        to it; on the everlasting view, God has a past, a present and a future, without beginning or end.
      </figcaption>
    </figure>
  );
}
