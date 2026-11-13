"use client";

import { useState } from "react";

type Reading = { name: string; up: string; down: string; cutUp: boolean; cutDown: boolean; text: string };

const READINGS: Reading[] = [
  {
    name: "Arnauld's objection",
    up: "the proof of God relies on clear and distinct perceptions",
    down: "the truth of clear and distinct perceptions relies on God",
    cutUp: false,
    cutDown: false,
    text: "Antoine Arnauld, in the Fourth Objections: we can be sure that God exists only because we clearly and distinctly perceive it, and we can be sure that what we clearly and distinctly perceive is true only because God exists. The argument goes round in a circle.",
  },
  {
    name: "only memory needs God",
    up: "the proof uses perceptions I am attending to now",
    down: "God guarantees only remembered conclusions",
    cutUp: false,
    cutDown: true,
    text: "Descartes replied that while I attend to a clear and distinct perception I cannot doubt it, God or no God. What God guarantees is that conclusions I remember having proved, when I no longer attend to the proof, are still true.",
  },
  {
    name: "certainty and knowledge",
    up: "the proof gives certainty while attended to",
    down: "God turns passing certainty into lasting knowledge",
    cutUp: false,
    cutDown: true,
    text: "Some readers distinguish cognitio, the certainty of a single perception, from scientia, stable knowledge that no argument can shake. The atheist geometer has the first but not the second. God is needed only for scientia.",
  },
  {
    name: "true without being known first",
    up: "the proof needs clear perceptions to be true, not the rule to be known",
    down: "the rule is known once God is known",
    cutUp: true,
    cutDown: false,
    text: "A modern reply, from James Van Cleve: to know that God exists by clear and distinct perception, my clear perceptions must in fact be reliable; I need not first know the general rule. The rule is then known afterwards, as a consequence.",
  },
];

const W = 520, H = 230;

/** The Cartesian circle: the rule of clear and distinct perception and the proof of God seem to depend on each other. Ways of breaking the circle. */
export function CartesianCircleViz() {
  const [k, setK] = useState(0);
  const r = READINGS[k];
  const style = (cut: boolean) => ({ stroke: cut ? "var(--text-faint)" : k === 0 ? "var(--danger)" : "var(--accent)", strokeWidth: 2.5, strokeDasharray: cut ? "6 5" : "none", fill: "none" });

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Reading">
        {READINGS.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>{x.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Two claims with arrows of dependence between them" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <defs>
          <marker id="cc-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
        <rect x={20} y={90} width={170} height={56} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={105} y={114} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text)" }}>Whatever I clearly and</text>
        <text x={105} y={131} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text)" }}>distinctly perceive is true</text>
        <rect x={330} y={90} width={170} height={56} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={415} y={114} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text)" }}>God exists and is</text>
        <text x={415} y={131} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text)" }}>no deceiver</text>
        <path d="M150,88 C200,20 320,20 370,88" markerEnd="url(#cc-arrow)" style={style(r.cutUp)} />
        <path d="M370,148 C320,216 200,216 150,148" markerEnd="url(#cc-arrow)" style={style(r.cutDown)} />
        <text x={260} y={22} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--text-muted)" }}>{r.up}</text>
        <text x={260} y={222} textAnchor="middle" style={{ fontSize: 11.5, fill: "var(--text-muted)" }}>{r.down}</text>
      </svg>
      <p className="tagger-why" style={{ marginTop: 8 }}>{r.text}</p>
      <figcaption className="viz-caption" aria-live="polite">
        {k === 0
          ? "Each claim is used to support the other. Choose a reply to see which arrow it weakens, shown dashed."
          : "The dashed arrow is the dependence this reply denies or limits. If it holds, the argument is no longer a circle."}
      </figcaption>
    </figure>
  );
}
