"use client";

import { useState } from "react";

const STAGES = [
  { name: "dusk", text: "In poor light you see a snake on the path and recoil in fear. The fear is real; so is the jump.", snake: 1 },
  { name: "superimposition", text: "Something was really there, but you projected onto it what was not. Śaṅkara calls this adhyāsa: the appearance of one thing in another.", snake: 0.6 },
  { name: "a lamp", text: "Light shows a rope. The snake is not destroyed, since it never existed; it is sublated. Only the rope remains.", snake: 0 },
  { name: "the analogy", text: "So the world of many separate things is superimposed on brahman, the one reality, through ignorance (avidyā). Knowledge does not change brahman; it removes the error.", snake: 0 },
];

/** The rope and the snake: Śaṅkara’s model of illusion, sublation and knowledge. */
export function RopeSnakeViz() {
  const [s, setS] = useState(0);
  const S = STAGES[s];
  const path = "M60,110 C110,60 160,160 210,110 S310,60 360,110 S440,150 470,100";
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="stage">
        {STAGES.map((x, i) => <button key={x.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="A coiled shape on a path" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={0} y={0} width={520} height={190} style={{ fill: "#000", opacity: s === 0 ? 0.35 : s === 1 ? 0.2 : 0 }} />
        <path d={path} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 8, strokeLinecap: "round", strokeDasharray: s >= 2 ? "2 6" : undefined }} />
        <g style={{ opacity: S.snake }}>
          <path d={path} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 12, strokeLinecap: "round" }} />
          <circle cx={470} cy={100} r={11} style={{ fill: "var(--danger)" }} />
          <circle cx={474} cy={96} r={2} style={{ fill: "var(--bg)" }} />
        </g>
        <text x={260} y={175} textAnchor="middle" style={{ fill: s >= 2 ? "var(--text)" : "var(--text-muted)", fontSize: 13, fontWeight: 700 }}>
          {s === 0 ? "snake!" : s === 1 ? "snake, seen on something" : s === 2 ? "rope" : "rope : snake = brahman : world"}
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{S.text}</p>
      <figcaption className="viz-caption">
        The snake is neither real (it is sublated) nor simply unreal (it was seen and feared). Advaita calls such things
        indescribable (anirvacanīya). The world, for Śaṅkara, has this status: empirically real, but not ultimately so.
      </figcaption>
    </figure>
  );
}
