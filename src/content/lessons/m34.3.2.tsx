import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DistributionFnViz } from "@/components/viz/DistributionFnViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.3.2",
  minutes: 90,
  links: {
    revisits: ["m34.3.1", "m22.3.2", "m22.2.2"],
    foreshadows: ["m34.4.1", "m34.4.2", "m34.4.3"],
  },

  puzzle: (
    <>
      <p>
        The function 1/|x| on [−1, 1] has infinite integral, yet it is only barely too big: the set where it exceeds t
        has length exactly 2/t. Is there a useful notion of size that sees this function as finite, and can operators that
        are only bounded in this weak sense still be bounded on Lᵖ?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a height t, and compare the size of the set where it exceeds t with its integral.</p>
      <DistributionFnViz />
    </>
  ),

  theory: (
    <>
      <Definition title="distribution function and weak Lᵖ">
        <p>
          The <strong>distribution function</strong> of f is <M>{"\\lambda_f(t) = \\mu\\{x : |f(x)| > t\\}"}</M>. By the{" "}
          <strong>layer-cake formula</strong>, <M>{"\\|f\\|_p^p = p\\int_0^\\infty t^{p-1}\\lambda_f(t)\\, dt"}</M>. The space{" "}
          <strong>weak <M>{"L^p"}</M></strong> consists of f with{" "}
          <M>{"\\sup_t t^p \\lambda_f(t) < \\infty"}</M>. By Chebyshev&rsquo;s inequality,{" "}
          <M>{"t^p\\lambda_f(t) \\le \\|f\\|_p^p"}</M>, so <M>{"L^p"}</M> lies inside weak <M>{"L^p"}</M>.
        </p>
      </Definition>

      <Definition title="weak type">
        <p>
          An operator T is <strong>sublinear</strong> if <M>{"|T(f + g)| \\le |Tf| + |Tg|"}</M> and{" "}
          <M>{"|T(cf)| = |c||Tf|"}</M>. It is of <strong>weak type (p, p)</strong> if{" "}
          <M>{"\\lambda_{Tf}(t) \\le (C\\|f\\|_p / t)^p"}</M> for all f and t &gt; 0.
        </p>
      </Definition>

      <Theorem title="the Marcinkiewicz interpolation theorem">
        <p>
          Let <M>{"1 \\le p_0 < p_1 \\le \\infty"}</M>, and let T be sublinear, of weak type{" "}
          <M>{"(p_0, p_0)"}</M> and of weak type <M>{"(p_1, p_1)"}</M> (for <M>{"p_1 = \\infty"}</M>, simply bounded on{" "}
          <M>{"L^\\infty"}</M>). Then T is bounded on <M>{"L^p"}</M> for every <M>{"p_0 < p < p_1"}</M>.
        </p>
      </Theorem>

      <Remark title="the idea of the proof">
        <p>
          For each height t, split f into a tall part <M>{"f\\mathbf 1_{|f| > t}"}</M>, which lies in{" "}
          <M>{"L^{p_0}"}</M>, and a short part, which lies in <M>{"L^{p_1}"}</M>. Apply the weak bounds to each part, so
          that <M>{"\\lambda_{Tf}(2t)"}</M> is controlled, and integrate over t with the layer-cake formula. The splitting
          depends on t, which is why linearity is not needed.
        </p>
      </Remark>

      <Example title="the maximal function">
        <p>
          The Hardy–Littlewood maximal function, met in the next chapter, is sublinear, bounded on{" "}
          <M>{"L^\\infty"}</M>, and of weak type (1, 1) but not strong type (1, 1). Marcinkiewicz then gives boundedness
          on <M>{"L^p"}</M> for every p &gt; 1.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "dist",
      rung: "check",
      prompt: <p>What does the distribution function λ(t) of f measure?</p>,
      answer: { kind: "choice", options: ["The measure of the set where |f| exceeds t", "The value of f at t", "The integral of f up to t", "The number of zeros of f − t"], correct: [0] },
    },
    {
      key: "lin",
      rung: "check",
      prompt: <p>Which hypothesis of Riesz–Thorin does Marcinkiewicz relax, besides strong bounds?</p>,
      answer: { kind: "choice", options: ["Linearity: sublinear operators are allowed", "Measurability", "Finiteness of the measure", "Completeness of Lᵖ"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, for f = 1/|x| and t = 4, what is λ(t)?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "cheb",
      rung: "apply",
      prompt: <p>f = 1/√|x| on [−1, 1] has integral 4. What upper bound does Chebyshev&rsquo;s inequality give for λ(8)?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.001 },
    },
    {
      key: "weak",
      rung: "apply",
      prompt: <p>Which function on [−1, 1] is in weak L¹ but not in L¹?</p>,
      answer: { kind: "choice", options: ["1/|x|", "1/√|x|", "1/|x|²", "The constant 1"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Chebyshev&rsquo;s inequality: t · λ(t) ≤ ∫|f| for every t &gt; 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that |f| ≥ t on the set E where |f| > t.",
          "Writes ∫|f| ≥ ∫ over E of |f| ≥ t · μ(E).",
          "Concludes t · λ(t) ≤ ∫|f|.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Prove the layer-cake formula ∫|f| = ∫ λ(t) dt over t from 0 to ∞.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes |f(x)| as the integral from 0 to ∞ of the indicator that t < |f(x)|.",
          "Integrates over x and swaps the integrals by Tonelli.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The tool is ready. The operator it was made for averages |f| over every interval around a point and takes the
        largest average. It controls almost everything in real analysis, from differentiation to singular integrals.
      </p>
      <p>Next, the Hardy–Littlewood maximal function.</p>
    </>
  ),
};
