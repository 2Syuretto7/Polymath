"use client";

import { useState } from "react";

/** Values: 1 true, 0 false, 0.5 not yet settled. Strong Kleene: ¬ is 1 − v, ∨ is max, ∧ is min. */
type Sent = { name: string; text: string; ev: (v: number[]) => number };
const S: Sent[] = [
  { name: "s₁", text: "Snow is white.", ev: () => 1 },
  { name: "s₂", text: "Grass is red.", ev: () => 0 },
  { name: "s₃", text: "s₁ is true.", ev: (v) => v[0] },
  { name: "s₄", text: "s₃ is true.", ev: (v) => v[2] },
  { name: "s₅", text: "s₂ is true.", ev: (v) => v[1] },
  { name: "s₆", text: "s₄ is true or s₇ is true.", ev: (v) => Math.max(v[3], v[6]) },
  { name: "s₇", text: "s₇ is not true.", ev: (v) => 1 - v[6] },
  { name: "s₈", text: "s₈ is true.", ev: (v) => v[7] },
  { name: "s₉", text: "s₇ is true or s₇ is not true.", ev: (v) => Math.max(v[6], 1 - v[6]) },
];
const STAGES = 5;

/** Kripke's construction: build up the extension and anti-extension of "true" in stages until a fixed point is reached. */
export function KripkeFixViz() {
  const [seed, setSeed] = useState(false);
  const rows: number[][] = [S.map((_, i) => (seed && i === 7 ? 1 : 0.5))];
  for (let k = 0; k < STAGES; k++) rows.push(S.map((s) => s.ev(rows[k])));
  const last = rows[STAGES];
  const fixed = rows[STAGES - 1].every((v, i) => v === last[i]);
  const name = (v: number) => (v === 1 ? "T" : v === 0 ? "F" : "–");
  const cell = { border: "1px solid var(--border)", padding: "3px 8px", textAlign: "center" as const };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Starting point">
        <button type="button" aria-pressed={!seed} className={!seed ? "seg is-on" : "seg"} onClick={() => setSeed(false)}>start with nothing settled</button>
        <button type="button" aria-pressed={seed} className={seed ? "seg is-on" : "seg"} onClick={() => setSeed(true)}>start with s₈ counted true</button>
      </div>
      <div style={{ overflowX: "auto", marginTop: 10 }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            <tr><th style={cell}>sentence</th>{rows.map((_, k) => <th key={k} style={cell}>stage {k}</th>)}</tr>
            {S.map((s, i) => (
              <tr key={s.name}>
                <td style={{ ...cell, textAlign: "left" }}>{s.name}: {s.text}</td>
                {rows.map((r, k) => (
                  <td key={k} style={{ ...cell, background: r[i] === 1 ? "var(--accent-soft)" : r[i] === 0 ? "var(--danger-soft)" : "transparent", fontWeight: r[i] === 0.5 ? 400 : 700 }}>{name(r[i])}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8, display: "grid", gap: 3 }}>
        <div>grounded true: {last.filter((v) => v === 1).length}; grounded false: {last.filter((v) => v === 0).length}; never settled: {last.filter((v) => v === 0.5).length}</div>
        <div style={{ fontWeight: 700 }}>{fixed ? "a fixed point: one more stage changes nothing" : "still growing"}</div>
      </div>
      <figcaption className="viz-caption">
        At stage 0 the truth predicate applies to nothing and its negation to nothing. At each stage a sentence becomes true
        or false if the stage before settles it, using the strong Kleene tables; otherwise it stays unsettled. Facts about
        snow and grass feed upwards, and s₆ becomes true once s₄ does, even though s₇ never settles. The liar s₇, the
        truth-teller s₈ and even s₉ are ungrounded in the least fixed point. Starting with s₈ true gives another fixed point
        in which it stays true.
      </figcaption>
    </figure>
  );
}
