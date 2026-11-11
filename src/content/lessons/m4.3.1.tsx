import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DegreeViz } from "@/components/viz/DegreeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.3.1",
  minutes: 75,
  links: {
    revisits: ["m4.1.1", "m1.7.2", "m1.6.2"],
    foreshadows: ["m4.3.2", "m21.1.1", "m21.4.1"],
  },

  puzzle: (
    <>
      <p>
        At a gathering of nine people, could each person shake hands with exactly three others? Try drawing it: nine dots,
        each joined to three. You will fail, and not because you lack ingenuity. A one-line argument shows that it can
        never be done, and it is the first theorem of graph theory, the mathematics of things and the connections between
        them.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Click pairs of vertices to add or remove edges. Watch the total of the degrees, and the number of vertices with odd
        degree, as you go. Can you make that number odd?
      </p>
      <DegreeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="graphs">
        <p>
          A <strong>graph</strong> G = (V, E) is a set V of <strong>vertices</strong> and a set E of{" "}
          <strong>edges</strong>, each edge an unordered pair of distinct vertices. This is a <em>simple</em> graph; a{" "}
          <em>multigraph</em> allows several edges between the same pair, and a <em>directed</em> graph uses ordered pairs.
          Vertices u and v joined by an edge are <strong>adjacent</strong>. The <strong>degree</strong> d(v) is the number
          of edges at v.
        </p>
      </Definition>

      <Example title="families of graphs">
        <p>
          The <strong>complete graph</strong> <M>{"K_n"}</M> has all <M>{"\\binom{n}{2}"}</M> edges. The{" "}
          <strong>cycle</strong> <M>{"C_n"}</M> joins n vertices in a ring, and the <strong>path</strong>{" "}
          <M>{"P_n"}</M> in a line. A graph is <strong>bipartite</strong> if its vertices split into two parts with every
          edge going between the parts; the <strong>complete bipartite graph</strong> <M>{"K_{m,n}"}</M> has all mn such
          edges.
        </p>
      </Example>

      <Theorem title="the handshake lemma">
        <MD>{"\\sum_{v \\in V} d(v) = 2|E|."}</MD>
        <p>Consequently, every graph has an even number of vertices of odd degree.</p>
      </Theorem>
      <Proof>
        <p>
          Count the pairs (v, e) with v an end of e. Each vertex v is in d(v) such pairs, and each edge in exactly two. For
          the consequence: the even-degree vertices contribute an even amount to the sum, so the odd-degree vertices must
          too, and a sum of odd numbers is even only if there is an even number of them.
        </p>
      </Proof>
      <p>
        Nine people each shaking three hands would give a degree sum of 27, which is odd. So it is impossible.
      </p>

      <Definition title="isomorphism">
        <p>
          Graphs G and H are <strong>isomorphic</strong> if there is a bijection between their vertex sets that sends
          edges to edges and non-edges to non-edges. Isomorphic graphs are the same graph drawn differently. To show two
          graphs are not isomorphic, find an <em>invariant</em> they disagree on: the number of edges, the list of degrees,
          the number of triangles, the length of the shortest cycle.
        </p>
      </Definition>

      <Remark title="graphs as matrices">
        <p>
          The <strong>adjacency matrix</strong> of a graph on vertices <M>{"1, \\dots, n"}</M> has entry 1 in place (i, j)
          when i and j are adjacent, and 0 otherwise. It is symmetric, so by the spectral theorem it has real eigenvalues,
          which reveal a great deal about the graph. And the (i, j) entry of <M>{"A^k"}</M> counts the walks of length k
          from i to j.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "k6",
      rung: "check",
      prompt: <p>How many edges does the complete graph <M>{"K_6"}</M> have?</p>,
      answer: { kind: "numeric", value: 15 },
    },
    {
      key: "sum",
      rung: "check",
      prompt: <p>A graph has 12 edges. What is the sum of the degrees of its vertices?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "seq",
      rung: "apply",
      prompt: <p>Which of these lists are the degrees of some simple graph? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["2, 2, 2", "3, 3, 3, 1", "3, 2, 2, 1", "3, 3, 1"], correct: [0, 2] },
    },
    {
      key: "kmn",
      rung: "apply",
      prompt: <p>How many edges does <M>{"K_{3,4}"}</M> have?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "seven",
      rung: "apply",
      prompt: <p>Can 7 people each shake hands with exactly 5 others?</p>,
      answer: {
        kind: "choice",
        options: ["Yes", "No, because 7 × 5 is odd", "No, because 5 is more than half of 7", "Only if someone shakes hands twice"],
        correct: [1],
      },
    },
    {
      key: "handshake",
      rung: "prove",
      prompt: <p>Prove the handshake lemma, and deduce that the number of vertices of odd degree is even.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Double counts vertex-edge incidences: each vertex v contributes d(v), each edge exactly 2.",
          "Splits the degree sum into even and odd degrees and argues the odd part must be even.",
          "Concludes that the number of odd terms is even. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "same",
      rung: "stretch",
      prompt: <p>Prove that every simple graph with at least two vertices has two vertices of the same degree.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that in a graph on n vertices the possible degrees are 0, 1, …, n − 1.",
          "Observes that 0 and n − 1 cannot both occur, since a vertex of degree n − 1 is adjacent to every other.",
          "Applies the pigeonhole principle to n vertices and n − 1 possible degrees. A clear proof earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a graph is, the standard families such as complete and bipartite graphs, the handshake lemma and why it rules out nine people each shaking three hands, and what it means for two graphs to be isomorphic.",

  glimpse: (
    <p>
      The next lesson studies paths and connectedness. Combinatorics returns to graphs with matchings, Hall&rsquo;s theorem
      and Turán&rsquo;s theorem on dense graphs.
    </p>
  ),
};
