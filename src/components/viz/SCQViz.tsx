"use client";

import { useState } from "react";

const ANSWERS = ["nihilism", "universalism", "contact", "organicism"];
const NAMES = ["a", "b", "c", "d"];

/** The special composition question on four blocks: which pluralities compose something, by each answer. */
export function SCQViz() {
  const [ans, setAns] = useState(2);
  const [touch, setTouch] = useState([true, false, true]);
  const [life, setLife] = useState(false);
  const subsets: number[][] = [];
  for (let m = 1; m < 16; m++) {
    const s = [0, 1, 2, 3].filter((i) => m & (1 << i));
    if (s.length >= 2) subsets.push(s);
  }
  const connected = (s: number[]) => s.every((v, i) => i === 0 || (v === s[i - 1] + 1 && touch[v - 1]));
  const comp = subsets.filter((s) => (ans === 1 ? true : ans === 0 ? false : ans === 2 ? connected(s) : life && s.length === 4));
  const gapX = (i: number) => (touch[i] ? 0 : 30);
  const xs = [0, 1, 2, 3].map((i) => 60 + i * 90 + [0, 1, 2].slice(0, i).reduce((a, g) => a + gapX(g), 0));
  const toggle = (i: number) => setTouch(touch.map((v, j) => (j === i ? !v : v)));
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="answer to the special composition question">
        {ANSWERS.map((a, i) => <button key={a} type="button" aria-pressed={ans === i} className={ans === i ? "seg is-on" : "seg"} onClick={() => setAns(i)}>{a}</button>)}
      </div>
      <div className="viz-controls">
        {[0, 1, 2].map((i) => <button key={i} type="button" className="btn btn-ghost" onClick={() => toggle(i)}>{NAMES[i]}–{NAMES[i + 1]}: {touch[i] ? "touching" : "apart"}</button>)}
        <label><input type="checkbox" checked={life} onChange={(e) => setLife(e.target.checked)} aria-label="caught up in a life" /> their activity constitutes a life</label>
      </div>
      <svg viewBox="0 0 520 120" role="img" aria-label="Four blocks in a row" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {xs.map((x, i) => (
          <g key={i}>
            <rect x={x} y={30} width={90} height={50} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
            <text x={x + 45} y={60} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 14 }}>{NAMES[i]}</text>
          </g>
        ))}
        <text x={260} y={108} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>
          {ans === 3 ? (life ? "a, b, c and d are the cells of one organism" : "no life: under organicism these are just simples arranged blockwise") : "use the buttons to bring blocks into contact or pull them apart"}
        </text>
      </svg>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700 }}>
        Composite objects: {comp.length}{comp.length ? ` (${comp.map((s) => s.map((i) => NAMES[i]).join("")).join(", ")})` : ""}. Of 11 pluralities with two or more members.
      </p>
      <figcaption className="viz-caption">
        Van Inwagen&rsquo;s special composition question asks: when do some things compose something? Nihilism says
        never, universalism says always, the contact answer says when they are in contact, and van Inwagen&rsquo;s
        organicism says when their activity constitutes a life.
      </figcaption>
    </figure>
  );
}
