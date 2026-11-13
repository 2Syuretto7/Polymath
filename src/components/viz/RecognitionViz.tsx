"use client";

import { useState } from "react";

type State = "none" | "ab" | "ba" | "both";

const SAY: Record<State, { title: string; text: string }> = {
  none: { title: "struggle", text: "Each is certain of itself but not yet true for the other. To prove it is more than a living thing, each must stake its life, and try to make the other yield." },
  ab: { title: "lord and bondsman", text: "A, preferring life, has yielded: A recognises B, and B does not recognise A. B is lord, A is bondsman. B is acknowledged, but by someone B treats as a thing, so the recognition is worth little. A, in fear and in labour on things for B, shapes the world and comes to see its own mind in its work." },
  ba: { title: "lord and bondsman", text: "B, preferring life, has yielded: B recognises A, and A does not recognise B. A is lord, B is bondsman. The lord's victory is hollow, while the bondsman, through work and discipline, gains a lasting independence the lord lacks." },
  both: { title: "mutual recognition", text: "Each recognises the other as recognising it. Hegel's goal: the “I that is We, and We that is I”, freedom realised in relations of equal respect, which later chapters find in ethical life and the state." },
};

/** Two self-consciousnesses and who recognises whom. */
export function RecognitionViz() {
  const [ab, setAb] = useState(false);
  const [ba, setBa] = useState(false);
  const st: State = ab && ba ? "both" : ab ? "ab" : ba ? "ba" : "none";
  const s = SAY[st];
  const arrow = (on: boolean, y: number, dir: 1 | -1) => (
    <g style={{ opacity: on ? 1 : 0.18 }}>
      <line x1={dir === 1 ? 170 : 350} y1={y} x2={dir === 1 ? 340 : 180} y2={y} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
      <path d={dir === 1 ? `M 340 ${y} l -10 -6 v 12 z` : `M 180 ${y} l 10 -6 v 12 z`} style={{ fill: "var(--accent)" }} />
    </g>
  );
  const lord = st === "ab" ? "B" : st === "ba" ? "A" : null;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ gap: 8, flexWrap: "wrap" }}>
        <button type="button" aria-pressed={ab} className={ab ? "viz-chip is-on" : "viz-chip"} onClick={() => setAb(!ab)}>A recognises B</button>
        <button type="button" aria-pressed={ba} className={ba ? "viz-chip is-on" : "viz-chip"} onClick={() => setBa(!ba)}>B recognises A</button>
      </div>
      <svg viewBox="0 0 520 130" role="img" aria-label="Two self-consciousnesses" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {(["A", "B"] as const).map((who, j) => (
          <g key={who}>
            <circle cx={j === 0 ? 120 : 400} cy={65} r={42} style={{ fill: lord === who ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
            <text x={j === 0 ? 120 : 400} y={62} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 18 }}>{who}</text>
            <text x={j === 0 ? 120 : 400} y={82} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{lord ? (lord === who ? "lord" : "bondsman") : st === "both" ? "free" : "self-certain"}</text>
          </g>
        ))}
        {arrow(ab, 48, 1)}
        {arrow(ba, 84, -1)}
      </svg>
      <p style={{ margin: "6px 0 2px" }}><strong>{s.title}</strong></p>
      <p style={{ margin: 0 }}>{s.text}</p>
      <figcaption className="viz-caption">
        An arrow means one self-consciousness acknowledges the other as a self. Self-consciousness needs this acknowledgement to be certain of itself, but only acknowledgement from someone it acknowledges in turn can satisfy it.
      </figcaption>
    </figure>
  );
}
