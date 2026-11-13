"use client";

import { useState } from "react";

type Case = { name: string; story: string; means: boolean; redirect: boolean; doing: string; survey: string };
const CASES: Case[] = [
  { name: "switch", story: "A runaway trolley will kill five. You can pull a lever to send it onto a side track, where it will kill one.", means: false, redirect: true, doing: "You kill the one, by redirecting a threat that already exists.", survey: "about 85%" },
  { name: "footbridge", story: "You stand on a bridge over the track beside a large stranger. Pushing them off would stop the trolley before it reaches the five.", means: true, redirect: false, doing: "You kill the one, by bringing a new threat to them.", survey: "about 12%" },
  { name: "loop", story: "The side track loops back to the main track. The one person on the loop is heavy enough to stop the trolley; without them it would circle round and kill the five.", means: true, redirect: true, doing: "You kill the one, by redirecting the threat, but you need their body to stop it.", survey: "about 56%" },
  { name: "transplant", story: "A surgeon could kill one healthy visitor and use their organs to save five patients.", means: true, redirect: false, doing: "The surgeon kills the one, starting a new harmful sequence.", survey: "very few" },
];

/** Four trolley-style cases, compared on whether the one is used as a means and whether an existing threat is redirected. */
export function TrackCasesViz() {
  const [ci, setCi] = useState(0);
  const [act, setAct] = useState(false);
  const C = CASES[ci];
  const W = 520, H = 190;
  const person = (x: number, y: number, k: string, dead: boolean) => (
    <g key={k}><circle cx={x} cy={y - 14} r={6} style={{ fill: dead ? "var(--danger)" : "var(--text)" }} /><line x1={x} y1={y - 8} x2={x} y2={y + 4} style={{ stroke: dead ? "var(--danger)" : "var(--text)", strokeWidth: 3 }} /></g>
  );
  const five = (dead: boolean) => [0, 1, 2, 3, 4].map((k) => person(440 + k * 14, 70, `f${k}`, dead));
  const trolleyX = act ? (C.name === "footbridge" ? 300 : C.name === "loop" ? 300 : 300) : 380;
  let scene: React.ReactNode;
  if (C.name === "transplant") {
    scene = (
      <g>
        <text x={W / 2} y={30} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 12 }}>a hospital: one healthy visitor, five patients needing organs</text>
        {person(120, 120, "v", act)}
        {[0, 1, 2, 3, 4].map((k) => person(300 + k * 40, 120, `p${k}`, !act))}
      </g>
    );
  } else {
    const side = C.name === "loop"
      ? "M 230 70 Q 280 150 360 150 Q 420 150 410 70"
      : "M 230 70 Q 280 150 380 150 L 500 150";
    scene = (
      <g>
        <line x1={20} y1={70} x2={510} y2={70} style={{ stroke: "var(--text-muted)", strokeWidth: 3 }} />
        {C.name !== "footbridge" && <path d={side} style={{ fill: "none", stroke: "var(--text-muted)", strokeWidth: 3 }} />}
        {C.name === "footbridge" && <g><rect x={300} y={22} width={70} height={8} style={{ fill: "var(--text-faint)" }} /><line x1={305} y1={30} x2={305} y2={66} style={{ stroke: "var(--text-faint)", strokeWidth: 3 }} /><line x1={365} y1={30} x2={365} y2={66} style={{ stroke: "var(--text-faint)", strokeWidth: 3 }} /></g>}
        <rect x={act && C.name !== "footbridge" ? 300 : trolleyX - 60} y={act && C.name !== "footbridge" ? 130 : 52} width={40} height={18} rx={3} style={{ fill: "var(--accent)" }} />
        <text x={50} y={60} style={{ fill: "var(--text-muted)", fontSize: 11 }}>trolley →</text>
        {five(!act)}
        {C.name === "footbridge" ? person(act ? 335 : 335, act ? 70 : 22, "one", act) : person(C.name === "loop" ? 360 : 450, 150, "one", act)}
      </g>
    );
  }
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Case">
        {CASES.map((c, i) => <button key={c.name} type="button" aria-pressed={ci === i} className={ci === i ? "seg is-on" : "seg"} onClick={() => { setCi(i); setAct(false); }}>{c.name}</button>)}
      </div>
      <p style={{ margin: "8px 0", fontSize: 15 }}>{C.story}</p>
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={`The ${C.name} case`} style={{ width: "100%", display: "block" }}>{scene}</svg>
      <div className="viz-controls">
        <button type="button" className={act ? "btn" : "btn btn-primary"} onClick={() => setAct(!act)}>{act ? "Undo" : C.name === "transplant" ? "Operate" : C.name === "footbridge" ? "Push" : "Pull the lever"}</button>
      </div>
      <table className="table" style={{ marginTop: 8, fontSize: 14 }}>
        <tbody>
          <tr><th style={{ textTransform: "none" }}>Is the one used as a means?</th><td>{C.means ? "Yes: the plan needs the one to be hit." : "No: if the one escaped, the five would still be saved."}</td></tr>
          <tr><th style={{ textTransform: "none" }}>Is an existing threat redirected?</th><td>{C.redirect ? "Yes" : "No"}</td></tr>
          <tr><th style={{ textTransform: "none" }}>Doing or allowing?</th><td>{C.doing}</td></tr>
          <tr><th style={{ textTransform: "none" }}>Share of people judging it permissible</th><td>{C.survey}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Red marks who dies, given the choice shown. In every case acting means one dies and five live. Survey figures are rough, from Marc Hauser and colleagues&rsquo;
        large online studies; the loop case splits opinion, which matters because double effect seems to forbid it.
      </figcaption>
    </figure>
  );
}
