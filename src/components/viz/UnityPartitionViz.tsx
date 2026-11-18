"use client";

import { useState } from "react";

const psi = (t: number) => (t > 0 ? Math.exp(-1 / t) : 0);
const bump = (x: number, a: number, b: number) => psi(x - a) * psi(b - x);
const COLS = ["var(--accent)", "var(--danger)", "var(--success)", "var(--text)", "var(--text-muted)", "var(--accent)"];

/** A smooth partition of unity on an interval, subordinate to a cover by n overlapping open intervals. */
export function UnityPartitionViz() {
  const [n, setN] = useState(3);
  const [norm, setNorm] = useState(true);
  const A = 0, B = 10;
  const w = (B - A) / n;
  const ivs = Array.from({ length: n }, (_, i) => [A + i * w - 0.6 * w, A + (i + 1) * w + 0.6 * w] as [number, number]);
  const xs = Array.from({ length: 401 }, (_, i) => A + ((B - A) * i) / 400);
  const raw = xs.map((x) => ivs.map(([a, b]) => bump(x, a, b)));
  const tot = raw.map((r) => r.reduce((s, v) => s + v, 0));
  const vals = raw.map((r, j) => (norm ? r.map((v) => v / tot[j]) : r));
  const top = norm ? 1 : Math.max(...vals.flat());
  const X0 = 30, W = 460, Y0 = 20, H = 130;
  const sx = (x: number) => X0 + (W * (x - A)) / (B - A);
  const sy = (y: number) => Y0 + H - (H * y) / (top * 1.1);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>open sets in the cover = {n} <input type="range" min={2} max={6} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="sets" /></label>
      </div>
      <div className="segmented" role="group" aria-label="mode">
        <button type="button" aria-pressed={!norm} className={!norm ? "seg is-on" : "seg"} onClick={() => setNorm(false)}>raw bumps ψᵢ</button>
        <button type="button" aria-pressed={norm} className={norm ? "seg is-on" : "seg"} onClick={() => setNorm(true)}>normalised φᵢ = ψᵢ / Σψⱼ</button>
      </div>
      <svg viewBox="0 0 520 200" role="img" aria-label="Bump functions forming a partition of unity" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0} y={Y0} width={W} height={H} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        {norm && <line x1={X0} y1={sy(1)} x2={X0 + W} y2={sy(1)} style={{ stroke: "var(--text-faint)", strokeDasharray: "4 4" }} />}
        {ivs.map((_, i) => <polyline key={i} points={xs.map((x, j) => `${sx(x)},${sy(vals[j][i])}`).join(" ")} style={{ fill: "none", stroke: COLS[i], strokeWidth: 2.5, opacity: i === 5 ? 0.5 : 1 }} />)}
        {ivs.map(([a, b], i) => (
          <line key={i} x1={sx(Math.max(A, a))} y1={Y0 + H + 12 + (i % 2) * 8} x2={sx(Math.min(B, b))} y2={Y0 + H + 12 + (i % 2) * 8} style={{ stroke: COLS[i], strokeWidth: 3, opacity: i === 5 ? 0.5 : 1 }} />
        ))}
        <text x={X0} y={196} style={{ fill: "var(--text-muted)", fontSize: 11 }}>bars: the open sets Uᵢ; each curve is supported inside its set</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {norm ? `At every point the ${n} functions add to exactly 1; each is smooth and vanishes outside its open set.` : "The raw bumps are smooth, built from exp(−1/t), but their sum varies. Dividing by the sum fixes that."}
      </p>
      <figcaption className="viz-caption">
        The function exp(−1/t), extended by 0, gives smooth bumps that vanish outside any interval. Dividing each bump by the
        sum of all of them gives functions φᵢ, each supported in one open set, that add up to 1 everywhere: a partition of
        unity subordinate to the cover.
      </figcaption>
    </figure>
  );
}
