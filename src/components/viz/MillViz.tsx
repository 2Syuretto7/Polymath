"use client";

import { useState } from "react";

export type MillCase = { title: string; factors: string[]; rows: { name: string; has: boolean[]; effect: boolean }[]; note: string };

/** A table of cases. Pick a factor to test it by Mill's methods of agreement and difference. */
export function MillViz({ cases }: { cases: MillCase[] }) {
  const [k, setK] = useState(0);
  const [f, setF] = useState(0);
  const C = cases[k];
  const load = (i: number) => { setK(i); setF(0); };
  const withEffect = C.rows.filter((r) => r.effect);
  const without = C.rows.filter((r) => !r.effect);
  const agree = withEffect.every((r) => r.has[f]);
  const differ = without.every((r) => !r.has[f]);

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }} role="group" aria-label="Investigation">
        {cases.map((x, i) => (
          <button key={x.title} type="button" className={i === k ? "btn btn-primary" : "btn"} aria-pressed={i === k} onClick={() => load(i)}>{x.title}</button>
        ))}
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ marginTop: 12 }}>
          <thead>
            <tr>
              <th style={{ textTransform: "none" }}>case</th>
              {C.factors.map((x, i) => (
                <th key={x} style={{ textTransform: "none" }}>
                  <button type="button" className={i === f ? "viz-chip is-on" : "viz-chip"} style={{ cursor: "pointer" }} aria-pressed={i === f} onClick={() => setF(i)}>{x}</button>
                </th>
              ))}
              <th style={{ textTransform: "none" }}>effect</th>
            </tr>
          </thead>
          <tbody>
            {C.rows.map((r) => (
              <tr key={r.name}>
                <td>{r.name}</td>
                {r.has.map((h, i) => (
                  <td key={i} className="mono" style={{ textAlign: "center", background: i === f ? "var(--accent-soft)" : undefined }}>{h ? "yes" : "–"}</td>
                ))}
                <td className="mono" style={{ textAlign: "center", color: r.effect ? "var(--danger)" : "var(--text-muted)" }}>{r.effect ? "yes" : "no"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>agreement: present in every case with the effect?</td><td className="mono">{withEffect.length ? (agree ? "yes" : "no") : "no cases"}</td></tr>
          <tr><td>difference: absent from every case without it?</td><td className="mono">{without.length ? (differ ? "yes" : "no") : "no cases"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {agree && differ
          ? `“${C.factors[f]}” passes both tests: the joint method marks it as the likely cause, among the factors listed. ${C.note}`
          : `“${C.factors[f]}” fails at least one test. Click the column headings to test another factor.`}
      </figcaption>
    </figure>
  );
}
