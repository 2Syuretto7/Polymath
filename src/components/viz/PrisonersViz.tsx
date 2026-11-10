"use client";

import { useState } from "react";

type Move = "C" | "D";
type Strat = { name: string; play: (mine: Move[], theirs: Move[]) => Move; gist: string };

const STRATS: Strat[] = [
  { name: "Always cooperate", play: () => "C", gist: "keeps every bargain" },
  { name: "Always cheat", play: () => "D", gist: "breaks every bargain" },
  { name: "Tit for tat", play: (_, t) => (t.length ? t[t.length - 1] : "C"), gist: "starts by cooperating, then copies the other's last move" },
  { name: "Grudge", play: (_, t) => (t.includes("D") ? "D" : "C"), gist: "cooperates until cheated once, then never again" },
];

// payoffs: both cooperate 3 each; both cheat 1 each; cheat a cooperator 5 against 0
const PAY: Record<string, [number, number]> = { CC: [3, 3], CD: [0, 5], DC: [5, 0], DD: [1, 1] };

function play(a: Strat, b: Strat, rounds: number) {
  const ma: Move[] = [], mb: Move[] = [];
  let sa = 0, sb = 0;
  for (let i = 0; i < rounds; i++) {
    const x = a.play(ma, mb), y = b.play(mb, ma);
    ma.push(x); mb.push(y);
    const [p, q] = PAY[x + y];
    sa += p; sb += q;
  }
  return { ma, mb, sa, sb };
}

/** The prisoner's dilemma, played once or repeated: why it can pay to keep bargains. */
export function PrisonersViz() {
  const [a, setA] = useState(2);
  const [b, setB] = useState(1);
  const [rounds, setRounds] = useState(10);
  const g = play(STRATS[a], STRATS[b], rounds);

  // tournament: each strategy against every strategy, including itself
  const totals = STRATS.map((s) => STRATS.reduce((acc, t) => acc + play(s, t, rounds).sa, 0));
  const best = Math.max(...totals);

  const row = (label: string, pick: number, set: (i: number) => void) => (
    <div className="viz-controls" style={{ flexWrap: "wrap" }}>
      <span className="viz-stepper-label" style={{ minWidth: 40 }}>{label}</span>
      {STRATS.map((s, i) => (
        <button key={s.name} type="button" className={i === pick ? "btn btn-primary" : "btn"} aria-pressed={i === pick} onClick={() => set(i)}>{s.name}</button>
      ))}
    </div>
  );
  const cell = (m: Move) => <span className={`mono viz-verdict viz-verdict-${m === "C" ? "info" : "wrong"}`}>{m === "C" ? "keep" : "cheat"}</span>;

  return (
    <figure className="viz">
      {row("You", a, setA)}
      {row("Them", b, setB)}
      <div className="viz-controls">
        <span className="viz-stepper"><span className="viz-stepper-label">rounds</span>
          <button type="button" className="btn" onClick={() => setRounds(Math.max(1, rounds - 1))} disabled={rounds <= 1} aria-label="Fewer rounds">−</button>
          <span className="mono viz-stepper-value">{rounds}</span>
          <button type="button" className="btn" onClick={() => setRounds(Math.min(20, rounds + 1))} disabled={rounds >= 20} aria-label="More rounds">+</button>
        </span>
      </div>
      <div style={{ overflowX: "auto", marginTop: 12, marginBottom: 8 }}>
      <table className="table" style={{ margin: 0 }}>
        <thead><tr><th>Round</th>{g.ma.slice(0, 6).map((_, i) => <th key={i}>{i + 1}</th>)}{rounds > 6 && <th>&hellip;</th>}<th>Total</th></tr></thead>
        <tbody>
          <tr><td>You</td>{g.ma.slice(0, 6).map((m, i) => <td key={i}>{cell(m)}</td>)}{rounds > 6 && <td />}<td className="mono"><strong>{g.sa}</strong></td></tr>
          <tr><td>Them</td>{g.mb.slice(0, 6).map((m, i) => <td key={i}>{cell(m)}</td>)}{rounds > 6 && <td />}<td className="mono"><strong>{g.sb}</strong></td></tr>
        </tbody>
      </table>
      </div>
      <p className="viz-verdict viz-verdict-right" style={{ margin: "8px 0 0" }}>
        Each round: both keep the bargain, 3 points each; both cheat, 1 each; one cheats a keeper, 5 to the cheat and 0 to the keeper.
        Over {rounds} {rounds === 1 ? "round" : "rounds"} against all four strategies:{" "}
        {STRATS.map((s, i) => <span key={s.name}>{i ? ", " : ""}{s.name.toLowerCase()} {totals[i]}{totals[i] === best ? " (best)" : ""}</span>)}.
      </p>
      <figcaption className="viz-caption" aria-live="polite">
        {rounds === 1
          ? <>Played once, cheating always scores more, whatever the other does. So two self-interested people both cheat, and both do worse than if both had kept the bargain.</>
          : <>Repeated, the picture changes: a strategy that keeps bargains but punishes cheating does well, because cheats lose the benefit of future cooperation. Self-interest, taken over the long run, can recommend keeping one&rsquo;s word.</>}
      </figcaption>
    </figure>
  );
}
