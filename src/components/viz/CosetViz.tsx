"use client";

import { useState } from "react";

const N = 12;
const DS = [6, 4, 3, 2];

/** The cosets of a subgroup of ℤ₁₂ cut the group into equal pieces. Their number times their size is 12, which is Lagrange's theorem in miniature. */
export function CosetViz() {
  const [d, setD] = useState(4);
  const [a, setA] = useState(1);
  const size = N / d;
  const cx = 115, cy = 110, R = 88;
  const pos = (i: number) => { const t = Math.PI / 2 - (2 * Math.PI * i) / N; return [cx + R * Math.cos(t), cy - R * Math.sin(t)]; };
  const coset = (c: number) => Array.from({ length: size }, (_, j) => (c + j * d) % N);
  const mine = a % d;
  const shape = (c: number) => coset(c).map((i) => pos(i).map((v) => v.toFixed(1)).join(",")).join(" ");

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Subgroup H">
        {DS.map((q) => (
          <button key={q} type="button" className={q === d ? "seg is-on" : "seg"} aria-pressed={q === d} onClick={() => setD(q)}>H = ⟨{q}⟩, order {N / q}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 225" role="img" aria-label="The cosets of H drawn on a twelve-hour clock" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={cx} cy={cy} r={R} style={{ fill: "none", stroke: "var(--border)" }} />
        {Array.from({ length: d }, (_, c) => (
          size > 2
            ? <polygon key={c} points={shape(c)} style={{ fill: c === mine ? "var(--accent-soft)" : "none", stroke: c === mine ? "var(--accent)" : "var(--text-faint)", strokeWidth: c === mine ? 2 : 1 }} />
            : <polyline key={c} points={shape(c)} style={{ fill: "none", stroke: c === mine ? "var(--accent)" : "var(--text-faint)", strokeWidth: c === mine ? 2 : 1 }} />
        ))}
        {Array.from({ length: N }, (_, i) => {
          const [x, y] = pos(i); const on = i % d === mine;
          return <g key={i}><circle cx={x} cy={y} r={11} style={{ fill: on ? "var(--accent)" : "var(--bg)", stroke: on ? "var(--accent)" : "var(--border-strong)" }} />
            <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 10, fill: on ? "var(--bg)" : "var(--text)" }}>{i}</text></g>;
        })}
        <text x={250} y={30} style={{ fontSize: 12, fill: "var(--text-muted)" }}>the cosets of H</text>
        {Array.from({ length: d }, (_, c) => (
          <text key={c} x={250} y={54 + c * 26} className="mono" style={{ fontSize: 13, fill: c === mine ? "var(--accent)" : "var(--text)" }}>
            {c} + H = {"{"}{coset(c).sort((x, y) => x - y).join(", ")}{"}"}
          </text>
        ))}
      </svg>
      <div className="viz-sliders">
        <label><span>element a: <span className="mono">{a}</span></span>
          <input type="range" min={0} max={11} value={a} onChange={(ev) => setA(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>the coset a + H</td><td className="mono">{mine} + H</td></tr>
          <tr><td>size of each coset, |H|</td><td className="mono">{size}</td></tr>
          <tr><td>number of cosets, the index [G : H]</td><td className="mono">{d}</td></tr>
          <tr><td>|H| × [G : H]</td><td className="mono">{size} × {d} = 12</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Every element lies in exactly one coset, and every coset is a copy of H shifted round the clock, with the same number of elements. So the cosets cut the group into equal pieces, and |H| must divide 12.
      </figcaption>
    </figure>
  );
}
