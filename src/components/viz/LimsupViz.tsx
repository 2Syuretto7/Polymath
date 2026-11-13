"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const SEQS = [
  { name: "(−1)ⁿ(1 + 1/n)", a: (n: number) => (n % 2 ? -1 : 1) * (1 + 1 / n), sup: 1, inf: -1 },
  { name: "sin(n) + 1/n", a: (n: number) => Math.sin(n) + 1 / n, sup: 1, inf: -1 },
  { name: "1/n", a: (n: number) => 1 / n, sup: 0, inf: 0 },
];
const M = 60, BIG = 3000, W = 520, H = 240, X0 = 40, X1 = 500, Y0 = 220, Y1 = 20, TOP = 2, BOT = -1.6;

/** The sup and inf of the tail after N. As N grows they move inwards, and their limits are the limsup and liminf. */
export function LimsupViz() {
  const [k, setK] = useState(0);
  const [N, setN] = useState(5);
  const a = SEQS[k].a;
  const tail = Array.from({ length: BIG - N + 1 }, (_, i) => a(N + i));
  const sN = Math.max(...tail), iN = Math.min(...tail);
  const X = (n: number) => X0 + ((n - 1) / (M - 1)) * (X1 - X0);
  const Y = (v: number) => Y0 - ((v - BOT) / (TOP - BOT)) * (Y0 - Y1);
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sequence">
        {SEQS.map((s, i) => (
          <button key={s.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => setK(i)}>aₙ = {s.name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Terms of the sequence with the tail's sup and inf" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y(0)} x2={X1} y2={Y(0)} className="viz-axis" />
        <rect x={X(Math.min(N, M))} y={Y(sN)} width={Math.max(0, X1 - X(Math.min(N, M)))} height={Math.max(1, Y(iN) - Y(sN))} style={{ fill: "var(--accent-soft)" }} />
        <line x1={X(Math.min(N, M))} y1={Y(sN)} x2={X1} y2={Y(sN)} style={{ stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(Math.min(N, M))} y1={Y(iN)} x2={X1} y2={Y(iN)} style={{ stroke: "var(--danger)", strokeWidth: 2 }} />
        {Array.from({ length: M }, (_, i) => i + 1).map((n) => (
          <circle key={n} cx={X(n)} cy={Y(a(n))} r={3} style={{ fill: n >= N ? "var(--text)" : "var(--text-faint)" }} />
        ))}
        <text x={X0 - 6} y={Y(0) + 4} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>0</text>
      </svg>
      <div className="viz-sliders">
        <label><span>tail starts at N = <span className="mono">{N}</span></span>
          <input type="range" min={1} max={60} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>sup of the tail, sₙ = sup over n ≥ N of aₙ</td><td className="mono">{fm(sN)}</td></tr>
          <tr><td>inf of the tail, iₙ</td><td className="mono">{fm(iN)}</td></tr>
          <tr><td>limsup and liminf, the limits of these as N → ∞</td><td className="mono">{fmtNum(SEQS[k].sup)}, {fmtNum(SEQS[k].inf)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The upper line can only move down and the lower line only up as N grows, so both converge, even when the sequence does
        not. {SEQS[k].sup === SEQS[k].inf ? "Here they meet, which happens exactly when the sequence converges." : "Here they stay apart, so the sequence diverges; they are its largest and smallest limit points."} The tail is computed
        up to n = 3000.
      </figcaption>
    </figure>
  );
}
