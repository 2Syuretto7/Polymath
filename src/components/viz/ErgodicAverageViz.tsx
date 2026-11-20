"use client";

import { useState } from "react";

const PHI = (Math.sqrt(5) - 1) / 2;
const MAPS = [
  { label: "golden rotation", f: (x: number) => (x + PHI) % 1, space: 1 / 3, ergodic: true },
  { label: "rotation by ½", f: (x: number) => (x + 0.5) % 1, space: 1 / 3, ergodic: false },
  { label: "logistic, r = 4", f: (x: number) => 4 * x * (1 - x), space: 3 / 8, ergodic: true },
];
export const STARTS = [0.1, 0.3, 0.5, 0.7, 0.9];
const COLS = ["var(--accent)", "var(--success)", "var(--text)", "var(--danger)", "var(--text-muted)"];
/** Running time averages of f(x) = x² along the orbit of x₀. */
export function timeAverages(k: number, x0: number, N: number) {
  const out: number[] = [];
  let x = x0 === 0.5 && k === 2 ? 0.5001 : x0, s = 0;
  for (let n = 1; n <= N; n++) { s += x * x; out.push(s / n); x = MAPS[k].f(x); }
  return out;
}

/** Time averages against the space average: Birkhoff's ergodic theorem. */
export function ErgodicAverageViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(3);
  const N = Math.round(10 ** e);
  const runs = STARTS.map((x0) => timeAverages(k, x0, N));
  const idx = Array.from({ length: 120 }, (_, i) => Math.max(1, Math.round(N ** (i / 119)))).filter((v, i, a) => i === 0 || v !== a[i - 1]);
  const px = (n: number) => 40 + (Math.log10(n) / Math.max(0.5, Math.log10(N))) * 460, py = (v: number) => 200 - Math.min(1, v) * 175;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        {MAPS.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>orbit length N = {N.toLocaleString("en-IN")} <input type="range" min={1} max={5} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log N" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Running averages along five orbits" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        <line x1={40} y1={25} x2={40} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[0, 0.5, 1].map((v) => <text key={v} x={34} y={py(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <line x1={40} y1={py(MAPS[k].space)} x2={500} y2={py(MAPS[k].space)} style={{ stroke: "var(--danger)", strokeDasharray: "5 3" }} />
        {runs.map((r, j) => <path key={j} d={idx.map((n, i) => `${i ? "L" : "M"}${px(n).toFixed(1)},${py(r[n - 1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: COLS[j], strokeWidth: 1.6 }} />)}
        <text x={44} y={18} style={{ fill: "var(--text-muted)", fontSize: 10 }}>running average of x² from five starting points, against n on a log scale; red: ∫ x² dμ</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        After {N.toLocaleString("en-IN")} steps: {runs.map((r, j) => `${STARTS[j]} → ${r[N - 1].toFixed(4)}`).join(", ")}. Space average {MAPS[k].space.toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        For an ergodic map, the time average of f along almost every orbit equals the space average ∫ f dμ. The rotation by
        ½ preserves Lebesgue measure but is not ergodic: each orbit visits only two points, and its average depends on
        where it starts.
      </figcaption>
    </figure>
  );
}
