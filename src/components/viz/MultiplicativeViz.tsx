"use client";

import { useState } from "react";
import { divisors, factorise, mu, phi, sigma, tau } from "./ntTools";

type F = { name: string; f: (n: number) => number; pk: string; desc: string };
const FS: F[] = [
  { name: "τ(n), number of divisors", f: tau, pk: "k + 1", desc: "counts the divisors" },
  { name: "σ(n), sum of divisors", f: sigma, pk: "(p^(k+1) − 1) / (p − 1)", desc: "adds the divisors" },
  { name: "φ(n), Euler’s function", f: phi, pk: "p^k − p^(k−1)", desc: "counts 1 ≤ a ≤ n coprime to n" },
  { name: "μ(n), Möbius function", f: mu, pk: "−1 if k = 1, 0 if k ≥ 2", desc: "is 0 unless n is squarefree, then ±1" },
];

/** A multiplicative function is fixed by its values on prime powers: f(n) is the product over the prime powers in n. */
export function MultiplicativeViz() {
  const [fi, setFi] = useState(1);
  const [n, setN] = useState(60);
  const F = FS[fi];
  const fac = factorise(n);
  const parts = fac.map(([p, k]) => ({ p, k, q: p ** k, v: F.f(p ** k) }));
  const prod = parts.reduce((a, x) => a * x.v, 1);
  const ds = divisors(n);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Arithmetic function">
        {FS.map((x, i) => <button key={x.name} type="button" aria-pressed={fi === i} className={fi === i ? "seg is-on" : "seg"} onClick={() => setFi(i)}>{x.name}</button>)}
      </div>
      <div className="viz-controls">
        <span className="viz-stepper"><span className="viz-stepper-label">n</span>
          <button type="button" className="btn" onClick={() => setN(Math.max(2, n - 1))} disabled={n <= 2} aria-label="Smaller n">−</button>
          <span className="mono viz-stepper-value">{n}</span>
          <button type="button" className="btn" onClick={() => setN(Math.min(400, n + 1))} disabled={n >= 400} aria-label="Larger n">+</button>
        </span>
        {[12, 30, 60, 72, 210, 360].map((v) => <button key={v} type="button" aria-pressed={n === v} className={n === v ? "viz-chip is-on" : "viz-chip"} onClick={() => setN(v)}>{v}</button>)}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>{n} = {fac.map(([p, k]) => (k > 1 ? `${p}^${k}` : `${p}`)).join(" · ")}</p>
      <table className="table" style={{ width: "auto", marginTop: 6 }}>
        <thead><tr><th style={{ textTransform: "none" }}>prime power</th><th style={{ textTransform: "none" }}>value there, by the formula {F.pk}</th></tr></thead>
        <tbody>{parts.map((x) => <tr key={x.p}><td className="mono">{x.k > 1 ? `${x.p}^${x.k} = ${x.q}` : x.q}</td><td className="mono">{x.v}</td></tr>)}</tbody>
      </table>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14 }}>product of these = {parts.map((x) => x.v).join(" · ")} = {prod}</p>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>computed directly from the definition: {F.f(n)}</p>
      <p style={{ margin: "6px 0", fontSize: 13, color: "var(--text-muted)" }}>divisors of {n}: {ds.join(", ")}</p>
      <figcaption className="viz-caption">
        This function {F.desc}. It is multiplicative: f(mn) = f(m)f(n) whenever m and n are coprime. So its value at any n is the product of its values at the prime powers in n, and the two computations always agree.
      </figcaption>
    </figure>
  );
}
