"use client";

import { useState } from "react";

const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const SHADES = ["var(--bg)", "var(--accent)", "var(--text-muted)", "var(--danger)"];

/** Burnside's lemma for necklaces: count colourings up to rotation by averaging the number fixed by each rotation. */
export function NecklaceViz() {
  const [n, setN] = useState(6);
  const [k, setK] = useState(2);
  const fixed = Array.from({ length: n }, (_, j) => Math.pow(k, gcd(n, j)));
  const total = fixed.reduce((a, b) => a + b, 0);
  const count = total / n;
  const small = Math.pow(k, n) <= 4096;
  let reps: number[][] = [];
  if (small) {
    const seen = new Set<string>();
    for (let c = 0; c < Math.pow(k, n); c++) {
      const col = Array.from({ length: n }, (_, i) => Math.floor(c / Math.pow(k, i)) % k);
      const rots = Array.from({ length: n }, (_, r) => col.slice(r).concat(col.slice(0, r)).join(""));
      const canon = rots.sort()[0];
      if (!seen.has(canon)) { seen.add(canon); reps.push(canon.split("").map(Number)); }
    }
    reps = reps.slice(0, 40);
  }
  const necklace = (col: number[], cx: number, cy: number, r: number, key: number) => (
    <g key={key}>
      <circle cx={cx} cy={cy} r={r} style={{ fill: "none", stroke: "var(--border)" }} />
      {col.map((c, i) => { const a = Math.PI / 2 - (2 * Math.PI * i) / n; return <circle key={i} cx={cx + r * Math.cos(a)} cy={cy - r * Math.sin(a)} r={Math.max(2.5, r * 0.32)} style={{ fill: SHADES[c], stroke: "var(--text-muted)", strokeWidth: 0.8 }} />; })}
    </g>
  );
  const per = 10, cw = 50;
  const rows = Math.ceil(reps.length / per);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>beads n: <span className="mono">{n}</span></span>
          <input type="range" min={3} max={10} value={n} onChange={(ev) => setN(Number(ev.target.value))} /></label>
        <label><span>colours k: <span className="mono">{k}</span></span>
          <input type="range" min={2} max={4} value={k} onChange={(ev) => setK(Number(ev.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <thead><tr><th>rotate by</th><th>colourings it fixes</th></tr></thead>
        <tbody>
          {fixed.map((f, j) => <tr key={j}><td className="mono">{j} {j === 1 ? "step" : "steps"}</td><td className="mono">{k}^{gcd(n, j)} = {f}</td></tr>)}
          <tr><td>average over the {n} rotations</td><td className="mono">{total} / {n} = {count}</td></tr>
        </tbody>
      </table>
      {small && <>
        <p className="mono-meta" style={{ textTransform: "none", margin: "10px 0 4px" }}>the {count} different necklaces{count > reps.length ? `, first ${reps.length} shown` : ""}</p>
        <svg viewBox={`0 0 520 ${rows * cw + 6}`} role="img" aria-label="The distinct necklaces" style={{ width: "100%", display: "block" }}>
          {reps.map((c, i) => necklace(c, 28 + (i % per) * cw, 26 + Math.floor(i / per) * cw, 16, i))}
        </svg>
      </>}
      <figcaption className="viz-caption">
        There are kⁿ colourings in all, but rotations make many of them the same necklace. Burnside&rsquo;s lemma says the number of orbits is the average number of colourings fixed by a group element. A rotation by j steps fixes a colouring exactly when the colouring is constant on each of its gcd(n, j) cycles.
      </figcaption>
    </figure>
  );
}
