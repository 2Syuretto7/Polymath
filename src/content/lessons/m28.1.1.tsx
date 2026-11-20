import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PoissonExtendViz } from "@/components/viz/PoissonExtendViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.1.1",
  minutes: 90,
  links: {
    revisits: ["m13.2.3", "m13.3.3", "m13.1.3"],
    foreshadows: ["m28.1.2", "m28.4.1", "m33.1.1"],
  },

  puzzle: (
    <>
      <p>
        The rim of a thin circular plate is held at fixed temperatures, hot on one side and cold on the other. After a long
        time the temperature inside settles down. Is the steady state determined by the rim alone, and is there a formula
        for it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose boundary values on the circle, and move a point inside the disc to read the harmonic extension.</p>
      <PoissonExtendViz />
    </>
  ),

  theory: (
    <>
      <Definition title="harmonic functions">
        <p>
          A real function u of class C² on an open set in the plane is <strong>harmonic</strong> if{" "}
          <M>{"\\Delta u = u_{xx} + u_{yy} = 0"}</M>. Real parts of holomorphic functions are harmonic by the Cauchy–Riemann
          equations, and on a disc every harmonic function is the real part of a holomorphic one.
        </p>
      </Definition>

      <Theorem title="mean value property and maximum principle">
        <p>
          If u is harmonic on a neighbourhood of the closed disc of radius r about <M>{"z_0"}</M>, then{" "}
          <M>{"u(z_0) = \\frac1{2\\pi}\\int_0^{2\\pi} u(z_0 + re^{i\\theta})\\,d\\theta"}</M>. Consequently a harmonic function
          on a bounded domain, continuous up to the boundary, attains its maximum and minimum on the boundary.
        </p>
      </Theorem>

      <Definition title="the Poisson kernel">
        <p>
          For 0 ≤ r &lt; 1, <M>{"P_r(\\theta) = \\frac{1 - r^2}{1 - 2r\\cos\\theta + r^2} = \\sum_{n \\in \\mathbb{Z}} r^{|n|} e^{in\\theta} = \\operatorname{Re}\\frac{1 + re^{i\\theta}}{1 - re^{i\\theta}}"}</M>.
          It is positive, has average 1 over the circle, and as r → 1 it concentrates at θ = 0.
        </p>
      </Definition>

      <Theorem title="the Poisson integral">
        <p>
          For f continuous on the unit circle, <M>{"u(re^{i\\varphi}) = \\frac1{2\\pi}\\int_0^{2\\pi} P_r(\\varphi - \\theta) f(\\theta)\\,d\\theta"}</M>{" "}
          is harmonic in the open disc, and setting u = f on the circle makes u continuous on the closed disc. By the maximum
          principle it is the only such function.
        </p>
      </Theorem>

      <Example title="Fourier series">
        <p>
          If <M>{"f(\\theta) = \\sum a_n e^{in\\theta}"}</M>, the Poisson integral is{" "}
          <M>{"\\sum a_n r^{|n|} e^{in\\varphi}"}</M>: each frequency is damped by <M>{"r^{|n|}"}</M>. So cos 2θ extends to{" "}
          <M>{"r^2\\cos 2\\varphi = \\operatorname{Re} z^2"}</M>, as in the visualisation.
        </p>
      </Example>

      <Remark title="Schwarz and Harnack">
        <p>
          Replacing <M>{"P_r"}</M> by the full kernel <M>{"\\frac{e^{i\\theta} + z}{e^{i\\theta} - z}"}</M> gives a holomorphic
          F with Re F = u, the Schwarz integral formula. Positivity of the kernel gives Harnack&rsquo;s inequality: a positive
          harmonic function on the disc cannot vary by more than a factor <M>{"\\frac{1+r}{1-r}"}</M> on the circle of radius r.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>Which condition defines a harmonic function u?</p>,
      answer: { kind: "choice", options: ["Its second partial derivatives in x and y add up to zero", "Its first partial derivatives in x and y are equal", "u is bounded", "Both first partial derivatives vanish"], correct: [0] },
    },
    {
      key: "mean",
      rung: "check",
      prompt: <p>What is the value of the Poisson integral at the centre of the disc?</p>,
      answer: { kind: "choice", options: ["The average of the boundary values", "The maximum of the boundary values", "Zero", "The boundary value at angle 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose cos 2θ and put the point at r = 0.5, angle 0°. What is u there?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "peak",
      rung: "apply",
      prompt: <p>Compute the Poisson kernel at θ = 0 for r = 0.5.</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "cos3",
      rung: "apply",
      prompt: <p>What is the harmonic extension of the boundary values cos 3θ?</p>,
      answer: { kind: "choice", options: ["r³ cos 3φ", "r cos 3φ", "cos 3φ", "r³ cos φ"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that (1 − r²)/(1 − 2r cos θ + r²) is the real part of (1 + r e to the iθ)/(1 − r e to the iθ).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Multiplies numerator and denominator by the conjugate 1 − r e to the −iθ.",
          "Computes the denominator |1 − r e to the iθ|² = 1 − 2r cos θ + r².",
          "Finds the numerator 1 − r² + 2ir sin θ, whose real part gives the kernel.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why the Poisson integral of a continuous f approaches f(θ₀) as the point approaches e to the iθ₀.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that the kernel is positive with average 1, so u − f(θ₀) is an average of f(θ) − f(θ₀).",
          "Splits the circle into a small arc near θ₀, where f is close to f(θ₀), and the rest, where the kernel is small as r → 1.",
          "Concludes that both contributions tend to 0. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        On a disc the boundary values always determine a harmonic function. On other domains the same question can fail in
        surprising ways, and answering it in general took a century.
      </p>
      <p>Next, the Dirichlet problem.</p>
    </>
  ),
};
