"use client";

import { useState } from "react";

type El = [number, boolean];
const ELS: El[] = [[0, false], [1, false], [2, false], [0, true], [1, true], [2, true]];
const mod3 = (a: number) => ((a % 3) + 3) % 3;
const mul = ([k1, f1]: El, [k2, f2]: El): El => [mod3(k1 + (f1 ? -k2 : k2)), f1 !== f2];
const nm = ([k, f]: El) => (k === 0 ? (f ? "s" : "e") : `r${k === 2 ? "²" : ""}${f ? "s" : ""}`);
const idx = (x: El) => ELS.findIndex((y) => y[0] === x[0] && y[1] === x[1]);
const setName = (xs: El[]) => `{${xs.map(idx).sort((a, b) => a - b).map((i) => nm(ELS[i])).join(", ")}}`;

const HS = {
  rot: { name: "H = {e, r, r²}, the rotations", els: [ELS[0], ELS[1], ELS[2]] },
  ref: { name: "H = {e, s}, one reflection", els: [ELS[0], ELS[3]] },
};
type K = keyof typeof HS;

/** Left and right cosets in the symmetry group of a triangle. For a normal subgroup they agree; for others they do not. */
export function NormalCosetViz() {
  const [k, setK] = useState<K>("rot");
  const H = HS[k].els;
  const rows = ELS.map((g) => {
    const L = setName(H.map((h) => mul(g, h)));
    const Rr = setName(H.map((h) => mul(h, g)));
    return { g: nm(g), L, R: Rr, same: L === Rr };
  });
  const normal = rows.every((r) => r.same);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Subgroup H of the symmetries of a triangle">
        {(Object.keys(HS) as K[]).map((q) => (
          <button key={q} type="button" className={q === k ? "seg is-on" : "seg"} aria-pressed={q === k} onClick={() => setK(q)}>{HS[q].name}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <thead><tr><th>g</th><th>left coset gH</th><th>right coset Hg</th><th>equal?</th></tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.g}><td className="mono">{r.g}</td><td className="mono">{r.L}</td><td className="mono">{r.R}</td>
              <td style={{ color: r.same ? "var(--text)" : "var(--danger)" }}>{r.same ? "yes" : "no"}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="mono-meta" style={{ textTransform: "none", margin: "8px 0 0" }} aria-live="polite">
        {normal ? "Every left coset equals the right coset: H is normal." : "Some left and right cosets differ: H is not normal."}
      </p>
      <figcaption className="viz-caption">
        The group is D₃, the six symmetries of an equilateral triangle, with rᵏs meaning reflect first, then rotate. The rotations form a normal subgroup: conjugating a rotation by a reflection reverses it, but leaves it a rotation. A single reflection is not normal: conjugating it gives a different reflection.
      </figcaption>
    </figure>
  );
}
