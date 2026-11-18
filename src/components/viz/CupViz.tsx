"use client";

import { useState } from "react";

/** The cup product on the torus, seen through Poincaré duality as the signed count of intersections of two curves. */
export function CupViz() {
  const [x, setX] = useState<[number, number]>([1, 0]);
  const [y, setY] = useState<[number, number]>([1, 2]);
  const det = x[0] * y[1] - x[1] * y[0];
  const f = (n: number) => (n < 0 ? `−${-n}` : `${n}`);
  const S = 180, X0 = 30, Y0 = 16;
  const seg = (v: [number, number], off: [number, number]) => {
    const out: string[] = [];
    const N = 400;
    let cur: string[] = [];
    let prev: [number, number] | null = null;
    for (let i = 0; i <= N; i++) {
      const t = i / N;
      const px = (((off[0] + t * v[1]) % 1) + 1) % 1, py = (((off[1] + t * -v[0]) % 1) + 1) % 1;
      if (prev && (Math.abs(px - prev[0]) > 0.5 || Math.abs(py - prev[1]) > 0.5)) { out.push(cur.join(" ")); cur = []; }
      cur.push(`${X0 + S * px},${Y0 + S * (1 - py)}`);
      prev = [px, py];
    }
    out.push(cur.join(" "));
    return out;
  };
  const step = (v: [number, number], set: (w: [number, number]) => void, i: number, d: number) => set(v.map((z, j) => (j === i ? Math.max(-3, Math.min(3, z + d)) : z)) as [number, number]);
  const term = (v: [number, number]) => {
    const t: string[] = [];
    if (v[0]) t.push(`${v[0] === 1 ? "" : v[0] === -1 ? "−" : v[0]}α`.replace("-", "−"));
    if (v[1]) t.push(`${t.length ? (v[1] > 0 ? "+ " : "− ") : v[1] < 0 ? "−" : ""}${Math.abs(v[1]) === 1 ? "" : Math.abs(v[1])}β`);
    return t.length ? t.join(" ") : "0";
  };
  const stepper = (v: [number, number], set: (w: [number, number]) => void, name: string, col: string) => (
    <div className="mono" style={{ fontSize: 13, display: "flex", alignItems: "center", gap: 6, flexWrap: "wrap", margin: "4px 0" }}>
      <b style={{ color: col, minWidth: 110 }}>{name} = {term(v)}</b>
      <span>α:</span>
      <button type="button" className="btn btn-ghost" onClick={() => step(v, set, 0, -1)} aria-label={`decrease ${name} alpha`}>−</button>
      <button type="button" className="btn btn-ghost" onClick={() => step(v, set, 0, 1)} aria-label={`increase ${name} alpha`}>+</button>
      <span>β:</span>
      <button type="button" className="btn btn-ghost" onClick={() => step(v, set, 1, -1)} aria-label={`decrease ${name} beta`}>−</button>
      <button type="button" className="btn btn-ghost" onClick={() => step(v, set, 1, 1)} aria-label={`increase ${name} beta`}>+</button>
    </div>
  );
  return (
    <figure className="viz">
      {stepper(x, setX, "x", "var(--accent)")}
      {stepper(y, setY, "y", "var(--danger)")}
      <svg viewBox="0 0 520 220" role="img" aria-label="Two curves on the torus dual to the classes x and y" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={X0} y={Y0} width={S} height={S} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 1.5 }} />
        {(x[0] || x[1]) ? seg(x, [0.13, 0.31]).map((p, i) => <polyline key={i} points={p} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />) : null}
        {(y[0] || y[1]) ? seg(y, [0.57, 0.71]).map((p, i) => <polyline key={i} points={p} style={{ fill: "none", stroke: "var(--danger)", strokeWidth: 2.5 }} />) : null}
        <text x={X0 + S / 2} y={Y0 + S + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the torus, opposite sides glued</text>
        <text x={240} y={40} style={{ fill: "var(--text)", fontSize: 12 }}>α ∪ β = γ, β ∪ α = −γ, α ∪ α = β ∪ β = 0</text>
        <text x={240} y={66} style={{ fill: "var(--text)", fontSize: 12 }}>x ∪ y = ({f(x[0])})({f(y[1])}) − ({f(x[1])})({f(y[0])}) times γ</text>
        <text x={240} y={96} style={{ fill: "var(--accent)", fontSize: 15, fontWeight: 700 }}>x ∪ y = {det === 0 ? "0" : `${det === 1 ? "" : det === -1 ? "−" : f(det)}γ`}</text>
        <text x={240} y={124} style={{ fill: "var(--text-muted)", fontSize: 11 }}>The dual curves cross {Math.abs(det)} time{Math.abs(det) === 1 ? "" : "s"}, counted with sign.</text>
        <text x={240} y={142} style={{ fill: "var(--text-muted)", fontSize: 11 }}>γ generates H² of the torus.</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        The cup product of degree-1 classes on the torus is the determinant: it is bilinear and changes sign when x and y are
        swapped. {det === 0 ? "Here it vanishes: the dual curves can be pushed apart." : "Here it is non-zero, so the curves cannot be pushed apart."}
      </p>
      <figcaption className="viz-caption">
        Write x = pα + qβ and y = rα + sβ. Each class has a dual closed curve on the torus, and the cup product counts their
        crossings with signs. This is why the cup product can tell spaces apart that homology groups alone cannot.
      </figcaption>
    </figure>
  );
}
