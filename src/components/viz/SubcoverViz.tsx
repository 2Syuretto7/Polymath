"use client";

import { useMemo, useState } from "react";

const W = 520, X0 = 30, X1 = 500;
const X = (v: number) => X0 + Math.max(0, Math.min(1, v)) * (X1 - X0);

/** A simple seeded generator, so the same seed always gives the same cover. */
function rng(seed: number) {
  let s = seed * 9301 + 49297;
  return () => { s = (s * 9301 + 49297) % 233280; return s / 233280; };
}

/** Any open cover of [0, 1] has a finite subcover: one interval round each point, then a greedy sweep from the left. */
export function SubcoverViz() {
  const [seed, setSeed] = useState(3);
  const [size, setSize] = useState(0.08);
  const [half, setHalf] = useState(false);
  const cover = useMemo(() => {
    const r = rng(seed);
    // an interval round each of 200 points; radii vary, and shrink to zero near 0 on (0, 1]
    return Array.from({ length: 201 }, (_, i) => {
      const x = i / 200;
      let rad = size * (0.3 + 1.4 * r());
      if (half) rad = Math.min(rad, x / 2);
      return { a: x - rad, b: x + rad, x };
    }).filter((c) => !(half && c.x === 0));
  }, [seed, size, half]);
  const chosen = useMemo(() => {
    const out: { a: number; b: number }[] = [];
    if (!half) {
      // sweep from the left, always taking the interval that reaches furthest right
      let cur = 0;
      for (let guard = 0; guard < 400 && cur <= 1; guard++) {
        const cands = cover.filter((c) => c.a < cur && c.b > cur);
        if (!cands.length) break;
        const best = cands.reduce((m, c) => (c.b > m.b ? c : m));
        out.push(best);
        cur = best.b;
      }
    } else {
      // sweep from 1 leftwards, always taking the interval that reaches furthest left
      let cur = 1;
      for (let guard = 0; guard < 400; guard++) {
        const cands = cover.filter((c) => c.a < cur && c.b >= cur);
        if (!cands.length) break;
        const best = cands.reduce((m, c) => (c.a < m.a ? c : m));
        if (out.length && best.a >= out[out.length - 1].a) break;
        out.push(best);
        cur = best.a;
      }
    }
    return out;
  }, [cover, half]);
  const H = 70 + Math.min(chosen.length, 30) * 6;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Space">
        {["[0, 1]", "(0, 1], intervals shrinking at 0"].map((l, i) => <button key={l} type="button" aria-pressed={half === (i === 1)} className={half === (i === 1) ? "seg is-on" : "seg"} onClick={() => setHalf(i === 1)}>{l}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>typical size of the intervals: <span className="mono">{size.toFixed(2)}</span></span>
          <input type="range" min={0.02} max={0.2} step={0.01} value={size} onChange={(e) => setSize(Number(e.target.value))} /></label>
        <label><span>random seed for the cover: <span className="mono">{seed}</span></span>
          <input type="range" min={1} max={20} step={1} value={seed} onChange={(e) => setSeed(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="The interval with the chosen finite subcover drawn as bars" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={30} x2={X(1)} y2={30} style={{ stroke: "var(--text)", strokeWidth: 3 }} />
        <circle cx={X(0)} cy={30} r={5} style={{ fill: half ? "var(--bg)" : "var(--text)", stroke: "var(--text)", strokeWidth: 2 }} />
        <circle cx={X(1)} cy={30} r={5} style={{ fill: "var(--text)" }} />
        <text x={X(0)} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>0</text>
        <text x={X(1)} y={16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>1</text>
        {chosen.slice(0, 30).map((c, i) => <line key={i} x1={X(c.a)} y1={46 + i * 6} x2={X(c.b)} y2={46 + i * 6} style={{ stroke: "var(--accent)", strokeWidth: 4, strokeLinecap: "round" }} />)}
      </svg>
      <p className="mono" style={{ margin: "6px 0 4px", fontSize: 14 }}>
        {half
          ? `sweeping left from 1, ${chosen.length} intervals reach down to ${chosen.length ? chosen[chosen.length - 1].a.toFixed(4) : "1"}; each interval stays away from 0, so any finite collection misses some (0, ε].`
          : `${cover.length} intervals in the cover; the sweep keeps ${chosen.length} of them, and they cover [0, 1].`}
      </p>
      <figcaption className="viz-caption">
        Every point of [0, 1] has an open interval round it, and the sweep starts at 0 and repeatedly takes the interval
        reaching furthest right. Because [0, 1] is compact, the sweep always reaches 1 in finitely many steps. On (0, 1], an
        interval round x can be forced to stay within x/2 of it. Sweeping from 1 then creeps towards 0 without reaching it, and
        no finite collection suffices.
      </figcaption>
    </figure>
  );
}
