"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Powers of each unit modulo n: every row reaches 1 by column φ(n), and the first 1 in a row is the order of a. */
export function PowerTableViz() {
  const [n, setN] = useState(10);
  const units = Array.from({ length: n }, (_, a) => a).filter((a) => a > 0 && gcd(a, n) === 1);
  const phi = units.length;
  const K = Math.min(Math.max(phi + 2, 8), 22);
  const pw = (a: number, k: number) => { let r = 1; for (let i = 0; i < k; i++) r = (r * a) % n; return r; };
  const ord = (a: number) => { for (let k = 1; k <= phi; k++) if (pw(a, k) === 1) return k; return 0; };
  const C = 24, L = 34, W = L + K * C + 6, H = 22 + units.length * C + 4;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span className="viz-stepper"><span className="viz-stepper-label">n</span>
          <button type="button" className="btn" onClick={() => setN(Math.max(3, n - 1))} disabled={n <= 3} aria-label="Smaller n">−</button>
          <span className="mono viz-stepper-value">{n}</span>
          <button type="button" className="btn" onClick={() => setN(Math.min(26, n + 1))} disabled={n >= 26} aria-label="Larger n">+</button>
        </span>
        {[7, 10, 13, 15, 16].map((v) => <button key={v} type="button" aria-pressed={n === v} className={n === v ? "viz-chip is-on" : "viz-chip"} onClick={() => setN(v)}>{v}</button>)}
      </div>
      <div style={{ overflowX: "auto" }}>
        <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Powers of the units modulo ${n}`} style={{ width: "100%", minWidth: 360, maxWidth: W * 1.2, display: "block", margin: "8px auto 0" }}>
          <rect x={L + (phi - 1) * C} y={2} width={C} height={H - 4} rx={3} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
          {Array.from({ length: K }, (_, k) => <text key={k} x={L + k * C + C / 2} y={15} textAnchor="middle" style={{ fill: k + 1 === phi ? "var(--accent)" : "var(--text-muted)", fontSize: 10, fontWeight: k + 1 === phi ? 700 : 400 }}>{k + 1}</text>)}
          {units.map((a, i) => (
            <g key={a}>
              <text x={L - 8} y={22 + i * C + 16} textAnchor="end" style={{ fill: "var(--text)", fontSize: 11 }}>{a}</text>
              {Array.from({ length: K }, (_, k) => {
                const v = pw(a, k + 1), one = v === 1;
                return (
                  <g key={k}>
                    <rect x={L + k * C + 2} y={22 + i * C + 2} width={C - 4} height={C - 4} rx={3} style={{ fill: one ? "var(--accent)" : "var(--bg-subtle)", fillOpacity: one ? 0.85 : 1, stroke: "var(--border)" }} />
                    <text x={L + k * C + C / 2} y={22 + i * C + 16} textAnchor="middle" style={{ fill: one ? "var(--bg)" : "var(--text-muted)", fontSize: 10 }}>{v}</text>
                  </g>
                );
              })}
            </g>
          ))}
        </svg>
      </div>
      <p className="mono" style={{ margin: "6px 0", fontSize: 13 }}>
        φ({n}) = {phi}; orders: {units.map((a) => `${a}→${ord(a)}`).join(", ")}
      </p>
      <figcaption className="viz-caption">
        Row a lists a, a², a³, … modulo {n}; only the units, the a with gcd(a, {n}) = 1, are shown. The outlined column is k = φ({n}), and every entry in it is 1: this is Euler&rsquo;s theorem. Each row repeats with period equal to the order of a, which always divides φ({n}).
      </figcaption>
    </figure>
  );
}
