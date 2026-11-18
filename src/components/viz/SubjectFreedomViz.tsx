"use client";

import { useState } from "react";

const STAGES = [
  { name: "the perceived object", self: "everything I perceive, as mine", note: "Ordinary awareness is absorbed in things: the tree, the room. The subject is not yet distinguished from them at all." },
  { name: "bodily subjectivity", self: "my body, felt from within", note: "The perceived world becomes object; the body, felt from inside rather than seen, is taken as ‘I’. Yet I can also look at my body as a thing." },
  { name: "psychic subjectivity", self: "images, thoughts and feelings", note: "The body joins the objects. I identify with my images, ideas and feelings, which I enjoy rather than perceive." },
  { name: "spiritual subjectivity", self: "the introspecting ‘I’", note: "Even feelings can be distanced and observed. What remains is the subject that cannot be made an object: known only as freedom from every object." },
];

/** K. C. Bhattacharya’s grades of subjectivity: the subject freed from one object after another. */
export function SubjectFreedomViz() {
  const [k, setK] = useState(0);
  const R = [130, 100, 70, 40];
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 290" role="img" aria-label="Nested circles of subjectivity" style={{ width: "100%", display: "block" }}>
        {R.map((r, i) => (
          <circle key={i} cx={150} cy={145} r={r} onClick={() => setK(i)} style={{ cursor: "pointer", fill: i <= k ? (i === k ? "var(--accent-soft)" : "var(--bg)") : "var(--accent-soft)", stroke: i === k ? "var(--accent)" : "var(--border)", strokeWidth: i === k ? 2.5 : 1, strokeDasharray: i < k ? "4 3" : undefined }} />
        ))}
        <circle cx={150} cy={145} r={4} style={{ fill: "var(--text)" }} />
        {STAGES.map((s, i) => (
          <g key={s.name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
            <line x1={150 + R[i] * 0.71} y1={145 - R[i] * 0.71 + (i === 3 ? 0 : 0)} x2={310} y2={40 + i * 60} style={{ stroke: "var(--border)" }} />
            <text x={316} y={44 + i * 60} style={{ fill: i === k ? "var(--accent)" : i < k ? "var(--text-muted)" : "var(--text)", fontSize: 13, fontWeight: i === k ? 700 : 400 }}>{s.name}</text>
            <text x={316} y={60 + i * 60} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{i < k ? "now an object" : i === k ? "taken as ‘I’ now" : "still within the ‘I’"}</text>
          </g>
        ))}
      </svg>
      <p style={{ margin: "6px 0" }}><strong>{STAGES[k].name}.</strong> I take as myself: {STAGES[k].self}. {STAGES[k].note}</p>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setK(Math.max(0, k - 1))} disabled={k === 0}>back</button>
        <button type="button" className="btn btn-primary" onClick={() => setK(Math.min(STAGES.length - 1, k + 1))} disabled={k === STAGES.length - 1}>withdraw further</button>
      </div>
      <figcaption className="viz-caption">
        Dashed rings have been distanced and become objects. Each step frees the subject from something it had taken for
        itself. The goal is not reached by thinking about the subject, which would make it an object again, but by this
        progressive withdrawal.
      </figcaption>
    </figure>
  );
}
