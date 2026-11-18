"use client";

import { useState } from "react";

type Iv = [number, number];
const SETS: { key: string; label: string; u: Iv[] }[] = [
  { key: "half", label: "U = (0, ½)", u: [[0, 0.5]] },
  { key: "gap", label: "U = (0, ½) ∪ (½, 1)", u: [[0, 0.5], [0.5, 1]] },
  { key: "mid", label: "U = (¼, ¾)", u: [[0.25, 0.75]] },
];
/** Within [0, 1] as the whole space: complement, interior, closure for unions of open intervals. */
const complementInterior = (u: Iv[]): Iv[] => {
  const pts = [0, ...u.flat(), 1];
  const out: Iv[] = [];
  for (let i = 0; i < pts.length; i += 2) if (pts[i + 1] - pts[i] > 1e-9) out.push([pts[i], pts[i + 1]]);
  return out;
};

/** Heyting algebra of open sets: ¬U is the interior of the complement, and U ∪ ¬U can miss points. */
export function HeytingOpenViz() {
  const [k, setK] = useState(0);
  const U = SETS[k].u;
  const notU = complementInterior(U);
  const notnotU = complementInterior(notU);
  const lem = [...U, ...notU].sort((a, b) => a[0] - b[0]);
  const X = (t: number) => 120 + t * 380;
  const bar = (iv: Iv[], y: number, color: string) => iv.map(([a, b], i) => <rect key={i} x={X(a)} y={y} width={X(b) - X(a)} height={14} style={{ fill: color, opacity: 0.85 }} />);
  const ends = Array.from(new Set(lem.flat().concat(notU.flat()).filter((t) => t > 1e-9 && t < 1 - 1e-9)));
  const uniq = ends.filter((t) => !lem.some(([a, b]) => t > a + 1e-9 && t < b - 1e-9)).sort((a, b) => a - b);
  const same = JSON.stringify(notnotU) === JSON.stringify(U);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="open set">
        {SETS.map((s, i) => <button key={s.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="Open sets on the unit interval" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[["U", 15, U, "var(--accent)"], ["¬U", 45, notU, "var(--text-muted)"], ["U ∨ ¬U", 75, lem, "var(--success)"], ["¬¬U", 105, notnotU, "var(--accent)"]].map(([lab, y, iv, col]) => (
          <g key={lab as string}>
            <text x={10} y={(y as number) + 12} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{lab as string}</text>
            <line x1={X(0)} y1={(y as number) + 7} x2={X(1)} y2={(y as number) + 7} style={{ stroke: "var(--border)" }} />
            {bar(iv as Iv[], y as number, col as string)}
          </g>
        ))}
        {uniq.map((t) => <circle key={t} cx={X(t)} cy={82} r={4} style={{ fill: "var(--danger)" }} />)}
        <text x={X(0)} y={142} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        <text x={X(1)} y={142} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        U ∨ ¬U misses {uniq.map((t) => t.toString()).join(", ")} (red), so it is not the whole space: excluded middle fails. {same ? "Here ¬¬U = U." : "Here ¬¬U is strictly larger than U: double negation elimination fails."}
      </p>
      <figcaption className="viz-caption">
        Take the open subsets of the open interval (0, 1) as truth values: ∨ is union, ∧ is intersection, and ¬U is the largest open set
        disjoint from U, the interior of its complement. These form a Heyting algebra, and every intuitionistically valid
        formula always takes the value &lsquo;whole space&rsquo;. Boundary points are where excluded middle breaks.
      </figcaption>
    </figure>
  );
}
