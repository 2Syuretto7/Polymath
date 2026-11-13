import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RootsViz } from "@/components/viz/RootsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.2.1",
  minutes: 80,
  links: {
    revisits: ["m7.7.4", "m0.7.4", "m3.7.1"],
    foreshadows: ["m8.2.2", "m13.3.2", "m8.2.3"],
  },

  puzzle: (
    <>
      <p>
        The rotation of the plane by a right angle sends no line to itself, so it has no real eigenvalue. Over the complex
        numbers it has two, <M>{"i"}</M> and <M>{"-i"}</M>. The difference comes from a fact about polynomials, not about
        matrices: every polynomial over <M>{"\\mathbb{C}"}</M> has a root, while <M>{"x^2 + 1"}</M> has none over{" "}
        <M>{"\\mathbb{R}"}</M>. Before studying eigenvalues abstractly, we need that fact clearly.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Adjust the coefficients of a real quartic and watch its four complex roots. Notice the symmetry, and how the real
        factorisation changes when two real roots collide and leave the real line.
      </p>
      <RootsViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the fundamental theorem of algebra">
        <p>
          Every non-constant polynomial with complex coefficients has a root in <M>{"\\mathbb{C}"}</M>. Hence every such
          polynomial of degree <M>{"n"}</M> factors as
        </p>
        <MD>{"p(z) = c(z - \\lambda_1)(z - \\lambda_2) \\cdots (z - \\lambda_n),"}</MD>
        <p>uniquely up to the order of the factors.</p>
      </Theorem>

      <Proof>
        <p>
          The existence of a root needs analysis; the cleanest proof, through Liouville&rsquo;s theorem, comes in complex
          analysis. Here is the idea of another: <M>{"|p(z)|"}</M> is large when <M>{"|z|"}</M> is large, so it attains a
          minimum somewhere; and near any point where <M>{"p \\ne 0"}</M>, one can move in a direction that makes{" "}
          <M>{"|p|"}</M> smaller. So the minimum is 0. The factorisation then follows by dividing out{" "}
          <M>{"z - \\lambda_1"}</M> and repeating.
        </p>
      </Proof>

      <Theorem title="real polynomials">
        <p>
          If <M>{"p"}</M> has real coefficients and <M>{"\\lambda"}</M> is a root, so is <M>{"\\bar\\lambda"}</M>. Hence
          every non-constant real polynomial is a product of real linear factors and real quadratics{" "}
          <M>{"x^2 + bx + c"}</M> with <M>{"b^2 < 4c"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Conjugation respects sums and products and fixes real coefficients, so{" "}
          <M>{"p(\\bar\\lambda) = \\overline{p(\\lambda)} = 0"}</M>. Pair each non-real root with its conjugate:{" "}
          <M>{"(x - \\lambda)(x - \\bar\\lambda) = x^2 - 2\\operatorname{Re}\\lambda\\, x + |\\lambda|^2"}</M>, which has
          real coefficients and no real root.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          A real polynomial of odd degree has a real root, since the non-real roots come in pairs. <M>{"x^4 + 1"}</M>,
          irreducible over <M>{"\\mathbb{Q}"}</M>, factors over <M>{"\\mathbb{R}"}</M> as{" "}
          <M>{"(x^2 + \\sqrt2 x + 1)(x^2 - \\sqrt2 x + 1)"}</M>. Over <M>{"\\mathbb{C}"}</M> its roots are the four
          primitive eighth roots of unity.
        </p>
      </Example>

      <Remark title="for linear algebra">
        <p>
          Because of this theorem, every operator on a non-zero finite-dimensional complex vector space has an eigenvalue,
          as the next lesson shows. Over <M>{"\\mathbb{R}"}</M>, operators may have none, but they always have an invariant
          subspace of dimension 1 or 2, coming from a linear or quadratic factor. Much of this course runs twice, once for
          each field.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "count",
      rung: "check",
      prompt: <p>How many complex roots, counted with multiplicity, does a polynomial of degree 7 have?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "conj",
      rung: "check",
      prompt: <p>A real polynomial has root 2 + 3i. Which other number must be a root?</p>,
      answer: { kind: "choice", options: ["2 − 3i", "−2 + 3i", "3 + 2i", "−2 − 3i"], correct: [0] },
    },
    {
      key: "quad",
      rung: "apply",
      prompt: <p>The real quadratic with roots 1 ± 2i is x² + bx + c. What is c?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "odd",
      rung: "apply",
      prompt: <p>A real polynomial of degree 5 has at least how many real roots?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "irr",
      rung: "apply",
      prompt: <p>Which polynomials are irreducible over ℝ? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["x² + 1", "x² − 1", "x² + x + 1", "x³ + 1", "x − 7"], correct: [0, 2, 4] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if p has real coefficients and p(λ) = 0, then p(λ̄) = 0. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes p(z) = Σ aₖzᵏ with real aₖ.",
          "Takes conjugates: the conjugate of p(λ) is Σ āₖλ̄ᵏ = Σ aₖλ̄ᵏ = p(λ̄), using that conjugation respects sums and products.",
          "Concludes p(λ̄) is the conjugate of 0, which is 0.",
        ],
      },
    },
    {
      key: "rot",
      rung: "stretch",
      prompt: <p>Explain why every operator on ℝ³ has an eigenvalue, but an operator on ℝ² need not.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the eigenvalues are roots of a real polynomial of degree equal to the dimension.",
          "Notes a real cubic has a real root since non-real roots pair up, but a real quadratic like x² + 1 may have none.",
          "Gives the rotation of ℝ² by 90° as an operator without real eigenvalues. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the fundamental theorem of algebra and how it gives a full factorisation over ℂ, why non-real roots of real polynomials come in conjugate pairs, and how real polynomials factor into linear and quadratic pieces.",

  glimpse: (
    <p>
      The next lesson uses these facts to show that every complex operator has an eigenvalue, through invariant subspaces.
      Complex analysis gives a short proof of the fundamental theorem, and upper-triangular matrices follow soon after.
    </p>
  ),
};
