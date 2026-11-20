"use client";

import { useState } from "react";

/** How many material objects there are, given n simples, under nihilism and under universalism. */
export function FusionCountViz() {
  const [n, setN] = useState(4);
  const [para, setPara] = useState(false);
  const nil = n, uni = 2 ** n - 1;
  const X0 = 150, W = 330, logMax = Math.log10(2 ** 20);
  const w = (v: number) => (Math.log10(v + 1) / logMax) * W;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>simples n = {n} <input type="range" min={1} max={20} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="number of simples" /></label>
        <label><input type="checkbox" checked={para} onChange={(e) => setPara(e.target.checked)} aria-label="show the nihilist paraphrase" /> show the nihilist&rsquo;s paraphrase</label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Number of objects under nihilism and universalism, on a logarithmic scale" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <text x={X0 - 10} y={34} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>nihilism</text>
        <rect x={X0} y={20} width={w(nil)} height={22} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <text x={X0 + w(nil) + 6} y={35} className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>{nil.toLocaleString("en-IN")}</text>
        <text x={X0 - 10} y={78} textAnchor="end" style={{ fill: "var(--text)", fontSize: 12 }}>universalism</text>
        <rect x={X0} y={64} width={w(uni)} height={22} style={{ fill: "var(--danger-soft)", stroke: "var(--danger)" }} />
        <text x={Math.min(X0 + w(uni) + 6, 470)} y={79} className="mono" style={{ fill: "var(--text)", fontSize: 12 }}>{uni.toLocaleString("en-IN")}</text>
        <text x={X0} y={110} style={{ fill: "var(--text-faint)", fontSize: 10 }}>logarithmic scale</text>
        {para && (
          <>
            <text x={20} y={136} style={{ fill: "var(--text-muted)", fontSize: 12 }}>Ordinary: &lsquo;There is a chair in the room.&rsquo;</text>
            <text x={20} y={156} style={{ fill: "var(--accent)", fontSize: 12 }}>Nihilist: &lsquo;There are simples arranged chairwise in the room.&rsquo;</text>
          </>
        )}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        With {n} simples: nihilism counts {nil}; universalism counts 2{String(n).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join("")} − 1 = {uni.toLocaleString("en-IN")}, one for every non-empty plurality.
      </p>
      <figcaption className="viz-caption">
        The nihilist says only simples exist; the universalist adds a fusion for every non-empty collection of them. The
        counts diverge exponentially. The nihilist keeps ordinary talk true in spirit by paraphrase: there is no chair,
        but there are simples arranged chairwise.
      </figcaption>
    </figure>
  );
}
