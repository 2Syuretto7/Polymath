"use client";

import { useState } from "react";

type V = [number, number];
const gen = (n: number, r: (k: number) => number, off = 0): V[] => Array.from({ length: n }, (_, k) => { const t = off + (2 * Math.PI * k) / n; return [r(k) * Math.cos(t), r(k) * Math.sin(t)]; });
const SYS: { name: string; roots: V[]; weyl: number }[] = [
  { name: "A₁ × A₁", roots: gen(4, () => 1), weyl: 4 },
  { name: "A₂", roots: gen(6, () => 1), weyl: 6 },
  { name: "B₂", roots: gen(8, (k) => (k % 2 ? Math.SQRT2 : 1)), weyl: 8 },
  { name: "G₂", roots: gen(12, (k) => (k % 2 ? Math.sqrt(3) : 1)), weyl: 12 },
];
const dot = (a: V, b: V) => a[0] * b[0] + a[1] * b[1];
const refl = (a: V, v: V): V => { const c = (2 * dot(v, a)) / dot(a, a); return [v[0] - c * a[0], v[1] - c * a[1]]; };

/** Rank-two root systems and the reflections that generate their Weyl groups. */
export function RootSystemViz() {
  const [k, setK] = useState(1);
  const [sel, setSel] = useState(0);
  const [img, setImg] = useState<V | null>(null);
  const S = SYS[k];
  const a = S.roots[sel % S.roots.length];
  const sc = 70, cx = 150, cy = 110;
  const P = (v: V) => [cx + sc * v[0], cy - sc * v[1]];
  const len = Math.hypot(a[0], a[1]);
  const perp: V = [-a[1] / len, a[0] / len];
  const probe: V = S.roots[(sel + 1) % S.roots.length];
  const r = refl(a, probe);
  const isRoot = S.roots.some((v) => Math.hypot(v[0] - r[0], v[1] - r[1]) < 1e-9);
  const cartan = (2 * dot(probe, a)) / dot(a, a);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="root system">
        {SYS.map((s, i) => <button key={s.name} type="button" aria-pressed={k === i} className={k === i ? "seg is-on" : "seg"} onClick={() => { setK(i); setSel(0); setImg(null); }}>{s.name}</button>)}
      </div>
      <div className="viz-controls">
        <button type="button" className="btn btn-ghost" onClick={() => { setSel((sel + 1) % S.roots.length); setImg(null); }}>next root α</button>
        <button type="button" className="btn btn-primary" onClick={() => setImg(r)}>reflect β in α&rsquo;s mirror</button>
      </div>
      <svg viewBox="0 0 520 220" role="img" aria-label="A root system in the plane with a reflecting line" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <defs>
          <marker id="rs-h" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--text-muted)" }} /></marker>
          <marker id="rs-a" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--accent)" }} /></marker>
          <marker id="rs-d" markerUnits="userSpaceOnUse" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 z" style={{ fill: "var(--danger)" }} /></marker>
        </defs>
        {(() => { const [x1, y1] = P([perp[0] * 2.1, perp[1] * 2.1]), [x2, y2] = P([-perp[0] * 2.1, -perp[1] * 2.1]); return <line x1={x1} y1={y1} x2={x2} y2={y2} style={{ stroke: "var(--border-strong)", strokeDasharray: "6 4" }} />; })()}
        {S.roots.map((v, i) => { const [x, y] = P(v); const isA = v === a, isB = v === probe; return <line key={i} x1={cx} y1={cy} x2={x} y2={y} markerEnd={`url(#${isA ? "rs-a" : isB ? "rs-d" : "rs-h"})`} style={{ stroke: isA ? "var(--accent)" : isB ? "var(--danger)" : "var(--text-muted)", strokeWidth: isA || isB ? 2.4 : 1.3 }} />; })}
        {img && (() => { const [x, y] = P(img); return <circle cx={x} cy={y} r={8} style={{ fill: "none", stroke: "var(--success)", strokeWidth: 2.5 }} />; })()}
        <text x={310} y={40} style={{ fill: "var(--accent)", fontSize: 12 }}>violet: α</text>
        <text x={310} y={60} style={{ fill: "var(--danger)", fontSize: 12 }}>red: β</text>
        <text x={310} y={80} style={{ fill: "var(--text-muted)", fontSize: 12 }}>dashed: the mirror of α</text>
        <text x={310} y={110} className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>2(β, α)/(α, α) = {Math.round(cartan * 1000) / 1000}</text>
        <text x={310} y={132} className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>roots: {S.roots.length}</text>
        <text x={310} y={154} className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>Weyl group order: {S.weyl}</text>
        {img && <text x={310} y={180} style={{ fill: "var(--success)", fontSize: 12 }}>green: reflected β{isRoot ? ", again a root" : ", not a root"}</text>}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The integer 2(β, α)/(α, α) = {Math.round(cartan)} is a Cartan integer; reflecting β gives β − {Math.round(cartan)}α.
      </p>
      <figcaption className="viz-caption">
        A root system is a finite set of vectors, closed under the reflection in the mirror of each root, with every
        2(β, α)/(α, α) an integer. In rank two, the only reduced, irreducible ones are A₂, B₂ and G₂; A₁ × A₁ is
        reducible. The reflections generate the Weyl group, here the symmetries of a regular polygon.
      </figcaption>
    </figure>
  );
}
