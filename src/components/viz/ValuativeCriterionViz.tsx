"use client";

import { useState } from "react";

export const TARGETS = [
  { label: "affine line, t ↦ 1/t", ext: 0, verdict: "no limit: the points run off to infinity, which the affine line does not contain. Not proper." },
  { label: "projective line, t ↦ 1/t", ext: 1, verdict: "exactly one limit, the point at infinity. Separated and proper." },
  { label: "line with two origins, t ↦ t", ext: 2, verdict: "two limits, one at each origin. Not separated." },
];

/** The valuative criteria: does a map from the punctured line extend across 0, and uniquely? */
export function ValuativeCriterionViz() {
  const [k, setK] = useState(1);
  const T = TARGETS[k];
  const ts = [1, 0.7, 0.5, 0.35, 0.25, 0.18, 0.13];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="target and map">
        {TARGETS.map((c, i) => <button key={c.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.label}</button>)}
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="A sequence of points approaching zero in the source and their images in the target" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={20} y={24} style={{ fill: "var(--text-muted)", fontSize: 11 }}>source: the line without 0</text>
        <line x1={20} y1={50} x2={200} y2={50} style={{ stroke: "var(--border-strong)" }} />
        <circle cx={30} cy={50} r={5} style={{ fill: "var(--surface)", stroke: "var(--text-muted)" }} />
        <text x={30} y={72} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        {ts.map((t) => <circle key={t} cx={30 + t * 160} cy={50} r={3} style={{ fill: "var(--accent)" }} />)}
        <text x={260} y={24} style={{ fill: "var(--text-muted)", fontSize: 11 }}>target</text>
        {k === 0 && <>
          <line x1={260} y1={110} x2={530} y2={110} style={{ stroke: "var(--border-strong)" }} />
          {ts.map((t) => <circle key={t} cx={270 + Math.min(250, 26 / t)} cy={110} r={3} style={{ fill: "var(--accent)" }} />)}
          <text x={520} y={136} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 12 }}>→ escapes: no limit</text>
        </>}
        {k === 1 && <>
          <circle cx={400} cy={110} r={60} style={{ fill: "none", stroke: "var(--border-strong)" }} />
          {ts.map((t) => { const a = 2 * Math.atan(1 / t); return <circle key={t} cx={400 + 60 * Math.sin(a)} cy={110 + 60 * Math.cos(a)} r={3} style={{ fill: "var(--accent)" }} />; })}
          <circle cx={400} cy={50} r={6} style={{ fill: "var(--success)" }} />
          <text x={410} y={40} style={{ fill: "var(--success)", fontSize: 12 }}>∞: the unique limit</text>
        </>}
        {k === 2 && <>
          <line x1={260} y1={95} x2={530} y2={95} style={{ stroke: "var(--border-strong)" }} />
          <line x1={260} y1={125} x2={530} y2={125} style={{ stroke: "var(--border-strong)" }} />
          <rect x={280} y={88} width={30} height={44} style={{ fill: "var(--bg-subtle)", stroke: "none" }} />
          {ts.map((t) => <circle key={t} cx={300 + t * 200} cy={110} r={3} style={{ fill: "var(--accent)" }} />)}
          <circle cx={300} cy={95} r={6} style={{ fill: "var(--danger)" }} />
          <circle cx={300} cy={125} r={6} style={{ fill: "var(--danger)" }} />
          <text x={300} y={160} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12 }}>two origins: both are limits</text>
          <text x={320} y={182} style={{ fill: "var(--text-muted)", fontSize: 11 }}>away from 0 the copies are identified</text>
        </>}
        <text x={20} y={190} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>ways to extend across 0: {T.ext}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{T.label}: {T.verdict}</p>
      <figcaption className="viz-caption">
        The valuative criteria test a scheme with maps from a curve missing one point. A separated scheme allows at most one
        way to fill the gap, and a proper one exactly one. Limits are unique in Hausdorff spaces and always exist in compact
        ones; these are the algebraic replacements.
      </figcaption>
    </figure>
  );
}
