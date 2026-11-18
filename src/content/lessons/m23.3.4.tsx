import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M, MD } from "@/components/Math";
import { DerivativeBlowupViz } from "@/components/viz/DerivativeBlowupViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m23.3.4",
  minutes: 85,
  links: {
    revisits: ["m23.3.3", "m23.2.2", "m23.1.2"],
    foreshadows: ["m23.4.3", "m23.6.1", "m23.5.2"],
  },

  puzzle: (
    <>
      <p>
        To prove a linear map T is continuous, you must show: if xₙ → x then Txₙ → Tx. That needs you to show Txₙ
        converges, and to find its limit. Suppose you could skip the first part, assuming Txₙ converges and only checking
        that the limit is the right one. Would that ever be enough?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Shrink fₙ(x) = sin(n²x)/n to zero, and watch its derivative.</p>
      <DerivativeBlowupViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the graph">
        <p>
          The <strong>graph</strong> of <M>{"T : X \\to Y"}</M> is <M>{"G(T) = \\{(x, Tx) : x \\in X\\}"}</M>, a subspace of{" "}
          <M>{"X \\times Y"}</M> with the norm <M>{"\\|x\\| + \\|y\\|"}</M>. It is closed exactly when: if{" "}
          <M>{"x_n \\to x"}</M> and <M>{"Tx_n \\to y"}</M>, then <M>{"y = Tx"}</M>. Every bounded operator has a closed graph.
        </p>
      </Definition>

      <Theorem title="the closed graph theorem">
        <p>
          If <M>X</M> and <M>Y</M> are Banach spaces and <M>{"T : X \\to Y"}</M> is linear with closed graph, then <M>T</M>{" "}
          is bounded.
        </p>
      </Theorem>

      <Example title="the proof">
        <p>
          <M>{"G(T)"}</M> is a closed subspace of the Banach space <M>{"X \\times Y"}</M>, so it is Banach. The projection{" "}
          <M>{"\\pi_1(x, Tx) = x"}</M> is a bounded linear bijection from <M>{"G(T)"}</M> onto <M>X</M>, so by the bounded
          inverse theorem <M>{"\\pi_1^{-1}"}</M> is bounded. Then <M>{"T = \\pi_2 \\circ \\pi_1^{-1}"}</M> is bounded:
        </p>
        <MD>{"\\|Tx\\| \\le \\|x\\| + \\|Tx\\| = \\|\\pi_1^{-1} x\\| \\le C\\,\\|x\\|."}</MD>
      </Example>

      <Theorem title="Hellinger-Toeplitz (1910)">
        <p>
          If <M>T</M> is defined on all of a Hilbert space <M>H</M> and symmetric,{" "}
          <M>{"\\langle Tx, y \\rangle = \\langle x, Ty \\rangle"}</M>, then <M>T</M> is bounded. So the unbounded operators
          of quantum mechanics, such as position and momentum, cannot be defined everywhere.
        </p>
      </Theorem>

      <Remark title="the hypotheses matter">
        <p>
          Differentiation from <M>{"C^1[0, 1]"}</M> with the sup norm to <M>{"C[0, 1]"}</M> has a closed graph and is
          unbounded, because its domain is incomplete. The map <M>{"x \\mapsto 1/x"}</M>, with <M>{"0 \\mapsto 0"}</M>, has a
          closed graph in <M>{"\\mathbb{R}^2"}</M> and is discontinuous, because it is not linear.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "state",
      rung: "check",
      prompt: <p>What does the closed graph theorem conclude?</p>,
      answer: { kind: "choice", options: ["A linear map between Banach spaces with closed graph is bounded", "Every graph is closed", "Every linear map is bounded", "Bounded maps have open graphs"], correct: [0] },
    },
    {
      key: "check",
      rung: "check",
      prompt: <p>To show the graph is closed, what must you check when xₙ → x and Txₙ → y?</p>,
      answer: { kind: "choice", options: ["That y = Tx", "That Txₙ converges", "That ‖T‖ is finite", "That x = 0"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with n = 4, what is ‖Dfₙ‖∞ divided by ‖fₙ‖∞?</p>,
      answer: { kind: "numeric", value: 16 },
    },
    {
      key: "why",
      rung: "apply",
      prompt: <p>Differentiation on C¹[0, 1] with the sup norm has a closed graph but is unbounded. Which hypothesis fails?</p>,
      answer: { kind: "choice", options: ["The domain is not complete", "The map is not linear", "The codomain is not complete", "The graph is not closed"], correct: [0] },
    },
    {
      key: "which",
      rung: "apply",
      prompt: <p>Which earlier theorem does the proof of the closed graph theorem use?</p>,
      answer: { kind: "choice", options: ["The bounded inverse theorem", "The Riesz representation theorem", "Hahn-Banach", "Bessel’s inequality"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove Hellinger-Toeplitz: if T is defined on all of H and ⟨Tx, y⟩ = ⟨x, Ty⟩, then T has a closed graph, and hence is bounded.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes xₙ → x with Txₙ → y, and a fixed z in H.",
          "Computes ⟨y, z⟩ = lim ⟨Txₙ, z⟩ = lim ⟨xₙ, Tz⟩ = ⟨x, Tz⟩ = ⟨Tx, z⟩, using continuity of the inner product.",
          "Concludes y − Tx is orthogonal to every z, so y = Tx, and applies the closed graph theorem.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that every bounded linear operator has a closed graph. Why is the converse the hard direction?</p>,
      answer: {
        kind: "written",
        rubric: [
          "If xₙ → x then Txₙ → Tx by continuity, so a limit y of Txₙ equals Tx.",
          "Notes the converse needs completeness, through Baire and the open mapping theorem.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        In infinite dimensions the unit ball is never compact in norm. Yet compactness is the engine of existence proofs.
        The remedy is to ask less of convergence.
      </p>
      <p>
        Next, weak and weak-star convergence: a sequence converges weakly when every bounded functional converges along it,
        why the unit vectors of ℓ² converge weakly to 0, and how weak limits behave.
      </p>
    </>
  ),
};
