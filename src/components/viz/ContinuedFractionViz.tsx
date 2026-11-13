"use client";

import { useState } from "react";

const NUMS: { name: string; v: number }[] = [
  { name: "√2", v: Math.SQRT2 },
  { name: "golden ratio φ", v: (1 + Math.sqrt(5)) / 2 },
  { name: "π", v: Math.PI },
  { name: "e", v: Math.E },
  { name: "√7", v: Math.sqrt(7) },
  { name: "415/93", v: 415 / 93 },
];

/** Continued fraction expansion and convergents: each convergent p/q is within 1/q² of the number. */
export function ContinuedFractionViz() {
  const [i, setI] = useState(2);
  const x = NUMS[i].v;
  const terms: number[] = [];
  let y = x;
  for (let k = 0; k < 9; k++) { const a = Math.floor(y + 1e-12); terms.push(a); const f = y - a; if (f < 1e-9) break; y = 1 / f; }
  const conv: [number, number][] = [];
  let [p0, p1, q0, q1] = [1, terms[0], 0, 1];
  conv.push([p1, q1]);
  for (let k = 1; k < terms.length; k++) { [p0, p1] = [p1, terms[k] * p1 + p0]; [q0, q1] = [q1, terms[k] * q1 + q0]; conv.push([p1, q1]); }
  const W = 520, rowH = 22, L = 120;
  const lg = (e: number) => Math.max(0, Math.min(16, -Math.log10(Math.max(e, 1e-16))));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Number">
        {NUMS.map((n, j) => <button key={n.name} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{n.name}</button>)}
      </div>
      <p className="mono" style={{ margin: "10px 0 4px", fontSize: 15 }}>{NUMS[i].name} = [{terms[0]}; {terms.slice(1).join(", ")}{terms.length === 9 ? ", …" : ""}]</p>
      <svg viewBox={`0 0 ${W} ${conv.length * rowH + 24}`} role="img" aria-label="Convergents and their errors" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <text x={L} y={12} style={{ fill: "var(--text-muted)", fontSize: 10 }}>correct decimal places: |x − p/q| (bar) against 1/q² (tick)</text>
        {conv.map(([p, q], k) => {
          const err = Math.abs(x - p / q), bound = 1 / (q * q), yy = 20 + k * rowH;
          const sc = (W - L - 10) / 16;
          return (
            <g key={k}>
              <text x={L - 8} y={yy + 14} textAnchor="end" style={{ fill: "var(--text)", fontSize: 11 }}>{p}/{q}</text>
              <rect x={L} y={yy + 4} width={Math.max(1, lg(err) * sc)} height={12} rx={2} style={{ fill: "var(--accent)" }} />
              <line x1={L + lg(bound) * sc} y1={yy + 1} x2={L + lg(bound) * sc} y2={yy + 19} style={{ stroke: "var(--text)", strokeWidth: 2 }} />
            </g>
          );
        })}
      </svg>
      <figcaption className="viz-caption">
        Each convergent p/q is a best approximation: no fraction with a smaller denominator comes closer. Every bar passes its tick, because |x − p/q| &lt; 1/q². A large term, like the 292 in π, makes the previous convergent unusually good: 355/113 is correct to six decimal places. The golden ratio, all 1s, is the hardest number to approximate.
      </figcaption>
    </figure>
  );
}
