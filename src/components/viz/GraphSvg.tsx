"use client";

import type { CSSProperties } from "react";

export type Pt = [number, number];
export type Edge = [number, number];

/** Four vertex colours for colouring problems, from the theme tokens. */
export const VERTEX_COLOURS = ["var(--accent)", "var(--success)", "var(--text)", "var(--violet-300)"];

type Props = {
  pts: Pt[];
  edges: Edge[];
  labels?: (string | number)[];
  label: string;
  edgeStyle?: (k: number) => CSSProperties | undefined;
  edgeText?: (k: number) => string | undefined;
  vertexFill?: (i: number) => string | undefined;
  vertexRing?: (i: number) => boolean;
  labelFill?: (i: number) => string | undefined;
  onVertex?: (i: number) => void;
  onEdge?: (k: number) => void;
  w?: number;
  h?: number;
};

/** Draws a small graph in a fixed box; parallel edges are drawn as curves. */
export function GraphSvg({ pts, edges, labels, label, edgeStyle, edgeText, vertexFill, vertexRing, labelFill, onVertex, onEdge, w = 400, h = 300 }: Props) {
  const seen = new Map<string, number>();
  const paths = edges.map(([a, b]) => {
    const key = a < b ? `${a}-${b}` : `${b}-${a}`;
    const n = seen.get(key) ?? 0;
    seen.set(key, n + 1);
    const total = edges.filter(([x, y]) => (x < y ? `${x}-${y}` : `${y}-${x}`) === key).length;
    const off = total === 1 ? 0 : (n - (total - 1) / 2) * 34;
    const [x1, y1] = pts[a], [x2, y2] = pts[b];
    const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
    const len = Math.hypot(x2 - x1, y2 - y1) || 1;
    const sgn = a < b ? 1 : -1;
    const cx = mx - (sgn * off * (y2 - y1)) / len, cy = my + (sgn * off * (x2 - x1)) / len;
    return { d: `M${x1} ${y1} Q${cx} ${cy} ${x2} ${y2}`, tx: (mx + cx) / 2, ty: (my + cy) / 2 };
  });

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: "100%", maxWidth: w * 1.15, display: "block", margin: "8px auto" }} role="img" aria-label={label}>
      {paths.map((p, k) => (
        <g key={k}>
          <path d={p.d} style={{ fill: "none", stroke: "var(--border-strong)", strokeWidth: 2.5, ...(edgeStyle?.(k) ?? {}) }} />
          {onEdge && <path d={p.d} onClick={() => onEdge(k)} style={{ fill: "none", stroke: "transparent", strokeWidth: 16, cursor: "pointer" }} />}
          {edgeText?.(k) !== undefined && (
            <text x={p.tx} y={p.ty - 4} textAnchor="middle" style={{ fontSize: 12, fill: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{edgeText(k)}</text>
          )}
        </g>
      ))}
      {pts.map(([x, y], i) => (
        <g key={i} onClick={onVertex ? () => onVertex(i) : undefined} style={{ cursor: onVertex ? "pointer" : undefined }}>
          <circle cx={x} cy={y} r={14} style={{ fill: vertexFill?.(i) ?? "var(--bg-subtle)", stroke: vertexRing?.(i) ? "var(--danger)" : "var(--text)", strokeWidth: vertexRing?.(i) ? 3 : 1.5 }} />
          {labels && (
            <text x={x} y={y + 4} textAnchor="middle" style={{ fontSize: 12, fill: labelFill?.(i) ?? (vertexFill?.(i) ? "var(--bg)" : "var(--text)"), fontFamily: "var(--font-mono)", pointerEvents: "none" }}>{labels[i]}</text>
          )}
        </g>
      ))}
    </svg>
  );
}

/** Points evenly spaced on a circle. */
export function ring(n: number, cx = 200, cy = 150, r = 115, start = -Math.PI / 2): Pt[] {
  return Array.from({ length: n }, (_, i) => [cx + r * Math.cos(start + (2 * Math.PI * i) / n), cy + r * Math.sin(start + (2 * Math.PI * i) / n)]);
}
