"use client";

import { useState } from "react";

const SHAPES = [
  {
    name: "sense-certainty",
    truth: "What I am immediately aware of: this, here, now.",
    test: "Write down the truth “Now is night” and read it again at noon.",
    fails: "The written truth has gone stale. What survives is not this night but the bare “now”, a universal that is equally day or night. Sense-certainty meant the richest particular and can only say the poorest universal.",
    next: "Take the object as a thing with many universal properties.",
  },
  {
    name: "perception",
    truth: "A thing: one object with many properties, such as this salt, white, cubical and tart.",
    test: "Ask what makes the thing one while its properties are many.",
    fails: "If the properties are independent, the thing dissolves into a mere “also”; if the thing is a unity, the many properties must come from my senses. Consciousness shuttles between the thing and itself, never settling which side holds the unity.",
    next: "Look behind the properties for an unseen force that produces them.",
  },
  {
    name: "force and understanding",
    truth: "An inner world of forces and laws behind appearances.",
    test: "Ask what the inner world is, apart from the appearances it explains.",
    fails: "The laws only restate the appearances in another form; the “inner” is empty except for what the understanding puts there. Behind the curtain, consciousness finds only itself.",
    next: "Make consciousness itself the object: self-consciousness.",
  },
  {
    name: "self-consciousness",
    truth: "I am the truth of the world I know.",
    test: "Try to confirm this by consuming objects, satisfying desire.",
    fails: "Each satisfied desire needs a new object, so independence is never secured. Self-consciousness finds its satisfaction only in another self-consciousness.",
    next: "The encounter of two self-consciousnesses: recognition, and the struggle of lord and bondsman.",
  },
];

/** Hegel's shapes of consciousness, each tested by its own standard and passing into the next. */
export function ShapesViz() {
  const [i, setI] = useState(0);
  const [hour, setHour] = useState(23);
  const s = SHAPES[i];
  const night = hour >= 20 || hour < 6;
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Shape of consciousness">
        {SHAPES.map((x, j) => <button key={x.name} type="button" aria-pressed={i === j} className={i === j ? "seg is-on" : "seg"} onClick={() => setI(j)}>{j + 1}. {x.name}</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <tbody>
          <tr><td style={{ width: "28%" }}>takes as true</td><td>{s.truth}</td></tr>
          <tr><td>test by its own standard</td><td>{s.test}</td></tr>
          {i === 0 && (
            <tr><td>try it</td><td>
              <label style={{ display: "block" }}><span className="mono">hour: {String(hour).padStart(2, "0")}:00</span>
                <input type="range" min={0} max={23} value={hour} onChange={(ev) => setHour(Math.round(Number(ev.target.value)))} style={{ width: "100%" }} /></label>
              <span>The note says &ldquo;Now is night&rdquo;. It is <strong style={{ color: night ? "var(--accent)" : "var(--danger)" }}>{night ? "true" : "false"}</strong> now, yet the word &ldquo;now&rdquo; is still there.</span>
            </td></tr>
          )}
          <tr><td>what goes wrong</td><td>{s.fails}</td></tr>
          <tr><td>what it passes into</td><td>{s.next}</td></tr>
        </tbody>
      </table>
      <div className="viz-controls" style={{ marginTop: 8 }}>
        <button type="button" className="btn" disabled={i === 0} onClick={() => setI(i - 1)}>Back</button>
        <button type="button" className="btn btn-primary" disabled={i === SHAPES.length - 1} onClick={() => setI(i + 1)}>Next shape</button>
      </div>
      <figcaption className="viz-caption">
        Hegel does not test consciousness against an outside standard. Each shape is measured by what it itself takes as true, fails by that measure, and the failure has a definite result, which becomes the next shape. This is determinate negation.
      </figcaption>
    </figure>
  );
}
