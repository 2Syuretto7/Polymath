"use client";

import { useMemo, useState } from "react";

const MAXN = 1_000_000;
let SIEVE: Uint8Array | null = null;
const sieve = () => {
  if (SIEVE) return SIEVE;
  const s = new Uint8Array(MAXN + 1).fill(1);
  s[0] = 0; s[1] = 0;
  for (let i = 2; i * i <= MAXN; i++) if (s[i]) for (let j = i * i; j <= MAXN; j += i) s[j] = 0;
  SIEVE = s;
  return s;
};

/** The prime counting function π(x) against x / ln x and the logarithmic integral Li(x). */
export function PrimeCountViz() {
  const [e, setE] = useState(3);
  const X = Math.round(10 ** e);
  const data = useMemo(() => {
    const s = sieve();
    const K = 200;
    const pts: { x: number; pi: number; xl: number; li: number }[] = [];
    let count = 0, li = 0, last = 2, gap = 0, prev = 2, gapAt = 2;
    let k = 1;
    for (let n = 2; n <= X; n++) {
      if (s[n]) { count++; if (n - prev > gap) { gap = n - prev; gapAt = prev; } prev = n; }
      const target = 2 + ((X - 2) * k) / K;
      if (n >= target || n === X) {
        // Li by Simpson's rule on [last, n]
        const m = (last + n) / 2;
        li += ((n - last) / 6) * (1 / Math.log(last) + 4 / Math.log(m) + 1 / Math.log(n));
        last = n;
        pts.push({ x: n, pi: count, xl: n / Math.log(n), li });
        k++;
      }
    }
    return { pts, gap, gapAt };
  }, [X]);
  const end = data.pts[data.pts.length - 1];
  const W = 560, H = 280, L = 48, B = 26;
  const ymax = Math.max(end.pi, end.li, end.xl) * 1.05;
  const px = (x: number) => L + ((x - 2) / (X - 2)) * (W - L - 10);
  const py = (y: number) => H - B - (y / ymax) * (H - B - 10);
  const line = (f: (p: (typeof data.pts)[number]) => number) => [`${px(2).toFixed(1)},${py(0).toFixed(1)}`, ...data.pts.map((p) => `${px(p.x).toFixed(1)},${py(f(p)).toFixed(1)}`)].join(" ");
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>x up to: <span className="mono">{X.toLocaleString("en-IN")}</span></span>
          <input type="range" min={2} max={6} step={0.25} value={e} onChange={(ev) => setE(Number(ev.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Graphs of π(x), x over log x, and Li(x)" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={L} y1={H - B} x2={W - 10} y2={H - B} style={{ stroke: "var(--border)" }} />
        <line x1={L} y1={10} x2={L} y2={H - B} style={{ stroke: "var(--border)" }} />
        <text x={L - 6} y={py(end.pi) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{end.pi}</text>
        <text x={W - 10} y={H - 8} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{X.toLocaleString("en-IN")}</text>
        <polyline points={line((p) => p.li)} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <polyline points={line((p) => p.xl)} style={{ fill: "none", stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "5 4" }} />
        <polyline points={line((p) => p.pi)} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <g style={{ fontSize: 11 }}>
          <line x1={L + 14} y1={22} x2={L + 40} y2={22} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} /><text x={L + 46} y={26} style={{ fill: "var(--text)" }}>π(x)</text>
          <line x1={L + 14} y1={40} x2={L + 40} y2={40} style={{ stroke: "var(--text-muted)", strokeWidth: 1.5 }} /><text x={L + 46} y={44} style={{ fill: "var(--text)" }}>Li(x)</text>
          <line x1={L + 14} y1={58} x2={L + 40} y2={58} style={{ stroke: "var(--text-faint)", strokeWidth: 1.5, strokeDasharray: "5 4" }} /><text x={L + 46} y={62} style={{ fill: "var(--text)" }}>x / ln x</text>
        </g>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 2, fontSize: 13 }}>
        <div>π({X.toLocaleString("en-IN")}) = {end.pi}</div>
        <div>x / ln x = {end.xl.toFixed(1)}, ratio π(x) / (x / ln x) = {(end.pi / end.xl).toFixed(4)}</div>
        <div>Li(x) = {end.li.toFixed(1)}, ratio π(x) / Li(x) = {(end.pi / end.li).toFixed(4)}</div>
        <div>largest gap between primes up to x: {data.gap}, after {data.gapAt}</div>
      </div>
      <figcaption className="viz-caption">
        The primes thin out, but in a regular way. Both ratios tend to 1, which is the prime number theorem; Li(x) = ∫₂ˣ dt / ln t is much the closer. The gaps grow too, but far more slowly than x.
      </figcaption>
    </figure>
  );
}
