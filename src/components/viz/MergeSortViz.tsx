"use client";

import { useState } from "react";

const INPUT = [38, 27, 43, 3, 9, 82, 10, 51];
const N = INPUT.length;
const LEVELS = Math.log2(N); // 3

function merge(a: number[], b: number[]): { out: number[]; comps: number } {
  const out: number[] = []; let i = 0, j = 0, comps = 0;
  while (i < a.length && j < b.length) { comps++; out.push(a[i] <= b[j] ? a[i++] : b[j++]); }
  return { out: [...out, ...a.slice(i), ...b.slice(j)], comps };
}

type Row = { label: string; blocks: number[][]; comps: number; phase: "split" | "merge" };
function rows(): Row[] {
  const out: Row[] = [];
  for (let d = 0; d <= LEVELS; d++) {
    const size = N / 2 ** d;
    const blocks = Array.from({ length: 2 ** d }, (_, i) => INPUT.slice(i * size, (i + 1) * size));
    out.push({ label: d === 0 ? "the whole list" : `split into ${2 ** d} halves`, blocks, comps: 0, phase: "split" });
  }
  let cur = INPUT.map((x) => [x]);
  while (cur.length > 1) {
    const next: number[][] = []; let comps = 0;
    for (let i = 0; i < cur.length; i += 2) { const m = merge(cur[i], cur[i + 1]); next.push(m.out); comps += m.comps; }
    cur = next;
    out.push({ label: `merge into ${cur.length} sorted ${cur.length === 1 ? "list" : "lists"}`, blocks: cur, comps, phase: "merge" });
  }
  return out;
}
const ROWS = rows();

/** Merge sort: split in half until the pieces are trivial, then merge sorted halves back up. */
export function MergeSortViz() {
  const [step, setStep] = useState(0);
  const shown = ROWS.slice(0, step + 1);
  const total = shown.reduce((s, r) => s + r.comps, 0);

  return (
    <figure className="viz">
      <div style={{ display: "grid", gap: 8 }}>
        {shown.map((r, k) => (
          <div key={k} style={{ display: "grid", gridTemplateColumns: "170px 1fr", gap: 10, alignItems: "center" }}>
            <span className="mono-meta" style={{ textTransform: "none", margin: 0 }}>{r.label}{r.phase === "merge" ? ` (${r.comps} comparisons)` : ""}</span>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {r.blocks.map((b, i) => (
                <span key={i} className="mono" style={{
                  padding: "4px 8px", borderRadius: 6, fontSize: 13,
                  border: `1px solid ${k === step ? "var(--accent)" : "var(--border)"}`,
                  background: r.phase === "merge" ? "var(--accent-soft)" : "var(--bg-subtle)",
                }}>{b.join(" ")}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 12 }}>
        <button type="button" className="btn btn-primary" disabled={step === ROWS.length - 1} onClick={() => setStep(step + 1)}>Next level</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {step <= LEVELS
          ? `Splitting: a list of one element is already sorted, which is the base case of the recursion. There are log₂ ${N} = ${LEVELS} levels of splitting.`
          : step === ROWS.length - 1
            ? `Sorted, with ${total} comparisons. Each merge level costs fewer than n comparisons in all, and there are log₂ n levels, so T(n) = 2T(n/2) + O(n) gives O(n log n).`
            : `Merging two sorted lists needs one comparison per element placed, at most. ${total} comparisons so far.`}
      </figcaption>
    </figure>
  );
}
