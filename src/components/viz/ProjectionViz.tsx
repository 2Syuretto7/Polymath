"use client";

import { useState } from "react";

const PREDICATES = ["love", "wisdom", "goodness", "power", "will", "justice", "knowledge", "mercy"];

/** Feuerbach's projection: human predicates attributed to God, and the human side emptied in turn. */
export function ProjectionViz() {
  const [given, setGiven] = useState<boolean[]>(PREDICATES.map((_, i) => i < 2));
  const [back, setBack] = useState(false);
  const n = given.filter(Boolean).length;
  const col = (title: string, items: string[], strong: boolean) => (
    <div style={{ flex: 1, minWidth: 180, border: "1px solid var(--border)", borderRadius: 8, padding: 10, background: strong ? "var(--accent-soft)" : "var(--bg-subtle)" }}>
      <p className="mono-meta" style={{ margin: "0 0 6px", textTransform: "none" }}>{title}</p>
      {items.length ? items.map((p) => <p key={p} style={{ margin: "2px 0" }}>{p}</p>) : <p style={{ margin: 0, color: "var(--text-faint)" }}>nothing left</p>}
    </div>
  );
  const human = PREDICATES.filter((_, i) => back || !given[i]).map((p) => (back ? `${p}, recognised as ours` : `${p}, finite and flawed`));
  const god = back ? [] : PREDICATES.filter((_, i) => given[i]).map((p) => `infinite ${p}`);
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6 }}>
        {PREDICATES.map((p, i) => (
          <button key={p} type="button" disabled={back} aria-pressed={given[i]} className={given[i] ? "viz-chip is-on" : "viz-chip"} onClick={() => setGiven((g) => g.map((x, j) => (j === i ? !x : x)))}>{p}</button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 10 }}>
        {col("the human being", human, back)}
        {col("God", god, !back && n > 0)}
      </div>
      <p style={{ margin: "8px 0 0" }}>
        {back
          ? "Reclaimed: the predicates were always the perfections of the human species. Theology becomes anthropology."
          : n === 0
            ? "Choose qualities to project onto God."
            : `${n} of ${PREDICATES.length} qualities projected. The richer God becomes, the poorer the human being appears.`}
      </p>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" onClick={() => setBack(!back)}>{back ? "Project again" : "Take them back"}</button>
      </div>
      <figcaption className="viz-caption">
        Feuerbach argues that religion takes the best qualities of the human species, frees them from the limits of individuals, and worships them as a separate being. The worshipper is then left with the limits alone. Recognising the projection returns the qualities to humanity.
      </figcaption>
    </figure>
  );
}
