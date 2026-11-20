"use client";

import { useState } from "react";

const CASES = [
  { label: "A ₹500 note", x: "this printed piece of paper", y: "money, worth five hundred rupees", c: "India, under the rules of the Reserve Bank", powers: "it lets the holder pay debts and buy goods" },
  { label: "A boundary line", x: "this line of stones", y: "the boundary of a village’s land", c: "the village and its neighbours", powers: "it grants the right to graze and farm inside, and denies it to outsiders" },
  { label: "A judge", x: "this person who has taken the oath", y: "a judge of the High Court", c: "the Indian legal system", powers: "their rulings bind the parties and can send someone to prison" },
  { label: "A wedding", x: "these words said before witnesses", y: "a marriage", c: "the law and the communities involved", powers: "it creates rights and duties of inheritance, care and support" },
];

/** Searle’s formula: X counts as Y in context C, sustained by collective acceptance. */
export function StatusFunctionViz() {
  const [k, setK] = useState(0);
  const [accepted, setAccepted] = useState(true);
  const C = CASES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        {CASES.map((c, i) => (
          <button key={c.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{c.label}</button>
        ))}
      </div>
      <div className="segmented" role="group" aria-label="acceptance" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={accepted} className={accepted ? "seg is-on" : "seg"} onClick={() => setAccepted(true)}>collectively accepted</button>
        <button type="button" aria-pressed={!accepted} className={!accepted ? "seg is-on" : "seg"} onClick={() => setAccepted(false)}>acceptance withdrawn</button>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8, marginTop: 12 }}>
        {[
          { h: "X: the brute facts", b: C.x, live: true },
          { h: "Y: the status", b: C.y, live: accepted },
          { h: "C: the context", b: C.c, live: accepted },
        ].map((card) => (
          <div key={card.h} style={{ padding: "10px 12px", borderRadius: 8, border: `2px solid ${card.live ? "var(--accent)" : "var(--border)"}`, background: card.live ? "var(--accent-soft)" : "var(--bg-subtle)", opacity: card.live ? 1 : 0.55 }}>
            <div style={{ fontWeight: 700 }}>{card.h}</div>
            <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4, textDecoration: card.live ? "none" : "line-through" }}>{card.b}</div>
          </div>
        ))}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        {accepted
          ? `${C.x[0].toUpperCase() + C.x.slice(1)} counts as ${C.y} in ${C.c}. Its deontic power: ${C.powers}.`
          : `Without collective acceptance, only ${C.x} remains. The status, and the powers that came with it, are gone.`}
      </p>
      <figcaption className="viz-caption">
        For John Searle, institutional facts have the form &ldquo;X counts as Y in C&rdquo;. Nothing in the physical
        features of X fixes Y: the status exists because people collectively accept it, and it carries rights, duties and
        permissions that the brute object alone could never have.
      </figcaption>
    </figure>
  );
}
