"use client";

import { useState } from "react";

const MOVES = [
  { label: "Uranus strays from its predicted orbit", fix: "Postulate an unseen outer planet", belt: "a planet beyond Uranus", novel: true, found: true, result: "Neptune found in 1846 near the predicted place" },
  { label: "Mercury’s perihelion advances too fast", fix: "Postulate a planet, Vulcan, inside Mercury’s orbit", belt: "Vulcan", novel: true, found: false, result: "Vulcan never found" },
  { label: "The same Mercury anomaly", fix: "Say the Sun’s gravity is just a little different near Mercury, with no further consequence", belt: "a gravity tweak", novel: false, found: false, result: "no new prediction at all" },
];

/** Lakatos: a research programme protects its hard core with a belt of auxiliaries; it is progressive when changes to the belt predict novel facts that are found. */
export function ProgrammeViz() {
  const [on, setOn] = useState<boolean[]>([true, false, false]);
  const chosen = MOVES.filter((_, i) => on[i]);
  const progressive = chosen.filter((m) => m.novel && m.found).length;
  const degenerating = chosen.filter((m) => !m.novel || !m.found).length;
  const verdict = chosen.length === 0 ? "no modifications yet" : degenerating === 0 ? "progressive: every change predicted a novel fact that was found" : progressive === 0 ? "degenerating: the changes only patch anomalies" : "mixed: some changes paid off with new facts, others only patched";
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 150" role="img" aria-label="The hard core of Newton’s programme surrounded by a protective belt of auxiliary hypotheses" style={{ width: "100%", display: "block" }}>
        <ellipse cx={260} cy={75} rx={240} ry={68} style={{ fill: "var(--accent-soft)", stroke: "var(--border)" }} />
        <ellipse cx={260} cy={75} rx={110} ry={32} style={{ fill: "var(--bg)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={260} y={70} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>hard core: Newton’s laws</text>
        <text x={260} y={88} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>and the law of gravity</text>
        <text x={260} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>protective belt: {chosen.length ? chosen.map((m) => m.belt).join("; ") : "auxiliary hypotheses"}</text>
      </svg>
      <div style={{ display: "grid", gap: 6, marginTop: 6 }}>
        {MOVES.map((m, i) => (
          <label key={m.fix} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 8, padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6, background: on[i] ? (m.novel && m.found ? "var(--accent-soft)" : "var(--danger-soft)") : "var(--bg)", fontSize: 14 }}>
            <input type="checkbox" checked={on[i]} onChange={() => setOn(on.map((v, j) => (j === i ? !v : v)))} />
            <span><strong>Anomaly:</strong> {m.label}. <strong>Belt change:</strong> {m.fix}. <span className="mono" style={{ fontSize: 13 }}>{m.novel ? "novel prediction" : "no novel prediction"}; {m.result}.</span></span>
          </label>
        ))}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>{verdict}</p>
      <figcaption className="viz-caption">
        Lakatos appraised programmes, not single theories. The hard core is kept fixed by decision; anomalies are met by
        changing the belt. What matters is whether the changes lead to novel facts. A programme that keeps predicting new
        things, some of which turn up, is progressive; one that only patches is degenerating, and rational scientists should
        in time prefer a progressive rival.
      </figcaption>
    </figure>
  );
}
