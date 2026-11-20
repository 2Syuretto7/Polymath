"use client";

import { useState } from "react";

/**
 * Gibbard-style hyperstates for two practical questions: L, whether to rule out lying, and B, whether to rule out
 * getting one’s little brother to lie. Accepting a sentence rules out the hyperstates that disagree with it.
 */
export const HYPERSTATES: [boolean, boolean][] = [[true, true], [true, false], [false, true], [false, false]];
export type Stance = "accept" | "reject" | "none";

/** The hyperstates left open by a stance on P1 (lying is wrong), P2 (if lying is wrong, so is getting your brother to lie) and C (getting your brother to lie is wrong). */
export function openStates(p1: Stance, p2: Stance, c: Stance) {
  return HYPERSTATES.filter(([l, b]) => {
    const fits = (st: Stance, val: boolean) => st === "none" || (st === "accept" ? val : !val);
    return fits(p1, l) && fits(p2, !l || b) && fits(c, b);
  });
}

/** Expressivism and the Frege-Geach problem: validity as the impossibility of a coherent state of mind. */
export function HyperstateViz() {
  const [p1, setP1] = useState<Stance>("accept");
  const [p2, setP2] = useState<Stance>("accept");
  const [c, setC] = useState<Stance>("reject");
  const open = openStates(p1, p2, c);
  const row = (label: string, st: Stance, set: (s: Stance) => void) => (
    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", margin: "4px 0" }}>
      <span style={{ minWidth: 260 }}>{label}</span>
      <div className="segmented" role="group" aria-label={label}>
        {(["accept", "reject", "none"] as Stance[]).map((s) => <button key={s} type="button" aria-pressed={st === s} className={st === s ? "seg is-on" : "seg"} onClick={() => set(s)}>{s === "none" ? "no view" : s}</button>)}
      </div>
    </div>
  );
  return (
    <figure className="viz">
      {row("P1. Lying is wrong.", p1, setP1)}
      {row("P2. If lying is wrong, getting your brother to lie is wrong.", p2, setP2)}
      {row("C. Getting your brother to lie is wrong.", c, setC)}
      <svg viewBox="0 0 540 96" role="img" aria-label="The four hyperstates and which remain open" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {HYPERSTATES.map(([l, b], i) => {
          const on = open.some(([x, y]) => x === l && y === b);
          const x = 8 + i * 133;
          return (
            <g key={i}>
              <rect x={x} y={6} width={125} height={70} rx={6} style={{ fill: on ? "var(--success-soft)" : "var(--bg-subtle)", stroke: on ? "var(--success)" : "var(--border)", strokeDasharray: on ? "none" : "4 3" }} />
              <text x={x + 62.5} y={30} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 11 }}>lying: {l ? "ruled out" : "permitted"}</text>
              <text x={x + 62.5} y={50} textAnchor="middle" style={{ fill: on ? "var(--text)" : "var(--text-faint)", fontSize: 11 }}>brother: {b ? "ruled out" : "permitted"}</text>
              <text x={x + 62.5} y={68} textAnchor="middle" style={{ fill: on ? "var(--success)" : "var(--text-faint)", fontSize: 10, fontWeight: 700 }}>{on ? "open" : "excluded"}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Hyperstates left open: {open.length}. {open.length === 0 ? "No complete plan fits this combination: it is incoherent, so the argument is valid in the expressivist’s sense." : "This combination of attitudes can be coherently held."}
      </p>
      <figcaption className="viz-caption">
        On Allan Gibbard&rsquo;s expressivism, accepting a moral sentence is ruling out some hyperplans: complete
        decisions about what to do. A conditional rules out the plans that reject lying but permit getting your brother to
        lie. Modus ponens is valid because no hyperstate survives accepting both premises and rejecting the conclusion.
      </figcaption>
    </figure>
  );
}
