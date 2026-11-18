"use client";

import { useState } from "react";

const N = 5;

/** Plantinga’s modal ontological argument in S5: if a maximally great being exists in one world, it exists in all; and its mirror image. */
export function ModalOntoViz() {
  const [premise, setPremise] = useState<"pos" | "neg">("pos");
  const [w, setW] = useState(2);
  const [applied, setApplied] = useState(false);
  const pos = premise === "pos";
  const exists = (i: number) => (pos ? (applied ? true : i === w) : applied ? false : i !== w);
  const X = (i: number) => 60 + i * 100;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="premise">
        <button type="button" aria-pressed={pos} className={pos ? "seg is-on" : "seg"} onClick={() => { setPremise("pos"); setApplied(false); }}>possibly a maximally great being exists</button>
        <button type="button" aria-pressed={!pos} className={!pos ? "seg is-on" : "seg"} onClick={() => { setPremise("neg"); setApplied(false); }}>possibly no maximally great being exists</button>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setApplied(!applied)}>{applied ? "undo" : "apply maximal greatness and S5"}</button>
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="Five possible worlds" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: N }, (_, i) => (
          <g key={i} onClick={() => { setW(i); setApplied(false); }} style={{ cursor: "pointer" }}>
            <circle cx={X(i)} cy={70} r={38} style={{ fill: exists(i) ? "var(--accent-soft)" : "var(--bg)", stroke: i === w ? "var(--accent)" : "var(--border-strong)", strokeWidth: i === w ? 3 : 1.5 }} />
            <text x={X(i)} y={66} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>world {i + 1}</text>
            <text x={X(i)} y={84} textAnchor="middle" style={{ fill: exists(i) ? "var(--accent)" : "var(--text-faint)", fontSize: 11, fontWeight: 700 }}>{exists(i) ? "exists" : "absent"}</text>
          </g>
        ))}
        <text x={260} y={136} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>click a world to make it the one the premise is about</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {pos
          ? applied
            ? "A maximally great being is maximally excellent in every world. It exists in world " + (w + 1) + ", so it is necessary there; in S5 what is necessary somewhere is necessary everywhere. So it exists in every world, including ours."
            : `The premise: in world ${w + 1}, a maximally great being exists.`
          : applied
            ? "If maximal greatness fails in world " + (w + 1) + ", then no world has a being that exists necessarily with maximal excellence, since such a being would exist in world " + (w + 1) + " too. So it exists nowhere."
            : `The premise: in world ${w + 1}, no maximally great being exists.`}
      </p>
      <figcaption className="viz-caption">
        Both arguments are valid in S5. So everything rests on which premise is true: is a maximally great being possible, or
        is its non-existence possible? Plantinga granted that his argument proves God only to those who already accept that
        premise.
      </figcaption>
    </figure>
  );
}
