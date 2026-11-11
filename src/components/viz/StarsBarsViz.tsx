"use client";

import { useMemo, useState } from "react";

function binom(n: number, k: number) {
  if (k < 0 || k > n) return 0;
  let r = 1;
  for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
  return Math.round(r);
}

/** All ways to share n identical sweets among k children, in order. */
function compositions(n: number, k: number): number[][] {
  if (k === 1) return [[n]];
  const out: number[][] = [];
  for (let first = n; first >= 0; first--) for (const rest of compositions(n - first, k - 1)) out.push([first, ...rest]);
  return out;
}

/** Stars and bars: a way of sharing n identical objects among k people is a row of n stars and k − 1 bars. */
export function StarsBarsViz() {
  const [n, setN] = useState(5);
  const [k, setK] = useState(3);
  const [i, setI] = useState(0);
  const all = useMemo(() => compositions(n, k), [n, k]);
  const idx = Math.min(i, all.length - 1);
  const c = all[idx];
  const total = binom(n + k - 1, k - 1);
  const symbols: ("star" | "bar")[] = [];
  c.forEach((x, j) => { for (let t = 0; t < x; t++) symbols.push("star"); if (j < k - 1) symbols.push("bar"); });

  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>sweets n = <span className="mono">{n}</span></span><input type="range" min={0} max={8} value={n} onChange={(e) => { setN(Number(e.target.value)); setI(0); }} /></label>
        <label><span>children k = <span className="mono">{k}</span></span><input type="range" min={2} max={5} value={k} onChange={(e) => { setK(Number(e.target.value)); setI(0); }} /></label>
      </div>
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 14, minHeight: 40, alignItems: "center" }} aria-label="stars and bars">
        {symbols.map((s, j) => s === "star"
          ? <span key={j} style={{ width: 22, height: 22, borderRadius: 11, background: "var(--accent)", display: "inline-block" }} />
          : <span key={j} style={{ width: 4, height: 34, background: "var(--text)", display: "inline-block", margin: "0 6px" }} />)}
      </div>
      <table className="table mono" style={{ marginTop: 10 }}>
        <tbody>
          <tr><td>shares</td><td>{c.map((x, j) => `child ${j + 1}: ${x}`).join(", ")}</td></tr>
          <tr><td>arrangement</td><td>{idx + 1} of {all.length}</td></tr>
          <tr><td>formula</td><td>C({n} + {k} − 1, {k} − 1) = C({n + k - 1}, {k - 1}) = {total}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="viz-chip" onClick={() => setI((idx + 1) % all.length)}>Next arrangement</button>
        <button type="button" className="viz-chip" onClick={() => setI(Math.floor(Math.random() * all.length))}>Random arrangement</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Each way of sharing is a row of {n} stars and {k - 1} bars: the stars before the first bar go to child 1, those between the first and second bars to child 2, and so on. A row is fixed by choosing which {k - 1} of the {n + k - 1} places hold bars, so there are {total} ways.
      </figcaption>
    </figure>
  );
}
