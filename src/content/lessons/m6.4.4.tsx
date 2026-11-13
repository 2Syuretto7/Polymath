import { M, MD } from "@/components/Math";
import { Definition, Example, Proof, Remark, Theorem } from "@/components/lesson/Blocks";
import { CantorViz } from "@/components/viz/CantorViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m6.4.4",
  minutes: 80,
  links: {
    revisits: ["m6.4.3", "m6.1.3", "m6.4.2"],
    foreshadows: ["m6.7.4", "m22.1.4", "m12.3.3"],
  },

  puzzle: (
    <>
      <p>
        Start with <M>{"[0, 1]"}</M>. Remove the open middle third, leaving two intervals. Remove the middle third of each,
        leaving four. Keep going forever. The lengths removed add up to{" "}
        <M>{"\\tfrac13 + \\tfrac29 + \\tfrac4{27} + \\cdots = 1"}</M>, the whole length of the interval. Surely almost
        nothing is left: perhaps just the endpoints of the removed intervals, a countable set. In fact what remains has as many
        points as the whole interval.
      </p>
    </>
  ),

  intuition: (
    <>
      <p>
        Step through the stages, and test a few points by writing them in base 3.
      </p>
      <CantorViz />
    </>
  ),

  theory: (
    <>
      <Definition title="the Cantor set">
        <p>
          Let <M>{"C_0 = [0, 1]"}</M>, and form <M>{"C_{n+1}"}</M> by removing the open middle third of each of the{" "}
          <M>{"2^n"}</M> closed intervals that make up <M>{"C_n"}</M>. The <strong>Cantor set</strong> is
        </p>
        <MD>{"C = \\bigcap_{n \\ge 0} C_n."}</MD>
        <p>
          As an intersection of closed sets it is closed, and it is bounded, so it is compact. It is non-empty: it contains 0,
          1 and every endpoint, such as <M>{"\\tfrac13"}</M> and <M>{"\\tfrac29"}</M>, since endpoints are never removed.
        </p>
      </Definition>

      <Theorem title="the ternary description">
        <p>
          A point of <M>{"[0, 1]"}</M> lies in <M>{"C"}</M> if and only if it has a base-3 expansion{" "}
          <M>{"0.d_1 d_2 d_3 \\ldots"}</M> using only the digits 0 and 2.
        </p>
      </Theorem>

      <Proof>
        <p>
          The first stage removes <M>{"(\\tfrac13, \\tfrac23)"}</M>, which is exactly the set of points whose first ternary
          digit must be 1. The left third keeps <M>{"d_1 = 0"}</M> and the right third <M>{"d_1 = 2"}</M>; the endpoint{" "}
          <M>{"\\tfrac13 = 0.1000\\ldots_3"}</M> can also be written <M>{"0.0222\\ldots_3"}</M>. Each later stage does the
          same for the next digit within each remaining interval. So a point survives all stages exactly when its digits can
          all be chosen from 0 and 2.
        </p>
      </Proof>

      <Example title="size zero, yet uncountable">
        <p>
          The total length of <M>{"C_n"}</M> is <M>{"(2/3)^n \\to 0"}</M>, so <M>{"C"}</M> has length, or measure, zero. But
          the map sending <M>{"0.d_1 d_2 \\ldots_3"}</M> with each <M>{"d_i \\in \\{0, 2\\}"}</M> to the binary number{" "}
          <M>{"0.(d_1/2)(d_2/2)\\ldots_2"}</M> takes <M>{"C"}</M> onto all of <M>{"[0, 1]"}</M>. So <M>{"C"}</M> is
          uncountable. For example <M>{"\\tfrac14 = 0.0202\\ldots_3"}</M> is in <M>{"C"}</M>, though it is never an endpoint.
        </p>
      </Example>

      <Remark title="a catalogue of strangeness">
        <p>
          The Cantor set is perfect: every point is a limit of endpoints. It is <strong>totally disconnected</strong>: between
          any two of its points some removed interval lies, so its only connected subsets are single points. It is
          self-similar, made of two copies of itself scaled by <M>{"\\tfrac13"}</M>, which gives it fractal dimension{" "}
          <M>{"\\log 2 / \\log 3 \\approx 0.63"}</M>. It is the standard example in measure theory of an uncountable null set,
          and in integration theory of a set of discontinuities that does not stop a function being integrable.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "len",
      rung: "check",
      prompt: (
        <p>
          What is the total length of <M>{"C_2"}</M>, the set left after two stages? Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.4444, tolerance: 0.001 },
    },
    {
      key: "count",
      rung: "check",
      prompt: (
        <p>
          How many closed intervals make up <M>{"C_5"}</M>?
        </p>
      ),
      answer: { kind: "numeric", value: 32 },
    },
    {
      key: "in",
      rung: "apply",
      prompt: <p>Which of these points lie in the Cantor set? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["1/4", "1/2", "2/3", "3/4", "5/9"],
        correct: [0, 2, 3],
      },
    },
    {
      key: "map",
      rung: "apply",
      prompt: (
        <p>
          The point <M>{"0.2020\\ldots_3 = \\tfrac34"}</M> lies in <M>{"C"}</M>. Under the map that halves each digit and reads
          the result in base 2, what number in <M>{"[0, 1]"}</M> does it go to? Give a decimal.
        </p>
      ),
      answer: { kind: "numeric", value: 0.6667, tolerance: 0.001 },
    },
    {
      key: "props",
      rung: "apply",
      prompt: <p>Which of these properties does the Cantor set have? Choose all that apply.</p>,
      answer: {
        kind: "choice",
        options: ["Compact", "Countable", "Perfect", "Contains an interval", "Total length zero"],
        correct: [0, 2, 4],
      },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Prove that the Cantor set contains no interval of positive length. A few lines will do.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Supposes an interval of length L > 0 lies in C.",
          "Notes that C_n is made of intervals of length 3^(−n), so for 3^(−n) < L the interval cannot fit inside any one of them.",
          "Concludes it must meet a removed gap, so it is not inside C.",
        ],
      },
    },
    {
      key: "dim",
      rung: "stretch",
      prompt: (
        <p>
          A self-similar set made of <M>{"N"}</M> copies of itself, each scaled by <M>{"r"}</M>, has dimension{" "}
          <M>{"\\log N / \\log(1/r)"}</M>. Remove the middle fifth instead of the middle third at each stage. What is the
          dimension of the resulting set, and why?
        </p>
      ),
      answer: {
        kind: "written",
        rubric: [
          "Notes each interval is replaced by two copies, each of length two fifths of the original.",
          "Applies the formula: log 2 / log(5/2).",
          "Gives the value, about 0.76, and notes it is larger than for the usual Cantor set since less is removed.",
        ],
      },
    },
  ],

  teachBack:
    "Explain to a friend how the Cantor set is built, why its points are those with base-3 digits 0 and 2, why it has length zero and yet is uncountable, and what other strange properties it has.",

  glimpse: (
    <p>
      The Cantor set returns in Lebesgue&rsquo;s criterion for integrability, as a set of measure zero, and in measure theory
      as the first example of an uncountable null set. Its cousin, the Cantor function, will give a continuous increasing
      function whose derivative is zero almost everywhere.
    </p>
  ),
};
