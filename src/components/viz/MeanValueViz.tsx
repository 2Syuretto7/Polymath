"use client";

import { useState } from "react";

type Kind = "saddle" | "exp" | "cubic" | "bowl";
const FN: Record<Kind, { label: string; f: (x: number, y: number) => number; harmonic: boolean }> = {
  saddle: { label: "x² − y²", f: (x, y) => x * x - y * y, harmonic: true },
  exp: { label: "eˣ cos y", f: (x, y) => Math.exp(x) * Math.cos(y), harmonic: true },
  cubic: { label: "x³ − 3xy²", f: (x, y) => x ** 3 - 3 * x * y * y, harmonic: true },
  bowl: { label: "x² + y² (not harmonic)", f: (x, y) => x * x + y * y, harmonic: false },
};

/** The mean value property: a harmonic function at the centre of a circle equals its average round the circle. */
export function MeanValueViz() {
  const [kind, setKind] = useState<Kind>("saddle");
  const [cx, setCx] = useState(0.4);
  const [cy, setCy] = useState(-0.3);
  const [r, setR] = useState(0.8);
  const { f } = FN[kind];
  const M = 720;
  let circ = 0;
  for (let k = 0; k < M; k++) { const t = (k / M) * 2 * Math.PI; circ += f(cx + r * Math.cos(t), cy + r * Math.sin(t)); }
  circ /= M;
  let disc = 0, cnt = 0;
  for (let a = 0; a < 60; a++) for (let b = 0; b < 120; b++) {
    const rr = r * Math.sqrt((a + 0.5) / 60), t = ((b + 0.5) / 120) * 2 * Math.PI;
    disc += f(cx + rr * Math.cos(t), cy + rr * Math.sin(t)); cnt++;
  }
  disc /= cnt;
  const centre = f(cx, cy);
  const G = 36, L = 2;
  const vals: number[] = [];
  for (let j = 0; j < G; j++) for (let i = 0; i < G; i++) vals.push(f(-L + ((i + 0.5) / G) * 2 * L, -L + ((j + 0.5) / G) * 2 * L));
  const lo = Math.min(...vals), hi = Math.max(...vals);
  const S = 220, c = S / G;
  const X = (x: number) => 20 + ((x + L) / (2 * L)) * S, Y = (y: number) => 10 + S - ((y + L) / (2 * L)) * S;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Function">
        {(Object.keys(FN) as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{FN[k].label}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>centre x: <span className="mono">{cx.toFixed(2)}</span></span>
          <input type="range" min={-1} max={1} step={0.05} value={cx} onChange={(e) => setCx(Number(e.target.value))} /></label>
        <label><span>centre y: <span className="mono">{cy.toFixed(2)}</span></span>
          <input type="range" min={-1} max={1} step={0.05} value={cy} onChange={(e) => setCy(Number(e.target.value))} /></label>
        <label><span>radius r: <span className="mono">{r.toFixed(2)}</span></span>
          <input type="range" min={0.1} max={1} step={0.05} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="A function shaded over a square, with a circle drawn on it" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {vals.map((v, k) => (
          <rect key={k} x={20 + (k % G) * c} y={10 + (G - 1 - Math.floor(k / G)) * c} width={c + 0.4} height={c + 0.4} style={{ fill: "var(--accent)", opacity: ((v - lo) / (hi - lo)) * 0.85 + 0.05 }} />
        ))}
        <rect x={20} y={10} width={S} height={S} style={{ fill: "none", stroke: "var(--border)" }} />
        <circle cx={X(cx)} cy={Y(cy)} r={(r / (2 * L)) * S} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2.5 }} />
        <circle cx={X(cx)} cy={Y(cy)} r={4} style={{ fill: "var(--text)" }} />
        <text x={262} y={40} style={{ fill: "var(--text)", fontSize: 13 }}>square from −2 to 2 in x and y;</text>
        <text x={262} y={58} style={{ fill: "var(--text)", fontSize: 13 }}>darker where the function is larger</text>
        <text x={262} y={100} style={{ fill: "var(--text)", fontSize: 13 }}>value at the centre: {centre.toFixed(4)}</text>
        <text x={262} y={124} style={{ fill: "var(--text)", fontSize: 13 }}>average round the circle: {circ.toFixed(4)}</text>
        <text x={262} y={148} style={{ fill: "var(--text)", fontSize: 13 }}>average over the disc: {disc.toFixed(4)}</text>
        <text x={262} y={182} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>circle average − centre value:</text>
        <text x={262} y={200} style={{ fill: "var(--text)", fontSize: 13, fontWeight: 700 }}>{(circ - centre).toFixed(4)}</text>
      </svg>
      <figcaption className="viz-caption">
        For a harmonic function the value at the centre of any circle inside its domain equals the average of its values on
        the circle, and also the average over the disc. The three harmonic functions here pass the test for every centre and
        radius. For x² + y², whose Laplacian is 4, the circle average exceeds the centre value by exactly r²: the function is
        subharmonic, bending upwards on average.
      </figcaption>
    </figure>
  );
}
