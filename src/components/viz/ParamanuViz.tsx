"use client";

import { useState } from "react";

const STAGES = [
  { name: "atom", skt: "paramāṇu", atoms: 1, text: "Partless, eternal and imperceptible. Each of earth, water, fire and air has its own kind of atom, with its own qualities. Atoms have the smallest size, which is not a size made of parts." },
  { name: "dyad", skt: "dvyaṇuka", atoms: 2, text: "Two atoms joined. A dyad is still invisible, and still of atomic size: two partless sizes do not add to a visible one." },
  { name: "triad", skt: "tryaṇuka", atoms: 6, text: "Three dyads joined. Now size appears, caused by number rather than by the sizes of the parts. The triad is the smallest visible thing: the mote seen dancing in a sunbeam." },
  { name: "visible things", skt: "sthūla", atoms: 24, text: "Triads combine into ever larger wholes. Each whole is a new substance, distinct from its parts and inhering in them, which is why Vaiśeṣika is not a reductive atomism." },
];

/** Vaiśeṣika atomism: atoms, dyads, triads and the visible world. */
export function ParamanuViz() {
  const [s, setS] = useState(0);
  const S = STAGES[s];
  const pts: [number, number][] = [];
  if (s === 0) pts.push([260, 90]);
  if (s === 1) pts.push([250, 90], [270, 90]);
  if (s === 2) for (const [cx, cy] of [[230, 105], [290, 105], [260, 60]]) pts.push([cx - 10, cy], [cx + 10, cy]);
  if (s === 3) for (let k = 0; k < 4; k++) for (const [cx, cy] of [[0, 20], [40, 20], [20, -14]]) { const bx = 100 + k * 90, by = 90; pts.push([bx + cx - 8, by + cy], [bx + cx + 8, by + cy]); }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="stage">
        {STAGES.map((x, i) => <button key={x.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label={`A ${S.name}`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {s === 1 && <line x1={250} y1={90} x2={270} y2={90} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />}
        {s >= 2 && pts.map((p, i) => i % 2 === 0 ? <line key={`l${i}`} x1={p[0]} y1={p[1]} x2={pts[i + 1][0]} y2={pts[i + 1][1]} style={{ stroke: "var(--accent)", strokeWidth: 3 }} /> : null)}
        {s === 2 && <polygon points="230,105 290,105 260,60" style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeDasharray: "4 3" }} />}
        {pts.map((p, i) => <circle key={i} cx={p[0]} cy={p[1]} r={6} style={{ fill: "var(--text)" }} />)}
        <text x={260} y={150} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 13 }}>{S.atoms} {S.atoms === 1 ? "atom" : "atoms"} · {s >= 2 ? "visible" : "invisible"}</text>
      </svg>
      <p style={{ margin: "4px 0" }}><strong>{S.name}</strong> <span className="mono">({S.skt})</span></p>
      <p className="mono" style={{ fontSize: 13 }}>{S.text}</p>
      <figcaption className="viz-caption">
        Why stop at partless atoms? If division went on for ever, a mountain and a mustard seed would both contain infinitely
        many parts, and so, the Vaiśeṣikas argued, would be the same size. Only a final unit of division explains why they
        differ.
      </figcaption>
    </figure>
  );
}
