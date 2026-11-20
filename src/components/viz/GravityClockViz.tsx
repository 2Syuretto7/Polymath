"use client";

import { useState } from "react";

const GM = 3.986e14;
const C2 = 8.988e16;
const R = 6.371e6;

/** Microseconds per day gained by a clock at height h (in km) over a clock on the ground, from gravity alone. */
export function gainPerDay(hKm: number) {
  const h = hKm * 1000;
  return (GM / C2) * (1 / R - 1 / (R + h)) * 86400 * 1e6;
}

/** Gravitational time dilation: higher clocks run fast relative to lower ones. */
export function GravityClockViz() {
  const [h, setH] = useState(20200);
  const g = gainPerDay(h);
  const maxG = gainPerDay(40000);
  const presets: [string, number][] = [["a tall tower, 0.5 km", 0.5], ["the ISS, 400 km", 400], ["GPS, 20 200 km", 20200], ["geostationary, 35 786 km", 35786]];
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="height">
        {presets.map(([l, v]) => <button key={l} type="button" aria-pressed={h === v} className={h === v ? "seg is-on" : "seg"} onClick={() => setH(v)}>{l}</button>)}
      </div>
      <svg viewBox="0 0 540 170" role="img" aria-label="A bar showing how many microseconds a day the higher clock gains" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <circle cx={60} cy={120} r={34} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <text x={60} y={124} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 11 }}>Earth</text>
        <text x={130} y={40} style={{ fill: "var(--text-muted)", fontSize: 11 }}>gain of the higher clock, in microseconds per day</text>
        <rect x={130} y={60} width={380} height={30} rx={4} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={130} y={60} width={Math.max(2, (380 * g) / maxG)} height={30} rx={4} style={{ fill: "var(--success)" }} />
        <text x={136 + Math.max(2, (380 * g) / maxG)} y={80} style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{g < 1 ? g.toFixed(4) : g.toFixed(1)} μs</text>
        <text x={130} y={120} style={{ fill: "var(--text-muted)", fontSize: 11 }}>height {h.toLocaleString("en-IN")} km; light travels about {(g * 0.3).toFixed(g < 1 ? 4 : 1)} km in that time</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        At {h.toLocaleString("en-IN")} km a clock gains about {g < 1 ? g.toFixed(4) : g.toFixed(1)} μs a day over one on the ground, from gravity alone.
      </p>
      <figcaption className="viz-caption">
        In general relativity the metric fixes how fast clocks tick, and it varies with the distribution of mass. GPS
        satellites must correct for this effect, partly offset by the slowing of moving clocks; uncorrected, positions would
        drift by kilometres a day. The metric is measurable and does work, which is why some call it a physical field.
      </figcaption>
    </figure>
  );
}
