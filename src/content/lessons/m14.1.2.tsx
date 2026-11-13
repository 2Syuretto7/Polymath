import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { MinPolyViz } from "@/components/viz/MinPolyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m14.1.2",
  minutes: 85,
  links: {
    revisits: ["m14.1.1", "m7.7.5", "m7.6.2"],
    foreshadows: ["m14.1.3", "m14.3.1", "m14.4.1"],
  },

  puzzle: (
    <>
      <p>
        The number <M>{"\\sqrt2 + \\sqrt3"}</M> looks like it needs two square roots. Is it the root of some polynomial with
        rational coefficients, and if so, what is the smallest such polynomial?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add powers of α one at a time until one of them depends on the earlier ones.</p>
      <MinPolyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="algebraic and transcendental">
        <p>
          Let <M>{"L/K"}</M> be an extension. An element <M>{"\\alpha \\in L"}</M> is <strong>algebraic</strong> over{" "}
          <M>{"K"}</M> if <M>{"f(\\alpha) = 0"}</M> for some non-zero <M>{"f \\in K[x]"}</M>, and{" "}
          <strong>transcendental</strong> otherwise. The extension is algebraic if every element is.
        </p>
      </Definition>

      <Theorem title="the minimal polynomial">
        <p>
          If <M>{"\\alpha"}</M> is algebraic over <M>{"K"}</M>, there is a unique monic irreducible{" "}
          <M>{"m_\\alpha \\in K[x]"}</M> with <M>{"m_\\alpha(\\alpha) = 0"}</M>, and it divides every polynomial vanishing at{" "}
          <M>{"\\alpha"}</M>. Moreover
        </p>
        <MD>{"K(\\alpha) \\cong K[x]/(m_\\alpha), \\qquad [K(\\alpha) : K] = \\deg m_\\alpha,"}</MD>
        <p>with basis <M>{"1, \\alpha, \\dots, \\alpha^{d-1}"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          The evaluation map <M>{"K[x] \\to L"}</M>, <M>{"f \\mapsto f(\\alpha)"}</M>, has a non-zero kernel, which is an ideal
          of the principal ideal domain <M>{"K[x]"}</M>, so it is <M>{"(m)"}</M> for a unique monic <M>{"m"}</M>. The image is
          a subring of a field, hence an integral domain, so <M>{"(m)"}</M> is prime, and in <M>{"K[x]"}</M> that makes{" "}
          <M>{"m"}</M> irreducible and <M>{"(m)"}</M> maximal. So the image <M>{"K[\\alpha]"}</M> is a field, equal to{" "}
          <M>{"K(\\alpha)"}</M>. Division by <M>{"m"}</M> shows <M>{"1, \\dots, \\alpha^{d-1}"}</M> is a basis.
        </p>
      </Proof>

      <Theorem title="finite implies algebraic">
        <p>
          Every finite extension is algebraic, and <M>{"\\alpha"}</M> is algebraic over <M>{"K"}</M> exactly when{" "}
          <M>{"[K(\\alpha) : K]"}</M> is finite. The algebraic elements of <M>{"L"}</M> over <M>{"K"}</M> form a subfield.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"[L : K] = n"}</M>, the <M>{"n + 1"}</M> elements <M>{"1, \\alpha, \\dots, \\alpha^n"}</M> are dependent, which
          is a polynomial relation. If <M>{"\\alpha, \\beta"}</M> are algebraic, <M>{"K(\\alpha, \\beta)"}</M> is finite over{" "}
          <M>{"K"}</M> by the tower law, so <M>{"\\alpha + \\beta"}</M>, <M>{"\\alpha\\beta"}</M> and{" "}
          <M>{"\\alpha/\\beta"}</M> are algebraic.
        </p>
      </Proof>

      <Example title="√2 + √3">
        <p>
          With <M>{"\\alpha = \\sqrt2 + \\sqrt3"}</M>, <M>{"\\alpha^2 = 5 + 2\\sqrt6"}</M>, so{" "}
          <M>{"(\\alpha^2 - 5)^2 = 24"}</M> and <M>{"\\alpha^4 - 10\\alpha^2 + 1 = 0"}</M>. Since{" "}
          <M>{"\\mathbb{Q}(\\alpha)"}</M> contains <M>{"(\\alpha^3 - 9\\alpha)/2 = \\sqrt2"}</M> and hence <M>{"\\sqrt3"}</M>,
          it is all of <M>{"\\mathbb{Q}(\\sqrt2, \\sqrt3)"}</M>, of degree 4, so this quartic is the minimal polynomial.
        </p>
      </Example>

      <Remark title="transcendental numbers">
        <p>
          The algebraic numbers are countable, so almost all real numbers are transcendental. Proving that a particular number
          is transcendental is hard: Liouville gave the first examples in 1844, Hermite proved it for <M>{"e"}</M> and
          Lindemann for <M>{"\\pi"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "min",
      rung: "check",
      prompt: <p>What is the degree of the minimal polynomial of <M>{"\\sqrt[3]{2}"}</M> over <M>{"\\mathbb{Q}"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "trans",
      rung: "check",
      prompt: <p>Which number is transcendental over <M>{"\\mathbb{Q}"}</M>?</p>,
      answer: { kind: "choice", options: ["π", "√2 + √3", "i", "∛5"], correct: [0] },
    },
    {
      key: "onep",
      rung: "apply",
      prompt: <p>The minimal polynomial of <M>{"1 + \\sqrt2"}</M> over <M>{"\\mathbb{Q}"}</M> is <M>{"x^2 + bx + c"}</M>. What is <M>{"c"}</M>?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "inv",
      rung: "apply",
      prompt: <p>Write <M>{"1/(1 + \\sqrt2)"}</M> as <M>{"a + b\\sqrt2"}</M>. What is <M>{"a"}</M>?</p>,
      answer: { kind: "numeric", value: -1, tolerance: 0 },
    },
    {
      key: "deg",
      rung: "apply",
      prompt: <p>What is <M>{"[\\mathbb{Q}(\\sqrt[4]{2}) : \\mathbb{Q}]"}</M>? (Eisenstein&rsquo;s criterion applies to <M>{"x^4 - 2"}</M>.)</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0 },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that every element of a finite extension <M>{"L/K"}</M> is algebraic over <M>{"K"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets [L : K] = n and takes α in L.",
          "Notes the n + 1 elements 1, α, …, αⁿ must be linearly dependent over K.",
          "Reads the dependence as a non-zero polynomial with α as a root.",
        ],
      },
    },
    {
      key: "sum",
      rung: "stretch",
      prompt: <p>Using the tower law, find the degree of <M>{"\\sqrt2 + \\sqrt[3]{2}"}</M> over <M>{"\\mathbb{Q}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes ℚ(√2, ∛2) has degree 6, since 2 and 3 both divide it and it is at most 6.",
          "Argues the sum generates the whole field, or otherwise that its degree is 6.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what algebraic and transcendental elements are, why an algebraic element has a unique minimal polynomial whose degree equals [K(α) : K], why finite extensions are algebraic, and how to find the minimal polynomial of √2 + √3.",

  glimpse: (
    <p>
      The next lesson builds fields containing all the roots of a polynomial. Separability and cyclotomic fields later refine
      what minimal polynomials can look like.
    </p>
  ),
};
