"use client";

import { useState } from "react";
import { modpow } from "./ntTools";

const PR = [3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
const leg = (a: number, p: number) => { const r = modpow(((a % p) + p) % p, (p - 1) / 2, p); return r === 0 ? 0 : r === 1 ? 1 : -1; };

/** A table of Legendre symbols (a / p): rows are primes, columns are a. Patterns in the columns for −1 and 2 depend on p mod 4 and mod 8. */
export function LegendreTableViz() {
  const [sel, setSel] = useState<[number, number]>([13, 2]);
  const AS = [-1, ...Array.from({ length: 16 }, (_, i) => i + 1)];
  const [p, a] = sel;
  const C = 28, L = 100;
  const W = L + AS.length * C + 4, H = 24 + PR.length * C;
  const e = (p - 1) / 2, r = modpow(((a % p) + p) % p, e, p);
  return (
    <figure className="viz">
      <div style={{ overflowX: "auto" }}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Legendre symbols for small primes" style={{ width: "100%", minWidth: 420, display: "block" }}>
          {AS.map((x, j) => <text key={x} x={L + j * C + C / 2} y={16} textAnchor="middle" style={{ fill: x === a ? "var(--text)" : "var(--text-muted)", fontSize: 10, fontWeight: x === a ? 700 : 400 }}>{x}</text>)}
          {PR.map((q, i) => (
            <g key={q}>
              <text x={L - 8} y={24 + i * C + 18} textAnchor="end" style={{ fill: q === p ? "var(--text)" : "var(--text-muted)", fontSize: 10, fontWeight: q === p ? 700 : 400 }}>p = {q} ({q % 8} mod 8)</text>
              {AS.map((x, j) => {
                const v = leg(x, q), on = q === p && x === a;
                return (
                  <g key={x} onClick={() => setSel([q, x])} style={{ cursor: "pointer" }}>
                    <rect x={L + j * C + 2} y={24 + i * C + 2} width={C - 4} height={C - 4} rx={3} style={{ fill: v === 1 ? "var(--accent)" : v === -1 ? "var(--bg)" : "var(--bg-subtle)", fillOpacity: v === 1 ? 0.75 : 1, stroke: on ? "var(--text)" : "var(--border)", strokeWidth: on ? 2.5 : 1 }} />
                    <text x={L + j * C + C / 2} y={24 + i * C + 18} textAnchor="middle" style={{ fill: v === 1 ? "var(--bg)" : "var(--text-muted)", fontSize: 10 }}>{v === 1 ? "+" : v === -1 ? "−" : "0"}</text>
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>
        ({a} / {p}) ≡ {a}^{e} ≡ {r === p - 1 ? "−1" : r} (mod {p}), so ({a} / {p}) = {r === 1 ? "+1" : r === 0 ? "0" : "−1"}
      </p>
      <figcaption className="viz-caption">
        Click any cell to see Euler&rsquo;s criterion at work. Filled cells are +1: a is a square modulo p. The column for −1 is filled exactly for p ≡ 1 mod 4, and the column for 2 exactly for p ≡ ±1 mod 8. Each column for a composite a is the product of the columns for its prime factors, since the symbol is multiplicative in a.
      </figcaption>
    </figure>
  );
}
