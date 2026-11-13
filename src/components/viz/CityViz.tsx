"use client";

import { useState } from "react";

type City = { aim: string; name: string; kind: "virtuous" | "ignorant" | "other"; desc: string };

const CITIES: City[] = [
  { aim: "true happiness", name: "the virtuous city", kind: "virtuous", desc: "Its citizens cooperate to reach the happiness that comes from knowing and doing the good. Its first ruler is a philosopher who is also a prophet, able to put truths into images the many can follow." },
  { aim: "bare necessities", name: "the city of necessity", kind: "ignorant", desc: "People cooperate only to get food, drink, shelter and clothing. Once these are secured, they know of nothing higher to aim at." },
  { aim: "wealth", name: "the vile city", kind: "ignorant", desc: "Wealth is treated as the goal of life, pursued for its own sake beyond any need." },
  { aim: "pleasure", name: "the base city", kind: "ignorant", desc: "Citizens cooperate for the enjoyment of food, drink and sex, and for play." },
  { aim: "honour", name: "the timocratic city", kind: "ignorant", desc: "Citizens seek to be praised and honoured, by one another and by other cities. Al-Farabi thinks it the best of the ignorant cities." },
  { aim: "domination", name: "the despotic city", kind: "ignorant", desc: "Citizens aim to conquer and subdue others, and value victory for its own sake." },
  { aim: "freedom to do as one likes", name: "the democratic city", kind: "ignorant", desc: "Everyone is free to pursue whatever they wish. It contains every kind of person and so, by accident, may also contain some virtuous people." },
  { aim: "true happiness, known but rejected", name: "the immoral city", kind: "other", desc: "Its citizens know what happiness is, as the virtuous city does, but act like an ignorant city. Al-Farabi also describes the city that changes its views, and the city that errs, which has false beliefs about happiness." },
];

/** Al-Farabi's catalogue of cities, sorted by what the citizens cooperate to achieve. */
export function CityViz() {
  const [k, setK] = useState(0);
  const c = CITIES[k];
  return (
    <figure className="viz">
      <p className="mono-meta" style={{ textTransform: "none", margin: "0 0 8px" }}>what do the citizens cooperate to achieve?</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {CITIES.map((x, i) => (
          <button key={x.name} type="button" className={i === k ? "viz-chip is-on" : "viz-chip"} aria-pressed={i === k} style={{ cursor: "pointer" }} onClick={() => setK(i)}>{x.aim}</button>
        ))}
      </div>
      <div style={{ marginTop: 14, padding: "12px 14px", border: "1px solid var(--border)", borderRadius: 8, background: c.kind === "virtuous" ? "var(--accent-soft)" : "var(--bg-subtle)" }}>
        <p style={{ margin: 0, fontFamily: "var(--font-serif)", fontSize: 18 }}>{c.name}</p>
        <p className="mono-meta" style={{ textTransform: "none", margin: "2px 0 8px" }}>
          {c.kind === "virtuous" ? "the city that knows true happiness and pursues it" : c.kind === "ignorant" ? "one of the ignorant cities: they do not know true happiness" : "a city that is neither virtuous nor simply ignorant"}
        </p>
        <p style={{ margin: 0 }}>{c.desc}</p>
      </div>
      <figcaption className="viz-caption">
        The aims of the ignorant cities are real goods, mistaken for the highest good. Al-Farabi, like Plato, judges a city
        by what it aims at, and he adapts Plato&rsquo;s list of bad constitutions in the Republic.
      </figcaption>
    </figure>
  );
}
