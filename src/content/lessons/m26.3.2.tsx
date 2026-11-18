import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { RegularLevelViz } from "@/components/viz/RegularLevelViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m26.3.2",
  minutes: 90,
  links: {
    revisits: ["m26.3.1", "m5.4.3", "m12.4.2"],
    foreshadows: ["m26.3.3", "m26.3.4", "m26.6.1"],
  },

  puzzle: (
    <>
      <p>
        The sphere x² + y² + z² = 1, the group of rotations SO(3), the set of unit-determinant matrices: each is cut out of a
        Euclidean space by equations, and each turns out to be a manifold. Not every equation gives a manifold, though:
        y² = x²(x + 1) crosses itself at the origin. What separates the good equations from the bad?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Slide the level c and watch the curve f(x, y) = c. At most levels it is a smooth curve. At the two critical values,
        where the level passes through a point with ∇f = 0, it changes shape.
      </p>
      <RegularLevelViz />
    </>
  ),

  theory: (
    <>
      <Definition title="embedded submanifolds">
        <p>
          A subset S of an n-manifold M is an <strong>embedded submanifold</strong> of dimension k if every point of S has a
          chart <M>{"(U, x^1, \\dots, x^n)"}</M> of M in which <M>{"S \\cap U"}</M> is the slice{" "}
          <M>{"\\{x^{k+1} = \\dots = x^n = 0\\}"}</M>. Such an S, with the subspace topology and the slice charts, is a
          k-manifold, and the inclusion is an embedding. Conversely, the image of any embedding is an embedded submanifold.
        </p>
      </Definition>

      <Definition title="regular values">
        <p>
          For smooth <M>{"F: M \\to N"}</M>, a point p is <strong>regular</strong> if <M>{"dF_p"}</M> is surjective, and{" "}
          <strong>critical</strong> otherwise. A value c ∈ N is a <strong>regular value</strong> if every point of{" "}
          <M>{"F^{-1}(c)"}</M> is regular, and a <strong>critical value</strong> otherwise. A value not taken at all is regular.
        </p>
      </Definition>

      <Theorem title="the regular level set theorem">
        <p>
          If c is a regular value of <M>{"F: M^m \\to N^n"}</M>, then <M>{"F^{-1}(c)"}</M> is an embedded submanifold of
          dimension m − n, and its tangent space at p is the kernel of <M>{"dF_p"}</M>.
        </p>
        <p>
          <strong>Proof idea.</strong> Near a regular point F is a submersion, so by the constant rank theorem it looks like the
          projection <M>{"(x^1, \\dots, x^m) \\mapsto (x^1, \\dots, x^n)"}</M>. In those charts the level set is a slice.
        </p>
      </Theorem>

      <Example title="spheres and SL(n)">
        <p>
          For <M>{"F(x) = |x|^2"}</M> on <M>{"\\mathbb{R}^{n+1}"}</M>, dF at x is <M>{"v \\mapsto 2x \\cdot v"}</M>, onto when
          x ≠ 0. So 1 is a regular value and <M>{"S^n"}</M> is an n-manifold. For det on n × n matrices, the derivative at A in
          the direction A is n det A, which is non-zero on <M>{"\\det^{-1}(1)"}</M>. So SL(n) is a submanifold of dimension{" "}
          <M>{"n^2 - 1"}</M>.
        </p>
      </Example>

      <Remark title="critical values">
        <p>
          The theorem is only sufficient. In the visualisation, f = y² − x²(x + 1) has critical points (0, 0) and (−2/3, 0),
          with critical values 0 and −4/27. At c = 0 the level set crosses itself; at c = −4/27 it gains an isolated point. But
          the level set of x² at 0 is the line x = 0, a perfectly good submanifold, though 0 is a critical value.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "reg",
      rung: "check",
      prompt: <p>When is c a regular value of F: M → N?</p>,
      answer: { kind: "choice", options: ["When dFₚ is surjective at every p with F(p) = c", "When F⁻¹(c) is non-empty", "When dFₚ is injective at every p", "When c is in the image of F"], correct: [0] },
    },
    {
      key: "dim",
      rung: "check",
      prompt: <p>If c is a regular value of F: ℝ⁵ → ℝ², what is the dimension of F⁻¹(c), if it is non-empty?</p>,
      answer: { kind: "numeric", value: 3 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, how many critical values does f(x, y) = y² − x²(x + 1) have?</p>,
      answer: { kind: "numeric", value: 2 },
    },
    {
      key: "sl",
      rung: "apply",
      prompt: <p>What is the dimension of SL(3), the 3 × 3 real matrices of determinant 1?</p>,
      answer: { kind: "numeric", value: 8 },
    },
    {
      key: "tan",
      rung: "apply",
      prompt: <p>What is the tangent space of the sphere S² at a point x?</p>,
      answer: { kind: "choice", options: ["The vectors v with x · v = 0", "All of ℝ³", "The line through x", "The vectors v with |v| = 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that 1 is a regular value of F(x, y, z) = x² + y² − z², and say what kind of surface F⁻¹(1) is.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes dF = (2x, 2y, −2z), which is zero only at the origin.",
          "Notes the origin has F = 0 ≠ 1, so every point of F⁻¹(1) is regular.",
          "Concludes F⁻¹(1) is a 2-dimensional embedded submanifold, a hyperboloid of one sheet.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show, or argue, that the orthogonal group O(n), the matrices with AᵀA = I, is a manifold. What is its dimension?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses F(A) = AᵀA into the symmetric matrices, of dimension n(n + 1)/2.",
          "Argues dF at A, B ↦ AᵀB + BᵀA, is onto the symmetric matrices, so the dimension is n² − n(n + 1)/2 = n(n − 1)/2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The regular level set theorem needs regular values. How common are they? It would be awkward if they were rare, but in
        fact almost every value is regular: the critical values of a smooth map form a set of measure zero.
      </p>
      <p>Next, Sard&rsquo;s theorem.</p>
    </>
  ),
};
