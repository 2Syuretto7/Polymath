import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { LoopProductViz } from "@/components/viz/LoopProductViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.4.2",
  minutes: 90,
  links: {
    revisits: ["m15.4.1", "m7.1.1", "m15.2.1"],
    foreshadows: ["m15.4.4", "m15.5.1", "m25.1.3"],
  },

  puzzle: (
    <>
      <p>
        A loop that winds once round a hole, followed by a loop that winds once the other way, can be shrunk to a point. Two
        loops round the same way cannot. This sounds like arithmetic: <M>{"1 + (-1) = 0"}</M> but <M>{"1 + 1 \\neq 0"}</M>.
        Can loops in any space be added like this, and what structure do they form?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose how often each loop winds round the hole and trace their product.</p>
      <LoopProductViz />
    </>
  ),

  theory: (
    <>
      <Definition title="loops and their product">
        <p>
          A <strong>loop</strong> at <M>{"x_0 \\in X"}</M> is a path <M>{"\\alpha : [0, 1] \\to X"}</M> with{" "}
          <M>{"\\alpha(0) = \\alpha(1) = x_0"}</M>. The product <M>{"\\alpha \\cdot \\beta"}</M> runs <M>{"\\alpha"}</M> on{" "}
          <M>{"[0, 1/2]"}</M> and <M>{"\\beta"}</M> on <M>{"[1/2, 1]"}</M>, each at double speed. The inverse{" "}
          <M>{"\\bar{\\alpha}(s) = \\alpha(1 - s)"}</M> runs <M>{"\\alpha"}</M> backwards.
        </p>
      </Definition>

      <Theorem title="the fundamental group">
        <p>
          Homotopy classes of loops at <M>{"x_0"}</M>, with endpoints fixed, form a group <M>{"\\pi_1(X, x_0)"}</M> under{" "}
          <M>{"[\\alpha][\\beta] = [\\alpha \\cdot \\beta]"}</M>, with identity the constant loop and inverse{" "}
          <M>{"[\\bar{\\alpha}]"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          The product is well defined: homotopies of the two factors run side by side give a homotopy of the products.{" "}
          <M>{"(\\alpha \\cdot \\beta) \\cdot \\gamma"}</M> and <M>{"\\alpha \\cdot (\\beta \\cdot \\gamma)"}</M> trace the same
          route at different speeds, and any reparametrisation <M>{"\\alpha \\circ \\varphi"}</M> with{" "}
          <M>{"\\varphi(0) = 0"}</M>, <M>{"\\varphi(1) = 1"}</M> is homotopic to <M>{"\\alpha"}</M> by{" "}
          <M>{"\\alpha((1 - t)\\varphi(s) + t s)"}</M>. The same trick handles the identity. For inverses,{" "}
          <M>{"H(s, t)"}</M> runs <M>{"\\alpha"}</M> out only as far as time <M>{"1 - t"}</M> and then straight back, so at{" "}
          <M>{"t = 1"}</M> it is constant.
        </p>
      </Proof>

      <Example title="first examples">
        <p>
          A convex subset of <M>{"\\mathbb{R}^n"}</M> has trivial fundamental group: every loop shrinks by the straight-line
          homotopy. Such a path-connected space is called <strong>simply connected</strong>. The punctured plane and the
          circle have <M>{"\\pi_1 \\cong \\mathbb{Z}"}</M>, counting turns, as later lessons prove. The plane with two
          punctures has a non-abelian fundamental group, free on two generators.
        </p>
      </Example>

      <Remark title="base points and maps">
        <p>
          A path from <M>{"x_0"}</M> to <M>{"x_1"}</M> gives an isomorphism of <M>{"\\pi_1(X, x_0)"}</M> with{" "}
          <M>{"\\pi_1(X, x_1)"}</M>, so in a path-connected space we often drop the base point. A continuous map{" "}
          <M>{"f"}</M> induces a homomorphism <M>{"f_*[\\alpha] = [f \\circ \\alpha]"}</M>, with{" "}
          <M>{"(g \\circ f)_* = g_* \\circ f_*"}</M>. So homeomorphic, and even homotopy equivalent, spaces have isomorphic
          fundamental groups.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What are the elements of <M>{"\\pi_1(X, x_0)"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["Homotopy classes of loops at x₀, with ends fixed", "All loops at x₀", "Points of X", "Paths between any two points"],
        correct: [0],
      },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>What is the inverse of the class of a loop <M>{"\\alpha"}</M>?</p>,
      answer: { kind: "choice", options: ["The class of α run backwards", "The class of α run twice", "The constant loop", "α itself"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set α to wind 2 times and β to wind −3 times. How many times does α · β wind?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "simply",
      rung: "apply",
      prompt: <p>Which of these spaces is simply connected?</p>,
      answer: { kind: "choice", options: ["A closed disc", "A circle", "The punctured plane", "A torus"], correct: [0] },
    },
    {
      key: "induced",
      rung: "apply",
      prompt: <p>If <M>{"f : X \\to Y"}</M> is a homeomorphism, what can we say about <M>{"f_*"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["It is an isomorphism, with inverse (f⁻¹)_*", "It is zero", "It is surjective but need not be injective", "Nothing in general"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the fundamental group of a convex subset <M>{"C"}</M> of <M>{"\\mathbb{R}^n"}</M> is trivial.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a loop α at x₀ and defines H(s, t) = (1 − t) α(s) + t x₀.",
          "Checks H stays in C by convexity, and is continuous.",
          "Checks the ends stay at x₀, so α is homotopic to the constant loop.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that a path <M>{"h"}</M> from <M>{"x_0"}</M> to <M>{"x_1"}</M> gives an isomorphism <M>{"[\\alpha] \\mapsto [\\bar{h} \\cdot \\alpha \\cdot h]"}</M> from <M>{"\\pi_1(X, x_0)"}</M> to <M>{"\\pi_1(X, x_1)"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks that the map is well defined and lands in loops at x₁.",
          "Shows it is a homomorphism, since h · h̄ is homotopic to the constant loop.",
          "Gives the inverse using h̄. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend loops and their product, why homotopy classes of loops form a group, why convex sets are simply connected, and how continuous maps induce homomorphisms of fundamental groups.",

  glimpse: (
    <p>
      Next, covering spaces give the main tool for computing fundamental groups, and the circle turns out to have{" "}
      <M>{"\\pi_1 \\cong \\mathbb{Z}"}</M>. The Seifert-van Kampen theorem then builds fundamental groups of spaces glued from
      pieces.
    </p>
  ),
};
