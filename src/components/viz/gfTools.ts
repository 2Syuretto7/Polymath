/** Arithmetic in a finite field GF(pⁿ) = 𝔽ₚ[x]/(m), with elements numbered 0 … q − 1 by their coefficients in base p. */
export type GF = { name: string; p: number; n: number; q: number; mod: number[]; label: (a: number) => string; add: (a: number, b: number) => number; mul: (a: number, b: number) => number; pow: (a: number, k: number) => number };

const sup = ["", "", "²", "³", "⁴"];

/** mod: coefficients of the monic irreducible modulus, lowest degree first, length n + 1. */
export function makeGF(name: string, p: number, mod: number[]): GF {
  const n = mod.length - 1, q = p ** n;
  const vec = (a: number) => Array.from({ length: n }, (_, i) => Math.floor(a / p ** i) % p);
  const num = (v: number[]) => v.reduce((s, c, i) => s + c * p ** i, 0);
  const add = (a: number, b: number) => { const x = vec(a), y = vec(b); return num(x.map((c, i) => (c + y[i]) % p)); };
  const mul = (a: number, b: number) => {
    const x = vec(a), y = vec(b);
    const r = Array(2 * n - 1).fill(0);
    x.forEach((c, i) => y.forEach((d, j) => { r[i + j] = (r[i + j] + c * d) % p; }));
    for (let k = r.length - 1; k >= n; k--) {
      const c = r[k];
      if (!c) continue;
      for (let i = 0; i <= n; i++) r[k - n + i] = (((r[k - n + i] - c * mod[i]) % p) + p) % p;
    }
    return num(r.slice(0, n));
  };
  const pow = (a: number, k: number) => { let r = 1; for (let i = 0; i < k; i++) r = mul(r, a); return r; };
  const label = (a: number) => {
    if (n === 1) return String(a);
    const v = vec(a);
    const parts: string[] = [];
    for (let i = n - 1; i >= 0; i--) {
      if (!v[i]) continue;
      const c = v[i] === 1 && i > 0 ? "" : String(v[i]);
      parts.push(i === 0 ? String(v[i]) : `${c}x${sup[i]}`);
    }
    return parts.length ? parts.join("+") : "0";
  };
  return { name, p, n, q, mod, label, add, mul, pow };
}

export const FIELDS: GF[] = [
  makeGF("GF(4)", 2, [1, 1, 1]),
  makeGF("GF(5)", 5, [0, 1]),
  makeGF("GF(7)", 7, [0, 1]),
  makeGF("GF(8)", 2, [1, 1, 0, 1]),
  makeGF("GF(9)", 3, [1, 0, 1]),
];
