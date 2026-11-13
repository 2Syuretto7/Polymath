import { M } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { EquicontinuityViz } from "@/components/viz/EquicontinuityViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.8.5",
  minutes: 90,
  links: {
    revisits: ["m6.8.1", "m6.4.2", "m6.5.3"],
    foreshadows: ["m12.1.4", "m23.5.2", "m10.2.1"],
  },

  puzzle: (
    <>
      <p>
        Bolzano-Weierstrass says that every bounded sequence of numbers has a convergent subsequence. Is the same true of
        functions? The functions <M>{"\\sin(nx)"}</M> on <M>{"[0, \\pi]"}</M> are all bounded by 1, yet no subsequence of them
        converges uniformly. Boundedness is not enough. What extra condition makes a family of functions behave like a bounded
        set of numbers?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Fix a point and an <M>{"\\varepsilon"}</M>, and add members of the family. The shaded window is the smallest{" "}
        <M>{"\\delta"}</M> any of them needs. Does it shrink?
      </p>
      <EquicontinuityViz />
    </>
  ),

  theory: (
    <>
      <Definition title="equicontinuity">
        <p>
          A family <M>{"\\mathcal F"}</M> of functions on <M>{"A"}</M> is <strong>uniformly bounded</strong> if there is one{" "}
          <M>{"B"}</M> with <M>{"|f(x)| \\le B"}</M> for all <M>{"f \\in \\mathcal F"}</M> and <M>{"x \\in A"}</M>. It is{" "}
          <strong>equicontinuous</strong> if for every <M>{"\\varepsilon"}</M> there is one <M>{"\\delta"}</M>, serving every
          member and every point, with <M>{"|f(x) - f(y)| < \\varepsilon"}</M> whenever <M>{"|x - y| < \\delta"}</M>. A family
          sharing a Lipschitz constant <M>{"L"}</M>, for instance with <M>{"|f'| \\le L"}</M> for all members, is
          equicontinuous with <M>{"\\delta = \\varepsilon/L"}</M>.
        </p>
      </Definition>

      <Theorem title="Arzelà-Ascoli">
        <p>
          Every uniformly bounded, equicontinuous sequence of functions on <M>{"[a, b]"}</M> has a uniformly convergent
          subsequence.
        </p>
      </Theorem>

      <Proof>
        <p>
          List the rationals in <M>{"[a, b]"}</M> as <M>{"q_1, q_2, \\ldots"}</M>. By Bolzano-Weierstrass, some subsequence
          converges at <M>{"q_1"}</M>; a further subsequence of it converges at <M>{"q_2"}</M>; and so on. The{" "}
          <strong>diagonal sequence</strong>, whose <M>{"k"}</M>-th term is the <M>{"k"}</M>-th term of the{" "}
          <M>{"k"}</M>-th subsequence, converges at every rational. Now given <M>{"\\varepsilon"}</M>, take the{" "}
          <M>{"\\delta"}</M> of equicontinuity and finitely many rationals within <M>{"\\delta"}</M> of every point, using
          compactness. At those finitely many rationals the sequence is eventually Cauchy to within{" "}
          <M>{"\\varepsilon"}</M>, and equicontinuity carries this to every point, with an ε/3 argument. By the Cauchy
          criterion, the convergence is uniform.
        </p>
      </Proof>

      <Example title="where each hypothesis bites">
        <p>
          <M>{"\\sin(nx)"}</M> is bounded but not equicontinuous. <M>{"f_n(x) = n"}</M> is equicontinuous but not bounded. On
          the whole real line, a fixed bump sliding off to infinity, <M>{"f_n(x) = \\varphi(x - n)"}</M>, is bounded and
          equicontinuous, yet has no uniformly convergent subsequence: the compactness of <M>{"[a, b]"}</M> is needed too.
        </p>
      </Example>

      <Remark title="compactness for functions">
        <p>
          In metric space language, the theorem says that a closed, bounded, equicontinuous set of continuous functions is
          compact under the sup distance, the analogue of Heine-Borel. It is the standard tool for proving that solutions
          exist: Peano&rsquo;s theorem on differential equations builds approximate solutions and extracts a convergent
          subsequence, and compact operators in functional analysis are defined by the same idea. With this lesson, Real
          Analysis I is complete.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does equicontinuity require?</p>,
      answer: {
        kind: "choice",
        options: [
          "Each function in the family is continuous.",
          "For each ε, a single δ works for every function in the family and every pair of points.",
          "All the functions are equal.",
          "The functions are bounded by a common constant.",
        ],
        correct: [1],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which of these families on [0, π] are equicontinuous? Choose all that apply.</p>,
      answer: { kind: "choice", options: ["sin(x + n)", "cos(x)/n", "sin(nx)", "nx"], correct: [0, 1] },
    },
    {
      key: "delta",
      rung: "apply",
      prompt: (
        <p>
          Every member of a family satisfies <M>{"|f'| \\le 3"}</M>. Which <M>{"\\delta"}</M> does the Lipschitz bound give
          for <M>{"\\varepsilon = 0.6"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 0.2, tolerance: 0.0001 },
    },
    {
      key: "fail",
      rung: "apply",
      prompt: (
        <p>
          The sequence <M>{"f_n(x) = n"}</M> on <M>{"[0, 1]"}</M> has no convergent subsequence. Which hypothesis of
          Arzelà-Ascoli fails?
        </p>
      ),
      answer: {
        kind: "choice",
        options: ["Equicontinuity", "Uniform boundedness", "Compactness of the domain", "Continuity of each function"],
        correct: [1],
      },
    },
    {
      key: "diag",
      rung: "apply",
      prompt: <p>What does the diagonal argument in the proof produce?</p>,
      answer: {
        kind: "choice",
        options: [
          "A subsequence converging uniformly at once.",
          "A subsequence converging at every rational point.",
          "A proof that the rationals are uncountable.",
          "A single function in the family.",
        ],
        correct: [1],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: (
        <p>
          Prove that a family with <M>{"|f(x) - f(y)| \\le L|x - y|"}</M> for every member and all <M>{"x, y"}</M> is
          equicontinuous. A few lines will do.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Given ε, takes δ = ε/L.",
          "Shows |x − y| < δ gives |f(x) − f(y)| < ε for every member, so one δ serves the whole family.",
        ],
      },
    },
    {
      key: "compact",
      rung: "stretch",
      prompt: (
        <p>
          Explain why the sliding bump <M>{"\\varphi(x - n)"}</M> on ℝ has no uniformly convergent subsequence, and which part
          of the proof breaks down.
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes it converges pointwise to 0 while each member has the same height, so no subsequence converges uniformly.",
          "Notes ℝ is not compact, so finitely many rationals cannot come within δ of every point. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what equicontinuity means, what the Arzelà-Ascoli theorem says, how the diagonal argument and compactness prove it, and examples showing why each hypothesis is needed.",

  glimpse: (
    <p>
      Real Analysis II moves all of this into metric spaces, where Arzelà-Ascoli describes the compact sets of continuous
      functions. The theorem proves existence of solutions to differential equations, and Functional Analysis builds the
      theory of compact operators on the same foundation.
    </p>
  ),
};
