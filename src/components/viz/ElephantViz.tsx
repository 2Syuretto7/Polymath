"use client";

import { useState } from "react";

const PARTS = [
  { part: "trunk", claim: "An elephant is like a snake.", why: "True of the trunk, from where he stands." },
  { part: "ear", claim: "An elephant is like a winnowing fan.", why: "True of the ear, broad and flapping." },
  { part: "leg", claim: "An elephant is like a pillar.", why: "True of the leg, round and firm." },
  { part: "side", claim: "An elephant is like a wall.", why: "True of the flank, wide and flat." },
  { part: "tail", claim: "An elephant is like a rope.", why: "True of the tail, thin and swinging." },
  { part: "tusk", claim: "An elephant is like a spear.", why: "True of the tusk, smooth and pointed." },
];

/** The blind men and the elephant: each claim true from a standpoint. */
export function ElephantViz() {
  const [k, setK] = useState<number | null>(0);
  const hl = (p: string) => (k === null || PARTS[k].part === p ? "var(--accent)" : "var(--text-muted)");
  const fill = (p: string) => (k !== null && PARTS[k].part === p ? "var(--accent-soft)" : "var(--bg)");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="who touches what" style={{ flexWrap: "wrap" }}>
        {PARTS.map((p, i) => <button key={p.part} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p.part}</button>)}
        <button type="button" aria-pressed={k === null} className={k === null ? "seg is-on" : "seg"} onClick={() => setK(null)}>the whole</button>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A simple drawing of an elephant" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={180} y={60} width={200} height={90} rx={40} style={{ fill: fill("side"), stroke: hl("side"), strokeWidth: 3 }} />
        {[200, 240, 320, 355].map((x) => <rect key={x} x={x} y={130} width={24} height={60} rx={6} style={{ fill: fill("leg"), stroke: hl("leg"), strokeWidth: 3 }} />)}
        <path d="M380 90 Q410 100 405 135" style={{ fill: "none", stroke: hl("tail"), strokeWidth: 3 }} />
        <circle cx={160} cy={80} r={42} style={{ fill: fill("side"), stroke: hl("side"), strokeWidth: 3 }} />
        <ellipse cx={185} cy={80} rx={22} ry={34} style={{ fill: fill("ear"), stroke: hl("ear"), strokeWidth: 3 }} />
        <path d="M125 100 Q100 140 110 185 Q115 195 125 185" style={{ fill: "none", stroke: hl("trunk"), strokeWidth: 9, strokeLinecap: "round" }} />
        <path d="M135 110 Q110 130 95 125" style={{ fill: "none", stroke: hl("tusk"), strokeWidth: 5, strokeLinecap: "round" }} />
        <circle cx={145} cy={70} r={3} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {k === null
          ? "Each man is partly right and wrong only in claiming the whole truth. Reality has infinitely many aspects; every assertion grasps some of them, from a standpoint."
          : `${PARTS[k].claim} ${PARTS[k].why}`}
      </p>
      <figcaption className="viz-caption">
        The parable is told by Jainas, Buddhists and Hindus alike. The Jaina moral is anekāntavāda, many-sidedness: rival views
        can be partial truths, and each needs the qualification &lsquo;in some respect&rsquo;.
      </figcaption>
    </figure>
  );
}
