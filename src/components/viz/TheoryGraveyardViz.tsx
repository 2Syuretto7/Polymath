"use client";

import { useState } from "react";

type T = { name: string; from: number; to: number; success: string; kept: string };
const THEORIES: T[] = [
  { name: "crystalline spheres", from: 150, to: 1600, success: "predicted planetary positions for centuries", kept: "the geometry of the observed motions" },
  { name: "humoral medicine", from: 400, to: 1850, success: "organised diagnosis and treatment", kept: "little beyond some clinical observations" },
  { name: "phlogiston", from: 1700, to: 1790, success: "unified combustion, calcination and respiration", kept: "the classification of these as one kind of process" },
  { name: "caloric fluid", from: 1780, to: 1850, success: "explained heat flow and Laplace’s speed of sound", kept: "the equations of heat conduction" },
  { name: "elastic optical ether", from: 1820, to: 1880, success: "predicted the bright spot behind a disc and partial reflection", kept: "Fresnel’s equations for reflection and refraction" },
  { name: "electromagnetic ether", from: 1860, to: 1910, success: "framed Maxwell’s equations and predicted radio waves", kept: "Maxwell’s equations" },
  { name: "spontaneous generation", from: 1600, to: 1865, success: "seemed to explain maggots and microbes in broth", kept: "nothing" },
  { name: "Newtonian absolute space and time", from: 1687, to: 1905, success: "the most successful theory of its age", kept: "Newton’s laws as a low-speed limit" },
];

/** Laudan’s list: successful theories later rejected. How many were current at a given date? */
export function TheoryGraveyardViz() {
  const [year, setYear] = useState(1850);
  const [kept, setKept] = useState(false);
  const current = THEORIES.filter((t) => t.from <= year && year < t.to);
  return (
    <figure className="viz">
      <div className="viz-sliders">
        <label><span>stand in the year: <span className="mono">{year}</span></span>
          <input type="range" min={1500} max={1900} step={5} value={year} onChange={(e) => setYear(Number(e.target.value))} /></label>
      </div>
      <label style={{ display: "flex", gap: 8, alignItems: "center", fontSize: 14, marginTop: 6 }}>
        <input type="checkbox" checked={kept} onChange={(e) => setKept(e.target.checked)} />
        <span>show what survived into later science</span>
      </label>
      <div style={{ display: "grid", gap: 6, marginTop: 10 }}>
        {THEORIES.map((t) => {
          const live = current.includes(t);
          return (
            <div key={t.name} style={{ padding: "6px 8px", borderRadius: 6, border: "1px solid var(--border)", background: live ? "var(--accent-soft)" : "var(--bg)", opacity: live ? 1 : 0.6 }}>
              <div style={{ fontSize: 14 }}><strong>{t.name}</strong> <span className="mono" style={{ fontSize: 12, color: "var(--text-muted)" }}>accepted about {t.from} to {t.to}</span></div>
              <div style={{ fontSize: 13, color: "var(--text-muted)" }}>{kept ? `survived: ${t.kept}` : `success: ${t.success}`}</div>
            </div>
          );
        })}
      </div>
      <p className="mono" style={{ margin: "8px 0 4px", fontSize: 14, fontWeight: 700 }}>
        {current.length
          ? `in ${year}, ${current.length} of these successful theories were accepted; every one was later abandoned`
          : `in ${year}, none of these theories was yet accepted or all had been abandoned`}
      </p>
      <figcaption className="viz-caption">
        Larry Laudan, in &ldquo;A Confutation of Convergent Realism&rdquo; (1981), listed theories that were successful in
        their day and are now thought to be false, their central terms referring to nothing. A scientist at any of these dates
        would have had the same reason for realism that we do. Turn on the second view to see what selective realists say
        was retained.
      </figcaption>
    </figure>
  );
}
