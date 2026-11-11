"use client";

import { useState } from "react";

const MOVES = ["keep the bargain", "cheat"];
// PAY[you][other] = [your payoff, their payoff]
const PAY: [number, number][][] = [
  [[3, 3], [0, 5]],
  [[5, 0], [1, 1]],
];

/** Two traders who each care only for their own gain, and the outcome they reach. */
export function EgoismViz() {
  const [you, setYou] = useState<number | null>(null);
  const [other, setOther] = useState<number | null>(null);
  const done = you !== null && other !== null;
  const cell = done ? PAY[you][other] : null;

  let say = "Choose a move for each trader. Each gains more from cheating whatever the other does, yet both do better if both keep the bargain.";
  if (done && you === 1 && other === 1) say = "Both cheat, each doing what is best for themselves given anything the other might do, and each ends with 1. Both would have had 3 had they kept the bargain. This is the situation Hobbes thought made life without a state nasty, brutish and short.";
  else if (done && you === 0 && other === 0) say = "Both keep the bargain and each gets 3. But for a pure egoist this is unstable: whatever the other does, cheating pays you more. Only trust, a contract or an enforcer keeps it in place.";
  else if (done) say = "The cheat gets 5 and the trusting trader 0. Knowing this, a rational egoist will not trust, and will cheat too.";

  const box = (who: "you" | "other", val: number | null, set: (n: number) => void) => (
    <div>
      <p className="mono-meta" style={{ margin: "0 0 4px", textTransform: "none" }}>{who === "you" ? "You" : "The other trader"}</p>
      <div className="segmented" role="group" aria-label={who === "you" ? "Your move" : "Other trader's move"}>
        {MOVES.map((mv, i) => (
          <button key={mv} type="button" className={val === i ? "seg is-on" : "seg"} aria-pressed={val === i} onClick={() => set(i)}>{mv}</button>
        ))}
      </div>
    </div>
  );

  return (
    <figure className="viz">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {box("you", you, setYou)}
        {box("other", other, setOther)}
      </div>
      <table className="table" style={{ marginTop: 12 }}>
        <thead>
          <tr><th>your move, their move</th><th>you get</th><th>they get</th></tr>
        </thead>
        <tbody>
          {[0, 1].flatMap((i) => [0, 1].map((j) => {
            const on = you === i && other === j;
            return (
              <tr key={`${i}${j}`} style={{ background: on ? "var(--accent-soft)" : "transparent" }}>
                <td>{MOVES[i]}, {MOVES[j]}</td>
                <td className="mono">{PAY[i][j][0]}</td>
                <td className="mono">{PAY[i][j][1]}</td>
              </tr>
            );
          }))}
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="viz-chip" onClick={() => { setYou(1); setOther(1); }}>Both reason as egoists</button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        {cell ? `You get ${cell[0]}, they get ${cell[1]}. ${say}` : say}
      </figcaption>
    </figure>
  );
}
