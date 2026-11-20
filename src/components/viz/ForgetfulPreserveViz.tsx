"use client";

import { useState } from "react";

export const ORDERS = [1, 2, 3, 4, 5];

/** Sizes of products and coproducts of ℤ/m and ℤ/n in three categories; Infinity where the answer is infinite. */
export function sizes(m: number, n: number) {
  return {
    setProd: m * n,
    setCoprod: m + n,
    grpProd: m * n,
    grpCoprod: m === 1 || n === 1 ? m * n : Infinity,
    abProd: m * n,
    abCoprod: m * n,
  };
}

const show = (v: number) => (v === Infinity ? "∞" : String(v));

/** The forgetful functor from groups to sets preserves products but not coproducts. */
export function ForgetfulPreserveViz() {
  const [m, setM] = useState(2);
  const [n, setN] = useState(2);
  const s = sizes(m, n);
  const rows = [
    { cat: "Set", prod: s.setProd, coprod: s.setCoprod, cp: "disjoint union" },
    { cat: "Grp", prod: s.grpProd, coprod: s.grpCoprod, cp: "free product" },
    { cat: "Ab", prod: s.abProd, coprod: s.abCoprod, cp: "direct sum" },
  ];
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>m = {m} <input type="range" min={1} max={5} step={1} value={m} onChange={(e) => setM(Number(e.target.value))} aria-label="m" /></label>
        <label>n = {n} <input type="range" min={1} max={5} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 190" role="img" aria-label="Sizes of products and coproducts of two cyclic groups in sets, groups and abelian groups" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={30} y={26} style={{ fill: "var(--text-muted)", fontSize: 12 }}>category</text>
        <text x={190} y={26} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>product</text>
        <text x={390} y={26} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>coproduct</text>
        {rows.map((r, i) => {
          const y = 50 + i * 46;
          const prodOk = r.prod === s.setProd, coOk = r.coprod === s.setCoprod;
          return (
            <g key={r.cat}>
              <text x={30} y={y + 20} style={{ fill: "var(--text)", fontSize: 14, fontWeight: 700 }}>{r.cat}</text>
              <rect x={120} y={y} width={140} height={32} rx={4} style={{ fill: i === 0 || prodOk ? "var(--success-soft)" : "var(--danger-soft)", stroke: i === 0 || prodOk ? "var(--success)" : "var(--danger)" }} />
              <text x={190} y={y + 21} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{show(r.prod)} elements</text>
              <rect x={290} y={y} width={200} height={32} rx={4} style={{ fill: i === 0 || coOk ? "var(--success-soft)" : "var(--danger-soft)", stroke: i === 0 || coOk ? "var(--success)" : "var(--danger)" }} />
              <text x={390} y={y + 21} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{show(r.coprod)} elements ({r.cp})</text>
            </g>
          );
        })}
        <text x={30} y={186} style={{ fill: "var(--text-muted)", fontSize: 10 }}>green: the underlying set is the one computed in Set; red: it is not</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ℤ/{m} and ℤ/{n}: products have {s.setProd} elements in every column, so forgetting preserves them. Coproducts: {s.setCoprod} in Set, {show(s.grpCoprod)} in Grp, {s.abCoprod} in Ab.
      </p>
      <figcaption className="viz-caption">
        The forgetful functor from groups to sets has a left adjoint, the free group, so it preserves all limits: the
        underlying set of a product of groups is the product of the sets. It does not preserve coproducts. The free product
        of two non-trivial groups is infinite, and even the direct sum of abelian groups is not their disjoint union.
      </figcaption>
    </figure>
  );
}
