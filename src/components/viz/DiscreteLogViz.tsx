"use client";

import { useState } from "react";
import { modpow, ord } from "./ntTools";

const PRIMES = [11, 23, 47, 101, 199];

/** Powers of a primitive root look scattered; finding the exponent from the power is the discrete logarithm problem. */
export function DiscreteLogViz() {
  const [p, setP] = useState(101);
  const [h, setH] = useState(30);
  const g = (() => { for (let a = 2; a < p; a++) if (ord(a, p) === p - 1) return a; return 2; })();
  const H = Math.min(h, p - 1);
  const pts = Array.from({ length: p - 1 }, (_, k) => [k, modpow(g, k, p)] as const);
  const lg = pts.find(([, v]) => v === H)?.[0] ?? 0;
  const W = 520, S = 260, L = 30;
  const X = (k: number) => L + (k / (p - 1)) * (W - L - 10), Y = (v: number) => S - 18 - (v / p) * (S - 30);
  const r = p > 120 ? 2 : 3;
  return (
    <figure className="viz">
      <div className="viz-controls" style={{ marginTop: 0 }}>
        <span style={{ fontSize: 13, color: "var(--text-muted)" }}>prime p:</span>
        {PRIMES.map((q) => <button key={q} type="button" aria-pressed={p === q} className={p === q ? "viz-chip is-on" : "viz-chip"} onClick={() => { setP(q); setH(Math.min(h, q - 1)); }}>{q}</button>)}
      </div>
      <div className="viz-sliders">
        <label><span>target h: <span className="mono">{H}</span></span>
          <input type="range" min={1} max={p - 1} step={1} value={H} onChange={(e) => setH(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${S}`} role="img" aria-label={`The powers of ${g} modulo ${p}`} style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={L} y1={S - 18} x2={W - 10} y2={S - 18} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={8} x2={L} y2={S - 18} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={Y(H)} x2={W - 10} y2={Y(H)} style={{ stroke: "var(--accent)", strokeDasharray: "4 4" }} />
        <text x={L - 4} y={Y(H) + 4} textAnchor="end" style={{ fill: "var(--accent)", fontSize: 10 }}>{H}</text>
        <text x={W - 10} y={S - 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>exponent k → {p - 2}</text>
        <text x={L + 4} y={14} style={{ fill: "var(--text-muted)", fontSize: 10 }}>{g}ᵏ mod {p}</text>
        {pts.map(([k, v]) => <circle key={k} cx={X(k)} cy={Y(v)} r={k === lg ? 6 : r} style={{ fill: k === lg ? "var(--accent)" : "var(--text-faint)" }} />)}
      </svg>
      <p className="mono" style={{ margin: "6px 0", fontSize: 14 }}>
        g = {g} is a primitive root mod {p}; the discrete logarithm of {H} to base {g} is {lg}, since {g}^{lg} ≡ {H} (mod {p})
      </p>
      <figcaption className="viz-caption">
        Each dot is a power of g. Going forwards, from k to gᵏ mod p, is fast by repeated squaring. Going backwards, from a value to its exponent, means finding the one dot on the dashed line, and the dots show no pattern to guide the search. For primes with hundreds of digits, no known method finds it in reasonable time.
      </figcaption>
    </figure>
  );
}
