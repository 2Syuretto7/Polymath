"use client";

import { useMemo, useState } from "react";

const MAXP = 100000;
const PRIMES = (() => { const c = new Uint8Array(MAXP + 1), out: number[] = []; for (let p = 2; p <= MAXP; p++) if (!c[p]) { out.push(p); for (let j = p * p; j <= MAXP; j += p) c[j] = 1; } return out; })();
const GAMMA = 0.5772156649;
const zeta = (s: number) => { let z = 0; for (let n = 1; n <= 100000; n++) z += n ** -s; return z + (100000 ** (1 - s)) / (s - 1) - 0.5 * 100000 ** -s; };
/** The partial Euler product Π_(p ≤ P) (1 − p⁻ˢ)⁻¹. */
export function eulerPartial(s: number, P: number) { let t = 1; for (const p of PRIMES) { if (p > P) break; t /= 1 - p ** -s; } return t; }

/** Partial Euler products against ζ(s), and Mertens’ theorem at s = 1. */
export function EulerProductViz() {
  const [s, setS] = useState(2);
  const [e, setE] = useState(2);
  const P = Math.round(10 ** e);
  const at1 = s === 1;
  const target = at1 ? NaN : zeta(s);
  const pts = useMemo(() => {
    const out: [number, number][] = [];
    let t = 1;
    for (const p of PRIMES) { t /= 1 - p ** -s; out.push([p, t]); }
    return out.filter((_, i) => i < 40 || i % 25 === 0);
  }, [s]);
  const val = eulerPartial(s, P);
  const mertens = (x: number) => Math.exp(GAMMA) * Math.log(x);
  const vals = pts.map((p) => p[1]).concat(at1 ? pts.map((p) => mertens(p[0])) : [target]);
  const hi = Math.max(...vals), lo = Math.min(1, ...vals);
  const px = (x: number) => 40 + (Math.log10(x) / 5) * 460, py = (v: number) => 200 - ((v - lo) / (hi - lo)) * 165;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>s = {s.toFixed(2)} <input type="range" min={1} max={3} step={0.25} value={s} onChange={(ev) => setS(Number(ev.target.value))} aria-label="s" /></label>
        <label>primes up to P = {P.toLocaleString("en-IN")} <input type="range" min={0.5} max={5} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log P" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Partial Euler products" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[1, 10, 100, 1000, 10000, 100000].map((x) => <text key={x} x={px(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x.toLocaleString("en-IN")}</text>)}
        {!at1 && <line x1={40} y1={py(target)} x2={500} y2={py(target)} style={{ stroke: "var(--danger)", strokeDasharray: "5 3" }} />}
        {at1 && <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(mertens(p[0])).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--danger)", strokeDasharray: "5 3" }} />}
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(Math.max(2, P))} cy={py(val)} r={5} style={{ fill: "var(--accent)" }} />
        <text x={44} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: product over primes up to P</text>
        <text x={250} y={22} style={{ fill: "var(--danger)", fontSize: 10 }}>{at1 ? "red: exp(γ) log P (Mertens)" : `red: ζ(${s.toFixed(2)}) = ${target.toFixed(4)}`}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Product over primes up to {P.toLocaleString("en-IN")}: {val.toFixed(4)}. {at1 ? `exp(γ) log P = ${mertens(P).toFixed(4)}: the product diverges like log P.` : `Ratio to ζ(s): ${(val / target).toFixed(5)}.`}
      </p>
      <figcaption className="viz-caption">
        Expanding each factor 1 + p⁻ˢ + p⁻²ˢ + ⋯ and multiplying, unique factorisation produces every n⁻ˢ exactly once, so
        the product over all primes is ζ(s) for s &gt; 1. At s = 1 the sum diverges, and so must the product: there are
        infinitely many primes, and Mertens found the rate.
      </figcaption>
    </figure>
  );
}
