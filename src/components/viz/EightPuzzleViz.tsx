"use client";

import { useState } from "react";

const SOLVED = [1, 2, 3, 4, 5, 6, 7, 8, 0];

function inversions(s: number[]) {
  const t = s.filter((x) => x !== 0);
  let c = 0;
  for (let i = 0; i < t.length; i++) for (let j = i + 1; j < t.length; j++) if (t[i] > t[j]) c++;
  return c;
}
const nbrs = (b: number) => [b - 3, b + 3, b % 3 ? b - 1 : -1, b % 3 < 2 ? b + 1 : -1].filter((x) => x >= 0 && x < 9);

/** The eight puzzle: sliding never changes the parity of the arrangement, so a puzzle with two tiles swapped can never be solved. */
export function EightPuzzleViz() {
  const [s, setS] = useState<number[]>(SOLVED);
  const [moves, setMoves] = useState(0);
  const blank = s.indexOf(0);
  const slide = (i: number) => {
    if (!nbrs(blank).includes(i)) return;
    const q = [...s]; [q[i], q[blank]] = [q[blank], q[i]]; setS(q); setMoves(moves + 1);
  };
  const shuffle = () => {
    let q = [...s], b = q.indexOf(0), prev = -1;
    for (let k = 0; k < 80; k++) {
      const opts = nbrs(b).filter((x) => x !== prev);
      const i = opts[Math.floor(Math.random() * opts.length)];
      [q[i], q[b]] = [q[b], q[i]]; prev = b; b = i;
    }
    setS(q); setMoves(0);
  };
  const swap12 = () => { const q = [...s]; const a = q.indexOf(1), b = q.indexOf(2); [q[a], q[b]] = [q[b], q[a]]; setS(q); };
  const inv = inversions(s);
  const solved = s.every((x, i) => x === SOLVED[i]);
  const size = 62;
  return (
    <figure className="viz">
      <svg viewBox="0 0 520 210" role="img" aria-label="A three by three sliding puzzle" style={{ width: "100%", display: "block" }}>
        {s.map((x, i) => {
          const X = 20 + (i % 3) * (size + 4), Y = 10 + Math.floor(i / 3) * (size + 4);
          if (x === 0) return <rect key={i} x={X} y={Y} width={size} height={size} rx={6} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "4 4" }} />;
          const can = nbrs(blank).includes(i);
          return <g key={i} style={{ cursor: can ? "pointer" : "default" }} onClick={() => slide(i)}>
            <rect x={X} y={Y} width={size} height={size} rx={6} style={{ fill: can ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
            <text x={X + size / 2} y={Y + size / 2 + 7} textAnchor="middle" style={{ fontSize: 22, fill: "var(--text)" }}>{x}</text></g>;
        })}
        <text x={250} y={36} style={{ fontSize: 12, fill: "var(--text-muted)" }}>reading order, ignoring the gap</text>
        <text x={250} y={60} className="mono" style={{ fontSize: 15, fill: "var(--text)" }}>{s.filter((x) => x).join(" ")}</text>
        <text x={250} y={100} style={{ fontSize: 12, fill: "var(--text-muted)" }}>pairs out of order</text>
        <text x={250} y={124} className="mono" style={{ fontSize: 15, fill: "var(--text)" }}>{inv}, which is {inv % 2 ? "odd" : "even"}</text>
        <text x={250} y={164} style={{ fontSize: 14, fill: inv % 2 ? "var(--danger)" : "var(--accent)" }}>{solved ? "solved" : inv % 2 ? "can never be solved by sliding" : "can be solved by sliding"}</text>
      </svg>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={shuffle}>Shuffle by sliding</button>
        <button type="button" className="btn" onClick={swap12}>Prise out 1 and 2 and swap them</button>
        <button type="button" className="btn" onClick={() => { setS(SOLVED); setMoves(0); }}>Reset</button>
      </div>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0 0" }}>Click a tile next to the gap to slide it. Slides so far: {moves}.</p>
      <figcaption className="viz-caption">
        A sideways slide leaves the reading order unchanged. An up or down slide moves one tile past two others, changing the count of out-of-order pairs by 2 or 0. So the parity never changes, and a single swap puts the puzzle in the other half of the arrangements, out of reach for ever.
      </figcaption>
    </figure>
  );
}
