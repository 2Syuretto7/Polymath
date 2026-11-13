"use client";

import { useState } from "react";

const READINGS = [
  { key: "f", label: "Fresnel, 1823", what: "amplitude of the vibration of an elastic ether" },
  { key: "m", label: "Maxwell, 1865", what: "strength of the oscillating electric field" },
  { key: "q", label: "quantum optics", what: "probability amplitude for a photon to be reflected" },
];

/** The structure survives the change of theory: Fresnel’s reflection equations, read three ways. */
export function FresnelCarryViz() {
  const [n2, setN2] = useState(1.5);
  const [deg, setDeg] = useState(40);
  const [ri, setRi] = useState(0);
  const r = (d: number) => {
    const i = (d * Math.PI) / 180;
    const st = Math.sin(i) / n2;
    const ct = Math.sqrt(1 - st * st);
    const ci = Math.cos(i);
    return { s: (ci - n2 * ct) / (ci + n2 * ct), p: (n2 * ci - ct) / (n2 * ci + ct) };
  };
  const cur = r(deg);
  const brewster = (Math.atan(n2) * 180) / Math.PI;
  const W = 520, H = 200, X = (d: number) => 40 + (d / 90) * 460, Y = (v: number) => 100 - v * 80;
  const path = (k: "s" | "p") => Array.from({ length: 181 }, (_, j) => j / 2).map((d, j) => `${j ? "L" : "M"}${X(d).toFixed(1)},${Y(r(Math.min(d, 89.9))[k]).toFixed(1)}`).join(" ");
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Interpretation">
        {READINGS.map((x, i) => <button key={x.key} type="button" aria-pressed={ri === i} className={ri === i ? "seg is-on" : "seg"} onClick={() => setRi(i)}>{x.label}</button>)}
      </div>
      <div className="viz-sliders" style={{ marginTop: 8 }}>
        <label><span>refractive index of the glass: <span className="mono">{n2.toFixed(2)}</span></span>
          <input type="range" min={1.1} max={2.4} step={0.01} value={n2} onChange={(e) => setN2(Number(e.target.value))} /></label>
        <label><span>angle of incidence: <span className="mono">{deg}°</span></span>
          <input type="range" min={0} max={89} step={1} value={deg} onChange={(e) => setDeg(Number(e.target.value))} /></label>
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Reflection coefficients against angle of incidence" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X(0)} y1={Y(0)} x2={X(90)} y2={Y(0)} style={{ stroke: "var(--border)" }} />
        <line x1={X(0)} y1={Y(1)} x2={X(0)} y2={Y(-1)} style={{ stroke: "var(--border)" }} />
        {[1, -1].map((v) => <text key={v} x={34} y={Y(v) + 4} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{v}</text>)}
        {[0, 30, 60, 90].map((d) => <text key={d} x={X(d)} y={Y(-1) + 16} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{d}°</text>)}
        <path d={path("s")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={path("p")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <line x1={X(brewster)} y1={Y(1)} x2={X(brewster)} y2={Y(-1)} style={{ stroke: "var(--accent)", strokeDasharray: "4 3" }} />
        <text x={X(brewster) + 4} y={Y(0.85)} style={{ fill: "var(--text)", fontSize: 11 }}>Brewster</text>
        <line x1={X(deg)} y1={Y(1)} x2={X(deg)} y2={Y(-1)} style={{ stroke: "var(--text)", strokeWidth: 1 }} />
        <circle cx={X(deg)} cy={Y(cur.s)} r={4} style={{ fill: "var(--text-muted)" }} />
        <circle cx={X(deg)} cy={Y(cur.p)} r={4} style={{ fill: "var(--accent)" }} />
        <text x={X(2)} y={Y(r(2).s) + 16} style={{ fill: "var(--text)", fontSize: 12 }}>perpendicular</text>
        <text x={X(2)} y={Y(r(2).p) - 8} style={{ fill: "var(--text)", fontSize: 12 }}>parallel</text>
      </svg>
      <div className="mono" style={{ display: "grid", gap: 3, fontSize: 14, marginTop: 4 }}>
        <div>reflected ratio, perpendicular: {cur.s.toFixed(3)}; parallel: {cur.p.toFixed(3)}</div>
        <div>Brewster angle, where the parallel ratio vanishes: {brewster.toFixed(1)}°</div>
        <div style={{ fontWeight: 700 }}>the ratio measures the {READINGS[ri].what}</div>
      </div>
      <figcaption className="viz-caption">
        Fresnel derived these equations from a theory of an elastic ether that does not exist. Maxwell&rsquo;s theory, and
        later quantum optics, keep exactly the same equations and the same predictions while changing what the quantities are
        said to be. Worrall argued that what survives theory change, and so what we should be realists about, is this
        mathematical structure.
      </figcaption>
    </figure>
  );
}
