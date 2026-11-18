"use client";

import { useState } from "react";

type V = "good" | "partial" | "weak";
const THEO = ["free will", "soul-making", "natural law", "defeat in an afterlife"];
const EVILS: { name: string; cells: [V, string][] }[] = [
  { name: "a murder", cells: [
    ["good", "The murderer’s freedom is the price of a world with genuinely responsible agents (Augustine, Plantinga)."],
    ["partial", "Others can grow in compassion and justice in response, but the victim does not grow from it."],
    ["partial", "Stable laws let actions have predictable effects, including lethal ones, but this explains the means, not the choice."],
    ["partial", "The victim’s life may be made good on the whole, but that does not explain why the murder was permitted."],
  ] },
  { name: "an earthquake that kills thousands", cells: [
    ["weak", "No created agent chose it, unless one adds fallen angels, which few find credible as a theodicy."],
    ["partial", "A world with real dangers calls for courage, care and cooperation (Hick), but the scale seems more than needed."],
    ["good", "Plate tectonics also renews the land; regular laws make knowledge, planning and responsibility possible (Swinburne)."],
    ["partial", "The dead may be compensated, but that answers whether it is made good, not why it was allowed."],
  ] },
  { name: "animal suffering before humans existed", cells: [
    ["weak", "No free agents were there to cause it."],
    ["weak", "No persons were being formed by it: it served nobody’s moral growth."],
    ["partial", "Evolution by natural selection may require it, but why choose those laws over others?"],
    ["weak", "Unless animals have an afterlife, they are not compensated."],
  ] },
  { name: "a child tortured to death", cells: [
    ["partial", "It explains why the torturer is free, but not why God never intervenes, even once."],
    ["weak", "The victim is destroyed, not made. Ivan Karamazov: no future harmony is worth this child’s tears."],
    ["weak", "Natural laws played no special part; a human chose this."],
    ["good", "Marilyn Adams: only intimacy with God, a good beyond comparison, could defeat horrendous evils within the victim’s own life."],
  ] },
  { name: "ordinary hardship and setback", cells: [
    ["partial", "Some hardship comes from others’ choices; much does not."],
    ["good", "Virtues like patience, courage and perseverance can only be formed by facing difficulty (Irenaeus, Hick)."],
    ["good", "A world reliable enough to act in will sometimes frustrate us."],
    ["partial", "Small setbacks hardly need compensation, but they are certainly outweighed."],
  ] },
];
const COL: Record<V, string> = { good: "var(--accent)", partial: "var(--text-muted)", weak: "var(--danger)" };

/** Which theodicy best handles which kind of evil: a grid of verdicts, each with its reason. */
export function TheodicyGridViz() {
  const [sel, setSel] = useState<[number, number]>([1, 2]);
  const [r, c] = sel;
  const cell = EVILS[r].cells[c];
  return (
    <figure className="viz">
      <div style={{ overflowX: "auto" }}>
        <table style={{ borderCollapse: "collapse", fontSize: 13, width: "100%" }}>
          <thead>
            <tr>
              <th style={{ textAlign: "left", padding: 6, color: "var(--text-muted)", fontWeight: 400 }}>evil</th>
              {THEO.map((t) => <th key={t} style={{ padding: 6, fontWeight: 700 }}>{t}</th>)}
            </tr>
          </thead>
          <tbody>
            {EVILS.map((e, i) => (
              <tr key={e.name} style={{ borderTop: "1px solid var(--border)" }}>
                <td style={{ padding: 6 }}>{e.name}</td>
                {e.cells.map(([v], j) => (
                  <td key={j} style={{ padding: 4, textAlign: "center" }}>
                    <button type="button" className={i === r && j === c ? "btn btn-primary" : "btn btn-ghost"} style={{ color: i === r && j === c ? undefined : COL[v], minWidth: 72 }} onClick={() => setSel([i, j])} aria-label={`${THEO[j]} on ${e.name}: ${v}`}>
                      {v}
                    </button>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mono" style={{ fontSize: 13, fontWeight: 700, marginTop: 10 }}>
        {THEO[c]} on {EVILS[r].name}: <span style={{ color: COL[cell[0]] }}>{cell[0]}</span>. {cell[1]}
      </p>
      <figcaption className="viz-caption">
        Click any cell for the reason behind its verdict. No single theodicy handles every row well, which is why many
        theists combine them, and why some prefer a defence, or sceptical theism, to a theodicy at all. The verdicts are
        arguable: disagree with them.
      </figcaption>
    </figure>
  );
}
