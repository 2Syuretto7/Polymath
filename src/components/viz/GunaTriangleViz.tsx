"use client";

import { useState } from "react";

const PRESETS: { name: string; v: [number, number, number] }[] = [
  { name: "a clear morning’s study", v: [70, 20, 10] },
  { name: "an angry rush", v: [10, 75, 15] },
  { name: "heavy after a feast", v: [10, 15, 75] },
  { name: "dissolution (pralaya)", v: [34, 33, 33] },
];
const NAMES = ["sattva", "rajas", "tamas"];
const DESC = [
  "Sattva dominates: lightness, clarity, illumination and calm. Knowledge and contentment arise.",
  "Rajas dominates: activity, passion, restlessness and pain. Effort and desire arise.",
  "Tamas dominates: heaviness, inertia, obstruction and dullness. Sleep and delusion arise.",
];

/** The three guṇas as proportions: every material thing is some mixture of sattva, rajas and tamas. */
export function GunaTriangleViz() {
  const [v, setV] = useState<[number, number, number]>([70, 20, 10]);
  const sum = v[0] + v[1] + v[2] || 1;
  const w = v.map((x) => x / sum);
  const A: [number, number] = [260, 20], B: [number, number] = [120, 180], C: [number, number] = [400, 180];
  const px = w[0] * A[0] + w[1] * B[0] + w[2] * C[0], py = w[0] * A[1] + w[1] * B[1] + w[2] * C[1];
  const max = Math.max(...w), dom = w.indexOf(max);
  const balanced = max - Math.min(...w) < 0.05;
  const set = (i: number, x: number) => setV((old) => { const n = [...old] as [number, number, number]; n[i] = x; return n; });
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="example">
        {PRESETS.map((p) => <button key={p.name} type="button" className="seg" onClick={() => setV(p.v)}>{p.name}</button>)}
      </div>
      <div style={{ display: "grid", gap: 4, marginTop: 8 }}>
        {NAMES.map((n, i) => (
          <label key={n} className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <span className="mono" style={{ minWidth: 120 }}>{n}: {Math.round(w[i] * 100)}%</span>
            <input type="range" min={0} max={100} step={1} value={v[i]} onChange={(e) => set(i, Number(e.target.value))} style={{ flex: 1 }} aria-label={n} />
          </label>
        ))}
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="A triangle of the three guṇas with the current mixture" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <polygon points={`${A.join(",")} ${B.join(",")} ${C.join(",")}`} style={{ fill: "var(--accent-soft)", stroke: "var(--border)" }} />
        <text x={A[0]} y={A[1] - 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>sattva</text>
        <text x={B[0] - 8} y={B[1] + 4} textAnchor="end" style={{ fill: "var(--text)", fontSize: 13 }}>rajas</text>
        <text x={C[0] + 8} y={C[1] + 4} style={{ fill: "var(--text)", fontSize: 13 }}>tamas</text>
        <circle cx={px} cy={py} r={8} style={{ fill: "var(--accent)" }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {balanced ? "The guṇas are in equilibrium. For Sāṃkhya this is unmanifest prakṛti, before creation and after dissolution: nothing evolves." : DESC[dom]}
      </p>
      <figcaption className="viz-caption">
        The guṇas are not qualities that things have but the strands that make them up, like three threads twisted into a rope.
        They never occur alone. Change is their shifting balance; evolution begins when their equilibrium is disturbed.
      </figcaption>
    </figure>
  );
}
