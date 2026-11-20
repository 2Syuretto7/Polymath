"use client";

import { useState } from "react";

/** Features that sceptics find troubling in moral facts, and whether epistemic facts (reasons for belief) share them, on Cuneo’s account. */
export const FEATURES = [
  { name: "Categorical authority: they apply whatever one wants", moral: true, epistemic: true },
  { name: "Non-natural: not identical to any physical or psychological fact", moral: true, epistemic: true },
  { name: "Supervene on natural facts without being reducible to them", moral: true, epistemic: true },
  { name: "Subject to deep and persistent disagreement", moral: true, epistemic: true },
  { name: "Necessarily motivate whoever accepts them", moral: true, epistemic: false },
];

/** The features selected by the sceptic that epistemic facts share. */
export function shared(selected: boolean[]) {
  return FEATURES.filter((f, i) => selected[i] && f.epistemic).length;
}

/** The companions-in-guilt argument: does an argument against moral facts also defeat epistemic facts? */
export function CompanionsViz() {
  const [sel, setSel] = useState([true, true, false, false, false]);
  const chosen = FEATURES.filter((_, i) => sel[i]);
  const s = shared(sel);
  const allShared = chosen.length > 0 && s === chosen.length;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 6px" }}>Which features does the sceptic&rsquo;s argument rely on?</p>
      <div className="viz-controls" style={{ flexDirection: "column", alignItems: "flex-start" }}>
        {FEATURES.map((f, i) => (
          <label key={f.name}>
            <input type="checkbox" checked={sel[i]} onChange={() => setSel(sel.map((v, j) => (j === i ? !v : v)))} /> {f.name}
          </label>
        ))}
      </div>
      <svg viewBox="0 0 540 120" role="img" aria-label="Which features moral and epistemic facts share" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={170} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>moral facts</text>
        <text x={370} y={14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>epistemic facts</text>
        {FEATURES.map((f, i) => (
          <g key={f.name} opacity={sel[i] ? 1 : 0.3}>
            <text x={20} y={36 + i * 19} style={{ fill: "var(--text)", fontSize: 11 }}>{i + 1}</text>
            <circle cx={170} cy={32 + i * 19} r={7} style={{ fill: f.moral ? "var(--danger)" : "var(--bg-subtle)", stroke: "var(--danger)" }} />
            <circle cx={370} cy={32 + i * 19} r={7} style={{ fill: f.epistemic ? "var(--danger)" : "var(--bg-subtle)", stroke: "var(--danger)" }} />
          </g>
        ))}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Selected features: {chosen.length}; shared by epistemic facts: {s}. {chosen.length === 0 ? "Choose at least one feature." : allShared ? "The argument applies equally to epistemic facts: if it shows there are no moral facts, it shows there are no reasons for belief, including for believing its conclusion." : "The argument relies on a feature epistemic facts lack, so the parity breaks and the companion escapes."}
      </p>
      <figcaption className="viz-caption">
        Terence Cuneo, in <em>The Normative Web</em> (2007), argued that epistemic facts, about what one has reason to
        believe, share the features that make moral facts seem queer. If epistemic facts exist, the objection fails; if
        they do not, no one has reason to believe the sceptic. Replies try to find a feature, such as necessary
        motivation, that moral facts have and epistemic facts lack.
      </figcaption>
    </figure>
  );
}
