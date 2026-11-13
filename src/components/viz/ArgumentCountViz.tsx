"use client";

import { useState } from "react";

type C = [number, number];
const ZEROS: C[] = [[0.5, 0.5], [-1, 0]];
const POLES: C[] = [[0.5, -0.75]];

/** The argument principle: the change in arg f round a circle is 2π times (zeros − poles) inside. */
export function ArgumentCountViz() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [r, setR] = useState(1.25);
  const f = ([x, y]: C) => {
    // arg f = Σ arg(z − zero) − Σ arg(z − pole); return the argument contributions only
    let s = 0; for (const [p, q] of ZEROS) s += Math.atan2(y - q, x - p); for (const [p, q] of POLES) s -= Math.atan2(y - q, x - p); return s;
  };
  const N = 720;
  const args: number[] = [];
  let prev = f([a + r, b]), acc = 0;
  args.push(acc);
  let hit = false;
  for (const p of [...ZEROS, ...POLES]) if (Math.abs(Math.hypot(p[0] - a, p[1] - b) - r) < 0.03) hit = true;
  for (let k = 1; k <= N; k++) {
    const t = (2 * Math.PI * k) / N; const cur = f([a + r * Math.cos(t), b + r * Math.sin(t)]);
    let d = cur - prev; while (d > Math.PI) d -= 2 * Math.PI; while (d < -Math.PI) d += 2 * Math.PI; acc += d; prev = cur; args.push(acc);
  }
  const Z = ZEROS.filter(([p, q]) => Math.hypot(p - a, q - b) < r).length;
  const P = POLES.filter(([p, q]) => Math.hypot(p - a, q - b) < r).length;
  const W = 300, B = 2.6, X = (u: number) => W / 2 + (u / B) * (W / 2 - 8), Y = (v: number) => W / 2 - (v / B) * (W / 2 - 8), sc = (W / 2 - 8) / B;
  const GW = 300, GH = 300, gx = (k: number) => 30 + (k / N) * (GW - 40), gy = (v: number) => GH / 2 - (v / (6 * Math.PI)) * (GH / 2 - 14);
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>f has zeros at 0.5 + 0.5i and −1, shown as circles, and a pole at 0.5 − 0.75i, shown as a cross.</p>
      <div className="viz-sliders">
        <label><span>centre, real part: <span className="mono">{a}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>centre, imaginary part: <span className="mono">{b}</span></span><input type="range" min={-1.5} max={1.5} step={0.25} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
        <label><span>radius: <span className="mono">{r}</span></span><input type="range" min={0.25} max={2} step={0.25} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginTop: 6 }}>
        <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="Circle with zeros and pole" style={{ width: "100%", maxWidth: 300 }}>
          <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
          <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
          <circle cx={X(a)} cy={Y(b)} r={r * sc} style={{ fill: "var(--accent)", fillOpacity: 0.1, stroke: "var(--accent)", strokeWidth: 2.5 }} />
          {ZEROS.map(([p, q], k) => <circle key={k} cx={X(p)} cy={Y(q)} r={6} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2.5 }} />)}
          {POLES.map(([p, q], k) => <g key={k} style={{ stroke: "var(--danger)", strokeWidth: 3 }}><line x1={X(p) - 6} y1={Y(q) - 6} x2={X(p) + 6} y2={Y(q) + 6} /><line x1={X(p) - 6} y1={Y(q) + 6} x2={X(p) + 6} y2={Y(q) - 6} /></g>)}
        </svg>
        <svg viewBox={`0 0 ${GW} ${GH}`} role="img" aria-label="Continuous argument of f round the circle" style={{ width: "100%", maxWidth: 300 }}>
          {[-6, -4, -2, 0, 2, 4, 6].map((m) => <g key={m}><line x1={30} y1={gy((m * Math.PI) / 2)} x2={GW - 10} y2={gy((m * Math.PI) / 2)} style={{ stroke: "var(--border)" }} /><text x={26} y={gy((m * Math.PI) / 2) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{m === 0 ? "0" : `${m / 2}π`}</text></g>)}
          <path d={args.map((v, k) => `${k ? "L" : "M"}${gx(k).toFixed(1)},${gy(v).toFixed(1)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
          <text x={GW / 2} y={GH - 4} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>once round the circle →</text>
        </svg>
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>zeros inside: {Z}; poles inside: {P}</div>
        <div>{hit ? "The circle passes through a zero or pole: the count is not defined." : `change in arg f = ${(acc / Math.PI).toFixed(3)}π = 2π × ${Math.round(acc / (2 * Math.PI))}`}</div>
      </div>
      <figcaption className="viz-caption">
        The right-hand graph follows the argument of f continuously as z goes once round the circle. Each zero inside adds a
        full turn and each pole inside takes one away, so the total change is 2π times the number of zeros minus the number of
        poles inside.
      </figcaption>
    </figure>
  );
}
