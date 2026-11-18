"use client";

import { useState } from "react";

const f = (x: number) => x ** 3 - 2 * x - 5;
const ROOT = 2.0945514815423265;

/** Bisection for x³ − 2x − 5 on [2, 3]: the error bound halves at every step. */
export function BisectionErrorViz() {
  const [steps, setSteps] = useState(6);
  const rows: { n: number; a: number; b: number; c: number; fc: number }[] = [];
  let a = 2, b = 3;
  for (let n = 1; n <= steps; n++) {
    const c = (a + b) / 2, fc = f(c);
    rows.push({ n, a, b, c, fc });
    if (fc > 0) b = c; else a = c;
  }
  const last = rows[rows.length - 1];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>steps: <span className="mono">{steps}</span></span>
          <input type="range" min={1} max={30} step={1} value={steps} onChange={(e) => setSteps(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8, maxHeight: 300, overflowY: "auto" }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13, minWidth: 480 }}>
          <thead>
            <tr style={{ color: "var(--text-muted)" }}>
              {["n", "a", "b", "midpoint c", "sign of f(c)", "bound (b − a)/2", "true error"].map((h) => <th key={h} style={{ textAlign: "right", padding: "3px 6px" }}>{h}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.n} style={{ borderTop: "1px solid var(--border)" }}>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{r.n}</td>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{r.a.toFixed(7)}</td>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{r.b.toFixed(7)}</td>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{r.c.toFixed(7)}</td>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{r.fc > 0 ? "+" : "−"}</td>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{((r.b - r.a) / 2).toExponential(2)}</td>
                <td style={{ textAlign: "right", padding: "3px 6px" }}>{Math.abs(r.c - ROOT).toExponential(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ fontSize: 14, marginTop: 8, fontWeight: 700 }}>
        after {steps} steps: root lies within {((last.b - last.a) / 2).toExponential(2)} of {last.c.toFixed(8)}
      </div>
      <figcaption className="viz-caption">
        f(2) = −1 and f(3) = 16, so f changes sign on [2, 3] and, being continuous, has a root there. Each step evaluates f
        at the midpoint and keeps the half on which the sign still changes. The guaranteed bound halves every time, about
        one decimal digit every 3.3 steps, however awkward f is; the true error wanders below the bound.
      </figcaption>
    </figure>
  );
}
