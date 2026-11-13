import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { UCPartitionViz } from "@/components/viz/UCPartitionViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.7.2",
  minutes: 85,
  links: {
    revisits: ["m6.7.1", "m6.5.3", "m6.5.4"],
    foreshadows: ["m6.7.3", "m6.7.4", "m12.5.1"],
  },

  puzzle: (
    <>
      <p>
        The definition of the integral asks for the supremum of all lower sums and the infimum of all upper sums, over every
        possible partition. Nobody can check every partition. We need a test that looks at one well-chosen partition at a
        time. And then the real question: which functions pass it? Every continuous function, it turns out, and every monotone
        one, and many more besides.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Choose <M>{"\\varepsilon"}</M>. Uniform continuity supplies a <M>{"\\delta"}</M>, and a partition finer than{" "}
        <M>{"\\delta"}</M> makes every shaded box shorter than <M>{"\\varepsilon"}</M>.
      </p>
      <UCPartitionViz />
    </>
  ),

  theory: (
    <>
      <Theorem title="the integrability criterion">
        <p>
          A bounded function <M>{"f"}</M> on <M>{"[a, b]"}</M> is integrable if and only if for every{" "}
          <M>{"\\varepsilon > 0"}</M> there is a partition <M>{"P"}</M> with <M>{"U(f, P) - L(f, P) < \\varepsilon"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          If such partitions exist, then <M>{"0 \\le U(f) - L(f) \\le U(f, P) - L(f, P) < \\varepsilon"}</M> for every{" "}
          <M>{"\\varepsilon"}</M>, so <M>{"U(f) = L(f)"}</M>. Conversely, if <M>{"U(f) = L(f)"}</M>, choose{" "}
          <M>{"P_1"}</M> with <M>{"U(f, P_1) < U(f) + \\varepsilon/2"}</M> and <M>{"P_2"}</M> with{" "}
          <M>{"L(f, P_2) > L(f) - \\varepsilon/2"}</M>; their common refinement <M>{"P"}</M> does both, so{" "}
          <M>{"U(f, P) - L(f, P) < \\varepsilon"}</M>.
        </p>
      </Proof>

      <Theorem title="continuous and monotone functions are integrable">
        <p>Every continuous function on <M>{"[a, b]"}</M> is integrable. So is every monotone function.</p>
      </Theorem>

      <Proof>
        <p>
          Continuous: <M>{"f"}</M> is uniformly continuous on the compact interval, so given <M>{"\\varepsilon"}</M> there is{" "}
          <M>{"\\delta"}</M> with <M>{"|f(x) - f(y)| < \\varepsilon/(b - a)"}</M> whenever <M>{"|x - y| < \\delta"}</M>. On any
          partition with pieces shorter than <M>{"\\delta"}</M>, each <M>{"M_k - m_k < \\varepsilon/(b - a)"}</M>, by the
          extreme value theorem, so
        </p>
        <MD>{"U(f, P) - L(f, P) = \\sum (M_k - m_k)\\,\\Delta x_k < \\frac{\\varepsilon}{b - a} \\sum \\Delta x_k = \\varepsilon."}</MD>
        <p>
          Increasing: with <M>{"n"}</M> equal pieces, <M>{"M_k - m_k = f(x_k) - f(x_{k-1})"}</M>, and the sum telescopes to{" "}
          <M>{"(f(b) - f(a))(b - a)/n"}</M>, which tends to 0.
        </p>
      </Proof>

      <Example title="properties of the integral">
        <p>
          The criterion proves the familiar rules. If <M>{"f"}</M> and <M>{"g"}</M> are integrable, so are <M>{"f + g"}</M>,{" "}
          <M>{"cf"}</M> and <M>{"fg"}</M>, with <M>{"\\int (f + g) = \\int f + \\int g"}</M>. If <M>{"f \\le g"}</M> then{" "}
          <M>{"\\int f \\le \\int g"}</M>, and <M>{"|\\int f| \\le \\int |f|"}</M>. And{" "}
          <M>{"\\int_a^b f = \\int_a^c f + \\int_c^b f"}</M> for <M>{"a < c < b"}</M>, by adding <M>{"c"}</M> to the partitions.
        </p>
      </Example>

      <Remark title="discontinuities allowed">
        <p>
          A bounded function with finitely many discontinuities is integrable: cover each discontinuity by a tiny piece, whose
          contribution to <M>{"U - L"}</M> is at most its width times the total oscillation, and use continuity elsewhere.
          Monotone functions may have countably many jumps and are still integrable. Thomae&rsquo;s function, which is{" "}
          <M>{"1/q"}</M> at <M>{"p/q"}</M> in lowest terms and 0 at irrationals, is discontinuous at every rational and yet
          integrable, with integral 0. Exactly how many discontinuities are allowed is the subject of Lebesgue&rsquo;s criterion.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "crit",
      rung: "check",
      prompt: <p>What does the integrability criterion require?</p>,
      answer: {
        kind: "choice",
        options: [
          "That f is continuous.",
          "That for every ε > 0 some partition has U(f, P) − L(f, P) < ε.",
          "That every partition has U = L.",
          "That f is differentiable.",
        ],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these are guaranteed to be integrable on [0, 1]? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: [
          "A continuous function",
          "An increasing function",
          "Dirichlet's function",
          "A bounded function with three jumps",
          "An unbounded function",
        ],
        correct: [0, 1, 3],
      },
    },
    {
      key: "mono",
      rung: "apply",
      prompt: (
        <p>
          For <M>{"f(x) = x^3"}</M> on <M>{"[0, 1]"}</M>, with <M>{"n"}</M> equal pieces,{" "}
          <M>{"U - L = (f(1) - f(0))/n = 1/n"}</M>. How many pieces make <M>{"U - L < 0.01"}</M>, at the least?
        </p>
      ),
      answer: { kind: "numeric", value: 101 },
    },
    {
      key: "delta",
      rung: "apply",
      prompt: (
        <p>
          On <M>{"[0, 2]"}</M>, a function satisfies <M>{"|f(x) - f(y)| \\le 3|x - y|"}</M>. Using the proof, how small must
          the pieces be to make <M>{"U - L < 0.6"}</M>? Give the <M>{"\\delta"}</M> with{" "}
          <M>{"3\\delta = 0.6/(b - a)"}</M>.
        </p>
      ),
      answer: { kind: "numeric", value: 0.1, tolerance: 0.0001 },
    },
    {
      key: "thomae",
      rung: "apply",
      prompt: <p>What is the integral of Thomae&rsquo;s function over [0, 1]?</p>,
      answer: { kind: "numeric", value: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that an increasing function on <M>{"[a, b]"}</M> is integrable. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Takes n equal pieces of width (b − a)/n and notes M_k = f(x_k), m_k = f(x_{k−1}).",
          "Shows U − L telescopes to (f(b) − f(a))(b − a)/n.",
          "Concludes U − L < ε for large n, so f is integrable by the criterion.",
        ],
      },
    },
    {
      key: "jump",
      rung: "stretch",
      prompt: (
        <p>
          Show that a bounded function on <M>{"[0, 1]"}</M> that is continuous except at <M>{"\\tfrac12"}</M> is integrable. A
          sketch is enough.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Isolates 1/2 in a small piece of width η, contributing at most 2Bη to U − L where |f| ≤ B.",
          "Uses uniform continuity on the two remaining closed intervals to make their contribution small.",
          "Combines to make U − L < ε, so f is integrable.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend the integrability criterion and why it is equivalent to the definition, how uniform continuity proves continuous functions are integrable, why monotone functions are integrable, and how some discontinuities can be allowed.",

  glimpse: (
    <p>
      The next lesson proves the fundamental theorem of calculus, connecting these integrals with derivatives. After that,
      Lebesgue&rsquo;s criterion says exactly which bounded functions are integrable: those whose discontinuities form a set
      of measure zero.
    </p>
  ),
};
