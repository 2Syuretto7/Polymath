"use client";

import { useState } from "react";

export const PARTS = ["pole", "axle", "wheels", "frame", "yoke", "reins"];

export const CANDIDATES = [
  { label: "one of the parts", reply: "Test any part in turn, and the answer is the same: no single part is the chariot." },
  { label: "all the parts together", reply: "A heap of the parts, unassembled, is not a chariot either." },
  { label: "something besides the parts", reply: "Take away the parts and nothing is left over to be the chariot." },
  { label: "a name for the parts so arranged", reply: "Yes: ‘chariot’ is a conventional designation, used in dependence on the parts. So too ‘Nāgasena’ for the aggregates." },
];

/** Nāgasena’s chariot: where, among the candidates, is the chariot? */
export function ChariotViz() {
  const [k, setK] = useState(0);
  const [part, setPart] = useState(0);
  const C = CANDIDATES[k];
  const ok = k === 3;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="candidate">
        {CANDIDATES.map((c, i) => <button key={c.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.label}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="The parts of a chariot, with the candidate for the chariot highlighted" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {PARTS.map((p, i) => {
          const x = 20 + i * 85;
          const hl = (k === 0 && i === part) || k === 1 || k === 3;
          return (
            <g key={p} onClick={() => setPart(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y={k === 1 ? 30 + (i % 2) * 40 : 50} width={75} height={34} rx={5} style={{ fill: hl ? (ok ? "var(--success-soft)" : "var(--danger-soft)") : "var(--bg-subtle)", stroke: hl ? (ok ? "var(--success)" : "var(--danger)") : "var(--border-strong)" }} />
              <text x={x + 37} y={(k === 1 ? 30 + (i % 2) * 40 : 50) + 22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{p}</text>
            </g>
          );
        })}
        {k === 2 && <rect x={14} y={42} width={512} height={50} rx={8} style={{ fill: "none", stroke: "var(--danger)", strokeDasharray: "6 4" }} />}
        {k === 2 && <text x={270} y={120} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12 }}>beyond the parts: nothing found</text>}
        {k === 3 && <text x={270} y={120} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 12 }}>‘chariot’: a name applied to the parts in this arrangement</text>}
        {k === 0 && <text x={270} y={120} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>click a part to test it</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{k === 0 ? `Is the ${PARTS[part]} the chariot? No. ` : ""}{C.reply}</p>
      <figcaption className="viz-caption">
        In the <em>Milindapañha</em>, the monk Nāgasena asks King Milinda where the chariot is. It is not any part, not the
        parts merely heaped together, and not something over and above them. &lsquo;Chariot&rsquo; is a conventional name.
        In the same way, Nāgasena says, there is no self beyond the five aggregates; &lsquo;Nāgasena&rsquo; is just a name.
      </figcaption>
    </figure>
  );
}
