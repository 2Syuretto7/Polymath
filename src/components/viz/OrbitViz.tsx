"use client";

import { useState } from "react";

const N = 5;
type Pt = [number, number];
// Coordinates centred on the middle square: −2, …, 2.
const ROT = ([x, y]: Pt): Pt => [-y, x];
const REF = ([x, y]: Pt): Pt => [-x, y];
const GROUPS = {
  c4: { name: "rotations only, C₄", order: 4, maps: [0, 1, 2, 3].map((k) => (p: Pt) => { let q = p; for (let i = 0; i < k; i++) q = ROT(q); return q; }) },
  d4: { name: "rotations and reflections, D₄", order: 8, maps: [0, 1, 2, 3].flatMap((k) => [false, true].map((f) => (p: Pt) => { let q = f ? REF(p) : p; for (let i = 0; i < k; i++) q = ROT(q); return q; })) },
};
type K = keyof typeof GROUPS;
const key = ([x, y]: Pt) => `${x},${y}`;

/** A symmetry group acting on the squares of a board. Click a square to see its orbit, and how many symmetries fix it. */
export function OrbitViz() {
  const [k, setK] = useState<K>("d4");
  const [sel, setSel] = useState<Pt>([2, 1]);
  const G = GROUPS[k];
  const images = G.maps.map((m) => m(sel));
  const orbit = new Set(images.map(key));
  const stab = images.filter((q) => key(q) === key(sel)).length;
  const all: Pt[] = [];
  for (let y = -2; y <= 2; y++) for (let x = -2; x <= 2; x++) all.push([x, y]);
  const seen = new Set<string>();
  let nOrbits = 0;
  for (const p of all) { if (seen.has(key(p))) continue; nOrbits++; G.maps.forEach((m) => seen.add(key(m(p)))); }
  const s = 38, x0 = 20, y0 = 10;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Group">
        {(Object.keys(GROUPS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{GROUPS[q].name}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 210" role="img" aria-label="A five by five board with the orbit of the chosen square marked" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {all.map((p) => {
          const [x, y] = p;
          const on = orbit.has(key(p)), me = key(p) === key(sel);
          return <rect key={key(p)} x={x0 + (x + 2) * s} y={y0 + (2 - y) * s} width={s - 3} height={s - 3} rx={4} style={{ cursor: "pointer", fill: me ? "var(--accent)" : on ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: on ? "var(--accent)" : "var(--border)" }} onClick={() => setSel(p)} />;
        })}
        <text x={240} y={36} style={{ fontSize: 12, fill: "var(--text-muted)" }}>orbit of the chosen square</text>
        <text x={240} y={60} className="mono" style={{ fontSize: 16, fill: "var(--text)" }}>{orbit.size} {orbit.size === 1 ? "square" : "squares"}</text>
        <text x={240} y={96} style={{ fontSize: 12, fill: "var(--text-muted)" }}>symmetries fixing it, the stabiliser</text>
        <text x={240} y={120} className="mono" style={{ fontSize: 16, fill: "var(--text)" }}>{stab}</text>
        <text x={240} y={156} style={{ fontSize: 12, fill: "var(--text-muted)" }}>orbits on the whole board</text>
        <text x={240} y={180} className="mono" style={{ fontSize: 16, fill: "var(--text)" }}>{nOrbits}</text>
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <tbody>
          <tr><td>|orbit| × |stabiliser|</td><td className="mono">{orbit.size} × {stab} = {orbit.size * stab}</td></tr>
          <tr><td>order of the group</td><td className="mono">{G.order}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Every square lies in exactly one orbit, so the orbits cut the board into pieces, just as cosets cut a group. Squares on a diagonal or a middle line are fixed by a reflection, so their orbits are smaller.
      </figcaption>
    </figure>
  );
}
