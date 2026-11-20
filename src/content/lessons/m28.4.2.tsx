import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { LogContinuationViz } from "@/components/viz/LogContinuationViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m28.4.2",
  minutes: 90,
  links: {
    revisits: ["m28.4.1", "m13.5.4", "m13.1.4"],
    foreshadows: ["m28.4.3", "m28.4.4", "m29.5.1"],
  },

  puzzle: (
    <>
      <p>
        The power series of log z about 1 converges only in the disc |z − 1| &lt; 1. Re-expand it about a point near the
        edge, and the new series reaches further. Carry on round the origin, and you return to 1 with a different value.
        Which value is the right one?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a loop and a function, and continue it once or more round the loop.</p>
      <LogContinuationViz />
    </>
  ),

  theory: (
    <>
      <Definition title="continuation along a path">
        <p>
          A <strong>function element</strong> is a pair (f, D) with D a disc and f holomorphic on D. Two elements are{" "}
          <strong>direct continuations</strong> if their discs meet and the functions agree on the overlap. A continuation
          along a path γ: [0, 1] → ℂ is a family of elements <M>{"(f_t, D_t)"}</M> with <M>{"\\gamma(t) \\in D_t"}</M>,
          such that nearby elements are direct continuations. By the identity theorem it is unique when it exists.
        </p>
      </Definition>

      <Theorem title="the monodromy theorem">
        <p>
          Suppose an element can be continued along every path in a region G. If two paths in G with the same ends are
          homotopic in G with ends fixed, the continuations along them agree at the end. In particular, if G is simply
          connected, the element extends to a single-valued holomorphic function on all of G.
        </p>
      </Theorem>

      <Example title="log and square root">
        <p>
          Continuing the principal log once round a loop enclosing 0 adds 2πi; continuing √z changes its sign. On the slit
          plane, which is simply connected, both have single-valued branches, as monodromy predicts. Round a loop not
          enclosing 0, which is contractible in <M>{"\\mathbb{C} \\setminus \\{0\\}"}</M>, nothing changes.
        </p>
      </Example>

      <Definition title="the Riemann surface of a function">
        <p>
          Collect all function elements obtained from a given one by continuation along paths, identifying elements that
          agree near a common centre. These <strong>germs</strong> form a Riemann surface spread over ℂ, on which the
          continued function is single-valued. For log z it is a copy of ℂ, mapped to <M>{"\\mathbb{C}\\setminus\\{0\\}"}</M>{" "}
          by exp; for √z it is a two-sheeted surface over <M>{"\\mathbb{C}\\setminus\\{0\\}"}</M>.
        </p>
      </Definition>

      <Remark title="natural boundaries">
        <p>
          Some functions cannot be continued at all. The series <M>{"\\sum_n z^{2^n}"}</M> converges in the unit disc but
          tends to infinity along every radius ending at a root of unity of order a power of 2. These points are dense, so
          the unit circle is a <strong>natural boundary</strong>.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "mono",
      rung: "check",
      prompt: <p>What does the monodromy theorem say?</p>,
      answer: { kind: "choice", options: ["Continuations along homotopic paths with fixed ends agree at the end", "Every function can be continued to the whole plane", "Continuation is never unique", "Continuation along a loop always returns the same value"], correct: [0] },
    },
    {
      key: "log",
      rung: "check",
      prompt: <p>The principal log is continued once anticlockwise round a circle enclosing 0. How does it change?</p>,
      answer: { kind: "choice", options: ["It increases by 2πi", "It is unchanged", "It changes sign", "It increases by π"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose log z, centre c = 0.5 and 2 turns. What is the change in the imaginary part, to three decimal places?</p>,
      answer: { kind: "numeric", value: 12.566, tolerance: 0.01 },
    },
    {
      key: "far",
      rung: "apply",
      prompt: <p>What is the change in log z after one turn round the circle |z − 2| = 1?</p>,
      answer: { kind: "numeric", value: 0, tolerance: 0 },
    },
    {
      key: "sqrt",
      rung: "apply",
      prompt: <p>√z is continued twice round a loop enclosing 0. What does it return as?</p>,
      answer: { kind: "choice", options: ["√z, unchanged", "−√z", "i√z", "It cannot be continued"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a continuation along a path, if it exists, is unique.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes two continuations along the same path that start from the same element.",
          "Shows the set of t at which they agree near γ(t) is open and closed in [0, 1], using the identity theorem on overlapping discs.",
          "Uses that it contains 0 and [0, 1] is connected to conclude they agree at every t.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Why can the sum of z to the power 2ⁿ not be continued beyond the unit circle?</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that f(z) = z + f(z²), so f grows without bound along the radius to 1, then to −1, and to each 2ᵏ-th root of unity.",
          "Notes that these points are dense on the unit circle.",
          "Concludes that no arc of the circle can lie in a disc of continuation. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The surface of √z lies over the punctured plane two to one, and every point below has a small neighbourhood whose
        preimage is two disjoint copies. Such maps are covering maps.
      </p>
      <p>Next, covering surfaces.</p>
    </>
  ),
};
