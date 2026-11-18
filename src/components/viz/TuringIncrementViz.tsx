"use client";

import { useState } from "react";

type Conf = { tape: string[]; head: number; state: string; steps: number };
const B = "□";
const RULES: Record<string, string> = {
  "right,0": "0, R, right",
  "right,1": "1, R, right",
  [`right,${B}`]: `${B}, L, carry`,
  "carry,1": "0, L, carry",
  "carry,0": "1, stay, halt",
  [`carry,${B}`]: "1, stay, halt",
};

export function step(c: Conf): Conf {
  if (c.state === "halt") return c;
  const tape = [...c.tape];
  let head = c.head;
  if (head < 0) { tape.unshift(B); head = 0; }
  if (head >= tape.length) tape.push(B);
  const sym = tape[head];
  const [w, mv, st] = RULES[`${c.state},${sym}`].split(", ");
  tape[head] = w;
  if (mv === "R") head++;
  if (mv === "L") head--;
  if (head < 0) { tape.unshift(B); head = 0; }
  if (head >= tape.length) tape.push(B);
  return { tape, head, state: st, steps: c.steps + 1 };
}

export function run(input: string): Conf {
  let c: Conf = { tape: [B, ...input.split(""), B], head: 1, state: "right", steps: 0 };
  while (c.state !== "halt" && c.steps < 200) c = step(c);
  return c;
}

const INPUTS = ["1011", "111", "100"];

/** A Turing machine that adds one to a binary number: walk right to the end, then carry leftwards. */
export function TuringIncrementViz() {
  const [inp, setInp] = useState(INPUTS[0]);
  const start = (s: string): Conf => ({ tape: [B, ...s.split(""), B], head: 1, state: "right", steps: 0 });
  const [c, setC] = useState<Conf>(start(INPUTS[0]));
  const key = `${c.state},${c.tape[c.head]}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="input">
        {INPUTS.map((s) => <button key={s} type="button" aria-pressed={inp === s} className={inp === s ? "seg is-on" : "seg"} onClick={() => { setInp(s); setC(start(s)); }}>input {s}</button>)}
      </div>
      <div style={{ display: "flex", gap: 2, marginTop: 14, flexWrap: "wrap" }} aria-label="tape">
        {c.tape.map((s, i) => (
          <div key={i} className="mono" style={{ width: 34, height: 34, display: "grid", placeItems: "center", border: i === c.head ? "2px solid var(--accent)" : "1px solid var(--border)", background: i === c.head ? "var(--accent-soft)" : "transparent", fontSize: 16, fontWeight: 700 }}>{s}</div>
        ))}
      </div>
      <div className="mono" style={{ fontSize: 13, marginTop: 8, display: "grid", gap: 3 }}>
        <div>state: <strong>{c.state}</strong> · steps taken: {c.steps}</div>
        <div>{c.state === "halt" ? `halted with ${c.tape.filter((s) => s !== B).join("")} on the tape` : `rule for (${c.state}, ${c.tape[c.head]}): write ${RULES[key]}`}</div>
      </div>
      <div className="viz-controls" style={{ display: "flex", gap: 8, marginTop: 8 }}>
        <button type="button" className="btn btn-primary" disabled={c.state === "halt"} onClick={() => setC(step(c))}>Step</button>
        <button type="button" className="btn btn-ghost" disabled={c.state === "halt"} onClick={() => setC(run(inp))}>Run to halt</button>
        <button type="button" className="btn btn-ghost" onClick={() => setC(start(inp))}>Reset</button>
      </div>
      <figcaption className="viz-caption">
        Six rules suffice. The machine reads one square at a time, and each rule says, for the current state and symbol, what
        to write, which way to move and which state to enter. Everything a computer does can be broken into steps this small.
      </figcaption>
    </figure>
  );
}
