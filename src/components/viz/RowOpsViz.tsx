"use client";

import { useState } from "react";
import { fadd, fmul, fone, fr, fstr, fzero, leadCol, toF, type FMatrix, type Frac } from "./frac";

const STARTS: { name: string; rows: number[][] }[] = [
  { name: "matrix A", rows: [[2, 4, -2, 2], [1, 2, 1, 5], [3, 6, 1, 9]] },
  { name: "matrix B", rows: [[0, 2, 4, 6], [1, 1, 1, 2], [2, 4, 6, 10]] },
];
const MULTS: Frac[] = [fr(-3), fr(-2), fr(-1), fr(-1, 2), fr(-1, 3), fr(1, 3), fr(1, 2), fr(2), fr(3)];
type Op = "swap" | "scale" | "add";
const COLS = 3;

function isEchelon(m: FMatrix) {
  let last = -1;
  let zeroSeen = false;
  for (const row of m) {
    const c = leadCol(row, COLS + 1);
    if (c === -1) { zeroSeen = true; continue; }
    if (zeroSeen || c <= last) return false;
    last = c;
  }
  return true;
}

function isReduced(m: FMatrix) {
  if (!isEchelon(m)) return false;
  return m.every((row, i) => {
    const c = leadCol(row, COLS + 1);
    if (c === -1) return true;
    return fone(row[c]) && m.every((r2, k) => k === i || fzero(r2[c]));
  });
}

/** Apply row operations yourself and watch for echelon and reduced echelon form. */
export function RowOpsViz() {
  const [k, setK] = useState(0);
  const [hist, setHist] = useState<FMatrix[]>([toF(STARTS[0].rows)]);
  const [op, setOp] = useState<Op>("add");
  const [i, setI] = useState(1);
  const [j, setJ] = useState(0);
  const [c, setC] = useState(3);
  const m = hist[hist.length - 1];
  const ech = isEchelon(m);
  const red = isReduced(m);
  const mult = MULTS[c];
  const lead = m.map((row) => leadCol(row, COLS + 1));

  const reset = (n: number) => { setK(n); setHist([toF(STARTS[n].rows)]); };
  const can = op === "scale" || i !== j;
  const apply = () => {
    if (!can) return;
    let next: FMatrix;
    if (op === "swap") next = m.map((row, r) => (r === i ? m[j] : r === j ? m[i] : row));
    else if (op === "scale") next = m.map((row, r) => (r === i ? row.map((x) => fmul(mult, x)) : row));
    else next = m.map((row, r) => (r === i ? row.map((x, q) => fadd(x, fmul(mult, m[j][q]))) : row));
    setHist([...hist, next]);
  };
  const label = op === "swap" ? `swap rows ${i + 1} and ${j + 1}` : op === "scale" ? `multiply row ${i + 1} by ${fstr(mult)}` : `add ${fstr(mult)} × row ${j + 1} to row ${i + 1}`;
  const rowPick = (val: number, set: (n: number) => void, name: string) => (
    <div className="segmented" role="group" aria-label={name}>
      {[0, 1, 2].map((r) => (
        <button key={r} type="button" className={r === val ? "seg is-on" : "seg"} aria-pressed={r === val} onClick={() => set(r)}>row {r + 1}</button>
      ))}
    </div>
  );

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Starting matrix">
        {STARTS.map((s, n) => (
          <button key={s.name} type="button" className={n === k ? "seg is-on" : "seg"} aria-pressed={n === k} onClick={() => reset(n)}>{s.name}</button>
        ))}
      </div>
      <table className="table mono" style={{ marginTop: 12, marginBottom: 8, textAlign: "right" }}>
        <thead>
          <tr><th>row</th><th>x₁</th><th>x₂</th><th>x₃</th><th style={{ borderLeft: "1px solid var(--border-strong)" }}>b</th></tr>
        </thead>
        <tbody>
          {m.map((row, r) => (
            <tr key={r}>
              <td style={{ color: "var(--text-faint)" }}>{r + 1}</td>
              {row.map((x, q) => (
                <td key={q} style={{
                  ...(q === COLS ? { borderLeft: "1px solid var(--border-strong)" } : {}),
                  ...(ech && lead[r] === q && q < COLS ? { color: "var(--accent)", fontWeight: 600 } : {}),
                }}>{fstr(x)}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mono-meta" style={{ margin: 0 }}>
        echelon form: {ech ? "yes" : "no"}; reduced echelon form: {red ? "yes" : "no"}; operations used: {hist.length - 1}
      </p>
      <div className="viz-controls" style={{ alignItems: "center" }}>
        <div className="segmented" role="group" aria-label="Kind of operation">
          {(["swap", "scale", "add"] as Op[]).map((o) => (
            <button key={o} type="button" className={o === op ? "seg is-on" : "seg"} aria-pressed={o === op} onClick={() => setOp(o)}>
              {o === "swap" ? "swap" : o === "scale" ? "scale" : "add a multiple"}
            </button>
          ))}
        </div>
      </div>
      <div className="viz-controls" style={{ alignItems: "center" }}>
        <span className="mono-meta">{op === "swap" ? "swap" : op === "scale" ? "change" : "change"}</span>
        {rowPick(i, setI, "Row to change")}
        {op !== "scale" && <><span className="mono-meta">{op === "swap" ? "with" : "using"}</span>{rowPick(j, setJ, "Other row")}</>}
      </div>
      {op !== "swap" && (
        <div className="viz-controls" style={{ alignItems: "center" }}>
          <span className="mono-meta">multiplier</span>
          <div className="segmented" role="group" aria-label="Multiplier">
            {MULTS.map((x, n) => (
              <button key={fstr(x)} type="button" className={n === c ? "seg is-on" : "seg"} aria-pressed={n === c} onClick={() => setC(n)}>{fstr(x)}</button>
            ))}
          </div>
        </div>
      )}
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" disabled={!can} onClick={apply}>{can ? `Apply: ${label}` : "Choose two different rows"}</button>
        <button type="button" className="btn" disabled={hist.length === 1} onClick={() => setHist(hist.slice(0, -1))}>Undo</button>
        <button type="button" className="btn" onClick={() => reset(k)}>Reset</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {red
          ? "Reduced echelon form: every pivot is 1 and is the only non-zero entry in its column. Read the solution straight off the rows. Is any column without a pivot?"
          : ech
            ? "Echelon form: each pivot (coloured) sits to the right of the one above, and any zero rows are at the bottom. Now scale pivots to 1 and clear the entries above them."
            : "Not yet in echelon form. Use the first row's pivot to clear the entries below it, swapping first if the pivot position holds a 0."}
      </figcaption>
    </figure>
  );
}
