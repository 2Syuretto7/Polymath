import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LimitBandViz } from "@/components/viz/LimitBandViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.9.1",
  minutes: 85,
  links: {
    revisits: ["m2.2.2", "m2.1.3"],
    foreshadows: ["m6.2.2", "m6.2.4"],
  },

  puzzle: (
    <>
      <p>
        The decimal 0.333&hellip; is a list of approximations, 0.3, 0.33, 0.333, &hellip;, none of which equals 1/3. The
        last lesson defined sine by a sum that never ends. Compound interest gave e as the end of a list,{" "}
        <M>{"(1 + 1/n)^n"}</M>, that never ends either.
      </p>
      <p>
        What exactly does it mean for an endless list of numbers to &ldquo;end up&rdquo; at a value? And how can we know a
        list ends up somewhere when, as with <M>{"(1 + 1/n)^n"}</M>, we may not know the value in advance?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        A sequence converges to L if its terms eventually stay as close to L as anyone demands. Demand a tolerance ε; there
        must be a stage N after which every term lies within ε of L. A smaller ε may need a later N, but some N always
        works. This is the definition of a limit from chapter 2, with whole numbers n in place of x. Try it below.
      </p>
      <LimitBandViz />
    </>
  ),

  theory: (
    <>
      <Definition title="convergence">
        <p>
          A <strong>sequence</strong> is a list <M>{"a_1, a_2, a_3, \\ldots"}</M>, one real number for each positive integer.
          It <strong>converges</strong> to L, written <M>{"a_n \\to L"}</M> or <M>{"\\lim a_n = L"}</M>, if
        </p>
        <MD>{"\\text{for every } \\varepsilon > 0 \\text{ there is an } N \\text{ such that } |a_n - L| < \\varepsilon \\text{ for all } n \\ge N."}</MD>
        <p>A sequence that converges to no number <strong>diverges</strong>.</p>
      </Definition>

      <Example title="1/n tends to 0">
        <p>
          Given <M>{"\\varepsilon > 0"}</M>, choose an integer <M>{"N > 1/\\varepsilon"}</M>, which exists because the
          integers are unbounded. For <M>{"n \\ge N"}</M>, <M>{"|1/n - 0| = 1/n \\le 1/N < \\varepsilon"}</M>.
        </p>
      </Example>

      <Theorem title="limit laws">
        <p>
          If <M>{"a_n \\to A"}</M> and <M>{"b_n \\to B"}</M>, then <M>{"a_n + b_n \\to A + B"}</M>,{" "}
          <M>{"a_n b_n \\to AB"}</M>, and <M>{"a_n / b_n \\to A/B"}</M> if <M>{"B \\ne 0"}</M>. If{" "}
          <M>{"a_n \\le c_n \\le b_n"}</M> and <M>{"A = B"}</M>, then <M>{"c_n \\to A"}</M> (squeezing). If f is continuous
          at A, then <M>{"f(a_n) \\to f(A)"}</M>.
        </p>
      </Theorem>
      <p>
        The proofs are those of chapter 2, word for word. So, for instance,{" "}
        <M>{"\\frac{3n^2 + 1}{n^2 + 5} = \\frac{3 + 1/n^2}{1 + 5/n^2} \\to 3"}</M>.
      </p>

      <Theorem title="monotone convergence">
        <p>An increasing sequence that is bounded above converges, to the supremum of its terms.</p>
      </Theorem>
      <Proof>
        <p>
          Let L be the supremum of the terms, which exists by the completeness axiom. Given{" "}
          <M>{"\\varepsilon > 0"}</M>, <M>{"L - \\varepsilon"}</M> is not an upper bound, so some{" "}
          <M>{"a_N > L - \\varepsilon"}</M>. For <M>{"n \\ge N"}</M>,{" "}
          <M>{"L - \\varepsilon < a_N \\le a_n \\le L"}</M>, so <M>{"|a_n - L| < \\varepsilon"}</M>.
        </p>
      </Proof>
      <p>
        This is the answer to the second question in the puzzle. It proves that a limit exists without naming it, and the
        name can come afterwards. Completeness is essential: in the rationals, the increasing sequence 1, 1.4, 1.41,
        1.414, &hellip; of decimal approximations to √2 has no limit.
      </p>

      <Example title="a recursive sequence">
        <p>
          Let <M>{"a_1 = 1"}</M> and <M>{"a_{n+1} = \\sqrt{2 + a_n}"}</M>. By induction, <M>{"a_n < 2"}</M> (if{" "}
          <M>{"a_n < 2"}</M> then <M>{"a_{n+1} < \\sqrt{4} = 2"}</M>), and the sequence increases (since{" "}
          <M>{"2 + a > a^2"}</M> when <M>{"0 \\le a < 2"}</M>). So it converges, to some L. Taking limits in the
          recursion, <M>{"L = \\sqrt{2 + L}"}</M>, so <M>{"L^2 = L + 2"}</M>, and <M>{"L = 2"}</M>.
        </p>
      </Example>

      <Remark title="standard limits">
        <ul>
          <li><M>{"r^n \\to 0"}</M> if <M>{"|r| < 1"}</M>; it diverges if <M>{"|r| > 1"}</M> or <M>{"r = -1"}</M>.</li>
          <li><M>{"n^{1/n} \\to 1"}</M>, since <M>{"\\ln(n^{1/n}) = (\\ln n)/n \\to 0"}</M>.</li>
          <li><M>{"(1 + x/n)^n \\to e^x"}</M>, from the last chapter.</li>
          <li><M>{"x^n / n! \\to 0"}</M> for every x: once <M>{"n > 2|x|"}</M>, each further factor is less than 1/2.</li>
        </ul>
      </Remark>

      <Remark title="Cauchy's criterion">
        <p>
          There is a test for convergence that mentions no limit at all: a sequence converges exactly when its terms
          eventually stay close to each other, that is, when for every ε there is an N with{" "}
          <M>{"|a_m - a_n| < \\varepsilon"}</M> for all <M>{"m, n \\ge N"}</M>. Augustin-Louis Cauchy made this the basis of
          his analysis in the 1820s. Its proof needs completeness again, and Real Analysis I supplies it.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "N",
      rung: "check",
      prompt: (
        <p>
          For <M>{"a_n = 1/n"}</M> and <M>{"\\varepsilon = 0.01"}</M>, what is the smallest N such that{" "}
          <M>{"|a_n| < \\varepsilon"}</M> for all <M>{"n \\ge N"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 101 },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these sequences converge? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["(−1)ⁿ", "(−1)ⁿ/n", "n/(n + 1)", "n²/(n + 1)"], correct: [1, 2] },
    },
    {
      key: "rational",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\lim \\frac{2n^2 - n}{5n^2 + 3}"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.4 },
    },
    {
      key: "root",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\lim \\left(\\sqrt{n^2 + n} - n\\right)"}</M>. (Multiply and divide by <M>{"\\sqrt{n^2 + n} + n"}</M>.)
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "recursive",
      rung: "apply",
      prompt: (
        <p>
          Let <M>{"a_1 = 1"}</M> and <M>{"a_{n+1} = \\sqrt{6 + a_n}"}</M>. Assuming it converges, what is its limit?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "squeeze",
      rung: "prove",
      prompt: (
        <p>
          Prove from the definition that <M>{"\\frac{\\sin n}{n} \\to 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses |sin n| ≤ 1 to get |sin n / n| ≤ 1/n.",
          "Given ε > 0, chooses N > 1/ε.",
          "Concludes that |sin n / n − 0| < ε for n ≥ N.",
        ],
      },
    },
    {
      key: "unique",
      rung: "stretch",
      prompt: (
        <p>
          Prove that a sequence cannot converge to two different limits, and that a convergent sequence is bounded. Then
          give an example showing that a bounded sequence need not converge.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "If a_n → L and a_n → M with L ≠ M, takes ε = |L − M|/2 and finds a term within ε of both, a contradiction.",
          "Takes ε = 1 to bound all terms from some N on, and handles the finitely many earlier terms by taking a maximum.",
          "Gives an example such as (−1)ⁿ.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for a sequence to converge, using the idea of a tolerance ε and a stage N, and why an increasing sequence that is bounded above must converge.",

  glimpse: (
    <p>
      Real Analysis I develops sequences in depth: the monotone convergence theorem, the Bolzano-Weierstrass theorem that
      every bounded sequence has a convergent subsequence, and Cauchy sequences, which give a way to build the real numbers
      themselves out of the rationals.
    </p>
  ),
};
