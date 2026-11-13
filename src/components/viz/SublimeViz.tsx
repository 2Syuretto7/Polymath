"use client";

import { useState } from "react";

const STAGES = [
  { name: "a person", unit: "", m: 1.8, ratio: 1 },
  { name: "a tree", unit: "a person's height", m: 20, ratio: 11 },
  { name: "a mountain", unit: "the tree", m: 4800, ratio: 240 },
  { name: "the Earth's diameter", unit: "the mountain", m: 1.27e7, ratio: 2650 },
  { name: "the solar system", unit: "the Earth's diameter", m: 9e12, ratio: 710000 },
  { name: "the Milky Way", unit: "the solar system", m: 1e21, ratio: 1.1e8 },
  { name: "the system of galaxies", unit: "the Milky Way", m: 8.8e26, ratio: 880000 },
];
const SPAN = 12;

const big = (x: number) => (x < 1e4 ? String(Math.round(x)) : `about ${x.toExponential(1).replace("e+", " × 10^")}`);

/** Kant's progression of measures: number keeps up with any magnitude, but comprehension in one intuition does not. */
export function SublimeViz() {
  const [i, setI] = useState(2);
  const s = STAGES[i];
  const shown = Math.min(s.ratio, 48);
  const fails = s.ratio > SPAN;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>measure: <span className="mono">{s.name}</span></span>
          <input type="range" min={0} max={STAGES.length - 1} value={i} onChange={(ev) => setI(Math.round(Number(ev.target.value)))} /></label>
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="Units being apprehended one after another" style={{ width: "100%", display: "block" }}>
        {Array.from({ length: shown }, (_, k) => {
          const fromEnd = shown - 1 - k;
          const op = fromEnd < SPAN ? 1 : Math.max(0.08, 1 - (fromEnd - SPAN + 1) * 0.12);
          return <rect key={k} x={6 + k * 10.6} y={20} width={8} height={30} rx={2} style={{ fill: fromEnd < SPAN ? "var(--accent)" : "var(--text-muted)", opacity: op }} />;
        })}
        {s.ratio > shown && <text x={514} y={40} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 12 }}>…</text>}
      </svg>
      <table className="table">
        <tbody>
          <tr><td>logical estimate, by number</td><td className="mono">{i === 0 ? "1.8 m" : `${big(s.ratio)} lengths of ${s.unit}`}</td></tr>
          <tr><td>size in metres</td><td className="mono">{big(s.m)}</td></tr>
          <tr><td>taken in at a glance?</td><td style={{ color: fails ? "var(--danger)" : "var(--accent)" }}>{fails ? "no: apprehension runs on, and the first units fade as new ones arrive" : "yes: comprehension holds the units together"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Each object is measured in units of the one before, as in Kant&rsquo;s own sequence. Numbers never run out, so mathematical estimation always succeeds. But the imagination can hold only so many units in one intuition; beyond that, the earliest slip away. Reason demands the whole as given, and the felt failure of imagination to match reason&rsquo;s idea of the infinite is the mathematical sublime.
      </figcaption>
    </figure>
  );
}
