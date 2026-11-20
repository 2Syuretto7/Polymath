"use client";

import { useState } from "react";

export const THRESHOLD = 47.5;

/** Early sensory activity at time t (ms) for stimulus strength s (0 to 100): a transient proportional to s. */
export function sensory(s: number, t: number) {
  return (s / 100) * Math.exp(-Math.pow((t - 120) / 60, 2));
}

/** Late workspace activity: all or none. Above threshold it ignites and is sustained; below, a weak transient. */
export function workspace(s: number, t: number) {
  if (s > THRESHOLD) return 0.9 / (1 + Math.exp(-(t - 300) / 25));
  return 0.25 * (s / 100) * Math.exp(-Math.pow((t - 250) / 70, 2));
}

/** Peak late workspace activity as a function of strength. */
export function peak(s: number) {
  let m = 0;
  for (let t = 0; t <= 600; t += 10) m = Math.max(m, workspace(s, t));
  return m;
}

/** A toy model of global neuronal workspace ignition after a brief stimulus. */
export function IgnitionViz() {
  const [s, setS] = useState(40);
  const ign = s > THRESHOLD;
  const X0 = 40, W = 290, Y0 = 170, H = 140;
  const tx = (t: number) => X0 + (t / 600) * W, vy = (v: number) => Y0 - v * H;
  let ds = "", dw = "";
  for (let t = 0; t <= 600; t += 5) {
    ds += `${t ? "L" : "M"}${tx(t).toFixed(1)},${vy(sensory(s, t)).toFixed(1)}`;
    dw += `${t ? "L" : "M"}${tx(t).toFixed(1)},${vy(workspace(s, t)).toFixed(1)}`;
  }
  const B0 = 380, BW = 140;
  const bx = (v: number) => B0 + (v / 100) * BW;
  let dp = "";
  for (let v = 0; v <= 100; v += 2.5) dp += `${v ? "L" : "M"}${bx(v).toFixed(1)},${vy(peak(v)).toFixed(1)}`;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>stimulus strength = {s} <input type="range" min={0} max={100} step={5} value={s} onChange={(e) => setS(Number(e.target.value))} aria-label="strength" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="Sensory and workspace activity over time, and peak workspace activity against stimulus strength" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={X0} y1={Y0} x2={X0} y2={Y0 - H} style={{ stroke: "var(--border-strong)" }} />
        {[0, 200, 400, 600].map((t) => <text key={t} x={tx(t)} y={Y0 + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{t}</text>)}
        <text x={X0 + W} y={Y0 + 28} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>time after stimulus (ms)</text>
        <path d={ds} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <path d={dw} style={{ fill: "none", stroke: ign ? "var(--success)" : "var(--accent)", strokeWidth: 2.5 }} />
        <text x={X0 + 6} y={18} style={{ fill: "var(--text-muted)", fontSize: 10 }}>grey: early sensory</text>
        <text x={X0 + 120} y={18} style={{ fill: ign ? "var(--success)" : "var(--accent)", fontSize: 10 }}>bold: late workspace</text>
        <line x1={B0} y1={Y0} x2={B0 + BW} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        <line x1={B0} y1={Y0} x2={B0} y2={Y0 - H} style={{ stroke: "var(--border-strong)" }} />
        <path d={dp} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 1.5 }} />
        <circle cx={bx(s)} cy={vy(peak(s))} r={5} style={{ fill: ign ? "var(--success)" : "var(--accent)" }} />
        {[0, 50, 100].map((v) => <text key={v} x={bx(v)} y={Y0 + 14} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{v}</text>)}
        <text x={B0 + BW} y={Y0 + 28} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 10 }}>strength</text>
        <text x={B0 + 4} y={18} style={{ fill: "var(--text-muted)", fontSize: 10 }}>peak workspace activity</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Strength {s}: {ign ? "ignition. Late activity is sustained and broadcast; the stimulus is reported as seen." : "no ignition. Sensory activity fades without spreading; the stimulus is reported as unseen."}
      </p>
      <figcaption className="viz-caption">
        In masking experiments, early sensory responses grow smoothly with the strength of a stimulus, but late activity
        across frontal and parietal areas is all or none. On the global workspace theory, this ignition is the moment a
        representation becomes globally available to report, memory and reasoning, and so becomes conscious. The model
        here is a toy with a sharp threshold.
      </figcaption>
    </figure>
  );
}
