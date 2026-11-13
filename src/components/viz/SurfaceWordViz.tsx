"use client";

import { useState } from "react";

type E = { x: string; e: 1 | -1 };
const parse = (s: string): E[] => s.split(" ").map((t) => ({ x: t.replace("⁻¹", ""), e: t.endsWith("⁻¹") ? -1 : 1 }));
const SURF = [
  { label: "sphere", word: "a a⁻¹", name: "the sphere" },
  { label: "torus", word: "a b a⁻¹ b⁻¹", name: "the torus" },
  { label: "projective plane", word: "a a", name: "the projective plane" },
  { label: "Klein bottle", word: "a b a b⁻¹", name: "the Klein bottle, a sum of two projective planes" },
  { label: "genus two", word: "a b a⁻¹ b⁻¹ c d c⁻¹ d⁻¹", name: "the surface of genus two" },
];

/** Surfaces from polygons: glue edges with the same letter, matching arrows, and count what is left. */
export function SurfaceWordViz() {
  const [si, setSi] = useState(1);
  const S = SURF[si];
  const w = parse(S.word);
  const n = w.length;
  // union-find on polygon vertices
  const par = Array.from({ length: n }, (_, i) => i);
  const find = (i: number): number => (par[i] === i ? i : (par[i] = find(par[i])));
  const join = (i: number, j: number) => { par[find(i)] = find(j); };
  const ends = (i: number) => (w[i].e === 1 ? [i, (i + 1) % n] : [(i + 1) % n, i]);
  for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) if (w[i].x === w[j].x) { const [a, b] = ends(i), [c, d] = ends(j); join(a, c); join(b, d); }
  const V = new Set(Array.from({ length: n }, (_, i) => find(i))).size;
  const Ed = n / 2, F = 1, chi = V - Ed + F;
  const orient = [...new Set(w.map((l) => l.x))].every((x) => w.filter((l) => l.x === x).reduce((s, l) => s + l.e, 0) === 0);
  const W = 520, H = 250, cx = 260, cy = 125, R = 100;
  const P = (i: number): [number, number] => { const a = Math.PI / 2 + (2 * Math.PI * i) / n + (n === 2 ? 0 : Math.PI / n); return [cx + R * Math.cos(a), cy - R * Math.sin(a)]; };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Surface">
        {SURF.map((x, i) => <button key={x.label} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{x.label}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="A polygon with labelled, directed edges" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {w.map((l, i) => {
          const [px1, py1] = P(i), [px2, py2] = P((i + 1) % n);
          const bend = n === 2 ? (i === 0 ? -140 : 140) : 0;
          const mx = (px1 + px2) / 2 + bend / 2, my = (py1 + py2) / 2;
          const [sx, sy, ex, ey] = l.e === 1 ? [px1, py1, px2, py2] : [px2, py2, px1, py1];
          const L = Math.hypot(ex - sx, ey - sy) || 1, ux = (ex - sx) / L, uy = (ey - sy) / L;
          const out = n === 2 ? [Math.sign(bend), 0] : [(mx - cx), (my - cy)];
          const oL = Math.hypot(out[0], out[1]) || 1;
          const lx = mx + (out[0] / oL) * 18, ly = my + (out[1] / oL) * 18;
          return (
            <g key={i}>
              <path d={n === 2 ? `M${px1},${py1} Q${(px1 + px2) / 2 + bend},${my} ${px2},${py2}` : `M${px1},${py1} L${px2},${py2}`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2.5 }} />
              <path d={`M${mx - 8 * ux - 5 * uy},${my - 8 * uy + 5 * ux} L${mx + 4 * ux},${my + 4 * uy} L${mx - 8 * ux + 5 * uy},${my - 8 * uy - 5 * ux}`} style={{ fill: "none", stroke: "var(--text)", strokeWidth: 2 }} />
              <text x={lx} y={ly + 5} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{l.x}</text>
            </g>
          );
        })}
        {Array.from({ length: n }, (_, i) => { const [x, y] = P(i); return <circle key={i} cx={x} cy={y} r={4} style={{ fill: "var(--text)" }} />; })}
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14 }}>
        <div>word round the polygon: {S.word}</div>
        <div>after gluing: V = {V}, E = {Ed}, F = {F}, so χ = {chi}</div>
        <div>{orient ? "orientable: each letter appears once each way" : "not orientable: some letter appears twice the same way"}</div>
      </div>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>this polygon glues up to {S.name}</p>
      <figcaption className="viz-caption">
        Edges with the same letter are glued so that their arrows match. The polygon&rsquo;s corners fall into classes that
        become the vertices of the surface. Orientability and the Euler characteristic χ = V − E + F together tell every
        closed surface apart.
      </figcaption>
    </figure>
  );
}
