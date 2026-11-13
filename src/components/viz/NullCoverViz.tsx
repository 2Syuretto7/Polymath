"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const QS: number[] = [];
for (let d = 1; QS.length < 60; d++) for (let p = 0; p <= d; p++) { const g = (a: number, b: number): number => (b ? g(b, a % b) : a); if (g(p, d) === 1 && QS.length < 60) QS.push(p / d); }
const W = 520, H = 120, X0 = 20, X1 = 500;

/** A set has measure zero if it can be covered by intervals of total length as small as we like. The rationals can: give the k-th one an interval of length ε/2ᵏ. */
export function NullCoverViz() {
  const [e, setE] = useState(0.5);
  const [n, setN] = useState(12);
  const X = (x: number) => X0 + x * (X1 - X0);
  const total = QS.slice(0, n).reduce((t, _, k) => t + e / 2 ** (k + 1), 0);
  const fm = (v: number) => fmtNum(Number(v.toFixed(5)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Rational points covered by shrinking intervals" style={{ width: "100%", display: "block" }}>
        <line x1={X0} y1={80} x2={X1} y2={80} className="viz-axis" />
        {[0, 1].map((v) => <text key={v} x={X(v)} y={100} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>{v}</text>)}
        {QS.slice(0, n).map((q, k) => {
          const len = e / 2 ** (k + 1);
          return (
            <g key={k}>
              <rect x={X(q - len / 2)} y={70 - (k % 6) * 9} width={Math.max(0.8, X(q + len / 2) - X(q - len / 2))} height={6} rx={2} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 0.8 }} />
              <circle cx={X(q)} cy={80} r={2.5} style={{ fill: "var(--text)" }} />
            </g>
          );
        })}
      </svg>
      <div className="viz-sliders">
        <label><span>ε: <span className="mono">{fm(e)}</span></span>
          <input type="range" min={0.05} max={1} step={0.05} value={e} onChange={(ev) => setE(Number(ev.target.value))} /></label>
        <label><span>rationals covered: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={60} value={n} onChange={(ev) => setN(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>lengths of the intervals</td><td className="mono">ε/2, ε/4, ε/8, …</td></tr>
          <tr><td>total length so far</td><td className="mono">{fm(total)}</td></tr>
          <tr><td>total length for all the rationals, at most</td><td className="mono">{fm(e)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The rationals in [0, 1] are listed 0, 1, 1/2, 1/3, 2/3, 1/4, …, and the k-th gets an interval of length ε/2ᵏ. Every rational is covered, yet the total length is at most ε, however small ε is. So the rationals have measure zero, though they are dense.
      </figcaption>
    </figure>
  );
}
