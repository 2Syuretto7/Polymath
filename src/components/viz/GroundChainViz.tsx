"use client";

import { useState } from "react";

type F = { id: string; text: string; x: number; y: number; grounds: string[] };
const FACTS: F[] = [
  { id: "sc", text: "the ball is scarlet", x: 60, y: 170, grounds: [] },
  { id: "red", text: "the ball is red", x: 60, y: 105, grounds: ["sc"] },
  { id: "col", text: "the ball is coloured", x: 60, y: 40, grounds: ["red"] },
  { id: "soc", text: "Socrates exists", x: 172, y: 170, grounds: [] },
  { id: "set", text: "{Socrates} exists", x: 172, y: 105, grounds: ["soc"] },
  { id: "hum", text: "Socrates is human", x: 400, y: 170, grounds: [] },
  { id: "or", text: "Socrates is human or a stone", x: 318, y: 105, grounds: ["hum"] },
  { id: "some", text: "someone is human", x: 470, y: 105, grounds: ["hum"] },
  { id: "tr", text: "‘Socrates is human’ is true", x: 400, y: 40, grounds: ["hum"] },
];
const wd = (t: string) => t.length * 5.2 + 14;
const byId = Object.fromEntries(FACTS.map((f) => [f.id, f]));
const below = (id: string): string[] => byId[id].grounds.flatMap((g) => [g, ...below(g)]);
const above = (id: string): string[] => FACTS.filter((f) => f.grounds.includes(id)).flatMap((f) => [f.id, ...above(f.id)]);

/** Grounding as a partial order on facts: what holds in virtue of what. */
export function GroundChainViz() {
  const [sel, setSel] = useState("col");
  const dn = new Set(below(sel)), up = new Set(above(sel));
  const fund = FACTS.filter((f) => f.grounds.length === 0).map((f) => f.text);
  const color = (id: string) => (id === sel ? "var(--accent)" : dn.has(id) ? "var(--success)" : up.has(id) ? "var(--danger)" : "var(--border-strong)");
  return (
    <figure className="viz">
      <p style={{ fontSize: 13, margin: 0 }}>Click a fact.</p>
      <svg viewBox="0 0 520 200" role="img" aria-label="Facts linked by grounding" style={{ width: "100%", display: "block", marginTop: 4 }}>
        <defs>
          <marker id="gc-head" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--text-muted)" }} /></marker>
        </defs>
        {FACTS.flatMap((f) => f.grounds.map((g) => {
          const a = byId[g];
          return <line key={f.id + g} x1={a.x} y1={a.y - 12} x2={f.x} y2={f.y + 14} markerEnd="url(#gc-head)" style={{ stroke: "var(--text-muted)", strokeWidth: 1.3 }} />;
        }))}
        {FACTS.map((f) => (
          <g key={f.id} onClick={() => setSel(f.id)} style={{ cursor: "pointer" }} role="button" aria-label={f.text}>
            <rect x={f.x - wd(f.text) / 2} y={f.y - 12} width={wd(f.text)} height={24} rx={6} style={{ fill: f.id === sel ? "var(--accent-soft)" : "var(--bg)", stroke: color(f.id), strokeWidth: f.id === sel || dn.has(f.id) || up.has(f.id) ? 2 : 1 }} />
            <text x={f.x} y={f.y + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 10 }}>{f.text}</text>
          </g>
        ))}
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div><span style={{ color: "var(--success)", fontWeight: 700 }}>grounded in:</span> {dn.size ? [...dn].map((i) => byId[i].text).join("; ") : "nothing here: fundamental in this picture"}</div>
        <div><span style={{ color: "var(--danger)", fontWeight: 700 }}>helps ground:</span> {up.size ? [...up].map((i) => byId[i].text).join("; ") : "nothing here"}</div>
        <div>Fundamental facts in this picture: {fund.join("; ")}.</div>
      </div>
      <figcaption className="viz-caption">
        An arrow from one fact to another means the second obtains in virtue of the first. On the standard view, grounding
        is irreflexive, asymmetric and transitive, so it orders facts; and if a fact obtains, so do its grounds. Whether
        every chain must end in fundamental facts, as it does here, is a live question.
      </figcaption>
    </figure>
  );
}
