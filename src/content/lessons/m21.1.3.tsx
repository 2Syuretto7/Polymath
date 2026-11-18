import { M } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { TutteOddViz } from "@/components/viz/TutteOddViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.1.3",
  minutes: 90,
  links: {
    revisits: ["m21.1.2", "m21.1.1", "m4.3.2"],
    foreshadows: ["m21.2.1", "m21.3.1", "m21.4.1"],
  },

  puzzle: (
    <>
      <p>
        Ten people sit at a party, and you want to pair everyone off with someone they know. The graph has an even number of
        vertices and every vertex has a neighbour, yet it may still be impossible. Is there always a short reason you can
        point to when it is?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Click vertices to remove them, and count the odd components that remain.</p>
      <TutteOddViz />
    </>
  ),

  theory: (
    <>
      <Definition title="odd components">
        <p>
          A <strong>perfect matching</strong> covers every vertex. For a set S of vertices, let o(G − S) be the number of
          components of G − S with an odd number of vertices. In a perfect matching, each odd component must have a vertex
          matched outside itself, hence into S, and these partners in S are distinct.
        </p>
      </Definition>

      <Theorem title="Tutte's theorem (1947)">
        <p>
          A graph G has a perfect matching if and only if <M>{"o(G - S) \\le |S|"}</M> for every set S of vertices.
        </p>
      </Theorem>

      <Example title="sketch of the proof">
        <p>
          Necessity is the counting above. For sufficiency, take a counterexample with as many edges as possible: adding any
          edge creates a perfect matching while Tutte&rsquo;s condition survives. Let S be the vertices joined to all others.
          If every component of G − S is complete, match within components, send one vertex of each odd component to S, and
          pair the rest of S. Otherwise a component that is not complete gives vertices x, y, z with xy and yz edges but not
          xz, and a further w not joined to y; comparing the perfect matchings of G + xz and G + yw yields one in G itself.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          Tutte&rsquo;s theorem implies Hall&rsquo;s. It also gives Petersen&rsquo;s theorem (1891): every 3-regular graph
          without a bridge has a perfect matching. Edmonds (1965) found a polynomial-time algorithm for maximum matching in
          general graphs by shrinking odd cycles into &ldquo;blossoms&rdquo;, a landmark in the theory of efficient
          algorithms.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "cond",
      rung: "check",
      prompt: <p>What is Tutte&rsquo;s condition?</p>,
      answer: {
        kind: "choice",
        options: ["For every S, G − S has at most |S| odd components", "Every vertex has even degree", "The graph is bipartite", "The graph has no odd cycles"],
        correct: [0],
      },
    },
    {
      key: "empty",
      rung: "check",
      prompt: <p>What does the condition say when S is empty?</p>,
      answer: { kind: "choice", options: ["Every component of G has an even number of vertices", "G is connected", "G has no edges", "Nothing"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation&rsquo;s first graph, with the hub removed, how many odd components remain?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "star",
      rung: "apply",
      prompt: <p>The star with one centre and 3 leaves: which S shows it has no perfect matching?</p>,
      answer: { kind: "choice", options: ["S = the centre: three odd components remain", "S = empty", "S = one leaf", "S = all vertices"], correct: [0] },
    },
    {
      key: "pet",
      rung: "apply",
      prompt: <p>What does Petersen&rsquo;s theorem say?</p>,
      answer: {
        kind: "choice",
        options: ["Every bridgeless 3-regular graph has a perfect matching", "Every graph has a perfect matching", "Every planar graph is 4-colourable", "Every tree has a perfect matching"],
        correct: [0],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the necessity of Tutte&rsquo;s condition.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes a perfect matching M and a set S.",
          "Notes each odd component of G − S cannot be perfectly matched within itself, so some vertex is matched to a vertex of S.",
          "Notes these partners in S are distinct, so the number of odd components is at most |S|.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show how Hall&rsquo;s theorem for a bipartite graph with |X| = |Y| follows from Tutte&rsquo;s.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Assumes Hall’s condition and makes Y complete, adding edges within Y, so a perfect matching of the new graph gives one between X and Y.",
          "Checks Tutte’s condition in the new graph using Hall’s condition.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Matching theory is about disjoint edges. A wider family of results is about disjoint paths: how many independent
        routes join two points of a network, and how few failures could cut them apart.
      </p>
      <p>
        Next, Menger&rsquo;s theorem: the maximum number of disjoint paths between two vertices equals the minimum number of
        vertices whose removal separates them. König&rsquo;s theorem turns out to be a special case.
      </p>
    </>
  ),
};
