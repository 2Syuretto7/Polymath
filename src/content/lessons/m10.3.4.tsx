import { M, MD } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ResonanceViz } from "@/components/viz/ResonanceViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.3.4",
  minutes: 90,
  links: {
    revisits: ["m10.3.1", "m10.3.2", "m10.3.3"],
    foreshadows: ["m10.4.3", "m10.5.3", "m17.4.1"],
  },

  puzzle: (
    <>
      <p>
        A child on a swing can go higher and higher with small pushes, if the pushes come at the right moments. Push at the
        wrong rhythm and the swing hardly moves. How does the size of the response depend on the rhythm of the push, and what
        limits it?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Change the forcing frequency and the damping. Watch the dot on the response curve and the motion it produces, and find
        where a small push gives the largest swing.
      </p>
      <ResonanceViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="steady-state amplitude">
        <p>
          For <M>{"y'' + by' + \\omega_0^2y = F\\cos\\omega t"}</M> with <M>{"b > 0"}</M>, every solution approaches a
          steady oscillation at the forcing frequency, with amplitude
        </p>
        <MD>{"A(\\omega) = \\frac{F}{\\sqrt{(\\omega_0^2 - \\omega^2)^2 + b^2\\omega^2}}."}</MD>
      </Theorem>

      <Proof>
        <p>
          Solve the complex equation <M>{"z'' + bz' + \\omega_0^2z = Fe^{i\\omega t}"}</M> with <M>{"z = Ce^{i\\omega t}"}</M>:{" "}
          <M>{"C(\\omega_0^2 - \\omega^2 + ib\\omega) = F"}</M>. The real part of <M>{"z"}</M> solves the real equation, and
          its amplitude is <M>{"|C|"}</M>, which is the formula. The homogeneous solutions decay since <M>{"b > 0"}</M>.
        </p>
      </Proof>

      <Remark title="where is the peak?">
        <p>
          Minimising <M>{"(\\omega_0^2 - \\omega^2)^2 + b^2\\omega^2"}</M> in <M>{"\\omega^2"}</M> gives the peak at{" "}
          <M>{"\\omega = \\sqrt{\\omega_0^2 - b^2/2}"}</M> when <M>{"b^2 < 2\\omega_0^2"}</M>. Small damping puts the peak near{" "}
          <M>{"\\omega_0"}</M>, with height about <M>{"F/(b\\omega_0)"}</M>.
        </p>
      </Remark>

      <Theorem title="undamped resonance">
        <p>
          <M>{"y'' + \\omega_0^2y = F\\cos\\omega_0t"}</M> has the particular solution{" "}
          <M>{"y_p = \\dfrac{F}{2\\omega_0}\\,t\\sin\\omega_0t"}</M>, which grows without bound.
        </p>
      </Theorem>

      <Proof>
        <p>
          Here <M>{"p(r) = r^2 + \\omega_0^2"}</M> has the root <M>{"i\\omega_0"}</M>, so by the modification rule{" "}
          <M>{"z_p = Fte^{i\\omega_0t}/p'(i\\omega_0) = Fte^{i\\omega_0t}/(2i\\omega_0)"}</M>. Its real part is{" "}
          <M>{"\\frac{F}{2\\omega_0}t\\sin\\omega_0t"}</M>.
        </p>
      </Proof>

      <Example title="beats">
        <p>
          Undamped, with <M>{"\\omega \\ne \\omega_0"}</M>, from rest:{" "}
          <M>{"y = \\frac{F(\\cos\\omega t - \\cos\\omega_0t)}{\\omega_0^2 - \\omega^2} = \\frac{2F}{\\omega_0^2 - \\omega^2}\\sin\\frac{(\\omega_0 - \\omega)t}{2}\\,\\sin\\frac{(\\omega_0 + \\omega)t}{2}"}</M>.
          A fast oscillation sits inside a slow envelope: the swell and fade heard when two nearly equal notes sound together.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "what",
      rung: "check",
      prompt: <p>What is resonance?</p>,
      answer: {
        kind: "choice",
        options: [
          "A large response when the forcing frequency is near the natural frequency",
          "Any oscillation that decays",
          "The response to a constant force",
          "The vanishing of the Wronskian",
        ],
        correct: [0],
      },
    },
    {
      key: "nat",
      rung: "check",
      prompt: <p>What is the natural angular frequency <M>{"\\omega_0"}</M> of <M>{"y'' + 16y = 0"}</M>?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.001 },
    },
    {
      key: "amp",
      rung: "apply",
      prompt: <p>With <M>{"\\omega_0 = 1"}</M>, <M>{"b = 0.5"}</M> and <M>{"F = 1"}</M>, what is the steady amplitude when <M>{"\\omega = 1"}</M>?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0.001 },
    },
    {
      key: "peak",
      rung: "apply",
      prompt: <p>With <M>{"\\omega_0 = 1"}</M> and <M>{"b = 1"}</M>, at what forcing frequency is the amplitude largest?</p>,
      answer: { kind: "numeric", value: Math.SQRT1_2, tolerance: 0.002 },
    },
    {
      key: "grow",
      rung: "apply",
      prompt: <p>Which is a particular solution of <M>{"y'' + 4y = \\cos 2t"}</M>?</p>,
      answer: { kind: "choice", options: ["(1/4) t sin 2t", "(1/4) cos 2t", "t cos 2t", "(1/2) sin 2t"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Derive the steady-state amplitude <M>{"A(\\omega)"}</M> for <M>{"y'' + by' + \\omega_0^2y = F\\cos\\omega t"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Replaces cos ωt by e^(iωt) and tries z = Ce^(iωt).",
          "Finds C = F/(ω₀² − ω² + ibω).",
          "Takes the modulus to get the amplitude.",
        ],
      },
    },
    {
      key: "bridge",
      rung: "stretch",
      prompt: <p>Marching soldiers are often told to break step when crossing a bridge. Explain why, using this lesson.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Identifies the marching rhythm as periodic forcing.",
          "Explains that forcing near a natural frequency of the bridge can build a large oscillation, limited only by damping.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the steady-state amplitude of a forced damped oscillator and how to derive it, where the peak lies, why undamped forcing at the natural frequency grows without bound, and what beats are.",

  glimpse: (
    <p>
      Systems of equations come next, with phase portraits in the plane. Nonlinear oscillators can settle onto limit cycles,
      and Fourier series break any periodic forcing into the sinusoids studied here.
    </p>
  ),
};
