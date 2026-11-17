"use client";

import { useState } from "react";

const PERMS = ["abc", "acb", "bac", "bca", "cab", "cba"];
const OBJ: Record<string, string> = { a: "the cup", b: "the book", c: "the lamp" };

/** The picture theory in miniature: names arranged in a picture say that objects are arranged likewise. */
export function PicturePlaceViz() {
  const [pic, setPic] = useState("abc");
  const [world, setWorld] = useState("bac");
  const match = pic === world;
  const row = (order: string, label: (ch: string) => string) => (
    <div style={{ display: "flex", gap: 8 }}>
      {order.split("").map((ch) => (
        <span key={ch} className="mono" style={{ padding: "6px 12px", border: "1px solid var(--border)", borderRadius: 6, minWidth: 70, textAlign: "center" }}>
          {label(ch)}
        </span>
      ))}
    </div>
  );
  return (
    <figure className="viz">
      <p className="viz-caption" style={{ marginTop: 0 }}>The picture: the order of the names a, b and c, left to right.</p>
      <div className="segmented" role="group" aria-label="picture">
        {PERMS.map((p) => (
          <button key={p} type="button" aria-pressed={pic === p} className={pic === p ? "seg is-on" : "seg"} onClick={() => setPic(p)}>
            {p}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>{row(pic, (ch) => ch)}</div>
      <p className="viz-caption">The world: the order of the objects on the shelf, left to right.</p>
      <div className="segmented" role="group" aria-label="world">
        {PERMS.map((p) => (
          <button key={p} type="button" aria-pressed={world === p} className={world === p ? "seg is-on" : "seg"} onClick={() => setWorld(p)}>
            {p}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 8 }}>{row(world, (ch) => OBJ[ch])}</div>
      <div style={{ marginTop: 12, padding: "6px 10px", borderRadius: 6, background: match ? "var(--accent-soft)" : "var(--danger-soft)" }}>
        <div>The picture says: {pic.split("").map((ch) => OBJ[ch]).join(", then ")}.</div>
        <div className="mono" style={{ fontWeight: 700 }}>{match ? "true: the world is as the picture says" : "false: the world is otherwise"}</div>
      </div>
      <figcaption className="viz-caption">
        The picture has its sense whatever the world is like: you can read off what it says before checking the shelf. Its
        truth depends on agreement with the world. Of the six possible pictures exactly one is true, and the picture shares
        with the world a form, here the form of a left-to-right order, which it cannot itself depict.
      </figcaption>
    </figure>
  );
}
