"use client";

import { useState } from "react";

const N = ["a", "b", "c", "d"];
const R = [0, 1, 2, 3];
type Grid = boolean[][];

const make = (f: (x: number, y: number) => boolean): Grid => R.map((x) => R.map((y) => f(x, y)));
const PRESETS: { name: string; g: Grid }[] = [
  { name: "A cycle", g: make((x, y) => y === (x + 1) % 4) },
  { name: "A favourite", g: make((_, y) => y === 2) },
  { name: "An enthusiast", g: make((x) => x === 0) },
  { name: "Nobody", g: make(() => false) },
];

type Q = { f: string; en: string; eval: (L: Grid) => { v: boolean; why: string } };

const list = (xs: number[]) => xs.map((i) => N[i]).join(", ");

const SENTENCES: Q[] = [
  {
    f: "∀x∃y Lxy", en: "Everyone likes someone.",
    eval: (L) => { const bad = R.filter((x) => !R.some((y) => L[x][y])); return bad.length ? { v: false, why: `${list(bad)} likes nobody` } : { v: true, why: "every row has a mark" }; },
  },
  {
    f: "∃y∀x Lxy", en: "Someone is liked by everyone.",
    eval: (L) => { const ok = R.filter((y) => R.every((x) => L[x][y])); return ok.length ? { v: true, why: `everyone likes ${list(ok)}` } : { v: false, why: "no column is full" }; },
  },
  {
    f: "∃x∀y Lxy", en: "Someone likes everyone.",
    eval: (L) => { const ok = R.filter((x) => R.every((y) => L[x][y])); return ok.length ? { v: true, why: `${list(ok)} likes everyone` } : { v: false, why: "no row is full" }; },
  },
  {
    f: "∀y∃x Lxy", en: "Everyone is liked by someone.",
    eval: (L) => { const bad = R.filter((y) => !R.some((x) => L[x][y])); return bad.length ? { v: false, why: `nobody likes ${list(bad)}` } : { v: true, why: "every column has a mark" }; },
  },
  {
    f: "∀x Lxx", en: "Everyone likes themselves.",
    eval: (L) => { const bad = R.filter((x) => !L[x][x]); return bad.length ? { v: false, why: `not ${list(bad)}` } : { v: true, why: "the whole diagonal is marked" }; },
  },
];

/** A relation drawn as a grid, and sentences with two quantifiers read off from rows and columns. */
export function RelationGridViz() {
  const [L, setL] = useState<Grid>(PRESETS[0].g);
  const flip = (x: number, y: number) => setL(L.map((row, i) => row.map((c, j) => (i === x && j === y ? !c : c))));

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Start from">
        {PRESETS.map((p) => <button key={p.name} type="button" className="btn" onClick={() => setL(p.g)}>{p.name}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 20, alignItems: "flex-start", marginTop: 12 }}>
        <table className="table" style={{ width: "auto", textAlign: "center" }} aria-label="Who likes whom: rows are x, columns are y">
          <thead>
            <tr><th className="mono-meta" style={{ textTransform: "none" }}>x likes y</th>{N.map((n) => <th key={n} className="mono" style={{ textTransform: "none" }}>{n}</th>)}</tr>
          </thead>
          <tbody>
            {R.map((x) => (
              <tr key={x}>
                <th className="mono" style={{ textTransform: "none" }}>{N[x]}</th>
                {R.map((y) => (
                  <td key={y} style={{ padding: 2 }}>
                    <button type="button" onClick={() => flip(x, y)} aria-pressed={L[x][y]} aria-label={`${N[x]} likes ${N[y]}`}
                      style={{ width: 34, height: 34, borderRadius: 6, border: "1px solid var(--border-strong)", background: L[x][y] ? "var(--accent)" : "var(--surface)", cursor: "pointer" }} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table" style={{ flex: "1 1 320px", width: "auto" }}>
          <tbody>
            {SENTENCES.map((s) => {
              const r = s.eval(L);
              return (
                <tr key={s.f}>
                  <td className="mono" style={{ whiteSpace: "nowrap" }}>{s.f}</td>
                  <td>{s.en}</td>
                  <td><span className={r.v ? "viz-verdict viz-verdict-info" : "viz-verdict viz-verdict-right"} style={{ fontWeight: 600 }}>{r.v ? "true" : "false"}</span><br /><span className="mono-meta">{r.why}</span></td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption className="viz-caption">
        Click a square to change whether x likes y. The row for x shows whom x likes; the column for y shows who likes y.
        ∀x∃y asks for a mark in every row, but ∃y∀x asks for one full column. The cycle makes the first true and the second false. Now try to make the second true and the first false. Why can you not?
      </figcaption>
    </figure>
  );
}
