"use client";

import { useMemo, useState } from "react";
import { seededRng } from "./seededRng";

const NMAX = 3000;

/** The law of large numbers: running averages of die rolls settle towards 3.5, within a band shrinking like 1/√n. */
export function RunningMeanViz() {
  const [seed, setSeed] = useState(5);
  const [paths, setPaths] = useState(5);
  const runs = useMemo(() => Array.from({ length: paths }, (_, j) => {
    const r = seededRng(seed * 101 + j);
    let s = 0;
    return Array.from({ length: NMAX }, (_, i) => { s += 1 + Math.floor(6 * r()); return s / (i + 1); });
  }), [seed, paths]);
  const W = 520, H = 240, pad = 34;
  const X = (n: number) => pad + (Math.log10(n) / Math.log10(NMAX)) * (W - 2 * pad);
  const Y = (m: number) => H - 24 - ((Math.max(1, Math.min(6, m)) - 1) / 5) * (H - 40);
  const sd = Math.sqrt(35 / 12);
  const band = (sgn: number) => Array.from({ length: 200 }, (_, i) => Math.round(Math.pow(NMAX, i / 199))).map((n, i) => `${i ? "L" : "M"}${X(n).toFixed(1)},${Y(3.5 + sgn * 2 * sd / Math.sqrt(n)).toFixed(1)}`).join(" ");
  const idx = Array.from({ length: 300 }, (_, i) => Math.round(Math.pow(NMAX, i / 299)));
  const last = runs.map((r) => r[NMAX - 1]);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>number of runs: <span className="mono">{paths}</span></span>
          <input type="range" min={1} max={12} step={1} value={paths} onChange={(e) => setPaths(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-primary" onClick={() => setSeed(1 + Math.floor(Math.random() * 1e6))}>Roll new runs</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Running averages of die rolls on a logarithmic axis" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <path d={band(1)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <path d={band(-1)} style={{ fill: "none", stroke: "var(--text-faint)", strokeDasharray: "4 3" }} />
        <line x1={pad} y1={Y(3.5)} x2={W - pad} y2={Y(3.5)} style={{ stroke: "var(--text-muted)" }} />
        {runs.map((r, j) => <path key={j} d={idx.map((n, i) => `${i ? "L" : "M"}${X(n).toFixed(1)},${Y(r[n - 1]).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeOpacity: 0.75, strokeWidth: 1.3 }} />)}
        {[1, 10, 100, 1000].map((n) => <text key={n} x={X(n)} y={H - 6} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{n}</text>)}
        {[1, 3.5, 6].map((m) => <text key={m} x={pad - 6} y={Y(m) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{m}</text>)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>averages after {NMAX} rolls: {last.map((v) => v.toFixed(3)).join(", ")}</p>
      <figcaption className="viz-caption">
        Each curve is the average of the first n rolls of a fair die, with n on a logarithmic scale. Early averages swing widely; later ones hug 3.5. The dashed curves are 3.5 ± 2σ/√n, which shrink slowly: a hundred times as many rolls buys only ten times the precision.
      </figcaption>
    </figure>
  );
}
