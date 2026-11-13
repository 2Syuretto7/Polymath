"use client";

import { useState } from "react";

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function shuffle(n: number, r: () => number): number[] {
  const p = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; }
  return p;
}

const SIZES = [4, 8, 20];

/** Hats are handed back at random. Count how many people get their own hat back, and watch the average settle near 1. */
export function HatCheckViz() {
  const [n, setN] = useState(8);
  const [trials, setTrials] = useState<number[]>([]);
  const [perm, setPerm] = useState<number[]>(() => Array.from({ length: 8 }, (_, i) => i));
  const [seed, setSeed] = useState(11);

  const run = (times: number) => {
    const r = rng(seed * 7919 + n);
    const add: number[] = [];
    let last = perm;
    for (let t = 0; t < times; t++) {
      last = shuffle(n, r);
      add.push(last.filter((h, i) => h === i).length);
    }
    setPerm(last); setTrials([...trials, ...add]); setSeed(seed + 1);
  };
  const pick = (m: number) => { setN(m); setTrials([]); setPerm(Array.from({ length: m }, (_, i) => i)); };
  const avg = trials.length ? trials.reduce((a, b) => a + b, 0) / trials.length : 0;
  const fixed = trials.length ? perm.filter((h, i) => h === i).length : 0;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Number of people">
        {SIZES.map((m) => (
          <button key={m} type="button" className={m === n ? "seg is-on" : "seg"} aria-pressed={m === n} onClick={() => pick(m)}>{m} people</button>
        ))}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6, margin: "12px 0" }}>
        {perm.map((h, i) => {
          const own = trials.length > 0 && h === i;
          return (
            <div key={i} style={{ width: 52, padding: "4px 0", textAlign: "center", borderRadius: 6, border: "1px solid var(--border)", background: own ? "var(--accent-soft)" : "var(--bg-subtle)" }}>
              <div style={{ fontSize: 11, color: "var(--text-muted)" }}>person {i + 1}</div>
              <div className="mono" style={{ fontSize: 13, fontWeight: own ? 600 : 400 }}>{trials.length ? `hat ${h + 1}` : "?"}</div>
            </div>
          );
        })}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => run(1)}>Hand back the hats</button>
        <button type="button" className="btn" onClick={() => run(100)}>Do it 100 times</button>
        <button type="button" className="btn" onClick={() => pick(n)}>Start again</button>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>own hats this time</td><td className="mono">{trials.length ? fixed : "none yet"}</td></tr>
          <tr><td>rounds so far</td><td className="mono">{trials.length}</td></tr>
          <tr><td>average number of own hats</td><td className="mono">{trials.length ? avg.toFixed(3) : "none yet"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Each person gets their own hat with probability 1/{n}, and there are {n} people, so by linearity of expectation the
        expected number of own hats is {n} × 1/{n} = 1, whatever the number of people.
      </figcaption>
    </figure>
  );
}
