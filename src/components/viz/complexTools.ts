/** Small helpers for complex arithmetic on pairs [re, im], and for drawing mapped curves. */
export type C = [number, number];
export const add = (a: C, b: C): C => [a[0] + b[0], a[1] + b[1]];
export const sub = (a: C, b: C): C => [a[0] - b[0], a[1] - b[1]];
export const mul = (a: C, b: C): C => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
export const div = (a: C, b: C): C => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
export const cexp = (a: C): C => { const r = Math.exp(a[0]); return [r * Math.cos(a[1]), r * Math.sin(a[1])]; };
export const abs = (a: C) => Math.hypot(a[0], a[1]);

/** An SVG path through the points, lifting the pen wherever a point leaves the box |x|, |y| ≤ B or jumps too far. */
export function liftPath(pts: C[], X: (x: number) => number, Y: (y: number) => number, B: number): string {
  let pen = false;
  let prev: C | null = null;
  const out: string[] = [];
  for (const p of pts) {
    const bad = !Number.isFinite(p[0]) || !Number.isFinite(p[1]) || Math.abs(p[0]) > B * 1.2 || Math.abs(p[1]) > B * 1.2;
    if (bad) { pen = false; prev = null; continue; }
    if (prev && Math.hypot(p[0] - prev[0], p[1] - prev[1]) > B * 0.5) pen = false;
    out.push(`${pen ? "L" : "M"}${X(p[0]).toFixed(1)},${Y(p[1]).toFixed(1)}`);
    pen = true;
    prev = p;
  }
  return out.join(" ");
}
