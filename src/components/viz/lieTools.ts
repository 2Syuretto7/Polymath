/** Small linear-algebra helpers for matrix Lie algebras, used by the Lie algebra visualisations. */

export type Mat = number[][];

export const unit = (n: number, i: number, j: number): Mat =>
  Array.from({ length: n }, (_, a) => Array.from({ length: n }, (_, b) => (a === i && b === j ? 1 : 0)));
export const add = (a: Mat, b: Mat, s = 1): Mat => a.map((r, i) => r.map((v, j) => v + s * b[i][j]));
export const mul = (a: Mat, b: Mat): Mat => a.map((r) => b[0].map((_, j) => r.reduce((s, v, k) => s + v * b[k][j], 0)));
export const bracket = (a: Mat, b: Mat): Mat => add(mul(a, b), mul(b, a), -1);
const flat = (m: Mat) => m.flat();

/** A basis (as matrices) for the span of the given matrices, by Gaussian elimination. */
export function spanBasis(ms: Mat[]): Mat[] {
  if (!ms.length) return [];
  const n = ms[0].length;
  const rows = ms.map(flat).map((r) => r.slice());
  const out: number[][] = [];
  for (const r0 of rows) {
    const r = r0.slice();
    for (const b of out) {
      const p = b.findIndex((v) => Math.abs(v) > 1e-9);
      const f = r[p] / b[p];
      for (let k = 0; k < r.length; k++) r[k] -= f * b[k];
    }
    if (r.some((v) => Math.abs(v) > 1e-9)) out.push(r);
  }
  return out.map((r) => Array.from({ length: n }, (_, i) => r.slice(i * n, i * n + n)));
}

/** The span of all brackets [x, y] with x in A and y in B. */
export const bracketSpace = (A: Mat[], B: Mat[]): Mat[] => spanBasis(A.flatMap((x) => B.map((y) => bracket(x, y))));

/** Coordinates of m in the given basis (assumed to contain m in its span), by solving the normal equations. */
export function coords(basis: Mat[], m: Mat): number[] {
  const V = basis.map(flat), t = flat(m), d = V.length;
  const G = V.map((a) => V.map((b) => a.reduce((s, v, k) => s + v * b[k], 0)));
  const rhs = V.map((a) => a.reduce((s, v, k) => s + v * t[k], 0));
  const A = G.map((r, i) => [...r, rhs[i]]);
  for (let c = 0; c < d; c++) {
    let p = c;
    for (let r = c + 1; r < d; r++) if (Math.abs(A[r][c]) > Math.abs(A[p][c])) p = r;
    [A[c], A[p]] = [A[p], A[c]];
    for (let r = 0; r < d; r++) if (r !== c) { const f = A[r][c] / A[c][c]; for (let k = c; k <= d; k++) A[r][k] -= f * A[c][k]; }
  }
  return A.map((r, i) => r[d] / r[i]);
}

/** The Killing form B(x, y) = tr(ad x ad y) in the given basis. */
export function killing(basis: Mat[]): number[][] {
  const ad = basis.map((x) => basis.map((y) => coords(basis, bracket(x, y)))); // ad[x][j] = coords of [x, e_j]
  const adM = ad.map((cols) => cols[0].map((_, i) => cols.map((c) => c[i]))); // matrix with column j = ad x (e_j)
  return adM.map((a) => adM.map((b) => {
    let s = 0;
    for (let i = 0; i < a.length; i++) for (let k = 0; k < a.length; k++) s += a[i][k] * b[k][i];
    return Math.round(s * 1e6) / 1e6;
  }));
}

/** Eigenvalues of a symmetric matrix by the cyclic Jacobi method. */
export function symEigen(M: number[][]): number[] {
  const A = M.map((r) => r.slice()), n = A.length;
  for (let sweep = 0; sweep < 60; sweep++) {
    let off = 0;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += A[p][q] ** 2;
    if (off < 1e-18) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(A[p][q]) < 1e-14) continue;
      const th = (A[q][q] - A[p][p]) / (2 * A[p][q]);
      const t = Math.sign(th || 1) / (Math.abs(th) + Math.sqrt(th * th + 1));
      const c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const a = A[k][p], b = A[k][q]; A[k][p] = c * a - s * b; A[k][q] = s * a + c * b; }
      for (let k = 0; k < n; k++) { const a = A[p][k], b = A[q][k]; A[p][k] = c * a - s * b; A[q][k] = s * a + c * b; }
    }
  }
  return A.map((r, i) => r[i]);
}

const E = unit;
/** Named example algebras, as bases of matrices. */
export const ALGEBRAS: { name: string; basis: Mat[] }[] = [
  { name: "sl(2)", basis: [add(E(2, 0, 0), E(2, 1, 1), -1), E(2, 0, 1), E(2, 1, 0)] },
  { name: "so(3)", basis: [add(E(3, 2, 1), E(3, 1, 2), -1), add(E(3, 0, 2), E(3, 2, 0), -1), add(E(3, 1, 0), E(3, 0, 1), -1)] },
  { name: "gl(2)", basis: [E(2, 0, 0), E(2, 0, 1), E(2, 1, 0), E(2, 1, 1)] },
  { name: "b(2)", basis: [E(2, 0, 0), E(2, 0, 1), E(2, 1, 1)] },
  { name: "Heisenberg", basis: [E(3, 0, 1), E(3, 1, 2), E(3, 0, 2)] },
  { name: "b(3)", basis: [E(3, 0, 0), E(3, 1, 1), E(3, 2, 2), E(3, 0, 1), E(3, 1, 2), E(3, 0, 2)] },
  { name: "n(4)", basis: [E(4, 0, 1), E(4, 1, 2), E(4, 2, 3), E(4, 0, 2), E(4, 1, 3), E(4, 0, 3)] },
  {
    name: "sl(3)",
    basis: [add(E(3, 0, 0), E(3, 1, 1), -1), add(E(3, 1, 1), E(3, 2, 2), -1), E(3, 0, 1), E(3, 1, 2), E(3, 0, 2), E(3, 1, 0), E(3, 2, 1), E(3, 2, 0)],
  },
];
