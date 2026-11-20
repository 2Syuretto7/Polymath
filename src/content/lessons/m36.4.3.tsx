import { Definition, Example, Remark, Theorem } from "@/components/lesson/Blocks";
import { M } from "@/components/Math";
import { MixingViz } from "@/components/viz/MixingViz";
import type { LessonContent } from "@/lib/types";

export const lesson: LessonContent = {
  id: "m36.4.3",
  minutes: 90,
  links: {
    revisits: ["m36.4.2", "m36.2.1", "m36.1.2"],
    foreshadows: ["m36.5.1", "m36.5.2", "m36.5.3"],
  },

  puzzle: (
    <>
      <p>
        Stir a drop of ink into a glass of water and, after a while, every spoonful contains the same share of ink.
        Rotate the glass instead and the drop simply moves round, visiting every part of the glass in turn but never
        spreading. Both motions visit everything. What distinguishes them?
      </p>
    </>
  ),

  intuition: (
    <>
      <p>Choose a map and a set A, and compare μ(T⁻ⁿA ∩ A) with μ(A)² as n grows.</p>
      <MixingViz />
    </>
  ),

  theory: (
    <>
      <Definition title="mixing">
        <p>
          A measure-preserving T is <strong>mixing</strong> if{" "}
          <M>{"\\mu(T^{-n}A \\cap B) \\to \\mu(A)\\mu(B)"}</M> for all measurable A and B. It is{" "}
          <strong>weakly mixing</strong> if this holds after averaging the absolute differences over n.
        </p>
      </Definition>

      <Theorem title="ergodicity in the same language">
        <p>
          T is ergodic exactly when <M>{"\\frac1n \\sum_{k < n} \\mu(T^{-k}A \\cap B) \\to \\mu(A)\\mu(B)"}</M> for all A and
          B: the correlations converge on average. So mixing implies weak mixing, which implies ergodicity.
        </p>
      </Theorem>

      <Example title="examples">
        <p>
          The doubling map is mixing: for dyadic intervals, <M>{"T^{-n}A"}</M> spreads into <M>{"2^n"}</M> equally spaced
          pieces, and the correlation with B is exactly <M>{"\\mu(A)\\mu(B)"}</M> once n is large. Shifts with Bernoulli
          measures and the cat map are mixing too. An irrational rotation is ergodic but not weakly mixing: it moves sets
          rigidly, so the correlations return close to <M>{"\\mu(A)"}</M> infinitely often.
        </p>
      </Example>

      <Remark title="spectral view">
        <p>
          Weak mixing is equivalent to the Koopman operator <M>{"f \\mapsto f \\circ T"}</M> having no eigenfunctions other
          than constants. Rotations have the eigenfunctions <M>{"e^{2\\pi i k x}"}</M>, which is exactly why they fail to
          mix. Correlations of smooth functions decaying exponentially fast is a quantitative form of chaos.
        </p>
      </Remark>
    </>
  ),

  practice: [
    {
      key: "def",
      rung: "check",
      prompt: <p>When is T mixing?</p>,
      answer: { kind: "choice", options: ["When μ(T⁻ⁿA ∩ B) → μ(A)μ(B) for all A and B", "When every orbit is dense", "When μ(T⁻¹A) = μ(A)", "When T has no fixed points"], correct: [0] },
    },
    {
      key: "rot",
      rung: "check",
      prompt: <p>Which statement about an irrational rotation is true?</p>,
      answer: { kind: "choice", options: ["It is ergodic but not mixing", "It is mixing but not ergodic", "It is both ergodic and mixing", "It is neither"], correct: [0] },
    },
    {
      key: "viz",
      rung: "apply",
      prompt: <p>In the visualisation, choose the doubling map and A = [0, 0.30). What is μ(A)²?</p>,
      answer: { kind: "numeric", value: 0.09, tolerance: 0.0005 },
    },
    {
      key: "half",
      rung: "apply",
      prompt: <p>For the doubling map and A = [0, ½), what is μ(T⁻¹A ∩ A)?</p>,
      answer: { kind: "numeric", value: 0.25, tolerance: 0.001 },
    },
    {
      key: "chain",
      rung: "apply",
      prompt: <p>Which chain of implications holds?</p>,
      answer: { kind: "choice", options: ["Mixing ⇒ weak mixing ⇒ ergodic", "Ergodic ⇒ weak mixing ⇒ mixing", "Weak mixing ⇒ mixing ⇒ ergodic", "Ergodic ⇒ mixing ⇒ weak mixing"], correct: [0] },
    },
    {
      key: "prove",
      rung: "prove",
      prompt: <p>Show that a mixing transformation is ergodic.</p>,
      answer: {
        kind: "written",
        rubric: [
          "Takes an invariant set A, so T⁻ⁿA = A for every n.",
          "Applies mixing with B = A: μ(A) = μ(T⁻ⁿA ∩ A) → μ(A)².",
          "Concludes μ(A) = μ(A)², so μ(A) is 0 or 1.",
        ],
      },
    },
    {
      key: "stretch",
      rung: "stretch",
      prompt: <p>Explain why an irrational rotation is not mixing, using A = B = [0, ½).</p>,
      answer: {
        kind: "written",
        rubric: [
          "Notes that T⁻ⁿA is A rotated by −nα, and that nα comes arbitrarily close to 0 mod 1 infinitely often.",
          "Deduces that μ(T⁻ⁿA ∩ A) comes arbitrarily close to ½ infinitely often.",
          "Concludes it cannot converge to ¼. Any reasonable answer earns full credit.",
        ],
      },
    },
  ],

  glimpse: (
    <>
      <p>
        Mixing says the system forgets. How fast does it produce new information? A measure-theoretic version of entropy
        answers this, and Kolmogorov used it to tell apart systems that look alike in every other way.
      </p>
      <p>Next, measure-theoretic entropy.</p>
    </>
  ),
};
