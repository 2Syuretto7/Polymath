import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EulerMovesViz } from "@/components/viz/EulerMovesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m15.5.3",
  minutes: 85,
  links: {
    revisits: ["m15.5.2", "m4.3.5", "m15.5.1"],
    foreshadows: ["m16.5.1", "m25.3.1", "m25.4.3"],
  },

  puzzle: (
    <>
      <p>
        A cube has 8 vertices, 12 edges and 6 faces; <M>{"8 - 12 + 6 = 2"}</M>. A tetrahedron gives{" "}
        <M>{"4 - 6 + 4 = 2"}</M>, an icosahedron <M>{"12 - 30 + 20 = 2"}</M>. Euler noticed this in 1752. Why is the answer
        always 2, and what does it count when the polyhedron has a hole through it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Subdivide a surface in different ways, then attach a handle, and watch <M>{"V - E + F"}</M>.</p>
      <EulerMovesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Euler characteristic">
        <p>
          For a surface divided into <M>{"V"}</M> vertices, <M>{"E"}</M> edges and <M>{"F"}</M> faces, each face a disc, the{" "}
          <strong>Euler characteristic</strong> is <M>{"\\chi = V - E + F"}</M>.
        </p>
      </Definition>

      <Theorem title="invariance">
        <p>
          <M>{"\\chi"}</M> depends only on the surface, not on how it is divided. For the orientable surface of genus{" "}
          <M>{"g"}</M>, <M>{"\\chi = 2 - 2g"}</M>; for the connected sum of <M>{"k"}</M> projective planes,{" "}
          <M>{"\\chi = 2 - k"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Any two subdivisions have a common refinement, up to small adjustments, and refinement is built from three moves:
          adding a vertex inside a face joined to its corners, splitting an edge, and drawing an edge across a face. Each
          leaves <M>{"V - E + F"}</M> unchanged. For the standard polygon of genus <M>{"g"}</M>, there is one vertex,{" "}
          <M>{"2g"}</M> edges and one face, so <M>{"\\chi = 2 - 2g"}</M>; similarly <M>{"1 - k + 1"}</M> for{" "}
          <M>{"a_1 a_1 \\cdots a_k a_k"}</M>. The sphere, divided into two discs along a circle with one vertex, gives{" "}
          <M>{"1 - 1 + 2 = 2"}</M>. Rigorous invariance is cleanest through homology, where <M>{"\\chi"}</M> is the alternating
          sum of the ranks of the homology groups.
        </p>
      </Proof>

      <Example title="consequences">
        <p>
          A convex polyhedron is a subdivided sphere, so <M>{"V - E + F = 2"}</M>. From this, each face having at least three
          edges and each vertex at least three, one deduces there are only five Platonic solids. A connected planar graph
          satisfies the same formula, counting the outside as a face, which gives <M>{"E \\leq 3V - 6"}</M> and shows that{" "}
          <M>{"K_5"}</M> is not planar.
        </p>
      </Example>

      <Remark title="connected sums and curvature">
        <p>
          Removing a disc from each of two surfaces lowers <M>{"\\chi"}</M> by 1 each, and gluing along a circle adds nothing,
          so <M>{"\\chi(S_1 \\# S_2) = \\chi(S_1) + \\chi(S_2) - 2"}</M>. The Gauss-Bonnet theorem states that the total Gaussian
          curvature of a closed surface equals <M>{"2\\pi\\chi"}</M>: however a torus is bent, its curvature integrates to
          zero.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>How is the Euler characteristic of a subdivided surface computed?</p>,
      answer: { kind: "choice", options: ["V − E + F", "V + E + F", "E − V", "V × F / E"], correct: [0] },
    },
    {
      key: "torus",
      rung: "check",
      prompt: <p>What is the Euler characteristic of the torus?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, start from the tetrahedron and attach one handle. What is <M>{"\\chi"}</M>?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "dodeca",
      rung: "apply",
      prompt: <p>A dodecahedron has 12 pentagonal faces and 30 edges. How many vertices has it?</p>,
      answer: { kind: "numeric", value: 20 },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>What is the Euler characteristic of the connected sum of a torus and a projective plane?</p>,
      answer: { kind: "numeric", value: -1 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that adding a vertex inside a triangular face and joining it to the three corners does not change <M>{"V - E + F"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Counts the change in vertices: one new vertex.",
          "Counts three new edges, and the one face replaced by three, a net gain of two faces.",
          "Computes the change 1 − 3 + 2 = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use <M>{"V - E + F = 2"}</M> to show that a connected simple planar graph with <M>{"V \\geq 3"}</M> vertices has at most <M>{"3V - 6"}</M> edges.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each face is bounded by at least three edges and each edge borders at most two faces, so 3F ≤ 2E.",
          "Substitutes F ≤ 2E/3 into V − E + F = 2.",
          "Deduces E ≤ 3V − 6. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the Euler characteristic V − E + F, why subdividing does not change it, its values 2 − 2g and 2 − k for closed surfaces, and consequences such as the five Platonic solids and the Gauss-Bonnet theorem.",

  glimpse: (
    <p>
      This completes the topology course. The Euler characteristic reappears as total curvature in differential geometry, and
      as an alternating sum of ranks of homology groups in algebraic topology, where fixed point theorems count with it.
    </p>
  ),
};
