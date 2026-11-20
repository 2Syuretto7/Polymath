"use client";

import { useState } from "react";

const SCEN = [
  { label: "Earth", watery: "H₂O", evening: "Venus", morning: "Venus" },
  { label: "Twin Earth", watery: "XYZ", evening: "Venus", morning: "Venus" },
  { label: "Mars world", watery: "H₂O", evening: "Mars", morning: "Venus" },
];
type S = (typeof SCEN)[number];

/** Each sentence gives a truth value for a scenario r considered as actual and a world c considered as counterfactual. */
export const SENTS: { label: string; text: string; v: (r: S, c: S) => boolean }[] = [
  { label: "Water is H₂O", text: "Water is H₂O.", v: (r) => r.watery === "H₂O" },
  { label: "Hesperus is Phosphorus", text: "Hesperus is Phosphorus.", v: (r) => r.evening === r.morning },
  { label: "Water is the watery stuff", text: "Water is the clear drinkable stuff in the lakes.", v: (r, c) => r.watery === c.watery },
  { label: "With ‘actually’", text: "Water is the stuff that actually fills the lakes.", v: () => true },
];
export const rowCount = (k: number, r: number) => SCEN.filter((c) => SENTS[k].v(SCEN[r], c)).length;
export const diagonal = (k: number) => SCEN.map((s) => SENTS[k].v(s, s));

/** A three-by-three two-dimensional matrix, showing the diagonal and the actual row. */
export function DiagonalIntensionViz() {
  const [k, setK] = useState(0);
  const s = SENTS[k];
  const X0 = 150, cw = 120, Y0 = 52, rh = 40;
  const necessary = SCEN.every((c) => s.v(SCEN[0], c)), apriori = diagonal(k).every(Boolean);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="sentence">
        {SENTS.map((x, i) => <button key={x.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{x.label}</button>)}
      </div>
      <p style={{ margin: "10px 0 0", fontWeight: 600 }}>{s.text}</p>
      <svg viewBox="0 0 520 190" role="img" aria-label="Truth values for scenarios considered as actual and as counterfactual" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <text x={X0 + 1.5 * cw} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>considered as counterfactual</text>
        {SCEN.map((c, j) => <text key={c.label} x={X0 + cw * j + cw / 2} y={38} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{c.label}</text>)}
        <text x={14} y={Y0 + 1.5 * rh} transform={`rotate(-90 14 ${Y0 + 1.5 * rh})`} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>considered as actual</text>
        {SCEN.map((r, i) => (
          <g key={r.label}>
            <text x={X0 - 10} y={Y0 + rh * i + rh / 2 + 4} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>{r.label}</text>
            {SCEN.map((c, j) => {
              const v = s.v(r, c), diag = i === j;
              return (
                <g key={c.label}>
                  <rect x={X0 + cw * j + 3} y={Y0 + rh * i + 3} width={cw - 6} height={rh - 6} rx={6} style={{ fill: v ? "var(--success-soft)" : "var(--danger-soft)", stroke: diag ? "var(--accent)" : i === 0 ? "var(--text-muted)" : "var(--border)", strokeWidth: diag ? 2.5 : i === 0 ? 1.5 : 1 }} />
                  <text x={X0 + cw * j + cw / 2} y={Y0 + rh * i + rh / 2 + 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{v ? "true" : "false"}</text>
                </g>
              );
            })}
          </g>
        ))}
        <text x={X0} y={182} style={{ fill: "var(--accent)", fontSize: 11 }}>blue outline: the diagonal (epistemic intension)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Earth row (subjunctive intension): {necessary ? "true throughout, so necessary" : "not true throughout, so contingent"}. Diagonal: {apriori ? "true throughout, so a priori" : "not true throughout, so a posteriori"}.
      </p>
      <figcaption className="viz-caption">
        Each row fixes which scenario is actual, and so what &lsquo;water&rsquo; and &lsquo;Hesperus&rsquo; pick out; the
        columns then evaluate the sentence in other possible worlds. On Chalmers&rsquo;s account a sentence is necessary when
        the actual row is all true, and a priori when the diagonal is all true. Adding &lsquo;actually&rsquo; ties the
        description to the row, which is why that sentence comes out both necessary and a priori.
      </figcaption>
    </figure>
  );
}
