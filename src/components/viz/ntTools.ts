/** Small number theory helpers shared by the number theory visualisations. */
export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));

export const factorise = (n: number): [number, number][] => {
  const f: [number, number][] = [];
  for (let p = 2; p * p <= n; p++) {
    if (n % p === 0) { let k = 0; while (n % p === 0) { n /= p; k++; } f.push([p, k]); }
  }
  if (n > 1) f.push([n, 1]);
  return f;
};

export const divisors = (n: number) => Array.from({ length: n }, (_, i) => i + 1).filter((d) => n % d === 0);

export const mu = (n: number) => { const f = factorise(n); return f.some(([, k]) => k > 1) ? 0 : f.length % 2 ? -1 : 1; };
export const phi = (n: number) => factorise(n).reduce((a, [p, k]) => a * (p - 1) * p ** (k - 1), 1);
export const sigma = (n: number) => divisors(n).reduce((a, d) => a + d, 0);
export const tau = (n: number) => divisors(n).length;

/** a^k mod n by repeated squaring, safe for n below about 9 × 10⁷. */
export const modpow = (a: number, k: number, n: number) => {
  let r = 1 % n, b = ((a % n) + n) % n;
  while (k > 0) { if (k & 1) r = (r * b) % n; b = (b * b) % n; k = Math.floor(k / 2); }
  return r;
};

export const ord = (a: number, n: number) => {
  if (gcd(a, n) !== 1) return 0;
  let x = a % n, k = 1;
  while (x !== 1 % n) { x = (x * a) % n; k++; if (k > n) return 0; }
  return k;
};

export const isPrime = (n: number) => { if (n < 2) return false; for (let d = 2; d * d <= n; d++) if (n % d === 0) return false; return true; };
