import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { MengerSepViz } from "@/components/viz/MengerSepViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.2.1",
  minutes: 85,
  links: {
    revisits: ["m21.1.2", "m4.3.2", "m21.1.1"],
    foreshadows: ["m21.2.2", "m21.3.2", "m21.4.1"],
  },

  puzzle: (
    <>
      <p>
        A network engineer wants a connection between two data centres to survive any two routers failing. One way is to
        build three routes that share no router. Is that the only way? If no set of two routers disconnects them, must three
        such routes exist?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Remove inner vertices to separate s from t, and compare with the disjoint paths.</p>
      <MengerSepViz />
    </>
  ),

  theory: (
    <>
      <Definition title="separators and disjoint paths">
        <p>
          For non-adjacent vertices s and t, an <strong>s–t separator</strong> is a set of vertices, not including s or t,
          whose removal leaves no s–t path. Paths from s to t are <strong>internally disjoint</strong> if they share no vertex
          except s and t.
        </p>
      </Definition>

      <Theorem title="Menger's theorem (1927)">
        <p>
          For non-adjacent s and t, the maximum number of internally disjoint s–t paths equals the minimum size of an s–t
          separator. There are edge versions too: the maximum number of edge-disjoint paths equals the minimum number of edges
          whose removal separates s from t.
        </p>
      </Theorem>

      <Example title="from Menger to König">
        <p>
          Given a bipartite graph with classes X and Y, add a vertex s joined to all of X and t joined to all of Y. Disjoint
          s–t paths are s–x–y–t, which correspond to matching edges xy. A separator is a set of vertices meeting every edge
          from X to Y: a vertex cover. So Menger gives König.
        </p>
      </Example>

      <Remark title="connectivity">
        <p>
          A graph is <strong>k-connected</strong> if it has more than k vertices and no set of fewer than k vertices disconnects
          it. Whitney&rsquo;s corollary of Menger: G is k-connected exactly when every two vertices are joined by k internally
          disjoint paths. Global robustness is equivalent to many local routes. The proof most often given today comes from
          network flows, next.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Menger&rsquo;s theorem equate?</p>,
      answer: {
        kind: "choice",
        options: ["Most internally disjoint s–t paths and fewest vertices separating s from t", "Number of edges and vertices", "Colours and cliques", "Matchings and edges"],
        correct: [0],
      },
    },
    {
      key: "easy",
      rung: "check",
      prompt: <p>Why must a separator have at least as many vertices as there are disjoint paths?</p>,
      answer: {
        kind: "choice",
        options: ["It must contain a vertex from each path, and the paths share no inner vertices", "Separators are large", "Paths are short", "Because the graph is connected"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the smallest number of vertices separating s from t?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "konig",
      rung: "apply",
      prompt: <p>In the reduction of König to Menger, what does a separator correspond to?</p>,
      answer: { kind: "choice", options: ["A vertex cover", "A matching", "A colouring", "A spanning tree"], correct: [0] },
    },
    {
      key: "kconn",
      rung: "apply",
      prompt: <p>A graph is 3-connected. How many internally disjoint paths join any two vertices, at least?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove the easy direction: the maximum number of internally disjoint s–t paths is at most the minimum size of an s–t separator.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes k internally disjoint paths and any separator.",
          "Notes the separator must contain an inner vertex of each path, else that path survives.",
          "Uses disjointness to conclude these vertices are distinct, so the separator has at least k vertices.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why does Menger&rsquo;s theorem require s and t to be non-adjacent? What goes wrong otherwise?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if s and t are adjacent, no set of other vertices separates them.",
          "Suggests a fix, such as deleting the edge and adding one to the count.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Count disjoint paths and you are counting units of something flowing from s to t. Give each edge a capacity, and ask
        how much can flow from a source to a sink in total.
      </p>
      <p>
        Next, the max-flow min-cut theorem: the greatest flow equals the smallest total capacity of edges cutting the sink
        from the source, the Ford-Fulkerson algorithm that finds both, and how flows prove Menger, König and Hall at once.
      </p>
    </>
  ),
};
