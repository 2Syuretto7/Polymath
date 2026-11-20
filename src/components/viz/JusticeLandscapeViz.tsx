"use client";

import { useState } from "react";

/** A landscape of social states scored for justice: a nearby local peak, a valley, and a distant ideal. */
export function justice(x: number) {
  return 3 + 3.2 * Math.exp(-((x - 2.5) ** 2) / 1.2) + 7 * Math.exp(-((x - 8) ** 2) / 1.8) - 0.6 * Math.exp(-((x - 5.2) ** 2) / 0.8);
}

export function JusticeLandscapeViz() {
  const [route, setRoute] = useState<"local" | "ideal">("local");
  const [step, setStep] = useState(10);
  const start = 1;
  const end = route === "local" ? 2.5 : 8;
  const pos = start + ((end - start) * step) / 10;
  const path = Array.from({ length: 51 }, (_, i) => start + ((pos - start) * i) / 50);
  const low = Math.min(...path.map(justice));
  const X = (x: number) => 30 + x * 50;
  const Y = (y: number) => 180 - y * 15;
  const xs = Array.from({ length: 201 }, (_, i) => i * 0.05);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="route">
        <button type="button" aria-pressed={route === "local"} className={route === "local" ? "seg is-on" : "seg"} onClick={() => setRoute("local")}>climb the nearest hill</button>
        <button type="button" aria-pressed={route === "ideal"} className={route === "ideal" ? "seg is-on" : "seg"} onClick={() => setRoute("ideal")}>head for the ideal</button>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <label>progress = {step * 10}% <input type="range" min={0} max={10} step={1} value={step} onChange={(e) => setStep(Number(e.target.value))} aria-label="progress" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="Justice scores across possible social states" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={30} y1={Y(0)} x2={530} y2={Y(0)} style={{ stroke: "var(--border-strong)" }} />
        <polyline points={xs.map((x) => `${X(x)},${Y(justice(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <polyline points={path.map((x) => `${X(x)},${Y(justice(x))}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 4 }} />
        <circle cx={X(start)} cy={Y(justice(start))} r={6} style={{ fill: "var(--text)" }} />
        <circle cx={X(pos)} cy={Y(justice(pos))} r={7} style={{ fill: "var(--accent)" }} />
        <text x={X(start)} y={Y(justice(start)) + 20} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>here</text>
        <text x={X(8)} y={Y(justice(8)) - 10} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>the ideal</text>
        <text x={X(2.5)} y={Y(justice(2.5)) - 10} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>a better society</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Now at justice {justice(pos).toFixed(1)}, starting from {justice(start).toFixed(1)}. The lowest point on the way so far is {low.toFixed(1)}.
        {route === "ideal" && step === 10 ? " The ideal was reached, but only through a valley worse than the start." : ""}
      </p>
      <figcaption className="viz-caption">
        Amartya Sen holds that we can rank nearby alternatives without knowing what perfect justice is. Gerald Gaus adds
        that the ideal may lie across a valley: moving towards it can make things worse for a long time, and the further
        away it is, the less we know about the terrain. Defenders of ideal theory reply that without a destination we
        cannot tell a local hill from real progress.
      </figcaption>
    </figure>
  );
}
