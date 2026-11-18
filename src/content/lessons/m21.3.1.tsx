import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { GreedyBrooksViz } from "@/components/viz/GreedyBrooksViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.3.1",
  minutes: 85,
  links: {
    revisits: ["m4.3.5", "m4.3.2", "m21.2.1"],
    foreshadows: ["m21.3.2", "m21.3.3", "m21.4.1"],
  },

  puzzle: (
    <>
      <p>
        A school timetables exams. Two exams clash if some student sits both, and no exam clashes with more than five others.
        Six time slots are obviously enough: give each exam a slot not used by the at most five exams it clashes with. Can
        the school always manage with five?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Colour each graph greedily, one vertex at a time, and compare the colours used with the maximum degree.</p>
      <GreedyBrooksViz />
    </>
  ),

  theory: (
    <>
      <Definition title="colourings and the chromatic number">
        <p>
          A <strong>proper colouring</strong> gives each vertex a colour so that adjacent vertices differ. The{" "}
          <strong>chromatic number</strong> <M>{"\\chi(G)"}</M> is the fewest colours that suffice. Write <M>{"\\Delta(G)"}</M>{" "}
          for the maximum degree.
        </p>
      </Definition>

      <Example title="the greedy bound">
        <p>
          List the vertices in any order and give each the smallest colour not used by its earlier neighbours. A vertex has at
          most <M>{"\\Delta"}</M> neighbours, so one of the colours <M>{"1, \\dots, \\Delta + 1"}</M> is always free. Hence{" "}
          <M>{"\\chi(G) \\le \\Delta(G) + 1"}</M>. Complete graphs <M>{"K_n"}</M> (with <M>{"\\Delta = n - 1"}</M>) and odd
          cycles (with <M>{"\\Delta = 2"}</M>) need every one of those colours.
        </p>
      </Example>

      <Theorem title="Brooks' theorem (1941)">
        <p>
          If <M>G</M> is connected and is neither a complete graph nor an odd cycle, then <M>{"\\chi(G) \\le \\Delta(G)"}</M>.
        </p>
      </Theorem>

      <Remark title="the idea of the proof">
        <p>
          Greedy colouring wastes a colour only at a vertex all of whose <M>{"\\Delta"}</M> neighbours come earlier with
          different colours. So order the vertices to end at a vertex <M>v</M> where this cannot happen. If some vertex has
          degree below <M>{"\\Delta"}</M>, list vertices in decreasing distance from it: each vertex except the last has a
          later neighbour, and the last has spare room. If <M>G</M> is <M>{"\\Delta"}</M>-regular, one finds two non-adjacent
          neighbours of <M>v</M> that can share colour 1 without disconnecting the rest; this is where connectivity, in the
          spirit of Menger, enters. Lovász gave a short proof along these lines in 1975.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does Brooks&rsquo; theorem say about a connected graph that is neither complete nor an odd cycle?</p>,
      answer: {
        kind: "choice",
        options: ["Its chromatic number is at most its maximum degree", "Its chromatic number is exactly its maximum degree", "It is planar", "It can be coloured with four colours"],
        correct: [0],
      },
    },
    {
      key: "greedy",
      rung: "check",
      prompt: <p>Why does greedy colouring never need more than Δ + 1 colours?</p>,
      answer: {
        kind: "choice",
        options: ["Each vertex has at most Δ neighbours, so one of Δ + 1 colours is free", "Greedy always finds the best colouring", "Every graph is bipartite", "The order of vertices does not matter"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many colours does greedy colouring use on K₄?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "petersen",
      rung: "apply",
      prompt: <p>The Petersen graph is connected, 3-regular, and neither complete nor an odd cycle. What upper bound does Brooks give for its chromatic number?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "exam",
      rung: "apply",
      prompt: <p>In the puzzle, each exam clashes with at most five others, and no six exams all clash with one another. How many slots suffice, by Brooks applied to each connected piece?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every graph with maximum degree Δ has a proper colouring with at most Δ + 1 colours.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Orders the vertices and colours them one at a time.",
          "Notes each vertex has at most Δ already coloured neighbours, which block at most Δ colours.",
          "Concludes a colour among Δ + 1 is always available, so the colouring is proper.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Suppose G is connected and some vertex u has degree less than Δ. Explain why ordering the vertices by decreasing distance from u lets greedy colouring use at most Δ colours.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes every vertex other than u has a neighbour closer to u, which comes later in the order.",
          "So when it is coloured, at most Δ − 1 of its neighbours are coloured, and u itself has fewer than Δ neighbours.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Brooks bounds colours by degree, but planar graphs can have vertices of huge degree and still be easy to colour. Every
        map ever drawn has been coloured with four colours, so that neighbouring countries differ. Is four always enough?
      </p>
      <p>
        Next, the four colour theorem in outline: Kempe&rsquo;s chains and his famous mistake, Heawood&rsquo;s five colour
        theorem, and how Appel and Haken, with a computer, finally settled the question in 1976.
      </p>
    </>
  ),
};
