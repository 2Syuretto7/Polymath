"use client";

import { useState } from "react";

const C = [
  { name: "Country A", pop: 15, hist: 50, wealth: 55, now: 30 },
  { name: "Country B", pop: 35, hist: 35, wealth: 30, now: 40 },
  { name: "Country C", pop: 50, hist: 15, wealth: 15, now: 30 },
];
const PR = [
  { name: "grandfathering", key: "now" as const, note: "Allocate the remaining budget in proportion to current emissions. Simple, but it rewards those who already pollute most." },
  { name: "equal per capita", key: "pop" as const, note: "Every person has an equal claim on the atmosphere’s capacity, so shares follow population." },
  { name: "polluter pays", key: "hist" as const, note: "Those who caused the problem should bear the costs, in proportion to historical emissions." },
  { name: "ability to pay", key: "wealth" as const, note: "Those best able to bear costs should bear them, whoever caused the problem." },
];

/** Four principles for sharing the burden of climate change, applied to three stylised countries. */
export function BurdenShareViz() {
  const [p, setP] = useState(1);
  const P = PR[p];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="principle">
        {PR.map((q, i) => <button key={q.name} type="button" aria-pressed={p === i} className={p === i ? "seg is-on" : "seg"} onClick={() => setP(i)}>{q.name}</button>)}
      </div>
      <svg viewBox="0 0 520 152" role="img" aria-label="Shares of a burden for three countries" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {C.map((c, i) => {
          const share = c[P.key];
          return (
            <g key={c.name}>
              <text x={100} y={35 + i * 42} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>{c.name}</text>
              <text x={110} y={51 + i * 42} style={{ fill: "var(--text-faint)", fontSize: 9 }}>pop {c.pop}%, hist {c.hist}%, wealth {c.wealth}%</text>
              <rect x={110} y={20 + i * 42} width={340} height={20} rx={3} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
              <rect x={110} y={20 + i * 42} width={3.4 * share} height={20} rx={3} style={{ fill: "var(--accent)" }} />
              <text x={458} y={35 + i * 42} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{share}%</text>
            </g>
          );
        })}
      </svg>
      <p style={{ fontSize: 13, margin: "4px 0" }}><strong>{P.name}.</strong> {P.note}</p>
      <figcaption className="viz-caption">
        The countries and numbers are invented, to show how the principles diverge. Bars give each country&rsquo;s share of
        the burden: of cutting emissions, or of paying for it. Real proposals often mix principles.
      </figcaption>
    </figure>
  );
}
