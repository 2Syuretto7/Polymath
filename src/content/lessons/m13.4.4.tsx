import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SemicircleViz } from "@/components/viz/SemicircleViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.4.4",
  minutes: 95,
  links: {
    revisits: ["m13.4.3", "m6.7.3", "m13.2.1"],
    foreshadows: ["m13.7.1", "m13.7.2", "m13.5.4"],
  },

  puzzle: (
    <>
      <p>
        The integral <M>{"\\int_{-\\infty}^{\\infty} \\frac{\\cos x}{1 + x^2} dx"}</M> has no elementary antiderivative to
        work with, yet its value is exactly <M>{"\\pi/e"}</M>. How can a detour through the complex plane compute a real
        integral that real methods cannot reach?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Grow the semicircle. Watch the arc&rsquo;s contribution vanish while the total stays fixed.</p>
      <SemicircleViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="rational integrands">
        <p>
          Let <M>{"f = p/q"}</M> be rational, with <M>{"\\deg q \\ge \\deg p + 2"}</M> and no real poles. Then
        </p>
        <MD>{"\\int_{-\\infty}^{\\infty} f(x) \\, dx = 2\\pi i \\sum_{\\operatorname{Im} a > 0} \\operatorname{Res}(f, a)."}</MD>
      </Theorem>

      <Proof>
        <p>
          Close the segment <M>{"[-R, R]"}</M> with the upper semicircle <M>{"\\Gamma_R"}</M>. For large <M>{"R"}</M> the
          contour encloses every pole in the upper half-plane, so the residue theorem gives the sum. On{" "}
          <M>{"\\Gamma_R"}</M>, <M>{"|f| \\le C/R^2"}</M>, and its length is <M>{"\\pi R"}</M>, so its integral is at most{" "}
          <M>{"\\pi C/R \\to 0"}</M>.
        </p>
      </Proof>

      <Example title="two classics">
        <p>
          <M>{"\\frac{1}{1 + z^2}"}</M> has one pole above the axis, at <M>{"i"}</M>, with residue{" "}
          <M>{"\\frac{1}{2i}"}</M>, so <M>{"\\int \\frac{dx}{1 + x^2} = \\pi"}</M>. For{" "}
          <M>{"\\frac{\\cos x}{1 + x^2}"}</M>, integrate <M>{"\\frac{e^{iz}}{1 + z^2}"}</M>: on the upper arc{" "}
          <M>{"|e^{iz}| = e^{-\\operatorname{Im} z} \\le 1"}</M>, so the same argument works, and the residue at <M>{"i"}</M>{" "}
          is <M>{"\\frac{e^{-1}}{2i}"}</M>. Taking real parts, the integral is <M>{"\\pi/e"}</M>.
        </p>
      </Example>

      <Theorem title="trigonometric integrals">
        <p>
          For an integral over <M>{"[0, 2\\pi]"}</M> of a rational function of <M>{"\\cos\\theta"}</M> and{" "}
          <M>{"\\sin\\theta"}</M>, substitute <M>{"z = e^{i\\theta}"}</M>:{" "}
          <M>{"\\cos\\theta = \\frac{1}{2}(z + z^{-1})"}</M>, <M>{"\\sin\\theta = \\frac{1}{2i}(z - z^{-1})"}</M> and{" "}
          <M>{"d\\theta = \\frac{dz}{iz}"}</M>. The integral becomes a contour integral round the unit circle. For example{" "}
          <M>{"\\int_0^{2\\pi} \\frac{d\\theta}{2 + \\cos\\theta} = \\frac{2\\pi}{\\sqrt 3}"}</M>.
        </p>
      </Theorem>

      <Remark title="Jordan’s lemma and beyond">
        <p>
          For integrands like <M>{"\\frac{x \\sin x}{1 + x^2}"}</M>, which decay only like 1/x, a sharper estimate called
          Jordan&rsquo;s lemma still kills the arc. Keyhole contours handle <M>{"x^{a}"}</M> and <M>{"\\log x"}</M>, and
          rectangles handle integrands periodic in the imaginary direction.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "basic",
      rung: "check",
      prompt: <p>Evaluate <M>{"\\int_{-\\infty}^{\\infty} \\frac{dx}{1 + x^2}"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "quartic",
      rung: "check",
      prompt: <p>Evaluate <M>{"\\int_{-\\infty}^{\\infty} \\frac{dx}{1 + x^4}"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 2.221, tolerance: 0.002 },
    },
    {
      key: "cos",
      rung: "apply",
      prompt: <p>Evaluate <M>{"\\int_{-\\infty}^{\\infty} \\frac{\\cos x}{1 + x^2} dx"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.156, tolerance: 0.002 },
    },
    {
      key: "trig",
      rung: "apply",
      prompt: <p>Evaluate <M>{"\\int_0^{2\\pi} \\frac{d\\theta}{2 + \\cos\\theta}"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 3.628, tolerance: 0.002 },
    },
    {
      key: "nine",
      rung: "apply",
      prompt: <p>Evaluate <M>{"\\int_{-\\infty}^{\\infty} \\frac{dx}{x^2 + 9}"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 1.047, tolerance: 0.002 },
    },
    {
      key: "arc",
      rung: "prove",
      prompt: <p>Prove that the integral of <M>{"\\frac{1}{1 + z^2}"}</M> over the upper semicircle of radius <M>{"R > 1"}</M> tends to 0 as <M>{"R \\to \\infty"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Bounds |1 + z²| ≥ R² − 1 on the arc by the reverse triangle inequality.",
          "Uses the ML inequality with length πR to get the bound πR/(R² − 1).",
          "Notes the bound tends to 0.",
        ],
      },
    },
    {
      key: "square",
      rung: "stretch",
      prompt: <p>Evaluate <M>{"\\int_{-\\infty}^{\\infty} \\frac{dx}{(1 + x^2)^2}"}</M> using a residue at a double pole.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Computes the residue at i as the derivative of 1/(z + i)², giving −2/(2i)³ = 1/(4i).",
          "Multiplies by 2πi to get π/2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how to evaluate a real integral over the whole line by closing with a semicircle, why the arc's contribution vanishes, how to handle cos x with e^{iz}, and how the substitution z = e^{iθ} handles trigonometric integrals.",

  glimpse: (
    <p>
      The Gamma and zeta functions at the end of the course are defined by real integrals and continued by these methods.
      Keyhole contours need a branch of the logarithm, the subject of a later lesson.
    </p>
  ),
};
