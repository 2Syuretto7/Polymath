"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const W = 520, X0 = 20, X1 = 500;
const PTS: { name: string; v: number }[] = [
  { name: "1/4", v: 1 / 4 },
  { name: "3/4", v: 3 / 4 },
  { name: "1/3", v: 1 / 3 },
  { name: "1/2", v: 1 / 2 },
  { name: "2/9", v: 2 / 9 },
];

function intervals(n: number): [number, number][] {
  let iv: [number, number][] = [[0, 1]];
  for (let k = 0; k < n; k++) iv = iv.flatMap(([a, b]) => { const t = (b - a) / 3; return [[a, a + t], [b - t, b]] as [number, number][]; });
  return iv;
}
function ternary(v: number, digits: number, name: string): string {
  if (name === "1/3") return "0.1000… or 0.0222…";
  if (name === "2/9") return "0.0200… or 0.0122…";
  let s = "0.", x = v;
  for (let i = 0; i < digits; i++) { x *= 3; const d = Math.floor(x + 1e-12); s += d; x -= d; }
  return s + "…";
}

/** Build the Cantor set by removing open middle thirds, and test points by their base-3 digits. */
export function CantorViz() {
  const [n, setN] = useState(3);
  const [p, setP] = useState(0);
  const pt = PTS[p];
  const rows = Array.from({ length: n + 1 }, (_, k) => intervals(k));
  const H = 30 + (n + 1) * 18;
  const X = (v: number) => X0 + v * (X1 - X0);
  const inC = pt.name !== "1/2";

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Stages of the Cantor set" style={{ width: "100%", display: "block" }}>
        {rows.map((iv, k) => iv.map(([a, b], i) => (
          <rect key={`${k}-${i}`} x={X(a)} y={14 + k * 18} width={Math.max(0.6, X(b) - X(a))} height={9} style={{ fill: k === n ? "var(--accent)" : "var(--text-muted)", opacity: k === n ? 1 : 0.45 }} />
        )))}
        <line x1={X(pt.v)} y1={6} x2={X(pt.v)} y2={H - 4} style={{ stroke: inC ? "var(--text)" : "var(--danger)", strokeWidth: 1.2, strokeDasharray: "3 3" }} />
      </svg>
      <div className="viz-sliders">
        <label><span>stage n: <span className="mono">{n}</span></span>
          <input type="range" min={0} max={7} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <div className="segmented" role="group" aria-label="Point" style={{ marginTop: 8 }}>
        {PTS.map((q, i) => (
          <button key={q.name} type="button" className={i === p ? "seg is-on" : "seg"} aria-pressed={i === p} onClick={() => setP(i)}>x = {q.name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>intervals at stage {n}</td><td className="mono">{2 ** n}</td></tr>
          <tr><td>total length (2/3)ⁿ</td><td className="mono">{fmtNum(Number(Math.pow(2 / 3, n).toFixed(4)))}</td></tr>
          <tr><td>x in base 3</td><td className="mono">{ternary(pt.v, 10, pt.name)}</td></tr>
          <tr><td>is x in the Cantor set?</td><td>{inC ? "yes: it has a base-3 expansion using only the digits 0 and 2" : "no: every expansion has a 1, and it is removed at the first stage"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Each stage removes the open middle third of every remaining interval. What survives all stages is the Cantor set: its total length tends to 0, yet it contains uncountably many points, such as 1/4, which is never an endpoint.
      </figcaption>
    </figure>
  );
}
