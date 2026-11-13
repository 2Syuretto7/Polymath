"use client";

import { useState } from "react";

const N = 12;
const SUBS = [[0], [0, 6], [0, 4, 8], [0, 3, 6, 9], [0, 2, 4, 6, 8, 10], Array.from({ length: N }, (_, i) => i)];

function closure(s: number[]) {
  const set = new Set([0, ...s]);
  let grew = true;
  while (grew) {
    grew = false;
    for (const a of [...set]) for (const b of [...set]) { const c = (a + b) % N; if (!set.has(c)) { set.add(c); grew = true; } }
  }
  return [...set].sort((a, b) => a - b);
}

/** Pick a subset of ℤ₁₂ and test whether it is a subgroup; or generate the smallest subgroup containing it. */
export function SubgroupViz() {
  const [sel, setSel] = useState<number[]>([0, 4]);
  const has = (x: number) => sel.includes(x);
  const toggle = (x: number) => setSel(has(x) ? sel.filter((y) => y !== x) : [...sel, x].sort((a, b) => a - b));
  let missSum: [number, number] | null = null;
  for (const a of sel) for (const b of sel) if (!missSum && !has((a + b) % N)) missSum = [a, b];
  const missInv = sel.find((a) => !has((N - a) % N));
  const ok = has(0) && !missSum && missInv === undefined;
  const cx = 110, cy = 105, R = 80;
  const pos = (i: number) => { const a = Math.PI / 2 - (2 * Math.PI * i) / N; return [cx + R * Math.cos(a), cy - R * Math.sin(a)]; };

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 210" role="img" aria-label="The twelve elements of Z12 on a clock, with the chosen subset marked" style={{ width: "100%", display: "block" }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border)" }} />
        {Array.from({ length: N }, (_, i) => {
          const [x, y] = pos(i);
          return <g key={i} style={{ cursor: "pointer" }} onClick={() => toggle(i)}>
            <circle cx={x} cy={y} r={14} style={{ fill: has(i) ? "var(--accent)" : "var(--bg)", stroke: has(i) ? "var(--accent)" : "var(--border-strong)" }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 12, fill: has(i) ? "var(--bg)" : "var(--text)" }}>{i}</text></g>;
        })}
        <text x={240} y={40} style={{ fontSize: 12, fill: "var(--text-muted)" }}>chosen subset</text>
        <text x={240} y={64} className="mono" style={{ fontSize: 15, fill: "var(--text)" }}>{sel.length === N ? "all of ℤ₁₂" : `{${sel.join(", ")}}`}</text>
        <text x={240} y={100} style={{ fontSize: 12, fill: "var(--text-muted)" }}>subgroup of ℤ₁₂?</text>
        <text x={240} y={126} style={{ fontSize: 18, fill: ok ? "var(--accent)" : "var(--danger)" }}>{ok ? `yes, of order ${sel.length}` : "no"}</text>
        <text x={240} y={160} style={{ fontSize: 11, fill: "var(--text-muted)" }}>Click the numbers to choose.</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSel(closure(sel))}>Generate the subgroup</button>
        <button type="button" className="btn" onClick={() => setSel([])}>Clear</button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 10 }}>
        <span className="mono-meta" style={{ textTransform: "none", alignSelf: "center" }}>all the subgroups:</span>
        {SUBS.map((s) => <button key={s.length} type="button" style={{ cursor: "pointer" }} className={s.length === sel.length && s.every(has) ? "viz-chip is-on" : "viz-chip"} onClick={() => setSel(s)}>order {s.length}</button>)}
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>contains the identity 0</td><td>{has(0) ? "yes" : "no"}</td></tr>
          <tr><td>closed under +</td><td>{missSum ? `no: ${missSum[0]} + ${missSum[1]} = ${(missSum[0] + missSum[1]) % N} is missing` : "yes"}</td></tr>
          <tr><td>closed under inverses</td><td>{missInv !== undefined ? `no: the inverse of ${missInv}, which is ${(N - missInv) % N}, is missing` : "yes"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Every subgroup of ℤ₁₂ has order 1, 2, 3, 4, 6 or 12: always a divisor of 12. That is no accident, and Lagrange&rsquo;s theorem will explain it.
      </figcaption>
    </figure>
  );
}
