"use client";

import { useState } from "react";
import { DS } from "./QuadIntegerViz";
import { discriminant } from "./NormTraceViz";

export const PRIMES = Array.from({ length: 200 }, (_, i) => i).filter((n) => n > 1 && Array.from({ length: n - 2 }, (_, j) => j + 2).every((d) => d * d > n || n % d !== 0));

/** The Legendre symbol (a/p) for an odd prime p, by Euler’s criterion. */
export function legendre(a: number, p: number) {
  let r = 1, b = ((a % p) + p) % p, e = (p - 1) / 2;
  while (e > 0) { if (e & 1) r = (r * b) % p; b = (b * b) % p; e >>= 1; }
  return r === 1 ? 1 : r === 0 ? 0 : -1;
}
/** How the prime p behaves in ℚ(√d): split into two primes, inert, or ramified. */
export function splitType(d: number, p: number): "split" | "inert" | "ramified" {
  const D = discriminant(d);
  if (D % p === 0) return "ramified";
  if (p === 2) return ((d % 8) + 8) % 8 === 1 ? "split" : "inert";
  return legendre(d, p) === 1 ? "split" : "inert";
}

/** The splitting of each prime below 200 in a quadratic field. */
export function PrimeSplitViz() {
  const [k, setK] = useState(10);
  const d = DS[k];
  const types = PRIMES.map((p) => splitType(d, p));
  const below100 = PRIMES.map((p, i) => [p, types[i]] as const).filter(([p]) => p < 100);
  const count = (t: string) => below100.filter(([, s]) => s === t).length;
  const col = { split: "var(--success)", inert: "var(--text-faint)", ramified: "var(--danger)" };
  const ds = String(d).replace("-", "−");
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>d = {ds} <input type="range" min={0} max={DS.length - 1} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} aria-label="d" /></label>
      </div>
      <svg viewBox="0 0 540 150" role="img" aria-label="Splitting of primes below 200" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {PRIMES.map((p, i) => {
          const x = 10 + (i % 12) * 44, y = 6 + Math.floor(i / 12) * 34;
          return (
            <g key={p}>
              <rect x={x} y={y} width={40} height={30} rx={4} style={{ fill: types[i] === "split" ? "var(--success-soft)" : types[i] === "ramified" ? "var(--danger-soft)" : "var(--bg-subtle)", stroke: col[types[i]] }} />
              <text x={x + 20} y={y + 19} textAnchor="middle" style={{ fill: types[i] === "inert" ? "var(--text-muted)" : "var(--text)", fontSize: 11 }}>{p}</text>
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        ℚ(√{ds}), discriminant {String(discriminant(d)).replace("-", "−")}. Primes below 100: {count("split")} split, {count("inert")} inert, {count("ramified")} ramified.
      </p>
      <figcaption className="viz-caption">
        Green primes split as a product of two distinct prime ideals, grey primes stay prime, and red primes ramify as the
        square of a prime ideal. For an odd prime not dividing the discriminant, p splits exactly when d is a square modulo
        p. In the long run half the primes split and half stay inert.
      </figcaption>
    </figure>
  );
}
