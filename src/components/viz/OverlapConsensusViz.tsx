"use client";

import { useState } from "react";

export const DOCTRINES = [
  { name: "Kantian liberal", within: "autonomy is the supreme value, and justice expresses it" },
  { name: "Utilitarian", within: "the political conception, in practice, best promotes general welfare" },
  { name: "Religious believer", within: "faith itself requires freedom of conscience, since belief must be free" },
  { name: "Pluralist", within: "many values, political and non-political, are each weighed in their place" },
];

/** Each doctrine either endorses the political conception from within its own values, or merely accepts it as a compromise. */
export function OverlapConsensusViz() {
  const [within, setWithin] = useState([true, true, false, true]);
  const all = within.every(Boolean);
  const cx = [200, 340, 200, 340];
  const cy = [82, 82, 155, 155];
  return (
    <figure className="viz">
      {DOCTRINES.map((d, i) => (
        <div key={d.name} className="segmented" role="group" aria-label={d.name} style={{ marginRight: 8, marginBottom: 6 }}>
          <button type="button" className="seg" style={{ pointerEvents: "none", fontWeight: 700 }}>{d.name}</button>
          <button type="button" aria-pressed={within[i]} className={within[i] ? "seg is-on" : "seg"} onClick={() => setWithin(within.map((w, j) => (j === i ? true : w)))}>from within</button>
          <button type="button" aria-pressed={!within[i]} className={!within[i] ? "seg is-on" : "seg"} onClick={() => setWithin(within.map((w, j) => (j === i ? false : w)))}>as a compromise</button>
        </div>
      ))}
      <svg viewBox="0 0 540 235" role="img" aria-label="Four doctrines and the political conception they share" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {DOCTRINES.map((d, i) => (
          <g key={d.name}>
            <circle cx={cx[i]} cy={cy[i]} r={72} style={{ fill: within[i] ? "var(--accent-soft)" : "none", stroke: within[i] ? "var(--accent)" : "var(--text-faint)", strokeDasharray: within[i] ? undefined : "5 4" }} />
            <text x={cx[i] + (i % 2 === 0 ? -42 : 42)} y={cy[i] + (i < 2 ? -22 : 30)} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{d.name}</text>
          </g>
        ))}
        <rect x={235} y={96} width={70} height={44} rx={6} style={{ fill: all ? "var(--success)" : "var(--surface)", stroke: all ? "var(--success)" : "var(--danger)", strokeWidth: 2 }} />
        <text x={270} y={116} textAnchor="middle" style={{ fill: all ? "var(--surface)" : "var(--text)", fontSize: 11, fontWeight: 700 }}>political</text>
        <text x={270} y={130} textAnchor="middle" style={{ fill: all ? "var(--surface)" : "var(--text)", fontSize: 11, fontWeight: 700 }}>conception</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, color: all ? "var(--success)" : "var(--danger)" }}>
        {all
          ? "Overlapping consensus: every doctrine affirms the political conception for reasons of its own, so support is stable for the right reasons."
          : `Modus vivendi: ${DOCTRINES.filter((_, i) => !within[i]).map((d) => d.name.toLowerCase()).join(" and ")} accept${within.filter((w) => !w).length === 1 ? "s" : ""} the terms only as a balance of power, and would revise them if their strength grew.`}
      </p>
      <p style={{ fontSize: 14, color: "var(--text-muted)" }}>
        {DOCTRINES.filter((_, i) => within[i]).map((d) => `${d.name}: ${d.within}.`).join(" ")}
      </p>
      <figcaption className="viz-caption">
        Rawls distinguishes an overlapping consensus, in which reasonable comprehensive doctrines each endorse the political
        conception from their own point of view, from a modus vivendi, a truce that lasts only while the balance of forces
        holds. Only the first gives stability for the right reasons.
      </figcaption>
    </figure>
  );
}
