"use client";

import { useState } from "react";

const TOPICS = [
  {
    name: "how things arise",
    q: "Does a thing arise from itself, from another, from both, or from neither?",
    koti: [
      { claim: "from itself", why: "Then it would already exist before arising, and arising would be pointless and endless." },
      { claim: "from another", why: "If cause and effect are wholly other, anything could arise from anything; and ‘other’ only makes sense relative to an effect that does not yet exist." },
      { claim: "from both", why: "This inherits the faults of the first two together." },
      { claim: "from neither, without a cause", why: "Then things would arise at random, or never; experience shows regular dependence on conditions." },
    ],
    end: "Not from itself, not from another, not from both, not without a cause: nothing anywhere arises with its own nature (Fundamental Verses 1.1). Things arise only dependently, and so are empty.",
  },
  {
    name: "the Tathāgata after death",
    q: "After death, does the Tathāgata (an awakened one) exist, not exist, both, or neither?",
    koti: [
      { claim: "exists", why: "That treats the Tathāgata as a self that persists: eternalism." },
      { claim: "does not exist", why: "That treats awakening as annihilation of a real self: annihilationism." },
      { claim: "both exists and does not exist", why: "This combines the faults of each." },
      { claim: "neither exists nor does not exist", why: "This still treats the Tathāgata as a thing with a nature to be described." },
    ],
    end: "The Buddha set all four aside. For Nāgārjuna, the question presupposes an entity with own-nature; once that is seen through, the question has no foothold.",
  },
];

/** The tetralemma: four positions, each examined and set aside. */
export function TetralemmaViz() {
  const [t, setT] = useState(0);
  const [seen, setSeen] = useState<number[]>([]);
  const T = TOPICS[t];
  const pick = (i: number) => setSeen(seen.includes(i) ? seen : [...seen, i]);
  const last = seen[seen.length - 1];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="topic">
        {TOPICS.map((x, i) => <button key={x.name} type="button" aria-pressed={t === i} className={t === i ? "seg is-on" : "seg"} onClick={() => { setT(i); setSeen([]); }}>{x.name}</button>)}
      </div>
      <p style={{ margin: "8px 0" }}><strong>{T.q}</strong></p>
      <svg viewBox="0 0 520 170" role="img" aria-label="Four positions in a square" style={{ width: "100%", display: "block" }}>
        {T.koti.map((k, i) => {
          const x = 40 + (i % 2) * 230, y = 10 + Math.floor(i / 2) * 80;
          const done = seen.includes(i);
          return (
            <g key={k.claim} onClick={() => pick(i)} style={{ cursor: "pointer" }}>
              <rect x={x} y={y} width={210} height={66} rx={6} style={{ fill: done ? "var(--bg)" : "var(--accent-soft)", stroke: done ? "var(--danger)" : "var(--accent)", strokeWidth: 2, strokeDasharray: done ? "6 4" : undefined }} />
              <text x={x + 105} y={y + 28} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>position {i + 1}</text>
              <text x={x + 105} y={y + 46} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700, textDecoration: done ? "line-through" : undefined }}>{k.claim}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls" style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
        {T.koti.map((k, i) => <button key={k.claim} type="button" className={seen.includes(i) ? "btn btn-primary" : "btn btn-ghost"} onClick={() => pick(i)}>Examine {i + 1}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {seen.length === 0 ? "Click a position to examine it." : seen.length < 4 ? `${T.koti[last].claim}: ${T.koti[last].why}` : T.end}
      </p>
      <figcaption className="viz-caption">
        The catuṣkoṭi, or tetralemma, lists four possible answers. Nāgārjuna takes each in turn and shows it leads to
        absurdity, by his opponent&rsquo;s own standards. Rejecting all four is not a fifth thesis but a refusal of the
        assumption they share.
      </figcaption>
    </figure>
  );
}
