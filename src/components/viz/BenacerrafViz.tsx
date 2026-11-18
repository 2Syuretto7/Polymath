"use client";

import { useState } from "react";

const VIEWS = [
  { name: "platonism", sem: true, epi: false, note: "‘There are three primes between 10 and 20’ is about numbers, just as ‘there are three cities between London and Paris’ is about cities. But numbers are abstract, outside space and time, so nothing causal links us to them. How do we know about them?" },
  { name: "formalism", sem: false, epi: true, note: "We know mathematics by checking derivations, which are concrete. But then ‘there are three primes between 10 and 20’ means ‘a certain string is derivable’, unlike every other sentence of its form." },
  { name: "Gödel’s intuition", sem: true, epi: true, note: "Keeps the uniform semantics, and claims a faculty of mathematical intuition, ‘something like a perception’ of sets. Both boxes are ticked, but only if one accepts a non-causal faculty that critics find mysterious." },
  { name: "fictionalism", sem: true, epi: true, note: "Keeps the uniform semantics, but says the existence claims are false, as in fiction. What we know is what follows from the axioms, which needs no contact with numbers. The price: ‘2 + 2 = 4’ is not true." },
  { name: "structuralism", sem: true, epi: false, note: "Mathematics is about structures, not particular objects. This eases some worries, but knowledge of abstract structures still needs an account; much depends on the version." },
];

/** Benacerraf’s dilemma: a uniform semantics for mathematics and a plausible epistemology seem not to fit together. */
export function BenacerrafViz() {
  const [k, setK] = useState(0);
  const V = VIEWS[k];
  const box = (x: number, label: string, ok: boolean) => (
    <g>
      <rect x={x} y={20} width={230} height={70} rx={8} style={{ fill: ok ? "var(--accent-soft)" : "var(--bg)", stroke: ok ? "var(--accent)" : "var(--danger)", strokeWidth: 2 }} />
      <text x={x + 115} y={44} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{label}</text>
      <text x={x + 115} y={72} textAnchor="middle" style={{ fill: ok ? "var(--accent)" : "var(--danger)", fontSize: 16, fontWeight: 700 }}>{ok ? "met" : "not met"}</text>
    </g>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="view">
        {VIEWS.map((v, i) => <button key={v.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{v.name}</button>)}
      </div>
      <svg viewBox="0 0 520 100" role="img" aria-label="The two requirements" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {box(15, "semantics: same as the rest of language", V.sem)}
        {box(275, "epistemology: how we could know it", V.epi)}
      </svg>
      <p style={{ fontSize: 14, margin: "6px 0" }}>{V.note}</p>
      <figcaption className="viz-caption">
        Benacerraf (1973): the best account of mathematical truth treats numerals as names of objects, like any other names;
        the best account of knowledge, then a causal one, needs some connection between knower and known. Abstract objects
        cannot be causally connected to anything. Each view buys one requirement at some cost to the other.
      </figcaption>
    </figure>
  );
}
