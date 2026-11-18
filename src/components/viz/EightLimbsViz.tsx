"use client";

import { useState } from "react";

const LIMBS = [
  { name: "yama", gloss: "restraints", text: "Non-violence (ahiṃsā), truthfulness, not stealing, sexual restraint and non-possessiveness: the ‘great vow’, binding on everyone." },
  { name: "niyama", gloss: "observances", text: "Purity, contentment, austerity, self-study and devotion to the Lord (īśvara)." },
  { name: "āsana", gloss: "posture", text: "‘Posture should be steady and comfortable’ (2.46). The sūtras say almost nothing more: the elaborate postures came later." },
  { name: "prāṇāyāma", gloss: "breath control", text: "Regulating the flow of breath, which steadies the mind." },
  { name: "pratyāhāra", gloss: "withdrawal of the senses", text: "The senses turn from their objects and follow the mind inward, like a tortoise drawing in its limbs." },
  { name: "dhāraṇā", gloss: "concentration", text: "Binding attention to one place or object." },
  { name: "dhyāna", gloss: "meditation", text: "An unbroken flow of attention towards that object." },
  { name: "samādhi", gloss: "absorption", text: "The object alone shines forth, as if empty of the meditator’s own form. Dhāraṇā, dhyāna and samādhi together are called saṃyama." },
];

/** Patañjali’s eight limbs, from outward conduct to inward absorption. */
export function EightLimbsViz() {
  const [k, setK] = useState(0);
  const L = LIMBS[k];
  const outer = k < 5;
  return (
    <figure className="viz">
      <svg viewBox="0 -18 520 168" role="img" aria-label="Eight steps from outer to inner" style={{ width: "100%", display: "block" }}>
        {LIMBS.map((l, i) => {
          const x = 20 + i * 61, y = 120 - i * 13;
          return (
            <g key={l.name} onClick={() => setK(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y={y} width={56} height={150 - y - 10} rx={4} style={{ fill: i === k ? "var(--accent)" : i < 5 ? "var(--accent-soft)" : "var(--bg)", stroke: "var(--accent)" }} />
              <text x={x + 28} y={y - 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>{i + 1}</text>
            </g>
          );
        })}
        <text x={20} y={-4} style={{ fill: "var(--text-muted)", fontSize: 11 }}>outer limbs 1 to 5</text>
        <text x={500} y={-4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>inner limbs 6 to 8</text>
      </svg>
      <div className="segmented" role="group" aria-label="limb" style={{ flexWrap: "wrap" }}>
        {LIMBS.map((l, i) => <button key={l.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{l.name}</button>)}
      </div>
      <p style={{ margin: "8px 0 4px" }}><strong>{k + 1}. {L.name}</strong>: {L.gloss} <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>({outer ? "outer" : "inner"})</span></p>
      <p className="mono" style={{ fontSize: 13 }}>{L.text}</p>
      <figcaption className="viz-caption">
        The path runs from ethics and the body, through breath and the senses, to ever finer states of attention. Its goal is
        not a skill but a separation: the seer resting in its own nature, no longer confused with the movements of the mind.
      </figcaption>
    </figure>
  );
}
