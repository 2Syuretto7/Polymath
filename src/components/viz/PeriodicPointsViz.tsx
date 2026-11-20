"use client";

import { useMemo, useState } from "react";

export const MAPS = [
  { label: "Doubling map", f: (x: number) => (2 * x) % 1 },
  { label: "Logistic, r = 4", f: (x: number) => 4 * x * (1 - x) },
  { label: "Logistic, r = 3.83", f: (x: number) => 3.83 * x * (1 - x) },
];
const G = 60000;
const iter = (f: (x: number) => number, n: number, x: number) => { for (let i = 0; i < n; i++) x = f(x); return x; };

/** Points x in [0, 1) with fⁿ(x) = x, found from sign changes of fⁿ(x) − x on a fine grid (exact for the doubling map). */
export function periodicPoints(m: number, n: number) {
  if (m === 0) { const d = 2 ** n - 1; return Array.from({ length: d }, (_, k) => k / d); }
  const f = MAPS[m].f, out: number[] = [];
  let prev = iter(f, n, 0) - 0;
  if (Math.abs(prev) < 1e-12) out.push(0);
  for (let i = 1; i <= G; i++) {
    const x = i / G, v = iter(f, n, x) - x;
    if ((prev < 0 && v >= 0) || (prev > 0 && v <= 0)) out.push(x);
    prev = v;
  }
  return out;
}

/** Periodic points of a chaotic map: the graph of fⁿ meets the diagonal more and more densely. */
export function PeriodicPointsViz() {
  const [m, setM] = useState(1);
  const [n, setN] = useState(3);
  const pts = useMemo(() => periodicPoints(m, n), [m, n]);
  const graph = useMemo(() => { const f = MAPS[m].f, s: string[] = []; let prevY = -1; for (let i = 0; i <= 1200; i++) { const x = i / 1200, y = iter(f, n, x); s.push(`${i && Math.abs(y - prevY) < 0.5 ? "L" : "M"}${(60 + x * 180).toFixed(1)},${(200 - y * 180).toFixed(1)}`); prevY = y; } return s.join(""); }, [m, n]);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Map">
        {MAPS.map((g, i) => <button key={g.label} type="button" aria-pressed={m === i} className={m === i ? "seg is-on" : "seg"} onClick={() => setM(i)}>{g.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>n = {n} <input type="range" min={1} max={6} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 222" role="img" aria-label="Graph of the n-th iterate and its fixed points" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={60} y={20} width={180} height={180} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <line x1={60} y1={200} x2={240} y2={20} style={{ stroke: "var(--success)", strokeDasharray: "4 3" }} />
        <path d={graph} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2 }} />
        {pts.map((x, i) => <circle key={i} cx={60 + x * 180} cy={200 - x * 180} r={2.5} style={{ fill: "var(--danger)" }} />)}
        <text x={150} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>graph of the n-th iterate on [0, 1]</text>
        <line x1={280} y1={110} x2={520} y2={110} style={{ stroke: "var(--border-strong)" }} />
        <text x={280} y={130} style={{ fill: "var(--text-muted)", fontSize: 10 }}>0</text>
        <text x={520} y={130} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
        {pts.map((x, i) => <line key={i} x1={280 + x * 240} y1={98} x2={280 + x * 240} y2={122} style={{ stroke: "var(--danger)", strokeWidth: 1.2 }} />)}
        <text x={400} y={80} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>the same points on the interval</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {pts.length} points in [0, 1) satisfy fⁿ(x) = x for n = {n}.
      </p>
      <figcaption className="viz-caption">
        Each crossing of the graph with the diagonal is a point of period dividing n. For the doubling map and the logistic
        map at r = 4 their number doubles with each n and they fill the interval densely, one of Devaney&rsquo;s three
        conditions for chaos. At r = 3.83 there is an attracting cycle of period 3, and by the theorem of Li and Yorke,
        period three implies cycles of every period, though here almost every orbit is drawn to the stable cycle.
      </figcaption>
    </figure>
  );
}
