"use client";

import { useState } from "react";

export const N = 6;
export const SIZES = [1, 2, 3, 6];

/** The equivariant map ℤ/6 → X determined by 0 ↦ x, where ℤ/6 acts on X = ℤ/m by k · y = y + k mod m. */
export function yonedaMap(m: number, x: number) {
  return Array.from({ length: N }, (_, k) => (x + k) % m);
}

/** The Yoneda lemma for a one-object category: maps from the regular action correspond to points. */
export function YonedaActionViz() {
  const [mi, setMi] = useState(2);
  const [x, setX] = useState(1);
  const m = SIZES[mi];
  const xx = Math.min(x, m - 1);
  const map = yonedaMap(m, xx);
  const col = (k: number) => [150, 36 + k * 38];
  const ring = (cx: number, r: number, count: number, i: number) => [cx + r * Math.sin((2 * Math.PI * i) / count), 125 - r * Math.cos((2 * Math.PI * i) / count)];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="size of X">
        {SIZES.map((s, i) => <button key={s} type="button" aria-pressed={mi === i} className={mi === i ? "seg is-on" : "seg"} onClick={() => setMi(i)}>X with {s} point{s > 1 ? "s" : ""}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="image of 0" style={{ marginTop: 6 }}>
        {Array.from({ length: m }, (_, i) => <button key={i} type="button" aria-pressed={xx === i} className={xx === i ? "seg is-on" : "seg"} onClick={() => setX(i)}>0 ↦ {i}</button>)}
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="An equivariant map from the cyclic group of order 6 to a set with a rotation action" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={150} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>ℤ/6 acting on itself</text>
        <text x={410} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>X = ℤ/{m}, rotated by ℤ/6</text>
        {map.map((t, k) => {
          const [x1, y1] = col(k), [x2, y2] = m === 1 ? [410, 125] : ring(410, 70, m, t);
          return <line key={k} x1={x1 + 14} y1={y1} x2={x2 - 14} y2={y2} style={{ stroke: k === 0 ? "var(--accent)" : "var(--text-faint)", strokeWidth: k === 0 ? 2.5 : 1.2 }} />;
        })}
        {Array.from({ length: N }, (_, k) => {
          const [cx, cy] = col(k);
          return (
            <g key={k}>
              <circle cx={cx} cy={cy} r={14} style={{ fill: k === 0 ? "var(--accent)" : "var(--surface)", stroke: "var(--accent)" }} />
              <text x={cx} y={cy + 5} textAnchor="middle" style={{ fill: k === 0 ? "var(--surface)" : "var(--text)", fontSize: 12 }}>{k}</text>
            </g>
          );
        })}
        {Array.from({ length: m }, (_, k) => {
          const [cx, cy] = m === 1 ? [410, 125] : ring(410, 70, m, k);
          return (
            <g key={k}>
              <circle cx={cx} cy={cy} r={14} style={{ fill: k === xx ? "var(--success)" : "var(--surface)", stroke: "var(--success)" }} />
              <text x={cx} y={cy + 5} textAnchor="middle" style={{ fill: k === xx ? "var(--surface)" : "var(--text)", fontSize: 12 }}>{k}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        0 ↦ {xx} forces k ↦ k · {xx} = {xx} + k mod {m}: {map.map((t, k) => `${k}↦${t}`).join(", ")}. There are exactly {m} equivariant maps, one for each point of X.
      </p>
      <figcaption className="viz-caption">
        A group G is a category with one object, and a functor from it to sets is a set with a G-action. The represented
        functor is G acting on itself. By the Yoneda lemma, natural transformations from it to X correspond to elements of
        X: an equivariant map is fixed by where it sends the identity, since g must go to g · x.
      </figcaption>
    </figure>
  );
}
