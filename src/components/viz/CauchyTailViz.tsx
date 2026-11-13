"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const SEQS = {
  squares: { name: "Σ 1/k²", term: (k: number) => 1 / (k * k) },
  harmonic: { name: "Σ 1/k", term: (k: number) => 1 / k },
};
type K = keyof typeof SEQS;
const M = 60, W = 520, H = 220, X0 = 40, X1 = 500, Y0 = 200, Y1 = 20;

/** Partial sums of Σ 1/k² and Σ 1/k. Both have steps tending to 0, but only the first is Cauchy: its tail fits in a band of any width. */
export function CauchyTailViz() {
  const [k, setK] = useState<K>("squares");
  const [N, setN] = useState(10);
  const t = SEQS[k].term;
  const s: number[] = [0];
  for (let i = 1; i <= 4000; i++) s.push(s[i - 1] + t(i));
  const top = k === "squares" ? 1.7 : 4.8;
  const X = (n: number) => X0 + ((n - 1) / (M - 1)) * (X1 - X0);
  const Y = (v: number) => Y0 - (v / top) * (Y0 - Y1);
  // spread of the tail from N up to 4N, and up to 4000
  const spread4N = s[Math.min(4000, 4 * N)] - s[N];
  const spreadAll = s[4000] - s[N];
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sequence">
        {(Object.keys(SEQS) as K[]).map((x) => (
          <button key={x} type="button" className={x === k ? "seg is-on" : "seg"} aria-pressed={x === k} onClick={() => setK(x)}>partial sums of {SEQS[x].name}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Partial sums with the spread of the tail marked" style={{ width: "100%", display: "block", marginTop: 12 }}>
        <line x1={X0} y1={Y0} x2={X1} y2={Y0} className="viz-axis" />
        {N <= M && <rect x={X(N)} y={Y(Math.min(top, s[Math.min(M, 4000)]))} width={X1 - X(N)} height={Math.max(1, Y(s[N]) - Y(Math.min(top, s[Math.min(M, 4000)])))} style={{ fill: "var(--accent-soft)" }} />}
        {Array.from({ length: M }, (_, i) => i + 1).map((n) => (
          <circle key={n} cx={X(n)} cy={Y(s[n])} r={3} style={{ fill: n >= N ? "var(--accent)" : "var(--text-muted)" }} />
        ))}
        <text x={X1} y={Y0 + 16} textAnchor="end" style={{ fontSize: 11, fill: "var(--text-muted)" }}>n = {M}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>tail starts at N = <span className="mono">{N}</span></span>
          <input type="range" min={1} max={60} value={N} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>step size sₙ − sₙ₋₁ at n = N</td><td className="mono">{fm(t(N))}</td></tr>
          <tr><td>spread of the tail from N to 4N, s₄ₙ − sₙ</td><td className="mono">{fm(spread4N)}</td></tr>
          <tr><td>spread from N to 4000</td><td className="mono">{fm(spreadAll)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {k === "squares"
          ? "The tail after N spreads by less than 1/N in total, since Σ from N + 1 of 1/k² < 1/N. Choosing N large makes the whole tail as tight as we like: the sequence is Cauchy, and so it converges."
          : "The steps 1/n shrink to 0, but from N to 4N the sums still grow by about log 4 ≈ 1.39, however large N is. Small steps are not enough: the sequence is not Cauchy, and it diverges."}
      </figcaption>
    </figure>
  );
}
