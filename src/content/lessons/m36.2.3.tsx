import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { ItineraryCountViz } from "@/components/viz/ItineraryCountViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.2.3",
  minutes: 90,
  links: {
    revisits: ["m36.2.2", "m36.1.3", "m36.1.2"],
    foreshadows: ["m36.2.4", "m36.5.1", "m36.5.2"],
  },

  puzzle: (
    <>
      <p>
        Watch an orbit with a slightly blurry instrument that can only tell which of a few boxes the point is in. Under a
        rotation, after n steps you have learnt little more than at the start. Under the doubling map, each step reveals a
        new binary digit. Can this difference be measured by a single number, the same for any two systems that are
        really the same?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and a box size, and watch how fast the number of distinguishable orbit segments grows.</p>
      <ItineraryCountViz />
    </>
  ),

  theory: (
    <>
      <Definition title="separated sets (Bowen)">
        <p>
          Let T be a continuous map of a compact metric space. Put{" "}
          <M>{"d_n(x, y) = \\max_{0 \\le k < n} d(T^k x, T^k y)"}</M>. A set is <strong>(n, ε)-separated</strong> if any
          two of its points have <M>{"d_n \\ge \\varepsilon"}</M>: the instrument can tell their first n steps apart. Let{" "}
          <M>{"N(n, \\varepsilon)"}</M> be the largest size of such a set.
        </p>
      </Definition>

      <Definition title="topological entropy">
        <p>
          <M>{"h(T) = \\lim_{\\varepsilon \\to 0} \\limsup_{n \\to \\infty} \\frac1n \\log N(n, \\varepsilon)"}</M>. The
          original definition, by Adler, Konheim and McAndrew in 1965, uses open covers and gives the same number.
        </p>
      </Definition>

      <Theorem title="properties">
        <p>
          Entropy is invariant under topological conjugacy, and <M>{"h(T^k) = k\\, h(T)"}</M>. Isometries, such as
          rotations, have entropy 0. The map <M>{"x \\mapsto mx \\bmod 1"}</M> has entropy log |m|, and a shift of finite
          type has entropy log λ, with λ the largest eigenvalue of its matrix.
        </p>
      </Theorem>

      <Example title="interval maps">
        <p>
          For a piecewise monotone map of an interval, the entropy is the growth rate of the number of monotone pieces of{" "}
          <M>{"T^n"}</M> (Misiurewicz and Szlenk). The logistic map with r = 4 has <M>{"2^n"}</M> pieces, so entropy log 2;
          for r below the Feigenbaum point the number grows polynomially and the entropy is 0.
        </p>
      </Example>

      <Remark title="what entropy detects">
        <p>
          Positive entropy is one common definition of chaos: the system generates information at an exponential rate.
          Entropy does not detect everything: an irrational rotation and a Thue–Morse subshift both have entropy 0, yet
          they are very different.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "sep",
      rung: "check",
      prompt: <p>When are two points (n, ε)-separated?</p>,
      answer: { kind: "choice", options: ["At some time before n their orbits are at least ε apart", "They are at least ε apart at time 0", "They are at least nε apart", "Their orbits never meet"], correct: [0] },
    },
    {
      key: "inv",
      rung: "check",
      prompt: <p>What does conjugacy invariance of entropy mean?</p>,
      answer: { kind: "choice", options: ["Topologically conjugate systems have the same entropy", "Entropy is never negative", "Entropy does not depend on ε", "Every system has entropy log 2"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, with the doubling map and 8 boxes, what is the slope at the last n, to three decimal places?</p>,
      answer: { kind: "numeric", value: 0.693, tolerance: 0.01 },
    },
    {
      key: "three",
      rung: "apply",
      prompt: <p>What is the topological entropy of x ↦ 3x mod 1, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.099, tolerance: 0.002 },
    },
    {
      key: "sq",
      rung: "apply",
      prompt: <p>What is the entropy of the square of the doubling map, x ↦ 4x mod 1, to three decimal places?</p>,
      answer: { kind: "numeric", value: 1.386, tolerance: 0.002 },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that an isometry of a compact metric space has topological entropy 0.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that d(Tᵏx, Tᵏy) = d(x, y), so the n-step distance equals d for every n.",
          "Concludes N(n, ε) = N(1, ε), which does not depend on n and is finite by compactness.",
          "Deduces that (1/n) log N(n, ε) → 0 for each ε, so h = 0.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Show that the doubling map has entropy at least log 2, using the points j/2ⁿ.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Observes that two of the points j/2ⁿ differ in some binary digit among the first n, so at some step before n their images are at least about ½ apart.",
          "Concludes N(n, ε) ≥ 2ⁿ for small ε, so the growth rate is at least log 2.",
          "Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Shifts of finite type kept turning up: they model the doubling map, carry computable entropy and code other
        systems. The next lesson studies them for their own sake.
      </p>
      <p>Next, symbolic dynamics.</p>
    </>
  ),
};
