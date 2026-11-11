"use client";

import { useMemo, useState } from "react";
import { fmtNum } from "./format";

const W = 25, H = 16, N = W * H;

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// A town of 400 people. Those in the top rows (near the station, say) favour the plan far more often.
const POP: boolean[] = (() => {
  const r = rng(7);
  return Array.from({ length: N }, (_, i) => r() < (Math.floor(i / W) < 4 ? 0.8 : 0.3));
})();
const TRUE = POP.filter(Boolean).length / N;

/** Draw samples from a population, at random or by convenience, and compare the sample proportion with the truth. */
export function SampleViz() {
  const [n, setN] = useState(25);
  const [mode, setMode] = useState<"random" | "convenience">("random");
  const [seed, setSeed] = useState(1);
  const picked = useMemo(() => {
    if (mode === "convenience") return new Set(Array.from({ length: n }, (_, i) => i));
    const r = rng(seed * 101 + n);
    const idx = Array.from({ length: N }, (_, i) => i);
    for (let i = N - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; }
    return new Set(idx.slice(0, n));
  }, [n, mode, seed]);
  const yes = [...picked].filter((i) => POP[i]).length;
  const est = yes / n;
  const pc = (x: number) => `${fmtNum(Number((100 * x).toFixed(1)))}%`;
  const cell = 18;

  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0, flexWrap: "wrap" }}>
        <div className="segmented" role="group" aria-label="Sampling method">
          {(["random", "convenience"] as const).map((m) => (
            <button key={m} type="button" aria-pressed={mode === m} className={mode === m ? "seg is-on" : "seg"} onClick={() => setMode(m)}>
              {m === "random" ? "random sample" : "ask people at the station"}
            </button>
          ))}
        </div>
        <button type="button" className="btn" disabled={mode !== "random"} onClick={() => setSeed((s) => s + 1)}>Draw again</button>
      </div>
      <svg viewBox={`0 0 ${W * cell} ${H * cell}`} style={{ width: "100%", maxWidth: 520, display: "block", margin: "12px auto 0" }}
        role="img" aria-label={`A town of ${N} people; ${n} are sampled, and ${yes} of them favour the plan`}>
        {POP.map((f, i) => {
          const x = (i % W) * cell + cell / 2, y = Math.floor(i / W) * cell + cell / 2;
          const on = picked.has(i);
          return (
            <circle key={i} cx={x} cy={y} r={on ? 6.5 : 4.5}
              style={{ fill: f ? "var(--accent)" : "var(--text-muted)", opacity: on ? 1 : 0.22, stroke: on ? "var(--text)" : "none", strokeWidth: on ? 1.5 : 0 }} />
          );
        })}
        <line x1={0} x2={W * cell} y1={4 * cell} y2={4 * cell} style={{ stroke: "var(--border-strong)", strokeDasharray: "4 3" }} />
      </svg>
      <p className="mono-meta" style={{ margin: "6px 0 0", textTransform: "none", textAlign: "center" }}>purple: in favour · grey: against · the four rows above the dashed line live near the station</p>
      <div className="viz-sliders">
        <label>
          <span>sample size n = <span className="mono">{n}</span></span>
          <input type="range" min={5} max={100} step={5} value={n} onChange={(e) => setN(Number(e.target.value))} />
        </label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>in favour in the sample</td><td className="mono">{yes} of {n} = {pc(est)}</td></tr>
          <tr><td>rough margin of error, 1/√n</td><td className="mono">± {pc(1 / Math.sqrt(n))}</td></tr>
          <tr><td>in favour in the whole town (usually unknown)</td><td className="mono">{pc(TRUE)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {mode === "random"
          ? "A random sample usually lands within the margin of error of the truth, and the margin shrinks as n grows. Draw again to see the spread."
          : "Everyone sampled lives near the station, where the plan is popular. A bigger sample of the wrong people only makes the wrong answer look more certain."}
      </figcaption>
    </figure>
  );
}
