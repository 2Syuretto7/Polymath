"use client";

import { useState } from "react";

const FACTS = ["falling stones", "projectiles", "pendulums", "planetary orbits", "the moon’s orbit", "tides", "comets’ returns"];
const PATTERNS: { label: string; covers: number[]; cheat?: boolean }[] = [
  { label: "Galileo’s law of fall", covers: [0, 1] },
  { label: "pendulum law", covers: [2] },
  { label: "Kepler’s laws", covers: [3, 4] },
  { label: "Newton’s gravitation and laws of motion", covers: [0, 1, 2, 3, 4, 5, 6] },
  { label: "“everything is as it is”", covers: [0, 1, 2, 3, 4, 5, 6], cheat: true },
];

/** Kitcher’s unification: explain the most with the fewest, sufficiently stringent, argument patterns. */
export function UnifyPatternViz() {
  const [on, setOn] = useState<boolean[]>([true, true, true, false, false]);
  const used = PATTERNS.filter((_, i) => on[i]);
  const covered = new Set(used.flatMap((p) => p.covers));
  const cheat = used.some((p) => p.cheat);
  const toggle = (i: number) => setOn(on.map((v, j) => (j === i ? !v : v)));
  const ratio = used.length ? covered.size / used.length : 0;
  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 4 }}>
        {PATTERNS.map((p, i) => (
          <label key={p.label} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14 }}>
            <input type="checkbox" checked={on[i]} onChange={() => toggle(i)} />
            <span>{p.label}</span>
          </label>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
        {FACTS.map((f, i) => (
          <span key={f} className="mono" style={{ fontSize: 13, padding: "4px 8px", borderRadius: 6, border: "1px solid var(--border)", background: covered.has(i) ? "var(--accent-soft)" : "var(--bg)", color: covered.has(i) ? "var(--text)" : "var(--text-muted)" }}>
            {f}
          </span>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>argument patterns used: {used.length}</div>
        <div>phenomena derived: {covered.size} of {FACTS.length}</div>
        <div>phenomena per pattern: {used.length ? ratio.toFixed(2) : "none"}</div>
        <div style={{ fontWeight: 700 }}>
          {cheat
            ? "the cheat derives everything, but it is not stringent: it would fit any facts at all"
            : used.length === 1 && covered.size === FACTS.length
              ? "one pattern derives everything: maximal unification"
              : covered.size < FACTS.length
                ? "some phenomena are left unexplained"
                : "everything is derived, but with more patterns than needed"}
        </div>
      </div>
      <figcaption className="viz-caption">
        Philip Kitcher held that the explanatory store of science is the set of argument patterns that derives the most
        phenomena from the fewest, most stringent patterns. Newton unified what Galileo and Kepler kept apart. A pattern that
        could derive anything whatever unifies nothing, so stringency must count too.
      </figcaption>
    </figure>
  );
}
