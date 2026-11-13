import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SineCurveViz } from "@/components/viz/SineCurveViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.2.1",
  minutes: 85,
  links: {
    revisits: ["m15.1.4", "m12.1.5", "m15.1.3"],
    foreshadows: ["m15.2.2", "m15.4.2", "m15.5.2"],
  },

  puzzle: (
    <>
      <p>
        Intuitively, a space is in one piece if you can walk from any point to any other. But consider the graph of{" "}
        <M>{"\\sin(1/x)"}</M> for <M>{"0 < x \\le 1"}</M>, together with the vertical segment it crowds against at{" "}
        <M>{"x = 0"}</M>. It cannot be split into two separate open pieces, yet no walk leads from the curve to the segment. So
        &ldquo;in one piece&rdquo; has two meanings.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Zoom in towards the segment and follow a point along the curve.</p>
      <SineCurveViz />
    </>
  ),

  theory: (
    <>
      <Definition title="connected spaces">
        <p>
          A <strong>separation</strong> of <M>{"X"}</M> is a pair of disjoint non-empty open sets whose union is{" "}
          <M>{"X"}</M>. A space is <strong>connected</strong> if it has no separation; equivalently, the only subsets that are
          both open and closed are <M>{"\\varnothing"}</M> and <M>{"X"}</M>.
        </p>
      </Definition>

      <Theorem title="intervals are connected">
        <p>Every interval in <M>{"\\mathbb{R}"}</M> is connected.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose an interval <M>{"I = U \\cup V"}</M> is a separation, with <M>{"a \\in U"}</M>, <M>{"b \\in V"}</M> and{" "}
          <M>{"a < b"}</M>. Let <M>{"s = \\sup (U \\cap [a, b])"}</M>; it lies in <M>{"I"}</M>. If <M>{"s \\in U"}</M>, then{" "}
          <M>{"s < b"}</M> and openness of <M>{"U"}</M> puts points just beyond <M>{"s"}</M> in <M>{"U"}</M>, contradicting the
          supremum. If <M>{"s \\in V"}</M>, openness of <M>{"V"}</M> gives an interval round <M>{"s"}</M> inside{" "}
          <M>{"V"}</M>, so a smaller number bounds <M>{"U \\cap [a, b]"}</M>, again a contradiction.
        </p>
      </Proof>

      <Theorem title="continuous images and closures">
        <p>
          The continuous image of a connected space is connected. The closure of a connected subset is connected, and a union of
          connected sets sharing a point is connected.
        </p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"f(X)"}</M> had a separation <M>{"U, V"}</M>, then <M>{"f^{-1}(U), f^{-1}(V)"}</M> would separate{" "}
          <M>{"X"}</M>. If <M>{"A \\subseteq B \\subseteq \\overline{A}"}</M> and <M>{"B"}</M> were separated by{" "}
          <M>{"U, V"}</M>, then <M>{"A"}</M>, being connected, would lie in one of them, say <M>{"U"}</M>; but every point of{" "}
          <M>{"V \\cap B"}</M> is in <M>{"\\overline{A}"}</M>, so <M>{"V"}</M> meets <M>{"A"}</M>, which is impossible.
        </p>
      </Proof>

      <Definition title="path-connected spaces">
        <p>
          A space is <strong>path-connected</strong> if any two points are joined by a continuous path{" "}
          <M>{"\\gamma : [0, 1] \\to X"}</M>. Path-connected spaces are connected, since a separation would separate the
          connected image of a path. The intermediate value theorem is the statement that continuous images of intervals are
          connected.
        </p>
      </Definition>

      <Example title="the topologist’s sine curve">
        <p>
          Let <M>{"S"}</M> be the graph of <M>{"\\sin(1/x)"}</M> on <M>{"(0, 1]"}</M>, which is connected as a continuous image
          of an interval. Its closure adds the segment <M>{"\\{0\\} \\times [-1, 1]"}</M>, and is connected. But it is not
          path-connected: a path from the curve to the segment would have a first time <M>{"t_0"}</M> at which it reaches{" "}
          <M>{"x = 0"}</M>, and just before <M>{"t_0"}</M> its second coordinate would have to follow <M>{"\\sin(1/x)"}</M>{" "}
          through values near both 1 and <M>{"-1"}</M>, contradicting continuity.
        </p>
      </Example>

      <Remark title="components">
        <p>
          The connected components of a space are its maximal connected subsets; they partition it and are closed. For open
          subsets of <M>{"\\mathbb{R}^n"}</M>, connected and path-connected agree, which is why the distinction rarely shows up
          in analysis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is a space connected?</p>,
      answer: {
        kind: "choice",
        options: [
          "When it cannot be split into two disjoint non-empty open sets",
          "When any two points are joined by a straight line",
          "When it is bounded",
          "When it has a single point",
        ],
        correct: [0],
      },
    },
    {
      key: "implies",
      rung: "check",
      prompt: <p>Which implication always holds?</p>,
      answer: { kind: "choice", options: ["Path-connected implies connected", "Connected implies path-connected", "Connected implies compact", "Neither"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, as you zoom towards <M>{"x = 0"}</M>, what happens to the oscillations of the curve?</p>,
      answer: {
        kind: "choice",
        options: ["They continue between −1 and 1, ever faster", "They die out", "They settle at 0", "They stop at a finite zoom"],
        correct: [0],
      },
    },
    {
      key: "q",
      rung: "apply",
      prompt: <p>Is <M>{"\\mathbb{Q}"}</M>, with the subspace topology from <M>{"\\mathbb{R}"}</M>, connected?</p>,
      answer: {
        kind: "choice",
        options: ["No: the rationals below √2 and above √2 separate it", "Yes, since it is dense", "Yes, since it is infinite", "Only if we add 0"],
        correct: [0],
      },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>How many connected components does <M>{"\\mathbb{R} \\setminus \\{0, 1\\}"}</M> have?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the continuous image of a connected space is connected.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes f(X) has a separation by open sets U and V of f(X).",
          "Shows f⁻¹(U) and f⁻¹(V) are disjoint non-empty open sets covering X.",
          "Concludes this contradicts connectedness of X.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that <M>{"\\mathbb{R}"}</M> and <M>{"\\mathbb{R}^2"}</M> are not homeomorphic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes a homeomorphism f and removes a point p from ℝ and f(p) from ℝ².",
          "Notes ℝ minus a point is disconnected while ℝ² minus a point is path-connected, hence connected.",
          "Concludes that f restricted would be a homeomorphism between them, a contradiction. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what connected and path-connected mean, why intervals are connected, why continuous images and closures of connected sets are connected, and why the topologist's sine curve is connected but not path-connected.",

  glimpse: (
    <p>
      Next comes compactness, the other great topological property. Path-connectedness returns with the fundamental group,
      and connectedness helps sort the surfaces in their classification.
    </p>
  ),
};
