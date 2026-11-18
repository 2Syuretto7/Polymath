/** Small connected covers of the figure eight, as permutations of the sheets by the loops a and b. */
export type Cover = { name: string; a: number[]; b: number[] };
export const COVERS: Cover[] = [
  { name: "2 sheets: a and b swap", a: [1, 0], b: [1, 0] },
  { name: "2 sheets: a swaps, b fixes", a: [1, 0], b: [0, 1] },
  { name: "3 sheets: a and b rotate", a: [1, 2, 0], b: [1, 2, 0] },
  { name: "3 sheets: a rotates, b fixes", a: [1, 2, 0], b: [0, 1, 2] },
  { name: "3 sheets: a = (0 1), b = (1 2)", a: [1, 0, 2], b: [0, 2, 1] },
  { name: "3 sheets: a = (0 1), b rotates", a: [1, 0, 2], b: [1, 2, 0] },
];
const perms = (n: number): number[][] => (n === 1 ? [[0]] : perms(n - 1).flatMap((p) => Array.from({ length: n }, (_, i) => [...p.slice(0, i), n - 1, ...p.slice(i)])));
/** Deck transformations: permutations of the sheets commuting with both a and b. */
export const deck = (c: Cover) => perms(c.a.length).filter((p) => c.a.every((x, i) => p[x] === c.a[p[i]]) && c.b.every((x, i) => p[x] === c.b[p[i]]));
export const inv = (s: number[]) => { const r = new Array(s.length); s.forEach((x, i) => { r[x] = i; }); return r as number[]; };
