"use client";

import { useState } from "react";

/** Sections over U of the constant presheaf and of its sheafification, the locally constant functions, with values in ℝ. */
export function sectionDims(chosen: boolean[]) {
  const comps = chosen.filter(Boolean).length;
  return { presheaf: comps > 0 ? 1 : 0, sheaf: comps };
}

const LAB = ["I₁", "I₂", "I₃", "I₄"];

/** The constant presheaf fails to glue across disjoint pieces; its sheafification, the locally constant functions, does not. */
export function ConstantSheafViz() {
  const [chosen, setChosen] = useState([true, false, true, false]);
  const [vals, setVals] = useState([1, 2, 3, 4]);
  const d = sectionDims(chosen);
  const used = chosen.map((c, i) => (c ? vals[i] : null)).filter((v) => v !== null) as number[];
  const constant = used.every((v) => v === used[0]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="open set">
        {LAB.map((l, i) => <button key={l} type="button" aria-pressed={chosen[i]} className={chosen[i] ? "seg is-on" : "seg"} onClick={() => setChosen((c) => c.map((v, j) => (j === i ? !v : v)))}>include {l}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="Four disjoint intervals, an open set made of some of them, and a function on it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {LAB.map((l, i) => {
          const x = 30 + i * 125;
          return (
            <g key={l} style={{ cursor: chosen[i] ? "pointer" : "default" }} onClick={() => chosen[i] && setVals((v) => v.map((w, j) => (j === i ? (w % 4) + 1 : w)))}>
              <line x1={x} y1={130} x2={x + 95} y2={130} style={{ stroke: chosen[i] ? "var(--accent)" : "var(--border-strong)", strokeWidth: chosen[i] ? 5 : 2 }} />
              <text x={x + 47} y={152} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>{l}</text>
              {chosen[i] && (
                <>
                  <line x1={x} y1={120 - vals[i] * 22} x2={x + 95} y2={120 - vals[i] * 22} style={{ stroke: "var(--success)", strokeWidth: 3 }} />
                  <text x={x + 47} y={112 - vals[i] * 22} textAnchor="middle" style={{ fill: "var(--success)", fontSize: 12 }}>value {vals[i]} (click)</text>
                </>
              )}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        U has {d.sheaf} component{d.sheaf === 1 ? "" : "s"}. Constant presheaf: sections form a space of dimension {d.presheaf}. Sheafification (locally constant functions): dimension {d.sheaf}. The function shown is {used.length === 0 ? "empty" : constant ? "constant, a section of both" : "locally constant but not constant, a section of the sheaf only"}.
      </p>
      <figcaption className="viz-caption">
        The constant presheaf assigns ℝ to every non-empty open set. On a set with two components, the constants 1 and 2 on
        the separate pieces agree on the empty overlap but cannot be glued into one constant. Sheafification adds exactly
        the missing sections: the locally constant functions, one free value for each component.
      </figcaption>
    </figure>
  );
}
