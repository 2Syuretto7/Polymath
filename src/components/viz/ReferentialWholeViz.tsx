"use client";

import { useState } from "react";

const NODES = ["hammer", "nails", "board", "shelf", "books", "being a scholar"];
const MODES = [
  {
    name: "smooth use",
    focus: [3],
    tool: "withdraws",
    lit: false,
    note: "Absorbed in the work, you do not notice the hammer at all. It withdraws into its use; what shows up is the shelf taking shape.",
  },
  {
    name: "head works loose",
    focus: [0],
    tool: "conspicuous",
    lit: true,
    note: "The damaged hammer becomes conspicuous: suddenly it is a thing with a weight and a loose head, merely present at hand. And the whole network of in-order-to’s it belonged to lights up.",
  },
  {
    name: "hammer missing",
    focus: [0],
    tool: "obtrusive",
    lit: true,
    note: "The missing hammer is obtrusive: its absence announces what it was for. You see, as never before, the chain from hammer to nails to shelf.",
  },
  {
    name: "crate in the way",
    focus: [6],
    tool: "obstinate",
    lit: true,
    note: "Something not needed blocks the work: obstinacy. It shows up only as an obstacle, and in doing so reveals what you were trying to do.",
  },
];

/** The referential whole of equipment, and how breakdown makes it show up. */
export function ReferentialWholeViz() {
  const [m, setM] = useState(0);
  const mode = MODES[m];
  const X = (i: number) => (i === 5 ? 470 : 45 + i * 82);
  const W = (i: number) => (i === 5 ? 96 : 60);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="situation">
        {MODES.map((mm, i) => <button key={mm.name} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{mm.name}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Chain of equipment from hammer to the sake of which" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {NODES.slice(0, -1).map((_, i) => (
          <g key={i}>
            <line x1={X(i) + 30} y1={70} x2={X(i + 1) - W(i + 1) / 2} y2={70} style={{ stroke: mode.lit ? "var(--accent)" : "var(--border)", strokeWidth: mode.lit ? 2.5 : 1 }} />
            <text x={(X(i) + 30 + X(i + 1) - W(i + 1) / 2) / 2} y={40} textAnchor="middle" style={{ fill: mode.lit ? "var(--accent)" : "var(--text-faint)", fontSize: 9 }}>in order to</text>
          </g>
        ))}
        {NODES.map((n, i) => {
          const isTool = i === 0;
          const focused = mode.focus.includes(i);
          const missing = isTool && mode.tool === "obtrusive";
          return (
            <g key={n}>
              <rect x={X(i) - W(i) / 2} y={50} width={W(i)} height={40} rx={6}
                style={{ fill: focused ? (isTool ? "var(--danger-soft)" : "var(--accent-soft)") : "var(--bg)", stroke: focused ? (isTool ? "var(--danger)" : "var(--accent)") : "var(--border)", strokeWidth: focused ? 2.5 : 1, strokeDasharray: missing ? "4 3" : undefined, opacity: isTool && mode.tool === "withdraws" ? 0.35 : 1 }} />
              <text x={X(i)} y={i === 5 ? 68 : 74} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{i === 5 ? "for the sake of" : missing ? "?" : n}</text>
              {i === 5 && <text x={X(i)} y={82} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>being a scholar</text>}
            </g>
          );
        })}
        {m === 3 && (
          <g>
            <rect x={X(2) - 34} y={110} width={68} height={34} rx={4} style={{ fill: "var(--danger-soft)", stroke: "var(--danger)", strokeWidth: 2.5 }} />
            <text x={X(2)} y={131} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>crate</text>
          </g>
        )}
        <text x={X(0)} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{mode.tool}</text>
      </svg>
      <p className="viz-caption" style={{ fontWeight: 600 }}>{mode.note}</p>
      <figcaption className="viz-caption">
        Equipment never exists alone: the hammer is for the nails, which are for fixing the board, which makes a shelf, for
        books, all for the sake of some way of being that you are pressing into. Heidegger calls this network a referential
        whole. In smooth coping it stays invisible; breakdown is what makes it visible.
      </figcaption>
    </figure>
  );
}
