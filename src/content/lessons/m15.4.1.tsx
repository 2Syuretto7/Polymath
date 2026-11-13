import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { HomotopyViz } from "@/components/viz/HomotopyViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.4.1",
  minutes: 80,
  links: {
    revisits: ["m15.2.1", "m15.1.4", "m13.2.2"],
    foreshadows: ["m15.4.2", "m15.4.4", "m15.4.5"],
  },

  puzzle: (
    <>
      <p>
        A rubber band lying on a table can be slid and shrunk to a point. A rubber band looped round a pole cannot, at least not
        without lifting it off the pole. How can we turn &ldquo;can be deformed into&rdquo; into mathematics, and use it to
        detect holes in a space?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Slide one path into the other, first in the plane and then with the origin removed.</p>
      <HomotopyViz />
    </>
  ),

  theory: (
    <>
      <Definition title="homotopy">
        <p>
          Two continuous maps <M>{"f, g : X \\to Y"}</M> are <strong>homotopic</strong>, written <M>{"f \\simeq g"}</M>, if
          there is a continuous <M>{"H : X \\times [0, 1] \\to Y"}</M> with <M>{"H(x, 0) = f(x)"}</M> and{" "}
          <M>{"H(x, 1) = g(x)"}</M>. For paths with the same ends we usually require the ends to stay fixed during the
          homotopy, <M>{"H(0, t) = P"}</M> and <M>{"H(1, t) = Q"}</M>: a homotopy relative to the endpoints.
        </p>
      </Definition>

      <Theorem title="homotopy is an equivalence relation">
        <p>Homotopy, and homotopy relative to the endpoints, are equivalence relations.</p>
      </Theorem>

      <Proof>
        <p>
          <M>{"H(x, t) = f(x)"}</M> shows <M>{"f \\simeq f"}</M>. If <M>{"H"}</M> goes from <M>{"f"}</M> to <M>{"g"}</M>, then{" "}
          <M>{"H(x, 1 - t)"}</M> goes from <M>{"g"}</M> to <M>{"f"}</M>. If <M>{"H"}</M> goes from <M>{"f"}</M> to <M>{"g"}</M>{" "}
          and <M>{"K"}</M> from <M>{"g"}</M> to <M>{"h"}</M>, run <M>{"H"}</M> at double speed for{" "}
          <M>{"t \\leq 1/2"}</M> and <M>{"K"}</M> for <M>{"t \\geq 1/2"}</M>. The pieces agree at <M>{"t = 1/2"}</M>, and the
          pasting lemma for the two closed halves makes the result continuous.
        </p>
      </Proof>

      <Example title="convex sets and straight lines">
        <p>
          If <M>{"Y"}</M> is a convex subset of <M>{"\\mathbb{R}^n"}</M>, any two maps <M>{"f, g"}</M> into it are homotopic by{" "}
          <M>{"H(x, t) = (1 - t) f(x) + t g(x)"}</M>, and paths with common ends stay fixed at the ends. In the punctured plane
          this formula can leave the space, and indeed the circle going once round the origin is not homotopic to a constant
          loop, as later lessons prove.
        </p>
      </Example>

      <Definition title="homotopy equivalence">
        <p>
          A map <M>{"f : X \\to Y"}</M> is a <strong>homotopy equivalence</strong> if some <M>{"g : Y \\to X"}</M> has{" "}
          <M>{"g \\circ f \\simeq \\mathrm{id}_X"}</M> and <M>{"f \\circ g \\simeq \\mathrm{id}_Y"}</M>. A space is{" "}
          <strong>contractible</strong> if it is homotopy equivalent to a point. Discs and <M>{"\\mathbb{R}^n"}</M> are
          contractible; the punctured plane is homotopy equivalent to a circle.
        </p>
      </Definition>

      <Remark title="why homotopy">
        <p>
          Homotopy forgets size and shape but keeps holes. Invariants that depend only on homotopy class, such as the
          fundamental group and homology, are computable where homeomorphism is hopeless. In complex analysis, Cauchy&rsquo;s
          theorem holds for loops homotopic to a point in a region where the function is holomorphic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is a homotopy from <M>{"f"}</M> to <M>{"g"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "A continuous H on X × [0, 1] with H(x, 0) = f(x) and H(x, 1) = g(x)",
          "A homeomorphism from X to Y",
          "A continuous map from Y to X",
          "A sequence of maps converging to g",
        ],
        correct: [0],
      },
    },
    {
      key: "contract",
      rung: "check",
      prompt: <p>Which of these spaces is contractible?</p>,
      answer: { kind: "choice", options: ["The closed disc", "The circle", "The punctured plane", "Two points"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, at what time t does the straight-line homotopy pass through the origin? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 0.48, tolerance: 0.01 },
    },
    {
      key: "trans",
      rung: "apply",
      prompt: <p>Which fact makes the stacked homotopy in the transitivity proof continuous?</p>,
      answer: {
        kind: "choice",
        options: [
          "The pasting lemma: maps continuous on two closed sets that agree on their overlap glue to a continuous map.",
          "Compactness of [0, 1].",
          "Hausdorffness of Y.",
          "Uniform convergence.",
        ],
        correct: [0],
      },
    },
    {
      key: "punct",
      rung: "apply",
      prompt: <p>Why is the punctured plane homotopy equivalent to the unit circle?</p>,
      answer: {
        kind: "choice",
        options: [
          "The map x ↦ x / |x| and the inclusion of the circle compose to maps homotopic to the identities, by straight-line homotopy.",
          "Because they are homeomorphic.",
          "Because both are compact.",
          "Because both are contractible.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that any two continuous maps from a space <M>{"X"}</M> into a convex subset <M>{"Y"}</M> of <M>{"\\mathbb{R}^n"}</M> are homotopic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines H(x, t) = (1 − t) f(x) + t g(x).",
          "Checks H is continuous and has the right values at t = 0 and t = 1.",
          "Uses convexity to show H takes values in Y.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every map from any space into a contractible space is homotopic to a constant map.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses a homotopy from the identity of Y to a constant map, which contractibility provides.",
          "Composes it with f to get a homotopy from f to a constant.",
          "Checks continuity of the composite. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a homotopy is, why homotopy is an equivalence relation, the straight-line homotopy in convex sets and why it fails in the punctured plane, and homotopy equivalence and contractibility.",

  glimpse: (
    <p>
      Next, homotopy classes of loops form a group, the fundamental group. Computing it for the circle proves that the loop
      round the origin cannot be shrunk, and leads to Brouwer&rsquo;s fixed point theorem.
    </p>
  ),
};
