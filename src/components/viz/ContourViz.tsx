"use client";

import { useState } from "react";

/** Kivy's contour theory: a melody's tempo, register, direction and step size resemble the bearing of a person in some mood. */
export function ContourViz() {
  const [tempo, setTempo] = useState(1);
  const [reg, setReg] = useState(1);
  const [dir, setDir] = useState(-1);
  const [step, setStep] = useState(0);
  const n = tempo === 0 ? 6 : tempo === 1 ? 9 : 14;
  const notes = Array.from({ length: n }, (_, i) => {
    const base = reg === 0 ? 3 : reg === 1 ? 7 : 11;
    const drift = dir * i * (step === 0 ? 0.6 : 1.4) * (9 / n);
    const jag = step === 0 ? 0 : (i % 2 === 0 ? 1.5 : -1.5);
    return Math.max(0, Math.min(14, base + drift + jag));
  });
  const mood = (() => {
    if (tempo === 0 && dir < 0 && reg <= 1 && step === 0) return "sad: slow, low, falling, in small steps, like a person who droops and moves heavily";
    if (tempo === 2 && dir > 0 && reg >= 1 && step === 1) return "exuberant: fast, high, rising, leaping, like a person who jumps for joy";
    if (tempo === 2 && step === 1) return "agitated: fast and jagged, like a restless, anxious person";
    if (tempo === 0 && step === 0 && dir >= 0) return "calm or serene: slow, smooth, steady";
    if (tempo >= 1 && dir > 0) return "hopeful or bright: moving upward with some energy";
    return "mixed: no single human bearing is clearly suggested";
  })();
  const W = 460, X0 = 30;
  const seg = (label: string, val: number, set: (v: number) => void, opts: string[], vals: number[]) => (
    <div className="segmented" role="group" aria-label={label} style={{ marginTop: 4 }}>
      {opts.map((o, i) => <button key={o} type="button" aria-pressed={val === vals[i]} className={val === vals[i] ? "seg is-on" : "seg"} onClick={() => set(vals[i])}>{o}</button>)}
    </div>
  );
  return (
    <figure className="viz">
      {seg("tempo", tempo, setTempo, ["slow", "moderate", "fast"], [0, 1, 2])}
      {seg("register", reg, setReg, ["low", "middle", "high"], [0, 1, 2])}
      {seg("direction", dir, setDir, ["falling", "level", "rising"], [-1, 0, 1])}
      {seg("steps", step, setStep, ["small steps", "leaps"], [0, 1])}
      <svg viewBox="0 0 520 170" role="img" aria-label="The contour of a melody" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {[0, 1, 2, 3, 4].map((i) => <line key={i} x1={X0} y1={40 + i * 20} x2={X0 + W} y2={40 + i * 20} style={{ stroke: "var(--border)" }} />)}
        <polyline points={notes.map((p, i) => `${X0 + 20 + (i * (W - 40)) / Math.max(1, n - 1)},${150 - p * 8}`).join(" ")} style={{ fill: "none", stroke: "var(--accent)", strokeWidth: 1.5, strokeDasharray: "3 3" }} />
        {notes.map((p, i) => <ellipse key={i} cx={X0 + 20 + (i * (W - 40)) / Math.max(1, n - 1)} cy={150 - p * 8} rx={7} ry={5} style={{ fill: "var(--accent)" }} />)}
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>Heard as {mood}.</p>
      <figcaption className="viz-caption">
        Peter Kivy argued that music is expressive of sadness not because it expresses the composer&rsquo;s feelings or
        arouses ours, but because its contour resembles the voice and bearing of a sad person. The rules here are a rough
        sketch of that idea, not a theory of any real music.
      </figcaption>
    </figure>
  );
}
