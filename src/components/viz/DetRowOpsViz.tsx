"use client";

import { useState } from "react";
import { fadd, fmul, fr, fstr, fsub, fzero, toF, type FMatrix, type Frac } from "./frac";

type Op = "swap" | "scale" | "add";
const START = [[2, 1, 1], [4, -6, 0], [-2, 7, 2]];
const MULTS = [fr(-2), fr(-1), fr(-1, 2), fr(1, 2), fr(2), fr(3)];

export function det3(m: FMatrix): Frac {
  const [[a, b, c], [d, e, f], [g, h, i]] = m;
  const t1 = fmul(a, fsub(fmul(e, i), fmul(f, h)));
  const t2 = fmul(b, fsub(fmul(d, i), fmul(f, g)));
  const t3 = fmul(c, fsub(fmul(d, h), fmul(e, g)));
  return fadd(fsub(t1, t2), t3);
}

const upper = (m: FMatrix) => fzero(m[1][0]) && fzero(m[2][0]) && fzero(m[2][1]);

/** Apply row operations to a 3 by 3 matrix and track how each one changes the determinant. */
export function DetRowOpsViz() {
  const [hist, setHist] = useState<{ m: FMatrix; note: string }[]>([{ m: toF(START), note: "start" }]);
  const [op, setOp] = useState<Op>("add");
  const [i, setI] = useState(1);
  const [j, setJ] = useState(0);
  const [c, setC] = useState(0);
  const m = hist[hist.length - 1].m;
  const d = det3(m);
  const d0 = det3(hist[0].m);
  const mult = MULTS[c];
  const can = op === "scale" || i !== j;
  const tri = upper(m);

  const apply = () => {
    if (!can) return;
    let next: FMatrix, note: string;
    if (op === "swap") {
      next = m.map((row, r) => (r === i ? m[j] : r === j ? m[i] : row));
      note = `swapped rows ${i + 1} and ${j + 1}: determinant changes sign`;
    } else if (op === "scale") {
      next = m.map((row, r) => (r === i ? row.map((x) => fmul(mult, x)) : row));
      note = `multiplied row ${i + 1} by ${fstr(mult)}: determinant multiplied by ${fstr(mult)}`;
    } else {
      next = m.map((row, r) => (r === i ? row.map((x, q) => fadd(x, fmul(mult, m[j][q]))) : row));
      note = `added ${fstr(mult)} × row ${j + 1} to row ${i + 1}: determinant unchanged`;
    }
    setHist([...hist, { m: next, note }]);
  };
  const rowPick = (val: number, set: (n: number) => void, name: string) => (
    <div className="segmented" role="group" aria-label={name}>
      {[0, 1, 2].map((r) => (
        <button key={r} type="button" className={r === val ? "seg is-on" : "seg"} aria-pressed={r === val} onClick={() => set(r)}>row {r + 1}</button>
      ))}
    </div>
  );
  // the factor the determinant has been multiplied by since the start
  const factor = fzero(d0) ? null : fr(d.n * d0.d, d.d * d0.n);

  return (
    <figure className="viz">
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", alignItems: "flex-start" }}>
        <table className="table mono" style={{ margin: 0, textAlign: "right", width: "auto" }}>
          <tbody>
            {m.map((row, r) => (
              <tr key={r}>
                {row.map((x, q) => (
                  <td key={q} style={{ padding: "8px 12px", ...(tri && r === q ? { color: "var(--accent)", fontWeight: 600 } : {}) }}>{fstr(x)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ flex: "1 1 220px" }}>
          <p className="mono" style={{ margin: 0, fontSize: 18 }}>det = {fstr(d)}</p>
          <p className="mono-meta" style={{ margin: "6px 0 0" }}>
            original determinant {fstr(d0)}{factor && !(factor.n === 1 && factor.d === 1) ? `; now multiplied by ${fstr(factor)}` : ""}
          </p>
          <ol className="mono-meta" style={{ margin: "8px 0 0", paddingLeft: 18 }}>
            {hist.slice(1).map((h, n) => <li key={n}>{h.note}</li>)}
          </ol>
        </div>
      </div>
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
        <span className="mono-meta">{op === "swap" ? "swap" : "change"}</span>
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
        <button type="button" className="btn btn-primary" disabled={!can} onClick={apply}>{can ? "Apply" : "Choose two different rows"}</button>
        <button type="button" className="btn" disabled={hist.length === 1} onClick={() => setHist(hist.slice(0, -1))}>Undo</button>
        <button type="button" className="btn" onClick={() => setHist(hist.slice(0, 1))}>Reset</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {tri
          ? `The matrix is upper triangular, so its determinant is the product of the diagonal entries: ${m.map((r, n) => fstr(r[n])).join(" × ")} = ${fstr(d)}.${fstr(d) !== fstr(d0) ? ` Undo the swaps and scalings you made to recover the original ${fstr(d0)}.` : ""}`
          : "Adding a multiple of one row to another never changes the determinant. Use it to clear the entries below the diagonal, try the other operations, and watch the record of how the determinant has changed."}
      </figcaption>
    </figure>
  );
}

