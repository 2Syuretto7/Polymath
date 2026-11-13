"use client";

import { useState } from "react";

const N = 9;

/** Salmon’s mark test: a causal process carries a mark forward; a pseudo-process, like a moving spot of light, does not. */
export function MarkTransmissionViz() {
  const [kind, setKind] = useState(0);
  const [at, setAt] = useState<number | null>(null);
  const marked = (i: number) => at !== null && (kind === 0 ? i >= at : i === at);
  const W = 560, H = 150, x = (i: number) => 40 + i * 60;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Process">
        {["a cricket ball in flight", "a spot of torchlight sweeping a wall"].map((l, i) => <button key={l} type="button" aria-pressed={kind === i} className={kind === i ? "seg is-on" : "seg"} onClick={() => { setKind(i); setAt(null); }}>{l}</button>)}
      </div>
      <p style={{ margin: "8px 0 4px", fontSize: 14 }}>The process at nine moments, left to right. Click a moment to mark it there: {kind === 0 ? "a dab of paint on the ball" : "a coloured filter held in front of the wall at the spot"}.</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Positions of the process over time, with any mark" style={{ width: "100%", display: "block" }}>
        {kind === 1 && <>
          <rect x={10} y={20} width={W - 20} height={60} rx={4} style={{ fill: "none", stroke: "var(--border)" }} />
          <text x={W / 2} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>wall</text>
          <text x={W / 2} y={140} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>torch, turning</text>
          {Array.from({ length: N }, (_, i) => <line key={i} x1={W / 2} y1={128} x2={x(i)} y2={50} style={{ stroke: "var(--text-faint)", strokeDasharray: "2 4" }} />)}
        </>}
        {Array.from({ length: N }, (_, i) => (
          <g key={i} onClick={() => setAt(i)} style={{ cursor: "pointer" }}>
            <circle cx={x(i)} cy={50} r={kind === 0 ? 14 : 16} style={{ fill: marked(i) ? "var(--accent)" : kind === 0 ? "var(--bg)" : "var(--accent-soft)", stroke: kind === 0 ? "var(--text)" : "var(--accent)", strokeWidth: 1.5, fillOpacity: kind === 1 && !marked(i) ? 0.5 : 1 }} />
            <text x={x(i)} y={98} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>t{i + 1}</text>
          </g>
        ))}
      </svg>
      <p style={{ margin: "6px 0 4px", fontWeight: 600 }}>
        {at === null ? "Click a moment to mark the process." : kind === 0 ? `Marked at t${at + 1}: the paint travels with the ball to every later moment. A causal process transmits the mark.` : `Marked at t${at + 1}: the spot is coloured only there; at later moments it is plain again. A pseudo-process cannot transmit a mark.`}
      </p>
      <figcaption className="viz-caption">
        Each position of the ball is caused by its earlier positions, so a change made at one moment persists. Each position of the spot is caused by the torch, not by the spot&rsquo;s earlier positions, so nothing carries over. A spot sweeping a distant enough wall can even move faster than light, since nothing is really travelling along the wall.
      </figcaption>
    </figure>
  );
}
