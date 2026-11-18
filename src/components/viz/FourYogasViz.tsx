"use client";

import { useState } from "react";

const YOGAS = [
  { name: "karma yoga", gloss: "the path of work", faculty: "the will", practice: "Work done for its own sake, without attachment to results, as service to others.", line: "Work as worship; the ego wears away through unselfish action." },
  { name: "bhakti yoga", gloss: "the path of devotion", faculty: "the emotions", practice: "Love of a personal God, through prayer, worship and repetition of a name.", line: "Love directed at God, until lover and beloved are one." },
  { name: "jñāna yoga", gloss: "the path of knowledge", faculty: "the intellect", practice: "Discrimination between the real and the unreal, and meditation on ‘I am brahman’.", line: "Advaita’s path: knowledge that the self is brahman." },
  { name: "rāja yoga", gloss: "the path of meditation", faculty: "the mind’s control", practice: "Patañjali’s eight limbs, from ethical restraints to absorption (samādhi).", line: "A practical science of concentration, open to testing." },
];

/** Vivekananda’s four yogas as roads to one goal. */
export function FourYogasViz() {
  const [k, setK] = useState(0);
  const Y = YOGAS[k];
  const pos: [number, number][] = [[90, 50], [430, 50], [90, 170], [430, 170]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="yoga">
        {YOGAS.map((y, i) => <button key={y.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{y.name}</button>)}
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="Four paths meeting at one goal" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {pos.map(([x, y], i) => <line key={i} x1={x} y1={y} x2={260} y2={110} style={{ stroke: k === i ? "var(--accent)" : "var(--border)", strokeWidth: k === i ? 4 : 2 }} />)}
        <circle cx={260} cy={110} r={44} style={{ fill: "var(--bg)" }} />
        <circle cx={260} cy={110} r={44} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={260} y={106} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>realisation</text>
        <text x={260} y={122} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>of the divine</text>
        {pos.map(([x, y], i) => (
          <g key={YOGAS[i].name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
            <rect x={x - 75} y={y - 24} width={150} height={48} rx={8} style={{ fill: "var(--bg)", stroke: k === i ? "var(--accent)" : "var(--border)", strokeWidth: 2 }} />
            <text x={x} y={y - 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{YOGAS[i].name}</text>
            <text x={x} y={y + 13} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{YOGAS[i].faculty}</text>
          </g>
        ))}
      </svg>
      <p style={{ margin: "6px 0" }}><strong>{Y.name}</strong>, {Y.gloss}, trains {Y.faculty}. {Y.practice}</p>
      <p className="mono" style={{ fontSize: 13 }}>{Y.line}</p>
      <figcaption className="viz-caption">
        Vivekananda matched each path to a temperament, and urged combining them. All lead to the same goal, as rivers from
        different sources reach the same sea.
      </figcaption>
    </figure>
  );
}
