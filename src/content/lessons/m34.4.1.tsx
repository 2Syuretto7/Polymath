import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MaximalFnViz } from "@/components/viz/MaximalFnViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m34.4.1",
  minutes: 90,
  links: {
    revisits: ["m34.3.2", "m22.4.3", "m22.1.4"],
    foreshadows: ["m34.4.2", "m34.4.3", "m36.4.2"],
  },

  puzzle: (
    <>
      <p>
        Average an integrable function over smaller and smaller intervals around x. For a continuous function the
        averages tend to f(x). For a merely integrable one they still do, for almost every x. How can a limit be shown to
        exist almost everywhere, when nothing is known about f at any particular point?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a function and a height t, and compare the size of the set where Mf exceeds t with the weak bound.</p>
      <MaximalFnViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the maximal function">
        <p>
          For f locally integrable on <M>{"\\mathbb{R}^n"}</M>, the <strong>Hardy–Littlewood maximal function</strong>{" "}
          is <M>{"Mf(x) = \\sup_{r > 0} \\frac{1}{|B(x, r)|} \\int_{B(x, r)} |f(y)|\\, dy"}</M>. It is the worst average of
          |f| at x, over all scales at once.
        </p>
      </Definition>

      <Theorem title="the maximal theorem (Hardy and Littlewood 1930, Wiener 1939)">
        <p>
          M is of weak type (1, 1): <M>{"|\\{Mf > t\\}| \\le 3^n \\|f\\|_1 / t"}</M>. It is bounded on{" "}
          <M>{"L^\\infty"}</M> with norm 1, and so, by Marcinkiewicz interpolation, bounded on <M>{"L^p"}</M> for every{" "}
          <M>{"1 < p \\le \\infty"}</M>. It is not bounded on <M>{"L^1"}</M>.
        </p>
      </Theorem>

      <Remark title="the Vitali covering lemma">
        <p>
          From any finite collection of balls one can choose disjoint balls whose threefold enlargements cover the union:
          take the largest ball, discard those meeting it, and repeat. If K is a compact part of <M>{"\\{Mf > t\\}"}</M>,
          each point of K has a ball on which the average exceeds t; choosing disjoint ones gives{" "}
          <M>{"|K| \\le 3^n \\sum |B_i| \\le 3^n \\|f\\|_1 / t"}</M>.
        </p>
      </Remark>

      <Example title="a box">
        <p>
          For f the indicator of <M>{"[-\\tfrac12, \\tfrac12]"}</M>, the best interval centred at x with{" "}
          <M>{"|x| > \\tfrac12"}</M> just covers the box, so <M>{"Mf(x) = 1/(2|x| + 1)"}</M>. This decays like 1/|x|, so Mf is
          not integrable, yet <M>{"|\\{Mf > t\\}| = 1/t - 1"}</M> for t &lt; 1: weak type (1, 1) exactly.
        </p>
      </Example>

      <Remark title="Lebesgue differentiation">
        <p>
          The averages converge to f(x) for continuous f. For general <M>{"f \\in L^1"}</M>, write f = g + h with g continuous
          and <M>{"\\|h\\|_1"}</M> small. The amount by which the averages fail to converge is at most 2Mh + 2|h|, and the
          maximal theorem makes the set where this exceeds any ε as small as we like. The same pattern, a maximal
          inequality plus a dense class, proves almost-everywhere convergence throughout analysis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "weak",
      rung: "check",
      prompt: <p>What does the weak type (1, 1) inequality for M say?</p>,
      answer: { kind: "choice", options: ["The set where Mf exceeds t has measure at most a constant times ‖f‖₁/t", "‖Mf‖₁ is at most a constant times ‖f‖₁", "Mf is bounded whenever f is integrable", "Mf equals |f| almost everywhere"], correct: [0] },
    },
    {
      key: "int",
      rung: "check",
      prompt: <p>If f is integrable on ℝ and not zero almost everywhere, is Mf integrable?</p>,
      answer: { kind: "choice", options: ["Never", "Always", "Only if f is bounded", "Only if f is continuous"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the box and t = 0.5. What is the measure of the set where Mf &gt; t?</p>,
      answer: { kind: "numeric", value: 1, tolerance: 0.03 },
    },
    {
      key: "val",
      rung: "apply",
      prompt: <p>For f the indicator of [−½, ½], what is Mf(1.5)?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "bound",
      rung: "apply",
      prompt: <p>On ℝ, with constant 3, what bound does the weak inequality give for the measure of the set where Mf &gt; 4, when ‖f‖₁ = 2?</p>,
      answer: { kind: "numeric", value: 1.5, tolerance: 0.001 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that ‖Mf‖∞ ≤ ‖f‖∞.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that |f| ≤ ‖f‖∞ almost everywhere, so each average of |f| over a ball is at most ‖f‖∞.",
          "Takes the supremum over r to get Mf(x) ≤ ‖f‖∞ for every x.",
          "Concludes ‖Mf‖∞ ≤ ‖f‖∞.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that if f on ℝ is integrable and not zero almost everywhere, then Mf is not integrable.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Chooses R with c = ∫ over [−R, R] of |f| positive.",
          "For |x| > R, averages over the interval of radius |x| + R centred at x to get Mf(x) ≥ c/(2(|x| + R)).",
          "Concludes that Mf decays no faster than a multiple of 1/|x|, which is not integrable. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The proof of the maximal theorem chose disjoint balls on which f is large. A sharper version of the same stopping
        argument splits any integrable function into a bounded part and pieces with mean zero on separate cubes.
      </p>
      <p>Next, Calderón–Zygmund theory.</p>
    </>
  ),
};
