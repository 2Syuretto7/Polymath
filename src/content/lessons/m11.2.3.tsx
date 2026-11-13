import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PowerTableViz } from "@/components/viz/PowerTableViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.2.3",
  minutes: 90,
  links: {
    revisits: ["m11.2.1", "m7.2.1", "m4.4.4"],
    foreshadows: ["m11.4.1", "m11.4.4", "m11.3.1"],
  },

  puzzle: (
    <>
      <p>
        What is the last digit of <M>{"7^{2026}"}</M>? Its last two digits? Computing the number is hopeless: it has over
        1700 digits. Yet powers modulo n always fall into a cycle. How long can the cycle be, and does it always come back to
        1?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Each row shows the powers of a unit modulo n. Look at the outlined column, then try a prime n and a composite one.</p>
      <PowerTableViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Euler's function">
        <p>
          <M>{"\\varphi(n)"}</M> is the number of <M>{"a"}</M> with <M>{"1 \\le a \\le n"}</M> and{" "}
          <M>{"\\gcd(a, n) = 1"}</M>, the size of <M>{"(\\mathbb{Z}/n)^\\times"}</M>. For a prime,{" "}
          <M>{"\\varphi(p) = p - 1"}</M>; for a prime power, <M>{"\\varphi(p^k) = p^k - p^{k-1}"}</M>; and since{" "}
          <M>{"\\varphi"}</M> is multiplicative,
        </p>
        <MD>{"\\varphi(n) = n \\prod_{p \\mid n} \\Bigl(1 - \\frac1p\\Bigr)."}</MD>
      </Definition>

      <Theorem title="Euler's theorem">
        <p>If <M>{"\\gcd(a, n) = 1"}</M>, then <M>{"a^{\\varphi(n)} \\equiv 1 \\pmod n"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"r_1, \\dots, r_{\\varphi(n)}"}</M> be the units modulo <M>{"n"}</M>. Multiplying by the unit{" "}
          <M>{"a"}</M> permutes them, since <M>{"ar_i \\equiv ar_j"}</M> forces <M>{"r_i \\equiv r_j"}</M>. So
        </p>
        <MD>{"\\prod_i (a r_i) \\equiv \\prod_i r_i, \\quad\\text{that is,}\\quad a^{\\varphi(n)} \\prod_i r_i \\equiv \\prod_i r_i \\pmod n."}</MD>
        <p>The product of units is a unit, so cancel it. Alternatively, this is Lagrange&rsquo;s theorem for the group of units.</p>
      </Proof>

      <Theorem title="Fermat's little theorem">
        <p>
          If <M>{"p"}</M> is prime and <M>{"p \\nmid a"}</M>, then <M>{"a^{p-1} \\equiv 1 \\pmod p"}</M>. For every{" "}
          <M>{"a"}</M>, <M>{"a^p \\equiv a \\pmod p"}</M>.
        </p>
      </Theorem>

      <Example title="last digits">
        <p>
          <M>{"\\varphi(100) = 40"}</M>, so <M>{"7^{40} \\equiv 1 \\pmod{100}"}</M>. Better, <M>{"7^4 = 2401 \\equiv 1"}</M>, so
          the order of 7 is 4, and <M>{"7^{2026} = 7^{4 \\cdot 506 + 2} \\equiv 49 \\pmod{100}"}</M>. The exponent only
          matters modulo the order, which divides <M>{"\\varphi(n)"}</M>.
        </p>
      </Example>

      <Remark title="testing primality">
        <p>
          If <M>{"2^{n-1} \\not\\equiv 1 \\pmod n"}</M>, then <M>{"n"}</M> is certainly composite, a fact computed quickly by
          repeated squaring even for huge <M>{"n"}</M>. The converse fails: <M>{"561 = 3 \\cdot 11 \\cdot 17"}</M> satisfies{" "}
          <M>{"a^{560} \\equiv 1"}</M> for every <M>{"a"}</M> coprime to it. Such <strong>Carmichael numbers</strong> are
          infinite in number, so practical tests, like Miller–Rabin, ask for more than Fermat&rsquo;s condition.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "flt",
      rung: "check",
      prompt: <p>Which is Fermat&rsquo;s little theorem?</p>,
      answer: {
        kind: "choice",
        options: ["aᵖ ≡ 1 (mod p) for all a", "a^(p−1) ≡ 1 (mod p) when p does not divide a", "a^(p+1) ≡ a (mod p)", "(p − 1)! ≡ −1 (mod p)"],
        correct: [1],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>In the proof of Euler&rsquo;s theorem, what does multiplication by a unit <M>{"a"}</M> do to the units modulo n?</p>,
      answer: { kind: "choice", options: ["Sends them all to 1", "Permutes them", "Doubles them", "Sends some to 0"], correct: [1] },
    },
    {
      key: "phi36",
      rung: "apply",
      prompt: <p>Compute <M>{"\\varphi(36)"}</M>.</p>,
      answer: { kind: "numeric", value: 12, tolerance: 0 },
    },
    {
      key: "mod7",
      rung: "apply",
      prompt: <p>What is <M>{"3^{100} \\bmod 7"}</M>?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "mod13",
      rung: "apply",
      prompt: <p>What is <M>{"2^{1000} \\bmod 13"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Fermat&rsquo;s little theorem: if <M>{"p"}</M> is prime and <M>{"p \\nmid a"}</M>, then <M>{"a^{p-1} \\equiv 1 \\pmod p"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers a, 2a, …, (p − 1)a modulo p, or uses another complete method such as induction with the binomial theorem.",
          "Shows these are the non-zero residues in some order, or the equivalent key step of the chosen method.",
          "Multiplies and cancels (p − 1)!, which is coprime to p, to reach the result.",
        ],
      },
    },
    {
      key: "carm",
      rung: "stretch",
      prompt: <p>The number 561 passes Fermat&rsquo;s test for every base coprime to it, yet is composite. What does this tell us about using Fermat&rsquo;s theorem to test primality?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that the theorem gives a necessary condition for primality, not a sufficient one.",
          "Concludes that failing the test proves compositeness, while passing it is only evidence, so stronger tests are needed.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend Euler’s function, why multiplying the units by a permutes them and how that proves Euler’s theorem, Fermat’s little theorem as a special case, how to find last digits of huge powers, and why Carmichael numbers spoil the Fermat test.",

  glimpse: (
    <p>
      The next lesson proves Wilson&rsquo;s theorem with a similar pairing idea. The order of an element, glimpsed in the table,
      becomes the main subject of the chapter on primitive roots, and Euler&rsquo;s theorem is the reason RSA decrypts correctly.
    </p>
  ),
};
