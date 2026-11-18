import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { TuranViz } from "@/components/viz/TuranViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.4.1",
  minutes: 85,
  links: {
    revisits: ["m4.3.1", "m21.3.1", "m4.1.4"],
    foreshadows: ["m21.4.2", "m21.4.3", "m21.5.1"],
  },

  puzzle: (
    <>
      <p>
        At a party of ten people, no three are all mutual friends. What is the largest possible number of friendships? Split
        the guests into two groups of five, with everyone friends across the groups and nobody within a group: that gives 25
        and no friendly triangle. Can you do better?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose which clique to forbid, see the densest graph without it, then try adding one more edge.</p>
      <TuranViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Mantel's theorem (1907)">
        <p>
          A triangle-free graph on <M>n</M> vertices has at most <M>{"\\lfloor n^2/4 \\rfloor"}</M> edges, attained by the
          complete bipartite graph with parts as equal as possible.
        </p>
      </Theorem>

      <Definition title="Turán graphs">
        <p>
          The <strong>Turán graph</strong> <M>{"T(n, r)"}</M> splits <M>n</M> vertices into <M>r</M> parts whose sizes differ
          by at most one, and joins every two vertices in different parts. It has no <M>{"K_{r+1}"}</M>, since among any{" "}
          <M>r + 1</M> vertices two share a part, by pigeonhole.
        </p>
      </Definition>

      <Theorem title="Turán's theorem (1941)">
        <p>
          Every graph on <M>n</M> vertices with no <M>{"K_{r+1}"}</M> has at most as many edges as <M>{"T(n, r)"}</M>, and{" "}
          <M>{"T(n, r)"}</M> is the only such graph with that many. In particular the number of edges is at most
        </p>
        <MD>{"\\left(1 - \\frac{1}{r}\\right)\\frac{n^2}{2}."}</MD>
      </Theorem>

      <Example title="a proof of Mantel">
        <p>
          If <M>xy</M> is an edge of a triangle-free graph, <M>x</M> and <M>y</M> have no common neighbour, so{" "}
          <M>{"d(x) + d(y) \\le n"}</M>. Summing over the <M>e</M> edges, each vertex <M>x</M> appears <M>{"d(x)"}</M> times,
          so <M>{"\\sum_x d(x)^2 \\le ne"}</M>. By Cauchy-Schwarz,{" "}
          <M>{"(2e)^2 = (\\sum_x d(x))^2 \\le n \\sum_x d(x)^2 \\le n^2 e"}</M>, so <M>{"e \\le n^2/4"}</M>.
        </p>
      </Example>

      <Remark title="extremal graph theory">
        <p>
          Turán&rsquo;s question, how many edges force a given subgraph, founded a field. The Erdős-Stone theorem (1946) says
          that for any graph <M>H</M> the answer is <M>{"(1 - \\frac{1}{\\chi(H) - 1} + o(1))\\frac{n^2}{2}"}</M>: the
          chromatic number of <M>H</M> decides the density. For bipartite <M>H</M> this says only that the answer is{" "}
          <M>{"o(n^2)"}</M>, and pinning it down is still largely open.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mantel",
      rung: "check",
      prompt: <p>What does Mantel&rsquo;s theorem bound?</p>,
      answer: {
        kind: "choice",
        options: ["The number of edges in a triangle-free graph on n vertices", "The number of triangles in a graph", "The chromatic number of a planar graph", "The number of colourings"],
        correct: [0],
      },
    },
    {
      key: "why",
      rung: "check",
      prompt: <p>Why does the Turán graph T(n, r) contain no clique on r + 1 vertices?</p>,
      answer: {
        kind: "choice",
        options: ["Two of the r + 1 vertices lie in the same part and are not joined", "It has too few vertices", "It is planar", "It has no edges"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many edges does the densest graph on 8 vertices with no K₄ have?</p>,
      answer: { kind: "numeric", value: 21 },
    },
    {
      key: "party",
      rung: "apply",
      prompt: <p>In the puzzle, what is the largest number of friendships among ten people with no three mutual friends?</p>,
      answer: { kind: "numeric", value: 25 },
    },
    {
      key: "k4free",
      rung: "apply",
      prompt: <p>How many edges does T(9, 3) have?</p>,
      answer: { kind: "numeric", value: 27 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Mantel&rsquo;s theorem: a triangle-free graph on n vertices has at most n²/4 edges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes adjacent vertices have no common neighbour, so d(x) + d(y) ≤ n for each edge xy (or uses another valid route, such as a vertex of largest degree).",
          "Sums over edges to get the sum of d(x)² at most ne, or an equivalent counting step.",
          "Combines with Cauchy-Schwarz or another inequality to conclude e ≤ n²/4.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Erdős-Stone says the chromatic number of H decides how many edges force a copy of H. Why should colouring be the right measure here?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that a Turán graph with χ(H) − 1 parts cannot contain H, since H would need χ(H) colours but the parts give a colouring with fewer.",
          "Connects this to the Turán graph being dense yet free of H.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Turán asks how many edges force a clique. Ramsey asks something starker: colour every edge of a large complete graph
        red or blue, and must there be a clique all of one colour? Among any six people, three are mutual friends or three are
        mutual strangers.
      </p>
      <p>
        Next, Ramsey&rsquo;s theorem: the party problem, why complete disorder is impossible, and the Ramsey numbers, of which
        we know astonishingly few.
      </p>
    </>
  ),
};
