"use client";

import { useState } from "react";
import type { ReactElement } from "react";

const SCHOOLS = [
  { name: "Advaita", who: "Śaṅkara, 8th century", rel: "The self is identical with brahman. Selves and world are appearances superimposed by ignorance.", lib: "Liberation is knowledge that removes ignorance: one realises one always was brahman." },
  { name: "Viśiṣṭādvaita", who: "Rāmānuja, 11th–12th century", rel: "Brahman is one, but qualified: real selves and a real world are its body, inseparable from it yet distinct, as a body is from its soul.", lib: "Liberation comes by devotion (bhakti) and grace; the freed self enjoys brahman while remaining itself." },
  { name: "Dvaita", who: "Madhva, 13th century", rel: "God, selves and matter are eternally different. Selves and world depend wholly on God but are never identical with him.", lib: "Liberation is by devotion and God’s grace; even freed selves remain distinct and differ among themselves." },
];

const Circle = ({ x, y, r, label, dashed, soft }: { x: number; y: number; r: number; label: string; dashed?: boolean; soft?: boolean }) => (
  <g>
    <circle cx={x} cy={y} r={r} style={{ fill: soft ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: dashed ? "5 4" : undefined }} />
    <text x={x} y={y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{label}</text>
  </g>
);

const PICTURES: (() => ReactElement)[] = [
  () => (
    <>
      <circle cx={260} cy={115} r={80} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      <text x={260} y={22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>brahman alone is real</text>
      <Circle x={225} y={118} r={28} label="selves" dashed />
      <Circle x={295} y={118} r={28} label="world" dashed />
      <text x={260} y={212} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>dashed: appearance, sublated by knowledge</text>
    </>
  ),
  () => (
    <>
      <circle cx={260} cy={115} r={80} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2.5 }} />
      <text x={260} y={22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>brahman, the inner controller</text>
      <Circle x={225} y={118} r={28} label="selves" />
      <Circle x={295} y={118} r={28} label="world" />
      <text x={260} y={212} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>solid: real, the body of brahman</text>
    </>
  ),
  () => (
    <>
      <Circle x={260} y={50} r={34} label="God" soft />
      <Circle x={150} y={160} r={30} label="selves" />
      <Circle x={370} y={160} r={30} label="matter" />
      {[[150, 160], [370, 160]].map(([x, y]) => {
        const dx = 260 - x, dy = 50 - y, L = Math.hypot(dx, dy);
        return <line key={x} x1={x + (dx * 32) / L} y1={y + (dy * 32) / L} x2={260 - (dx * 37) / L} y2={50 - (dy * 37) / L} markerEnd="url(#ved-arrow)" style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />;
      })}
      <text x={260} y={175} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>arrows: depends on</text>
    </>
  ),
];

/** Three Vedāntas on how brahman, selves and the world are related. */
export function VedantaViz() {
  const [k, setK] = useState(1);
  const S = SCHOOLS[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="school">
        {SCHOOLS.map((x, i) => <button key={x.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 222" role="img" aria-label={`A picture of ${S.name}`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs><marker id="ved-arrow" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="10" markerHeight="10" markerUnits="userSpaceOnUse" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--text-muted)" }} /></marker></defs>
        {PICTURES[k]()}
      </svg>
      <p style={{ margin: "4px 0" }}><strong>{S.name}</strong> <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>({S.who})</span></p>
      <p className="mono" style={{ fontSize: 13 }}>{S.rel}</p>
      <p className="mono" style={{ fontSize: 13 }}>{S.lib}</p>
      <figcaption className="viz-caption">
        All three read the same texts: the Upaniṣads, the Brahma Sūtras and the Bhagavad Gītā. They differ on whether
        difference is ultimate, and so on what the self is and what liberation does to it.
      </figcaption>
    </figure>
  );
}
