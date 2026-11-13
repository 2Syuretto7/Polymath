"use client";

import { useState } from "react";
import { gcd, ord, phi } from "./ntTools";

/** Which moduli have a primitive root, and which units are primitive roots. */
export function PrimitiveRootViz() {
  const [n, setN] = useState(18);
  const N = 50;
  const has = (m: number) => { const p = phi(m); for (let a = 1; a < Math.max(m, 2); a++) if (gcd(a, m) === 1 && ord(a, m) === p) return true; return m === 1; };
  const units = Array.from({ length: n }, (_, a) => a).filter((a) => a > 0 && gcd(a, n) === 1);
  const ph = phi(n);
  const roots = units.filter((a) => ord(a, n) === ph);
  const maxOrd = Math.max(...units.map((a) => ord(a, n)));
  const C = 40;
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 6px", fontSize: 14 }}>Click a modulus. Filled moduli have a primitive root.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, 1fr)", gap: 4, maxWidth: 440 }}>
        {Array.from({ length: N - 1 }, (_, i) => i + 2).map((m) => {
          const h = has(m), on = m === n;
          return (
            <button key={m} type="button" aria-pressed={on} onClick={() => setN(m)} className="mono"
              style={{ height: 30, borderRadius: 4, fontSize: 12, cursor: "pointer", border: on ? "2px solid var(--text)" : "1px solid var(--border)", background: h ? "var(--accent)" : "var(--bg)", color: h ? "var(--bg)" : "var(--text-muted)" }}>{m}</button>
          );
        })}
      </div>
      <svg viewBox={`0 0 ${Math.max(units.length, 1) * C + 4} ${C + 22}`} role="img" aria-label={`Orders of the units modulo ${n}`} style={{ width: "100%", maxWidth: Math.min(560, units.length * 52), display: "block", margin: "12px 0 0" }}>
        {units.map((a, i) => {
          const r = roots.includes(a);
          return (
            <g key={a}>
              <rect x={i * C + 3} y={2} width={C - 6} height={C - 6} rx={5} style={{ fill: r ? "var(--accent)" : "var(--bg-subtle)", stroke: "var(--border)" }} />
              <text x={i * C + C / 2} y={C / 2 + 2} textAnchor="middle" style={{ fill: r ? "var(--bg)" : "var(--text)", fontSize: 13, fontWeight: 600 }}>{a}</text>
              <text x={i * C + C / 2} y={C + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>ord {ord(a, n)}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>
        φ({n}) = {ph}; largest order = {maxOrd}; primitive roots: {roots.length ? `${roots.join(", ")} (${roots.length} = φ(${ph}))` : "none"}
      </p>
      <figcaption className="viz-caption">
        A primitive root modulo n is a unit whose order is φ(n), so its powers run through every unit. They exist exactly for n = 1, 2, 4, pᵏ and 2pᵏ with p an odd prime, and then there are φ(φ(n)) of them. Try 8 or 12, where every unit has a smaller order.
      </figcaption>
    </figure>
  );
}
