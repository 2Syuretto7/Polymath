"use client";

import { useState } from "react";

const MODES = ["both", "only the longing", "only the world"];
const TEXT = [
  "The absurd: a mind that demands unity and meaning, facing a world that answers with silence. It lies in neither alone but in their confrontation.",
  "Without a world to meet it, the longing has nothing to collide with. There is desire, but no absurd.",
  "Without anyone asking, the world is not absurd. It is simply there, neither reasonable nor unreasonable.",
];

/** Camus: the absurd is not in the human or in the world, but in the relation between them. */
export function AbsurdViz() {
  const [m, setM] = useState(0);
  const left = m !== 2, right = m !== 1;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="what to keep">
        {MODES.map((s, i) => <button key={s} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{s}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="The human longing and the silent world" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <g style={{ opacity: left ? 1 : 0.15 }}>
          <rect x={20} y={30} width={170} height={110} rx={10} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
          <text x={105} y={62} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>the human mind</text>
          <text x={105} y={86} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>longs for unity,</text>
          <text x={105} y={104} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>clarity, meaning</text>
        </g>
        <g style={{ opacity: right ? 1 : 0.15 }}>
          <rect x={330} y={30} width={170} height={110} rx={10} style={{ fill: "none", stroke: "var(--text-muted)" }} />
          <text x={415} y={62} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>the world</text>
          <text x={415} y={86} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>unreasonable,</text>
          <text x={415} y={104} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>silent</text>
        </g>
        {left && right && (
          <g>
            <line x1={192} y1={85} x2={328} y2={85} style={{ stroke: "var(--danger)", strokeWidth: 3, strokeDasharray: "8 5" }} />
            <text x={260} y={74} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>the absurd</text>
          </g>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{TEXT[m]}</p>
      <figcaption className="viz-caption">
        Camus calls the absurd a divorce: it is the only bond between the mind and the world. To escape it you must give up
        one side, either by ceasing to live or by pretending the world answers after all. Camus asks whether one can keep
        both sides in view and still live.
      </figcaption>
    </figure>
  );
}
