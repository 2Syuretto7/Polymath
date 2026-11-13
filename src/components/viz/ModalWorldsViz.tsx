"use client";

import { useState } from "react";

const FACTS = ["it rains in Pune", "Sachin plays cricket", "the Ganga reaches the sea", "2 + 2 = 4"];
const WORLDS = ["actual world", "world 2", "world 3", "world 4"];
const INIT = [
  [true, true, true, true],
  [false, true, true, true],
  [true, false, true, true],
  [false, false, false, true],
];

/** Possible worlds semantics: ‘necessarily p’ is true when p holds in every world, ‘possibly p’ when in some. */
export function ModalWorldsViz() {
  const [v, setV] = useState(INIT);
  const [fi, setFi] = useState(1);
  const flip = (w: number, f: number) => { if (f === 3) return; setV(v.map((row, i) => (i === w ? row.map((x, j) => (j === f ? !x : x)) : row))); };
  const col = v.map((row) => row[fi]);
  const nec = col.every(Boolean), pos = col.some(Boolean), act = col[0];
  return (
    <figure className="viz">
      <p style={{ margin: "0 0 8px" }}>Click a cell to change what is true in a world. Then choose a claim to evaluate.</p>
      <div style={{ overflowX: "auto" }}>
        <table className="table">
          <thead><tr><th style={{ textTransform: "none" }}></th>{WORLDS.map((w) => <th key={w} style={{ textTransform: "none" }}>{w}</th>)}</tr></thead>
          <tbody>
            {FACTS.map((f, j) => (
              <tr key={f} style={{ background: j === fi ? "var(--accent-soft)" : undefined }}>
                <td>{f}</td>
                {WORLDS.map((w, i) => (
                  <td key={w}>
                    <button type="button" className={v[i][j] ? "viz-chip is-on" : "viz-chip"} disabled={j === 3} aria-pressed={v[i][j]} onClick={() => flip(i, j)}>{v[i][j] ? "true" : "false"}</button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        {FACTS.map((f, j) => <button key={f} type="button" aria-pressed={fi === j} className={fi === j ? "seg is-on" : "seg"} onClick={() => setFi(j)}>{f}</button>)}
      </div>
      <div className="mono" style={{ display: "grid", gap: 4, marginTop: 10, fontSize: 14 }}>
        <div>actually, {FACTS[fi]}: <strong>{act ? "true" : "false"}</strong> (true at the actual world)</div>
        <div>possibly, {FACTS[fi]}: <strong>{pos ? "true" : "false"}</strong> (true at some world)</div>
        <div>necessarily, {FACTS[fi]}: <strong>{nec ? "true" : "false"}</strong> (true at every world)</div>
        <div>contingently, {FACTS[fi]}: <strong>{act && !nec ? "true" : "false"}</strong> (true, but false at some world)</div>
      </div>
      <figcaption className="viz-caption">
        The row for 2 + 2 = 4 is locked: there is no possible world where it fails, which is what makes it necessary. Make Sachin play cricket in every world and the claim becomes necessary in this model, but is that a genuine possibility you have ruled out? Deciding which worlds there are is where the philosophy begins.
      </figcaption>
    </figure>
  );
}
