"use client";

import { useState } from "react";

type Q = [number, number];
const g = (a: number, b: number): number => (b === 0 ? Math.abs(a) : g(b, a % b));
const q = (n: number, d = 1): Q => { if (d < 0) { n = -n; d = -d; } const k = g(n, d) || 1; return [n / k, d / k]; };
const sub = (a: Q, b: Q): Q => q(a[0] * b[1] - b[0] * a[1], a[1] * b[1]);
const mul = (a: Q, b: Q): Q => q(a[0] * b[0], a[1] * b[1]);
const div = (a: Q, b: Q): Q => q(a[0] * b[1], a[1] * b[0]);
const fmt = ([n, d]: Q) => (d === 1 ? `${n}` : `${n}/${d}`);

function rref(A: number[][]) {
  const M: Q[][] = A.map((r) => r.map((x) => q(x)));
  const rows = M.length, cols = M[0].length;
  const piv: number[] = [];
  let r = 0;
  for (let c = 0; c < cols && r < rows; c++) {
    let k = r;
    while (k < rows && M[k][c][0] === 0) k++;
    if (k === rows) continue;
    [M[r], M[k]] = [M[k], M[r]];
    const pv = M[r][c];
    M[r] = M[r].map((x) => div(x, pv));
    for (let i = 0; i < rows; i++) if (i !== r && M[i][c][0] !== 0) { const f = M[i][c]; M[i] = M[i].map((x, j) => sub(x, mul(f, M[r][j]))); }
    piv.push(c); r++;
  }
  return { M, piv };
}

const PRESETS = [
  [[1, 2, 3], [2, 4, 6], [1, 0, 1]],
  [[1, 0, 0], [0, 1, 0], [0, 0, 1]],
  [[1, 1, 0], [0, 1, 1], [1, 2, 1]],
  [[1, 2, 3], [2, 4, 6], [3, 6, 9]],
];

/** Rank and nullity of a 3 × 3 matrix: the kernel and the image share out the dimension of the domain. */
export function RankNullityViz() {
  const [A, setA] = useState(PRESETS[0]);
  const { M, piv } = rref(A);
  const n = 3, rank = piv.length;
  const free = [0, 1, 2].filter((c) => !piv.includes(c));
  const kernel = free.map((f) => [0, 1, 2].map((c) => (c === f ? q(1) : piv.includes(c) ? q(-M[piv.indexOf(c)][f][0], M[piv.indexOf(c)][f][1]) : q(0))));
  const set = (i: number, j: number, v: number) => setA((B) => B.map((r, a) => r.map((x, b) => (a === i && b === j ? v : x))));
  const bar = (k: number, label: string, fill: string, x: number) => <g>
    <rect x={x} y={20} width={(k / n) * 440} height={26} rx={4} style={{ fill }} />
    {k > 0 && <text x={x + ((k / n) * 440) / 2} y={38} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>{label} {k}</text>}
  </g>;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ flexWrap: "wrap", gap: 6 }}>
        {PRESETS.map((P, i) => <button key={i} type="button" className="viz-chip" onClick={() => setA(P)}>example {i + 1}</button>)}
      </div>
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginTop: 10, alignItems: "flex-start" }}>
        <div>
          <p className="mono-meta" style={{ textTransform: "none", margin: "0 0 4px" }}>A (edit entries)</p>
          {A.map((r, i) => <div key={i} style={{ display: "flex", gap: 4, marginBottom: 4 }}>
            {r.map((x, j) => <input key={j} type="number" min={-9} max={9} value={x} aria-label={`entry ${i + 1}, ${j + 1}`}
              onChange={(ev) => set(i, j, Math.max(-9, Math.min(9, Math.round(Number(ev.target.value) || 0))))}
              className="mono" style={{ width: 46, padding: "3px 4px", background: "var(--bg)", color: "var(--text)", border: "1px solid var(--border)", borderRadius: 4 }} />)}
          </div>)}
        </div>
        <div>
          <p className="mono-meta" style={{ textTransform: "none", margin: "0 0 4px" }}>reduced row echelon form</p>
          {M.map((r, i) => <div key={i} className="mono" style={{ display: "flex", gap: 10 }}>{r.map((x, j) => <span key={j} style={{ width: 40, textAlign: "right", color: piv.includes(j) && piv.indexOf(j) === i ? "var(--accent)" : "var(--text)" }}>{fmt(x)}</span>)}</div>)}
        </div>
        <div>
          <p className="mono-meta" style={{ textTransform: "none", margin: "0 0 4px" }}>basis of the null space</p>
          {kernel.length ? kernel.map((v, i) => <div key={i} className="mono">({v.map(fmt).join(", ")})</div>) : <div className="mono">only 0</div>}
        </div>
      </div>
      <svg viewBox="0 0 460 60" role="img" aria-label="Rank plus nullity" style={{ width: "100%", display: "block", marginTop: 10 }}>
        {bar(rank, "rank", "var(--accent-soft)", 10)}
        {bar(n - rank, "nullity", "var(--bg-subtle)", 10 + (rank / n) * 440)}
        <rect x={10} y={20} width={440} height={26} rx={4} style={{ fill: "none", stroke: "var(--border-strong)" }} />
      </svg>
      <figcaption className="viz-caption">
        Each pivot column gives one dimension of the range, and each free column one vector in the null space. Together they account for all three columns: dim null T + dim range T = dim of the domain. Change an entry and watch the two parts trade dimension.
      </figcaption>
    </figure>
  );
}
