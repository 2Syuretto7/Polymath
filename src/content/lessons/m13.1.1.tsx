import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { ComplexPointsViz } from "@/components/viz/ComplexPointsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.1.1",
  minutes: 90,
  links: {
    revisits: ["m0.7.4", "m12.1.1", "m12.1.2"],
    foreshadows: ["m13.1.2", "m13.5.4", "m13.6.2"],
  },

  puzzle: (
    <>
      <p>
        Multiplying by <M>{"-1"}</M> turns the number line through half a turn about 0. Doing it twice brings you back. Is there
        a number that turns through a quarter turn, so that doing it twice gives <M>{"-1"}</M>? There is none on the line, but
        there is one in the plane, and complex analysis begins by taking the plane seriously as a number system.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move z by its modulus and argument, and watch where its conjugate, reciprocal, square and iz go.</p>
      <ComplexPointsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the complex numbers">
        <p>
          <M>{"\\mathbb{C}"}</M> is the plane <M>{"\\mathbb{R}^2"}</M>, with <M>{"(x, y)"}</M> written{" "}
          <M>{"x + iy"}</M>, added as vectors and multiplied by the rule <M>{"i^2 = -1"}</M>. It is a field. For{" "}
          <M>{"z = x + iy"}</M>, the real and imaginary parts are <M>{"x"}</M> and <M>{"y"}</M>, the conjugate is{" "}
          <M>{"\\bar z = x - iy"}</M> and the modulus is <M>{"|z| = \\sqrt{x^2 + y^2}"}</M>, so that{" "}
          <M>{"z \\bar z = |z|^2"}</M> and <M>{"1/z = \\bar z / |z|^2"}</M>.
        </p>
      </Definition>

      <Definition title="polar form">
        <p>
          Every nonzero <M>{"z"}</M> is <M>{"r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}"}</M> with{" "}
          <M>{"r = |z|"}</M> and <M>{"\\theta"}</M> an argument of <M>{"z"}</M>, determined up to a multiple of{" "}
          <M>{"2\\pi"}</M>. The addition formulas for sine and cosine say exactly that
        </p>
        <MD>{"r e^{i\\theta} \\cdot s e^{i\\varphi} = rs \\, e^{i(\\theta + \\varphi)}."}</MD>
        <p>Multiplication multiplies moduli and adds arguments: a scaling followed by a rotation.</p>
      </Definition>

      <Theorem title="the triangle inequality">
        <p>
          <M>{"|z + w| \\le |z| + |w|"}</M>, with <M>{"|zw| = |z||w|"}</M>. Hence <M>{"d(z, w) = |z - w|"}</M> is a
          metric on <M>{"\\mathbb{C}"}</M>, the Euclidean metric of the plane, and <M>{"\\mathbb{C}"}</M> is complete.
          Open discs <M>{"D(a, r) = \\{z : |z - a| < r\\}"}</M> are the basic open sets.
        </p>
      </Theorem>

      <Example title="roots of unity">
        <p>
          The solutions of <M>{"z^n = 1"}</M> are <M>{"e^{2\\pi i k/n}"}</M> for <M>{"k = 0, \\dots, n-1"}</M>: the
          vertices of a regular n-gon on the unit circle. More generally a nonzero <M>{"w = \\rho e^{i\\varphi}"}</M> has
          exactly <M>{"n"}</M> n-th roots, <M>{"\\rho^{1/n} e^{i(\\varphi + 2\\pi k)/n}"}</M>.
        </p>
      </Example>

      <Remark title="what we lose and gain">
        <p>
          <M>{"\\mathbb{C}"}</M> cannot be ordered as a field, since squares would have to be positive and{" "}
          <M>{"i^2 = -1"}</M>. In exchange, every polynomial will have a root, and differentiable functions will turn out to be
          astonishingly rigid. The argument is defined only up to <M>{"2\\pi"}</M>, and this ambiguity is the source of the
          logarithm&rsquo;s branches later in the course.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mod",
      rung: "check",
      prompt: <p>Find <M>{"|3 + 4i|"}</M>.</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0.001 },
    },
    {
      key: "arg",
      rung: "check",
      prompt: <p>Give the argument of <M>{"-1 + i"}</M> in degrees, between −180 and 180.</p>,
      answer: { kind: "numeric", value: 135, tolerance: 0.5 },
    },
    {
      key: "pow",
      rung: "apply",
      prompt: <p>Use polar form to compute <M>{"(1 + i)^8"}</M>. It is a real number; give it.</p>,
      answer: { kind: "numeric", value: 16, tolerance: 0.001 },
    },
    {
      key: "roots",
      rung: "apply",
      prompt: <p>How many solutions of <M>{"z^6 = 1"}</M> have positive imaginary part?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "locus",
      rung: "apply",
      prompt: <p>Describe the set <M>{"\\{z : |z - 1| = |z + 1|\\}"}</M>.</p>,
      answer: {
        kind: "choice",
        options: ["The real axis", "The imaginary axis", "The unit circle", "A single point"],
        correct: [1],
      },
    },
    {
      key: "tri",
      rung: "prove",
      prompt: <p>Prove that <M>{"|z + w| \\le |z| + |w|"}</M> for all complex <M>{"z, w"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Expands |z + w|² = |z|² + 2 Re(z w̄) + |w|².",
          "Uses Re(z w̄) ≤ |z w̄| = |z||w|.",
          "Concludes |z + w|² ≤ (|z| + |w|)² and takes square roots.",
        ],
      },
    },
    {
      key: "order",
      rung: "stretch",
      prompt: <p>Show that there is no way to order <M>{"\\mathbb{C}"}</M> that makes it an ordered field.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Recalls that in an ordered field every nonzero square is positive, so 1 > 0.",
          "Applies this to i: i² = −1 would be positive, so 1 + (−1) = 0 would be positive, a contradiction.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the complex numbers are as points of the plane, what modulus, argument and conjugate mean, why multiplying multiplies lengths and adds angles, and what the n-th roots of unity look like.",

  glimpse: (
    <p>
      The next lesson asks what it means for a function of a complex variable to be differentiable. The answer is much more
      demanding than in two real variables, and later lessons on logarithms and Möbius maps lean on the geometry here.
    </p>
  ),
};
