"use client";

import { useState } from "react";

const T = [
  [1, 0, 1, 1, 0, 1],
  [0, 0, 1, 0, 1, 1],
  [1, 1, 1, 0, 0, 0],
  [1, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 0, 1],
  [1, 1, 0, 0, 1, 1],
];

/** If a program H decided halting, the program D that does the opposite on the diagonal could not be in the list. */
export function HaltDiagonalViz() {
  const [built, setBuilt] = useState(false);
  const [pick, setPick] = useState(0);
  const cell = (h: number) => (h ? "halts" : "loops");
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        <button type="button" className={built ? "btn btn-ghost" : "btn btn-primary"} onClick={() => setBuilt(!built)}>{built ? "Hide D" : "Build D from the diagonal"}</button>
      </div>
      <table className="mono" style={{ borderCollapse: "collapse", fontSize: 12, marginTop: 8 }}>
        <thead>
          <tr><th style={{ padding: 4 }}>program \ input</th>{T.map((_, j) => <th key={j} style={{ padding: 4 }}>{j}</th>)}</tr>
        </thead>
        <tbody>
          {T.map((row, i) => (
            <tr key={i}>
              <th style={{ padding: 4 }}>P{i}</th>
              {row.map((h, j) => (
                <td key={j} style={{ padding: "4px 6px", border: "1px solid var(--border)", background: i === j && built ? "var(--accent-soft)" : "transparent", color: h ? "var(--text)" : "var(--text-muted)", fontWeight: i === j && built ? 700 : 400 }}>{cell(h)}</td>
              ))}
            </tr>
          ))}
          {built && (
            <tr>
              <th style={{ padding: 4, color: "var(--danger)" }}>D</th>
              {T.map((row, j) => (
                <td key={j} style={{ padding: "4px 6px", border: "1px solid var(--danger)", color: "var(--danger)", fontWeight: 700 }}>{cell(1 - row[j])}</td>
              ))}
            </tr>
          )}
        </tbody>
      </table>
      {built && (
        <>
          <div className="segmented" role="group" aria-label="compare D with" style={{ marginTop: 8 }}>
            {T.map((_, i) => <button key={i} type="button" aria-pressed={pick === i} className={pick === i ? "seg is-on" : "seg"} onClick={() => setPick(i)}>is D = P{i}?</button>)}
          </div>
          <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
            No: on input {pick}, P{pick} {cell(T[pick][pick])} but D {cell(1 - T[pick][pick])}.
          </p>
        </>
      )}
      <figcaption className="viz-caption">
        D runs H on (n, n) and does the opposite: if H says P<sub>n</sub> halts on n, D loops; otherwise D halts. D differs
        from every program in the list on the diagonal. But D is itself a program, so it must be in the list. The only way
        out is that H does not exist.
      </figcaption>
    </figure>
  );
}
