"use client";

import { useState } from "react";

type View = "philosophers" | "ghazali";

const VIEW: Record<View, { title: string; cause: string; abraham: string }> = {
  philosophers: {
    title: "the philosophers",
    cause: "Fire has a nature that necessarily burns what is flammable when they meet. Given the fire and the cotton, the burning cannot fail to follow.",
    abraham: "A miracle such as Abraham surviving the fire must be explained by some natural cause, perhaps a change in Abraham's body, or else it is impossible.",
  },
  ghazali: {
    title: "al-Ghazali",
    cause: "God creates the burning at the moment of contact. The fire is inanimate and does nothing. The link between them is a habit that God follows, not a necessity.",
    abraham: "God could simply not create the burning. Abraham in the fire involves no contradiction, so it is possible.",
  },
};

/** Watch fire touch cotton again and again, and ask what has been observed: the burning, or the fire causing it? */
export function CottonFireViz() {
  const [n, setN] = useState(3);
  const [view, setView] = useState<View>("philosophers");
  const v = VIEW[view];

  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>times we watch fire touch cotton: <span className="mono">{n.toLocaleString("en-IN")}</span></span>
          <input type="range" min={1} max={8} value={Math.round(Math.log10(n) * 1 + 1)} onChange={(e) => setN(10 ** (Number(e.target.value) - 1))} /></label>
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>observed: fire touches cotton</td><td className="mono">{n.toLocaleString("en-IN")} times</td></tr>
          <tr><td>observed: cotton burns</td><td className="mono">{n.toLocaleString("en-IN")} times</td></tr>
          <tr><td>observed: the fire making it burn</td><td className="mono">0 times</td></tr>
        </tbody>
      </table>
      <p style={{ margin: "12px 0 8px" }}>
        Al-Ghazali&rsquo;s point: observation shows only that the burning happens <em>with</em> the fire, not that it
        happens <em>by</em> the fire. Compare the two accounts of what is going on.
      </p>
      <div className="segmented" role="group" aria-label="View">
        {(["philosophers", "ghazali"] as View[]).map((x) => (
          <button key={x} type="button" className={x === view ? "seg is-on" : "seg"} aria-pressed={x === view} onClick={() => setView(x)}>{VIEW[x].title}</button>
        ))}
      </div>
      <table className="table" style={{ marginTop: 8 }}>
        <tbody>
          <tr><td>what causes the burning</td><td>{v.cause}</td></tr>
          <tr><td>Abraham in the fire</td><td>{v.abraham}</td></tr>
        </tbody>
      </table>
      <figcaption className="viz-caption">
        However large the number of observations, the last row stays at zero. Al-Ghazali drew the conclusion that the
        necessity is not in the things; seven centuries later David Hume made a similar observation, and drew a different
        conclusion.
      </figcaption>
    </figure>
  );
}
