/** Eigen-decomposition of the symmetric matrix [a b; b d]: eigenvalues l1 ≥ l2 and orthonormal eigenvectors q1, q2. */
export function sym2(a: number, b: number, d: number) {
  const m = (a + d) / 2, r = Math.hypot((a - d) / 2, b);
  const l1 = m + r, l2 = m - r;
  let q1: [number, number];
  if (Math.abs(b) > 1e-12) {
    const n = Math.hypot(b, l1 - a);
    q1 = [b / n, (l1 - a) / n];
  } else q1 = a >= d ? [1, 0] : [0, 1];
  const q2: [number, number] = [-q1[1], q1[0]];
  return { l1, l2, q1, q2 };
}
