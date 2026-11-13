"use client";

import { useState } from "react";
import { fmtNum } from "./format";

const f = (x: number, y: number) => x * x + y;
const EXACT = 5 / 6;
const SZ = 240, PAD = 30;

/** Riemann sums for f(x, y) = x² + y over the unit square. Each small square contributes height times area. */
export function DoubleSumViz() {
  const [n, setN] = useState(4);
  const [mode, setMode] = useState<"corner" | "mid">("corner");
  const h = 1 / n;
  const off = mode === "mid" ? h / 2 : 0;
  const cells: { i: number; j: number; v: number }[] = [];
  let sum = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) {
    const v = f(i * h + off, j * h + off);
    sum += v * h * h;
    cells.push({ i, j, v });
  }
  const fm = (z: number) => fmtNum(Number(z.toFixed(4)));

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Sample point">
        <button type="button" className={mode === "corner" ? "seg is-on" : "seg"} aria-pressed={mode === "corner"} onClick={() => setMode("corner")}>lower-left corners</button>
        <button type="button" className={mode === "mid" ? "seg is-on" : "seg"} aria-pressed={mode === "mid"} onClick={() => setMode("mid")}>midpoints</button>
      </div>
      <svg viewBox={`0 0 ${SZ + 2 * PAD + 80} ${SZ + 2 * PAD}`} role="img" aria-label={`A ${n} by ${n} grid on the unit square, shaded by the height of f`} style={{ width: "100%", maxWidth: 420, display: "block", margin: "12px auto 0" }}>
        {cells.map(({ i, j, v }) => (
          <rect key={`${i}-${j}`} x={PAD + i * h * SZ} y={PAD + SZ - (j + 1) * h * SZ} width={h * SZ} height={h * SZ}
            style={{ fill: "var(--accent)", fillOpacity: 0.1 + 0.4 * v, stroke: "var(--bg)", strokeWidth: n > 12 ? 0.5 : 1 }} />
        ))}
        {n <= 10 && cells.map(({ i, j }) => (
          <circle key={`p${i}-${j}`} cx={PAD + (i * h + off) * SZ} cy={PAD + SZ - (j * h + off) * SZ} r={2.5} style={{ fill: "var(--text)" }} />
        ))}
        <rect x={PAD} y={PAD} width={SZ} height={SZ} style={{ fill: "none", stroke: "var(--border-strong)" }} />
        <text x={PAD} y={PAD + SZ + 18} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>0</text>
        <text x={PAD + SZ} y={PAD + SZ + 18} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)" }}>x = 1</text>
        <text x={PAD - 8} y={PAD + 4} textAnchor="end" style={{ fontSize: 12, fill: "var(--text-muted)" }}>1</text>
        <text x={PAD + SZ + 12} y={PAD + 12} style={{ fontSize: 12, fill: "var(--text-muted)" }}>darker:</text>
        <text x={PAD + SZ + 12} y={PAD + 28} style={{ fontSize: 12, fill: "var(--text-muted)" }}>f is larger</text>
      </svg>
      <div className="viz-sliders">
        <label><span>squares per side n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={24} value={n} onChange={(e) => setN(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>number of squares, each of area 1/n²</td><td className="mono">{n * n}</td></tr>
          <tr><td>Riemann sum Σ f(sample) · ΔA</td><td className="mono">{fm(sum)}</td></tr>
          <tr><td>the integral, 1/3 + 1/2</td><td className="mono">{fm(EXACT)}</td></tr>
          <tr><td>error</td><td className="mono">{fm(sum - EXACT)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        The double integral is the volume under the surface z = x² + y, approximated by boxes standing on the small squares.
        As n grows the sums close in on 5/6 whichever sample points are used. Midpoints get there much faster.
      </figcaption>
    </figure>
  );
}
