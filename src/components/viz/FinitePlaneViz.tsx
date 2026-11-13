"use client";

import { useState } from "react";

/** The plane over a finite field ℤₚ: spans of one vector are lines through the origin, and there are p + 1 of them. */
export function FinitePlaneViz() {
  const [p, setP] = useState(5);
  const [v, setV] = useState<[number, number]>([1, 2]);
  const [w, setW] = useState<[number, number] | null>(null);
  const span = (a: [number, number]) => Array.from({ length: p }, (_, t) => [(t * a[0]) % p, (t * a[1]) % p] as [number, number]);
  const vv: [number, number] = [v[0] % p, v[1] % p];
  const line = new Set(span(vv).map(([x, y]) => `${x},${y}`));
  const ww = w ? ([w[0] % p, w[1] % p] as [number, number]) : null;
  const det = ww ? ((vv[0] * ww[1] - vv[1] * ww[0]) % p + p) % p : 0;
  const full = ww !== null && det !== 0;
  const cell = Math.min(52, 320 / p);
  const W = p * cell + 40;
  const click = (x: number, y: number) => {
    if (x === 0 && y === 0) return;
    if (!w && !line.has(`${x},${y}`)) setW([x, y]); else if (!w) setV([x, y]); else { setV([x, y]); setW(null); }
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Field">
        {[2, 3, 5, 7].map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "seg is-on" : "seg"} onClick={() => { setP(q); setV([1, 1 % q === 0 ? 0 : 1]); setW(null); }}>ℤ{"₀₁₂₃₄₅₆₇₈₉"[q]}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The plane over a finite field" style={{ width: "100%", maxWidth: 380, display: "block", margin: "8px auto" }}>
        {Array.from({ length: p }, (_, x) => Array.from({ length: p }, (_, y) => {
          const cx = 30 + x * cell + cell / 2, cy = W - 30 - y * cell - cell / 2 + 20;
          const onLine = line.has(`${x},${y}`);
          const isV = x === vv[0] && y === vv[1];
          const isW = ww && x === ww[0] && y === ww[1];
          return (
            <g key={`${x}-${y}`} onClick={() => click(x, y)} style={{ cursor: "pointer" }}>
              <circle cx={cx} cy={cy} r={cell * 0.3} style={{ fill: full ? "var(--accent-soft)" : onLine ? "var(--accent)" : "var(--bg-subtle)", stroke: isW ? "var(--danger)" : isV ? "var(--text)" : "var(--border)", strokeWidth: isV || isW ? 2.5 : 1 }} />
              {x === 0 && <text x={14} y={cy + 4} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{y}</text>}
              {y === 0 && <text x={cx} y={W - 2} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x}</text>}
            </g>
          );
        }))}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        v = ({vv[0]}, {vv[1]}): its span has {p} points{ww ? `; w = (${ww[0]}, ${ww[1]}) ${full ? `is independent, and v, w span all ${p * p} points` : "lies on the same line"}` : ""}
      </p>
      <figcaption className="viz-caption">
        Click a point to make it v; then click a point off its line to add w. The multiples of v form a line through the origin with p points, scattered rather than straight because arithmetic wraps round. Every non-zero vector lies on exactly one such line, so there are (p² − 1)/(p − 1) = p + 1 lines. Two independent vectors give a basis, and the plane has p² vectors.
      </figcaption>
    </figure>
  );
}
