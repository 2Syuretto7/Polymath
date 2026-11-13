"use client";

import { useState } from "react";

type S = "S0" | "S5";
const STATE_NAME: Record<S, string> = { S0: "nothing paid", S5: "₹5 paid" };

/** A machine table: a tea machine whose states are defined only by their relations to inputs, outputs and each other. */
export function MachineTableViz() {
  const [s, setS] = useState<S>("S0");
  const [log, setLog] = useState<string[]>([]);
  const [real, setReal] = useState(0);
  const step = (coin: 5 | 10) => {
    let out = "", next: S = s;
    if (s === "S0" && coin === 5) { next = "S5"; out = "nothing"; }
    else if (s === "S0" && coin === 10) { next = "S0"; out = "a cup of tea"; }
    else if (s === "S5" && coin === 5) { next = "S0"; out = "a cup of tea"; }
    else { next = "S0"; out = "a cup of tea and ₹5 change"; }
    setLog([`in ${s}, ₹${coin} in → ${out}, now ${next}`, ...log].slice(0, 6));
    setS(next);
  };
  const REAL = ["brass gears and levers", "transistors on a chip", "a person following a card of instructions"];
  const row = (st: S, coin: string, out: string, next: S) => (
    <tr style={{ background: st === s ? "var(--bg-subtle)" : undefined }}>
      <td className="mono" style={{ fontWeight: st === s ? 700 : 400 }}>{st}</td><td>{coin}</td><td>{out}</td><td className="mono">{next}</td>
    </tr>
  );
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>A tea machine sells tea for ₹10 and accepts ₹5 and ₹10 coins.</p>
      <table className="table" style={{ width: "auto" }}>
        <thead><tr><th style={{ textTransform: "none" }}>state</th><th style={{ textTransform: "none" }}>input</th><th style={{ textTransform: "none" }}>output</th><th style={{ textTransform: "none" }}>next state</th></tr></thead>
        <tbody>
          {row("S0", "₹5", "nothing", "S5")}
          {row("S0", "₹10", "tea", "S0")}
          {row("S5", "₹5", "tea", "S0")}
          {row("S5", "₹10", "tea and ₹5 change", "S0")}
        </tbody>
      </table>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => step(5)}>Insert ₹5</button>
        <button type="button" className="btn" onClick={() => step(10)}>Insert ₹10</button>
        <span className="mono" style={{ fontSize: 14 }}>current state: {s} ({STATE_NAME[s]})</span>
      </div>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 2, minHeight: 20 }}>{log.map((l, i) => <div key={i} style={{ color: i ? "var(--text-muted)" : "var(--text)" }}>{l}</div>)}</div>
      <div className="viz-controls">
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>built from:</span>
        {REAL.map((r, i) => <button key={r} type="button" aria-pressed={real === i} className={real === i ? "viz-chip is-on" : "viz-chip"} onClick={() => setReal(i)}>{r}</button>)}
      </div>
      <figcaption className="viz-caption">
        S5 is fully defined by the table: it is the state that, given ₹5, yields tea and returns to S0, and given ₹10 yields tea and change. Built from {REAL[real]}, the machine has the same states. Functionalism says mental states are like this: pain is whatever state is caused by damage, causes distress and avoidance, and interacts with beliefs and desires in the right way.
      </figcaption>
    </figure>
  );
}
