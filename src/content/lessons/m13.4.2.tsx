import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { SingularityViz } from "@/components/viz/SingularityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.4.2",
  minutes: 90,
  links: {
    revisits: ["m13.4.1", "m13.3.1", "m13.1.4"],
    foreshadows: ["m13.4.3", "m13.5.1", "m13.6.2"],
  },

  puzzle: (
    <>
      <p>
        The functions <M>{"\\sin z / z"}</M>, <M>{"1/z^2"}</M> and <M>{"e^{1/z}"}</M> are all undefined at 0. The first
        has a hole that can be filled in. The second blows up. The third does something wilder. Are these the only
        possibilities, and how can we tell them apart?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Shrink a circle round 0 and watch |f| on it.</p>
      <SingularityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="isolated singularities">
        <p>
          If <M>{"f"}</M> is holomorphic on a punctured disc <M>{"0 < |z - a| < r"}</M>, then <M>{"a"}</M> is an isolated
          singularity, and <M>{"f"}</M> has a Laurent series <M>{"\\sum a_n (z - a)^n"}</M> there. The singularity is{" "}
          <strong>removable</strong> if <M>{"a_n = 0"}</M> for all <M>{"n < 0"}</M>; a <strong>pole of order m</strong> if{" "}
          <M>{"a_{-m} \\ne 0"}</M> and <M>{"a_n = 0"}</M> for <M>{"n < -m"}</M>; and <strong>essential</strong> if{" "}
          <M>{"a_n \\ne 0"}</M> for infinitely many negative <M>{"n"}</M>.
        </p>
      </Definition>

      <Theorem title="Riemann’s removable singularity theorem">
        <p>If <M>{"f"}</M> is bounded near an isolated singularity, the singularity is removable.</p>
      </Theorem>

      <Proof>
        <p>
          If <M>{"|f| \\le M"}</M> near <M>{"a"}</M>, then for <M>{"n \\ge 1"}</M> and small <M>{"\\rho"}</M>,{" "}
          <M>{"|a_{-n}| = \\left|\\frac{1}{2\\pi i}\\oint_{|z-a|=\\rho} f(z)(z - a)^{n-1} dz\\right| \\le M\\rho^n"}</M>, which
          tends to 0 as <M>{"\\rho \\to 0"}</M>. So all negative coefficients vanish.
        </p>
      </Proof>

      <Theorem title="poles and essential singularities">
        <p>
          <M>{"a"}</M> is a pole exactly when <M>{"|f(z)| \\to \\infty"}</M> as <M>{"z \\to a"}</M>; then{" "}
          <M>{"f(z) = g(z)/(z - a)^m"}</M> with <M>{"g"}</M> holomorphic and <M>{"g(a) \\ne 0"}</M>. If <M>{"a"}</M> is
          essential, the Casorati&ndash;Weierstrass theorem says that the values of <M>{"f"}</M> on every punctured disc about{" "}
          <M>{"a"}</M> come arbitrarily close to every complex number.
        </p>
      </Theorem>

      <Proof>
        <p>
          For Casorati&ndash;Weierstrass, suppose <M>{"|f(z) - w| \\ge \\delta"}</M> on a punctured disc. Then{" "}
          <M>{"g = 1/(f - w)"}</M> is bounded, so has a removable singularity, and <M>{"f = w + 1/g"}</M> has at worst a pole,
          not an essential singularity.
        </p>
      </Proof>

      <Example title="e to the 1/z">
        <p>
          <M>{"e^{1/z} = \\sum_{n \\ge 0} z^{-n}/n!"}</M> has infinitely many negative powers. Along the positive real axis it
          tends to infinity; along the negative real axis it tends to 0; along the imaginary axis it stays on the unit circle.
        </p>
      </Example>

      <Remark title="meromorphic functions">
        <p>
          A function holomorphic except for poles is meromorphic. Rational functions, <M>{"\\tan z"}</M> and{" "}
          <M>{"\\Gamma(z)"}</M> are examples. Picard&rsquo;s great theorem strengthens Casorati&ndash;Weierstrass: near an
          essential singularity <M>{"f"}</M> takes every value, with at most one exception, infinitely often.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sinc",
      rung: "check",
      prompt: <p>Classify the singularity of <M>{"\\sin z / z"}</M> at 0.</p>,
      answer: { kind: "choice", options: ["Removable", "A simple pole", "A pole of order 2", "Essential"], correct: [0] },
    },
    {
      key: "order",
      rung: "check",
      prompt: <p>What is the order of the pole of <M>{"\\frac{1}{z^2(z - 1)}"}</M> at 0?</p>,
      answer: { kind: "numeric", value: 2, tolerance: 0 },
    },
    {
      key: "sin3",
      rung: "apply",
      prompt: <p>What is the order of the pole of <M>{"1/\\sin^3 z"}</M> at 0?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0 },
    },
    {
      key: "ess",
      rung: "apply",
      prompt: <p>Classify the singularity of <M>{"z^3 e^{1/z}"}</M> at 0.</p>,
      answer: { kind: "choice", options: ["Removable", "A pole of order 3", "A pole of order 1", "Essential"], correct: [3] },
    },
    {
      key: "remove",
      rung: "apply",
      prompt: <p>The singularity of <M>{"(1 - \\cos z)/z^2"}</M> at 0 is removable. What value should the function take at 0?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "riemann",
      rung: "prove",
      prompt: <p>Prove that a function bounded near an isolated singularity has a removable singularity there.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes a negative coefficient a_{−n} as a contour integral round a small circle.",
          "Bounds it by M ρⁿ using the ML inequality.",
          "Lets ρ → 0 to conclude a_{−n} = 0 for every n ≥ 1.",
        ],
      },
    },
    {
      key: "ones",
      rung: "stretch",
      prompt: <p>Show that <M>{"e^{1/z} = 1"}</M> at points arbitrarily close to 0. What does this illustrate?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Finds z = 1/(2πik) for nonzero integers k, which tend to 0.",
          "Connects this to the essential singularity, where values are hit near 0, as Casorati–Weierstrass and Picard predict.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the three kinds of isolated singularity in terms of Laurent series and of how |f| behaves nearby, Riemann's removable singularity theorem, and the Casorati–Weierstrass theorem.",

  glimpse: (
    <p>
      The next lesson computes integrals round singularities with residues. The argument principle counts poles and zeros,
      and Möbius transformations are the meromorphic maps of the extended plane.
    </p>
  ),
};
