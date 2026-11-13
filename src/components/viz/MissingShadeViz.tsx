"use client";

import { useState } from "react";

const N = 11, GAP = 6;
const light = (i: number) => 82 - i * 5.5;
const shade = (l: number) => `hsl(215 70% ${l}%)`;

/** Hume's missing shade of blue: a series of shades with one never seen. Can you form the idea of it without the impression? */
export function MissingShadeViz() {
  const [guess, setGuess] = useState(72);
  const [show, setShow] = useState(false);
  const target = light(GAP);
  const off = Math.abs(guess - target);

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 110" role="img" aria-label="A row of shades of blue with one gap" style={{ width: "100%", display: "block" }}>
        {Array.from({ length: N }, (_, i) => (
          i === GAP ? (
            <g key={i}>
              <rect x={14 + i * 45} y={14} width={40} height={60} rx={4} style={{ fill: shade(guess), stroke: "var(--text)", strokeDasharray: "4 3", strokeWidth: 1.5 }} />
              <text x={34 + i * 45} y={92} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>never seen</text>
            </g>
          ) : (
            <rect key={i} x={14 + i * 45} y={14} width={40} height={60} rx={4} style={{ fill: shade(light(i)) }} />
          )
        ))}
        {show && <rect x={14 + GAP * 45} y={78} width={40} height={6} rx={2} style={{ fill: shade(target) }} />}
      </svg>
      <div className="viz-sliders">
        <label><span>imagine the missing shade: lightness <span className="mono">{guess}%</span></span>
          <input type="range" min={20} max={90} value={guess} onChange={(e) => setGuess(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setShow(!show)}>{show ? "Hide the true shade" : "Show the true shade"}</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {off < 2
          ? "You have filled the gap: an idea of a shade you have never had an impression of. Hume granted that this is possible, and called it a contradictory phenomenon, but thought it too singular to abandon his principle."
          : "Every idea, Hume says, is copied from an earlier impression. Yet someone who had seen every shade but this one could, he admitted, supply it from imagination. Slide until the gap fits the series."}
      </figcaption>
    </figure>
  );
}
