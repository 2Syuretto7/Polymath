"use client";

import { useState } from "react";

/** Continue log z along n turns of the circle |z − c| = 1, starting at c + 1, by following the argument continuously. */
export function continueLog(c: number, n: number, steps = 720) {
  const pts: [number, number][] = [];
  let arg = Math.atan2(0, c + 1);
  let prev = arg;
  const total = n * steps;
  for (let k = 0; k <= total; k++) {
    const t = (2 * Math.PI * k) / steps;
    const x = c + Math.cos(t), y = Math.sin(t);
    const a = Math.atan2(y, x);
    let d = a - prev;
    while (d > Math.PI) d -= 2 * Math.PI;
    while (d < -Math.PI) d += 2 * Math.PI;
    arg += d;
    prev = a;
    pts.push([x, y]);
  }
  const start = Math.atan2(0, c + 1);
  return { pts, startArg: start, endArg: arg, change: arg - start, logModulus: Math.log(Math.abs(c + 1)) };
}

/** Analytic continuation of log z and √z round a loop, which may or may not enclose 0. */
export function LogContinuationViz() {
  const [c, setC] = useState(0.5);
  const [n, setN] = useState(1);
  const [fn, setFn] = useState<"log" | "sqrt">("log");
  const r = continueLog(c, n);
  const S = 60, X0 = 270, Y0 = 115;
  const px = (x: number) => X0 + x * S, py = (y: number) => Y0 - y * S;
  const f = (v: number) => v.toFixed(3).replace("-", "−");
  const wind = Math.round(r.change / (2 * Math.PI));
  const sign = wind % 2 === 0 ? 1 : -1;
  const s0 = Math.sqrt(Math.abs(c + 1)) * (c + 1 < 0 ? 0 : 1);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="function">
        <button type="button" aria-pressed={fn === "log"} className={fn === "log" ? "seg is-on" : "seg"} onClick={() => setFn("log")}>log z</button>
        <button type="button" aria-pressed={fn === "sqrt"} className={fn === "sqrt" ? "seg is-on" : "seg"} onClick={() => setFn("sqrt")}>√z</button>
      </div>
      <div className="viz-controls">
        <label>centre c = {c.toFixed(1).replace("-", "−")} <input type="range" min={-0.5} max={3} step={0.1} value={c} onChange={(e) => setC(Number(e.target.value))} aria-label="centre" /></label>
        <label>turns = {n} <input type="range" min={1} max={3} step={1} value={n} onChange={(e) => setN(Number(e.target.value))} aria-label="turns" /></label>
      </div>
      <svg viewBox="0 0 540 230" role="img" aria-label="A loop along which log z is continued" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={10} y1={Y0} x2={530} y2={Y0} style={{ stroke: "var(--grid-line)" }} />
        <line x1={X0} y1={5} x2={X0} y2={225} style={{ stroke: "var(--grid-line)" }} />
        <circle cx={px(c)} cy={Y0} r={S} style={{ fill: Math.abs(c) < 1 ? "var(--accent-soft)" : "none", stroke: "var(--accent)", strokeWidth: 2 }} />
        <circle cx={X0} cy={Y0} r={5} style={{ fill: "var(--danger)" }} />
        <text x={X0 - 8} y={Y0 + 16} textAnchor="end" style={{ fill: "var(--danger)", fontSize: 11 }}>0</text>
        <circle cx={px(c + 1)} cy={Y0} r={5} style={{ fill: "var(--success)" }} />
        <text x={px(c + 1) + 8} y={Y0 - 8} style={{ fill: "var(--text)", fontSize: 11 }}>start and end</text>
        <path d={`M${px(c + 1) - 4},${py(0.35)} l8,-6 l-2,8`} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 2 }} />
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        {fn === "log"
          ? `Start: log z = ${f(r.logModulus)} + ${f(r.startArg)}i. After ${n} turn${n > 1 ? "s" : ""}: ${f(r.logModulus)} + ${f(r.endArg)}i. Change in the imaginary part: ${f(r.change)}.`
          : `Start: √z = ${f(s0)}. After ${n} turn${n > 1 ? "s" : ""}: √z = ${f(sign * s0)}. The loop winds ${wind} time${wind === 1 ? "" : "s"} round 0.`}
      </p>
      <figcaption className="viz-caption">
        Start with the principal branch at c + 1 and continue it along the circle, keeping it holomorphic at every step.
        If the loop encloses 0, log z returns increased by 2πi for each turn and √z returns with its sign changed; if not,
        both return to their starting values. The continuation depends on the path, not only on its end.
      </figcaption>
    </figure>
  );
}
