import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { BettiViz } from "@/components/viz/BettiViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.3.1",
  minutes: 100,
  links: {
    revisits: ["m25.1.1", "m3.4.2", "m15.5.3"],
    foreshadows: ["m25.3.2", "m25.3.4", "m25.5.1"],
  },

  puzzle: (
    <>
      <p>
        Draw five dots and seven edges in the plane, and shade in some of the triangles. Count the holes that remain. You
        can do it by eye, but can you do it by linear algebra alone, from lists of which edge touches which dot? And would
        the same method count the hollow inside a sphere?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Fill and empty the triangles. Each filled triangle kills one cycle of edges, unless its boundary was already a sum
        of other boundaries. The Betti numbers come out of two matrix ranks.
      </p>
      <BettiViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Δ-complexes and chains">
        <p>
          A <strong>Δ-complex</strong> is built by gluing simplices (points, edges, triangles, tetrahedra) along faces, with
          the vertices of each simplex ordered. The <strong>chain group</strong> <M>{"C_n"}</M> is the free abelian group on
          the n-simplices: its elements are formal integer sums of them.
        </p>
      </Definition>

      <Definition title="boundary and homology">
        <p>The boundary of an n-simplex is the alternating sum of its faces:</p>
        <p>
          <M>{"\\partial [v_0, \\dots, v_n] = \\sum_{i=0}^{n} (-1)^i [v_0, \\dots, \\hat{v}_i, \\dots, v_n],"}</M>
        </p>
        <p>
          where the hat means omit. The signs make <M>{"\\partial \\partial = 0"}</M>: each (n−2)-face appears twice, with
          opposite signs. So boundaries are cycles, and the <strong>homology</strong> is
        </p>
        <p>
          <M>{"H_n = \\ker \\partial_n / \\operatorname{im} \\partial_{n+1},"}</M>
        </p>
        <p>cycles modulo boundaries. Over a field, its dimension is the Betti number βₙ = dim Cₙ − rank ∂ₙ − rank ∂ₙ₊₁.</p>
      </Definition>

      <Definition title="singular homology">
        <p>
          Simplicial homology depends on a chosen triangulation. <strong>Singular homology</strong> avoids the choice: a
          singular n-simplex is any continuous map <M>{"\\sigma: \\Delta^n \\to X"}</M>, and <M>{"C_n(X)"}</M> is free on all
          of them, a vast group. The same boundary formula gives <M>{"H_n(X)"}</M>, defined for every space and obviously a
          topological invariant. A map <M>{"f: X \\to Y"}</M> induces <M>{"f_*: H_n(X) \\to H_n(Y)"}</M> by composing simplices
          with <M>f</M>.
        </p>
      </Definition>

      <Theorem title="basic properties">
        <p>
          (1) For a Δ-complex, simplicial and singular homology agree. (2) <strong>Homotopy invariance</strong>: homotopic
          maps induce equal maps on homology, so homotopy equivalent spaces have isomorphic homology. (3){" "}
          <M>{"H_0(X)"}</M> is free abelian on the path components of <M>X</M>. (4) <strong>Hurewicz</strong>: for{" "}
          <M>X</M> path-connected, <M>{"H_1(X)"}</M> is the abelianisation of <M>{"\\pi_1(X)"}</M>.
        </p>
        <p>
          <strong>Proof idea for (2).</strong> A homotopy <M>{"F: X \\times I \\to Y"}</M> lets one subdivide each prism{" "}
          <M>{"\\Delta^n \\times I"}</M> into simplices, giving a chain homotopy <M>P</M> with{" "}
          <M>{"\\partial P + P \\partial = g_\\# - f_\\#"}</M>. On a cycle the right side is then a boundary.
        </p>
      </Theorem>

      <Example title="first computations">
        <p>
          The circle, as one vertex and one edge with ∂e = v − v = 0, has <M>{"H_0 = H_1 = \\mathbb{Z}"}</M>. The torus, as
          one vertex, three edges and two triangles, has <M>{"H_1 = \\mathbb{Z}^2"}</M> and <M>{"H_2 = \\mathbb{Z}"}</M>. The
          Klein bottle has <M>{"H_1 = \\mathbb{Z} \\oplus \\mathbb{Z}/2"}</M> and <M>{"H_2 = 0"}</M>: torsion appears,
          which Betti numbers alone miss. A contractible space has the homology of a point.
        </p>
      </Example>

      <Remark title="the Euler characteristic">
        <p>
          The alternating sum of the numbers of simplices equals the alternating sum of the Betti numbers, by rank and
          nullity. So V − E + F, which looked like a property of a particular drawing, is a topological invariant.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dd",
      rung: "check",
      prompt: <p>What identity makes homology well defined?</p>,
      answer: { kind: "choice", options: ["∂∂ = 0, so every boundary is a cycle", "∂ is injective", "∂ is surjective", "Every cycle is a boundary"], correct: [0] },
    },
    {
      key: "h0",
      rung: "check",
      prompt: <p>What does H₀(X) measure?</p>,
      answer: { kind: "choice", options: ["The path components of X", "The holes of X", "The fundamental group of X", "The dimension of X"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, fill only the triangle [0, 1, 2]. What is β₁?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "fig8",
      rung: "apply",
      prompt: <p>The fundamental group of the figure eight is free on a and b. What is its H₁?</p>,
      answer: { kind: "choice", options: ["ℤ², the abelianisation", "The free group on two generators", "ℤ", "0"], correct: [0] },
    },
    {
      key: "tri",
      rung: "apply",
      prompt: <p>Compute ∂∂[0, 1, 2]. How many terms survive after cancellation?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that ∂∂ = 0 on a 2-simplex [v₀, v₁, v₂].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes ∂[v₀, v₁, v₂] = [v₁, v₂] − [v₀, v₂] + [v₀, v₁].",
          "Applies ∂ to each edge as end minus start.",
          "Shows each vertex appears once with each sign, so the sum is zero.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why might one prefer singular homology to simplicial homology, despite its enormous chain groups?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes singular homology needs no triangulation and is defined for every space.",
          "Notes it is plainly invariant under homeomorphism and functorial for all maps.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Homology is computable for small complexes, but computing Hₙ(Sⁿ) from the definition of singular homology is
        hopeless. What is needed is a way to break a space into pieces and assemble the answer.
      </p>
      <p>
        Next, exact sequences and excision: the long exact sequence of a pair, and the theorem that lets one cut away the
        inside of a space without changing relative homology.
      </p>
    </>
  ),
};
