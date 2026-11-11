"use client";

import { useState } from "react";

const WIND = 18;
type Reading = "protagoras" | "objectivist" | "plato";

function feel(from: number) {
  if (from > WIND + 2) return "cold";
  if (from < WIND - 2) return "warm";
  return "neither warm nor cold";
}

/** The same wind, two people: Protagoras' measure doctrine and two replies. */
export function MeasureViz() {
  const [a, setA] = useState(34);
  const [b, setB] = useState(6);
  const [r, setR] = useState<Reading>("protagoras");
  const fa = feel(a), fb = feel(b);
  const W = 560, H = 112, X = (t: number) => 20 + (t / 40) * (W - 40);
  const same = fa === fb;
  const anchor = (t: number) => (t < 9 ? "start" : t > 31 ? "end" : "middle");

  const text =
    r === "protagoras"
      ? same
        ? `Both feel the wind as ${fa}, so for both of them it is ${fa}. On Protagoras' view there is nothing more to ask.`
        : `For A the wind is ${fa}, and for B it is ${fb}. Each is right, because the wind is, for each person, as it appears to them. Neither can correct the other, and there is no further fact about the wind in itself.`
      : r === "objectivist"
        ? `The wind is ${WIND} °C for everyone. “${fa[0].toUpperCase() + fa.slice(1)}” and “${fb}” report how it affects each person, given where they have come from. ${same ? "Here the two reports agree." : "They do not contradict each other, because neither describes the wind in itself."} A thermometer settles what the temperature is.`
        : "Plato's reply in the Theaetetus: most people believe that Protagoras is wrong. If every belief is true for the one who holds it, then \"Protagoras is wrong\" is true for them, and Protagoras must grant that his opponents' belief is true. The doctrine seems to undercut itself.";

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Way of reading the case">
        {([["protagoras", "Protagoras"], ["objectivist", "the objectivist"], ["plato", "Plato's reply"]] as [Reading, string][]).map(([k, l]) => (
          <button key={k} type="button" className={k === r ? "seg is-on" : "seg"} aria-pressed={k === r} onClick={() => setR(k)}>{l}</button>
        ))}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`Wind at ${WIND} degrees. A came from ${a} degrees and feels it as ${fa}; B came from ${b} degrees and feels it as ${fb}.`} style={{ width: "100%", marginTop: 12 }}>
        <line x1={X(0)} y1={60} x2={X(40)} y2={60} className="viz-axis" />
        {[0, 10, 20, 30, 40].map((t) => (
          <g key={t}>
            <line x1={X(t)} y1={56} x2={X(t)} y2={64} className="viz-axis" />
            <text x={X(t)} y={80} textAnchor="middle" className="plot-tick">{t}</text>
          </g>
        ))}
        <rect x={X(WIND) - 3} y={42} width={6} height={30} style={{ fill: "var(--text-muted)" }} />
        <text x={X(WIND)} y={100} textAnchor="middle" className="viz-label">wind, {WIND} °C</text>
        <circle cx={X(a)} cy={60} r={7} style={{ fill: "var(--accent)" }} />
        <text x={X(a)} y={30} textAnchor={anchor(a)} className="viz-label is-on">A: {fa}</text>
        <circle cx={X(b)} cy={60} r={7} style={{ fill: "var(--danger)" }} />
        <text x={X(b)} y={16} textAnchor={anchor(b)} className="viz-label" style={{ fill: "var(--danger)" }}>B: {fb}</text>
      </svg>
      <div className="viz-sliders">
        <label><span>A has just come from <span className="mono">{a} °C</span></span>
          <input type="range" min={0} max={40} step={1} value={a} onChange={(e) => setA(Number(e.target.value))} /></label>
        <label><span>B has just come from <span className="mono">{b} °C</span></span>
          <input type="range" min={0} max={40} step={1} value={b} onChange={(e) => setB(Number(e.target.value))} /></label>
      </div>
      <figcaption className="viz-caption" aria-live="polite">{text}</figcaption>
    </figure>
  );
}
