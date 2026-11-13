import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NullCoverViz } from "@/components/viz/NullCoverViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.7.4",
  minutes: 85,
  links: {
    revisits: ["m6.7.2", "m6.4.4", "m6.5.4"],
    foreshadows: ["m22.1.4", "m6.8.2", "m12.3.3"],
  },

  puzzle: (
    <>
      <p>
        Continuous functions are integrable. So are monotone functions, with their countably many jumps, and Thomae&rsquo;s
        function, discontinuous at every rational. Dirichlet&rsquo;s function, discontinuous everywhere, is not. Somewhere
        between &ldquo;at every rational&rdquo; and &ldquo;everywhere&rdquo; lies the boundary. In 1904 Henri Lebesgue found it
        exactly, and the answer depends not on how many discontinuities there are but on how much room they take up.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Cover the rationals in <M>{"[0, 1]"}</M> one by one with shrinking intervals. Watch the total length as you cover more
        of them.
      </p>
      <NullCoverViz />
    </>
  ),

  theory: (
    <>
      <Definition title="measure zero">
        <p>
          A set <M>{"A \\subseteq \\mathbb{R}"}</M> has <strong>measure zero</strong> if for every <M>{"\\varepsilon > 0"}</M>{" "}
          there are countably many open intervals covering <M>{"A"}</M> whose total length is less than <M>{"\\varepsilon"}</M>.
          Finite sets and countable sets have measure zero. So does the Cantor set, which is uncountable: it lies inside the{" "}
          <M>{"2^n"}</M> intervals of stage <M>{"n"}</M>, of total length <M>{"(2/3)^n"}</M>. An interval does not.
        </p>
      </Definition>

      <Theorem title="countable unions">
        <p>A countable union of sets of measure zero has measure zero.</p>
      </Theorem>

      <Proof>
        <p>
          Given <M>{"\\varepsilon"}</M>, cover the <M>{"k"}</M>-th set by intervals of total length less than{" "}
          <M>{"\\varepsilon/2^k"}</M>. Together these countably many intervals cover the union, with total length less than{" "}
          <M>{"\\sum \\varepsilon/2^k = \\varepsilon"}</M>.
        </p>
      </Proof>

      <Theorem title="Lebesgue's criterion">
        <p>
          A bounded function on <M>{"[a, b]"}</M> is Riemann integrable if and only if its set of discontinuities has measure
          zero.
        </p>
      </Theorem>

      <Example title="the idea of the proof">
        <p>
          The <strong>oscillation</strong> of <M>{"f"}</M> at <M>{"x"}</M> measures how much it jumps there; <M>{"f"}</M> is
          continuous at <M>{"x"}</M> exactly when the oscillation is 0. Let <M>{"D_\\alpha"}</M> be the set where it is at
          least <M>{"\\alpha"}</M>; then the set of discontinuities is <M>{"\\bigcup_n D_{1/n}"}</M>. Each{" "}
          <M>{"D_\\alpha"}</M> is closed and bounded, so compact. If the discontinuities have measure zero, cover{" "}
          <M>{"D_\\alpha"}</M> by intervals of small total length, take a finite subcover by compactness, and elsewhere the
          function varies by less than about <M>{"\\alpha"}</M>; this makes <M>{"U - L"}</M> small. Conversely, if some{" "}
          <M>{"D_{1/n}"}</M> does not have measure zero, the pieces of any partition meeting it contribute at least a fixed
          amount to <M>{"U - L"}</M>.
        </p>
      </Example>

      <Remark title="what it explains">
        <p>
          Monotone functions have countably many discontinuities, so they are integrable. Thomae&rsquo;s function is
          discontinuous exactly on the rationals, a set of measure zero. Dirichlet&rsquo;s function is discontinuous on all of{" "}
          <M>{"[0, 1]"}</M>, which does not have measure zero. Products and compositions of integrable functions can be handled
          the same way. Measure zero is the first step towards Lebesgue measure, and the phrase &ldquo;almost
          everywhere&rdquo;, meaning except on a set of measure zero, runs through all of modern analysis.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these sets have measure zero? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["The rationals", "The Cantor set", "The interval [0, 0.001]", "The set {1, 2, 3}", "The irrationals in [0, 1]"],
        correct: [0, 1, 3],
      },
    },
    {
      key: "crit",
      rung: "check",
      prompt: <p>What does Lebesgue&rsquo;s criterion say?</p>,
      answer: {
        kind: "choice",
        options: [
          "A bounded function is integrable if and only if it is continuous.",
          "A bounded function is integrable if and only if its discontinuities form a set of measure zero.",
          "Every function is integrable.",
          "A function is integrable if it has finitely many discontinuities, and only then.",
        ],
        correct: [1],
      },
    },
    {
      key: "total",
      rung: "apply",
      prompt: (
        <p>
          Covering the <M>{"k"}</M>-th rational by an interval of length <M>{"\\varepsilon/2^k"}</M>, with{" "}
          <M>{"\\varepsilon = 0.1"}</M>, what is the largest possible total length?
        </p>
      ),
      answer: { kind: "numeric", value: 0.1, tolerance: 0.0001 },
    },
    {
      key: "cantor",
      rung: "apply",
      prompt: (
        <p>
          The Cantor set lies in intervals of total length <M>{"(2/3)^n"}</M> at stage <M>{"n"}</M>. What is the smallest{" "}
          <M>{"n"}</M> making this less than 0.01?
        </p>
      ),
      answer: { kind: "numeric", value: 12 },
    },
    {
      key: "integrable",
      rung: "apply",
      prompt: <p>Which of these bounded functions on [0, 1] are Riemann integrable? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "Thomae's function",
          "Dirichlet's function",
          "The indicator function of the Cantor set",
          "An increasing function",
        ],
        correct: [0, 2, 3],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that any countable set of real numbers has measure zero. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Lists the set as a_1, a_2, ….",
          "Covers a_k by an open interval of length ε/2^(k+1), or similar.",
          "Sums the lengths to get a total less than ε.",
        ],
      },
    },
    {
      key: "indic",
      rung: "stretch",
      prompt: (
        <p>
          Where is the indicator function of the Cantor set, 1 on the set and 0 off it, discontinuous? Use your answer to
          decide whether it is integrable, and find its integral.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes off the Cantor set the function is 0 on an open interval, so continuous; at each point of the set it is discontinuous, since removed intervals come arbitrarily close.",
          "Concludes the discontinuities are the Cantor set, which has measure zero, so the function is integrable.",
          "Finds the integral is 0, since lower sums are 0 and upper sums are at most (2/3)^n.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what it means for a set to have measure zero, why countable sets and the Cantor set have measure zero, what Lebesgue's criterion says, and how it explains which familiar functions are integrable.",

  glimpse: (
    <p>
      The next chapter studies sequences of functions and when limits keep integrability and continuity. Measure zero grows
      into Lebesgue measure in the Measure and Integration course, where the integral itself is rebuilt, and in metric spaces the
      Baire category theorem gives a different notion of a small set.
    </p>
  ),
};
