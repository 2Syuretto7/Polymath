"use client";

import { useState } from "react";

type T = "epiphenomenalism" | "interactionism" | "physicalism";
const ROWS = ["pin pricks the finger", "nerve signals reach the brain", "felt pain", "brain triggers the wince", "says “that hurts”", "believes they are in pain"];

/** Remove the feeling and keep the rest: which differences follow, on each theory? */
export function ZombieTwinViz() {
  const [t, setT] = useState<T>("epiphenomenalism");
  const twin = (i: number): { v: string; same: boolean } => {
    if (i === 2) return t === "physicalism" ? { v: "cannot be removed: the pain is the brain state", same: true } : { v: "absent", same: false };
    if (t === "interactionism" && i >= 3) return { v: i === 5 ? "no basis for the belief" : "does not happen: the feeling was a cause", same: false };
    return { v: "exactly the same", same: true };
  };
  const NOTE: Record<T, string> = {
    epiphenomenalism: "On epiphenomenalism the feeling causes nothing, so removing it changes nothing else: the twin still winces and still says “that hurts”. But then your own saying it, and your belief that you are in pain, are not caused by the pain either. How can you know about your pain?",
    interactionism: "On interactionism the feeling is a cause, so removing it removes the wince and the report. Your knowledge of pain is caused by the pain, but the feeling must then break physical closure.",
    physicalism: "On physicalism the feeling is the brain state, so it cannot be removed while the brain state stays. The twin experiment cannot be run.",
  };
  return (
    <figure className="viz">
      <div className="segmented" role="group" aria-label="Theory">
        {(["epiphenomenalism", "interactionism", "physicalism"] as T[]).map((x) => <button key={x} type="button" aria-pressed={t === x} className={t === x ? "seg is-on" : "seg"} onClick={() => setT(x)}>{x}</button>)}
      </div>
      <table className="table" style={{ marginTop: 10 }}>
        <thead><tr><th style={{ textTransform: "none" }}>event</th><th style={{ textTransform: "none" }}>you</th><th style={{ textTransform: "none" }}>a twin with the feeling removed</th></tr></thead>
        <tbody>
          {ROWS.map((r, i) => {
            const tw = twin(i);
            return (
              <tr key={r}>
                <td style={{ fontSize: 14, fontWeight: i === 2 ? 700 : 400 }}>{r}</td>
                <td style={{ fontSize: 14 }}>yes</td>
                <td style={{ fontSize: 14, color: tw.same ? "var(--text)" : "var(--danger)" }}>{tw.v}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <figcaption className="viz-caption">{NOTE[t]}</figcaption>
    </figure>
  );
}
