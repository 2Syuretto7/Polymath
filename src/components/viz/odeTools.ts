/** Fourth-order Runge–Kutta for a planar system, stopping when the solution leaves a box. */
export function rk4Path(
  f: (x: number, y: number) => [number, number],
  x0: number,
  y0: number,
  h: number,
  steps: number,
  box: [number, number, number, number],
): [number, number][] {
  const [xa, xb, ya, yb] = box;
  const out: [number, number][] = [[x0, y0]];
  let x = x0, y = y0;
  for (let i = 0; i < steps; i++) {
    const [a1, b1] = f(x, y);
    const [a2, b2] = f(x + (h * a1) / 2, y + (h * b1) / 2);
    const [a3, b3] = f(x + (h * a2) / 2, y + (h * b2) / 2);
    const [a4, b4] = f(x + h * a3, y + h * b3);
    x += (h / 6) * (a1 + 2 * a2 + 2 * a3 + a4);
    y += (h / 6) * (b1 + 2 * b2 + 2 * b3 + b4);
    if (!Number.isFinite(x) || !Number.isFinite(y) || x < xa - 1 || x > xb + 1 || y < ya - 1 || y > yb + 1) break;
    out.push([x, y]);
  }
  return out;
}
