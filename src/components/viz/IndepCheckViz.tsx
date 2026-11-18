"use client";

import { useState } from "react";

const OUT = ["HH", "HT", "TH", "TT"];
const EV = [
  { name: "A: first toss H", has: (o: string) => o[0] === "H" },
  { name: "B: second toss H", has: (o: string) => o[1] === "H" },
  { name: "C: the tosses agree", has: (o: string) => o[0] === o[1] },
  { name: "D: at least one H", has: (o: string) => o.includes("H") },
];
const L = ["A", "B", "C", "D"];

/** Two fair tosses: check pairwise and mutual independence of chosen events. */
export function IndepCheckViz() {
  const [sel, setSel] = useState([true, true, true, false]);
  const P = (idx: number[]) => OUT.filter((o) => idx.every((i) => EV[i].has(o))).length / 4;
  const chosen = sel.map((s, i) => (s ? i : -1)).filter((i) => i >= 0);
  const pairs: [number, number][] = [];
  for (let a = 0; a < chosen.length; a++) for (let b = a + 1; b < chosen.length; b++) pairs.push([chosen[a], chosen[b]]);
  const fr = (x: number) => (x === 0 ? "0" : x === 1 ? "1" : `${x * 4}/4`);
  const pairOk = pairs.every(([a, b]) => P([a, b]) === P([a]) * P([b]));
  const tripleOk = chosen.length === 3 ? P(chosen) === chosen.reduce((p, i) => p * P([i]), 1) : null;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="events" style={{ flexWrap: "wrap" }}>
        {EV.map((e, i) => <button key={e.name} type="button" aria-pressed={sel[i]} className={sel[i] ? "seg is-on" : "seg"} onClick={() => { const n = sel.map((v, j) => (j === i ? !v : v)); if (n.filter(Boolean).length <= 3) setSel(n); }}>{e.name}</button>)}
      </div>
      <svg viewBox="0 0 520 80" role="img" aria-label="The four outcomes and which chosen events contain them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {OUT.map((o, k) => (
          <g key={o}>
            <rect x={20 + k * 125} y={8} width={110} height={60} rx={6} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={75 + k * 125} y={32} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 15, fontWeight: 700 }}>{o}</text>
            <text x={75 + k * 125} y={54} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 12 }}>{chosen.filter((i) => EV[i].has(o)).map((i) => L[i]).join(" ") || "—"}</text>
          </g>
        ))}
      </svg>
      <table className="mono" style={{ width: "100%", fontSize: 13, borderCollapse: "collapse", marginTop: 6 }}>
        <tbody>
          {chosen.map((i) => <tr key={i} style={{ borderTop: "1px solid var(--border)" }}><td style={{ padding: 4 }}>P({L[i]})</td><td style={{ padding: 4 }}>{fr(P([i]))}</td><td /></tr>)}
          {pairs.map(([a, b]) => {
            const ok = P([a, b]) === P([a]) * P([b]);
            return <tr key={`${a}${b}`} style={{ borderTop: "1px solid var(--border)" }}><td style={{ padding: 4 }}>P({L[a]} ∩ {L[b]})</td><td style={{ padding: 4 }}>{fr(P([a, b]))} vs {P([a]) * P([b])}</td><td style={{ padding: 4, fontWeight: 700, color: ok ? "var(--accent)" : "var(--danger)" }}>{ok ? "independent" : "dependent"}</td></tr>;
          })}
          {chosen.length === 3 && <tr style={{ borderTop: "1px solid var(--border)" }}><td style={{ padding: 4 }}>P({chosen.map((i) => L[i]).join(" ∩ ")})</td><td style={{ padding: 4 }}>{fr(P(chosen))} vs {chosen.reduce((p, i) => p * P([i]), 1)}</td><td style={{ padding: 4, fontWeight: 700, color: tripleOk ? "var(--accent)" : "var(--danger)" }}>{tripleOk ? "product holds" : "product fails"}</td></tr>}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 8 }}>
        {chosen.length < 2 ? "Choose two or three events." : pairOk && (tripleOk ?? true) ? "Mutually independent." : pairOk ? "Pairwise independent, but not mutually independent." : "Not independent."}
      </p>
      <figcaption className="viz-caption">
        Each outcome has probability 1/4. Choose up to three events. Bernstein&rsquo;s example A, B, C is pairwise independent,
        yet any two of them determine the third.
      </figcaption>
    </figure>
  );
}
