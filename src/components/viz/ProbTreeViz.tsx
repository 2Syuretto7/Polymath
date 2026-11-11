"use client";

import { useState } from "react";
import { fmtNum } from "./format";

/** A probability tree for two events: the chance of a path is the product of the chances along it. */
export function ProbTreeViz({ a = "it rains", b = "the bus is late", aNot = "no rain", bNot = "the bus is on time" }: { a?: string; b?: string; aNot?: string; bNot?: string }) {
  const [pA, setPA] = useState(0.3);
  const [pBA, setPBA] = useState(0.6);
  const [pBn, setPBn] = useState(0.2);
  const leaves = [
    { label: `${a}, ${b}`, p: pA * pBA, path: [pA, pBA] },
    { label: `${a}, ${bNot}`, p: pA * (1 - pBA), path: [pA, 1 - pBA] },
    { label: `${aNot}, ${b}`, p: (1 - pA) * pBn, path: [1 - pA, pBn] },
    { label: `${aNot}, ${bNot}`, p: (1 - pA) * (1 - pBn), path: [1 - pA, 1 - pBn] },
  ];
  const pB = leaves[0].p + leaves[2].p;
  const f = (x: number) => fmtNum(Number(x.toFixed(3)));
  const Y = [30, 80, 140, 190], mid = [55, 165];

  return (
    <figure className="viz">
      <svg viewBox="0 0 520 220" style={{ width: "100%", display: "block" }} role="img"
        aria-label={`A probability tree. The chance that ${a} and ${b} is ${f(leaves[0].p)}.`}>
        <circle cx={20} cy={110} r={4} style={{ fill: "var(--text)" }} />
        {mid.map((y, i) => (
          <g key={y}>
            <line x1={20} y1={110} x2={150} y2={y} style={{ stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
            <text x={80} y={(110 + y) / 2 + (i ? 14 : -6)} style={{ fontSize: 11, fill: "var(--text-muted)" }}>{f(i ? 1 - pA : pA)}</text>
            <text x={156} y={y + 4} style={{ fontSize: 12, fill: "var(--text)" }}>{i ? aNot : a}</text>
          </g>
        ))}
        {leaves.map((l, i) => {
          const y0 = mid[i < 2 ? 0 : 1];
          return (
            <g key={l.label}>
              <line x1={260} y1={y0} x2={330} y2={Y[i]} style={{ stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
              <text x={276} y={(y0 + Y[i]) / 2 + (i % 2 ? 14 : -4)} style={{ fontSize: 11, fill: "var(--text-muted)" }}>{f(l.path[1])}</text>
              <text x={336} y={Y[i] - 2} style={{ fontSize: 11.5, fill: "var(--text)" }}>{i % 2 ? bNot : b}</text>
              <text x={336} y={Y[i] + 12} className="mono" style={{ fontSize: 11, fill: i === 0 || i === 2 ? "var(--accent)" : "var(--text-muted)" }}>
                {f(l.path[0])} × {f(l.path[1])} = {f(l.p)}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="viz-sliders">
        <label><span>P({a}) = <span className="mono">{f(pA)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={pA} onChange={(e) => setPA(Number(e.target.value))} /></label>
        <label><span>P({b} | {a}) = <span className="mono">{f(pBA)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={pBA} onChange={(e) => setPBA(Number(e.target.value))} /></label>
        <label><span>P({b} | {aNot}) = <span className="mono">{f(pBn)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={pBn} onChange={(e) => setPBn(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>P({a} and {b}), one path</td><td className="mono">{f(leaves[0].p)}</td></tr>
          <tr><td>P({b}), adding the two paths that end in it</td><td className="mono">{f(pB)}</td></tr>
          <tr><td>P({a} | {b}), the first path&rsquo;s share of those two</td><td className="mono">{pB > 0 ? f(leaves[0].p / pB) : "undefined"}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Multiply along a path; add across paths. The four paths always total 1. If the two sliders on the right are equal, the bus does not care about the rain: the events are independent.
      </figcaption>
    </figure>
  );
}
