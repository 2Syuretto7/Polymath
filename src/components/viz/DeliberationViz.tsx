"use client";

import { useState } from "react";

const OPTS = ["A", "B", "C"];
const DESC: Record<string, string> = { A: "small metro budget", B: "medium budget", C: "large budget" };
const PERMS = ["ABC", "ACB", "BAC", "BCA", "CAB", "CBA"];
const PRESETS: { name: string; r: string[] }[] = [
  { name: "before deliberation", r: ["ABC", "BCA", "CAB"] },
  { name: "after deliberation", r: ["ABC", "BCA", "CBA"] },
];

/** Majority cycles and how deliberation can remove them by making preferences single-peaked. */
export function DeliberationViz() {
  const [r, setR] = useState<string[]>(PRESETS[0].r);
  const beats = (x: string, y: string) => r.filter((p) => p.indexOf(x) < p.indexOf(y)).length;
  const pairs: [string, string][] = [["A", "B"], ["B", "C"], ["A", "C"]];
  const winner = OPTS.find((x) => OPTS.every((y) => y === x || beats(x, y) >= 2));
  const singlePeaked = r.every((p) => p[2] !== "B");
  const preset = PRESETS.findIndex((p) => p.r.join() === r.join());
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Preset">
        {PRESETS.map((p, i) => <button key={p.name} type="button" aria-pressed={preset === i} className={preset === i ? "seg is-on" : "seg"} onClick={() => setR(p.r)}>{p.name}</button>)}
      </div>
      <p style={{ margin: "8px 0", fontSize: 14 }}>Three equal groups of citizens rank three options: A, a {DESC.A}; B, a {DESC.B}; C, a {DESC.C}.</p>
      <table className="table" style={{ width: "auto" }}>
        <thead><tr><th style={{ textTransform: "none" }}>group</th><th style={{ textTransform: "none" }}>ranking, best first</th><th></th></tr></thead>
        <tbody>
          {r.map((p, i) => (
            <tr key={i}>
              <td>group {i + 1}</td>
              <td className="mono">{p.split("").join(" > ")}</td>
              <td><button type="button" className="viz-chip" onClick={() => setR(r.map((q, j) => (j === i ? PERMS[(PERMS.indexOf(q) + 1) % 6] : q)))}>change</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14, marginTop: 8 }}>
        {pairs.map(([x, y]) => { const b = beats(x, y); return <div key={x + y}>{x} vs {y}: {b}–{3 - b}, so {b >= 2 ? x : y} wins</div>; })}
        <div><strong>{winner ? `Condorcet winner: ${winner}` : "Majority cycle: every option loses to another"}</strong></div>
        <div>single-peaked along A, B, C: {singlePeaked ? "yes" : "no"}</div>
      </div>
      <figcaption className="viz-caption">
        Before deliberation the majority prefers A to B, B to C and C to A, so voting alone cannot settle the matter. If
        discussion leads everyone to see the issue as one of how much to spend, no group ranks the middle option last, the
        preferences become single-peaked, and a Condorcet winner exists. Dryzek and List argued deliberation can work this way.
      </figcaption>
    </figure>
  );
}
