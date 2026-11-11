"use client";

import { useState } from "react";

type Cell = { premises: string[]; conclusion: string } | null;

/** Rows: premises all true, then some premise false. Columns: conclusion true, then false. */
const GRID: Record<"valid" | "invalid", Cell[][]> = {
  valid: [
    [
      { premises: ["All cats are mammals.", "All mammals are animals."], conclusion: "All cats are animals." },
      null,
    ],
    [
      { premises: ["All cats are fish.", "All fish are mammals."], conclusion: "All cats are mammals." },
      { premises: ["All cats are fish.", "All fish have gills."], conclusion: "All cats have gills." },
    ],
  ],
  invalid: [
    [
      { premises: ["All cats are mammals.", "All dogs are mammals."], conclusion: "No cat is a dog." },
      { premises: ["All cats are mammals.", "All dogs are mammals."], conclusion: "All cats are dogs." },
    ],
    [
      { premises: ["All cats are fish.", "All dogs are fish."], conclusion: "No cat is a dog." },
      { premises: ["All cats are fish.", "All dogs are fish."], conclusion: "All cats are dogs." },
    ],
  ],
};

const ROWS = ["Premises all true", "Some premise false"];
const COLS = ["Conclusion true", "Conclusion false"];

/** Valid and invalid arguments sorted by the truth of their premises and conclusion. */
export function ValidityGridViz() {
  const [kind, setKind] = useState<"valid" | "invalid">("valid");
  const [pick, setPick] = useState<[number, number]>([0, 0]);
  const grid = GRID[kind];
  const cell = grid[pick[0]][pick[1]];

  const caption = (() => {
    const [r, c] = pick;
    if (kind === "valid" && r === 0 && c === 1)
      return "This is the one empty box. A valid argument can never have true premises and a false conclusion: that is exactly what valid means.";
    if (kind === "valid" && r === 0)
      return "Valid with true premises: this argument is sound, so its conclusion is guaranteed to be true.";
    if (kind === "valid")
      return `Valid, but a premise is false, so the argument is not sound. ${c === 0 ? "The conclusion happens to be true anyway; validity alone does not tell you." : "Validity passed the falsehood straight through to the conclusion."}`;
    if (r === 0 && c === 1)
      return "True premises, false conclusion: this instance proves the argument's form is invalid. Here the premises plainly fail to support the conclusion.";
    if (r === 0)
      return "Everything here is true, yet the argument is invalid: the premises say nothing about whether cats can be dogs. True parts do not make a good argument.";
    return "Invalid and with a false premise: bad on both counts.";
  })();

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }} role="group" aria-label="Kind of argument">
        {(["valid", "invalid"] as const).map((k) => (
          <button key={k} type="button" className={k === kind ? "btn btn-primary" : "btn"} aria-pressed={k === kind} onClick={() => setKind(k)}>
            {k === "valid" ? "Valid arguments" : "Invalid arguments"}
          </button>
        ))}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto 1fr 1fr", gap: 6, marginTop: 12, fontSize: 13 }}>
        <span />
        {COLS.map((c) => <span key={c} className="mono-meta" style={{ textAlign: "center" }}>{c}</span>)}
        {ROWS.map((rowLabel, r) => (
          <div key={rowLabel} style={{ display: "contents" }}>
            <span className="mono-meta" style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", textAlign: "center" }}>{rowLabel}</span>
            {[0, 1].map((c) => {
              const on = pick[0] === r && pick[1] === c;
              const empty = grid[r][c] === null;
              return (
                <button key={c} type="button" aria-pressed={on} onClick={() => setPick([r, c])}
                  aria-label={`${rowLabel}, ${COLS[c].toLowerCase()}`}
                  style={{
                    minHeight: 92, padding: 10, textAlign: "left", cursor: "pointer", borderRadius: "var(--radius)",
                    border: `1px ${empty ? "dashed" : "solid"} ${on ? "var(--accent)" : "var(--border-strong)"}`,
                    background: on ? "var(--accent-soft)" : "var(--surface)", color: "var(--text)", font: "inherit",
                  }}>
                  {empty ? (
                    <span style={{ color: "var(--text-muted)" }}>Impossible</span>
                  ) : (
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: 14 }}>
                      {grid[r][c]!.premises.join(" ")} <strong>So {grid[r][c]!.conclusion.charAt(0).toLowerCase() + grid[r][c]!.conclusion.slice(1)}</strong>
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        ))}
      </div>
      {cell && (
        <ol style={{ margin: "12px 0 0", fontFamily: "var(--font-serif)", fontSize: 15 }}>
          {cell.premises.map((p) => <li key={p}>{p}</li>)}
          <li style={{ listStyle: "none", marginLeft: -18 }}><strong>So</strong> {cell.conclusion.charAt(0).toLowerCase() + cell.conclusion.slice(1)}</li>
        </ol>
      )}
      <figcaption className="viz-caption" aria-live="polite">{caption}</figcaption>
    </figure>
  );
}
