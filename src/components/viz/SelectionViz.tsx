"use client";

import { useMemo, useState } from "react";

const TARGET = "ORDER WITHOUT A DESIGNER";
const ABC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ ";

function rng(seed: number) {
  let s = seed >>> 0;
  return () => {
    s = (s + 0x6d2b79f5) >>> 0;
    let t = s;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Cumulative selection: copy with small random errors, keep the best copy, repeat. */
function evolve(seed: number) {
  const r = rng(seed);
  const pick = () => ABC[Math.floor(r() * ABC.length)];
  const score = (s: string) => [...s].filter((ch, i) => ch === TARGET[i]).length;
  let cur = Array.from(TARGET, pick).join("");
  const history = [cur];
  while (cur !== TARGET && history.length < 2000) {
    let best = cur, bestScore = -1;
    for (let k = 0; k < 100; k++) {
      const child = Array.from(cur, (ch) => (r() < 0.04 ? pick() : ch)).join("");
      const sc = score(child);
      if (sc > bestScore) { best = child; bestScore = sc; }
    }
    cur = best;
    history.push(cur);
  }
  return history;
}

/** Single-step chance against cumulative selection: why order can arise without a designer. */
export function SelectionViz() {
  const [seed, setSeed] = useState(7);
  const [gen, setGen] = useState(0);
  const history = useMemo(() => evolve(seed), [seed]);
  const g = Math.min(gen, history.length - 1);
  const cur = history[g];
  const matches = [...cur].filter((ch, i) => ch === TARGET[i]).length;
  const finished = cur === TARGET;

  return (
    <figure className="viz">
      <p className="mono" style={{ fontSize: 20, letterSpacing: 2, margin: "4px 0 12px", wordBreak: "break-all" }} aria-live="polite">
        {[...cur].map((ch, i) => (
          <span key={i} style={{ color: ch === TARGET[i] ? "var(--accent)" : "var(--text-muted)", fontWeight: ch === TARGET[i] ? 700 : 400 }}>{ch === " " ? " " : ch}</span>
        ))}
      </p>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setGen(g + 1)} disabled={finished}>Next generation</button>
        <button type="button" className="btn" onClick={() => setGen(g + 10)} disabled={finished}>Ten generations</button>
        <button type="button" className="btn" onClick={() => setGen(history.length - 1)} disabled={finished}>Run to the end</button>
        <button type="button" className="btn" onClick={() => { setSeed(seed + 1); setGen(0); }}>New random start</button>
      </div>
      <table className="table" style={{ marginTop: 16, marginBottom: 8 }}>
        <tbody>
          <tr><td>Generation</td><td className="mono">{g}</td></tr>
          <tr><td>Letters in place</td><td className="mono">{matches} of {TARGET.length}</td></tr>
          <tr><td>Chance of hitting the phrase in one random try</td><td className="mono">1 in 27<sup>{TARGET.length}</sup>, about 1 in 10<sup>34</sup></td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Each generation makes 100 copies of the current string with occasional random copying errors, and keeps whichever
        copy matches best. No step is designed, yet {finished ? <>the phrase appeared after {g} generations</> : <>the letters lock into place one by one</>}. A
        single random try would almost never succeed. Darwin&rsquo;s point against design arguments is that selection
        accumulates small chances. One caution: here the target is fixed in advance, while natural selection has no target,
        only survival.
      </figcaption>
    </figure>
  );
}
