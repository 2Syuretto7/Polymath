"use client";

import { useState } from "react";

const QUANTITIES = ["absolute position", "absolute velocity", "absolute acceleration", "absolute rotation"];
/** Which quantities Newton’s laws let us detect: acceleration and rotation, but not position or velocity. */
const DETECTABLE = [false, false, true, true];

export const STRUCTURES = [
  { label: "Leibnizian spacetime", defined: [false, false, false, false], note: "too little structure: the bucket’s rotation is detectable, but this spacetime cannot say what it is" },
  { label: "Galilean spacetime", defined: [false, false, true, true], note: "a match: it defines exactly what the laws can detect" },
  { label: "Newton’s absolute space", defined: [true, true, true, true], note: "too much structure: absolute velocity is defined, but no experiment could ever reveal it" },
];

/** Earman’s symmetry principles: spacetime structure should match the symmetries of the laws. */
export function SpacetimeStructureViz() {
  const [k, setK] = useState(1);
  const S = STRUCTURES[k];
  const surplus = S.defined.filter((d, i) => d && !DETECTABLE[i]).length;
  const deficit = S.defined.filter((d, i) => !d && DETECTABLE[i]).length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="spacetime structure">
        {STRUCTURES.map((s, i) => <button key={s.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="A table of quantities, whether the spacetime defines them, and whether the laws can detect them" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={200} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>defined by the spacetime?</text>
        <text x={400} y={22} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>detectable under Newton&rsquo;s laws?</text>
        {QUANTITIES.map((q, i) => {
          const d = S.defined[i];
          const t = DETECTABLE[i];
          const bad = d !== t;
          const y = 40 + i * 36;
          return (
            <g key={q}>
              <rect x={10} y={y} width={520} height={30} rx={4} style={{ fill: bad ? "var(--danger-soft)" : "var(--success-soft)", stroke: bad ? "var(--danger)" : "var(--success)" }} />
              <text x={20} y={y + 20} style={{ fill: "var(--text)", fontSize: 12 }}>{q}</text>
              <text x={200} y={y + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{d ? "yes" : "no"}</text>
              <text x={400} y={y + 20} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{t ? "yes" : "no"}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {S.label}: {surplus} surplus, {deficit} missing. {S.note}.
      </p>
      <figcaption className="viz-caption">
        Newton&rsquo;s laws are unchanged by shifting everything in space or giving it a uniform velocity, but not by setting
        it rotating. Leibniz used the first fact against absolute space; Newton used the bucket to argue for it. Galilean
        spacetime, with absolute acceleration but no absolute velocity, gives each side what it was right about.
      </figcaption>
    </figure>
  );
}
