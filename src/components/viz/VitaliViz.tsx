"use client";

import { useState } from "react";

const QS = [0, 1 / 2, 1 / 3, 2 / 3, 1 / 4, 3 / 4, 1 / 5, 2 / 5, 3 / 5, 4 / 5, 1 / 6, 5 / 6];
const X0 = Math.SQRT2 - 1;
const STAGES = [
  { name: "one class", text: "Call x and y equivalent if x − y is rational. The class of √2 − 1 is all numbers √2 − 1 + q, taken mod 1: a countable set, dense in [0, 1). There are uncountably many such classes." },
  { name: "choose", text: "Using the axiom of choice, pick exactly one point from each class. Call the set of choices V. No rule tells us which point; choice only says a selection exists." },
  { name: "translate", text: "For each rational q in [0, 1), shift V by q, wrapping round mod 1. The shifted copies V + q are disjoint, since two points of V never differ by a rational, and together they fill [0, 1)." },
  { name: "contradiction", text: "If V had measure m, translation invariance gives each copy measure m, and countable additivity gives 1 = m + m + m + ⋯. That sum is 0 if m = 0 and ∞ if m > 0. Neither is 1, so V is not measurable." },
];

/** Vitali’s construction of a non-measurable set, on the circle [0, 1). */
export function VitaliViz() {
  const [s, setS] = useState(0);
  const pt = (t: number, r: number) => [260 + r * Math.cos(2 * Math.PI * t - Math.PI / 2), 105 + r * Math.sin(2 * Math.PI * t - Math.PI / 2)];
  // stand-ins for V: a scattered pseudo-random set of "representatives"
  const V = Array.from({ length: 18 }, (_, i) => ((i * 0.6180339887) % 1) * (1 / 6));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="step">
        {STAGES.map((x, i) => <button key={x.name} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="The unit interval bent into a circle" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={260} cy={105} r={85} style={{ fill: "none", stroke: "var(--border)", strokeWidth: 2 }} />
        <text x={260} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0 = 1</text>
        {s === 0 && QS.map((q, i) => { const [x, y] = pt((X0 + q) % 1, 85); return <circle key={i} cx={x} cy={y} r={5} style={{ fill: i === 0 ? "var(--danger)" : "var(--accent)" }} />; })}
        {s >= 1 && V.map((v, i) => { const [x, y] = pt(v, 85); return <circle key={i} cx={x} cy={y} r={4} style={{ fill: "var(--danger)" }} />; })}
        {s >= 2 && QS.slice(1).map((q, j) => V.map((v, i) => { const [x, y] = pt((v + q) % 1, 85 - 0 * j); return <circle key={`${j}-${i}`} cx={x} cy={y} r={2.5} style={{ fill: "var(--accent)", opacity: 0.8 }} />; }))}
        {s === 3 && <text x={260} y={110} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 13, fontWeight: 700 }}>1 = m + m + m + ⋯ ?</text>}
        {s === 0 && <text x={260} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>√2 − 1 + q (mod 1)</text>}
        {(s === 1 || s === 2) && <text x={260} y={110} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>{s === 1 ? "V (red): one point per class" : "copies V + q (purple)"}</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{STAGES[s].text}</p>
      <figcaption className="viz-caption">
        The pictured V is only a schematic stand-in, since no one can draw or describe a Vitali set: its existence needs the
        axiom of choice. Solovay showed in 1970 that without choice it is consistent that every subset of ℝ is measurable.
      </figcaption>
    </figure>
  );
}
