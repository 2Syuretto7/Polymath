import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BaireGameViz } from "@/components/viz/BaireGameViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.3.3",
  minutes: 90,
  links: {
    revisits: ["m12.1.3", "m6.4.3", "m12.3.1"],
    foreshadows: ["m23.3.3", "m23.1.1", "m12.4.1"],
  },

  puzzle: (
    <>
      <p>
        The rationals are everywhere in the real line, yet they can be listed one by one. Can a complete space ever be the
        union of countably many &ldquo;thin&rdquo; sets? And what does that have to do with functions that are continuous but
        nowhere differentiable?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>At each step, shrink the interval to a closed third that avoids the next rational in the list.</p>
      <BaireGameViz />
    </>
  ),

  theory: (
    <>
      <Definition title="nowhere dense and meagre">
        <p>
          A set <M>{"E"}</M> is <strong>nowhere dense</strong> if its closure has empty interior: every ball contains a smaller
          ball missing <M>{"E"}</M>. A countable union of nowhere dense sets is <strong>meagre</strong>, or of first category.
        </p>
      </Definition>

      <Theorem title="the Baire category theorem">
        <p>
          In a complete metric space, a countable intersection of dense open sets is dense. Equivalently, a non-empty complete
          metric space is not meagre in itself.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"U_1, U_2, \\dots"}</M> be dense and open, and <M>{"B_0"}</M> any open ball. Since <M>{"U_1"}</M> is dense
          and open, <M>{"B_0 \\cap U_1"}</M> contains a closed ball <M>{"\\overline{B}_1"}</M> of radius less than 1. Inductively
          choose closed balls <M>{"\\overline{B}_n \\subseteq B_{n-1} \\cap U_n"}</M> with radii less than <M>{"1/n"}</M>. The
          centres form a Cauchy sequence, whose limit lies in every <M>{"\\overline{B}_n"}</M>, hence in <M>{"B_0"}</M> and in
          every <M>{"U_n"}</M>.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          <M>{"\\mathbb{R}"}</M> is uncountable, since it is not a countable union of points. <M>{"\\mathbb{Q}"}</M> is not a
          countable intersection of open sets. In <M>{"C[0, 1]"}</M>, the functions differentiable at even one point form a
          meagre set, so &ldquo;most&rdquo; continuous functions, in Baire&rsquo;s sense, are nowhere differentiable. Weierstrass
          had built one explicitly:
        </p>
        <MD>{"W(x) = \\sum_{n=0}^\\infty a^n \\cos(b^n \\pi x), \\qquad 0 < a < 1, \\ ab > 1 + \\tfrac{3\\pi}{2}, \\ b \\text{ odd}."}</MD>
      </Example>

      <Remark title="in functional analysis">
        <p>
          Baire&rsquo;s theorem is the engine behind the uniform boundedness principle, the open mapping theorem and the
          closed graph theorem. Typical use: a complete space is written as a countable union of closed sets, so one of them
          must contain a ball, and that ball gives a uniform estimate.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "nd",
      rung: "check",
      prompt: <p>Which subset of ℝ is nowhere dense?</p>,
      answer: { kind: "choice", options: ["ℚ", "[0, 1]", "The integers ℤ", "(0, 1) ∩ ℚ"], correct: [2] },
    },
    {
      key: "stmt",
      rung: "check",
      prompt: <p>The Baire category theorem says that in a complete metric space, a countable intersection of dense open sets is what?</p>,
      answer: { kind: "choice", options: ["Empty", "Dense", "Finite", "Open"], correct: [1] },
    },
    {
      key: "third",
      rung: "apply",
      prompt: <p>Starting with [0, 1], the first rational to avoid is 0. Which closed third is kept first in the viz? Give its left end.</p>,
      answer: { kind: "numeric", value: 0.3333, tolerance: 0.001 },
    },
    {
      key: "uncount",
      rung: "apply",
      prompt: <p>How does Baire&rsquo;s theorem show ℝ is uncountable?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each point is nowhere dense, and ℝ is complete, so ℝ is not a countable union of points.",
          "ℝ is open.",
          "ℝ contains ℚ.",
          "ℝ is bounded.",
        ],
        correct: [0],
      },
    },
    {
      key: "qgd",
      rung: "apply",
      prompt: <p>The irrationals are a countable intersection of dense open sets. Could ℚ be one too?</p>,
      answer: {
        kind: "choice",
        options: [
          "No: then intersecting both would give a dense set, yet ℚ and the irrationals are disjoint.",
          "Yes, ℚ is open.",
          "Yes, because ℚ is countable.",
          "Only in ℚ itself.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that a non-empty complete metric space with no isolated points is uncountable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that each single point is closed with empty interior, since no point is isolated.",
          "If the space were countable, it would be a countable union of nowhere dense sets.",
          "Concludes this contradicts Baire’s theorem.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can ℝ² be written as a countable union of straight lines? Use Baire, or an argument of your own.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a line is closed and nowhere dense in the plane.",
          "Concludes, by Baire or by a counting argument with a further line, that countably many lines cannot cover the plane.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what nowhere dense and meagre sets are, the Baire category theorem and its proof by nested balls, and why it shows most continuous functions are nowhere differentiable.",

  glimpse: (
    <p>
      The next unit moves to differentiation in ℝⁿ. In functional analysis, Baire&rsquo;s theorem powers the open mapping and
      uniform boundedness theorems.
    </p>
  ),
};
