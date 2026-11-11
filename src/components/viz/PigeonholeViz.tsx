"use client";

import { useState } from "react";

/** Put n pigeons into k holes: however it is done, some hole gets at least ⌈n/k⌉. */
export function PigeonholeViz() {
  const [n, setN] = useState(7);
  const [k, setK] = useState(3);
  const [holes, setHoles] = useState<number[]>(() => [3, 2, 2]);
  const fit = (h: number[]) => (h.length === k && h.reduce((s, x) => s + x, 0) === n ? h : spread(n, k));
  const h = fit(holes);
  const max = Math.max(...h);
  const bound = Math.ceil(n / k);

  function spread(nn: number, kk: number) {
    return Array.from({ length: kk }, (_, i) => Math.floor(nn / kk) + (i < nn % kk ? 1 : 0));
  }
  const random = () => {
    const r = Array(k).fill(0);
    for (let i = 0; i < n; i++) r[Math.floor(Math.random() * k)]++;
    setHoles(r);
  };
  const move = (from: number) => {
    if (h[from] === 0) return;
    const to = (from + 1) % k;
    setHoles(h.map((x, i) => (i === from ? x - 1 : i === to ? x + 1 : x)));
  };

  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>pigeons n = <span className="mono">{n}</span></span><input type="range" min={1} max={15} value={n} onChange={(e) => { const v = Number(e.target.value); setN(v); setHoles(spread(v, k)); }} /></label>
        <label><span>holes k = <span className="mono">{k}</span></span><input type="range" min={1} max={6} value={k} onChange={(e) => { const v = Number(e.target.value); setK(v); setHoles(spread(n, v)); }} /></label>
      </div>
      <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 12, alignItems: "flex-end" }}>
        {h.map((x, i) => (
          <button key={i} type="button" onClick={() => move(i)} aria-label={`Hole ${i + 1}, ${x} pigeons; move one to the next hole`}
            style={{
              width: 64, minHeight: 60, padding: 6, borderRadius: 8, cursor: "pointer", font: "inherit",
              display: "flex", flexWrap: "wrap-reverse", alignContent: "flex-start", gap: 4, justifyContent: "center",
              border: `2px solid ${x === max && x >= bound && x > 1 ? "var(--danger)" : "var(--border-strong)"}`, background: "var(--bg-subtle)",
            }}>
            {Array.from({ length: x }, (_, j) => <span key={j} style={{ width: 14, height: 14, borderRadius: 7, background: "var(--accent)" }} />)}
          </button>
        ))}
      </div>
      <div className="viz-controls" style={{ marginTop: 10 }}>
        <button type="button" className="viz-chip" onClick={random}>Drop them at random</button>
        <button type="button" className="viz-chip" onClick={() => setHoles(spread(n, k))}>Spread them as evenly as possible</button>
      </div>
      <table className="table mono" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>fullest hole</td><td>{max}</td></tr>
          <tr><td>guaranteed ⌈n/k⌉</td><td>⌈{n}/{k}⌉ = {bound}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        Click a hole to move one pigeon to the next hole. However you arrange them, the fullest hole has at least {bound}: if every hole had at most {bound - 1}, there would be at most {k} × {bound - 1} = {k * (bound - 1)} pigeons, fewer than {n}. {n > k ? "Since there are more pigeons than holes, some hole always has two or more." : "With no more pigeons than holes, each can have its own hole."}
      </figcaption>
    </figure>
  );
}
