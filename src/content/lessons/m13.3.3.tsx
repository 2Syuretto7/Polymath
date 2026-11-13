import { M } from "@/components/Math";
import { Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { ModulusHeatViz } from "@/components/viz/ModulusHeatViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m13.3.3",
  minutes: 85,
  links: {
    revisits: ["m13.2.3", "m6.5.2", "m12.1.4"],
    foreshadows: ["m13.6.3", "m17.3.2", "m33.4.4"],
  },

  puzzle: (
    <>
      <p>
        A real function such as <M>{"1 - x^2"}</M> can have its largest value in the middle of an interval. Can the modulus of
        a holomorphic function have a peak in the middle of a disc, like the top of a hill? Picture <M>{"|f|"}</M> as a
        landscape over the plane, and look for summits.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Shade |f| over a disc and find where it is largest.</p>
      <ModulusHeatViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the maximum modulus principle">
        <p>
          Let <M>{"f"}</M> be holomorphic on a connected open set <M>{"U"}</M>. If <M>{"|f|"}</M> has a local maximum at a
          point of <M>{"U"}</M>, then <M>{"f"}</M> is constant.
        </p>
      </Theorem>

      <Proof>
        <p>
          Suppose <M>{"|f(z)| \\le |f(a)|"}</M> for <M>{"|z - a| < \\delta"}</M>. For <M>{"r < \\delta"}</M>, the mean value
          property gives{" "}
          <M>{"|f(a)| \\le \\frac{1}{2\\pi}\\int_0^{2\\pi} |f(a + re^{it})| \\, dt \\le |f(a)|"}</M>. Equality forces the
          continuous function <M>{"|f(a)| - |f(a + re^{it})| \\ge 0"}</M> to vanish, so <M>{"|f|"}</M> is constant on the disc.
          A holomorphic function of constant modulus on a disc is constant there, by the Cauchy&ndash;Riemann equations applied
          to <M>{"u^2 + v^2"}</M>. By the identity theorem, or a connectedness argument, <M>{"f"}</M> is constant on{" "}
          <M>{"U"}</M>.
        </p>
      </Proof>

      <Theorem title="maximum on the boundary">
        <p>
          If <M>{"U"}</M> is bounded and <M>{"f"}</M> is continuous on its closure and holomorphic in <M>{"U"}</M>, then{" "}
          <M>{"\\max_{\\bar U} |f|"}</M> is attained on the boundary of <M>{"U"}</M>. The maximum exists by compactness, and
          by the principle it is not attained inside unless <M>{"f"}</M> is constant.
        </p>
      </Theorem>

      <Example title="the exponential">
        <p>
          On the closed unit disc, <M>{"|e^z| = e^{\\operatorname{Re} z}"}</M> is largest where <M>{"\\operatorname{Re} z"}</M>{" "}
          is largest: at <M>{"z = 1"}</M>, with value <M>{"e"}</M>.
        </p>
      </Example>

      <Remark title="the minimum">
        <p>
          If <M>{"f"}</M> has no zeros, applying the principle to <M>{"1/f"}</M> shows that <M>{"|f|"}</M> has no interior
          minimum either, unless constant. Zeros are the only pits in the landscape. The real and imaginary parts of{" "}
          <M>{"f"}</M>, being harmonic, also obey a maximum principle, which reappears for the heat and Laplace equations.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "where",
      rung: "check",
      prompt: <p>For a non-constant <M>{"f"}</M> holomorphic on a neighbourhood of the closed unit disc, where is <M>{"\\max |f|"}</M> over the closed disc attained?</p>,
      answer: { kind: "choice", options: ["Only at the centre", "On the boundary circle", "Anywhere", "It is never attained"], correct: [1] },
    },
    {
      key: "exp",
      rung: "check",
      prompt: <p>Find the maximum of <M>{"|e^z|"}</M> over the closed unit disc, to 3 decimal places.</p>,
      answer: { kind: "numeric", value: 2.718, tolerance: 0.002 },
    },
    {
      key: "poly",
      rung: "apply",
      prompt: <p>Find the maximum of <M>{"|z^2 + 0.5|"}</M> over the closed unit disc.</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "cos",
      rung: "apply",
      prompt: <p>Find the maximum of <M>{"|\\cos z|"}</M> over the closed unit disc, to 3 decimal places. It is attained at <M>{"\\pm i"}</M>.</p>,
      answer: { kind: "numeric", value: 1.543, tolerance: 0.002 },
    },
    {
      key: "min",
      rung: "apply",
      prompt: <p>The minimum of <M>{"|z|"}</M> on the closed unit disc is at the centre, inside the disc. Why does this not contradict the minimum modulus principle?</p>,
      answer: {
        kind: "choice",
        options: [
          "Because z is not holomorphic.",
          "Because z has a zero at 0, and the minimum principle needs f to have no zeros.",
          "Because the disc is not connected.",
          "Because the minimum is on the boundary.",
        ],
        correct: [1],
      },
    },
    {
      key: "proof",
      rung: "prove",
      prompt: <p>Prove that if <M>{"|f|"}</M> has a local maximum at <M>{"a"}</M>, then <M>{"|f|"}</M> is constant on a small disc about <M>{"a"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the mean value property on circles of radius r about a.",
          "Bounds |f(a)| by the average of |f| on the circle, which is at most |f(a)|.",
          "Deduces by continuity that |f| = |f(a)| on each small circle, so on the disc.",
        ],
      },
    },
    {
      key: "schwarz",
      rung: "stretch",
      prompt: <p>Let <M>{"f"}</M> map the open unit disc into itself holomorphically with <M>{"f(0) = 0"}</M>. Show that <M>{"|f(z)| \\le |z|"}</M>.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes g(z) = f(z)/z extends holomorphically to 0, since f(0) = 0.",
          "Applies the maximum principle on |z| ≤ r to get |g| ≤ 1/r, then lets r → 1.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the maximum modulus principle, its proof from the mean value property, why the maximum over a closed region sits on the boundary, and why zeros are the only places where |f| can have an interior minimum.",

  glimpse: (
    <p>
      The stretch exercise is the Schwarz lemma, a later lesson. Maximum principles for harmonic functions and for the heat
      equation return in partial differential equations.
    </p>
  ),
};
