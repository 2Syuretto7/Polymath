"use client";

import { useState } from "react";

const S = ["sunny", "cloudy", "rainy"];
const P = [
  [0.7, 0.2, 0.1],
  [0.3, 0.4, 0.3],
  [0.2, 0.4, 0.4],
];
const step = (v: number[]) => [0, 1, 2].map((j) => v.reduce((s, vi, i) => s + vi * P[i][j], 0));

/** A three-state weather chain: the distribution after n days is the starting row vector times Pⁿ. */
export function MarkovStepViz() {
  const [start, setStart] = useState(2);
  const [n, setN] = useState(1);
  let v: number[] = [0, 1, 2].map((i) => (i === start ? 1 : 0));
  for (let k = 0; k < n; k++) v = step(v);
  const W = 520, H = 170, pad = 30, bw = 90;
  const X = (i: number) => pad + 40 + i * ((W - 2 * pad - 80) / 2);
  const Y = (p: number) => H - 25 - p * (H - 45);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Today's weather">
        {S.map((s, i) => <button key={s} type="button" aria-pressed={start === i} className={start === i ? "seg is-on" : "seg"} onClick={() => setStart(i)}>today {s}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>days ahead n: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={15} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div style={{ overflowX: "auto" }}>
        <table className="table mono" style={{ width: "auto", margin: "8px auto" }}>
          <thead><tr><th style={{ textTransform: "none" }}>from \ to</th>{S.map((s) => <th key={s} style={{ textTransform: "none" }}>{s}</th>)}</tr></thead>
          <tbody>{P.map((r, i) => <tr key={i} style={{ background: i === start ? "var(--accent-soft)" : undefined }}><td>{S[i]}</td>{r.map((p, j) => <td key={j}>{p.toFixed(1)}</td>)}</tr>)}</tbody>
        </table>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Distribution of the weather after n days" style={{ width: "100%", display: "block" }}>
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {v.map((p, i) => (
          <g key={i}>
            <rect x={X(i) - bw / 2} y={Y(p)} width={bw} height={Y(0) - Y(p)} style={{ fill: "var(--accent)", fillOpacity: 0.75 }} />
            <text x={X(i)} y={Y(p) - 5} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>{p.toFixed(3)}</text>
            <text x={X(i)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 12 }}>{S[i]}</text>
          </g>
        ))}
      </svg>
      <figcaption className="viz-caption">
        Row i of the matrix gives tomorrow&rsquo;s chances when today is in state i, so each row sums to 1. Starting from certainty about today, multiplying by P once per day gives the forecast n days ahead. After a week or so the forecast barely depends on today at all.
      </figcaption>
    </figure>
  );
}
