import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GenFuncViz } from "@/components/viz/GenFuncViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.2.3",
  minutes: 85,
  links: {
    revisits: ["m4.2.2", "m4.1.2", "m0.8.5"],
    foreshadows: ["m4.2.4", "m21.5.1", "m21.5.3"],
  },

  puzzle: (
    <>
      <p>
        In how many ways can you pay ₹10 using ₹1, ₹2 and ₹5 coins? You can list them, carefully. Now try ₹100. The
        trick that makes this easy seems absurd at first: write down a function that nobody will ever evaluate, an infinite
        series in a variable x that stands for nothing, and multiply. The answer appears as a coefficient. As Herbert Wilf
        put it, a generating function is a clothesline on which we hang up a sequence of numbers for display.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose the coins. Each row of the table multiplies in one more coin&rsquo;s series, and the last row gives the
        number of ways to pay each amount.
      </p>
      <GenFuncViz />
    </>
  ),

  theory: (
    <>
      <Definition title="generating function">
        <p>The <strong>ordinary generating function</strong> of a sequence <M>{"a_0, a_1, a_2, \\dots"}</M> is the formal power series</p>
        <MD>{"A(x) = a_0 + a_1x + a_2x^2 + \\dots = \\sum_{n \\ge 0}a_nx^n."}</MD>
        <p>
          &ldquo;Formal&rdquo; means we add and multiply such series like polynomials, without worrying about convergence.
          Basic examples: <M>{"\\frac{1}{1 - x} = \\sum x^n"}</M>, <M>{"(1 + x)^m = \\sum \\binom{m}{n}x^n"}</M>, and
        </p>
        <MD>{"\\frac{1}{(1 - x)^k} = \\sum_{n \\ge 0}\\binom{n + k - 1}{k - 1}x^n."}</MD>
      </Definition>

      <Theorem title="products count combined choices">
        <p>
          If <M>{"A(x) = \\sum a_ix^i"}</M> and <M>{"B(x) = \\sum b_jx^j"}</M>, the coefficient of <M>{"x^n"}</M> in{" "}
          <M>{"A(x)B(x)"}</M> is <M>{"\\sum_{i+j=n}a_ib_j"}</M>. So if <M>{"a_i"}</M> counts ways to make a size i from one
          kind of object, and <M>{"b_j"}</M> ways to make a size j from another, the product counts ways to make a total
          size n from both.
        </p>
      </Theorem>
      <Proof>
        <p>Multiply out: each term <M>{"x^n"}</M> arises from a term <M>{"a_ix^i"}</M> times a term <M>{"b_jx^j"}</M> with i + j = n.</p>
      </Proof>

      <Example title="paying with coins">
        <p>
          Using any number of ₹5 coins contributes 0, 5, 10, … rupees, with generating function{" "}
          <M>{"1 + x^5 + x^{10} + \\dots = 1/(1 - x^5)"}</M>. So the number of ways to pay n with ₹1, ₹2 and ₹5 coins is the
          coefficient of <M>{"x^n"}</M> in
        </p>
        <MD>{"\\frac{1}{(1 - x)(1 - x^2)(1 - x^5)},"}</MD>
        <p>which is 10 for n = 10.</p>
      </Example>

      <Example title="solving a recurrence">
        <p>
          For the Fibonacci numbers, <M>{"F_0 = 0"}</M>, <M>{"F_1 = 1"}</M>, multiply the recurrence by{" "}
          <M>{"x^n"}</M> and sum over n ≥ 2: <M>{"F(x) - x = xF(x) + x^2F(x)"}</M>. So
        </p>
        <MD>{"F(x) = \\frac{x}{1 - x - x^2}."}</MD>
        <p>
          Splitting into partial fractions over the roots of <M>{"1 - x - x^2"}</M> and expanding each as a geometric series
          gives Binet&rsquo;s formula again, this time with no guessing.
        </p>
      </Example>

      <Remark title="Euler&rsquo;s partition theorem">
        <p>
          The number of ways to write n as a sum of distinct positive integers equals the number of ways to write it as a
          sum of odd ones. Euler&rsquo;s proof is two lines of generating functions:
        </p>
        <MD>{"\\prod_{k\\ge1}(1 + x^k) = \\prod_{k\\ge1}\\frac{1 - x^{2k}}{1 - x^k} = \\prod_{k\\ge1}\\frac{1}{1 - x^{2k-1}},"}</MD>
        <p>since the even factors on top cancel the even factors underneath, leaving only the odd ones below.</p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "geo",
      rung: "check",
      prompt: <p>What is the coefficient of <M>{"x^5"}</M> in <M>{"1/(1 - x)"}</M>?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "binom",
      rung: "check",
      prompt: <p>What is the coefficient of <M>{"x^3"}</M> in <M>{"(1 + x)^6"}</M>?</p>,
      answer: { kind: "numeric", value: 20 },
    },
    {
      key: "coins",
      rung: "apply",
      prompt: <p>In how many ways can you pay ₹10 using ₹1, ₹2 and ₹5 coins, if the order does not matter?</p>,
      answer: { kind: "numeric", value: 10 },
    },
    {
      key: "cube",
      rung: "apply",
      prompt: <p>What is the coefficient of <M>{"x^4"}</M> in <M>{"1/(1 - x)^3"}</M>?</p>,
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "distinct",
      rung: "apply",
      prompt: <p>In how many ways can 6 be written as a sum of distinct positive integers, ignoring order?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "fibgf",
      rung: "prove",
      prompt: (
        <p>
          Derive the generating function <M>{"F(x) = x/(1 - x - x^2)"}</M> of the Fibonacci numbers from the recurrence and
          initial values, explaining each step.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Multiplies Fₙ = Fₙ₋₁ + Fₙ₋₂ by xⁿ and sums over n ≥ 2.",
          "Identifies the sums as F(x) − F₀ − F₁x, x(F(x) − F₀) and x²F(x).",
          "Solves for F(x). A clear derivation earns full credit, even with a small slip in the indices.",
        ],
      },
    },
    {
      key: "euler",
      rung: "stretch",
      prompt: (
        <p>
          Prove Euler&rsquo;s theorem that partitions into distinct parts and partitions into odd parts are equinumerous,
          by explaining why each product counts the right partitions and checking the identity of products. Verify it for n
          = 7.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Explains that choosing 0 or 1 copies of each part gives ∏(1 + xᵏ), and any number of each odd part gives ∏1/(1 − x²ᵏ⁻¹).",
          "Uses 1 + xᵏ = (1 − x²ᵏ)/(1 − xᵏ) and cancels the even factors.",
          "Checks n = 7: both counts are 5. A sound argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a generating function is, why multiplying generating functions counts combined choices, how this counts ways of paying with coins, and how it solves the Fibonacci recurrence.",

  glimpse: (
    <p>
      The next lesson uses a generating function to find the Catalan numbers. Combinatorics develops partitions and
      exponential generating functions, which count arrangements where order matters.
    </p>
  ),
};
