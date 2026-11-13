"use client";

import { useState } from "react";
import { FIELDS } from "./gfTools";

const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

/** The multiplicative group of a finite field is cyclic: follow the powers of an element round the non-zero elements. */
export function PowerCycleViz() {
  const [fi, setFi] = useState(2);
  const [g, setG] = useState(2);
  const F = FIELDS[fi];
  const nz = Array.from({ length: F.q - 1 }, (_, i) => i + 1);
  const gg = Math.min(g, F.q - 1);
  const pows: number[] = [];
  let x = gg;
  for (let k = 0; k < F.q; k++) { pows.push(x); if (x === 1) break; x = F.mul(x, gg); }
  const ord = pows.length;
  const gens = nz.filter((a) => { let y = a; for (let k = 1; k < F.q - 1; k++) { if (y === 1) return false; y = F.mul(y, a); } return true; }).length;
  const phi = nz.filter((k) => gcd(k, F.q - 1) === 1).length;
  const W = 300, R = 115, c = W / 2;
  const pos = (a: number) => { const i = nz.indexOf(a); const t = (2 * Math.PI * i) / nz.length - Math.PI / 2; return [c + R * Math.cos(t), c + R * Math.sin(t)]; };
  const inCycle = new Set(pows);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Field">
        {FIELDS.map((f, i) => <button key={f.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => { setFi(i); setG(2); }}>{f.name}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <span style={{ fontSize: 14 }}>element g:</span>
        {nz.map((a) => <button key={a} type="button" aria-pressed={gg === a} className={gg === a ? "viz-chip is-on" : "viz-chip"} onClick={() => setG(a)}>{F.label(a)}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The powers of g among the non-zero elements" style={{ width: "100%", maxWidth: 340, display: "block", margin: "6px auto" }}>
        {pows.map((a, k) => { const [x1, y1] = pos(a), [x2, y2] = pos(pows[(k + 1) % ord]); return ord > 1 ? <line key={k} x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--accent)", strokeWidth: 2 }} /> : null; })}
        {nz.map((a) => {
          const [x, y] = pos(a);
          return (
            <g key={a}>
              <circle cx={x} cy={y} r={14} style={{ fill: inCycle.has(a) ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />
              <text x={x} y={y + 4} textAnchor="middle" style={{ fill: inCycle.has(a) ? "var(--bg)" : "var(--text)", fontSize: F.n > 1 ? 9 : 12 }}>{F.label(a)}</text>
            </g>
          );
        })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>powers of {F.label(gg)}: {pows.map(F.label).join(", ")}</div>
        <div>order of {F.label(gg)}: {ord}, which divides {F.q - 1}; {ord === F.q - 1 ? "a generator" : "not a generator"}</div>
        <div>generators of the group: {gens} = φ({F.q - 1}) = {phi}</div>
      </div>
      <figcaption className="viz-caption">
        Filled circles are the powers of g. Some element always reaches every non-zero element, so the multiplicative group
        of a finite field is cyclic, with φ(q − 1) generators. In 𝔽ₚ these are the primitive roots mod p.
      </figcaption>
    </figure>
  );
}
