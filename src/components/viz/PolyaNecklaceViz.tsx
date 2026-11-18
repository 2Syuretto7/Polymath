"use client";

import { useState } from "react";

const N = 6;
type Perm = { name: string; p: number[] };
const rotations: Perm[] = Array.from({ length: N }, (_, r) => ({ name: r === 0 ? "identity" : `rotate ${r}`, p: Array.from({ length: N }, (_, i) => (i + r) % N) }));
const reflections: Perm[] = Array.from({ length: N }, (_, r) => ({ name: r % 2 === 0 ? `flip through beads ${r / 2 + 1}, ${r / 2 + 4}` : `flip between beads`, p: Array.from({ length: N }, (_, i) => (r - i + N) % N) }));
const cycles = (p: number[]) => {
  const seen = new Set<number>();
  let c = 0;
  for (let i = 0; i < p.length; i++) { if (seen.has(i)) continue; c++; let j = i; while (!seen.has(j)) { seen.add(j); j = p[j]; } }
  return c;
};

/** Burnside and Pólya for necklaces of six beads. */
export function PolyaNecklaceViz() {
  const [dihedral, setDihedral] = useState(false);
  const [k, setK] = useState(2);
  const G = dihedral ? [...rotations, ...reflections] : rotations;
  const rows = G.map((g) => ({ name: g.name, c: cycles(g.p) }));
  const total = rows.reduce((s, r) => s + k ** r.c, 0);
  const orbits = total / G.length;
  // representatives for k = 2: smallest code in each orbit
  const reps: number[][] = [];
  if (k === 2) {
    const seen = new Set<string>();
    for (let m = 0; m < 2 ** N; m++) {
      const x = Array.from({ length: N }, (_, i) => (m >> i) & 1);
      const key = x.join("");
      if (seen.has(key)) continue;
      G.forEach((g) => seen.add(g.p.map((j) => x[j]).join("")));
      reps.push(x);
    }
  }
  const grouped = new Map<number, number>();
  rows.forEach((r) => grouped.set(r.c, (grouped.get(r.c) ?? 0) + 1));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="symmetries">
        <button type="button" aria-pressed={!dihedral} className={!dihedral ? "seg is-on" : "seg"} onClick={() => setDihedral(false)}>rotations only</button>
        <button type="button" aria-pressed={dihedral} className={dihedral ? "seg is-on" : "seg"} onClick={() => setDihedral(true)}>rotations and flips</button>
      </div>
      <div className="segmented" role="group" aria-label="colours" style={{ marginTop: 6 }}>
        {[2, 3].map((x) => <button key={x} type="button" aria-pressed={k === x} className={k === x ? "seg is-on" : "seg"} onClick={() => setK(x)}>{x} colours</button>)}
      </div>
      {k === 2 && (
        <svg viewBox="0 0 520 120" role="img" aria-label="One necklace from each class" style={{ width: "100%", display: "block", marginTop: 8 }}>
          {reps.map((x, r) => {
            const cx = 30 + (r % 7) * 76, cy = 30 + Math.floor(r / 7) * 60;
            return (
              <g key={r}>
                <circle cx={cx} cy={cy} r={18} style={{ fill: "none", stroke: "var(--border)" }} />
                {x.map((b, i) => {
                  const a = -Math.PI / 2 + (2 * Math.PI * i) / N;
                  return <circle key={i} cx={cx + 18 * Math.cos(a)} cy={cy + 18 * Math.sin(a)} r={6} style={{ fill: b ? "var(--accent)" : "var(--bg)", stroke: "var(--accent)", strokeWidth: 1.5 }} />;
                })}
              </g>
            );
          })}
        </svg>
      )}
      <table className="mono" style={{ fontSize: 12, borderCollapse: "collapse", marginTop: 8 }}>
        <thead><tr><th style={{ textAlign: "left", paddingRight: 16 }}>cycles on the beads</th><th style={{ textAlign: "left", paddingRight: 16 }}>symmetries</th><th style={{ textAlign: "left" }}>colourings fixed by each</th></tr></thead>
        <tbody>
          {[...grouped.entries()].sort((a, b) => b[0] - a[0]).map(([c, m]) => (
            <tr key={c}><td>{c}</td><td>{m}</td><td>{k}{"⁰¹²³⁴⁵⁶⁷⁸⁹"[c]} = {k ** c}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Burnside: ({total}) / {G.length} = {orbits} different necklaces with {k} colours.{k === 2 ? " One of each is drawn above." : ""}
      </p>
      <figcaption className="viz-caption">
        A symmetry fixes a colouring exactly when each of its cycles on the beads is one colour, so it fixes kᶜ colourings
        if it has c cycles. Averaging over the group counts the necklaces. Rotation by r has gcd(r, 6) cycles.
      </figcaption>
    </figure>
  );
}
