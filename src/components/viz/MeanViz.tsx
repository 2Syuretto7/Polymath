"use client";

import { useState } from "react";

type Virtue = { name: string; sphere: string; low: string; high: string; lowVice: string; highVice: string; mean: number; note: string };
const VIRTUES: Virtue[] = [
  { name: "courage", sphere: "facing danger with confidence", low: "too little confidence, too much fear", high: "too much confidence, too little fear", lowVice: "cowardice", highVice: "rashness", mean: 60, note: "Aristotle thinks cowardice is further from courage than rashness is, so the mean sits nearer the excess. The rash person, he says, is often a pretender to courage." },
  { name: "temperance", sphere: "bodily pleasures of food, drink and sex", low: "too little interest in them", high: "too much", lowVice: "insensibility (so rare it has no common name)", highVice: "self-indulgence", mean: 40, note: "Most of us lean towards self-indulgence, so Aristotle advises dragging ourselves towards the other extreme, as people straighten bent timber." },
  { name: "generosity", sphere: "giving and taking money", low: "giving too little", high: "giving too much", lowVice: "stinginess", highVice: "wastefulness", mean: 50, note: "The generous person gives to the right people, the right amounts, at the right time, and with pleasure. The waster can be cured by age and poverty; stinginess, Aristotle thinks, is incurable." },
  { name: "mildness", sphere: "anger", low: "too little anger", high: "too much", lowVice: "a nameless deficiency: being a doormat", highVice: "irascibility", mean: 45, note: "Not getting angry at things one should be angry at is foolish and slavish, Aristotle says. The mild person is angry at the right things, with the right people, for the right length of time." },
  { name: "truthfulness", sphere: "presenting oneself to others", low: "claiming less than one has", high: "claiming more", lowVice: "self-deprecation", highVice: "boastfulness", mean: 50, note: "Aristotle's word for the deficiency is eironeia, the irony he associates with Socrates, whom he treats as the gracious version of it." },
  { name: "wit", sphere: "amusement in conversation", low: "too little joking", high: "too much", lowVice: "boorishness", highVice: "buffoonery", mean: 50, note: "The buffoon will do anything for a laugh; the boor contributes nothing and objects to everything. Tact is part of the virtue." },
];
const BAND = 9;

/** Slide a disposition from deficiency to excess and see where Aristotle's mean, and the two vices, lie. */
export function MeanViz() {
  const [k, setK] = useState(0);
  const [x, setX] = useState(15);
  const v = VIRTUES[k];
  const zone = x < v.mean - BAND ? "low" : x > v.mean + BAND ? "high" : "mean";

  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Virtue">
        {VIRTUES.map((w, i) => (
          <button key={w.name} type="button" className={i === k ? "seg is-on" : "seg"} aria-pressed={i === k} onClick={() => { setK(i); setX(15); }}>{w.name}</button>
        ))}
      </div>
      <p className="mono-meta" style={{ margin: "12px 0 6px", textTransform: "none" }}>sphere: {v.sphere}</p>
      <svg viewBox="0 0 600 90" role="img" aria-label={`Scale from ${v.lowVice} to ${v.highVice}, with ${v.name} in between`} style={{ width: "100%" }}>
        <rect x={10} y={30} width={580} height={22} rx={6} style={{ fill: "var(--bg-subtle)", stroke: "var(--border)" }} />
        <rect x={10 + 5.8 * (v.mean - BAND)} y={30} width={5.8 * 2 * BAND} height={22} style={{ fill: "var(--accent)", opacity: 0.35 }} />
        <text x={14} y={20} style={{ fill: "var(--text-muted)", fontSize: 13 }}>deficiency</text>
        <text x={586} y={20} textAnchor="end" style={{ fill: "var(--text-muted)", fontSize: 13 }}>excess</text>
        <text x={10 + 5.8 * v.mean} y={20} textAnchor="middle" style={{ fill: "var(--accent)", fontSize: 13, fontWeight: 600 }}>{v.name}</text>
        <line x1={10 + 5.8 * x} y1={24} x2={10 + 5.8 * x} y2={58} style={{ stroke: "var(--text)", strokeWidth: 3 }} />
        <text x={10 + 5.8 * x} y={76} textAnchor={x < 15 ? "start" : x > 85 ? "end" : "middle"} style={{ fill: "var(--text)", fontSize: 13 }}>you</text>
      </svg>
      <div className="viz-sliders">
        <label><span>your disposition</span>
          <input type="range" min={0} max={100} step={1} value={x} onChange={(e) => setX(Number(e.target.value))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td style={{ width: 130 }}>deficiency</td><td>{v.lowVice}: {v.low}</td></tr>
          <tr><td>the mean</td><td>{v.name}</td></tr>
          <tr><td>excess</td><td>{v.highVice}: {v.high}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption" aria-live="polite">
        {zone === "mean"
          ? `This is ${v.name}. ${v.note}`
          : `This is the vice of ${zone === "low" ? v.lowVice : v.highVice}. Move towards the shaded band, the mean. It is not the arithmetic middle of the scale, and in a real case it is fixed by what the situation calls for, as a person of practical wisdom would judge.`}
      </figcaption>
    </figure>
  );
}
