import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { SymbolicCodingViz } from "@/components/viz/SymbolicCodingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.2.4",
  minutes: 90,
  links: {
    revisits: ["m36.2.3", "m36.1.3", "m6.4.4"],
    foreshadows: ["m36.3.1", "m36.3.3", "m36.5.1"],
  },

  puzzle: (
    <>
      <p>
        The doubling map scrambles the interval, yet written in binary it does something trivial: it deletes the first
        digit. Which other systems become this simple once each point is replaced by a record of where its orbit goes?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and a point, and watch the interval of points sharing its first n symbols shrink.</p>
      <SymbolicCodingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="shift spaces">
        <p>
          For a finite alphabet A, a <strong>shift space</strong> is a closed subset X of <M>{"A^{\\mathbb{Z}}"}</M> (or{" "}
          <M>{"A^{\\mathbb{N}}"}</M>) with <M>{"\\sigma(X) = X"}</M>. Equivalently, X is the set of sequences avoiding some
          list of forbidden words. It is of <strong>finite type</strong> if a finite list suffices, and{" "}
          <strong>sofic</strong> if it is the image of a shift of finite type under a sliding block code.
        </p>
      </Definition>

      <Theorem title="Curtis, Hedlund and Lyndon (1969)">
        <p>
          A map φ between shift spaces is continuous and commutes with the shift exactly when it is a{" "}
          <strong>sliding block code</strong>: for some m, the symbol <M>{"\\varphi(x)_i"}</M> depends only on{" "}
          <M>{"x_{i-m}, \\dots, x_{i+m}"}</M>.
        </p>
      </Theorem>

      <Definition title="coding by a partition">
        <p>
          Given a map T and a partition of the space into pieces <M>{"P_0, \\dots, P_{k-1}"}</M>, the{" "}
          <strong>itinerary</strong> of x is the sequence of indices of the pieces containing <M>{"x, Tx, T^2x, \\dots"}</M>.
          If the pieces of the refined partitions shrink to points, the itinerary determines x, and T becomes the shift
          on the set of itineraries, up to a small set of boundary points.
        </p>
      </Definition>

      <Example title="examples">
        <p>
          The doubling map and the tent map are each coded by the full one-sided 2-shift; the logistic map with r = 4 is
          conjugate to the tent map. The even shift, in which blocks of 1s between 0s have even length, is sofic but not of
          finite type. Smale&rsquo;s horseshoe is conjugate to the full two-sided 2-shift, and its invariant set is a
          Cantor set.
        </p>
      </Example>

      <Remark title="Markov partitions">
        <p>
          For hyperbolic toral automorphisms such as the cat map, Adler and Weiss found partitions into rectangles whose
          itineraries form a shift of finite type. Sinai and Bowen extended this to all hyperbolic systems. Questions about
          smooth chaos then become questions about matrices of 0s and 1s, such as the entropy log λ.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sbc",
      rung: "check",
      prompt: <p>What is a sliding block code?</p>,
      answer: { kind: "choice", options: ["A map in which each output symbol depends on a fixed window of input symbols around the same position", "A map that permutes the alphabet only", "Any bijection between shift spaces", "A map defined by a single forbidden word"], correct: [0] },
    },
    {
      key: "sofic",
      rung: "check",
      prompt: <p>What is a sofic shift?</p>,
      answer: { kind: "choice", options: ["The image of a shift of finite type under a sliding block code", "A shift with no forbidden words", "A shift with exactly one forbidden word", "A shift with entropy zero"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the doubling map and x = 0.30, how many of the first 10 symbols are 1?</p>,
      answer: { kind: "numeric", value: 5, tolerance: 0 },
    },
    {
      key: "cyl",
      rung: "apply",
      prompt: <p>For the doubling map, what is the length of the interval of points sharing a given first 6 symbols?</p>,
      answer: { kind: "numeric", value: 0.015625, tolerance: 0.0001 },
    },
    {
      key: "code",
      rung: "apply",
      prompt: <p>The sliding block code that sends each pair of neighbouring symbols to their sum mod 2 is applied to the word 0110. What is the output word?</p>,
      answer: { kind: "choice", options: ["101", "011", "110", "000"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>On one-sided sequences of 0s and 1s, with d(x, y) = 2⁻ⁿ when n is the first position where x and y differ, show that the shift is continuous.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that if x and y agree in the first n + 1 positions, their shifts agree in the first n positions.",
          "Concludes d(σx, σy) ≤ 2 d(x, y).",
          "Deduces continuity, indeed a Lipschitz bound.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the doubling map is a factor of the one-sided full 2-shift, using π(x) = the sum of xᵢ / 2ⁱ⁺¹.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Shows π is continuous and onto [0, 1], by binary expansion.",
          "Checks π(σx) = 2π(x) mod 1, since shifting deletes the first binary digit.",
          "Concludes that π is a semiconjugacy. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        The coding works because the doubling map stretches every direction. The next chapter asks what a smooth map looks
        like near a fixed point where some directions stretch and others shrink.
      </p>
      <p>Next, hyperbolic fixed points.</p>
    </>
  ),
};
