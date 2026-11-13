"use client";

import { useState } from "react";

const FAM = ["uniform", "normal", "exponential"];

/** The uniform, normal and exponential densities, with the memoryless property of the exponential. */
export function ContinuousFamiliesViz() {
  const [f, setF] = useState(1);
  const [a, setA] = useState(-1);
  const [w, setW] = useState(3);
  const [mu, setMu] = useState(0);
  const [sg, setSg] = useState(1);
  const [lam, setLam] = useState(1);
  const [s, setS] = useState(0);
  const pdf = (x: number) =>
    f === 0 ? (x >= a && x <= a + w ? 1 / w : 0) : f === 1 ? Math.exp(-((x - mu) ** 2) / (2 * sg * sg)) / (sg * Math.sqrt(2 * Math.PI)) : x >= 0 ? lam * Math.exp(-lam * x) : 0;
  const mean = f === 0 ? a + w / 2 : f === 1 ? mu : 1 / lam;
  const sd = f === 0 ? w / Math.sqrt(12) : f === 1 ? sg : 1 / lam;
  const within = f === 0 ? 1 / Math.sqrt(3) : f === 1 ? 0.6827 : 1 - Math.exp(-2);
  const xmin = -5, xmax = 8;
  const peak = f === 0 ? 1 / w : f === 1 ? 1 / (sg * Math.sqrt(2 * Math.PI)) : lam;
  const top = peak * 1.2;
  const W = 520, H = 210, pad = 24;
  const X = (x: number) => pad + ((x - xmin) / (xmax - xmin)) * (W - 2 * pad);
  const Y = (y: number) => H - 25 - (Math.min(y, top) / top) * (H - 40);
  const xs = Array.from({ length: 521 }, (_, i) => xmin + ((xmax - xmin) * i) / 520);
  const path = xs.map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(pdf(x)).toFixed(1)}`).join(" ");
  const tail = f === 2 && s > 0 ? xs.filter((x) => x >= s).map((x, i) => `${i ? "L" : "M"}${X(x).toFixed(1)},${Y(pdf(x) / Math.exp(-lam * s)).toFixed(1)}`).join(" ") : "";
  const sl = (label: string, v: number, set: (n: number) => void, min: number, max: number, step: number) => (
    <label key={label}><span>{label}: <span className="mono">{v}</span></span>
      <input type="range" min={min} max={max} step={step} value={v} onChange={(e) => set(Number(e.target.value))} /></label>
  );
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Family">
        {FAM.map((nm, i) => <button key={nm} type="button" aria-pressed={f === i} className={f === i ? "seg is-on" : "seg"} onClick={() => setF(i)}>{nm}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        {f === 0 && [sl("left end a", a, setA, -4, 3, 0.5), sl("width b − a", w, setW, 0.5, 6, 0.5)]}
        {f === 1 && [sl("mean μ", mu, setMu, -3, 3, 0.5), sl("standard deviation σ", sg, setSg, 0.4, 3, 0.1)]}
        {f === 2 && [sl("rate λ", lam, setLam, 0.25, 3, 0.25), sl("already waited s", s, setS, 0, 4, 0.5)]}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Density of the chosen distribution" style={{ width: "100%", display: "block", marginTop: 6 }}>
        <rect x={X(Math.max(mean - sd, xmin))} y={12} width={X(Math.min(mean + sd, xmax)) - X(Math.max(mean - sd, xmin))} height={H - 37} style={{ fill: "var(--accent-soft)", fillOpacity: 0.4 }} />
        <line x1={pad} y1={Y(0)} x2={W - pad} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        {Array.from({ length: 14 }, (_, k) => xmin + k).map((t) => <text key={t} x={X(t)} y={H - 8} textAnchor="middle" style={{ fill: "var(--text-faint)", fontSize: 11 }}>{t}</text>)}
        <path d={path} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        {tail && <path d={tail} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2, strokeDasharray: "5 4" }} />}
        {tail && <line x1={X(s)} y1={12} x2={X(s)} y2={Y(0)} style={{ stroke: "var(--text-muted)" }} />}
      </svg>
      <p className="mono" style={{ margin: "4px 0" }}>
        mean {mean.toFixed(2)}; standard deviation {sd.toFixed(2)}; P(within one SD of the mean) = {within.toFixed(4)}
        {f === 2 && s > 0 ? `; P(X > ${s} + 1 | X > ${s}) = P(X > 1) = ${Math.exp(-lam).toFixed(4)}` : ""}
      </p>
      <figcaption className="viz-caption">
        The shaded band is one standard deviation either side of the mean. For the exponential, slide &ldquo;already waited&rdquo;: the dashed curve is the density of X given X &gt; s, and it is exactly the original curve moved s to the right. Having waited tells you nothing about how much longer you will wait.
      </figcaption>
    </figure>
  );
}
