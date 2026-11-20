import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MollifierViz } from "@/components/viz/MollifierViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m33.3.2",
  minutes: 90,
  links: {
    revisits: ["m33.3.1", "m22.5.2", "m12.5.3"],
    foreshadows: ["m33.3.3", "m33.3.4", "m33.4.3"],
  },

  puzzle: (
    <>
      <p>
        To prove the product rule for weak derivatives directly from their definition is awkward. For smooth functions it is
        trivial. If every Sobolev function were a limit of smooth ones in the Sobolev norm, every such identity would pass
        to the limit. Can a jagged function be smoothed without losing control of its derivatives?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and shrink ε, and watch the mollification approach it.</p>
      <MollifierViz />
    </>
  ),

  theory: (
    <>
      <Definition title="mollifiers">
        <p>
          The <strong>standard mollifier</strong> is the smooth function <M>{"\\eta(x) = C e^{1/(|x|^2 - 1)}"}</M> for |x|
          &lt; 1 and 0 otherwise, with C chosen so that ∫ η = 1. Put <M>{"\\eta_\\varepsilon(x) = \\varepsilon^{-n} \\eta(x/\\varepsilon)"}</M>,
          supported in the ball of radius ε with integral 1. For locally integrable u, the{" "}
          <strong>mollification</strong> <M>{"u^\\varepsilon = \\eta_\\varepsilon * u"}</M> is defined on{" "}
          <M>{"U_\\varepsilon = \\{x \\in U : \\mathrm{dist}(x, \\partial U) > \\varepsilon\\}"}</M>.
        </p>
      </Definition>

      <Theorem title="properties of mollification">
        <p>
          <M>{"u^\\varepsilon"}</M> is smooth on <M>{"U_\\varepsilon"}</M>. It tends to u almost everywhere as ε → 0, and in{" "}
          <M>{"L^p_{\\mathrm{loc}}(U)"}</M> if u lies there with p &lt; ∞. If u has weak derivatives, then{" "}
          <M>{"D^\\alpha u^\\varepsilon = \\eta_\\varepsilon * D^\\alpha u"}</M> on <M>{"U_\\varepsilon"}</M>, so for{" "}
          <M>{"u \\in W^{k,p}(U)"}</M> with p &lt; ∞, <M>{"u^\\varepsilon \\to u"}</M> in <M>{"W^{k,p}_{\\mathrm{loc}}(U)"}</M>.
        </p>
      </Theorem>

      <Theorem title="global approximation">
        <p>
          Meyers and Serrin proved in 1964 that for p &lt; ∞, <M>{"C^\\infty(U) \\cap W^{k,p}(U)"}</M> is dense in{" "}
          <M>{"W^{k,p}(U)"}</M>, for any open U: mollify on a sequence of shells exhausting U with ever smaller ε, and glue
          with a partition of unity. Their paper was titled &lsquo;H = W&rsquo;, settling that two competing definitions of
          Sobolev space agree. If ∂U is C¹, functions smooth up to the boundary, in <M>{"C^\\infty(\\bar{U})"}</M>, are dense
          too: near the boundary, shift u inwards before mollifying.
        </p>
      </Theorem>

      <Example title="using approximation">
        <p>
          For u, v in <M>{"W^{1,p} \\cap L^\\infty"}</M>, the product rule <M>{"D(uv) = u\\,Dv + v\\,Du"}</M> holds: it is
          true for the mollifications, and both sides converge. In the same way one proves the chain rule{" "}
          <M>{"D(F(u)) = F'(u) Du"}</M> for F with bounded continuous derivative, and that{" "}
          <M>{"Du^+ = Du"}</M> almost everywhere on {"{"}u &gt; 0{"}"} and 0 elsewhere.
        </p>
      </Example>

      <Remark title="why p < ∞">
        <p>
          Approximation fails in <M>{"W^{1,\\infty}"}</M>. The function |x| lies in <M>{"W^{1,\\infty}(-1, 1)"}</M>, but a
          smooth v with <M>{"\\|v' - \\mathrm{sign}\\,x\\|_\\infty < 1"}</M> would need v′ near −1 just left of 0 and near +1
          just right of it, contradicting continuity of v′. Mollification converges in the mean, not uniformly, across a
          jump.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "moll",
      rung: "check",
      prompt: <p>Which of these is a property of the mollifier ηε?</p>,
      answer: { kind: "choice", options: ["It is smooth, supported in the ball of radius ε, with integral 1", "It is the indicator function of a ball", "It has integral ε", "It is a polynomial"], correct: [0] },
    },
    {
      key: "deriv",
      rung: "check",
      prompt: <p>How do weak derivatives interact with mollification?</p>,
      answer: { kind: "choice", options: ["The derivative of ηε ∗ u is ηε ∗ Du", "The derivative of ηε ∗ u is always 0", "Mollification destroys weak derivatives", "Du is the mollification of u"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the step function. However small you make ε, what is the largest gap between u and its mollification?</p>,
      answer: { kind: "numeric", value: 0.5, tolerance: 0.01 },
    },
    {
      key: "ms",
      rung: "apply",
      prompt: <p>What does the Meyers-Serrin theorem say?</p>,
      answer: { kind: "choice", options: ["Smooth functions in Wᵏ˒ᵖ(U) are dense in Wᵏ˒ᵖ(U), for p < ∞", "Every Sobolev function is smooth", "Wᵏ˒ᵖ is a Hilbert space", "Sobolev functions are bounded"], correct: [0] },
    },
    {
      key: "inf",
      rung: "apply",
      prompt: <p>Why can |x| not be approximated by smooth functions in W¹˒∞(−1, 1)?</p>,
      answer: { kind: "choice", options: ["A continuous derivative cannot stay uniformly close to sign x across 0", "|x| is not in W¹˒∞", "Smooth functions are not in W¹˒∞", "Mollification is not defined for bounded functions"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that if u is locally integrable, then ηε ∗ u is continuously differentiable on Uε, with derivative (Dηε) ∗ u.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the difference quotient of ηε ∗ u in direction eᵢ as an integral of the difference quotient of ηε against u.",
          "Notes that the difference quotients of ηε converge uniformly to its partial derivative, all supported in a fixed compact set.",
          "Concludes that the limit exists and equals (∂ᵢηε) ∗ u, which is continuous, and that induction gives smoothness.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use approximation to explain why the product rule D(uv) = u Dv + v Du holds for u, v in W¹˒² ∩ L∞ on an interval.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Approximates u and v by mollifications, for which the product rule is classical.",
          "Writes the defining identity against a test function and passes to the limit, using L² convergence and boundedness.",
          "Concludes the identity for u and v. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A Sobolev function is defined only up to sets of measure zero, and the boundary of a domain has measure zero. Yet
        boundary value problems need boundary values.
      </p>
      <p>Next, extensions and traces.</p>
    </>
  ),
};
