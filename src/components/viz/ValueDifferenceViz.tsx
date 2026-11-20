"use client";

import { useState } from "react";

/** The same hue strip divided by colour vocabularies of different sizes. */
const SYSTEMS = [
  { label: "2 terms", cuts: [0, 40, 100], names: ["warm", "cool"] },
  { label: "3 terms", cuts: [0, 18, 55, 100], names: ["red", "green", "blue"] },
  { label: "5 terms", cuts: [0, 10, 25, 55, 90, 100], names: ["red", "yellow", "green", "blue", "violet"] },
  { label: "7 terms", cuts: [0, 8, 14, 25, 45, 65, 90, 100], names: ["red", "orange", "yellow", "green", "teal", "blue", "violet"] },
];

export function ValueDifferenceViz() {
  const [s, setS] = useState(1);
  const [hue, setHue] = useState(40);
  const S = SYSTEMS[s];
  const idx = Math.max(0, S.cuts.findIndex((c, i) => i < S.cuts.length - 1 && hue >= c && hue < S.cuts[i + 1] + (i === S.cuts.length - 2 ? 1 : 0)));
  const others = S.names.filter((_, i) => i !== idx);
  const X = (v: number) => 20 + v * 5;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="vocabulary">
        {SYSTEMS.map((sy, i) => (
          <button key={sy.label} type="button" aria-pressed={s === i} className={s === i ? "seg is-on" : "seg"} onClick={() => setS(i)}>{sy.label}</button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>hue = {hue} <input type="range" min={0} max={100} step={1} value={hue} onChange={(e) => setHue(Number(e.target.value))} aria-label="hue" /></label>
      </div>
      <svg viewBox="0 0 540 110" role="img" aria-label="A strip of hues divided into colour terms" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: 100 }, (_, i) => (
          <rect key={i} x={X(i)} y={20} width={5.5} height={30} style={{ fill: `hsl(${i * 2.8}, 70%, 55%)` }} />
        ))}
        {S.cuts.slice(1, -1).map((c) => (
          <line key={c} x1={X(c)} y1={14} x2={X(c)} y2={56} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
        ))}
        {S.names.map((nm, i) => (
          <text key={nm} x={X((S.cuts[i] + S.cuts[i + 1]) / 2)} y={74} textAnchor="middle" style={{ fill: i === idx ? "var(--accent)" : "var(--text-muted)", fontSize: 11, fontWeight: i === idx ? 700 : 400 }}>{nm}</text>
        ))}
        <path d={`M ${X(hue)} 12 l -6 -8 h 12 z`} style={{ fill: "var(--text)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        This hue is called &ldquo;{S.names[idx]}&rdquo;. In this vocabulary that term means: not {others.join(", not ")}.
      </p>
      <figcaption className="viz-caption">
        The hue is the same in every vocabulary; what the word means is not. For Saussure, the value of a sign is fixed by
        its differences from the other signs in the system: &ldquo;blue&rdquo; in the three-term system covers ground
        that the seven-term system divides among &ldquo;teal&rdquo;, &ldquo;blue&rdquo; and &ldquo;violet&rdquo;. In
        language there are only differences, without positive terms.
      </figcaption>
    </figure>
  );
}
