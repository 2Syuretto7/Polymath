"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Wilson's theorem: modulo a prime, the numbers 2 to p − 2 pair off with their inverses, leaving 1 and p − 1. */
export function WilsonPairViz() {
  const [n, setN] = useState(13);
  const els = Array.from({ length: n - 1 }, (_, i) => i + 1);
  const inv = (a: number) => els.find((b) => (a * b) % n === 1);
  let fact = 1;
  for (const a of els) fact = (fact * a) % n;
  const prime = els.every((a) => a === 1 || gcd(a, n) === 1);
  const W = 360, c = W / 2, R = 140;
  const pos = (a: number) => { const t = (2 * Math.PI * (a - 1)) / (n - 1) - Math.PI / 2; return [c + R * Math.cos(t), c + R * Math.sin(t)]; };
  const chords = els.filter((a) => { const b = inv(a); return b !== undefined && a < b; });
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span className="viz-stepper"><span className="viz-stepper-label">n</span>
          <button type="button" className="btn" onClick={() => setN(Math.max(4, n - 1))} disabled={n <= 4} aria-label="Smaller n">−</button>
          <span className="mono viz-stepper-value">{n}</span>
          <button type="button" className="btn" onClick={() => setN(Math.min(31, n + 1))} disabled={n >= 31} aria-label="Larger n">+</button>
        </span>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>{prime ? "prime" : "composite"}</span>
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label={`Numbers 1 to ${n - 1} joined to their inverses modulo ${n}`} style={{ width: "100%", maxWidth: 380, display: "block", margin: "6px auto" }}>
        {chords.map((a) => { const [x1, y1] = pos(a), [x2, y2] = pos(inv(a)!); return <line key={a} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--accent)", strokeWidth: 1.5 }} />; })}
        {els.map((a) => {
          const [x, y] = pos(a), b = inv(a), self = b === a, none = b === undefined;
          return (
            <g key={a}>
              <circle cx={x} cy={y} r={12} style={{ fill: self ? "var(--accent)" : "var(--bg)", stroke: none ? "var(--danger)" : "var(--accent)", strokeWidth: 1.5, strokeDasharray: none ? "3 2" : undefined }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: self ? "var(--bg)" : none ? "var(--danger)" : "var(--text)", fontSize: 10 }}>{a}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>({n} − 1)! = {n - 1}! ≡ {fact} (mod {n}){fact === n - 1 ? ` ≡ −1` : ""}</p>
      <figcaption className="viz-caption">
        Each chord joins a number to its inverse, so in the product the two cancel to 1. Filled circles are their own inverses. Modulo a prime only 1 and p − 1 are, so the whole product is 1 · (p − 1) ≡ −1. For composite n, the dashed circles have no inverse at all, and (n − 1)! is not −1.
      </figcaption>
    </figure>
  );
}
