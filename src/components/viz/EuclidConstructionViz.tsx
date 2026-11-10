"use client";

import { useState } from "react";

const A = { x: 230, y: 170 }, B = { x: 390, y: 170 };
const r = B.x - A.x;
const C = { x: (A.x + B.x) / 2, y: A.y - (Math.sqrt(3) / 2) * r };

const STEPS = [
  { say: "Given: a segment AB. The goal is an equilateral triangle on it.", why: "" },
  { say: "Draw the circle with centre A passing through B.", why: "Postulate 3: a circle may be drawn with any centre and radius." },
  { say: "Draw the circle with centre B passing through A.", why: "Postulate 3 again." },
  { say: "Let C be a point where the two circles meet.", why: "Euclid assumes the circles meet. No postulate guarantees it: a famous gap." },
  { say: "Join CA and CB.", why: "Postulate 1: a straight line may be drawn between any two points." },
  { say: "CA = AB, being radii of the first circle; CB = AB, being radii of the second. So CA = CB too, and the triangle is equilateral.", why: "Definition of a circle, then Common Notion 1: things equal to the same thing are equal to each other." },
];

/** Euclid's Elements, Book I, Proposition 1, one step at a time, with the reason for each step. */
export function EuclidConstructionViz() {
  const [s, setS] = useState(0);
  const step = STEPS[s];
  return (
    <figure className="viz">
      <svg viewBox="0 0 620 340" role="img" aria-label={`Constructing an equilateral triangle, step ${s + 1} of ${STEPS.length}: ${step.say}`}>
        {s >= 1 && <circle cx={A.x} cy={A.y} r={r} className="plot-ghost" />}
        {s >= 2 && <circle cx={B.x} cy={B.y} r={r} className="plot-ghost" />}
        {s >= 4 && <path d={`M${A.x} ${A.y} L${C.x} ${C.y} L${B.x} ${B.y}`} className="plot-curve" />}
        {s >= 5 && <path d={`M${A.x} ${A.y} L${B.x} ${B.y} L${C.x} ${C.y} Z`} className="viz-region" style={{ opacity: 0.5 }} />}
        <line x1={A.x} y1={A.y} x2={B.x} y2={B.y} className="plot-curve" />
        <circle cx={A.x} cy={A.y} r={5} className="plot-point" />
        <circle cx={B.x} cy={B.y} r={5} className="plot-point" />
        <text x={A.x - 14} y={A.y + 20} className="viz-label">A</text>
        <text x={B.x + 6} y={B.y + 20} className="viz-label">B</text>
        {s >= 3 && (
          <>
            <circle cx={C.x} cy={C.y} r={5.5} className="plot-hot" />
            <text x={C.x - 4} y={C.y - 12} className="viz-label">C</text>
          </>
        )}
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn" onClick={() => setS(Math.max(0, s - 1))} disabled={s === 0}>Back</button>
        <button type="button" className="btn btn-primary" onClick={() => setS(Math.min(STEPS.length - 1, s + 1))} disabled={s === STEPS.length - 1}>Next step</button>
        <span className="hint">Step {s + 1} of {STEPS.length}</span>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {step.say} {step.why && <em>{step.why}</em>}
      </figcaption>
    </figure>
  );
}
