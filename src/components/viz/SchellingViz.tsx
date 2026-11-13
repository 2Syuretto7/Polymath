"use client";

import { useState } from "react";

const N = 20;
const rng = (seed: number) => () => { seed = (seed * 1664525 + 1013904223) % 4294967296; return seed / 4294967296; };

const initial = () => {
  const r = rng(7);
  return Array.from({ length: N * N }, () => { const u = r(); return u < 0.45 ? 1 : u < 0.9 ? 2 : 0; });
};

const neighbours = (i: number) => {
  const x = i % N, y = Math.floor(i / N), out: number[] = [];
  for (let dy = -1; dy <= 1; dy++) for (let dx = -1; dx <= 1; dx++) {
    if (!dx && !dy) continue;
    const nx = x + dx, ny = y + dy;
    if (nx >= 0 && nx < N && ny >= 0 && ny < N) out.push(ny * N + nx);
  }
  return out;
};
const NB = Array.from({ length: N * N }, (_, i) => neighbours(i));

const unhappy = (g: number[], i: number, t: number) => {
  if (!g[i]) return false;
  const occ = NB[i].filter((j) => g[j]);
  if (!occ.length) return false;
  return occ.filter((j) => g[j] === g[i]).length / occ.length < t;
};

const sameShare = (g: number[]) => {
  let s = 0, n = 0;
  g.forEach((v, i) => { if (!v) return; const occ = NB[i].filter((j) => g[j]); if (!occ.length) return; s += occ.filter((j) => g[j] === v).length / occ.length; n++; });
  return n ? s / n : 0;
};

/** Schelling's model: mild individual preferences about neighbours can produce strong segregation. */
export function SchellingViz() {
  const [t, setT] = useState(0.34);
  const [g, setG] = useState<number[]>(initial);
  const [rounds, setRounds] = useState(0);
  const step = (k: number) => {
    let cur = g.slice();
    const r = rng(rounds * 31 + 11);
    for (let s = 0; s < k; s++) {
      const movers = cur.map((_, i) => i).filter((i) => unhappy(cur, i, t));
      const empty = cur.map((v, i) => (v ? -1 : i)).filter((i) => i >= 0);
      for (const i of movers) {
        if (!empty.length) break;
        const e = Math.floor(r() * empty.length);
        const j = empty[e];
        cur[j] = cur[i]; cur[i] = 0; empty[e] = i;
      }
      cur = cur.slice();
    }
    setG(cur); setRounds(rounds + k);
  };
  const nUnhappy = g.filter((_, i) => unhappy(g, i, t)).length;
  const cs = 14;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>each resident wants at least this share of like neighbours: <span className="mono">{Math.round(t * 100)}%</span></span><input type="range" min={0.1} max={0.7} step={0.02} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn btn-primary" onClick={() => step(1)}>Move the unhappy once</button>
        <button type="button" className="btn" onClick={() => step(10)}>Ten rounds</button>
        <button type="button" className="btn" onClick={() => { setG(initial()); setRounds(0); }}>Start again</button>
      </div>
      <svg viewBox={`0 0 ${N * cs} ${N * cs}`} role="img" aria-label="A grid of two groups of residents" style={{ width: "100%", maxWidth: 320, display: "block", margin: "8px auto" }}>
        <rect x={0} y={0} width={N * cs} height={N * cs} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        {g.map((v, i) => v ? (
          <rect key={i} x={(i % N) * cs + 1.5} y={Math.floor(i / N) * cs + 1.5} width={cs - 3} height={cs - 3} rx={v === 1 ? 6 : 1}
            style={{ fill: v === 1 ? "var(--accent)" : "var(--text-muted)", opacity: unhappy(g, i, t) ? 0.45 : 1 }} />
        ) : null)}
      </svg>
      <p className="mono" style={{ margin: "4px 0", fontSize: 14 }}>
        rounds: {rounds}; unhappy residents (faded): {nUnhappy}; average share of like neighbours: {Math.round(sameShare(g) * 100)}%
      </p>
      <figcaption className="viz-caption">
        Two groups, round and square, start mixed. Each round, every resident with too few like neighbours moves to a random
        empty spot. Even when everyone is content to be in a minority, say needing only a third of neighbours like them, the
        city sorts itself into largely separate areas. Thomas Schelling&rsquo;s point: segregated outcomes need not come
        from anyone wanting segregation.
      </figcaption>
    </figure>
  );
}
