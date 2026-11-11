import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ColouringViz } from "@/components/viz/ColouringViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m4.3.5",
  minutes: 85,
  links: {
    revisits: ["m4.3.4", "m4.3.2", "m4.1.4"],
    foreshadows: ["m21.3.2", "m21.3.1", "m15.5.3"],
  },

  puzzle: (
    <>
      <p>
        In 1852 Francis Guthrie, colouring a map of the counties of England, noticed that four colours were enough to make
        neighbouring counties different. Is that true of every map? The question took 124 years to answer, and the answer,
        yes, was the first major theorem whose proof needed a computer. Along the way it gave rise to a question that sounds
        simpler: which networks can be drawn on paper with no two lines crossing?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Colour the vertices so that adjacent vertices differ, using as few colours as you can. Try each graph, then compare
        with the greedy method.
      </p>
      <ColouringViz />
    </>
  ),

  theory: (
    <>
      <Definition title="planar graphs">
        <p>
          A graph is <strong>planar</strong> if it can be drawn in the plane with no edges crossing. Such a drawing divides
          the plane into regions called <strong>faces</strong>, including the unbounded outer face.
        </p>
      </Definition>

      <Theorem title="Euler&rsquo;s formula">
        <p>For a connected plane graph with V vertices, E edges and F faces,</p>
        <MD>{"V - E + F = 2."}</MD>
      </Theorem>
      <Proof>
        <p>
          Induction on E. If the graph is a tree, E = V − 1 and F = 1, so the formula holds. Otherwise some edge lies on a
          cycle, and so separates two different faces. Removing it keeps the graph connected, lowers E by 1 and merges two
          faces, lowering F by 1, so V − E + F is unchanged.
        </p>
      </Proof>

      <Example title="two graphs that are not planar">
        <p>
          In a simple plane graph with V ≥ 3, each face is bounded by at least 3 edges and each edge borders at most 2
          faces, so 3F ≤ 2E. With Euler&rsquo;s formula this gives <M>{"E \\le 3V - 6"}</M>. For <M>{"K_5"}</M>, E = 10 but
          3V − 6 = 9, so <M>{"K_5"}</M> is not planar. In a bipartite graph there are no triangles, so each face has at least
          4 edges and <M>{"E \\le 2V - 4"}</M>; for <M>{"K_{3,3}"}</M>, 9 &gt; 8, so it is not planar either. This is the old
          puzzle of joining three houses to three utilities without crossings. Kuratowski&rsquo;s theorem says these two
          are, in a precise sense, the only obstacles.
        </p>
      </Example>

      <Definition title="colouring">
        <p>
          A <strong>proper colouring</strong> gives each vertex a colour so that adjacent vertices differ. The{" "}
          <strong>chromatic number</strong> <M>{"\\chi(G)"}</M> is the fewest colours needed. A graph has{" "}
          <M>{"\\chi \\le 2"}</M> exactly when it is bipartite, so odd cycles need 3. Colouring the vertices one at a time,
          each with the first colour not used by its neighbours, shows <M>{"\\chi(G) \\le \\Delta + 1"}</M>, where Δ is the
          largest degree.
        </p>
      </Definition>

      <Theorem title="six colours suffice for planar graphs">
        <p>Every planar graph can be properly coloured with 6 colours.</p>
      </Theorem>
      <Proof>
        <p>
          Since <M>{"E \\le 3V - 6"}</M>, the average degree 2E/V is less than 6, so some vertex v has degree at most 5.
          Remove v, colour the rest by induction, and put v back: its at most 5 neighbours leave a sixth colour free.
        </p>
      </Proof>

      <Remark title="five and four">
        <p>
          Heawood proved in 1890 that 5 colours suffice, by a cleverer recolouring at the vertex of degree at most 5. Four
          colours, the original question, was proved by Kenneth Appel and Wolfgang Haken in 1976, by reducing it to nearly
          2,000 configurations checked by computer. In 2005 Georges Gonthier verified a proof completely in a formal proof
          assistant. Colouring a map is colouring the planar graph whose vertices are regions and whose edges join regions
          that share a border.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "euler",
      rung: "check",
      prompt: <p>For a connected plane graph, what is V − E + F?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "c7",
      rung: "check",
      prompt: <p>What is the chromatic number of the cycle <M>{"C_7"}</M>?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "faces",
      rung: "apply",
      prompt: <p>A connected plane graph has 10 vertices and 15 edges. How many faces does it have?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "maxedges",
      rung: "apply",
      prompt: <p>What is the largest number of edges a simple planar graph on 8 vertices can have?</p>,
      answer: { kind: "numeric", value: 18 },
    },
    {
      key: "wheel",
      rung: "apply",
      prompt: <p>What is the chromatic number of a wheel with 5 spokes, a 5-cycle with a hub joined to every vertex?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "k5",
      rung: "prove",
      prompt: (
        <p>
          Prove that a simple planar graph with V ≥ 3 vertices has at most 3V − 6 edges, and deduce that <M>{"K_5"}</M> is
          not planar.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Argues that each face is bounded by at least 3 edges and each edge borders at most 2 faces, so 3F ≤ 2E.",
          "Combines with V − E + F = 2 to get E ≤ 3V − 6, noting the connected case suffices or handling components.",
          "Applies it to K₅: 10 > 9. A clear proof earns full credit.",
        ],
      },
    },
    {
      key: "six",
      rung: "stretch",
      prompt: (
        <p>
          Prove that every planar graph has a vertex of degree at most 5, and use this to prove by induction that every
          planar graph can be coloured with 6 colours. Where would a proof of the five colour theorem need more care?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Uses E ≤ 3V − 6 to show the average degree is below 6, so some vertex has degree at most 5.",
          "Removes that vertex, colours the rest by induction, and colours it with a colour missing from its at most 5 neighbours.",
          "Notes that for 5 colours the case of a degree-5 vertex whose neighbours use all 5 colours needs a recolouring argument. A reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a planar graph is, Euler's formula and its proof, why K₅ and K₃,₃ are not planar, what the chromatic number is, and why every planar graph can be coloured with six colours.",

  glimpse: (
    <p>
      Combinatorics outlines the proof of the four colour theorem and proves Brooks&rsquo; theorem on colouring, and
      Topology explains Euler&rsquo;s formula through the Euler characteristic of surfaces.
    </p>
  ),
};
