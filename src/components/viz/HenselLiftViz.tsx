"use client";

import { useState } from "react";

export const PRIMES = [5, 7, 11];
export const AS = [2, -1, 3];

const mod = (x: number, m: number) => ((x % m) + m) % m;

/** Square roots of a modulo p. */
export function rootsModP(a: number, p: number) {
  const out: number[] = [];
  for (let x = 0; x < p; x++) if (mod(x * x - a, p) === 0) out.push(x);
  return out;
}

/** Lifts a simple root x of x² − a modulo p to roots modulo p, p², …, pⁿ, choosing the unique digit each time. */
export function henselLift(a: number, p: number, x0: number, n = 5) {
  const out = [x0];
  let x = x0, pk = p;
  for (let k = 1; k < n; k++) {
    const next = pk * p;
    let found = -1;
    for (let t = 0; t < p; t++) {
      const y = x + t * pk;
      if (mod(y * y - a, next) === 0) { found = y; break; }
    }
    if (found < 0) break;
    x = found; pk = next; out.push(x);
  }
  return out;
}

/** Base-p digits of n, least significant first. */
function digits(n: number, p: number, k: number) {
  const d: number[] = [];
  for (let i = 0; i < k; i++) { d.push(n % p); n = Math.floor(n / p); }
  return d;
}

const sup = ["", "", "²", "³", "⁴", "⁵"];

/** Hensel lifting of a square root of a modulo p to a p-adic square root. */
export function HenselLiftViz() {
  const [pi, setPi] = useState(1);
  const [ai, setAi] = useState(0);
  const [ri, setRi] = useState(0);
  const p = PRIMES[pi], a = AS[ai];
  const roots = rootsModP(a, p);
  const r = roots.length ? roots[Math.min(ri, roots.length - 1)] : null;
  const lifts = r === null ? [] : henselLift(a, p, r);
  const aLab = String(a).replace("-", "−");
  const poly = a < 0 ? `x² + ${-a}` : `x² − ${a}`;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="prime">
        {PRIMES.map((v, i) => <button key={v} type="button" aria-pressed={pi === i} className={pi === i ? "seg is-on" : "seg"} onClick={() => { setPi(i); setRi(0); }}>p = {v}</button>)}
      </div>
      <div className="segmented" role="group" aria-label="a" style={{ marginTop: 6 }}>
        {AS.map((v, i) => <button key={v} type="button" aria-pressed={ai === i} className={ai === i ? "seg is-on" : "seg"} onClick={() => { setAi(i); setRi(0); }}>x² = {String(v).replace("-", "−")}</button>)}
      </div>
      {roots.length > 0 && (
        <div className="segmented" role="group" aria-label="starting root" style={{ marginTop: 6 }}>
          {roots.map((v, i) => <button key={v} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>start at {v} mod {p}</button>)}
        </div>
      )}
      <svg viewBox="0 0 540 190" role="img" aria-label="Successive lifts of a root modulo powers of p" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={14} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>modulus</text>
        <text x={110} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>root</text>
        <text x={200} y={20} style={{ fill: "var(--text-muted)", fontSize: 11 }}>base-{p} digits, newest on the left</text>
        {r === null && <text x={270} y={100} textAnchor="middle" style={{ fill: "var(--danger)", fontSize: 13 }}>{aLab} has no square root modulo {p}, so nothing to lift</text>}
        {lifts.map((x, k) => {
          const y = 46 + k * 30;
          const d = digits(x, p, k + 1).reverse();
          return (
            <g key={k}>
              <text x={14} y={y} style={{ fill: "var(--text)", fontSize: 12 }}>{p}{sup[k + 1]} = {Math.pow(p, k + 1)}</text>
              <text x={110} y={y} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{x}</text>
              {d.map((v, j) => (
                <g key={j}>
                  <rect x={200 + j * 34} y={y - 15} width={30} height={22} rx={3} style={{ fill: j === 0 ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--border)" }} />
                  <text x={215 + j * 34} y={y + 1} textAnchor="middle" style={{ fill: j === 0 ? "var(--surface)" : "var(--text)", fontSize: 12 }}>{v}</text>
                </g>
              ))}
            </g>
          );
        })}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {r === null
          ? `No root of ${poly} modulo ${p}.`
          : `Root of ${poly}: ${lifts.map((x, k) => `${x} mod ${Math.pow(p, k + 1)}`).join(", ")}. Each step adds one new digit, and only one choice works.`}
      </p>
      <figcaption className="viz-caption">
        A root of x² − a modulo p, with derivative 2x not divisible by p, lifts to exactly one root modulo p², then p³, and
        so on. The earlier digits never change, so the lifts converge to a square root of a in the p-adic integers.
      </figcaption>
    </figure>
  );
}
