"use client";

import { useState } from "react";

const RINGS = ["humans", "sentient animals", "all living things", "species and ecosystems"];
const VIEWS = [
  { name: "anthropocentrism", n: 1, who: "Kant, and much traditional ethics", note: "Nature matters only through its effects on human beings, now and in future." },
  { name: "sentientism", n: 2, who: "Bentham, Singer", note: "Whatever can suffer counts. A forest matters through the animals in it." },
  { name: "biocentrism", n: 3, who: "Paul Taylor, Albert Schweitzer", note: "Every living thing has a good of its own and inherent worth: ‘reverence for life’." },
  { name: "ecocentrism", n: 4, who: "Aldo Leopold, Arne Næss", note: "‘A thing is right when it tends to preserve the integrity, stability, and beauty of the biotic community.’" },
];

/** The expanding circle of moral considerability in environmental ethics. */
export function ConsiderabilityViz() {
  const [v, setV] = useState(3);
  const V = VIEWS[v];
  const R = [36, 62, 88, 114];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="view">
        {VIEWS.map((q, i) => <button key={q.name} type="button" aria-pressed={v === i} className={v === i ? "seg is-on" : "seg"} onClick={() => setV(i)}>{q.name}</button>)}
      </div>
      <svg viewBox="0 0 520 250" role="img" aria-label="Nested circles of moral considerability" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[3, 2, 1, 0].map((i) => (
          <circle key={i} cx={130} cy={125} r={R[i]} style={{ fill: i < V.n ? "var(--accent-soft)" : "var(--bg)", stroke: i < V.n ? "var(--accent)" : "var(--border)", strokeWidth: i === V.n - 1 ? 2.5 : 1 }} />
        ))}
        {RINGS.map((r, i) => (
          <text key={r} x={130} y={125 - (i === 0 ? 0 : (R[i - 1] + R[i]) / 2) + 4} textAnchor="middle" style={{ fill: i < V.n ? "var(--text)" : "var(--text-faint)", fontSize: 10 }}>{r}</text>
        ))}
        <text x={280} y={60} style={{ fill: "var(--accent)", fontSize: 14, fontWeight: 700 }}>{V.name}</text>
        <text x={280} y={80} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{V.who}</text>
        <text x={280} y={110} style={{ fill: "var(--text)", fontSize: 12 }}>directly considerable:</text>
        {RINGS.slice(0, V.n).map((r, i) => <text key={r} x={292} y={130 + i * 18} style={{ fill: "var(--text)", fontSize: 12 }}>· {r}</text>)}
      </svg>
      <p style={{ fontSize: 13, margin: "4px 0" }}>{V.note}</p>
      <figcaption className="viz-caption">
        Each view draws the boundary of direct moral concern in a different place. Things outside the circle can still
        matter indirectly, through their value to those inside it.
      </figcaption>
    </figure>
  );
}
