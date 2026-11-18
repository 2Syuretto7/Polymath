"use client";

import { useState } from "react";

/** Comparing two populations by total, average and critical-level views: the road to the Repugnant Conclusion. */
export function PopulationViz() {
  const [nB, setNB] = useState(40);
  const [wB, setWB] = useState(30);
  const [crit, setCrit] = useState(10);
  const nA = 10, wA = 100;
  const tot = (n: number, w: number) => n * w;
  const cl = (n: number, w: number) => n * (w - crit);
  const views = [
    { name: "total", a: tot(nA, wA), b: tot(nB, wB) },
    { name: "average", a: wA, b: wB },
    { name: `critical level ${crit}`, a: cl(nA, wA), b: cl(nB, wB) },
  ];
  const H = 120, maxN = 200;
  const box = (x: number, n: number, w: number, label: string, col: string) => {
    const width = (n / maxN) * 200, height = (w / 100) * H;
    return (
      <g>
        <rect x={x} y={20 + H - height} width={Math.max(width, 2)} height={height} style={{ fill: col, opacity: 0.6, stroke: col }} />
        <text x={x} y={20 + H + 16} style={{ fill: "var(--text)", fontSize: 11 }}>{label}: {n} people at welfare {w}</text>
      </g>
    );
  };
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>size of B = {nB} <input type="range" min={10} max={200} step={10} value={nB} onChange={(e) => setNB(Number(e.target.value))} aria-label="size" /></label>
        <label>welfare in B = {wB} <input type="range" min={1} max={100} value={wB} onChange={(e) => setWB(Number(e.target.value))} aria-label="welfare" /></label>
        <label>critical level = {crit} <input type="range" min={0} max={50} value={crit} onChange={(e) => setCrit(Number(e.target.value))} aria-label="critical" /></label>
      </div>
      <svg viewBox="0 0 520 170" role="img" aria-label="Two populations as boxes: width is size, height is welfare" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {box(20, nA, wA, "A", "var(--success)")}
        {box(250, nB, wB, "B", "var(--accent)")}
      </svg>
      <table style={{ width: "100%", fontSize: 13, borderCollapse: "collapse" }}>
        <tbody>
          {views.map((v) => (
            <tr key={v.name} style={{ borderTop: "1px solid var(--border)" }}>
              <td style={{ padding: "4px 8px", color: "var(--text-muted)" }}>{v.name} view</td>
              <td style={{ padding: "4px 8px" }}>A: {v.a}</td>
              <td style={{ padding: "4px 8px" }}>B: {v.b}</td>
              <td style={{ padding: "4px 8px", fontWeight: 700, color: v.b > v.a ? "var(--accent)" : v.b < v.a ? "var(--success)" : "var(--text)" }}>{v.b > v.a ? "prefers B" : v.b < v.a ? "prefers A" : "indifferent"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Each box&rsquo;s area is total welfare. Make B huge with lives barely worth living, and the total view prefers it:
        Parfit&rsquo;s Repugnant Conclusion. The average view avoids that, but prefers a world of one very happy person to
        billions almost as happy.
      </figcaption>
    </figure>
  );
}
