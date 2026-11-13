import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { RankGridViz } from "@/components/viz/RankGridViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.4.3",
  minutes: 85,
  links: {
    revisits: ["m12.4.2", "m8.1.3", "m5.4.3"],
    foreshadows: ["m26.3.1", "m26.3.2", "m26.1.1"],
  },

  puzzle: (
    <>
      <p>
        Every linear map, after a change of basis in the domain and the target, is just a projection followed by an inclusion.
        Is there a nonlinear version? For which smooth maps can we straighten the coordinates so that the map becomes linear?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Watch how a grid is transformed by maps of different rank.</p>
      <RankGridViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the rank theorem">
        <p>
          Let <M>{"f : U \\to \\mathbb{R}^m"}</M> be <M>{"C^1"}</M> on an open <M>{"U \\subseteq \\mathbb{R}^n"}</M>, with{" "}
          <M>{"Df(x)"}</M> of constant rank <M>{"r"}</M> near <M>{"a"}</M>. Then there are <M>{"C^1"}</M> diffeomorphisms{" "}
          <M>{"\\varphi"}</M> near <M>{"a"}</M> and <M>{"\\psi"}</M> near <M>{"f(a)"}</M> with
        </p>
        <MD>{"\\psi \\circ f \\circ \\varphi^{-1}(x_1, \\dots, x_n) = (x_1, \\dots, x_r, 0, \\dots, 0)."}</MD>
      </Theorem>

      <Proof>
        <p>
          An outline. Reorder coordinates so that the top-left <M>{"r \\times r"}</M> block of <M>{"Df(a)"}</M> is invertible.
          Let <M>{"\\varphi(x) = (f_1(x), \\dots, f_r(x), x_{r+1}, \\dots, x_n)"}</M>; its derivative at <M>{"a"}</M> is
          invertible, so by the inverse function theorem it is a local diffeomorphism. In the new coordinates{" "}
          <M>{"f \\circ \\varphi^{-1}(u) = (u_1, \\dots, u_r, h(u))"}</M>. Constant rank <M>{"r"}</M> forces{" "}
          <M>{"h"}</M> to depend only on <M>{"u_1, \\dots, u_r"}</M>, since otherwise the rank would exceed{" "}
          <M>{"r"}</M>. Finally <M>{"\\psi(v) = (v_1, \\dots, v_r, v_{r+1} - h(v_1, \\dots, v_r), \\dots)"}</M> removes{" "}
          <M>{"h"}</M>.
        </p>
      </Proof>

      <Example title="special cases">
        <p>
          When <M>{"r = n \\le m"}</M>, <M>{"f"}</M> is an <strong>immersion</strong> and locally looks like the inclusion{" "}
          <M>{"x \\mapsto (x, 0)"}</M>. When <M>{"r = m \\le n"}</M>, <M>{"f"}</M> is a <strong>submersion</strong> and locally
          looks like the projection <M>{"(x, y) \\mapsto x"}</M>; then each level set <M>{"f^{-1}(c)"}</M> is a smooth piece of
          dimension <M>{"n - m"}</M>, which recovers the implicit function theorem.
        </p>
      </Example>

      <Remark title="constant rank matters">
        <p>
          Where the rank jumps, as for <M>{"(x, y) \\mapsto (x, y^3 - xy)"}</M> along the curve <M>{"x = 3y^2"}</M>, no change
          of coordinates makes the map linear: the image folds, and singularity theory studies these folds and cusps. The rank
          of the derivative can only go up nearby, never down, so maximal rank is automatically constant near a point.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "rank",
      rung: "check",
      prompt: <p>What is the rank of the derivative of (x, y) ↦ (x + y, 2x + 2y)?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0 },
    },
    {
      key: "sub",
      rung: "check",
      prompt: <p>A map ℝ³ → ℝ whose derivative has rank 1 at a point is called what there?</p>,
      answer: { kind: "choice", options: ["A submersion", "An immersion", "A diffeomorphism", "A contraction"], correct: [0] },
    },
    {
      key: "level",
      rung: "apply",
      prompt: <p>If f : ℝ⁵ → ℝ² is a submersion, what is the dimension of each level set f⁻¹(c)?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "imm",
      rung: "apply",
      prompt: <p>Is t ↦ (t², t³) an immersion at t = 0?</p>,
      answer: {
        kind: "choice",
        options: ["No: its derivative (2t, 3t²) is zero at t = 0.", "Yes: it is injective.", "Yes: it is smooth.", "No: it is not continuous."],
        correct: [0],
      },
    },
    {
      key: "fold",
      rung: "apply",
      prompt: <p>At which points does (x, y) ↦ (x, y³ − xy) fail to have rank 2?</p>,
      answer: { kind: "choice", options: ["On the curve x = 3y²", "Only at the origin", "Nowhere", "Everywhere"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if Df(a) has rank r, then Df(x) has rank at least r for all x near a.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Picks an r × r submatrix of Df(a) with non-zero determinant.",
          "Uses continuity of the determinant of that submatrix as x varies.",
          "Concludes the submatrix stays invertible nearby, so the rank is at least r.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why is the sphere x² + y² + z² = 1 a smooth surface, according to this lesson?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the derivative (2x, 2y, 2z), which is non-zero on the sphere.",
          "Concludes f is a submersion there, so the level set is locally a smooth graph of dimension 2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the rank theorem, how it follows from the inverse function theorem, what immersions and submersions look like locally, and why constant rank is needed.",

  glimpse: (
    <p>
      The next unit integrates over regions in ℝⁿ. In differential topology, immersions, submersions and embedded
      submanifolds are built directly on the rank theorem.
    </p>
  ),
};
