import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { NonUniqueViz } from "@/components/viz/NonUniqueViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m10.2.2",
  minutes: 85,
  links: {
    revisits: ["m10.2.1", "m2.5.1", "m12.2.3"],
    foreshadows: ["m10.2.3", "m10.5.1", "m37.3.1"],
  },

  puzzle: (
    <>
      <p>
        A ball rests at the bottom of a perfectly smooth bowl. Physics should tell us it stays there forever. But some
        perfectly respectable equations allow a solution to sit still for a while and then, for no reason, start to move.
        What property of an equation rules this out?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        All the curves below start at 0 at time 0 and solve the same equation. Slide the moment the solution leaves 0, and
        compare with an equation where only one solution exists.
      </p>
      <NonUniqueViz />
    </>
  ),

  theory: (
    <>
      <Definition title="Lipschitz condition">
        <p>
          <M>{"f(t, y)"}</M> is <strong>Lipschitz in y</strong> on a region <M>{"D"}</M> if there is a constant{" "}
          <M>{"L"}</M> with
        </p>
        <MD>{"|f(t, y) - f(t, z)| \\le L|y - z| \\quad \\text{for all } (t, y), (t, z) \\in D."}</MD>
        <p>Every slope of a chord of <M>{"f"}</M> in the <M>{"y"}</M> direction is at most <M>{"L"}</M> in size.</p>
      </Definition>

      <Theorem title="a bounded derivative gives a Lipschitz bound">
        <p>
          If <M>{"\\partial f/\\partial y"}</M> exists with <M>{"|\\partial f/\\partial y| \\le L"}</M> on a region whose
          vertical sections are intervals, then <M>{"f"}</M> is Lipschitz in <M>{"y"}</M> with constant <M>{"L"}</M>.
        </p>
      </Theorem>

      <Proof>
        <p>
          By the mean value theorem, <M>{"f(t, y) - f(t, z) = \\partial_y f(t, \\xi)(y - z)"}</M> for some <M>{"\\xi"}</M>{" "}
          between <M>{"z"}</M> and <M>{"y"}</M>, so its size is at most <M>{"L|y - z|"}</M>.
        </p>
      </Proof>

      <Theorem title="uniqueness">
        <p>
          If <M>{"f"}</M> is Lipschitz in <M>{"y"}</M>, two solutions with the same initial value agree wherever both are
          defined.
        </p>
      </Theorem>

      <Proof>
        <p>
          Let <M>{"w = |y - z|"}</M> for <M>{"t \\ge t_0"}</M>. Subtracting integral equations,{" "}
          <M>{"w(t) \\le L\\int_{t_0}^t w"}</M>. Put <M>{"W(t) = \\int_{t_0}^t w"}</M>, so <M>{"W' \\le LW"}</M> and{" "}
          <M>{"(e^{-Lt}W)' \\le 0"}</M>. Since <M>{"W(t_0) = 0"}</M>, <M>{"W \\le 0"}</M>; but <M>{"W \\ge 0"}</M>, so{" "}
          <M>{"W = 0"}</M> and hence <M>{"w = 0"}</M>. Times before <M>{"t_0"}</M> are handled the same way.
        </p>
      </Proof>

      <Example title="where Lipschitz fails">
        <p>
          For <M>{"y' = 2\\sqrt{|y|}"}</M>, <M>{"y(0) = 0"}</M>, both <M>{"y = 0"}</M> and <M>{"y = t^2"}</M>{" "}
          (for <M>{"t \\ge 0"}</M>) are solutions, and so is any curve resting at 0 until time <M>{"c"}</M> and then
          following <M>{"(t - c)^2"}</M>. Here <M>{"f(h)/h = 2/\\sqrt{h} \\to \\infty"}</M>, so no Lipschitz constant works
          near 0.
        </p>
      </Example>

      <Remark title="Peano and global solutions">
        <p>
          Peano&rsquo;s theorem says continuity of <M>{"f"}</M> alone guarantees that a solution exists, but not that it is
          unique. If <M>{"f"}</M> is Lipschitz on the whole strip <M>{"|t - t_0| \\le a"}</M>, all <M>{"y"}</M>, the
          solution exists on the whole interval: this covers every linear equation <M>{"y' = p(t)y + q(t)"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>What does it mean for <M>{"f"}</M> to be Lipschitz in <M>{"y"}</M> with constant <M>{"L"}</M>?</p>,
      answer: {
        kind: "choice",
        options: [
          "|f(t, y) − f(t, z)| ≤ L|y − z| for all relevant points",
          "|f(t, y)| ≤ L for all relevant points",
          "f is differentiable with derivative L",
          "f(t, y) = Ly",
        ],
        correct: [0],
      },
    },
    {
      key: "which",
      rung: "check",
      prompt: <p>Which function is Lipschitz in <M>{"y"}</M> on all of <M>{"\\mathbb{R}"}</M>?</p>,
      answer: { kind: "choice", options: ["sin y", "y²", "√|y|", "1/y"], correct: [0] },
    },
    {
      key: "L1",
      rung: "apply",
      prompt: <p>What is the smallest Lipschitz constant of <M>{"f(t, y) = 3y + t^2"}</M> in <M>{"y"}</M>?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "L2",
      rung: "apply",
      prompt: <p>What is the smallest Lipschitz constant of <M>{"f(y) = y^2"}</M> on <M>{"|y| \\le 2"}</M>?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.001 },
    },
    {
      key: "count",
      rung: "apply",
      prompt: <p>How many solutions does <M>{"y' = 3|y|^{2/3}"}</M>, <M>{"y(0) = 0"}</M> have on <M>{"t \\ge 0"}</M>?</p>,
      answer: { kind: "choice", options: ["None", "Exactly one", "Exactly two", "Infinitely many"], correct: [3] },
    },
    {
      key: "abs",
      rung: "prove",
      prompt: <p>Prove that <M>{"f(y) = |y|"}</M> is Lipschitz with constant 1, even though it is not differentiable at 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "States the reverse triangle inequality ||y| − |z|| ≤ |y − z|.",
          "Concludes the Lipschitz bound with L = 1.",
          "Notes that the bounded-derivative theorem is sufficient but not necessary.",
        ],
      },
    },
    {
      key: "tank",
      rung: "stretch",
      prompt: <p>A tank drains through a hole, with water height obeying <M>{"h' = -k\\sqrt{h}"}</M>. If you find the tank empty, can you tell when it emptied? Relate this to uniqueness.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that √h is not Lipschitz at h = 0.",
          "Explains that run backwards, many histories lead to the empty state, so its past is not determined.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend what a Lipschitz condition is, how a bounded derivative gives one, why it forces uniqueness, and an example like y′ = 2√|y| where uniqueness fails.",

  glimpse: (
    <p>
      The next lesson strengthens uniqueness into a quantitative bound on how solutions depend on their starting point. The
      same condition underlies linearisation of nonlinear systems, and existence and uniqueness for stochastic equations.
    </p>
  ),
};
