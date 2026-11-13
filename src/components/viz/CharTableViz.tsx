"use client";

import { useState } from "react";

type Cx = [number, number];
const W3: Cx = [-0.5, Math.sqrt(3) / 2], W3b: Cx = [-0.5, -Math.sqrt(3) / 2];
const r = (x: number): Cx => [x, 0];
type G = { name: string; order: number; classes: string[]; sizes: number[]; rows: { name: string; v: Cx[] }[] };
const GS: G[] = [
  {
    name: "S₃", order: 6, classes: ["1", "(1 2)", "(1 2 3)"], sizes: [1, 3, 2],
    rows: [{ name: "χ₁", v: [1, 1, 1].map(r) }, { name: "χ₂", v: [1, -1, 1].map(r) }, { name: "χ₃", v: [2, 0, -1].map(r) }],
  },
  {
    name: "C₄", order: 4, classes: ["1", "g", "g²", "g³"], sizes: [1, 1, 1, 1],
    rows: [0, 1, 2, 3].map((k) => ({ name: `χ${"₁₂₃₄"[k]}`, v: [0, 1, 2, 3].map((j) => { const t = ((k * j) % 4) * (Math.PI / 2); return [Math.round(Math.cos(t)), Math.round(Math.sin(t))] as Cx; }) })),
  },
  {
    name: "D₄", order: 8, classes: ["1", "r²", "r", "s", "sr"], sizes: [1, 1, 2, 2, 2],
    rows: [
      { name: "χ₁", v: [1, 1, 1, 1, 1].map(r) }, { name: "χ₂", v: [1, 1, 1, -1, -1].map(r) }, { name: "χ₃", v: [1, 1, -1, 1, -1].map(r) },
      { name: "χ₄", v: [1, 1, -1, -1, 1].map(r) }, { name: "χ₅", v: [2, -2, 0, 0, 0].map(r) },
    ],
  },
  {
    name: "A₄", order: 12, classes: ["1", "(1 2)(3 4)", "(1 2 3)", "(1 3 2)"], sizes: [1, 3, 4, 4],
    rows: [
      { name: "χ₁", v: [r(1), r(1), r(1), r(1)] }, { name: "χ₂", v: [r(1), r(1), W3, W3b] },
      { name: "χ₃", v: [r(1), r(1), W3b, W3] }, { name: "χ₄", v: [r(3), r(-1), r(0), r(0)] },
    ],
  },
  {
    name: "S₄", order: 24, classes: ["1", "(1 2)", "(1 2)(3 4)", "(1 2 3)", "(1 2 3 4)"], sizes: [1, 6, 3, 8, 6],
    rows: [
      { name: "χ₁", v: [1, 1, 1, 1, 1].map(r) }, { name: "χ₂", v: [1, -1, 1, 1, -1].map(r) }, { name: "χ₃", v: [2, 0, 2, -1, 0].map(r) },
      { name: "χ₄", v: [3, 1, -1, 0, -1].map(r) }, { name: "χ₅", v: [3, -1, -1, 0, 1].map(r) },
    ],
  },
];
const show = (z: Cx) => {
  const [a, b] = z.map((x) => Math.round(x * 1000) / 1000);
  if (Math.abs(b) < 1e-9) return String(a).replace("-", "−");
  if (Math.abs(a) < 1e-9) return (b === 1 ? "i" : b === -1 ? "−i" : `${b}i`);
  if (Math.abs(a + 0.5) < 1e-9) return b > 0 ? "ω" : "ω²";
  return `${a} + ${b}i`;
};
const conjMul = (a: Cx, b: Cx): Cx => [a[0] * b[0] + a[1] * b[1], a[1] * b[0] - a[0] * b[1]]; // a · conj(b)
const num = (x: number) => String(Math.round(x * 1000) / 1000).replace("-", "−");

/** Character tables of small groups, with both orthogonality relations checked on rows and columns you pick. */
export function CharTableViz() {
  const [gi, setGi] = useState(0);
  const [rows, setRows] = useState<number[]>([0, 2]);
  const [cols, setCols] = useState<number[]>([1, 1]);
  const g = GS[gi];
  const pick = (list: number[], i: number) => [list[1], i];
  const [ra, rb] = rows.map((x) => Math.min(x, g.rows.length - 1));
  const [ca, cb] = cols.map((x) => Math.min(x, g.classes.length - 1));
  const rowIp = g.classes.reduce((s, _, c) => s + g.sizes[c] * conjMul(g.rows[ra].v[c], g.rows[rb].v[c])[0], 0) / g.order;
  const colSum = g.rows.reduce((s, row) => s + conjMul(row.v[ca], row.v[cb])[0], 0);
  const degSq = g.rows.reduce((s, row) => s + row.v[0][0] ** 2, 0);
  const on = (cond: boolean) => (cond ? { background: "var(--accent-soft)", fontWeight: 600 } : undefined);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Group">
        {GS.map((x, i) => <button key={x.name} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => { setGi(i); setRows([0, 1]); setCols([0, 1]); }}>{x.name}</button>)}
      </div>
      <p style={{ margin: "8px 0", fontSize: 14 }}>Click two row labels to compare characters, and two column headers to compare classes.</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ fontSize: 14 }}>
          <thead>
            <tr>
              <th style={{ textTransform: "none" }}>class (size)</th>
              {g.classes.map((c, i) => (
                <th key={c} style={{ textTransform: "none", ...on(i === ca || i === cb) }}>
                  <button type="button" className="btn btn-ghost" style={{ padding: "0 4px", height: "auto" }} onClick={() => setCols(pick(cols, i))}>{c} ({g.sizes[i]})</button>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.rows.map((row, ri) => (
              <tr key={row.name}>
                <td style={on(ri === ra || ri === rb)}>
                  <button type="button" className="btn btn-ghost" style={{ padding: "0 4px", height: "auto" }} onClick={() => setRows(pick(rows, ri))}>{row.name}</button>
                </td>
                {row.v.map((z, c) => <td key={c} className="mono" style={on(ri === ra || ri === rb || c === ca || c === cb)}>{show(z)}</td>)}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 6 }}>
        <div>rows: ⟨{g.rows[ra].name}, {g.rows[rb].name}⟩ = {num(rowIp)}</div>
        <div>columns: Σ χ({g.classes[ca]}) · conj χ({g.classes[cb]}) = {num(colSum)}{ca === cb ? ` = ${g.order} / ${g.sizes[ca]}` : ""}</div>
        <div>sum of squares of degrees = {degSq} = |G|; number of rows = number of classes = {g.classes.length}</div>
      </div>
      <figcaption className="viz-caption">
        Rows are the irreducible characters and columns the conjugacy classes. Distinct rows are orthogonal and each row has
        norm 1. Distinct columns are orthogonal too, and a column paired with itself gives the order of the centraliser of the
        class. Here ω is a primitive cube root of unity, and ω² is its conjugate.
      </figcaption>
    </figure>
  );
}
