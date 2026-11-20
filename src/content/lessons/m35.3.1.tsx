import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DirichletCharTableViz } from "@/components/viz/DirichletCharTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.3.1",
  minutes: 90,
  links: {
    revisits: ["m35.2.3", "m11.4.2", "m11.2.2"],
    foreshadows: ["m35.3.2", "m35.3.3", "m35.4.2"],
  },

  puzzle: (
    <>
      <p>
        The Euler product sees all primes at once. To count only primes ending in 7, we need a function that is 1 on
        numbers ending in 7, 0 on the others, and still multiplicative so that it factors over primes. No single function
        does both. Dirichlet&rsquo;s idea was to take an average of several multiplicative functions instead.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a modulus q, and read off every character mod q as a row of arrows on the unit circle.</p>
      <DirichletCharTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Dirichlet characters">
        <p>
          A <strong>Dirichlet character</strong> mod q is a function χ on the integers that is completely multiplicative,
          periodic with period q, and zero exactly on the integers sharing a factor with q. Equivalently, it is a
          homomorphism from <M>{"(\\mathbb{Z}/q)^\\times"}</M> to the non-zero complex numbers, extended by 0. Its values
          are roots of unity. The <strong>principal character</strong> <M>{"\\chi_0"}</M> is 1 on every n coprime to q.
        </p>
      </Definition>

      <Theorem title="how many characters">
        <p>
          There are exactly <M>{"\\varphi(q)"}</M> characters mod q, and under pointwise multiplication they form a group
          isomorphic to <M>{"(\\mathbb{Z}/q)^\\times"}</M>. The proof writes this finite abelian group as a product of cyclic
          groups; a cyclic group of order m has exactly m characters, determined by sending a generator to any m-th root of
          unity.
        </p>
      </Theorem>

      <Theorem title="orthogonality">
        <p>
          <M>{"\\sum_{a \\bmod q} \\chi(a) = \\varphi(q)"}</M> if <M>{"\\chi = \\chi_0"}</M> and 0 otherwise. Dually,{" "}
          <M>{"\\sum_\\chi \\chi(a) = \\varphi(q)"}</M> if <M>{"a \\equiv 1"}</M> mod q and 0 otherwise.
        </p>
      </Theorem>

      <Theorem title="detecting a residue class">
        <p>
          For b coprime to q,{" "}
          <M>{"\\frac{1}{\\varphi(q)} \\sum_\\chi \\overline{\\chi(b)}\\,\\chi(n) = \\begin{cases} 1 & n \\equiv b \\pmod q, \\\\ 0 & \\text{otherwise.} \\end{cases}"}</M>{" "}
          The indicator of a residue class is a combination of multiplicative functions, which is exactly what Dirichlet needed.
        </p>
      </Theorem>

      <Example title="small moduli">
        <p>
          Mod 4 the non-principal character is 1 on n ≡ 1, −1 on n ≡ 3 and 0 on even n. Mod 5, with generator 2, the
          characters send 2 to 1, i, −1 or −i; the one sending 2 to −1 is the Legendre symbol (n/5). Mod an odd prime p
          there is always exactly one real non-principal character, the Legendre symbol.
        </p>
      </Example>

      <Remark title="primitive characters">
        <p>
          A character mod q may come from a character with smaller period. The least such period is its{" "}
          <strong>conductor</strong>, and a character is primitive when its conductor is q. Primitive characters are the
          ones whose L-functions have the cleanest functional equations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many Dirichlet characters are there mod q?</p>,
      answer: { kind: "choice", options: ["φ(q)", "q", "q − 1", "2"], correct: [0] },
    },
    {
      key: "orth",
      rung: "check",
      prompt: <p>What is the sum of χ(a) over a full set of residues mod q, for a non-principal character χ?</p>,
      answer: { kind: "choice", options: ["0", "φ(q)", "1", "q"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose q = 7. How many characters take only the values ±1?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "fifteen",
      rung: "apply",
      prompt: <p>How many Dirichlet characters are there mod 15?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "value",
      rung: "apply",
      prompt: <p>A character χ mod 5 has χ(2) = i. Since 2³ = 8 ≡ 3 mod 5, what is χ(3)?</p>,
      answer: { kind: "choice", options: ["−i", "i", "−1", "1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the sum of χ(a) over the residues a mod q is 0 when χ is not principal.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses b coprime to q with χ(b) ≠ 1, which exists because χ is not principal.",
          "Notes that a ↦ ba permutes the residues coprime to q, so χ(b) times the sum equals the sum.",
          "Concludes (χ(b) − 1) times the sum is 0, so the sum is 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the average of conj χ(b) χ(n) over all characters is 1 when n ≡ b and 0 otherwise.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Rewrites conj χ(b) χ(n) as χ(n b⁻¹), using that character values are roots of unity and χ is multiplicative.",
          "Applies the dual orthogonality relation to a = n b⁻¹, which is 1 mod q exactly when n ≡ b.",
          "Handles n not coprime to q, where every χ(n) is 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Each character twists the Euler product of ζ into a new one. Whether these twisted functions vanish at s = 1 turns
        out to decide whether each residue class gets its share of primes.
      </p>
      <p>Next, L-functions.</p>
    </>
  ),
};
