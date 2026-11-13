"use client";

import { useState } from "react";

const isSq = (d: number) => Math.round(Math.sqrt(d)) ** 2 === d;

/** Fundamental solution of x² − Dy² = 1 by continued fractions, with BigInt so that large solutions are exact. */
const fundamental = (D: number): [bigint, bigint] => {
  const a0 = Math.floor(Math.sqrt(D));
  let m = 0, d = 1, a = a0;
  let [p0, p1] = [1n, BigInt(a0)], [q0, q1] = [0n, 1n];
  const Db = BigInt(D);
  for (let i = 0; i < 400; i++) {
    if (p1 * p1 - Db * q1 * q1 === 1n) return [p1, q1];
    m = d * a - m; d = (D - m * m) / d; a = Math.floor((a0 + m) / d);
    [p0, p1] = [p1, BigInt(a) * p1 + p0]; [q0, q1] = [q1, BigInt(a) * q1 + q0];
  }
  return [p1, q1];
};

/** Pell's equation x² − Dy² = 1: one fundamental solution generates all the others. */
export function PellViz() {
  const [D, setD] = useState(7);
  const [x1, y1] = fundamental(D);
  const Db = BigInt(D);
  const sols: [bigint, bigint][] = [[x1, y1]];
  for (let k = 1; k < 5; k++) { const [x, y] = sols[k - 1]; sols.push([x * x1 + Db * y * y1, x * y1 + y * x1]); }
  const step = (dir: number) => { let n = D + dir; while (n >= 2 && n <= 99 && isSq(n)) n += dir; if (n >= 2 && n <= 99) setD(n); };
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span className="viz-stepper"><span className="viz-stepper-label">D</span>
          <button type="button" className="btn" onClick={() => step(-1)} aria-label="Smaller D">−</button>
          <span className="mono viz-stepper-value">{D}</span>
          <button type="button" className="btn" onClick={() => step(1)} aria-label="Larger D">+</button>
        </span>
        {[2, 7, 13, 29, 61, 94].map((v) => <button key={v} type="button" aria-pressed={D === v} className={D === v ? "viz-chip is-on" : "viz-chip"} onClick={() => setD(v)}>{v}</button>)}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>x² − {D}y² = 1</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ width: "auto" }}>
          <thead><tr><th style={{ textTransform: "none" }}>k</th><th style={{ textTransform: "none" }}>x</th><th style={{ textTransform: "none" }}>y</th><th style={{ textTransform: "none" }}>x / y</th></tr></thead>
          <tbody>
            {sols.map(([x, y], k) => (
              <tr key={k} style={{ fontWeight: k === 0 ? 700 : 400 }}>
                <td className="mono">{k + 1}</td>
                <td className="mono" style={{ wordBreak: "break-all" }}>{x.toLocaleString("en-IN")}</td>
                <td className="mono" style={{ wordBreak: "break-all" }}>{y.toLocaleString("en-IN")}</td>
                <td className="mono">{(Number(x) / Number(y)).toFixed(12)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ margin: "6px 0", fontSize: 13 }}>√{D} = {Math.sqrt(D).toFixed(12)}</p>
      <figcaption className="viz-caption">
        The first row is the fundamental solution, the smallest. Each later row comes from (x₁ + y₁√D)ᵏ, and the ratios x/y close in on √D. The size of the fundamental solution is erratic: try 60, then 61, whose smallest solution has ten digits.
      </figcaption>
    </figure>
  );
}
