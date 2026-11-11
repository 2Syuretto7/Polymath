import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { KruskalViz } from "@/components/viz/KruskalViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.3.4",
  minutes: 80,
  links: {
    revisits: ["m4.3.2", "m4.3.3", "m4.2.4"],
    foreshadows: ["m4.3.5", "m4.5.1", "m21.3.3"],
  },

  puzzle: (
    <>
      <p>
        A state wants to connect six towns by roads, so that one can drive from any town to any other. Each possible road
        has a cost. Building every road is wasteful; building too few leaves someone cut off. What is the cheapest network
        that does the job? A surprisingly naive strategy, always build the cheapest road that is still useful, turns out
        to give the best possible answer.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through Kruskal&rsquo;s algorithm. At each step it considers the cheapest edge not yet looked at, and keeps it
        unless it would close a cycle.
      </p>
      <KruskalViz />
    </>
  ),

  theory: (
    <>
      <Definition title="trees">
        <p>
          A <strong>tree</strong> is a connected graph with no cycles. A graph with no cycles is a <strong>forest</strong>:
          its components are trees. A vertex of degree 1 is a <strong>leaf</strong>.
        </p>
      </Definition>

      <Theorem title="characterising trees">
        <p>For a graph T with n vertices, the following are equivalent:</p>
        <ol>
          <li>T is a tree;</li>
          <li>there is exactly one path between any two vertices;</li>
          <li>T is connected, and removing any edge disconnects it;</li>
          <li>T is connected and has n − 1 edges;</li>
          <li>T has no cycles and has n − 1 edges.</li>
        </ol>
      </Theorem>
      <Proof>
        <p>
          The key fact is that every tree with n ≥ 2 vertices has at least two leaves: the two ends of a longest path cannot
          have neighbours off the path, or the path would extend, nor on it, or there would be a cycle. Removing a leaf
          leaves a tree with n − 1 vertices, so by induction a tree has n − 1 edges. The other equivalences follow from the
          fact that adding an edge to a tree creates exactly one cycle, and removing an edge on a cycle keeps a graph
          connected.
        </p>
      </Proof>

      <Example title="spanning trees and Kruskal&rsquo;s algorithm">
        <p>
          A <strong>spanning tree</strong> of a connected graph G is a tree containing all its vertices, using some of its
          edges. One always exists: keep removing edges that lie on cycles. If the edges have weights,{" "}
          <strong>Kruskal&rsquo;s algorithm</strong> finds a spanning tree of least total weight: sort the edges by weight
          and add each in turn unless it would create a cycle. It works because of the <strong>cut property</strong>: for
          any split of the vertices into two groups, a cheapest edge crossing between them belongs to some minimum spanning
          tree.
        </p>
      </Example>

      <Theorem title="Cayley&rsquo;s formula">
        <p>
          There are <M>{"n^{n-2}"}</M> trees on n labelled vertices. For n = 4 that is 16: twelve paths and four stars.
        </p>
      </Theorem>
      <p>
        Prüfer found a bijection between labelled trees and sequences of length n − 2 from{" "}
        <M>{"\\{1, \\dots, n\\}"}</M>: repeatedly remove the leaf with the smallest label and write down its neighbour.
      </p>

      <Remark title="trees everywhere">
        <p>
          A <strong>rooted tree</strong> has one vertex singled out, giving every edge a direction away from the root:
          family trees, file systems and the parse trees of formulas are all rooted trees. Binary trees with n nodes are
          counted by the Catalan numbers. Breadth-first search, run on a connected graph, builds a spanning tree of shortest
          paths from the start.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "edges",
      rung: "check",
      prompt: <p>How many edges does a tree with 20 vertices have?</p>,
      answer: { kind: "numeric", value: 19 },
    },
    {
      key: "forest",
      rung: "check",
      prompt: <p>A forest has 20 vertices and 3 components. How many edges does it have?</p>,
      answer: { kind: "numeric", value: 17 },
    },
    {
      key: "kruskal",
      rung: "apply",
      prompt: <p>In the visualisation, what is the total weight of the minimum spanning tree?</p>,
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "cayley",
      rung: "apply",
      prompt: <p>How many trees are there on 5 labelled vertices?</p>,
      answer: { kind: "numeric", value: 125 },
    },
    {
      key: "leaves",
      rung: "apply",
      prompt: (
        <p>
          A tree has three vertices of degree 3, two of degree 2, and all its other vertices are leaves. How many leaves
          does it have?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "nminus1",
      rung: "prove",
      prompt: (
        <p>
          Prove that every tree with n ≥ 2 vertices has at least two leaves, and deduce by induction that every tree with n
          vertices has n − 1 edges.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes a longest path and argues its end vertices are leaves, since any other neighbour would extend the path or create a cycle.",
          "Removes a leaf and its edge, noting the result is still a tree with n − 1 vertices.",
          "Completes the induction from the base case n = 1. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "cut",
      rung: "stretch",
      prompt: (
        <p>
          Prove the cut property: if the vertices are split into two non-empty groups, and e is a cheapest edge between the
          groups, then some minimum spanning tree contains e. Explain why this shows Kruskal&rsquo;s algorithm is correct.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes a minimum spanning tree T without e, and notes that adding e creates a cycle which must cross between the groups at another edge f.",
          "Swaps f for e, getting a spanning tree of weight at most that of T, hence also minimum.",
          "Explains that each edge Kruskal adds is a cheapest edge across the cut between its component and the rest. A reasonable argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a tree is, the equivalent descriptions of trees and why a tree on n vertices has n − 1 edges, how Kruskal's algorithm finds a minimum spanning tree, and what Cayley's formula counts.",

  glimpse: (
    <p>
      The next lesson asks which graphs can be drawn without crossings, and how many colours their vertices need. Algorithms,
      later in this course, analyses procedures like Kruskal&rsquo;s.
    </p>
  ),
};
