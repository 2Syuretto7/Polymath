"use client";

import { useState } from "react";

const TRIES = [
  { key: "four", label: "side 4", note: "The boy’s first answer: double the side. But the square on side 4 is made of four squares of 4 feet, so its area is 16, four times the original, not twice." },
  { key: "three", label: "side 3", note: "His second answer: something between 2 and 4. The area is 9, too big. Now he is perplexed, and Socrates says this perplexity is progress: he no longer thinks he knows." },
  { key: "diag", label: "the diagonal", note: "Socrates draws the diagonals of the four small squares. Each cuts a square in half, and the tilted square has four halves: area 8, exactly double. The side is the diagonal, whose length is no whole number." },
];

/** Plato’s Meno 82b–85b: which square has double the area of a 2 by 2 square? */
export function DoubleSquareViz() {
  const [k, setK] = useState<number | null>(null);
  const U = 50, O = 60;
  const P = (x: number, y: number) => `${O + x * U},${O + y * U}`;
  const area = k === 0 ? 16 : k === 1 ? 9 : k === 2 ? 8 : null;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="candidate">
        {TRIES.map((t, i) => <button key={t.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{t.label}</button>)}
      </div>
      <svg viewBox="0 0 320 320" role="img" aria-label="A grid of unit squares with the original square and a candidate double" style={{ width: "100%", maxWidth: 340, display: "block", margin: "8px auto 0" }}>
        {Array.from({ length: 5 }, (_, i) => (
          <g key={i}>
            <line x1={O} y1={O + i * U} x2={O + 4 * U} y2={O + i * U} style={{ stroke: "var(--border)" }} />
            <line x1={O + i * U} y1={O} x2={O + i * U} y2={O + 4 * U} style={{ stroke: "var(--border)" }} />
          </g>
        ))}
        {k === 0 && <polygon points={[P(0, 0), P(4, 0), P(4, 4), P(0, 4)].join(" ")} style={{ fill: "var(--bg-subtle)", stroke: "var(--danger)", strokeWidth: 3 }} />}
        {k === 1 && <polygon points={[P(0, 0), P(3, 0), P(3, 3), P(0, 3)].join(" ")} style={{ fill: "var(--bg-subtle)", stroke: "var(--danger)", strokeWidth: 3 }} />}
        <polygon points={[P(0, 0), P(2, 0), P(2, 2), P(0, 2)].join(" ")} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        {k === 2 && <polygon points={[P(2, 0), P(4, 2), P(2, 4), P(0, 2)].join(" ")} style={{ fill: "var(--accent-soft)", fillOpacity: 0.6, stroke: "var(--text)", strokeWidth: 3 }} />}
        {k === 2 && <line x1={O} y1={O + 2 * U} x2={O + 2 * U} y2={O} style={{ stroke: "var(--text)", strokeWidth: 3 }} />}
        <text x={O + U} y={O + U + 5} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>4</text>
        <text x={O + U} y={O - 10} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>side 2</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Original area: 4. Target: 8. {area === null ? "Choose a candidate." : `Candidate area: ${area}. ${area === 8 ? "Double." : "Not double."}`}
      </p>
      {k !== null && <p style={{ fontSize: 14, margin: "4px 0" }}>{TRIES[k].note}</p>}
      <figcaption className="viz-caption">
        In the Meno, Socrates questions an enslaved boy who has never studied geometry, and by the end the boy sees that
        the square on the diagonal is double. Socrates claims he taught nothing: the boy recollected a truth his soul already
        knew.
      </figcaption>
    </figure>
  );
}
