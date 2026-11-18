"use client";

import { useState, type ReactNode } from "react";

/** Hereditary base-b notation, bumped to base b + 1. */
function bump(n: bigint, b: bigint): bigint {
  let out = 0n, e = 0n, m = n;
  while (m > 0n) {
    const c = m % b;
    if (c > 0n) out += c * (b + 1n) ** bump(e, b);
    m /= b; e += 1n;
  }
  return out;
}
/** The ordinal obtained by replacing the base with ω. */
function ordinal(n: bigint, b: bigint): ReactNode {
  if (n === 0n) return "0";
  const terms: ReactNode[] = [];
  let m = n, e = 0n;
  const parts: [bigint, bigint][] = [];
  while (m > 0n) { const c = m % b; if (c > 0n) parts.push([e, c]); m /= b; e += 1n; }
  parts.reverse().forEach(([ex, c], i) => {
    const base = ex === 0n ? <span key={i}>{c.toString()}</span> : <span key={i}>ω{ex === 1n ? null : <sup>{ordinal(ex, b)}</sup>}{c > 1n ? `·${c}` : ""}</span>;
    if (i) terms.push(" + ");
    terms.push(base);
  });
  return <>{terms}</>;
}

/** Goodstein sequences: the numbers grow, the ordinals fall, and every sequence reaches 0. */
export function GoodsteinViz() {
  const [start, setStart] = useState(3);
  const [steps, setSteps] = useState(0);
  const rows: { b: bigint; n: bigint }[] = [{ b: 2n, n: BigInt(start) }];
  for (let i = 0; i < steps && rows[rows.length - 1].n > 0n; i++) {
    const { b, n } = rows[rows.length - 1];
    rows.push({ b: b + 1n, n: bump(n, b) - 1n });
  }
  const last = rows[rows.length - 1];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="starting value">
        {[2, 3, 4].map((s) => <button key={s} type="button" aria-pressed={start === s} className={start === s ? "seg is-on" : "seg"} onClick={() => { setStart(s); setSteps(0); }}>start at {s}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSteps(steps + 1)} disabled={last.n === 0n || rows.length > 24}>bump the base, subtract 1</button>
        <button type="button" className="btn btn-ghost" onClick={() => setSteps(0)}>reset</button>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", width: "100%" }}>
          <thead><tr><th style={{ textAlign: "left", padding: "2px 8px" }}>base</th><th style={{ textAlign: "right", padding: "2px 8px" }}>value</th><th style={{ textAlign: "left", padding: "2px 8px" }}>ordinal</th></tr></thead>
          <tbody>
            {rows.slice(-8).map((r) => (
              <tr key={r.b.toString()}>
                <td style={{ padding: "2px 8px" }}>{r.b.toString()}</td>
                <td style={{ padding: "2px 8px", textAlign: "right" }}>{r.n.toString()}</td>
                <td style={{ padding: "2px 8px", color: "var(--accent)" }}>{ordinal(r.n, r.b)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {last.n === 0n ? `Reached 0 after ${rows.length - 1} steps.` : `Step ${rows.length - 1}: value ${last.n.toString()} and still going.`}
      </p>
      <figcaption className="viz-caption">
        Write the number in base b, writing the exponents in base b too, replace every b by b + 1, and subtract 1. Starting
        at 4, the values climb for an astronomically long time, but replacing the base by ω gives ordinals below ε₀ that
        strictly decrease, so the sequence must reach 0. Kirby and Paris showed in 1982 that Peano arithmetic cannot prove
        this, though induction up to ε₀, Gentzen&rsquo;s tool, can.
      </figcaption>
    </figure>
  );
}
