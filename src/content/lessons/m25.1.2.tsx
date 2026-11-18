import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { TreeCollapseViz } from "@/components/viz/TreeCollapseViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.1.2",
  minutes: 90,
  links: {
    revisits: ["m25.1.1", "m15.4.1", "m15.4.2"],
    foreshadows: ["m25.1.3", "m25.3.1", "m25.6.1"],
  },

  puzzle: (
    <>
      <p>
        A network of roads has many junctions and many roads. For the question &lsquo;how many essentially different
        circuits are there?&rsquo; most of that detail is irrelevant. Can the network be shrunk to something much simpler,
        without changing anything that a loop can detect?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Collapse a spanning tree in three graphs, and count the circles that remain.</p>
      <TreeCollapseViz />
    </>
  ),

  theory: (
    <>
      <Definition title="homotopy equivalence and deformation retraction">
        <p>
          Recall that <M>{"f: X \\to Y"}</M> is a <strong>homotopy equivalence</strong> if there is{" "}
          <M>{"g: Y \\to X"}</M> with <M>{"gf \\simeq \\mathrm{id}_X"}</M> and <M>{"fg \\simeq \\mathrm{id}_Y"}</M>. A subspace{" "}
          <M>A</M> is a <strong>deformation retract</strong> of <M>X</M> if there is a homotopy from the identity of <M>X</M>{" "}
          to a retraction onto <M>A</M>, fixing <M>A</M> throughout. Then the inclusion of <M>A</M> is a homotopy equivalence.
          The punctured plane deformation retracts onto a circle; a Möbius band onto its core circle.
        </p>
      </Definition>

      <Definition title="the homotopy extension property">
        <p>
          A pair <M>{"(X, A)"}</M> has the <strong>homotopy extension property</strong> if any homotopy of a map{" "}
          <M>{"A \\to Y"}</M> extends to a homotopy of any given extension <M>{"X \\to Y"}</M>. Equivalently,{" "}
          <M>{"X \\times \\{0\\} \\cup A \\times I"}</M> is a retract of <M>{"X \\times I"}</M>. Every CW pair, a complex with a
          subcomplex, has it, because <M>{"D^n \\times I"}</M> retracts onto <M>{"D^n \\times \\{0\\} \\cup S^{n-1} \\times I"}</M>,
          cell by cell.
        </p>
      </Definition>

      <Theorem title="collapsing contractible subcomplexes">
        <p>
          If <M>{"(X, A)"}</M> is a CW pair and <M>A</M> is contractible, the quotient map <M>{"X \\to X/A"}</M> is a homotopy
          equivalence. The proof uses homotopy extension to slide a contraction of <M>A</M> over all of <M>X</M>.
        </p>
      </Theorem>

      <Example title="graphs">
        <p>
          A connected graph has a spanning tree, which is contractible. Collapsing it leaves a wedge of circles, one for each
          remaining edge. So a connected finite graph with <M>V</M> vertices and <M>E</M> edges is homotopy equivalent to a
          wedge of <M>{"E - V + 1"}</M> circles, and its fundamental group is free of that rank.
        </p>
      </Example>

      <Remark title="homotopy invariants">
        <p>
          The fundamental group, and the homology groups to come, depend only on homotopy type. So does the Euler
          characteristic: the graph and the wedge of circles both give <M>{"V - E = 1 - (E - V + 1)"}</M>. A homotopy invariant
          that distinguishes two spaces proves they are not homotopy equivalent, and so not homeomorphic.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dr",
      rung: "check",
      prompt: <p>What is a deformation retraction of X onto A?</p>,
      answer: { kind: "choice", options: ["A homotopy from the identity of X to a retraction onto A, fixing A throughout", "A homeomorphism from X to A", "A map collapsing X to a point", "A covering map from X to A"], correct: [0] },
    },
    {
      key: "collapse",
      rung: "check",
      prompt: <p>When is the quotient map X → X/A a homotopy equivalence?</p>,
      answer: { kind: "choice", options: ["When (X, A) is a CW pair and A is contractible", "Always", "Only when A is a point", "When A is open"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many circles remain after collapsing a spanning tree of K₄?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "rank",
      rung: "apply",
      prompt: <p>A connected graph has 10 vertices and 14 edges. What is the rank of its fundamental group?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "mobius",
      rung: "apply",
      prompt: <p>The Möbius band is homotopy equivalent to which space?</p>,
      answer: { kind: "choice", options: ["A circle", "A point", "A sphere", "A wedge of two circles"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ℝⁿ minus the origin deformation retracts onto the unit sphere.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines H(x, t) = (1 − t)x + t x/|x| for x ≠ 0 and t in [0, 1].",
          "Checks H stays in ℝⁿ minus the origin, since it is a positive multiple of x, and is continuous.",
          "Notes H(x, 0) = x, H(x, 1) lies on the sphere, and points of the sphere stay fixed throughout.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the sphere with two points identified is homotopy equivalent to S² ∨ S¹.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Joins the two points by an arc A outside the sphere, or inside it, to get a CW complex X.",
          "Collapses the arc A to get the sphere with two points identified, and collapses instead an arc on the sphere joining them to get S² ∨ S¹.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Graphs give free groups. Attaching discs to them imposes relations, and the full form of van Kampen&rsquo;s theorem
        says exactly how: every relation comes from a disc.
      </p>
      <p>
        Next, van Kampen in full: covers by many open sets, the effect of attaching cells, the fundamental group of a CW
        complex from its 2-skeleton, and every group as a fundamental group.
      </p>
    </>
  ),
};
