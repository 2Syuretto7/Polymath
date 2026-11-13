"use client";

import { useMemo, useState } from "react";

type Kind = "edge" | "saddle" | "corners";
const LABEL: Record<Kind, string> = { edge: "hot top edge", saddle: "boundary from x² − y²", corners: "two hot corners" };
const N = 24;

const boundary = (k: Kind, i: number, j: number): number => {
  const x = (i / N) * 2 - 1, y = (j / N) * 2 - 1;
  if (k === "edge") return j === N ? 1 : 0;
  if (k === "saddle") return x * x - y * y;
  return (i <= 6 && j >= N - 6) || (i >= N - 6 && j <= 6) ? 1 : 0;
};

/** Relaxation: replace every interior value by the average of its four neighbours until nothing changes. */
export function RelaxGridViz() {
  const [kind, setKind] = useState<Kind>("edge");
  const [steps, setSteps] = useState(40);
  const { grid, change } = useMemo(() => {
    let g = Array.from({ length: N + 1 }, (_, i) => Array.from({ length: N + 1 }, (_, j) => (i === 0 || j === 0 || i === N || j === N ? boundary(kind, i, j) : 0)));
    let change = 0;
    for (let s = 0; s < steps; s++) {
      const h = g.map((r) => r.slice());
      change = 0;
      for (let i = 1; i < N; i++) for (let j = 1; j < N; j++) {
        h[i][j] = (g[i - 1][j] + g[i + 1][j] + g[i][j - 1] + g[i][j + 1]) / 4;
        change = Math.max(change, Math.abs(h[i][j] - g[i][j]));
      }
      g = h;
    }
    return { grid: g, change };
  }, [kind, steps]);
  const all = grid.flat();
  const lo = Math.min(...all), hi = Math.max(...all);
  let bmax = -Infinity, imax = -Infinity, err = 0;
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    const v = grid[i][j], edge = i === 0 || j === 0 || i === N || j === N;
    if (edge) bmax = Math.max(bmax, v); else imax = Math.max(imax, v);
    if (kind === "saddle" && !edge) { const x = (i / N) * 2 - 1, y = (j / N) * 2 - 1; err = Math.max(err, Math.abs(v - (x * x - y * y))); }
  }
  const c = 220 / (N + 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Boundary values">
        {(["edge", "saddle", "corners"] as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>averaging sweeps: <span className="mono">{steps}</span></span>
          <input type="range" min={0} max={1000} step={10} value={steps} onChange={(e) => setSteps(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="A square grid of values, darker where larger" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {grid.map((col, i) => col.map((v, j) => (
          <rect key={`${i}-${j}`} x={20 + i * c} y={10 + (N - j) * c} width={c + 0.4} height={c + 0.4} style={{ fill: "var(--accent)", opacity: hi > lo ? ((v - lo) / (hi - lo)) * 0.92 + 0.03 : 0.03 }} />
        )))}
        <rect x={20} y={10} width={220} height={220} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <text x={262} y={40} style={{ fill: "var(--text)", fontSize: 13 }}>the outer ring of cells is fixed;</text>
        <text x={262} y={58} style={{ fill: "var(--text)", fontSize: 13 }}>each sweep replaces every inner</text>
        <text x={262} y={76} style={{ fill: "var(--text)", fontSize: 13 }}>value by the average of its four</text>
        <text x={262} y={94} style={{ fill: "var(--text)", fontSize: 13 }}>neighbours</text>
        <text x={262} y={130} style={{ fill: "var(--text)", fontSize: 13 }}>darker cells hold larger values</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>largest change in the last sweep: {change.toExponential(2)}</div>
        <div>max on the boundary: {bmax.toFixed(4)}; max inside: {imax.toFixed(4)}</div>
        {kind === "saddle" && <div>largest gap from x² − y² inside: {err.toFixed(4)}</div>}
        <div style={{ fontWeight: 700 }}>{change < 1e-4 && steps > 0 ? "settled: each inner value is the average of its neighbours" : "still relaxing"}</div>
      </div>
      <figcaption className="viz-caption">
        A function whose value at each point is the average of its neighbours is the discrete version of a harmonic function,
        one with uₓₓ + uᵧᵧ = 0. Repeated averaging, Jacobi&rsquo;s method, converges to it. For the boundary values of x² − y²,
        which is exactly harmonic and also satisfies the discrete equation, the limit is x² − y² itself. Inside, the values
        never exceed the largest boundary value.
      </figcaption>
    </figure>
  );
}
