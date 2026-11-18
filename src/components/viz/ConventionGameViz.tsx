"use client";

import { useState } from "react";

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

const POP = 40;

/** Drivers meeting at random each choose a side; following the majority they have met, a convention emerges. */
export function ConventionGameViz() {
  const [seed, setSeed] = useState(1);
  const [rounds, setRounds] = useState(0);
  const r = rng(seed * 9973 + 5);
  const left = Array.from({ length: POP }, () => 1 + Math.floor(r() * 2));
  const right = Array.from({ length: POP }, () => 1 + Math.floor(r() * 2));
  const choose = (i: number) => (left[i] > right[i] ? "L" : right[i] > left[i] ? "R" : r() < 0.5 ? "L" : "R");
  const history: number[] = [];
  let crashes = 0, lastCrash = 0;
  for (let t = 0; t < rounds; t++) {
    for (let k = 0; k < POP / 2; k++) {
      const i = Math.floor(r() * POP); let j = Math.floor(r() * POP); if (j === i) j = (j + 1) % POP;
      const a = choose(i), b = choose(j);
      if (a !== b) { crashes++; lastCrash = t + 1; }
      for (const [p, q] of [[i, b], [j, a]] as const) { if (q === "L") left[p]++; else right[p]++; }
    }
    history.push(Array.from({ length: POP }, (_, i) => (choose(i) === "L" ? 1 : 0) as number).reduce((x, y) => x + y, 0));
  }
  const nowL = Array.from({ length: POP }, (_, i) => choose(i)).filter((c) => c === "L").length;
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>
        Forty drivers on a new island meet in random pairs on narrow roads. Each keeps to whichever side most of the drivers
        they have met kept to.
      </p>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setRounds(rounds + 5)}>Drive five more days</button>
        <button type="button" className="btn btn-ghost" onClick={() => { setSeed(seed + 1); setRounds(0); }}>New island</button>
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="Number of drivers keeping left, day by day" style={{ width: "100%", display: "block" }}>
        <line x1={30} y1={10} x2={510} y2={10} style={{ stroke: "var(--border)" }} />
        <line x1={30} y1={100} x2={510} y2={100} style={{ stroke: "var(--border)" }} />
        <text x={2} y={14} style={{ fill: "var(--text-muted)", fontSize: 10 }}>all L</text>
        <text x={2} y={104} style={{ fill: "var(--text-muted)", fontSize: 10 }}>all R</text>
        {history.map((h, t) => <circle key={t} cx={30 + ((t + 1) / Math.max(rounds, 20)) * 480} cy={100 - (h / POP) * 90} r={2.5} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(20, 1fr)", gap: 3, maxWidth: 520 }}>
        {Array.from({ length: POP }, (_, i) => choose(i)).map((c, i) => (
          <div key={i} className="mono" style={{ textAlign: "center", fontSize: 11, padding: "2px 0", borderRadius: 3, background: c === "L" ? "var(--accent-soft)" : "var(--danger-soft)" }}>{c}</div>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>days driven: {rounds}; collisions so far: {crashes}; last collision on day {lastCrash || "none"}</div>
        <div style={{ fontWeight: 700 }}>keeping left now: {nowL} of {POP}</div>
      </div>
      <figcaption className="viz-caption">
        No one agrees to anything, yet the drivers settle on one side, and on a new island it may be the other. For Lewis a
        convention is such a regularity: everyone conforms, expects others to, and prefers to conform given that others do,
        where another regularity would have served as well.
      </figcaption>
    </figure>
  );
}
