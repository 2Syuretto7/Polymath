"use client";

import { useMemo, useState } from "react";

const INPUTS: Record<string, number[]> = {
  shuffled: [5, 2, 8, 1, 9, 3, 7, 4],
  "already sorted": [1, 2, 3, 4, 5, 7, 8, 9],
  reversed: [9, 8, 7, 5, 4, 3, 2, 1],
};

type State = { arr: number[]; placed: number; moved: number; comps: number };

function trace(input: number[]): State[] {
  const a = [...input];
  const states: State[] = [{ arr: [...a], placed: 1, moved: -1, comps: 0 }];
  let comps = 0;
  for (let i = 1; i < a.length; i++) {
    const key = a[i];
    let j = i - 1;
    while (j >= 0) {
      comps++;
      if (a[j] > key) { a[j + 1] = a[j]; j--; } else break;
    }
    a[j + 1] = key;
    states.push({ arr: [...a], placed: i + 1, moved: j + 1, comps });
  }
  return states;
}

const W = 600, H = 200;

/** Insertion sort, one insertion per step. The shaded prefix is always sorted: the invariant that proves the algorithm correct. */
export function InsertionSortViz() {
  const [input, setInput] = useState("shuffled");
  const [step, setStep] = useState(0);
  const states = useMemo(() => trace(INPUTS[input]), [input]);
  const s = states[step];
  const n = s.arr.length;
  const bw = (W - 20) / n;
  const done = step === states.length - 1;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Input">
        {Object.keys(INPUTS).map((k) => (
          <button key={k} type="button" className={k === input ? "seg is-on" : "seg"} aria-pressed={k === input} onClick={() => { setInput(k); setStep(0); }}>{k}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`The list ${s.arr.join(", ")}`} style={{ width: "100%", marginTop: 12 }}>
        {s.arr.map((v, i) => {
          const h = (v / 9) * (H - 40);
          const sorted = i < s.placed;
          return (
            <g key={i}>
              <rect x={10 + i * bw + 4} y={H - 20 - h} width={bw - 8} height={h} rx={3}
                style={{ fill: i === s.moved ? "var(--accent)" : sorted ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: sorted ? "var(--accent)" : "var(--border-strong)", strokeWidth: 1.2 }} />
              <text x={10 + i * bw + bw / 2} y={H - 4} textAnchor="middle" style={{ fontSize: 13, fill: "var(--text)", fontFamily: "var(--font-mono)" }}>{v}</text>
            </g>
          );
        })}
      </svg>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" disabled={done} onClick={() => setStep(step + 1)}>Insert next</button>
        <button type="button" className="btn" onClick={() => setStep(0)}>Start again</button>
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td>sorted prefix</td><td className="mono">{s.placed} of {n}</td></tr>
          <tr><td>comparisons so far</td><td className="mono">{s.comps}</td></tr>
          <tr><td>worst case for n = {n}</td><td className="mono">n(n − 1)/2 = {(n * (n - 1)) / 2}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {step === 0
          ? "Each step takes the next element and slides it left past every larger element, into its place in the shaded part."
          : done
            ? `Done after ${s.comps} comparisons. ${input === "already sorted" ? "A sorted list needs only n − 1 comparisons: each element is compared once and stays." : input === "reversed" ? "A reversed list is the worst case: every element slides all the way to the front." : "A shuffled list falls between the best and worst cases."}`
            : "The shaded prefix is sorted before and after every step. That invariant, and the fact that the prefix grows each time, prove the algorithm correct and that it stops."}
      </figcaption>
    </figure>
  );
}
