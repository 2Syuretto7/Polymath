"use client";

import { useMemo, useState } from "react";
import { cycleString, generate, inverse } from "./permUtil";

const GROUPS = {
  z6: { name: "ℤ₆", gens: [[1, 2, 3, 4, 5, 0]] },
  s3: { name: "S₃", gens: [[1, 0, 2], [1, 2, 0]] },
  d4: { name: "D₄", gens: [[1, 2, 3, 0], [0, 3, 2, 1]] },
  a4: { name: "A₄", gens: [[1, 2, 0, 3], [1, 0, 3, 2]] },
  s4: { name: "S₄", gens: [[1, 0, 2, 3], [1, 2, 3, 0]] },
};
type K = keyof typeof GROUPS;
const comp = (a: number[], b: number[]) => b.map((x) => a[x]);
const key = (p: number[]) => p.join(",");

/** The class equation: a group splits into conjugacy classes, the centre contributing classes of size 1, and every class size divides the order. */
export function ClassEqViz() {
  const [k, setK] = useState<K>("d4");
  const { classes, order } = useMemo(() => {
    const G = generate(GROUPS[k].gens);
    const seen = new Set<string>();
    const cls: number[][][] = [];
    for (const x of G) {
      if (seen.has(key(x))) continue;
      const c = new Map<string, number[]>();
      for (const g of G) { const y = comp(comp(g, x), inverse(g)); c.set(key(y), y); }
      [...c.keys()].forEach((s) => seen.add(s));
      cls.push([...c.values()]);
    }
    cls.sort((a, b) => a.length - b.length);
    return { classes: cls, order: G.length };
  }, [k]);
  const centre = classes.filter((c) => c.length === 1).length;
  const unit = 480 / order;
  let x = 20;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Group">
        {(Object.keys(GROUPS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{GROUPS[q].name}</button>
        ))}
      </div>
      <svg viewBox="0 0 520 70" role="img" aria-label="The group split into conjugacy classes" style={{ width: "100%", display: "block", marginTop: 10 }}>
        {classes.map((c, i) => {
          const w = c.length * unit; const r = <rect key={i} x={x} y={10} width={w - 2} height={34} rx={3} style={{ fill: c.length === 1 ? "var(--accent)" : "var(--accent-soft)", stroke: "var(--accent)" }} />;
          const t = w > 14 ? <text key={`t${i}`} x={x + w / 2 - 1} y={32} textAnchor="middle" style={{ fontSize: 11, fill: c.length === 1 ? "var(--bg)" : "var(--text)" }}>{c.length}</text> : null;
          x += w; return [r, t];
        })}
        <text x={20} y={62} style={{ fontSize: 11, fill: "var(--text-muted)" }}>solid blocks: the centre, elements commuting with everything</text>
      </svg>
      <table className="table" style={{ marginTop: 4 }}>
        <thead><tr><th>class size</th><th>elements, as permutations of the {GROUPS[k].gens[0].length} points</th></tr></thead>
        <tbody>
          {classes.map((c, i) => <tr key={i}><td className="mono">{c.length}</td><td className="mono">{c.map(cycleString).join("  ")}</td></tr>)}
        </tbody>
      </table>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0 0" }}>
        class equation: {order} = {classes.map((c) => c.length).join(" + ")}; centre of order {centre}
      </p>
      <figcaption className="viz-caption">
        Each class is an orbit of the group acting on itself by conjugation, so its size is the index of a centraliser and divides the order. In an abelian group every class has one element.
      </figcaption>
    </figure>
  );
}
