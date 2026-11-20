"use client";

import { useState } from "react";

type F = { id: string; text: string; grounds: string[][] };
// each fact lists alternative full grounds (each a set of fact ids)
const FACTS: F[] = [
  { id: "p1", text: "particle 1 has charge −1", grounds: [] },
  { id: "p2", text: "particle 2 has charge +1", grounds: [] },
  { id: "rel", text: "1 and 2 attract", grounds: [["p1", "p2"]] },
  { id: "atom", text: "there is a hydrogen atom", grounds: [["p1", "p2", "rel"]] },
  { id: "water", text: "the glass holds water", grounds: [["atom"]] },
  { id: "wet", text: "the glass is wet", grounds: [["water"]] },
];
const byId = Object.fromEntries(FACTS.map((f) => [f.id, f]));

function closure(base: Set<string>) {
  const got = new Set(base);
  let changed = true;
  while (changed) {
    changed = false;
    for (const f of FACTS) if (!got.has(f.id) && f.grounds.some((g) => g.every((x) => got.has(x)))) { got.add(f.id); changed = true; }
  }
  return got;
}

/** Testing a candidate fundamental base: is it complete (grounds everything) and independent (no member grounded in the others)? */
export function BaseCheckViz() {
  const [base, setBase] = useState<string[]>(["p1", "p2", "rel"]);
  const B = new Set(base);
  const all = closure(B);
  const complete = FACTS.every((f) => all.has(f.id));
  const redundant = base.filter((id) => closure(new Set(base.filter((x) => x !== id))).has(id));
  const toggle = (id: string) => setBase(B.has(id) ? base.filter((x) => x !== id) : [...base, id]);
  return (
    <figure className="viz">
      <p style={{ fontSize: 13, margin: 0 }}>Choose the facts you count as fundamental.</p>
      <div style={{ display: "grid", gap: 6, marginTop: 8 }}>
        {FACTS.map((f) => (
          <button key={f.id} type="button" aria-pressed={B.has(f.id)} className={B.has(f.id) ? "btn btn-primary" : "btn btn-ghost"} onClick={() => toggle(f.id)} style={{ justifyContent: "space-between", display: "flex" }}>
            <span>{f.text}</span>
            <span className="mono" style={{ fontSize: 11, opacity: 0.85 }}>
              {B.has(f.id) ? (redundant.includes(f.id) ? "in base, but grounded in the rest" : "in base") : all.has(f.id) ? "grounded by the base" : "not reached"}
            </span>
          </button>
        ))}
      </div>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3, marginTop: 8 }}>
        <div style={{ fontWeight: 700, color: complete ? "var(--success)" : "var(--danger)" }}>Complete: {complete ? "yes, every fact is in the base or grounded in it" : "no, some facts are not reached"}</div>
        <div style={{ fontWeight: 700, color: redundant.length ? "var(--danger)" : "var(--success)" }}>Independent: {redundant.length ? `no, ${redundant.map((i) => `‘${byId[i].text}’`).join(" and ")} is grounded in the rest` : "yes, no member is grounded in the others"}</div>
      </div>
      <figcaption className="viz-caption">
        In this toy world, the attraction is grounded in the two charges, the atom in the particles and their relation,
        and so on up to the wet glass. A good candidate for the fundamental facts should be complete and independent.
        Try removing the attraction from the base, then adding the atom.
      </figcaption>
    </figure>
  );
}
