import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MayerVietorisViz } from "@/components/viz/MayerVietorisViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m25.3.3",
  minutes: 95,
  links: {
    revisits: ["m25.3.2", "m25.1.3", "m25.3.1"],
    foreshadows: ["m25.3.4", "m25.5.4", "m25.6.2"],
  },

  puzzle: (
    <>
      <p>
        Van Kampen&rsquo;s theorem computes the fundamental group of a union from its pieces. Is there a homological version?
        Cut a torus into two cylinders: each has the homology of a circle, and so does each of the two bands where they
        overlap. From these, can you recover the two loops and the hollow of the torus?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a space, cut into two open pieces A and B. The Mayer–Vietoris sequence links the homology of the overlap, of
        the pieces, and of the whole.
      </p>
      <MayerVietorisViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the Mayer–Vietoris sequence">
        <p>If X is the union of the interiors of A and B, there is a long exact sequence</p>
        <p>
          <M>{"\\cdots \\to H_n(A \\cap B) \\xrightarrow{\\Phi} H_n(A) \\oplus H_n(B) \\xrightarrow{\\Psi} H_n(X) \\xrightarrow{\\partial} H_{n-1}(A \\cap B) \\to \\cdots"}</M>
        </p>
        <p>
          where <M>{"\\Phi(x) = (x, -x)"}</M> includes a class into each piece, with a sign, and{" "}
          <M>{"\\Psi(a, b) = a + b"}</M> adds the two images in X. The same holds for reduced homology when A ∩ B is
          non-empty.
        </p>
      </Theorem>

      <Definition title="the connecting map">
        <p>
          Given a cycle z in X, subdivide it so that z = a + b with a in A and b in B. Then ∂a = −∂b is a cycle lying in both
          pieces, so in A ∩ B, and <M>{"\\partial [z] = [\\partial a]"}</M>. For the sphere cut into two discs, the
          fundamental class splits into two hemispheres, whose common boundary is the equator.
        </p>
      </Definition>

      <Theorem title="proof idea">
        <p>
          Let <M>{"C_n(A + B)"}</M> be the chains that are sums of chains in A and chains in B. The sequence{" "}
          <M>{"0 \\to C(A \\cap B) \\to C(A) \\oplus C(B) \\to C(A + B) \\to 0"}</M> is exact, so it has a long exact sequence.
          Barycentric subdivision shows <M>{"C(A + B)"}</M> has the same homology as <M>{"C(X)"}</M>, exactly as in the proof
          of excision.
        </p>
      </Theorem>

      <Example title="spheres again, and the torus">
        <p>
          Cover Sⁿ by two discs overlapping in a band <M>{"\\simeq S^{n-1}"}</M>. The discs are contractible, so reduced
          Mayer–Vietoris gives <M>{"\\tilde{H}_k(S^n) \\cong \\tilde{H}_{k-1}(S^{n-1})"}</M> at once. For the torus, the
          overlap is two cylinders; the map Φ in degree 1 has rank 1, and the sequence gives{" "}
          <M>{"H_1 = \\mathbb{Z}^2"}</M> and <M>{"H_2 = \\mathbb{Z}"}</M>.
        </p>
      </Example>

      <Example title="wedges and suspensions">
        <p>
          If the overlap is contractible, the reduced homology of a union is the direct sum: so{" "}
          <M>{"\\tilde{H}_n(X \\vee Y) \\cong \\tilde{H}_n(X) \\oplus \\tilde{H}_n(Y)"}</M>. The suspension SX, two cones on X
          glued along X, has <M>{"\\tilde{H}_{n+1}(SX) \\cong \\tilde{H}_n(X)"}</M>, since cones are contractible.
        </p>
      </Example>

      <Remark title="van Kampen and Mayer–Vietoris">
        <p>
          Both glue a space from two pieces. Van Kampen gives π₁ as an amalgamated product, nonabelian and hard to compute
          with; Mayer–Vietoris gives all homology groups in one exact sequence, abelian and computable. In degree 1, when the
          overlap is path-connected, the second is the abelianisation of the first.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "need",
      rung: "check",
      prompt: <p>What condition on A and B does the Mayer–Vietoris sequence need?</p>,
      answer: { kind: "choice", options: ["X is the union of the interiors of A and B", "A and B are disjoint", "A and B are contractible", "A ∩ B is a point"], correct: [0] },
    },
    {
      key: "psi",
      rung: "check",
      prompt: <p>What does the map H(A) ⊕ H(B) → H(X) do?</p>,
      answer: { kind: "choice", options: ["Adds the images of the two classes in X", "Takes their difference in A ∩ B", "Projects onto H(A)", "Applies the boundary map"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the Klein bottle. What is the order of the torsion part of H₁?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "wedge",
      rung: "apply",
      prompt: <p>What is the rank of H₁ of a wedge of five circles?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "susp",
      rung: "apply",
      prompt: <p>The suspension of S³ is S⁴. What does Mayer–Vietoris say about their reduced homology?</p>,
      answer: { kind: "choice", options: ["H̃ₖ₊₁(S⁴) ≅ H̃ₖ(S³) for every k", "They are equal in every degree", "S⁴ has no homology", "H̃₄(S⁴) = 0"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use Mayer–Vietoris to compute H₁ of the circle, covering it by two arcs.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the arcs are contractible and their intersection is two contractible pieces, so H₀(A ∩ B) = ℤ².",
          "Identifies the map ℤ² → ℤ² in degree 0 and its kernel, a copy of ℤ.",
          "Uses exactness, with H₁(A) ⊕ H₁(B) = 0, to conclude H₁(S¹) ≅ ℤ.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The surface of genus g is the union of a genus g − 1 surface with a hole and a torus with a hole. How might you use Mayer–Vietoris to find its H₁?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the overlap is an annulus, a circle up to homotopy, whose class bounds on each side.",
          "Uses induction to conclude H₁ has rank 2g.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Mayer–Vietoris and the pair sequence compute homology a step at a time. For a CW complex, both can be packaged into
        a single small chain complex, with one generator for each cell.
      </p>
      <p>
        Next, cellular homology: the fastest way to compute the homology of a CW complex, from the degrees of its attaching
        maps.
      </p>
    </>
  ),
};
