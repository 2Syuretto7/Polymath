import { test } from "node:test";
import assert from "node:assert/strict";
import { fstr, nullBasis, rref, toF } from "../src/components/viz/frac.ts";

const show = (rows: { n: number; d: number }[][]) => rows.map((r) => r.map(fstr).join(" "));

test("rref finds pivots and the reduced form", () => {
  const { R, pivots } = rref(toF([[1, 2, 2, 4], [2, 4, 3, 5]]));
  assert.deepEqual(pivots, [0, 2]);
  assert.deepEqual(show(R), ["1 2 0 −2", "0 0 1 3"]);
});

test("rref swaps rows and handles fractions", () => {
  const { R, pivots } = rref(toF([[0, 2], [3, 4]]));
  assert.deepEqual(pivots, [0, 1]);
  assert.deepEqual(show(R), ["1 0", "0 1"]);
  assert.deepEqual(show(rref(toF([[2, 1], [4, 2]])).R), ["1 1/2", "0 0"]);
});

test("nullBasis gives the special solutions", () => {
  const A = toF([[1, 2, 0, 1], [0, 0, 1, 1], [1, 2, 1, 2]]);
  const { R, pivots } = rref(A);
  const N = nullBasis(R, pivots, 4);
  assert.deepEqual(show(N), ["−2 1 0 0", "−1 0 −1 1"]);
  for (const x of N) for (const row of A) {
    const dot = row.reduce((s, a, j) => s + (a.n / a.d) * (x[j].n / x[j].d), 0);
    assert.equal(dot, 0);
  }
});
