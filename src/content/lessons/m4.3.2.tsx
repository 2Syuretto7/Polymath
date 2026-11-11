import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { BfsViz } from "@/components/viz/BfsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.3.2",
  minutes: 80,
  links: {
    revisits: ["m4.3.1", "m1.6.2", "m1.5.2"],
    foreshadows: ["m4.3.3", "m21.2.1", "m15.2.1"],
  },

  puzzle: (
    <>
      <p>
        On a social network, how many steps of friend-of-a-friend separate you from a stranger on the other side of the
        world? In 1967 Stanley Milgram&rsquo;s letter-passing experiment suggested about six. To answer such a question for
        a real network with a billion people, nobody can look at every possible route. There is a simple procedure that
        finds the shortest distance from one person to everyone else, one ring of friends at a time.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Click a vertex to start a search from it, and increase the number of layers. Each vertex is labelled with its
        distance from the start once it is reached. Then add or remove the edge to the lonely vertex.
      </p>
      <BfsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="walks, paths and cycles">
        <p>
          A <strong>walk</strong> is a sequence of vertices <M>{"v_0, v_1, \\dots, v_k"}</M> with each consecutive pair
          adjacent; its <strong>length</strong> is k. A <strong>path</strong> is a walk with no repeated vertex. A{" "}
          <strong>cycle</strong> is a closed walk of length at least 3 whose only repetition is the return to the start.
          The <strong>distance</strong> d(u, v) is the length of a shortest walk from u to v.
        </p>
      </Definition>

      <Theorem title="walks contain paths">
        <p>If there is a walk from u to v, there is a path from u to v.</p>
      </Theorem>
      <Proof>
        <p>
          Take a shortest walk from u to v. If it repeated a vertex, <M>{"v_i = v_j"}</M> with i &lt; j, cutting out the
          part between them would give a shorter walk. So it repeats nothing: it is a path.
        </p>
      </Proof>

      <Definition title="connectedness and components">
        <p>
          A graph is <strong>connected</strong> if there is a path between every two vertices. The relation &ldquo;there
          is a walk from u to v&rdquo; is an equivalence relation: reflexive by the walk of length 0, symmetric by reversing,
          transitive by joining walks end to end. Its classes are the <strong>components</strong> of the graph.
        </p>
      </Definition>

      <Example title="breadth-first search">
        <p>
          Start with the vertex s in layer 0. Layer k + 1 consists of the unvisited neighbours of layer k. Each vertex in
          layer k is at distance exactly k from s, and the search reaches precisely the component of s. Each edge is looked
          at a bounded number of times, so the search is fast even on huge graphs.
        </p>
      </Example>

      <Theorem title="bipartite graphs">
        <p>A graph is bipartite if and only if it has no cycle of odd length.</p>
      </Theorem>
      <Proof>
        <p>
          In a bipartite graph every edge changes sides, so a closed walk must have even length. Conversely, suppose there
          is no odd cycle, and work in one component. Run a breadth-first search from a vertex s and colour the even layers
          one colour and the odd layers the other. If an edge joined two vertices u, v of the same colour, the paths from s
          to u and to v, together with that edge, would form a closed walk of odd length, which contains an odd cycle.
        </p>
      </Proof>

      <Remark title="how many edges force connection?">
        <p>
          A connected graph on n vertices has at least n − 1 edges: adding edges one at a time to n isolated vertices, each
          edge reduces the number of components by at most one. In the other direction, a graph on n vertices with more than{" "}
          <M>{"\\binom{n-1}{2}"}</M> edges must be connected, since a disconnected graph splits into two parts with no edges
          between them. Measuring how well connected a graph is, by how many vertices or edges must be removed to
          disconnect it, leads to Menger&rsquo;s theorem in Combinatorics.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "equiv",
      rung: "check",
      prompt: <p>Which fact makes &ldquo;there is a walk from u to v&rdquo; a transitive relation?</p>,
      answer: {
        kind: "choice",
        options: [
          "Walks can be reversed.",
          "A walk from u to v followed by a walk from v to w is a walk from u to w.",
          "Every vertex has a walk of length 0 to itself.",
          "Every walk contains a path.",
        ],
        correct: [1],
      },
    },
    {
      key: "min",
      rung: "check",
      prompt: <p>What is the smallest number of edges in a connected graph with 10 vertices?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "c8",
      rung: "apply",
      prompt: <p>What is the largest distance between two vertices of the cycle <M>{"C_8"}</M>?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "disc",
      rung: "apply",
      prompt: <p>What is the largest number of edges a disconnected simple graph on 5 vertices can have?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "bip",
      rung: "apply",
      prompt: <p>Which of these graphs are bipartite? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["C₆", "C₅", "any tree", "K₃"], correct: [0, 2] },
    },
    {
      key: "oddcycle",
      rung: "prove",
      prompt: <p>Prove that a graph is bipartite if and only if it contains no cycle of odd length.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows a cycle in a bipartite graph alternates sides and so has even length.",
          "For the converse, colours each component by the parity of distance from a chosen vertex.",
          "Shows that an edge inside one colour class would create an odd closed walk, and that an odd closed walk contains an odd cycle. A clear argument earns full credit.",
        ],
      },
    },
    {
      key: "dense",
      rung: "stretch",
      prompt: (
        <p>
          Prove that a simple graph on n vertices with more than <M>{"\\binom{n-1}{2}"}</M> edges is connected, and show
          that the bound cannot be improved.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Supposes the graph is disconnected and splits the vertices into a component of size k and the rest, with 1 ≤ k ≤ n − 1.",
          "Bounds the edges by C(k, 2) + C(n − k, 2) and shows this is at most C(n − 1, 2).",
          "Gives the extremal example: K_{n−1} plus an isolated vertex. A sound proof earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what walks, paths, cycles and components are, why every walk contains a path, how breadth-first search finds distances, and why a graph is bipartite exactly when it has no odd cycle.",

  glimpse: (
    <p>
      The next lesson asks for walks that use every edge, or every vertex, exactly once. Combinatorics proves
      Menger&rsquo;s theorem about connectivity, and Topology generalises connectedness to spaces.
    </p>
  ),
};
