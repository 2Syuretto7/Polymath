"use client";

import { useMemo, useState } from "react";

type C = [number, number];
const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const div = (a: C, b: C): C => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
const cexp = (a: C): C => { const r = Math.exp(a[0]); return [r * Math.cos(a[1]), r * Math.sin(a[1])]; };
const csqrt = (a: C): C => { const r = Math.hypot(a[0], a[1]); const th = Math.atan2(a[1], a[0]) / 2; const s = Math.sqrt(r); return [s * Math.cos(th), s * Math.sin(th)]; };

const SIG = 0.3;
const SLIT = 2;

/** A freely spreading Gaussian packet centred at a, and its x-derivative, with ħ = m = 1. */
function packet(x: number, t: number, a: number): [C, C] {
  const c: C = [1, t / (2 * SIG * SIG)];
  const arg = div([-((x - a) * (x - a)), 0], mul([4 * SIG * SIG, 0], c));
  const psi = div(cexp(arg), csqrt(c));
  const factor = div([-(x - a), 0], mul([2 * SIG * SIG, 0], c));
  return [psi, mul(psi, factor)];
}

/** The Bohmian velocity Im(ψ′/ψ) for one or two slits. */
export function bohmVelocity(x: number, t: number, two: boolean) {
  const [p1, d1] = packet(x, t, -SLIT);
  if (!two) return div(d1, p1)[1];
  const [p2, d2] = packet(x, t, SLIT);
  const psi: C = [p1[0] + p2[0], p1[1] + p2[1]];
  const dpsi: C = [d1[0] + d2[0], d1[1] + d2[1]];
  return div(dpsi, psi)[1];
}

export function BohmTrajectoryViz() {
  const [two, setTwo] = useState(true);
  const [n, setN] = useState(10);
  const TMAX = 3;
  const paths = useMemo(() => {
    const starts: number[] = [];
    const offs = Array.from({ length: n }, (_, i) => (-1.4 + (2.8 * (i + 0.5)) / n) * SIG);
    if (two) offs.forEach((o) => { starts.push(-SLIT + o); starts.push(SLIT + o); });
    else offs.forEach((o) => starts.push(-SLIT + o));
    return starts.map((x0) => {
      const pts: [number, number][] = [[0, x0]];
      let x = x0;
      const dt = 0.005;
      for (let i = 0; i < TMAX / dt; i++) {
        const t = i * dt;
        const k1 = bohmVelocity(x, t, two);
        const k2 = bohmVelocity(x + k1 * dt / 2, t + dt / 2, two);
        x += k2 * dt;
        if (i % 10 === 9) pts.push([t + dt, x]);
      }
      return pts;
    });
  }, [two, n]);
  const T = (t: number) => 40 + t * 150;
  const X = (x: number) => 115 - Math.max(-10, Math.min(10, x)) * 10;
  const crosses = paths.some((p) => p[0][1] < 0 && p.some(([, x]) => x > 0));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="slits">
        <button type="button" aria-pressed={!two} className={!two ? "seg is-on" : "seg"} onClick={() => setTwo(false)}>one slit</button>
        <button type="button" aria-pressed={two} className={two ? "seg is-on" : "seg"} onClick={() => setTwo(true)}>two slits</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>trajectories per slit = {n} <input type="range" min={4} max={16} step={2} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="n" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="Bohmian trajectories after the slits, time running to the right" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={T(0)} y1={10} x2={T(0)} y2={220} style={{ stroke: "var(--border-strong)", strokeWidth: 3 }} />
        <line x1={T(0)} y1={X(0)} x2={T(TMAX)} y2={X(0)} style={{ stroke: "var(--grid-line)", strokeDasharray: "4 3" }} />
        <text x={T(TMAX)} y={226} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>time →</text>
        <text x={T(0) - 6} y={X(-SLIT) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>slit</text>
        {two && <text x={T(0) - 6} y={X(SLIT) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>slit</text>}
        {paths.map((p, i) => <polyline key={i} points={p.map(([t, x]) => `${T(t)},${X(x)}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.2 }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {two
          ? `${paths.length} trajectories. They bunch into bands where the waves reinforce; none crosses another, and ${crosses ? "some cross" : "none crosses"} the centre line.`
          : `${paths.length} trajectories fanning out as the single packet spreads, with no bands.`}
      </p>
      <figcaption className="viz-caption">
        Each particle has a definite position at all times, and moves with velocity Im(ψ′/ψ) set by the wave function, which
        passes through both slits. Starting points are spread like |ψ|², and the guidance equation keeps them so: the
        interference pattern is built from definite paths.
      </figcaption>
    </figure>
  );
}
