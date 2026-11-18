"use client";

import { useState } from "react";
import { gcd, phi } from "./ntTools";

/** The powers of a modulo n trace a cycle back to 1; its length is the order of a, which divides φ(n). */
export function PowerCycleViz() {
  const [n, setN] = useState(13);
  const [a, setA] = useState(3);
  const A = a % n;
  const unit = gcd(A, n) === 1;
  const seq: number[] = [1];
  if (unit) { let x = A; while (x !== 1 && seq.length <= n) { seq.push(x); x = (x * A) % n; } }
  const ord = unit ? seq.length : 0;
  const ph = phi(n);
  const W = 380, c = W / 2, R = 150;
  const pos = (r: number) => { const t = (2 * Math.PI * r) / n - Math.PI / 2; return [c + R * Math.cos(t), c + R * Math.sin(t)]; };
  const path = unit ? [...seq, 1] : [];
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>modulus n: <span className="mono">{n}</span></span>
          <input type="range" min={3} max={30} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
        <label><span>a: <span className="mono">{A}</span></span>
          <input type="range" min={1} max={29} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label={`Powers of ${A} modulo ${n}`} style={{ width: "100%", maxWidth: 400, display: "block", margin: "6px auto" }}>
        {path.slice(0, -1).map((r, i) => {
          const [x1, y1] = pos(r), [x2, y2] = pos(path[i + 1]);
          const d = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / d, uy = (y2 - y1) / d;
          const ex = x2 - ux * 13, ey = y2 - uy * 13;
          return (
            <g key={i}>
              <line x1={x1 + ux * 13} y1={y1 + uy * 13} x2={ex} y2={ey} style={{ stroke: "var(--accent)", strokeWidth: 1.8 }} />
              <polygon points={`${ex},${ey} ${ex - ux * 8 - uy * 4},${ey - uy * 8 + ux * 4} ${ex - ux * 8 + uy * 4},${ey - uy * 8 - ux * 4}`} style={{ fill: "var(--accent)" }} />
            </g>
          );
        })}
        {Array.from({ length: n }, (_, r) => {
          const [x, y] = pos(r), on = seq.includes(r), u = gcd(r, n) === 1;
          return (
            <g key={r}>
              <circle cx={x} cy={y} r={11} style={{ fill: on ? "var(--accent)" : "var(--bg)", stroke: u ? "var(--accent)" : "var(--border)", strokeWidth: 1.5 }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: on ? "var(--bg)" : u ? "var(--text)" : "var(--text-faint)", fontSize: 10 }}>{r}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        {unit ? `powers of ${A}: ${seq.join(" → ")} → 1; order of ${A} = ${ord}; φ(${n}) = ${ph}; ${ph} / ${ord} = ${ph / ord}` : `gcd(${A}, ${n}) ≠ 1, so no power of ${A} is 1 modulo ${n}`}
      </p>
      <p className={unit && ord === ph ? "viz-verdict viz-verdict-right" : "viz-verdict"} style={{ margin: "4px 0" }}>
        {unit && ord === ph ? `${A} has the largest possible order, φ(${n}): it is a primitive root modulo ${n}.` : unit ? `The order ${ord} divides φ(${n}) = ${ph}.` : "Only units have an order."}
      </p>
      <figcaption className="viz-caption">
        Outlined residues are the units modulo {n}. Starting at 1 and multiplying by a again and again, the path must return to 1, and the number of steps is the order of a. By Lagrange&rsquo;s theorem it always divides φ(n).
      </figcaption>
    </figure>
  );
}
