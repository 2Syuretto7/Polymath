"use client";

import { useState } from "react";

const ALL = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31];
const MOD3 = [3, 7, 11, 19, 23, 31];

const factor = (n: number) => {
  const f: number[] = [];
  for (let d = 2; d * d <= n; d++) while (n % d === 0) { f.push(d); n /= d; }
  if (n > 1) f.push(n);
  return f;
};

/** Euclid's argument: multiply any finite list of primes, add 1, and every prime factor of the result is new. */
export function EuclidNumberViz() {
  const [mode, setMode] = useState(0);
  const [set, setSet] = useState<number[]>([2, 3, 5]);
  const pool = mode === 0 ? ALL : MOD3;
  const chosen = set.filter((p) => pool.includes(p));
  const prod = chosen.reduce((a, b) => a * b, 1);
  const N = mode === 0 ? prod + 1 : 4 * prod - 1;
  const fs = factor(N);
  const distinct = [...new Set(fs)];
  const toggle = (p: number) => setSet(set.includes(p) ? set.filter((q) => q !== p) : [...set, p].sort((a, b) => a - b));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Construction">
        {["p₁p₂⋯pₖ + 1", "4p₁p₂⋯pₖ − 1, primes 3 mod 4"].map((l, i) => <button key={l} type="button" aria-pressed={mode === i} className={mode === i ? "seg is-on" : "seg"} onClick={() => { setMode(i); setSet(i === 0 ? [2, 3, 5] : [3, 7]); }}>{l}</button>)}
      </div>
      <div className="viz-controls">
        {pool.map((p) => <button key={p} type="button" aria-pressed={chosen.includes(p)} className={chosen.includes(p) ? "viz-chip is-on" : "viz-chip"} onClick={() => toggle(p)}>{p}</button>)}
      </div>
      <p className="mono" style={{ margin: "10px 0 4px", fontSize: 15 }}>
        {mode === 0 ? `${chosen.length ? chosen.join(" · ") : "1"} + 1` : `4 · ${chosen.length ? chosen.join(" · ") : "1"} − 1`} = {N}
      </p>
      <p className="mono" style={{ margin: "4px 0", fontSize: 15 }}>{N} = {fs.join(" · ")}</p>
      <p style={{ margin: "6px 0" }}>
        Prime factors: {distinct.map((p, i) => (
          <span key={p}>{i > 0 && ", "}<strong>{p}</strong>{mode === 1 && <span className="mono" style={{ fontSize: 13 }}> (≡ {p % 4} mod 4)</span>}</span>
        ))}. None of them is on your list.
      </p>
      <figcaption className="viz-caption">
        {mode === 0
          ? "Each chosen prime leaves remainder 1 when it divides the number, so every prime factor is new. The number itself need not be prime: try 2 to 13, which gives 30031 = 59 · 509."
          : "The number is 3 more than a multiple of 4, so it cannot be a product of primes that are all 1 mod 4: some factor is 3 mod 4. It is not 3 or on your list, since those leave remainder −1. So there are infinitely many primes of the form 4k + 3."}
      </figcaption>
    </figure>
  );
}
