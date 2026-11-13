"use client";

import { useState } from "react";

const SHOW = ["conjugate", "1/z", "z²", "iz"] as const;

/** A point z = r e^{iθ} and the points built from it: conjugate, reciprocal, square and iz. */
export function ComplexPointsViz() {
  const [r, setR] = useState(1.25);
  const [th, setTh] = useState(30);
  const [on, setOn] = useState<boolean[]>([true, true, true, false]);
  const t = (th * Math.PI) / 180;
  const x = r * Math.cos(t), y = r * Math.sin(t);
  const pts: { k: string; x: number; y: number }[] = [
    { k: "z̄", x, y: -y },
    { k: "1/z", x: x / (r * r), y: -y / (r * r) },
    { k: "z²", x: x * x - y * y, y: 2 * x * y },
    { k: "iz", x: -y, y: x },
  ];
  const W = 400, B = 2.4, pad = 14;
  const X = (u: number) => W / 2 + (u / B) * (W / 2 - pad);
  const Y = (v: number) => W / 2 - (v / B) * (W / 2 - pad);
  // place a label to one side of the ray from 0, so points on the same ray keep separate labels
  const lab = (u: number, v: number, side = 1) => {
    const n = Math.hypot(u, v) || 1, px = (-v / n) * side, py = (u / n) * side;
    const lx = X(u) + 14 * px + 6 * (u / n), ly = Y(v) - 14 * py - 6 * (v / n) + 4;
    return { x: lx, y: ly, anchor: (Math.abs(px) < 0.3 ? "middle" : px > 0 ? "start" : "end") as "start" | "end" | "middle" };
  };
  const shown = pts.filter((_, i) => on[i]);
  const L = lab(x, y, 1);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>modulus r: <span className="mono">{r}</span></span>
          <input type="range" min={0.5} max={1.5} step={0.25} value={r} onChange={(e) => setR(Number(e.target.value))} /></label>
        <label><span>argument θ: <span className="mono">{th}°</span></span>
          <input type="range" min={0} max={345} step={15} value={th} onChange={(e) => setTh(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 6 }}>
        {SHOW.map((s, i) => <button key={s} type="button" aria-pressed={on[i]} className={on[i] ? "viz-chip is-on" : "viz-chip"} onClick={() => setOn(on.map((b, j) => (j === i ? !b : b)))}>{s}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${W}`} role="img" aria-label="The complex plane with z and points built from it" style={{ width: "100%", maxWidth: 440, display: "block", margin: "6px auto" }}>
        <line x1={0} y1={Y(0)} x2={W} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={0} x2={X(0)} y2={W} style={{ stroke: "var(--border)" }} />
        <circle cx={X(0)} cy={Y(0)} r={X(1) - X(0)} style={{ fill: "none", stroke: "var(--border)", strokeDasharray: "4 4" }} />
        <text x={X(1) + 3} y={Y(0) + 14} style={{ fill: "var(--text-faint)", fontSize: 11 }}>1</text>
        <text x={X(0) + 5} y={Y(1) - 4} style={{ fill: "var(--text-faint)", fontSize: 11 }}>i</text>
        {shown.map((p) => { const l = lab(p.x, p.y, p.k === "1/z" || p.k === "iz" ? -1 : 1); return (
          <g key={p.k}>
            <line x1={X(0)} y1={Y(0)} x2={X(p.x)} y2={Y(p.y)} style={{ stroke: "var(--text-faint)", strokeDasharray: "3 3" }} />
            <circle cx={X(p.x)} cy={Y(p.y)} r={5} style={{ fill: "var(--bg)", stroke: "var(--text)", strokeWidth: 2 }} />
            <text x={l.x} y={l.y} textAnchor={l.anchor} style={{ fill: "var(--text)", fontSize: 13 }}>{p.k}</text>
          </g>
        ); })}
        <line x1={X(0)} y1={Y(0)} x2={X(x)} y2={Y(y)} style={{ stroke: "var(--accent)", strokeWidth: 2.5 }} />
        <circle cx={X(x)} cy={Y(y)} r={6} style={{ fill: "var(--accent)" }} />
        <text x={L.x} y={L.y} textAnchor={L.anchor} style={{ fill: "var(--accent)", fontSize: 14, fontWeight: 600 }}>z</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 4, fontSize: 14 }}>
        <div>z = {x.toFixed(3)} {y < 0 ? "−" : "+"} {Math.abs(y).toFixed(3)}i = {r}·e^(i·{th}°)</div>
        <div>|z| = {r}; arg z = {th}°</div>
        <div>z² = {(r * r).toFixed(4)}·e^(i·{(2 * th) % 360}°); 1/z = {(1 / r).toFixed(3)}·e^(−i·{th}°)</div>
      </div>
      <figcaption className="viz-caption">
        In polar form, multiplying multiplies moduli and adds arguments. So z² doubles the angle and squares the length, 1/z
        reflects in the real axis and inverts the length in the unit circle, and multiplying by i turns a quarter turn.
      </figcaption>
    </figure>
  );
}
