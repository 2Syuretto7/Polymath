import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { PeriodicPointsViz } from "@/components/viz/PeriodicPointsViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.5.3",
  minutes: 90,
  links: {
    revisits: ["m36.5.2", "m36.2.4", "m36.1.2"],
    foreshadows: ["m28.1.1", "m33.1.1", "p32.1.1"],
  },

  puzzle: (
    <>
      <p>
        In 1975 Li and Yorke published a paper called &lsquo;Period three implies chaos&rsquo;, and the word entered
        mathematics. But what exactly had they proved? Sensitive dependence, dense periodic orbits, positive entropy and
        positive Lyapunov exponents have all been offered as the definition of chaos. Do they agree?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and a period n, and see where the graph of the n-th iterate crosses the diagonal.</p>
      <PeriodicPointsViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Devaney chaos">
        <p>
          A continuous map f of a metric space X is <strong>chaotic in the sense of Devaney</strong> (1986) if it is
          topologically transitive, its periodic points are dense, and it has sensitive dependence on initial conditions:
          there is δ &gt; 0 such that every neighbourhood of every point contains a y with{" "}
          <M>{"d(f^n x, f^n y) > \\delta"}</M> for some n.
        </p>
      </Definition>

      <Theorem title="Banks, Brooks, Cairns, Davis and Stacey (1992)">
        <p>
          On an infinite metric space, transitivity and dense periodic points together imply sensitive dependence. The
          condition that sounds most like chaos follows from the two topological ones.
        </p>
      </Theorem>

      <Theorem title="Sharkovskii and Li–Yorke">
        <p>
          Order the positive integers as 3 ▹ 5 ▹ 7 ▹ ⋯ ▹ 2·3 ▹ 2·5 ▹ ⋯ ▹ 4·3 ▹ ⋯ ▹ 8 ▹ 4 ▹ 2 ▹ 1. Sharkovskii (1964)
          proved that if a continuous map of an interval has a point of period m, it has points of every period that
          comes after m. So period 3 forces every period. Li and Yorke added an uncountable scrambled set: pairs of orbits
          that come arbitrarily close and also separate again, infinitely often.
        </p>
      </Theorem>

      <Remark title="topological versus measurable chaos">
        <p>
          At r = 3.83 the logistic map has period 3 and so is chaotic in the sense of Li and Yorke, yet almost every orbit is
          attracted to a stable 3-cycle; the chaos lives on a set of measure zero. A stronger notion asks for an invariant
          measure, absolutely continuous with respect to length, with positive entropy, or equivalently, by Pesin&rsquo;s
          formula, a positive Lyapunov exponent. Jakobson (1981) proved that this happens for a set of parameters r of
          positive measure, while Lyubich and Graczyk–Świątek showed that parameters with a stable cycle are dense.
        </p>
      </Remark>

      <Example title="the doubling map">
        <p>
          The doubling map satisfies every definition. Its points of period dividing n are{" "}
          <M>{"k/(2^n - 1)"}</M>, which are dense; it is transitive because it is conjugate to the full shift; its
          entropy and Lyapunov exponent are both log 2.
        </p>
      </Example>
    </>
  ),

  practice: [
    {
      key: "dev",
      rung: "check",
      prompt: <p>Which three conditions make up Devaney&rsquo;s definition of chaos?</p>,
      answer: { kind: "choice", options: ["Transitivity, dense periodic points and sensitive dependence", "Mixing, ergodicity and recurrence", "Positive entropy, compactness and minimality", "Hyperbolicity, structural stability and a fixed point"], correct: [0] },
    },
    {
      key: "shark",
      rung: "check",
      prompt: <p>A continuous map of an interval has a point of period 3. Which periods must it have?</p>,
      answer: { kind: "choice", options: ["Every period", "Only 1 and 3", "Only odd periods", "Only powers of 2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the logistic map with r = 4 and n = 5. How many points satisfy f⁵(x) = x?</p>,
      answer: { kind: "numeric", value: 32, tolerance: 0 },
    },
    {
      key: "six",
      rung: "apply",
      prompt: <p>How many points of [0, 1) have period dividing 6 under the doubling map?</p>,
      answer: { kind: "numeric", value: 63, tolerance: 0 },
    },
    {
      key: "exact",
      rung: "apply",
      prompt: <p>How many points of [0, 1) have least period exactly 3 under the doubling map?</p>,
      answer: { kind: "numeric", value: 6, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the periodic points of the doubling map are dense in [0, 1).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Checks that x = k/(2ⁿ − 1) satisfies 2ⁿx = x + k, so the n-th iterate fixes x.",
          "Notes these points are spaced 1/(2ⁿ − 1) apart across [0, 1).",
          "Concludes every interval contains such a point once n is large enough.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>The map x ↦ 2x on the real line has sensitive dependence. Should it count as chaotic?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that orbits separate exponentially, so sensitivity holds.",
          "Observes that orbits escape to infinity, with no recurrence, no transitivity and only one periodic point.",
          "Concludes that sensitivity alone is too weak a definition. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        This completes the course. Dynamics kept returning to holomorphic maps, the circle and the disc, where complex
        analysis supplies the strongest tools. The next course takes complex analysis further, from harmonic functions to
        Riemann surfaces.
      </p>
      <p>Next, the course on complex analysis II and Riemann surfaces begins with the Poisson integral.</p>
    </>
  ),
};
