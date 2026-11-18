import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { CochainViz } from "@/components/viz/CochainViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.5.1",
  minutes: 95,
  links: {
    revisits: ["m25.3.1", "m25.4.3", "m3.4.5"],
    foreshadows: ["m25.5.2", "m25.5.3", "m25.5.4"],
  },

  puzzle: (
    <>
      <p>
        Assign a number to every edge of a network, like a voltage drop across each wire. When do those numbers come from a
        potential at the nodes, so that each drop is a difference of two values? Kirchhoff knew the answer for circuits: the
        drops round every loop must add to zero. What if some loops are filled in and others are not?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Give each edge a number. Fill or empty the two triangles and see when your assignment is a cocycle, when it is a
        coboundary, and what is left in between.
      </p>
      <CochainViz />
    </>
  ),

  theory: (
    <>
      <Definition title="cochains and the coboundary">
        <p>
          Given a chain complex <M>{"C_n"}</M> and an abelian group G, the <strong>cochains</strong> are{" "}
          <M>{"C^n = \\operatorname{Hom}(C_n, G)"}</M>, functions from n-chains to G. The <strong>coboundary</strong>{" "}
          <M>{"\\delta: C^n \\to C^{n+1}"}</M> is the dual of ∂: <M>{"(\\delta \\varphi)(\\sigma) = \\varphi(\\partial \\sigma)"}</M>.
          Since <M>{"\\partial\\partial = 0"}</M>, also <M>{"\\delta\\delta = 0"}</M>.
        </p>
      </Definition>

      <Definition title="cohomology">
        <p>
          <M>{"H^n(X; G) = \\ker \\delta_n / \\operatorname{im} \\delta_{n-1}"}</M>: cocycles modulo coboundaries. A 0-cochain
          is a function on vertices, and its coboundary is the function on edges giving the difference across each one. So a
          1-cochain is a coboundary exactly when it has a potential, and <M>{"H^0(X; G)"}</M> consists of functions constant on
          each path component.
        </p>
      </Definition>

      <Theorem title="contravariance and invariance">
        <p>
          A map <M>{"f: X \\to Y"}</M> induces <M>{"f^*: H^n(Y; G) \\to H^n(X; G)"}</M>, in the opposite direction, by composing
          cochains with <M>{"f_\\#"}</M>. Cohomology is a homotopy invariant, has long exact sequences of pairs, excision and
          Mayer–Vietoris, all by dualising the arguments for homology.
        </p>
      </Theorem>

      <Example title="first computations">
        <p>
          For a graph, every 1-cochain is a cocycle, and <M>{"H^1(X; \\mathbb{Z})"}</M> is free of rank E − V + 1 for a
          connected graph, one generator for each independent loop. For spheres,{" "}
          <M>{"H^n(S^n; \\mathbb{Z}) = \\mathbb{Z}"}</M>. For ℝP², <M>{"H^1 = 0"}</M> but <M>{"H^2 = \\mathbb{Z}/2"}</M>: the
          torsion has moved up a degree.
        </p>
      </Example>

      <Remark title="why bother">
        <p>
          Cohomology seems to contain the same information as homology, dualised. Two things make it worth having. Cochains
          can be multiplied, giving a ring structure that homology lacks. And cohomology is what appears naturally elsewhere:
          de Rham cohomology of differential forms, obstruction theory, characteristic classes. The physicist&rsquo;s
          potential is a 0-cochain, and a field with no potential is a non-zero class in H¹.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dd",
      rung: "check",
      prompt: <p>Why is δδ = 0?</p>,
      answer: { kind: "choice", options: ["Because δ is dual to ∂, and ∂∂ = 0", "Because cochains are zero", "Because G is abelian", "It is not always zero"], correct: [0] },
    },
    {
      key: "dir",
      rung: "check",
      prompt: <p>In which direction does a map f: X → Y act on cohomology?</p>,
      answer: { kind: "choice", options: ["From Hⁿ(Y) to Hⁿ(X)", "From Hⁿ(X) to Hⁿ(Y)", "From Hⁿ(X) to Hₙ(Y)", "It does not act"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, fill only the triangle [0, 1, 2]. What is the rank of H¹?</p>,
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "pot",
      rung: "apply",
      prompt: <p>A 1-cochain on a graph is a coboundary. What does that mean concretely?</p>,
      answer: { kind: "choice", options: ["Its values are differences of a function on the vertices", "It is zero on every edge", "It is constant", "Its values add to zero over all edges"], correct: [0] },
    },
    {
      key: "graph",
      rung: "apply",
      prompt: <p>A connected graph has 6 vertices and 9 edges. What is the rank of its H¹?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that for a connected graph, H⁰(X; ℤ) ≅ ℤ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes H⁰ is the kernel of δ on functions on vertices, since there are no (−1)-cochains.",
          "Shows δg = 0 means g takes equal values at the ends of every edge.",
          "Uses connectedness to conclude g is constant, so H⁰ ≅ ℤ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The magnetic field round a long straight wire has no potential defined on the whole of space minus the wire, though it has one locally. How does H¹ explain this?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes space minus a line is homotopy equivalent to a circle, so H¹ ≅ ℤ.",
          "Identifies the field with a closed form whose integral round the wire is non-zero, a non-zero class.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Cohomology is built from homology&rsquo;s chains by applying Hom. That suggests it should be computable from homology
        directly, and it nearly is: with one correction, measuring how torsion behaves.
      </p>
      <p>Next, the universal coefficient theorem, and the functor Ext that supplies the correction.</p>
    </>
  ),
};
