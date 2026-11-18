import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { VariationSumViz } from "@/components/viz/VariationSumViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m22.4.4",
  minutes: 90,
  links: {
    revisits: ["m22.4.3", "m6.5.4", "m22.4.1"],
    foreshadows: ["m22.5.1", "m22.5.2", "m27.1.2"],
  },

  puzzle: (
    <>
      <p>
        A hiker&rsquo;s altitude is recorded through a day. The net change is the final height minus the first. But how much
        climbing and descending did they do in all? For a graph that wiggles infinitely often, can that total be infinite,
        even though the graph is continuous and stays within a small band?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Add up the vertical changes over finer partitions.</p>
      <VariationSumViz />
    </>
  ),

  theory: (
    <>
      <Definition title="bounded variation">
        <p>The <strong>total variation</strong> of <M>f</M> on <M>{"[a, b]"}</M> is</p>
        <MD>{"V_a^b(f) = \\sup \\Big\\{ \\sum_{i=1}^{n} |f(x_i) - f(x_{i-1})| : a = x_0 < x_1 < \\cdots < x_n = b \\Big\\}."}</MD>
        <p><M>f</M> has <strong>bounded variation</strong> if this is finite.</p>
      </Definition>

      <Theorem title="Jordan and Lebesgue">
        <p>
          <M>f</M> has bounded variation exactly when it is a difference of two increasing functions:{" "}
          <M>{"f = V_a^x(f) - (V_a^x(f) - f)"}</M>. Lebesgue proved that monotone functions are differentiable almost
          everywhere, so functions of bounded variation are too, and they have at most countably many jumps.
        </p>
      </Theorem>

      <Definition title="absolute continuity">
        <p>
          <M>F</M> is <strong>absolutely continuous</strong> if for every <M>{"\\varepsilon > 0"}</M> there is{" "}
          <M>{"\\delta > 0"}</M> such that disjoint intervals of total length below <M>{"\\delta"}</M> have total change of{" "}
          <M>F</M> below <M>{"\\varepsilon"}</M>. The fundamental theorem for the Lebesgue integral: <M>F</M> is absolutely
          continuous on <M>{"[a, b]"}</M> exactly when <M>{"F(x) = F(a) + \\int_a^x F'"}</M> for all <M>x</M>.
        </p>
      </Definition>

      <Example title="the Cantor function">
        <p>
          The Cantor function climbs from 0 to 1, continuously and increasingly, so it has variation 1. But it is constant on
          each removed interval, so <M>{"F' = 0"}</M> almost everywhere and <M>{"\\int_0^1 F' = 0 \\ne 1"}</M>. It is not
          absolutely continuous: its measure <M>dF</M> is singular to Lebesgue measure, though it has no jumps.
        </p>
      </Example>

      <Remark title="three kinds of growth">
        <p>
          Every increasing function splits as an absolutely continuous part, a jump part and a singular continuous part like
          the Cantor function. This is the Lebesgue decomposition of the measure <M>dF</M>, and in probability it sorts
          distributions into those with densities, discrete ones and singular ones.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "jordan",
      rung: "check",
      prompt: <p>Which functions have bounded variation, by Jordan&rsquo;s theorem?</p>,
      answer: { kind: "choice", options: ["Exactly the differences of two increasing functions", "Exactly the continuous functions", "Exactly the differentiable functions", "Exactly the bounded functions"], correct: [0] },
    },
    {
      key: "ac",
      rung: "check",
      prompt: <p>Which functions satisfy F(x) = F(a) + the integral of F′ from a to x?</p>,
      answer: { kind: "choice", options: ["The absolutely continuous ones", "All continuous ones", "All increasing ones", "All functions of bounded variation"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the total variation of x − x² on [0, 1]?</p>,
      answer: { kind: "numeric", value: 0.5 },
    },
    {
      key: "sin",
      rung: "apply",
      prompt: <p>What is the total variation of sin x on [0, 2π]?</p>,
      answer: { kind: "numeric", value: 4 },
    },
    {
      key: "cantor",
      rung: "apply",
      prompt: <p>Why is the Cantor function not absolutely continuous?</p>,
      answer: { kind: "choice", options: ["Its derivative is 0 almost everywhere, yet it rises from 0 to 1", "It is not continuous", "It is not increasing", "It has infinite variation"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that an increasing function f on [a, b] has total variation f(b) − f(a).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes each |f(xᵢ) − f(xᵢ₋₁)| equals f(xᵢ) − f(xᵢ₋₁) because f is increasing.",
          "Observes the sum telescopes to f(b) − f(a) for every partition.",
          "Concludes the supremum is f(b) − f(a).",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that x sin(1/x), with value 0 at 0, does not have bounded variation on [0, 1].</p>,
      answer: {
        kind: "written",
        rubric: [
          "Uses the points xₖ = 1/((k + 1/2)π), where sin(1/x) = ±1, so |f(xₖ)| = xₖ.",
          "Bounds the variation below by a sum comparable to Σ 1/k, which diverges.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Integrable functions form a vector space, and the integral of |f| measures their size. Raising |f| to a power p gives
        a whole family of sizes, and with them the spaces at the centre of modern analysis.
      </p>
      <p>
        Next, the Lᵖ spaces: their norms, Young&rsquo;s inequality, Hölder&rsquo;s inequality for products, Minkowski&rsquo;s
        triangle inequality, and why p must be at least 1.
      </p>
    </>
  ),
};
