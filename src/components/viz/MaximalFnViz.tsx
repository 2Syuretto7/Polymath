"use client";

import { useMemo, useState } from "react";

const clamp = (v: number, a: number, b: number) => Math.min(b, Math.max(a, v));
/** Each function is given by its cumulative integral F, so interval averages are exact. */
const FS = [
  { label: "box on [−½, ½]", norm: 1, top: 1.2, f: (x: number) => (Math.abs(x) <= 0.5 ? 1 : 0), F: (x: number) => clamp(x + 0.5, 0, 1) },
  { label: "two boxes", norm: 1.5, top: 1.2, f: (x: number) => ((x >= -2 && x <= -1.5) || (x >= 1 && x <= 2) ? 1 : 0), F: (x: number) => clamp(x + 2, 0, 0.5) + clamp(x - 1, 0, 1) },
  {
    label: "spike",
    norm: 1,
    top: 4.4,
    f: (x: number) => Math.max(0, 4 - 16 * Math.abs(x)),
    F: (x: number) => (x <= -0.25 ? 0 : x <= 0 ? 4 * x + 8 * x * x + 0.5 : x <= 0.25 ? 0.5 + 4 * x - 8 * x * x : 1),
  },
];

/** Centred maximal function: the largest average of f over an interval centred at x. */
export function maximalAt(k: number, x: number) {
  const { F } = FS[k];
  let best = 0;
  for (let r = 0.005; r <= 12; r += 0.005) best = Math.max(best, (F(x + r) - F(x - r)) / (2 * r));
  return best;
}
/** Measure of {Mf > t} inside [−4, 4], on a grid of cell midpoints of width 0.02. */
export function levelSetMeasure(k: number, t: number) {
  let n = 0;
  for (let i = 0; i < 400; i++) if (maximalAt(k, -4 + 0.01 + 0.02 * i) > t) n++;
  return n * 0.02;
}

/** The Hardy–Littlewood maximal function and its weak (1, 1) bound. */
export function MaximalFnViz() {
  const [k, setK] = useState(0);
  const [t, setT] = useState(0.5);
  const { label, norm, top, f } = FS[k];
  const xs = useMemo(() => Array.from({ length: 400 }, (_, i) => -4 + 0.01 + 0.02 * i), []);
  const M = useMemo(() => xs.map((x) => maximalAt(k, x)), [k, xs]);
  const measure = M.filter((v) => v > t).length * 0.02;
  const px = (x: number) => 30 + ((x + 4) / 8) * 480, py = (v: number) => 210 - (Math.min(v, top) / top) * 180;
  const path = (vals: number[]) => vals.map((v, i) => `${i ? "L" : "M"}${px(xs[i]).toFixed(1)},${py(v).toFixed(1)}`).join("");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FS.map((g, i) => <button key={g.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{g.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>height t = {t.toFixed(1)} <input type="range" min={0.2} max={3} step={0.1} value={t} onChange={(e) => setT(Number(e.target.value))} aria-label="t" /></label>
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label={`The maximal function of ${label}`} style={{ width: "100%", display: "block", marginTop: 8 }}>
        {M.map((v, i) => (v > t ? <rect key={i} x={px(xs[i] - 0.01)} y={30} width={480 * 0.0025 + 0.3} height={180} style={{ fill: "var(--accent-soft)" }} /> : null))}
        <line x1={30} y1={210} x2={510} y2={210} style={{ stroke: "var(--border-strong)" }} />
        {[-4, -2, 0, 2, 4].map((x) => <text key={x} x={px(x)} y={226} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(x).replace("-", "−")}</text>)}
        {t <= top && <line x1={30} y1={py(t)} x2={510} y2={py(t)} style={{ stroke: "var(--danger)", strokeDasharray: "4 3" }} />}
        <path d={path(xs.map(f))} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={path(M)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <text x={30} y={20} style={{ fill: "var(--text-muted)", fontSize: 10 }}>grey: f</text>
        <text x={80} y={20} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: Mf</text>
        <text x={140} y={20} style={{ fill: "var(--text-muted)", fontSize: 10 }}>shaded: where Mf &gt; t</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ‖f‖₁ = {norm.toFixed(2)}. Measure of {"{"}Mf &gt; {t.toFixed(1)}{"}"} = {measure.toFixed(2)}, at most 3‖f‖₁/t = {(3 * norm / t).toFixed(2)}. Mf is never integrable: it decays like 1/|x|.
      </p>
      <figcaption className="viz-caption">
        Mf(x) is the largest average of |f| over an interval centred at x. It dominates |f| almost everywhere and is not
        integrable unless f = 0, yet the set where it exceeds t has measure at most a constant times ‖f‖₁/t. This weak
        (1, 1) inequality comes from the Vitali covering lemma, which gives the constant 3.
      </figcaption>
    </figure>
  );
}
