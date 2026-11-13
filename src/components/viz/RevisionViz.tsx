"use client";

import { useState } from "react";

type Sent = { name: string; text: string; next: (v: boolean[]) => boolean };
const S: Sent[] = [
  { name: "S", text: "Snow is white.", next: () => true },
  { name: "L", text: "L is not true.", next: (v) => !v[1] },
  { name: "T", text: "T is true.", next: (v) => v[2] },
  { name: "A", text: "B is true.", next: (v) => v[4] },
  { name: "B", text: "A is not true.", next: (v) => !v[3] },
  { name: "C", text: "S is true and L is true.", next: (v) => v[0] && v[1] },
];
const STEPS = 8;

/** Revision of truth hypotheses: start with a guess about which sentences are true, and repeatedly apply the T-schema. */
export function RevisionViz() {
  const [start, setStart] = useState<boolean[]>([false, true, true, false, false, false]);
  const rows: boolean[][] = [start];
  for (let k = 0; k < STEPS; k++) { const v = rows[k]; rows.push(S.map((s) => s.next(v))); }
  const stable = S.map((_, i) => rows.slice(2).every((r) => r[i] === rows[2][i]));
  const cell = { border: "1px solid var(--border)", padding: "3px 7px", textAlign: "center" as const };
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "flex", flexWrap: "wrap", gap: 6, alignItems: "center" }}>
        <span>initial guess, click to change:</span>
        {S.map((s, i) => (
          <button key={s.name} type="button" aria-pressed={start[i]} className={start[i] ? "seg is-on" : "seg"} onClick={() => setStart(start.map((x, j) => (j === i ? !x : x)))}>
            {s.name}: {start[i] ? "true" : "false"}
          </button>
        ))}
      </div>
      <div style={{ overflowX: "auto", marginTop: 10 }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13 }}>
          <tbody>
            <tr>
              <th style={cell}>sentence</th>
              {rows.map((_, k) => <th key={k} style={cell}>{k}</th>)}
              <th style={cell}>settles?</th>
            </tr>
            {S.map((s, i) => (
              <tr key={s.name}>
                <td style={{ ...cell, textAlign: "left" }}>{s.name}: {s.text}</td>
                {rows.map((r, k) => <td key={k} style={{ ...cell, background: r[i] ? "var(--accent-soft)" : "transparent", fontWeight: r[i] ? 700 : 400 }}>{r[i] ? "T" : "F"}</td>)}
                <td style={cell}>{stable[i] ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption">
        Column 0 is a guess about which sentences are true. Each later column applies the T-schema to the one before: a
        sentence counts as true at the next stage exactly when what it says holds at this stage. Ordinary sentences settle at
        once whatever the guess. The liar L flips for ever. The truth-teller T settles, but on whatever value it was given.
        The pair A and B cycle with period four, and C, which mentions the liar, never settles either.
      </figcaption>
    </figure>
  );
}
