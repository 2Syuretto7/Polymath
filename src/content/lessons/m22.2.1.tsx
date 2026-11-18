import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { BandPreimageViz } from "@/components/viz/BandPreimageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.2.1",
  minutes: 85,
  links: {
    revisits: ["m22.1.1", "m1.7.4", "m12.2.1"],
    foreshadows: ["m22.2.2", "m22.2.3", "m22.2.5"],
  },

  puzzle: (
    <>
      <p>
        List the rationals in <M>{"[0, 1]"}</M> as <M>{"q_1, q_2, \\dots"}</M>, and let <M>{"f_n"}</M> be 1 at{" "}
        <M>{"q_1, \\dots, q_n"}</M> and 0 elsewhere. Each <M>{"f_n"}</M> is Riemann integrable with integral 0. Their limit,
        1 on the rationals and 0 elsewhere, is not Riemann integrable at all. A good theory of integration should not lose a
        function in the limit. Which class of functions is closed under limits?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a range of values and see the set of points where the function lands in it.</p>
      <BandPreimageViz />
    </>
  ),

  theory: (
    <>
      <Definition title="measurable functions">
        <p>
          On a measurable space <M>{"(X, \\mathcal{A})"}</M>, a function <M>{"f : X \\to [-\\infty, \\infty]"}</M> is{" "}
          <strong>measurable</strong> if <M>{"\\{x : f(x) > a\\} \\in \\mathcal{A}"}</M> for every real <M>a</M>.
          Equivalently, the preimage of every Borel set is measurable. On <M>{"\\mathbb{R}"}</M>, every continuous function is
          Borel measurable, since preimages of open sets are open.
        </p>
      </Definition>

      <Theorem title="closure properties">
        <p>
          If <M>f</M>, <M>g</M> and <M>{"f_1, f_2, \\dots"}</M> are measurable, so are <M>{"f + g"}</M>, <M>{"fg"}</M>,{" "}
          <M>{"\\max(f, g)"}</M>, <M>{"\\sup_n f_n"}</M>, <M>{"\\inf_n f_n"}</M>, <M>{"\\limsup f_n"}</M>,{" "}
          <M>{"\\liminf f_n"}</M>, and the pointwise limit when it exists. For the supremum,
        </p>
        <MD>{"\\{\\sup_n f_n > a\\} = \\bigcup_n \\{f_n > a\\},"}</MD>
        <p>a countable union of measurable sets.</p>
      </Theorem>

      <Example title="simple functions">
        <p>
          A <strong>simple function</strong> takes finitely many values, each on a measurable set:{" "}
          <M>{"\\varphi = \\sum_{i=1}^{k} a_i \\mathbf{1}_{A_i}"}</M>. Every measurable <M>{"f \\ge 0"}</M> is the pointwise
          increasing limit of the simple functions
        </p>
        <MD>{"\\varphi_n = \\min\\Big(n, \\frac{\\lfloor 2^n f \\rfloor}{2^n}\\Big),"}</MD>
        <p>which round <M>f</M> down to a grid in its range, not in its domain.</p>
      </Example>

      <Remark title="almost everywhere">
        <p>
          A property holds <strong>almost everywhere</strong> if it fails only on a null set. For a complete measure such as
          Lebesgue measure, changing a measurable function on a null set leaves it measurable, and, as we will see, leaves its
          integral unchanged. The indicator of the rationals is equal almost everywhere to 0.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is f measurable?</p>,
      answer: { kind: "choice", options: ["When the set where f > a is measurable for every real a", "When f is continuous", "When f is bounded", "When the graph of f is measurable"], correct: [0] },
    },
    {
      key: "cont",
      rung: "check",
      prompt: <p>Why is every continuous f : ℝ → ℝ Borel measurable?</p>,
      answer: { kind: "choice", options: ["Preimages of open sets are open, hence Borel", "Continuous functions are bounded", "Continuous functions are simple", "Every function is Borel measurable"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what does the red set on the axis represent?</p>,
      answer: { kind: "choice", options: ["The points x where f(x) lies in the chosen interval", "The graph of f", "The values of f", "The points where f is continuous"], correct: [0] },
    },
    {
      key: "simple",
      rung: "apply",
      prompt: <p>For f(x) = 0.7 at some point, what is φ₂ at that point, with φₙ the rounding-down given above?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "dirichlet",
      rung: "apply",
      prompt: <p>Is the indicator function of ℚ Lebesgue measurable?</p>,
      answer: { kind: "choice", options: ["Yes: its level sets are ℚ and its complement, both Borel", "No: it is nowhere continuous", "Only on [0, 1]", "No: ℚ is not measurable"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if f and g are measurable, the set where f(x) &gt; g(x) is measurable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that f(x) > g(x) exactly when some rational r lies strictly between them.",
          "Writes the set as the union over rationals r of the set where f > r intersected with the set where g < r.",
          "Concludes it is a countable union of measurable sets.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>A pointwise limit of continuous functions need not be continuous. Why is it useful that it is always measurable?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that analysis constantly takes limits, of series, approximations and sequences of solutions.",
          "Explains that a class closed under limits lets an integral pass to the limit, which the Riemann theory cannot guarantee.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Simple functions have an obvious integral: value times measure, added up. Every non-negative measurable function is a
        limit of simple ones from below, so its integral should be the limit, or supremum, of theirs.
      </p>
      <p>
        Next, the Lebesgue integral: integrating simple functions, the supremum definition, integrable functions, and why
        slicing the range rather than the domain makes all the difference.
      </p>
    </>
  ),
};
