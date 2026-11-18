import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { ShrinkingAverageViz } from "@/components/viz/ShrinkingAverageViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.4.3",
  minutes: 90,
  links: {
    revisits: ["m22.4.2", "m22.2.5", "m6.7.3"],
    foreshadows: ["m22.4.4", "m22.5.1", "m22.5.3"],
  },

  puzzle: (
    <>
      <p>
        The fundamental theorem of calculus says the derivative of <M>{"\\int_a^x f"}</M> is <M>{"f(x)"}</M>, when f is
        continuous. Now take any integrable f, jumping wildly, discontinuous everywhere. The integral still makes sense. Does
        its derivative still give back f, and if so, where?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Average a function over a shrinking window around three different points.</p>
      <ShrinkingAverageViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="Lebesgue differentiation theorem">
        <p>If <M>f</M> is locally integrable on <M>{"\\mathbb{R}^n"}</M>, then for almost every <M>x</M>,</p>
        <MD>{"\\lim_{r \\to 0} \\frac{1}{\\lambda(B(x, r))} \\int_{B(x, r)} |f(y) - f(x)| \\, dy = 0."}</MD>
        <p>
          Such <M>x</M> are <strong>Lebesgue points</strong>. In particular the averages of <M>f</M> over balls shrinking to{" "}
          <M>x</M> tend to <M>{"f(x)"}</M> almost everywhere.
        </p>
      </Theorem>

      <Definition title="the maximal function">
        <p>
          The Hardy-Littlewood <strong>maximal function</strong> is{" "}
          <M>{"Mf(x) = \\sup_{r > 0} \\frac{1}{\\lambda(B(x, r))} \\int_{B(x, r)} |f|"}</M>. It satisfies the weak-type
          inequality
        </p>
        <MD>{"\\lambda(\\{Mf > \\alpha\\}) \\le \\frac{3^n}{\\alpha} \\|f\\|_1,"}</MD>
        <p>
          proved with the <strong>Vitali covering lemma</strong>: from finitely many balls one can pick disjoint ones whose
          threefold enlargements cover the union of all of them.
        </p>
      </Definition>

      <Example title="the shape of the proof">
        <p>
          For continuous <M>g</M> the theorem is easy, at every point. Given <M>f</M>, choose continuous <M>g</M> with{" "}
          <M>{"\\|f - g\\|_1"}</M> small. The set where the averages of <M>f</M> misbehave by more than <M>{"\\alpha"}</M> is
          controlled by <M>{"\\{M(f - g) > \\alpha/2\\} \\cup \\{|f - g| > \\alpha/2\\}"}</M>, whose measure is at most a
          constant times <M>{"\\|f - g\\|_1 / \\alpha"}</M>, which can be made as small as we like.
        </p>
      </Example>

      <Remark title="consequences">
        <p>
          On the line, <M>{"F(x) = \\int_a^x f"}</M> is differentiable almost everywhere with <M>{"F' = f"}</M>: the
          fundamental theorem holds for every integrable function, up to a null set. Applied to an indicator, it gives{" "}
          <strong>Lebesgue&rsquo;s density theorem</strong>: almost every point of a measurable set <M>E</M> has density 1 in{" "}
          <M>E</M>, so no measurable set is spread &lsquo;half in, half out&rsquo; everywhere.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the Lebesgue differentiation theorem say about averages of an integrable f over shrinking balls?</p>,
      answer: { kind: "choice", options: ["They tend to f(x) for almost every x", "They tend to f(x) for every x", "They tend to 0", "They always diverge at discontinuities"], correct: [0] },
    },
    {
      key: "max",
      rung: "check",
      prompt: <p>Which tool controls the maximal function in the proof?</p>,
      answer: { kind: "choice", options: ["The Vitali covering lemma", "The Hahn decomposition", "Fubini's theorem", "The Baire category theorem"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, to what value do the averages at the jump x = 0.5 tend?</p>,
      answer: { kind: "numeric", value: 0.7 },
    },
    {
      key: "dens",
      rung: "apply",
      prompt: <p>What is the density of E = [0, 1] at the point 0, that is, the limit of λ(E ∩ (−r, r)) / 2r?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "dirichlet",
      rung: "apply",
      prompt: <p>Let F(x) be the integral from 0 to x of the indicator of ℚ. Why is F′ equal to that indicator almost everywhere?</p>,
      answer: { kind: "choice", options: ["F is identically 0, and the indicator of ℚ is 0 almost everywhere", "Because the indicator is continuous", "Because ℚ is dense", "It is not"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that if f is continuous at x, the averages of f over [x − r, x + r] tend to f(x) as r → 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Writes the average minus f(x) as the average of f(y) − f(x) over the interval.",
          "Uses continuity: for ε > 0 there is δ with |f(y) − f(x)| < ε when |y − x| < δ.",
          "Concludes that for r < δ the difference is at most ε.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can the theorem only promise convergence almost everywhere, and not at every point?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that changing f at one point, or on any null set, changes f(x) there but not any average.",
          "Concludes that no statement about every point can hold for elements of L¹, which are defined only up to null sets.",
          "Any reasonable answer earns full credit, such as one using a jump.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Indefinite integrals are differentiable almost everywhere. Which other functions are? Monotone functions turn out to
        be, and so is any difference of two of them.
      </p>
      <p>
        Next, functions of bounded variation: total variation, Jordan&rsquo;s decomposition into increasing parts, absolute
        continuity, and the Cantor function, which climbs from 0 to 1 while its derivative is 0 almost everywhere.
      </p>
    </>
  ),
};
