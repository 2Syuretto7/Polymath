"use client";

import { useState } from "react";

const STEPS = [
  { title: "Find the truth of the grievance", when: "1929 to early 1930", text: "The salt tax fell on everyone, the poorest most, and forbade Indians to make salt from their own sea. A clear, limited demand that any opponent could understand.", principle: "satya: begin from facts that can be stated openly" },
  { title: "Write to the opponent", when: "2 March 1930", text: "Gandhi wrote to the Viceroy, Lord Irwin, naming the injustices and announcing exactly what he would do and when, unless they were redressed.", principle: "openness: no secrecy, no surprise" },
  { title: "Prepare and discipline", when: "early March 1930", text: "He chose seventy-eight marchers from his ashram, trained in non-violence, who would accept arrest and blows without retaliating.", principle: "ahiṃsā: means as pure as the end" },
  { title: "Act: the march to Dandi", when: "12 March to 6 April 1930", text: "A walk of about 240 miles to the sea, gathering crowds and world press, ending with Gandhi picking up a lump of natural salt.", principle: "dramatise the injustice so that all can see it" },
  { title: "Civil disobedience spreads", when: "April to May 1930", text: "Salt was made and sold across India; tens of thousands were jailed. At Dharasana, volunteers walked forward to be beaten without raising a hand.", principle: "tapasyā: self-suffering to move the opponent’s conscience" },
  { title: "Negotiate and settle", when: "March 1931", text: "The Gandhi-Irwin Pact released prisoners and allowed salt-making on the coast, and Gandhi attended the Round Table Conference. Critics said he settled for too little.", principle: "seek agreement, not the opponent’s humiliation" },
];

/** The Salt Satyagraha of 1930, step by step. */
export function SatyagrahaStepsViz() {
  const [k, setK] = useState(0);
  const S = STEPS[k];
  const X = (i: number) => 40 + i * 88;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 70" role="img" aria-label="Stages of a satyagraha campaign" style={{ width: "100%", display: "block" }}>
        <line x1={X(0)} y1={30} x2={X(STEPS.length - 1)} y2={30} style={{ stroke: "var(--border)", strokeWidth: 3 }} />
        <line x1={X(0)} y1={30} x2={X(k)} y2={30} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
        {STEPS.map((s, i) => (
          <g key={s.title} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
            <circle cx={X(i)} cy={30} r={13} style={{ fill: i <= k ? "var(--accent)" : "var(--bg)", stroke: i <= k ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />
            <text x={X(i)} y={35} textAnchor="middle" style={{ fill: i <= k ? "var(--bg)" : "var(--text)", fontSize: 12, fontWeight: 700 }}>{i + 1}</text>
          </g>
        ))}
        <text x={260} y={62} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{S.when}</text>
      </svg>
      <p style={{ margin: "6px 0" }}><strong>{k + 1}. {S.title}.</strong> {S.text}</p>
      <p className="mono" style={{ fontSize: 13 }}>{S.principle}</p>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setK(Math.max(0, k - 1))} disabled={k === 0}>back</button>
        <button type="button" className="btn btn-primary" onClick={() => setK(Math.min(STEPS.length - 1, k + 1))} disabled={k === STEPS.length - 1}>next</button>
      </div>
      <figcaption className="viz-caption">
        A satyagraha campaign escalates in steps, each open to settlement. The aim is not to defeat the opponent but to
        convert them, by truth and by the willingness to suffer rather than inflict suffering.
      </figcaption>
    </figure>
  );
}
