"use client";

import { useState } from "react";

type J = { name: string; xl: string; yl: string; p: number[][] };
// p[x][y] for x, y in 1..4, in sixteenths
const minmax = Array.from({ length: 4 }, (_, i) => Array.from({ length: 4 }, (_, j) => (j < i ? 0 : j === i ? 1 : 2)));
const indep = Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 1));
const JS: J[] = [
  { name: "two separate dice", xl: "X = first die", yl: "Y = second die", p: indep },
  { name: "smaller and larger", xl: "X = smaller roll", yl: "Y = larger roll", p: minmax },
];

/** A joint table for two four-sided dice: marginals by summing, conditionals by rescaling a row. */
export function JointTableViz() {
  const [ji, setJi] = useState(1);
  const [row, setRow] = useState<number | null>(1);
  const J = JS[ji];
  const px = J.p.map((r) => r.reduce((s, v) => s + v, 0));
  const py = [0, 1, 2, 3].map((j) => J.p.reduce((s, r) => s + r[j], 0));
  const cell: React.CSSProperties = { padding: "6px 8px", textAlign: "center", border: "1px solid var(--border)", textTransform: "none" };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Pair of variables">
        {JS.map((x, i) => <button key={x.name} type="button" aria-pressed={ji === i} className={ji === i ? "seg is-on" : "seg"} onClick={() => setJi(i)}>{x.name}</button>)}
      </div>
      <p style={{ margin: "8px 0" }}>Roll two fair four-sided dice. {J.xl}, {J.yl}. Entries are in sixteenths. Click a row to condition on that value of X.</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table mono" style={{ borderCollapse: "collapse", margin: "0 auto" }}>
          <thead>
            <tr><th style={cell}>X \ Y</th>{[1, 2, 3, 4].map((y) => <th key={y} style={cell}>{y}</th>)}<th style={cell}>P(X = x)</th></tr>
          </thead>
          <tbody>
            {J.p.map((r, i) => (
              <tr key={i} onClick={() => setRow(row === i ? null : i)} style={{ cursor: "pointer", background: row === i ? "var(--accent-soft)" : undefined }}>
                <th style={cell}>{i + 1}</th>
                {r.map((v, j) => <td key={j} style={{ ...cell, color: v ? "var(--text)" : "var(--text-faint)" }}>{v}</td>)}
                <td style={{ ...cell, fontWeight: 600 }}>{px[i]}</td>
              </tr>
            ))}
            <tr><th style={cell}>P(Y = y)</th>{py.map((v, j) => <td key={j} style={{ ...cell, fontWeight: 600 }}>{v}</td>)}<td style={cell}>16</td></tr>
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "8px 0 4px" }}>
        {row === null ? "Click a row to see a conditional distribution." : `P(Y = y | X = ${row + 1}): ${J.p[row].map((v, j) => `y=${j + 1}: ${v}/${px[row]}`).join(", ")}`}
      </p>
      <p className="mono" style={{ margin: "4px 0" }}>
        {J.p.every((r, i) => r.every((v, j) => v * 16 === px[i] * py[j])) ? "Every entry equals P(X = x)P(Y = y): independent." : "Some entries differ from P(X = x)P(Y = y): dependent."}
      </p>
      <figcaption className="viz-caption">
        The margins are row and column sums, which is where the word &ldquo;marginal&rdquo; comes from. A conditional distribution is one row divided by its total. The variables are independent exactly when every entry is the product of its two margins.
      </figcaption>
    </figure>
  );
}
