"use client";

import { useState } from "react";

const fmt = (v: number) => "$" + Math.round(v).toLocaleString("en-US");

/** Newcomb's problem: evidential expected value against the causal dominance argument. */
export function NewcombViz() {
  const [mode, setMode] = useState(0);
  const [acc, setAcc] = useState(90);
  const [cred, setCred] = useState(50);
  const a = acc / 100, q = cred / 100;
  const one = mode === 0 ? a * 1e6 : q * 1e6;
  const two = mode === 0 ? (1 - a) * 1e6 + 1000 : q * 1e6 + 1000;
  const cell = (v: string, strong: boolean) => <td style={{ padding: "4px 10px", border: "1px solid var(--border)", fontWeight: strong ? 700 : 400, color: strong ? "var(--accent)" : "var(--text)" }}>{v}</td>;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="theory">
        {["evidential", "causal"].map((m, i) => <button key={m} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => setMode(i)}>{m}</button>)}
      </div>
      <div className="viz-controls">
        {mode === 0
          ? <label>predictor accuracy = {acc}% <input type="range" min={50} max={100} value={acc} onChange={(e) => setAcc(Number(e.target.value))} aria-label="accuracy" /></label>
          : <label>credence the box is already full = {cred}% <input type="range" min={0} max={100} value={cred} onChange={(e) => setCred(Number(e.target.value))} aria-label="credence" /></label>}
      </div>
      <table className="mono" style={{ fontSize: 13, borderCollapse: "collapse", marginTop: 8 }}>
        <thead><tr><th style={{ padding: "4px 10px" }}></th><th style={{ padding: "4px 10px" }}>opaque box full</th><th style={{ padding: "4px 10px" }}>opaque box empty</th></tr></thead>
        <tbody>
          <tr><th style={{ padding: "4px 10px", textAlign: "left" }}>one box</th>{cell("$1,000,000", false)}{cell("$0", false)}</tr>
          <tr><th style={{ padding: "4px 10px", textAlign: "left" }}>two boxes</th>{cell("$1,001,000", mode === 1)}{cell("$1,000", mode === 1)}</tr>
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {mode === 0 ? "Conditional on your choice" : "With the contents held fixed"}: one box {fmt(one)}, two boxes {fmt(two)}. Recommends {one > two ? "one box" : one < two ? "two boxes" : "either"}.
      </p>
      <figcaption className="viz-caption">
        Evidential decision theory weighs outcomes by P(state | act): the predictor is right with the given accuracy, so
        choosing one box is evidence that the box is full. Causal decision theory holds the contents fixed, since the
        prediction is already made: whatever your credence, two boxes gain $1,000 in each column.
      </figcaption>
    </figure>
  );
}
