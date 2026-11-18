"use client";

import { useState } from "react";

const BELIEFS: { text: string; tag: string; ring: number; angle: number; cost: number; note: string }[] = [
  { text: "the meter reads 5.2", tag: "reading 5.2", ring: 0, angle: -90, cost: 1, note: "Treat the reading as a mistake: misread, or a fault in this instance. Cheap, but cannot be repeated every time the meter disagrees." },
  { text: "this meter is working properly", tag: "meter works", ring: 1, angle: 200, cost: 2, note: "Blame the instrument. A few beliefs about the apparatus change, and the theory stands." },
  { text: "the circuit has no other source of current", tag: "no other current", ring: 1, angle: -20, cost: 2, note: "Posit something unnoticed, as Le Verrier posited Neptune to explain the orbit of Uranus." },
  { text: "Ohm’s law holds for this material", tag: "Ohm’s law", ring: 2, angle: 90, cost: 5, note: "Revise the physics. Many predictions and explanations that relied on the law must now be reconsidered." },
  { text: "arithmetic: 2 + 2 = 4", tag: "arithmetic", ring: 3, angle: 180, cost: 9, note: "Revise arithmetic. Possible in principle, says Quine, but the disruption would reach almost every belief we have." },
  { text: "logic: every statement is true or false", tag: "logic", ring: 3, angle: 0, cost: 10, note: "Revise logic. Quine notes that this has been proposed to simplify quantum mechanics; no statement is immune." },
];

/** Quine’s web of belief: a recalcitrant observation can be accommodated by revising almost anything. */
export function RevisionWebViz() {
  const [pick, setPick] = useState<number | null>(null);
  const RY = [100, 70, 44, 18];
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>
        Theory predicts the meter will read 4.8. It reads 5.2. Something must give. Choose what to revise.
      </p>
      <svg viewBox="0 0 520 240" role="img" aria-label="Web of belief" style={{ width: "100%", display: "block" }}>
        {RY.map((ry, k) => <ellipse key={k} cx={260} cy={120} rx={ry * 2.2} ry={ry} style={{ fill: "none", stroke: "var(--border)" }} />)}
        {BELIEFS.map((b, i) => {
          const th = (b.angle * Math.PI) / 180, ry = RY[b.ring];
          const x = 260 + ry * 2.2 * Math.cos(th), y = 120 + ry * Math.sin(th);
          const on = pick === i, left = Math.cos(th) < -0.1;
          return (
            <g key={i}>
              <circle cx={x} cy={y} r={6} style={{ fill: on ? "var(--danger)" : "var(--accent)" }} />
              <text x={left ? x - 10 : x + 10} y={y + 4} textAnchor={left ? "end" : "start"} style={{ fill: on ? "var(--danger)" : "var(--text-muted)", fontSize: 12, fontWeight: on ? 700 : 400 }}>{b.tag}</text>
            </g>
          );
        })}
        <text x={8} y={232} style={{ fill: "var(--text-faint)", fontSize: 11 }}>outer: close to experience; centre: logic and mathematics</text>
      </svg>
      <div style={{ display: "grid", gap: 4, marginTop: 6 }}>
        {BELIEFS.map((b, i) => (
          <button key={i} type="button" aria-pressed={pick === i} className={pick === i ? "seg is-on" : "seg"} style={{ textAlign: "left", padding: "6px 10px", border: "1px solid var(--border)", borderRadius: 6 }} onClick={() => setPick(i)}>
            revise: {b.text}
          </button>
        ))}
      </div>
      {pick !== null && (
        <div style={{ marginTop: 8 }}>
          <div className="mono" style={{ fontWeight: 700 }}>conflict resolved; disruption to the rest of the web: {BELIEFS[pick].cost} on a scale of 10</div>
          <p className="viz-caption">{BELIEFS[pick].note}</p>
        </div>
      )}
      <figcaption className="viz-caption">
        &ldquo;Any statement can be held true come what may, if we make drastic enough adjustments elsewhere in the
        system&rdquo;, and none is immune from revision. We prefer to revise near the edge, where disturbance is least, but
        that is a matter of degree, not a line between analytic and synthetic truths.
      </figcaption>
    </figure>
  );
}
