"use client";

import { useState } from "react";

const SEQS = [
  { key: "inv", label: "λₙ = 1/n", f: (n: number) => 1 / n, compact: true },
  { key: "geo", label: "λₙ = 2⁻ⁿ", f: (n: number) => 2 ** -n, compact: true },
  { key: "half", label: "λₙ = 1/2 + 1/(2n)", f: (n: number) => 0.5 + 1 / (2 * n), compact: false },
  { key: "id", label: "λₙ = 1 (identity)", f: () => 1, compact: false },
];
const SHOW = 24;

/** A diagonal operator and its rank-N truncations: compact exactly when the largest discarded entry tends to 0. */
export function TruncateViz() {
  const [k, setK] = useState(0);
  const [N, setN] = useState(4);
  const S = SEQS[k];
  const err = S.f(N + 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="diagonal entries">
        {SEQS.map((s, i) => <button key={s.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{s.label}</button>)}
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Diagonal entries, kept up to N and discarded after" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {Array.from({ length: SHOW }, (_, i) => {
          const v = S.f(i + 1), kept = i < N, h = v * 130;
          return <rect key={i} x={30 + i * 19.5} y={145 - h} width={14} height={h} style={{ fill: kept ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: kept ? "var(--accent)" : "var(--danger)" }} />;
        })}
        <line x1={26} y1={145 - err * 130} x2={500} y2={145 - err * 130} style={{ stroke: "var(--danger)", strokeDasharray: "5 4" }} />
        <line x1={26} y1={145} x2={500} y2={145} style={{ stroke: "var(--text-muted)" }} />
        <line x1={27 + N * 19.5} y1={10} x2={27 + N * 19.5} y2={150} style={{ stroke: "var(--text-muted)", strokeDasharray: "2 3" }} />
        <text x={30} y={164} style={{ fill: "var(--text-muted)", fontSize: 11 }}>kept by the rank-{N} truncation, then discarded (outlined in red)</text>
      </svg>
      <div className="viz-controls">
        <label className="mono" style={{ fontSize: 13 }}>
          N = {N}{" "}
          <input type="range" min={1} max={20} value={N} onChange={(e) => setN(Number(e.target.value))} aria-label="truncation rank N" />
        </label>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖D − F‖ = sup over n &gt; N of |λₙ| = {err.toFixed(4)}. {S.compact ? "This tends to 0: D is compact." : "This does not tend to 0: D is not compact."}
      </p>
      <figcaption className="viz-caption">
        The diagonal operator D(xₙ) = (λₙxₙ) on ℓ² is approximated by F, which keeps the first N entries and has finite
        rank. The error is the largest discarded entry, so D is a norm limit of finite-rank operators exactly when λₙ → 0,
        and that is exactly when D is compact.
      </figcaption>
    </figure>
  );
}
