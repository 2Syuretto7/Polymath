"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const NT = 400;
const a = (n: number) => Math.sin(n);
const W = 520, H = 230, X0 = 40, X1 = 500;
const X = (v: number) => X0 + ((v + 1) / 2) * (X1 - X0);

/** Bolzano–Weierstrass by halving: keep a half that contains infinitely many terms (here, the half with more of the first 400), and pick one term from each. */
export function BWHalvingViz() {
  const [k, setK] = useState(4);
  const ivs: [number, number][] = [[-1, 1]];
  const picks: number[] = [];
  let lo = -1, hi = 1, last = 0;
  for (let s = 0; s < k; s++) {
    const mid = (lo + hi) / 2;
    const left = Array.from({ length: NT }, (_, i) => i + 1).filter((n) => a(n) >= lo && a(n) <= mid).length;
    const right = Array.from({ length: NT }, (_, i) => i + 1).filter((n) => a(n) >= mid && a(n) <= hi).length;
    if (left >= right) hi = mid; else lo = mid;
    ivs.push([lo, hi]);
    const next = Array.from({ length: NT }, (_, i) => i + 1).find((n) => n > last && a(n) >= lo && a(n) <= hi);
    if (next) { picks.push(next); last = next; }
  }
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Terms of sin n on an interval, with nested halves" style={{ width: "100%", display: "block" }}>
        {Array.from({ length: 120 }, (_, i) => i + 1).map((n) => (
          <circle key={n} cx={X(a(n))} cy={30 + (n % 12) * 3} r={2} style={{ fill: "var(--text-faint)" }} />
        ))}
        {ivs.map(([l, h], i) => (
          <g key={i}>
            <line x1={X(l)} y1={90 + i * 14} x2={X(h)} y2={90 + i * 14} style={{ stroke: i === ivs.length - 1 ? "var(--accent)" : "var(--border-strong)", strokeWidth: 5, strokeLinecap: "round" }} />
          </g>
        ))}
        {picks.map((n, i) => (
          <circle key={n} cx={X(a(n))} cy={90 + (i + 1) * 14} r={4} style={{ fill: "var(--danger)" }} />
        ))}
        <text x={X(-1)} y={20} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>−1</text>
        <text x={X(1)} y={20} textAnchor="middle" style={{ fontSize: 11, fill: "var(--text-muted)" }}>1</text>
      </svg>
      <div className="viz-sliders">
        <label><span>halvings: <span className="mono">{k}</span></span>
          <input type="range" min={1} max={9} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>current interval</td><td className="mono">[{fm(lo)}, {fm(hi)}], length {fm(hi - lo)}</td></tr>
          <tr><td>chosen indices n₁ &lt; n₂ &lt; …</td><td className="mono">{picks.join(", ")}</td></tr>
          <tr><td>chosen terms sin nₖ</td><td className="mono">{picks.map((n) => fm(a(n))).join(", ")}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The grey dots are the first terms of sin n, which never settles down. Each halving keeps a half that still holds
        infinitely many terms, and the red dots pick one term from each, with increasing indices. The intervals are nested and
        shrink to a point, so the chosen subsequence converges to it.
      </figcaption>
    </figure>
  );
}
