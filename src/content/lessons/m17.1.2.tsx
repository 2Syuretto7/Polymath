import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { PdeTypeViz } from "@/components/viz/PdeTypeViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m17.1.2",
  minutes: 85,
  links: {
    revisits: ["m17.1.1", "m5.3.2", "m5.2.3"],
    foreshadows: ["m17.1.3", "m17.2.2", "m17.5.1"],
  },

  puzzle: (
    <>
      <p>
        The wave equation <M>{"u_{xx} - u_{yy} = 0"}</M> and Laplace&rsquo;s equation <M>{"u_{xx} + u_{yy} = 0"}</M> differ
        by a single sign. Yet waves carry sharp corners forever, while solutions of Laplace&rsquo;s equation are infinitely
        smooth. How can one sign make so much difference?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Change the coefficients and watch the type of the equation and its characteristic lines.</p>
      <PdeTypeViz />
    </>
  ),

  theory: (
    <>
      <Definition title="classification by type">
        <p>Consider a linear second-order equation in two variables with constant coefficients,</p>
        <MD>{"A u_{xx} + B u_{xy} + C u_{yy} + D u_x + E u_y + F u = G."}</MD>
        <p>
          It is <strong>hyperbolic</strong> if <M>{"B^2 - 4AC > 0"}</M>, <strong>parabolic</strong> if{" "}
          <M>{"B^2 - 4AC = 0"}</M> and <strong>elliptic</strong> if <M>{"B^2 - 4AC < 0"}</M>. The names come from the conic{" "}
          <M>{"A\\xi^2 + B\\xi\\eta + C\\eta^2 = 1"}</M>. Only the principal part, the second-order terms, matters.
        </p>
      </Definition>

      <Theorem title="canonical forms">
        <p>
          A linear change of variables brings the principal part to one of three canonical forms:
        </p>
        <MD>{"u_{\\xi\\eta} \\ \\text{(hyperbolic)}, \\qquad u_{\\xi\\xi} \\ \\text{(parabolic)}, \\qquad u_{\\xi\\xi} + u_{\\eta\\eta} \\ \\text{(elliptic)}."}</MD>
        <p>
          In the hyperbolic case ξ and η are constant along the two families of <strong>characteristics</strong>, the lines of
          slope m with <M>{"A m^2 - B m + C = 0"}</M>. The type is preserved by changes of variables, because the
          discriminant is multiplied by the square of the Jacobian determinant.
        </p>
      </Theorem>

      <Example title="the three model equations">
        <p>
          The wave equation <M>{"u_{tt} - c^2 u_{xx} = 0"}</M> is hyperbolic, with characteristics x ± ct = constant, along
          which signals travel. The heat equation <M>{"u_t - k u_{xx} = 0"}</M> is parabolic, with characteristics
          t = constant. Laplace&rsquo;s equation is elliptic, with no real characteristics at all.
        </p>
      </Example>

      <Remark title="mixed type">
        <p>
          With variable coefficients the type can change from point to point. The Tricomi equation{" "}
          <M>{"y\\,u_{xx} + u_{yy} = 0"}</M>, which arises in the flow of air past a wing near the speed of sound, is elliptic
          where y &gt; 0 and hyperbolic where y &lt; 0: subsonic and supersonic flow.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "type",
      rung: "check",
      prompt: <p>What type is Laplace&rsquo;s equation <M>{"u_{xx} + u_{yy} = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["Elliptic", "Hyperbolic", "Parabolic", "Mixed"], correct: [0] },
    },
    {
      key: "heat",
      rung: "check",
      prompt: <p>Why is the heat equation parabolic?</p>,
      answer: {
        kind: "choice",
        options: ["Its only second-order term is uₓₓ, so B = C = 0 and B² − 4AC = 0.", "It has a first derivative in t.", "Its solutions spread out.", "It is linear."],
        correct: [0],
      },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, set A = 1, B = 1, C = −2. What is B² − 4AC?</p>,
      answer: { kind: "numeric", value: 9 },
    },
    {
      key: "par",
      rung: "apply",
      prompt: <p>What type is <M>{"u_{xx} + 4u_{xy} + 4u_{yy} = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["Parabolic", "Hyperbolic", "Elliptic", "It depends on the point"], correct: [0] },
    },
    {
      key: "tricomi",
      rung: "apply",
      prompt: <p>At the point (0, −2), what type is the Tricomi equation <M>{"y\\,u_{xx} + u_{yy} = 0"}</M>?</p>,
      answer: { kind: "choice", options: ["Hyperbolic", "Elliptic", "Parabolic", "Undefined"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the change of variables ξ = x + y, η = x − y turns <M>{"u_{xx} - u_{yy}"}</M> into <M>{"4u_{\\xi\\eta}"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes uₓ = u_ξ + u_η and u_y = u_ξ − u_η by the chain rule.",
          "Computes uₓₓ = u_ξξ + 2u_ξη + u_ηη and u_yy = u_ξξ − 2u_ξη + u_ηη.",
          "Subtracts to get uₓₓ − u_yy = 4u_ξη.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the canonical form <M>{"u_{\\xi\\eta} = 0"}</M> to find every solution of the one-dimensional wave equation.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Integrates u_ξη = 0 in η and then in ξ to get u = F(ξ) + G(η).",
          "Translates back, with ξ = x + ct and η = x − ct, to u = F(x + ct) + G(x − ct).",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how second-order equations are classified as hyperbolic, parabolic or elliptic, what characteristics are, and why the wave, heat and Laplace equations are the model examples of each type.",

  glimpse: (
    <p>
      Next, well-posedness: what it means for a problem to have a solution that exists, is unique and depends continuously
      on the data, and Hadamard&rsquo;s example of a problem that fails.
    </p>
  ),
};
