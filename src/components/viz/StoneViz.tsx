"use client";

import { useState } from "react";

const REPLIES = [
  { name: "the dilemma", text: "Either God can create a stone God cannot lift, or not. If God can, there is something God cannot do: lift that stone. If God cannot, there is something God cannot do: create it. Either way, God is not omnipotent." },
  { name: "Aquinas", text: "Omnipotence is the power to do whatever is logically possible. ‘A stone too heavy for an omnipotent being to lift’ describes nothing, as ‘a square circle’ describes nothing. Failing to make it is no lack of power." },
  { name: "Mavrodes (1963)", text: "Assume God is omnipotent. Then ‘a stone too heavy for God to lift’ is self-contradictory, so being unable to make one is no lack of power. Critics replied that this assumes what is in question." },
  { name: "Savage (1967)", text: "The argument equivocates. ‘God cannot create a stone God cannot lift’ means only that God can lift any stone God creates, which is not a limit at all. The second horn names no task God fails at." },
  { name: "Descartes", text: "God created the eternal truths, and could have made contradictions true. On this ‘universal possibilism’, God can do even the impossible, so the dilemma has no grip, but at the cost of making God’s nature unintelligible." },
];

/** The paradox of the stone, and four ways out. */
export function StoneViz() {
  const [k, setK] = useState(0);
  const step = (x: number, y: number, t: string, on: boolean) => (
    <g>
      <rect x={x - 90} y={y - 16} width={180} height={32} rx={6} style={{ fill: on ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: on ? "var(--accent)" : "var(--border)" }} />
      <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{t}</text>
    </g>
  );
  const attack: number = k >= 1 && k <= 3 ? 1 : k === 4 ? 2 : -1;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="reply">
        {REPLIES.map((r, i) => <button key={r.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{r.name}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="The dilemma of the stone" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {step(260, 24, "Can God make an unliftable stone?", attack === 2)}
        <line x1={220} y1={40} x2={130} y2={74} style={{ stroke: attack === 0 ? "var(--danger)" : "var(--border-strong)", strokeWidth: 2 }} />
        <line x1={300} y1={40} x2={390} y2={74} style={{ stroke: attack === 1 ? "var(--danger)" : "var(--border-strong)", strokeWidth: 2 }} />
        {step(130, 90, "Yes: then God cannot lift it", attack === 0)}
        {step(390, 90, "No: then God cannot make it", attack === 1)}
        <line x1={130} y1={106} x2={240} y2={136} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        <line x1={390} y1={106} x2={280} y2={136} style={{ stroke: "var(--border-strong)", strokeWidth: 2 }} />
        {step(260, 150, "Either way: not omnipotent", false)}
      </svg>
      <p style={{ fontSize: 14, margin: "6px 0" }}><strong>{REPLIES[k].name}.</strong> {REPLIES[k].text}</p>
      <figcaption className="viz-caption">
        Highlighted: the step each reply targets. Most replies refine what omnipotence means, rather than deny that God has
        it: power over all that is possible, or all tasks consistent with being perfect.
      </figcaption>
    </figure>
  );
}
