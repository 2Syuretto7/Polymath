"use client";

import { useState } from "react";

const INQUIRIES = [
  { label: "Forecasting crop yields", interest: "technical", medium: "work", science: "the empirical-analytic sciences", aim: "predict and control natural processes" },
  { label: "Reading the Bhagavad Gita", interest: "practical", medium: "language", science: "the historical-hermeneutic sciences", aim: "reach mutual understanding within and across traditions" },
  { label: "Critique of an ideology of caste", interest: "emancipatory", medium: "power", science: "critical social science", aim: "free people from dependence on powers that seem natural but are not" },
  { label: "Psychoanalysis", interest: "emancipatory", medium: "power", science: "critical self-reflection", aim: "dissolve compulsions by bringing their origins to awareness" },
];

const COLS = ["technical", "practical", "emancipatory"];

/** Habermas’s three knowledge-constitutive interests and the kinds of inquiry they ground. */
export function KnowledgeInterestsViz() {
  const [k, setK] = useState(0);
  const I = INQUIRIES[k];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="inquiry">
        {INQUIRIES.map((q, i) => (
          <button key={q.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{q.label}</button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 8, marginTop: 12 }}>
        {COLS.map((c) => {
          const on = c === I.interest;
          return (
            <div key={c} style={{ padding: "10px 12px", borderRadius: 8, border: `2px solid ${on ? "var(--accent)" : "var(--border)"}`, background: on ? "var(--accent-soft)" : "var(--surface)" }}>
              <div style={{ fontWeight: 700 }}>{c} interest</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", marginTop: 4 }}>
                medium: {c === "technical" ? "work" : c === "practical" ? "language" : "power"}
              </div>
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 12 }}>
        {I.label} belongs to {I.science}. It is guided by the {I.interest} interest, rooted in the medium of {I.medium}: to {I.aim}.
      </p>
      <figcaption className="viz-caption">
        In <em>Knowledge and Human Interests</em> (1968), Habermas argues against positivism that no knowledge is
        interest-free. Each kind of inquiry is shaped by a deep interest of the human species, and positivism errs by
        treating the technical interest as the whole of reason.
      </figcaption>
    </figure>
  );
}
