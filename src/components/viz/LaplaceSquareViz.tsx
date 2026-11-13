"use client";

import { useState } from "react";

type Kind = "mode" | "tent" | "block";
const LABEL: Record<Kind, string> = { mode: "top = sin πx", tent: "top = a tent", block: "top = a block" };
const MODES = 80, G = 40;
const coef = (k: Kind, n: number) =>
  k === "mode" ? (n === 1 ? 1 : 0)
  : k === "tent" ? (8 * Math.sin((n * Math.PI) / 2)) / (n * n * Math.PI * Math.PI)
  : (2 / (n * Math.PI)) * (Math.cos(0.3 * n * Math.PI) - Math.cos(0.7 * n * Math.PI));
const top = (k: Kind, x: number) => (k === "mode" ? Math.sin(Math.PI * x) : k === "tent" ? (x <= 0.5 ? 2 * x : 2 - 2 * x) : x > 0.3 && x < 0.7 ? 1 : 0);
/** sinh(nπy)/sinh(nπ), computed without overflow. */
const ratio = (n: number, y: number) => (Math.exp(n * Math.PI * (y - 1)) - Math.exp(-n * Math.PI * (y + 1))) / (1 - Math.exp(-2 * n * Math.PI));

/** Separation of variables for Laplace's equation in a square: zero on three sides, given data on the top. */
export function LaplaceSquareViz() {
  const [kind, setKind] = useState<Kind>("tent");
  const [y, setY] = useState(0.7);
  const b = Array.from({ length: MODES + 1 }, (_, n) => (n ? coef(kind, n) : 0));
  const u = (x: number, yy: number) => {
    if (yy >= 1) return top(kind, x);
    let s = 0;
    for (let n = 1; n <= MODES; n++) if (b[n]) s += b[n] * ratio(n, yy) * Math.sin(n * Math.PI * x);
    return s;
  };
  const cells: { i: number; j: number; v: number }[] = [];
  for (let j = 0; j < G; j++) for (let i = 0; i < G; i++) cells.push({ i, j, v: u((i + 0.5) / G, (j + 0.5) / G) });
  const xs = Array.from({ length: 201 }, (_, i) => i / 200);
  const prof = xs.map((x) => u(x, y));
  const pmax = Math.max(...prof);
  const L = 30, S = 200, T = 15, c = S / G;
  const PX = (x: number) => 270 + x * 230, PY = (v: number) => 200 - v * 150;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Data on the top edge">
        {(["mode", "tent", "block"] as Kind[]).map((k) => (
          <button key={k} type="button" aria-pressed={kind === k} className={kind === k ? "seg is-on" : "seg"} onClick={() => setKind(k)}>{LABEL[k]}</button>
        ))}
      </div>
      <div className="viz-sliders">
        <label><span>height y of the slice: <span className="mono">{y.toFixed(2)}</span></span>
          <input type="range" min={0} max={1} step={0.05} value={y} onChange={(e) => setY(Number(e.target.value))} /></label>
      </div>
      <svg viewBox="0 0 520 240" role="img" aria-label="A harmonic function in a square, and its profile along a horizontal slice" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {cells.map(({ i, j, v }) => (
          <rect key={`${i}-${j}`} x={L + i * c} y={T + S - (j + 1) * c} width={c + 0.4} height={c + 0.4} style={{ fill: "var(--accent)", opacity: Math.max(0, Math.min(1, v)) * 0.9 + 0.03 }} />
        ))}
        <rect x={L} y={T} width={S} height={S} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 1.5 }} />
        <line x1={L} y1={T + S - y * S} x2={L + S} y2={T + S - y * S} style={{ stroke: "var(--text)", strokeDasharray: "4 3", strokeWidth: 1.5 }} />
        <text x={L} y={T + S + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>u = 0 on the bottom and sides</text>
        <line x1={PX(0)} y1={PY(0)} x2={PX(1)} y2={PY(0)} style={{ stroke: "var(--border)" }} />
        <path d={xs.map((x, i) => `${i ? "L" : "M"}${PX(x).toFixed(1)},${PY(top(kind, x)).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5, strokeDasharray: "4 3" }} />
        <path d={prof.map((v, i) => `${i ? "L" : "M"}${PX(xs[i]).toFixed(1)},${PY(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.4 }} />
        <text x={PX(0)} y={PY(0) + 16} style={{ fill: "var(--text-muted)", fontSize: 11 }}>profile at height y; dashed: the top data</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>u(½, y) = {u(0.5, y).toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>largest value on the slice: {pmax.toFixed(4)}</div>
      </div>
      <figcaption className="viz-caption">
        Trying u = X(x)Y(y) in uₓₓ + uᵧᵧ = 0 splits the equation into X″ = −λX and Y″ = λY. The side conditions force X =
        sin(nπx), and the bottom condition gives Y = sinh(nπy). So u = Σ bₙ sin(nπx) sinh(nπy)/sinh(nπ), with bₙ the sine
        coefficients of the top data. Mode n fades like exp(−nπ(1 − y)) below the top, so corners and jumps in the data are
        smoothed out at once.
      </figcaption>
    </figure>
  );
}
