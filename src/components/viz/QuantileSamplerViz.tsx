"use client";

import { useState } from "react";

type T = { name: string; F: (x: number) => number; Finv: (u: number) => number; f: (x: number) => number; xmax: number; ftop: number };
const TS: T[] = [
  { name: "exponential, rate 1", F: (x) => 1 - Math.exp(-x), Finv: (u) => -Math.log(1 - u), f: (x) => Math.exp(-x), xmax: 5, ftop: 1.1 },
  { name: "triangle on [0, 2]", F: (x) => (x <= 1 ? (x * x) / 2 : 1 - ((2 - x) ** 2) / 2), Finv: (u) => (u <= 0.5 ? Math.sqrt(2 * u) : 2 - Math.sqrt(2 * (1 - u))), f: (x) => 1 - Math.abs(x - 1), xmax: 2, ftop: 1.1 },
  { name: "larger of two uniforms", F: (x) => x * x, Finv: (u) => Math.sqrt(u), f: (x) => 2 * x, xmax: 1, ftop: 2.2 },
];
const BINS = 25;

/** Universality of the uniform: feed uniform draws through the inverse CDF to sample any distribution. */
export function QuantileSamplerViz() {
  const [ti, setTi] = useState(0);
  const [xs, setXs] = useState<number[]>([]);
  const [last, setLast] = useState<number | null>(null);
  const t = TS[ti];
  const draw = (k: number) => {
    const nx = [...xs]; let u = 0;
    for (let i = 0; i < k; i++) { u = Math.random(); nx.push(t.Finv(u)); }
    setXs(nx); setLast(u);
  };
  const W = 520, pad = 34, H1 = 150, H2 = 130;
  const X = (x: number) => pad + (x / t.xmax) * (W - 2 * pad);
  const Yc = (u: number) => H1 - 15 - u * (H1 - 25);
  const Yh = (y: number) => H1 + H2 - 20 - (y / t.ftop) * (H2 - 30);
  const grid = Array.from({ length: 201 }, (_, i) => (t.xmax * i) / 200);
  const cdf = grid.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Yc(t.F(x)).toFixed(1)}`).join(" ");
  const dens = grid.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Yh(t.f(x)).toFixed(1)}`).join(" ");
  const bw = t.xmax / BINS;
  const hist = Array(BINS).fill(0) as number[];
  xs.forEach((x) => { if (x < t.xmax) hist[Math.floor(x / bw)]++; });
  const xl = last === null ? null : t.Finv(last);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Target distribution">
        {TS.map((x, i) => <button key={x.name} type="button" aria-pressed={ti === i} className={ti === i ? "seg is-on" : "seg"} onClick={() => { setTi(i); setXs([]); setLast(null); }}>{x.name}</button>)}
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn" onClick={() => draw(1)}>Draw one U</button>
        <button type="button" className="btn btn-primary" onClick={() => draw(500)}>Draw 500</button>
        <button type="button" className="btn" onClick={() => { setXs([]); setLast(null); }}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${W} ${H1 + H2}`} role="img" aria-label="The CDF used to turn uniform draws into samples, and a histogram of the samples" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <line x1={pad} y1={Yc(0)} x2={W - pad} y2={Yc(0)} style={{ stroke: "var(--border)" }} />
        <line x1={pad} y1={Yc(0)} x2={pad} y2={Yc(1)} style={{ stroke: "var(--border)" }} />
        <text x={pad - 6} y={Yc(1) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>1</text>
        <text x={pad - 6} y={Yc(0) + 4} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>0</text>
        <path d={cdf} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {last !== null && xl !== null && xl <= t.xmax && (
          <g style={{ stroke: "var(--text-muted)", strokeDasharray: "4 3" }}>
            <line x1={pad} y1={Yc(last)} x2={X(xl)} y2={Yc(last)} />
            <line x1={X(xl)} y1={Yc(last)} x2={X(xl)} y2={Yh(0)} />
          </g>
        )}
        <text x={W - pad} y={Yc(0.15)} textAnchor="end" style={{ fill: "var(--text-faint)", fontSize: 11 }}>u = F(x)</text>
        {hist.map((h, k) => { const ht = xs.length ? h / (xs.length * bw) : 0; return <rect key={k} x={X(k * bw) + 1} y={Yh(Math.min(ht, t.ftop))} width={X(bw) - X(0) - 2} height={Yh(0) - Yh(Math.min(ht, t.ftop))} style={{ fill: "var(--accent)", fillOpacity: 0.45 }} />; })}
        <path d={dens} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <line x1={pad} y1={Yh(0)} x2={W - pad} y2={Yh(0)} style={{ stroke: "var(--border)" }} />
        {Array.from({ length: 5 }, (_, k) => (t.xmax * k) / 4).map((v) => <text key={v} x={X(v)} y={H1 + H2 - 5} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{v}</text>)}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        samples: {xs.length}; last U = {last === null ? "none yet" : last.toFixed(3)}; last X = F⁻¹(U) = {xl === null ? "none yet" : xl.toFixed(3)}
      </p>
      <figcaption className="viz-caption">
        Each draw picks U uniformly between 0 and 1 on the vertical axis, runs across to the CDF and drops down to X = F⁻¹(U). The histogram of these X values settles onto the target density, drawn as a thin curve. Steep parts of F catch many values of U, which is why samples pile up where the density is high.
      </figcaption>
    </figure>
  );
}
