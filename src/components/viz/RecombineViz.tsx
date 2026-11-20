"use client";

import { useState } from "react";

const KINDS = ["empty", "pig", "dragon", "talking donkey"];

/** Lewis's principle of recombination on a row of regions, with the island-universe objection. */
export function RecombineViz() {
  const [cells, setCells] = useState([1, 0, 2]);
  const [islands, setIslands] = useState(false);
  const n = cells.length;
  const cycle = (i: number) => setCells(cells.map((c, j) => (j === i ? (c + 1) % KINDS.length : c)));
  const resize = (k: number) => setCells(Array.from({ length: k }, (_, i) => cells[i] ?? 0));
  const cw = 100, gap = 12, total = n * cw + (n - 1) * gap + (islands && n > 1 ? 40 : 0);
  const X0 = (520 - total) / 2;
  const cut = Math.ceil(n / 2);
  const cx = (i: number) => X0 + i * (cw + gap) + (islands && i >= cut ? 40 : 0);
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>regions {n} <input type="range" min={1} max={4} step={1} value={n} onChange={(e) => resize(Number(e.target.value))} aria-label="number of regions" /></label>
        <label><input type="checkbox" checked={islands} onChange={(e) => setIslands(e.target.checked)} aria-label="island universes" /> split into two spatiotemporally disconnected islands</label>
      </div>
      <svg viewBox="0 0 520 150" role="img" aria-label="A row of regions, each holding a duplicate of some possible thing" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {islands && n > 1 ? (
          <>
            <rect x={cx(0) - 8} y={20} width={cx(cut - 1) + cw - cx(0) + 16} height={92} rx={14} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "5 4" }} />
            <rect x={cx(cut) - 8} y={20} width={cx(n - 1) + cw - cx(cut) + 16} height={92} rx={14} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "5 4" }} />
          </>
        ) : (
          <rect x={cx(0) - 8} y={20} width={cx(n - 1) + cw - cx(0) + 16} height={92} rx={14} style={{ fill: "none", stroke: "var(--border-strong)", strokeDasharray: "5 4" }} />
        )}
        {cells.map((c, i) => (
          <g key={i} role="button" tabIndex={0} aria-label={`region ${i + 1}: ${KINDS[c]}`} onClick={() => cycle(i)} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") cycle(i); }} style={{ cursor: "pointer" }}>
            <rect x={cx(i)} y={32} width={cw} height={68} rx={8} style={{ fill: c ? "var(--accent-soft)" : "var(--bg-subtle)", stroke: c ? "var(--accent)" : "var(--border-strong)" }} />
            <text x={cx(i) + cw / 2} y={70} textAnchor="middle" style={{ fill: c ? "var(--text)" : "var(--text-faint)", fontSize: 12 }}>{KINDS[c]}</text>
          </g>
        ))}
        <text x={260} y={136} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>click a region to change what fills it</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {islands && n > 1
          ? "Lewis: these are two worlds, not one. A world is a maximal spatiotemporally connected whole, so a single world cannot contain disconnected islands."
          : `By recombination this arrangement is a possible world. Arrangements of ${n} region${n > 1 ? "s" : ""}: ${KINDS.length}${n > 1 ? "¹²³⁴"[n - 1] : ""} = ${KINDS.length ** n}.`}
      </p>
      <figcaption className="viz-caption">
        Lewis&rsquo;s principle of recombination says that duplicates of any possible things can be put together in any
        arrangement, size and shape permitting, and the result is a possible world. Splitting the regions shows a
        standard objection: island universes seem possible, but Lewis must count them as two worlds.
      </figcaption>
    </figure>
  );
}
