"use client";

import { useState } from "react";
import { Arrow } from "./Plot";

const STAGES = [
  { x: 95, label: "The boy", sub: "flogged for robbing an orchard" },
  { x: 310, label: "The officer", sub: "takes a standard in battle" },
  { x: 525, label: "The general", sub: "old, made a general" },
];

/** Reid's brave officer: direct memory links fail to be transitive, while a chain of overlapping memories holds. */
export function OfficerViz() {
  const [chain, setChain] = useState(false);
  const Y = 70, W = 170, H = 62;
  const pairs: [number, number, boolean][] = [
    [0, 1, true],
    [1, 2, true],
    [0, 2, chain],
  ];
  const same = (i: number, j: number) => pairs.find(([a, b]) => a === i && b === j)![2];

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <button type="button" className={!chain ? "btn btn-primary" : "btn"} aria-pressed={!chain} onClick={() => setChain(false)}>Locke: direct memory</button>
        <button type="button" className={chain ? "btn btn-primary" : "btn"} aria-pressed={chain} onClick={() => setChain(true)}>Repair: a chain of memories</button>
      </div>
      <svg viewBox="0 0 620 230" role="img" aria-label="The boy, the officer and the general, with the memory links between them">
        {STAGES.map((s) => (
          <g key={s.label}>
            <rect x={s.x - W / 2} y={Y} width={W} height={H} rx={10} className="viz-cell is-on" />
            <text x={s.x} y={Y + 26} textAnchor="middle" className="viz-label is-on">{s.label}</text>
            <text x={s.x} y={Y + 46} textAnchor="middle" className="plot-tick">{s.sub}</text>
          </g>
        ))}
        <Arrow x1={STAGES[1].x - W / 2 - 4} y1={Y + 22} x2={STAGES[0].x + W / 2 + 4} y2={Y + 22} />
        <text x={(STAGES[0].x + STAGES[1].x) / 2} y={Y - 8} textAnchor="middle" className="plot-tick">remembers</text>
        <Arrow x1={STAGES[2].x - W / 2 - 4} y1={Y + 22} x2={STAGES[1].x + W / 2 + 4} y2={Y + 22} />
        <text x={(STAGES[1].x + STAGES[2].x) / 2} y={Y - 8} textAnchor="middle" className="plot-tick">remembers</text>
        <path d={`M${STAGES[2].x} ${Y + H + 4} C ${STAGES[2].x} ${Y + H + 70}, ${STAGES[0].x} ${Y + H + 70}, ${STAGES[0].x} ${Y + H + 10}`} className={chain ? "plot-curve" : "plot-ghost"} style={chain ? undefined : { stroke: "var(--danger)" }} />
        <text x={STAGES[1].x} y={Y + H + 66} textAnchor="middle" className="viz-label" style={chain ? undefined : { fill: "var(--danger)" }}>
          {chain ? "linked through the officer's memories" : "has forgotten the flogging entirely"}
        </text>
      </svg>
      <table className="table" style={{ marginTop: 8, marginBottom: 8 }}>
        <tbody>
          <tr><td>Boy and officer the same person?</td><td className="viz-verdict viz-verdict-info">{same(0, 1) ? "Yes" : "No"}</td></tr>
          <tr><td>Officer and general the same person?</td><td className="viz-verdict viz-verdict-info">{same(1, 2) ? "Yes" : "No"}</td></tr>
          <tr><td>Boy and general the same person?</td><td className={`viz-verdict viz-verdict-${chain ? "info" : "wrong"}`}>{same(0, 2) ? "Yes" : "No"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {chain
          ? <>On the repaired view, you are the same person as anyone linked to you by a chain of overlapping memories. The boy and the general are linked through the officer, so identity is transitive again.</>
          : <>On Locke&rsquo;s view as Reid read it, you are the same person as someone whose experiences you remember. Then the boy is the officer and the officer is the general, yet the general is not the boy. But identity is transitive: if a = b and b = c, then a = c. Something has gone wrong.</>}
      </figcaption>
    </figure>
  );
}
