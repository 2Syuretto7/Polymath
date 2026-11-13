"use client";

import { useState } from "react";
import { subs } from "./groupOrder";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));

/** Addition and multiplication tables of ℤₙ, with units and zero divisors marked. */
export function RingTableViz() {
  const [n, setN] = useState(6);
  const [op, setOp] = useState<"+" | "×">("×");
  const [row, setRow] = useState<number | null>(null);
  const els = Array.from({ length: n }, (_, i) => i);
  const val = (a: number, b: number) => (op === "+" ? (a + b) % n : (a * b) % n);
  const kind = (a: number) => (a === 0 ? "zero" : gcd(a, n) === 1 ? "unit" : "zero divisor");
  const cell = 32;
  const units = els.filter((a) => kind(a) === "unit");
  const zd = els.filter((a) => kind(a) === "zero divisor");
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ gap: 12, flexWrap: "wrap" }}>
        <div className="segmented" role="group" aria-label="Operation">
          {(["+", "×"] as const).map((o) => <button key={o} type="button" aria-pressed={op === o} className={op === o ? "seg is-on" : "seg"} onClick={() => setOp(o)}>{o === "+" ? "addition" : "multiplication"}</button>)}
        </div>
      </div>
      <div className="viz-sliders">
        <label><span>n: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={12} value={n} onChange={(ev) => { setN(Math.round(Number(ev.target.value))); setRow(null); }} /></label>
      </div>
      <svg viewBox={`0 0 ${(n + 1) * cell + 4} ${(n + 1) * cell + 4}`} role="img" aria-label={`The ${op === "+" ? "addition" : "multiplication"} table of ℤ${subs(n)}`} style={{ width: "100%", maxWidth: 440, display: "block", margin: "8px auto" }}>
        <text x={cell / 2} y={cell / 2 + 5} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 13 }}>{op}</text>
        {els.map((a) => (
          <g key={a}>
            <text x={(a + 1.5) * cell} y={cell / 2 + 5} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 12 }}>{a}</text>
            <text x={cell / 2} y={(a + 1.5) * cell + 5} textAnchor="middle" className="mono" style={{ fill: "var(--text-muted)", fontSize: 12, cursor: "pointer" }} onClick={() => setRow(a === row ? null : a)}>{a}</text>
            {els.map((b) => {
              const v = val(a, b);
              const hl = op === "×" && ((v === 1) || (v === 0 && a !== 0 && b !== 0));
              const dim = row !== null && row !== a;
              return (
                <g key={b} onClick={() => setRow(a === row ? null : a)} style={{ cursor: "pointer" }}>
                  <rect x={(b + 1) * cell + 1} y={(a + 1) * cell + 1} width={cell - 2} height={cell - 2} rx={3}
                    style={{ fill: hl ? (v === 1 ? "var(--accent-soft)" : "var(--danger)") : "var(--bg-subtle)", opacity: dim ? 0.3 : hl && v === 0 ? 0.35 : 1, stroke: "var(--border)" }} />
                  <text x={(b + 1.5) * cell} y={(a + 1.5) * cell + 5} textAnchor="middle" className="mono" style={{ fill: "var(--text)", fontSize: 12, opacity: dim ? 0.4 : 1 }}>{v}</text>
                </g>
              );
            })}
          </g>
        ))}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>units: {units.join(", ")}{zd.length ? `; zero divisors: ${zd.join(", ")}` : `; no zero divisors, so ℤ${subs(n)} is a field`}</p>
      <figcaption className="viz-caption">
        In the multiplication table, shaded cells show a product equal to 1, so the row element is a unit; red cells show two non-zero elements multiplying to 0, so both are zero divisors. Every non-zero element of ℤₙ is one or the other: a is a unit exactly when gcd(a, n) = 1. Click a row to follow one element.
      </figcaption>
    </figure>
  );
}
