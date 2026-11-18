"use client";

import { useState } from "react";

const PROPS = ["made of bronze", "warm to the touch", "golden brown", "heavy", "rolling down a slope", "spherical", "10 cm across", "one thing"];
const LENSES = [
  { key: "all", label: "as a bronze ball", keep: [0, 1, 2, 3, 4, 5, 6, 7], who: "everyday perception", note: "Everything about it is in view at once." },
  { key: "phys", label: "qua moving body", keep: [3, 4, 5, 6, 7], who: "the student of nature", note: "Its colour and warmth drop out; its weight, motion and shape matter." },
  { key: "geom", label: "qua solid figure", keep: [5, 6, 7], who: "the geometer", note: "Only its shape and size remain: the geometer studies this ball as a sphere, though no sphere exists apart from bronze or something like it." },
  { key: "arith", label: "qua unit", keep: [7], who: "the arithmetician", note: "Only its being one remains: it can be counted, and arithmetic studies it as a unit." },
];

/** Aristotle on abstraction: the mathematician studies physical things qua quantity, setting the rest aside. */
export function QuaLensViz() {
  const [k, setK] = useState(0);
  const L = LENSES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="lens">
        {LENSES.map((l, i) => <button key={l.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{l.label}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="The properties of a bronze ball, with those set aside faded" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={70} cy={75} r={45} style={{ fill: L.keep.includes(2) ? "rgb(176, 128, 64)" : "none", stroke: "var(--text)", strokeWidth: 2, strokeDasharray: L.keep.includes(0) ? undefined : "5 4" }} />
        {PROPS.map((p, i) => {
          const on = L.keep.includes(i);
          const x = 150 + (i % 2) * 185, y = 26 + Math.floor(i / 2) * 32;
          return (
            <g key={p}>
              <rect x={x} y={y - 16} width={175} height={24} rx={6} style={{ fill: on ? "var(--accent-soft)" : "var(--bg)", stroke: on ? "var(--accent)" : "var(--border)" }} />
              <text x={x + 87} y={y} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 12, textDecoration: on ? "none" : "line-through" }}>{p}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {L.who}: {L.keep.length} of {PROPS.length} properties in view. {L.note}
      </p>
      <figcaption className="viz-caption">
        For Aristotle, mathematical objects are not separate Forms. They are features of physical things, which the
        mathematician separates in thought, studying a thing qua extended or qua countable. Nothing false follows, since
        the geometer asserts nothing about the properties set aside.
      </figcaption>
    </figure>
  );
}
