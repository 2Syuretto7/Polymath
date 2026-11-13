"use client";

import { useState } from "react";

const N = 10;
const START = 100;

const gini = (xs: number[]) => {
  const m = xs.reduce((a, b) => a + b, 0) / xs.length;
  let s = 0;
  for (const a of xs) for (const b of xs) s += Math.abs(a - b);
  return m ? s / (2 * xs.length * xs.length * m) : 0;
};

/** Nozick's basketball argument: voluntary payments upset an equal distribution, and restoring it means taking from people. */
export function WiltViz() {
  const [fee, setFee] = useState(25);
  const [stage, setStage] = useState(1);
  const after = [START + (N - 1) * fee, ...Array(N - 1).fill(START - fee)];
  const xs = stage === 0 ? Array(N).fill(START) : stage === 1 ? after : Array(N).fill(START);
  const W = 560, H = 200, bw = 40, gap = (W - 70 - N * bw) / (N - 1), top = 480;
  const y = (v: number) => H - 24 - (v / top) * (H - 40);
  const notes = [
    "D1: everyone holds ₹100. Suppose this equal distribution is just, by whatever pattern you favour.",
    `D2: each of the other nine freely pays the star ₹${fee} to watch them play. No one was forced, and everyone started with a just share.`,
    `Back to D1: to restore equality, the state takes ₹${(N - 1) * fee} from the star and returns ₹${fee} to each fan, overriding the choices they just made.`,
  ];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Stage">
        {["D1: equal start", "D2: after the season", "taxed back to D1"].map((l, i) => <button key={l} type="button" aria-pressed={stage === i} className={stage === i ? "seg is-on" : "seg"} onClick={() => setStage(i)}>{l}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>each fan pays the star: <span className="mono">₹{fee}</span></span><input type="range" min={0} max={40} step={5} value={fee} onChange={(e) => setFee(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Holdings of ten people" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={20} y1={y(0)} x2={W - 20} y2={y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={46} y1={y(START)} x2={W - 20} y2={y(START)} style={{ stroke: "var(--text-muted)", strokeDasharray: "5 4" }} />
        <text x={4} y={y(START) + 4} textAnchor="start" style={{ fill: "var(--text-muted)", fontSize: 11 }}>₹100</text>
        {xs.map((v, i) => {
          const x = 50 + i * (bw + gap);
          return (
            <g key={i}>
              <rect x={x} y={y(v)} width={bw} height={y(0) - y(v)} rx={3} style={{ fill: i === 0 ? "var(--accent)" : "var(--text-faint)" }} />
              <text x={x + bw / 2} y={y(v) - 4} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>{v}</text>
              <text x={x + bw / 2} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{i === 0 ? "star" : `fan ${i}`}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>Gini coefficient: {gini(xs).toFixed(3)} (0 is perfect equality)</p>
      <p style={{ margin: "4px 0", fontSize: 14 }}>{notes[stage]}</p>
      <figcaption className="viz-caption">
        Nozick asks: if D1 was just and every step from D1 to D2 was voluntary, what could make D2 unjust? Keeping any
        pattern in place seems to need continual interference with how people choose to use what is theirs. Liberty upsets
        patterns.
      </figcaption>
    </figure>
  );
}
