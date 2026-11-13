import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { InteriorPointViz } from "@/components/viz/InteriorPointViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m12.1.2",
  minutes: 85,
  links: {
    revisits: ["m6.4.1", "m12.1.1", "m6.2.4"],
    foreshadows: ["m12.1.4", "m12.2.1", "m15.2.2"],
  },

  puzzle: (
    <>
      <p>
        Standing anywhere strictly inside a cricket field, you can take a small step in any direction and stay inside. Standing
        on the boundary rope, some steps take you out. Which sets have the first property everywhere, and why do analysts care?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a set and move the point. The viz finds a ball around the point that stays inside the set or outside it, or
        reports that none does.
      </p>
      <InteriorPointViz />
    </>
  ),

  theory: (
    <>
      <Definition title="open and closed sets">
        <p>
          In a metric space <M>{"(X, d)"}</M>, a set <M>{"U"}</M> is <strong>open</strong> if for every <M>{"x \\in U"}</M>{" "}
          there is <M>{"r > 0"}</M> with <M>{"B(x, r) \\subseteq U"}</M>. A set <M>{"F"}</M> is <strong>closed</strong> if its
          complement is open. Equivalently, <M>{"F"}</M> is closed when it contains the limit of every convergent sequence of
          its points.
        </p>
      </Definition>

      <Theorem title="open balls are open">
        <p>
          For every <M>{"x"}</M> and <M>{"r > 0"}</M>, the ball <M>{"B(x, r)"}</M> is open.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"y \\in B(x, r)"}</M> and set <M>{"s = r - d(x, y) > 0"}</M>. If <M>{"d(y, z) < s"}</M>, the triangle
          inequality gives
        </p>
        <MD>{"d(x, z) \\le d(x, y) + d(y, z) < d(x, y) + s = r,"}</MD>
        <p>so <M>{"B(y, s) \\subseteq B(x, r)"}</M>.</p>
      </Proof>

      <Theorem title="unions and intersections">
        <p>
          Any union of open sets is open, and any finite intersection of open sets is open. Taking complements, any
          intersection of closed sets is closed, and any finite union of closed sets is closed. Both <M>{"\\varnothing"}</M>{" "}
          and <M>{"X"}</M> are open and closed.
        </p>
      </Theorem>

      <Example title="neither, and both">
        <p>
          In <M>{"\\mathbb{R}"}</M>, <M>{"[0, 1)"}</M> is neither open nor closed: no ball around 0 stays inside, and the
          points <M>{"1 - 1/n"}</M> converge to 1, which is missing. The intersection of the open sets{" "}
          <M>{"(-1/n, 1/n)"}</M> is <M>{"\\{0\\}"}</M>, which is not open, so the finiteness condition matters. With the
          discrete metric, <M>{"B(x, 1/2) = \\{x\\}"}</M>, so every set is open and every set is closed.
        </p>
      </Example>

      <Remark title="interior, closure, boundary">
        <p>
          The <strong>interior</strong> of <M>{"A"}</M> is the largest open set inside it, the <strong>closure</strong>{" "}
          <M>{"\\overline{A}"}</M> is the smallest closed set containing it, and the <strong>boundary</strong> is{" "}
          <M>{"\\overline{A}"}</M> minus the interior. For <M>{"\\mathbb{Q} \\subset \\mathbb{R}"}</M>, the interior is empty and
          the closure is all of <M>{"\\mathbb{R}"}</M>, so the boundary is everything.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which subset of ℝ is open?</p>,
      answer: { kind: "choice", options: ["[0, 1]", "(0, 1)", "[0, 1)", "{0}"], correct: [1] },
    },
    {
      key: "closed",
      rung: "check",
      prompt: <p>When is a set closed?</p>,
      answer: {
        kind: "choice",
        options: ["When it is not open", "When its complement is open", "When it is bounded", "When it is finite"],
        correct: [1],
      },
    },
    {
      key: "radius",
      rung: "apply",
      prompt: <p>The point y = 0.7 lies in the open ball B(0, 1) in ℝ. What is the largest s with B(0.7, s) ⊆ B(0, 1)?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "inter",
      rung: "apply",
      prompt: <p>What is the intersection of the open intervals (−1/n, 1 + 1/n) for n = 1, 2, 3, …?</p>,
      answer: { kind: "choice", options: ["(0, 1)", "[0, 1]", "∅", "ℝ"], correct: [1] },
    },
    {
      key: "bdry",
      rung: "apply",
      prompt: <p>What is the boundary of the open disc x² + y² &lt; 1 in the plane?</p>,
      answer: { kind: "choice", options: ["The empty set", "The circle x² + y² = 1", "The closed disc", "The origin"], correct: [1] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the intersection of two open sets is open.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes x in U ∩ V and finds radii r and s with B(x, r) ⊆ U and B(x, s) ⊆ V.",
          "Uses the smaller radius min(r, s).",
          "Concludes that the ball lies in U ∩ V.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Can the closed ball {"{y : d(x, y) ≤ r}"} be different from the closure of the open ball B(x, r)? Try the discrete metric.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes r = 1 in the discrete metric.",
          "Notes that the closed ball is all of X, while B(x, 1) = {x} is already closed.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what open and closed sets are in a metric space, why open balls are open, why only finite intersections of open sets need be open, and how a set can be neither or both.",

  glimpse: (
    <p>
      The next lesson studies convergence and completeness. Open sets will soon characterise continuity, and their
      properties are the starting point of topology.
    </p>
  ),
};
