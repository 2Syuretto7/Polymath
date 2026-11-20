"use client";

import { useState } from "react";

const MAPS = [
  { label: "doubling", f: (x: number) => (2 * x) % 1, inv: [(y: number) => y / 2, (y: number) => (y + 1) / 2] },
  { label: "tent", f: (x: number) => (x < 0.5 ? 2 * x : 2 - 2 * x), inv: [(y: number) => y / 2, (y: number) => 1 - y / 2] },
  { label: "logistic, r = 4", f: (x: number) => 4 * x * (1 - x), inv: [(y: number) => (1 - Math.sqrt(1 - y)) / 2, (y: number) => (1 + Math.sqrt(1 - y)) / 2] },
];

/** The itinerary of x: symbol 0 on [0, ½), 1 on [½, 1]. For the doubling map, use exact binary digits. */
export function itinerary(k: number, x: number, n: number) {
  const s: number[] = [];
  if (k === 0) {
    let num = Math.round(x * 1e6);
    for (let i = 0; i < n; i++) { num *= 2; s.push(num >= 1e6 ? 1 : 0); num %= 1e6; }
    return s;
  }
  let y = x;
  for (let i = 0; i < n; i++) { s.push(y < 0.5 ? 0 : 1); y = MAPS[k].f(y); }
  return s;
}
/** The cylinder of points sharing the symbols s, found by pulling [0, 1] back through the inverse branches. */
export function cylinder(k: number, s: number[]) {
  let a = 0, b = 1;
  for (let i = s.length - 1; i >= 0; i--) {
    const g = MAPS[k].inv[s[i]];
    const u = g(a), v = g(b);
    a = Math.min(u, v); b = Math.max(u, v);
  }
  return [a, b];
}

/** Coding an interval map by a two-symbol partition: each finite word picks out an interval. */
export function SymbolicCodingViz() {
  const [k, setK] = useState(0);
  const [x, setX] = useState(0.3);
  const [n, setN] = useState(4);
  const s = itinerary(k, x, 10);
  const rows = Array.from({ length: n + 1 }, (_, m) => cylinder(k, s.slice(0, m)));
  const px = (v: number) => 30 + v * 420;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="map">
        {MAPS.map((m, i) => <button key={m.label} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{m.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>x = {x.toFixed(2)} <input type="range" min={0.01} max={0.99} step={0.01} value={x} onChange={(e) => setX(Number(e.target.value))} aria-label="x" /></label>
        <label>symbols read n = {n} <input type="range" min={0} max={10} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 250" role="img" aria-label="Nested cylinder intervals" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={px(0)} y={14} width={210} height={10} style={{ fill: "var(--accent-soft)" }} />
        <rect x={px(0.5)} y={14} width={210} height={10} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <text x={px(0.25)} y={22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 9 }}>symbol 0</text>
        <text x={px(0.75)} y={22} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 9 }}>symbol 1</text>
        {rows.map(([a, b], m) => {
          const y = 40 + m * 17;
          return (
            <g key={m}>
              <line x1={px(0)} y1={y} x2={px(1)} y2={y} style={{ stroke: "var(--grid-line)" }} />
              <rect x={px(a)} y={y - 4} width={Math.max(1.5, px(b) - px(a))} height={8} rx={2} style={{ fill: "var(--accent)" }} />
              <text x={px(1) + 6} y={y + 4} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{m === 0 ? "—" : s.slice(0, m).join("")}</text>
            </g>
          );
        })}
        <line x1={px(x)} y1={30} x2={px(x)} y2={40 + n * 17 + 6} style={{ stroke: "var(--danger)", strokeWidth: 1.5 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        First 10 symbols of x: {s.join("")}. After {n} symbols, x lies in an interval of length {(rows[n][1] - rows[n][0]).toPrecision(3)}.
      </p>
      <figcaption className="viz-caption">
        Record 0 or 1 according to which half of [0, 1] each point of the orbit lands in. Each word of length n picks out
        the interval of points with that itinerary, and the intervals shrink to a point, so the coding is one-to-one up
        to the countably many orbits that hit ½. Through it the map becomes the shift on sequences of 0s and 1s.
      </figcaption>
    </figure>
  );
}
