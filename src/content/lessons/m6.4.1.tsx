import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NeighbourhoodViz } from "@/components/viz/NeighbourhoodViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.4.1",
  minutes: 85,
  links: {
    revisits: ["m6.2.5", "m6.2.3", "m6.1.2"],
    foreshadows: ["m6.4.2", "m12.1.2", "m15.1.1"],
  },

  puzzle: (
    <>
      <p>
        The interval <M>{"(0, 1)"}</M> has no largest element: whatever point you pick, there is room to its right. The
        interval <M>{"[0, 1]"}</M> does have one. That small difference decides whether a continuous function must attain its
        maximum, whether a sequence of points can escape, and much else. What exactly is the difference between these two
        sets, and how can we describe it in a way that does not depend on intervals?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Pick a set and slide the point along the line. Watch when a whole small interval around the point fits inside the
        set, and when the set crowds in on the point.
      </p>
      <NeighbourhoodViz />
    </>
  ),

  theory: (
    <>
      <Definition title="open sets">
        <p>
          The <M>{"\\varepsilon"}</M>-<strong>neighbourhood</strong> of <M>{"x"}</M> is{" "}
          <M>{"V_\\varepsilon(x) = (x - \\varepsilon, x + \\varepsilon)"}</M>. A point <M>{"x \\in A"}</M> is an{" "}
          <strong>interior point</strong> of <M>{"A"}</M> if some <M>{"V_\\varepsilon(x) \\subseteq A"}</M>. A set is{" "}
          <strong>open</strong> if every one of its points is an interior point.
        </p>
      </Definition>

      <Definition title="closed sets">
        <p>
          A point <M>{"x"}</M> is a <strong>limit point</strong> of <M>{"A"}</M> if every <M>{"V_\\varepsilon(x)"}</M> meets{" "}
          <M>{"A"}</M> at some point other than <M>{"x"}</M>; equivalently, <M>{"x = \\lim a_n"}</M> for some sequence of
          points <M>{"a_n \\in A"}</M> with <M>{"a_n \\ne x"}</M>. A set is <strong>closed</strong> if it contains all its
          limit points. The <strong>closure</strong> <M>{"\\bar A"}</M> is <M>{"A"}</M> together with its limit points, the
          smallest closed set containing <M>{"A"}</M>.
        </p>
      </Definition>

      <Theorem title="closed sets are complements of open sets">
        <p>A set is closed if and only if its complement is open.</p>
      </Theorem>

      <Proof>
        <p>
          Suppose <M>{"A"}</M> is closed and <M>{"x \\notin A"}</M>. Then <M>{"x"}</M> is not a limit point of <M>{"A"}</M>,
          so some <M>{"V_\\varepsilon(x)"}</M> misses <M>{"A"}</M> entirely: it lies in the complement, so the complement is
          open. Conversely, suppose the complement is open, and let <M>{"x"}</M> be a limit point of <M>{"A"}</M>. If{" "}
          <M>{"x \\notin A"}</M>, some <M>{"V_\\varepsilon(x)"}</M> lies in the complement and so misses <M>{"A"}</M>,
          contradicting that <M>{"x"}</M> is a limit point. So <M>{"x \\in A"}</M>.
        </p>
      </Proof>

      <Example title="unions and intersections">
        <p>
          Any union of open sets is open, and any finite intersection of open sets is open: take the smallest of finitely
          many <M>{"\\varepsilon"}</M>&rsquo;s. Infinite intersections can fail:
        </p>
        <MD>{"\\bigcap_{n \\ge 1} \\left(-\\tfrac1n, \\tfrac1n\\right) = \\{0\\},"}</MD>
        <p>
          which is not open. Taking complements, any intersection of closed sets is closed, and finite unions of closed sets
          are closed.
        </p>
      </Example>

      <Remark title="neither, and both">
        <p>
          Open and closed are not opposites. The interval <M>{"[0, 1)"}</M> is neither, and so is{" "}
          <M>{"\\{1/n : n \\ge 1\\}"}</M>, whose one limit point 0 is missing. The rationals are neither: every interval
          contains irrationals, and every real is a limit of rationals, so <M>{"\\bar{\\mathbb{Q}} = \\mathbb{R}"}</M>. Only{" "}
          <M>{"\\emptyset"}</M> and <M>{"\\mathbb{R}"}</M> are both open and closed. These definitions use only the idea of a
          neighbourhood, which is why they carry over to metric spaces and, stripped down further, to topology.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "open",
      rung: "check",
      prompt: <p>Which of these sets are open? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["(0, 1)", "[0, 1]", "(0, 1) ∪ (2, 3)", "the whole real line", "{0}"],
        correct: [0, 2, 3],
      },
    },
    {
      key: "limit",
      rung: "check",
      prompt: (
        <p>
          What is the only limit point of <M>{"\\{1/n : n \\ge 1\\}"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "eps",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"x = 0.3"}</M> in <M>{"(0, 1)"}</M>, what is the largest <M>{"\\varepsilon"}</M> with{" "}
          <M>{"V_\\varepsilon(x) \\subseteq (0, 1)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.3, tolerance: 0.0001 },
    },
    {
      key: "closure",
      rung: "apply",
      prompt: <p>What is the closure of the rationals in the interval from 0 to 1?</p>,
      answer: {
        kind: "choice",
        options: ["The same set of rationals", "[0, 1]", "(0, 1)", "The empty set"],
        correct: [1],
      },
    },
    {
      key: "neither",
      rung: "apply",
      prompt: <p>Which of these sets are neither open nor closed? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["[0, 1)", "ℚ", "[0, 1]", "{1/n : n ≥ 1}", "ℝ"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the intersection of two open sets is open. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes x in the intersection and finds ε₁ and ε₂ with neighbourhoods inside each set.",
          "Takes ε = min(ε₁, ε₂).",
          "Concludes V_ε(x) lies in both sets, so in the intersection.",
        ],
      },
    },
    {
      key: "seq",
      rung: "stretch",
      prompt: (
        <p>
          Show that a set <M>{"F"}</M> is closed if and only if every convergent sequence of points of <M>{"F"}</M> has its
          limit in <M>{"F"}</M>. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "If F is closed and x_n → x with x_n in F: either x equals some x_n, or x is a limit point of F, so x is in F.",
          "Conversely, any limit point x of F is the limit of a sequence in F, chosen from neighbourhoods V_(1/n)(x).",
          "Concludes the sequence condition forces x into F, so F is closed.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what open and closed sets are, using neighbourhoods, interior points and limit points, why a set is closed exactly when its complement is open, and why many sets are neither.",

  glimpse: (
    <p>
      The next lesson combines closed and bounded into compactness, and proves the Heine-Borel theorem. In metric spaces the
      same definitions work word for word with balls in place of intervals, and in topology open sets become the starting
      point instead of the distance.
    </p>
  ),
};
