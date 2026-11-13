import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { DarbouxRefineViz } from "@/components/viz/DarbouxRefineViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.7.1",
  minutes: 85,
  links: {
    revisits: ["m6.5.3", "m6.1.2", "m2.6.1"],
    foreshadows: ["m6.7.2", "m6.7.3", "m12.5.1"],
  },

  puzzle: (
    <>
      <p>
        In calculus the integral was the limit of Riemann sums: chop the interval, take a sample point in each piece, add up
        rectangles. But which sample points? For <M>{"x^2"}</M> the answer never matters. For the function that is 1 on the
        rationals and 0 elsewhere, choosing rational points gives 1 every time and irrational points gives 0. Before we can
        say what the integral is, we need a definition that does not depend on such choices, and a test for when it exists.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        The lower rectangles fit under the graph and the upper ones cover it. Refine the partition and watch the gap between
        the two totals.
      </p>
      <DarbouxRefineViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Darboux sums">
        <p>
          Let <M>{"f"}</M> be bounded on <M>{"[a, b]"}</M>. A <strong>partition</strong>{" "}
          <M>{"P = \\{a = x_0 < x_1 < \\cdots < x_n = b\\}"}</M> splits it into pieces. On the <M>{"k"}</M>-th piece let{" "}
          <M>{"m_k = \\inf f"}</M> and <M>{"M_k = \\sup f"}</M>. The <strong>lower</strong> and <strong>upper sums</strong>{" "}
          are
        </p>
        <MD>{"L(f, P) = \\sum_{k=1}^n m_k (x_k - x_{k-1}), \\qquad U(f, P) = \\sum_{k=1}^n M_k (x_k - x_{k-1})."}</MD>
      </Definition>

      <Theorem title="refinement">
        <p>
          If <M>{"Q"}</M> is a refinement of <M>{"P"}</M>, meaning <M>{"P \\subseteq Q"}</M>, then{" "}
          <M>{"L(f, P) \\le L(f, Q) \\le U(f, Q) \\le U(f, P)"}</M>. Consequently every lower sum is at most every upper sum.
        </p>
      </Theorem>

      <Proof>
        <p>
          It suffices to add one point <M>{"z"}</M> inside a piece <M>{"[x_{k-1}, x_k]"}</M>. The infimum over each half is at
          least the infimum over the whole, so the two new lower rectangles together are at least the old one; similarly the
          upper rectangles shrink. For any partitions <M>{"P_1, P_2"}</M>, their union refines both, so{" "}
          <M>{"L(f, P_1) \\le L(f, P_1 \\cup P_2) \\le U(f, P_1 \\cup P_2) \\le U(f, P_2)"}</M>.
        </p>
      </Proof>

      <Definition title="the integral">
        <p>
          The <strong>lower integral</strong> is <M>{"L(f) = \\sup_P L(f, P)"}</M> and the <strong>upper integral</strong> is{" "}
          <M>{"U(f) = \\inf_P U(f, P)"}</M>. Both exist by completeness, and <M>{"L(f) \\le U(f)"}</M>. If they are equal,{" "}
          <M>{"f"}</M> is <strong>Riemann integrable</strong>, and <M>{"\\int_a^b f"}</M> is the common value.
        </p>
      </Definition>

      <Example title="two examples">
        <p>
          For <M>{"f(x) = x^2"}</M> on <M>{"[0, 1]"}</M> with <M>{"n"}</M> equal pieces,
        </p>
        <MD>{"U(f, P_n) - L(f, P_n) = \\sum_{k=1}^n \\frac{k^2 - (k-1)^2}{n^3} = \\frac{n^2}{n^3} = \\frac1n \\to 0,"}</MD>
        <p>
          so <M>{"f"}</M> is integrable, and both sums tend to <M>{"\\tfrac13"}</M>. For Dirichlet&rsquo;s function every
          piece contains rationals and irrationals, so <M>{"L(f, P) = 0"}</M> and <M>{"U(f, P) = 1"}</M> for every{" "}
          <M>{"P"}</M>: not integrable.
        </p>
      </Example>

      <Remark title="Darboux and Riemann">
        <p>
          Riemann defined the integral with sample points; Gaston Darboux&rsquo;s upper and lower sums give an equivalent
          definition that is easier to work with, since every Riemann sum lies between the lower and upper sums for the same
          partition. The limitations visible here, such as the failure on Dirichlet&rsquo;s function, eventually led to
          Lebesgue&rsquo;s integral, which measures how much of the domain each value occupies rather than chopping the domain
          into intervals.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "u2",
      rung: "check",
      prompt: (
        <p>
          For <M>{"f(x) = x"}</M> on <M>{"[0, 1]"}</M> with the partition <M>{"\\{0, \\tfrac12, 1\\}"}</M>, what is the upper
          sum?
        </p>
      ),
      answer: { kind: "numeric", value: 0.75, tolerance: 0.0001 },
    },
    {
      key: "l2",
      rung: "check",
      prompt: <p>For the same function and partition, what is the lower sum?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.0001 },
    },
    {
      key: "gap",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"x^2"}</M> on <M>{"[0, 1]"}</M> with <M>{"n"}</M> equal pieces, <M>{"U - L = 1/n"}</M>. How many pieces
          make the gap at most 0.001?
        </p>
      ),
      answer: { kind: "numeric", value: 1000 },
    },
    {
      key: "refine",
      rung: "apply",
      prompt: <p>What happens to the lower sum when a partition is refined?</p>,
      answer: {
        kind: "choice",
        options: ["It can only decrease.", "It stays the same or increases.", "It always doubles.", "It becomes the upper sum."],
        correct: [1],
      },
    },
    {
      key: "dir",
      rung: "apply",
      prompt: <p>Why is Dirichlet&rsquo;s function not Riemann integrable on [0, 1]?</p>,
      answer: {
        kind: "choice",
        options: [
          "It is unbounded.",
          "Every piece of every partition contains rationals and irrationals, so the lower sum is always 0 and the upper sum always 1.",
          "It is continuous.",
          "Its integral is infinite.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that adding one point to a partition cannot decrease the lower sum. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Adds z inside [x_{k−1}, x_k], splitting it into two pieces; the other pieces are unchanged.",
          "Notes the infimum over each half is at least the infimum m_k over the whole piece.",
          "Concludes the two new terms sum to at least m_k(x_k − x_{k−1}).",
        ],
      },
    },
    {
      key: "const",
      rung: "stretch",
      prompt: (
        <p>
          Let <M>{"f = 0"}</M> on <M>{"[0, 1]"}</M> except <M>{"f(\\tfrac12) = 5"}</M>. Show that <M>{"f"}</M> is integrable
          with integral 0. A sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes every lower sum is 0.",
          "Takes a partition where the point 1/2 lies in pieces of total length at most 2δ, so the upper sum is at most 10δ.",
          "Concludes the upper integral is 0, equal to the lower integral.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how upper and lower Darboux sums are defined, why refining a partition squeezes them together, how the Riemann integral is defined from them, and why Dirichlet's function is not integrable.",

  glimpse: (
    <p>
      The next lesson gives a practical test for integrability and uses uniform continuity to show every continuous function is
      integrable. Then comes a proof of the fundamental theorem of calculus, and later Lebesgue&rsquo;s exact criterion in terms
      of sets of measure zero.
    </p>
  ),
};
