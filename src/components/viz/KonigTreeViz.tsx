"use client";

import { useState, type ReactElement } from "react";

const SETS: { name: string; desc: string; ok: (a: boolean[]) => boolean }[] = [
  {
    name: "alternate",
    desc: "p₁, and for every n: pₙ → ¬pₙ₊₁ and ¬pₙ → pₙ₊₁",
    ok: (a) => a[0] !== false && a.every((x, i) => i === 0 || x !== a[i - 1]),
  },
  {
    name: "once true, always true",
    desc: "for every n: pₙ → pₙ₊₁",
    ok: (a) => a.every((x, i) => i === 0 || !a[i - 1] || x),
  },
  {
    name: "chain with a break",
    desc: "p₁, ¬p₅, and for every n: pₙ → pₙ₊₁",
    ok: (a) => a[0] !== false && (a.length < 5 || !a[4]) && a.every((x, i) => i === 0 || !a[i - 1] || x),
  },
];

/** The tree of partial truth assignments to p₁, …, p_d, pruned where some sentence is already falsified. */
export function aliveCounts(ok: (a: boolean[]) => boolean, depth: number): number[] {
  const out: number[] = [];
  let level: boolean[][] = [[]];
  for (let d = 0; d <= depth; d++) {
    level = level.filter(ok);
    out.push(level.length);
    level = level.flatMap((a) => [[...a, true], [...a, false]]);
  }
  return out;
}

/** König’s lemma in action: a finitely branching tree with live nodes at every level has an infinite live branch. */
export function KonigTreeViz() {
  const [si, setSi] = useState(0);
  const [depth, setDepth] = useState(5);
  const S = SETS[si];
  const W = 500, top = 20, dy = 150 / Math.max(depth, 1);
  const els: ReactElement[] = [];
  const draw = (a: boolean[], x: number, span: number, alive: boolean) => {
    const d = a.length, y = top + d * dy;
    const me = alive && S.ok(a);
    if (d < depth) {
      [true, false].forEach((v, k) => {
        const cx = x + (k === 0 ? -span / 4 : span / 4);
        const childAlive = me && S.ok([...a, v]);
        els.push(<line key={`l${a.join("")}${k}${d}`} x1={x} y1={y} x2={cx} y2={y + dy} style={{ stroke: childAlive ? "var(--accent)" : "var(--border)", strokeWidth: childAlive ? 2 : 1 }} />);
        draw([...a, v], cx, span / 2, me);
      });
    }
    els.push(<circle key={`c${a.map((b) => (b ? 1 : 0)).join("")}-${d}`} cx={x} cy={y} r={d > 5 ? 2.5 : 4} style={{ fill: me ? "var(--accent)" : "var(--danger-soft)", stroke: me ? "none" : "var(--danger)", strokeWidth: 0.8 }} />);
  };
  draw([], W / 2 + 10, W, true);
  const counts = aliveCounts(S.ok, depth);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="set of sentences">
        {SETS.map((s, i) => <button key={s.name} type="button" aria-pressed={si === i} className={si === i ? "seg is-on" : "seg"} onClick={() => setSi(i)}>{s.name}</button>)}
      </div>
      <p className="mono" style={{ fontSize: 13, margin: "6px 0" }}>Σ: {S.desc}</p>
      <label className="viz-controls" style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <span className="mono" style={{ minWidth: 110 }}>depth: {depth}</span>
        <input type="range" min={1} max={7} step={1} value={depth} onChange={(e) => setDepth(Number(e.target.value))} style={{ flex: 1 }} />
      </label>
      <svg viewBox="0 0 520 180" role="img" aria-label="Tree of partial truth assignments" style={{ width: "100%", display: "block", marginTop: 6 }}>
        {els}
        <text x={4} y={top + dy + 4} style={{ fill: "var(--text-muted)", fontSize: 10 }}>p₁</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 13 }}>
        <div>surviving assignments at each level: {counts.join(", ")}</div>
        <div style={{ fontWeight: 700 }}>
          {counts[counts.length - 1] === 0 ? "No assignment survives: some finite subset of Σ is already unsatisfiable." : "Every level so far has survivors, so every finite subset checked is satisfiable."}
        </div>
      </div>
      <figcaption className="viz-caption">
        Each level assigns a truth value to one more letter, left for true and right for false. A node dies, in red, once
        some sentence of Σ whose letters are all assigned is false. If every level has a survivor, the live part of the
        tree is infinite and finitely branching, so by König&rsquo;s lemma it has an infinite branch: a truth assignment
        satisfying all of Σ at once. That is the compactness theorem for countably many letters.
      </figcaption>
    </figure>
  );
}
