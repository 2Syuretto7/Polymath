import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ConcaveMajorantViz } from "@/components/viz/ConcaveMajorantViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m37.5.2",
  minutes: 90,
  links: {
    revisits: ["m37.5.1", "m27.4.3", "m37.1.1"],
    foreshadows: ["m37.5.3", "m33.4.4", "m33.5.1"],
  },

  puzzle: (
    <>
      <p>
        A token does a fair random walk on the positions 0 to 20 and stops for good at either end. At any moment you may
        stop the game and collect a prize that depends on where the token is. When should you stop? Waiting can only
        help if the expected prize later is larger, but you cannot see the future.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Pick a payoff, move the starting point, and compare stopping now with the value of playing on.</p>
      <ConcaveMajorantViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the stopping problem">
        <p>
          For a Markov process X and a payoff g, the <strong>value</strong> is{" "}
          <M>{"v(x) = \\sup_\\tau \\mathbb{E}_x\\, g(X_\\tau)"}</M>, the supremum over stopping times τ, which may use only
          the past. A function w is <strong>excessive</strong> if <M>{"\\mathbb{E}_x w(X_t) \\le w(x)"}</M> for all t: on
          average it does not increase along the process.
        </p>
      </Definition>

      <Theorem title="the Snell envelope">
        <p>
          Under mild conditions, v is the smallest excessive function that is at least g. The time{" "}
          <M>{"\\tau^* = \\inf\\{t : v(X_t) = g(X_t)\\}"}</M>, the first entry into the stopping region, is optimal.
        </p>
      </Theorem>

      <Example title="a walk on an interval">
        <p>
          For the symmetric random walk, or Brownian motion, on an interval with absorbing ends, the excessive functions
          are the concave ones. So the value is the least concave majorant of g. For the payoff (x − 12)⁺ on {"{0, …, 20}"},
          the majorant is the line 0.4x, and the optimal rule is to wait until the token reaches an end.
        </p>
      </Example>

      <Remark title="free boundaries">
        <p>
          In continuous time the value solves a free-boundary problem: Lv = 0 where it is optimal to continue, v = g where
          it is optimal to stop, and often the smooth-fit condition v′ = g′ at the boundary. The American put is the classic
          example, with an exercise boundary below which the holder should exercise at once. In discrete finite horizon the
          value comes from backward induction, <M>{"v_n = \\max(g, Pv_{n+1})"}</M>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "snell",
      rung: "check",
      prompt: <p>What is the value function of an optimal stopping problem?</p>,
      answer: { kind: "choice", options: ["The smallest excessive function lying above the payoff", "The payoff itself", "The largest function below the payoff", "The expected payoff at a fixed time"], correct: [0] },
    },
    {
      key: "when",
      rung: "check",
      prompt: <p>When is it optimal to stop?</p>,
      answer: { kind: "choice", options: ["The first time the value equals the payoff", "Immediately, always", "Never", "At a fixed deterministic time"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the call payoff (x − 12)⁺ and start x = 10, what is the value?</p>,
      answer: { kind: "numeric", value: 4, tolerance: 0.001 },
    },
    {
      key: "two",
      rung: "apply",
      prompt: <p>A fair walk on 0 to 10 is absorbed at the ends. The payoff is 10 at position 10 and 0 everywhere else. What is the value from position 3?</p>,
      answer: { kind: "numeric", value: 3, tolerance: 0.001 },
    },
    {
      key: "back",
      rung: "apply",
      prompt: <p>With one step to go, how is the value at x computed?</p>,
      answer: { kind: "choice", options: ["As the larger of g(x) and the expected payoff after one more step", "As g(x) alone", "As the average of g over all states", "As the smaller of the two"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>For the walk on 0 to 20, show that the value v satisfies v(x) ≥ g(x) and v(x) ≥ ½(v(x − 1) + v(x + 1)) for interior x.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes stopping at once is allowed, so v(x) ≥ g(x).",
          "Notes one may take one step and then follow a nearly optimal strategy from the new position.",
          "Concludes v(x) is at least the average of v at the two neighbours, so v is concave.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>On all of the integers, with no absorbing ends and no discounting, what is the value of stopping a fair walk with payoff max(x, 0)?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes the walk is recurrent, so it reaches any level N with probability 1.",
          "Concludes the value is infinite, since waiting until level N gives N for every N.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Girsanov, martingale representation, Feynman–Kac and optimal stopping are exactly the tools needed to price and
        hedge financial contracts.
      </p>
      <p>Next, mathematical finance in outline.</p>
    </>
  ),
};
