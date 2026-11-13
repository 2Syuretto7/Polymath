"use client";

import { useState } from "react";

const MODES = [
  {
    name: "ancient",
    forces: "Hand tools, farming, small workshops",
    relations: "Slave-owner and slave; citizens and non-citizens",
    super: "City-state law and assemblies for citizens; civic religion; philosophy of leisure",
    tension: "Expansion depends on conquest and slave supply; when these fail, production stagnates.",
  },
  {
    name: "feudal",
    forces: "The hand-mill, plough teams, guild crafts",
    relations: "Lord and serf, bound by land and customary dues; masters and journeymen in guilds",
    super: "Law of personal obligation; the Church; ideas of a fixed God-given order",
    tension: "Trade and towns grow, and a merchant class needs free labour and free markets that feudal ties block.",
  },
  {
    name: "capitalist",
    forces: "The steam-mill, machine industry, world trade",
    relations: "Capitalist and wage-labourer: free to sell labour-power, and with nothing else to sell",
    super: "Law of property and contract; parliamentary politics; ideas of the free and equal individual",
    tension: "Production becomes social while ownership stays private; crises of overproduction, and a growing working class.",
  },
  {
    name: "socialist, as Marx foresaw it",
    forces: "Industry developed by capitalism, now planned in common",
    relations: "Common ownership of the means of production; no class living off others' labour",
    super: "Marx predicted the state would eventually wither away; he said little in detail.",
    tension: "Marx thought this would end the history of class struggle. Critics doubt the prediction, or point to the record of states that claimed his name.",
  },
];

/** Marx's sequence of modes of production: forces, relations, superstructure, and the tension that drives change. */
export function ModesViz() {
  const [i, setI] = useState(2);
  const m = MODES[i];
  const W = 520;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Mode of production">
        {MODES.map((x, j) => <button key={x.name} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{x.name}</button>)}
      </div>
      <svg viewBox={`0 0 ${W} 170`} role="img" aria-label="Base and superstructure" style={{ width: "100%", display: "block", marginTop: 10 }}>
        <polygon points={`60,${150} ${W - 60},150 ${W / 2 + 120},92 ${W / 2 - 120},92`} style={{ fill: "var(--accent-soft)", stroke: "var(--accent)" }} />
        <text x={W / 2} y={118} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>economic base</text>
        <text x={W / 2} y={136} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>forces and relations of production</text>
        <rect x={W / 2 - 110} y={20} width={220} height={58} rx={6} style={{ fill: "var(--bg-subtle)", stroke: "var(--border-strong)" }} />
        <text x={W / 2} y={44} textAnchor="middle" style={{ fill: "var(--text)", fontSize: 12 }}>superstructure</text>
        <text x={W / 2} y={62} textAnchor="middle" style={{ fill: "var(--text-muted)", fontSize: 11 }}>law, politics, religion, ideas</text>
        <line x1={W / 2} y1={92} x2={W / 2} y2={80} style={{ stroke: "var(--text-muted)", strokeWidth: 2 }} />
        <path d={`M ${W / 2} 78 l -5 7 h 10 z`} style={{ fill: "var(--text-muted)" }} />
      </svg>
      <table className="table">
        <tbody>
          <tr><td style={{ width: "26%" }}>forces of production</td><td>{m.forces}</td></tr>
          <tr><td>relations of production</td><td>{m.relations}</td></tr>
          <tr><td>superstructure</td><td>{m.super}</td></tr>
          <tr><td>the tension</td><td>{m.tension}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        &ldquo;The hand-mill gives you society with the feudal lord; the steam-mill society with the industrial capitalist.&rdquo; On Marx&rsquo;s view, growing forces of production come into conflict with existing relations, which then become fetters, and an era of social revolution begins. The summaries here are simplified, as Marx&rsquo;s own sketch was.
      </figcaption>
    </figure>
  );
}
