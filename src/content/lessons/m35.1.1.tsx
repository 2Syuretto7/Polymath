import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DivisorAverageViz } from "@/components/viz/DivisorAverageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m35.1.1",
  minutes: 90,
  links: {
    revisits: ["m11.3.1", "m11.1.3", "m6.7.3"],
    foreshadows: ["m35.1.2", "m35.2.1", "m35.2.2"],
  },

  puzzle: (
    <>
      <p>
        The number of divisors of n is 2 when n is prime, 64 when n = 5040, and wildly irregular in between. Nobody can
        predict d(n) from the size of n. Yet the total of d(n) for n up to a million can be predicted to within a few
        hundred. How can an unpredictable sequence have such a predictable sum?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose an arithmetic function and a bound x, and compare its average with the predicted main term.</p>
      <DivisorAverageViz />
    </>
  ),

  theory: (
    <>
      <Definition title="average order">
        <p>
          An arithmetic function f has <strong>average order</strong> g if{" "}
          <M>{"\\sum_{n \\le x} f(n) \\sim \\sum_{n \\le x} g(n)"}</M>, with g smooth. Analytic number theory studies such
          sums, written with the notation <M>{"F(x) = G(x) + O(E(x))"}</M>, meaning{" "}
          <M>{"|F(x) - G(x)| \\le C\\, E(x)"}</M> for large x.
        </p>
      </Definition>

      <Theorem title="Dirichlet’s divisor problem">
        <p>
          <M>{"\\sum_{n \\le x} d(n) = x \\log x + (2\\gamma - 1)x + O(\\sqrt x)"}</M>, where γ ≈ 0.5772 is Euler&rsquo;s
          constant. So d(n) has average order log n.
        </p>
      </Theorem>

      <Remark title="the hyperbola method">
        <p>
          The sum counts lattice points (a, b) with ab ≤ x, under a hyperbola. Counting column by column gives{" "}
          <M>{"\\sum_{a \\le x} \\lfloor x/a \\rfloor = x \\log x + O(x)"}</M>. Dirichlet&rsquo;s trick uses the symmetry of the
          hyperbola: count the points with a ≤ √x, those with b ≤ √x, and subtract the square counted twice. The errors
          now come from only √x terms. Improving the exponent ½ is a famous open problem; the truth is believed to be{" "}
          <M>{"\\tfrac14 + \\varepsilon"}</M>.
        </p>
      </Remark>

      <Example title="other averages">
        <p>
          <M>{"\\sum_{n \\le x} \\varphi(n) = \\frac{3}{\\pi^2}x^2 + O(x \\log x)"}</M>, so the chance that two random
          integers are coprime is <M>{"6/\\pi^2"}</M>. The number ω(n) of distinct prime factors has average order log log n,
          and Hardy and Ramanujan showed that almost every n has about log log n of them.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "ord",
      rung: "check",
      prompt: <p>What is the average order of d(n)?</p>,
      answer: { kind: "choice", options: ["log n", "n", "2", "√n"], correct: [0] },
    },
    {
      key: "hyp",
      rung: "check",
      prompt: <p>What does the hyperbola method exploit?</p>,
      answer: { kind: "choice", options: ["The symmetry of the region ab ≤ x under swapping a and b", "The Euler product of ζ", "Quadratic reciprocity", "The residue theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose d(n) and x = 10,000. What is the average, to four decimal places?</p>,
      answer: { kind: "numeric", value: 9.3668, tolerance: 0.001 },
    },
    {
      key: "small",
      rung: "apply",
      prompt: <p>What is d(1) + d(2) + ⋯ + d(10)?</p>,
      answer: { kind: "numeric", value: 27, tolerance: 0 },
    },
    {
      key: "cop",
      rung: "apply",
      prompt: <p>What is the probability that two random integers are coprime, 6/π², to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.608, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the sum of d(n) for n ≤ x equals x log x + O(x).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the sum as the number of pairs (a, b) with ab ≤ x, which is the sum over a ≤ x of ⌊x/a⌋.",
          "Replaces ⌊x/a⌋ by x/a with an error of at most 1 per term, a total of O(x).",
          "Uses the sum of 1/a for a ≤ x being log x + O(1) to conclude.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why d(n) cannot be bounded by a constant times log n for every n.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes n = 2ᵏ or a product of the first k primes, and computes d(n) = k + 1 or 2ᵏ.",
          "Compares with log n, showing that for the product of the first k primes d(n) grows faster than any multiple of log n.",
          "Concludes that the average hides large values. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Sums of arithmetic functions are best handled by packaging the whole sequence into one analytic function, whose
        behaviour near a single point controls the average.
      </p>
      <p>Next, Dirichlet series.</p>
    </>
  ),
};
