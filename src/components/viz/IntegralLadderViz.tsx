"use client";

import { useState } from "react";

const LEVELS = [
  { name: "Matter", note: "Consciousness most deeply involved, seemingly absent." },
  { name: "Life", note: "Consciousness emerging as growth, desire and vital energy." },
  { name: "Mind", note: "Consciousness as thought, dividing reality into separate things." },
  { name: "Higher Mind", note: "Thought that sees wholes at once, beyond step-by-step reasoning." },
  { name: "Illumined Mind", note: "Vision rather than thought: truth seen in flashes of light." },
  { name: "Intuition", note: "Direct contact with truth, knowing by identity." },
  { name: "Overmind", note: "A cosmic consciousness that still holds truths apart, the source of the gods." },
  { name: "Supermind", note: "Truth-consciousness: unity and multiplicity held together. Its descent would transform life on earth." },
  { name: "Saccidānanda", note: "Being, consciousness and bliss: the source of the whole descent." },
];

/** Aurobindo’s scale of consciousness: involution down, evolution up. */
export function IntegralLadderViz() {
  const [k, setK] = useState(2);
  const H = 24, top = 14;
  const y = (i: number) => top + (LEVELS.length - 1 - i) * H;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 236" role="img" aria-label="Ladder of levels of consciousness" style={{ width: "100%", display: "block" }}>
        <defs>
          <marker id="lad-arr" markerUnits="userSpaceOnUse" markerWidth={11} markerHeight={11} refX={5.5} refY={5.5} orient="auto">
            <path d="M0 0 L11 5.5 L0 11 z" style={{ fill: "var(--text-muted)" }} />
          </marker>
        </defs>
        {LEVELS.map((L, i) => (
          <g key={L.name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
            <rect x={150} y={y(i)} width={220} height={H - 4} rx={5} style={{ fill: i <= k ? "var(--accent-soft)" : "var(--bg)", stroke: i === k ? "var(--accent)" : "var(--border)", strokeWidth: i === k ? 2.5 : 1 }} />
            <text x={260} y={y(i) + 14} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: i === k ? 700 : 400 }}>{L.name}</text>
          </g>
        ))}
        <line x1={110} y1={y(0) + 10} x2={110} y2={y(LEVELS.length - 1) + 14} markerEnd="url(#lad-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={100} y={118} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>evolution</text>
        <line x1={410} y1={y(LEVELS.length - 1) + 10} x2={410} y2={y(0) + 6} markerEnd="url(#lad-arr)" style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <text x={420} y={118} style={{ fill: "var(--text-muted)", fontSize: 11 }}>involution</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setK(Math.max(0, k - 1))} disabled={k === 0}>down</button>
        <button type="button" className="btn btn-primary" onClick={() => setK(Math.min(LEVELS.length - 1, k + 1))} disabled={k === LEVELS.length - 1}>up</button>
      </div>
      <p style={{ margin: "6px 0" }}><strong>{LEVELS[k].name}</strong> (level {k + 1} of {LEVELS.length}). {LEVELS[k].note}</p>
      <figcaption className="viz-caption">
        Spirit first descends into matter (involution); what was involved then emerges again, level by level (evolution).
        Shaded levels have emerged so far. Mind is not the summit: Aurobindo expected a further, supramental step.
      </figcaption>
    </figure>
  );
}
