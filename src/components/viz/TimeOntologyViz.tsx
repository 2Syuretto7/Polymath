"use client";

import { useState } from "react";

const EV = [
  { y: -260, name: "Ashoka’s conversion" },
  { y: 1600, name: "the founding of the East India Company" },
  { y: 1947, name: "Indian independence" },
  { y: 2026, name: "today" },
  { y: 2061, name: "Halley’s comet returning" },
];
type V = "presentism" | "growing block" | "eternalism" | "moving spotlight";
const VIEWS: V[] = ["presentism", "growing block", "eternalism", "moving spotlight"];

/** Which times exist? Presentism, the growing block, eternalism and the moving spotlight. */
export function TimeOntologyViz() {
  const [v, setV] = useState<V>("presentism");
  const exists = (y: number) => (v === "presentism" ? y === 2026 : v === "growing block" ? y <= 2026 : true);
  const lit = (y: number) => (v === "moving spotlight" ? y === 2026 : exists(y));
  const truthmaker: Record<V, string> = {
    "presentism": "Only present things exist, so what makes ‘Ashoka converted’ true? The presentist needs present traces, or primitive past-tensed facts, as truthmakers.",
    "growing block": "Past and present exist, the future does not yet. Ashoka’s conversion is there to make the claim true. But how do we know we are at the edge, and not in the dead past?",
    "eternalism": "All times exist equally, as all places do; ‘now’ is like ‘here’. Ashoka’s conversion exists, though not at our time. But what then is the passage of time?",
    "moving spotlight": "All times exist, but one is objectively present, lit by a spotlight that moves. It combines eternalism’s truthmakers with real passage, at the price of a strange extra fact.",
  };
  const W = 560, H = 110, X = (i: number) => 60 + i * 110;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="View of time">
        {VIEWS.map((x) => <button key={x} type="button" aria-pressed={v === x} className={v === x ? "seg is-on" : "seg"} onClick={() => setV(x)}>{x}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Which events exist on this view" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={20} y1={50} x2={W - 20} y2={50} style={{ stroke: "var(--border)", strokeWidth: 2 }} />
        {v === "moving spotlight" && <ellipse cx={X(3)} cy={50} rx={46} ry={34} style={{ fill: "var(--accent)", fillOpacity: 0.15 }} />}
        {EV.map((e, i) => (
          <g key={e.y}>
            <circle cx={X(i)} cy={50} r={11} style={{ fill: exists(e.y) ? (lit(e.y) ? "var(--accent)" : "var(--text-muted)") : "var(--bg)", stroke: exists(e.y) ? "none" : "var(--text-faint)", strokeDasharray: "3 3", strokeWidth: 1.5 }} />
            <text x={X(i)} y={84} textAnchor="middle" style={{ fill: exists(e.y) ? "var(--text)" : "var(--text-faint)", fontSize: 11 }}>{e.y < 0 ? `${-e.y} BCE` : e.y}</text>
            <text x={X(i)} y={100} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{exists(e.y) ? "exists" : "does not exist"}</text>
          </g>
        ))}
        <text x={X(3)} y={20} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12, fontWeight: 600 }}>present</text>
      </svg>
      <div className="viz-controls" style={{ marginTop: 4 }}>
        {EV.map((e) => <span key={e.y} className="mono" style={{ fontSize: 12, color: exists(e.y) ? "var(--text)" : "var(--text-faint)" }}>{e.name}{e.y !== EV[EV.length - 1].y ? ";" : ""}</span>)}
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>{truthmaker[v]}</p>
      <figcaption className="viz-caption">
        Filled circles exist on the chosen view; dashed ones do not. The views agree on the order of events and disagree only about which of them are real. Special relativity, which denies an absolute present across space, is often thought to favour eternalism.
      </figcaption>
    </figure>
  );
}
