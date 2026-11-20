import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { OptionalStopViz } from "@/components/viz/OptionalStopViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m27.4.3",
  minutes: 90,
  links: {
    revisits: ["m27.4.2", "m9.8.4", "m22.2.3"],
    foreshadows: ["m27.4.4", "m37.1.2", "m37.5.2"],
  },

  puzzle: (
    <>
      <p>
        A fair ±1 walk starts at 0. Stop the first time it reaches 1. With probability 1 that time comes, so you always
        stop at 1. The walk is fair and its mean is 0 at every fixed time. How can a fair game, stopped at a time of your
        choosing, give a sure profit?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Observe the stopped walk up to longer and longer times. Look at where the walks still running are.</p>
      <OptionalStopViz />
    </>
  ),

  theory: (
    <>
      <Definition title="stopping times">
        <p>
          A random time T with values in {"{0, 1, 2, …, ∞}"} is a <strong>stopping time</strong> if{" "}
          <M>{"\\{T = n\\} \\in \\mathcal{F}_n"}</M> for every n: whether to stop now depends only on what has happened so
          far. &lsquo;The first time the walk reaches 1&rsquo; is a stopping time; &lsquo;the last time the walk is at
          0&rsquo; is not.
        </p>
      </Definition>

      <Theorem title="stopped martingales">
        <p>
          If X is a martingale and T a stopping time, then the stopped process <M>{"X_{T \\wedge n}"}</M> is a martingale.
          Indeed it is the transform of X by the predictable stake <M>{"H_n = 1_{\\{T \\ge n\\}}"}</M>. So{" "}
          <M>{"E[X_{T \\wedge n}] = E[X_0]"}</M> for every n.
        </p>
      </Theorem>

      <Theorem title="optional stopping">
        <p>
          <M>{"E[X_T] = E[X_0]"}</M> holds if T is almost surely finite and any of the following holds:
        </p>
        <ul>
          <li>T is bounded;</li>
          <li><M>{"|X_{T \\wedge n}|"}</M> is bounded by a constant for all n;</li>
          <li><M>{"E[T] < \\infty"}</M> and the increments <M>{"|X_n - X_{n-1}|"}</M> are bounded.</li>
        </ul>
        <p>
          <strong>Proof idea:</strong> <M>{"X_{T \\wedge n} \\to X_T"}</M> almost surely; each condition gives a
          dominating integrable bound, and dominated convergence passes the constant mean to the limit.
        </p>
      </Theorem>

      <Example title="gambler's ruin">
        <p>
          A fair walk starts at k and stops at 0 or N. T is finite and the stopped walk stays in [0, N], so{" "}
          <M>{"k = E[X_T] = N \\cdot P(\\text{reach } N)"}</M>, giving P(reach N) = k/N. Applying the same theorem to the
          martingale <M>{"X_n^2 - n"}</M> gives E[T] = k(N − k).
        </p>
      </Example>

      <Remark title="the puzzle resolved">
        <p>
          In the puzzle T is finite but not bounded, the stopped walk is not bounded below, and E[T] = ∞. None of the
          conditions holds. The rare walks that wander far below zero before returning carry exactly enough negative mass
          to keep every <M>{"E[X_{T \\wedge n}]"}</M> at 0.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "st",
      rung: "check",
      prompt: <p>Which of these is a stopping time for a random walk?</p>,
      answer: { kind: "choice", options: ["The first time the walk reaches 5", "The last time the walk is at 0", "The time of the walk’s overall maximum over [0, 100]", "One step before the walk first reaches 5"], correct: [0] },
    },
    {
      key: "bounded",
      rung: "check",
      prompt: <p>If T is a bounded stopping time and X a martingale, what is E[X at time T]?</p>,
      answer: { kind: "choice", options: ["E[X₀]", "0", "It cannot be determined", "E[T]"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, what is the exact mean of the stopped walk at time n, for any n?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "ruin",
      rung: "apply",
      prompt: <p>A fair walk starts at 3 and stops at 0 or 10. What is the probability it reaches 10?</p>,
      answer: { kind: "numeric", value: 0.3, tolerance: 0.001 },
    },
    {
      key: "time",
      rung: "apply",
      prompt: <p>For the same walk, what is the expected stopping time E[T]?</p>,
      answer: { kind: "numeric", value: 21, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Use optional stopping to show that a fair walk from k, stopped at 0 or N, reaches N with probability k/N.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes T is almost surely finite and the stopped walk is bounded between 0 and N.",
          "Applies optional stopping to get E[X at time T] = k.",
          "Writes E[X at time T] = N·P(reach N) and solves for P(reach N) = k/N.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Use the martingale Sₙ² − n to show that E[T] = k(N − k) for the walk in the previous question.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Justifies optional stopping, for example via E[T] finite and bounded increments, or by stopping at T ∧ n and letting n grow.",
          "Gets E[(S at time T)²] − E[T] = k², with E[(S at time T)²] = N²·(k/N) = Nk, so E[T] = Nk − k².",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        A bounded martingale cannot keep oscillating for ever without someone profiting from the oscillation. That
        observation, made precise by counting upcrossings, proves that martingales converge.
      </p>
      <p>Next, martingale convergence.</p>
    </>
  ),
};
