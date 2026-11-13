import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ProductLimitViz } from "@/components/viz/ProductLimitViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.2.1",
  minutes: 85,
  links: {
    revisits: ["m2.9.1", "m2.2.3", "m6.1.2"],
    foreshadows: ["m6.2.2", "m6.5.1", "m6.2.5"],
  },

  puzzle: (
    <>
      <p>
        Everyone believes that if <M>{"a_n \\to 2"}</M> and <M>{"b_n \\to 3"}</M>, then <M>{"a_n b_n \\to 6"}</M>. But the
        definition of a limit says: for every <M>{"\\varepsilon > 0"}</M> there is an <M>{"N"}</M>. Given an{" "}
        <M>{"\\varepsilon"}</M> for the product, how do we find an <M>{"N"}</M> using only what the definition tells us about{" "}
        <M>{"a_n"}</M> and <M>{"b_n"}</M> separately? Real analysis is largely the art of answering such questions.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Here <M>{"a_n = 2 + 1/n"}</M> and <M>{"b_n = 3 - 2/n"}</M>. Shrink the tolerance and compare the true starting point
        with the one the proof provides.
      </p>
      <ProductLimitViz />
    </>
  ),

  theory: (
    <>
      <Definition title="convergence">
        <p>
          A sequence <M>{"(a_n)"}</M> <strong>converges</strong> to <M>{"a"}</M> if for every <M>{"\\varepsilon > 0"}</M> there
          is <M>{"N"}</M> such that <M>{"|a_n - a| < \\varepsilon"}</M> for all <M>{"n \\ge N"}</M>. Limits are unique, and a
          convergent sequence is <strong>bounded</strong>: taking <M>{"\\varepsilon = 1"}</M>, all terms from <M>{"N"}</M> on lie
          within 1 of <M>{"a"}</M>, and there are only finitely many before.
        </p>
      </Definition>

      <Theorem title="the algebraic limit theorem">
        <p>
          If <M>{"a_n \\to a"}</M> and <M>{"b_n \\to b"}</M>, then <M>{"c\\,a_n \\to ca"}</M>,{" "}
          <M>{"a_n + b_n \\to a + b"}</M>, <M>{"a_n b_n \\to ab"}</M>, and, if <M>{"b \\ne 0"}</M>,{" "}
          <M>{"a_n / b_n \\to a/b"}</M>, where the terms with <M>{"b_n = 0"}</M>, of which there are finitely many, are
          ignored.
        </p>
      </Theorem>

      <Proof>
        <p>
          For the product, the key identity is
        </p>
        <MD>{"a_n b_n - ab = a_n(b_n - b) + b(a_n - a)."}</MD>
        <p>
          Since <M>{"(a_n)"}</M> converges it is bounded, say <M>{"|a_n| \\le K"}</M>. Given <M>{"\\varepsilon > 0"}</M>, choose{" "}
          <M>{"N_1"}</M> with <M>{"|b_n - b| < \\varepsilon / (2K)"}</M> and <M>{"N_2"}</M> with{" "}
          <M>{"|a_n - a| < \\varepsilon / (2|b| + 1)"}</M> beyond them. For <M>{"n \\ge \\max(N_1, N_2)"}</M>,{" "}
          <M>{"|a_n b_n - ab| < K \\cdot \\varepsilon/(2K) + |b| \\cdot \\varepsilon/(2|b| + 1) < \\varepsilon"}</M>.
        </p>
      </Proof>

      <Theorem title="order limit theorem">
        <p>
          If <M>{"a_n \\to a"}</M>, <M>{"b_n \\to b"}</M> and <M>{"a_n \\le b_n"}</M> for all <M>{"n"}</M>, then{" "}
          <M>{"a \\le b"}</M>. In particular, limits of nonnegative sequences are nonnegative. Strict inequalities need not
          survive: <M>{"1/n > 0"}</M> for every <M>{"n"}</M>, but the limit is <M>{"0"}</M>. The squeeze theorem follows: if{" "}
          <M>{"a_n \\le x_n \\le b_n"}</M> and both outer sequences tend to <M>{"L"}</M>, so does <M>{"x_n"}</M>.
        </p>
      </Theorem>

      <Example title="a rational sequence">
        <p>
          Let <M>{"x_n = \\frac{3n^2 + n}{2n^2 - 5}"}</M>. Dividing top and bottom by <M>{"n^2"}</M> gives{" "}
          <M>{"\\frac{3 + 1/n}{2 - 5/n^2}"}</M>. Since <M>{"1/n \\to 0"}</M> and <M>{"5/n^2 \\to 0"}</M>, the sum, product and
          quotient rules give <M>{"x_n \\to 3/2"}</M>. Each step is justified by the theorem, which is why the familiar
          shortcut is correct.
        </p>
      </Example>

      <Remark title="the habit of the subject">
        <p>
          The proofs follow a pattern: split the quantity to be made small into pieces, each controlled by a hypothesis, and
          give each piece its share of <M>{"\\varepsilon"}</M>. The <M>{"N"}</M> obtained is usually far from the best, and it
          does not need to be. The same techniques will prove the limit laws for functions, for series and for derivatives.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "limit",
      rung: "check",
      prompt: <p>Find <M>{"\\lim \\frac{3n^2 + n}{2n^2 - 5}"}</M>. Give a fraction or a decimal.</p>,
      answer: { kind: "numeric", value: 1.5 },
    },
    {
      key: "strict",
      rung: "check",
      prompt: <p>If <M>{"a_n > 0"}</M> for every <M>{"n"}</M> and <M>{"a_n \\to a"}</M>, what can we conclude?</p>,
      answer: {
        kind: "choice",
        options: ["a > 0", "a ≥ 0", "a = 0", "Nothing about the sign of a"],
        correct: [1],
      },
    },
    {
      key: "N",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"a_n = 1/n"}</M> and <M>{"\\varepsilon = 0.01"}</M>, what is the smallest <M>{"N"}</M> such that{" "}
          <M>{"|a_n| < \\varepsilon"}</M> for all <M>{"n \\ge N"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 101 },
    },
    {
      key: "quot",
      rung: "apply",
      prompt: <p>Find <M>{"\\lim \\frac{(2 + 1/n)(3 - 2/n)}{1 + 1/n^2}"}</M>.</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "squeeze",
      rung: "apply",
      prompt: <p>Find <M>{"\\lim \\frac{\\sin n}{n}"}</M>, and say which theorem justifies it.</p>,
      answer: {
        kind: "choice",
        options: ["1, by the product rule", "0, by the squeeze theorem, since −1/n ≤ sin n / n ≤ 1/n", "It does not exist", "0, by the quotient rule"],
        correct: [1],
      },
    },
    {
      key: "sum",
      rung: "prove",
      prompt: <p>Prove from the definition that if <M>{"a_n \\to a"}</M> and <M>{"b_n \\to b"}</M>, then <M>{"a_n + b_n \\to a + b"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Given ε, chooses N₁ and N₂ so that |a_n − a| < ε/2 and |b_n − b| < ε/2 beyond them.",
          "Uses the triangle inequality for n ≥ max(N₁, N₂): |(a_n + b_n) − (a + b)| ≤ |a_n − a| + |b_n − b| < ε.",
        ],
      },
    },
    {
      key: "recip",
      rung: "stretch",
      prompt: (
        <p>
          Prove that if <M>{"b_n \\to b"}</M> with <M>{"b \\ne 0"}</M>, then <M>{"1/b_n \\to 1/b"}</M>, ignoring finitely many
          terms where <M>{"b_n = 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Shows that |b_n| > |b|/2 for n beyond some N₁, so |1/b_n − 1/b| = |b − b_n|/(|b_n||b|) < 2|b − b_n|/|b|².",
          "Chooses N₂ with |b_n − b| < ε|b|²/2 and concludes for n ≥ max(N₁, N₂).",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the definition of a convergent sequence, why convergent sequences are bounded, how the product rule for limits is proved, and what the order limit theorem says.",

  glimpse: (
    <p>
      The next lessons give ways to prove that a sequence converges without knowing its limit in advance: monotone
      convergence, Bolzano–Weierstrass and the Cauchy criterion. The same limit laws will reappear for functions.
    </p>
  ),
};
