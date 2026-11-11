import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EulerTrailViz } from "@/components/viz/EulerTrailViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.3.3",
  minutes: 80,
  links: {
    revisits: ["m4.3.2", "m4.3.1", "m1.5.2"],
    foreshadows: ["m4.3.4", "m4.5.4", "m21.3.1"],
  },

  puzzle: (
    <>
      <p>
        The city of Königsberg stood on both banks of a river, with two islands joined to the banks and to each other by
        seven bridges. Its citizens wondered whether one could walk through the city crossing every bridge exactly once.
        Nobody managed it, but nobody could prove it impossible, until Leonhard Euler, in 1736, saw that the shape of the
        streets and the lengths of the bridges did not matter at all. Only the pattern of connections did, and from that
        idea graph theory was born.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a graph and try to trace a route that uses every edge exactly once, by clicking edges in order. Look at the
        vertices ringed in red before you start.
      </p>
      <EulerTrailViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Euler trails and circuits">
        <p>
          A <strong>trail</strong> is a walk that uses no edge twice. An <strong>Euler trail</strong> uses every edge
          exactly once; an <strong>Euler circuit</strong> is an Euler trail that returns to its start. These make sense in
          multigraphs too, such as Königsberg, where two bridges join the same pair of land masses.
        </p>
      </Definition>

      <Theorem title="Euler&rsquo;s theorem">
        <p>
          A connected multigraph has an Euler circuit if and only if every vertex has even degree. It has an Euler trail
          that is not a circuit if and only if exactly two vertices have odd degree, and then the trail starts at one and ends
          at the other.
        </p>
      </Theorem>
      <Proof>
        <p>
          Necessity: each time a trail passes through a vertex it uses two edges there, one in and one out, so every vertex
          other than the start and end of the trail has even degree. Sufficiency, for all degrees even: take a longest trail
          T. It must be closed, since if it ended at v ≠ its start, T would have used an odd number of edges at v, leaving an
          unused one by which to extend it. If T missed some edge, by connectedness some unused edge e touches a vertex w of
          T. Start at w, go round T, then along e: this is a longer trail, a contradiction. For exactly two odd vertices, add
          an edge between them, take an Euler circuit, and remove the edge again.
        </p>
      </Proof>

      <Example title="Königsberg">
        <p>
          The four land masses have degrees 5, 3, 3 and 3. All four are odd, so there is no Euler trail, and the walk the
          citizens wanted does not exist. A single extra bridge between two of the land masses would leave two odd vertices,
          and the walk would become possible.
        </p>
      </Example>

      <Definition title="Hamilton cycles">
        <p>
          A <strong>Hamilton cycle</strong> visits every <em>vertex</em> exactly once and returns to its start. The question
          looks almost the same as Euler&rsquo;s, but no simple test is known. Deciding whether a graph has one is
          NP-complete, as is the travelling salesperson problem of finding the shortest such cycle, and a fast general
          method would solve the P versus NP problem.
        </p>
      </Definition>

      <Remark title="sufficient conditions">
        <p>
          There are sufficient conditions. Dirac&rsquo;s theorem (1952): if a simple graph has n ≥ 3 vertices and every
          vertex has degree at least n/2, it has a Hamilton cycle. Ore&rsquo;s theorem weakens this to: d(u) + d(v) ≥ n for
          every pair of non-adjacent vertices. There are also simple obstacles: a bipartite graph with parts of different
          sizes has no Hamilton cycle, since the cycle must alternate between the parts.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kberg",
      rung: "check",
      prompt: <p>Why is there no walk crossing each bridge of Königsberg exactly once?</p>,
      answer: {
        kind: "choice",
        options: [
          "The bridges are too far apart.",
          "All four land masses have odd degree, and an Euler trail allows at most two.",
          "The graph is not connected.",
          "There are seven bridges, an odd number.",
        ],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these graphs have an Euler circuit? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["K₄", "K₅", "K₂,₄", "C₇"], correct: [1, 2, 3] },
    },
    {
      key: "bridge",
      rung: "apply",
      prompt: (
        <p>What is the smallest number of new bridges Königsberg would need for a walk crossing every bridge exactly once to exist?</p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "dirac",
      rung: "apply",
      prompt: (
        <p>
          A simple graph has 10 vertices. By Dirac&rsquo;s theorem, what minimum degree for every vertex guarantees a
          Hamilton cycle?
        </p>
      ),
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "k34",
      rung: "apply",
      prompt: <p>Does the complete bipartite graph <span className="mono">K₃,₄</span> have a Hamilton cycle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Yes",
          "No: a Hamilton cycle in a bipartite graph alternates sides, so the sides must be the same size",
          "No: it is not connected",
          "Only if an edge is added inside one side",
        ],
        correct: [1],
      },
    },
    {
      key: "euler",
      rung: "prove",
      prompt: <p>Prove that a connected multigraph in which every vertex has even degree has an Euler circuit.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Considers a longest trail and argues it must be closed, using the even degrees.",
          "Shows that if some edge is unused, connectedness gives an unused edge at a vertex of the trail, which can be used to build a longer trail.",
          "Concludes with a contradiction, or gives a correct alternative such as Hierholzer's splicing of cycles. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "kmn",
      rung: "stretch",
      prompt: <p>For which m and n does the complete bipartite graph K_m,n have a Hamilton cycle? Prove your answer.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows a Hamilton cycle must alternate sides, so m = n is necessary, and that m = n = 1 fails since a cycle needs at least 3 vertices.",
          "Constructs a Hamilton cycle when m = n ≥ 2 by alternating a₁, b₁, a₂, b₂, …, back to a₁.",
          "States the answer m = n ≥ 2. A correct answer with a sound argument earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Königsberg problem, Euler's theorem on when a graph has an Euler circuit or trail and why it is true, and why the similar question about Hamilton cycles is so much harder.",

  glimpse: (
    <p>
      The next lesson studies trees, the connected graphs with no cycles at all. P and NP, later in this course, explains
      what makes problems like the Hamilton cycle hard.
    </p>
  ),
};
