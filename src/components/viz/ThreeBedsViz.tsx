"use client";

import { useState } from "react";

const LEVELS = [
  { name: "the Form of Bed", maker: "God, or nature", what: "Bed itself: one, eternal, the reality that every bed shares in.", dist: "the truth itself" },
  { name: "the carpenter’s bed", maker: "the carpenter", what: "A particular bed, made by looking to the Form. Real enough to sleep on, but only a likeness of what bed is.", dist: "second from the truth" },
  { name: "the painter’s bed", maker: "the painter", what: "An image of the carpenter’s bed as it appears from one side. The painter needs no knowledge of beds, only of how they look.", dist: "third from the truth" },
];

/** Plato's three beds in Republic X: the Form, the carpenter's bed and the painter's image of it. */
export function ThreeBedsViz() {
  const [k, setK] = useState(2);
  const bed = (x: number, skew: number, frame: boolean, faint: boolean) => (
    <g style={{ opacity: faint ? 0.35 : 1 }}>
      {frame && <rect x={x - 62} y={50} width={124} height={110} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 4 }} />}
      <path d={`M${x - 45} ${130} L${x + 45} ${130 - skew} L${x + 45} ${110 - skew} L${x - 45} ${110} Z`} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
      <line x1={x - 45} y1={110} x2={x - 45} y2={80} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
      <line x1={x - 45} y1={130} x2={x - 45} y2={145} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
      <line x1={x + 45} y1={130 - skew} x2={x + 45} y2={145 - skew} style={{ stroke: "var(--accent)", strokeWidth: 3 }} />
    </g>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="level">
        {LEVELS.map((l, i) => <button key={l.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{l.name}</button>)}
      </div>
      <svg viewBox="0 0 520 190" role="img" aria-label="The Form, a real bed and a painting of it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <g style={{ opacity: k === 0 ? 1 : 0.35 }}>
          <circle cx={90} cy={105} r={52} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2, strokeDasharray: "5 4" }} />
          <text x={90} y={100} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 14, fontWeight: 700 }}>BED</text>
          <text x={90} y={118} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>itself</text>
        </g>
        {bed(260, 0, false, k !== 1)}
        {bed(430, 18, true, k !== 2)}
        <text x={90} y={182} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1st</text>
        <text x={260} y={182} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>2nd</text>
        <text x={430} y={182} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>3rd</text>
        <text x={168} y={108} style={{ fill: "var(--text-muted)", fontSize: 18 }}>→</text>
        <text x={338} y={108} style={{ fill: "var(--text-muted)", fontSize: 18 }}>→</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {LEVELS[k].name}: made by {LEVELS[k].maker}; {LEVELS[k].dist}. {LEVELS[k].what}
      </p>
      <figcaption className="viz-caption">
        In Republic X, the painter is compared to someone carrying a mirror around: they can make everything, but only as it
        appears. So the imitator knows nothing worth knowing about what they imitate, and art feeds on appearance rather than
        truth.
      </figcaption>
    </figure>
  );
}
