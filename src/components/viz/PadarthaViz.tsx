"use client";

import { useState } from "react";

const CATS = [
  { name: "substance", skt: "dravya", inst: "the lotus, and the water it floats on", text: "The substrate of qualities and motions. There are nine: earth, water, fire, air, ether, time, space, self and mind." },
  { name: "quality", skt: "guṇa", inst: "its blue colour, its fragrance", text: "Qualities inhere in substances and cannot exist alone. The list grew to twenty-four, including colour, number, size and pleasure." },
  { name: "motion", skt: "karma", inst: "its drifting downstream", text: "Five kinds of motion, such as rising, falling and moving onward. Like qualities, motions belong only to substances." },
  { name: "universal", skt: "sāmānya", inst: "lotusness, blueness", text: "Real, eternal features shared by many things, which make us call different lotuses by one name." },
  { name: "particularity", skt: "viśeṣa", inst: "what makes each of its atoms this atom", text: "The ultimate individuators of eternal substances such as atoms, which share all their qualities. The school is named after them." },
  { name: "inherence", skt: "samavāya", inst: "the tie between the lotus and its blueness", text: "The inseparable relation between a substance and its qualities, a whole and its parts, a thing and its universal." },
  { name: "absence", skt: "abhāva", inst: "the absence of a fish under it", text: "Added later, notably by Udayana and Śivāditya: absences are real and known, as when I see that the pot is not on the floor." },
];

/** The seven Vaiśeṣika categories, found in one perceived scene: a blue lotus drifting downstream. */
export function PadarthaViz() {
  const [c, setC] = useState(0);
  const C = CATS[c];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="category" style={{ flexWrap: "wrap" }}>
        {CATS.map((x, i) => <button key={x.name} type="button" aria-pressed={c === i} className={c === i ? "seg is-on" : "seg"} onClick={() => setC(i)}>{x.name}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="A blue lotus drifting on water" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={20} y={100} width={480} height={36} style={{ fill: c === 0 ? "var(--accent-soft)" : "transparent", stroke: "var(--border)" }} />
        <text x={30} y={124} style={{ fill: "var(--text-muted)", fontSize: 11 }}>water</text>
        <ellipse cx={260} cy={96} rx={60} ry={14} style={{ fill: c === 1 ? "var(--accent)" : "var(--accent-soft)", stroke: c === 0 ? "var(--accent)" : "var(--border)", strokeWidth: c === 0 ? 3 : 1 }} />
        <path d="M246,92 Q244,64 260,50 Q276,64 274,92 Z M226,92 Q218,70 234,62 Q248,72 250,92 Z M294,92 Q302,70 286,62 Q272,72 270,92 Z" style={{ fill: c === 1 ? "var(--accent)" : "var(--accent-soft)", stroke: c === 0 ? "var(--accent)" : "var(--border)", strokeWidth: c === 0 ? 3 : 1 }} />
        {c === 2 && <line x1={330} y1={90} x2={410} y2={90} style={{ stroke: "var(--accent)", strokeWidth: 3, markerEnd: "url(#pad-arrow)" }} />}
        <defs><marker id="pad-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path d="M0,0 L10,5 L0,10 z" style={{ fill: "var(--accent)" }} /></marker></defs>
        {c === 3 && <text x={260} y={30} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 700 }}>lotusness · blueness</text>}
        {c === 4 && [0, 1, 2, 3, 4].map((k) => <circle key={k} cx={240 + k * 10} cy={98} r={2.5} style={{ fill: "var(--danger)" }} />)}
        {c === 5 && <line x1={260} y1={40} x2={260} y2={70} style={{ stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "3 3" }} />}
        {c === 5 && <text x={260} y={34} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12 }}>blueness inheres in the lotus</text>}
        {c === 6 && <text x={130} y={128} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 12 }}>no fish here</text>}
      </svg>
      <p style={{ margin: "4px 0" }}><strong>{C.name}</strong> <span className="mono">({C.skt})</span>: {C.inst}.</p>
      <p className="mono" style={{ fontSize: 13 }}>{C.text}</p>
      <figcaption className="viz-caption">
        The Vaiśeṣika aimed to list every kind of thing that can be known and named. One ordinary scene already contains all
        seven categories. The first three have real existence (sattā); the others are real but do not &ldquo;exist&rdquo; in
        that sense.
      </figcaption>
    </figure>
  );
}
