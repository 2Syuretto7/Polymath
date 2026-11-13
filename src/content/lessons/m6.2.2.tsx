import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CobwebViz } from "@/components/viz/CobwebViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.2.2",
  minutes: 80,
  links: {
    revisits: ["m6.1.2", "m6.2.1", "m1.5.4"],
    foreshadows: ["m6.2.3", "m6.3.1", "m12.2.3"],
  },

  puzzle: (
    <>
      <p>
        Define <M>{"x_1 = 1"}</M> and <M>{"x_{n+1} = \\sqrt{2 + x_n}"}</M>. The terms are 1, 1.732, 1.932, 1.983, and so on.
        They seem to creep up towards 2. If the sequence has a limit <M>{"L"}</M>, then letting <M>{"n \\to \\infty"}</M> on
        both sides gives <M>{"L = \\sqrt{2 + L}"}</M>, so <M>{"L = 2"}</M>. But that argument assumed a limit exists. The same
        trick applied to <M>{"x_{n+1} = 2x_n"}</M> with <M>{"x_1 = 1"}</M> gives <M>{"L = 2L"}</M>, so <M>{"L = 0"}</M>, for
        a sequence that runs off to infinity. How can we know a limit exists before we know what it is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Each step of the cobweb goes up to the curve <M>{"y = \\sqrt{2 + x}"}</M> and across to the line{" "}
        <M>{"y = x"}</M>. Start below 2 and above 2, and watch the terms march in one direction without ever overshooting.
      </p>
      <CobwebViz />
    </>
  ),

  theory: (
    <>
      <Definition title="monotone sequences">
        <p>
          A sequence is <strong>increasing</strong> if <M>{"a_n \\le a_{n+1}"}</M> for all <M>{"n"}</M>, and{" "}
          <strong>decreasing</strong> if <M>{"a_n \\ge a_{n+1}"}</M> for all <M>{"n"}</M>. It is <strong>monotone</strong> if
          it is one or the other.
        </p>
      </Definition>

      <Theorem title="the monotone convergence theorem">
        <p>
          A monotone sequence converges if and only if it is bounded. An increasing bounded sequence converges to{" "}
          <M>{"\\sup\\{a_n\\}"}</M>, and a decreasing bounded sequence to <M>{"\\inf\\{a_n\\}"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Convergent sequences are bounded, so one direction is done. Suppose <M>{"(a_n)"}</M> is increasing and bounded above.
          By completeness, <M>{"s = \\sup\\{a_n\\}"}</M> exists. Let <M>{"\\varepsilon > 0"}</M>. Since{" "}
          <M>{"s - \\varepsilon"}</M> is not an upper bound, some <M>{"a_N > s - \\varepsilon"}</M>. For{" "}
          <M>{"n \\ge N"}</M>, monotonicity gives
        </p>
        <MD>{"s - \\varepsilon < a_N \\le a_n \\le s,"}</MD>
        <p>
          so <M>{"|a_n - s| < \\varepsilon"}</M>. The decreasing case follows by applying this to <M>{"(-a_n)"}</M>.
        </p>
      </Proof>

      <Example title="the square-root recursion">
        <p>
          For <M>{"x_{n+1} = \\sqrt{2 + x_n}"}</M> with <M>{"x_1 = 1"}</M>, show by induction that{" "}
          <M>{"x_n < 2"}</M>: if <M>{"x_n < 2"}</M> then <M>{"x_{n+1} < \\sqrt{4} = 2"}</M>. And the sequence increases,
          because for <M>{"0 \\le x < 2"}</M>, <M>{"2 + x - x^2 = (2 - x)(1 + x) > 0"}</M>, so{" "}
          <M>{"\\sqrt{2 + x} > x"}</M>. Bounded and increasing, it converges. Now the limit equation is earned, and since the
          terms are positive, <M>{"L = 2"}</M>.
        </p>
      </Example>

      <Remark title="completeness at work">
        <p>
          In the rationals the theorem fails: the decimal truncations 1, 1.4, 1.41, 1.414, ... of <M>{"\\sqrt 2"}</M> are
          increasing and bounded, but have no rational limit. The monotone convergence theorem is in fact equivalent to the
          completeness axiom, which is why it appears among the forms of completeness. A famous use: the sequence{" "}
          <M>{"(1 + 1/n)^n"}</M> is increasing and bounded by 3, and its limit is the number <M>{"e"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "limit",
      rung: "check",
      prompt: (
        <p>
          An increasing sequence has terms <M>{"a_n = 5 - 1/n"}</M>. To what does the monotone convergence theorem say it
          converges?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these sequences must converge? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "An increasing sequence bounded above",
          "A decreasing sequence bounded below",
          "A bounded sequence",
          "An increasing sequence",
        ],
        correct: [0, 1],
      },
    },
    {
      key: "recur",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"x_1 = 1"}</M> and <M>{"x_{n+1} = \\sqrt{6 + x_n}"}</M>. Assuming it converges, what is its limit?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "halve",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"x_1 = 10"}</M> and <M>{"x_{n+1} = \\tfrac12 (x_n + 4)"}</M>. The sequence is decreasing and bounded below.
          What is its limit?
        </p>
      ),
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "trap",
      rung: "apply",
      prompt: (
        <p>
          Why is it wrong to conclude, from <M>{"L = 2L"}</M>, that <M>{"x_{n+1} = 2x_n"}</M> with <M>{"x_1 = 1"}</M>{" "}
          converges to 0?
        </p>
      ),
      answer: {
        kind: "choice",
        options: [
          "Because the algebra is wrong.",
          "Because the limit equation only holds if the limit exists, and this sequence is unbounded, so it does not converge.",
          "Because 0 is not a real number.",
          "Because the sequence is decreasing.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that a decreasing sequence bounded below converges to the infimum of its terms. Short sentences are fine.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses completeness to get the infimum m.",
          "Given ε, uses that m + ε is not a lower bound to find a term a_N < m + ε.",
          "Uses monotonicity to get m ≤ a_n < m + ε for all n ≥ N, so a_n → m.",
        ],
      },
    },
    {
      key: "e",
      rung: "stretch",
      prompt: (
        <p>
          Show that <M>{"a_n = 1 + \\tfrac{1}{1!} + \\tfrac{1}{2!} + \\cdots + \\tfrac{1}{n!}"}</M> converges. A sketch is
          enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes the sequence is increasing, since each added term is positive.",
          "Bounds it, for example by comparing 1/k! with 1/2^(k−1) to get a_n < 3.",
          "Concludes by the monotone convergence theorem.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the limit equation needs a limit to exist first, what the monotone convergence theorem says, how its proof uses the supremum, and how it shows the square-root recursion converges to 2.",

  glimpse: (
    <p>
      The next lesson shows that every bounded sequence, monotone or not, has a convergent subsequence: the
      Bolzano-Weierstrass theorem, whose proof finds a monotone subsequence. Much later, the contraction mapping theorem
      gives a cleaner way to see that recursions such as this one converge, and it works in any complete metric space.
    </p>
  ),
};
