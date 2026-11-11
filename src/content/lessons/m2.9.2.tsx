import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SeriesSumViz } from "@/components/viz/SeriesSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.9.2",
  minutes: 90,
  links: {
    revisits: ["m0.8.1", "m2.7.4"],
    foreshadows: ["m6.3.1", "m11.1.2"],
  },

  puzzle: (
    <>
      <p>
        Add <M>{"1 + \\tfrac{1}{2} + \\tfrac{1}{4} + \\tfrac{1}{8} + \\cdots"}</M> and the total creeps up to 2. Add{" "}
        <M>{"1 + \\tfrac{1}{2} + \\tfrac{1}{3} + \\tfrac{1}{4} + \\cdots"}</M> and, although the terms also shrink to
        nothing, the total passes 10, then 100, then any number you name, if you wait long enough.
      </p>
      <p>
        The two series look so alike. What separates a sum that settles from one that does not, and how can you tell
        without adding up for ever?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        An infinite sum means the limit of its partial sums: add the first N terms, then let N grow. Whether that limit
        exists depends not just on the terms shrinking, but on how fast. Compare the partial sums of a few series below.
      </p>
      <SeriesSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="series">
        <p>
          The series <M>{"\\sum_{n=1}^\\infty a_n"}</M> has <strong>partial sums</strong>{" "}
          <M>{"S_N = a_1 + \\cdots + a_N"}</M>. It <strong>converges</strong> to S, its sum, if <M>{"S_N \\to S"}</M>; otherwise
          it diverges.
        </p>
      </Definition>

      <Theorem title="geometric series">
        <p>
          <M>{"\\sum_{n=0}^\\infty r^n = \\dfrac{1}{1 - r}"}</M> if <M>{"|r| < 1"}</M>, and the series diverges if{" "}
          <M>{"|r| \\ge 1"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          For <M>{"r \\ne 1"}</M>, <M>{"S_N = 1 + r + \\cdots + r^{N-1} = \\frac{1 - r^N}{1 - r}"}</M>, and{" "}
          <M>{"r^N \\to 0"}</M> exactly when <M>{"|r| < 1"}</M>. If <M>{"|r| \\ge 1"}</M>, the terms do not tend to 0, and
          the next theorem applies.
        </p>
      </Proof>

      <Theorem title="the term test">
        <p>
          If <M>{"\\sum a_n"}</M> converges, then <M>{"a_n \\to 0"}</M>. Equivalently, if the terms do not tend to 0, the
          series diverges.
        </p>
      </Theorem>
      <p>
        For <M>{"a_n = S_n - S_{n-1} \\to S - S = 0"}</M>. The converse is false, and the harmonic series is the
        counterexample.
      </p>

      <Theorem title="the integral test">
        <p>
          Let f be positive and decreasing on <M>{"[1, \\infty)"}</M>, with <M>{"a_n = f(n)"}</M>. Then{" "}
          <M>{"\\sum a_n"}</M> converges exactly when <M>{"\\int_1^\\infty f"}</M> does.
        </p>
      </Theorem>
      <Proof>
        <p>
          On <M>{"[n, n + 1]"}</M>, <M>{"a_{n+1} \\le f \\le a_n"}</M>. Integrating and adding,
        </p>
        <MD>{"S_{N+1} - a_1 \\le \\int_1^{N+1} f \\le S_N."}</MD>
        <p>
          The partial sums increase, so they converge exactly when they are bounded (monotone convergence), and the
          inequalities show they are bounded exactly when the integrals are.
        </p>
      </Proof>
      <p>
        With the p-integrals: <M>{"\\sum 1/n^p"}</M> converges exactly when <M>{"p > 1"}</M>. The harmonic series diverges;{" "}
        <M>{"\\sum 1/n^2"}</M> converges.
      </p>

      <Theorem title="comparison tests">
        <ul>
          <li>
            If <M>{"0 \\le a_n \\le b_n"}</M> and <M>{"\\sum b_n"}</M> converges, so does <M>{"\\sum a_n"}</M>; if{" "}
            <M>{"\\sum a_n"}</M> diverges, so does <M>{"\\sum b_n"}</M>.
          </li>
          <li>
            If <M>{"a_n, b_n > 0"}</M> and <M>{"a_n / b_n \\to c"}</M> with <M>{"0 < c < \\infty"}</M>, the two series
            converge or diverge together (limit comparison).
          </li>
        </ul>
      </Theorem>

      <Theorem title="the ratio test">
        <p>
          Let <M>{"a_n > 0"}</M> and <M>{"a_{n+1}/a_n \\to \\rho"}</M>. If <M>{"\\rho < 1"}</M> the series converges; if{" "}
          <M>{"\\rho > 1"}</M> it diverges; if <M>{"\\rho = 1"}</M> the test says nothing.
        </p>
      </Theorem>
      <p>
        If <M>{"\\rho < 1"}</M>, pick r with <M>{"\\rho < r < 1"}</M>. From some point on each term is less than r times
        the one before, so the tail is smaller than a geometric series with ratio r. If <M>{"\\rho > 1"}</M>, the terms
        eventually grow, and the term test applies.
      </p>

      <Example title="choosing a test">
        <ul>
          <li><M>{"\\sum \\frac{n}{2^n}"}</M>: the ratio is <M>{"\\frac{n+1}{2n} \\to \\tfrac{1}{2}"}</M>, so it converges.</li>
          <li><M>{"\\sum \\frac{1}{n^2 + 3n}"}</M>: compare with <M>{"1/n^2"}</M>; converges.</li>
          <li><M>{"\\sum \\frac{n}{n^2 + 1}"}</M>: limit comparison with <M>{"1/n"}</M>, ratio <M>{"\\to 1"}</M>; diverges.</li>
          <li><M>{"\\sum \\frac{1}{n \\ln n}"}</M>, from <M>{"n = 2"}</M>: integral test, <M>{"\\int dx/(x\\ln x) = \\ln \\ln x"}</M>; diverges, astonishingly slowly.</li>
        </ul>
      </Example>

      <Remark title="a medieval proof">
        <p>
          Nicole Oresme proved that the harmonic series diverges around 1350, by grouping:{" "}
          <M>{"1 + \\tfrac{1}{2} + (\\tfrac{1}{3} + \\tfrac{1}{4}) + (\\tfrac{1}{5} + \\cdots + \\tfrac{1}{8}) + \\cdots"}</M>.
          Each bracket is at least <M>{"\\tfrac{1}{2}"}</M>, so the partial sums pass any bound. The divergence is slow:
          the first million terms add up to only about 14.4.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "geom",
      rung: "check",
      prompt: (
        <p>
          Find <M>{"\\sum_{n=0}^\\infty \\left(\\tfrac{2}{3}\\right)^n"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "termtest",
      rung: "check",
      prompt: <p>The terms of a series tend to 0. What can you conclude?</p>,
      answer: {
        kind: "choice",
        options: ["Nothing yet: it may converge or diverge", "It converges", "It diverges", "Its sum is 0"],
        correct: [0],
      },
    },
    {
      key: "p",
      rung: "apply",
      prompt: <p>Which of these series converge? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["Σ 1/n³", "Σ 1/√n", "Σ 1/n^1.01", "Σ n/(n + 1)"], correct: [0, 2] },
    },
    {
      key: "ratio",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"\\sum \\frac{3^n}{n!}"}</M>, what is the limit of <M>{"a_{n+1}/a_n"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "tele",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\sum_{n=1}^\\infty \\frac{1}{n(n + 1)}"}</M>, using <M>{"\\frac{1}{n(n + 1)} = \\frac{1}{n} - \\frac{1}{n + 1}"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "integral",
      rung: "prove",
      prompt: (
        <p>
          Use the integral test to prove that <M>{"\\sum_{n=1}^\\infty \\frac{1}{n^2}"}</M> converges, and that its sum is
          less than 2.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Checks that 1/x² is positive and decreasing on [1, ∞).",
          "Uses S_N ≤ a₁ + ∫ from 1 to N of dx/x² < 1 + 1.",
          "Concludes that the increasing partial sums are bounded by 2, so the series converges with sum at most 2.",
        ],
      },
    },
    {
      key: "basel",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"\\sum_{n=2}^\\infty \\frac{1}{n^2} < \\sum_{n=2}^\\infty \\frac{1}{n(n - 1)}"}</M>, find the
          right-hand sum, and deduce a bound for <M>{"\\sum_{n=1}^\\infty 1/n^2"}</M>. How does it compare with Euler&rsquo;s
          value <M>{"\\pi^2/6 \\approx 1.645"}</M>?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes that n² > n(n − 1) for n ≥ 2, so each term on the left is smaller.",
          "Telescopes 1/(n(n − 1)) = 1/(n − 1) − 1/n to get a sum of 1.",
          "Concludes the full sum is less than 2, consistent with π²/6, and remarks that the bound is not sharp.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for an infinite series to have a sum, why terms shrinking to 0 is not enough, and how the comparison, integral and ratio tests decide convergence.",

  glimpse: (
    <p>
      Real Analysis I proves these tests carefully and adds sharper ones. In Elementary Number Theory, Euler&rsquo;s proof
      that the sum of the reciprocals of the primes diverges gives a new proof that there are infinitely many primes, and
      the slow growth of the harmonic series measures how the primes thin out.
    </p>
  ),
};
