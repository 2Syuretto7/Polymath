"use client";

import { useState } from "react";

const IND = ["a", "b", "c"];

/** Two worlds with varying domains: the actual world w sees itself and v. Check the Barcan formula and its converse at w. */
export function BarcanDomainViz() {
  const [dom, setDom] = useState([[true, true, false], [true, true, true]]);
  const [F, setF] = useState([[false, false, false], [false, false, true]]);
  const worlds = [0, 1];
  // actualist quantifier: ∃x ranges over the domain of the world of evaluation
  const someF = (w: number) => IND.some((_, i) => dom[w][i] && F[w][i]);
  const diaSomeF = worlds.some((w) => someF(w));
  const someDiaF = IND.some((_, i) => dom[0][i] && worlds.some((w) => F[w][i]));
  const barcan = !diaSomeF || someDiaF;
  const converse = !someDiaF || diaSomeF;
  const grows = IND.every((_, i) => !dom[0][i] || dom[1][i]);
  const shrinks = IND.every((_, i) => !dom[1][i] || dom[0][i]);
  const tog = (arr: boolean[][], set: (x: boolean[][]) => void, w: number, i: number) => set(arr.map((row, a) => row.map((x, b) => (a === w && b === i ? !x : x))));
  const yes = (b: boolean) => <span style={{ color: b ? "var(--accent)" : "var(--danger)", fontWeight: 700 }}>{b ? "true" : "false"}</span>;
  return (
    <figure className="viz">
      {worlds.map((w) => (
        <div key={w} className="viz-controls" style={{ flexWrap: "wrap" }}>
          <span style={{ fontSize: 13, minWidth: 150 }}>{w === 0 ? "w (actual)" : "v (possible)"}: exists</span>
          {IND.map((x, i) => <button key={x} type="button" aria-pressed={dom[w][i]} className={dom[w][i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => tog(dom, setDom, w, i)}>{x}</button>)}
          <span style={{ fontSize: 13, marginLeft: 12 }}>is F</span>
          {IND.map((x, i) => <button key={x} type="button" aria-pressed={F[w][i]} className={F[w][i] ? "btn btn-primary" : "btn btn-ghost"} onClick={() => tog(F, setF, w, i)}>{x}</button>)}
        </div>
      ))}
      <svg viewBox="0 0 520 110" role="img" aria-label="The domains of the two worlds" style={{ width: "100%", display: "block", marginTop: 8 }}>
        {worlds.map((w) => (
          <g key={w}>
            <ellipse cx={130 + w * 260} cy={55} rx={110} ry={44} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
            <text x={130 + w * 260} y={24} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>{w === 0 ? "w" : "v"}</text>
            {IND.map((x, i) => dom[w][i] && (
              <g key={x}>
                <circle cx={70 + w * 260 + i * 60} cy={62} r={15} style={{ fill: F[w][i] ? "var(--accent-soft)" : "var(--bg)", stroke: F[w][i] ? "var(--accent)" : "var(--border-strong)", strokeWidth: 2 }} />
                <text x={70 + w * 260 + i * 60} y={66} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12, fontWeight: 700 }}>{x}{F[w][i] ? ": F" : ""}</text>
              </g>
            ))}
          </g>
        ))}
        <text x={260} y={60} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 16 }}>→</text>
      </svg>
      <div className="mono" style={{ fontSize: 13, display: "grid", gap: 3 }}>
        <div>at w: ◇∃xFx is {yes(diaSomeF)}; ∃x◇Fx is {yes(someDiaF)}</div>
        <div>Barcan formula ◇∃xFx → ∃x◇Fx: {yes(barcan)}</div>
        <div>converse ∃x◇Fx → ◇∃xFx: {yes(converse)}</div>
        <div style={{ color: "var(--text-muted)" }}>domains from w to v: {grows && shrinks ? "the same" : grows ? "grow" : shrinks ? "shrink" : "neither grow nor shrink"}</div>
      </div>
      <figcaption className="viz-caption">
        Quantifiers range over the domain of the world where they are evaluated. A thing is F at a world whether or not it
        exists there, so that the converse can be tested. The Barcan formula fails when new things appear at v; its
        converse fails when things at w are F only at worlds where they do not exist.
      </figcaption>
    </figure>
  );
}
