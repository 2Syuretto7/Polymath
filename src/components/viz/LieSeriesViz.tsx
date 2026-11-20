"use client";

import { useState } from "react";
import { ALGEBRAS, bracketSpace, type Mat } from "./lieTools";

const PICK = ["Heisenberg", "n(4)", "b(2)", "b(3)", "gl(2)", "sl(2)"];

/** Derived and lower central series of matrix Lie algebras, computed by taking spans of brackets. */
export function LieSeriesViz() {
  const [k, setK] = useState(2);
  const alg = ALGEBRAS.find((a) => a.name === PICK[k])!;
  const series = (lower: boolean) => {
    const out = [alg.basis.length];
    let S: Mat[] = alg.basis;
    for (let i = 0; i < 4; i++) { S = lower ? bracketSpace(alg.basis, S) : bracketSpace(S, S); out.push(S.length); }
    return out;
  };
  const der = series(false), low = series(true);
  const solvable = der[der.length - 1] === 0, nilpotent = low[low.length - 1] === 0;
  const maxd = alg.basis.length;
  const bw = 46, X0 = 120, H = 70;
  const row = (vals: number[], y0: number, label: string, sym: string) => (
    <g>
      <text x={X0 - 10} y={y0 + H / 2} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>{label}</text>
      {vals.map((v, i) => {
        const h = (v / 8) * H;
        return (
          <g key={i}>
            <rect x={X0 + i * (bw + 30)} y={y0 + H - h} width={bw} height={Math.max(h, 0.5)} style={{ fill: v === 0 ? "var(--success)" : "var(--accent-soft)", stroke: v === 0 ? "var(--success)" : "var(--accent)" }} />
            <text x={X0 + i * (bw + 30) + bw / 2} y={y0 + H - h - 5} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>{v}</text>
            <text x={X0 + i * (bw + 30) + bw / 2} y={y0 + H + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{sym}{"⁰¹²³⁴"[i]}</text>
          </g>
        );
      })}
    </g>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Lie algebra">
        {PICK.map((p, i) => <button key={p} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{p}</button>)}
      </div>
      <svg viewBox="0 0 520 230" role="img" aria-label="Dimensions along the derived and lower central series" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {row(der, 14, "derived", "D")}
        {row(low, 124, "lower central", "C")}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        dim {maxd}. Derived series {der.join(", ")}: {solvable ? "solvable" : "not solvable"}. Lower central series {low.join(", ")}: {nilpotent ? "nilpotent" : "not nilpotent"}.
      </p>
      <figcaption className="viz-caption">
        Each bar is the dimension of a space of brackets, computed from the matrices. The derived series takes
        Dᵏ⁺¹ = [Dᵏ, Dᵏ]; the lower central series takes Cᵏ⁺¹ = [g, Cᵏ]. Reaching 0 (green) in the first means
        solvable, in the second nilpotent. Upper triangular matrices are solvable but not nilpotent.
      </figcaption>
    </figure>
  );
}
