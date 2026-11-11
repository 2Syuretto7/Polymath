"use client";

import { useState } from "react";

type Obj = { sq: boolean; fill: boolean };
type Row = { f: string; en: string; v: (w: Obj[]) => boolean; note?: string };

const NAMES = ["a", "b", "c", "d", "e", "f"];
const sqs = (w: Obj[]) => w.filter((o) => o.sq);
const unique = (w: Obj[]) => sqs(w).length === 1;

const SETS: Record<"identity" | "descriptions", Row[]> = {
  identity: [
    { f: "∃x Sx", en: "There is at least one square.", v: (w) => sqs(w).length >= 1 },
    { f: "∃x∃y(Sx ∧ Sy)", en: "A wrong attempt at “at least two squares”.", v: (w) => sqs(w).length >= 1, note: "x and y may be the same object." },
    { f: "∃x∃y(Sx ∧ Sy ∧ x ≠ y)", en: "There are at least two squares.", v: (w) => sqs(w).length >= 2 },
    { f: "∀x∀y((Sx ∧ Sy) → x = y)", en: "There is at most one square.", v: (w) => sqs(w).length <= 1 },
    { f: "∃x(Sx ∧ ∀y(Sy → y = x))", en: "There is exactly one square.", v: (w) => sqs(w).length === 1 },
    { f: "∃x∃y(Sx ∧ Sy ∧ x ≠ y ∧ ∀z(Sz → (z = x ∨ z = y)))", en: "There are exactly two squares.", v: (w) => sqs(w).length === 2 },
  ],
  descriptions: [
    { f: "∃x(Sx ∧ ∀y(Sy → y = x))", en: "There is exactly one square.", v: unique },
    { f: "∃x(Sx ∧ ∀y(Sy → y = x) ∧ Fx)", en: "The square is filled.", v: (w) => unique(w) && sqs(w)[0].fill },
    { f: "∃x(Sx ∧ ∀y(Sy → y = x) ∧ ¬Fx)", en: "The square is not filled (narrow scope).", v: (w) => unique(w) && !sqs(w)[0].fill },
    { f: "¬∃x(Sx ∧ ∀y(Sy → y = x) ∧ Fx)", en: "It is not the case that the square is filled (wide scope).", v: (w) => !(unique(w) && sqs(w)[0].fill) },
  ],
};

const PRESETS: { name: string; w: Obj[] }[] = [
  { name: "No squares", w: [{ sq: false, fill: true }, { sq: false, fill: false }, { sq: false, fill: true }, { sq: false, fill: false }, { sq: false, fill: false }] },
  { name: "One square", w: [{ sq: true, fill: true }, { sq: false, fill: false }, { sq: false, fill: true }, { sq: false, fill: false }, { sq: false, fill: false }] },
  { name: "Two squares", w: [{ sq: true, fill: true }, { sq: false, fill: false }, { sq: true, fill: false }, { sq: false, fill: false }, { sq: false, fill: true }] },
];

/** A world of circles and squares, and sentences that count with identity, or describe with “the”. */
export function CountWorldViz({ set }: { set: "identity" | "descriptions" }) {
  const [w, setW] = useState<Obj[]>(PRESETS[set === "identity" ? 2 : 1].w);
  const cycle = (i: number) => setW(w.map((o, j) => (j !== i ? o : o.sq ? (o.fill ? { sq: true, fill: false } : { sq: false, fill: true }) : o.fill ? { sq: false, fill: false } : { sq: true, fill: true })));
  const n = sqs(w).length;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Start from">
        {PRESETS.map((p) => <button key={p.name} type="button" className="btn" onClick={() => setW(p.w)}>{p.name}</button>)}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, justifyContent: "center", marginTop: 12 }}>
        {w.map((o, i) => {
          const st = { fill: o.fill ? "var(--accent)" : "var(--surface)", stroke: "var(--accent)", strokeWidth: 2.5 };
          return (
            <button key={i} type="button" className="btn" onClick={() => cycle(i)} style={{ height: "auto", padding: 6, display: "grid", justifyItems: "center", minWidth: 64 }}
              aria-label={`Object ${NAMES[i]}: ${o.fill ? "filled" : "unfilled"} ${o.sq ? "square" : "circle"}. Click to change.`}>
              <svg viewBox="0 0 60 60" width={44} height={44} aria-hidden="true">
                {o.sq ? <rect x={12} y={12} width={36} height={36} style={st} /> : <circle cx={30} cy={30} r={19} style={st} />}
              </svg>
              <span className="mono-meta" style={{ textTransform: "none" }}>{NAMES[i]}</span>
            </button>
          );
        })}
      </div>
      <p className="mono-meta" style={{ textAlign: "center", margin: "8px 0 0", textTransform: "none" }}>squares in this world: {n}</p>
      <table className="table" style={{ marginTop: 8 }}>
        <thead><tr><th>Sentence</th><th>Says</th><th>Truth</th></tr></thead>
        <tbody>
          {SETS[set].map((r) => {
            const v = r.v(w);
            return (
              <tr key={r.f}>
                <td className="mono" style={{ fontSize: 13 }}>{r.f}</td>
                <td>{r.en}{r.note && <><br /><span className="mono-meta" style={{ textTransform: "none" }}>{r.note}</span></>}</td>
                <td><span className={v ? "viz-verdict viz-verdict-info" : "viz-verdict viz-verdict-right"} style={{ fontWeight: 600 }}>{v ? "true" : "false"}</span></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        {set === "identity"
          ? "Click an object to cycle it through filled square, unfilled square, filled circle and unfilled circle. Sx: x is a square. Counting needs identity: without x ≠ y, two variables can pick out the same square."
          : "Click an object to cycle it through the four kinds. Sx: x is a square. Fx: x is filled. With no squares, or with two, “the square” fails to pick anything out. Compare the two ways of denying that the square is filled."}
      </figcaption>
    </figure>
  );
}
