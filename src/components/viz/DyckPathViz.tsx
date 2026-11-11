"use client";

import { useMemo, useState } from "react";

/** All strings of n up-steps and n down-steps that never go below zero. */
function dyck(n: number): string[] {
  const out: string[] = [];
  const go = (s: string, up: number, down: number) => {
    if (up === n && down === n) { out.push(s); return; }
    if (up < n) go(s + "U", up + 1, down);
    if (down < up) go(s + "D", up, down + 1);
  };
  go("", 0, 0);
  return out;
}

/** Dyck paths, balanced brackets and the Catalan numbers. */
export function DyckPathViz() {
  const [n, setN] = useState(3);
  const [i, setI] = useState(0);
  const all = useMemo(() => dyck(n), [n]);
  const idx = Math.min(i, all.length - 1);
  const w = all[idx];
  const s = 34, pad = 16;
  const W = 2 * n * s + 2 * pad, H = n * s + 2 * pad;
  let y = 0;
  const pts: [number, number][] = [[0, 0]];
  for (const c of w) { y += c === "U" ? 1 : -1; pts.push([pts.length, y]); }
  const X = (k: number) => pad + k * s, Y = (h: number) => H - pad - h * s;
  const brackets = w.replace(/U/g, "(").replace(/D/g, ")");
  // First return to the axis splits the path into ( A ) B.
  let first = 0, h = 0;
  for (let k = 0; k < w.length; k++) { h += w[k] === "U" ? 1 : -1; if (h === 0) { first = k + 1; break; } }

  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>n = <span className="mono">{n}</span></span><input type="range" min={1} max={5} value={n} onChange={(e) => { setN(Number(e.target.value)); setI(0); }} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} style={{ width: "100%", maxWidth: Math.max(W, 260), display: "block", margin: "8px auto" }} role="img" aria-label={`Dyck path ${w}`}>
        {Array.from({ length: n + 1 }, (_, k) => <line key={k} x1={X(0)} x2={X(2 * n)} y1={Y(k)} y2={Y(k)} style={{ stroke: k === 0 ? "var(--border-strong)" : "var(--border)" }} />)}
        <polyline points={pts.slice(0, first + 1).map(([a, b]) => `${X(a)},${Y(b)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4, strokeLinejoin: "round" }} />
        <polyline points={pts.slice(first).map(([a, b]) => `${X(a)},${Y(b)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 4, strokeLinejoin: "round" }} />
        <circle cx={X(first)} cy={Y(0)} r={5} style={{ fill: "var(--danger)" }} />
      </svg>
      <table className="table mono">
        <tbody>
          <tr><td>steps</td><td>{w}</td></tr>
          <tr><td>brackets</td><td>{brackets}</td></tr>
          <tr><td>path</td><td>{idx + 1} of {all.length} = C{["₀", "₁", "₂", "₃", "₄", "₅"][n]}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="viz-chip" onClick={() => setI((idx + 1) % all.length)}>Next path</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        A Dyck path takes n steps up and n down without dipping below the axis; read U as an opening bracket and D as a closing one. The red dot marks the first return to the axis. It splits the path into a lifted Dyck path (in colour) and another Dyck path, which is why Cₙ₊₁ = C₀Cₙ + C₁Cₙ₋₁ + … + CₙC₀.
      </figcaption>
    </figure>
  );
}
