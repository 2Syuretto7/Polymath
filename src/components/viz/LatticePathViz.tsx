"use client";

import { useState } from "react";

function binom(n: number, k: number) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return Math.round(r);
}

/** Paths that go right and up on a grid. The number reaching each point is a binomial coefficient, by Pascal's rule. */
export function LatticePathViz() {
  const [a, setA] = useState(4);
  const [b, setB] = useState(3);
  const [path, setPath] = useState<string>("RRUURRU".slice(0, 7));
  const steps = path.length === a + b && [...path].filter((c) => c === "R").length === a ? path : "R".repeat(a) + "U".repeat(b);
  const s = 50, pad = 30;
  const W = a * s + 2 * pad, H = b * s + 2 * pad;
  const X = (i: number) => pad + i * s, Y = (j: number) => H - pad - j * s;
  const pts: [number, number][] = [[0, 0]];
  for (const c of steps) { const [x, y] = pts[pts.length - 1]; pts.push(c === "R" ? [x + 1, y] : [x, y + 1]); }
  const random = () => {
    const arr = [..."R".repeat(a) + "U".repeat(b)];
    for (let i = arr.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [arr[i], arr[j]] = [arr[j], arr[i]]; }
    setPath(arr.join(""));
  };
  const last = steps[steps.length - 1];

  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>steps right a = <span className="mono">{a}</span></span><input type="range" min={1} max={6} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>steps up b = <span className="mono">{b}</span></span><input type="range" min={1} max={5} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: W * 1.2, display: "block", margin: "8px auto" }} role="img" aria-label={`Lattice paths to (${a}, ${b})`}>
        {Array.from({ length: a + 1 }, (_, i) => <line key={`v${i}`} x1={X(i)} y1={Y(0)} x2={X(i)} y2={Y(b)} style={{ stroke: "var(--border)" }} />)}
        {Array.from({ length: b + 1 }, (_, j) => <line key={`h${j}`} x1={X(0)} y1={Y(j)} x2={X(a)} y2={Y(j)} style={{ stroke: "var(--border)" }} />)}
        <polyline points={pts.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4, strokeLinejoin: "round" }} />
        {Array.from({ length: a + 1 }, (_, i) => Array.from({ length: b + 1 }, (_, j) => {
          const end = i === a && j === b;
          const feeds = (i === a - 1 && j === b) || (i === a && j === b - 1);
          return (
            <g key={`${i}-${j}`}>
              <circle cx={X(i)} cy={Y(j)} r={13} style={{ fill: end ? "var(--accent)" : "var(--bg-subtle)", stroke: feeds ? "var(--danger)" : "var(--border-strong)", strokeWidth: feeds ? 2 : 1 }} />
              <text x={X(i)} y={Y(j) + 4} textAnchor="middle" style={{ fontSize: 11, fill: end ? "var(--bg-subtle)" : "var(--text)", fontFamily: "var(--font-mono, monospace)" }}>{binom(i + j, i)}</text>
            </g>
          );
        }))}
      </svg>
      <table className="table mono" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>this path</td><td>{steps}</td></tr>
          <tr><td>paths to ({a}, {b})</td><td>C({a + b}, {a}) = {binom(a + b, a)} = {binom(a + b - 1, a - 1)} + {binom(a + b - 1, a)}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="viz-chip" onClick={random}>Another path</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        A path is a word of {a} R&rsquo;s and {b} U&rsquo;s, fixed by choosing where the {a} R&rsquo;s go: C({a + b}, {a}) ways. Every path ends with a step from one of the two points ringed in red, and this one&rsquo;s last step is {last === "R" ? "to the right" : "upwards"}. So each number is the sum of the number to its left and the number below it: Pascal&rsquo;s rule.
      </figcaption>
    </figure>
  );
}
