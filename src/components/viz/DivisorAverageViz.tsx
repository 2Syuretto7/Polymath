"use client";

import { useMemo, useState } from "react";

const MAX = 100000;
const GAMMA = 0.5772156649;
let TABLES: { d: Int32Array; phi: Int32Array; omega: Int32Array } | null = null;
function tables() {
  if (TABLES) return TABLES;
  const d = new Int32Array(MAX + 1), phi = new Int32Array(MAX + 1), omega = new Int32Array(MAX + 1);
  for (let i = 1; i <= MAX; i++) for (let j = i; j <= MAX; j += i) d[j]++;
  for (let i = 0; i <= MAX; i++) phi[i] = i;
  for (let p = 2; p <= MAX; p++) if (phi[p] === p) for (let j = p; j <= MAX; j += p) { phi[j] -= phi[j] / p; omega[j]++; }
  TABLES = { d, phi, omega };
  return TABLES;
}
const FNS = [
  { label: "d(n), the number of divisors", key: "d" as const, norm: (x: number) => x, main: (x: number) => Math.log(x) + 2 * GAMMA - 1, mainLabel: "log x + 2γ − 1" },
  { label: "φ(n), Euler’s function", key: "phi" as const, norm: (x: number) => x * x, main: () => 3 / Math.PI ** 2, mainLabel: "3/π²" },
  { label: "ω(n), distinct prime factors", key: "omega" as const, norm: (x: number) => x, main: (x: number) => Math.log(Math.log(x)) + 0.2614972128, mainLabel: "log log x + 0.2615" },
];
/** Σ_{n ≤ x} f(n), divided by x (or by x² for φ). */
export function average(k: number, x: number) {
  const T = tables()[FNS[k].key];
  let s = 0;
  for (let n = 1; n <= x; n++) s += T[n];
  return s / FNS[k].norm(x);
}

/** Arithmetic functions jump about, but their averages settle into smooth laws. */
export function DivisorAverageViz() {
  const [k, setK] = useState(0);
  const [e, setE] = useState(4);
  const X = Math.round(10 ** e);
  const pts = useMemo(() => {
    const T = tables()[FNS[k].key];
    const out: [number, number][] = [];
    let s = 0, next = 10;
    for (let n = 1; n <= MAX; n++) { s += T[n]; if (n >= next) { out.push([n, s / FNS[k].norm(n)]); next = Math.ceil(next * 1.08); } }
    return out;
  }, [k]);
  const val = average(k, X);
  const ys = pts.map((p) => p[1]).concat(pts.map((p) => FNS[k].main(p[0])));
  const lo = Math.min(...ys), hi = Math.max(...ys);
  const px = (x: number) => 40 + ((Math.log10(x) - 1) / 4) * 460, py = (v: number) => 200 - ((v - lo) / (hi - lo || 1)) * 165;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        {FNS.map((F, i) => <button key={F.key} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => setK(i)}>{F.label}</button>)}
      </div>
      <div className="viz-controls">
        <label>x = {X.toLocaleString("en-IN")} <input type="range" min={1} max={5} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log x" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Average of an arithmetic function against its main term" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[10, 100, 1000, 10000, 100000].map((x) => <text key={x} x={px(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x.toLocaleString("en-IN")}</text>)}
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(FNS[k].main(p[0])).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2, strokeDasharray: "5 3" }} />
        <path d={pts.map((p, i) => `${i ? "L" : "M"}${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={px(X)} cy={py(val)} r={5} style={{ fill: "var(--accent)" }} />
        <text x={44} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: the average up to x</text>
        <text x={200} y={22} style={{ fill: "var(--danger)", fontSize: 10 }}>red: {FNS[k].mainLabel}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {k === 1 ? "(1/x²) Σ φ(n)" : "(1/x) Σ"} up to {X.toLocaleString("en-IN")} = {val.toFixed(4)}; main term {FNS[k].mainLabel} = {FNS[k].main(X).toFixed(4)}.
      </p>
      <figcaption className="viz-caption">
        d(n) is 2 for every prime and huge for highly composite numbers, yet its average up to x is log x + 2γ − 1 with an
        error of order 1/√x. Euler&rsquo;s φ sums to about 3x²/π², and the number of prime factors averages log log x:
        a typical number has surprisingly few.
      </figcaption>
    </figure>
  );
}
