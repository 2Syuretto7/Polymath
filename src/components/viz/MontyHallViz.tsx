"use client";

import { useState } from "react";

type Tally = { stay: [number, number]; swap: [number, number] };

/** The Monty Hall problem: play single games, or simulate many, and compare staying with switching. */
export function MontyHallViz() {
  const [car, setCar] = useState(() => 1);
  const [pick, setPick] = useState<number | null>(null);
  const [opened, setOpened] = useState<number | null>(null);
  const [final, setFinal] = useState<number | null>(null);
  const [t, setT] = useState<Tally>({ stay: [0, 0], swap: [0, 0] });
  const newGame = () => { setPick(null); setOpened(null); setFinal(null); };
  const choose = (d: number) => {
    if (pick !== null) return;
    const c = Math.floor(Math.random() * 3);
    setCar(c);
    setPick(d);
    const goats = [0, 1, 2].filter((x) => x !== d && x !== c);
    setOpened(goats[Math.floor(Math.random() * goats.length)]);
  };
  const decide = (swap: boolean) => {
    if (pick === null || opened === null || final !== null) return;
    const f = swap ? [0, 1, 2].find((x) => x !== pick && x !== opened)! : pick;
    setFinal(f);
    const key = swap ? "swap" : "stay";
    const cur = t[key];
    setT({ ...t, [key]: [cur[0] + (f === car ? 1 : 0), cur[1] + 1] });
  };
  const simulate = () => {
    const s: Tally = { stay: [...t.stay] as [number, number], swap: [...t.swap] as [number, number] };
    for (let k = 0; k < 1000; k++) {
      const c = Math.floor(Math.random() * 3), p = Math.floor(Math.random() * 3);
      s.stay[0] += p === c ? 1 : 0; s.stay[1]++;
      s.swap[0] += p !== c ? 1 : 0; s.swap[1]++;
    }
    setT(s);
  };
  const rate = (x: [number, number]) => (x[1] ? `${x[0]} of ${x[1]} won (${((100 * x[0]) / x[1]).toFixed(1)}%)` : "no games yet");
  const msg = pick === null ? "Choose a door." : final === null ? `You chose door ${pick + 1}. The host, who knows where the car is, opens door ${opened! + 1} to show a goat. Stay or switch?` : final === car ? `Door ${final + 1}: the car. You win.` : `Door ${final + 1}: a goat. The car was behind door ${car + 1}.`;
  return (
    <figure className="viz">
      <div style={{ display: "flex", gap: 12, justifyContent: "center", margin: "6px 0" }}>
        {[0, 1, 2].map((d) => {
          const shown = d === opened || final !== null;
          const label = shown ? (d === car ? "car" : "goat") : `door ${d + 1}`;
          const on = d === pick || d === final;
          return (
            <button key={d} type="button" onClick={() => choose(d)} aria-pressed={on} className="btn"
              style={{ width: 100, height: 120, border: `2px solid ${on ? "var(--accent)" : "var(--border-strong)"}`, background: shown ? (d === car ? "var(--accent-soft)" : "var(--bg-subtle)") : "var(--bg)", color: "var(--text)", borderRadius: 6 }}>
              {label}
            </button>
          );
        })}
      </div>
      <p style={{ margin: "6px 0", textAlign: "center" }}>{msg}</p>
      <div className="viz-controls" style={{ justifyContent: "center" }}>
        <button type="button" className="btn" onClick={() => decide(false)} disabled={opened === null || final !== null}>Stay</button>
        <button type="button" className="btn" onClick={() => decide(true)} disabled={opened === null || final !== null}>Switch</button>
        <button type="button" className="btn" onClick={newGame}>New game</button>
        <button type="button" className="btn btn-primary" onClick={simulate}>Play 1000 games each way</button>
      </div>
      <table className="table mono" style={{ width: "auto", margin: "8px auto 0" }}>
        <tbody>
          <tr><td>always stay</td><td>{rate(t.stay)}</td></tr>
          <tr><td>always switch</td><td>{rate(t.swap)}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        Staying wins exactly when your first pick was right, which has probability 1/3. Switching wins exactly when it was wrong, probability 2/3, because the host must avoid the car and so his choice carries information. Conditioning on what the host does, not just on what you see, is the whole problem.
      </figcaption>
    </figure>
  );
}
