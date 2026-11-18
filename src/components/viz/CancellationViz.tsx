"use client";

import { useState } from "react";

const KS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/** Catastrophic cancellation: (1 − cos x)/x² computed two ways in double precision. */
export function CancellationViz() {
  const [k, setK] = useState(5);
  const rows = KS.map((kk) => {
    const x = 10 ** -kk;
    const naive = (1 - Math.cos(x)) / (x * x);
    const stable = (2 * Math.sin(x / 2) ** 2) / (x * x);
    const x2 = x * x;
    const exact = 0.5 - x2 / 24 + (x2 * x2) / 720 - (x2 * x2 * x2) / 40320 + (x2 * x2 * x2 * x2) / 3628800;
    return { kk, naive, stable, en: Math.abs(naive - exact) / exact, es: Math.abs(stable - exact) / exact };
  });
  const fmtErr = (e: number) => (e === 0 ? "0" : e.toExponential(1));
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>x = 10 to the power −<span className="mono">{k}</span></span>
          <input type="range" min={1} max={9} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto", marginTop: 8 }}>
        <table className="mono" style={{ borderCollapse: "collapse", fontSize: 13, minWidth: 480 }}>
          <thead>
            <tr style={{ color: "var(--text-muted)" }}>
              <th style={{ textAlign: "left", padding: "3px 8px" }}>x</th>
              <th style={{ textAlign: "right", padding: "3px 8px" }}>(1 − cos x)/x²</th>
              <th style={{ textAlign: "right", padding: "3px 8px" }}>rel. error</th>
              <th style={{ textAlign: "right", padding: "3px 8px" }}>2 sin²(x/2)/x²</th>
              <th style={{ textAlign: "right", padding: "3px 8px" }}>rel. error</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.kk} style={{ background: r.kk === k ? "var(--accent-soft)" : "transparent", borderTop: "1px solid var(--border)" }}>
                <td style={{ padding: "3px 8px" }}>1e−{r.kk}</td>
                <td style={{ textAlign: "right", padding: "3px 8px" }}>{r.naive.toFixed(10)}</td>
                <td style={{ textAlign: "right", padding: "3px 8px", color: r.en > 1e-6 ? "var(--danger)" : "var(--text)" }}>{fmtErr(r.en)}</td>
                <td style={{ textAlign: "right", padding: "3px 8px" }}>{r.stable.toFixed(10)}</td>
                <td style={{ textAlign: "right", padding: "3px 8px" }}>{fmtErr(r.es)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption">
        The true value is close to 1/2 for small x. Computing 1 − cos x subtracts two nearly equal numbers, and the leading
        digits cancel, leaving mostly rounding error; for x below about 10⁻⁸, cos x rounds to exactly 1 and the result is 0.
        The identity 1 − cos x = 2 sin²(x/2) computes the same function with no subtraction, and stays accurate.
      </figcaption>
    </figure>
  );
}
