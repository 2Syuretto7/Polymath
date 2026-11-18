"use client";

import { useState } from "react";

type T = "yes" | "no" | "uncertain";
const CAPS = ["sentience", "preferences about the future", "self-awareness", "rational moral agency"];
const BEINGS: { name: string; c: T[] }[] = [
  { name: "adult human", c: ["yes", "yes", "yes", "yes"] },
  { name: "newborn infant", c: ["yes", "uncertain", "no", "no"] },
  { name: "chimpanzee", c: ["yes", "yes", "yes", "no"] },
  { name: "pig", c: ["yes", "yes", "uncertain", "no"] },
  { name: "chicken", c: ["yes", "no", "no", "no"] },
  { name: "fish", c: ["yes", "no", "no", "no"] },
  { name: "oyster", c: ["uncertain", "no", "no", "no"] },
  { name: "tree", c: ["no", "no", "no", "no"] },
];
const VIEWS = [
  { name: "Bentham and Singer", cap: 0, line: "‘The question is not, Can they reason? nor, Can they talk? but, Can they suffer?’" },
  { name: "Kant", cap: 3, line: "Only rational beings are ends in themselves; duties concerning animals are indirect duties to ourselves." },
  { name: "Regan", cap: 1, line: "‘Subjects-of-a-life’, with beliefs, desires and a welfare that matters to them, have inherent value and rights." },
];
const COL: Record<T, string> = { yes: "var(--accent)", no: "var(--text-faint)", uncertain: "var(--text-muted)" };

/** Which beings count morally depends on which capacity grounds moral status. */
export function CapacitiesViz() {
  const [v, setV] = useState(0);
  const V = VIEWS[v];
  const count = BEINGS.filter((b) => b.c[V.cap] === "yes").length;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="view">
        {VIEWS.map((q, i) => <button key={q.name} type="button" aria-pressed={v === i} className={v === i ? "seg is-on" : "seg"} onClick={() => setV(i)}>{q.name}</button>)}
      </div>
      <p style={{ fontSize: 13, margin: "6px 0" }}><strong>Criterion: {CAPS[V.cap]}.</strong> {V.line}</p>
      <div style={{ overflowX: "auto" }}>
        <table style={{ width: "100%", fontSize: 12, borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 4, color: "var(--text-muted)", fontWeight: 400 }}>being</th>
              {CAPS.map((c, j) => <th key={c} style={{ padding: 4, color: j === V.cap ? "var(--text)" : "var(--text-muted)", fontWeight: j === V.cap ? 700 : 400 }}>{c}</th>)}
            </tr>
          </thead>
          <tbody>
            {BEINGS.map((b) => {
              const counts = b.c[V.cap] === "yes";
              return (
                <tr key={b.name} style={{ borderTop: "1px solid var(--border)", background: counts ? "var(--accent-soft)" : undefined }}>
                  <td style={{ padding: 4, color: "var(--text)", fontWeight: counts ? 700 : 400 }}>{b.name}</td>
                  {b.c.map((t, j) => <td key={j} style={{ padding: 4, textAlign: "center", color: COL[t], fontWeight: j === V.cap ? 700 : 400 }}>{t}</td>)}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>{count} of {BEINGS.length} clearly count directly on this view.</p>
      <figcaption className="viz-caption">
        The cells are rough and disputed, and that is part of the debate. Notice where each view puts the newborn infant
        beside the animals: this is the argument from marginal cases.
      </figcaption>
    </figure>
  );
}
