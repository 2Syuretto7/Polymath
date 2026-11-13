"use client";

import { useState } from "react";

const PREDICTIONS = [
  { text: "Deaths fall when doctors wash their hands in chlorinated lime before examining patients.", actual: true },
  { text: "The ward staffed by midwives, who do no autopsies, has fewer deaths than the doctors’ ward.", actual: true },
  { text: "Women who give birth on the way to hospital, and are rarely examined, seldom fall ill.", actual: true },
  { text: "The doctors’ ward had far fewer deaths before autopsies became routine for its staff.", actual: true },
];

/** The hypothetico-deductive method, with Semmelweis on childbed fever: deduce predictions, then test them. */
export function HypoDeductViz() {
  const [res, setRes] = useState<(boolean | null)[]>(PREDICTIONS.map(() => null));
  const [aux, setAux] = useState(true);
  const failed = res.some((r) => r === false);
  const passed = res.filter((r) => r === true).length;
  const set = (i: number, v: boolean | null) => setRes(res.map((r, j) => (j === i ? v : r)));
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px", fontSize: 15 }}>
        <strong>Hypothesis:</strong> childbed fever is caused by &ldquo;cadaveric matter&rdquo; carried on the hands of doctors
        from the dissecting room.
      </p>
      <div style={{ display: "grid", gap: 6 }}>
        {PREDICTIONS.map((p, i) => (
          <div key={p.text} style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 8, alignItems: "center", padding: "6px 8px", border: "1px solid var(--border)", borderRadius: 6, background: res[i] === true ? "var(--accent-soft)" : res[i] === false ? "var(--danger-soft)" : "var(--bg)" }}>
            <span style={{ fontSize: 14 }}>{p.text}</span>
            <span style={{ display: "flex", gap: 4 }}>
              <button type="button" className={res[i] === true ? "seg is-on" : "seg"} aria-pressed={res[i] === true} onClick={() => set(i, res[i] === true ? null : true)}>observed</button>
              <button type="button" className={res[i] === false ? "seg is-on" : "seg"} aria-pressed={res[i] === false} onClick={() => set(i, res[i] === false ? null : false)}>not observed</button>
            </span>
          </div>
        ))}
      </div>
      <label style={{ display: "flex", gap: 6, alignItems: "center", marginTop: 8, fontSize: 14 }}>
        <input type="checkbox" checked={aux} onChange={(e) => setAux(e.target.checked)} />
        assume the auxiliary hypotheses hold: the washing was done properly, deaths were recorded correctly
      </label>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>
        {failed
          ? aux
            ? "a prediction failed: by modus tollens, the hypothesis or an auxiliary is false"
            : "a prediction failed, but without the auxiliaries nothing follows about the hypothesis"
          : passed === 0
            ? "test a prediction"
            : `${passed} prediction${passed === 1 ? "" : "s"} passed: the hypothesis is confirmed, not proved, since a false hypothesis can have true consequences`}
      </p>
      <figcaption className="viz-caption">
        In Vienna in the 1840s, Ignaz Semmelweis tested his hypothesis by deducing what should happen if it were true. In
        history every prediction listed here was borne out. Mark one as failed to see how refutation works, and switch off
        the auxiliaries to see why a single failure rarely settles the matter.
      </figcaption>
    </figure>
  );
}
