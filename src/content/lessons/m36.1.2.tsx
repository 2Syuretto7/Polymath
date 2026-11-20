import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { DoublingMapViz } from "@/components/viz/DoublingMapViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.1.2",
  minutes: 90,
  links: {
    revisits: ["m36.1.1", "m22.1.4", "m12.2.3"],
    foreshadows: ["m36.1.3", "m36.2.3", "m36.5.2"],
  },

  puzzle: (
    <>
      <p>
        Take a number between 0 and 1, double it, and drop the whole-number part. Repeat. The rule could not be simpler or
        more deterministic. Yet two starting numbers that agree to six decimal places give completely unrelated answers
        within twenty steps. How can a rule this simple be so unpredictable?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Start two orbits a tiny distance apart, and step through them to see when they separate.</p>
      <DoublingMapViz />
    </>
  ),

  theory: (
    <>
      <Definition title="expanding maps of the circle">
        <p>
          For a whole number m with |m| ≥ 2, the map <M>{"E_m(x) = mx \\bmod 1"}</M> on{" "}
          <M>{"\\mathbb T = \\mathbb R/\\mathbb Z"}</M> is <strong>expanding</strong>: it multiplies the distance between
          any two sufficiently close points by |m|. The case m = 2 is the <strong>doubling map</strong>.
        </p>
      </Definition>

      <Theorem title="binary digits and the shift">
        <p>
          If <M>{"x = 0.b_1 b_2 b_3 \\ldots"}</M> in binary, then <M>{"E_2(x) = 0.b_2 b_3 b_4 \\ldots"}</M>. So the doubling
          map is a copy of the <strong>shift</strong> on sequences of 0s and 1s, apart from the countably many points with
          two expansions. Every question about orbits becomes a question about digit sequences.
        </p>
      </Theorem>

      <Theorem title="properties of the doubling map">
        <p>
          The points of period dividing n are the <M>{"j/(2^n - 1)"}</M>, so there are <M>{"2^n - 1"}</M> of them, and
          periodic points are dense. Some orbits are dense: list every finite binary word, one after another, as the digits
          of x. Nearby orbits separate at rate <M>{"2^n"}</M>: <strong>sensitive dependence on initial conditions</strong>.
          And <M>{"E_2"}</M> preserves Lebesgue measure: the preimage of an arc is two arcs of half its length.
        </p>
      </Theorem>

      <Example title="rational starting points">
        <p>
          A rational x = p/q with q odd is periodic, and one with q even is eventually periodic. For instance 1/3 = 0.0101…
          in binary goes to 2/3 = 0.1010… and back. Irrational starting points are never eventually periodic.
        </p>
      </Example>

      <Remark title="computers and chaos">
        <p>
          A computer stores x with 53 binary digits. Each doubling discards one, so a floating-point simulation of{" "}
          <M>{"E_2"}</M> reaches 0 after about 53 steps, whatever the start. The visualisation avoids this by working with
          exact fractions whose denominator is odd.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "bin",
      rung: "check",
      prompt: <p>What does the doubling map do to the binary digits of x?</p>,
      answer: { kind: "choice", options: ["Deletes the first digit and shifts the rest left", "Appends a 0 at the end", "Reverses them", "Doubles each digit"], correct: [0] },
    },
    {
      key: "meas",
      rung: "check",
      prompt: <p>Why does the doubling map preserve Lebesgue measure?</p>,
      answer: { kind: "choice", options: ["The preimage of an arc is two arcs of half its length", "It is an isometry", "It is a bijection", "It has no periodic points"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with a starting gap of 10⁻⁶, at which step do the orbits first differ by more than 0.1?</p>,
      answer: { kind: "numeric", value: 17, tolerance: 0 },
    },
    {
      key: "per2",
      rung: "apply",
      prompt: <p>How many points x satisfy E₂³(x) = x, that is, have period dividing 3 under the doubling map?</p>,
      answer: { kind: "numeric", value: 7, tolerance: 0 },
    },
    {
      key: "per3",
      rung: "apply",
      prompt: <p>How many points have period dividing 2 under the tripling map x ↦ 3x mod 1?</p>,
      answer: { kind: "numeric", value: 8, tolerance: 0 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that the points x with 2ⁿx ≡ x (mod 1) are exactly j/(2ⁿ − 1) for j = 0, 1, …, 2ⁿ − 2.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Rewrites the condition as (2ⁿ − 1)x being an integer j.",
          "Uses 0 ≤ x < 1 to get 0 ≤ j ≤ 2ⁿ − 2.",
          "Concludes x = j/(2ⁿ − 1), and that each such x works.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Describe the binary digits of a point whose orbit under the doubling map is dense, and explain why it works.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Concatenates every finite binary word, for example 0 1 00 01 10 11 000 ….",
          "Notes that any arc contains all x beginning with some word, and the orbit reaches a point starting with that word.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The doubling map turned out to be the shift on sequences of digits in disguise. Shifts on sequences are a whole
        family of systems, and many others can be coded as them.
      </p>
      <p>Next, shifts.</p>
    </>
  ),
};
