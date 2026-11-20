"use client";

import { useState } from "react";

const PROPS = [
  { p: "It looks to me as if there is a red apple on the table.", good: { ek: true, int: true }, bad: { ek: true, int: true } },
  { p: "There is a red apple on the table.", good: { ek: true, int: false }, bad: { ek: false, int: false } },
  { p: "I see that there is a red apple on the table.", good: { ek: true, int: false }, bad: { ek: false, int: false } },
  { p: "My eyes are working normally.", good: { ek: false, int: false }, bad: { ek: false, int: false } },
];

/** Evidence in a good case and a matching bad case, on Williamson's E = K and on a phenomenal conception. */
export function EvidenceSetViz() {
  const [bad, setBad] = useState(false);
  const [view, setView] = useState<"ek" | "int">("ek");
  const inE = PROPS.map((r) => (bad ? r.bad : r.good)[view]);
  const appleInE = inE[1];
  const pr = appleInE ? 1 : 0.95;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="case">
        <button type="button" aria-pressed={!bad} className={!bad ? "seg is-on" : "seg"} onClick={() => setBad(false)}>Good case: a real apple</button>
        <button type="button" aria-pressed={bad} className={bad ? "seg is-on" : "seg"} onClick={() => setBad(true)}>Bad case: a perfect hallucination</button>
      </div>
      <div className="segmented" role="group" aria-label="view" style={{ marginTop: 8 }}>
        <button type="button" aria-pressed={view === "ek"} className={view === "ek" ? "seg is-on" : "seg"} onClick={() => setView("ek")}>E = K (Williamson)</button>
        <button type="button" aria-pressed={view === "int"} className={view === "int" ? "seg is-on" : "seg"} onClick={() => setView("int")}>Evidence is how things seem</button>
      </div>
      <table style={{ borderCollapse: "collapse", marginTop: 12, width: "100%" }}>
        <tbody>
          {PROPS.map((r, i) => (
            <tr key={r.p} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: "6px 8px" }}>{r.p}</td>
              <td style={{ padding: "6px 8px", fontWeight: 700, whiteSpace: "nowrap", color: inE[i] ? "var(--success)" : "var(--text-muted)" }}>{inE[i] ? "in evidence" : "not in evidence"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Probability of &lsquo;there is a red apple&rsquo; on this evidence: {pr.toFixed(2)}{appleInE ? " (it is itself part of the evidence)." : " (from how things look, given a prior on which looks are reliable)."}
      </p>
      <figcaption className="viz-caption">
        On E = K, one&rsquo;s evidence is exactly what one knows. In the good case that includes the apple itself; in the
        bad case, which feels the same from the inside, it does not. So subjects who cannot tell their cases apart can
        have different evidence. On the rival view, evidence is fixed by how things seem, and the two cases match.
      </figcaption>
    </figure>
  );
}
