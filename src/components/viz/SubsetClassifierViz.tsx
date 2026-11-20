"use client";

import { useState } from "react";

const NAMES = ["a", "b", "c", "d", "e"];

/** The power set functor is represented by {0, 1}: subsets of X correspond to functions X → {0, 1}. */
export function SubsetClassifierViz() {
  const [n, setN] = useState(3);
  const [inS, setInS] = useState([true, false, true, false, false]);
  const X = NAMES.slice(0, n);
  const S = X.filter((_, i) => inS[i]);
  const yOf = (i: number) => 30 + i * (180 / Math.max(n - 1, 1));
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>size of X = {n} <input type="range" min={1} max={5} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <div className="segmented" role="group" aria-label="subset" style={{ marginTop: 6 }}>
        {X.map((x, i) => <button key={x} type="button" aria-pressed={inS[i]} className={inS[i] ? "seg is-on" : "seg"} onClick={() => setInS((s) => s.map((v, j) => (j === i ? !v : v)))}>{x} {inS[i] ? "∈ S" : "∉ S"}</button>)}
      </div>
      <svg viewBox="0 0 540 240" role="img" aria-label="A subset of X and its characteristic function to the two-element set" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={60} y={10} width={120} height={220} rx={14} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={48} y={124} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 13 }}>X</text>
        <rect x={380} y={60} width={100} height={120} rx={14} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={430} y={76} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{"{0, 1}"}</text>
        {[1, 0].map((v, k) => (
          <g key={v}>
            <circle cx={430} cy={100 + k * 60} r={14} style={{ fill: v ? "var(--success-soft)" : "var(--surface)", stroke: v ? "var(--success)" : "var(--border-strong)" }} />
            <text x={430} y={105 + k * 60} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{v}</text>
          </g>
        ))}
        {X.map((x, i) => {
          const y = n === 1 ? 120 : yOf(i) + 10;
          const ty = inS[i] ? 100 : 160;
          return (
            <g key={x}>
              <line x1={134} y1={y} x2={414} y2={ty} style={{ stroke: inS[i] ? "var(--success)" : "var(--text-faint)", strokeWidth: 1.5 }} />
              <circle cx={120} cy={y} r={14} style={{ fill: inS[i] ? "var(--success-soft)" : "var(--surface)", stroke: inS[i] ? "var(--success)" : "var(--border-strong)" }} />
              <text x={120} y={y + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 13 }}>{x}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        S = {"{"}{S.join(", ")}{"}"} ↔ the function sending {S.length ? S.join(", ") : "nothing"} to 1 and the rest to 0. |P(X)| = |Hom(X, {"{0, 1}"})| = 2{["", "¹", "²", "³", "⁴", "⁵"][n]} = {2 ** n}.
      </p>
      <figcaption className="viz-caption">
        A subset S of X is the same thing as its characteristic function X → {"{0, 1}"}, and taking preimages of
        subsets along a function f : Y → X corresponds to composing with f. So the contravariant power set functor is
        naturally isomorphic to Hom(−, {"{0, 1}"}): it is representable, represented by the two-element set.
      </figcaption>
    </figure>
  );
}
