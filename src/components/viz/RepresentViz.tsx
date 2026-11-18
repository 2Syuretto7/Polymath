"use client";

import { useState } from "react";

const RELS: { name: string; f: string; holds: (n: number, m: number) => boolean; say: (n: number, m: number) => string }[] = [
  { name: "m = 2n", f: "m = SS0 × n", holds: (n, m) => m === 2 * n, say: (n, m) => `${m} = 2 × ${n}` },
  { name: "n < m", f: "∃z (n + Sz = m)", holds: (n, m) => n < m, say: (n, m) => `${n} < ${m}` },
  { name: "n divides m", f: "∃z (z × n = m)", holds: (n, m) => n === 0 ? m === 0 : m % n === 0, say: (n, m) => `${n} divides ${m}` },
  { name: "n + m is even", f: "∃z (n + m = z + z)", holds: (n, m) => (n + m) % 2 === 0, say: (n, m) => `${n} + ${m} is even` },
];

/** A relation is represented in Q when Q proves each true instance and refutes each false one. */
export function RepresentViz() {
  const [ri, setRi] = useState(0);
  const [cell, setCell] = useState<[number, number]>([2, 4]);
  const r = RELS[ri];
  const ns = [0, 1, 2, 3, 4], ms = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [cn, cm] = cell;
  const t = r.holds(cn, cm);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="relation">
        {RELS.map((x, i) => <button key={x.name} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{x.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, margin: "8px 0" }}>φ(n, m): {r.f}</p>
      <table className="mono" style={{ borderCollapse: "collapse", fontSize: 12 }}>
        <thead>
          <tr><th style={{ padding: 3 }}>n \ m</th>{ms.map((m) => <th key={m} style={{ padding: 3, minWidth: 36 }}>{m}</th>)}</tr>
        </thead>
        <tbody>
          {ns.map((n) => (
            <tr key={n}>
              <th style={{ padding: 3 }}>{n}</th>
              {ms.map((m) => {
                const h = r.holds(n, m), on = n === cn && m === cm;
                return (
                  <td key={m} style={{ padding: 0, border: "1px solid var(--border)" }}>
                    <button type="button" aria-label={`n ${n}, m ${m}`} onClick={() => setCell([n, m])}
                      style={{ width: "100%", padding: "4px 2px", border: on ? "2px solid var(--text)" : "none", cursor: "pointer", fontFamily: "inherit", fontSize: 12, background: h ? "var(--accent-soft)" : "transparent", color: h ? "var(--accent)" : "var(--text-faint)" }}>
                      {h ? "⊢ φ" : "⊢ ¬φ"}
                    </button>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>
        {t ? `${r.say(cn, cm)} is true, and Q proves φ with numerals for ${cn} and ${cm}.` : `${r.say(cn, cm)} is false, and Q proves ¬φ with numerals for ${cn} and ${cm}.`}
      </p>
      <figcaption className="viz-caption">
        Each cell is a separate theorem of Q about particular numerals. Q is very weak and proves almost no general laws,
        yet it settles every such instance for these relations. That is all representability asks, and it is enough for
        every computable relation.
      </figcaption>
    </figure>
  );
}
