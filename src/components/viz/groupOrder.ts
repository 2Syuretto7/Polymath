/** Small number-theory helpers for Sylow-style reasoning about group orders. */

/** Write a whole number as Unicode subscript digits. */
export const subs = (k: number | string) => String(k).split("").map((d) => "₀₁₂₃₄₅₆₇₈₉"[Number(d)] ?? d).join("");

export const sups = (k: number) => String(k).split("").map((d) => "⁰¹²³⁴⁵⁶⁷⁸⁹"[Number(d)]).join("");

export function factor(n: number): [number, number][] {
  const out: [number, number][] = [];
  let m = n;
  for (let p = 2; p * p <= m; p++) {
    let a = 0;
    while (m % p === 0) { m /= p; a++; }
    if (a) out.push([p, a]);
  }
  if (m > 1) out.push([m, 1]);
  return out;
}

export function divisors(n: number): number[] {
  const d: number[] = [];
  for (let i = 1; i <= n; i++) if (n % i === 0) d.push(i);
  return d;
}

/** The values n_p allowed by Sylow's theorems: divisors of m that are 1 mod p. */
export function sylowCounts(n: number, p: number, a: number): number[] {
  const m = n / Math.pow(p, a);
  return divisors(m).filter((d) => d % p === 1 % p);
}

const fact = (k: number): number => (k <= 1 ? 1 : k * fact(k - 1));

export type Verdict = { simple: boolean; rule: string; detail: string };

/** Decide whether a group of order n can be simple, using the rules of a first course. */
export function simpleVerdict(n: number): Verdict {
  if (n === 1) return { simple: false, rule: "trivial", detail: "The trivial group is not counted as simple, just as 1 is not counted as prime." };
  const f = factor(n);
  if (f.length === 1 && f[0][1] === 1) return { simple: true, rule: "prime order", detail: `A group of prime order ${n} is cyclic, and by Lagrange its only subgroups are trivial and the whole group. It is simple.` };
  if (n === 60) return { simple: true, rule: "A₅", detail: "Every test below fails here: n₂ can be 15, n₃ can be 10 and n₅ can be 6, and the counts fit. The alternating group A₅ is simple, and it is the only simple group of order 60." };
  if (f.length === 1) return { simple: false, rule: "p-group", detail: `${n} = ${f[0][0]}${sups(f[0][1])}. A p-group has a non-trivial centre, which is a normal subgroup. If the centre were everything, the group would be abelian of non-prime order, with proper subgroups of every order dividing ${n}.` };
  for (const [p, a] of f) {
    const c = sylowCounts(n, p, a);
    if (c.length === 1) return { simple: false, rule: "unique Sylow", detail: `n${subs(p)} must divide ${n / Math.pow(p, a)} and be 1 mod ${p}. Only 1 works, so the Sylow ${p}-subgroup, of order ${Math.pow(p, a)}, is unique and therefore normal.` };
  }
  for (const [p, a] of f) {
    const c = sylowCounts(n, p, a).filter((k) => k > 1);
    if (c.every((k) => (fact(k) / 2) % n !== 0)) return { simple: false, rule: "embedding", detail: `n${subs(p)} is 1 or ${c.join(" or ")}. If it is 1, the Sylow ${p}-subgroup is normal. Otherwise G acts on its n${subs(p)} Sylow ${p}-subgroups by conjugation. In a simple group this action would be faithful and land in the alternating group, but ${n} does not divide ${c.map((k) => `${k}!/2`).join(" or ")}. So no group of this order is simple.` };
  }
  const singles = f.filter(([, a]) => a === 1);
  const multi = f.filter(([, a]) => a > 1);
  if (multi.length <= 1) {
    let used = 0;
    const parts: string[] = [];
    for (const [p] of singles) {
      const k = sylowCounts(n, p, 1).filter((x) => x > 1)[0];
      used += k * (p - 1);
      parts.push(`n${subs(p)} ≥ ${k} gives ${k * (p - 1)} elements of order ${p}`);
    }
    if (multi.length === 0 && used > n - 1) return { simple: false, rule: "counting", detail: `If no Sylow subgroup were normal: ${parts.join("; ")}. That is ${used} elements, more than the ${n - 1} non-identity elements available. So some Sylow subgroup is normal.` };
    if (multi.length === 1) {
      const [q, b] = multi[0];
      const qb = Math.pow(q, b), rest = n - used;
      if (rest < 2 * qb - qb / q) return { simple: false, rule: "counting", detail: `If no Sylow subgroup were normal: ${parts.join("; ")}. Only ${rest} elements are left, but two different Sylow ${q}-subgroups of order ${qb} would need at least ${2 * qb - qb / q}. So some Sylow subgroup is normal after all.` };
    }
  }
  if (n % 2 === 0 && (n / 2) % 2 === 1) return { simple: false, rule: "twice an odd number", detail: `${n} = 2 × ${n / 2}. In the Cayley embedding into S${subs(n)}, an element of order 2 is a product of ${n / 2} transpositions, an odd permutation. The even elements form a normal subgroup of index 2.` };
  return { simple: true, rule: "undecided", detail: "These tests do not settle this order." };
}
