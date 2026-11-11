"use client";

import { useState } from "react";

const PRESETS: { name: string; m: number[][] }[] = [
  { name: "with two zeros", m: [[1, 2, 0], [3, 1, 2], [0, 4, 1]] },
  { name: "row 2 nearly empty", m: [[2, -1, 3], [0, 0, 5], [4, 1, -2]] },
];

const minor = (m: number[][], i: number, j: number) => {
  const r = m.filter((_, a) => a !== i).map((row) => row.filter((_, b) => b !== j));
  return { r, d: r[0][0] * r[1][1] - r[0][1] * r[1][0] };
};
const f = (x: number) => (x < 0 ? `−${-x}` : String(x));
const pf = (x: number) => (x < 0 ? `(${f(x)})` : f(x));

/** Expand a 3 by 3 determinant along any row or column, one cofactor at a time. */
export function CofactorViz() {
  const [k, setK] = useState(0);
  const [line, setLine] = useState<{ row: boolean; n: number }>({ row: true, n: 0 });
  const [pick, setPick] = useState(0);
  const m = PRESETS[k].m;
  const cells = [0, 1, 2].map((t) => (line.row ? [line.n, t] : [t, line.n]));
  const terms = cells.map(([i, j]) => {
    const sign = (i + j) % 2 === 0 ? 1 : -1;
    const mi = minor(m, i, j);
    return { i, j, sign, a: m[i][j], mi, C: sign * mi.d, term: m[i][j] * sign * mi.d };
  });
  const det = terms.reduce((s, t) => s + t.term, 0);
  const [pi, pj] = cells[pick];
  const T = terms[pick];
  const lines = [...[0, 1, 2].map((n) => ({ row: true, n })), ...[0, 1, 2].map((n) => ({ row: false, n }))];

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Matrix">
        {PRESETS.map((p, i) => (
          <button key={p.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => { setK(i); setPick(0); }}>{p.name}</button>
        ))}
      </div>
      <div className="viz-controls" style={{ alignItems: "center" }}>
        <span className="mono-meta">expand along</span>
        <div className="segmented" role="group" aria-label="Row or column to expand along">
          {lines.map((l) => {
            const on = l.row === line.row && l.n === line.n;
            return (
              <button key={`${l.row}${l.n}`} type="button" className={on ? "seg is-on" : "seg"} aria-pressed={on} onClick={() => { setLine(l); setPick(0); }}>
                {l.row ? "row" : "column"} {l.n + 1}
              </button>
            );
          })}
        </div>
      </div>
      <div style={{ display: "flex", gap: 24, flexWrap: "wrap", alignItems: "flex-start", marginTop: 12 }}>
        <table className="table mono" style={{ margin: 0, textAlign: "right", width: "auto" }} aria-label="The matrix, with the chosen entry's row and column struck out">
          <tbody>
            {m.map((row, i) => (
              <tr key={i}>
                {row.map((x, j) => {
                  const chosen = i === pi && j === pj;
                  const out = !chosen && (i === pi || j === pj);
                  const inLine = line.row ? i === line.n : j === line.n;
                  return (
                    <td key={j} style={{
                      padding: "8px 14px",
                      color: chosen ? "var(--accent)" : out ? "var(--text-faint)" : "var(--text)",
                      fontWeight: chosen || inLine ? 600 : 400,
                      textDecoration: out ? "line-through" : undefined,
                      background: inLine ? "var(--accent-soft)" : undefined,
                    }}>{f(x)}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ flex: "1 1 240px" }}>
          <p className="mono-meta" style={{ margin: "0 0 6px" }}>sign pattern</p>
          <p className="mono" style={{ margin: 0, lineHeight: 1.6 }}>+ − +<br />− + −<br />+ − +</p>
        </div>
      </div>
      <div className="viz-controls">
        {terms.map((t, n) => (
          <button key={n} type="button" className={n === pick ? "viz-chip is-on" : "viz-chip"} aria-pressed={n === pick} onClick={() => setPick(n)}>
            entry ({t.i + 1}, {t.j + 1})
          </button>
        ))}
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>minor M{T.i + 1}{T.j + 1}</td><td>det [{T.mi.r.map((r) => r.map(f).join(" ")).join("; ")}] = {f(T.mi.r[0][0])}·{pf(T.mi.r[1][1])} − {pf(T.mi.r[0][1])}·{pf(T.mi.r[1][0])} = {f(T.mi.d)}</td></tr>
          <tr><td>cofactor C{T.i + 1}{T.j + 1}</td><td>{T.sign > 0 ? "+" : "−"}{pf(T.mi.d)} = {f(T.C)}</td></tr>
          <tr><td>expansion</td><td>{terms.map((t) => `${pf(t.a)}·${pf(t.C)}`).join(" + ")} = {f(det)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {`Entry (${T.i + 1}, ${T.j + 1}) is ${f(T.a)}. Strike out its row and column to get the minor, then attach the sign ${T.sign > 0 ? "+" : "−"} from the chessboard pattern. `}
        {`Every one of the six rows and columns gives the same total, ${f(det)}. `}
        {terms.some((t) => t.a === 0) ? "Zero entries contribute nothing, so expanding along a line with zeros saves work." : "Look for a row or column with zeros: its terms vanish and the work shrinks."}
      </figcaption>
    </figure>
  );
}
