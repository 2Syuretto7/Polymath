import { M, MD } from "@/components/Math";
import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { BranchCutViz } from "@/components/viz/BranchCutViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.5.4",
  minutes: 85,
  links: {
    revisits: ["m13.2.1", "m13.1.1", "m13.4.4"],
    foreshadows: ["m13.6.2", "m13.7.1", "m13.7.2"],
  },

  puzzle: (
    <>
      <p>
        On the positive reals, log is the inverse of exp. In the plane, <M>{"e^z"}</M> takes every nonzero value infinitely
        often, since <M>{"e^{z + 2\\pi i} = e^z"}</M>. So which of the infinitely many solutions of <M>{"e^w = z"}</M>{" "}
        should <M>{"\\log z"}</M> be, and can the choice be made continuously?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Send the point round 0 and compare the continuously followed argument with a branch.</p>
      <BranchCutViz />
    </>
  ),

  theory: (
    <>
      <Definition title="a branch of the logarithm">
        <p>
          A branch of <M>{"\\log"}</M> on an open set <M>{"U \\subseteq \\mathbb{C} \\setminus \\{0\\}"}</M> is a continuous
          function <M>{"L"}</M> on <M>{"U"}</M> with <M>{"e^{L(z)} = z"}</M>. Then <M>{"L(z) = \\ln|z| + i\\theta(z)"}</M>{" "}
          where <M>{"\\theta"}</M> is a continuous choice of argument. Any two branches on a connected set differ by a
          constant <M>{"2\\pi i k"}</M>.
        </p>
      </Definition>

      <Example title="the principal branch">
        <p>
          On <M>{"\\mathbb{C}"}</M> minus the negative real axis and 0, <M>{"\\operatorname{Log} z = \\ln|z| + i\\operatorname{Arg} z"}</M>{" "}
          with <M>{"\\operatorname{Arg} z \\in (-\\pi, \\pi)"}</M>. It is holomorphic with derivative <M>{"1/z"}</M>. For
          example <M>{"\\operatorname{Log} i = i\\pi/2"}</M>, and, extending Arg to <M>{"\\pi"}</M> on the cut,{" "}
          <M>{"\\operatorname{Log}(-1) = i\\pi"}</M>.
        </p>
      </Example>

      <Theorem title="existence">
        <p>
          On a simply connected open set <M>{"U"}</M> not containing 0, a holomorphic branch of <M>{"\\log"}</M> exists:
        </p>
        <MD>{"L(z) = L_0 + \\int_{z_0}^{z} \\frac{dw}{w},"}</MD>
        <p>
          where <M>{"e^{L_0} = z_0"}</M>. The integral does not depend on the path, by Cauchy&rsquo;s theorem, and{" "}
          <M>{"\\frac{d}{dz}\\big(z e^{-L(z)}\\big) = 0"}</M> shows <M>{"e^{L} = z"}</M>. On a set containing a loop round 0
          there is no branch, since the integral of <M>{"1/w"}</M> round the loop is <M>{"2\\pi i"}</M>.
        </p>
      </Theorem>

      <Remark title="powers and pitfalls">
        <p>
          Powers are defined by <M>{"z^a = e^{a \\log z}"}</M>, so they inherit the choice of branch: the principal value of{" "}
          <M>{"i^i"}</M> is <M>{"e^{-\\pi/2}"}</M>, a real number. Familiar rules can fail:{" "}
          <M>{"\\operatorname{Log}((-1)(-1)) = 0"}</M>, but{" "}
          <M>{"\\operatorname{Log}(-1) + \\operatorname{Log}(-1) = 2\\pi i"}</M>. Riemann&rsquo;s idea was to glue the
          branches into one surface, spiralling above the plane, on which log is a single function.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "minus1",
      rung: "check",
      prompt: <p>Give the imaginary part of <M>{"\\operatorname{Log}(-1)"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 3.142, tolerance: 0.002 },
    },
    {
      key: "ii",
      rung: "check",
      prompt: <p>Compute the principal value of <M>{"i^i"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 0.208, tolerance: 0.002 },
    },
    {
      key: "third",
      rung: "apply",
      prompt: <p>Give the imaginary part of <M>{"\\operatorname{Log}(-1 - i)"}</M> to 3 decimal places.</p>,
      answer: { kind: "numeric", value: -2.356, tolerance: 0.002 },
    },
    {
      key: "sum",
      rung: "apply",
      prompt: <p>Give the imaginary part of <M>{"\\operatorname{Log}(-1) + \\operatorname{Log}(-1)"}</M> to 3 decimal places, and compare it with <M>{"\\operatorname{Log}(1) = 0"}</M>.</p>,
      answer: { kind: "numeric", value: 6.283, tolerance: 0.002 },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Why is there no continuous logarithm on <M>{"\\mathbb{C} \\setminus \\{0\\}"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because following the argument once round 0 increases it by 2π, so it cannot return to its starting value.",
          "Because e^z is not continuous.",
          "Because ln|z| is undefined.",
          "Because the plane is not open.",
        ],
        correct: [0],
      },
    },
    {
      key: "exist",
      rung: "prove",
      prompt: <p>Prove that a holomorphic branch of log exists on any simply connected open set not containing 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines L as a constant plus the integral of 1/w from a base point, path-independent by Cauchy’s theorem.",
          "Shows L′ = 1/z and that z e^{−L(z)} has zero derivative, hence is constant.",
          "Chooses the constant so that e^{L} = z.",
        ],
      },
    },
    {
      key: "sqrt",
      rung: "stretch",
      prompt: <p>Define <M>{"\\sqrt z"}</M> using the principal branch of log. What happens to <M>{"\\sqrt z"}</M> as <M>{"z"}</M> crosses the negative real axis?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Defines √z = e^{(1/2) Log z} = √|z| e^{i Arg z / 2}.",
          "Notes that crossing the cut changes Arg by 2π, so √z jumps to its negative.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend why the complex logarithm has many values, what a branch is, why a branch exists on a simply connected set avoiding 0 but not on a loop round 0, and how powers inherit the choice.",

  glimpse: (
    <p>
      Möbius maps and conformal maps often need square roots and logarithms. The Gamma and zeta functions are defined with{" "}
      <M>{"t^{z}"}</M> and <M>{"n^{-z}"}</M>, which are exponentials of logarithms.
    </p>
  ),
};
