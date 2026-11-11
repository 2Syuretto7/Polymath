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

/** Reduced row echelon form, with the pivot columns. The input is not changed. */
export function rref(M: FMatrix): { R: FMatrix; pivots: number[] } {
  const R = M.map((r) => r.slice());
  const m = R.length, n = m ? R[0].length : 0;
  const pivots: number[] = [];
  let row = 0;
  for (let col = 0; col < n && row < m; col++) {
    let p = row;
    while (p < m && fzero(R[p][col])) p++;
    if (p === m) continue;
    [R[row], R[p]] = [R[p], R[row]];
    const piv = R[row][col];
    R[row] = R[row].map((x) => fdiv(x, piv));
    for (let i = 0; i < m; i++) {
      if (i === row || fzero(R[i][col])) continue;
      const k = R[i][col];
      R[i] = R[i].map((x, j) => fsub(x, fmul(k, R[row][j])));
    }
    pivots.push(col);
    row++;
  }
  return { R, pivots };
}

/** The special solutions of Rx = 0 for a matrix in reduced echelon form: one per free column. */
export function nullBasis(R: FMatrix, pivots: number[], n: number): FMatrix {
  const free = Array.from({ length: n }, (_, j) => j).filter((j) => !pivots.includes(j));
  return free.map((f) => {
    const x: Frac[] = Array.from({ length: n }, () => fr(0));
    x[f] = fr(1);
    pivots.forEach((p, i) => { x[p] = fneg(R[i][f]); });
    return x;
  });
}
