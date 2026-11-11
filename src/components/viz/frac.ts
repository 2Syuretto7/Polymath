/** Exact rational arithmetic for small matrix examples, so row reduction never shows rounding errors. */
export type Frac = { n: number; d: number };

function gcd(a: number, b: number): number {
  a = Math.abs(a); b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

export function fr(n: number, d = 1): Frac {
  if (d === 0) throw new Error("zero denominator");
  const s = d < 0 ? -1 : 1;
  const g = gcd(n, d);
  return { n: (s * n) / g, d: (s * d) / g };
}

export const fadd = (a: Frac, b: Frac) => fr(a.n * b.d + b.n * a.d, a.d * b.d);
export const fsub = (a: Frac, b: Frac) => fr(a.n * b.d - b.n * a.d, a.d * b.d);
export const fmul = (a: Frac, b: Frac) => fr(a.n * b.n, a.d * b.d);
export const fdiv = (a: Frac, b: Frac) => fr(a.n * b.d, a.d * b.n);
export const fneg = (a: Frac) => fr(-a.n, a.d);
export const fzero = (a: Frac) => a.n === 0;
export const fone = (a: Frac) => a.n === 1 && a.d === 1;

/** Formats a fraction with a true minus sign, such as −3/2. */
export function fstr(a: Frac): string {
  const s = a.d === 1 ? String(Math.abs(a.n)) : `${Math.abs(a.n)}/${a.d}`;
  return a.n < 0 ? `−${s}` : s;
}

export type FMatrix = Frac[][];
export const toF = (rows: number[][]): FMatrix => rows.map((r) => r.map((x) => fr(x)));

/** Index of the first non-zero entry of a row, or −1 for a zero row. Only the first `cols` columns count. */
export function leadCol(row: Frac[], cols = row.length): number {
  for (let j = 0; j < cols; j++) if (!fzero(row[j])) return j;
  return -1;
}
