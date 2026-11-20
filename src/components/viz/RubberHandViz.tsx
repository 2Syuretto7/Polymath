"use client";

import { useState } from "react";

/** A toy model of the rubber hand illusion: agreement rating from −3 to +3 against the delay between seen and felt strokes. */
export function rating(delayMs: number) {
  return Math.max(-3, 3 * (1 - delayMs / 400));
}

/** Proprioceptive drift towards the rubber hand, in centimetres, in the toy model. */
export function drift(delayMs: number) {
  return Math.max(0, 2.5 * (1 - delayMs / 400));
}

/** The rubber hand illusion: synchronous stroking makes a rubber hand feel like one's own. */
export function RubberHandViz() {
  const [d, setD] = useState(0);
  const r = rating(d), dr = drift(d);
  const on = r > 0;
  const X0 = 300, W = 220, Y0 = 120;
  const bx = (v: number) => X0 + ((v + 3) / 6) * W;
  return (
    <figure className="viz">
      <div className="viz-controls">
        <label>delay between seen and felt strokes = {d} ms <input type="range" min={0} max={800} step={100} value={d} onChange={(e) => setD(Number(e.target.value))} aria-label="delay" /></label>
      </div>
      <svg viewBox="0 0 540 200" role="img" aria-label="A hidden real hand, a visible rubber hand, and a rating of felt ownership" style={{ width: "100%", display: "block", marginTop: 8 }}>
        <rect x={20} y={60} width={110} height={90} rx={8} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={75} y={52} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>real hand, hidden</text>
        <rect x={150} y={60} width={110} height={90} rx={8} style={{ fill: on ? "var(--accent-soft)" : "var(--surface)", stroke: on ? "var(--accent)" : "var(--border-strong)" }} />
        <text x={205} y={52} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>rubber hand, seen</text>
        <text x={75} y={110} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>felt stroke</text>
        <text x={205} y={110} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>seen stroke</text>
        <line x1={75} y1={170} x2={75 + dr * 26} y2={170} style={{ stroke: "var(--danger)", strokeWidth: 3 }} />
        <circle cx={75 + dr * 26} cy={170} r={4} style={{ fill: "var(--danger)" }} />
        <text x={20} y={190} style={{ fill: "var(--danger)", fontSize: 10 }}>felt position drifts {dr.toFixed(1)} cm towards the rubber hand</text>
        <line x1={X0} y1={Y0} x2={X0 + W} y2={Y0} style={{ stroke: "var(--border-strong)" }} />
        {[-3, 0, 3].map((v) => <text key={v} x={bx(v)} y={Y0 + 18} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 10 }}>{String(v).replace("-", "−")}</text>)}
        <line x1={bx(0)} y1={Y0 - 30} x2={bx(0)} y2={Y0 + 6} style={{ stroke: "var(--border-strong)", strokeDasharray: "3 3" }} />
        <rect x={Math.min(bx(0), bx(r))} y={Y0 - 22} width={Math.abs(bx(r) - bx(0))} height={18} style={{ fill: on ? "var(--accent)" : "var(--text-faint)" }} />
        <text x={X0 + W / 2} y={Y0 - 34} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>&lsquo;it felt as if the rubber hand were my hand&rsquo;</text>
        <text x={X0 + W / 2} y={Y0 + 36} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>rating {r.toFixed(1).replace("-", "−")}</text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Delay {d} ms: {on ? "the illusion is reported; the rubber hand is felt as one’s own." : "no illusion; the rubber hand feels like an object."}
      </p>
      <figcaption className="viz-caption">
        In the rubber hand illusion, reported by Matthew Botvinick and Jonathan Cohen in 1998, a hidden real hand and a
        visible rubber one are stroked together. When the strokes are synchronous, many people feel the rubber hand as
        theirs, and their sense of where their own hand lies drifts towards it. Delays of a few hundred milliseconds weaken
        or abolish it. The numbers here are a toy model.
      </figcaption>
    </figure>
  );
}
