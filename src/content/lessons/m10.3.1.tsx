import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CharRootsViz } from "@/components/viz/CharRootsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.3.1",
  minutes: 90,
  links: {
    revisits: ["m10.1.2", "m10.2.1", "m3.7.1"],
    foreshadows: ["m10.3.2", "m10.3.4", "m10.4.2"],
  },

  puzzle: (
    <>
      <p>
        A car&rsquo;s suspension is a spring with a shock absorber. Too little damping and the car bounces after every pothole;
        too much and it is stiff and slow to recover. Where exactly is the boundary, and what decides which behaviour you get?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The solution starts at 1 with zero velocity. Change the damping and stiffness, and watch the two roots on the right
        move as the motion switches between bouncing and creeping back.
      </p>
      <CharRootsViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the solution space">
        <p>
          The solutions of <M>{"y'' + by' + cy = 0"}</M> form a two-dimensional vector space: for each pair of initial values{" "}
          <M>{"y(0)"}</M>, <M>{"y'(0)"}</M> there is exactly one solution.
        </p>
      </Theorem>

      <Proof>
        <p>
          Linearity makes the solutions a vector space. Writing <M>{"u = (y, y')"}</M> turns the equation into a first-order
          system <M>{"u' = Au"}</M> with a Lipschitz right side, so existence and uniqueness hold for systems just as for
          single equations. The map from a solution to its initial values is then a linear bijection onto{" "}
          <M>{"\\mathbb{R}^2"}</M>.
        </p>
      </Proof>

      <Theorem title="the characteristic equation">
        <p>
          Trying <M>{"y = e^{rt}"}</M> gives <M>{"(r^2 + br + c)e^{rt} = 0"}</M>. With roots of{" "}
          <M>{"r^2 + br + c = 0"}</M>:
        </p>
        <ul>
          <li>two real roots <M>{"r_1 \\ne r_2"}</M>: <M>{"y = C_1e^{r_1t} + C_2e^{r_2t}"}</M>;</li>
          <li>a double root <M>{"r"}</M>: <M>{"y = (C_1 + C_2t)e^{rt}"}</M>;</li>
          <li>complex roots <M>{"\\alpha \\pm i\\omega"}</M>: <M>{"y = e^{\\alpha t}(C_1\\cos\\omega t + C_2\\sin\\omega t)"}</M>.</li>
        </ul>
      </Theorem>

      <Proof>
        <p>
          In each case the two functions solve the equation and are not multiples of each other, so they span the
          two-dimensional space. For a double root, <M>{"b = -2r"}</M> and <M>{"c = r^2"}</M>, and{" "}
          <M>{"(te^{rt})'' - 2r(te^{rt})' + r^2te^{rt} = e^{rt}(2r + r^2t - 2r - 2r^2t + r^2t) = 0"}</M>. For complex roots,{" "}
          <M>{"e^{(\\alpha + i\\omega)t} = e^{\\alpha t}(\\cos\\omega t + i\\sin\\omega t)"}</M> solves the equation, and since
          the coefficients are real, so do its real and imaginary parts.
        </p>
      </Proof>

      <Example title="a damped spring">
        <p>
          For <M>{"y'' + 2y' + 5y = 0"}</M> the roots are <M>{"-1 \\pm 2i"}</M>, so{" "}
          <M>{"y = e^{-t}(C_1\\cos 2t + C_2\\sin 2t)"}</M>. With <M>{"y(0) = 1"}</M>, <M>{"y'(0) = 0"}</M>: <M>{"C_1 = 1"}</M>{" "}
          and <M>{"-C_1 + 2C_2 = 0"}</M>, so <M>{"C_2 = 1/2"}</M>.
        </p>
      </Example>

      <Remark title="damping regimes">
        <p>
          With <M>{"b, c > 0"}</M>: if <M>{"b^2 > 4c"}</M> the system is overdamped and returns without oscillating; if{" "}
          <M>{"b^2 < 4c"}</M> it is underdamped and oscillates in a shrinking envelope; at <M>{"b^2 = 4c"}</M> it is critically
          damped, returning fastest without overshoot. That is the setting engineers aim for in a suspension.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "real",
      rung: "check",
      prompt: <p>What is the general solution of <M>{"y'' - 5y' + 6y = 0"}</M>?</p>,
      answer: {
        kind: "choice",
        options: ["C₁e^(2t) + C₂e^(3t)", "C₁e^(−2t) + C₂e^(−3t)", "(C₁ + C₂t)e^(5t)", "C₁cos 6t + C₂ sin 6t"],
        correct: [0],
      },
    },
    {
      key: "case",
      rung: "check",
      prompt: <p>Which case is <M>{"y'' + 4y' + 4y = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["Two distinct real roots", "A repeated root −2", "Complex roots ±2i", "Complex roots −2 ± i"], correct: [1] },
    },
    {
      key: "omega",
      rung: "apply",
      prompt: <p>What is the angular frequency <M>{"\\omega"}</M> of the solutions of <M>{"y'' + 9y = 0"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "cosh",
      rung: "apply",
      prompt: <p>Solve <M>{"y'' - y = 0"}</M>, <M>{"y(0) = 2"}</M>, <M>{"y'(0) = 0"}</M>, and give <M>{"y(1)"}</M>.</p>,
      answer: { kind: "numeric", value: 2 * Math.cosh(1), tolerance: 0.005 },
    },
    {
      key: "c2",
      rung: "apply",
      prompt: <p>For <M>{"y'' + 6y' + 13y = 0"}</M>, <M>{"y(0) = 1"}</M>, <M>{"y'(0) = 1"}</M>, the solution is <M>{"e^{-3t}(C_1\\cos 2t + C_2\\sin 2t)"}</M>. Find <M>{"C_2"}</M>.</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "double",
      rung: "prove",
      prompt: <p>Prove that if <M>{"r"}</M> is a double root of <M>{"r^2 + br + c"}</M>, then <M>{"te^{rt}"}</M> solves <M>{"y'' + by' + cy = 0"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses that a double root means b = −2r and c = r².",
          "Computes (te^(rt))′ = (1 + rt)e^(rt) and (te^(rt))″ = (2r + r²t)e^(rt).",
          "Substitutes and shows the result is zero.",
        ],
      },
    },
    {
      key: "decay",
      rung: "stretch",
      prompt: <p>For which <M>{"b"}</M> and <M>{"c"}</M> do all solutions of <M>{"y'' + by' + cy = 0"}</M> tend to 0? Explain.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that all solutions decay exactly when both roots have negative real part.",
          "Concludes this happens exactly when b > 0 and c > 0, for example using the sum −b and product c of the roots.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the solutions of y″ + by′ + cy = 0 form a two-dimensional space, how the characteristic equation produces them in the three cases, and how damping decides between bouncing and creeping back.",

  glimpse: (
    <p>
      The next lessons add a forcing term, first by guessing its form and then by variation of parameters, and then study
      resonance. The matrix exponential later solves every constant-coefficient system at once.
    </p>
  ),
};
