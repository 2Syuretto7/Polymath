"use client";

import { useState } from "react";

const GREEN = "var(--success)";
const BLUE = "#4c8dff";
const T = 2030;
const YEARS = Array.from({ length: 12 }, (_, i) => 2024 + i);

type Colour = "green" | "blue";
type Lang = "gb" | "gr";

/** Goodman’s symmetry: “no change” in green/blue words and “no change” in grue/bleen words predict different colours. */
export function GrueLanguageViz() {
  const [lang, setLang] = useState<Lang>("gb");
  const [hyp, setHyp] = useState<"green" | "grue">("green");
  const colour = (y: number): Colour => (y < T ? "green" : hyp === "green" ? "green" : "blue");
  const word = (y: number) => {
    const c = colour(y);
    if (lang === "gb") return c;
    return y < T ? (c === "green" ? "grue" : "bleen") : c === "blue" ? "grue" : "bleen";
  };
  const words = YEARS.map(word);
  const changes = words.some((w) => w !== words[0]);
  const W = 520, cell = 40, x0 = 20;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "grid", gap: 6 }}>
        <div className="segmented" role="group" aria-label="Hypothesis projected">
          <button type="button" aria-pressed={hyp === "green"} className={hyp === "green" ? "seg is-on" : "seg"} onClick={() => setHyp("green")}>project &ldquo;all emeralds are green&rdquo;</button>
          <button type="button" aria-pressed={hyp === "grue"} className={hyp === "grue" ? "seg is-on" : "seg"} onClick={() => setHyp("grue")}>project &ldquo;all emeralds are grue&rdquo;</button>
        </div>
        <div className="segmented" role="group" aria-label="Vocabulary">
          <button type="button" aria-pressed={lang === "gb"} className={lang === "gb" ? "seg is-on" : "seg"} onClick={() => setLang("gb")}>describe in green / blue</button>
          <button type="button" aria-pressed={lang === "gr"} className={lang === "gr" ? "seg is-on" : "seg"} onClick={() => setLang("gr")}>describe in grue / bleen</button>
        </div>
      </div>
      <svg viewBox={`0 0 ${W} 120`} role="img" aria-label="Emeralds first examined each year, with their colour and description" style={{ width: "100%", display: "block", marginTop: 10 }}>
        <line x1={x0 + (T - YEARS[0]) * cell} y1={4} x2={x0 + (T - YEARS[0]) * cell} y2={100} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
        <text x={x0 + (T - YEARS[0]) * cell + 4} y={14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>t = {T}</text>
        {YEARS.map((y, i) => (
          <g key={y}>
            <rect x={x0 + i * cell + 4} y={24} width={cell - 8} height={32} rx={6} style={{ fill: colour(y) === "green" ? GREEN : BLUE, opacity: y < T ? 1 : 0.7, stroke: "var(--border)" }} />
            <text x={x0 + i * cell + cell / 2} y={74} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{words[i]}</text>
            <text x={x0 + i * cell + cell / 2} y={94} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{y}</text>
          </g>
        ))}
        <text x={x0} y={114} style={{ fill: "var(--text-muted)", fontSize: 11 }}>examined so far</text>
        <text x={x0 + (T - YEARS[0]) * cell + 4} y={114} style={{ fill: "var(--text-muted)", fontSize: 11 }}>predicted</text>
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {changes
          ? `in these words the emeralds seem to change at ${T}, from ${words[0]} to ${words[words.length - 1]}`
          : `in these words every emerald is ${words[0]}: nothing changes`}
      </p>
      <figcaption className="viz-caption">
        An emerald is grue if it is first examined before t and is green, or is not examined before t and is blue; bleen swaps
        the colours. Every emerald examined so far is both green and grue. Whichever hypothesis you project, it says &ldquo;no
        change&rdquo; in its own vocabulary and &ldquo;a change at t&rdquo; in the other, so uniformity alone cannot pick one.
      </figcaption>
    </figure>
  );
}
