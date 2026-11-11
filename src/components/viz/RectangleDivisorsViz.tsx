"use client";

import { useState } from "react";

const W = 600, CELL = 40;

/** Arrange n tiles in rows of width d. A full rectangle appears exactly when d divides n; otherwise the last row is the remainder. */
export function RectangleDivisorsViz() {
  const [n, setN] = useState(24);
  const [d, setD] = useState(5);
  const q = Math.floor(n / d), r = n % d;
  const rows = q + (r ? 1 : 0);
  const cell = Math.min(CELL, Math.floor((W - 20) / d));
  const h = rows * cell + 20;
  const divisors = Array.from({ length: n }, (_, i) => i + 1).filter((k) => n % k === 0);

  return (
    <figure className="viz">
      <svg viewBox={`0 0 ${W} ${Math.max(h, 60)}`} role="img" aria-label={`${n} tiles in rows of ${d}`} style={{ width: "100%", maxHeight: 380 }}>
        {Array.from({ length: n }, (_, i) => {
          const row = Math.floor(i / d), col = i % d;
          const extra = row === q;
          return (
            <rect key={i} x={10 + col * cell} y={10 + row * cell} width={cell - 3} height={cell - 3} rx={3}
              style={{ fill: extra ? "var(--danger-soft)" : "var(--accent-soft)", stroke: extra ? "var(--danger)" : "var(--accent)", strokeWidth: 1 }} />
          );
        })}
      </svg>
      <div className="viz-sliders">
        <label><span>n = <span className="mono">{n}</span></span>
          <input type="range" min={1} max={60} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>row width d = <span className="mono">{d}</span></span>
          <input type="range" min={1} max={24} value={d} onChange={(e) => setD(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <tbody>
          <tr><td>division</td><td className="mono">{n} = {q} × {d} + {r}</td></tr>
          <tr><td>does {d} divide {n}?</td><td>{r === 0 ? `yes: ${d} | ${n}, and the tiles make a ${q} by ${d} rectangle` : `no: remainder ${r}, shown in red`}</td></tr>
          <tr><td>divisors of {n}</td><td className="mono">{divisors.join(", ")} ({divisors.length} in all)</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Every n and d give a unique quotient q and remainder r with 0 ≤ r &lt; d. The divisors of n are exactly the widths
        that leave no remainder. {divisors.length === 2 ? `${n} has only two divisors, 1 and itself, so it is prime.` : n === 1 ? "1 has only one divisor." : `${n} has more than two divisors, so it is composite.`}
      </figcaption>
    </figure>
  );
}
