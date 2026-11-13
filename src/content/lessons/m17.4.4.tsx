import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { EigenModesViz } from "@/components/viz/EigenModesViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.4.4",
  minutes: 90,
  links: {
    revisits: ["m17.4.3", "m10.6.3", "m3.7.1"],
    foreshadows: ["m17.5.1", "m17.5.3", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        A pipe open at both ends and a pipe closed at one end, of the same length, sound different notes: the closed pipe
        sounds an octave lower and plays only odd harmonics. The air obeys the same wave equation in both. Where does the
        difference come from?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the boundary conditions and the mode, and compare the eigenvalues.</p>
      <EigenModesViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a Sturm–Liouville problem">
        <p>Separation of variables leads to problems of the form</p>
        <MD>{"-(p\\,X')' + q\\,X = \\lambda\\, w\\,X \\ \\text{ on } [a,b],"}</MD>
        <p>
          with p, w &gt; 0, together with a boundary condition at each end of the form{" "}
          <M>{"\\alpha X + \\beta X' = 0"}</M>. Such a condition is Dirichlet (β = 0, the end fixed), Neumann (α = 0, the end
          free) or Robin (both non-zero). The values of λ for which there is a non-zero solution are the eigenvalues.
        </p>
      </Definition>

      <Theorem title="the Sturm–Liouville theorem">
        <p>For a regular Sturm–Liouville problem:</p>
        <p>
          (1) the eigenvalues are real and can be listed as <M>{"\\lambda_1 < \\lambda_2 < \\cdots \\to \\infty"}</M>;
          (2) each has a single eigenfunction up to scaling, and the n-th has exactly n − 1 zeros inside (a, b); (3)
          eigenfunctions for different eigenvalues are orthogonal with weight w,{" "}
          <M>{"\\int_a^b X_m X_n\\, w\\,dx = 0"}</M>; (4) they are complete: every square-integrable f has an expansion{" "}
          <M>{"f = \\sum c_n X_n"}</M> converging in mean square.
        </p>
        <p>
          Orthogonality comes from integrating by parts: the operator is symmetric because the boundary terms vanish under
          these conditions, just as a symmetric matrix has orthogonal eigenvectors.
        </p>
      </Theorem>

      <Example title="the two pipes">
        <p>
          With X = 0 at both ends of [0, 1], the eigenfunctions are sin nπx with <M>{"\\lambda = n^2\\pi^2"}</M>, so the
          frequencies are proportional to 1, 2, 3, and so on. With X(0) = 0 and X′(1) = 0 they are{" "}
          <M>{"\\sin\\big((n-\\tfrac12)\\pi x\\big)"}</M>, frequencies proportional to ½, 3/2, 5/2: the fundamental is halved
          and only odd multiples of it appear. (For the air pressure in a pipe, an open end is a fixed end and a closed end is a
          free one.)
        </p>
      </Example>

      <Remark title="Robin conditions">
        <p>
          For X(0) = 0 and <M>{"X'(1) + hX(1) = 0"}</M>, the eigenfunctions are sin kx where{" "}
          <M>{"k\\cos k + h\\sin k = 0"}</M>. The roots must be found numerically. As h runs from 0 to ∞ they slide from the
          free values <M>{"(n-\\tfrac12)\\pi"}</M> to the fixed values nπ, so the boundary condition tunes the spectrum
          continuously.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "kinds",
      rung: "check",
      prompt: <p>What does a Neumann condition at an end say?</p>,
      answer: { kind: "choice", options: ["X′ = 0 there", "X = 0 there", "X′ + hX = 0 there with h ≠ 0", "X is periodic"], correct: [0] },
    },
    {
      key: "orth",
      rung: "check",
      prompt: <p>Which is a conclusion of the Sturm–Liouville theorem?</p>,
      answer: {
        kind: "choice",
        options: [
          "Eigenfunctions with different eigenvalues are orthogonal with the weight w.",
          "There are only finitely many eigenvalues.",
          "Some eigenvalues are complex.",
          "Every eigenfunction has the same number of zeros.",
        ],
        correct: [0],
      },
    },
    {
      key: "dn",
      rung: "apply",
      prompt: <p>With X(0) = 0 and X′(1) = 0, the first eigenvalue is (π/2)². Give it to two decimal places.</p>,
      answer: { kind: "numeric", value: 2.47, tolerance: 0.01 },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose &ldquo;fixed, then Robin&rdquo; with h = 1. What is λ₁? Give two decimal places.</p>,
      answer: { kind: "numeric", value: 4.12, tolerance: 0.02 },
    },
    {
      key: "nn",
      rung: "apply",
      prompt: <p>With both ends free, what is the lowest eigenvalue, and its eigenfunction?</p>,
      answer: { kind: "choice", options: ["λ = 0, a constant", "λ = π², sin πx", "λ = π²/4, cos(πx/2)", "There is none"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"-X_m'' = \\lambda_m X_m"}</M> and <M>{"-X_n'' = \\lambda_n X_n"}</M> on [0, 1], with both functions zero at
          0 and 1, and <M>{"\\lambda_m \\ne \\lambda_n"}</M>. Prove that <M>{"\\int_0^1 X_m X_n\\,dx = 0"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Writes (λₘ − λₙ)∫XₘXₙ dx = ∫(Xₘ Xₙ″ − Xₙ Xₘ″) dx.",
          "Notes that the integrand is the derivative of Xₘ Xₙ′ − Xₙ Xₘ′, which vanishes at both ends since Xₘ and Xₙ do.",
          "Concludes the integral is 0, and divides by λₘ − λₙ ≠ 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The n-th eigenfunction has n − 1 interior zeros. Why might that be, intuitively?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Relates larger λ to faster oscillation, since X″ = −λX bends the curve back towards the axis more strongly.",
          "Mentions orthogonality: each new eigenfunction must change sign more often to be orthogonal to the earlier ones, or Sturm's comparison theorem.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Sturm–Liouville problem is, the kinds of boundary condition, and why its eigenfunctions are orthogonal and can be used to expand any function.",

  glimpse: (
    <p>
      Next, harmonic functions: solutions of Laplace&rsquo;s equation, the steady states of heat flow, and their remarkable
      rigidity, smoothness and connection with complex analysis.
    </p>
  ),
};
