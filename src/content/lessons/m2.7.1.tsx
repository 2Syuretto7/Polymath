import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { PartsViz } from "@/components/viz/PartsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m2.7.1",
  minutes: 85,
  links: {
    revisits: ["m2.4.2", "m2.6.3"],
    foreshadows: ["m2.7.4", "m2.9.5"],
  },

  puzzle: (
    <>
      <p>
        Substitution reverses the chain rule. The product rule is just as basic, and products are everywhere:{" "}
        <M>{"x e^x"}</M>, <M>{"x \\sin x"}</M>, <M>{"x^2 \\ln x"}</M>. None of these is visibly the derivative of
        anything.
      </p>
      <p>
        Stranger still, what is <M>{"\\int \\ln x\\,dx"}</M>? There is no product in sight. Yet the product rule settles
        it in two lines. How?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Track a point (u, v) as it moves along a curve. The rectangle from the origin to the point has area uv. The curve
        cuts the rectangle into two pieces: the area below the curve, which is <M>{"\\int v\\,du"}</M>, and the area to its
        left, which is <M>{"\\int u\\,dv"}</M>. So the two integrals add up to the change in uv, and if one is hard, the
        other might be easy.
      </p>
      <PartsViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="integration by parts">
        <p>If u and v have continuous derivatives on <M>{"[a, b]"}</M>, then</p>
        <MD>{"\\int_a^b u(x)\\,v'(x)\\,dx = \\big[u(x)\\,v(x)\\big]_a^b - \\int_a^b u'(x)\\,v(x)\\,dx."}</MD>
        <p>
          In short, <M>{"\\int u\\,dv = uv - \\int v\\,du"}</M>.
        </p>
      </Theorem>
      <Proof>
        <p>
          By the product rule, <M>{"(uv)' = u'v + uv'"}</M>. All three functions are continuous, so integrate from a to b
          and use the fundamental theorem on the left: <M>{"[uv]_a^b = \\int_a^b u'v + \\int_a^b uv'"}</M>. Rearrange.
        </p>
      </Proof>

      <Example title="the standard cases">
        <ul>
          <li>
            <M>{"\\int x e^x\\,dx"}</M>: take <M>{"u = x"}</M>, <M>{"dv = e^x dx"}</M>, so <M>{"du = dx"}</M>,{" "}
            <M>{"v = e^x"}</M>. Then <M>{"\\int x e^x\\,dx = x e^x - \\int e^x\\,dx = (x - 1)e^x + C"}</M>.
          </li>
          <li>
            <M>{"\\int \\ln x\\,dx"}</M>: take <M>{"u = \\ln x"}</M>, <M>{"dv = dx"}</M>, so{" "}
            <M>{"du = dx/x"}</M>, <M>{"v = x"}</M>. Then{" "}
            <M>{"\\int \\ln x\\,dx = x\\ln x - \\int 1\\,dx = x\\ln x - x + C"}</M>.
          </li>
          <li>
            <M>{"\\int_0^{\\pi} x\\sin x\\,dx"}</M>: take <M>{"u = x"}</M>, <M>{"v = -\\cos x"}</M>. Then the integral
            is <M>{"[-x\\cos x]_0^\\pi + \\int_0^\\pi \\cos x\\,dx = \\pi + 0 = \\pi"}</M>.
          </li>
        </ul>
      </Example>

      <Remark title="choosing u">
        <p>
          The aim is to make <M>{"\\int v\\,du"}</M> simpler than what you started with. So choose for u a factor that gets
          simpler when differentiated, such as a polynomial or a logarithm, and for dv a factor you can integrate without
          it getting worse, such as <M>{"e^x"}</M>, <M>{"\\sin x"}</M> or <M>{"\\cos x"}</M>. With the opposite choice in{" "}
          <M>{"\\int x e^x\\,dx"}</M>, you get <M>{"\\tfrac{x^2}{2}e^x - \\int \\tfrac{x^2}{2}e^x\\,dx"}</M>, which is
          worse.
        </p>
      </Remark>

      <Example title="repeating">
        <p>
          <M>{"\\int x^2 e^x\\,dx = x^2 e^x - \\int 2x e^x\\,dx"}</M>, and the last integral is the first standard case.
          So the answer is <M>{"(x^2 - 2x + 2)e^x + C"}</M>. Each application lowers the power of x by one.
        </p>
      </Example>

      <Example title="going round in a circle">
        <p>
          Let <M>{"I = \\int e^x \\sin x\\,dx"}</M>. Parts twice, with <M>{"u = \\sin x"}</M> then{" "}
          <M>{"u = \\cos x"}</M>, gives
        </p>
        <MD>{"I = e^x\\sin x - \\int e^x\\cos x\\,dx = e^x\\sin x - e^x\\cos x - I."}</MD>
        <p>
          The integral has come back. That is not a failure but an equation: <M>{"2I = e^x(\\sin x - \\cos x)"}</M>, so{" "}
          <M>{"I = \\tfrac{1}{2}e^x(\\sin x - \\cos x) + C"}</M>.
        </p>
      </Example>

      <Remark title="a reduction formula">
        <p>
          Parts can relate a whole family of integrals. For <M>{"I_n = \\int_0^1 x^n e^{-x}\\,dx"}</M>, one application gives{" "}
          <M>{"I_n = n I_{n-1} - e^{-1}"}</M>. On <M>{"[0, \\infty)"}</M>, where the boundary term vanishes, the same
          calculation gives <M>{"\\int_0^\\infty x^n e^{-x}\\,dx = n!"}</M>, a first meeting with the gamma function, once
          integrals over infinite intervals are defined.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "choose",
      rung: "check",
      prompt: (
        <p>
          For <M>{"\\int x\\cos x\\,dx"}</M>, which choice of u makes integration by parts work well?
        </p>
      ),
      answer: { kind: "choice", options: ["u = x", "u = cos x", "u = x cos x", "u = 1"], correct: [0] },
    },
    {
      key: "def",
      rung: "check",
      prompt: (
        <p>
          Find <M>{"\\int_0^1 x e^x\\,dx"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "cosine",
      rung: "apply",
      prompt: (
        <p>
          Find the antiderivative F of <M>{"x\\cos x"}</M> with <M>{"F(0) = 0"}</M>.
        </p>
      ),
      answer: { kind: "expression", value: "x sin(x) + cos(x) - 1", variables: ["x"] },
    },
    {
      key: "lnint",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_1^e \\ln x\\,dx"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 1 },
    },
    {
      key: "square",
      rung: "apply",
      prompt: (
        <p>
          Find <M>{"\\int_1^e x\\ln x\\,dx"}</M>. (Give a decimal.)
        </p>
      ),
      answer: { kind: "numeric", value: (Math.E * Math.E + 1) / 4, tolerance: 0.001 },
    },
    {
      key: "reduction",
      rung: "prove",
      prompt: (
        <p>
          Let <M>{"I_n = \\int_0^1 x^n e^{-x}\\,dx"}</M>. Use integration by parts to prove that{" "}
          <M>{"I_n = n I_{n-1} - e^{-1}"}</M> for <M>{"n \\ge 1"}</M>, and use it to find <M>{"I_1"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes u = xⁿ and dv = e^(−x) dx, so du = n xⁿ⁻¹ dx and v = −e^(−x).",
          "Evaluates the boundary term [−xⁿ e^(−x)] from 0 to 1 as −e^(−1), and gets the formula.",
          "Finds I₀ = 1 − e^(−1), so I₁ = 1 − 2e^(−1).",
        ],
      },
    },
    {
      key: "wallis",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"S_n = \\int_0^{\\pi/2} \\sin^n x\\,dx"}</M>. Writing <M>{"\\sin^n x = \\sin^{n-1}x \\cdot \\sin x"}</M>,
          use parts and <M>{"\\cos^2 x = 1 - \\sin^2 x"}</M> to show that <M>{"S_n = \\tfrac{n-1}{n} S_{n-2}"}</M>. Then
          find <M>{"S_2"}</M> and <M>{"S_4"}</M>.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes u = sinⁿ⁻¹x and dv = sin x dx, and notes that the boundary term vanishes at 0 and π/2.",
          "Arrives at S_n = (n − 1)(S_(n−2) − S_n), and solves for S_n.",
          "Uses S₀ = π/2 to get S₂ = π/4 and S₄ = 3π/16.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how integration by parts comes from the product rule, how to choose which factor to differentiate, and why an integral that comes back can still be found.",

  glimpse: (
    <p>
      Integration by parts is one of the most used tools in analysis. Later in this course it gives Taylor&rsquo;s theorem
      with an exact remainder, and the gamma function once infinite intervals are allowed. In Graduate PDE it becomes the
      idea of a weak derivative, where derivatives are moved from one function onto another.
    </p>
  ),
};
