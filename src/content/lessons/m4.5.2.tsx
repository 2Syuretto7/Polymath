import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BigOViz } from "@/components/viz/BigOViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.5.2",
  minutes: 80,
  links: {
    revisits: ["m4.5.1", "m0.4.1", "m4.2.2"],
    foreshadows: ["m4.5.3", "m4.5.4", "m21.3.1"],
  },

  puzzle: (
    <>
      <p>
        Two programmers sort the same list of a million names. One uses insertion sort on a fast machine that does a
        billion steps a second. The other uses a cleverer method on a machine a hundred times slower. The slow machine
        finishes first, by a wide margin. How can a cleverer method beat a hundredfold advantage in speed, and how should
        we compare algorithms so that the answer does not depend on the machine?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Move the slider to increase the input size. Watch how long each growth rate takes at a billion steps a second, and
        notice where the small differences at the start become enormous.
      </p>
      <BigOViz />
    </>
  ),

  theory: (
    <>
      <Definition title="big O">
        <p>
          Let <M>{"f"}</M> and <M>{"g"}</M> be functions from the natural numbers to the positive reals. We write{" "}
          <M>{"f(n) = O(g(n))"}</M> if there are constants <M>{"c > 0"}</M> and <M>{"n_0"}</M> such that
        </p>
        <MD>{"f(n) \\le c\\, g(n) \\quad \\text{for all } n \\ge n_0."}</MD>
        <p>
          In words: from some point on, <M>{"f"}</M> grows no faster than a constant multiple of <M>{"g"}</M>. Similarly{" "}
          <M>{"f = \\Omega(g)"}</M> if <M>{"f(n) \\ge c\\, g(n)"}</M> eventually, and <M>{"f = \\Theta(g)"}</M> if both
          hold. The constants are deliberately thrown away: they depend on the machine, while the growth rate depends on
          the algorithm.
        </p>
      </Definition>

      <Example title="a polynomial">
        <p>
          Take <M>{"f(n) = 3n^2 + 5n + 7"}</M>. For <M>{"n \\ge 1"}</M> we have <M>{"5n \\le 5n^2"}</M> and{" "}
          <M>{"7 \\le 7n^2"}</M>, so <M>{"f(n) \\le 15n^2"}</M>. With <M>{"c = 15"}</M> and <M>{"n_0 = 1"}</M>, this shows{" "}
          <M>{"f = O(n^2)"}</M>. Since also <M>{"f(n) \\ge 3n^2"}</M>, in fact <M>{"f = \\Theta(n^2)"}</M>. Only the
          leading term matters.
        </p>
      </Example>

      <Theorem title="the usual ladder">
        <p>For any constants <M>{"k \\ge 1"}</M> and <M>{"b > 1"}</M>:</p>
        <MD>{"\\log n = O(n), \\qquad n^k = O(n^{k+1}), \\qquad n^k = O(b^n),"}</MD>
        <p>and none of these can be reversed.</p>
      </Theorem>

      <Proof>
        <p>
          We show <M>{"n^k = O(2^n)"}</M>; the other cases are similar. The ratio{" "}
          <M>{"\\frac{(n+1)^k / 2^{n+1}}{n^k / 2^n} = \\tfrac12 (1 + 1/n)^k"}</M> is below <M>{"\\tfrac34"}</M> once{" "}
          <M>{"n"}</M> is large enough, because <M>{"(1+1/n)^k \\to 1"}</M>. So the sequence <M>{"n^k/2^n"}</M>{" "}
          eventually decreases, and is therefore bounded by some constant <M>{"c"}</M>. That is,{" "}
          <M>{"n^k \\le c \\cdot 2^n"}</M> for all large <M>{"n"}</M>. It cannot be reversed, because the same ratio
          argument shows <M>{"n^k/2^n \\to 0"}</M>, so <M>{"2^n"}</M> is not bounded by any constant multiple of{" "}
          <M>{"n^k"}</M>.
        </p>
      </Proof>

      <Remark title="what big O does and does not say">
        <p>
          Big O is an upper bound, so <M>{"n = O(n^2)"}</M> is true, if not very informative; that is why{" "}
          <M>{"\\Theta"}</M> is used when we want the exact growth rate. It describes large inputs only: an algorithm
          with a large constant can lose to a worse growth rate on small inputs, and real libraries often switch to
          insertion sort on short lists for this reason. The distinction that matters most in practice is between
          polynomial growth, such as <M>{"n^2"}</M>, and exponential growth, such as <M>{"2^n"}</M>: the first scales
          with better machines, the second does not.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does <M>{"f(n) = O(g(n))"}</M> mean?</p>,
      answer: {
        kind: "choice",
        options: [
          "f(n) is less than g(n) for every n.",
          "From some point on, f(n) is at most a constant multiple of g(n).",
          "f and g are equal for large n.",
          "f(n) is at least g(n) for every n.",
        ],
        correct: [1],
      },
    },
    {
      key: "lead",
      rung: "check",
      prompt: <p>Which is the tightest correct statement about <M>{"f(n) = 4n^3 + 100n^2 + 9"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["f = Θ(n²)", "f = Θ(n³)", "f = Θ(2ⁿ)", "f = Θ(100n²)"],
        correct: [1],
      },
    },
    {
      key: "time",
      rung: "apply",
      prompt: (
        <p>
          An algorithm takes <M>{"n^2"}</M> steps, and the machine does <M>{"10^9"}</M> steps a second. How many seconds
          does it take when <M>{"n = 10^6"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 1000 },
    },
    {
      key: "true",
      rung: "apply",
      prompt: <p>Which of these statements are true? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["n = O(n²)", "n² = O(n)", "n¹⁰ = O(2ⁿ)", "2ⁿ = O(n¹⁰)"],
        correct: [0, 2],
      },
    },
    {
      key: "double",
      rung: "apply",
      prompt: (
        <p>
          An algorithm runs in time proportional to <M>{"n^3"}</M>. If the input size doubles, by what factor does the
          running time grow?
        </p>
      ),
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: (
        <p>
          Prove from the definition that <M>{"2n^2 + 10n = O(n^2)"}</M>, by giving constants <M>{"c"}</M> and{" "}
          <M>{"n_0"}</M> that work.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Gives explicit constants, for example c = 12 and n₀ = 1, or c = 3 and n₀ = 10.",
          "Shows the inequality holds for all n ≥ n₀, for instance using 10n ≤ 10n² when n ≥ 1.",
        ],
      },
    },
    {
      key: "notback",
      rung: "stretch",
      prompt: <p>Prove that <M>{"n^2"}</M> is not <M>{"O(n)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes for contradiction that n² ≤ cn for all n ≥ n₀.",
          "Divides by n to get n ≤ c for all large n, and picks n larger than both c and n₀ to reach a contradiction.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what big O notation means, why constants are ignored, how to show a polynomial is big O of its leading term, and why exponential growth is so much worse than polynomial.",

  glimpse: (
    <p>
      The next lesson meets recursion and merge sort, which sorts in <M>{"\\Theta(n \\log n)"}</M> time, and explains the
      puzzle above. The lesson after asks which problems have polynomial algorithms at all.
    </p>
  ),
};
