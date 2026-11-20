"use client";

import { useState } from "react";

const STAGES = [0, 1, 2, 3, 4, 5, 6];
const NEVER = 7;

/** Truth values in sets through time: a proposition is true from some stage on, or never. Returns that stage. */
export function evaluate(k: number) {
  const p = k;
  const notP = k === NEVER ? 0 : NEVER;
  const orP = Math.min(p, notP);
  const notNotP = notP === NEVER ? 0 : NEVER;
  return { p, notP, orP, notNotP };
}

/** In the topos of presheaves on the stages 0 ≤ 1 ≤ 2 ≤ …, the subobject classifier has a truth value for each stage. */
export function KripkeToposViz() {
  const [k, setK] = useState(3);
  const v = evaluate(k);
  const rows: [string, number][] = [["p", v.p], ["¬p", v.notP], ["p ∨ ¬p", v.orP], ["¬¬p", v.notNotP]];
  const X = (s: number) => 150 + s * 52;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>p becomes true at stage {k === NEVER ? "never" : k} <input type="range" min={0} max={NEVER} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="k" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="For each formula, the stages at which it holds" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {STAGES.map((s) => <text key={s} x={X(s)} y={20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>stage {s}</text>)}
        {rows.map(([name, from], r) => (
          <g key={name}>
            <text x={120} y={52 + r * 36} textAnchor="end" style={{ fill: "var(--text)", fontSize: 13 }}>{name}</text>
            {STAGES.map((s) => {
              const on = s >= from;
              return <rect key={s} x={X(s) - 22} y={34 + r * 36} width={44} height={26} rx={4} style={{ fill: on ? "var(--success)" : "var(--bg-subtle)", stroke: on ? "var(--success)" : "var(--border)" }} />;
            })}
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        p ∨ ¬p holds {v.orP === 0 ? "from stage 0: everywhere" : `only from stage ${v.orP}`}; ¬¬p holds {v.notNotP === 0 ? "from stage 0" : "nowhere"}.
      </p>
      <figcaption className="viz-caption">
        Think of a set that grows over time. A truth value at stage 0 is the set of stages from which a statement holds,
        and ¬p holds at a stage when p never holds later. If p becomes true only at stage 3, then at stage 0 neither p nor
        ¬p holds, so excluded middle fails, while ¬¬p holds throughout. The internal logic of a topos is intuitionistic.
      </figcaption>
    </figure>
  );
}
