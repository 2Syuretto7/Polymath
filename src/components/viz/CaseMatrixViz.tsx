"use client";

import { useState } from "react";

export type CaseVerdict = { ok: boolean; why: string };

/** A grid of theories against test cases: click a cell to see whether the theory gives the right verdict, and why. */
export function CaseMatrixViz({ theories, cases, verdicts, prompt }: { theories: string[]; cases: string[]; verdicts: CaseVerdict[][]; prompt: string }) {
  const [open, setOpen] = useState<Set<string>>(new Set());
  const [sel, setSel] = useState<[number, number] | null>(null);
  const click = (i: number, j: number) => { const k = `${i},${j}`; setOpen(new Set(open).add(k)); setSel([i, j]); };
  const v = sel ? verdicts[sel[0]][sel[1]] : null;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>{prompt}</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table" style={{ width: "auto" }}>
          <thead>
            <tr><th></th>{cases.map((c) => <th key={c} style={{ fontWeight: 500, fontSize: 13 }}>{c}</th>)}</tr>
          </thead>
          <tbody>
            {theories.map((t, i) => (
              <tr key={t}>
                <td style={{ fontSize: 13 }}>{t}</td>
                {cases.map((c, j) => {
                  const shown = open.has(`${i},${j}`), r = verdicts[i][j], on = sel && sel[0] === i && sel[1] === j;
                  return (
                    <td key={c} style={{ textAlign: "center" }}>
                      <button type="button" aria-pressed={!!on} className={on ? "viz-chip is-on" : "viz-chip"} onClick={() => click(i, j)}
                        style={shown ? { color: r.ok ? "var(--accent)" : "var(--danger)" } : undefined}>
                        {shown ? (r.ok ? "right" : "wrong") : "test"}
                      </button>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ margin: "8px 0", minHeight: 44 }}>
        {v && sel ? <><strong>{theories[sel[0]]} on {cases[sel[1]]}:</strong> {v.why}</> : "Click a cell to test a theory against a case."}
      </p>
      <figcaption className="viz-caption">
        {open.size} of {theories.length * cases.length} tests revealed. A theory survives only if it gives the right verdict in every case, and that includes counting the clear cases of knowledge as knowledge.
      </figcaption>
    </figure>
  );
}
