import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ShootingViz } from "@/components/viz/ShootingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.6.3",
  minutes: 90,
  links: {
    revisits: ["m10.6.1", "m3.7.3", "m3.5.2"],
    foreshadows: ["m17.4.1", "m17.3.1", "m17.2.1"],
  },

  puzzle: (
    <>
      <p>
        A guitar string fixed at both ends can only vibrate in certain patterns, at a fundamental pitch and its overtones.
        Initial value problems had a solution for every start. Why does fixing the string at both ends allow only special
        frequencies?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Shoot a solution from the left end and adjust λ until it lands on the right condition. Use the chips to jump to the
        eigenvalues, then switch the right-hand condition.
      </p>
      <ShootingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Sturm–Liouville problem">
        <p>On an interval <M>{"[a, b]"}</M>, with <M>{"p > 0"}</M> and weight <M>{"w > 0"}</M>,</p>
        <MD>{"-(p\\,y')' + q\\,y = \\lambda\\,w\\,y,"}</MD>
        <p>
          with a boundary condition at each end, such as <M>{"y(a) = 0"}</M> or <M>{"y'(b) = 0"}</M>. A value of{" "}
          <M>{"\\lambda"}</M> with a nonzero solution is an <strong>eigenvalue</strong>, and the solution an{" "}
          <strong>eigenfunction</strong>.
        </p>
      </Definition>

      <Example title="the fixed string">
        <p>
          <M>{"y'' + \\lambda y = 0"}</M>, <M>{"y(0) = y(\\pi) = 0"}</M>. For <M>{"\\lambda = k^2 > 0"}</M>, the left
          condition gives <M>{"y = \\sin kx"}</M>, and <M>{"\\sin k\\pi = 0"}</M> forces <M>{"k = n"}</M>. So{" "}
          <M>{"\\lambda_n = n^2"}</M> with eigenfunctions <M>{"\\sin nx"}</M>: the string&rsquo;s modes.
        </p>
      </Example>

      <Theorem title="orthogonality">
        <p>
          Eigenfunctions <M>{"y_m, y_n"}</M> with different eigenvalues are orthogonal:{" "}
          <M>{"\\int_a^b y_m\\,y_n\\,w\\,dx = 0"}</M>. All eigenvalues are real.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"L[y] = -(py')' + qy"}</M>. Integrating by parts twice,{" "}
          <M>{"\\int (L[u]\\,v - u\\,L[v]) = [p(uv' - u'v)]_a^b"}</M>, which vanishes under the boundary conditions: L is{" "}
          <strong>self-adjoint</strong>. Applying this to <M>{"y_m, y_n"}</M> gives{" "}
          <M>{"(\\lambda_m - \\lambda_n)\\int y_my_nw = 0"}</M>, so the integral is zero when the eigenvalues differ. Taking{" "}
          <M>{"v = \\bar u"}</M> shows similarly that each <M>{"\\lambda"}</M> equals its conjugate.
        </p>
      </Proof>

      <Remark title="like a symmetric matrix">
        <p>
          A symmetric matrix has real eigenvalues and orthogonal eigenvectors that form a basis. Sturm–Liouville theory says
          the same for these differential operators: the eigenvalues form an increasing sequence tending to infinity, the{" "}
          <M>{"n"}</M>th eigenfunction has <M>{"n - 1"}</M> zeros inside the interval, and suitable functions can be expanded
          in eigenfunctions. For <M>{"\\sin nx"}</M> this expansion is the Fourier sine series.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What is an eigenvalue of a Sturm–Liouville problem?</p>,
      answer: {
        kind: "choice",
        options: ["Any λ", "A λ for which the problem has a nonzero solution", "The largest value of y", "A root of p"],
        correct: [1],
      },
    },
    {
      key: "string",
      rung: "check",
      prompt: <p>What are the eigenfunctions of <M>{"y'' + \\lambda y = 0"}</M>, <M>{"y(0) = y(\\pi) = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["cos nx", "sin nx", "e^(nx)", "xⁿ"], correct: [1] },
    },
    {
      key: "L",
      rung: "apply",
      prompt: <p>For <M>{"y'' + \\lambda y = 0"}</M>, <M>{"y(0) = y(2) = 0"}</M>, what is the smallest eigenvalue?</p>,
      answer: { kind: "numeric", value: (Math.PI / 2) ** 2, tolerance: 0.005 },
    },
    {
      key: "free",
      rung: "apply",
      prompt: <p>For <M>{"y'' + \\lambda y = 0"}</M>, <M>{"y(0) = 0"}</M>, <M>{"y'(\\pi) = 0"}</M>, what is the second eigenvalue?</p>,
      answer: { kind: "numeric", value: 2.25, tolerance: 0.001 },
    },
    {
      key: "orth",
      rung: "apply",
      prompt: <p>What is <M>{"\\int_0^\\pi \\sin 2x\\,\\sin 3x\\,dx"}</M>?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\sin mx"}</M> and <M>{"\\sin nx"}</M> are orthogonal on <M>{"[0, \\pi]"}</M> for <M>{"m \\ne n"}</M>, using the equation they satisfy rather than a trigonometric identity.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes u″ = −m²u and v″ = −n²v and considers ∫ (u″v − uv″).",
          "Integrates by parts to get a boundary term [u′v − uv′] that vanishes at 0 and π.",
          "Concludes (n² − m²)∫ uv = 0, so the integral is zero.",
        ],
      },
    },
    {
      key: "matrix",
      rung: "stretch",
      prompt: <p>In what sense is a Sturm–Liouville problem like finding the eigenvalues of a symmetric matrix? Where does the analogy need care?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Compares self-adjointness with symmetry, real eigenvalues and orthogonal eigenvectors.",
          "Notes the differences: infinitely many eigenvalues, and convergence of expansions must be proved.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Sturm–Liouville problem is, why only special λ give nonzero solutions, the example of the fixed string, why eigenfunctions are orthogonal, and the analogy with symmetric matrices.",

  glimpse: (
    <p>
      This completes the course in ordinary differential equations. Partial differential equations use these eigenfunctions to
      solve the heat and wave equations, and Fourier series expand functions in them.
    </p>
  ),
};
