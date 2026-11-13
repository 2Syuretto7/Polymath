import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { WindingCountViz } from "@/components/viz/WindingCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.4.4",
  minutes: 90,
  links: {
    revisits: ["m15.4.3", "m7.1.4", "m13.5.1"],
    foreshadows: ["m15.4.5", "m15.5.1", "m25.2.3"],
  },

  puzzle: (
    <>
      <p>
        It seems obvious that a rubber band round a pole cannot be slid off without cutting it. But obvious is not proved: how
        do we know there is no clever continuous deformation that unwinds a loop going once round the circle? We need an
        invariant that a deformation cannot change.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the loop, slide it across the origin, and watch the total change of angle.</p>
      <WindingCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="degree of a loop">
        <p>
          For a loop <M>{"\\gamma"}</M> in <M>{"S^1"}</M> at <M>{"1"}</M>, let <M>{"\\tilde{\\gamma}"}</M> be its lift to{" "}
          <M>{"\\mathbb{R}"}</M> through <M>{"p(s) = e^{2\\pi i s}"}</M>, starting at 0. Since{" "}
          <M>{"p(\\tilde{\\gamma}(1)) = 1"}</M>, the end <M>{"\\tilde{\\gamma}(1)"}</M> is an integer, the{" "}
          <strong>degree</strong> of <M>{"\\gamma"}</M>. For a loop in the punctured plane, the degree of{" "}
          <M>{"\\gamma / |\\gamma|"}</M> is its <strong>winding number</strong> about 0.
        </p>
      </Definition>

      <Theorem title="the fundamental group of the circle">
        <p>The degree is an isomorphism <M>{"\\pi_1(S^1, 1) \\to \\mathbb{Z}"}</M>.</p>
      </Theorem>

      <Proof>
        <p>
          The degree depends only on the homotopy class, since lifted homotopies keep the end point fixed. It is surjective:
          the loop <M>{"\\omega_n(s) = e^{2\\pi i n s}"}</M> lifts to <M>{"s \\mapsto n s"}</M>, ending at <M>{"n"}</M>. It is a
          homomorphism: if <M>{"\\tilde{\\alpha}"}</M> ends at <M>{"m"}</M>, the lift of <M>{"\\alpha \\cdot \\beta"}</M> is{" "}
          <M>{"\\tilde{\\alpha}"}</M> followed by <M>{"m + \\tilde{\\beta}"}</M>, ending at <M>{"m + n"}</M>. It is injective:
          if the lift ends at 0, it is a loop in <M>{"\\mathbb{R}"}</M>, which is contractible by a straight-line homotopy;
          composing that homotopy with <M>{"p"}</M> shrinks <M>{"\\gamma"}</M> to a point.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          The circle is not simply connected, so it is not contractible, and it is not homeomorphic to an interval or to the
          disc. The punctured plane, homotopy equivalent to the circle, also has <M>{"\\pi_1 \\cong \\mathbb{Z}"}</M>. The
          torus <M>{"S^1 \\times S^1"}</M> has <M>{"\\pi_1 \\cong \\mathbb{Z}^2"}</M>, since the fundamental group of a product is
          the product of the groups.
        </p>
      </Example>

      <Remark title="the fundamental theorem of algebra">
        <p>
          If a polynomial <M>{"z^n + a_{n-1} z^{n-1} + \\cdots + a_0"}</M> with <M>{"n \\geq 1"}</M> had no root, the loops{" "}
          <M>{"f(re^{2\\pi i s})"}</M> in the punctured plane would all be homotopic, through <M>{"r"}</M>, to a constant at{" "}
          <M>{"r = 0"}</M>. But for large <M>{"r"}</M> the leading term dominates and the winding number is <M>{"n"}</M>. This
          contradiction proves the theorem, and the argument principle of complex analysis counts roots in the same way.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "iso",
      rung: "check",
      prompt: <p>What is the fundamental group of the circle?</p>,
      answer: { kind: "choice", options: ["ℤ", "Trivial", "ℤ/2", "ℤ²"], correct: [0] },
    },
    {
      key: "deg",
      rung: "check",
      prompt: <p>How is the degree of a loop in the circle defined?</p>,
      answer: {
        kind: "choice",
        options: [
          "As the end point of its lift to ℝ starting at 0",
          "As its length divided by 2π",
          "As the number of times it passes through 1",
          "As the area it encloses",
        ],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, shift the loop to 2.5 so the origin lies outside it. What is the winding number?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "torus",
      rung: "apply",
      prompt: <p>What is the fundamental group of the torus <M>{"S^1 \\times S^1"}</M>?</p>,
      answer: { kind: "choice", options: ["ℤ × ℤ", "ℤ", "Trivial", "The free group on two generators"], correct: [0] },
    },
    {
      key: "omega",
      rung: "apply",
      prompt: <p>What is the degree of the loop <M>{"\\omega_{-3}(s) = e^{-6\\pi i s}"}</M>?</p>,
      answer: { kind: "numeric", value: -3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the degree is a homomorphism: the degree of <M>{"\\alpha \\cdot \\beta"}</M> is the sum of the degrees.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lets the lift of α end at m and the lift of β, from 0, end at n.",
          "Notes that m plus the lift of β is a lift of β starting at m, since p is unchanged by integer shifts.",
          "Joins the two to get the lift of α · β by uniqueness, ending at m + n.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the fundamental group to show that ℝ² is not homeomorphic to ℝ³.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes a homeomorphism would restrict to one between ℝ² minus a point and ℝ³ minus a point.",
          "Computes π₁ of ℝ² minus a point as ℤ, and argues ℝ³ minus a point is simply connected.",
          "Concludes they are not homeomorphic. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the degree of a loop in the circle via lifting, why it is well defined, a homomorphism, onto and one-to-one, so π₁(S¹) is ℤ, and how winding numbers prove the fundamental theorem of algebra.",

  glimpse: (
    <p>
      Next, the calculation proves Brouwer&rsquo;s fixed point theorem for the disc. The Seifert-van Kampen theorem then
      computes fundamental groups of wedges of circles and of surfaces.
    </p>
  ),
};
