"use client";

import { useState } from "react";

const GREEN = "var(--success)";
const BLUE = "#4c8dff";
const YEARS = Array.from({ length: 12 }, (_, i) => 2015 + i); // emeralds examined so far, one a year
const T = 2030;

/** Goodman's grue: every emerald so far is green, and every one is also grue. Which prediction does the evidence support? */
export function GrueViz() {
  const [year, setYear] = useState(2032);
  const [hyp, setHyp] = useState<"green" | "grue">("green");
  const x = (y: number) => 30 + (y - 2014) * 22;
  const predicted = hyp === "green" ? GREEN : year < T ? GREEN : BLUE;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <button type="button" className={hyp === "green" ? "btn btn-primary" : "btn"} aria-pressed={hyp === "green"} onClick={() => setHyp("green")}>All emeralds are green</button>
        <button type="button" className={hyp === "grue" ? "btn btn-primary" : "btn"} aria-pressed={hyp === "grue"} onClick={() => setHyp("grue")}>All emeralds are grue</button>
      </div>
      <svg viewBox="0 0 620 170" role="img" aria-label={`Twelve green emeralds observed; the ${hyp} hypothesis predicts a ${predicted === GREEN ? "green" : "blue"} emerald in ${year}`}>
        <line x1={20} y1={90} x2={600} y2={90} className="viz-axis" />
        <line x1={x(T)} y1={30} x2={x(T)} y2={130} className="plot-mirror" />
        <text x={x(T)} y={22} textAnchor="middle" className="plot-tick">2030</text>
        {YEARS.map((y) => (
          <path key={y} d={`M${x(y)} 74 l9 16 l-9 16 l-9 -16 Z`} fill={GREEN} stroke="var(--surface)" />
        ))}
        <path d={`M${x(year)} 68 l12 22 l-12 22 l-12 -22 Z`} fill={predicted} stroke="var(--text)" strokeDasharray="3 3" />
        <text x={x(year)} y={130} textAnchor="middle" className="viz-label">{year}?</text>
        <text x={x(2020)} y={150} textAnchor="middle" className="plot-tick">examined so far: all green, and all grue</text>
      </svg>
      <div className="viz-sliders">
        <label>
          <span>Year the next emerald is first examined <span className="mono">{year}</span></span>
          <input type="range" min={2027} max={2039} step={1} value={year} onChange={(e) => setYear(Number(e.target.value))} />
        </label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        An emerald is <em>grue</em> if it is first examined before 2030 and is green, or is not examined before 2030 and is blue.
        Every emerald so far fits both hypotheses equally well. The {hyp} hypothesis predicts that this emerald will be{" "}
        <strong>{predicted === GREEN ? "green" : "blue"}</strong>.{" "}
        {hyp === "grue" && year >= T ? "The evidence is the same; only the predicate has changed. What makes 'green' the right one to project?" : ""}
      </figcaption>
    </figure>
  );
}
