"use client";

import { useState } from "react";

const START = "ABABABABABABABAB".split("");
type Sys = { name: string; axioms: number; holds: (s: string[]) => boolean; predicts: (prev: string) => string | null };
const SYSTEMS: Sys[] = [
  { name: "no laws", axioms: 0, holds: () => true, predicts: () => null },
  { name: "every A is followed by B", axioms: 1, holds: (s) => s.every((c, i) => i === s.length - 1 || c !== "A" || s[i + 1] === "B"), predicts: (p) => (p === "A" ? "B" : null) },
  { name: "every B is followed by A", axioms: 1, holds: (s) => s.every((c, i) => i === s.length - 1 || c !== "B" || s[i + 1] === "A"), predicts: (p) => (p === "B" ? "A" : null) },
  { name: "A and B alternate", axioms: 2, holds: (s) => s.every((c, i) => i === 0 || c !== s[i - 1]), predicts: (p) => (p === "A" ? "B" : "A") },
  { name: "always A", axioms: 1, holds: (s) => s.every((c) => c === "A"), predicts: () => "A" },
];

/** A one-dimensional Humean mosaic and the best system: the true theory that best balances strength and simplicity. */
export function MosaicLawViz() {
  const [cells, setCells] = useState(START);
  const flip = (i: number) => setCells(cells.map((c, j) => (j === i ? (c === "A" ? "B" : "A") : c)));
  const strength = (s: Sys) => cells.slice(1).filter((_, i) => s.predicts(cells[i]) !== null).length;
  const scored = SYSTEMS.map((s) => ({ s, ok: s.holds(cells), str: strength(s), score: s.holds(cells) ? strength(s) - 4 * s.axioms : -Infinity }));
  const best = scored.reduce((a, b) => (b.score > a.score ? b : a));
  const cw = 28, X0 = 36;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => setCells(START)}>reset to alternating</button>
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A row of local events and the candidate laws they support" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={X0} y={14} style={{ fill: "var(--text-muted)", fontSize: 11 }}>the mosaic, one event per moment (click to change)</text>
        {cells.map((c, i) => (
          <g key={i} role="button" tabIndex={0} aria-label={`moment ${i + 1}: ${c}`} onClick={() => flip(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") flip(i); }} style={{ cursor: "pointer" }}>
            <rect x={X0 + i * cw} y={22} width={cw - 3} height={30} rx={4} style={{ fill: c === "A" ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: c === "A" ? "var(--accent)" : "var(--border-strong)" }} />
            <text x={X0 + i * cw + (cw - 3) / 2} y={42} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 13 }}>{c}</text>
          </g>
        ))}
        {scored.map(({ s, ok, str }, i) => (
          <text key={s.name} x={X0} y={84 + i * 22} style={{ fill: best.s === s ? "var(--accent)" : ok ? "var(--text)" : "var(--text-faint)", fontSize: 12, fontWeight: best.s === s ? 700 : 400, textDecoration: ok ? "none" : "line-through" }}>
            {s.name}: {ok ? `true, predicts ${str} of 15 transitions, ${s.axioms} axiom${s.axioms === 1 ? "" : "s"}` : "false in this mosaic"}
          </text>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Best system: {best.s.name}. Its theorems are the laws of this world.
      </p>
      <figcaption className="viz-caption">
        On Lewis&rsquo;s best-system account, the laws are the theorems of the true theory that best combines strength,
        here the number of transitions it predicts, with simplicity, here a cost of 4 per axiom. Change a single moment
        and the laws change with it: laws supervene on the mosaic and add nothing to it.
      </figcaption>
    </figure>
  );
}
