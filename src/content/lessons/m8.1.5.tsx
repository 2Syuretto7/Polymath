import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DualBasisViz } from "@/components/viz/DualBasisViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.1.5",
  minutes: 90,
  links: {
    revisits: ["m8.1.2", "m8.1.4", "m3.4.5"],
    foreshadows: ["m8.3.3", "m23.3.1", "m25.5.4"],
  },

  puzzle: (
    <>
      <p>
        A coordinate is a function: &ldquo;the x-coordinate&rdquo; takes a point and returns a number, and it is linear.
        In a skewed basis, the coordinate functions are less obvious; the first coordinate of a vector depends on both
        basis vectors. Linear functions to the field form a vector space of their own, the dual. Why does the transpose of
        a matrix appear when we pass to it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose a basis <M>{"v_1, v_2"}</M>. The coordinate functionals are drawn as families of level lines; read off the
        coordinates of the red point.
      </p>
      <DualBasisViz />
    </>
  ),

  theory: (
    <>
      <Definition title="dual space and dual basis">
        <p>
          A <strong>linear functional</strong> on <M>{"V"}</M> is a linear map <M>{"V \\to F"}</M>. They form the{" "}
          <strong>dual space</strong> <M>{"V' = \\mathcal{L}(V, F)"}</M>. If <M>{"v_1, \\dots, v_n"}</M> is a basis of{" "}
          <M>{"V"}</M>, the <strong>dual basis</strong> <M>{"\\varphi_1, \\dots, \\varphi_n"}</M> is defined by
        </p>
        <MD>{"\\varphi_j(v_k) = \\begin{cases} 1 & j = k, \\\\ 0 & j \\ne k. \\end{cases}"}</MD>
        <p>
          Then <M>{"\\varphi_j(v)"}</M> is the <M>{"j"}</M>-th coordinate of <M>{"v"}</M>, and{" "}
          <M>{"\\dim V' = \\dim V"}</M>.
        </p>
      </Definition>

      <Definition title="the dual map">
        <p>
          For <M>{"T : V \\to W"}</M>, the <strong>dual map</strong> <M>{"T' : W' \\to V'"}</M> is{" "}
          <M>{"T'(\\psi) = \\psi \\circ T"}</M>. It goes in the opposite direction. With respect to dual bases, its matrix is
          the transpose of the matrix of <M>{"T"}</M>.
        </p>
      </Definition>

      <Theorem title="annihilators">
        <p>
          The <strong>annihilator</strong> of a subspace <M>{"U"}</M> is{" "}
          <M>{"U^0 = \\{\\varphi \\in V' : \\varphi(u) = 0 \\text{ for all } u \\in U\\}"}</M>. Then{" "}
          <M>{"\\dim U + \\dim U^0 = \\dim V"}</M>, and <M>{"\\operatorname{null} T' = (\\operatorname{range} T)^0"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          Extend a basis <M>{"u_1, \\dots, u_m"}</M> of <M>{"U"}</M> to a basis of <M>{"V"}</M>; the dual functionals for
          the added vectors form a basis of <M>{"U^0"}</M>, giving the dimension count. For the second,{" "}
          <M>{"T'(\\psi) = 0"}</M> means <M>{"\\psi(Tv) = 0"}</M> for all <M>{"v"}</M>, that is, <M>{"\\psi"}</M>{" "}
          vanishes on the range.
        </p>
      </Proof>

      <Example title="row rank equals column rank">
        <p>
          Combining these, <M>{"\\dim \\operatorname{range} T' = \\dim \\operatorname{range} T"}</M>. Since the matrix of{" "}
          <M>{"T'"}</M> is the transpose, the column rank of a matrix equals the column rank of its transpose, which is its
          row rank. The coincidence from the first course is explained by duality.
        </p>
      </Example>

      <Remark title="no natural isomorphism, until there is">
        <p>
          <M>{"V"}</M> and <M>{"V'"}</M> have the same dimension, but there is no isomorphism between them that does not
          depend on a choice of basis. There is a natural one from <M>{"V"}</M> to the double dual <M>{"V''"}</M>, sending{" "}
          <M>{"v"}</M> to evaluation at <M>{"v"}</M>. An inner product supplies an identification of <M>{"V"}</M> with{" "}
          <M>{"V'"}</M>; in infinite dimensions, the Hahn-Banach theorem guarantees enough functionals to make duality useful.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "dim",
      rung: "check",
      prompt: <p>What is the dimension of the dual of ℝ⁷?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "dir",
      rung: "check",
      prompt: <p>If T maps V to W, the dual map T′ maps which way?</p>,
      answer: { kind: "choice", options: ["V′ to W′", "W′ to V′", "V to W′", "W to V"], correct: [1] },
    },
    {
      key: "coord",
      rung: "apply",
      prompt: (
        <p>
          In <M>{"\\mathbb{R}^2"}</M> with basis <M>{"v_1 = (1, 0)"}</M>, <M>{"v_2 = (1, 1)"}</M>, the dual functional{" "}
          <M>{"\\varphi_1"}</M> sends <M>{"(3, 2)"}</M> to what?
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "ann",
      rung: "apply",
      prompt: <p>If U is a 3-dimensional subspace of a 10-dimensional space, what is the dimension of its annihilator?</p>,
      answer: { kind: "numeric", value: 7 },
    },
    {
      key: "transpose",
      rung: "apply",
      prompt: <p>A matrix of T has 3 rows and 5 columns. The matrix of T′, in dual bases, has how many rows?</p>,
      answer: { kind: "numeric", value: 5 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the dual map T′(ψ) = ψ ∘ T is linear in ψ. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes T′(ψ + χ) = (ψ + χ) ∘ T = ψ ∘ T + χ ∘ T = T′ψ + T′χ.",
          "Computes T′(aψ) = (aψ) ∘ T = a(ψ ∘ T).",
          "Concludes T′ is linear.",
        ],
      },
    },
    {
      key: "double",
      rung: "stretch",
      prompt: <p>Why is the map from V to V′′, sending v to &ldquo;evaluate at v&rdquo;, called natural, while no isomorphism V → V′ is?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the map to V′′ is defined without choosing a basis, and is an isomorphism in finite dimensions.",
          "Notes any isomorphism V → V′ seems to need extra structure, such as a basis or an inner product.",
          "Gives some sense of what natural means, such as commuting with all linear maps. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what the dual space and dual basis are, how the dual map works and why its matrix is the transpose, what annihilators are, and how duality proves that row rank equals column rank.",

  glimpse: (
    <p>
      The next chapter turns to eigenvalues, starting with polynomials over ℂ and ℝ. Inner products later identify a space
      with its dual through orthogonal complements, and in functional analysis the Hahn-Banach theorem makes duality work in
      infinite dimensions.
    </p>
  ),
};
