"use client";

import { useState } from "react";

const POOL = 200000;
const COLS = 4;
const HALVINGS = 3;
const phi = (n: number, k: number) => Math.sin(n * k);

/** Refine a subsequence of φₙ(x) = sin(nk) column by column, so that it converges at x₁, x₂, … in turn. */
function refine(steps: number) {
  let idx = Array.from({ length: POOL }, (_, i) => i + 1);
  const boxes: [number, number][] = [];
  for (let k = 1; k <= steps; k++) {
    let lo = -1, hi = 1;
    for (let h = 0; h < HALVINGS; h++) {
      const mid = (lo + hi) / 2;
      const low = idx.filter((n) => phi(n, k) < mid), high = idx.filter((n) => phi(n, k) >= mid);
      if (low.length >= high.length) { idx = low; hi = mid; } else { idx = high; lo = mid; }
    }
    boxes.push([lo, hi]);
  }
  return { idx, boxes };
}

export function DiagonalPickViz() {
  const [steps, setSteps] = useState(0);
  const { idx, boxes } = refine(steps);
  const rows = idx.slice(0, 7);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSteps(Math.min(COLS, steps + 1))} disabled={steps === COLS}>
          {steps < COLS ? `pass to a subsequence converging at x${"₁₂₃₄"[steps]}` : "all four columns refined"}
        </button>
        <button type="button" className="btn btn-ghost" onClick={() => setSteps(0)}>reset</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", margin: "8px 0", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: "2px 8px" }}>n</th>
              {Array.from({ length: COLS }, (_, k) => <th key={k} style={{ padding: "2px 8px", color: k < steps ? "var(--accent)" : "var(--text-muted)" }}>φₙ(x{"₁₂₃₄"[k]})</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((n) => (
              <tr key={n}>
                <td style={{ padding: "2px 8px" }}>{n}</td>
                {Array.from({ length: COLS }, (_, k) => (
                  <td key={k} style={{ padding: "2px 8px", textAlign: "center", background: k < steps ? "var(--accent-soft)" : "transparent" }}>{phi(n, k + 1).toFixed(3)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {steps === 0
          ? `All ${POOL} indices; the values in each column wander over [−1, 1].`
          : `${idx.length} of ${POOL} indices remain. ` + boxes.map(([a, b], k) => `At x${"₁₂₃₄"[k]}: values in [${a.toFixed(3)}, ${b.toFixed(3)}].`).join(" ")}
      </p>
      <figcaption className="viz-caption">
        Each step keeps the half of an interval holding more of the remaining indices, three times, so a column&rsquo;s
        values are trapped in an interval a quarter as wide. With infinitely many indices and infinitely many halvings the
        values would converge; taking the k-th term of the k-th subsequence, the diagonal, gives one subsequence converging
        at every xₖ at once.
      </figcaption>
    </figure>
  );
}
