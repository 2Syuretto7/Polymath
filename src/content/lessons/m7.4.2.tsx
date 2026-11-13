import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { OrbitStabViz } from "@/components/viz/OrbitStabViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m7.4.2",
  minutes: 80,
  links: {
    revisits: ["m7.4.1", "m7.2.1", "m7.1.2"],
    foreshadows: ["m7.4.3", "m7.4.4", "m7.5.1"],
  },

  puzzle: (
    <>
      <p>
        How many rotations does a cube have? You could try to list them. Or argue like this: a rotation can put a chosen face
        on any of the 6 faces, and once it is there, it can be turned 4 ways. So 24. The same count works with vertices,{" "}
        <M>{"8 \\times 3"}</M>, or edges, <M>{"12 \\times 2"}</M>. Why does this kind of counting always work?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a Platonic solid and a kind of part. The rotations are grouped by where they send one chosen part.
      </p>
      <OrbitStabViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the orbit-stabiliser theorem">
        <p>
          If a finite group <M>{"G"}</M> acts on a set and <M>{"x"}</M> is a point, then
        </p>
        <p style={{ textAlign: "center" }}>
          <M>{"|G \\cdot x| = [G : G_x], \\quad \\text{so} \\quad |G| = |G \\cdot x| \\cdot |G_x|."}</M>
        </p>
      </Theorem>

      <Proof>
        <p>
          Send the coset <M>{"gG_x"}</M> to the point <M>{"g \\cdot x"}</M>. This is well defined and injective, since{" "}
          <M>{"g \\cdot x = h \\cdot x"}</M> exactly when <M>{"h^{-1}g \\in G_x"}</M>, that is, when{" "}
          <M>{"gG_x = hG_x"}</M>. It is onto the orbit by definition. So the orbit is in bijection with the cosets of the
          stabiliser, and Lagrange&rsquo;s theorem gives the product formula.
        </p>
      </Proof>

      <Example title="counting with it">
        <p>
          The rotations of a regular tetrahedron move a vertex to any of 4 places and fix it in 3 ways: 12 rotations. The
          dodecahedron has 12 faces, each fixed by 5 rotations: 60. In <M>{"S_n"}</M> acting on <M>{"\\{1, \\ldots, n\\}"}</M>,
          the stabiliser of <M>{"n"}</M> is <M>{"S_{n-1}"}</M>, so <M>{"n! = n \\cdot (n-1)!"}</M>. For the conjugation action,
          the size of the conjugacy class of <M>{"x"}</M> is the index of its centraliser, so it divides <M>{"|G|"}</M>.
        </p>
      </Example>

      <Remark title="an old idea in a new form">
        <p>
          The theorem is Lagrange&rsquo;s theorem seen from the other side: the orbit is a copy of the coset space{" "}
          <M>{"G/G_x"}</M>. In practice it is one of the most used tools in group theory, behind the class equation, the
          Sylow theorems, and countless counting problems in combinatorics and chemistry.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the orbit-stabiliser theorem say, for a finite group G?</p>,
      answer: {
        kind: "choice",
        options: ["|G| = |orbit| + |stabiliser|", "|G| = |orbit| × |stabiliser|", "|orbit| = |stabiliser|", "|G| = |orbit|"],
        correct: [1],
      },
    },
    {
      key: "tet",
      rung: "check",
      prompt: <p>How many rotations does a regular tetrahedron have?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "stab",
      rung: "apply",
      prompt: <p>The 24 rotations of a cube act on its 4 long diagonals, transitively. How large is the stabiliser of one diagonal?</p>,
      answer: { kind: "numeric", value: 6 },
    },
    {
      key: "orbit",
      rung: "apply",
      prompt: <p>A group of order 30 acts on a set, and a point has stabiliser of order 6. How large is its orbit?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "class",
      rung: "apply",
      prompt: <p>In a group of order 12, which could be the size of a conjugacy class? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["1", "3", "4", "5", "8"], correct: [0, 1, 2] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that g · x = h · x if and only if h⁻¹g lies in the stabiliser of x. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "If g · x = h · x, applies h⁻¹ to get (h⁻¹g) · x = x.",
          "Conversely, applies h to (h⁻¹g) · x = x to get g · x = h · x.",
        ],
      },
    },
    {
      key: "icos",
      rung: "stretch",
      prompt: <p>Count the rotations of a regular icosahedron in two different ways, and check that they agree.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses one count, such as 12 vertices with 5 rotations each, giving 60.",
          "Uses another, such as 20 faces with 3 each or 30 edges with 2 each, also giving 60. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the orbit-stabiliser theorem and its proof by matching cosets of the stabiliser with points of the orbit, and how it counts the rotations of the Platonic solids.",

  glimpse: (
    <p>
      The next lesson uses actions to count orbits, which counts things up to symmetry. The class equation applies the theorem
      to conjugation, and the Sylow theorems apply it to actions on subgroups.
    </p>
  ),
};
