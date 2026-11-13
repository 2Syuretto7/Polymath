import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { FourierViz } from "@/components/viz/FourierViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m8.3.2",
  minutes: 90,
  links: {
    revisits: ["m8.3.1", "m3.5.4", "m8.2.3"],
    foreshadows: ["m8.3.3", "m8.4.2", "m17.4.1"],
  },

  puzzle: (
    <>
      <p>
        In a general basis, finding the coordinates of a vector means solving a system of equations. In an orthonormal basis,
        each coordinate is a single inner product. Fourier discovered that the functions <M>{"\\sin kx"}</M> and{" "}
        <M>{"\\cos kx"}</M> behave like such a basis, so any reasonable function can be built from waves with coefficients
        computed by integrals. How far does the analogy with ordinary coordinates go?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Project a function onto the first few trigonometric functions. Add frequencies and watch the approximation improve,
        and the captured squared length approach the whole.
      </p>
      <FourierViz />
    </>
  ),

  theory: (
    <>
      <Definition title="orthonormal lists">
        <p>
          A list <M>{"e_1, \\dots, e_m"}</M> is <strong>orthonormal</strong> if each has norm 1 and distinct ones are
          orthogonal. Then{" "}
          <M>{"\\|a_1e_1 + \\cdots + a_me_m\\|^2 = |a_1|^2 + \\cdots + |a_m|^2"}</M>, so an orthonormal list is linearly
          independent.
        </p>
      </Definition>

      <Theorem title="coordinates in an orthonormal basis">
        <p>If e₁, …, eₙ is an orthonormal basis of V, then for every v,</p>
        <MD>{"v = \\langle v, e_1 \\rangle e_1 + \\cdots + \\langle v, e_n \\rangle e_n, \\qquad \\|v\\|^2 = \\sum_k |\\langle v, e_k \\rangle|^2."}</MD>
      </Theorem>

      <Proof>
        <p>
          Write <M>{"v = \\sum a_ke_k"}</M> and take the inner product with <M>{"e_j"}</M>: every term vanishes except{" "}
          <M>{"a_j\\langle e_j, e_j \\rangle = a_j"}</M>. The norm formula is Pythagoras applied to the orthogonal pieces.
        </p>
      </Proof>

      <Theorem title="Gram-Schmidt">
        <p>
          Every linearly independent list <M>{"v_1, \\dots, v_m"}</M> can be replaced by an orthonormal list{" "}
          <M>{"e_1, \\dots, e_m"}</M> with the same initial spans. So every finite-dimensional inner product space has an
          orthonormal basis.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"e_1 = v_1/\\|v_1\\|"}</M>. Having built <M>{"e_1, \\dots, e_{j-1}"}</M>, subtract from <M>{"v_j"}</M> its
          components along them,{" "}
          <M>{"w_j = v_j - \\sum_{k < j} \\langle v_j, e_k \\rangle e_k"}</M>, which is orthogonal to each{" "}
          <M>{"e_k"}</M> and non-zero by independence, and set <M>{"e_j = w_j / \\|w_j\\|"}</M>.
        </p>
      </Proof>

      <Example title="Legendre and Fourier">
        <p>
          Applying Gram-Schmidt to <M>{"1, x, x^2"}</M> with <M>{"\\langle f, g \\rangle = \\int_{-1}^1 fg"}</M> gives
          multiples of <M>{"1, x, x^2 - \\tfrac13"}</M>, the first Legendre polynomials. On <M>{"[-\\pi, \\pi]"}</M>, the
          functions <M>{"1/\\sqrt{2\\pi}"}</M>, <M>{"\\cos kx/\\sqrt\\pi"}</M> and <M>{"\\sin kx/\\sqrt\\pi"}</M> are
          orthonormal, and the Fourier coefficients of <M>{"f"}</M> are its inner products with them.
        </p>
      </Example>

      <Remark title="infinitely many directions">
        <p>
          With finitely many orthonormal vectors, Bessel&rsquo;s inequality{" "}
          <M>{"\\sum |\\langle v, e_k \\rangle|^2 \\le \\|v\\|^2"}</M> always holds. Whether the trigonometric functions form a
          complete basis, so that equality holds in the limit, is a question of analysis, settled in the theory of Fourier
          series and Hilbert spaces. Combined with Schur&rsquo;s theorem, Gram-Schmidt shows every complex operator is
          upper-triangular in some orthonormal basis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "coord",
      rung: "check",
      prompt: (
        <p>
          In ℝ² with orthonormal basis <M>{"e_1 = (\\tfrac35, \\tfrac45)"}</M>, <M>{"e_2 = (-\\tfrac45, \\tfrac35)"}</M>, what
          is the first coordinate of <M>{"(5, 0)"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "indep",
      rung: "check",
      prompt: <p>Why is every orthonormal list linearly independent?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because its vectors are distinct.",
          "Because ‖Σ aₖeₖ‖² = Σ |aₖ|², which is 0 only when every aₖ = 0.",
          "Because it is finite.",
          "Because it spans the space.",
        ],
        correct: [1],
      },
    },
    {
      key: "gs",
      rung: "apply",
      prompt: <p>Gram-Schmidt applied to v₁ = (3, 4), v₂ = (1, 0) in ℝ². What is the first component of w₂ = v₂ − ⟨v₂, e₁⟩e₁? Give a decimal.</p>,
      answer: { kind: "numeric", value: 0.64, tolerance: 0.001 },
    },
    {
      key: "bessel",
      rung: "apply",
      prompt: <p>A vector of norm 5 has inner products 3 and 2 with two orthonormal vectors. What is the squared norm of the rest of it?</p>,
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "legendre",
      rung: "apply",
      prompt: (
        <p>
          With <M>{"\\langle f, g \\rangle = \\int_{-1}^1 fg"}</M>, what is <M>{"\\|1\\|^2"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if e₁, …, eₙ is an orthonormal basis, then v = Σ ⟨v, eₖ⟩eₖ. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes v = Σ aₖeₖ, which is possible since the eₖ form a basis.",
          "Takes the inner product with eⱼ and uses orthonormality to get ⟨v, eⱼ⟩ = aⱼ.",
          "Concludes the coefficients are the inner products.",
        ],
      },
    },
    {
      key: "square",
      rung: "stretch",
      prompt: <p>The square wave&rsquo;s Fourier series uses only sine terms of odd frequency. Explain why, using symmetry and orthogonality.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the square wave is odd, so its inner product with the even functions 1 and cos kx is 0.",
          "Computes or explains that the inner product with sin kx vanishes for even k, for example by a symmetry about π/2.",
          "Concludes only odd sine terms remain. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what an orthonormal basis is, why coordinates in it are inner products, how Gram-Schmidt builds one, and how Fourier series fit this picture, including Bessel's inequality.",

  glimpse: (
    <p>
      The next lesson studies orthogonal complements and orthogonal projections. The spectral theorem later finds orthonormal
      bases of eigenvectors, and the PDE course develops Fourier series in full.
    </p>
  ),
};
