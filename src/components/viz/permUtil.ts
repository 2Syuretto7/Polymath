/** Cycle notation for a permutation given in one-line form on 0, …, n − 1, written with 1-based labels; fixed points omitted. */
export function cycleString(p: number[]): string {
  const seen = new Array(p.length).fill(false);
  const parts: string[] = [];
  for (let i = 0; i < p.length; i++) {
    if (seen[i]) continue;
    const c: number[] = [];
    let j = i;
    while (!seen[j]) { seen[j] = true; c.push(j + 1); j = p[j]; }
    if (c.length > 1) parts.push(`(${c.join(" ")})`);
  }
  return parts.length ? parts.join("") : "e";
}

/** The lengths of the cycles of a permutation, longest first, fixed points included. */
export function cycleType(p: number[]): number[] {
  const seen = new Array(p.length).fill(false);
  const t: number[] = [];
  for (let i = 0; i < p.length; i++) {
    if (seen[i]) continue;
    let len = 0, j = i;
    while (!seen[j]) { seen[j] = true; len++; j = p[j]; }
    t.push(len);
  }
  return t.sort((a, b) => b - a);
}
