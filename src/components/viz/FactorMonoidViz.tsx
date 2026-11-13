"use client";

import { useState } from "react";

type Sys = { name: string; has: (m: number) => boolean; unit: boolean; presets: number[]; note: string };
const SYS: Sys[] = [
  { name: "positive integers", has: (m) => m >= 1, unit: true, presets: [60, 360, 1001], note: "The irreducibles are the primes, and every factorisation is the same up to order." },
  { name: "Hilbert numbers 1, 5, 9, 13, …", has: (m) => m % 4 === 1, unit: true, presets: [441, 693, 1617], note: "Products of numbers that are 1 more than a multiple of 4 stay in the set, but 3 and 7 are missing, so 9, 21 and 49 become irreducible." },
  { name: "even numbers 2, 4, 6, …", has: (m) => m % 2 === 0 && m > 0, unit: false, presets: [36, 60, 180], note: "Here 6 and 10 are irreducible, since neither is a product of two even numbers." },
];

const irreducible = (s: Sys, m: number) => {
  if (!s.has(m) || (s.unit && m === 1)) return false;
  for (let d = 2; d * d <= m; d++) if (m % d === 0 && s.has(d) && s.has(m / d) && d > 1 && m / d > 1) return false;
  return true;
};

const factorise = (s: Sys, n: number, min: number): number[][] => {
  const out: number[][] = [];
  if (n >= min && irreducible(s, n)) out.push([n]);
  for (let d = min; d * d <= n; d++) {
    if (n % d === 0 && irreducible(s, d) && s.has(n / d)) for (const r of factorise(s, n / d, d)) out.push([d, ...r]);
  }
  return out;
};

/** Factorisation in different number systems: unique for the positive integers, not for the Hilbert numbers or the evens. */
export function FactorMonoidViz() {
  const [si, setSi] = useState(0);
  const [n, setN] = useState(60);
  const s = SYS[si];
  const step = (dir: number) => { let m = n + dir; while (m > 1 && m < 2000 && !s.has(m)) m += dir; if (m > 1 && m < 2000 && s.has(m)) setN(m); };
  const fs = factorise(s, n, 2);
  const irr = Array.from({ length: 70 }, (_, k) => k + 1).filter((m) => irreducible(s, m));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Number system">
        {SYS.map((x, i) => <button key={x.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => { setSi(i); setN(x.presets[0]); }}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        <span className="viz-stepper"><span className="viz-stepper-label">n</span>
          <button type="button" className="btn" onClick={() => step(-1)} aria-label="Previous number in the system">−</button>
          <span className="mono viz-stepper-value">{n}</span>
          <button type="button" className="btn" onClick={() => step(1)} aria-label="Next number in the system">+</button>
        </span>
        {s.presets.map((p) => <button key={p} type="button" aria-pressed={n === p} className={n === p ? "viz-chip is-on" : "viz-chip"} onClick={() => setN(p)}>{p}</button>)}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 13 }}>irreducibles up to 70: {irr.join(", ")}, …</p>
      <div style={{ display: "grid", gap: 4, margin: "8px 0" }}>
        {fs.map((f) => <div key={f.join("·")} className="mono" style={{ fontSize: 15 }}>{n} = {f.join(" · ")}</div>)}
      </div>
      <p className={fs.length > 1 ? "viz-verdict viz-verdict-wrong" : "viz-verdict viz-verdict-right"} style={{ margin: "6px 0" }}>
        {fs.length > 1 ? `${fs.length} different factorisations into irreducibles: factorisation is not unique here.` : "Exactly one factorisation into irreducibles."}
      </p>
      <figcaption className="viz-caption">
        An irreducible is a member of the system, other than 1, that is not a product of two smaller members. {s.note} What the integers have and the others lack is Euclid&rsquo;s lemma: if an irreducible divides a product, it divides a factor.
      </figcaption>
    </figure>
  );
}
