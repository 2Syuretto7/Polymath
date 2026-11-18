import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { KempeChainViz } from "@/components/viz/KempeChainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m21.3.2",
  minutes: 90,
  links: {
    revisits: ["m4.3.5", "m21.3.1", "m4.5.1"],
    foreshadows: ["m21.3.3", "m21.4.2", "m21.4.3"],
  },

  puzzle: (
    <>
      <p>
        In 1852 Francis Guthrie, colouring a map of the counties of England, noticed that four colours were enough to make
        neighbouring counties differ. He asked whether four colours suffice for every map. The question took 124 years, a
        false proof that stood for eleven of them, and a computer. Why was it so hard?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Step through Kempe&rsquo;s argument for freeing a colour at a vertex with four neighbours.</p>
      <KempeChainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="from maps to graphs">
        <p>
          Put a vertex in each country and join two when they share a border (not just a point). The result is a planar graph,
          and colouring the map is colouring the graph. Every planar graph arises this way.
        </p>
      </Definition>

      <Theorem title="the four colour theorem (Appel and Haken, 1976)">
        <p>Every planar graph has a proper colouring with four colours.</p>
      </Theorem>

      <Example title="a small vertex always exists">
        <p>
          A simple planar graph with <M>{"v \\ge 3"}</M> vertices has at most <M>{"3v - 6"}</M> edges, by Euler&rsquo;s formula.
          So the degrees sum to at most <M>{"6v - 12 < 6v"}</M>, and some vertex has degree at most 5. Delete it, colour the rest
          by induction, and put it back: with six colours it always has a free one. That proves six colours suffice. With
          Kempe chains, as in the visualisation, Heawood (1890) improved this to five.
        </p>
      </Example>

      <Remark title="the outline of the proof">
        <p>
          Kempe (1879) tried the same chain argument at a vertex of degree 5, using two chains at once; Heawood showed the two
          swaps can interfere. The eventual proof keeps the shape of Kempe&rsquo;s idea. Take a smallest counterexample. Find
          an <strong>unavoidable set</strong> of configurations, one of which every planar triangulation must contain, by a
          &ldquo;discharging&rdquo; argument that moves Euler&rsquo;s charge around. Show each configuration is{" "}
          <strong>reducible</strong>: a colouring of the rest can be adjusted, by chains, to colour it too. Appel and Haken
          used 1,936 configurations and over a thousand hours of computing. Robertson, Sanders, Seymour and Thomas simplified
          it to 633 in 1997, and Gonthier checked the whole proof in the Coq proof assistant in 2005.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the four colour theorem state?</p>,
      answer: {
        kind: "choice",
        options: ["Every planar graph can be properly coloured with four colours", "Every graph can be coloured with four colours", "Every map has exactly four countries touching", "Four colours are needed for every map"],
        correct: [0],
      },
    },
    {
      key: "kempe",
      rung: "check",
      prompt: <p>Why does swapping two colours along a Kempe chain keep the colouring proper?</p>,
      answer: {
        kind: "choice",
        options: ["The chain is a whole connected component of the vertices in those two colours, so no edge leaves it to a vertex of either colour", "Because the graph is planar", "Because only one vertex changes", "Because the chain is a cycle"],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, which colour does the centre vertex v receive at the end?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "edges",
      rung: "apply",
      prompt: <p>What is the largest number of edges a simple planar graph on 10 vertices can have?</p>,
      answer: { kind: "numeric", value: 24 },
    },
    {
      key: "need4",
      rung: "apply",
      prompt: <p>Which planar graph shows that three colours are not always enough?</p>,
      answer: { kind: "choice", options: ["K₄, four mutually adjacent vertices", "A 5-cycle", "A tree", "The cube"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that every planar graph can be coloured with six colours. You may use that a simple planar graph with v ≥ 3 vertices has at most 3v − 6 edges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows some vertex has degree at most 5, since the degree sum is at most 6v − 12.",
          "Deletes that vertex and colours the rest by induction, the smaller graph still being planar.",
          "Notes the vertex has at most 5 neighbours, so one of six colours is free for it.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>No person has checked every case of the Appel–Haken proof by hand. Is it a proof in the same sense as a proof on paper? Give a reason.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Weighs the reliability of computer checking, such as independent programs and formal verification, against human checking.",
          "Considers what proofs are for, such as certainty or understanding.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Instead of asking whether a graph can be coloured with k colours, ask how many ways it can be. Birkhoff introduced
        this count in 1912, hoping algebra would crack the four colour problem. It did not, but the count turned out to be a
        polynomial with a life of its own.
      </p>
      <p>
        Next, chromatic polynomials: deletion and contraction, the polynomials of trees, cycles and complete graphs, and what
        the coefficients reveal about a graph.
      </p>
    </>
  ),
};
