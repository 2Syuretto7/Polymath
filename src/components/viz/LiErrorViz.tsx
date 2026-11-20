"use client";

import { useMemo, useState } from "react";

const MAX = 1000000;
let PI: Int32Array | null = null;
function piTable() {
  if (PI) return PI;
  const c = new Uint8Array(MAX + 1), pi = new Int32Array(MAX + 1);
  for (let p = 2; p * p <= MAX; p++) if (!c[p]) for (let j = p * p; j <= MAX; j += p) c[j] = 1;
  for (let n = 2; n <= MAX; n++) pi[n] = pi[n - 1] + (c[n] ? 0 : 1);
  PI = pi;
  return pi;
}
/** li(x) = li(2) + ∫ from 2 to x of dt/log t, by Simpson’s rule in u = log t. */
export function li(x: number) {
  const a = Math.log(2), b = Math.log(x), n = 2000, h = (b - a) / n;
  let s = 0;
  for (let i = 0; i <= n; i++) { const u = a + i * h, w = i === 0 || i === n ? 1 : i % 2 ? 4 : 2; s += w * Math.exp(u) / u; }
  return 1.0451637801 + (s * h) / 3;
}
export const piOf = (x: number) => piTable()[x];

/** π(x) against x/log x and li(x). */
export function LiErrorViz() {
  const [e, setE] = useState(6);
  const X = Math.round(10 ** e);
  const pts = useMemo(() => { const out: [number, number, number][] = []; for (let x = 100; x <= MAX; x = Math.ceil(x * 1.05)) { const p = piOf(x); out.push([x, li(x) / p, x / Math.log(x) / p]); } return out; }, []);
  const p = piOf(X), L = li(X), q = X / Math.log(X);
  const px = (x: number) => 40 + ((Math.log10(x) - 2) / 4) * 460, py = (v: number) => 200 - ((v - 0.8) / 0.5) * 170;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>x = {X.toLocaleString("en-IN")} <input type="range" min={2} max={6} step={0.5} value={e} onChange={(ev) => setE(Number(ev.target.value))} aria-label="log x" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Ratios of approximations to the prime counting function" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={40} y1={200} x2={500} y2={200} style={{ stroke: "var(--border-strong)" }} />
        {[100, 1000, 10000, 100000, 1000000].map((x) => <text key={x} x={px(x)} y={216} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{x.toLocaleString("en-IN")}</text>)}
        <line x1={40} y1={py(1)} x2={500} y2={py(1)} style={{ stroke: "var(--border-strong)", strokeDasharray: "4 3" }} />
        <text x={34} y={py(1) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>1</text>
        <path d={pts.map((r, i) => `${i ? "L" : "M"}${px(r[0]).toFixed(1)},${py(r[1]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <path d={pts.map((r, i) => `${i ? "L" : "M"}${px(r[0]).toFixed(1)},${py(r[2]).toFixed(1)}`).join("")} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2 }} />
        <line x1={px(X)} y1={30} x2={px(X)} y2={200} style={{ stroke: "var(--grid-line)" }} />
        <text x={44} y={22} style={{ fill: "var(--accent)", fontSize: 10 }}>blue: li(x)/π(x)</text>
        <text x={150} y={22} style={{ fill: "var(--danger)", fontSize: 10 }}>red: (x/log x)/π(x)</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        π({X.toLocaleString("en-IN")}) = {p.toLocaleString("en-IN")}; li(x) = {L.toFixed(1)} (off by {(L - p).toFixed(1).replace("-", "−")}); x/log x = {q.toFixed(1)} (off by {(q - p).toFixed(1).replace("-", "−")}).
      </p>
      <figcaption className="viz-caption">
        Both approximations are asymptotic to π(x), but li(x) is far better: its error is O(x exp(−c√log x)) by de la
        Vallée Poussin, and would be O(√x log x) if the Riemann hypothesis holds, while x/log x is off by roughly
        x/(log x)². Littlewood proved that π(x) − li(x) changes sign infinitely often, yet computation shows π(x) &lt; li(x) for every x up to 10¹⁹.
      </figcaption>
    </figure>
  );
}
