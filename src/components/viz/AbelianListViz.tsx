"use client";

import { useState } from "react";
import { factor, sups } from "./groupOrder";

function partitions(n: number, max = n): number[][] {
  if (n === 0) return [[]];
  const out: number[][] = [];
  for (let k = Math.min(n, max); k >= 1; k--) for (const rest of partitions(n - k, k)) out.push([k, ...rest]);
  return out;
}

function product<T>(lists: T[][]): T[][] {
  return lists.reduce<T[][]>((acc, l) => acc.flatMap((a) => l.map((x) => [...a, x])), [[]]);
}

const Z = (k: number) => `ℤ${String(k).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)]).join("")}`;

/** List the abelian groups of order n, in elementary divisor and invariant factor form. */
export function AbelianListViz() {
  const [n, setN] = useState(72);
  const f = factor(n);
  const choices = product(f.map(([p, a]) => partitions(a).map((part) => ({ p, part }))));
  const rows = choices.map((ch) => {
    const elem = ch.flatMap(({ p, part }) => part.map((e) => Math.pow(p, e)));
    const len = Math.max(...ch.map((c) => c.part.length));
    const inv = Array.from({ length: len }, (_, i) => ch.reduce((acc, { p, part }) => acc * (part[i] ? Math.pow(p, part[i]) : 1), 1)).reverse();
    return { elem, inv };
  });
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>order n: <span className="mono">{n}</span></span>
          <input type="range" min={1} max={200} value={n} onChange={(ev) => setN(Math.round(Number(ev.target.value)))} /></label>
      </div>
      <p className="mono" style={{ margin: "6px 0 10px" }}>
        {n} = {f.length ? f.map(([p, a]) => `${p}${a > 1 ? sups(a) : ""}`).join(" · ") : "1"}, so {rows.length} abelian {rows.length === 1 ? "group" : "groups"}
      </p>
      <table className="table">
        <thead><tr><th>prime powers</th><th>invariant factors</th></tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="mono">{r.elem.length ? r.elem.map(Z).join(" × ") : "trivial"}</td>
              <td className="mono">{r.inv.length ? r.inv.map(Z).join(" × ") : "trivial"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        For each prime pᵃ in n, choose a way to write a as a sum of positive whole numbers; each part e gives a factor ℤ of order pᵉ. The number of groups is the product of these partition counts. Grouping the largest prime powers together gives the invariant factors, each dividing the next.
      </figcaption>
    </figure>
  );
}
