"use client";

import { useState } from "react";

const S = ["hold back", "invade"];
// base payoffs [row player, column player], indexed [row][col]
const BASE: [number, number][][] = [
  [[3, 3], [0, 4]],
  [[4, 0], [1, 1]],
];

/** Hobbes’s state of nature as a two-person game, with and without a sovereign who punishes invasion. */
export function StateOfNatureViz() {
  const [sov, setSov] = useState(false);
  const [P, setP] = useState(2);
  const tax = sov ? 0.5 : 0;
  const pen = sov ? P : 0;
  const pay = (r: number, c: number): [number, number] => [BASE[r][c][0] - tax - (r === 1 ? pen : 0), BASE[r][c][1] - tax - (c === 1 ? pen : 0)];
  const bestRow = (c: number) => { const a = pay(0, c)[0], b = pay(1, c)[0]; return a > b ? [0] : b > a ? [1] : [0, 1]; };
  const bestCol = (r: number) => { const a = pay(r, 0)[1], b = pay(r, 1)[1]; return a > b ? [0] : b > a ? [1] : [0, 1]; };
  const eq = [0, 1].flatMap((r) => [0, 1].filter((c) => bestRow(c).includes(r) && bestCol(r).includes(c)).map((c) => [r, c]));
  const isEq = (r: number, c: number) => eq.some(([a, b]) => a === r && b === c);
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Condition">
        {["state of nature", "with a sovereign"].map((l, i) => <button key={l} type="button" aria-pressed={sov === (i === 1)} className={sov === (i === 1) ? "seg is-on" : "seg"} onClick={() => setSov(i === 1)}>{l}</button>)}
      </div>
      {sov && (
        <div className="viz-sliders" style={{ marginTop: 8 }}>
          <label><span>penalty for invading: <span className="mono">{P}</span></span>
            <input type="range" min={0} max={4} step={0.5} value={P} onChange={(e) => setP(Number(e.target.value))} /></label>
        </div>
      )}
      <table className="table" style={{ marginTop: 10, textAlign: "center" }}>
        <thead>
          <tr><th style={{ textTransform: "none" }}></th>{S.map((s) => <th key={s} style={{ textTransform: "none", textAlign: "center" }}>neighbour: {s}</th>)}</tr>
        </thead>
        <tbody>
          {[0, 1].map((r) => (
            <tr key={r}>
              <th style={{ textTransform: "none" }}>you: {S[r]}</th>
              {[0, 1].map((c) => { const [a, b] = pay(r, c); return (
                <td key={c} className="mono" style={{ background: isEq(r, c) ? "var(--bg-subtle)" : undefined, outline: isEq(r, c) ? "2px solid var(--accent)" : undefined }}>
                  <span style={{ fontWeight: bestRow(c).includes(r) ? 700 : 400 }}>{a}</span>, <span style={{ fontWeight: bestCol(r).includes(c) ? 700 : 400 }}>{b}</span>
                </td>
              ); })}
            </tr>
          ))}
        </tbody>
      </table>
      <p style={{ margin: "8px 0 4px", fontSize: 15 }}>
        {eq.length === 1 && eq[0][0] === 1 && eq[0][1] === 1
          ? "Equilibrium: both invade. Whatever the other does, invading pays better, so each ends with 1, though both would prefer 3. Life is “solitary, poor, nasty, brutish, and short”."
          : eq.length === 1 && eq[0][0] === 0 && eq[0][1] === 0
            ? "Equilibrium: both hold back. The sovereign’s penalty makes invading a losing move, so each can safely keep the peace, even after paying for the sovereign."
            : "With this penalty both outcomes can be stable: peace is possible, but so is mutual invasion. Raise the penalty to make peace the only equilibrium."}
      </p>
      <figcaption className="viz-caption">
        In each cell your payoff comes first. Bold numbers are best replies to the other&rsquo;s choice; the outlined cell is an
        equilibrium. With a sovereign each person pays a tax of 0.5 to support it. The numbers are illustrative, chosen to fit
        Hobbes&rsquo;s description of competition and diffidence.
      </figcaption>
    </figure>
  );
}
