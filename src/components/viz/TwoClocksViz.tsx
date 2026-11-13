"use client";

import { useState } from "react";

type Mode = "influence" | "occasion" | "harmony";
const MODES: { key: Mode; name: string; text: string }[] = [
  { key: "influence", name: "influence", text: "The clocks are joined, so that one drives the other. This is the common view that mind and body act on each other, which Leibniz thought unintelligible: nothing can pass from one substance into another." },
  { key: "occasion", name: "constant assistance", text: "A skilled clockmaker watches both and adjusts one to the other at every moment. This is Malebranche's occasionalism: God moves my arm on the occasion of my will. Leibniz called it a perpetual miracle, unworthy of God." },
  { key: "harmony", name: "pre-established harmony", text: "The clocks were made so perfectly at the start that they keep time together for ever, each by its own mechanism. This is Leibniz's view: God created each substance so that its states unfold in agreement with all the others." },
];

const R = 60;

function Clock({ cx, cy, ang, label }: { cx: number; cy: number; ang: number; label: string }) {
  const a = (ang - 90) * (Math.PI / 180);
  return (
    <g>
      <circle cx={cx} cy={cy} r={R} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)", strokeWidth: 2 }} />
      {Array.from({ length: 12 }, (_, i) => { const t = (i * 30 - 90) * (Math.PI / 180); return <line key={i} x1={cx + (R - 8) * Math.cos(t)} y1={cy + (R - 8) * Math.sin(t)} x2={cx + (R - 2) * Math.cos(t)} y2={cy + (R - 2) * Math.sin(t)} style={{ stroke: "var(--text-faint)" }} />; })}
      <line x1={cx} y1={cy} x2={cx + (R - 14) * Math.cos(a)} y2={cy + (R - 14) * Math.sin(a)} style={{ stroke: "var(--accent)", strokeWidth: 3, strokeLinecap: "round" }} />
      <circle cx={cx} cy={cy} r={4} style={{ fill: "var(--accent)" }} />
      <text x={cx} y={cy + R + 20} textAnchor="middle" style={{ fontSize: 12.5, fill: "var(--text-muted)" }}>{label}</text>
    </g>
  );
}

/** Leibniz's two clocks: three ways two substances, such as mind and body, might keep in agreement. */
export function TwoClocksViz() {
  const [m, setM] = useState<Mode>("harmony");
  const [t, setT] = useState(5);
  const mode = MODES.find((x) => x.key === m)!;
  const ang = t * 30;
  const adjustments = m === "occasion" ? t * 4 : 0;

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Hypothesis">
        {MODES.map((x) => (
          <button key={x.key} type="button" className={x.key === m ? "seg is-on" : "seg"} aria-pressed={x.key === m} onClick={() => setM(x.key)}>{x.name}</button>
        ))}
      </div>
      <svg viewBox="0 0 440 200" role="img" aria-label={`Two clocks under the hypothesis of ${mode.name}`} style={{ width: "100%", maxWidth: 520, display: "block", margin: "12px auto 0" }}>
        {m === "influence" && <line x1={160} y1={90} x2={280} y2={90} style={{ stroke: "var(--danger)", strokeWidth: 5 }} />}
        {m === "occasion" && (
          <>
            <path d="M220,20 L200,70 M220,20 L240,70" style={{ stroke: "var(--danger)", strokeWidth: 2.5, fill: "none" }} />
            <circle cx={220} cy={16} r={8} style={{ fill: "var(--danger)" }} />
          </>
        )}
        <Clock cx={100} cy={90} ang={ang} label="the soul" />
        <Clock cx={340} cy={90} ang={ang} label="the body" />
      </svg>
      <div className="viz-sliders">
        <label><span>time passed: <span className="mono">{t} hours</span></span>
          <input type="range" min={0} max={12} value={t} onChange={(e) => setT(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>do the clocks agree?</td><td>yes</td></tr>
          <tr><td>does anything pass between them?</td><td>{m === "influence" ? "yes: the linkage" : "no"}</td></tr>
          <tr><td>adjustments by the clockmaker so far</td><td className="mono">{m === "occasion" ? `${adjustments}, and counting` : m === "harmony" ? "none after the making" : "none"}</td></tr>
        </tbody>
      </table>
      <p className="tagger-why" style={{ marginTop: 8 }}>{mode.text}</p>
      <figcaption className="viz-caption" aria-live="polite">
        All three hypotheses explain why the clocks agree. Leibniz chose the one that needs neither an impossible influence nor
        a miracle at every moment, only a perfect workman at the start.
      </figcaption>
    </figure>
  );
}
