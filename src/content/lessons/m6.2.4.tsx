import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CauchyTailViz } from "@/components/viz/CauchyTailViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.2.4",
  minutes: 85,
  links: {
    revisits: ["m6.2.3", "m6.1.2", "m2.9.2"],
    foreshadows: ["m6.3.1", "m12.1.3", "m6.2.5"],
  },

  puzzle: (
    <>
      <p>
        The partial sums of <M>{"1 + \\tfrac14 + \\tfrac19 + \\tfrac1{16} + \\cdots"}</M> converge, and Euler eventually
        found the limit, <M>{"\\pi^2/6"}</M>. But the series converged long before anyone knew what it converged to. The
        definition of a limit needs the limit in hand. Is there a test for convergence that only looks at the terms of the
        sequence themselves?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Both sequences of partial sums take steps that shrink to nothing. Move the start of the tail and compare how much
        room each tail still needs.
      </p>
      <CauchyTailViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Cauchy sequences">
        <p>
          A sequence <M>{"(a_n)"}</M> is <strong>Cauchy</strong> if for every <M>{"\\varepsilon > 0"}</M> there is{" "}
          <M>{"N"}</M> such that <M>{"|a_m - a_n| < \\varepsilon"}</M> for all <M>{"m, n \\ge N"}</M>. The terms get close
          to each other, not to any named target. It is not enough that consecutive terms get close: the partial sums of{" "}
          <M>{"\\sum 1/k"}</M> have steps <M>{"1/n \\to 0"}</M> but are not Cauchy.
        </p>
      </Definition>

      <Theorem title="the Cauchy criterion">
        <p>A sequence of real numbers converges if and only if it is Cauchy.</p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"a_n \\to a"}</M>, choose <M>{"N"}</M> with <M>{"|a_n - a| < \\varepsilon/2"}</M> for{" "}
          <M>{"n \\ge N"}</M>. Then <M>{"|a_m - a_n| \\le |a_m - a| + |a - a_n| < \\varepsilon"}</M>.
        </p>
        <p>
          Conversely, a Cauchy sequence is bounded: with <M>{"\\varepsilon = 1"}</M>, all terms from <M>{"N"}</M> on are
          within 1 of <M>{"a_N"}</M>. By Bolzano-Weierstrass a subsequence <M>{"a_{n_k}"}</M> converges to some{" "}
          <M>{"a"}</M>. Given <M>{"\\varepsilon"}</M>, take <M>{"N"}</M> from the Cauchy condition for{" "}
          <M>{"\\varepsilon/2"}</M>, and a <M>{"k"}</M> with <M>{"n_k \\ge N"}</M> and{" "}
          <M>{"|a_{n_k} - a| < \\varepsilon/2"}</M>. For <M>{"n \\ge N"}</M>,
        </p>
        <MD>{"|a_n - a| \\le |a_n - a_{n_k}| + |a_{n_k} - a| < \\varepsilon."}</MD>
      </Proof>

      <Example title="the harmonic series again">
        <p>
          For <M>{"s_n = 1 + \\tfrac12 + \\cdots + \\tfrac1n"}</M>,
        </p>
        <MD>{"s_{2n} - s_n = \\frac{1}{n+1} + \\cdots + \\frac{1}{2n} \\ge n \\cdot \\frac{1}{2n} = \\frac12,"}</MD>
        <p>
          however large <M>{"n"}</M> is. So the tail never fits inside a band narrower than <M>{"\\tfrac12"}</M>: the
          sequence is not Cauchy, and the series diverges. For <M>{"\\sum 1/k^2"}</M>, the tail after <M>{"n"}</M> is less
          than <M>{"\\sum_{k > n} \\tfrac{1}{k(k-1)} = \\tfrac1n"}</M>, which does go to 0.
        </p>
      </Example>

      <Remark title="another form of completeness">
        <p>
          In <M>{"\\mathbb{Q}"}</M> the decimal truncations of <M>{"\\sqrt 2"}</M> form a Cauchy sequence with no limit. So
          the Cauchy criterion is yet another statement of completeness, and it is the one that generalises best: in a
          metric space there may be no order, so no supremum, but there is always distance. A metric space is called{" "}
          <em>complete</em> when every Cauchy sequence converges, and Cantor built the real numbers from Cauchy sequences of
          rationals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for a sequence to be Cauchy?</p>,
      answer: {
        kind: "choice",
        options: [
          "Consecutive terms get arbitrarily close.",
          "For every ε there is N beyond which any two terms are within ε of each other.",
          "The sequence is increasing and bounded.",
          "The terms tend to 0.",
        ],
        correct: [1],
      },
    },
    {
      key: "step",
      rung: "check",
      prompt: (
        <p>
          True or false: if <M>{"a_{n+1} - a_n \\to 0"}</M> then <M>{"(a_n)"}</M> is Cauchy. Choose the correct statement.
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["True", "False: the partial sums of Σ 1/k are a counterexample"],
        correct: [1],
      },
    },
    {
      key: "harm",
      rung: "apply",
      prompt: (
        <p>
          Give the lower bound used in the lesson for <M>{"s_{2n} - s_n"}</M>, where <M>{"s_n"}</M> are the harmonic partial
          sums.
        </p>
      ),
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "find",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"a_n = 1/n"}</M>, any two terms with <M>{"m, n \\ge N"}</M> lie in <M>{"(0, 1/N]"}</M>, so{" "}
          <M>{"|a_m - a_n| < 1/N"}</M>. What is the smallest whole number <M>{"N"}</M> with <M>{"1/N \\le 0.01"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 100 },
    },
    {
      key: "q",
      rung: "apply",
      prompt: <p>Why is the sequence 1, 1.4, 1.41, 1.414, ... Cauchy in the rationals but not convergent there?</p>,
      answer: {
        kind: "choice",
        options: [
          "Its terms are not rational.",
          "Its terms get close to each other, but the only possible limit, the square root of 2, is irrational.",
          "It is not bounded.",
          "It is decreasing.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every Cauchy sequence is bounded. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes ε = 1 to get N with |a_n − a_N| < 1 for n ≥ N.",
          "Bounds the tail by |a_N| + 1.",
          "Takes the maximum with the finitely many earlier terms.",
        ],
      },
    },
    {
      key: "series",
      rung: "stretch",
      prompt: (
        <p>
          State the Cauchy criterion for a series <M>{"\\sum a_k"}</M> in terms of its terms, and use it to show that an
          absolutely convergent series converges. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "States: for every ε there is N with |a_{n+1} + ... + a_m| < ε for all m > n ≥ N.",
          "Applies the triangle inequality: |a_{n+1} + ... + a_m| ≤ |a_{n+1}| + ... + |a_m|.",
          "Concludes that since Σ|a_k| is Cauchy, so is Σ a_k, so it converges.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Cauchy sequence is, why small steps are not enough, how the proof that Cauchy sequences converge uses Bolzano-Weierstrass, and why the criterion is another form of completeness.",

  glimpse: (
    <p>
      The next lesson measures how far a sequence fails to converge, using the limsup and liminf. The Cauchy criterion is the
      foundation of the convergence tests proved in the next chapter, and in metric spaces it becomes the definition of a
      complete space.
    </p>
  ),
};
