"use client";

import { useState } from "react";

type Interp = { name: string; dom: number[]; R: (x: number, y: number) => boolean };

const range = (a: number, b: number) => Array.from({ length: b - a + 1 }, (_, i) => a + i);

const INTERPS: Interp[] = [
  { name: "x < y on {1, 2, 3, 4}", dom: range(1, 4), R: (x, y) => x < y },
  { name: "x ≤ y on {1, 2, 3, 4}", dom: range(1, 4), R: (x, y) => x <= y },
  { name: "x divides y on {1, …, 6}", dom: range(1, 6), R: (x, y) => y % x === 0 },
  { name: "y = x + 1, going round, on {0, 1, 2, 3}", dom: range(0, 3), R: (x, y) => y === (x + 1) % 4 },
  { name: "x ≠ y on {1, 2, 3}", dom: range(1, 3), R: (x, y) => x !== y },
  { name: "same parity on {1, 2, 3, 4}", dom: range(1, 4), R: (x, y) => (x - y) % 2 === 0 },
];

type Verdict = { v: boolean; why: string };
type Sentence = { f: string; name: string; short: string; eval: (I: Interp) => Verdict };

const SENTENCES: Sentence[] = [
  {
    short: "∀x∃y Rxy", f: "∀x∃y Rxy", name: "everything is related to something",
    eval: ({ dom, R }) => { const x = dom.find((a) => !dom.some((b) => R(a, b))); return x === undefined ? { v: true, why: "every x has some y with Rxy" } : { v: false, why: `nothing is R-related from ${x}` }; },
  },
  {
    short: "∃x∀y Rxy", f: "∃x∀y Rxy", name: "something is related to everything",
    eval: ({ dom, R }) => { const x = dom.find((a) => dom.every((b) => R(a, b))); return x !== undefined ? { v: true, why: `${x} is related to everything` } : { v: false, why: "no x is related to every y" }; },
  },
  {
    short: "reflexive", f: "∀x Rxx", name: "reflexive",
    eval: ({ dom, R }) => { const x = dom.find((a) => !R(a, a)); return x === undefined ? { v: true, why: "every x has Rxx" } : { v: false, why: `not R${x}${x}` }; },
  },
  {
    short: "symmetric", f: "∀x∀y(Rxy → Ryx)", name: "symmetric",
    eval: ({ dom, R }) => { for (const a of dom) for (const b of dom) if (R(a, b) && !R(b, a)) return { v: false, why: `R holds from ${a} to ${b} but not back` }; return { v: true, why: "every pair goes both ways" }; },
  },
  {
    short: "transitive", f: "∀x∀y∀z((Rxy ∧ Ryz) → Rxz)", name: "transitive",
    eval: ({ dom, R }) => { for (const a of dom) for (const b of dom) for (const c of dom) if (R(a, b) && R(b, c) && !R(a, c)) return { v: false, why: `R${a}${b} and R${b}${c} but not R${a}${c}` }; return { v: true, why: "no chain fails" }; },
  },
];

/** One relation symbol, several interpretations, and the truth value of each sentence in each. */
export function InterpretViz() {
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const I = INTERPS[i];
  const sel = SENTENCES[j].eval(I);

  return (
    <figure className="viz">
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ textAlign: "center" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", textTransform: "none" }}>R means&hellip;</th>
              {SENTENCES.map((s) => <th key={s.f} className="mono" style={{ textTransform: "none", whiteSpace: "nowrap", fontSize: 12 }} title={s.f}>{s.short}</th>)}
            </tr>
          </thead>
          <tbody>
            {INTERPS.map((row, r) => (
              <tr key={row.name}>
                <td style={{ textAlign: "left", minWidth: 170 }}>{row.name}</td>
                {SENTENCES.map((s, c) => {
                  const v = s.eval(row).v;
                  const on = r === i && c === j;
                  return (
                    <td key={s.f} style={{ padding: 2 }}>
                      <button type="button" onClick={() => { setI(r); setJ(c); }} aria-pressed={on} aria-label={`${s.f} under ${row.name}: ${v ? "true" : "false"}`}
                        className={v ? "viz-verdict viz-verdict-info" : "viz-verdict viz-verdict-right"}
                        style={{ width: 40, height: 30, borderRadius: 6, border: on ? "2px solid var(--accent)" : "1px solid var(--border)", background: on ? "var(--accent-soft)" : "var(--surface)", fontWeight: 600, cursor: "pointer" }}>
                        {v ? "T" : "F"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-start", marginTop: 12 }}>
        <table className="table" style={{ width: "auto", textAlign: "center" }} aria-label={`The relation ${I.name}: rows are x, columns are y`}>
          <thead><tr><th className="mono-meta" style={{ textTransform: "none" }}>Rxy</th>{I.dom.map((y) => <th key={y} className="mono">{y}</th>)}</tr></thead>
          <tbody>
            {I.dom.map((x) => (
              <tr key={x}>
                <th className="mono">{x}</th>
                {I.dom.map((y) => <td key={y} style={{ padding: 3 }}><span style={{ display: "inline-block", width: 22, height: 22, borderRadius: 4, border: "1px solid var(--border-strong)", background: I.R(x, y) ? "var(--accent)" : "transparent" }} /></td>)}
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ flex: "1 1 240px" }}>
          <p className="mono" style={{ margin: "4px 0" }}>{SENTENCES[j].f}</p>
          <p style={{ margin: "4px 0" }}>({SENTENCES[j].name}) is <strong>{sel.v ? "true" : "false"}</strong> when R means {I.name}: {sel.why}.</p>
        </div>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        The sentences never change; only the interpretation does. Click any cell to see why the sentence is true or false
        there. A sentence true in every row would be a candidate for a logical truth; none of these is.
      </figcaption>
    </figure>
  );
}
