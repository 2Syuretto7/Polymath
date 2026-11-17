"use client";

import { useState } from "react";

const N = 6;
const seqs = (k: number): string[] => {
  const out: string[] = [];
  for (let m = 0; m < 1 << N; m++) {
    let c = 0;
    for (let i = 0; i < N; i++) if (m & (1 << i)) c++;
    if (c === k) out.push(Array.from({ length: N }, (_, i) => (m & (1 << (N - 1 - i)) ? "H" : "T")).join(""));
  }
  return out;
};

/** Given the number of heads, every arrangement is equally likely whatever p is: the total is sufficient. */
export function SufficiencyViz() {
  const [p, setP] = useState(0.3);
  const [k, setK] = useState(2);
  const list = seqs(k);
  const each = Math.pow(p, k) * Math.pow(1 - p, N - k);
  const total = each * list.length;
  const cond = 1 / list.length;
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>chance of heads p: <span className="mono">{p.toFixed(2)}</span></span>
          <input type="range" min={0.05} max={0.95} step={0.01} value={p} onChange={(e) => setP(Number(e.target.value))} /></label>
        <label><span>number of heads k in 6 tosses: <span className="mono">{k}</span></span>
          <input type="range" min={0} max={N} step={1} value={k} onChange={(e) => setK(Number(e.target.value))} /></label>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))", gap: 6, marginTop: 10 }}>
        {list.map((s) => (
          <div key={s} className="mono" style={{ border: "1px solid var(--border)", borderRadius: 6, padding: "4px 8px", fontSize: 13, display: "flex", justifyContent: "space-between", gap: 8 }}>
            <span style={{ letterSpacing: 2 }}>{s}</span>
            <span style={{ color: "var(--text-muted)" }}>{cond.toFixed(4)}</span>
          </div>
        ))}
      </div>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 8 }}>
        <div>probability of each arrangement, pᵏ(1 − p)⁶⁻ᵏ: {each.toFixed(6)}</div>
        <div>probability of exactly {k} heads: {total.toFixed(4)}</div>
        <div style={{ fontWeight: 700 }}>chance of each arrangement given {k} heads: 1/{list.length} = {cond.toFixed(4)}, whatever p is</div>
      </div>
      <figcaption className="viz-caption">
        The tiles list every sequence of six tosses with exactly k heads. Each has the same probability, so once we know k,
        each arrangement has conditional probability 1 over the number of arrangements, and this does not depend on p. The
        order of heads and tails therefore carries no further information about p: the total number of heads is a
        sufficient statistic.
      </figcaption>
    </figure>
  );
}
