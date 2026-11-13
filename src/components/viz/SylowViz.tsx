"use client";

import { useState } from "react";
import { factor, sylowCounts } from "./groupOrder";

const sup = (a: number) => (a === 1 ? "" : String(a).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join(""));

/** Factor |G| and list, for each prime, the Sylow order and the counts n_p allowed by the theorems. */
export function SylowViz() {
  const [n, setN] = useState(12);
  const f = factor(n);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>order of G: <span className="mono">{n}</span></span>
          <input type="range" min={2} max={200} value={n} onChange={(ev) => setN(Math.round(Number(ev.target.value)))} /></label>
      </div>
      <p className="mono" style={{ margin: "6px 0 10px" }}>|G| = {n} = {f.map(([p, a]) => `${p}${sup(a)}`).join(" · ")}</p>
      <table className="table">
        <thead><tr><th>prime p</th><th>Sylow order</th><th>count divides</th><th>allowed counts</th><th>verdict</th></tr></thead>
        <tbody>
          {f.map(([p, a]) => {
            const pa = Math.pow(p, a), m = n / pa, c = sylowCounts(n, p, a);
            const forced = c.length === 1;
            return (
              <tr key={p}>
                <td className="mono">{p}</td>
                <td className="mono">{p}{sup(a)} = {pa}</td>
                <td className="mono">{m}</td>
                <td className="mono">{c.join(", ")}</td>
                <td style={{ color: forced ? "var(--accent)" : "var(--text-muted)" }}>{forced ? "unique, so normal" : "not forced"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Write |G| = pᵃm with p not dividing m. Sylow subgroups of order pᵃ exist, they are all conjugate, and their number n_p divides m and leaves remainder 1 on division by p. When the only such number is 1, the Sylow p-subgroup is normal.
      </figcaption>
    </figure>
  );
}
