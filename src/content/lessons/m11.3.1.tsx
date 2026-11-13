import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MultiplicativeViz } from "@/components/viz/MultiplicativeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m11.3.1",
  minutes: 90,
  links: {
    revisits: ["m11.1.1", "m11.2.2", "m11.2.3"],
    foreshadows: ["m11.3.2", "m11.3.3", "m13.7.2"],
  },

  puzzle: (
    <>
      <p>
        How many divisors does 720 have, and what do they add up to? Listing all of them is slow. But 720 = 16 · 45, and 16
        and 45 share no factor: every divisor of 720 is a divisor of 16 times a divisor of 45, in exactly one way. Can the
        answer for 720 be read off from the answers for 16 and 45?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a number. Compare the product of the values at the prime powers with the value computed directly.</p>
      <MultiplicativeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="multiplicative functions">
        <p>
          An <strong>arithmetic function</strong> is a function <M>{"f"}</M> from the positive integers to the complex numbers.
          It is <strong>multiplicative</strong> if <M>{"f(1) = 1"}</M> and <M>{"f(mn) = f(m)f(n)"}</M> whenever{" "}
          <M>{"\\gcd(m, n) = 1"}</M>, and <strong>completely multiplicative</strong> if this holds for all{" "}
          <M>{"m, n"}</M>. A multiplicative function is determined by its values on prime powers:
        </p>
        <MD>{"f\\bigl(p_1^{k_1} \\cdots p_r^{k_r}\\bigr) = f\\bigl(p_1^{k_1}\\bigr) \\cdots f\\bigl(p_r^{k_r}\\bigr)."}</MD>
      </Definition>

      <Theorem title="summing over divisors preserves multiplicativity">
        <p>If <M>{"f"}</M> is multiplicative, so is <M>{"F(n) = \\sum_{d \\mid n} f(d)"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"\\gcd(m, n) = 1"}</M>. Every divisor <M>{"d"}</M> of <M>{"mn"}</M> is <M>{"d_1 d_2"}</M> for exactly one
          pair <M>{"d_1 \\mid m"}</M>, <M>{"d_2 \\mid n"}</M>, namely <M>{"d_1 = \\gcd(d, m)"}</M>,{" "}
          <M>{"d_2 = \\gcd(d, n)"}</M>, and <M>{"d_1, d_2"}</M> are coprime. So
        </p>
        <MD>{"F(mn) = \\sum_{d_1 \\mid m}\\sum_{d_2 \\mid n} f(d_1)f(d_2) = \\Bigl(\\sum_{d_1 \\mid m} f(d_1)\\Bigr)\\Bigl(\\sum_{d_2 \\mid n} f(d_2)\\Bigr) = F(m)F(n)."}</MD>
      </Proof>

      <Example title="the divisor functions">
        <p>
          Taking <M>{"f = 1"}</M> gives <M>{"\\tau(n)"}</M>, the number of divisors; taking <M>{"f(d) = d"}</M> gives{" "}
          <M>{"\\sigma(n)"}</M>, their sum. Both are multiplicative, and on prime powers
        </p>
        <MD>{"\\tau(p^k) = k + 1, \\qquad \\sigma(p^k) = 1 + p + \\cdots + p^k = \\frac{p^{k+1} - 1}{p - 1}."}</MD>
        <p>
          So for <M>{"720 = 2^4 \\cdot 3^2 \\cdot 5"}</M>, <M>{"\\tau(720) = 5 \\cdot 3 \\cdot 2 = 30"}</M> and{" "}
          <M>{"\\sigma(720) = 31 \\cdot 13 \\cdot 6 = 2418"}</M>.
        </p>
      </Example>

      <Remark title="Euler's function again">
        <p>
          <M>{"\\varphi"}</M> is multiplicative by the Chinese remainder theorem, with{" "}
          <M>{"\\varphi(p^k) = p^k - p^{k-1}"}</M>. None of <M>{"\\tau, \\sigma, \\varphi"}</M> is completely multiplicative:{" "}
          <M>{"\\tau(4) = 3"}</M> but <M>{"\\tau(2)^2 = 4"}</M>. Examples of completely multiplicative functions are{" "}
          <M>{"n^s"}</M> and, later, the Legendre symbol.
        </p>
      </Remark>

      <Remark title="Dirichlet convolution">
        <p>
          The operation <M>{"(f * g)(n) = \\sum_{d \\mid n} f(d)\\,g(n/d)"}</M> makes arithmetic functions into a commutative
          ring, and the convolution of multiplicative functions is multiplicative. The theorem above says{" "}
          <M>{"F = f * 1"}</M>. Through the series <M>{"\\sum f(n)/n^s"}</M>, convolution becomes multiplication, which is the
          door to analytic number theory.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mult",
      rung: "check",
      prompt: <p>What does it mean for <M>{"f"}</M> to be multiplicative?</p>,
      answer: {
        kind: "choice",
        options: ["f(m + n) = f(m) + f(n)", "f(mn) = f(m)f(n) whenever gcd(m, n) = 1, and f(1) = 1", "f(mn) = f(m) + f(n)", "f(n) = n for all n"],
        correct: [1],
      },
    },
    {
      key: "complete",
      rung: "check",
      prompt: <p>Which of these is completely multiplicative?</p>,
      answer: { kind: "choice", options: ["τ(n)", "σ(n)", "f(n) = n²", "φ(n)"], correct: [2] },
    },
    {
      key: "tau",
      rung: "apply",
      prompt: <p>Compute <M>{"\\tau(1800)"}</M>.</p>,
      answer: { kind: "numeric", value: 36, tolerance: 0 },
    },
    {
      key: "sigma",
      rung: "apply",
      prompt: <p>Compute <M>{"\\sigma(36)"}</M>.</p>,
      answer: { kind: "numeric", value: 91, tolerance: 0 },
    },
    {
      key: "phi",
      rung: "apply",
      prompt: <p>Compute <M>{"\\varphi(360)"}</M>.</p>,
      answer: { kind: "numeric", value: 96, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\sigma"}</M> is multiplicative.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes coprime m and n and shows each divisor of mn is uniquely a product of a divisor of m and a divisor of n.",
          "Writes σ(mn) as a double sum over these pairs.",
          "Factorises the double sum as σ(m)σ(n).",
        ],
      },
    },
    {
      key: "notcomplete",
      rung: "stretch",
      prompt: <p>Why is <M>{"\\tau"}</M> multiplicative but not completely multiplicative? Where does the proof for coprime numbers break down when they share a factor?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Gives an example such as τ(4) = 3 but τ(2)τ(2) = 4.",
          "Notes that when m and n share a factor, different pairs of divisors give the same product, so divisors of mn are overcounted.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a multiplicative function is and why it is determined by prime powers, why summing a multiplicative function over divisors gives another, the formulas for τ, σ and φ with an example, and what Dirichlet convolution is.",

  glimpse: (
    <p>
      The next lesson inverts sums over divisors with the Möbius function. Perfect numbers use σ, and the Riemann zeta function
      turns these identities into products over primes.
    </p>
  ),
};
