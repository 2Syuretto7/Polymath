"use client";

import { useState } from "react";
import { GraphSvg, type Edge, type Pt } from "./GraphSvg";

const PTS: Pt[] = [[40, 60], [130, 40], [110, 150], [210, 110], [200, 220], [300, 60], [310, 180], [370, 250], [60, 250]];
const BASE: Edge[] = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [5, 6], [4, 6], [6, 7]];
const BRIDGE: Edge = [2, 8];

/** Breadth-first search from a chosen vertex: distances, layers and connected components. */
export function BfsViz() {
  const [start, setStart] = useState(0);
  const [layer, setLayer] = useState(1);
  const [withBridge, setWithBridge] = useState(false);
  const edges = withBridge ? [...BASE, BRIDGE] : BASE;
  const dist: (number | null)[] = PTS.map(() => null);
  dist[start] = 0;
  const queue = [start];
  while (queue.length) {
    const v = queue.shift()!;
    for (const [a, b] of edges) {
      const u = a === v ? b : b === v ? a : -1;
      if (u >= 0 && dist[u] === null) { dist[u] = dist[v]! + 1; queue.push(u); }
    }
  }
  const ecc = Math.max(...dist.map((d) => d ?? 0));
  const reached = dist.filter((d) => d !== null).length;
  const shown = (i: number) => dist[i] !== null && dist[i]! <= layer;

  return (
    <figure className="viz">
      <GraphSvg pts={PTS} edges={edges} labels={dist.map((d, i) => (shown(i) ? d! : "·"))} label="Breadth-first search" onVertex={(i) => { setStart(i); setLayer(0); }}
        vertexFill={(i) => (i === start ? "var(--accent)" : shown(i) ? "var(--accent-soft)" : undefined)}
        labelFill={(i) => (i === start ? "var(--bg)" : "var(--text)")}
        edgeStyle={(k) => { const [a, b] = edges[k]; return shown(a) && shown(b) && Math.abs(dist[a]! - dist[b]!) === 1 ? { stroke: "var(--accent)" } : undefined; }} />
      <div className="viz-sliders">
        <label><span>layers explored = <span className="mono">{layer}</span></span>
          <input type="range" min={0} max={8} value={layer} onChange={(e) => setLayer(Number(e.target.value))} /></label>
      </div>
      <div className="viz-controls">
        <button type="button" className={withBridge ? "viz-chip is-on" : "viz-chip"} aria-pressed={withBridge} onClick={() => setWithBridge((b) => !b)}>
          {withBridge ? "Remove the edge to the lonely vertex" : "Add an edge to the lonely vertex"}
        </button>
      </div>
      <figcaption className="viz-caption" aria-live="polite">
        Click a vertex to start from it. Each layer adds the unvisited neighbours of the last one, so the number on a vertex is its distance from the start: the length of a shortest path. {reached < PTS.length
          ? `Only ${reached} of the ${PTS.length} vertices can ever be reached: the graph is not connected, and the search finds exactly the component of the start.`
          : `Every vertex is reached, so the graph is connected; the farthest is at distance ${ecc}.`}
      </figcaption>
    </figure>
  );
}
