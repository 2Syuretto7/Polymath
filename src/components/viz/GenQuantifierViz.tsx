"use client";

import { useState } from "react";

/** Each determiner as a relation between the counts |A ∩ B|, |A − B| and |B − A|. */
export const DETS: { label: string; test: (ab: number, aOnly: number, bOnly: number) => boolean; conservative: boolean }[] = [
  { label: "Every A is B", test: (_ab, aOnly) => aOnly === 0, conservative: true },
  { label: "Some A is B", test: (ab) => ab > 0, conservative: true },
  { label: "No A is B", test: (ab) => ab === 0, conservative: true },
  { label: "Most As are B", test: (ab, aOnly) => ab > aOnly, conservative: true },
  { label: "At least three As are B", test: (ab) => ab >= 3, conservative: true },
  { label: "Exactly two As are B", test: (ab) => ab === 2, conservative: true },
  { label: "Only As are B", test: (_ab, _aOnly, bOnly) => bOnly === 0, conservative: false },
];

/** Generalised quantifiers: determiners as relations between sets, read off three counts. */
export function GenQuantifierViz() {
  const [ab, setAb] = useState(3);
  const [aOnly, setAOnly] = useState(2);
  const [bOnly, setBOnly] = useState(2);
  const dots = (n: number, cx: number) => Array.from({ length: n }, (_, i) => <circle key={i} cx={cx + ((i % 3) - 1) * 16} cy={70 + Math.floor(i / 3) * 16} r={5} style={{ fill: "var(--text)" }} />);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>in A and B: {ab} <input type="range" min={0} max={6} step={1} value={ab} onChange={(e) => setAb(Number(e.target.value))} aria-label="in A and B" /></label>
        <label>in A only: {aOnly} <input type="range" min={0} max={6} step={1} value={aOnly} onChange={(e) => setAOnly(Number(e.target.value))} aria-label="in A only" /></label>
        <label>in B only: {bOnly} <input type="range" min={0} max={6} step={1} value={bOnly} onChange={(e) => setBOnly(Number(e.target.value))} aria-label="in B only" /></label>
      </div>
      <svg viewBox="0 0 520 160" role="img" aria-label="Two overlapping sets A and B with counted members" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <ellipse cx={200} cy={85} rx={120} ry={65} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2, fillOpacity: 0.6 }} />
        <ellipse cx={320} cy={85} rx={120} ry={65} style={{ fill: "var(--success-soft)", stroke: "var(--success)", strokeWidth: 2, fillOpacity: 0.6 }} />
        <text x={110} y={34} style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>A</text>
        <text x={402} y={34} style={{ fill: "var(--success)", fontSize: 13, fontWeight: 700 }}>B</text>
        {dots(aOnly, 140)}
        {dots(ab, 260)}
        {dots(bOnly, 380)}
      </svg>
      <ul style={{ listStyle: "none", padding: 0, margin: "8px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 6 }}>
        {DETS.map((d) => {
          const v = d.test(ab, aOnly, bOnly);
          return (
            <li key={d.label} style={{ border: "1px solid var(--border)", borderRadius: 8, padding: "6px 8px", background: v ? "var(--success-soft)" : "var(--danger-soft)", fontSize: 13 }}>
              <strong>{v ? "True" : "False"}</strong>: {d.label}{d.conservative ? "" : " (depends on B only)"}
            </li>
          );
        })}
      </ul>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Move the &lsquo;in B only&rsquo; slider: every determiner keeps its truth value except &lsquo;only&rsquo;.
      </p>
      <figcaption className="viz-caption">
        A determiner such as &lsquo;most&rsquo; denotes a relation between two sets, the restrictor A and the scope B. The
        genuine determiners are conservative: their truth depends only on members of A, so on the first two counts.
        &lsquo;Only&rsquo; fails this, which is one reason linguists treat it as an adverb rather than a determiner.
      </figcaption>
    </figure>
  );
}
