"use client";

import { useState } from "react";

const KB = 1.380649e-23;
const AMU = 1.66054e-27;
const GASES = [
  { label: "helium", m: 4 },
  { label: "nitrogen", m: 28 },
  { label: "carbon dioxide", m: 44 },
];

/** A bridge law at work: temperature of a gas and the mean kinetic energy of its molecules. */
export function GasBridgeViz() {
  const [T, setT] = useState(300);
  const [gi, setGi] = useState(1);
  const m = GASES[gi].m * AMU;
  const ke = 1.5 * KB * T;
  const vrms = Math.sqrt((3 * KB * T) / m);
  const pdf = (v: number) => 4 * Math.PI * Math.pow(m / (2 * Math.PI * KB * T), 1.5) * v * v * Math.exp((-m * v * v) / (2 * KB * T));
  const VMAX = 3000;
  const W = 520, H = 200, X = (v: number) => 30 + (v / VMAX) * 470;
  const pts = Array.from({ length: 151 }, (_, i) => (i / 150) * VMAX);
  const ymax = 0.0065;
  const Y = (p: number) => 170 - Math.min(1, p / ymax) * 150;
  const d = pts.map((v, i) => `${i ? "L" : "M"}${X(v).toFixed(1)},${Y(pdf(v)).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Gas">
        {GASES.map((g, i) => <button key={g.label} type="button" aria-pressed={gi === i} className={gi === i ? "seg is-on" : "seg"} onClick={() => setGi(i)}>{g.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>temperature: <span className="mono">{T} K</span></span>
          <input type="range" min={50} max={1000} step={10} value={T} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Distribution of molecular speeds" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={170} x2={X(VMAX)} y2={170} style={{ stroke: "var(--border)" }} />
        {[0, 1000, 2000, 3000].map((v) => <text key={v} x={X(v)} y={186} textAnchor={v === 3000 ? "end" : "middle"} style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v} m/s</text>)}
        <path d={d + ` L${X(VMAX)},170 L${X(0)},170 Z`} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(Math.min(vrms, VMAX))} y1={20} x2={X(Math.min(vrms, VMAX))} y2={170} style={{ stroke: "var(--text)", strokeDasharray: "4 3" }} />
        <text x={X(Math.min(vrms, VMAX)) + 4} y={30} style={{ fill: "var(--text)", fontSize: 11 }}>root mean square speed</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>root mean square speed = {vrms.toFixed(0)} m/s</div>
        <div>mean kinetic energy per molecule = {(ke * 1e21).toFixed(3)} × 10⁻²¹ J</div>
        <div style={{ fontWeight: 700 }}>bridge law: temperature = mean kinetic energy ÷ (3k/2), the same for every gas</div>
      </div>
      <figcaption className="viz-caption">
        The molecules of a gas move at a spread of speeds. Heavier molecules move more slowly, but at a given temperature
        every gas has the same mean kinetic energy, (3/2)kT. Nagel took the identification of temperature with mean molecular
        kinetic energy as a bridge law connecting the vocabulary of thermodynamics to that of mechanics.
      </figcaption>
    </figure>
  );
}
