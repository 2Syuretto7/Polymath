import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { GammaViz } from "@/components/viz/GammaViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.7.1",
  minutes: 85,
  links: {
    revisits: ["m13.4.2", "m13.3.4", "m13.6.4"],
    foreshadows: ["m13.7.2", "m13.7.3", "m28.4.2"],
  },

  puzzle: (
    <>
      <p>
        The factorial <M>{"n! = 1 \\cdot 2 \\cdots n"}</M> makes sense only for whole numbers. Yet the answer to many
        questions, such as the volume of a ball in <M>{"n"}</M> dimensions, involves <M>{"(n/2)!"}</M>. What should{" "}
        <M>{"(1/2)!"}</M> be, and is there a natural answer?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Move along the real line and see how the curve meets the factorials, and what happens at 0 and below.</p>
      <GammaViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Gamma function">
        <p>For <M>{"\\operatorname{Re} z > 0"}</M>, define</p>
        <MD>{"\\Gamma(z) = \\int_0^\\infty t^{z - 1} e^{-t} \\, dt."}</MD>
        <p>
          The integral converges absolutely there and defines a holomorphic function, by differentiating under the integral
          sign or by Morera&rsquo;s theorem.
        </p>
      </Definition>

      <Theorem title="the functional equation">
        <p>
          <M>{"\\Gamma(z + 1) = z\\Gamma(z)"}</M> for <M>{"\\operatorname{Re} z > 0"}</M>, and <M>{"\\Gamma(1) = 1"}</M>. So{" "}
          <M>{"\\Gamma(n + 1) = n!"}</M> for every natural number <M>{"n"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>Integrate by parts:</p>
        <MD>{"\\Gamma(z + 1) = \\int_0^\\infty t^z e^{-t} \\, dt = \\big[-t^z e^{-t}\\big]_0^\\infty + z \\int_0^\\infty t^{z-1} e^{-t}\\, dt = z \\Gamma(z),"}</MD>
        <p>since the boundary terms vanish when <M>{"\\operatorname{Re} z > 0"}</M>. Also <M>{"\\Gamma(1) = \\int_0^\\infty e^{-t} dt = 1"}</M>.</p>
      </Proof>

      <Theorem title="meromorphic continuation">
        <p>
          <M>{"\\Gamma"}</M> extends to a meromorphic function on <M>{"\\mathbb{C}"}</M>, with simple poles at{" "}
          <M>{"0, -1, -2, \\dots"}</M> and no zeros. The residue at <M>{"-n"}</M> is <M>{"(-1)^n / n!"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          For <M>{"\\operatorname{Re} z > -N"}</M>, set{" "}
          <M>{"\\Gamma(z) = \\Gamma(z + N) / \\big(z(z+1)\\cdots(z + N - 1)\\big)"}</M>. The right side is meromorphic there
          and agrees with <M>{"\\Gamma"}</M> where both are defined, so by the identity theorem these definitions fit
          together. Near <M>{"-n"}</M> the only vanishing factor in the denominator is <M>{"z + n"}</M>, and the rest gives the
          residue.
        </p>
      </Proof>

      <Example title="the value at one half">
        <p>
          Substituting <M>{"t = u^2"}</M>,{" "}
          <M>{"\\Gamma(1/2) = 2\\int_0^\\infty e^{-u^2} du = \\sqrt{\\pi}"}</M>. So{" "}
          <M>{"(1/2)! = \\Gamma(3/2) = \\sqrt{\\pi}/2"}</M>.
        </p>
      </Example>

      <Remark title="two more identities">
        <p>
          The reflection formula <M>{"\\Gamma(z)\\Gamma(1 - z) = \\pi / \\sin \\pi z"}</M> follows from a contour integral, and
          shows again that <M>{"\\Gamma"}</M> has no zeros. Stirling&rsquo;s formula{" "}
          <M>{"\\Gamma(x) \\sim \\sqrt{2\\pi/x}\\,(x/e)^x"}</M> describes its growth. The Bohr-Mollerup theorem says{" "}
          <M>{"\\Gamma"}</M> is the only log-convex function on the positive reals with <M>{"f(x + 1) = xf(x)"}</M> and{" "}
          <M>{"f(1) = 1"}</M>, which makes it the natural extension of the factorial.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "g5",
      rung: "check",
      prompt: <p>What is <M>{"\\Gamma(5)"}</M>?</p>,
      answer: { kind: "numeric", value: 24, tolerance: 0 },
    },
    {
      key: "poles",
      rung: "check",
      prompt: <p>Where does <M>{"\\Gamma"}</M> have poles?</p>,
      answer: { kind: "choice", options: ["At 0 and the negative integers", "At the positive integers", "Nowhere", "At every integer"], correct: [0] },
    },
    {
      key: "half",
      rung: "apply",
      prompt: <p>Using <M>{"\\Gamma(1/2) = \\sqrt{\\pi}"}</M>, find <M>{"\\Gamma(5/2)"}</M> to three decimal places.</p>,
      answer: { kind: "numeric", value: 1.3293, tolerance: 0.002 },
    },
    {
      key: "res",
      rung: "apply",
      prompt: <p>What is the residue of <M>{"\\Gamma"}</M> at <M>{"-2"}</M>?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "neg",
      rung: "apply",
      prompt: <p>Use the functional equation to find <M>{"\\Gamma(-1/2)"}</M> to three decimal places.</p>,
      answer: { kind: "numeric", value: -3.5449, tolerance: 0.002 },
    },
    {
      key: "fe",
      rung: "prove",
      prompt: <p>Prove that <M>{"\\Gamma(n + 1) = n!"}</M> for every natural number <M>{"n"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Proves Γ(z + 1) = zΓ(z) by integration by parts, noting the boundary terms vanish.",
          "Computes Γ(1) = 1.",
          "Concludes by induction on n.",
        ],
      },
    },
    {
      key: "refl",
      rung: "stretch",
      prompt: <p>Use the reflection formula <M>{"\\Gamma(z)\\Gamma(1 - z) = \\pi/\\sin \\pi z"}</M> to show that <M>{"\\Gamma"}</M> never vanishes.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the right side π/sin πz is never 0.",
          "Concludes neither factor on the left can vanish at any z where both are finite, and handles the integers separately.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the Gamma function is defined by an integral, why Γ(n + 1) = n!, how the functional equation continues it to a meromorphic function with poles at 0, −1, −2, …, and why Γ(1/2) = √π.",

  glimpse: (
    <p>
      The next lesson meets the Riemann zeta function, whose functional equation involves Gamma. Later courses continue such
      functions analytically in general and use them throughout number theory.
    </p>
  ),
};
