import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PathConnectViz } from "@/components/viz/PathConnectViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.1.5",
  minutes: 80,
  links: {
    revisits: ["m6.4.3", "m2.3.2", "m12.1.2"],
    foreshadows: ["m12.2.1", "m15.2.1", "m13.1.1"],
  },

  puzzle: (
    <>
      <p>
        The intermediate value theorem says a continuous function on an interval takes every value in between. What is it
        about an interval that makes this true, and what is the right idea of &ldquo;being in one piece&rdquo; for sets in the
        plane or in spaces of functions?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a set. Try to find a path between its points, or a way to split it into two separate open pieces.</p>
      <PathConnectViz />
    </>
  ),

  theory: (
    <>
      <Definition title="connectedness">
        <p>
          A metric space <M>{"X"}</M> is <strong>disconnected</strong> if <M>{"X = U \\cup V"}</M> with <M>{"U, V"}</M>{" "}
          disjoint, non-empty and open; otherwise it is <strong>connected</strong>. It is <strong>path-connected</strong> if
          any two points <M>{"x, y"}</M> are joined by a continuous <M>{"\\gamma : [0, 1] \\to X"}</M> with{" "}
          <M>{"\\gamma(0) = x"}</M> and <M>{"\\gamma(1) = y"}</M>.
        </p>
      </Definition>

      <Theorem title="intervals are connected">
        <p>A subset of <M>{"\\mathbb{R}"}</M> is connected if and only if it is an interval.</p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"A"}</M> is not an interval, there are <M>{"a < c < b"}</M> with <M>{"a, b \\in A"}</M>, <M>{"c \\notin A"}</M>,
          and <M>{"A \\cap (-\\infty, c)"}</M>, <M>{"A \\cap (c, \\infty)"}</M> split it. Conversely, suppose an interval{" "}
          <M>{"I = U \\cup V"}</M> is split, with <M>{"a \\in U"}</M>, <M>{"b \\in V"}</M>, <M>{"a < b"}</M>. Let{" "}
          <M>{"s = \\sup \\{ x \\in [a, b] : x \\in U \\}"}</M>. If <M>{"s \\in U"}</M>, then <M>{"s < b"}</M> and openness of{" "}
          <M>{"U"}</M> puts points just right of <M>{"s"}</M> in <M>{"U"}</M>, contradicting the supremum. If{" "}
          <M>{"s \\in V"}</M>, openness of <M>{"V"}</M> gives an interval left of <M>{"s"}</M> missing <M>{"U"}</M>,
          again contradicting the supremum.
        </p>
      </Proof>

      <Theorem title="continuous images">
        <p>
          The continuous image of a connected space is connected. With the previous theorem this gives the intermediate value
          theorem: if <M>{"X"}</M> is connected and <M>{"f : X \\to \\mathbb{R}"}</M> is continuous, then{" "}
          <M>{"f(X)"}</M> is an interval.
        </p>
      </Theorem>

      <Example title="path-connected implies connected, but not conversely">
        <p>
          If <M>{"X"}</M> were split by <M>{"U, V"}</M>, a path from a point of <M>{"U"}</M> to a point of <M>{"V"}</M> would
          split <M>{"[0, 1]"}</M> into <M>{"\\gamma^{-1}(U)"}</M> and <M>{"\\gamma^{-1}(V)"}</M>, which is impossible. The
          topologist&rsquo;s sine curve
        </p>
        <MD>{"\\{ (x, \\sin(1/x)) : 0 < x \\le 1 \\} \\cup \\{0\\} \\times [-1, 1]"}</MD>
        <p>is connected but not path-connected. Open connected subsets of <M>{"\\mathbb{R}^n"}</M>, however, are path-connected.</p>
      </Example>

      <Remark title="components">
        <p>
          Every space splits into maximal connected pieces, its <strong>components</strong>. The Cantor set is totally
          disconnected: its components are single points, yet it has no isolated points.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which subset of ℝ is connected?</p>,
      answer: { kind: "choice", options: ["[0, 1] ∪ [2, 3]", "ℚ", "(0, 5]", "ℝ minus {0}"], correct: [2] },
    },
    {
      key: "def",
      rung: "check",
      prompt: <p>Which condition is equivalent to X being connected?</p>,
      answer: {
        kind: "choice",
        options: ["Every continuous map from X to {0, 1} is constant.", "X is bounded.", "X is compact.", "X is finite."],
        correct: [0],
      },
    },
    {
      key: "comp",
      rung: "apply",
      prompt: <p>How many components does the set {"{x ∈ ℝ : x² ≠ 1}"} have?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "circle",
      rung: "apply",
      prompt: <p>Removing one point from a circle leaves a connected set. How many points must be removed from a circle to disconnect it?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "homeo",
      rung: "apply",
      prompt: <p>Why is no continuous bijection with continuous inverse possible between ℝ and ℝ²?</p>,
      answer: {
        kind: "choice",
        options: [
          "Removing a point disconnects ℝ but not ℝ².",
          "ℝ² is bigger.",
          "ℝ is not complete.",
          "ℝ² is not a metric space.",
        ],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the continuous image of a connected space is connected.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes f(X) is split by disjoint non-empty open U and V.",
          "Takes preimages, which are open, disjoint, non-empty and cover X.",
          "Concludes X is disconnected, a contradiction.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that at any moment there are two opposite points on the equator with the same temperature, assuming temperature varies continuously.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines g(θ) = T(θ) − T(θ + π) on the circle.",
          "Notes g(θ + π) = −g(θ), so g takes both signs or is zero.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what connected and path-connected mean, why intervals are the connected subsets of ℝ, how this gives the intermediate value theorem, and why the topologist's sine curve is connected but not path-connected.",

  glimpse: (
    <p>
      The next lessons study continuous maps between metric spaces. In topology, connectedness becomes one of the basic
      invariants used to tell spaces apart.
    </p>
  ),
};
