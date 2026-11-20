"use client";

import { useState } from "react";

const WORLDS = ["Earth (watery stuff is H₂O)", "Twin Earth (watery stuff is XYZ)"];
const SENT = [
  { s: "water is H₂O", m: [[true, true], [false, false]] },
  { s: "water is the watery stuff", m: [[true, false], [false, true]] },
  { s: "2 + 2 = 4", m: [[true, true], [true, true]] },
];

/** A two-dimensional matrix: rows are worlds considered as actual, columns are worlds considered as counterfactual. */
export function TwoDMatrixViz() {
  const [k, setK] = useState(0);
  const [act, setAct] = useState(0);
  const S = SENT[k];
  const necessary = S.m[act].every(Boolean);
  const apriori = S.m[0][0] && S.m[1][1];
  const X0 = 210, cw = 140, Y0 = 60, rh = 46;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sentence">
        {SENT.map((d, i) => <button key={d.s} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>&lsquo;{d.s}&rsquo;</button>)}
      </div>
      <div className="viz-controls">
        <label>the actual world is <select value={act} onChange={(e) => setAct(Number(e.target.value))} aria-label="actual world"><option value={0}>Earth</option><option value={1}>Twin Earth</option></select></label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Truth values of a sentence across worlds considered as actual and as counterfactual" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={X0 + cw} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>evaluated at, as counterfactual:</text>
        {["Earth", "Twin Earth"].map((c, j) => <text key={c} x={X0 + cw * (j + 0.5)} y={40} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{c}</text>)}
        <text x={8} y={40} style={{ fill: "var(--text-muted)", fontSize: 11 }}>considered as actual:</text>
        {WORLDS.map((w, i) => (
          <g key={w}>
            <text x={X0 - 10} y={Y0 + i * rh + 27} textAnchor="end" style={{ fill: i === act ? "var(--accent)" : "var(--text)", fontSize: 11, fontWeight: i === act ? 700 : 400 }}>{w}</text>
            {S.m[i].map((v, j) => (
              <g key={j}>
                <rect x={X0 + j * cw + 4} y={Y0 + i * rh} width={cw - 8} height={rh - 8} rx={6} style={{ fill: i === j ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: i === act ? "var(--accent)" : "var(--border-strong)", strokeWidth: i === act ? 2 : 1 }} />
                <text x={X0 + j * cw + cw / 2} y={Y0 + i * rh + 24} textAnchor="middle" className="mono" style={{ fill: v ? "var(--success)" : "var(--danger)", fontSize: 13, fontWeight: 700 }}>{v ? "true" : "false"}</text>
              </g>
            ))}
          </g>
        ))}
        <text x={8} y={164} style={{ fill: "var(--text-muted)", fontSize: 10 }}>shaded cells: the diagonal. outlined row: the actual world.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Necessary (true across the actual row): {necessary ? "yes" : "no"}. A priori (true along the diagonal): {apriori ? "yes" : "no"}.
      </p>
      <figcaption className="viz-caption">
        A row records what the sentence says given which world is actual; it fixes what &lsquo;water&rsquo; refers to. The
        actual row gives necessity. The diagonal asks, for each world, what the sentence would say and whether it would be
        true if that world were actual; truth all along it is the two-dimensionalist&rsquo;s mark of the a priori.
        &lsquo;Water is H₂O&rsquo; is necessary but not a priori.
      </figcaption>
    </figure>
  );
}
